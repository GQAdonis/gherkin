# Contribution readiness

## Contribution-readiness repair, phase47

The adopted repair implementation is complete and awaits its phase-end BDD
boundary. It restores legacy table-escape rejection, retains explicit Gherkin43
semantics, preserves public parser diagnostics, and isolates the dedicated
compatibility feature from the old intentional-skip harness. Existing workflows
are unchanged. Earlier73-scenario/241-step evidence remains historical; no new
passing result or merge-readiness is claimed. The coordinated acceptance, current
status and retained repair scope live in the Cucumber fork's
[readiness plan](https://github.com/GQAdonis/cucumber/blob/planning/contribution-readiness/docs/compatibility/readiness/BOUNDARY-PLAN.md).
