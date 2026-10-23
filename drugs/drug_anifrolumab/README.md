<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anifrolumab&quot;}]"></div>

# anifrolumab

- **generic name:** anifrolumab
- **ATC codes:** `L04AG11`
- **DrugBank:** [DB11976](https://go.drugbank.com/drugs/DB11976) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Anifrolumab is a monoclonal antibody used to treat systemic lupus erythematosus. It is approved and authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.008042 | L/h | 0.193 L/day | healthy volunteers and patients with systemic lupus erythematosus | # 670 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Almquist_2022_reference](drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference.md) |
| V | V1 | 2.93 | L | 2.93 L | healthy volunteers and patients with systemic lupus erythematosus | # 670 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Almquist_2022_reference](drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q56 — no SI value to build from</sub> | [Almquist_2022_reference](drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference.md) | — | 2-compartment (no model) | 7 | Almquist J et al., Nonlinear Population Pharmacokinetics o…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2055](https://doi.org/10.1002/jcph.2055) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=anifrolumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IFNAR1 (inhibitor), IFNAR2 (target), IFNGR2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:39 | 0:40 | 1/0/0 | 0/0/0 | 0/0/0 | 80,333/2,668 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chia_2021.pdf` | Chia YL et al., Exposure-response analysis for selectio…, Rheumatology (Oxford, Engla… (2021) | popPK | 10 | [10.1093/rheumatology/keab176](https://doi.org/10.1093/rheumatology/keab176) | [33629110](https://pubmed.ncbi.nlm.nih.gov/33629110) | The paper describes a population PK model for anifrolumab in humans, but the evidence provided only contains qualitative descriptions of covariates (weight, IFNGS) and conclusions regarding dosage, without listing specific numeric parameter estimates (CL, V, Q, etc.). |

<sub>queue written 2026-10-06T23:38:43.500012+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chia_2021 | relevant | 10 | 2 | The paper describes a population PK model for anifrolumab in humans, but the evidence provided only contains qualitative descriptions of covariates (weight, IFNGS) and conclusions regarding dosage, without listing specific numeric parameter estimates (CL, V, Q, etc.). |
| popPK | Chia_2022 | irrelevant | 2 | 0 | The study is an exposure-response analysis using model-predicted concentrations but does not report specific quantitative population PK parameters (CL, V, Q, etc.) for anifrolumab. |
| popPK | Chia_2022_2 | relevant | 9 | 2 | The paper analyzes PK/PD relationships and uses a compartmental population PK model for anifrolumab, but the specific quantitative disposition parameters (CL, V, Q) are in Table 2 or Supplementary Material, which are not provided; only concentration metrics (Ctrough, Cave, IC80) are visible in the text. |
| popPK | Rademacher_2026 | irrelevant | 0 | 0 | The study analyzes clinical outcomes (SLEDAI scores) and serological biomarkers (complement, anti-dsDNA) in SLE patients, reporting no pharmacokinetic parameters (CL, V, ka) for anifrolumab. |
| popPK | Tang_2023 | relevant | 4 | 8 | This is a review article summarizing quantitative PK parameters (CL, t1/2, AUC) from original clinical trials, with values present in the text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:38 UTC</sub>
