# URLs and access for the teachers

TDW Mini Project M1A. No token, password or API key is stored in this repository.

## Repositories

| Platform                 | URL                                                                   |
| ------------------------ | --------------------------------------------------------------------- |
| GitHub (main work)       | https://github.com/goncalofcs18/TDW2026-MP1-Goncalo-Sousa             |
| GitHub Actions runs      | https://github.com/goncalofcs18/TDW2026-MP1-Goncalo-Sousa/actions     |
| GitLab (second platform) | https://gitlab.com/goncalofcs18/tdw2026-mp1-goncalo-sousa             |
| GitLab pipelines         | https://gitlab.com/goncalofcs18/tdw2026-mp1-goncalo-sousa/-/pipelines |

Both repositories are public, so they can be read without an invitation.
The repository name differs from `tdw-mp1-[firstname]-[lastname]`; this is
explained in the report.

## Deployed sites (Cloudflare Workers, one free account)

| Pipeline       | Worker       | URL                                         |
| -------------- | ------------ | ------------------------------------------- |
| GitHub Actions | `twd`        | https://twd.goncalofcs18.workers.dev        |
| GitLab CI/CD   | `twd-gitlab` | https://twd-gitlab.goncalofcs18.workers.dev |

Pull request previews use the address
`https://<branch>-twd.goncalofcs18.workers.dev` (GitHub) and
`https://<branch>-twd-gitlab.goncalofcs18.workers.dev` (GitLab). The address is
posted on the pull request (GitHub) or linked as "View app" (GitLab).

## CMS

Contentful space: https://app.contentful.com/spaces/3916s4ke8bsx

## Secrets and variables used by the pipelines

Values are stored in the platform settings, never in the code.

| Name                      | Kind     | Purpose                                                                        |
| ------------------------- | -------- | ------------------------------------------------------------------------------ |
| `CLOUDFLARE_API_TOKEN`    | secret   | deploy to Cloudflare (Workers Scripts: Edit, one account, with an expiry date) |
| `CONTENTFUL_ACCESS_TOKEN` | secret   | Content Delivery API, read only, used by the build                             |
| `CLOUDFLARE_ACCOUNT_ID`   | variable | account identifier                                                             |
| `CONTENTFUL_SPACE_ID`     | variable | space identifier                                                               |

The Contentful webhook calls the GitHub `repository_dispatch` API with a
fine-grained token limited to this repository and valid for 7 days. It is kept
as a secret header in Contentful.

Access to the Contentful, Cloudflare or GitLab dashboards can be granted by
invitation on request.
