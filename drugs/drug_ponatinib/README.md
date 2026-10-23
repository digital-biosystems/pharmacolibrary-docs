<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ponatinib&quot;}]"></div>

# ponatinib

- **generic name:** ponatinib
- **ATC codes:** `L01EA05`
- **DrugBank:** [DB08901](https://go.drugbank.com/drugs/DB08901) · **PubChem:** [CID 24826799](https://pubchem.ncbi.nlm.nih.gov/compound/24826799)
- **molar mass:** 532.5595 g/mol (C29H27F3N6O) — DrugBank
- **groups:** approved, investigational

## About

Ponatinib is a tyrosine-kinase inhibitor used to treat certain leukemias, including myeloid and lymphoid forms. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q198728](https://www.wikidata.org/wiki/Q198728) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ponatinib | parent | 532.559 | C29H27F3N6O | DrugBank | [24826799](https://pubchem.ncbi.nlm.nih.gov/compound/24826799) | Hanley_2022 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 34.28 | L/h | 34.28 L/h | healthy volunteers and patients with hematologic malignancies | 260 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2022_daily_ponatinib_dose](drugs/drug_ponatinib/Ponatinib_Hanley2022_daily_ponatinib_dose.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q71 — no SI value to build from</sub> | [Hanley_2022_daily_ponatinib_dose](drugs/drug_ponatinib/Ponatinib_Hanley2022_daily_ponatinib_dose.md) | — | 1-compartment (no model) | 2 | Hanley MJ et al., Population Pharmacokinetics of Ponatini…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1990](https://doi.org/10.1002/jcph.1990) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ estimate](drugs/drug_ponatinib/Ponatinib_Hanley2022_estimate.md) | — | 1-compartment (no model) | 1 (+2 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_in_A375_cells_free_Ponatinib](drugs/drug_ponatinib/pd_Husiev_2025_cell_growth_inhibition_in_A375_cells_free_Ponati.md) | cell-growth inhibition in A375 cells (free Ponatinib) ← Ponatinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_in_U_87MG_cells_free_Ponatinib](drugs/drug_ponatinib/pd_Husiev_2025_cell_growth_inhibition_in_U_87MG_cells_free_Pona.md) | cell-growth inhibition in U-87MG cells (free Ponatinib) ← Ponatinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kangussu-Marcolino_2022_Entamoeba_histolytica_trophozoites](drugs/drug_ponatinib/pd_Kangussu_Marcolino_2022_Entamoeba_histolytica_trophozoites.md) | Entamoeba histolytica trophozoites ← ponatinib · inhibition effect | — | Kangussu-Marcolino MM et al., Ponatinib, Lestaurtinib, and mTOR/PI3K…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01207-21](https://doi.org/10.1128/AAC.01207-21) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sauvey_2021_Percent_inhibition_of_E_histolytica_trophozoite_growth](drugs/drug_ponatinib/pd_Sauvey_2021_Percent_inhibition_of_E_histolytica_trophozoite_.md) | Percent inhibition of E. histolytica trophozoite growth ← ponatinib · inhibition effect | — | Sauvey C et al., Antineoplastic kinase inhibitors: A new…, PLoS neglected tropical dis… (2021) | [10.1371/journal.pntd.0008425](https://doi.org/10.1371/journal.pntd.0008425) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_AE](drugs/drug_ponatinib/pd_Hanley_2025_AE.md) | time to first AE‐related dose reduction or interruption from Day 1 of Cycle 1 to the end of induction ← ponatinib · time-to-event model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_AE_2](drugs/drug_ponatinib/pd_Hanley_2025_AE_2.md) | time to first AE‐related dose reduction or interruption after Day 1 of Cycle 4 ← ponatinib · time-to-event model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_ALT](drugs/drug_ponatinib/pd_Hanley_2025_ALT.md) | ALT increase ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_AOE](drugs/drug_ponatinib/pd_Hanley_2025_AOE.md) | AOEs ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_MRD_negative_CR](drugs/drug_ponatinib/pd_Hanley_2025_MRD_negative_CR.md) | MRD-negative CR at the end of induction ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_VTE](drugs/drug_ponatinib/pd_Hanley_2025_VTE.md) | VTEs ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_hypertension](drugs/drug_ponatinib/pd_Hanley_2025_hypertension.md) | hypertension ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_lipase_increase](drugs/drug_ponatinib/pd_Hanley_2025_lipase_increase.md) | lipase increase ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanley_2025_thrombocytopenia](drugs/drug_ponatinib/pd_Hanley_2025_thrombocytopenia.md) | thrombocytopenia ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ponatinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), BCR (inhibitor), FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGFR4 (inhibitor), FLT3 (inhibitor), KDR (inhibitor), KIT (inhibitor), LCK (inhibitor), LYN (inhibitor), PDGFRA (inhibitor), RET (inhibitor), SRC (inhibitor), TEK (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:28 | 5:27 | 1/1/0 | 4/0/0 | 0/0/0 | 146,754/29,856 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hanley_2025 | relevant | 10 | 1 | Human ponatinib population-PK analysis, but numeric disposition parameter values are not readable in the evidence provided. |
| popPK | Husiev_2025 | irrelevant | 0 | 0 | This photochemistry study reports no quantitative ponatinib pharmacokinetic parameters. |
| popPK | Jade_2023 | irrelevant | 0 | 0 | This is a computational RdRp docking study and reports no quantitative ponatinib disposition parameters. |
| popPK | Kangussu-Marcolino_2022 | irrelevant | 0 | 0 | This is an in-vitro anti-amebiasis screen and reports no ponatinib disposition parameters. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | This is an in-vitro anti-amoebic efficacy study, not a ponatinib disposition study; EC50 values are referenced in tables and figures not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bponatinib%5D&body=Drug%3A%20ponatinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ponatinib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 05:23 UTC</sub>
