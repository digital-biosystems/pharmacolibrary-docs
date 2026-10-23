<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;avalglucosidase alfa&quot;}]"></div>

# avalglucosidase alfa

- **generic name:** avalglucosidase alfa
- **ATC codes:** `A16AB22`
- **DrugBank:** [DB16099](https://go.drugbank.com/drugs/DB16099) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Avalglucosidase alfa is an enzyme medication used to treat glycogen storage disease type II (Pompe disease). It is authorised in the European Union and is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q107693067](https://www.wikidata.org/wiki/Q107693067) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Tiraboschi_2023_20_mg_kg](drugs/drug_avalglucosidase_alfa/AvalglucosidaseAlfa_Tiraboschi2023_20_mg_kg.md) | — | 1-compartment (no model) | 0 | Tiraboschi G et al., Population pharmacokinetic modeling and…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09874-8](https://doi.org/10.1007/s10928-023-09874-8) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ 40_mg_kg](drugs/drug_avalglucosidase_alfa/AvalglucosidaseAlfa_Tiraboschi2023_40_mg_kg.md) | — | 1-compartment (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ estimate_cv](drugs/drug_avalglucosidase_alfa/AvalglucosidaseAlfa_Tiraboschi2023_estimate_cv.md) | — | 2-compartment (no model) | 8 (+3 cov.) |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:11 | 12:01 | 0/3/0 | 0/0/0 | 0/0/0 | 249,454/33,603 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tuffal_2023.pdf` | Tuffal G et al., Population Pharmacokinetic Modeling and…, Therapeutic drug monitoring (2023) | popPK | 10 | [10.1097/FTD.0000000000001086](https://doi.org/10.1097/FTD.0000000000001086) | [37556417](https://pubmed.ncbi.nlm.nih.gov/37556417) | The paper describes a population PK model for avalglucosidase alfa in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, likely residing in tables or figures not included. |

<sub>queue written 2026-10-05T10:59:41.562916+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Anding_2023 | not_relevant | 1 | 0 | The paper is a preclinical study in mice focusing on the mechanism of M6P receptor binding and the effect of miglustat on enzyme stability/activity, but it does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) for avalglucosidase alfa. |
| popPK | Mendelsohn_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting functional and respiratory outcomes (FVC, 6MWT) rather than pharmacokinetic parameters (CL, V, t1/2) for avalglucosidase alfa. |
| PGx | Schoser_2026 | not_relevant | 0 | 0 | The paper defines clinical therapeutic stability thresholds for Pompe disease treatments but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Tuffal_2023 | relevant | 10 | 2 | The paper describes a population PK model for avalglucosidase alfa in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, likely residing in tables or figures not included. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 10:59 UTC</sub>
