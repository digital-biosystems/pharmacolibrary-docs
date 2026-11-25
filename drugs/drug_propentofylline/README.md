<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;propentofylline&quot;}]"></div>

# propentofylline

- **generic name:** propentofylline
- **ATC codes:** `N06BC02`
- **DrugBank:** [DB06479](https://go.drugbank.com/drugs/DB06479) · **PubChem:** none
- **molar mass:** 306.3602 g/mol (C15H22N4O3) — DrugBank
- **groups:** experimental

## About

Propentofylline is a xanthine derivative that acts as a neuroprotective agent.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2888695](https://www.wikidata.org/wiki/Q2888695), [Wikipedia](https://en.wikipedia.org/wiki/Propentofylline?oldid=1376101283) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:38 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,578/172 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borgland_1997.pdf` | Borgland SL et al., Uptake and release of [3H]formycin B vi…, The Journal of pharmacology… (1997) | pd | 4 |  | [9103516](https://www.ncbi.nlm.nih.gov/pubmed/9103516) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 03:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borgland_1997 | irrelevant | 0 | 0 | The paper studies nucleoside transporters in mouse leukemia cells using propentofylline only as an inhibitor, not as the subject drug for PK parameter extraction. |
| PGx | Borgland_1997 | not_relevant | 0 | 0 | The paper studies nucleoside transporter kinetics in cancer cells and uses propentofylline only as a generic transport inhibitor, not as the subject of a pharmacogenomic study. |
| popPK | DeLeo_1988 | irrelevant | 0 | 0 | The study is a pharmacological efficacy trial assessing neuroprotection in gerbils and does not report pharmacokinetic parameters like clearance or volume. |
| PGx | DeLeo_1988 | not_relevant | 0 | 0 | The paper investigates the neuroprotective efficacy of propentofylline in a gerbil model of ischemia but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Si_1996 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study examining the effect of propentofylline on microglial cell proliferation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Si_1996 | not_relevant | 0 | 0 | The paper describes the pharmacological effect of propentofylline on microglial cells in vitro, but does not report any pharmacogenomic analysis (gene variants) affecting PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropentofylline%5D&body=Drug%3A%20propentofylline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propentofylline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
