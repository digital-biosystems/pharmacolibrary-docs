<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;brodimoprim&quot;}]"></div>

# brodimoprim

- **generic name:** brodimoprim
- **ATC codes:** `J01EA02`
- **DrugBank:** [DB13795](https://go.drugbank.com/drugs/DB13795) · **PubChem:** not captured
- **molar mass:** 339.193 g/mol (C13H15BrN4O2) — DrugBank
- **groups:** experimental

## About

Brodimoprim is an antibacterial drug related to trimethoprim, acting as a folate antagonist against infections. It is classified as experimental and does not appear to be an approved medicine today, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4973047](https://www.wikidata.org/wiki/Q4973047) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:35 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 27,424/984 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kalager_1985.pdf` | Kalager T et al., Pharmacokinetics of brodimoprim in seru…, Chemotherapy (1985) | popPK | 8 | [10.1159/000238367](https://doi.org/10.1159/000238367) | [4075857](https://pubmed.ncbi.nlm.nih.gov/4075857) | The abstract reports quantitative pharmacokinetic parameters (half-life, peak concentrations, AUC ratio, and urinary recovery) for brodimoprim in human volunteers. |

<sub>queue written 2026-10-07T10:34:47.852690+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amyes_1993 | irrelevant | 2 | 0 | The paper is a comparative antibacterial spectrum study (MIC values) and mentions pharmacokinetic properties qualitatively (long half-life) without providing quantitative disposition parameters or population PK model values. |
| popPK | Bergan_1993 | relevant | 3 | 5 | The study reports qualitative PK parameters (bioavailability, penetration) and a qualitative half-life comparison for brodimoprim, but lacks explicit numeric values for clearance, volume, or absolute half-life. |
| popPK | Braga_1996 | irrelevant | 1 | 0 | The study investigates in vitro cellular uptake and elimination in human neutrophils rather than in vivo pharmacokinetic parameters (CL, V, ka). |
| popPK | Cosmi_1996 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability study for acute cystitis that does not report any pharmacokinetic parameters (CL, V, half-life, etc.) for brodimoprim. |
| popPK | De_1993 | irrelevant | 0 | 0 | The study is a clinical trial assessing efficacy and tolerability, reporting no pharmacokinetic parameters. |
| popPK | Galetti_1993 | irrelevant | 0 | 0 | The paper reports on the efficacy and tolerability of brodimoprim in treating otitis media but contains no pharmacokinetic parameters. |
| popPK | Galetti_1993_2 | irrelevant | 0 | 0 | This is a clinical efficacy study for acute bacterial tonsillitis that does not report any pharmacokinetic parameters. |
| PGx | Zhang_2008 | not_relevant | 0 | 0 | The paper describes an analytical method where brodimoprim is used only as an internal standard, not as a drug being studied for pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
