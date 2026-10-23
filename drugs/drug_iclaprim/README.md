<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;iclaprim&quot;}]"></div>

# iclaprim

- **generic name:** iclaprim
- **ATC codes:** `J01EA03`
- **DrugBank:** [DB06358](https://go.drugbank.com/drugs/DB06358) · **PubChem:** not captured
- **molar mass:** 354.41 g/mol (C19H22N4O3) — DrugBank
- **groups:** investigational

## About

Iclaprim is an investigational antibacterial drug, a trimethoprim derivative and folic acid antagonist studied for treating bacterial infections. It is not an approved medicine; it remains in the investigational stage and has no authorisation, for example in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907480](https://www.wikidata.org/wiki/Q907480) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=iclaprim).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DHFR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:36 | 1:48 | 0/0/0 | 0/0/0 | 0/0/0 | 15,864/419 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_2019.pdf` | Huang DB, A pharmacokinetic and pharmacodynamic e…, Journal of medical microbio… (2019) | pd | 5 | [10.1099/jmm.0.000878](https://doi.org/10.1099/jmm.0.000878) | [30451652](https://www.ncbi.nlm.nih.gov/pubmed/30451652) | metadata signals extractable PD data (PK/PD) |
| `Lodise_2018.pdf` | Lodise TP et al., Pharmacokinetic and Pharmacodynamic Ana…, Antimicrobial agents and ch… (2018) | pd | 5 | [10.1128/AAC.01184-17](https://doi.org/10.1128/AAC.01184-17) | [29133566](https://www.ncbi.nlm.nih.gov/pubmed/29133566) | metadata signals extractable PD data (PK/PD) |
| `Aliouat_2018.pdf` | Aliouat EM et al., In vitro and in vivo activity of iclapr…, European journal of clinica… (2018) | pd | 4 | [10.1007/s10096-018-3184-z](https://doi.org/10.1007/s10096-018-3184-z) | [29330709](https://www.ncbi.nlm.nih.gov/pubmed/29330709) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T10:36:31.510720+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aliouat_2018 | irrelevant | 0 | 0 | The study reports anti-Pneumocystis efficacy and in vitro/in vivo pharmacodynamics (EC50, inhibition rates), but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Lodise_2018 | irrelevant | 0 | 0 | no_text gate: only 186 chars of text extracted (&lt; 400) |
| popPK | Lodise_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of ceftazidime, avibactam, and aztreonam, not iclaprim. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
