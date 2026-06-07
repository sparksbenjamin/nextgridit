---
title: Microsoft 365 Security Basics Every Business Should Know
summary: Most small businesses set up Microsoft 365 and never look at the security settings again. This guide covers the essentials that every M365 tenant should have configured — and what happens when they aren't.
publishedAt: 2026-06-07
updatedAt: 2026-06-07
tags: Microsoft 365, M365 security, Entra ID, identity management, small business
eyebrow: Cloud Security Guide
description: Most small businesses set up Microsoft 365 and never look at the security settings again. This guide covers the essentials that every M365 tenant should have configured — and what happens when they aren't.
last_updated: 2026-06-07
---

Most small businesses set up Microsoft 365 with good intentions. You buy the licenses, create the accounts, and start sending email. Then you move on to the next thing on your list. The problem is that the default security settings in Microsoft 365 are designed to be permissive enough that nothing breaks during setup. That convenience comes at a cost. A tenant left in its default state is a soft target, and the businesses that find out the hard way usually discover it after something has already gone wrong.

This guide is written for business owners and office managers who want to understand what should be configured in their Microsoft 365 environment, why it matters, and how to tell if it has actually been done. You do not need to be technical to follow along. You do need to care enough to ask the right questions.

## The most common M365 misconfigurations

After reviewing and remediating dozens of small business Microsoft 365 tenants, the same problems appear over and over. These are not edge cases. They are the default state of most environments we encounter.

**No multi-factor authentication.** This is the single most impactful security control available in Microsoft 365, and it is still missing from a surprising number of tenants. Without MFA, anyone who guesses or steals a password has full access to that account. Email, files, Teams conversations, calendar details, all of it. Microsoft reports that MFA alone blocks over 99 percent of account compromise attacks. If your tenant does not have MFA enabled for every user, this is the first thing to fix.

**Shared admin accounts.** Many small businesses create a single global administrator account and share the credentials among anyone who might need to make changes. Sometimes that account does not even have MFA enabled. A shared admin account means there is no individual accountability, no way to tell who made a change, and a credential that is almost certainly stored in places it should not be. Every person who needs administrative access should have their own named admin account, and that account should require MFA.

**No conditional access policies.** Conditional access is Microsoft's term for rules that govern how and when users can sign in. Without conditional access, any user can sign in from any device, any location, at any time. That means a compromised credential can be used from a foreign country at three in the morning and nothing will stop it. Basic conditional access policies can block sign-ins from unexpected locations, require compliant devices, or prompt for additional verification when something looks unusual. Even a simple policy that blocks legacy authentication protocols closes a major attack vector.

**Stale user accounts.** When an employee leaves, their account should be disabled or removed promptly. In practice, accounts often stay active for weeks or months after a departure. Sometimes indefinitely. Those dormant accounts are a quiet risk. They still have access to email, files, and internal resources. If the former employee's credentials are ever compromised, there is no one watching to notice. Regular reviews of active accounts should be part of your standard offboarding process.

**No audit logging enabled.** Microsoft 365 can generate detailed audit logs showing who did what and when. In many tenants, this capability is either not enabled or enabled but never reviewed. Without audit logging, you have no visibility into suspicious activity and no forensic trail if something goes wrong. If you cannot tell whether someone accessed a sensitive file or changed a security setting, you cannot respond to it. Enabling the unified audit log takes minutes. The value it provides is significant.

## What Entra ID is and why it matters

Every Microsoft 365 tenant is backed by a directory service called Entra ID, formerly known as Azure Active Directory. Entra ID is the system that manages every user account, group, application registration, and access policy in your tenant. When someone signs in to Outlook, Teams, or SharePoint, Entra ID is the service authenticating them and deciding what they can access.

Understanding that Entra ID exists is important because most of the security controls available in Microsoft 365 live there. MFA settings, conditional access policies, privileged role assignments, and access reviews are all configured in Entra ID. If you have never looked at the Entra ID portal for your tenant, you are not alone. Most small business administrators have not. But that is also where the most important security improvements can be made.

Entra ID also manages the concept of administrative roles. The most powerful role is Global Administrator, which has unrestricted access to everything in the tenant. Many small businesses give more people Global Administrator access than they need. Entra ID supports least-privilege roles like Exchange Administrator, SharePoint Administrator, and Helpdesk Administrator that limit what a person can do. Using the right role for the right person reduces the blast radius if any single account is compromised.

If your business uses a single Microsoft 365 tenant and you have never reviewed Entra ID, that is a good place to start. The Microsoft Secure Score tool, accessible from the Microsoft 365 Defender portal, gives you a snapshot of your current security posture and specific recommendations for improvement.

## Email security basics

Email remains the primary attack vector for most businesses using Microsoft 365. Phishing, business email compromise, and credential harvesting all start with a message in someone's inbox. Microsoft includes several built-in protections, but they need to be configured and tuned to be effective.

Exchange Online Protection, or EOP, provides baseline anti-spam and anti-malware filtering for all Microsoft 365 tenants. It works out of the box but the default policies are conservative. For most businesses, tightening the spam filtering thresholds and enabling zero-hour auto purge, which retroactively removes malicious messages from mailboxes after detection, are worthwhile improvements.

Safe Links and Safe Attachments, part of Microsoft Defender for Office 365, provide additional protection by scanning URLs and files in real time. Safe Links rewrites URLs in email messages so that clicks are evaluated at the time of access rather than at the time of delivery. Safe Attachments detonates suspicious files in a sandbox before delivering them. These capabilities are not available in the most basic Microsoft 365 plans, but they are included with Business Premium and most Enterprise plans.

Email forwarding rules are a frequently overlooked risk. Attackers who compromise an account often create a forwarding rule that silently sends a copy of all incoming messages to an external address. These rules can persist for months without detection. Regularly reviewing mailbox rules and forwarding configurations is a simple but effective hygiene practice.

## How to check if your tenant is in good shape

You do not need to be a security expert to get a basic read on your Microsoft 365 environment. Here are practical things you can check or ask about.

Start with Microsoft Secure Score in the Microsoft 365 Defender portal. It evaluates your tenant against a set of recommended security controls and gives you a percentage score along with a prioritized list of improvements. It is not perfect, but it is a useful starting point.

Review who has Global Administrator access. In a small business, this should be a very small number of people. If everyone who has an M365 account is a Global Admin, that needs to change.

Check whether MFA is enabled for all users. Not just admins. All users. You can verify this in the Entra ID portal under Authentication Methods.

Ask whether conditional access policies are in place. At minimum, you should have policies that block legacy authentication and require MFA for all users.

Confirm that audit logging is enabled. In the Microsoft Purview compliance portal, you should be able to search the audit log. If it tells you that search is not available, logging needs to be turned on.

Review the list of active users periodically. Make sure there are no accounts for people who no longer work at the company.

## What to ask your IT provider about

If you work with an IT provider or managed services partner to manage your Microsoft 365 environment, they should be able to answer these questions clearly. If they cannot, that is worth noting.

Is MFA enforced for every user in our tenant? Not just available. Enforced. How many Global Administrators do we have, and who are they? Do we have conditional access policies, and what do they do? Is audit logging enabled, and does anyone review the logs? When was the last time someone reviewed our user accounts for stale or unused entries? What email security protections are in place beyond the defaults? Do we have Microsoft Defender for Office 365, and is it configured? What is our current Microsoft Secure Score?

These are not trick questions. A competent IT provider should welcome them. If the answers are vague or the provider seems unsure, that tells you something important about the state of your environment.

## Next steps

If your Microsoft 365 tenant has not been reviewed or hardened, we can help. Our [Microsoft 365 service](/services/microsoft-365/) includes a full security assessment of your tenant, remediation of common misconfigurations, and ongoing management to keep your environment secure as threats evolve.

For businesses that want to go further, our [infrastructure hardening service](/services/infrastructure-hardening/) addresses the broader security posture of your network, including identity management, access controls, and monitoring. A hardened Microsoft 365 tenant on a hardened network is a much harder target for the attacks that most small businesses face.
