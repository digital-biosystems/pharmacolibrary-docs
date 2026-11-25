<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemisinin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemisinin_Chotsiri2024_reference&quot;,&quot;label&quot;:&quot;Chotsiri_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Chotsiri2024_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artemisinin_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# artemisinin

- **generic name:** artemisinin
- **ATC codes:** `P01BE01`, `P01BF07`, `P01BF08`
- **DrugBank:** [DB13132](https://go.drugbank.com/drugs/DB13132) · **PubChem:** [CID 68827](https://pubchem.ncbi.nlm.nih.gov/compound/68827)
- **molar mass:** 282.336 g/mol (C15H22O5) — DrugBank
- **groups:** investigational

## About

Artemisinin is an antimalarial drug used to treat malaria caused by Plasmodium falciparum and other species. It is administered orally in tablet form, though the drug has low bioavailability.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q426921](https://www.wikidata.org/wiki/Q426921), [Wikipedia](https://en.wikipedia.org/wiki/Artemisinin?oldid=1378911221) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| artemisinin | parent | 282.336 | C15H22O5 | DrugBank | [68827](https://pubchem.ncbi.nlm.nih.gov/compound/68827) | Ali_2022, Birgersson_2016, Gordi_2005 |
| artemether | metabolite | 298.379 | C16H26O5 | PubChem | [68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911) | Ding_2026 |
| desbutyllumefantrine | metabolite | 472.834 | C26H24Cl3NO | PubChem | [9934522](https://pubchem.ncbi.nlm.nih.gov/compound/9934522) | Ding_2026 |
| desethylamodiaquine | metabolite | 327.812 | C18H18ClN3O | PubChem | [122068](https://pubchem.ncbi.nlm.nih.gov/compound/122068) | Ding_2026 |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Ding_2026 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Ali_2022 · CL</text><circle cx="334.2" cy="30.0" r="4" fill="#ef6c00"><title>Ali_2022 · CL: 66.7 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Birgersson_2016 · CL/F</text><circle cx="473.5" cy="46.0" r="4" fill="#ef6c00"><title>Birgersson_2016 · CL/F: 417 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ali_2022_reference](drugs/drug_artemisinin/Artemisinin_Ali2022_reference.md) | — | 1-compartment (no model) | 1 | Ali AM et al., Population Pharmacokinetics of Antimala…, Antimicrobial agents and ch… (2022) | [10.1128/aac.01696-21](https://doi.org/10.1128/aac.01696-21) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub> | [Birgersson_2016_reference](drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference.md) | — | 1-compartment (no model) | 5 | Birgersson S et al., Population pharmacokinetic properties o…, Malaria journal (2016) | [10.1186/s12936-016-1134-8](https://doi.org/10.1186/s12936-016-1134-8) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Gordi_2005_reference](drugs/drug_artemisinin/Artemisinin_Gordi2005_reference.md) | — | 1-compartment (no model) | 2 | Gordi T et al., Semi-mechanistic pharmacokinetic/pharma…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02508.x](https://doi.org/10.1111/j.1365-2125.2005.02508.x) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Chotsiri_2024_reference](drugs/drug_artemisinin/Artemisinin_Chotsiri2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Chotsiri P et al., Population pharmacokinetics of primaqui…, Malaria journal (2024) | [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Ding_2024_reference](drugs/drug_artemisinin/Artemisinin_Ding2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Ding_2026_reference](drugs/drug_artemisinin/Artemisinin_Ding2026_reference.md) | — | general linear (no model) | 26 | Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026) | [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Deng_2025_KEAP1](drugs/drug_artemisinin/pd_Deng_2025_KEAP1.md) | direct binding of artemisinin with the KEAP1 protein biomarker turnover ← artemisinin | — | Deng PX et al., Artemisinin inhibits neuronal ferroptos…, Acta pharmacologica Sinica (2025) | [10.1038/s41401-024-01378-6](https://doi.org/10.1038/s41401-024-01378-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gordi_2005_number_of_parasites](drugs/drug_artemisinin/pd_Gordi_2005_number_of_parasites.md) | number of parasites ← artemisinin · disease-progression model | — | Gordi T et al., Semi-mechanistic pharmacokinetic/pharma…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02508.x](https://doi.org/10.1111/j.1365-2125.2005.02508.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lohy_2017_parasite_density](drugs/drug_artemisinin/pd_Lohy_2017_parasite_density.md) | total parasite density (asexual parasite count per microliter of blood multiplied by theoretical blood volume, log-transformed) ← dihydroartemisinin (DHA) · delayed effect through an effect compartment | — | Lohy Das J et al., Population Pharmacokinetic and Pharmaco…, The AAPS journal (2017) | [10.1208/s12248-017-0141-1](https://doi.org/10.1208/s12248-017-0141-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhao_2026_inhibition_rate](drugs/drug_artemisinin/pd_Zhao_2026_inhibition_rate.md) | Mycelial growth inhibition rate of Sclerotinia sclerotiorum ← artemisinin · inhibition effect | — | Zhao Y et al., Antifungal Activity and Biochemical Mec…, International journal of mo… (2026) | [10.3390/ijms27083422](https://doi.org/10.3390/ijms27083422) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:22 | 0:04 | 3/3/0 | 4/0/0 | 0/0/0 | 3,519/156 | einfracz / qwen3.8-27b | 13 | 3/10 | 12/1 | 0 |

## Coverage

- **PubMed hits:** 161 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 0  ·  needs review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2020 | irrelevant | 1 | 0 | This is an in-vitro mechanistic and screening study for anti-SARS-CoV-2 activity, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for artemisinin. |
| PGx | Cao_2020 | not_relevant | 0 | 0 | The study evaluates in vitro anti-SARS-CoV-2 activity and pharmacokinetic predictions of artemisinins without investigating pharmacogenomic variants or their effect on PK/PD parameters. |
| popPK | Chotsiri_2024 | irrelevant | 0 | 0 | This is a population PK study of primaquine and its metabolites; artemisinin is only mentioned as part of ACT background, with no artemisinin PK parameters. |
| popPK | Daher_2019 | irrelevant | 2 | 1 | Artemisinin derivatives are only co-administered treatments; PK parameters (AUC, half-life) are reported for chloroquine, mefloquine and lumefartrine, not artemisinin itself, and detailed values are in additional files/figures not provided. |
| popPK | Deng_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of artemisinin's anti-ferroptotic effects in cell and animal models but does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PGx | Deng_2025 | not_relevant | 0 | 0 | The study investigates the mechanism of action of artemisinin in Alzheimer's disease models (ferroptosis inhibition via KEAP1-Nrf2 pathway) and does not report any pharmacogenomic analysis involving gene variants or their effect on PK/PD parameters. |
| popPK | Ding_2024 | irrelevant | 0 | 0 | This is a population PK study of amodiaquine/desethylamodiaquine and piperaquine in pregnant women; artemisinin is only mentioned as part of "ACT" therapy and no artemisinin PK parameters are reported. |
| popPK | Dipanjan_2017 | irrelevant | 0 | 0 | This is a narrative review focusing on resistance strategies and does not report quantitative pharmacokinetic parameters for artemisinin. |
| PGx | Dipanjan_2017 | not_relevant | 0 | 0 | The paper is a review on drug combination strategies to counter artemisinin resistance and does not report any pharmacogenomic effects on artemisinin pharmacokinetics or pharmacodynamics. |
| popPK | Fröhlich_2020 | irrelevant | 0 | 0 | This is a medicinal chemistry synthesis paper of artemisinin hybrids with only in vitro EC50 cytotoxicity data; no PK parameters for artemisinin are reported. |
| PGx | Gordi_2005 | not_relevant | 1 | 5 | The paper reports sex-based differences in pharmacokinetic parameters (higher intrinsic clearance in females), which is a pharmacometric covariate analysis rather than a specific pharmacogenomic effect linked to a gene variant. |
| popPK | Herrmann_2022 | irrelevant | 0 | 0 | This is a synthesis and in vitro activity study of artemisinin-derived hybrid compounds against SARS-CoV-2 and cancer cells, with no PK disposition parameters for artemisinin. |
| popPK | Hoglund_2017 | irrelevant | 0 | 0 | This is a population PK study of piperaquine, not artemisinin; artemisinin is only mentioned as combination-therapy context, and no artemisinin parameters are reported. |
| popPK | Kavak_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro cytotoxic activity of a thymol-artemisinin hybrid, containing no pharmacokinetic parameters for artemisinin. |
| PGx | Kavak_2022 | not_relevant | 0 | 0 | The paper describes the design and cytotoxicity of a novel artemisinin-thymol hybrid in cell lines, with no data on pharmacogenomic effects or human PK/PD parameters. |
| popPK | Kawuma_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dolutegravir, with artemisinins acting only as co-administered drugs affecting dolutegravir's PK. |
| PGx | Kawuma_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (dolutegravir with artemether or artesunate) and does not report on any pharmacogenomic effects. |
| popPK | Kouakou_2019 | irrelevant | 2 | 0 | This is a systematic review focusing on artesunate and its metabolite dihydroartemisinin (DHA), reporting aggregate metrics like Cmax and AUC rather than specific quantitative population-pharmacokinetic model parameters (CL, V, Q) for the parent drug artemisinin. |
| PGx | Kouakou_2019 | not_relevant | 0 | 0 | The paper is a systematic review of general pharmacokinetics and does not report any pharmacogenomic effects of gene variants on artemisinin/artesunate parameters. |
| popPK | Lohy_2017 | irrelevant | 2 | 6 | This is a population PK study of artesunate and its metabolite dihydroartemisinin, not artemisinin itself; some numeric CL/V values appear in the text but for the wrong drug. |
| popPK | Meena_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and antimalarial evaluation of novel histidinal-based peptide conjugates, not the pharmacokinetics of artemisinin. |
| PGx | Meena_2023 | not_relevant | 0 | 0 | The paper describes the synthesis of new antimalarial agents targeting falcipain-2/3, not the pharmacogenomics of artemisinin. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | This is an in-vitro antifungal mechanism study of artemisinin against Sclerotinia sclerotiorum with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartemisinin%5D&body=Drug%3A%20artemisinin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artemisinin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 18:18 UTC</sub>
