<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;arpraziquantel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Arpraziquantel_Bustinduy2016_mean&quot;,&quot;label&quot;:&quot;Bustinduy_2016_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Arpraziquantel_Bustinduy2016_median&quot;,&quot;label&quot;:&quot;Bustinduy_2016_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_median.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# arpraziquantel

- **generic name:** arpraziquantel
- **ATC codes:** `P02BA03`
- **DrugBank:** [DB11749](https://go.drugbank.com/drugs/DB11749) · **PubChem:** [CID 445900](https://pubchem.ncbi.nlm.nih.gov/compound/445900)
- **molar mass:** 312.4061 g/mol (C19H24N2O2) — DrugBank
- **groups:** investigational

## About

Arpraziquantel is an antiparasitic compound being tested for treating schistosomiasis. It is an investigational medication recognized as a therapeutic alternative by the World Health Organization.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27292599](https://www.wikidata.org/wiki/Q27292599), [Wikipedia](https://en.wikipedia.org/wiki/Arpraziquantel?oldid=1338565038) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arpraziquantel (R-praziquantel) | parent | 312.406 | C19H24N2O2 | DrugBank | [445900](https://pubchem.ncbi.nlm.nih.gov/compound/445900) | Bustinduy_2016, Falcoz_2022 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Bustinduy_2016_r_pzq](drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_r_pzq.md) | — | 1-compartment (no model) | 4 | Bustinduy AL et al., Population Pharmacokinetics and Pharmac…, mBio (2016) | [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [↳ mean](drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean.md) | ▶ model + simulator | 1-compartment, oral | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [↳ median](drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_median.md) | ▶ model + simulator | 1-compartment, oral | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Falcoz_2022_reference](drugs/drug_arpraziquantel/Arpraziquantel_Falcoz2022_reference.md) | — | 1-compartment (no model) | 1 | Falcoz C et al., R-praziquantel integrated population ph…, Journal of pharmacokinetics… (2022) | [10.1007/s10928-021-09791-8](https://doi.org/10.1007/s10928-021-09791-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_female](drugs/drug_arpraziquantel/pd_Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_female.md) | Viability of ex vivo adult S. mansoni worms (female) ← praziquantel · direct sigmoid Emax (Hill) effect | — | Brito JR et al., Neolignans isolated from Saururus cernu…, Scientific reports (2022) | [10.1038/s41598-022-23110-2](https://doi.org/10.1038/s41598-022-23110-2) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_male](drugs/drug_arpraziquantel/pd_Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_male.md) | Viability of ex vivo adult S. mansoni worms (male) ← praziquantel · direct sigmoid Emax (Hill) effect | — | Brito JR et al., Neolignans isolated from Saururus cernu…, Scientific reports (2022) | [10.1038/s41598-022-23110-2](https://doi.org/10.1038/s41598-022-23110-2) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:08 | 0:04 | 1/3/0 | 2/0/0 | 0/0/0 | 3,952/176 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 60 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biendl_2022 | irrelevant | 0 | 0 | This is an antischistosomal drug-screening study; praziquantel is only mentioned as the existing treatment and no PK parameters for it are reported. |
| popPK | Biendl_2023 | irrelevant | 0 | 0 | The paper concerns ozonide antischistosomal compounds, not arpraziquantel; praziquantel is only mentioned as background and no PK parameters for it are reported. |
| popPK | Brito_2022 | irrelevant | 0 | 0 | In vitro antischistosomal drug-discovery study of neolignans; praziquantel is only a reference comparator and no PK parameters are reported. |
| popPK | Bustinduy_2020 | irrelevant | 2 | 8 | This is a population PK study of praziquantel (PZQ), the racemate, not arpraziquantel specifically; numeric parameters (Ka 2.012 h⁻¹, SCL/F 324 L/h, Vc/F 183 L) are present in the evidence but for the wrong drug. |
| popPK | Dobrachinski_2024 | irrelevant | 0 | 0 | The paper is a virtual screening and pharmacophore modeling study for antischistosomal agents, not a pharmacokinetic study reporting disposition parameters for praziquantel (or arpraziquantel). |
| PGx | Dobrachinski_2024 | not_relevant | 0 | 0 | The paper reports in vitro/in vivo efficacy of betamethasone and doxazosin using a pharmacophore model; it does not report pharmacogenomic effects (gene variants) on the PK or PD of praziquantel. |
| PGx | Falcoz_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic model based on age, weight, and disease status, but does not analyze the impact of specific gene variants or genotypes on PK parameters. |
| popPK | Giorgi_2001 | irrelevant | 0 | 0 | The study investigates praziquantel, not arpraziquantel. |
| PGx | Giorgi_2001 | not_relevant | 0 | 0 | The paper investigates praziquantel (not arpraziquantel) in lambs and focuses on P450 enzyme modulation rather than specific gene variants affecting PK/PD. |
| popPK | González_2024 | irrelevant | 0 | 0 | The paper analyzes physicochemical properties and efficacy of anti-schistosomal compounds, not the pharmacokinetic disposition parameters (CL, V, etc.) of arpraziquantel. |
| PGx | González_2024 | not_relevant | 0 | 0 | The paper analyzes physicochemical properties of anti-schistosomal compounds and does not report any pharmacogenomic effects or gene variants. |
| popPK | Hai-Feng_2017 | irrelevant | 0 | 0 | The study investigates praziquantel, not arpraziquantel. |
| PGx | Hai-Feng_2017 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters of praziquantel in buffaloes without any analysis of genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Lombardo_2019 | irrelevant | 0 | 0 | The paper studies praziquantel (a different drug), not arpraziquantel. |
| PGx | Lombardo_2019 | not_relevant | 0 | 0 | The study compares pharmacokinetics of two praziquantel formulations in mice and does not investigate any genetic or pharmacogenomic factors. |
| popPK | Meister_2019 | irrelevant | 0 | 0 | This is a population PK study of tribendimidine (metabolites dADT/adADT); praziquantel appears only as a comparator treatment, and no arpraziquantel PK parameters are reported. |
| popPK | Morais_2021 | irrelevant | 0 | 0 | This is a drug-discovery/antischistosomal screening study of pyrazoline derivatives; praziquantel is only a positive control and no PK disposition parameters for it are reported. |
| popPK | Ridtitid_2007 | irrelevant | 0 | 0 | The paper studies praziquantel, not arpraziquantel, which is a different chemical entity. |
| PGx | Ridtitid_2007 | not_relevant | 0 | 0 | The study reports a pharmacokinetic drug-drug interaction (DDI) between ketoconazole and praziquantel, not a pharmacogenomic effect based on gene variants. |
| popPK | Souza_2024 | irrelevant | 0 | 0 | The study focuses on the antischistosomal efficacy of plant-derived γ-lactones, using praziquantel only as a positive control comparator, and does not report pharmacokinetic parameters for arpraziquantel. |
| PGx | Souza_2024 | not_relevant | 0 | 0 | The paper investigates the efficacy of new γ-lactones from Porcelia ponderosa against schistosomiasis and does not report any pharmacogenomic effects on the PK or PD of praziquantel. |
| popPK | Thomas_2016 | irrelevant | 1 | 1 | This is a study of praziquantel chemical degradation in aquarium water, not a PK study reporting disposition parameters (CL, V, ka, half-life with volume) for the drug in a subject; no numeric PK parameter values are present. |
| popPK | Whiteland_2020 | irrelevant | 0 | 0 | This is an in vitro anti-schistosomal drug-discovery study of N-acyl homoserine lactones; praziquantel is only a positive control and no PK parameters for it are reported. |
| popPK | de_2020 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy of diminazene (not praziquantel) and contains no pharmacokinetic parameters for praziquantel. |
| PGx | de_2020 | not_relevant | 0 | 0 | The paper discusses the efficacy of diminazene against Schistosoma mansoni and mentions praziquantel only as background; it contains no pharmacogenomic data, gene variants, or specific PK/PD parameters for praziquantel. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barpraziquantel%5D&body=Drug%3A%20arpraziquantel%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_arpraziquantel/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:06 UTC</sub>
