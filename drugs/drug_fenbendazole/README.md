<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;fenbendazole&quot;}]"></div>

# fenbendazole

- **generic name:** fenbendazole
- **ATC codes:** `P02CA06`
- **DrugBank:** [DB11410](https://go.drugbank.com/drugs/DB11410) · **PubChem:** none
- **molar mass:** 299.348 g/mol (C15H13N3O2S) — DrugBank
- **groups:** investigational, vet_approved

## About

Fenbendazole is a benzimidazole anthelmintic used to treat gastrointestinal parasites in animals. It is administered orally in capsule or tablet form, and also via oropharyngeal route. It is authorized for veterinary use in a wide range of animals but is not approved for human use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q908013](https://www.wikidata.org/wiki/Q908013), [Wikipedia](https://en.wikipedia.org/wiki/Fenbendazole?oldid=1368878796) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fenbendazole | parent | 299.348 | C15H13N3O2S | DrugBank | — | Bach_2021, Beier_2000 |
| fenbendazole sulphone | metabolite | — (mass units only) | — | — | — | — |
| oxfendazole | metabolite | 315.347 | C15H13N3O3S | PubChem | [40854](https://pubchem.ncbi.nlm.nih.gov/compound/40854) | Bach_2021 |
| oxfendazole sulfone | metabolite | 331.346 | C15H13N3O4S | PubChem | [162136](https://pubchem.ncbi.nlm.nih.gov/compound/162136) | Bach_2021 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Bach_2021_reference](drugs/drug_fenbendazole/Fenbendazole_Bach2021_reference.md) | — | general linear (no model) | 9 | Bach T et al., Population Pharmacokinetic Model of Oxf…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02129-20](https://doi.org/10.1128/AAC.02129-20) |
| <span class="pk-rf" hidden data-species="camelid" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Beier_2000_reference](drugs/drug_fenbendazole/Fenbendazole_Beier2000_reference.md) | — | 1-compartment (no model) | 0 | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mackintosh_1985_reference](drugs/drug_fenbendazole/Fenbendazole_Mackintosh1985_reference.md) | — | general linear (no model) | 0 | Mackintosh CG et al., Efficacy and pharmacokinetics of febant…, New Zealand veterinary jour… (1985) | [10.1080/00480169.1985.35194](https://doi.org/10.1080/00480169.1985.35194) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span> | [Beier_2000_AUC](drugs/drug_fenbendazole/pd_Beier_2000_AUC.md) | AUC ← fenbendazole · model not identified | — | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span> | [Beier_2000_Cp_max](drugs/drug_fenbendazole/pd_Beier_2000_Cp_max.md) | Cp(max) ← fenbendazole · model not identified | — | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span> | [Beier_2000_Plasma_fenbendazole_concentration](drugs/drug_fenbendazole/pd_Beier_2000_Plasma_fenbendazole_concentration.md) | Plasma fenbendazole concentration ← fenbendazole · direct linear effect | — | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span> | [Beier_2000_T_1_2alpha](drugs/drug_fenbendazole/pd_Beier_2000_T_1_2alpha.md) | T(1/2alpha) ← fenbendazole · model not identified | — | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span> | [Beier_2000_T_1_2beta](drugs/drug_fenbendazole/pd_Beier_2000_T_1_2beta.md) | T(1/2beta) ← fenbendazole · model not identified | — | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span> | [Beier_2000_T_max](drugs/drug_fenbendazole/pd_Beier_2000_T_max.md) | T(max) ← fenbendazole · model not identified | — | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span> | [Beier_2000_V_d](drugs/drug_fenbendazole/pd_Beier_2000_V_d.md) | V(d) ← fenbendazole · model not identified | — | Beier E et al., Oral pharmacokinetics of fenbendazole i…, Small ruminant research : t… (2000) | [10.1016/s0921-4488(00)00124-3](https://doi.org/10.1016/s0921-4488(00)00124-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Dong_2025_EC50](drugs/drug_fenbendazole/pd_Dong_2025_EC50.md) | Parasite mortality (anthelmintic efficacy against G. kobayashii, bath exposure) ← fenbendazole · inhibition effect | — | Dong J et al., Preclinical Evaluation of Fenbendazole…, Animals : an open access jo… (2025) | [10.3390/ani15121811](https://doi.org/10.3390/ani15121811) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Dong_2025_LC50](drugs/drug_fenbendazole/pd_Dong_2025_LC50.md) | Goldfish mortality (acute toxicity, bath exposure) ← fenbendazole · model not identified | — | Dong J et al., Preclinical Evaluation of Fenbendazole…, Animals : an open access jo… (2025) | [10.3390/ani15121811](https://doi.org/10.3390/ani15121811) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Feyera_2022_LDA](drugs/drug_fenbendazole/pd_Feyera_2022_LDA.md) | inhibition of egg embryonation (in-ovo larval development assay) ← fenbendazole · direct sigmoid Emax (Hill) effect | — | Feyera T et al., Evaluation of, Journal of helminthology (2022) | [10.1017/S0022149X22000177](https://doi.org/10.1017/S0022149X22000177) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Feyera_2022_LMIA](drugs/drug_fenbendazole/pd_Feyera_2022_LMIA.md) | inhibition of larval migration (larval migration inhibition assay) ← fenbendazole · direct sigmoid Emax (Hill) effect | — | Feyera T et al., Evaluation of, Journal of helminthology (2022) | [10.1017/S0022149X22000177](https://doi.org/10.1017/S0022149X22000177) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span> | [Guinda_2025_EHT_hatch_rate](drugs/drug_fenbendazole/pd_Guinda_2025_EHT_hatch_rate.md) | Percentage of hatched eggs (inhibition of larval hatching) in the egg hatch test ← thiabendazole (TBZ; surrogate for benzimidazoles/fenbendazole) · direct sigmoid Emax (Hill) effect | — | Guinda EFX et al., Efficacy of fenbendazole against gastro…, International journal for p… (2025) | [10.1016/j.ijpddr.2024.100572](https://doi.org/10.1016/j.ijpddr.2024.100572) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 23:44 | 0:06 | 0/3/0 | 12/0/0 | 0/0/0 | 3,808/162 | einfracz / qwen3.8-27b | 9 | 3/6 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 7  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bach_2021 | relevant | 4 | 8 | The paper models fenbendazole as a minor metabolite of oxfendazole, providing a quantitative population PK parameter (elimination rate constant ke,FEN = 0.0942 h-1) for fenbendazole, though it is not a study of fenbendazole as the primary subject drug. |
| PGx | Bach_2021 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic modeling of oxfendazole and its metabolites, and does not investigate the influence of gene variants or genotypes on these parameters. |
| PGx | Beier_2000 | not_relevant | 0 | 0 | The study describes the standard pharmacokinetics of fenbendazole in llamas and contains no data on gene variants, genotypes, or pharmacogenomic influences. |
| popPK | Dai_2018 | irrelevant | 5 | 6 | The study reports only non-compartmental parameters (Cmax, t1/2, AUC) for fenbendazole, lacking the specific disposition parameters (CL, V, Q, ka) required for a population-PK profile. |
| PGx | Dai_2018 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetics in dogs without any investigation into gene variants or genotypes. |
| popPK | Dong_2025 | irrelevant | 0 | 0 | Efficacy/safety study of fenbendazole in goldfish with no PK disposition parameters (no CL, V, ka, half-life, or PK model); only EC50/LC50 dose-response values. |
| popPK | Feyera_2022 | irrelevant | 0 | 0 | In vitro anthelmintic efficacy assay (EC50 values) in chicken parasite larvae, no PK disposition parameters for fenbendazole. |
| popPK | Fischer_2025 | irrelevant | 0 | 0 | This is an anthelmintic resistance study (FECRT, amplicon sequencing, larval development assay) using fenbendazole only as a treatment; no PK parameters are reported. |
| popPK | Guinda_2025 | irrelevant | 0 | 0 | This is an anthelmintic efficacy/resistance study (FECRT, EHT, sequencing) in goats; no PK parameters for fenbendazole are reported. |
| popPK | Howard_2014 | irrelevant | 8 | 0 | The paper studies fenbendazole PK in swine but the evidence contains only qualitative results (P-values) without specific numeric parameter values. |
| PGx | Howard_2014 | not_relevant | 2 | 5 | The study investigates the effect of breed (polygenic/environmental) and sex, not specific gene variants or genotypes, on PK parameters. |
| popPK | Long_2026 | irrelevant | 0 | 0 | The paper focuses on the antifungal activity of novel imidazo[1,2-a]pyridine hydrazone derivatives, with fenbendazole serving only as a comparative agent, and no pharmacokinetic parameters are reported. |
| PGx | Long_2026 | not_relevant | 0 | 0 | The paper reports the discovery and mechanism of action of novel antifungal compounds, not pharmacogenomic effects on fenbendazole PK/PD. |
| popPK | Mackintosh_1985 | relevant | 6 | 3 | The study reports pharmacokinetic data for fenbendazole (as a metabolite of febantel) in red deer, providing peak plasma concentrations and times, but lacks explicit clearance, volume, or rate constant parameters typically required for full population PK extraction. |
| PGx | Mackintosh_1985 | not_relevant | 0 | 0 | The study reports standard pharmacokinetics in red deer but contains no data or discussion regarding genetic variants affecting these parameters. |
| popPK | Melian_2021 | relevant | 10 | 3 | The paper reports a population pharmacokinetic study of fenbendazole in sheep, but the specific compartmental parameter values (CL, V, Q, ka) mentioned are not explicitly listed in the provided text evidence, only NCA parameters (Cmax, AUC) are shown. |
| PGx | Melian_2021 | not_relevant | 0 | 1 | The study investigates formulation effects (nanocrystals vs physical mixture) on pharmacokinetics in sheep, not the influence of gene variants or genotypes. |
| popPK | Oh_2006 | irrelevant | 0 | 0 | The paper reports aquatic ecotoxicology data (EC50, hazard quotients) for benzimidazoles, not pharmacokinetic parameters for fenbendazole in a host species. |
| PGx | Oh_2006 | not_relevant | 0 | 0 | The paper reports ecological toxicity of benzimidazoles in aquatic organisms and does not involve human pharmacogenomics or drug PK/PD parameters. |
| popPK | Petersen_1997 | irrelevant | 0 | 0 | This is an in vitro parasitology study measuring drug activity on worms, not a pharmacokinetic study of fenbendazole disposition. |
| PGx | Petersen_1997 | not_relevant | 0 | 0 | The paper describes an in vitro assay for benzimidazole activity against worms and does not investigate host genetic variants or pharmacogenomics. |
| PGx | Prichard_1981 | not_relevant | 0 | 0 | The study describes general pharmacokinetics of fenbendazole in cattle but does not investigate gene variants or genotypes. |
| popPK | Rabelo_2024 | irrelevant | 0 | 0 | In silico/in vitro antiviral drug-repurposing study of oxibendazole; fenbendazole is only a comparator analog with no PK parameters reported. |
| popPK | Viviani_2019 | irrelevant | 4 | 2 | Fenbendazole appears only as a metabolite/analyte of oxfendazole dosing, and no numeric PK parameter values are present in the evidence (non-compartmental results not shown). |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study is an in-vitro assay measuring the fungicidal activity (EC50) of fenbendazole against nematophagous fungi, not a pharmacokinetic study of fenbendazole disposition. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper reports in vitro susceptibility of fungi to drugs, not pharmacogenomic effects on PK/PD parameters in a human or animal model. |
| popPK | Zhao_2017 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring anthelmintic activity (EC50) against Ascaris suum, not a pharmacokinetic study of fenbendazole. |
| PGx | Zhao_2017 | not_relevant | 0 | 0 | The paper describes an in vitro assay for drug resistance in Ascaris suum and does not report human pharmacogenomic effects on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfenbendazole%5D&body=Drug%3A%20fenbendazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fenbendazole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 23:44 UTC</sub>
