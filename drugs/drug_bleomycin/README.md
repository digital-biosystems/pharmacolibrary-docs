<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;bleomycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bleomycin_Kramer1978_group_i&quot;,&quot;label&quot;:&quot;Kramer_1978_group_i&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Kramer1978_iii&quot;,&quot;label&quot;:&quot;Kramer_1978_iii&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_iii.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Wilde2007_reference&quot;,&quot;label&quot;:&quot;Wilde_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Wilde2007_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Yadav2023_reference&quot;,&quot;label&quot;:&quot;Yadav_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Yadav2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# bleomycin

- **generic name:** bleomycin
- **ATC codes:** `L01DC01`
- **DrugBank:** [DB00290](https://go.drugbank.com/drugs/DB00290) · **PubChem:** [CID 5360373](https://pubchem.ncbi.nlm.nih.gov/compound/5360373)
- **molar mass:** 1415.552 g/mol (C55H84N17O21S3) — DrugBank
- **groups:** approved, investigational

## About

Bleomycin is a cytotoxic antibiotic used as an anticancer medicine to treat various types of cancer. It is an approved cancer drug, used in oncology treatment, and has also been investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105203558](https://www.wikidata.org/wiki/Q105203558) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bleomycin | parent | 1415.55 | C55H84N17O21S3 | DrugBank | [5360373](https://pubchem.ncbi.nlm.nih.gov/compound/5360373) | Giri_1986, Hall_1982, Kramer_1978 |

## Start here

> **Kramer_1978_group_i** — <span class="pk-badge pk-badge--green">Reproduces paper</span> patients with neoplastic disorders, n = 15. [Run it in the simulator](drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md?tab=Simulation) · [record](drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.009042 ‡ | L/h | 3.1 mL/day/kg | review reference |  | human + animal | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Yadav_2023_reference](drugs/drug_bleomycin/Bleomycin_Yadav2023_reference.md) |
| CL | CL | 0.009083 | L/h | 218.0 mL/day | male Golden Syrian hamsters | — animals sacrificed in groups of 4 at 7 time points (0.5, 0.75, 1.5, 3, 6, 12, 24 hr). This suggests 4 animals per time point. Usually in such papers, the total n is reported or calculated as sum of animals at all time points if independent, but often it's just the group size if the same animals were sampled (impossible here as they were sacrificed). So likely 4 animals per time point. The text says 'sacrificed in groups of four'. It doesn't state total N clearly as a single integer for the 'analysis' in a poppk sense, but 28 animals (7 timepoints * 4) is a reasonable inference or 'unknown'. However, looking at the prompt example, n_subjects is a plain integer. Let's look at the text: | other animal | <span class="pk-badge pk-badge--orange">Needs review</span> | [Giri_1986_reference](drugs/drug_bleomycin/Bleomycin_Giri1986_reference.md) |
| CL | CL | 0.009083 | L/h | 218.0 mL/day | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Han_2024_reference](drugs/drug_bleomycin/Bleomycin_Han2024_reference.md) |
| CL | CL | 12.88 | L/h | 12.88 L/h | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhao_2025_reference](drugs/drug_bleomycin/Bleomycin_Zhao2025_reference.md) |
| CL | CL | 57.72 | L/h | 0.962 L/min | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wilde_2007_reference](drugs/drug_bleomycin/Bleomycin_Wilde2007_reference.md) |
| CL | CL | — | L/h | 46.5 | cancer patients | &gt;=19 | unknown | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hall_1982_abnormal_renal](drugs/drug_bleomycin/Bleomycin_Hall1982_abnormal_renal.md) |
| CL | CL | — | L/h | 60.5 | cancer patients | &gt;=19 | unknown | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hall_1982_all_patients](drugs/drug_bleomycin/Bleomycin_Hall1982_all_patients.md) |
| CL | CL | — | L/h | 63.8 | cancer patients | &gt;=19 | unknown | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hall_1982_patients_with](drugs/drug_bleomycin/Bleomycin_Hall1982_patients_with.md) |
| V | V | 3.538 | L | 3.5376 L | review reference |  | human + animal | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Yadav_2023_reference](drugs/drug_bleomycin/Bleomycin_Yadav2023_reference.md) |
| V | V | 6.29 | L | 6290.0 mL | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Han_2024_reference](drugs/drug_bleomycin/Bleomycin_Han2024_reference.md) |
| V | V | 24.78 ‡ | L | .354 liters/kg | patients with neoplastic disorders | 15 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kramer_1978_ii](drugs/drug_bleomycin/Bleomycin_Kramer1978_ii.md) |
| V | V | 121.8 ‡ | L | 1.74 liters/kg | patients with neoplastic disorders | 15 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kramer_1978_iii](drugs/drug_bleomycin/Bleomycin_Kramer1978_iii.md) |
| V | V | 157.5 ‡ | L | 2.25 liters/kg | patients with neoplastic disorders | 15 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kramer_1978_group_i](drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md) |
| V | V | 1400 ‡ | L | 20.0 L/kg | male Golden Syrian hamsters | — animals sacrificed in groups of 4 at 7 time points (0.5, 0.75, 1.5, 3, 6, 12, 24 hr). This suggests 4 animals per time point. Usually in such papers, the total n is reported or calculated as sum of animals at all time points if independent, but often it's just the group size if the same animals were sampled (impossible here as they were sacrificed). So likely 4 animals per time point. The text says 'sacrificed in groups of four'. It doesn't state total N clearly as a single integer for the 'analysis' in a poppk sense, but 28 animals (7 timepoints * 4) is a reasonable inference or 'unknown'. However, looking at the prompt example, n_subjects is a plain integer. Let's look at the text: | other animal | <span class="pk-badge pk-badge--orange">Needs review</span> | [Giri_1986_reference](drugs/drug_bleomycin/Bleomycin_Giri1986_reference.md) |
| V | V | — | L | 17.2 | cancer patients | &gt;=19 | unknown | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hall_1982_abnormal_renal](drugs/drug_bleomycin/Bleomycin_Hall1982_abnormal_renal.md) |
| V | V | — | L | 19.2 | cancer patients | &gt;=19 | unknown | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hall_1982_all_patients](drugs/drug_bleomycin/Bleomycin_Hall1982_all_patients.md) |
| V | V | — | L | 20.5 | cancer patients | &gt;=19 | unknown | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hall_1982_patients_with](drugs/drug_bleomycin/Bleomycin_Hall1982_patients_with.md) |
| V | V1 | 44.3 | L | 44.3 L | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wilde_2007_reference](drugs/drug_bleomycin/Bleomycin_Wilde2007_reference.md) |
| V | V1 | 72.04 | L | 72.04 L | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhao_2025_reference](drugs/drug_bleomycin/Bleomycin_Zhao2025_reference.md) |
| t½ | t1/2z | 2.03 | h | 2.03 hr | patients with neoplastic disorders | 15 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kramer_1978_ii](drugs/drug_bleomycin/Bleomycin_Kramer1978_ii.md) |
| t½ | t1/2z | 9.53 | h | 9.53 hr | patients with neoplastic disorders | 15 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kramer_1978_iii](drugs/drug_bleomycin/Bleomycin_Kramer1978_iii.md) |
| t½ | t1/2z | 14.5 | h | 14.5 hr | patients with neoplastic disorders | 15 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kramer_1978_group_i](drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="128" viewBox="0 0 560 128" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="106" stroke="#ddd"/><text x="190.0" y="120" font-size="10" text-anchor="middle">0.001</text><line x1="260.0" y1="18" x2="260.0" y2="106" stroke="#ddd"/><text x="260.0" y="120" font-size="10" text-anchor="middle">0.01</text><line x1="330.0" y1="18" x2="330.0" y2="106" stroke="#ddd"/><text x="330.0" y="120" font-size="10" text-anchor="middle">0.1</text><line x1="400.0" y1="18" x2="400.0" y2="106" stroke="#ddd"/><text x="400.0" y="120" font-size="10" text-anchor="middle">1</text><line x1="470.0" y1="18" x2="470.0" y2="106" stroke="#ddd"/><text x="470.0" y="120" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="106" stroke="#ddd"/><text x="540.0" y="120" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Yadav_2023 · CL ·/kg</text><circle cx="256.9" cy="30.0" r="4" fill="#2e7d32"><title>Yadav_2023 · CL ·/kg: 0.009042 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Giri_1986 · CL</text><circle cx="257.1" cy="46.0" r="4" fill="#ef6c00"><title>Giri_1986 · CL: 0.009083 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Han_2024 · CL</text><circle cx="257.1" cy="62.0" r="4" fill="#ef6c00"><title>Han_2024 · CL: 0.009083 L/h</title></circle><text x="184" y="82.0" font-size="11" text-anchor="end">Zhao_2025 · CL</text><circle cx="477.7" cy="78.0" r="4" fill="#2e7d32"><title>Zhao_2025 · CL: 12.88 L/h</title></circle><text x="184" y="98.0" font-size="11" text-anchor="end">Wilde_2007 · CL</text><circle cx="523.3" cy="94.0" r="4" fill="#2e7d32"><title>Wilde_2007 · CL: 57.72 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="176" viewBox="0 0 560 176" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="154" stroke="#ddd"/><text x="190.0" y="168" font-size="10" text-anchor="middle">1</text><line x1="277.5" y1="18" x2="277.5" y2="154" stroke="#ddd"/><text x="277.5" y="168" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="154" stroke="#ddd"/><text x="365.0" y="168" font-size="10" text-anchor="middle">100</text><line x1="452.5" y1="18" x2="452.5" y2="154" stroke="#ddd"/><text x="452.5" y="168" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="154" stroke="#ddd"/><text x="540.0" y="168" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Yadav_2023 · V</text><circle cx="238.0" cy="30.0" r="4" fill="#2e7d32"><title>Yadav_2023 · V: 3.538 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Han_2024 · V</text><circle cx="259.9" cy="46.0" r="4" fill="#ef6c00"><title>Han_2024 · V: 6.29 L</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Kramer_1978 · V ·/kg</text><circle cx="312.0" cy="62.0" r="4" fill="#ef6c00"><title>Kramer_1978 · V ·/kg: 24.78 L</title></circle><text x="184" y="82.0" font-size="11" text-anchor="end">Kramer_1978 · V ·/kg</text><circle cx="372.5" cy="78.0" r="4" fill="#2e7d32"><title>Kramer_1978 · V ·/kg: 121.8 L</title></circle><text x="184" y="98.0" font-size="11" text-anchor="end">Kramer_1978 · V ·/kg</text><circle cx="382.3" cy="94.0" r="4" fill="#2e7d32"><title>Kramer_1978 · V ·/kg: 157.5 L</title></circle><text x="184" y="114.0" font-size="11" text-anchor="end">Giri_1986 · V ·/kg</text><circle cx="465.3" cy="110.0" r="4" fill="#ef6c00"><title>Giri_1986 · V ·/kg: 1400 L</title></circle><text x="184" y="130.0" font-size="11" text-anchor="end">Wilde_2007 · V1</text><circle cx="334.1" cy="126.0" r="4" fill="#2e7d32"><title>Wilde_2007 · V1: 44.3 L</title></circle><text x="184" y="146.0" font-size="11" text-anchor="end">Zhao_2025 · V1</text><circle cx="352.5" cy="142.0" r="4" fill="#2e7d32"><title>Zhao_2025 · V1: 72.04 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kramer_1978_group_i](drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kramer WG et al., The pharmacokinetics of bleomycin in man, Journal of clinical pharmac… (1978) | [10.1002/j.1552-4604.1978.tb01604.x](https://doi.org/10.1002/j.1552-4604.1978.tb01604.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [↳ iii](drugs/drug_bleomycin/Bleomycin_Kramer1978_iii.md) | ▶ model + simulator | 1-compartment, IV | 3 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q30 — no SI value to build from</sub> | [↳ ii](drugs/drug_bleomycin/Bleomycin_Kramer1978_ii.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wilde_2007_reference](drugs/drug_bleomycin/Bleomycin_Wilde2007_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Wilde S et al., Population pharmacokinetics of the BEAC…, Clinical pharmacokinetics (2007) | [10.2165/00003088-200746040-00005](https://doi.org/10.2165/00003088-200746040-00005) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Yadav_2023_reference](drugs/drug_bleomycin/Bleomycin_Yadav2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Yadav R et al., Utilizing PK and PD Biomarkers to Guide…, Journal of pharmaceutical s… (2023) | [10.1016/j.xphs.2023.07.005](https://doi.org/10.1016/j.xphs.2023.07.005) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhao_2025_reference](drugs/drug_bleomycin/Bleomycin_Zhao2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Zhao J et al., Population pharmacokinetic model of hig…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1548203](https://doi.org/10.3389/fphar.2025.1548203) |
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other animal</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Giri_1986_reference](drugs/drug_bleomycin/Bleomycin_Giri1986_reference.md) | — | 1-compartment (no model) | 3 | Giri SN, Pharmacokinetics, subcellular distribut…, Experimental and molecular… (1986) | [10.1016/0014-4800(86)90060-2](https://doi.org/10.1016/0014-4800(86)90060-2) |
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub> | [Hall_1982_abnormal_renal](drugs/drug_bleomycin/Bleomycin_Hall1982_abnormal_renal.md) | — | 1-compartment (no model) | 2 | StephenWHall Department of Medicine Reno School of Medicine Reno Veterans Administration University of Nevada 1000 Locust St. 89520 Reno Nevada et al., ancer hemotherapy harmacology (1982) | — |
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub> | [↳ all_patients](drugs/drug_bleomycin/Bleomycin_Hall1982_all_patients.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub> | [↳ patients_with](drugs/drug_bleomycin/Bleomycin_Hall1982_patients_with.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Han_2024_reference](drugs/drug_bleomycin/Bleomycin_Han2024_reference.md) | — | 1-compartment (no model) | 2 | Han LW et al., A Phase 1a Study to Evaluate Safety, To…, Rheumatology and therapy (2024) | [10.1007/s40744-024-00670-5](https://doi.org/10.1007/s40744-024-00670-5) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub> | [Schober_1978_2_reference](drugs/drug_bleomycin/Bleomycin_Schober1978v2_reference.md) | — | 1-compartment (no model) | 5 | Schober O et al., [Studies of 57-co-bleomycin in patients…, RoFo : Fortschritte auf dem… (1978) | [10.1055/s-0029-1230942](https://doi.org/10.1055/s-0029-1230942) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | **G6PD** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Signoretti_2026](drugs/drug_bleomycin/pgx_Signoretti_2026_G6PD_safety.md) | Signoretti C et al., Bleomycin-induced lung fibrosis and dys…, American journal of physiol… (2026) | [10.1152/ajplung.00193.2025](https://doi.org/10.1152/ajplung.00193.2025) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other animal</span> | **scb-1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Brady_2019](drugs/drug_bleomycin/pgx_Brady_2019_scb_1_Q100.md) | Brady SC et al., A Novel Gene Underlies Bleomycin-Respon…, Genetics (2019) | [10.1534/genetics.119.302286](https://doi.org/10.1534/genetics.119.302286) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **BLMH** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Jóna_2016](drugs/drug_bleomycin/pgx_J_na_2016_BLMH_Q100.md) | Jóna Á et al., Effect of Bleomycin Hydrolase Gene Poly…, PloS one (2016) | [10.1371/journal.pone.0157651](https://doi.org/10.1371/journal.pone.0157651) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **BLHX** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Tuimala_2002](drugs/drug_bleomycin/pgx_Tuimala_2002_BLHX_Q100.md) | Tuimala J et al., Genetic polymorphisms of DNA repair and…, Carcinogenesis (2002) | [10.1093/carcin/23.6.1003](https://doi.org/10.1093/carcin/23.6.1003) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **XRCC1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Tuimala_2002](drugs/drug_bleomycin/pgx_Tuimala_2002_XRCC1_Q100.md) | Tuimala J et al., Genetic polymorphisms of DNA repair and…, Carcinogenesis (2002) | [10.1093/carcin/23.6.1003](https://doi.org/10.1093/carcin/23.6.1003) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **BLMH** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [de_2008](drugs/drug_bleomycin/pgx_de_2008_BLMH_Q100.md) | de Haas EC et al., Variation in bleomycin hydrolase gene i…, Journal of clinical oncolog… (2008) | [10.1200/JCO.2007.14.1606](https://doi.org/10.1200/JCO.2007.14.1606) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Adverse drug reactions (ADR)

73 reaction(s) reported in 41 paper(s). Read from the full texts by a language model, which also wrote the one-sentence descriptions; each sentence quoted under a reaction was checked to occur in the paper, the rest is not checked by a person. Frequencies are as the papers print them, for their own populations and definitions.

### Blood

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Neutropenia | In 119 testicular cancer patients treated with BEP chemotherapy, neutropenia occurred in 53.45% of patients at any grade and 39.66% experienced severe (grades III-IV) neutropenia, with an association observed between cumulative bleomycin dose and the reaction. | 53.45% | cumulative bleomycin; GSTM1 (GSTM1 poor/intermediate vs extensive/ultrahigh) | hospital: blood count | [Lavanderos 2019](https://pubmed.ncbi.nlm.nih.gov/30914949), [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |
| Anemia | The paper states that anemia was one of the grade III/IV toxicity episodes recorded in patients treated with ABVD chemotherapy, but it does not provide specific incidence rates or details for anemia alone. | — | — | — | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |
| Leukopenia | The paper states that a decrease in total WBC counts of &gt; 35% relative to pretreatment values was considered indicative of drug-induced leukopenia, but notes that reductions in the total WBC counts induced by BLM were all less than 35%. | — | — | laboratory: total white blood cell (WBC) counts | [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948) |
| Loss of heterozygosity | Zeocin treatment increased the rate of genomic alterations, including loss of heterozygosity (LOH), in the yeast strain QSS4 by about 900-fold compared to the spontaneous rate. | about 900-fold | — | laboratory: custom SNP-specific microarray | [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) |
| Myelosuppression | The paper lists mild myelosuppression as one of the side effects of bleomycin. | — | — | — | [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) |
| Neutropenic fever | Neutropenic fever occurs in approximately 10-15% of patients receiving etoposide and cisplatin and it is more common with the addition of bleomycin. | approximately 10-15% | — | — | [Del 2017](https://pubmed.ncbi.nlm.nih.gov/28620445) |

<details><summary>Evidence: neutropenia (2)</summary>

> “Besides, neutropenia was associated with both, cumulative or cumulative by average dose of cisplatin or etoposide, and cumulative bleomycin.” — [Lavanderos 2019](https://pubmed.ncbi.nlm.nih.gov/30914949) <sub>(cohort)</sub>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(cohort)</sub>

</details>

<details><summary>Evidence: Anemia (1)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(case series)</sub>

</details>

<details><summary>Evidence: leukopenia (1)</summary>

> “The total WBC counts were determined 3, 5, and 7 days after dosing, with a decrease in total WBC counts of &gt; 35% relative to pretreatment values being considered indicative of drug-induced leukopenia. Reductions in the total WBC counts induced by BLM were all less than 35%.” — [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948) <sub>(animal)</sub>

</details>

<details><summary>Evidence: loss of heterozygosity (1)</summary>

> “Thus, Zeocin elevates the frequency of LOH events by about 900-fold at a whole gnome level.” — [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) <sub>(in vitro)</sub>

</details>

<details><summary>Evidence: Myelosuppression (1)</summary>

> “Among its side effects are allergic reactions, mucositis, mild myelosuppression, hyperkeratosis and pigmentation changes of the skin, and, in particular, pulmonary fibrosis.” — [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) <sub>(review)</sub>

</details>

<details><summary>Evidence: neutropenic fever (1)</summary>

> “Neutropenic fever occurs in approximately 10-15% of patients receiving etoposide and cisplatin and it is more common with the addition of bleomycin [5].” — [Del 2017](https://pubmed.ncbi.nlm.nih.gov/28620445) <sub>(case report)</sub>

</details>

### Cardiovascular

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Pulmonary hypertension | The paper reports that bleomycin (BLM) challenge evoked PH (indicated by decreased PAAT-to-ET ratio and increased right ventricle free wall thickness) in G6PD S188F rats, but not in WT littermates. | — | G6PD S188F variant | hospital: Pulmonary hypertension; hospital: PAAT-to-ET ratio | [Signoretti 2026](https://pubmed.ncbi.nlm.nih.gov/41401977), [Marriott 2014](https://pubmed.ncbi.nlm.nih.gov/25122876) |
| Cardiac toxicity | Cardiac toxicity was one of the grade III/IV toxicity episodes recorded in the 126 patients with Hodgkin lymphoma treated with the ABVD chemotherapy regimen. | — | GSTM1 genotype associated with extensive or ultrahigh activity (GSTM1 extensive/ultrahigh activity genotype); Radiotherapy | — | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |
| Pulmonary vascular disease | In mice treated with bleomycin, the βOE strain (with stabilized β-catenin in ABCG2+ MPCs) exhibited increased Fulton indices indicative of PVD relative to WT mice. | — | stabilized β-catenin (βOE) in ABCG2+ MPCs (Ctnnb1) | — | [Gaskill 2017](https://pubmed.ncbi.nlm.nih.gov/28463231) |
| Right ventricular hypertrophy | Right ventricle free wall thickness increased in G6PD S188F variant rats compared to wild-type rats and G6PD S188F control rats after bleomycin nebulization. | P = 0.0001 | G6PD S188F variant | — | [Signoretti 2026](https://pubmed.ncbi.nlm.nih.gov/41401977) |

<details><summary>Evidence: Pulmonary hypertension (2)</summary>

> “PAAT-to-ET ratio decreased (P ¼ 0.013) in G6PD S188F þ BLM rats as compared with WT þ BLM and G6PD S188F control rats (Fig. 2A). Interestingly, PAAT-to-ET ratio negatively correlated with tissue volume (Fig. 2B).” — [Signoretti 2026](https://pubmed.ncbi.nlm.nih.gov/41401977) <sub>(animal)</sub>

> “Intratracheal administration of bleomycin elicits PF, inflammation, and associated PH, contemporaneous with loss of extant resident lung MSC. Associated PH was documented by measurement of right ventricular systolic pressure (RVSP) as previously described (16,94).” — [Marriott 2014](https://pubmed.ncbi.nlm.nih.gov/25122876) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Cardiac toxicity (1)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(cohort)</sub>

</details>

<details><summary>Evidence: Pulmonary vascular disease (1)</summary>

> “In response to bleomycin, relative to WT mice, the βOE mice had increased mortality, increased fibrosis as measured by Ashcroft scoring and collagen content, as well as increased Fulton indices, indicative of PVD (Figure 4, A-D, F and G).” — [Gaskill 2017](https://pubmed.ncbi.nlm.nih.gov/28463231) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Right ventricular hypertrophy (1)</summary>

> “Furthermore, right ventricle free wall thickness increased (P ¼ 0.0001) in G6PD S188F þ BLM rats as compared with WT þ BLM and G6PD S188F control rats (Fig. 2C).” — [Signoretti 2026](https://pubmed.ncbi.nlm.nih.gov/41401977) <sub>(animal)</sub>

</details>

### Gastrointestinal

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Gastrointestinal irritation | The paper notes that bleomycin's off-target effects can lead to mild gastrointestinal irritation in patients. | — | — | — | [Brady 2019](https://pubmed.ncbi.nlm.nih.gov/31171655) |
| Nausea | Nausea was one of the grade III/IV toxicity episodes recorded in patients treated with the ABVD regimen. | — | — | — | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |
| Vomiting | Vomiting was recorded as a grade III/IV toxicity episode in 126 patients with Hodgkin lymphoma treated with the ABVD regimen (doxorubicin, bleomycin, vinblastine and dacarbazine). | — | — | — | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |

<details><summary>Evidence: gastrointestinal irritation (1)</summary>

> “Although the cytotoxicity of bleomycin can reliably induce cell death in tumor cells, off-target effects can lead to a range of harmful consequences, from mild gastrointestinal irritation to severe bleomycin-induced pulmonary fibrosis (Blum et al. 1973).” — [Brady 2019](https://pubmed.ncbi.nlm.nih.gov/31171655) <sub>(case report)</sub>

</details>

<details><summary>Evidence: Nausea (1)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(case series)</sub>

</details>

<details><summary>Evidence: Vomiting (1)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(case series)</sub>

</details>

### General

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Weight loss | Following administration of bleomycin, wildtype mice lost weight, with peak loss occurring 7 to 10 days post-treatment, in an animal study where 4 of 13 treated animals reached the humane endpoint for weight loss. | 4 of 13 | — | hospital: weight; hospital: cardiac | [van 2022](https://pubmed.ncbi.nlm.nih.gov/36309093), [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777), [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753), [Skibba 2025](https://pubmed.ncbi.nlm.nih.gov/40604997) |
| Cytotoxicity | Bleomycin exposure resulted in a 4-fold greater toxicity in ovarian fibroblast (CHO-K1) cells compared to lung fibroblast (V79) cells. | — | cell line origin (ovary vs lung) | — | [Mokaleng 2009](https://pubmed.ncbi.nlm.nih.gov/19448732), [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912), [Gowda 2017](https://pubmed.ncbi.nlm.nih.gov/28067485) |
| Fever | A febrile response, possibly from the release of endogenous pyrogen, occurs in up to 50% of the patients treated. | up to 50% | — | hospital: fever | [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940), [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) |
| Aneuploidy | Zeocin treatment increased the rate of aneuploidy by 657-fold over the baseline spontaneous rate in yeast strain QSS4. | 657-fold | — | — | [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) |
| Chromosomal instability | The paper states that treatment with Zeocin (a member of the bleomycin family) increased the rate of genomic alterations, including aneuploidy, loss of heterozygosity (LOH), and chromosomal rearrangement over a hundred-fold in a yeast model. | over a hundred-fold | PDR1 deletion (PDR1 deleted) | — | [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) |
| Decreased body weight | A significant decrease in body weight was observed in male C57BL/6 mice after 2 U/kg intratracheal bleomycin administration, with the treated group remaining significantly lower in weight than controls on day 21. | all mice in the bleomycin group (n = 8) ... remained significantly lower that the saline control group (n = 7) | 2 U/kg, i.t. bleomycin | — | [Phillips 2012](https://pubmed.ncbi.nlm.nih.gov/22024054) |
| Decreased weight | Animals dosed with bleomycin and vehicle alone had no change in body weight over the course of the study, far below the 25%-35% change in weight for naive animals, indicating bleomycin toxicity in mice. | — | — | primary_care: body weight | [Pawelec 2022](https://pubmed.ncbi.nlm.nih.gov/36426895) |
| DNA double-strand breaks | Treatment with Zeocin in the yeast strain QSS4 leads to recombination events that are likely initiated by DNA double-stand breaks directly generated by the drug. | over a hundred-fold | glutathione or ascorbic acid; PDR1 deletion | — | [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) |
| Hemorrhagic cystitis | Hemorrhagic cystitis was recorded as one of the grade III/IV toxicity episodes in the study cohort. | — | — | — | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |
| Increased somatic mutation burden | The paper reports that excess single-base substitutions (SBSs) were not obviously associated with the cytotoxic antibiotic bleomycin in the studied chemotherapy-exposed individuals. | — | — | — | [Mitchell 2025](https://pubmed.ncbi.nlm.nih.gov/40596443) |
| Mortality | In mice administered an LD50 dose of bleomycin (2.2 U/kg), 50% mortality was observed by day 14. | 50% mortality rate | — | — | [Skibba 2025](https://pubmed.ncbi.nlm.nih.gov/40604997) |
| Oxidative stress | Bleomycin induces oxidative stress through the generation of reactive oxygen species via its interaction with Fe2+ and O2, resulting in direct damage to bronchiolar epithelial cells and depletion of antioxidant markers (serum TAC, lung GSH) in rats. | — | — | hospital: lung tissue | [Zaher 2026](https://pubmed.ncbi.nlm.nih.gov/41901641) |
| Pain | The paper reports that 44 out of 119 patients (36.97%) experienced pain, and that the BLMH rs1050565 G/G genotype was associated with severe (grades III–IV) pain in a recessive model. | 36.97% (any grades); 4.20% (severe grades III-IV) | BLMH rs1050565 G/G (BLMH G); CYP3A4 rs2740574 A/G (CYP3A4 A/G) | — | [Lavanderos 2019](https://pubmed.ncbi.nlm.nih.gov/30914949) |
| Treatment failure | Patients with classical Hodgkin lymphoma and HRS cells positive for ABCC1 had a higher risk of not responding to standard chemotherapy regimens compared to those with negative expression. | 7/16 | ABCC1 expression | — | [Greaves 2012](https://pubmed.ncbi.nlm.nih.gov/22871336) |

<details><summary>Evidence: Weight loss (4)</summary>

> “Following administration of bleomycin, wildtype mice lost weight with peak weight loss occurring 7 to 10 days after the administration of bleomycin, after which mice started to regain weight (Fig. 5).” — [van 2022](https://pubmed.ncbi.nlm.nih.gov/36309093) <sub>(animal)</sub>

> “However, bleomycin induced skin rash, fever, weight loss, and elevations of the serum creatinine level must be monitored carefully by an experienced medical oncologist, and this regimen does require inpatient hospitalization for at least one week.” — [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) <sub>(review)</sub>

> “Following the administration of BLM, there was a significant decrease in body weight among the rats compared to the blank group.” — [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) <sub>(animal)</sub>

> “As expected, bleomycin treatment induced a significant weight loss during the initial inflammatory phase (Fig. 6B).” — [Skibba 2025](https://pubmed.ncbi.nlm.nih.gov/40604997) <sub>(case series)</sub>

</details>

<details><summary>Evidence: cytotoxicity (3)</summary>

> “The cellular response pattern was the same for bleomycin exposure, with the drug exhibiting a 4-fold greater toxicity in the CHO-K1 cells than in the V79 cells (Fig. 1C).” — [Mokaleng 2009](https://pubmed.ncbi.nlm.nih.gov/19448732) <sub>(in vitro)</sub>

> “The addition of glutathione and ascorbic acid increased cell viability by 32% and 27%, respectively (t test, P &lt; 0.01; Fig. 6a). These observations agreed well with the results of several studies showing that antioxidants protected mammalian cells against the cytotoxicity of BLMs (Mira et al. 2013).” — [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) <sub>(in vitro)</sub>

> “The synergistic activity shown by the combination of bleomycin and honokiol suggests that they can be used as combination therapy for treatment of cancer, which will decrease the therapeutic dosage and side effects of bleomycin.” — [Gowda 2017](https://pubmed.ncbi.nlm.nih.gov/28067485) <sub>(case report)</sub>

</details>

<details><summary>Evidence: fever (2)</summary>

> “A febrile response, possibly from the release of endogenous pyrogen, occurs in up to 50% of the patients treated (Di-narello et aL 1973).” — [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) <sub>(case series)</sub>

> “However, bleomycin induced skin rash, fever, weight loss, and elevations of the serum creatinine level must be monitored carefully by an experienced medical oncologist, and this regimen does require inpatient hospitalization for at least one week.” — [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) <sub>(review)</sub>

</details>

<details><summary>Evidence: aneuploidy (1)</summary>

> “Zeocin treatment increased the rate of aneuploidy by 657-fold over this baseline.” — [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) <sub>(case series)</sub>

</details>

<details><summary>Evidence: chromosomal instability (1)</summary>

> “We found that Zeocin (a member of the bleomycin family) treatment increased the rate of genomic alterations, including aneuploidy, loss of heterozygosity (LOH), and chromosomal rearrangement over a hundred-fold.” — [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) <sub>(in vitro)</sub>

</details>

<details><summary>Evidence: decreased body weight (1)</summary>

> “A significant decrease in body weight after 2 U/kg, i.t. bleomycin administration was initially observed (Fig. 1). The average body weight of the bleomycin treated group (25.1 AE 0.6 g) remained significantly lower that the saline control group (26.8 AE 0.4 g) on day 21.” — [Phillips 2012](https://pubmed.ncbi.nlm.nih.gov/22024054) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Decreased weight (1)</summary>

> “Animals dosed with bleomycin and vehicle alone had no change in body weight over the course of the study, far below the 25%-35% change in weight for naive animals, so there was clear evidence of bleomycin toxicity, albeit milder than is often seen in other studies.” — [Pawelec 2022](https://pubmed.ncbi.nlm.nih.gov/36426895) <sub>(animal)</sub>

</details>

<details><summary>Evidence: DNA double-strand breaks (1)</summary>

> “Most recombination events are likely to be initiated by DNA double-stand breaks directly generated by Zeocin.” — [Sheng 2019](https://pubmed.ncbi.nlm.nih.gov/31053912) <sub>(in vitro)</sub>

</details>

<details><summary>Evidence: Hemorrhagic cystitis (1)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(case report)</sub>

</details>

<details><summary>Evidence: Increased somatic mutation burden (1)</summary>

> “Excess SBSs and specific SBS mutational signatures were not obviously associated with topoisomerase inhibitors (which cause DNA strand breaks), vinca alkaloids (which inhibit microtubule formation during cell division) and the cytotoxic antibiotic bleomycin (which is thought to bind and cleave DNA).” — [Mitchell 2025](https://pubmed.ncbi.nlm.nih.gov/40596443) <sub>(case report)</sub>

</details>

<details><summary>Evidence: Mortality (1)</summary>

> “Importantly, the bleomycin-treated mice had a 50% mortality rate by day 14.” — [Skibba 2025](https://pubmed.ncbi.nlm.nih.gov/40604997) <sub>(animal)</sub>

</details>

<details><summary>Evidence: oxidative stress (1)</summary>

> “BLM exerts its toxic effects by inducing oxidative stress through the generation of reactive oxygen species (ROS) via its interaction with Fe2+ and O2, resulting in direct damage to bronchiolar epithelial cells [26].” — [Zaher 2026](https://pubmed.ncbi.nlm.nih.gov/41901641) <sub>(animal)</sub>

</details>

<details><summary>Evidence: pain (1)</summary>

> “The BLMH rs1050565 G/G genotype was found to be associated with pain... Our observation is in line with the report from White and coworkers who showed an association between acute chest pain and bleomycin infusion (White et al., 1987).” — [Lavanderos 2019](https://pubmed.ncbi.nlm.nih.gov/30914949) <sub>(cohort)</sub>

</details>

<details><summary>Evidence: treatment failure (1)</summary>

> “Multivariate analysis after adjusting for hemoglobin and albumin levels and age showed that patients with CHL with HRS cells positive for ABCC1 had a higher risk of not responding to treatment (HR = 2.84, 95%, CI: 1.12-7.19 p = 0.028).” — [Greaves 2012](https://pubmed.ncbi.nlm.nih.gov/22871336) <sub>(cohort)</sub>

</details>

### Immune / hypersensitivity

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Anaphylactic reaction | The paper states that anaphylactic reactions are among the toxic effects of bleomycin but provides no further details on frequency, severity, or specific symptoms in the provided text. | — | — | — | [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) |
| Febrile neutropenia | 15 out of 119 patients treated with BEP chemotherapy developed severe (grade III–IV) febrile neutropenia, an association linked in multivariate analysis to specific ERCC1 genotypes and cumulative bleomycin dose. | 15 | ERCC1 rs11615 T/T (ERCC1 T); cumulative dose of bleomycin; ERCC2 rs238406 C/A + A/A (ERCC2 A) | — | [Lavanderos 2019](https://pubmed.ncbi.nlm.nih.gov/30914949) |

<details><summary>Evidence: anaphylactic reaction (1)</summary>

> “Toxic effects may include mucositis, dermatitis, anaphylactic reactions, and rarely pulmonary fibrosis.” — [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) <sub>(review)</sub>

</details>

<details><summary>Evidence: febrile neutropenia (1)</summary>

> “We observed that the cumulative dose of bleomycin; bleomycin dose by average or bleomycin cycles by range were associate with febrile neutropenia as well as cisplatin dose by range. ... Table 5 show only statistically significant association models for severe ADRs. We obtained significant models for febrile neutropenia, leukopenia, vomiting, nausea, and alopecia.” — [Lavanderos 2019](https://pubmed.ncbi.nlm.nih.gov/30914949) <sub>(case-control)</sub>

</details>

### Infection

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Infections | The paper lists infections among the grade III/IV toxicity episodes recorded for the 126 patients treated with the ABVD regimen, but does not provide specific frequencies, causality attribution to bleomycin, or detailed clinical descriptions for this specific reaction. | — | — | — | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |
| Infusion-related reaction | One of the most frequently reported adverse events was observed in the highest dose IV cohort, occurring in 1 participant (2.8%) of the RO7303509 group and 2 participants (15.4%) of the placebo group. | 1 (2.8) RO7303509 IV; 2 (15.4) Placebo IV | — | — | [Han 2024](https://pubmed.ncbi.nlm.nih.gov/38662148) |

<details><summary>Evidence: Infections (1)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(cohort)</sub>

</details>

<details><summary>Evidence: Infusion-related reaction (1)</summary>

> “The most frequently reported AEs were injection site reaction (highest dose SC cohort) and infusion-related reaction (highest dose IV cohort). All of these AEs were grade 1, required no supportive care, were considered related to study drug, and were observed in both active and placebo-treated participants.” — [Han 2024](https://pubmed.ncbi.nlm.nih.gov/38662148) <sub>(case report)</sub>

</details>

### Kidney and urinary tract

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Nephrotoxicity | In male BDF1 mice, some incidences of BUN values -&gt; 30 rag% occurred after administration of BLM, which were considered indicative of drug-induced nephrotoxicity. | some incidences | — | laboratory: unknown | [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948) |
| Renal dysfunction | The paper states that concurrent use of bleomycin with nephrotoxic drugs, such as methotrexate and cisplatin, can cause renal dysfunction, but does not specify the patient population size or the frequency of this occurrence in the study cohort. | — | concurrent use of nephrotoxic drugs, such as MTX and cisplatin | — | [Zhao 2025](https://pubmed.ncbi.nlm.nih.gov/40385482) |
| Renal toxicity | Renal toxicity was one of the grade III/IV toxicity episodes recorded in patients with Hodgkin lymphoma treated with ABVD chemotherapy, assessed according to National Cancer Institute criteria. | — | — | — | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |

<details><summary>Evidence: nephrotoxicity (1)</summary>

> “There were some incidences of BUN values --&gt; 30 rag% with both drugs. ... BUN values -&gt; 30 rag% and SGPT values ---40 international units (IU) were considered indicative of drug-induced nephrotoxicity or hepatotoxicity, respectively.” — [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948) <sub>(animal)</sub>

</details>

<details><summary>Evidence: renal dysfunction (1)</summary>

> “Concurrent use of BLM with nephrotoxic drugs, such as MTX and cisplatin, can cause renal dysfunction (Dalgleish et al., 1984). Approximately 65% of BLM is eliminated via kidneys, renal impairment can reduce its CL, leading to drug accumulation and an increased risk of pulmonary toxicity (Dalgleish et al., 1984; BLENOXANE, 2010; Sleijfer et al., 1996).” — [Zhao 2025](https://pubmed.ncbi.nlm.nih.gov/40385482) <sub>(other)</sub>

</details>

<details><summary>Evidence: Renal toxicity (1)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(case series)</sub>

</details>

### Liver

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Hepatotoxicity | Bleomycin caused increased SGPT levels in nearly all the mice tested, with almost all BLM-treated mice having SGPT values &gt; 40 IU on day 5. | almost all | — | laboratory: SGPT | [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948) |

<details><summary>Evidence: hepatotoxicity (1)</summary>

> “In contrast, almost all of the BLM-treated mice had SGPT values -&gt; 40 IU on day 5.” — [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948) <sub>(animal)</sub>

</details>

### Musculoskeletal

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Mucositis | The paper lists mucositis as one of the grade III/IV toxicity episodes recorded in 126 patients with Hodgkin lymphoma treated with ABVD chemotherapy. | — | — | — | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945), [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) |
| Pain in extremity | Pain in extremity was reported in 2 of the 36 participants (5.6%) receiving RO7303509, specifically occurring in the subcutaneous administration groups (2 cases among 18 SC-treated participants). | 2 (5.6) | — | — | [Han 2024](https://pubmed.ncbi.nlm.nih.gov/38662148) |
| Stomatitis | Mucocutaneous toxicities, including stomatitis, are common in patients treated with bleomycin at dosages used clinically, and their incidence and severity are dose related. | common | dose | — | [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) |

<details><summary>Evidence: Mucositis (2)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(case report)</sub>

> “Among its side effects are allergic reactions, mucositis, mild myelosuppression, hyperkeratosis and pigmentation changes of the skin, and, in particular, pulmonary fibrosis.” — [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) <sub>(review)</sub>

</details>

<details><summary>Evidence: Pain in extremity (1)</summary>

> “Pain in extremity | 0 | 0 | 0 | 0 | 0 | 0 | 1 (16.7) | 1 (16.7) | 2 (11.1) | 0 | 2 (5.6) | 0 | 2 (4.1)” — [Han 2024](https://pubmed.ncbi.nlm.nih.gov/38662148) <sub>(case report)</sub>

</details>

<details><summary>Evidence: stomatitis (1)</summary>

> “Mucocutaneous toxicities, including stomatitis, alopecia, hyperpigmentation of skin, and hyperkeratosis are common, and the incidence and severity are dose related.” — [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) <sub>(review)</sub>

</details>

### Respiratory

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Pulmonary fibrosis | The paper states that bleomycin is associated with an approximate 1% risk for death due to bleomycin-induced pulmonary fibrosis, and that in a study of 835 patients, 6.8% were affected by bleomycin-associated pulmonary disease. | approximate 1% risk for death | bleomycin hydrolase gene polymorphism (bleomycin hydrolase A1450G); glomerular filtration rate; age; cumulative dose | hospital: lung; laboratory: hydroxyproline (HP) content | [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143), [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777), [Marshall 1997](https://pubmed.ncbi.nlm.nih.gov/9076945), [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948), [Möbus 2025](https://pubmed.ncbi.nlm.nih.gov/40623988), [Gaskill 2017](https://pubmed.ncbi.nlm.nih.gov/28463231) +10 |
| Pulmonary toxicity | Patients carrying the XPO5 AA or CC genotype had a higher incidence of bleomycin-associated pulmonary toxicity than those with the AC genotype (10% vs. 1%; P = 0.048). | 5% | XPO5 rs11077 AA or CC (XPO5 AA or CC); XPO5 rs11077 AC (XPO5 AC); ABVD treatment strategy (unknown unknown); advanced age (unknown unknown) | hospital: St. George Respiratory Questionnaire (SGRQ); hospital: spirometry | [Navarro 2013](https://pubmed.ncbi.nlm.nih.gov/23705004), [Jóna 2016](https://pubmed.ncbi.nlm.nih.gov/27327270), [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940), [Kramer 1978](https://pubmed.ncbi.nlm.nih.gov/78932), [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948), [Thakkar 2018](https://pubmed.ncbi.nlm.nih.gov/29683071) +3 |
| Lung fibrosis | In a mouse model, intratracheal administration of bleomycin (2 U/kg) resulted in a significant increase in lung fibrosis histopathology scores in all 8 treated animals (mean 4.9 AE 0.4) compared to saline controls (score 0) at day 21. | all mice in the bleomycin group (n ¼ 8) | lung tissue-specific damage | — | [Phillips 2012](https://pubmed.ncbi.nlm.nih.gov/22024054), [He 2016](https://pubmed.ncbi.nlm.nih.gov/27376254), [Pawelec 2022](https://pubmed.ncbi.nlm.nih.gov/36426895) |
| Pulmonary inflammation | The paper reports that SFTPC-Muc5bTg mice challenged with bleomycin developed chronic inflammation, which was reduced by treatment with the mucolytic agent P-2119. | — | Muc5b overexpression (SFTPC promoter) (Muc5b Tg) | laboratory: inflammation severity | [Hancock 2018](https://pubmed.ncbi.nlm.nih.gov/30560893), [Phillips 2012](https://pubmed.ncbi.nlm.nih.gov/22024054), [Kim 2010](https://pubmed.ncbi.nlm.nih.gov/24278527) |
| Pneumonitis | Bleomycin-induced pneumonitis developed in 50 of 418 bleomycin-treated patients, resulting in death in 8 patients and premature cessation of bleomycin administration in 24 patients. | 50 (12%) | older; lower pretreatment creatinine clearance | hospital: clinical and/or radiographic signs of BIP | [Nuver 2005](https://pubmed.ncbi.nlm.nih.gov/15900213), [Jóna 2016](https://pubmed.ncbi.nlm.nih.gov/27327270) |
| Acute bleomycin-induced lung injury | Among the 102 Hodgkin lymphoma patients who received bleomycin-containing therapy, only one acute bleomycin-induced lung injury was documented. | 1/102 | BLMH gene SNP A1450G (BLMH A/G or G/G vs A/A); chest irradiation; use of colony stimulating factors; renal function | laboratory: lung function; primary_care: lung scintigraphy | [Jóna 2016](https://pubmed.ncbi.nlm.nih.gov/27327270) |
| Bleomycin-induced pulmonary fibrosis | Bleomycin can lead to severe bleomycin-induced pulmonary fibrosis as an off-target effect in patients. | — | — | — | [Brady 2019](https://pubmed.ncbi.nlm.nih.gov/31171655) |
| Cough | Cough is a symptom significantly associated with the development of CT assessed lung toxicity in patients with IGCCCG good prognosis metastatic germ cell tumours treated with bleomycin. | — | older patients | home: cough | [Shamash 2017](https://pubmed.ncbi.nlm.nih.gov/28327896) |
| Decreased lung function | Bleomycin challenge decreased lung function (decreased inspiration volume and increased tissue volume) in G6PD S188F rats. | — | G6PD S188F variant | — | [Signoretti 2026](https://pubmed.ncbi.nlm.nih.gov/41401977) |
| Dyspnea | At 3 months, self-reported dyspnea had increased by approximately 18 points in patients treated with BEP chemotherapy, with long-term levels not differing from baseline and 16% of patients recording worsening at 2 years. | 16% | — | — | [Fosså 2003](https://pubmed.ncbi.nlm.nih.gov/12637478) |
| Fatal toxicity | The paper states that fatal toxicity is reported even at low doses of bleomycin. | An estimated 335% of patients develop pulmonary fibrosis | low doses | — | [Marshall 1997](https://pubmed.ncbi.nlm.nih.gov/9076945) |
| Fibrosis | In rats treated with bleomycin (BLM), pulmonary fibrosis was induced, characterized by a significant increase in collagen fibers deposition and severe bleeding, which was mitigated by the administration of curcumin or nintedanib nanoparticles. | — | — | hospital: body weight; hospital: lung coefficient | [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) |
| Hemorrhage | Focal hemorrhages were observed in the lung tissue of rats treated with bleomycin (5 mg/kg), characterized by a prominent presence of red blood cells. | — | — | — | [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) |
| Idiopathic pulmonary fibrosis | In Sprague-Dawley rats, idiopathic pulmonary fibrosis was induced through a single administration of 50 µL of BLM solution (5 mg mL-1) via intratracheal instillation, characterized by fibrosis, collagen accumulation, and decreased lung function. | — | — | — | [Kang 2022](https://doi.org/10.1080/10717544.2022.2149899) |
| Inflammation | Bleomycin induces oxidative stress in rat lung tissue, which is associated with elevated levels of inflammatory markers TGF-β1 and IL-6. | — | — | — | [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) |
| Interstitial lung disease | Bleomycin sulfate is associated with drug-induced interstitial lung disease, characterized in animal models by patchy inflammation, reactive epithelial hyperplasia, infiltration of inflammatory cells, and remodeling of the extracellular matrix, which can lead to a lifelong decrease in lung function… | — | Intraperitoneal administration at 15 mg/kg twice weekly over 4 weeks induced lung fibrosis; 20 mg/kg caused substantial weight loss and death in mice.; Prednisolone | — | [Pawelec 2022](https://pubmed.ncbi.nlm.nih.gov/36426895) |
| Interstitial pneumonitis | Patients treated with bleomycin as a chemotherapeutic may develop interstitial pneumonitis as a spontaneous adverse outcome. | — | — | — | [Möbus 2025](https://pubmed.ncbi.nlm.nih.gov/40623988) |
| Lung inflammation | Mice receiving bleomycin in the lungs experience an initial inflammatory phase lasting 7 to 10 days. | — | — | — | [van 2022](https://pubmed.ncbi.nlm.nih.gov/36309093) |
| Lung injury | In a study of genetically engineered mice (Scgb1a1-Muc5bTg and SFTPC-Muc5bTg), the paper reports that following bleomycin challenge, these mice demonstrated substantial lung injury, which was noted to be less prominent in Muc5b−/− mice. | — | Muc5b overexpression (Scgb1a1-Muc5bTg, SFTPC-Muc5bTg) (Muc5b Transgene) | — | [Hancock 2018](https://pubmed.ncbi.nlm.nih.gov/30560893) |
| Lung toxicity | The paper states that the clinical use of bleomycin is limited by lung toxicity and that it can cause fibrosis reminiscent of interstitial lung diseases including IPF. | — | — | — | [van 2022](https://pubmed.ncbi.nlm.nih.gov/36309093) |
| Pneumotoxicity | It was concluded from the findings of this study that the presence of a major portion of [3H]BLM in the SF of the lung and its covalent linkage with the proteins of this fraction might initiate the complex sequence of events at the metabolic level necessary for the pneumotoxicity. | — | — | — | [Giri 1986](https://pubmed.ncbi.nlm.nih.gov/2429861) |
| Pulmonary edema | The paper states that the lung coefficient is a crucial indicator of pulmonary edema reflecting the severity of pulmonary fibrosis in rats, and notes that the limited efficacy of the API in alleviating pulmonary edema may be attributed to its inadequate absorption and low bioavailability in vivo. | — | 5 mg/kg bleomycin (unknown unknown) | — | [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) |
| Pulmonary injury | Bleomycin-containing regimens are reported to cause lung injury in 20–46% of Hodgkin lymphoma patients, a toxicity linked to the drug's free radical-producing capacity and the absence of bleomycin hydrolase in the lungs. | 20–46% | BLMH SNP A1450G (rs1050565) (BLMH A1450G); cumulative bleomycin dose; chest irradiation; colony stimulating factors | home: lung function/quality of life; hospital: lung clearance | [Jóna 2016](https://pubmed.ncbi.nlm.nih.gov/27327270) |
| Respiratory failure | Without the intervention of therapeutics, the build-up of ECM in the lungs impairs tissue elasticity and impedes gas exchange, eventually leading to respiratory failure. | — | — | — | [Pawelec 2022](https://pubmed.ncbi.nlm.nih.gov/36426895) |
| Respiratory toxicity | The paper records respiratory toxicities among the grade III/IV toxicity episodes monitored in 126 patients with Hodgkin lymphoma treated with ABVD chemotherapy, but does not report the specific incidence or details for this reaction. | — | — | hospital: respiratory toxicities | [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) |
| Tissue damage | In male ICR mice given intratracheal bleomycin (1, 2, or 4 mg/kg), lactate dehydrogenase (LDH) levels in bronchoalveolar lavage fluid and inflammatory cell counts increased in a dose-dependent manner. | — | higher dose (4 mg/kg vs 1 mg/kg) | laboratory: LDH activity in bronchoalveolar lavage fluid (BALF) | [Kim 2010](https://pubmed.ncbi.nlm.nih.gov/24278527) |

<details><summary>Evidence: Pulmonary fibrosis (16)</summary>

> “It has been shown that bleomycin is associated with an approximate 1% risk for death due to bleomycininduced pulmonary fibrosis.” — [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) <sub>(review)</sub>

> “Toxic effects may include mucositis, dermatitis, anaphylactic reactions, and rarely pulmonary fibrosis.” — [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) <sub>(review)</sub>

> “An estimated 335% of patients develop pulmonary fibrosis (Bauer et al.. 1983;White, 1987).” — [Marshall 1997](https://pubmed.ncbi.nlm.nih.gov/9076945) <sub>(case series)</sub>

> “Compared with the control lungs, the lungs from the rats receiving the high doses of TLM S10 b and BLM had higher lesion scores for alveolar macrophages, alveolar cell hypertrophy/hyperplasia, alveolar proteinosis, and fibrosis... Rats receiving either the low or the high dose of BLM had higher scores for fibrosis than either TLM S10b dose group.” — [Schurig 1984](https://pubmed.ncbi.nlm.nih.gov/6207948) <sub>(animal)</sub>

</details>

<details><summary>Evidence: pulmonary toxicity (9)</summary>

> “Patients carrying the XPO5 AA or CC genotype had a higher incidence of bleomycin-associated pulmonary toxicity than those with the AC genotype (10% vs. 1%; P = 0.048).” — [Navarro 2013](https://pubmed.ncbi.nlm.nih.gov/23705004) <sub>(case series)</sub>

> “Despite being an effective chemotherapeutic agent, its use is limited by its potentially life-threatening pulmonary toxicity. [5] Its toxic effect is related to its free radical-producing capacity, while its lung specificity is related to the fact that BLMH is absent in the lungs. [2]” — [Jóna 2016](https://pubmed.ncbi.nlm.nih.gov/27327270) <sub>(cohort)</sub>

> “Elderly patients (&gt; 70 years), and those who have received a total lifetime dose in excess of 450 units or chest irradiation, have a significantly increased risk of pulmonary toxicity (Blum et al. 1973).” — [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) <sub>(review)</sub>

> “The incidence of pulmonary toxicity, manifested by pneumonitis progressing to pulmonary fibrosis and death, ranged from zero to 6 per cent of patients in various studies and appeared to be related to the patient's age and total dose of bleomycin.2” — [Kramer 1978](https://pubmed.ncbi.nlm.nih.gov/78932) <sub>(case report)</sub>

</details>

<details><summary>Evidence: lung fibrosis (3)</summary>

> “Bleomycin induces a transient lung fibrosis in mice that has been used to investigate mechanisms related to idiopathic pulmonary fibrosis. On day 21, all mice in the bleomycin group (n ¼ 8) had a significant increase in lung fibrosis histopathology score with a group average of 4.9 AE 0.4 (out of a maximum possible score of 8) when compared to a score of 0 AE 0 for the saline control group (n ¼ 7).” — [Phillips 2012](https://pubmed.ncbi.nlm.nih.gov/22024054) <sub>(animal)</sub>

> “Resistance to BLMs’ cytotoxicity and BLM-induced lung fibrosis are two major clinical concerns for both BLM and A5 [14,48,49]. Since both BLM and A5 induce lung tissue-specific damage that leads to fibrosis in certain cancer patients and in different animal models, our results predict that the GAGs at lung epithelial cells might facilitate BLMs’ uptake.” — [He 2016](https://pubmed.ncbi.nlm.nih.gov/27376254) <sub>(case report)</sub>

> “The chemotherapy drug, bleomycin, is well known for causing lung fibrosis during cancer treatment.” — [Pawelec 2022](https://pubmed.ncbi.nlm.nih.gov/36426895) <sub>(review)</sub>

</details>

<details><summary>Evidence: Pulmonary inflammation (3)</summary>

> “Treatment with P-2119 reduces the severity of chronic inflammation (Fig. 4b, Supplementary Fig. 5), as well as mortality associated with bleomycin-induced lung injury (Supplementary Fig. 6).” — [Hancock 2018](https://pubmed.ncbi.nlm.nih.gov/30560893) <sub>(animal)</sub>

> “Bleomycin (2 U/kg, i.t.) 21 days after administration significantly increased by 2.7 fold the inflammatory cell influx into the bronchoalveolar lavage fluid when compared to saline treated controls (Fig. 2). The increase in total BALF cells was due to significant increases in macrophages, lymphocytes, and neutrophils when compared to the cells in BALF from saline treated controls which are comprised solely of…” — [Phillips 2012](https://pubmed.ncbi.nlm.nih.gov/22024054) <sub>(case report)</sub>

> “BT groups exhibited changed cellular profiles in BAL fluid compared to the VC group, which had an increased number of total cells, neutrophils, and lymphocytes and a modest increase in the number of macrophages at 7 days post-bleomycin instillation.” — [Kim 2010](https://pubmed.ncbi.nlm.nih.gov/24278527) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Pneumonitis (2)</summary>

> “In the total cohort of 418 bleomycin-treated patients, BIP developed in 50 (12%) patients. Eight of these patients died of BIP, while bleomycin administration was stopped prematurely in 24 patients.” — [Nuver 2005](https://pubmed.ncbi.nlm.nih.gov/15900213) <sub>(cohort)</sub>

> “Interestingly, no association was found of gene polymorphism either with acute bleomycin-induced pneumonitis or with pulmonary function tests performed during treatment.” — [Jóna 2016](https://pubmed.ncbi.nlm.nih.gov/27327270) <sub>(review)</sub>

</details>

<details><summary>Evidence: Acute bleomycin-induced lung injury (1)</summary>

> “Only one acute bleomycin- induced lung injury was documented among the investigated patients.” — [Jóna 2016](https://pubmed.ncbi.nlm.nih.gov/27327270) <sub>(cohort)</sub>

</details>

<details><summary>Evidence: bleomycin-induced pulmonary fibrosis (1)</summary>

> “Although the cytotoxicity of bleomycin can reliably induce cell death in tumor cells, off-target effects can lead to a range of harmful consequences, from mild gastrointestinal irritation to severe bleomycin-induced pulmonary fibrosis (Blum et al. 1973).” — [Brady 2019](https://pubmed.ncbi.nlm.nih.gov/31171655) <sub>(case series)</sub>

</details>

<details><summary>Evidence: cough (1)</summary>

> “The quality of life data showed that the development of a dry cough (P=0.002) rather than shortness of breath (P≥0.09) or chest tightness (P=0.18) was the only symptom significantly associated with the development of CT assessed lung toxicity.” — [Shamash 2017](https://pubmed.ncbi.nlm.nih.gov/28327896) <sub>(randomised trial)</sub>

</details>

<details><summary>Evidence: Decreased lung function (1)</summary>

> “These data altogether indicate that BLM challenge decreased lung function (decreased inspiration volume and increased tissue volume) and evoked PH secondary to the PF development in G6PD S188F rats but not in WT littermates.” — [Signoretti 2026](https://pubmed.ncbi.nlm.nih.gov/41401977) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Dyspnea (1)</summary>

> “At 3 months, self-reported dyspnea had increased by approximately 18 points, similarly in all groups. The long-term levels did not differ from baseline levels. At the 2-year assessment, 16% of the patients recorded worsening of dyspnea.” — [Fosså 2003](https://pubmed.ncbi.nlm.nih.gov/12637478) <sub>(cohort)</sub>

</details>

<details><summary>Evidence: Fatal toxicity (1)</summary>

> “For example, fatal toxicity is reported even at low doses (White and Stover, 1984;White, 1987).” — [Marshall 1997](https://pubmed.ncbi.nlm.nih.gov/9076945) <sub>(review)</sub>

</details>

<details><summary>Evidence: fibrosis (1)</summary>

> “In contrast, rats treated with BLM displayed a significant increase in collagen fibers deposition, accompanied by severe bleeding. The deposition of collagen fibers was observed to be concentrated around the walls of alveoli, bronchioles, and blood vessels.” — [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) <sub>(animal)</sub>

</details>

<details><summary>Evidence: hemorrhage (1)</summary>

> “BLM-treated rats displayed severe structural abnormalities, including incomplete alveolar structures, inflated alveoli, and thickened alveolar walls. Focal hemorrhages were also observed in the field of view, with a prominent presence of red blood cells, as well as dense inflammatory infiltrates and significant pigmentation.” — [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Idiopathic pulmonary fibrosis (1)</summary>

> “IPF was induced through a single administration of 50 µL of BLM solution (5 mg mL-1) via intratracheal instillation (ITI) (Comeglio et al., 2017;Comeglio et al., 2019;Della Latta et al., 2015;Kandhare et al., 2015;Marudamuthu et al., 2019).” — [Kang 2022](https://doi.org/10.1080/10717544.2022.2149899) <sub>(animal)</sub>

</details>

<details><summary>Evidence: inflammation (1)</summary>

> “BLM contributes to these effects when it induces OS in rat lung tissue. Factors of TGF-β1 and IL-6 could be released on account of facilitation by BLM” — [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Interstitial lung disease (1)</summary>

> “The chemotherapy drug, bleomycin sulfate, results in the highest incidence of drug-induced interstitial lung disease 1 and has been extensively studied as a fibrosis-inducing agent in animal models, 14,22 making it a good starting point for testing MRTF-inhibitors as preventive treatments.” — [Pawelec 2022](https://pubmed.ncbi.nlm.nih.gov/36426895) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Interstitial pneumonitis (1)</summary>

> “Used as a chemotherapeutic for several malignancies, it is associated with drug-induced interstitial pneumonitis and PF as spontaneous adverse outcome” — [Möbus 2025](https://pubmed.ncbi.nlm.nih.gov/40623988) <sub>(review)</sub>

</details>

<details><summary>Evidence: Lung inflammation (1)</summary>

> “Bleomycin administration in the lungs of mice results in an initial inflammatory phase lasting 7 to 10 days that then resolves into a fibrotic phase.” — [van 2022](https://pubmed.ncbi.nlm.nih.gov/36309093) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Lung injury (1)</summary>

> “Following bleomycin challenge, both Scgb1a1-Muc5bTg and SFTPC-Muc5bTg mice demonstrate substantial lung injury that was less prominent in Muc5b−/− mice (Fig. 1e).” — [Hancock 2018](https://pubmed.ncbi.nlm.nih.gov/30560893) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Lung toxicity (1)</summary>

> “Its clinical use is however limited by lung toxicity, and it can cause fibrosis reminiscent of that found in interstitial lung diseases including IPF; this observation led to its use in rodents as a lung fibrosis model (12).” — [van 2022](https://pubmed.ncbi.nlm.nih.gov/36309093) <sub>(case report)</sub>

</details>

<details><summary>Evidence: pneumotoxicity (1)</summary>

> “It was concluded from the findings of this study that the presence of a major portion of [3H]BLM in the SF of the lung and its covalent linkage with the proteins of this fraction might initiate the complex sequence of events at the metabolic level necessary for the pneumotoxicity.” — [Giri 1986](https://pubmed.ncbi.nlm.nih.gov/2429861) <sub>(in vitro)</sub>

</details>

<details><summary>Evidence: pulmonary edema (1)</summary>

> “The lung coefficient is a crucial indicator of pulmonary edema, reflecting the severity of pulmonary fibrosis.” — [Jin 2025](https://pubmed.ncbi.nlm.nih.gov/41169753) <sub>(animal)</sub>

</details>

<details><summary>Evidence: Pulmonary injury (1)</summary>

> “Currently used standard of care, first line therapy, bleomycin-containing ABVD (doxorubicin, bleomycin, vinblastin, dacarbasin) and BEACOPP (bleomycin, etoposide, doxorubicin, cyclophosphamide, vincristine, procarbazine, prednisone) have been reported to produce bleomycin- induced lung injury in 20–46% of patients.” — [Jóna 2016](https://pubmed.ncbi.nlm.nih.gov/27327270) <sub>(review)</sub>

</details>

<details><summary>Evidence: Respiratory failure (1)</summary>

> “Without the intervention of therapeutics, the build-up of ECM in the lungs impairs tissue elasticity and impedes gas exchange, eventually leading to respiratory failure.” — [Pawelec 2022](https://pubmed.ncbi.nlm.nih.gov/36426895) <sub>(review)</sub>

</details>

<details><summary>Evidence: Respiratory toxicity (1)</summary>

> “We recorded all grade III/IV toxicity episodes (anemia, neutropenia, hemorrhagic cystitis, infections, mucositis, nausea and vomiting and cardiac, renal or respiratory toxicities) (National Cancer Institute [NCI] criteria).” — [Altés 2013](https://pubmed.ncbi.nlm.nih.gov/23323945) <sub>(case series)</sub>

</details>

<details><summary>Evidence: Tissue damage (1)</summary>

> “Moreover, BT groups showed a dose-dependent increase in LDH levels and inflammatory cell counts.” — [Kim 2010](https://pubmed.ncbi.nlm.nih.gov/24278527) <sub>(animal)</sub>

</details>

### Skin

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Alopecia | Alopecia was observed in 52.94% of testicular cancer patients treated with BEP chemotherapy, and severe alopecia was significantly associated with cumulative bleomycin dose and bleomycin dose by average. | 52.94% | BLMH rs1050565 G/G genotype (BLMH G); ERCC2 rs13181 T/G + G/G genotype (ERCC2 T/G, G/G); Bleomycin cumulative dose; dose (unknown unknown) | — | [Lavanderos 2019](https://pubmed.ncbi.nlm.nih.gov/30914949), [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) |
| Hyperkeratosis | Mucocutaneous toxicities, including stomatitis, alopecia, hyperpigmentation of skin, and hyperkeratosis are common, and the incidence and severity are dose related. | — | dose related | — | [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940), [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) |
| Allergic reactions | The paper lists allergic reactions among the side effects of bleomycin. | — | — | — | [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) |
| Cutaneous reaction | Drug toxicity occurs as a minor cutaneous reaction in about half of the patients treated. | about half | — | — | [Kramer 1978](https://pubmed.ncbi.nlm.nih.gov/78932) |
| Dermatitis | The paper lists dermatitis as one of the potential toxic effects of bleomycin sulfate, noting that limited bone marrow toxicity is observed with the usual dosage of 15 mg per sq. m. given twice weekly, but it does not specify the frequency, severity, or specific characteristics of the dermatitis. | — | — | — | [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) |
| Hyperpigmentation | Hyperpigmentation of the skin is a common mucocutaneous toxicity of bleomycin whose incidence and severity are dose related. | common | dose related | — | [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) |
| Injection site reaction | Injection site reactions were the most frequently reported adverse event related to the study drug, occurring specifically in the highest dose subcutaneous (1200 mg) cohort among healthy adult volunteers. | 4 (11.1) | — | — | [Han 2024](https://pubmed.ncbi.nlm.nih.gov/38662148) |
| Pigmentation changes | The paper lists pigmentation changes of the skin among the side effects of bleomycin, but provides no description of who experiences it, how it presents, or how often it occurs. | — | — | — | [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) |
| Skin rash | The paper states that bleomycin induced skin rash, which must be monitored carefully by an experienced medical oncologist in patients receiving a regimen of high-dosage platinum and a seven-day bleomycin infusion. | — | — | hospital: skin rash | [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) |

<details><summary>Evidence: alopecia (2)</summary>

> “Alopecia | 63 | 52.94 | 5 | 4.20” — [Lavanderos 2019](https://pubmed.ncbi.nlm.nih.gov/30914949) <sub>(cohort)</sub>

> “Mucocutaneous toxicities, including stomatitis, alopecia, hyperpigmentation of skin, and hyperkeratosis are common, and the incidence and severity are dose related.” — [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) <sub>(review)</sub>

</details>

<details><summary>Evidence: hyperkeratosis (2)</summary>

> “Mucocutaneous toxicities, including stomatitis, Alopecia, hyperpigmentation of skin, and hyperkeratosis are common, and the incidence and severity are dose related.” — [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) <sub>(review)</sub>

> “Among its side effects are allergic reactions, mucositis, mild myelosuppression, hyperkeratosis and pigmentation changes of the skin, and, in particular, pulmonary fibrosis.” — [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) <sub>(review)</sub>

</details>

<details><summary>Evidence: Allergic reactions (1)</summary>

> “Among its side effects are allergic reactions, mucositis, mild myelosuppression, hyperkeratosis and pigmentation changes of the skin, and, in particular, pulmonary fibrosis.” — [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) <sub>(review)</sub>

</details>

<details><summary>Evidence: cutaneous reaction (1)</summary>

> “Drug toxicity occurs as a minor cutaneous reaction in about half of the patients treated.” — [Kramer 1978](https://pubmed.ncbi.nlm.nih.gov/78932) <sub>(review)</sub>

</details>

<details><summary>Evidence: dermatitis (1)</summary>

> “Toxic effects may include mucositis, dermatitis, anaphylactic reactions, and rarely pulmonary fibrosis. Limited bone marrow toxicity has been observed with the usual dosage of 15 rag. per sq. m. given subcutaneously, intramuscularly, or intravenously twice weekly.” — [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) <sub>(review)</sub>

</details>

<details><summary>Evidence: hyperpigmentation (1)</summary>

> “Mucocutaneous toxicities, including stomatitis, alopecia, hyperpigmentation of skin, and hyperkeratosis are common, and the incidence and severity are dose related.” — [Crom 1987](https://pubmed.ncbi.nlm.nih.gov/3555940) <sub>(review)</sub>

</details>

<details><summary>Evidence: Injection site reaction (1)</summary>

> “The most frequently reported AEs were injection site reaction (highest dose SC cohort) and infusion-related reaction (highest dose IV cohort).” — [Han 2024](https://pubmed.ncbi.nlm.nih.gov/38662148) <sub>(randomised trial)</sub>

</details>

<details><summary>Evidence: Pigmentation changes (1)</summary>

> “Among its side effects are allergic reactions, mucositis, mild myelosuppression, hyperkeratosis and pigmentation changes of the skin, and, in particular, pulmonary fibrosis.” — [Bokemeyer 2008](https://pubmed.ncbi.nlm.nih.gov/18398143) <sub>(review)</sub>

</details>

<details><summary>Evidence: skin rash (1)</summary>

> “However, bleomycin induced skin rash, fever, weight loss, and elevations of the serum creatinine level must be monitored carefully by an experienced medical oncologist, and this regimen does require inpatient hospitalization for at least one week.” — [Glick 1980](https://pubmed.ncbi.nlm.nih.gov/6160777) <sub>(randomised trial)</sub>

</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bleomycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: BLHX (metabolism), BLMH (metabolism), BLMH (substrate), DNA (cleavage), G6PD (safety_allele), LIG1 (inhibitor), LIG3 (inhibitor), SCB-1 (unknown), XRCC1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 11:45 | 18:27 | 12/0/0 | 0/0/0 | 1/0/5 | 716,467/38,272 | einfracz / qwen3.8-27b | 64 | 61/40 | 31/31 | 0 |

## Coverage

- **PubMed hits:** 510 matched, 153 returned
- **screened:** 40  ·  **relevant:** 6
- **records:** 12  ·  extracted 5  ·  needs review 7  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ryynänen_1998.pdf` | Ryynänen PM et al., Kinetics of 111In-labeled bleomycin in…, Annals of nuclear medicine (1998) | popPK | 10 | [10.1007/BF03164920](https://doi.org/10.1007/BF03164920) | [9972368](https://pubmed.ncbi.nlm.nih.gov/9972368) | The paper reports quantitative pharmacokinetic parameters (clearance, half-life, transfer coefficients) for 111In-labeled bleomycin in humans, and the specific numeric values are present in the evidence. |
| `Schober_1978.pdf` | Schober O et al., [Studies of 57-co-bleomycin in patients…, RoFo : Fortschritte auf dem… (1978) | popPK | 8 | [10.1055/s-0029-1230942](https://doi.org/10.1055/s-0029-1230942) | [79534](https://pubmed.ncbi.nlm.nih.gov/79534) | The study reports a double compartment model for bleomycin kinetics in humans, but specific numeric parameter values (CL, V, t1/2) are not explicitly listed in the provided text, only general excretion percentages and radiation doses. |
| `Zhang_2023.pdf` | Zhang X et al., Identification of small-molecule inhibi…, Bioorganic & medicinal chem… (2023) | pd | 4 | [10.1016/j.bmc.2023.117383](https://doi.org/10.1016/j.bmc.2023.117383) | [37352577](https://www.ncbi.nlm.nih.gov/pubmed/37352577) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-22 11:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelaty_2024 | irrelevant | 1 | 0 | This is a clinical efficacy/sclerotherapy study with dosing only, not a PK/population-PK report and no bleomycin disposition parameters are provided. |
| popPK | Ali_2019 | irrelevant | 0 | 0 | The paper reports on the synthesis and in vitro activity of SIRT2 inhibitors derived from bleomycin, not pharmacokinetic parameters for bleomycin itself. |
| PD | Ali_2019 | not_relevant | 0 | 0 | The paper describes in vitro structure-activity relationship and molecular docking studies for new SIRT2 inhibitors, lacking any population pharmacokinetic/pharmacodynamic or exposure-response modeling. |
| PGx | Altés_2013 | not_relevant | 2 | 5 | The paper reports an association between GSTM1 genotypes and clinical outcomes (response rate), not pharmacokinetic or pharmacodynamic parameters of bleomycin. |
| popPK | Atmowihardjo_2022 | irrelevant | 0 | 0 | The study investigates imatinib, not bleomycin, and contains no pharmacokinetic data for bleomycin. |
| PD | Atmowihardjo_2022 | not_relevant | 0 | 0 | The paper is a trial protocol for imatinib, not bleomycin, and does not report any results or pharmacodynamic parameters. |
| PGx | Baumhäkel_2001 | not_relevant | 0 | 0 | The study examines drug-drug interactions via CYP3A4 inhibition in vitro and reports no effect for bleomycin, but does not involve pharmacogenomics (genetic variants) or patient-level PK/PD parameters. |
| popPK | Berg_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the photosensitizer TPCS2a, while bleomycin is only used as a co-administered therapeutic agent without any reported PK parameters. |
| popPK | Bisht_2022 | irrelevant | 0 | 0 | The paper is a review of Glycyrrhiza glabra (liquorice) and does not study bleomycin or report any pharmacokinetic parameters for it. |
| PD | Bisht_2022 | not_relevant | 0 | 0 | The paper is a review of Glycyrrhiza glabra (liquorice) and does not report any pharmacodynamic data for bleomycin. |
| popPK | Boer_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin (platinum), not bleomycin, which is only mentioned as a potential cause for Raynaud's phenomenon. |
| PGx | Bokemeyer_2008 | not_relevant | 2 | 5 | The paper reports that a genotype is associated with clinical survival outcomes (mortality), but it explicitly notes the lack of data on direct pharmacokinetic parameters (such as plasma levels or half-life) or quantified pharmacodynamic effects. |
| popPK | Briganti_1975 | irrelevant | 0 | 0 | The study reports on cellular kinetics and toxicity (spleen colony assays) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PD | Brun_2023 | not_relevant | 0 | 0 | The paper focuses on the stability and delivery of Interferon Beta, using bleomycin only as a non-specific fibrosis inducer in cell assays without reporting any exposure-response or dose-response parameters for bleomycin itself. |
| popPK | Chen_1997 | irrelevant | 0 | 0 | The study investigates PAF receptor binding and signaling mechanisms in a bleomycin-induced lung fibrosis model in hamsters, rather than reporting pharmacokinetic disposition parameters for bleomycin. |
| popPK | Choi_2024 | irrelevant | 0 | 0 | The study is an inhalation toxicity assessment of benzene, toluene, and xylene, using bleomycin only to induce a pulmonary fibrosis model as a respiratory impairment marker, without reporting any bleomycin pharmacokinetic parameters. |
| PD | Choi_2024 | not_relevant | 1 | 0 | The paper uses bleomycin only to validate a respiratory monitoring method in a disease model, reporting qualitative correlations (weight loss vs. oxygen consumption) without any dose-response or exposure-response analysis for bleomycin itself. |
| PGx | Cordova_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction involving vinblastine and antiretrovirals, not a pharmacogenomic effect on bleomycin. |
| PD | Coukell_1997 | not_relevant | 0 | 0 | The paper is a review of doxorubicin pharmacokinetics and efficacy; it mentions bleomycin only as a comparator in clinical response rates, providing no exposure-response or dose-response data or numeric PD parameters for bleomycin. |
| PD | Crom_1987 | not_relevant | 0 | 0 | The provided text and captions discuss pharmacokinetics and exposure-response relationships for other drugs (doxorubicin, methotrexate, teniposide, etoposide, vincristine) but contain no mention of bleomycin or its PD parameters. |
| PGx | Del_2017 | not_relevant | 2 | 2 | The paper reports the presence of genetic variants in a single case with toxicities, but does not present a quantitative pharmacokinetic or pharmacodynamic parameter or a fitted effect size for bleomycin. |
| popPK | Denholm_1990 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Desroy_2017_2 | not_relevant | 0 | 0 | The paper describes the discovery of a new autotaxin inhibitor (GLPG1690) using a bleomycin-induced disease model, but it does not report pharmacogenomic effects on bleomycin's PK or PD parameters. |
| popPK | Dresp_1978 | irrelevant | 0 | 0 | The paper reports cytogenetic effects (chromosomal aberrations) of bleomycin, not pharmacokinetic parameters like clearance or volume. |
| popPK | Du_2025 | irrelevant | 0 | 0 | The paper focuses on senescent hepatocytes in liver disease and only mentions bleomycin as a reference for lung injury models, containing no pharmacokinetic data for the drug. |
| PD | Du_2025 | not_relevant | 0 | 0 | The paper investigates senolytics (DpC, Dp44mT) and palbociclib for MASLD; it does not report any pharmacodynamic or exposure-response data for bleomycin. |
| PGx | Ezzat_2012 | not_relevant | 1 | 0 | The paper reports clinical toxicities associated with drug-drug interactions (CYP3A4 inhibition by protease inhibitors affecting vinblastine), but it does not report pharmacogenomic effects (genetic variants) on the PK or PD of bleomycin. |
| popPK | Ferl_2022 | irrelevant | 0 | 0 | The paper describes automated image segmentation algorithms for mouse lung tumors using micro-CT and contains no pharmacokinetic data or bleomycin measurements. |
| PD | Ferl_2022 | not_relevant | 0 | 0 | The paper describes an image segmentation algorithm for micro-CT scans and does not report any pharmacodynamic or exposure-response analysis for bleomycin. |
| popPK | Fosså_2003 | irrelevant | 0 | 0 | The paper is a quality-of-life study reporting HRQL scores and toxicity, not a pharmacokinetic study with disposition parameters. |
| popPK | Gadiya_2024 | irrelevant | 0 | 0 | The paper is a chemoinformatics analysis of patent databases and does not report any pharmacokinetic parameters for bleomycin. |
| PD | Gadiya_2024 | not_relevant | 0 | 0 | The paper is an informatics study analyzing patent databases (SureChEMBL) for drug-likeness and scaffolds; it contains no experimental pharmacodynamic data, exposure-response relationships, or numeric PD parameters for bleomycin. |
| PGx | Gaskill_2017 | not_relevant | 0 | 0 | The paper investigates Wnt/BMPR2 signaling in pulmonary fibrosis models, using bleomycin only as an injury inducer rather than studying its pharmacokinetics or pharmacodynamics in relation to genetic variants. |
| popPK | Glick_1980 | irrelevant | 0 | 0 | The paper is a clinical review of chemotherapy efficacy and does not report any pharmacokinetic parameters for bleomycin. |
| PD | Glick_1980 | not_relevant | 0 | 0 | The paper is a clinical review of chemotherapy trials for head and neck cancer and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for bleomycin. |
| popPK | Gowda_2017 | irrelevant | 0 | 0 | The study investigates the enzyme kinetics of honokiol's inhibition of DNA polymerases and the cytotoxic synergy with bleomycin in cell lines, but does not report any pharmacokinetic disposition parameters (CL, V, t1/2) for bleomycin. |
| PGx | Greaves_2012 | not_relevant | 2 | 5 | Paper assesses the association of ABCC1 expression with clinical treatment failure (response/Failure-Free Survival) rather than specific pharmacokinetic or pharmacodynamic parameters of bleomycin. |
| popPK | Han_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics for RO7303509 (an anti-TGFβ3 antibody), not bleomycin; bleomycin is only mentioned as a vehicle for an animal fibrosis model in the introduction. |
| PD | Han_2024 | not_relevant | 0 | 0 | The paper reports PK for RO7303509 (anti-TGFβ3 antibody) and explicitly states that no clear pharmacodynamic effects were observed for the biomarkers tested; it does not report any PD relationship or parameters for bleomycin. |
| PGx | Hancock_2018 | not_relevant | 0 | 0 | The paper investigates the biological mechanism of lung fibrosis and mucociliary dysfunction related to the MUC5B variant, not the pharmacokinetics or standard pharmacodynamics (like plasma concentration or receptor binding) of bleomycin. |
| PGx | Harker_1985 | not_relevant | 0 | 0 | The study focuses on doxorubicin resistance mechanisms in cell lines and explicitly states that bleomycin is not cross-resistant, providing no pharmacogenomic data on bleomycin PK/PD. |
| popPK | He_2016 | irrelevant | 0 | 0 | The paper reports in vitro cytotoxicity and mechanistic data (IC50, cell cycle arrest) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Hiroyama_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET tracer 18F-FPP-RGD2 in bleomycin-induced fibrosis, not on the disposition parameters of bleomycin itself. |
| popPK | Hosono_2008 | irrelevant | 0 | 0 | The paper studies HPH derivatives, not bleomycin, and reports antiviral/cytotoxicity data rather than pharmacokinetic parameters. |
| PD | Hosono_2008 | not_relevant | 0 | 0 | The paper reports in vitro structure-activity relationships (EC50/CC50) for novel HPH derivatives, not a population pharmacodynamic or exposure-response model for bleomycin. |
| popPK | Ishida_1982 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay comparing cell line sensitivity to various agents, and bleomycin is only mentioned as a comparator agent with no pharmacokinetic parameters reported. |
| PD | Ishida_1982 | not_relevant | 1 | 0 | The paper only states that FA and normal cells had "nearly the same sensitivity" to bleomycin without providing specific numeric EC50 values or dose-response curves for bleomycin. |
| popPK | Ito_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of antifibrotic drugs (nintedanib, pirfenidone) on sodium channel expression, and bleomycin is only mentioned in the introduction as a model for lung fibrosis, not as a subject for PK analysis. |
| PD | Ito_2026 | not_relevant | 0 | 0 | The paper investigates the effect of antifibrotic drugs (nintedanib and pirfenidone) on ion channel expression, not bleomycin. |
| popPK | Jiang_2024 | irrelevant | 0 | 0 | The paper is a bioinformatics study on colorectal cancer prognosis and fructose metabolism; bleomycin is only mentioned as one of many drugs in a sensitivity prediction analysis, with no pharmacokinetic data reported. |
| PD | Jiang_2024 | not_relevant | 0 | 0 | The paper is a bioinformatics study on gene expression and prognosis in colorectal cancer; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for bleomycin. |
| popPK | Jin_2025 | irrelevant | 0 | 0 | Bleomycin is used only as an agent to induce pulmonary fibrosis in animal models, not as the subject of pharmacokinetic analysis. |
| PD | Jin_2025 | not_relevant | 0 | 0 | The paper describes a preclinical study on nanoparticle formulation and efficacy in a bleomycin-induced rat model, but does not perform population pharmacodynamic or exposure-response modeling for bleomycin. |
| popPK | Joerger_2005 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for doxorubicin and its metabolites, not bleomycin, which was only a co-administered drug in the regimen. |
| popPK | Jureczko_2019 | irrelevant | 0 | 0 | The paper is an ecotoxicological study reporting environmental toxicity (EC50) of bleomycin in aquatic organisms, not a pharmacokinetic study of drug disposition in a patient. |
| popPK | Kang_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pirfenidone, using bleomycin only as an agent to induce a disease model in rats. |
| PD | Kang_2022 | not_relevant | 2 | 1 | The study describes a preclinical PK/PD experiment using a bleomycin-induced disease model to evaluate pirfenidone, but it does not report a population pharmacodynamic or exposure-response model with estimated parameters. |
| PGx | Kantrowitz-Gordon_2018 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of dacarbazine, not bleomycin, and does not investigate gene variants. |
| PGx | Karapurkar_2025 | not_relevant | 1 | 0 | The paper reports the effect of a gene variant (SFTPCI73T) on bleomycin-induced toxicity/fibrosis (phenotype), but does not report changes in the pharmacokinetic parameters (PK) or specific pharmacodynamic parameters (PD) of the drug itself, nor does it quantify a drug-gene interaction effect size. |
| PD | Katsara_2006 | not_relevant | 1 | 0 | The text is a general review of cyclic peptides that mentions bleomycin only as an example of the class, without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| PGx | Kim_2002 | not_relevant | 0 | 0 | The study investigates genetic associations with autistic disorder, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of bleomycin. |
| popPK | Kim_2010 | irrelevant | 0 | 0 | The paper is a toxicology/pathology study on bleomycin-induced pulmonary fibrosis and does not report any pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Kutkaite_2026 | irrelevant | 0 | 0 | The paper is a computational study on cancer biomarkers and drug sensitivity, not a pharmacokinetic study, and contains no data for bleomycin. |
| PD | Kutkaite_2026 | not_relevant | 0 | 0 | The paper focuses on identifying gene expression biomarkers for drug sensitivity in cancer cell lines and does not report any pharmacodynamic (PD) or exposure-response analysis for bleomycin. |
| PGx | Lavanderos_2019 | not_relevant | 2 | 5 | The study associates genetic variants with toxicity outcomes (PD/adverse events) in the context of combination therapy (BEP), but does not measure specific pharmacokinetic parameters (e.g., AUC, clearance) or isolate the pharmacodynamic effect on bleomycin specifically. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper reports the efficacy of a new compound (ALD-R491) in a bleomycin-induced lung injury model, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of bleomycin. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper uses bleomycin to induce a disease model (SSc-ILD) to study gene expression and biomarkers, but does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of the bleomycin drug itself. |
| popPK | Lim_2026 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of cancer risk associated with IARC Group 1 drugs, not a pharmacokinetic study, and bleomycin was explicitly excluded from the analysis. |
| PD | Lim_2026 | not_relevant | 2 | 1 | The paper reports epidemiological hazard ratios for cancer risk based on cumulative dose/duration, but does not provide pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect relationships for bleomycin. |
| PGx | Mahabir_2010 | not_relevant | 1 | 2 | The paper reports gene expression changes in cell lines after drug exposure, not pharmacokinetic (PK) or clinical pharmacodynamic (PD) parameters in patients. |
| popPK | Majnooni_2020 | irrelevant | 0 | 0 | The paper is a review on phytochemicals for COVID-19 lung injury and does not mention bleomycin or report any pharmacokinetic parameters. |
| PD | Majnooni_2020 | not_relevant | 0 | 0 | The paper is a review of phytochemicals for lung injury and does not contain any data, analysis, or parameters related to bleomycin pharmacodynamics. |
| PGx | Marriott_2014 | not_relevant | 0 | 0 | The paper focuses on cellular mechanisms of fibrosis and does not investigate how a specific gene variant changes the pharmacokinetics or pharmacodynamics of bleomycin. |
| PGx | Marshall_1997 | not_relevant | 0 | 0 | The paper discusses the genetic basis of the pathogenesis of pulmonary fibrosis (the disease process) rather than pharmacogenomic effects on the PK/PD of bleomycin. |
| popPK | Mirabelli_1981 | irrelevant | 0 | 0 | The study is an in-vitro cell cycle cytotoxicity assay, not a pharmacokinetic study, and contains no disposition parameters for bleomycin. |
| popPK | Mitchell_2025 | irrelevant | 0 | 0 | The paper is a genomic study on mutational signatures of chemotherapy agents, not a pharmacokinetic study, and contains no PK parameters for bleomycin. |
| PD | Mitchell_2025 | not_relevant | 0 | 0 | The paper investigates long-term genomic consequences (mutation burden) of chemotherapy exposure but does not report pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for bleomycin; it focuses on mutational signatures and phylogenetics without quantitative PD modeling. |
| PGx | Mo_2025 | not_relevant | 2 | 2 | The paper discusses a general RBP signature and predicts clinical outcomes (PFI, metastasis) and treatment sensitivity (including bleomycin) using machine learning, but it does not report a specific gene variant affecting the pharmacokinetics or pharmacodynamics of bleomycin. |
| popPK | Mokaleng_2009 | irrelevant | 0 | 0 | The study is an in-vitro radiobiology experiment reporting cytotoxicity (EC50) and radiosensitivity modification factors, not pharmacokinetic disposition parameters. |
| PD | Mokaleng_2009 | not_relevant | 1 | 2 | The study is an in vitro radiobiology experiment reporting static EC50 values from colony formation assays, not a population pharmacodynamic or exposure-response modeling study. |
| PGx | Monteiro_2014 | not_relevant | 1 | 0 | The paper uses bleomycin as an ex vivo damage agent to assess DNA repair capacity, not to characterize the pharmacokinetics or pharmacodynamics of bleomycin therapy. |
| PGx | Moore_1982 | not_relevant | 1 | 5 | The paper studies phleomycin in yeast, not bleomycin, and reports PD sensitivity rather than human pharmacogenomic PK/PD parameters. |
| popPK | Mor_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CM-101, not bleomycin; bleomycin is only mentioned as an agent used to induce fibrosis in preclinical mouse models. |
| PD | Mor_2024 | not_relevant | 2 | 1 | The paper reports qualitative target engagement (decreased CCL24 levels) and PK data, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model for bleomycin (which is not the drug studied; the drug is CM-101). |
| popPK | Moral-Sanz_2026 | irrelevant | 0 | 0 | The paper investigates the senolytic properties of StnI/StnIG and uses bleomycin only as an inducer of cellular senescence in cell lines; it does not report any pharmacokinetic parameters for bleomycin. |
| PD | Moral-Sanz_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of StnI/StnIG (senotoxins), not bleomycin; bleomycin is only used as an agent to induce senescence in the experimental setup. |
| popPK | Märtson_2023 | irrelevant | 0 | 0 | Bleomycin is only mentioned as a background agent causing mucositis, while the study focuses on ciprofloxacin, fluconazole, and acyclovir. |
| PD | Märtson_2023 | not_relevant | 0 | 0 | The paper does not study bleomycin; it investigates ciprofloxacin, fluconazole, and acyclovir in HSCT patients, and reports only a weak correlation between ciprofloxacin exposure and citrulline (a marker of mucositis), without deriving numeric PD parameters like Emax or EC50. |
| popPK | Möbus_2025 | irrelevant | 0 | 0 | The study is an in vitro transcriptomic analysis of HUVEC cells exposed to bleomycin, containing no pharmacokinetic parameters or disposition data. |
| PD | Möbus_2025 | not_relevant | 3 | 1 | The paper reports qualitative dose-dependent transcriptomic changes and pathway enrichment but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| popPK | Nishimura_1980 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo resistance mechanism paper where bleomycin is only a negative control, not the subject of pharmacokinetic analysis. |
| PD | Nishimura_1980 | not_relevant | 0 | 0 | The paper focuses on aclacinomycin A resistance and cross-resistance; bleomycin A2 is only mentioned as a drug showing no significant cross-resistance, with no PD or exposure-response analysis performed for it. |
| PGx | Nuver_2005 | not_relevant | 0 | 0 | The study reports that the BMH genotype was not associated with changes in pulmonary function tests (PD) or clinical toxicity, failing to demonstrate a pharmacogenomic effect. |
| popPK | Ortega-Ferreira_2023 | irrelevant | 0 | 0 | The study focuses on galectin-3 inhibitors for systemic sclerosis; bleomycin is only mentioned as a model inducer in cited literature, not as the subject of pharmacokinetic analysis. |
| PD | Ortega-Ferreira_2023 | not_relevant | 0 | 0 | The paper investigates galectin-3 neutralizing antibodies, not bleomycin, and reports only qualitative efficacy outcomes without numeric PD parameters or exposure-response modeling. |
| PGx | Panza_2002 | not_relevant | 0 | 0 | The paper discusses bleomycin hydrolase gene variants as a risk factor for Alzheimer's disease, not as a determinant of bleomycin drug pharmacokinetics or pharmacodynamics. |
| PGx | Pavanello_2004 | not_relevant | 0 | 0 | The paper reviews genetic susceptibility to occupational carcinogens and mentions bleomycin only as an in vitro mutagen in the context of cancer risk assessment, not as a therapeutic drug with PK/PD parameters. |
| popPK | Pawelec_2022 | irrelevant | 0 | 0 | The study investigates the efficacy of a fibrosis inhibitor in a bleomycin-induced model, not the pharmacokinetics of bleomycin itself. |
| PD | Pawelec_2022 | not_relevant | 1 | 0 | The paper reports preclinical efficacy and histopathology results without performing population pharmacodynamic modeling or estimating exposure-response parameters. |
| PD | Pei_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Codonopsis radix in a bleomycin-induced fibrosis model but does not report any pharmacokinetic data, exposure-response analysis, or numeric PD parameters for bleomycin itself. |
| popPK | Phillips_2012 | irrelevant | 0 | 0 | The study focuses on lung mechanics and fibrosis pathology, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Pillai_1994 | irrelevant | 0 | 0 | The study investigates the pulmonary metabolism of probe drugs (p-nitroanisole and carbofuran) in bleomycin-treated lungs, not the pharmacokinetics of bleomycin itself. |
| popPK | Pitozzi_2025 | irrelevant | 0 | 0 | The study focuses on Nintedanib pharmacokinetics and target engagement, using bleomycin only as a model inducer without reporting any PK parameters for bleomycin itself. |
| PD | Pitozzi_2025 | not_relevant | 3 | 2 | The study reports qualitative target engagement (VEGF increase) and single-dose efficacy in a fibrosis model, but lacks a formal PK/PD model or numeric parameters (e.g., EC50, Emax) linking exposure to effect. |
| popPK | Poon_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of PIPE-791, using bleomycin only as an agent to induce lung fibrosis in animal models. |
| popPK | Pron_1994 | irrelevant | 0 | 0 | The study focuses on cell biology, membrane binding, and cytotoxicity in Chinese hamster cells, not on pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Purvis_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bendamustine, while bleomycin is only listed as part of the chemotherapy regimen (comparator/co-administered) without specific PK parameters reported. |
| PD | Purvis_2023 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of bendamustine and does not report any pharmacodynamic or exposure-response analysis for bleomycin. |
| PGx | Ran_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine against bleomycin-induced fibrosis using metabolomics, but does not assess the impact of gene variants on bleomycin's pharmacokinetics or pharmacodynamics. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanisms of Jingfang Granule in a bleomycin-induced mouse fibrosis model, not on the pharmacokinetics or disposition parameters of bleomycin itself. |
| PD | Ren_2026 | not_relevant | 0 | 0 | The paper focuses on bioinformatics and network pharmacology of Jingfang Granule; bleomycin is used only as a model inducer, and no PK/PD or exposure-response analysis for bleomycin is performed. |
| PD | Saitta_2008 | not_relevant | 1 | 0 | The paper is a qualitative review of clinical applications and mechanism of action, lacking any specific numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Sakharkar_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting IC50 values and virtual screening results, not a pharmacokinetic study with disposition parameters. |
| PD | Sakharkar_2021 | not_relevant | 0 | 0 | The paper reports on in silico docking and in vitro cell viability assays (IC50), lacking any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| popPK | Samson_1984 | irrelevant | 0 | 0 | The study is a clinical trial evaluating cisplatin dosing and survival outcomes, not a pharmacokinetic study of bleomycin disposition parameters. |
| PD | Samson_1984 | not_relevant | 3 | 2 | The paper reports a clinical dose-response comparison (high vs. low dose cisplatin) with response rates and survival, but it does not provide a pharmacodynamic model, concentration-effect relationship, or numeric PD parameters (e.g., Emax, EC50) for bleomycin or the regimen. |
| popPK | Schober_1978 | relevant | 8 | 3 | The study reports a double compartment model for bleomycin kinetics in humans, but specific numeric parameter values (CL, V, t1/2) are not explicitly listed in the provided text, only general excretion percentages and radiation doses. |
| popPK | Schurig_1984 | irrelevant | 0 | 0 | The paper is a comparative antitumor and toxicity study, not a pharmacokinetic study, and contains no disposition parameters for bleomycin. |
| PD | Schurig_1984 | not_relevant | 3 | 2 | The paper describes qualitative dose-response trends (e.g., non-parallel curves for lung hydroxyproline) and comparative potency (LD50, T/C ratios) but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect curves for bleomycin. |
| PGx | Seidel_2003 | not_relevant | 0 | 0 | The paper studies transcriptome changes in cell lines treated with bleomycin and does not investigate the influence of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Shamash_2017 | irrelevant | 0 | 0 | The paper is a clinical trial assessing pulmonary toxicity endpoints, not a pharmacokinetic study, and contains no quantitative disposition parameters (e.g., clearance, volume) for bleomycin. |
| PD | Shao_2022 | not_relevant | 0 | 0 | The paper focuses on network pharmacology and mechanism of action for a traditional Chinese medicine formula, not on the pharmacokinetic or pharmacodynamic modeling of bleomycin itself. |
| PGx | Sheng_2019 | not_relevant | 0 | 0 | The study evaluates chromosomal instability in a yeast model without investigating human gene variants or pharmacogenomic effects on bleomycin pharmacokinetics or pharmacodynamics. |
| PGx | Singh_2025 | not_relevant | 0 | 0 | The paper investigates drug delivery formulation (DPI vs oral) for nintedanib in bleomycin-induced fibrosis models, but does not report any pharmacogenomic effects or gene variants affecting PK/PD. |
| popPK | Skibba_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a BRD4 inhibitor (ZL0969), while bleomycin is used only as an agent to induce lung injury in mice, not as the subject of PK analysis. |
| PD | Skibba_2025 | not_relevant | 0 | 0 | The paper describes a mechanistic study of a BRD4 inhibitor in a bleomycin-induced lung injury model using scRNA-seq and histology, but does not report any population pharmacodynamic or exposure-response modeling. |
| popPK | Song_2023 | irrelevant | 0 | 0 | The study is a mechanistic investigation of pulmonary fibrosis using bleomycin as an inducer, not a pharmacokinetic study reporting disposition parameters. |
| PD | Song_2023 | not_relevant | 0 | 0 | The paper is a mechanistic study on pulmonary fibrosis using bleomycin as an inducer, not a population pharmacodynamic modeling study of bleomycin's exposure-response relationship. |
| PD | Steinemann_2016 | not_relevant | 0 | 0 | The paper reports IC50 values for nintedanib, not bleomycin, and only mentions bleomycin as a combination agent without providing specific exposure-response or dose-response parameters for it. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The paper is a review on nanotechnology and immunotherapy for osteosarcoma; bleomycin is only briefly mentioned as part of historical chemotherapy regimens with no pharmacokinetic data provided. |
| PD | Su_2025 | not_relevant | 0 | 0 | The paper is a review article on nanotechnology and immunotherapy for osteosarcoma; it does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters for bleomycin. |
| PGx | Suszyńska-Zajczyk_2014 | not_relevant | 0 | 0 | The paper investigates the role of the Blmh gene in homocysteine metabolism and neurodegeneration in mice, but does not report pharmacokinetic or pharmacodynamic changes of bleomycin. |
| PGx | Suszyńska-Zajczyk_2014_2 | not_relevant | 0 | 0 | The study investigates the effect of the Blmh genotype on liver protein expression in the context of homocysteine metabolism, not on the pharmacokinetics or pharmacodynamics of the drug bleomycin. |
| PGx | Suszyńska-Zajczyk_2014_3 | not_relevant | 1 | 0 | The paper investigates kidney proteome changes associated with homocysteinemia and bleomycin hydrolase deficiency, not the pharmacokinetics or pharmacodynamics of bleomycin as a drug. |
| popPK | Taneja_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for GLPG1690, not bleomycin; bleomycin is only mentioned as a comparator in a preclinical mouse model. |
| PGx | Thakkar_2018 | not_relevant | 0 | 0 | The study analyzes genotype frequencies and their association with Hodgkin Lymphoma risk, but does not measure or report pharmacokinetic or pharmacodynamic parameters of bleomycin. |
| PGx | Tsuruo_1981 | not_relevant | 0 | 0 | The paper compares drug sensitivity among different tumor cell lines and metastatic subpopulations, but does not investigate the impact of specific human gene variants or genotypes on the pharmacokinetics or pharmacodynamics of bleomycin. |
| PGx | Tupler_1997 | not_relevant | 4 | 8 | The paper reports qualitative cellular sensitivity (DNA synthesis inhibition/cell cycle) to bleomycin in an NBS variant case, but does not report a pharmacokinetic parameter or a fitted quantitative pharmacodynamic effect size for a specific genotype. |
| popPK | Villa_2022 | irrelevant | 0 | 0 | The paper is a general review on nanomedicine modeling and does not report any pharmacokinetic parameters for bleomycin. |
| PD | Villa_2022 | not_relevant | 0 | 0 | The paper is a general review on modeling and AI in nanomedicine; it does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for bleomycin. |
| PGx | Warr_2012 | not_relevant | 0 | 0 | The paper reviews antiemetic management for chemotherapy regimens (including those with bleomycin) and discusses CYP3A4 interactions for cyclophosphamide, but does not report pharmacogenomic effects on bleomycin PK/PD. |
| PGx | Weng_2024 | not_relevant | 0 | 0 | The paper investigates mechanisms of pulmonary fibrosis and identifies CYP450 enzymes as signaling mediators, but does not report pharmacogenomic effects on the PK/PD of bleomycin administration. |
| popPK | Wilde_2007 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of cyclophosphamide, etoposide, doxorubicin, procarbazine, and prednisone, but does not quantify the disposition parameters for bleomycin, which is only listed as a component of the BEACOPP regimen. |
| PGx | Wilde_2007 | not_relevant | 0 | 0 | The study investigates the population pharmacokinetics of the BEACOPP regimen and the impact of covariates (like BSA and CYP3A4 activity via metabolite excretion) on toxicity, but does not assess the effect of specific gene variants or genotypes on bleomycin PK or PD parameters. |
| PGx | Xiao_2021 | not_relevant | 0 | 0 | The paper reports a clinical case of keratoacanthoma centrifugum marginatum and discusses treatment options, but does not report pharmacogenomic effects on bleomycin PK or PD parameters. |
| popPK | Xing_2026 | irrelevant | 0 | 0 | The paper is about deep learning for drug discovery and transcriptomics, not the pharmacokinetics of bleomycin. |
| PD | Xing_2026 | not_relevant | 0 | 0 | The paper focuses on deep learning for drug discovery and transcriptomic profiling, with no mention of bleomycin or any pharmacodynamic/exposure-response analysis. |
| popPK | Yadav_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of MTBT1466A, using bleomycin only as an agent to induce lung fibrosis in a mouse model, not as the subject drug for PK analysis. |
| popPK | Yan_2025 | irrelevant | 0 | 0 | The paper is a drug discovery study targeting CCR2 for pulmonary fibrosis, and bleomycin is used only as a tool to induce the disease model in mice, with no pharmacokinetic analysis performed. |
| PD | Yan_2025 | not_relevant | 0 | 0 | The paper focuses on the design of CCR2 inhibitors and does not report a pharmacodynamic or exposure-response relationship for bleomycin; bleomycin is only used as a single-dose agent to establish an animal disease model. |
| PD | Yasuda_2022 | not_relevant | 1 | 0 | The paper is a clinical review providing dosing recommendations for hemodialysis patients and explicitly states that pharmacodynamic studies are lacking; it does not report any numeric PD parameters or exposure-response relationships. |
| popPK | You_2010 | irrelevant | 0 | 0 | The study analyzes pharmacokinetics of tumor markers (AFP and hCG), not the drug bleomycin, which is only a co-administered treatment. |
| popPK | Yu_2024 | irrelevant | 0 | 0 | The paper is a bioinformatic study on ovarian cancer prognosis using IC50 values for drug sensitivity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Yu_2024 | not_relevant | 0 | 0 | The paper is a bioinformatic study on gene signatures for ovarian cancer prognosis and does not report any population pharmacokinetic or pharmacodynamic modeling for bleomycin. |
| popPK | Yue_2025 | irrelevant | 0 | 0 | This paper describes the development of novel FXR/PPARδ agonists for pulmonary fibrosis, using a bleomycin-induced disease model, but does not report pharmacokinetic parameters for bleomycin itself. |
| PD | Yue_2025 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/activation data (EC50) for a novel compound, not a pharmacodynamic exposure-response or dose-response relationship for bleomycin. |
| PGx | Zaher_2026 | not_relevant | 0 | 0 | The study investigates the protective effect of ivermectin on bleomycin-induced pulmonary fibrosis in rats and does not report on pharmacogenomic effects of bleomycin itself. |
| PD | Zeng_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a novel PI3K/mTOR inhibitor and qualitative efficacy in a bleomycin model, but does not report a pharmacodynamic or exposure-response relationship for bleomycin itself. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper reports IC50 values for a MUS81 inhibitor (dyngo-4a) and qualitative effects on bleomycin-induced damage, but does not provide a pharmacodynamic model or numeric exposure-response parameters for bleomycin itself. |
| popPK | Zhao_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for constituents of a Chinese herbal medicine (PRM), while bleomycin is used only as an agent to induce pulmonary fibrosis in the animal model. |
| PD | Zhao_2017 | not_relevant | 1 | 0 | The paper describes a standard pharmacokinetic and pharmacodynamic study of PRM in a bleomycin-induced fibrosis model, but does not report population PD modeling or exposure-response analysis for bleomycin. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methotrexate (MTX), with bleomycin appearing only as a covariate influencing MTX clearance. |
| popPK | Zhao_2025_2 | irrelevant | 0 | 0 | The study focuses on the therapeutic effects of otilonium bromide in a bleomycin-induced fibrosis model; bleomycin is used only as a disease inducer (tool), and no PK parameters for bleomycin are reported. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The paper uses bleomycin to induce a disease model in mice and does not measure or report any pharmacokinetic parameters (clearance, volume, etc.) for bleomycin itself. |
| PD | Zhu_2026 | not_relevant | 2 | 1 | The study uses bleomycin to induce a disease model but does not report a pharmacodynamic or exposure-response relationship for bleomycin itself; it focuses on the mechanism of a herbal formula (KHF) without deriving numeric PD parameters for the bleomycin dose-effect. |
| popPK | Zhuo_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug sensitivity (IC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Zhuo_2024 | not_relevant | 1 | 0 | The paper reports in vitro mechanistic studies and IC50 values, not a population pharmacodynamic or exposure-response model with estimated PD parameters. |
| PGx | van_2016 | not_relevant | 5 | 8 | The paper reports an association between HFE genotype and the incidence of a clinical adverse event (pulmonary toxicity), not a quantitative change in a specific pharmacokinetic (PK) or pharmacodynamic (PD) parameter. |
| popPK | van_2022 | irrelevant | 0 | 0 | The study investigates nintedanib's mechanism in a bleomycin-induced lung fibrosis model, not the pharmacokinetics of bleomycin itself. |
| PD | van_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of nintedanib on SIK2 in a bleomycin-induced fibrosis model using genetic knockouts and in vitro assays, but does not report any population pharmacodynamic or exposure-response modeling. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbleomycin%5D&body=Drug%3A%20bleomycin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bleomycin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-22 11:32 UTC</sub>
