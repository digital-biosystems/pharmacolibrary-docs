<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;elotuzumab&quot;}]"></div>

# elotuzumab

- **generic name:** elotuzumab
- **ATC codes:** `L01FX08`
- **DrugBank:** [DB06317](https://go.drugbank.com/drugs/DB06317) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Elotuzumab is a monoclonal antibody used to treat multiple myeloma. It is an approved anticancer medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3723645](https://www.wikidata.org/wiki/Q3723645) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | — | L/h | 19 % | patients with relapsed and refractory multiple myeloma | 440 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ide_2022_reference](drugs/drug_elotuzumab/Elotuzumab_Ide2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Ide_2022_reference](drugs/drug_elotuzumab/Elotuzumab_Ide2022_reference.md) | — | 1-compartment (no model) | 1 | Ide T et al., Population pharmacokinetic and exposure…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04365-4](https://doi.org/10.1007/s00280-021-04365-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ide_2022_PFS](drugs/drug_elotuzumab/pd_Ide_2022_PFS.md) | progression-free survival ← elotuzumab · time-to-event model | — | Ide T et al., Population pharmacokinetic and exposure…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04365-4](https://doi.org/10.1007/s00280-021-04365-4) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ide_2022_grade_3_AEs](drugs/drug_elotuzumab/pd_Ide_2022_grade_3_AEs.md) | time to the first occurrence of grade 3 + AEs ← elotuzumab · time-to-event model | — | Ide T et al., Population pharmacokinetic and exposure…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04365-4](https://doi.org/10.1007/s00280-021-04365-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=elotuzumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SLAMF7 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:33 | 1:58 | 1/0/0 | 1/0/0 | 0/0/0 | 36,285/10,539 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gibiansky_2016.pdf` | Gibiansky L et al., Model-based pharmacokinetic analysis of…, Journal of pharmacokinetics… (2016) | popPK | 10 | [10.1007/s10928-016-9469-x](https://doi.org/10.1007/s10928-016-9469-x) | [26993283](https://pubmed.ncbi.nlm.nih.gov/26993283) | The human population-PK model is relevant, but numeric disposition parameter estimates are not included in the evidence. |
| `Ide_2021.pdf` | Ide T et al., Model-Based Determination of Elotuzumab…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1698](https://doi.org/10.1002/jcph.1698) | [32656777](https://pubmed.ncbi.nlm.nih.gov/32656777) | A human population-PK model is reported, but numeric disposition parameter estimates are not included in the evidence. |
| `Passey_2017.pdf` | Passey C et al., An Integrated Assessment of the Effects…, The AAPS journal (2017) | popPK | 8 | [10.1208/s12248-016-0033-9](https://doi.org/10.1208/s12248-016-0033-9) | [28070715](https://pubmed.ncbi.nlm.nih.gov/28070715) | Human population-PK modeling is described, but no numeric parameter values appear in the supplied evidence. |

<sub>queue written 2026-10-07T12:31:26.949770+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gibiansky_2016 | relevant | 10 | 2 | The human population-PK model is relevant, but numeric disposition parameter estimates are not included in the evidence. |
| popPK | Ide_2021 | relevant | 10 | 0 | A human population-PK model is reported, but numeric disposition parameter estimates are not included in the evidence. |
| popPK | Passey_2017 | relevant | 8 | 0 | Human population-PK modeling is described, but no numeric parameter values appear in the supplied evidence. |
| popPK | Passey_2018 | irrelevant | 2 | 0 | This is a clinical pharmacology review that mentions population PK but provides no numeric disposition parameter values in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:31 UTC</sub>
