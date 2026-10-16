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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:36 | 1:48 | 0/0/0 | 0/0/0 | 0/0/0 | 15,864/419 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=iclaprim).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DHFR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
