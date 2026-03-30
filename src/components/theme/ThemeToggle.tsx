"use client";

import * as React from "react";
import { IconMoon, IconSun, IconTerminal2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark" | "hacker";

const STORAGE_KEY = "nextgridit-theme";
const HACKER_UNLOCK_KEY = "nextgridit-hacker-unlocked";
const HACKER_SEQUENCE = "hacker";

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme === "light" ? "light" : "dark";
  window.localStorage.setItem(STORAGE_KEY, theme);
}

function shouldIgnoreKeyTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  return (
    target.isContentEditable ||
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select"
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<ThemeMode>("light");
  const [hackerUnlocked, setHackerUnlocked] = React.useState(false);

  React.useEffect(() => {
    const rootTheme = document.documentElement.dataset.theme;
    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const unlocked = window.localStorage.getItem(HACKER_UNLOCK_KEY) === "true";

    setHackerUnlocked(unlocked);
    setTheme(
      rootTheme === "light" || rootTheme === "dark" || rootTheme === "hacker"
        ? rootTheme
        : savedTheme ?? "light"
    );

    let sequence = "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey || shouldIgnoreKeyTarget(event.target)) {
        return;
      }

      if (event.key.length !== 1) {
        return;
      }

      sequence = `${sequence}${event.key.toLowerCase()}`.slice(-HACKER_SEQUENCE.length);

      if (sequence === HACKER_SEQUENCE) {
        window.localStorage.setItem(HACKER_UNLOCK_KEY, "true");
        setHackerUnlocked(true);
        setTheme("hacker");
        applyTheme("hacker");
        sequence = "";
      }
    };

    const handleUnlock = () => {
      window.localStorage.setItem(HACKER_UNLOCK_KEY, "true");
      setHackerUnlocked(true);
      setTheme("hacker");
      applyTheme("hacker");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("nextgridit:hacker-unlocked", handleUnlock as EventListener);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("nextgridit:hacker-unlocked", handleUnlock as EventListener);
    };
  }, []);

  function setMode(nextTheme: ThemeMode) {
    if (nextTheme === "hacker" && !hackerUnlocked) {
      return;
    }

    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  const options: Array<{ mode: ThemeMode; label: string; icon: React.ReactNode }> = [
    { mode: "light", label: "Light", icon: <IconSun className="h-4 w-4" /> },
    { mode: "dark", label: "Dark", icon: <IconMoon className="h-4 w-4" /> },
  ];

  if (hackerUnlocked) {
    options.push({ mode: "hacker", label: "Hacker", icon: <IconTerminal2 className="h-4 w-4" /> });
  }

  return (
    <div className={cn("theme-toggle inline-flex items-center rounded-full p-1", className)}>
      {options.map((option) => (
        <button
          key={option.mode}
          type="button"
          onClick={() => setMode(option.mode)}
          aria-pressed={theme === option.mode}
          className={cn(
            "theme-toggle-button inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-mono uppercase tracking-[0.2em]",
            theme === option.mode && "theme-toggle-button-active"
          )}
        >
          {option.icon}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
