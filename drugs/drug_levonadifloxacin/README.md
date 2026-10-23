<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;levonadifloxacin&quot;}]"></div>

# levonadifloxacin

- **generic name:** levonadifloxacin
- **ATC codes:** `J01MA24`
- **DrugBank:** [DB16219](https://go.drugbank.com/drugs/DB16219) · **PubChem:** not captured
- **molar mass:** 360.385 g/mol (C19H21FN2O4) — DrugBank
- **groups:** investigational

## About

Levonadifloxacin is an investigational fluoroquinolone antibacterial, related to nadifloxacin, studied as a treatment for bacterial infections. It is not an approved medicine; it remains under investigation and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27117310](https://www.wikidata.org/wiki/Q27117310) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 12:26 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 16,342/430 | einfracz / qwen3.8-27b | 2 | 0/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bhagwat_2019.pdf` | Bhagwat SS et al., In Vivo Pharmacokinetic/Pharmacodynamic…, Antimicrobial agents and ch… (2019) | popPK | 5 | [10.1128/AAC.00909-19](https://doi.org/10.1128/AAC.00909-19) | [31208999](https://pubmed.ncbi.nlm.nih.gov/31208999) | Study is a PK/PD model in mice reporting fAUC/MIC ratios, but specific compartmental PK parameters (CL, V, ka) are not explicitly listed in the text. |
| `Saseedharan_2024.pdf` | Saseedharan S et al., Treatment challenges in the management…, Indian journal of medical m… (2024) | pd | 5 | [10.1016/j.ijmmb.2024.100528](https://doi.org/10.1016/j.ijmmb.2024.100528) | [38228227](https://www.ncbi.nlm.nih.gov/pubmed/38228227) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07T12:26:47.406730+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baliga_2020 | irrelevant | 0 | 0 | The study is an in-vitro susceptibility assay (disk diffusion) and does not report any quantitative population-pharmacokinetic parameter values for levonadifloxacin. |
| popPK | Bhagwat_2019 | relevant | 5 | 1 | Study is a PK/PD model in mice reporting fAUC/MIC ratios, but specific compartmental PK parameters (CL, V, ka) are not explicitly listed in the text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
