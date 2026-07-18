---
title: MSP Transition Checklist
summary: A practical checklist for businesses preparing to leave an MSP, recover ownership, or verify that a former provider no longer has access.
publishedAt: 2026-06-16
tags:
  - MSP
  - vendor independence
  - checklist
eyebrow: Policy Starter Kit
pdf: /policy-starter-kit/msp-transition-checklist.pdf
description: This checklist helps a business prepare to transition away from a managed service provider, recover ownership of systems, and verify that the former provider no longer has access after the transition.
last_updated: 2026-06-19
---
## Purpose

This checklist helps a business prepare to transition away from a managed service provider, recover ownership of systems, and verify that the former provider no longer has access after the transition.

The goal is to leave cleanly without losing access to critical systems.

## Before notifying the MSP

Do not begin by canceling the contract. First, understand what the MSP controls.

Gather:

- Current contract and termination terms
- List of supported systems
- Current invoices
- Domain registrar access
- DNS provider access
- Microsoft 365 or Google Workspace access
- Firewall, switch, and wireless controller access
- Backup system access
- RMM or remote management tool details
- Antivirus or endpoint protection portal access
- Phone system details
- Camera or NVR system access
- Website hosting and CMS access
- ISP and circuit account information
- Vendor portal logins
- Documentation and network diagrams

## Ownership questions

For each system, ask:

- Who owns the account?
- Who pays the bill?
- Who has administrator access?
- Is the recovery email controlled by the business?
- Is MFA tied to a company-controlled device or vendor employee?
- Can the business access the system without the MSP?
- Is documentation current?
- Are backups recoverable without the MSP?
- Are licenses transferable?

## Critical systems inventory

Create an inventory for:

- Email and collaboration
- Identity and directory services
- Domain names
- DNS
- Website hosting
- Internet circuits
- Firewalls
- Switches
- Wireless access points
- Servers
- Workstations
- Backups
- Endpoint protection
- Remote management agents
- Line-of-business applications
- Accounting systems
- Phone system
- Cameras and access control
- Cloud services
- Vendor portals

## New support plan

Before the cutover, decide who will support the environment next:

- Internal IT hire
- New MSP
- Project-based consultant
- Hybrid model
- Owner-managed systems with outside escalation

Make sure the new support path has enough documentation and access before the MSP leaves.

## Cutover plan

Build a written cutover plan that includes:

- Transition date
- Communication plan
- Responsible people
- Systems in scope
- Access changes
- Password rotation schedule
- Backup validation
- Remote access removal
- Vendor contact updates
- Rollback considerations
- After-hours support plan

## Credential rotation

During the transition, rotate or revoke:

- Global administrator passwords
- Domain administrator passwords
- Local administrator passwords
- Firewall admin passwords
- Switch and wireless controller passwords
- Backup admin passwords
- RMM accounts
- Vendor portal accounts
- Shared passwords
- Service accounts known to the MSP
- API keys and tokens where needed

## Access removal

Remove:

- MSP user accounts
- MSP administrator roles
- MSP MFA methods
- MSP delegated admin relationships
- MSP VPN accounts
- MSP remote access tools
- MSP RMM agents
- MSP email forwarding rules
- MSP security tool accounts
- MSP backup portal accounts

## Post-transition verification

After the cutover:

- Confirm former MSP accounts cannot sign in
- Review cloud sign-in logs
- Review firewall VPN users
- Review remote access tools
- Review endpoint management agents
- Confirm DNS and domain recovery settings
- Confirm backup restore access
- Confirm billing contacts
- Confirm admin documentation
- Confirm emergency access
- Confirm no former vendor email remains on recovery paths

## Red flags

Treat these as signs of vendor lockout risk:

- The MSP refuses to provide documentation
- The MSP controls domain registration
- The MSP owns the Microsoft 365 tenant
- The MSP uses personal employee accounts for MFA
- The MSP will not provide firewall access
- The MSP controls backups with no business-owned admin account
- The MSP installed tools you cannot identify
- The business has no admin credentials for systems it owns

## Disclaimer

This starter checklist is general information, not legal advice. Review contracts before terminating a provider, and get legal guidance when access, ownership, or data control is disputed.
