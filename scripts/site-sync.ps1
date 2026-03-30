[CmdletBinding()]
param(
  [string]$Message = "site: update",
  [switch]$CheckOnly,
  [switch]$NoPush
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Invoke-External {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Label,

    [Parameter(Mandatory = $true)]
    [string]$FilePath,

    [string[]]$ArgumentList = @()
  )

  Write-Host ""
  Write-Host "==> $Label" -ForegroundColor Cyan
  & $FilePath @ArgumentList

  if ($LASTEXITCODE -ne 0) {
    throw "$Label failed with exit code $LASTEXITCODE."
  }
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Push-Location $repoRoot

try {
  $branch = (git branch --show-current).Trim()

  if (-not $branch) {
    throw "Could not determine the current git branch."
  }

  Write-Host "Repository: $repoRoot"
  Write-Host "Branch: $branch"

  Invoke-External -Label "Pull latest changes" -FilePath "git" -ArgumentList @(
    "pull",
    "--rebase",
    "--autostash",
    "origin",
    $branch
  )

  Invoke-External -Label "Run lint" -FilePath "npm" -ArgumentList @("run", "lint")
  Invoke-External -Label "Run build" -FilePath "npm" -ArgumentList @("run", "build")

  if ($CheckOnly) {
    Write-Host ""
    Write-Host "Stopping after pull, lint, and build because -CheckOnly was provided." -ForegroundColor Yellow
    return
  }

  Invoke-External -Label "Stage changes" -FilePath "git" -ArgumentList @("add", "-A")

  Write-Host ""
  Write-Host "==> Check for staged changes" -ForegroundColor Cyan
  & git diff --cached --quiet

  switch ($LASTEXITCODE) {
    0 {
      Write-Host "No staged changes to commit."
    }
    1 {
      Invoke-External -Label "Commit changes" -FilePath "git" -ArgumentList @(
        "commit",
        "-m",
        $Message
      )
    }
    default {
      throw "Checking staged changes failed with exit code $LASTEXITCODE."
    }
  }

  if ($NoPush) {
    Write-Host ""
    Write-Host "Skipping push because -NoPush was provided." -ForegroundColor Yellow
    return
  }

  Invoke-External -Label "Push branch" -FilePath "git" -ArgumentList @("push", "origin", $branch)
}
finally {
  Pop-Location
}
