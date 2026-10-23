<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;enfortumab vedotin&quot;}]"></div>

# enfortumab vedotin

- **generic name:** enfortumab vedotin
- **ATC codes:** `L01FX13`
- **DrugBank:** [DB13007](https://go.drugbank.com/drugs/DB13007) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Enfortumab vedotin, an antibody-drug conjugate, is used to treat urothelial (transitional cell) carcinoma. It is authorised in the European Union and is an approved cancer medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19904068](https://www.wikidata.org/wiki/Q19904068) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Zuo_2024_OS](drugs/drug_enfortumab_vedotin/pd_Zuo_2024_OS.md) | overall survival ← enfortumab vedotin · model not identified | — | Zuo P et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3383](https://doi.org/10.1002/cpt.3383) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Zuo_2024_grade_3_treatment_related_adverse_events](drugs/drug_enfortumab_vedotin/pd_Zuo_2024_grade_3_treatment_related_adverse_events.md) | grade ≥ 3 treatment-related adverse events ← enfortumab vedotin and free MMAE · model not identified | — | Zuo P et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3383](https://doi.org/10.1002/cpt.3383) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:36 | 0:38 | 0/0/0 | 0/1/0 | 0/0/0 | 10,351/2,691 | openai / gpt-6-luna | 2 | 1/1 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zuo_2024.pdf` | Zuo P et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2024) | popPK | 10 | [10.1002/cpt.3383](https://doi.org/10.1002/cpt.3383) | [39039635](https://pubmed.ncbi.nlm.nih.gov/39039635) | Human population-PK modeling is described, but numeric disposition parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T12:36:04.923759+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Miyake_2026 | irrelevant | 0 | 0 | The evidence only describes patient cohorts and reports no pharmacokinetic parameters. |
| popPK | Op_2025 | relevant | 8 | 3 | The study simulates enfortumab vedotin with a two-compartment population-PK model and reports numeric AUC and trough values, but not model parameter estimates. |
| popPK | Zuo_2024 | relevant | 10 | 0 | Human population-PK modeling is described, but numeric disposition parameter values are not present in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
