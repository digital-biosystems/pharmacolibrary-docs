# edoxaban

- **generic name:** edoxaban
- **ATC codes:** `B01AF03`
- **DrugBank:** [DB09075](https://go.drugbank.com/drugs/DB09075)
- **groups:** approved, investigational

## About

**Description.** Edoxaban is a member of the Novel Oral Anti-Coagulants (NOACs) class of drugs, and is a rapidly acting, oral, selective factor Xa inhibitor. By inhibiting factor Xa, a key protein in the coagulation cascade, edoxaban prevents the stepwise amplification of protein factors needed to form blood clots. It is indicated to reduce the risk of stroke and systemic embolism (SE) in patients with nonvalvular atrial fibrillation (NVAF) and for the treatment of deep vein thrombosis (DVT) and pulmonary embolism (PE) following 5-10 days of initial therapy with a parenteral anticoagulant. Traditionally, warfarin, a vitamin K antagonist, was used for stroke prevention in these individuals but effective use of this drug is limited by it's delayed onset, narrow therapeutic window, need for regular monitoring and INR testing, and numerous drug-drug and drug-food interactions. This has prompted enthusiasm for newer agents such as dabigatran, apixaban, and rivaroxaban for effective clot prevention. In addition to once daily dosing, the benefits over warfarin also include significant reductions in hemorrhagic stroke and GI bleeding, and improved compliance, which is beneficial as many patients will be on lifelong therapy.

**Indication.** Edoxaban is indicated for reducing the risk of stroke and systemic embolism (SE) in patients with nonvalvular atrial fibrillation (NVAF). However, it should not be used in patients with creatinine clearance (CrCL) > 95 mL/min because of increased risk of ischemic stroke compared to warfarin at the highest dose studied (60 mg). It is also indicated for the treatment of deep vein thrombosis (DVT) and pulmonary embolism (PE) following 5-10 days of initial therapy with a parenteral anticoagulant.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 20:35 | 32:05 | 2/3/0 | 1/1/1 | 0/0/0 | 373,646/48,974 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 1/18 | 19/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Edwina_2025](drugs/drug_edoxaban/Edoxaban_Edwina2025_reference.md) | Edwina AE et al., Population pharmacokinetics of edoxaban…, Journal of thrombosis and h… (2025) | [10.1016/j.jtha.2025.06.023](https://doi.org/10.1016/j.jtha.2025.06.023) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Terrier_2022](drugs/drug_edoxaban/Edoxaban_Terrier2022_reference.md) | Terrier J et al., Population Pharmacokinetic Models for D…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2649](https://doi.org/10.1002/cpt.2649) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ueshima_2025](drugs/drug_edoxaban/Edoxaban_Ueshima2025_reference.md) | Ueshima S et al., Population pharmacokinetics and pharmac…, Journal of pharmaceutical h… (2025) | [10.1186/s40780-025-00453-2](https://doi.org/10.1186/s40780-025-00453-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yin_2014](drugs/drug_edoxaban/Edoxaban_Yin2014_reference.md) | Yin (2014) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zou_2025](drugs/drug_edoxaban/Edoxaban_Zou2025_reference.md) | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nyberg_2016](drugs/drug_edoxaban/pd_Nyberg_2016_CRB.md) | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nyberg_2016](drugs/drug_edoxaban/pd_Nyberg_2016_MACE.md) | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nyberg_2016](drugs/drug_edoxaban/pd_Nyberg_2016_all_death.md) | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nyberg_2016](drugs/drug_edoxaban/pd_Nyberg_2016_composite_DVT_PE.md) | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nyberg_2016](drugs/drug_edoxaban/pd_Nyberg_2016_composite_DVT_PE_Mortality.md) | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nyberg_2016](drugs/drug_edoxaban/pd_Nyberg_2016_recurrent_VTE.md) | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Xu_2023](drugs/drug_edoxaban/pd_Xu_2023_PT.md) | Xu R et al., Physiologically-based pharmacokinetic p…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12977](https://doi.org/10.1002/psp4.12977) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Xu_2023](drugs/drug_edoxaban/pd_Xu_2023_aPTT.md) | Xu R et al., Physiologically-based pharmacokinetic p…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12977](https://doi.org/10.1002/psp4.12977) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zou_2025](drugs/drug_edoxaban/pd_Zou_2025_PT.md) | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zou_2025](drugs/drug_edoxaban/pd_Zou_2025_aPTT.md) | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zou_2025](drugs/drug_edoxaban/pd_Zou_2025_anti_FXa.md) | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) |

## Coverage

- **PubMed hits:** 127 matched, 60 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Edwina_2025.pdf` | Edwina AE et al., Population pharmacokinetics of edoxaban…, Journal of thrombosis and h… (2025) | popPK | 10 | [10.1016/j.jtha.2025.06.023](https://doi.org/10.1016/j.jtha.2025.06.023) | [40617502](https://pubmed.ncbi.nlm.nih.gov/40617502) | The abstract explicitly reports quantitative population PK parameters (ka, CL, Vc, Vp) for edoxaban in geriatric patients. |
| `Shimizu_2017.pdf` | Shimizu T et al., Population Pharmacokinetics of Edoxaban…, Clinical pharmacology in dr… (2017) | popPK | 10 | [10.1002/cpdd.329](https://doi.org/10.1002/cpdd.329) | [28032482](https://pubmed.ncbi.nlm.nih.gov/28032482) | The paper is a population pharmacokinetic study of edoxaban, but the specific numeric parameter values are not present in the provided evidence text. |
| `Song_2014.pdf` | Song S et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.306](https://doi.org/10.1002/jcph.306) | [24706516](https://pubmed.ncbi.nlm.nih.gov/24706516) | The paper describes a population PK/PD model for edoxaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Yin_2014.pdf` | Yin OQ et al., Population pharmacokinetics and dose-ex…, Clinical drug investigation (2014) | popPK | 10 | [10.1007/s40261-014-0229-7](https://doi.org/10.1007/s40261-014-0229-7) | [25186833](https://pubmed.ncbi.nlm.nih.gov/25186833) | The paper is a population PK study for edoxaban reporting specific quantitative parameters like bioavailability (67.2%), clearance covariate effects (13.1% lower in females), and lag time values (0.233-0.375 h). |
| `Yin_2014_2.pdf` | Yin OQ et al., Edoxaban population pharmacokinetics an…, European journal of clinica… (2014) | popPK | 10 | [10.1007/s00228-014-1736-4](https://doi.org/10.1007/s00228-014-1736-4) | [25168620](https://pubmed.ncbi.nlm.nih.gov/25168620) | The paper is a population PK study for edoxaban, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided abstract text, only qualitative descriptions and bioavailability percentages. |
| `Wang_2025.pdf` | Wang D et al., Relevance of selected pharmacogenetic p…, British journal of clinical… (2025) | pgx | 8 | [10.1002/bcp.70078](https://doi.org/10.1002/bcp.70078) | [40400080](https://www.ncbi.nlm.nih.gov/pubmed/40400080) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Abrignani_2021.pdf` | Abrignani MG et al., Gastroprotection in patients on antipla…, European journal of interna… (2021) | pgx | 7 | [10.1016/j.ejim.2020.11.014](https://doi.org/10.1016/j.ejim.2020.11.014) | [33279389](https://www.ncbi.nlm.nih.gov/pubmed/33279389) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Grymonprez_2023.pdf` | Grymonprez M et al., Impact of P-glycoprotein and CYP3A4-int…, European heart journal. Car… (2023) | pgx | 7 | [10.1093/ehjcvp/pvad070](https://doi.org/10.1093/ehjcvp/pvad070) | [37791408](https://www.ncbi.nlm.nih.gov/pubmed/37791408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hanigan_2022.pdf` | Hanigan S et al., Evaluating pharmacokinetic drug-drug in…, Expert opinion on drug meta… (2022) | pgx | 7 | [10.1080/17425255.2022.2074397](https://doi.org/10.1080/17425255.2022.2074397) | [35543017](https://www.ncbi.nlm.nih.gov/pubmed/35543017) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jin_2024.pdf` | Jin S et al., In vitro assessment of inhibitory effec…, European journal of pharmac… (2024) | pgx | 7 | [10.1016/j.ejps.2024.106884](https://doi.org/10.1016/j.ejps.2024.106884) | [39218046](https://www.ncbi.nlm.nih.gov/pubmed/39218046) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Kirchhof_2013.pdf` | Kirchhof P, The European Heart Rhythm Association P…, Arrhythmia & electrophysiol… (2013) | pgx | 7 | [10.15420/aer.2013.2.2.115](https://doi.org/10.15420/aer.2013.2.2.115) | [26835051](https://www.ncbi.nlm.nih.gov/pubmed/26835051) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Stöllberger_2021.pdf` | Stöllberger C et al., Update on drug interactions with non-vi…, Expert review of clinical p… (2021) | pgx | 7 | [10.1080/17512433.2021.1908124](https://doi.org/10.1080/17512433.2021.1908124) | [33757376](https://www.ncbi.nlm.nih.gov/pubmed/33757376) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Stöllberger_2023.pdf` | Stöllberger C et al., Drug-drug interactions with direct oral…, Expert review of clinical p… (2023) | pgx | 7 | [10.1080/17512433.2023.2187376](https://doi.org/10.1080/17512433.2023.2187376) | [36861431](https://www.ncbi.nlm.nih.gov/pubmed/36861431) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Verstraete_2026.pdf` | Verstraete A et al., Direct oral anticoagulant use and drug-…, Journal of thrombosis and h… (2026) | pgx | 7 | [10.1016/j.jtha.2026.06.038](https://doi.org/10.1016/j.jtha.2026.06.038) | [42413824](https://www.ncbi.nlm.nih.gov/pubmed/42413824) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mega_2015.pdf` | Mega JL et al., Genetics and the clinical response to w…, Lancet (London, England) (2015) | pgx | 5 | [10.1016/S0140-6736(14)61994-2](https://doi.org/10.1016/S0140-6736(14)61994-2) | [25769357](https://www.ncbi.nlm.nih.gov/pubmed/25769357) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-09-05T20:14:49.230469+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abrignani_2021 | not_relevant | 0 | 0 | The paper is a position statement on gastroprotection and drug interactions (PPIs) but does not report pharmacogenomic effects on edoxaban PK/PD. |
| popPK | Barco_2025 | irrelevant | 0 | 0 | The study analyzes hematologic effects (WBC counts) of warfarin vs. edoxaban and does not report any pharmacokinetic parameters for edoxaban. |
| PGx | Burn_2018 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for warfarin (CYP2C9, VKORC1) but does not report a pharmacogenomic effect on the PK or PD of edoxaban. |
| popPK | Diesveld_2024 | irrelevant | 2 | 0 | This is a systematic review and recommendation paper that summarizes findings from other studies but does not report original quantitative pharmacokinetic parameter values for edoxaban. |
| PD | Diesveld_2024 | not_relevant | 2 | 1 | The paper is a systematic review providing qualitative safety recommendations and summary tables, but it does not report or derive specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for edoxaban. |
| PGx | Fawzy_2019 | not_relevant | 1 | 0 | The paper is a general review of pharmacokinetics and pharmacodynamics of anticoagulants and does not report specific pharmacogenomic effects on edoxaban parameters. |
| PGx | Grymonprez_2023 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (P-gp/CYP3A4 inhibitors/inducers) and clinical outcomes, not the effect of a specific gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Han_2023 | not_relevant | 0 | 0 | The study reports associations between SLCO1B1/ABCB1 genotypes and bleeding risk (clinical outcome), but does not report changes in pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., anti-Xa activity) parameters of edoxaban. |
| PGx | Hanigan_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and renal dysfunction, not pharmacogenomic effects of gene variants on edoxaban PK/PD. |
| PGx | Hirai_2022 | not_relevant | 2 | 5 | The study reports a drug-drug interaction (cyclosporine) and lists genotypes for one bleeding patient, but does not report a pharmacogenomic effect on PK/PD parameters. |
| PGx | Hirai_2026 | not_relevant | 0 | 0 | The paper is a narrative review on drug-drug interactions between anticoagulants and calcineurin inhibitors, mentioning pharmacogenomic profiles only as a general variability factor without reporting specific gene-variant effects on edoxaban PK/PD. |
| PGx | Jin_2024 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (DDI) between kinase inhibitors and anticoagulants, not pharmacogenomic effects of gene variants on edoxaban. |
| PGx | Kirchhof_2013 | not_relevant | 0 | 0 | The paper is a clinical practice guide summarizing general pharmacokinetic considerations (drug interactions, renal function) but does not report specific pharmacogenomic effects of gene variants on edoxaban PK/PD parameters. |
| PGx | Lippi_2014 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antibiotics and DOACs, not pharmacogenomic effects of gene variants on edoxaban PK/PD. |
| popPK | Lu_2020 | irrelevant | 1 | 0 | The study focuses on the reversal of anticoagulation by andexanet alfa, not on the population pharmacokinetic parameters (CL, V, etc.) of edoxaban itself. |
| PGx | Mar_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects on edoxaban PK/PD parameters. |
| PGx | McCarley_2023 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic considerations for edoxaban in HHT patients but does not report specific gene variants or genotypes that alter edoxaban's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Mega_2015 | not_relevant | 2 | 5 | The paper reports pharmacogenomic effects on warfarin response (INR/bleeding) and differential bleeding risk with edoxaban, but does not report changes in edoxaban's own PK or PD parameters (e.g., anti-Xa activity) based on genotype. |
| PGx | Mendell_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampin) and does not report pharmacogenomic effects of gene variants on edoxaban PK/PD. |
| popPK | Nyberg_2016 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses PK parameters from a previously published population PK model (reference 11) rather than reporting new quantitative disposition parameters (CL, V, etc.) for edoxaban in this study. |
| popPK | Oh_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions and does not report original quantitative disposition parameters for edoxaban. |
| PD | Oh_2026 | not_relevant | 1 | 0 | The text is a review article discussing mechanistic interactions and qualitative risks without reporting specific numeric PD parameters or concentration-effect curves for edoxaban. |
| PGx | Parasrampuria_2016 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole, erythromycin, cyclosporine) affecting edoxaban PK, but does not report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Ragia_2019 | not_relevant | 0 | 0 | The paper is a general review of anticoagulation pharmacogenomics and does not report specific quantitative PK/PD effects of gene variants on edoxaban. |
| PGx | Raymond_2021 | not_relevant | 2 | 0 | The paper states that the only available study on edoxaban found no impact of the tested variants on its pharmacokinetics. |
| PGx | Rohr_2024 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ritonavir) and does not report any pharmacogenomic effects (gene variants) on edoxaban PK/PD. |
| PGx | Rosato_2024 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions between DOACs and DAAs, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Shimizu_2017 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of edoxaban, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Song_2014 | relevant | 10 | 0 | The paper describes a population PK/PD model for edoxaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | Srinivasan_2022 | not_relevant | 2 | 1 | The text is a general review introduction that mentions pharmacogenetics as a topic but does not report specific gene-variant effects on edoxaban PK/PD parameters. |
| PGx | Stöllberger_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) in elderly patients and does not report pharmacogenomic effects of gene variants on edoxaban PK/PD. |
| PGx | Stöllberger_2023 | not_relevant | 0 | 0 | The paper is a narrative review of drug-drug interactions (DDI) and does not report pharmacogenomic effects of gene variants on edoxaban PK/PD parameters. |
| PGx | Ueshima_2025 | not_relevant | 0 | 0 | The study explicitly concludes that genetic polymorphisms of CYP3A5 and ABCB1 did not significantly affect edoxaban pharmacokinetics. |
| PGx | Vandell_2017 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on warfarin (dose, INR, bleeding) but explicitly states that no such genetic effects were observed for edoxaban. |
| PGx | Verstraete_2026 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (calcineurin inhibitors) and clinical factors (weight, renal function) affecting DOAC levels, but does not report pharmacogenomic effects of gene variants on edoxaban PK/PD. |
| PGx | Wang_2025 | not_relevant | 2 | 5 | The study reports associations between genetic variants and clinical outcomes (bleeding/thromboembolism) rather than direct pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, INR). |
| popPK | Xu_2023 | relevant | 9 | 4 | The paper develops a PBPK model for edoxaban and reports specific quantitative parameters like renal clearance (10.718 L/h) and bioavailability (61.8%), but many other key disposition parameters (e.g., specific CLint values, Vd) are referenced in Table 1 or supplementary materials not fully provided in the evidence. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical outcomes (bleeding risk) with drug-drug interactions, not a pharmacogenomic study reporting gene-specific effects on PK/PD parameters. |
| popPK | Yin_2014_2 | relevant | 10 | 2 | The paper is a population PK study for edoxaban, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided abstract text, only qualitative descriptions and bioavailability percentages. |
| popPK | Yin_2022 | relevant | 8 | 2 | The study reports population PK model estimates and exposure metrics (Cmin, Cavg) for edoxaban, but specific compartmental parameters (CL, V, Q, ka) are not listed in the provided text, only referenced in tables or supplementary material. |
| popPK | Yoshioka_2018 | irrelevant | 2 | 0 | The paper is a model-based meta-analysis focusing on dose optimization and bleeding risk, and it does not report original quantitative population pharmacokinetic parameter values (CL, V, etc.) for edoxaban. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The provided text is a correction notice regarding author affiliations and contains no pharmacokinetic data or numeric parameter values for edoxaban. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a correction notice regarding author affiliations and contains no pharmacodynamic data, models, or parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_edoxaban`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
