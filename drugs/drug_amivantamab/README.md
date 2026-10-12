<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;amivantamab&quot;}]"></div>

# amivantamab

- **generic name:** amivantamab
- **ATC codes:** `L01FX18`
- **DrugBank:** [DB16695](https://go.drugbank.com/drugs/DB16695) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Amivantamab is a monoclonal antibody used to treat non-small-cell lung cancer. It is an approved anticancer medicine authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106957199](https://www.wikidata.org/wiki/Q106957199) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:19 | 0:52 | 0/0/0 | 0/0/0 | 0/0/0 | 26,415/2,754 | openai / gpt-6-luna | 4 | 0/3 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amivantamab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: EGFR (antibody), EGFR (downregulator), FCGR3A (inducer), MET (antibody), MET (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Haddish-Berhane_2024.pdf` | Haddish-Berhane N et al., Determination and Confirmation of Recom…, Clinical pharmacology and t… (2024) | popPK | 10 | [10.1002/cpt.3064](https://doi.org/10.1002/cpt.3064) | [37776107](https://pubmed.ncbi.nlm.nih.gov/37776107) | A human amivantamab PopPK model is reported, but numeric disposition parameter values are not present in the evidence. |
| `Minchom_2026.pdf` | Minchom A et al., Subcutaneous Delivery of Amivantamab in…, Clinical lung cancer (2026) | popPK | 8 | [10.1016/j.cllc.2026.02.001](https://doi.org/10.1016/j.cllc.2026.02.001) | [41807198](https://pubmed.ncbi.nlm.nih.gov/41807198) | Population pharmacokinetic modeling is reported, but no numeric disposition parameters are provided in the evidence. |

<sub>queue written 2026-10-07T09:19:33.958513+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Haddish-Berhane_2024 | relevant | 10 | 0 | A human amivantamab PopPK model is reported, but numeric disposition parameter values are not present in the evidence. |
| popPK | Minchom_2026 | relevant | 8 | 0 | Population pharmacokinetic modeling is reported, but no numeric disposition parameters are provided in the evidence. |
| popPK | Ter_2023 | relevant | 8 | 1 | The study simulates amivantamab using a population-PK model, but its numeric parameter values and detailed results are not provided here. |
| popPK | Ter_2025 | irrelevant | 0 | 0 | The simulations quantify lazertinib exposure, not amivantamab pharmacokinetic parameters. |
| popPK | Tomasini_2026 | irrelevant | 0 | 0 | This human clinical outcomes study reports no quantitative pharmacokinetic parameters for amivantamab. |
| popPK | Yuan_2026 | relevant | 10 | 2 | The human population-PK model is relevant, but its numeric parameter values are only referenced in Table S3, which is not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
