<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pegcetacoplan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pegcetacoplan_Crass2025_transformed_estimate&quot;,&quot;label&quot;:&quot;Crass_2025_transformed_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pegcetacoplan

- **generic name:** pegcetacoplan
- **ATC codes:** `L04AJ03`, `S01XA31`
- **DrugBank:** [DB16694](https://go.drugbank.com/drugs/DB16694) · **PubChem:** none
- **groups:** approved, investigational

## About

Pegcetacoplan is a complement inhibitor used to treat paroxysmal nocturnal hemoglobinuria. It is authorised in the European Union and also has ophthalmological uses, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106863504](https://www.wikidata.org/wiki/Q106863504) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Crass_2025_transformed_estimate** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with geographic atrophy or neovascular age-related macular degeneration, n = ,. [Run it in the simulator](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md?tab=Simulation) · [record](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.01354 | L/h | 0.325 L/day | patients with geographic atrophy or neovascular age-related macular degeneration | , | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Crass_2025_transformed_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md) |
| V | V/F | 0.603 | L | 0.603 L | patients with geographic atrophy or neovascular age-related macular degeneration | , | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Crass_2025_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_estimate.md) |
| V | V/F | 1.83 | L | 1.83 L | patients with geographic atrophy or neovascular age-related macular degeneration | , | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Crass_2025_transformed_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md) |
| ka | kabs | 0.0022 | 1/h | 0.0528 day À1 | patients with geographic atrophy or neovascular age-related macular degeneration | , | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Crass_2025_transformed_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Crass_2025 · V/F</text><circle cx="326.6" cy="30.0" r="4" fill="#ef6c00"><title>Crass_2025 · V/F: 0.603 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Crass_2025 · V/F</text><circle cx="410.9" cy="46.0" r="4" fill="#ef6c00"><title>Crass_2025 · V/F: 1.83 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Crass_2025_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_estimate.md) | — | 1-compartment (no model) | 1 | Crass RL et al., Population Pharmacokinetics of Pegcetac…, Ophthalmology science (2025) | [10.1016/j.xops.2024.100657](https://doi.org/10.1016/j.xops.2024.100657) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: T1_cmax</sub> | [↳ transformed_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Crass_2024_reference](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2024_reference.md) | — | 1-compartment (no model) | 2 | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Crass_2025_2_reference](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025v2_reference.md) | — | 1-compartment (no model) | 2 | Crass RL et al., Pharmacokinetic/pharmacodynamic analysi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13264](https://doi.org/10.1002/psp4.13264) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Crass_2024_Hb](drugs/drug_pegcetacoplan/pd_Crass_2024_Hb.md) | hemoglobin ← pegcetacoplan · direct sigmoid Emax (Hill) effect | model (no simulator) | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Crass_2024_LDH](drugs/drug_pegcetacoplan/pd_Crass_2024_LDH.md) | lactate dehydrogenase ← pegcetacoplan · direct sigmoid Emax (Hill) effect | model (no simulator) | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Crass_2025_2_GA_lesion_area](drugs/drug_pegcetacoplan/pd_Crass_2025_2_GA_lesion_area.md) | GA lesion area ← pegcetacoplan · disease-progression model | — | Crass RL et al., Pharmacokinetic/pharmacodynamic analysi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13264](https://doi.org/10.1002/psp4.13264) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pegcetacoplan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: C3 (binder), C3 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:09 | 1:04 | 2/2/0 | 2/0/0 | 0/0/0 | 84,747/6,398 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crass_2025_2 | relevant | 4 | 5 | The paper is primarily a PD analysis but reports derived PK parameters (clearance 0.36 L/day, half-life 8.6 days) from a referenced population PK model in the text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpegcetacoplan%5D&body=Drug%3A%20pegcetacoplan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pegcetacoplan/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 00:08 UTC</sub>
