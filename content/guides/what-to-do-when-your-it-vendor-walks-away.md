---
title: What to Do When Your IT Vendor Walks Away
summary: If your IT provider disappeared and left you locked out of your own systems, this guide covers the immediate steps to take, the legal framework for recovery, and how to prevent it from happening again.
publishedAt: 2026-06-07
updatedAt: 2026-06-07
tags: vendor lockout, IT recovery, vendor management, business continuity
eyebrow: Recovery Guide
description: "It happens more often than most business owners expect. An IT provider stops responding, a contract ends badly, or a one-person shop simply vanishes, and suddenly you cannot access your own servers, email, domain registrar, or cloud accounts. The systems your business runs on are still there, but you are locked out."
last_updated: 2026-06-07
---
It happens more often than most business owners expect. An IT provider stops responding, a contract ends badly, or a one-person shop simply vanishes, and suddenly you cannot access your own servers, email, domain registrar, or cloud accounts. The systems your business runs on are still there, but you are locked out.

This guide walks through what vendor lockout looks like, the immediate steps to take, how to get legal and technical access restored, and what to put in place so it never happens again.

## What vendor lockout looks like

Vendor lockout is not always dramatic. Sometimes it builds slowly. Your provider takes longer to respond. Minor requests go unanswered. Then one day you realize nobody has the admin password to your own server, your domain is registered under someone else's email, or your cloud tenant is controlled by an account you cannot reach.

Common signs include:

- you cannot log in to your Microsoft 365, Google Workspace, or other cloud admin portals
- your domain registrar account is tied to the vendor's email address
- server or firewall admin credentials were never shared with anyone inside your organization
- the vendor holds the only copy of your backup encryption keys
- you discover services, licenses, or hosting accounts you did not know existed, all registered to the provider
- the vendor has gone out of business, stopped answering calls, or is refusing access pending a billing dispute

In some cases the lockout is accidental. The provider intended to hand things over but never did. In others it is leverage during a disagreement. Either way, the result is the same: you are shut out of systems your business depends on.

## Immediate steps to take

When you first realize you are locked out, the priority is stopping the damage, not fixing everything at once.

1. **Do not panic and do not escalate the conflict.** If the vendor is still reachable but difficult, avoid threats or hostile language. That can make a tense situation worse and push the provider further away. Keep communication professional and documented.

2. **Document what you know.** Write down every system, account, and service you are aware of. Include domains, hosting, email, cloud apps, firewalls, servers, VPNs, backup systems, and anything else you can think of. Even partial information helps later.

3. **Check what you already have access to.** You may have more than you think. Look for saved credentials in password managers, browser stores, email archives, or old onboarding documents. Check whether any employee accounts still have admin access to cloud services.

4. **Secure what you can control.** If you still have access to any critical systems, change the passwords immediately. Make sure multi-factor authentication is enabled using contact methods your organization controls, not the vendor's.

5. **Preserve evidence.** Save emails, contracts, invoices, and any communication with the vendor. If legal action becomes necessary, you will need a clear record of what was agreed to and what happened.

6. **Notify your leadership and, if applicable, your insurance provider.** Some cyber insurance policies cover vendor lockout or business interruption. Your leadership team needs to understand the scope early.

## Getting legal authorization before accessing systems

This is a step people sometimes want to skip, but it matters. If you regain access to systems without clear legal standing, you can create new problems for your business.

Before you or anyone you hire attempts to access locked systems, you need to establish that your organization has the legal right to do so.

- **Review your contract.** Most IT service agreements include language about ownership of data, credentials, and systems. Even vague terms can help establish that your business owns its infrastructure and data.

- **Get written confirmation of ownership.** If the vendor is reachable, ask them in writing to confirm that your organization owns the systems and data and that you are authorized to access them. Even a simple email can be useful.

- **Consult an attorney if access is disputed.** If the vendor is refusing access or there is a disagreement about who controls what, talk to a lawyer before taking technical action. An attorney can send a formal demand letter, which often resolves things quickly. If not, you may need a court order.

- **Document authorization.** Once you have established the right to access the systems, keep that documentation on file. It protects you if questions come up later about how access was obtained.

The key principle is straightforward: make sure you can clearly demonstrate that you had the right to access your own systems before you do it. This is not just a legal precaution. It also protects the technical team doing the recovery work.

## The technical recovery process

Once authorization is established, the technical work begins. This is where having an experienced IT team makes a significant difference, because recovery from vendor lockout is not a standard support task. It involves working across unfamiliar environments, often with incomplete information.

### Cloud services and SaaS platforms

For Microsoft 365, Google Workspace, and similar platforms, the recovery path usually involves proving business ownership to the vendor through their support process. This can include providing business registration documents, domain ownership proof, and billing records. The process takes anywhere from a few days to a few weeks depending on the platform and the complexity.

### Domain registration

If your domain is registered under the vendor's account, you will need to work with the registrar to transfer it. Most registrars have a process for this, but it requires documentation proving your organization owns the domain name. Start this early because domain recovery can take time and your email and website may depend on it.

### Servers, firewalls, and network equipment

For on-premises or hosted infrastructure, recovery usually means gaining console access or working with the hosting provider directly. If the vendor was the only one with admin credentials, this may involve resetting devices to factory defaults and reconfiguring them, which is disruptive but sometimes unavoidable.

### Backups

Check whether backups are accessible and whether you hold the encryption keys. If backups are stored in the vendor's cloud account and you cannot reach them, you may need to work with the backup provider to regain access using the same ownership verification process used for other cloud services.

### Unknown systems

One of the hardest parts of vendor lockout recovery is discovering systems you did not know about. The previous vendor may have set up monitoring tools, DNS records, third-party integrations, or shadow IT that nobody inside your organization was aware of. A thorough discovery process is essential to avoid leaving orphaned systems behind.

## Documentation and credential management after recovery

Once access is restored, the recovery is not over. If you do not change how credentials and documentation are managed, the same thing can happen again with the next provider.

### What to put in place immediately

- **Change every password.** Not just the ones you think the vendor knew. Change all admin credentials across every system you recovered access to.

- **Enable multi-factor authentication on every admin account.** Use an authenticator app or hardware key controlled by your organization, not SMS to vendor-controlled phone numbers.

- **Create a credential vault.** Use a business password manager to store all system credentials. Ensure more than one person in your organization has access to the vault.

- **Document every system.** Create a simple inventory listing each service, who administers it, where credentials are stored, and who the billing contact is. This does not need to be elaborate. A spreadsheet is better than nothing.

- **Transfer billing and ownership.** Make sure every service account, domain registration, hosting plan, and software license is billed to your organization and listed under a contact your organization controls.

- **Review user accounts.** Remove the former vendor's access from every system. Check for hidden admin accounts, service accounts, or API keys that the vendor may have created.

## How to prevent future lockouts

Vendor lockout is painful, but it is also preventable. The following practices make a real difference.

### Always maintain organizational control of accounts

Your business should be the owner of every cloud tenant, domain registration, hosting account, and service subscription. Vendors and IT providers should be added as admins or delegates, not as the account owner. If a provider sets up a new service for you, make sure the account is created under your organization from the start.

### Require credential transparency

Your IT provider should not be the only one who knows how to access your systems. At a minimum, your organization should hold admin credentials for every critical system in a secure, shared vault. This is not about mistrust. It is about basic business continuity.

### Use contracts that address access and transition

Your IT service agreements should clearly state that your organization owns all data and credentials, that the provider must provide access upon request, and that there is a defined transition process if the relationship ends. This gives you legal standing if a dispute ever arises.

### Have a transition plan before you need one

Know how you would switch providers if you had to. That means understanding what systems you have, where they are hosted, who controls access, and what a handoff would involve. A transition plan does not need to be formal, but it does need to exist.

### Review access regularly

Periodically verify that your organization still controls the accounts you think you control. Check that billing contacts are current, that admin access has not drifted to vendor-only accounts, and that your credential inventory is up to date. An annual review is a good starting point.

## Next steps

If your business is currently locked out of its systems, [our vendor lockout recovery service](/services/vendor-lockout-recovery/) can help you regain access quickly and safely. If you have recovered access and want to make sure this never happens again, [our MSP transition service](/services/msp-transition/) helps you move to a structured, transparent IT relationship where you always maintain control of your own infrastructure.
