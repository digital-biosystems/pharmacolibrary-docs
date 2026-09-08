# cadmium

- **generic name:** not captured
- **ATC codes:** not captured
- **DrugBank:** not captured
- **groups:** experimental

## About

**Description.** An element with atomic symbol Cd, atomic number 48, and atomic weight 112.41. It is a metal and ingestion will lead to CADMIUM POISONING.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 14:05 | 55:56 | 6/0/0 | 0/1/1 | 0/0/0 | 1,174,359/97,266 | ollama / qwen3.8:27b-mtp-q8_0 | 66 | 7/43 | 62/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ekobena_2025](drugs/toxin_cadmium/Cadmium_Ekobena2025_reference.md) | Ekobena P et al., Population pharmacokinetics of bictegra…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf297](https://doi.org/10.1093/jac/dkaf297) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jia_2026](drugs/toxin_cadmium/Cadmium_Jia2026_reference.md) | Jia M et al., Population pharmacokinetics of rivaroxa…, European journal of clinica… (2026) | [10.1007/s00228-026-04034-6](https://doi.org/10.1007/s00228-026-04034-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Marques_2026](drugs/toxin_cadmium/Cadmium_Marques2026_reference.md) | Marques L et al., Model-Based Virtual Clinical Trial Reve…, Pharmaceutics (2026) | [10.3390/pharmaceutics18060636](https://doi.org/10.3390/pharmaceutics18060636) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Muthukrishnan_2025](drugs/toxin_cadmium/Cadmium_Muthukrishnan2025_reference.md) | Muthukrishnan VY et al., Population Pharmacokinetic and Pharmaco…, Clinical and translational… (2025) | [10.1111/cts.70381](https://doi.org/10.1111/cts.70381) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sunnåker_2026](drugs/toxin_cadmium/Cadmium_Sunnker2026_reference.md) | Sunnåker M et al., Population Pharmacokinetics of the Nove…, Pharmacology research & per… (2026) | [10.1002/prp2.70259](https://doi.org/10.1002/prp2.70259) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhong_2024](drugs/toxin_cadmium/Cadmium_Zhong2024_reference.md) | Zhong G et al., Toxicokinetics and Mussel Watch: Addres…, Environmental science & tec… (2024) | [10.1021/acs.est.4c02026](https://doi.org/10.1021/acs.est.4c02026) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lv_2017](drugs/toxin_cadmium/pd_Lv_2017_unknown.md) | Lv Y et al., Cadmium Exposure and Osteoporosis: A Po…, Journal of bone and mineral… (2017) | [10.1002/jbmr.3151](https://doi.org/10.1002/jbmr.3151) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Obeng-Gyasi_2024](drugs/toxin_cadmium/pd_Obeng_Gyasi_2024_CRP.md) | Obeng-Gyasi E et al., Association of combined lead, cadmium,…, Frontiers in public health (2024) | [10.3389/fpubh.2024.1385500](https://doi.org/10.3389/fpubh.2024.1385500) |

## Coverage

- **PubMed hits:** 9173 matched, 161 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 6  ·  extracted 6  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Béchaux_2014.pdf` | Béchaux C et al., PBPK and population modelling to interp…, Toxicology and applied phar… (2014) | popPK | 9 | [10.1016/j.taap.2014.06.026](https://doi.org/10.1016/j.taap.2014.06.026) | [24998972](https://pubmed.ncbi.nlm.nih.gov/24998972) | The paper describes a PBPK/population PK model for cadmium, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| `Gao_2019.pdf` | Gao Y et al., Toxicokinetic-toxicodynamic modeling of…, Environmental pollution (Ba… (2019) | popPK | 9 | [10.1016/j.envpol.2019.05.003](https://doi.org/10.1016/j.envpol.2019.05.003) | [31082606](https://pubmed.ncbi.nlm.nih.gov/31082606) | The paper describes a toxicokinetic modeling study for cadmium in zebrafish, but the specific numeric parameter values are not present in the provided abstract text. |
| `Chen_2020.pdf` | Chen SC et al., Risks of consuming cadmium-contaminated…, Ecotoxicology and environme… (2020) | popPK | 8 | [10.1016/j.ecoenv.2020.110763](https://doi.org/10.1016/j.ecoenv.2020.110763) | [32505759](https://pubmed.ncbi.nlm.nih.gov/32505759) | The paper uses a PBPK model for cadmium, but the specific quantitative PK parameters (CL, V, Q) are not listed in the provided evidence, only the resulting BMD concentrations. |
| `Ju_2012.pdf` | Ju YR et al., Assessing human exposure risk to cadmiu…, Journal of hazardous materi… (2012) | popPK | 8 | [10.1016/j.jhazmat.2012.05.060](https://doi.org/10.1016/j.jhazmat.2012.05.060) | [22677056](https://pubmed.ncbi.nlm.nih.gov/22677056) | The paper describes a PBPK model for cadmium, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Pavlaki_2018.pdf` | Pavlaki MD et al., Toxicokinetics of cadmium in Palaemon v…, Environmental toxicology an… (2018) | popPK | 8 | [10.1002/etc.4104](https://doi.org/10.1002/etc.4104) | [29388712](https://pubmed.ncbi.nlm.nih.gov/29388712) | The study reports quantitative toxicokinetic parameters (uptake/depuration rates) for cadmium in an animal model, but the specific numeric values are not present in the provided abstract text. |
| `Zhong_2024.pdf` | Zhong G et al., Toxicokinetics and Mussel Watch: Addres…, Environmental science & tec… (2024) | popPK | 8 | [10.1021/acs.est.4c02026](https://doi.org/10.1021/acs.est.4c02026) | [39118541](https://pubmed.ncbi.nlm.nih.gov/39118541) | The paper reports quantitative toxicokinetic parameters (uptake and elimination rate constants) for cadmium in bivalves, which are explicitly provided in the text. |

<sub>queue written 2026-09-08T13:17:22.929911+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adetunji_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing the association between environmental exposures (including cadmium) and kidney function (eGFR), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Adil_2020 | not_relevant | 0 | 0 | The paper investigates plant physiology and cadmium toxicity in rice genotypes, not human pharmacogenomics or drug PK/PD parameters. |
| popPK | Al-Saleh_2026 | irrelevant | 0 | 0 | The study is an epidemiological analysis of associations between pollutant exposure and metabolic syndrome, not a pharmacokinetic study reporting disposition parameters for cadmium. |
| PD | Barberá_1993 | irrelevant | 0 | 0 | The paper reports dietary intake estimates for cadmium and compares them to safety thresholds (PTDI), but it does not report any adverse health outcomes or dose-response relationships. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not study cadmium. |
| PD | Barzel_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetic and pharmacodynamic modeling of therapeutic enzymes for lysosomal storage diseases and does not study Cadmium or report any toxicodynamic data for it. |
| popPK | Burger_2008 | irrelevant | 0 | 0 | The paper is a review of ecological risk assessment for wildlife and does not report quantitative pharmacokinetic parameters for cadmium. |
| popPK | Béchaux_2014 | relevant | 9 | 0 | The paper describes a PBPK/population PK model for cadmium, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| popPK | Chen_2020 | relevant | 8 | 2 | The paper uses a PBPK model for cadmium, but the specific quantitative PK parameters (CL, V, Q) are not listed in the provided evidence, only the resulting BMD concentrations. |
| popPK | Cherian_1978 | irrelevant | 2 | 0 | The study reports qualitative tissue distribution and binding percentages rather than quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| PD | Cherkani-Hassani_2020 | irrelevant | 0 | 0 | The paper reports cadmium exposure levels in breast milk and associated demographic factors but does not report any adverse health outcomes or dose-response relationships for the infants or mothers. |
| popPK | Christie_1983 | irrelevant | 0 | 0 | The study reports toxicological endpoints (LC50) and elemental content in Drosophila, not pharmacokinetic disposition parameters (CL, V, ka) for cadmium. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper is a systematic review of the population pharmacokinetics of tigecycline, not cadmium. |
| PD | Dai_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of tigecycline, not cadmium, and therefore does not provide any toxicodynamic data for the named substance. |
| popPK | Dal_2020 | irrelevant | 0 | 0 | The study is an ecological biomonitoring analysis of element concentrations in owl tissues, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Dong_2021 | not_relevant | 0 | 0 | The paper studies plant phytoremediation and cadmium tolerance in sweet sorghum, not human pharmacogenomics or PK/PD parameters. |
| popPK | Ekobena_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bictegravir, not cadmium. |
| PD | Ekobena_2025 | irrelevant | 0 | 0 | The paper studies the population pharmacokinetics of bictegravir (an HIV medication) and does not investigate cadmium or any toxicodynamic relationship for it. |
| PD | El-Sabbagh_2022 | irrelevant | 3 | 2 | The paper studies the ameliorative effects of Withania somnifera on cadmium toxicity using a single fixed exposure level (1/4 LC50) rather than establishing a dose-response relationship for cadmium itself. |
| popPK | Ellis_1984 | irrelevant | 2 | 0 | The study focuses on dose-response relationships for kidney dysfunction and reports body burden levels (mg/ppm) rather than pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PD | England_1991 | irrelevant | 0 | 0 | The paper studies the toxicity of Strontium (Sr), not Cadmium (Cd), although it references previous Cadmium data for genetic background context. |
| popPK | Ewers_1985 | irrelevant | 0 | 0 | The paper is an epidemiological study assessing renal function and exposure levels, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Franken_2017 | irrelevant | 0 | 0 | The study is an epidemiological investigation of environmental exposure and DNA damage, not a pharmacokinetic study, and reports no disposition parameters for cadmium. |
| popPK | Gao_2019 | relevant | 9 | 0 | The paper describes a toxicokinetic modeling study for cadmium in zebrafish, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Garner_2016 | irrelevant | 0 | 0 | The study is an epidemiological analysis of cadmium exposure levels and sources, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing the association between heavy metal exposure levels and depression, not a pharmacokinetic study reporting disposition parameters like clearance or volume for cadmium. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of iclepertin, not cadmium. |
| PD | Hanke_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of the drug iclepertin, not the toxicological dose-response of Cadmium. |
| PD | Hiratsuka_1993 | irrelevant | 0 | 0 | The provided text is metadata for a software tool (GROBID) and does not contain any toxicological data or dose-response relationships for Cadmium. |
| popPK | Husheng_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for vancomycin, not cadmium. |
| PD | Husheng_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of vancomycin, not cadmium, and therefore does not provide any toxicodynamic data for the named substance. |
| popPK | Ishizaki_1989 | irrelevant | 0 | 0 | The study is an epidemiological dose-response analysis of urinary biomarkers and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not cadmium. |
| PD | Jia_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of rivaroxaban, not cadmium, and therefore contains no toxicodynamic data for the target substance. |
| popPK | Jin_2025 | irrelevant | 0 | 0 | The study is an epidemiological analysis of the association between heavy metal exposure and lung function, not a pharmacokinetic study reporting disposition parameters like clearance or volume for cadmium. |
| popPK | Ju_2012 | relevant | 8 | 0 | The paper describes a PBPK model for cadmium, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Järup_1994 | irrelevant | 0 | 0 | The paper is an epidemiological study on dose-response relations for toxicity (proteinuria) and does not report pharmacokinetic parameters like clearance or volume for cadmium. |
| popPK | Järup_2003 | irrelevant | 0 | 0 | The paper is a general review of heavy metal hazards and exposure sources, containing no pharmacokinetic studies or quantitative disposition parameters for cadmium. |
| PD | Järup_2003 | irrelevant | 1 | 0 | The paper is a general review of heavy metal hazards that qualitatively mentions cadmium's adverse effects (kidney damage, bone effects) and notes that risks occur at lower levels than previously thought, but it does not provide any specific numeric dose-response parameters, NOAELs, LOAELs, or fitted curves for cadmium. |
| popPK | Jóhannesson_1981 | irrelevant | 0 | 0 | The study reports environmental exposure levels of cadmium in hair and food, not pharmacokinetic disposition parameters. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a simulated pharmacokinetic benchmarking framework for an unspecified Sanofi molecule and does not report any pharmacokinetic parameters for cadmium. |
| PD | Karlsen_2026 | irrelevant | 0 | 0 | The paper studies a simulated pharmacokinetic framework for a generic Sanofi molecule and does not investigate Cadmium or any toxicodynamic adverse dose-response relationships. |
| popPK | Kido_1991 | irrelevant | 0 | 0 | The study is an epidemiological assessment of dose-response relationships for renal dysfunction (urinary cadmium and metallothionein) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kjellström_1979 | irrelevant | 2 | 1 | The paper is an epidemiological study reporting exposure, intake, and tissue concentrations, but it does not provide quantitative compartmental pharmacokinetic parameters (CL, V, Q, ka) for cadmium. |
| PGx | Kuzukiran_2024 | not_relevant | 0 | 0 | The paper investigates the transcriptomic effects of environmental metal exposure (including cadmium) on placental gene expression, rather than the pharmacokinetics or pharmacodynamics of a drug influenced by a specific gene variant. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The study is a biomonitoring/exposure assessment report that detects cadmium in urine but does not report pharmacokinetic parameters (CL, V, ka, etc.) for cadmium. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The study investigates the effect of cadmium exposure on transporter expression, not the effect of a gene variant on cadmium pharmacokinetics. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study analyzing the association between environmental toxicant exposure (including cadmium) and obstructive sleep apnea, reporting odds ratios rather than pharmacokinetic parameters. |
| popPK | Lombaert_2023 | irrelevant | 1 | 0 | The paper is a regulatory review on occupational exposure limits and biomonitoring, lacking original quantitative pharmacokinetic parameters (CL, V, Q, ka) for cadmium. |
| popPK | Lordan_2022 | irrelevant | 1 | 0 | The paper is a review of cadmium in the brown crab industry and food safety, lacking original quantitative pharmacokinetic parameters (CL, V, Q, ka) for cadmium as a drug. |
| popPK | Marfo_2024 | irrelevant | 0 | 0 | The study is an epidemiological analysis of the association between metal exposure levels and physical activity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Marfo_2024 | irrelevant | 0 | 0 | The paper studies the association between metal exposure and physical activity, which is not an adverse toxicodynamic endpoint, and reports positive associations rather than adverse dose-response parameters. |
| PD | Marincich_2023 | irrelevant | 0 | 0 | The paper performs an exposure assessment comparing dietary intake to a tolerable weekly intake (TWI) but does not report a toxicodynamic dose-response relationship, NOAEL, or adverse effect data for cadmium. |
| popPK | Markiewicz-Górka_2022 | irrelevant | 0 | 0 | The study is an epidemiological investigation of cadmium body burden and inflammatory arthritis risk, reporting only concentration levels and statistical associations, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Marques_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of propranolol and omeprazole, not cadmium. |
| PD | Marques_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Propranolol and Omeprazole, not Cadmium, and therefore contains no toxicodynamic data for the target substance. |
| popPK | Mason_1981 | irrelevant | 2 | 0 | The study reports tissue concentrations and subcellular distribution percentages rather than quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or compartmental models. |
| popPK | Min_1986 | irrelevant | 2 | 0 | The study focuses on tissue distribution and nephropathy mechanisms rather than reporting quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Mueller_1992 | irrelevant | 0 | 0 | The study focuses on renal biomarkers (urinary proteins) in occupationally exposed populations and does not report pharmacokinetic parameters (CL, V, ka, etc.) for cadmium. |
| popPK | Muthukrishnan_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for clazakizumab, not cadmium. |
| PD | Muthukrishnan_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of clazakizumab (a monoclonal antibody), not Cadmium. |
| popPK | Nakashima_1987 | irrelevant | 0 | 0 | The study is an in-vitro embryotoxicity assay focusing on dose-response relationships and teratogenic effects, not a pharmacokinetic study reporting disposition parameters for cadmium. |
| popPK | Nogawa_1979 | irrelevant | 0 | 0 | The study is an epidemiological dose-response analysis of renal toxicity and does not report pharmacokinetic parameters (CL, V, ka, etc.) for cadmium. |
| popPK | Nogawa_2021 | irrelevant | 1 | 0 | The study is an epidemiological dose-response analysis for renal toxicity (BMD/NOAEL) and does not report pharmacokinetic disposition parameters (CL, V, Q, ka) or a compartmental PK model for cadmium. |
| popPK | Obeng-Gyasi_2024 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing the association between environmental metal exposure and systemic inflammation (CRP levels), not a pharmacokinetic study reporting disposition parameters like clearance or volume for cadmium. |
| popPK | Odediran_2024 | irrelevant | 0 | 0 | The study is an epidemiological cross-sectional analysis of environmental exposure and dietary patterns, not a pharmacokinetic study, and reports no disposition parameters for cadmium. |
| popPK | Ogundare_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on the association between environmental exposures (including cadmium) and depressive symptoms, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ohta_1995 | irrelevant | 2 | 0 | The study is an in situ mechanistic investigation of intestinal uptake and tissue distribution, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for elafibranor and its metabolite GFT1007, not for cadmium. |
| PD | Ooi_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of the drug elafibranor, not the toxicodynamics of cadmium. |
| popPK | Partanen_1991 | irrelevant | 0 | 0 | The paper is an epidemiological study on renal cell cancer risk associated with occupational exposures, not a pharmacokinetic study, and contains no PK parameters for cadmium. |
| PD | Partanen_1991 | irrelevant | 1 | 0 | The paper reports only a qualitative "suggestion" of elevated risk for cadmium exposure without providing any quantified dose-response parameters, NOAEL/LOAEL, or numeric data for cadmium. |
| popPK | Pavlaki_2018 | relevant | 8 | 0 | The study reports quantitative toxicokinetic parameters (uptake/depuration rates) for cadmium in an animal model, but the specific numeric values are not present in the provided abstract text. |
| popPK | Planas-Bohne_1983 | irrelevant | 2 | 0 | The study focuses on the efficacy of chelating agents on cadmium body burden and distribution rather than reporting quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Poland_2021 | irrelevant | 2 | 0 | The study reports tissue concentrations and bioaccessibility percentages but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Rakete_2022 | irrelevant | 0 | 0 | The paper is a cross-sectional biomonitoring study reporting exposure levels (concentrations) of cadmium in urine, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| popPK | Ratelle_2018 | irrelevant | 0 | 0 | The study is a human biomonitoring/exposure assessment reporting cadmium concentrations in urine and blood, not a pharmacokinetic study with disposition parameters (CL, V, ka, etc.). |
| popPK | Roy_2022 | irrelevant | 0 | 0 | The study reports acute toxicity (LC50) data, not pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Salmela_1983 | irrelevant | 2 | 0 | The study reports static tissue burdens and concentrations from autopsy specimens rather than dynamic pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Sartor_1992 | irrelevant | 0 | 0 | The paper is an epidemiological study reporting urinary and blood cadmium levels as biomarkers of exposure, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Schubert_1978 | irrelevant | 0 | 0 | The paper describes a toxicological testing procedure for acute lethality and mutagenicity of metal combinations, not a pharmacokinetic study reporting disposition parameters for cadmium. |
| popPK | Sears_2012 | irrelevant | 0 | 0 | The paper is a systematic review of toxic element concentrations in sweat and does not report pharmacokinetic parameters (CL, V, ka, etc.) for cadmium. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B against Acinetobacter baumannii, and does not study cadmium. |
| PD | Soeorg_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B against Acinetobacter baumannii and does not investigate Cadmium. |
| PGx | Souri_2021 | not_relevant | 0 | 0 | The paper investigates plant physiology and cadmium stress in Isatis cappadocica, not human pharmacogenomics or drug PK/PD. |
| popPK | Sun_2019 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing the association between cadmium exposure biomarkers and kidney stone risk, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sunnåker_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for the drug mitiperstat, not cadmium. |
| PD | Sunnåker_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the drug mitiperstat and does not investigate the toxicodynamics or dose-response relationship of cadmium. |
| popPK | Surenbaatar_2023 | irrelevant | 1 | 0 | The paper is an environmental health/biomonitoring study reporting exposure concentrations (blood/urine levels) rather than pharmacokinetic disposition parameters (CL, V, Q, ka) or compartmental models for cadmium. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not cadmium. |
| PD | Suthahar_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 5-fluorouracil, not Cadmium, so it does not provide any toxicodynamic data for the named substance. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for 5-fluorouracil, not cadmium. |
| PD | Tan_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 5-fluorouracil (5-FU), not Cadmium, so it does not provide any toxicodynamic data for the named substance. |
| popPK | Thakre_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for glecaprevir and pibrentasvir, not cadmium. |
| PD | Thakre_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of glecaprevir and pibrentasvir (antiviral drugs) in pediatric patients and does not investigate cadmium or any toxicodynamic relationship for it. |
| popPK | Theophilo_2021 | irrelevant | 0 | 0 | The paper is an environmental biomonitoring study using plants to assess air pollution, not a pharmacokinetic study of cadmium in humans or animals. |
| PGx | Thévenod_2019 | not_relevant | 0 | 0 | The paper reviews the physiological transport mechanisms of cadmium in eukaryotic cells and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Tulbah_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic models for anesthetic drugs (e.g., propofol, remifentanil) and does not contain any data or parameters for cadmium. |
| PD | Tulbah_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic-pharmacodynamic modeling for anesthetic agents (e.g., propofol, fentanyl) and does not study Cadmium or report any toxicodynamic data for it. |
| PGx | Wan_2025 | not_relevant | 0 | 0 | The study investigates the association between environmental cadmium exposure and anxiety using proteomics, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Wang_2022 | relevant | 9 | 2 | The paper is a toxicokinetic study of cadmium in earthworms using a one-compartment model, but the specific numeric parameter values (ku, ke) are not present in the provided text, likely residing in tables or figures not included. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper studies the effect of nanoparticles on cadmium accumulation in plants, not the effect of human gene variants on cadmium pharmacokinetics or pharmacodynamics. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper studies cadmium accumulation in plants (phytoremediation), not human pharmacogenomics or PK/PD parameters. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of daptomycin, not cadmium. |
| PD | Xie_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of daptomycin, not cadmium, so it does not provide any toxicodynamic data for the named substance. |
| popPK | Xu_2021 | irrelevant | 2 | 0 | The study focuses on in-vitro bioaccessibility/bioavailability and exposure assessment rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for cadmium. |
| PGx | Xu_2024 | not_relevant | 0 | 0 | The study investigates the toxicological mechanisms of cadmium exposure in chickens (spleen injury, CYP450 induction, mitochondrial dysfunction) but does not report pharmacogenomic effects (gene variants altering PK/PD) of cadmium. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The study investigates the toxicological effects of cadmium and microplastics on intestinal barrier integrity in mice using omics analysis, but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic modeling for opioids (e.g., buprenorphine, methadone) in pregnancy and does not contain any data or parameters for cadmium. |
| PD | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic modeling for opioids in pregnancy and does not study Cadmium or report any toxicodynamic data for it. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is an epidemiological cohort study analyzing mortality risk associated with ambient cadmium exposure, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zhang_2025_2 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not cadmium. |
| PD | Zhang_2025_2 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of imipenem, not cadmium, and therefore contains no toxicodynamic data for the target substance. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper is a pharmacokinetic study of nivolumab, not cadmium. |
| PD | Zhao_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of nivolumab, not cadmium, and therefore contains no toxicodynamic data for the target substance. |
| popPK | Zhong_2020 | irrelevant | 2 | 0 | The study focuses on toxicokinetic-toxicodynamic (TK-TD) modeling for toxicity prediction in an invertebrate, not population pharmacokinetics, and no specific numeric PK parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The provided evidence contains only axis labels and no pharmacokinetic data, text, or numeric values for cadmium. |
| PD | Zhou_2026 | irrelevant | 0 | 0 | The provided text consists only of axis labels and numerical values without any mention of Cadmium, specific biological endpoints, or dose-response data. |
| popPK | Zhu_2025 | irrelevant | 0 | 0 | The study is an epidemiological analysis of heavy metal exposure and semen quality, not a pharmacokinetic study, and reports no disposition parameters for cadmium. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/toxins/toxin_cadmium`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
