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

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ponatinib | parent | 532.559 | C29H27F3N6O | DrugBank | [24826799](https://pubchem.ncbi.nlm.nih.gov/compound/24826799) | Hanley_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:28 | 5:27 | 0/1/1 | 3/0/1 | 0/0/0 | 146,754/29,856 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q71 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Hanley_2022_daily_ponatinib_dose](drugs/drug_ponatinib/Ponatinib_Hanley2022_daily_ponatinib_dose.md) | — | 1-compartment (no model) | 2 | Hanley MJ et al., Population Pharmacokinetics of Ponatini…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1990](https://doi.org/10.1002/jcph.1990) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Hanley_2022_estimate](drugs/drug_ponatinib/Ponatinib_Hanley2022_estimate.md) | — | 1-compartment (no model) | 1 (+2 cov.) | Hanley MJ et al., Population Pharmacokinetics of Ponatini…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1990](https://doi.org/10.1002/jcph.1990) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_in_A375_cells_free_Ponatinib](drugs/drug_ponatinib/pd_Husiev_2025_cell_growth_inhibition_in_A375_cells_free_Ponati.md) | cell-growth inhibition in A375 cells (free Ponatinib) ← Ponatinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_in_U_87MG_cells_free_Ponatinib](drugs/drug_ponatinib/pd_Husiev_2025_cell_growth_inhibition_in_U_87MG_cells_free_Pona.md) | cell-growth inhibition in U-87MG cells (free Ponatinib) ← Ponatinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kangussu-Marcolino_2022_Entamoeba_histolytica_trophozoites](drugs/drug_ponatinib/pd_Kangussu_Marcolino_2022_Entamoeba_histolytica_trophozoites.md) | Entamoeba histolytica trophozoites ← ponatinib · inhibition effect | — | Kangussu-Marcolino MM et al., Ponatinib, Lestaurtinib, and mTOR/PI3K…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01207-21](https://doi.org/10.1128/AAC.01207-21) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sauvey_2021_Percent_inhibition_of_E_histolytica_trophozoite_growth](drugs/drug_ponatinib/pd_Sauvey_2021_Percent_inhibition_of_E_histolytica_trophozoite_.md) | Percent inhibition of E. histolytica trophozoite growth ← ponatinib · inhibition effect | — | Sauvey C et al., Antineoplastic kinase inhibitors: A new…, PLoS neglected tropical dis… (2021) | [10.1371/journal.pntd.0008425](https://doi.org/10.1371/journal.pntd.0008425) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_AE](drugs/drug_ponatinib/pd_Hanley_2025_AE.md) | time to first AE‐related dose reduction or interruption from Day 1 of Cycle 1 to the end of induction ← ponatinib · time-to-event model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_AE_2](drugs/drug_ponatinib/pd_Hanley_2025_AE_2.md) | time to first AE‐related dose reduction or interruption after Day 1 of Cycle 4 ← ponatinib · time-to-event model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_ALT](drugs/drug_ponatinib/pd_Hanley_2025_ALT.md) | ALT increase ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_AOE](drugs/drug_ponatinib/pd_Hanley_2025_AOE.md) | AOEs ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_MRD_negative_CR](drugs/drug_ponatinib/pd_Hanley_2025_MRD_negative_CR.md) | MRD-negative CR at the end of induction ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_VTE](drugs/drug_ponatinib/pd_Hanley_2025_VTE.md) | VTEs ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_hypertension](drugs/drug_ponatinib/pd_Hanley_2025_hypertension.md) | hypertension ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_lipase_increase](drugs/drug_ponatinib/pd_Hanley_2025_lipase_increase.md) | lipase increase ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_thrombocytopenia](drugs/drug_ponatinib/pd_Hanley_2025_thrombocytopenia.md) | thrombocytopenia ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ponatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), BCR (inhibitor), FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGFR4 (inhibitor), FLT3 (inhibitor), KDR (inhibitor), KIT (inhibitor), LCK (inhibitor), LYN (inhibitor), PDGFRA (inhibitor), RET (inhibitor), SRC (inhibitor), TEK (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hanley_2025 | relevant | 10 | 1 | Human ponatinib population-PK analysis, but numeric disposition parameter values are not readable in the evidence provided. |
| popPK | Husiev_2025 | irrelevant | 0 | 0 | This photochemistry study reports no quantitative ponatinib pharmacokinetic parameters. |
| popPK | Jade_2023 | irrelevant | 0 | 0 | This is a computational RdRp docking study and reports no quantitative ponatinib disposition parameters. |
| popPK | Kangussu-Marcolino_2022 | irrelevant | 0 | 0 | This is an in-vitro anti-amebiasis screen and reports no ponatinib disposition parameters. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | This is an in-vitro anti-amoebic efficacy study, not a ponatinib disposition study; EC50 values are referenced in tables and figures not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:23 UTC</sub>
