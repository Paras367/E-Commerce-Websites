# Security Policy

## E-Commerce-Websites

**Copyright © 2026 Paras Dhiman (PARAS367). All Rights Reserved.**

This document describes the security practices, vulnerability reporting
process, and responsible disclosure expectations for the
**E-Commerce-Websites** repository.

---

## Supported Versions

Security issues are primarily addressed in the latest maintained version.

| Version | Supported |
| ------- | --------- |
| Latest / Main | ✅ Yes |
| Older versions | ⚠️ Limited |
| Unmaintained versions | ❌ No |

Because this repository contains multiple website templates, individual
templates may receive updates at different times.

---

## Reporting a Security Vulnerability

If you discover a genuine security vulnerability in the code contained in
this repository, please report it privately.

**Do not publicly disclose an unpatched vulnerability through a GitHub Issue,
Pull Request, discussion, social media post, or other public platform.**

A responsible report helps the project owner investigate and resolve the issue
before details become publicly available.

### Please provide

When reporting a vulnerability, include as much of the following information
as possible:

- A clear title and description
- The affected template or directory
- The affected file(s)
- The affected feature or functionality
- Steps to reproduce the vulnerability
- Expected behavior
- Actual behavior
- Potential security impact
- Screenshots, logs, or demonstrations where appropriate
- A proof of concept, if necessary
- Suggested remediation, if you have one

Please avoid including real credentials, personal information, or other
sensitive data in your report.

---

## What Should Be Reported?

Examples of potentially relevant security issues include:

- Cross-site scripting (XSS)
- Authentication or authorization vulnerabilities
- Sensitive information exposure
- Accidentally exposed API keys or credentials
- Insecure handling of user-controlled input
- Client-side security vulnerabilities
- Injection vulnerabilities
- Insecure configuration
- Dependency-related vulnerabilities
- Broken access-control mechanisms
- Security weaknesses that could affect users of a deployed template

Not every bug is a security vulnerability. General UI issues, visual bugs,
performance problems, feature requests, and ordinary coding errors should be
reported through the appropriate project channels instead.

---

## Responsible Disclosure

Security researchers and users are requested to follow responsible disclosure
practices.

Please:

1. Report the issue privately.
2. Provide sufficient information to reproduce it.
3. Allow reasonable time for investigation and remediation.
4. Avoid accessing or modifying data that does not belong to you.
5. Avoid disrupting services or infrastructure.
6. Do not publicly release exploit code before coordinated disclosure.

The project owner may acknowledge valid security reports after investigation,
where appropriate.

---

## Prohibited Security Testing

Do not perform security testing that:

- Causes intentional damage or service disruption.
- Deletes or modifies another person's data.
- Attempts to obtain passwords, tokens, or private credentials.
- Targets unrelated third-party infrastructure.
- Uses social engineering against project contributors or users.
- Performs denial-of-service attacks.
- Accesses systems or accounts without authorization.

Only test systems and deployments that you own or have explicit permission
to test.

---

## Sensitive Information

Never intentionally commit or publish:

- Passwords
- API keys
- Authentication tokens
- Private keys
- Database credentials
- Session secrets
- Personal information
- Production configuration secrets

If sensitive credentials are accidentally committed, simply deleting the file
from the latest commit may not be sufficient because the information may
remain in Git history.

In such cases, the affected credentials should be **revoked or rotated
immediately**.

---

## Third-Party Dependencies

This repository may contain or reference third-party:

- JavaScript libraries
- CSS frameworks
- Fonts
- Icons
- Images
- Videos
- APIs
- External services
- CDN-hosted resources

Third-party materials are not automatically covered by this repository's
copyright.

Security vulnerabilities originating in third-party dependencies should,
where appropriate, also be reported to the respective maintainer or provider.

Users deploying these templates are responsible for reviewing and maintaining
their dependencies.

---

## Deployment Security

The templates in this repository may be used as front-end website templates.
A template should not automatically be considered production-ready from a
security perspective.

Before deploying a template to production, users should:

- Review all client-side JavaScript.
- Review external scripts and dependencies.
- Remove unused libraries and resources.
- Protect backend credentials.
- Use HTTPS.
- Configure appropriate security headers.
- Validate server-side input where applicable.
- Implement proper authentication and authorization.
- Protect administrative functionality.
- Keep dependencies reasonably up to date.
- Avoid placing secrets in publicly accessible frontend files.

---

## Scope

This policy applies to security issues in the original code and materials
maintained within the **E-Commerce-Websites** repository.

It does not grant permission to:

- Copy the source code.
- Redistribute the templates.
- Resell the templates.
- Publish modified versions.
- Use the templates commercially without authorization.
- Upload copies to another repository or marketplace.

Such activities remain subject to the repository's proprietary license.

---

## Security Reports and Privacy

Please provide only the minimum information necessary to demonstrate the
security issue.

Do not submit unnecessary personal information or confidential information
belonging to yourself or others.

Security reports may be retained for the purpose of investigating,
remediating, and documenting security issues.

---

## Security Contact

**Project Owner:** Paras Dhiman (PARAS367)

**GitHub:** https://github.com/Paras367

For sensitive vulnerabilities, use GitHub's available private security
reporting mechanisms where available.

---

## Acknowledgements

With permission, contributors who responsibly report valid security
vulnerabilities may be acknowledged in project documentation or release notes.

No public acknowledgement will be made if the reporter requests anonymity.

---

## Changes to This Policy

This Security Policy may be updated when the project's security practices,
repository structure, or reporting procedures change.

The latest version of this file applies to the repository unless otherwise
stated.

---

## Related Documents

- [`LICENSE`](./LICENSE) — Copyright and proprietary usage terms
- [`README.md`](./README.md) — Project overview and template information

---

**Copyright © 2026 Paras Dhiman (PARAS367)**  
**E-Commerce-Websites — All Rights Reserved.**
