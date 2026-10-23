<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# codeine

- **generic name:** codeine
- **ATC codes:** `N02AJ06`, `N02AJ07`, `N02AJ08`, `R05DA04`
- **DrugBank:** [DB00318](https://go.drugbank.com/drugs/DB00318) · **PubChem:** [CID 5284371](https://pubchem.ncbi.nlm.nih.gov/compound/5284371)
- **molar mass:** 299.3642 g/mol (C18H21NO3) — DrugBank
- **groups:** approved, illicit, investigational

## About

Codeine is an opioid used to treat pain and to suppress cough. It is widely used around the world, often combined with non-opioid painkillers, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q174723](https://www.wikidata.org/wiki/Q174723) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| codeine | parent | 299.364 | C18H21NO3 | DrugBank | [5284371](https://pubchem.ncbi.nlm.nih.gov/compound/5284371) | Ashraf_2024, Gretler_2020, Shah_1990 |
| codeine-6-glucuronide | metabolite | 475.494 | C24H29NO9 | PubChem | [5489029](https://pubchem.ncbi.nlm.nih.gov/compound/5489029) | Ashraf_2024 |
| morphine | metabolite | — (mass units only) | — | — | — | — |
| morphine-3-glucuronide | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Thigpen_2019_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_codeine/Codeine_Thigpen2019_reference.md?tab=Simulation) · [record](drugs/drug_codeine/Codeine_Thigpen2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 33.6 ‡ | L/h | 8.0 mL/kg/ min | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Thigpen_2019_reference](drugs/drug_codeine/Codeine_Thigpen2019_reference.md) |
| CL | CL | 434 ‡ | L/h | 6.2 liters/kg/hr | male Sprague-Dawley rats | 6 | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Shah_1990_reference](drugs/drug_codeine/Codeine_Shah1990_reference.md) |
| V | V/F | 364 ‡ | L | 5.2 L/kg | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Thigpen_2019_reference](drugs/drug_codeine/Codeine_Thigpen2019_reference.md) |
| F | Fab | 0.083 |  | 8.3 % | male Sprague-Dawley rats | 6 | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Shah_1990_reference](drugs/drug_codeine/Codeine_Shah1990_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Thigpen_2019 · CL ·/kg</text><circle cx="282.1" cy="30.0" r="4" fill="#2e7d32"><title>Thigpen_2019 · CL ·/kg: 33.6 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Shah_1990 · CL ·/kg</text><circle cx="476.6" cy="46.0" r="4" fill="#ef6c00"><title>Shah_1990 · CL ·/kg: 434 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Thigpen_2019_reference](drugs/drug_codeine/Codeine_Thigpen2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | James C Thigpen et al., Opioids: A Review of Pharmacokinetics a…, European journal of drug me… (2019) | [10.1007/s13318-019-00552-0](https://doi.org/10.1007/s13318-019-00552-0) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Shah_1990_reference](drugs/drug_codeine/Codeine_Shah1990_reference.md) | — | 1-compartment (no model) | 4 | Shah J et al., Pharmacokinetics of codeine after paren…, Drug metabolism and disposi… (1990) | — |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Anderson_2026_reference](drugs/drug_codeine/Codeine_Anderson2026_reference.md) | — | parent + metabolite (no model) | 0 | Anderson BJ et al., Codeine and Metabolite Concentrations i…, Paediatric anaesthesia (2026) | [10.1002/pan.70227](https://doi.org/10.1002/pan.70227) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Ashraf_2024_reference](drugs/drug_codeine/Codeine_Ashraf2024_reference.md) | — | general linear (no model) | 11 | Ashraf MW et al., Population Pharmacokinetic Quantificati…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9) |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Gretler_2020_reference](drugs/drug_codeine/Codeine_Gretler2020_reference.md) | — | 1-compartment (no model) | 3 | Gretler SR et al., Metabolism, pharmacokinetics and select…, Veterinary anaesthesia and… (2020) | [10.1016/j.vaa.2020.04.004](https://doi.org/10.1016/j.vaa.2020.04.004) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chew_2001_body_temperature](drugs/drug_codeine/pd_Chew_2001_body_temperature.md) | body temperature ← morphine · direct sigmoid Emax (Hill) effect | — | Chew M et al., Precipitated withdrawal following codei…, European journal of pharmac… (2001) | [10.1016/s0014-2999(01)01185-2](https://doi.org/10.1016/s0014-2999(01)01185-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **HLA-B** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Ma_2012](drugs/drug_codeine/pgx_Ma_2012_HLA_B_safety.md) | Joseph D Ma et al., Clinical application of pharmacogenomic…, Journal of pharmacy practice (2012) | [10.1177/0897190012448309](https://doi.org/10.1177/0897190012448309) |
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Peiró_2018](drugs/drug_codeine/pgx_Peir_2018_CYP2C9_safety.md) | Ana M Peiró, Pharmacogenetics in Pain Treatment., Advances in pharmacology (S… (2018) | [10.1016/bs.apha.2018.04.004](https://doi.org/10.1016/bs.apha.2018.04.004) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q45` · fm | formation | [Anderson_2026](drugs/drug_codeine/pgx_Anderson_2026_CYP2D6_Q45.md) | Anderson BJ et al., Codeine and Metabolite Concentrations i…, Paediatric anaesthesia (2026) | [10.1002/pan.70227](https://doi.org/10.1002/pan.70227) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q51` · kmet | formation | [Armstrong_2025](drugs/drug_codeine/pgx_Armstrong_2025_CYP2D6_Q51.md) | Armstrong SJ et al., Precision medicine for Defence?, BMJ military health (2025) | [10.1136/military-2024-002721](https://doi.org/10.1136/military-2024-002721) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Ashraf_2024](drugs/drug_codeine/pgx_Ashraf_2024_CYP2D6_Q100.md) | Ashraf MW et al., Population Pharmacokinetic Quantificati…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Chen_1991](drugs/drug_codeine/pgx_Chen_1991_CYP2D6_Q22.md) | Chen ZR et al., Disposition and metabolism of codeine a…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb05550.x](https://doi.org/10.1111/j.1365-2125.1991.tb05550.x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **COMT** | `Q22` · CL | metabolism | [Crews_2021](drugs/drug_codeine/pgx_Crews_2021_COMT_Q22.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q45` · fm | formation | [Crews_2021](drugs/drug_codeine/pgx_Crews_2021_CYP2D6_Q45.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **OPRM1** | `Q321` · EC50 | target | [Crews_2021](drugs/drug_codeine/pgx_Crews_2021_OPRM1_Q321.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ma_2012](drugs/drug_codeine/pgx_Ma_2012_CYP2C19_Q100.md) | Joseph D Ma et al., Clinical application of pharmacogenomic…, Journal of pharmacy practice (2012) | [10.1177/0897190012448309](https://doi.org/10.1177/0897190012448309) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Ma_2012](drugs/drug_codeine/pgx_Ma_2012_CYP2D6_Q100.md) | Joseph D Ma et al., Clinical application of pharmacogenomic…, Journal of pharmacy practice (2012) | [10.1177/0897190012448309](https://doi.org/10.1177/0897190012448309) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q45` · fm | formation | [PMID22205192_2012](drugs/drug_codeine/pgx_PMID22205192_2012_CYP2D6_Q45.md) | PMID22205192, Clinical Pharmacogenetics Implementatio… (2012) | [10.1038/clpt.2011.287](https://doi.org/10.1038/clpt.2011.287) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [PMID24458010_2014](drugs/drug_codeine/pgx_PMID24458010_2014_CYP2D6_Q100.md) | PMID24458010, Clinical Pharmacogenetics Implementatio… (2014) | [10.1038/clpt.2013.254](https://doi.org/10.1038/clpt.2013.254) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **COMT** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Peiró_2018](drugs/drug_codeine/pgx_Peir_2018_COMT_Q100.md) | Ana M Peiró, Pharmacogenetics in Pain Treatment., Advances in pharmacology (S… (2018) | [10.1016/bs.apha.2018.04.004](https://doi.org/10.1016/bs.apha.2018.04.004) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q45` · fm | metabolism | [Peiró_2018](drugs/drug_codeine/pgx_Peir_2018_CYP2D6_Q45.md) | Ana M Peiró, Pharmacogenetics in Pain Treatment., Advances in pharmacology (S… (2018) | [10.1016/bs.apha.2018.04.004](https://doi.org/10.1016/bs.apha.2018.04.004) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **OPRM1** | `Q321` · EC50 | target | [Peiró_2018](drugs/drug_codeine/pgx_Peir_2018_OPRM1_Q321.md) | Ana M Peiró, Pharmacogenetics in Pain Treatment., Advances in pharmacology (S… (2018) | [10.1016/bs.apha.2018.04.004](https://doi.org/10.1016/bs.apha.2018.04.004) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PTGS1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Peiró_2018](drugs/drug_codeine/pgx_Peir_2018_PTGS1_Q100.md) | Ana M Peiró, Pharmacogenetics in Pain Treatment., Advances in pharmacology (S… (2018) | [10.1016/bs.apha.2018.04.004](https://doi.org/10.1016/bs.apha.2018.04.004) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PTGS2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Peiró_2018](drugs/drug_codeine/pgx_Peir_2018_PTGS2_Q100.md) | Ana M Peiró, Pharmacogenetics in Pain Treatment., Advances in pharmacology (S… (2018) | [10.1016/bs.apha.2018.04.004](https://doi.org/10.1016/bs.apha.2018.04.004) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **UGT2B7** | `Q22` · CL | metabolism | [Peiró_2018](drugs/drug_codeine/pgx_Peir_2018_UGT2B7_Q22.md) | Ana M Peiró, Pharmacogenetics in Pain Treatment., Advances in pharmacology (S… (2018) | [10.1016/bs.apha.2018.04.004](https://doi.org/10.1016/bs.apha.2018.04.004) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q45` · fm | formation | [Persson_1995](drugs/drug_codeine/pgx_Persson_1995_CYP2D6_Q45.md) | Persson K et al., Patient-controlled analgesia (PCA) with…, British journal of clinical… (1995) | [10.1111/j.1365-2125.1995.tb04428.x](https://doi.org/10.1111/j.1365-2125.1995.tb04428.x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **TRPV1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Somogyi_2007](drugs/drug_codeine/pgx_Somogyi_2007_TRPV1_Q100.md) | Andrew A Somogyi et al., Pharmacogenetics of opioids., Clinical pharmacology and t… (2007) | [10.1038/sj.clpt.6100095](https://doi.org/10.1038/sj.clpt.6100095) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q40` · Fab | transport | [Wong_2022](drugs/drug_codeine/pgx_Wong_2022_ABCB1_Q40.md) | Wong AK et al., The Role of Pharmacogenomics in Opioid…, Current treatment options i… (2022) | [10.1007/s11864-022-01010-x](https://doi.org/10.1007/s11864-022-01010-x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **COMT** | `Q22` · CL | metabolism | [Wong_2022](drugs/drug_codeine/pgx_Wong_2022_COMT_Q22.md) | Wong AK et al., The Role of Pharmacogenomics in Opioid…, Current treatment options i… (2022) | [10.1007/s11864-022-01010-x](https://doi.org/10.1007/s11864-022-01010-x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2B6** | `Q22` · CL | metabolism | [Wong_2022](drugs/drug_codeine/pgx_Wong_2022_CYP2B6_Q22.md) | Wong AK et al., The Role of Pharmacogenomics in Opioid…, Current treatment options i… (2022) | [10.1007/s11864-022-01010-x](https://doi.org/10.1007/s11864-022-01010-x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Wong_2022](drugs/drug_codeine/pgx_Wong_2022_CYP2D6_Q22.md) | Wong AK et al., The Role of Pharmacogenomics in Opioid…, Current treatment options i… (2022) | [10.1007/s11864-022-01010-x](https://doi.org/10.1007/s11864-022-01010-x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **OPRM1** | `Q321` · EC50 | target | [Wong_2022](drugs/drug_codeine/pgx_Wong_2022_OPRM1_Q321.md) | Wong AK et al., The Role of Pharmacogenomics in Opioid…, Current treatment options i… (2022) | [10.1007/s11864-022-01010-x](https://doi.org/10.1007/s11864-022-01010-x) |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104970_0.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104970_1.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104970_2.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104970_3.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104970_4.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104970_5.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104996_10.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104996_11.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104996_12.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104996_6.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104996_7.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104996_8.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_codeine/pgx_guideline_CYP2D6_PA166104996_9.md) | guideline | — |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=codeine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` transport | PGx paper |
| distribution | blood-brain barrier | `ABCB1` transport | PGx paper |
| distribution | placenta | `ABCB1` transport | PGx paper |
| distribution | testis | `ABCB1` transport | PGx paper |
| metabolism | brain | `COMT` metabolism, `CYP2D6` formation/substrate | DrugBank actor |
| metabolism | kidney | `COMT` metabolism, `UGT2B7` metabolism/substrate | DrugBank actor |
| metabolism | liver | `COMT` metabolism, `CYP2B6` metabolism, `CYP2C19` metabolism, `CYP2C9` safety_allele, `CYP2D6` formation/substrate, `CYP3A4` substrate, `SLC22A1` inhibitor/substrate, `UGT2B7` metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT2B7` metabolism/substrate | DrugBank actor |
| excretion | kidney | `ABCB1` transport | PGx paper |
| excretion | liver | `ABCB1` transport | PGx paper |

<sub>Actors without a tissue in the table: HLA-B (safety_allele), OPRD1 (target), OPRK1 (target), OPRM1 (regulator), OPRM1 (target), PTGS1 (target), PTGS2 (target), TRPV1 (target), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 09:38 | 14:19 | 1/3/1 | 1/0/0 | 2/0/37 | 339,514/22,025 | einfracz / qwen3.8-27b | 31 | 22/9 | 18/13 | 0 |

## Coverage

- **PubMed hits:** 773 matched, 103 returned
- **screened:** 28  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Linares_2015.pdf` | Linares OA et al., CYP2D6 phenotype-specific codeine popul…, Journal of pain & palliativ… (2015) | popPK | 10 | [10.3109/15360288.2014.997854](https://doi.org/10.3109/15360288.2014.997854) | [25562725](https://pubmed.ncbi.nlm.nih.gov/25562725) | The paper describes a population pharmacokinetic model for codeine and its metabolites, but the provided text contains only qualitative summaries (e.g., % conversion) and lacks specific numeric parameter values (CL, V, ka, etc.). |
| `Shah_1990.pdf` | Shah J et al., Pharmacokinetics of codeine after paren…, Drug metabolism and disposi… (1990) | popPK | 10 | not captured | [1981718](https://pubmed.ncbi.nlm.nih.gov/1981718) | The study reports quantitative PK parameters (CL, Vd, MRT) for codeine in rats directly in the text. |
| `Chen_2022.pdf` | Chen JH et al., Pharmacokinetics and transplacental tra…, Journal of ethnopharmacology (2022) | popPK | 9 | [10.1016/j.jep.2022.115623](https://doi.org/10.1016/j.jep.2022.115623) | [36007718](https://pubmed.ncbi.nlm.nih.gov/36007718) | The study describes a two-compartment pharmacokinetic model for codeine in pregnant rats, but the specific numeric parameter values (CL, V, Q, t1/2) are not present in the provided text, only qualitative descriptions and biotransformation ratios. |
| `Gretler_2020.pdf` | Gretler SR et al., Metabolism, pharmacokinetics and select…, Veterinary anaesthesia and… (2020) | popPK | 9 | [10.1016/j.vaa.2020.04.004](https://doi.org/10.1016/j.vaa.2020.04.004) | [32654915](https://pubmed.ncbi.nlm.nih.gov/32654915) | The study reports key PK parameters (Cmax, tmax, half-life) for codeine in horses, but full compartmental model parameters (CL, V) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-22T09:25:58.960175+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alván_1992 | not_relevant | 2 | 0 | Mentions a qualitative loss of analgesic effect in slow metabolizers but contains no specific PK/PD data or quantitative effect sizes. |
| PGx | Armstrong_2025 | not_relevant | 5 | 0 | The paper is a conceptual overview discussing the general relationship between CYP2D6 genotypes and codeine efficacy/toxicity without providing original experimental data or fitted quantitative PK/PD effect sizes. |
| PGx | Ballester_2022 | not_relevant | 6 | 4 | This is a narrative review discussing the qualitative impact of CYP2D6 phenotypes on opioid (including codeine) PK/PD, but it lacks fitted effect sizes or primary experimental data to extract specific parameter changes. |
| PD | Bloomfield_1977 | not_relevant | 1 | 0 | The paper reports clinical efficacy outcomes (pain scores) for codeine but provides no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Capparelli_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of INH-A21 (IVIG) in premature infants, not codeine. |
| PD | Capparelli_2005 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (half-life, clearance) and antibody concentrations for an immune globulin, but does not report a pharmacodynamic model or exposure-response relationship for codeine. |
| popPK | Carliss_2009 | irrelevant | 0 | 0 | The study is an in vitro mechanistic/receptor binding study and does not report pharmacokinetic parameters (CL, V, etc.) for codeine. |
| PD | Chan_1987 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetics and general pharmacodynamic effects in renal insufficiency, containing no numeric PD parameters or concentration-effect data. |
| popPK | Chen_2022 | relevant | 9 | 0 | The study describes a two-compartment pharmacokinetic model for codeine in pregnant rats, but the specific numeric parameter values (CL, V, Q, t1/2) are not present in the provided text, only qualitative descriptions and biotransformation ratios. |
| popPK | Chew_2001 | irrelevant | 2 | 1 | The study focuses on behavioral withdrawal and metabolic ratios (morphine/codeine) in rats, reporting plasma concentrations and EC50 for morphine rather than quantitative population-PK parameters (CL, V, ka) for codeine. |
| popPK | Choi_1988 | irrelevant | 0 | 0 | The study is an in-vitro neurotoxicity assay investigating the neuroprotective effects of opioids, not a pharmacokinetic study. |
| PGx | Cohen_2012 | not_relevant | 2 | 0 | The paper mentions codeine in a list of drugs studied for pharmacogenetics but does not report specific gene variants or quantitative PK/PD effects for codeine. |
| PD | Dayer_1997_2 | not_relevant | 0 | 0 | The text is a general pharmacological review of tramadol that mentions codeine only as a structural analogue and does not provide any numeric PD parameters or exposure-response data for codeine. |
| PGx | Dayer_1997_2 | not_relevant | 0 | 0 | The paper discusses the pharmacology of tramadol, not codeine, and mentions the CYP2D6 polymorphism affecting tramadol's active metabolite, not codeine. |
| PGx | Ereshefsky_1995 | not_relevant | 0 | 0 | The paper reviews CYP2D6 inhibition by SSRIs and mentions codeine only in a general list of CYP2D6 substrates, without reporting specific pharmacokinetic or pharmacodynamic data for codeine or any pharmacogenomic effect on its metabolism. |
| popPK | Erthal-Williamson_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on opioid consumption trends (S-DDD) in the Eastern Mediterranean Region and does not report any pharmacokinetic parameters for codeine. |
| popPK | Giron_1991 | irrelevant | 0 | 0 | The study investigates the clinical effects of dextromethorphan on COPD patients and does not report any pharmacokinetic parameters for codeine. |
| PD | Giron_1991 | not_relevant | 0 | 0 | The study investigates dextromethorphan, not codeine, and reports only qualitative lack of effect without numeric PD parameters or concentration-response data. |
| PD | Goa_1993 | not_relevant | 1 | 0 | The text is a qualitative review of propiram that mentions codeine only for comparative efficacy and duration, without providing any numeric PD parameters or exposure-response data for codeine. |
| popPK | Gretler_2020 | relevant | 9 | 4 | The study reports key PK parameters (Cmax, tmax, half-life) for codeine in horses, but full compartmental model parameters (CL, V) are not explicitly listed in the provided text. |
| PD | Grond_2004_2 | not_relevant | 0 | 0 | The text is a general review of tramadol's pharmacology and does not report any specific pharmacodynamic or exposure-response data for codeine. |
| PGx | Grond_2004_2 | not_relevant | 0 | 0 | The paper focuses exclusively on the clinical pharmacology of tramadol, not codeine, despite mentioning codeine only for structural comparison. |
| popPK | Hanses_1996 | irrelevant | 2 | 0 | Codeine is only a co-administered drug alongside the subject diclofenac, and no quantitative PK parameter values are provided in the evidence. |
| PD | Hertz_2021 | not_relevant | 1 | 0 | The text is a mini-review discussing approaches to identify pharmacogenetic associations with pharmacodynamics and mentions codeine only as an example of PK confounding, without reporting any specific numeric PD parameters or exposure-response data. |
| PGx | Hertz_2024 | not_relevant | 2 | 0 | This is a narrative review of clinical practice guidelines regarding testing recommendations; it does not report primary pharmacokinetic or pharmacodynamic data or fitted effect sizes for codeine. |
| popPK | Ing_2012 | irrelevant | 1 | 0 | This is a mini-review of PK/PD principles and opioid classes that lacks original quantitative disposition parameters (CL, V, etc.) for codeine. |
| PD | Ing_2012 | not_relevant | 2 | 0 | The paper is a mini-review that discusses PK/PD concepts and models for opioids (including codeine) but does not report specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect data for codeine in this text. |
| PGx | Kalow_1989 | not_relevant | 0 | 0 | The paper discusses debrisoquine and mephenytoin polymorphisms and lists substrates for debrisoquine hydroxylase, but it does not report on codeine or its PK/PD parameters. |
| PGx | Karroum_2008 | not_relevant | 0 | 0 | The paper is a general overview of restless-legs syndrome and its treatment, mentioning codeine only as a mild treatment option, but does not report any pharmacogenomic effects or variant-specific PK/PD data. |
| popPK | Khan_2018 | irrelevant | 0 | 0 | The study is an environmental monitoring analysis of drug residues in water, not a pharmacokinetic study, and codeine was not detected. |
| PD | Khan_2018 | not_relevant | 0 | 0 | The paper is an environmental monitoring study measuring drug concentrations in water, not a pharmacodynamic or exposure-response study in humans or animals. |
| PGx | Kiang_2005 | not_relevant | 3 | 5 | The paper is a broad review of UGT-mediated drug-drug interactions and only briefly mentions codeine glucuronidation in the context of xenobiotic inhibition/induction, not a specific pharmacogenomic (gene variant) effect on PK/PD. |
| popPK | Kirkwood_1998 | irrelevant | 0 | 0 | The study investigates in-vitro metabolism of dihydrocodeine, not the pharmacokinetic disposition parameters of codeine. |
| PGx | Kleine-Brueggeney_2010 | not_relevant | 0 | 0 | The text is a general discussion of pharmacogenetics in palliative care and mentions codeine metabolism by CYP2D6, but it does not report specific quantitative changes in PK or PD parameters resulting from a genotype. |
| PGx | Leppert_2016 | not_relevant | 4 | 2 | The paper describes the pharmacogenomics of dihydrocodeine, noting it is less dependent on CYP2D6, but does not report a change in a PK/PD parameter of codeine itself. |
| popPK | Linares_2015 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for codeine and its metabolites, but the provided text contains only qualitative summaries (e.g., % conversion) and lacks specific numeric parameter values (CL, V, ka, etc.). |
| PGx | Lotsch_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP2D6 inhibition by quinidine) rather than pharmacogenomic gene variants affecting codeine PK/PD. |
| PD | Lyngstad_2021 | not_relevant | 3 | 2 | The study reports dose-response data for codeine combined with paracetamol (60 mg) but lacks plasma concentration data, preventing the derivation of exposure-response (PD) parameters like EC50 or Emax. |
| PD | Ma_2012 | not_relevant | 1 | 0 | The paper is a review of pharmacogenomics that discusses codeine qualitatively but does not report any numeric pharmacodynamic parameters or exposure-response relationships. |
| PGx | Ma_2012 | not_relevant | 5 | 2 | The paper provides qualitative descriptions and population allele frequencies for codeine and CYP2D6, but it lacks fitted effect sizes (theta) or quantitative data showing how specific genotypes change codeine PK/PD parameters. |
| PD | Ma_2012_2 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacogenomics and does not report any numeric PD parameters or exposure-response relationships for codeine. |
| PGx | Ma_2012_2 | not_relevant | 2 | 0 | The paper is a review stating that there is a lack of conclusive evidence regarding the specific influence of CYP2D6 on codeine efficacy and toxicity, and does not report quantitative PK/PD effect sizes. |
| popPK | Ma_2021 | irrelevant | 0 | 0 | The study characterizes receptor binding and signaling (KD, EC50) in vitro, not pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | McGill_2025 | irrelevant | 0 | 0 | The paper is a preclinical study on 17α-estradiol in APOE3/4 mice and contains no information regarding codeine pharmacokinetics. |
| PD | McGill_2025 | not_relevant | 0 | 0 | The paper studies 17α-estradiol in mice, not codeine, and reports no pharmacodynamic or exposure-response parameters. |
| PD | Melander_1983 | not_relevant | 0 | 0 | The text is a review discussing the influence of food on presystemic clearance and bioavailability, with no pharmacodynamic modeling, concentration-effect analysis, or numeric PD parameters for codeine. |
| PGx | Michaud_2021 | not_relevant | 2 | 1 | The text is a general review of phenoconversion cases and mentions codeine only as an example, without reporting specific gene-variant-to-PK/PD data or effect sizes. |
| PGx | Mikus_1991 | not_relevant | 3 | 0 | The text is a general review of the concept of CYP2D6 polymorphism affecting codeine metabolism, mentioning that studies exist, but it does not report specific PK/PD parameter values or fitted effect sizes for a gene variant. |
| PGx | Mikus_1994 | not_relevant | 0 | 0 | The study investigates the biosynthesis of endogenous codeine and morphine, finding no effect of CYP2D6 genotype on these endogenous substances, rather than the pharmacokinetics of exogenous codeine administration. |
| PD | Miller_1990 | not_relevant | 1 | 0 | The text is a qualitative review stating that codeine is unaffected pharmacokinetically by smoking, but it provides no numeric PD parameters, dose-response curves, or concentration-effect data. |
| popPK | Montgomery_2016 | irrelevant | 0 | 0 | The paper is an educational practical on intestinal smooth muscle contraction where codeine is only mentioned as a context for GI motility, with no PK data. |
| PD | Montgomery_2016 | not_relevant | 0 | 0 | The paper is a physiology lab manual focusing on ACh and epinephrine; codeine is only mentioned qualitatively in a list of drugs for gastrointestinal management without any PD data or analysis. |
| PGx | PMID24458010_2014 | not_relevant | 6 | 2 | The paper is a clinical guideline summarizing associations and therapeutic recommendations rather than reporting primary quantitative pharmacokinetic or pharmacodynamic effect sizes. |
| PGx | PMID34267337_2022 | not_relevant | 0 | 0 | The provided text is a data availability statement and does not contain results or discussion regarding the effect of gene variants on codeine pharmacokinetics or pharmacodynamics. |
| PD | Peiró_2018 | not_relevant | 1 | 0 | The text is a review of pharmacogenetics in pain management and mentions codeine only in the context of the WHO analgesic ladder and genetic variability, without providing any numeric PD parameters or exposure-response data. |
| PGx | Peiró_2018 | not_relevant | 5 | 0 | The text is a review chapter discussing the WHO analgesic ladder; while it mentions codeine in the title and context, the provided excerpt only covers nonopioid analgesics (NSAIDs) and general pharmacogenetic concepts, without reporting specific data or effects on codeine's PK/PD parameters. |
| PD | Peiró_2018_2 | not_relevant | 1 | 0 | The text is a general review of pharmacogenetics in pain treatment and mentions codeine metabolism qualitatively but provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Peiró_2018_2 | not_relevant | 0 | 0 | The text is a general review discussing the potential of pharmacogenetics in pain treatment and mentions CYP2D6's role in codeine metabolism qualitatively, but it does not report specific study results or data for codeine. |
| PGx | Persson_1992 | not_relevant | 1 | 5 | The study focuses on postoperative PK in patients with a specific phenotype (extensive metabolizers) but does not compare different genotypes or report a pharmacogenomic effect (i.e., it does not show how a variant changes PK parameters relative to another). |
| PGx | Ramsey_2020 | not_relevant | 3 | 2 | The text is a general overview mentioning that guidelines exist for codeine but does not report specific data, effect sizes, or parameter changes for the drug. |
| PD | Rao_2019 | not_relevant | 1 | 0 | The text is a general review of pharmacogenetics in natural products and does not report specific numeric PD parameters or exposure-response relationships for codeine. |
| PGx | Rao_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics in natural products and does not report specific codeine pharmacokinetic or pharmacodynamic data. |
| PGx | Rollinson_2020 | not_relevant | 0 | 0 | This is a general review of pharmacogenomics in primary care that mentions codeine only as a general example of a drug-gene pair without providing specific quantitative data or effect sizes for codeine. |
| PD | Skeith_1994 | not_relevant | 1 | 0 | The text is a qualitative review that mentions the existence of concentration-response relationships but does not provide any specific numeric PD parameters or data for codeine. |
| popPK | Sohns_2024 | irrelevant | 0 | 0 | The study investigates the mechanism of GABA and NKCC1 on pain and itch, using codeine only as a pruritogen to evoke C-fiber activity, without reporting any pharmacokinetic parameters. |
| PD | Sohns_2024 | not_relevant | 0 | 0 | The paper investigates GABA and furosemide; codeine is used only as a positive control for itch induction, and no dose-response or exposure-response analysis with numeric PD parameters is performed for codeine. |
| PD | Somogyi_2007 | not_relevant | 0 | 0 | The provided text is a review snippet discussing pharmacogenetics (TRPV1 gene) and does not contain any codeine-specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| PGx | Somogyi_2007 | not_relevant | 0 | 0 | The text discusses the TRPV1 gene and cold pressor pain tolerance, but does not mention codeine or its PK/PD parameters. |
| PD | Somogyi_2007_2 | not_relevant | 1 | 0 | The text is a qualitative review of opioid pharmacogenetics and does not report any specific numeric PD parameters or concentration-effect data for codeine. |
| PGx | Swen_2011 | not_relevant | 0 | 0 | The paper is a general guideline update regarding pharmacogenetic testing and does not report specific PK/PD data for codeine. |
| PD | Thigpen_2019 | not_relevant | 2 | 1 | The paper is a general review of opioid PK/PD in pediatrics and does not report specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for codeine. |
| PD | Thigpen_2019_2 | not_relevant | 2 | 1 | The text is a general review introduction that qualitatively discusses opioid PK/PD in pediatrics but does not provide specific numeric PD parameters or extractable concentration-effect curves for codeine. |
| PD | Todd_1985_2 | not_relevant | 0 | 0 | The text is a qualitative review of suprofen's efficacy compared to codeine and other analgesics, containing no numeric PD parameters, concentration-effect curves, or dose-response data for codeine. |
| PD | Vearrier_2021 | not_relevant | 1 | 0 | The paper is a general review of opioid pharmacology and toxicity that mentions codeine's pharmacokinetics but does not provide specific numeric PD parameters or exposure-response data. |
| PD | Vearrier_2021_2 | not_relevant | 2 | 0 | The paper is a general review of opioid pharmacology and toxicity that mentions codeine's pharmacokinetics but does not provide specific numeric PD parameters or exposure-response data for codeine. |
| popPK | Velez_2015 | irrelevant | 3 | 0 | The study analyzes the pharmacokinetics of orally administered morphine, not codeine; codeine is only mentioned as a comparator/context for pain management. |
| PGx | Wong_2022 | not_relevant | 4 | 2 | This is a narrative review discussing guidelines for codeine and CYP2D6, but it does not report original quantitative PK/PD data or fitted effect sizes from a specific study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-22 09:26 UTC</sub>
