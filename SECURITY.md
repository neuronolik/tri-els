# Security policy

## Supported versions

Slab is pre-1.0. Fixes land in the latest release only, so upgrade to it to
pick one up.

| Version       | Supported |
| ------------- | --------- |
| Latest `0.x`  | Yes       |
| Earlier `0.x` | No        |

## Reporting a vulnerability

Report it privately through GitHub, not in a public issue, pull request, or
discussion:

1. Go to the repository's
   [Security tab](https://github.com/ynotdraw/slab-elements/security).
2. Choose **Report a vulnerability**.
3. Describe the problem, the affected version, and the steps or markup that
   reproduce it.

You'll get a reply once the report has been looked at, and an advisory is
published with the fix. Credit goes to you in the advisory unless you'd rather
it didn't.

## Scope

This covers the `slab-elements` package. Slab is a set of headless custom
elements, so the most likely issues are in how a component handles content it's
given, such as markup or attributes that end up as script. The docs site and
the styled examples in `src/styled` aren't part of the package, but if you find
something there, report it the same way.
