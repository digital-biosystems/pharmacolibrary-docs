<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;elotuzumab&quot;}]"></div>

# elotuzumab

- **generic name:** elotuzumab
- **ATC codes:** `L01FX08`
- **DrugBank:** [DB06317](https://go.drugbank.com/drugs/DB06317) · **PubChem:** none
- **groups:** approved, investigational

## About

Elotuzumab is a monoclonal antibody medication used to treat multiple myeloma. It is given intravenously as an injection prepared from powder. It is authorised in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3723645](https://www.wikidata.org/wiki/Q3723645), [Wikipedia](https://en.wikipedia.org/wiki/Elotuzumab?oldid=1385604957) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Ide_2022_reference](drugs/drug_elotuzumab/Elotuzumab_Ide2022_reference.md) | — | 1-compartment (no model) | 1 | Ide T et al., Population pharmacokinetic and exposure…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04365-4](https://doi.org/10.1007/s00280-021-04365-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Gibiansky_2016_reference](drugs/drug_elotuzumab/Elotuzumab_Gibiansky2016_reference.md) | — | 1-compartment (no model) | 0 | Gibiansky L et al., Model-based pharmacokinetic analysis of…, Journal of pharmacokinetics… (2016) | [10.1007/s10928-016-9469-x](https://doi.org/10.1007/s10928-016-9469-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ide_2022_PFS](drugs/drug_elotuzumab/pd_Ide_2022_PFS.md) | progression-free survival ← elotuzumab · time-to-event model | — | Ide T et al., Population pharmacokinetic and exposure…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04365-4](https://doi.org/10.1007/s00280-021-04365-4) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ide_2022_grade_3_AEs](drugs/drug_elotuzumab/pd_Ide_2022_grade_3_AEs.md) | time to the first occurrence of grade 3 + AEs ← elotuzumab · time-to-event model | — | Ide T et al., Population pharmacokinetic and exposure…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04365-4](https://doi.org/10.1007/s00280-021-04365-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:46 | 0:04 | 1/1/0 | 2/0/0 | 0/0/0 | 4,036/169 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Gibiansky_2016 | not_relevant | 0 | 0 | The study analyzes non-genetic covariates (body weight, M-protein, ADAs) and does not report pharmacogenomic effects. |
| popPK | Ide_2021 | relevant | 10 | 2 | The paper describes a population PK model for elotuzumab with specific parameter names (CL, Vmax, Vc), but the evidence provided contains only qualitative descriptions of effects and relative exposures, lacking specific numeric parameter values (e.g., clearance in L/h, volume in L). |
| PGx | Ide_2021 | not_relevant | 0 | 10 | The study investigates population pharmacokinetics in a specific ethnic group (Japanese), not the effect of specific gene variants/genotypes. |
| popPK | Passey_2017 | irrelevant | 2 | 0 | The paper discusses immunogenicity effects and mentions PK modeling qualitatively (higher Vmax, lower KM) but provides no quantitative PK parameter values for elotuzumab. |
| PGx | Passey_2017 | not_relevant | 0 | 0 | The paper analyzes the effect of immunogenicity (Anti-Drug Antibodies) on pharmacokinetics, not the effect of genetic variants or genotypes. |
| popPK | Passey_2018 | irrelevant | 2 | 0 | This is a clinical pharmacology review that mentions population PK data and dosing appropriateness but does not provide specific quantitative parameter values (CL, V, etc.) in the extracted text. |
| PGx | Passey_2018 | not_relevant | 0 | 0 | The paper is a clinical pharmacology review that mentions ethnicity has minimal effects on exposure, but it does not report specific gene variants, genotypes, or phenotypes altering PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Belotuzumab%5D&body=Drug%3A%20elotuzumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_elotuzumab/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:45 UTC</sub>
