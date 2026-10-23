<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;Relatlimab&quot;}]"></div>

# Relatlimab

- **generic name:** Relatlimab
- **ATC codes:** `L01FY02`
- **DrugBank:** [DB14851](https://go.drugbank.com/drugs/DB14851) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Relatlimab is a monoclonal antibody used as an anticancer agent in combination with another monoclonal antibody. It is an approved drug, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q58315670](https://www.wikidata.org/wiki/Q58315670) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Zhao_2024_1l_melanoma_geo_mean_cv](drugs/drug_relatlimab/Relatlimab_Zhao2024_1l_melanoma_geo_mean_cv.md) | — | 2-compartment (no model) | 8 | Zhao Y et al., Model-Informed Clinical Pharmacology Pr…, Clinical cancer research :… (2024) | [10.1158/1078-0432.CCR-23-2396](https://doi.org/10.1158/1078-0432.CCR-23-2396) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ melanoma_1l_prior_io_geo_mean_cv](drugs/drug_relatlimab/Relatlimab_Zhao2024_melanoma_1l_prior_io_geo_mean_cv.md) | — | 2-compartment (no model) | 8 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ prior_io_melanoma_geo_mean_cv](drugs/drug_relatlimab/Relatlimab_Zhao2024_prior_io_melanoma_geo_mean_cv.md) | — | 2-compartment (no model) | 8 |  |  |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=relatlimab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: LAG3 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:38 | 10:15 | 0/3/0 | 0/0/0 | 0/0/0 | 297,554/8,834 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gopalakrishnan_2024.pdf` | Gopalakrishnan M et al., Project Optimus Elicits the "Holistic"…, Clinical cancer research :… (2024) | pd | 5 | [10.1158/1078-0432.CCR-24-0553](https://doi.org/10.1158/1078-0432.CCR-24-0553) | [38743418](https://www.ncbi.nlm.nih.gov/pubmed/38743418) | metadata signals extractable PD data (PK/PD) |
| `Thomas_2023.pdf` | Thomas B et al., Nivolumab/Relatlimab-rmbw: A Novel Dual…, American journal of therape… (2023) | pd | 5 | [10.1097/MJT.0000000000001680](https://doi.org/10.1097/MJT.0000000000001680) | [37921680](https://www.ncbi.nlm.nih.gov/pubmed/37921680) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-10-07T19:32:06.749672+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhat_2025 | irrelevant | 0 | 0 | The paper is a scoping review of Model-Informed Drug Development (MIDD) and does not report specific quantitative pharmacokinetic parameters for relatlimab. |
| popPK | Christenson_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy study (Phase II) reporting response rates and tumor microenvironment changes, with no pharmacokinetic parameters or disposition data for relatlimab. |
| popPK | Christenson_2026 | irrelevant | 0 | 0 | The paper is a clinical trial of copanlisib and nivolumab for colorectal cancer and does not contain pharmacokinetic data for relatlimab. |
| popPK | Chun_2025 | irrelevant | 0 | 0 | The paper describes the design and efficacy of a de novo IL-21 mimic (21h10) and does not report pharmacokinetic parameters for relatlimab. |
| popPK | Cillo_2024 | irrelevant | 0 | 0 | The paper describes immunologic mechanisms and T-cell signatures in a clinical trial, reporting no pharmacokinetic parameters for relatlimab. |
| popPK | Gopalakrishnan_2024 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PGx | La-Beck_2024 | not_relevant | 0 | 0 | The paper is a review of immune-related adverse events and management guidelines; it does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Nada_2026 | irrelevant | 0 | 0 | The study focuses on a new small molecule LAG-3 inhibitor (LAGi-DEL) and uses relatlimab only as a comparator for efficacy, without reporting any pharmacokinetic parameters for relatlimab. |
| popPK | Quagliariello_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiotoxicity and immune activation, not a pharmacokinetic study, and reports no disposition parameters for relatlimab. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The paper is a multi-omics analysis of renal cell carcinoma focusing on ribosome biogenesis and prognostic modeling, with no mention of relatlimab or pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 19:32 UTC</sub>
