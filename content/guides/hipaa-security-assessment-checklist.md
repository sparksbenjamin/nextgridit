---
title: HIPAA Security Assessment Checklist for Medical Offices
summary: A practical checklist for small medical practices preparing for a HIPAA security assessment, including what to gather, what auditors look for, and how to close common gaps.
publishedAt: 2026-06-07
updatedAt: 2026-06-07
tags: HIPAA, security assessment, medical offices, compliance
eyebrow: Compliance Guide
description: Preparing for a HIPAA security assessment can feel overwhelming, especially for small medical practices without a dedicated compliance team. This guide breaks down what the assessment actually covers, what documentation you need, and how to close the gaps that auditors find most often in independent practices.
last_updated: 2026-06-07
---

Preparing for a HIPAA security assessment can feel overwhelming, especially for small medical practices without a dedicated compliance team. The rules are detailed, the penalties are real, and the guidance often assumes you have a full IT department. Most independent practices do not.

This guide is written for practice managers and office administrators who need to understand what a HIPAA security assessment covers, what to have ready before an auditor walks in, and how to fix the most common problems before they become findings.

## What a HIPAA security assessment actually covers

A HIPAA security assessment evaluates whether your practice has implemented the administrative, physical, and technical safeguards required by the HIPAA Security Rule. It is not just a technical scan. It is a structured review of how your organization protects electronic protected health information, or ePHI, across three categories.

Administrative safeguards include your policies and procedures, workforce training, risk analysis, and contingency planning. These are the most heavily weighted part of the Security Rule and the area where small practices are most often deficient. Having a policy document that nobody has read in two years does not count.

Physical safeguards cover access controls for your office and any areas where ePHI is stored or accessed. That includes workstations, server rooms, locked doors, badge readers, and how you handle devices that leave the building. If a cleaning crew can walk past an unlocked server closet, that is a physical safeguard gap.

Technical safeguards address the technology that protects ePHI: access controls, audit logs, encryption, transmission security, and integrity controls. These are the controls that most people think of first, but they are only effective when the administrative and physical layers are also in place.

An assessment typically maps your current state against the Security Rule requirements, identifies gaps, and assigns a risk level to each finding. Frameworks like NIST 800-53 and MARS-E provide more detailed control catalogs that many assessors use as a reference baseline. You are not required to implement every NIST control, but your assessor will likely use those frameworks to evaluate whether your safeguards are reasonable and appropriate for your organization's size and risk profile.

## Documentation you should have ready

The single biggest thing that separates a smooth assessment from a painful one is documentation. Auditors do not just want to hear that you do something. They want to see evidence that it is documented, current, and followed consistently.

Before your assessment, gather the following:

- **Risk analysis**: A written, dated risk analysis that identifies where ePHI exists in your environment, the threats and vulnerabilities to that data, and the likelihood and impact of each risk. This is the foundation of the entire Security Rule and the item most often missing or incomplete.
- **Policies and procedures**: Documented policies covering access controls, workstation use, device disposal, incident response, breach notification, and sanctions. These need to be reviewed and updated at least annually.
- **Workforce training records**: Signed acknowledgments or training logs showing that every employee who handles ePHI has received HIPAA security training. Annual refresher training is the standard expectation.
- **Business associate agreements**: Signed BAAs with every vendor, clearinghouse, IT provider, cloud service, and billing company that creates, receives, maintains, or transmits ePHI on your behalf.
- **Access logs and audit trails**: Evidence that you monitor who accesses ePHI and when. This includes EMR access logs, network login records, and any review procedures you follow.
- **Contingency plan**: A documented plan for how your practice would continue operations and protect ePHI in the event of a system failure, natural disaster, or other emergency. This should include data backup procedures, testing records, and a recovery timeline.
- **Device inventory**: A current list of all devices that store or access ePHI, including workstations, laptops, tablets, servers, and mobile devices, along with their encryption status and physical location.
- **Incident documentation**: Records of any security incidents, how they were handled, and what corrective actions were taken. Even if you have never had a breach, having an incident response procedure documented is essential.

## Common gaps found in small practices

After years of working with independent medical practices, the same gaps show up repeatedly. Knowing what they are gives you a head start on closing them before your assessment.

**No formal risk analysis.** This is the most common and most serious finding. Many practices assume that because they use a certified EMR and have a firewall, their risk is low. The Security Rule requires a documented risk analysis that goes beyond the EMR to cover every system, device, and process that touches ePHI. Without it, every other safeguard is built on an incomplete foundation.

**Stale or missing policies.** Policies written five years ago and never updated do not meet the requirement. Review dates, version numbers, and evidence of annual review matter. If your policies still reference systems you no longer use, that is a signal to the auditor that nobody is maintaining them.

**Unencrypted devices.** Full-disk encryption on laptops, workstations, and portable media is a requirement, not a recommendation. If a laptop containing ePHI is stolen and the drive was not encrypted, you have a breach. Many practices assume encryption is in place but have never verified it.

**No audit log review.** Most EMR systems and network devices generate audit logs by default. The gap is that nobody reviews them. The Security Rule expects you to have a procedure for reviewing access logs and acting on anomalies. A log that nobody reads is not a safeguard.

**Incomplete business associate agreements.** It is common for practices to have BAAs with their EMR vendor and billing company but not with their IT support provider, cloud backup service, email hosting provider, or fax service. Any vendor that could encounter ePHI needs a signed BAA.

**Weak physical controls.** Open server closets, shared workstations without automatic screen locks, and unsecured paper records in treatment areas are physical safeguard failures that auditors notice immediately.

## The risk analysis requirement

The HIPAA Security Rule explicitly requires a risk analysis as the first step in compliance. The Department of Health and Human Services points to the risk analysis as the foundation on which all other safeguards are built. Without it, you cannot demonstrate that your safeguards are reasonable and appropriate for your specific environment.

A proper risk analysis should identify where ePHI is created, received, maintained, and transmitted across your entire environment. That includes your EMR, email, patient portal, backup systems, physical records, and any third-party services. For each system or process, you evaluate the threats, vulnerabilities, likelihood of occurrence, and potential impact. The output is a ranked list of risks with corresponding recommendations for mitigation.

For small practices, this does not need to be an enterprise-scale project. It does need to be thorough enough that you can demonstrate you have considered your actual environment, not just checked a box. Tools like Tenable.sc can help with the technical vulnerability scanning portion, but the risk analysis itself is a broader exercise that includes administrative and physical risks alongside technical ones.

## Remediation planning

After your assessment, you will have a list of findings ranked by risk level. A remediation plan documents how and when you will address each one. This is not optional. Auditors and OCR investigators want to see that you have a plan, that it has assigned owners and deadlines, and that you are making progress.

Prioritize findings by risk. High-risk items like missing encryption, absent risk analysis, or unsecured ePHI on portable devices should be addressed first. Medium-risk items like incomplete policies or missing training records come next. Lower-risk items like documentation formatting or minor procedural improvements can follow.

Be realistic about timelines. A remediation plan that promises everything will be fixed in 30 days is not credible. A plan that shows steady, documented progress over a reasonable period is much more defensible. If OCR shows up at your door, evidence of a documented remediation plan with active progress is one of the strongest positions you can be in.

Assign responsibility for each item. A remediation plan without owners is a wish list. Each finding should have a named person responsible for driving it to completion, even if that person is the practice manager wearing multiple hats.

## Ongoing compliance

A HIPAA security assessment is a point-in-time snapshot. Compliance is ongoing. The Security Rule requires that you monitor your safeguards, review and update policies, conduct periodic risk analyses, and train your workforce on an ongoing basis.

In practice, this means:

- reviewing and updating your risk analysis at least annually or whenever you make significant changes to your environment, such as adding a new EMR module, switching cloud providers, or opening a new location
- conducting annual security awareness training for all workforce members
- reviewing and updating policies and procedures at least annually
- monitoring audit logs on a regular schedule, not just when something goes wrong
- maintaining and testing your contingency and backup plans
- documenting every review, update, and training session with dates and participants

Ongoing compliance is where many practices fall off. The assessment gets done, the report goes in a drawer, and nothing changes until the next audit cycle. That pattern creates the same gaps year after year. The practices that stay compliant are the ones that build review cycles into their normal operations instead of treating compliance as a one-time event.

## Next steps

If your practice is preparing for a HIPAA security assessment or trying to close gaps from a previous review, we can help. Our [HIPAA security assessment service](/services/hipaa-security-assessment/) is built for small medical practices and includes the risk analysis, documentation review, and remediation planning you need to move forward with confidence.

For practices that want to strengthen their underlying network infrastructure before an assessment, start with our guide on [why local DNS matters](/guides/why-local-dns-matters/). Clean DNS, properly segmented networks, and controlled access paths are the technical foundation that makes every other safeguard easier to implement and maintain.
