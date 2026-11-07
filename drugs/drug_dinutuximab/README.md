<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dinutuximab&quot;}]"></div>

# dinutuximab

- **generic name:** dinutuximab
- **ATC codes:** `L01FX06`
- **DrugBank:** [DB09077](https://go.drugbank.com/drugs/DB09077) · **PubChem:** none
- **groups:** approved, investigational

## About

Dinutuximab is a monoclonal antibody anticancer drug used to treat neuroblastoma. It is authorised in the European Union, though one EU product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21011236](https://www.wikidata.org/wiki/Q21011236) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47, Q301, Q302 — no SI value to bu…</sub> | [Marachelian_2016_ch14_18_nci](drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_nci.md) | — | 2-compartment (no model) | 8 | Marachelian A et al., Comparative pharmacokinetics, safety, a…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-015-2955-9](https://doi.org/10.1007/s00280-015-2955-9) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, k12 left at base-class defaults</sub> | [↳ ch14_18_utc](drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc.md) | held back | 2-compartment, IV | 8 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47, Q301, Q302 — no SI value to bu…</sub> | [↳ ch14_18_utc_and_ch14_18_nci_combined](drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc_and_ch14_18_nci_comb.md) | — | 2-compartment (no model) | 8 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Federico_2017_PK](drugs/drug_dinutuximab/pd_Federico_2017_PK.md) | hu14.18K322A pharmacokinetics · model not identified | — | Federico SM et al., A Pilot Trial of Humanized Anti-GD2 Mon…, Clinical cancer research :… (2017) | [10.1158/1078-0432.ccr-17-0379](https://doi.org/10.1158/1078-0432.ccr-17-0379) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dinutuximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GD2 disialoganglioside (binder), GD2 disialoganglioside (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 13:36 | 6:43 | 3/0/0 | 0/1/0 | 0/0/0 | 154,261/32,253 | einfracz / qwen3.8-27b | 7 | 0/4 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Navid_2014.pdf` | Navid F et al., Phase I trial of a novel anti-GD2 monoc…, Journal of clinical oncolog… (2014) | popPK | 10 | [10.1200/jco.2013.50.4423](https://doi.org/10.1200/jco.2013.50.4423) | [24711551](https://pubmed.ncbi.nlm.nih.gov/24711551) | Reports quantitative PK parameters (alpha and beta half-lives) for dinutuximab (hu14.18K322A) in a human phase I trial, though specific clearance and volume values are not explicitly listed in the evidence provided. |

<sub>queue written 2026-10-13 13:31 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bishop_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of hu14.18K322A, a distinct antibody, while dinutuximab is only mentioned as background/comparator. |
| PGx | Cheung_2021 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of a GD2/GD3 vaccine and its association with a DEC2 SNP, not the PK or PD parameters of dinutuximab. |
| popPK | DeSantes_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of enoblituzumab, not dinutuximab. |
| PGx | Desai_2022 | not_relevant | 0 | 0 | The paper reports an association between FCGR3A genotype and clinical outcome (EFS), not a pharmacokinetic or pharmacodynamic parameter of dinutuximab. |
| popPK | Federico_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hu14.18K322A, not dinutuximab, which is a different anti-GD2 monoclonal antibody. |
| popPK | Navid_2014 | relevant | 10 | 4 | Reports quantitative PK parameters (alpha and beta half-lives) for dinutuximab (hu14.18K322A) in a human phase I trial, though specific clearance and volume values are not explicitly listed in the evidence provided. |
| popPK | Saleh_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ch14.18 (a chimeric anti-GD2 monoclonal antibody), which is a different drug from dinutuximab. |
| PGx | Saleh_1992 | not_relevant | 0 | 0 | The paper reports pharmacokinetics for ch14.18, not dinutuximab, and does not investigate any pharmacogenomic effects. |
| PGx | Seitz_2021 | not_relevant | 0 | 0 | The study reports that FcGR polymorphism did not impact survival but does not report a change in a specific PK or PD parameter of dinutuximab driven by a gene variant. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdinutuximab%5D&body=Drug%3A%20dinutuximab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dinutuximab/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-13 13:31 UTC</sub>
