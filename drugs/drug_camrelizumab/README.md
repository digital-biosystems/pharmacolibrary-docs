<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;camrelizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Camrelizumab_Wang2021_base&quot;,&quot;label&quot;:&quot;Wang_2021_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camrelizumab/Camrelizumab_Wang2021_base.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Camrelizumab_Wang2021_final&quot;,&quot;label&quot;:&quot;Wang_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camrelizumab/Camrelizumab_Wang2021_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# camrelizumab

- **generic name:** camrelizumab
- **ATC codes:** `L01FF14`
- **DrugBank:** [DB14776](https://go.drugbank.com/drugs/DB14776) · **PubChem:** none
- **groups:** investigational

## About

Camrelizumab is a programmed cell death protein 1 inhibitor used to treat cancers. It is currently an investigational drug.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Wang_2021_base** — <span class="pk-badge pk-badge--blue">Simulated</span> patients with advanced melanoma, relapsed or refractory classical Hodgkin lymphoma, and other solid tumor types, n = 133. [Run it in the simulator](drugs/drug_camrelizumab/Camrelizumab_Wang2021_base.md?tab=Simulation) · [record](drugs/drug_camrelizumab/Camrelizumab_Wang2021_base.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.001</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">0.01</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">0.1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Wang_2021 · CL</text><circle cx="362.1" cy="30.0" r="4" fill="#ef6c00"><title>Wang_2021 · CL: 0.009625 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wang_2021 · CL</text><circle cx="365.6" cy="46.0" r="4" fill="#78909c"><title>Wang_2021 · CL: 0.01008 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Shang_2022 · V</text><circle cx="481.4" cy="30.0" r="4" fill="#ef6c00"><title>Shang_2022 · V: 6.8 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wang_2021 · V1</text><circle cx="360.5" cy="46.0" r="4" fill="#ef6c00"><title>Wang_2021 · V1: 3.07 L</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Wang_2021 · V1</text><circle cx="361.0" cy="62.0" r="4" fill="#78909c"><title>Wang_2021 · V1: 3.08 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Wang_2021_base](drugs/drug_camrelizumab/Camrelizumab_Wang2021_base.md) | ▶ model + simulator | 2-compartment, IV | 6 | Wang CY et al., Population pharmacokinetics of the anti…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: cross_check_disputed</sub> | [↳ final](drugs/drug_camrelizumab/Camrelizumab_Wang2021_final.md) | ▶ model + simulator | 2-compartment, IV | 6 (+2 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, k12, k13, k31 left at base-class defaults</sub> | [Shang_2022_reference](drugs/drug_camrelizumab/Camrelizumab_Shang2022_reference.md) | held back | 3-compartment, IV | 3 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:26 | 0:02 | 3/0/0 | 0/0/0 | 0/0/0 | 4,985/155 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hou_2023 | irrelevant | 0 | 0 | This is a Phase 2 clinical efficacy and safety study for camrelizumab in NSCLC patients, reporting no pharmacokinetic parameters or models. |
| PGx | Hou_2023 | not_relevant | 0 | 0 | The study is a clinical efficacy and safety trial of camrelizumab and does not investigate the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The study analyzes the population pharmacokinetics of camrelizumab but focuses exclusively on clinical and laboratory covariates (albumin, weight), containing no data or analysis regarding genetic variants or genotypes. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | This is a review and provides no quantitative camrelizumab disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcamrelizumab%5D&body=Drug%3A%20camrelizumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_camrelizumab/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 11:46 UTC</sub>
