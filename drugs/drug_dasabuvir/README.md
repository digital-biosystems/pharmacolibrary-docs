<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dasabuvir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dasabuvir_Mensing2016_dasabuvir&quot;,&quot;label&quot;:&quot;Mensing_2016_dasabuvir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dasabuvir/Dasabuvir_Mensing2016_dasabuvir.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# dasabuvir

- **generic name:** dasabuvir
- **ATC codes:** `J05AP09`
- **DrugBank:** [DB09183](https://go.drugbank.com/drugs/DB09183) · **PubChem:** [CID 56640146](https://pubchem.ncbi.nlm.nih.gov/compound/56640146)
- **molar mass:** 493.58 g/mol (C26H27N3O5S) — DrugBank
- **groups:** approved

## About

Dasabuvir is a direct-acting antiviral agent used to treat chronic hepatitis C. It is administered orally, typically as a tablet.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q19462214](https://www.wikidata.org/wiki/Q19462214), [Wikipedia](https://en.wikipedia.org/wiki/Dasabuvir?oldid=1346943437) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dasabuvir | parent | 493.58 | C26H27N3O5S | DrugBank | [56640146](https://pubchem.ncbi.nlm.nih.gov/compound/56640146) | Badri_2015, Mensing_2016 |
| dasabuvir M1 | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Mensing_2016_dasabuvir** — <span class="pk-badge pk-badge--blue">Simulated</span> adults with chronic hepatitis C virus genotype 1 infection, n = 760. [Run it in the simulator](drugs/drug_dasabuvir/Dasabuvir_Mensing2016_dasabuvir.md?tab=Simulation) · [record](drugs/drug_dasabuvir/Dasabuvir_Mensing2016_dasabuvir.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Mensing_2016_dasabuvir](drugs/drug_dasabuvir/Dasabuvir_Mensing2016_dasabuvir.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mensing S et al., Population Pharmacokinetics of Paritapr…, The AAPS journal (2016) | [10.1208/s12248-015-9846-1](https://doi.org/10.1208/s12248-015-9846-1) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub> | [↳ paritaprevir_r](drugs/drug_dasabuvir/Dasabuvir_Mensing2016_paritaprevir_r.md) | held back | 1-compartment, oral | 3 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Badri_2015_tacrolimus_2_mg_3d_period_2_day_15_mean_cv](drugs/drug_dasabuvir/Dasabuvir_Badri2015_tacrolimus_2_mg_3d_period_2_day_15_mean.md) | — | parent + metabolite (no model) | 8 | Badri P et al., Pharmacokinetics and dose recommendatio…, American journal of transpl… (2015) | [10.1111/ajt.13111](https://doi.org/10.1111/ajt.13111) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ tacrolimus_2_mg_period_1_day_1_mean_cv](drugs/drug_dasabuvir/Dasabuvir_Badri2015_tacrolimus_2_mg_period_1_day_1_mean_cv.md) | — | parent + metabolite (no model) | 8 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mensing_2017_reference](drugs/drug_dasabuvir/Dasabuvir_Mensing2017_reference.md) | — | 1-compartment (no model) | 0 | Mensing S et al., Population pharmacokinetics of paritapr…, British journal of clinical… (2017) | [10.1111/bcp.13138](https://doi.org/10.1111/bcp.13138) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:27 | 0:04 | 2/3/0 | 0/0/0 | 0/0/0 | 4,208/151 | einfracz / qwen3.8-27b | 16 | 3/13 | 15/1 | 0 |

## Coverage

- **PubMed hits:** 265 matched, 88 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bacinschi_2022 | irrelevant | 0 | 0 | The study evaluates glycemic control and virologic response in HCV patients, containing no pharmacokinetic or disposition parameters for dasabuvir. |
| PGx | Bacinschi_2022 | not_relevant | 0 | 0 | The study evaluates the impact of HCV treatment on glycemic control in the general population, not the effect of genetic variants on dasabuvir's pharmacokinetics or pharmacodynamics. |
| popPK | Backman_2016 | irrelevant | 0 | 0 | The paper is a review of CYP2C8 metabolism and interactions; it lists dasabuvir as a substrate but does not report quantitative pharmacokinetic disposition parameters. |
| PGx | Backman_2016 | not_relevant | 0 | 0 | The text is a general review of CYP2C8 and mentions dasabuvir only as a substrate, but does not report specific pharmacogenomic effects on dasabuvir's PK/PD parameters. |
| PGx | Badri_2015 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between dasabuvir and immunosuppressants, not pharmacogenomic effects on dasabuvir PK/PD. |
| popPK | Badri_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus and cyclosporine, while dasabuvir is only a co-administered drug in a hepatitis C regimen. |
| PGx | Badri_2016 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving dasabuvir but does not report any pharmacogenomic effects (gene variants) on PK parameters. |
| popPK | Burgess_2015 | irrelevant | 1 | 0 | This is a review article that summarizes literature and discusses drug interactions without reporting original quantitative population pharmacokinetic parameter values for dasabuvir in the provided text. |
| PGx | Burgess_2015 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions of HCV direct-acting antivirals (including dasabuvir) with immunosuppressants and antiretrovirals, not pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Cheng_2015 | irrelevant | 0 | 0 | The paper is a narrative review of clinical efficacy and safety, containing no original quantitative pharmacokinetic parameters for dasabuvir. |
| PGx | Cheng_2015 | not_relevant | 0 | 0 | The text is a clinical review of the efficacy and safety of the dasabuvir-containing regimen and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Chetty_2021 | irrelevant | 0 | 0 | Dasabuvir is only mentioned as a CYP2C8 substrate with increased exposure due to a drug-drug interaction with clopidogrel; no PK parameters for dasabuvir are reported. |
| PGx | Chetty_2021 | not_relevant | 0 | 0 | The paper focuses on clopidogrel and CYP2C19; dasabuvir is only mentioned as a substrate affected by clopidogrel co-administration, not as the subject of pharmacogenomic analysis. |
| popPK | Colombo_2015 | irrelevant | 0 | 0 | The paper is a review/commentary on the cost and reimbursement of hepatitis C therapies, containing no pharmacokinetic data for dasabuvir. |
| PGx | Colombo_2015 | not_relevant | 0 | 0 | The paper is a review discussing reimbursement policies and treatment hurdles for hepatitis C; it does not report pharmacogenomic studies on dasabuvir. |
| popPK | DeCarolis_2016 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of a drug-drug interaction on warfarin dose-response and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for dasabuvir. |
| PGx | DeCarolis_2016 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between hepatitis C regimens and warfarin, not a pharmacogenomic effect on dasabuvir PK/PD. |
| PGx | Doyle_2019 | not_relevant | 0 | 0 | No gene variant/genotype/pharmacogenomic effect on dasabuvir PK/PD is reported; only HCV genotype-based treatment allocation and metabolic outcomes. |
| popPK | Flisiak_2017 | irrelevant | 0 | 0 | This is a real-world efficacy and safety review of HCV treatments that mentions dasabuvir only as a drug component in a regimen, with no pharmacokinetic data or disposition parameters. |
| PGx | Flisiak_2017 | not_relevant | 0 | 0 | The paper reports real-world clinical efficacy (SVR) and safety, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Flisiak_2017_2 | irrelevant | 0 | 0 | This is a review article discussing the clinical efficacy and general characteristics of a drug regimen containing dasabuvir, but it does not report original quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for dasabuvir. |
| PGx | Flisiak_2017_2 | not_relevant | 0 | 0 | The paper is a review of the clinical efficacy and safety of a DAA regimen, containing no pharmacogenomic data regarding gene variants or PK/PD parameters. |
| popPK | Fofiu_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting virologic response rates and does not contain any pharmacokinetic parameter estimates for dasabuvir. |
| PGx | Fofiu_2019 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR12) in HCV patients but does not investigate gene variants or their effect on dasabuvir pharmacokinetics or pharmacodynamics. |
| PGx | Fuchs_2020 | not_relevant | 0 | 0 | Clinical trial of efficacy/safety only; no gene variant effects on dasabuvir PK/PD reported. |
| popPK | Gentile_2014 | irrelevant | 0 | 0 | The paper is a review of ombitasvir, not dasabuvir, and does not report specific quantitative PK parameters for dasabuvir. |
| PGx | Gentile_2014 | not_relevant | 0 | 0 | The paper reviews ombitasvir, not dasabuvir, and does not report pharmacogenomic effects on PK/PD. |
| popPK | Gogela_2015 | irrelevant | 0 | 0 | This is a review article discussing HCV therapies and does not report quantitative pharmacokinetic parameters for dasabuvir. |
| PGx | Gogela_2015 | not_relevant | 0 | 0 | The text is a general review of HCV therapies and does not report pharmacogenomic effects on PK/PD parameters for dasabuvir. |
| popPK | Gopalakrishnan_2018 | relevant | 10 | 2 | The paper describes a population PK model for dasabuvir in humans, but specific quantitative parameter values (CL, V, Q, Ka) are not present in the provided abstract text. |
| PGx | Gopalakrishnan_2018 | not_relevant | 0 | 0 | The paper reports population PK of DAA drugs in HCV patients but does not investigate pharmacogenomic variants or their effects on PK/PD parameters. |
| popPK | Huang_2016 | irrelevant | 0 | 0 | This is a clinical case report describing virological response to treatment, not a pharmacokinetic study, and it contains no disposition parameters for dasabuvir. |
| PGx | Huang_2016 | not_relevant | 0 | 0 | The paper reports a clinical case of an HCV patient who developed dengue fever during DAA treatment and achieved viral clearance, with no analysis of pharmacogenomic variants affecting PK/PD parameters. |
| PGx | Hunyady_2015 | not_relevant | 0 | 0 | Hungarian HCV treatment policy overview; no pharmacogenomic PK/PD data for dasabuvir. |
| popPK | Hunyady_2015_2 | irrelevant | 0 | 0 | The paper is a review of hepatitis C treatment policies and guidelines in Hungary, containing no pharmacokinetic data for dasabuvir or any other drug. |
| PGx | Hunyady_2015_2 | not_relevant | 0 | 0 | The provided text is a review of the general landscape of hepatitis C treatment in Hungary and makes no mention of dasabuvir or any pharmacogenomic data. |
| PGx | Hussaini_2016 | not_relevant | 2 | 3 | Review of 3D regimen PK and drug interactions with no gene variant/genotype effect on dasabuvir PK/PD reported. |
| popPK | Hézode_2016 | irrelevant | 0 | 0 | The paper is a clinical review focusing on HCV treatment regimens and does not report pharmacokinetic parameters for dasabuvir. |
| PGx | Hézode_2016 | not_relevant | 0 | 0 | The paper discusses HCV treatment regimens and the role of ribavirin, but does not report any pharmacogenomic effects on dasabuvir PK/PD parameters. |
| popPK | Isakov_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting SVR rates and safety profiles, containing no quantitative pharmacokinetic parameters for dasabuvir. |
| PGx | Isakov_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR) and safety in a clinical trial but does not investigate the impact of specific gene variants on the pharmacokinetics or pharmacodynamics of dasabuvir. |
| PGx | Itkonen_2019 | not_relevant | 0 | 0 | The study examines a drug-drug interaction (clopidogrel/ritonavir vs dasabuvir) rather than a pharmacogenomic effect caused by a genetic variant or genotype. |
| popPK | Kati_2015 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity and resistance profiles (IC50/EC50), not pharmacokinetic parameters. |
| PGx | Kati_2015 | not_relevant | 0 | 0 | The paper describes the in vitro activity and resistance profile of dasabuvir against HCV genotypes and variants, but does not report any human pharmacogenomic effects on PK or PD parameters. |
| popPK | Khatri_2016 | irrelevant | 2 | 0 | This is an exposure-efficacy analysis focusing on the relationship between drug exposure (AUC, Cmin) and viral response, not a study reporting specific pharmacokinetic disposition parameters like clearance (CL), volume (V), or absorption rate (ka). |
| PGx | Khatri_2016 | not_relevant | 0 | 0 | The paper analyzes exposure-efficacy relationships for HCV treatments but does not report pharmacogenomic effects (gene variants) on dasabuvir pharmacokinetics. |
| popPK | King_2017 | irrelevant | 2 | 1 | The study focuses on the PK of darunavir and interaction effects on dasabuvir, but does not report specific quantitative disposition parameters (CL, V, ka) or compartmental model values for dasabuvir. |
| PGx | King_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (PK study) but does not contain any pharmacogenomic data (gene variants, CYP2D6/CYP3A4 genotypes, etc.). |
| popPK | King_2017_2 | irrelevant | 0 | 0 | The paper is a review of drug-drug interaction studies and does not report quantitative population pharmacokinetic parameters (such as clearance, volume, or half-life) for dasabuvir. |
| PGx | King_2017_2 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions between the 3D regimen and other medications (antiretrovirals/substance abuse drugs), not the effect of a specific gene variant/genotype on PK or PD parameters. |
| popPK | Klibanov_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety review focusing on SVR rates, not a pharmacokinetic study reporting quantitative disposition parameters like CL, V, or ka. |
| PGx | Klibanov_2015 | not_relevant | 0 | 0 | The paper is a clinical review of efficacy and safety for HCV treatment and does not report any gene variants affecting the pharmacokinetics or pharmacodynamics of dasabuvir. |
| popPK | Lalezari_2015 | irrelevant | 0 | 0 | The study reports qualitative PK findings (no clinically meaningful impact) for a drug-drug interaction but does not provide quantitative pharmacokinetic parameter values (e.g., CL, V, Cmax) for dasabuvir. |
| PGx | Lalezari_2015 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with methadone/buprenorphine, not pharmacogenomic effects of genetic variants on dasabuvir PK/PD. |
| popPK | Lam_2016 | irrelevant | 0 | 0 | This is a general review of the drug Viekira's clinical efficacy and safety, containing no specific pharmacokinetic parameter values for dasabuvir. |
| PGx | Lam_2016 | not_relevant | 0 | 0 | The text is a general review of Viekira's efficacy and safety in hepatitis C and does not mention any gene variants or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Lin_2017 | irrelevant | 1 | 0 | This is an exposure-safety pharmacodynamic study, not a pharmacokinetic parameter estimation study; it reports no quantitative PK disposition parameters (CL, V, etc.) for dasabuvir. |
| PGx | Lin_2017 | not_relevant | 0 | 0 | The paper analyzes exposure-safety relationships for dasabuvir but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | Cost-effectiveness modeling study with no pharmacogenomic effects on dasabuvir PK/PD parameters. |
| PGx | Loo_2019 | not_relevant | 0 | 0 | Clinical efficacy/safety study of OBV/PTV/r + DSV; no pharmacogenomic effects on dasabuvir PK/PD parameters reported. |
| popPK | Mantry_2016 | irrelevant | 0 | 0 | The paper is a narrative review focusing on clinical efficacy, safety, and mechanism of action for dasabuvir, and does not report any quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) or PK models. |
| PGx | Mantry_2016 | not_relevant | 0 | 0 | The paper is a general clinical review of dasabuvir's efficacy and safety and does not report any specific pharmacogenomic variants affecting PK or PD parameters. |
| PGx | Mensing_2016 | not_relevant | 2 | 1 | The paper evaluates standard clinical covariates (age, weight, race) and drug-drug interactions, but does not report any effects of specific gene variants, genotypes, or pharmacogenomic phenotypes on dasabuvir's pharmacokinetics. |
| popPK | Mensing_2017 | relevant | 10 | 0 | The paper is a population PK study for dasabuvir, but the provided evidence consists only of the abstract and does not contain the specific numeric parameter estimates (CL, V, Q) which are likely in the full text or tables not included here. |
| PGx | Mensing_2017 | not_relevant | 0 | 0 | The study analyzes population pharmacokinetics based on clinical/demographic covariates (age, weight, genotype 1 infection, etc.) and does not investigate pharmacogenomic effects (gene variants/genotypes) on dasabuvir. |
| popPK | Minaei_2015 | irrelevant | 0 | 0 | The paper is a review focusing on ABT-450, ABT-267, and ABT-333, and dasabuvir (ABT-267) is not the subject of a quantitative PK parameter report in the provided text. |
| PGx | Minaei_2015 | not_relevant | 0 | 0 | The text describes the combination therapy for HCV but does not mention dasabuvir or any pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Ogbuagu_2016 | irrelevant | 0 | 0 | This is a literature review focusing on drug interactions and does not provide original quantitative pharmacokinetic parameters for dasabuvir. |
| PGx | Ogbuagu_2016 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions between HCV therapies and opioids, not pharmacogenomic effects on dasabuvir PK/PD parameters. |
| PGx | Persico_2018 | not_relevant | 0 | 0 | The paper reports HCV genotype effects on SVR (virologic outcome), not a human gene variant effect on dasabuvir PK/PD parameters. |
| popPK | Polepally_2016 | relevant | 8 | 2 | The study involves a population PK model for dasabuvir in humans, but the specific numeric parameter values for dasabuvir (such as mean CL/F or V/F) are not explicitly listed in the provided text, which focuses on interaction ratios. |
| PGx | Polepally_2016 | not_relevant | 0 | 0 | The paper analyzes the effect of co-medications (drug-drug interactions) on pharmacokinetics, not the effect of gene variants or genotypes (pharmacogenomics). |
| popPK | Polepally_2016_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paritaprevir, while dasabuvir is only a co-administered drug used to assess drug-drug interactions. |
| PGx | Polepally_2016_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic model for paritaprevir and explicitly states that no subject-specific covariates influenced its pharmacokinetics; it does not report any pharmacogenomic effects on dasabuvir. |
| popPK | Polepally_2017 | relevant | 10 | 2 | The paper reports a population PK model for dasabuvir, but the evidence contains only qualitative covariate findings and relative differences, not specific quantitative parameter values (CL, V, Q, ka). |
| PGx | Polepally_2017 | not_relevant | 0 | 0 | The paper investigates the effects of renal function and demographic covariates on dasabuvir pharmacokinetics, not the impact of genetic variants, genotypes, or pharmacogenomic phenotypes. |
| popPK | Polepally_2017_2 | irrelevant | 2 | 0 | The paper focuses on exposure-response and bioequivalence (Cmax/Cmin ratios) for regulatory approval, lacking quantitative population PK parameters (CL, V, ka) or compartmental models for dasabuvir. |
| PGx | Polepally_2017_2 | not_relevant | 0 | 0 | The paper focuses on formulation bioequivalence and exposure-response for a drug regimen in a general HCV population, with no mention of genetic variants or pharmacogenomics. |
| popPK | Poordad_2014 | irrelevant | 0 | 0 | This is a clinical efficacy trial reporting virologic response rates, not a pharmacokinetic study with quantitative disposition parameters for dasabuvir. |
| PGx | Poordad_2014 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of a treatment regimen but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Ramirez_2016 | irrelevant | 0 | 0 | The paper describes an in vitro cell culture system for HCV resistance and does not report any pharmacokinetic parameters for dasabuvir. |
| PGx | Ramirez_2016 | not_relevant | 0 | 0 | The paper studies viral resistance mutations in HCV, not human genetic variants affecting dasabuvir pharmacokinetics or pharmacodynamics. |
| popPK | Ridruejo_2020 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study of HCV treatment in CKD patients, containing no pharmacokinetic parameter values for dasabuvir. |
| PGx | Ridruejo_2020 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of DAAs in CKD patients, not pharmacogenomic effects on dasabuvir PK/PD. |
| popPK | Rivero-Juarez_2018 | irrelevant | 0 | 0 | The study reports on changes in serum cholesterol levels (a metabolic effect) rather than pharmacokinetic parameters like clearance or volume for dasabuvir. |
| PGx | Rivero-Juarez_2018 | not_relevant | 0 | 0 | The paper analyzes cholesterol changes in response to HCV therapy but does not investigate the impact of any gene variant or genotype on these pharmacodynamic parameters. |
| popPK | San_2019 | irrelevant | 0 | 0 | The study investigates the in vitro metabolism of asunaprevir, daclatasvir, and beclabuvir, not dasabuvir. |
| PGx | San_2019 | not_relevant | 0 | 0 | The study investigates asunaprevir, daclatasvir, and beclabuvir, but does not study dasabuvir. |
| popPK | Schneider_2015 | irrelevant | 0 | 0 | The paper is a clinical review of hepatitis C treatment regimens that mentions dasabuvir as part of a combination therapy but contains no pharmacokinetic parameters or quantitative disposition data. |
| PGx | Schneider_2015 | not_relevant | 0 | 0 | The text is a general overview of Hepatitis C treatment regimens and does not report any pharmacogenomic effects on the PK or PD of dasabuvir. |
| popPK | Shen_2016 | irrelevant | 0 | 0 | The paper focuses on the mass balance and metabolism of paritaprevir, with dasabuvir mentioned only as a co-administered agent, and no pharmacokinetic parameters for dasabuvir are reported. |
| PGx | Shen_2016 | not_relevant | 0 | 0 | The paper focuses on the mass balance and metabolism of paritaprevir in healthy volunteers and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Shen_2016_2 | irrelevant | 0 | 0 | The study focuses on the metabolism and disposition of ombitasvir, with dasabuvir mentioned only as a co-administered agent in the context of combination therapy, and no PK parameters for dasabuvir are reported. |
| PGx | Shen_2016_2 | not_relevant | 0 | 0 | The study describes the metabolism and disposition of ombitasvir, not dasabuvir, and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Shen_2016_3 | irrelevant | 2 | 0 | The paper describes mass balance and metabolic pathways but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for dasabuvir. |
| PGx | Shen_2016_3 | not_relevant | 0 | 0 | The paper describes general metabolism and mass balance in healthy volunteers without any pharmacogenomic analysis or genotype-stratified PK/PD data. |
| PGx | Smith_2015 | not_relevant | 0 | 0 | Review of PrOD efficacy/safety; IL28B genotype mentioned only descriptively, no gene variant effect on dasabuvir PK/PD parameters reported. |
| popPK | Stirnimann_2014 | irrelevant | 0 | 0 | The paper is a review of ombitasvir, and dasabuvir is only mentioned as a co-administered drug without any quantitative PK parameters reported. |
| PGx | Stirnimann_2014 | not_relevant | 0 | 0 | The text is a review of ombitasvir's development and clinical efficacy, containing no information on pharmacogenomic effects on the PK/PD of dasabuvir. |
| popPK | Talal_2018 | irrelevant | 0 | 0 | The study focuses on HCV RNA decline in the liver vs plasma, not on the pharmacokinetic parameters (CL, V, ka, etc.) of dasabuvir itself, and no numeric PK values for dasabuvir are provided. |
| PGx | Talal_2018 | not_relevant | 0 | 0 | The study evaluates the impact of ribavirin dosage on HCV RNA decline and drug distribution, but it does not investigate the influence of gene variants or genotypes on pharmacokinetics or pharmacodynamics. |
| popPK | Talavera_2017 | irrelevant | 0 | 0 | The paper is a narrative review discussing general drug-drug interaction principles for multiple DAAs and does not report quantitative population-pharmacokinetic parameter values (e.g., CL, V, ka) for dasabuvir. |
| PGx | Talavera_2017 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions and metabolism pathways, not on pharmacogenomic effects (gene variants) on pharmacokinetics. |
| popPK | Toussaint-Miller_2015 | irrelevant | 0 | 0 | This is a clinical review of HCV treatment outcomes and does not report any quantitative pharmacokinetic parameters for dasabuvir. |
| PGx | Toussaint-Miller_2015 | not_relevant | 0 | 0 | The paper is a clinical review of treatment considerations for unique populations (e.g., pediatric, renal impairment) and does not report specific pharmacogenomic effects on dasabuvir PK/PD parameters. |
| popPK | Uppal_2022 | irrelevant | 0 | 0 | The paper is an in-vitro virology study assessing dasabuvir's antiviral activity against SARS-CoV-2 in cell cultures, reporting EC50 values but no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Uppal_2022 | not_relevant | 0 | 0 | The paper describes dasabuvir's antiviral activity against SARS-CoV-2 using cell-based assays and reports EC50 values, but it does not investigate the influence of any gene variant, genotype, or phenotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Walker_2015 | not_relevant | 0 | 0 | Real-world effectiveness study comparing SVR rates of DAA regimens; no gene variant/genotype (host pharmacogenomics) effects on dasabuvir PK/PD reported. |
| popPK | Wisløff_2018 | irrelevant | 0 | 0 | This is a health-economic cost-effectiveness evaluation of hepatitis C treatments; dasabuvir appears only as a treatment option with prices/ICERs, no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Wyles_2017 | irrelevant | 0 | 0 | The study focuses on clinical efficacy (SVR12) and safety, and while it mentions DRV exposure changes, it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for dasabuvir. |
| PGx | Wyles_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (dasabuvir/paritaprevir affecting darunavir levels) in an unselected HIV/HCV cohort, with no analysis of pharmacogenomic variants or their impact on PK/PD parameters. |
| PGx | Younossi_2016 | not_relevant | 0 | 0 | Economic Markov model of HCV treatment costs; no pharmacogenomic PK/PD data for dasabuvir. |
| popPK | Zeuzem_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting virologic response rates and safety outcomes, containing no quantitative pharmacokinetic parameters (e.g., clearance, volume) for dasabuvir. |
| PGx | Zeuzem_2014 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of a dasabuvir-containing regimen, but does not analyze any gene variants, genotypes, or phenotypes affecting dasabuvir pharmacokinetics or pharmacodynamics. |
| popPK | Zha_2019 | irrelevant | 2 | 0 | The provided evidence discusses pharmacokinetic parameters (Ctrough, AUC) for Ritonavir and Ribavirin, not the subject drug Dasabuvir, and contains no numeric values for Dasabuvir. |
| PGx | Zha_2019 | not_relevant | 0 | 0 | The provided text contains only ethics committee and hospital lists from supplementary material, with no data on pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study focuses on in-vitro inhibition of acetaminophen metabolism by dasabuvir, not on the pharmacokinetic parameters (CL, V, t1/2) of dasabuvir itself. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (dasabuvir inhibiting acetaminophen metabolism) in vitro, not the effect of a genetic variant on dasabuvir's PK or PD. |
| popPK | Özdoğan_2020 | irrelevant | 0 | 0 | The study investigates lipid metabolism and insulin resistance, reporting no pharmacokinetic parameters for dasabuvir. |
| PGx | Özdoğan_2020 | not_relevant | 0 | 0 | The study investigates the impact of DAA treatment on lipid metabolism and insulin resistance in HCV patients, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of dasabuvir. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdasabuvir%5D&body=Drug%3A%20dasabuvir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dasabuvir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:24 UTC</sub>
