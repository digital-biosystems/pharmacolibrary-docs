<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;amivantamab&quot;}]"></div>

# amivantamab

- **generic name:** amivantamab
- **ATC codes:** `L01FX18`
- **DrugBank:** [DB16695](https://go.drugbank.com/drugs/DB16695) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Amivantamab is a monoclonal antibody used to treat non-small-cell lung cancer. It is an approved anticancer medicine authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106957199](https://www.wikidata.org/wiki/Q106957199) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

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
| 2026-10-07 09:19 | 0:52 | 0/0/0 | 0/0/0 | 0/0/0 | 26,415/2,754 | openai / gpt-6-luna | 4 | 0/3 | 4/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
