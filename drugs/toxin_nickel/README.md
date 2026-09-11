# nickel

- **generic name:** not captured
- **ATC codes:** not captured
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 16:09 | 58:15 | 4/0/0 | 0/0/0 | 0/0/0 | 723,707/70,738 | ollama / qwen3.8:27b-mtp-q8_0 | 50 | 10/38 | 48/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Jia_2026](drugs/toxin_nickel/Nickel_Jia2026_reference.md) | Jia M et al., Population pharmacokinetics of rivaroxa…, European journal of clinica… (2026) | [10.1007/s00228-026-04034-6](https://doi.org/10.1007/s00228-026-04034-6) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Kwack_2026](drugs/toxin_nickel/Nickel_Kwack2026_reference.md) | Kwack H et al., PKGPT: Expert-Orchestrated Recursive LL…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040501](https://doi.org/10.3390/pharmaceutics18040501) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Zhao_2017](drugs/toxin_nickel/Nickel_Zhao2017_reference.md) | Zhao H et al., [Physiologically based toxicokinetic mo…, Wei sheng yan jiu = Journal… (2017) | — |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [van_2026](drugs/toxin_nickel/Nickel_van2026_reference.md) | van der Zeeuw SL et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01641-5](https://doi.org/10.1007/s40262-026-01641-5) |

## Coverage

- **PubMed hits:** 12355 matched, 140 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Menzel_1988.pdf` | Menzel DB, Planning and using PB-PK models: an int…, Toxicology letters (1988) | popPK | 9 | [10.1016/0378-4274(88)90021-5](https://doi.org/10.1016/0378-4274(88)90021-5) | [3176072](https://pubmed.ncbi.nlm.nih.gov/3176072) | The paper describes a PB-PK model for nickel with quantitative parameters (Km, Vmax), but the specific numeric values are not present in the provided abstract text. |
| `Zhao_2017.pdf` | Zhao H et al., [Physiologically based toxicokinetic mo…, Wei sheng yan jiu = Journal… (2017) | popPK | 9 | not captured | [29903311](https://pubmed.ncbi.nlm.nih.gov/29903311) | The paper presents a PBPK model for nickel with specific quantitative partition coefficients and tissue concentrations provided in the text. |
| `English_1981.pdf` | English JC et al., Toxicokinetics of nickel in rats after…, American Industrial Hygiene… (1981) | popPK | 8 | [10.1080/15298668191420125](https://doi.org/10.1080/15298668191420125) | [7246426](https://pubmed.ncbi.nlm.nih.gov/7246426) | The paper is a toxicokinetic study of nickel in rats reporting distribution and clearance dynamics, but the specific quantitative parameter values (e.g., half-lives, clearance rates) are not explicitly listed in the provided abstract text. |
| `Nielsen_1994.pdf` | Nielsen GD et al., Effect of tetraethylthiuramdisulphide a…, Pharmacology & toxicology (1994) | popPK | 8 | [10.1111/j.1600-0773.1994.tb00362.x](https://doi.org/10.1111/j.1600-0773.1994.tb00362.x) | [7870700](https://pubmed.ncbi.nlm.nih.gov/7870700) | The paper describes a pharmacokinetic study of nickel in mice, but the provided evidence contains only qualitative descriptions and relative ratios (e.g., "10 times higher", "700 times higher") rather than specific quantitative PK parameter values like clearance or volume. |
| `Chai_2025.pdf` | Chai X et al., Association between serum cobalt concen…, Journal of trace elements i… (2025) | pd | 5 | [10.1016/j.jtemb.2025.127762](https://doi.org/10.1016/j.jtemb.2025.127762) | [40992113](https://www.ncbi.nlm.nih.gov/pubmed/40992113) | metadata signals extractable PD data (exposure-response) |
| `Franken_2017.pdf` | Franken C et al., Environmental exposure to human carcino…, Environmental research (2017) | pd | 5 | [10.1016/j.envres.2016.10.012](https://doi.org/10.1016/j.envres.2016.10.012) | [27771571](https://www.ncbi.nlm.nih.gov/pubmed/27771571) | metadata signals extractable PD data (exposure-response) |
| `He_2026.pdf` | He J et al., Sex-specific associations between expos…, Journal of environmental sc… (2026) | pd | 5 | [10.1016/j.jes.2025.05.022](https://doi.org/10.1016/j.jes.2025.05.022) | [41461523](https://www.ncbi.nlm.nih.gov/pubmed/41461523) | metadata signals extractable PD data (exposure-response) |
| `Heim_2007.pdf` | Heim KE et al., Oral carcinogenicity study with nickel…, Toxicology and applied phar… (2007) | pd | 5 | [10.1016/j.taap.2007.06.024](https://doi.org/10.1016/j.taap.2007.06.024) | [17692353](https://www.ncbi.nlm.nih.gov/pubmed/17692353) | metadata signals extractable PD data (exposure-response) |
| `Järup_1998.pdf` | Järup L et al., Mortality and cancer incidence in Swedi…, Occupational and environmen… (1998) | pd | 5 | [10.1136/oem.55.11.755](https://doi.org/10.1136/oem.55.11.755) | [9924452](https://www.ncbi.nlm.nih.gov/pubmed/9924452) | metadata signals extractable PD data (exposure-response) |
| `Järup_2003.pdf` | Järup L, Hazards of heavy metal contamination, British medical bulletin (2003) | pd | 5 | [10.1093/bmb/ldg032](https://doi.org/10.1093/bmb/ldg032) | [14757716](https://www.ncbi.nlm.nih.gov/pubmed/14757716) | metadata signals extractable PD data (exposure-response) |
| `Marsh_2017.pdf` | Marsh GM et al., Mortality Among Hardmetal Production Wo…, Journal of occupational and… (2017) | pd | 5 | [10.1097/JOM.0000000000001075](https://doi.org/10.1097/JOM.0000000000001075) | [29215485](https://www.ncbi.nlm.nih.gov/pubmed/29215485) | metadata signals extractable PD data (exposure-response) |
| `Peters_2016.pdf` | Peters S et al., SYN-JEM: A Quantitative Job-Exposure Ma…, The Annals of occupational… (2016) | pd | 5 | [10.1093/annhyg/mew034](https://doi.org/10.1093/annhyg/mew034) | [27286764](https://www.ncbi.nlm.nih.gov/pubmed/27286764) | metadata signals extractable PD data (exposure-response) |
| `Tainio_2015.pdf` | Tainio M, Burden of disease caused by local trans…, Journal of transport & heal… (2015) | pd | 5 | [10.1016/j.jth.2015.06.005](https://doi.org/10.1016/j.jth.2015.06.005) | [26516622](https://www.ncbi.nlm.nih.gov/pubmed/26516622) | metadata signals extractable PD data (exposure-response) |
| `Franzellitti_2011.pdf` | Franzellitti S et al., Interactive effects of nickel and chlor…, Comparative biochemistry an… (2011) | pgx | 7 | [10.1016/j.cbpc.2011.07.006](https://doi.org/10.1016/j.cbpc.2011.07.006) | [21798369](https://www.ncbi.nlm.nih.gov/pubmed/21798369) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Dawling_2001.pdf` | Dawling S et al., Catechol-O-methyltransferase (COMT)-med…, Cancer research (2001) | pgx | 5 | not captured | [11559542](https://www.ncbi.nlm.nih.gov/pubmed/11559542) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-09-08T15:42:49.918061+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2023 | not_relevant | 0 | 0 | The paper studies plant physiology and nickel toxicity in maize, not human pharmacogenomics or drug PK/PD. |
| PGx | Amjad_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and heavy metal toxicity in tomatoes, not human pharmacogenomics or drug PK/PD. |
| popPK | Andersen_1993 | irrelevant | 0 | 0 | The study is a dermatological patch-test for nickel sensitivity and does not report any pharmacokinetic parameters. |
| PGx | Atay_2024 | not_relevant | 0 | 0 | The paper studies bacterial resistance to cobalt and nickel via evolutionary engineering, not human pharmacogenomics or drug PK/PD. |
| PGx | Banerjee_2023 | not_relevant | 0 | 0 | The paper studies plant physiology and microbial remediation of arsenic/fluoride in rice, not human pharmacogenomics or drug PK/PD. |
| PD | Barberá_1993 | irrelevant | 0 | 0 | The paper reports dietary intake levels of nickel and compares them to safety guidelines, but it does not report any adverse health effects or dose-response relationships. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not study nickel. |
| PD | Barzel_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetic and pharmacodynamic modeling of therapeutic enzymes for lysosomal storage diseases and does not study Nickel or report any toxicodynamic data for it. |
| popPK | Binazzi_2015 | irrelevant | 0 | 0 | The paper is an epidemiological meta-analysis of occupational cancer risk, not a pharmacokinetic study, and contains no PK parameters for nickel. |
| PGx | Bonvin_2006 | not_relevant | 0 | 0 | The paper describes the biochemical characterization of an enzyme from a bacterium and uses nickel affinity chromatography for purification, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of nickel as a drug. |
| PGx | Breczko_2025 | not_relevant | 0 | 0 | The paper describes a photocatalytic material for antibiotic degradation and does not report pharmacogenomic effects on the PK/PD of nickel. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated pharmacometric model development using neural ODEs and LASSO, applying the method to neonatal weight, simulated generic PK data, and warfarin, with no mention of nickel. |
| PD | Bräm_2026 | irrelevant | 0 | 0 | The paper focuses on a pharmacometric modeling methodology (NODE-LASSO) applied to neonatal weight, generic PK data, and warfarin, and does not study Nickel or report any toxicodynamic data for it. |
| popPK | Buitrago-Cortes_2024 | irrelevant | 0 | 0 | The study is an epidemiological biomonitoring analysis of metal concentrations in hair and nails, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Cataldo_1978 | irrelevant | 0 | 0 | The paper investigates nickel distribution and chemical form in soybean plants, not pharmacokinetic parameters in humans or animals. |
| popPK | Chai_2025 | irrelevant | 0 | 0 | The study is a cross-sectional epidemiological analysis of cobalt and thyroid function, with nickel only mentioned as a co-measured trace element, and it contains no pharmacokinetic parameters for nickel. |
| PD | Chai_2025 | irrelevant | 0 | 0 | The paper studies the relationship between serum cobalt concentration and thyroid function, not nickel, so it does not provide toxicodynamic data for the named substance. |
| popPK | Chang_2016 | irrelevant | 0 | 0 | The study focuses on the toxicity and leaching characteristics of nickel ions from shape memory alloys in bacteria, not on the pharmacokinetic disposition parameters (CL, V, etc.) of nickel in a biological system. |
| PD | Chang_2016 | irrelevant | 0 | 0 | The paper studies the toxicity of a Cu-Al-Ni alloy and its leached ions (Cu, Al, Ni) as a mixture, rather than the specific toxicodynamic dose-response of the named substance Nickel alone. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper investigates the association between environmental pollutant exposure (including nickel) and DNA methylation/SNPs, not the pharmacokinetics or pharmacodynamics of nickel as a drug. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper is a methodological study on stochastic differential equations in NONMEM using simulated data, not a pharmacokinetic study of nickel. |
| PD | Chen_2026 | irrelevant | 0 | 0 | The paper focuses on stochastic differential equations for pharmacokinetic model diagnostics and does not study Nickel or report any toxicodynamic data. |
| popPK | Chuang_2013 | irrelevant | 0 | 0 | The study investigates the physiological effects of nickel exposure on heart rate variability in rats and does not report any pharmacokinetic parameters. |
| PGx | Dahdouh_2014 | not_relevant | 0 | 0 | The paper investigates the mechanism of nickel toxicity and the role of ABCB1 in cell survival, but does not report a pharmacogenomic effect (gene variant) on a PK or PD parameter. |
| popPK | Dal_2020 | irrelevant | 0 | 0 | The study is an ecological biomonitoring analysis of element concentrations in owl tissues, not a pharmacokinetic study reporting disposition parameters for nickel. |
| PGx | Dawling_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of endogenous estrogens by COMT, not the pharmacokinetics or pharmacodynamics of the drug nickel. |
| PGx | Degawa_1994 | not_relevant | 0 | 0 | The paper investigates the effect of metal ions (including nickel) on CYP1A2 expression in rats, but does not report a pharmacogenomic effect (gene variant) on the PK/PD of nickel. |
| PGx | Degawa_1995 | not_relevant | 0 | 0 | The text is metadata for a software tool (GROBID) and does not contain any pharmacogenomic or pharmacokinetic data regarding nickel. |
| PGx | Desguin_2018 | not_relevant | 0 | 0 | The paper describes the structural biology and enzymatic mechanism of a bacterial nickel-dependent enzyme (LarC) and its cofactor biosynthesis, not the pharmacogenomics of nickel as a drug. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a software validation study comparing OpenPMX and NONMEM using simulated data for propofol, fentanyl, and warfarin, and does not report pharmacokinetic parameters for nickel. |
| PD | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a methodological study comparing software for pharmacometric modeling (OpenPMX vs. NONMEM) using simulated datasets for drugs like propofol and fentanyl; it does not study Nickel or report any toxicodynamic dose-response data. |
| popPK | English_1981 | relevant | 8 | 2 | The paper is a toxicokinetic study of nickel in rats reporting distribution and clearance dynamics, but the specific quantitative parameter values (e.g., half-lives, clearance rates) are not explicitly listed in the provided abstract text. |
| popPK | Fadhlaoui_2020 | irrelevant | 0 | 0 | The study investigates the effects of nickel on biofilm fatty acid composition and bioaccumulation, but does not report pharmacokinetic parameters such as clearance, volume of distribution, or compartmental models. |
| popPK | Franken_2017 | irrelevant | 0 | 0 | The study is an epidemiological investigation of environmental exposure and DNA damage, not a pharmacokinetic study, and reports no disposition parameters for nickel. |
| PGx | Franzellitti_2011 | not_relevant | 0 | 0 | The study investigates toxicological effects of nickel and chlorpyrifos on mussel physiology and gene expression, not pharmacogenomic effects on the PK/PD of a drug. |
| popPK | Gallego_2024 | irrelevant | 0 | 0 | The paper is an environmental toxicology study analyzing trace metal concentrations in soil and water, not a pharmacokinetic study of nickel as a drug. |
| PGx | Garg_2020 | not_relevant | 0 | 0 | The paper studies plant physiology and nickel toxicity in pigeon pea genotypes, not human pharmacogenomics or drug PK/PD. |
| popPK | Geerts_1991 | irrelevant | 0 | 0 | The paper studies cell proliferation kinetics in rat liver using nickel as a histological counterstain (Nico/DAB method), not as a pharmacokinetic subject drug. |
| popPK | Grundler_2021 | irrelevant | 0 | 0 | The study measures urinary and hair concentrations of nickel before and after fasting but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Haber_2017 | irrelevant | 2 | 0 | The paper is a toxicity reference value (TRV) derivation that mentions toxicokinetic data qualitatively but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for nickel. |
| popPK | Hamzah_2016 | irrelevant | 0 | 0 | The paper is an occupational health study assessing the relationship between metal dust exposure and lung function, not a pharmacokinetic study of nickel disposition. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of iclepertin, not nickel. |
| PD | Hanke_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of the drug iclepertin, not the toxicological dose-response of the substance Nickel. |
| popPK | Hartwell_2020 | irrelevant | 0 | 0 | The paper is an environmental characterization study reporting contaminant concentrations in sediments and fish, not a pharmacokinetic study of nickel. |
| popPK | He_2026 | irrelevant | 0 | 0 | The study is an epidemiological analysis of metal exposure and mitochondrial DNA copy number, not a pharmacokinetic study, and reports no disposition parameters for nickel. |
| PD | He_2026 | irrelevant | 0 | 0 | The paper focuses on the association between Calcium and mitochondrial DNA copy number, and while Nickel is mentioned as part of a metal mixture, no specific adverse dose-response relationship or numeric parameters for Nickel are reported. |
| popPK | Heim_2007 | irrelevant | 0 | 0 | The paper is a chronic oral carcinogenicity study in rats that reports toxicity and tumor outcomes, but it does not contain any pharmacokinetic parameters (e.g., clearance, volume, half-life) for nickel. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated PopPK modeling using 22 datasets (e.g., bedaquiline, cefaclor) and does not contain any data or parameters for nickel. |
| PD | Huang_2026 | irrelevant | 0 | 0 | The paper focuses on automated population pharmacokinetic modeling software (nlmixr2auto) and does not study the toxicodynamics or adverse dose-response relationships of Nickel. |
| PGx | Imbra_1989 | not_relevant | 0 | 0 | The paper describes a cellular resistance phenotype to nickel toxicity involving chromosomal changes, not a pharmacogenomic effect on a PK or PD parameter of a drug. |
| PD | Jia_2022 | irrelevant | 0 | 0 | The paper studies 18 seminal metals including Nickel, but the reported dose-response relationships and numeric parameters are exclusively for Chromium and Vanadium, with no specific adverse dose-response data provided for Nickel. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not nickel. |
| PD | Jia_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of rivaroxaban, not nickel, so it does not provide any toxicodynamic data for the named substance. |
| popPK | Järup_1998 | irrelevant | 0 | 0 | The paper is an epidemiological study on cancer incidence and mortality in battery workers, not a pharmacokinetic study, and contains no PK parameters for nickel. |
| popPK | Järup_2003 | irrelevant | 0 | 0 | The paper is a general review of heavy metal hazards (lead, cadmium, mercury, arsenic) and does not report pharmacokinetic parameters for nickel. |
| PD | Järup_2003 | irrelevant | 0 | 0 | The paper discusses heavy metal hazards but focuses on lead, cadmium, mercury, and arsenic, and does not provide any specific toxicodynamic data or dose-response relationships for nickel. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study focuses on population pharmacokinetics for multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not involve nickel as the subject drug. |
| PD | Kang_2026 | irrelevant | 0 | 0 | The paper studies pharmacokinetics and exposure-response for multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not investigate the toxicodynamics of Nickel. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a simulated pharmacokinetic benchmarking framework for an unspecified molecule (likely a small molecule drug) and does not study nickel or report nickel-specific PK parameters. |
| PD | Karlsen_2026 | irrelevant | 0 | 0 | The paper studies a simulated pharmacokinetic framework for a generic drug molecule (Sanofi pooled clinical trials) and does not investigate Nickel or any toxicodynamic adverse dose-response relationship. |
| PD | Kazemi-Lomedasht_2019 | irrelevant | 0 | 0 | The paper studies snake venom and antibody development, not the toxicodynamics of Nickel; the mention of nickel is solely regarding the purification method (affinity chromatography). |
| popPK | Kuo_2022 | irrelevant | 2 | 1 | The paper is an occupational health intervention study measuring urinary nickel concentrations, not a pharmacokinetic study deriving clearance, volume, or compartmental parameters for nickel. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper is a methodological study on an LLM agent for PK modeling using warfarin, theophylline, and tobramycin, with no data or parameters for nickel. |
| PD | Kwack_2026 | irrelevant | 0 | 0 | The paper studies an AI agent for pharmacokinetic modeling of warfarin, theophylline, and tobramycin, and does not investigate Nickel or any toxicodynamic relationship for it. |
| popPK | Laderriere_2022 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on periphytic biofilms, not a pharmacokinetic study, and reports no disposition parameters for nickel. |
| popPK | Laderriere_2022_2 | irrelevant | 0 | 0 | The study investigates nickel bioaccumulation in aquatic biofilms (ecotoxicology) rather than pharmacokinetic disposition parameters (CL, V, ka) in a biological host. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of PF-06804103 (an anti-HER2 antibody-drug conjugate), not nickel. |
| PD | Li_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of the drug PF-06804103, not the toxicodynamics of the element Nickel. |
| PD | Liu_2025 | irrelevant | 0 | 0 | The paper studies the composite material Lithium Nickel Manganese Cobalt Oxide (NCM) and focuses on Lithium as the critical component, rather than Nickel specifically, so it does not provide evidence for the named substance. |
| popPK | Lopes_2019 | irrelevant | 0 | 0 | The paper is a materials science study on soft bioelectronic stickers and electrodes, not a pharmacokinetic study of nickel. |
| PD | Mania_2020 | irrelevant | 0 | 0 | The paper reports dietary exposure levels and compares them to a Tolerable Daily Intake (TDI) but does not present any toxicodynamic data, adverse dose-response relationships, or experimental exposure-effect analysis for nickel. |
| popPK | Marsh_2017 | irrelevant | 0 | 0 | The paper is an epidemiological mortality study of hardmetal workers and does not report any pharmacokinetic parameters for nickel. |
| PD | Marsh_2017 | irrelevant | 0 | 0 | The paper explicitly states that it found "no evidence of any exposure-response relationships" for lung cancer or other causes of death, meaning it does not report a quantified adverse dose-response relationship or numeric parameters for Nickel. |
| popPK | Martinez-Morata_2023 | irrelevant | 0 | 0 | The paper is a state-of-the-science review on metal biomarkers and does not report original quantitative pharmacokinetic parameters (e.g., CL, V, ka) for nickel. |
| popPK | Menzel_1988 | relevant | 9 | 0 | The paper describes a PB-PK model for nickel with quantitative parameters (Km, Vmax), but the specific numeric values are not present in the provided abstract text. |
| popPK | Minigaliyeva_2014 | irrelevant | 2 | 0 | The study focuses on toxicodynamics and qualitative retention/excretion patterns rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for nickel. |
| PGx | Mu_2023 | not_relevant | 0 | 0 | The paper investigates the toxicological effects of heavy metal exposure on liver enzymes and oxidative stress markers in rats, but does not report pharmacogenomic effects on the PK or PD of nickel. |
| PGx | Nazir_2025 | not_relevant | 0 | 0 | The paper describes protein engineering of an enzyme for industrial use, not a pharmacogenomic effect on the PK/PD of nickel as a drug. |
| PGx | Ng_2015 | not_relevant | 0 | 0 | The paper investigates genetic associations with whole blood levels of environmental toxic metals (including nickel), not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Nielsen_1994 | relevant | 8 | 2 | The paper describes a pharmacokinetic study of nickel in mice, but the provided evidence contains only qualitative descriptions and relative ratios (e.g., "10 times higher", "700 times higher") rather than specific quantitative PK parameter values like clearance or volume. |
| PGx | Oladipo_2023 | not_relevant | 0 | 0 | The paper investigates the structural and computational binding properties of nickel and copper complexes to CYP3A4, but does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of nickel. |
| popPK | Oliveira_2020 | irrelevant | 0 | 0 | The study analyzes trace element concentrations in human milk samples and does not report any pharmacokinetic parameters for nickel. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for elafibranor and its metabolite GFT1007, not for nickel. |
| PD | Ooi_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of the drug elafibranor, not the toxicodynamics of the substance Nickel. |
| popPK | Oskarsson_1980 | irrelevant | 2 | 0 | The study focuses on tissue distribution and chelation effects in mice without reporting quantitative compartmental pharmacokinetic parameters (CL, V, ka) for nickel. |
| popPK | Peters_2016 | irrelevant | 0 | 0 | The paper is an occupational exposure assessment study focusing on environmental exposure levels, not a pharmacokinetic study reporting disposition parameters for nickel. |
| PD | Peters_2016 | irrelevant | 0 | 0 | The paper develops a quantitative job-exposure matrix (JEM) to estimate exposure levels for nickel and other carcinogens but does not report any adverse health outcomes, dose-response relationships, or toxicodynamic parameters. |
| PD | Qurbani_2026 | irrelevant | 0 | 0 | The paper studies the compound Ni₂CoS₄ (a nickel-cobalt sulfide nanomaterial) rather than the element Nickel itself, so the reported dose-response data (IC50, MIC) are not evidence for the named substance. |
| PD | Rahman_2025 | irrelevant | 0 | 0 | The paper studies a specific nickel(II) tetraazamacrocyclic complex, not elemental nickel or a simple nickel salt, so the dose-response data (LC50/IC50) does not apply to the named substance "Nickel". |
| popPK | Raithel_1993 | irrelevant | 0 | 0 | The paper reports tissue concentrations (biomonitoring) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Reichrtová_1989 | irrelevant | 1 | 0 | The study reports qualitative tissue distribution and accumulation of nickel in rabbits but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Rizwan_2018 | not_relevant | 0 | 0 | The paper studies plant physiology and nickel toxicity in rice, not human pharmacogenomics or drug PK/PD. |
| popPK | Rohold_1991 | irrelevant | 0 | 0 | The paper is a toxicology/immunology study on contact dermatitis in guinea pigs and does not report any pharmacokinetic parameters for nickel. |
| PGx | Saleh_2020 | not_relevant | 0 | 0 | The paper studies the toxicological effects of heavy metals on wheat plants, not the pharmacogenomics of nickel in humans. |
| PGx | Saroy_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and nickel toxicity in pigeonpea, not human pharmacogenomics or drug PK/PD. |
| popPK | Sazakli_2017 | irrelevant | 0 | 0 | The study is an epidemiological biomonitoring investigation of hair nickel concentrations and health associations, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Seith_2019 | irrelevant | 0 | 0 | The study is an epidemiological assessment of metal body burden and health outcomes, not a pharmacokinetic study reporting disposition parameters for nickel. |
| PD | Shen_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of cross-sectional studies that reports standardized mean differences in serum metal concentrations between cases and controls, but it does not provide a quantified dose-response curve, NOAEL, LOAEL, or other toxicodynamic parameters for nickel. |
| PGx | Singh_2024 | not_relevant | 0 | 0 | The paper studies the physiological response of cyanobacteria to nickel stress and signaling molecules, not the pharmacogenomics of nickel as a drug in humans. |
| PGx | Singh_2024_2 | not_relevant | 0 | 0 | The paper describes the synthesis and structural characterization of nickel complexes as potential antiviral drugs, containing no pharmacogenomic data or analysis of genetic variants affecting PK/PD. |
| PGx | Siqueira_2018 | not_relevant | 0 | 0 | The paper studies nickel as an essential plant micronutrient in soybean, not as a drug in humans, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Sivananthan_2024 | not_relevant | 0 | 0 | The paper reports on the pharmacokinetics of a recombinant protein (C1INH-albumin fusion) and mentions nickel-chelate chromatography only as a purification method, not as a drug subject to pharmacogenomic analysis. |
| PGx | Smith_1967 | not_relevant | 0 | 0 | The paper discusses bacterial resistance to metals via R-factors, not human pharmacogenomics or PK/PD parameters. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B against Acinetobacter baumannii, and does not study nickel as the subject drug. |
| PD | Soeorg_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetic-pharmacodynamic modeling of antibiotics (meropenem and colistin/polymyxin B) against bacteria, not the toxicodynamics of Nickel. |
| PGx | Soliman_2019 | not_relevant | 0 | 0 | The paper studies plant physiology (eggplant) and nickel toxicity, not human pharmacogenomics or drug PK/PD. |
| PGx | Song_2014 | not_relevant | 0 | 0 | The paper describes a chemical conjugation strategy (PEGylation) for a protein therapeutic, not a pharmacogenomic effect of a gene variant on the PK/PD of nickel. |
| popPK | St-Jean_2018 | irrelevant | 0 | 0 | The paper is a biomonitoring study reporting urinary nickel concentrations and exposure determinants, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| popPK | Stanislawska_2020 | irrelevant | 0 | 0 | The study is a human biomonitoring assessment of occupational exposure that reports correlations between environmental and biological concentrations, but it does not provide pharmacokinetic parameters (CL, V, ka, etc.) for nickel. |
| popPK | Stayner_2003 | irrelevant | 0 | 0 | The paper is an epidemiological discussion of exposure-response curves in occupational cohorts and does not report pharmacokinetic parameters for nickel. |
| PD | Stayner_2003 | irrelevant | 0 | 0 | The paper is a conceptual review discussing the phenomenon of exposure-response curve attenuation in various substances, including nickel, but it does not present original data, specific numeric parameters (such as NOAEL, BMD, or fitted curve coefficients), or a quantified dose-response relationship for nickel. |
| PGx | Subhani_2023 | not_relevant | 0 | 0 | The paper studies plant physiology and stress tolerance in tomatoes, not human pharmacogenomics or drug PK/PD. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not nickel. |
| PD | Suthahar_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 5-fluorouracil, not Nickel, so it does not provide any toxicodynamic data for the named substance. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for vancomycin, not nickel. |
| PD | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of vancomycin, not nickel, and therefore does not provide any toxicodynamic data for the named substance. |
| popPK | Tainio_2015 | irrelevant | 0 | 0 | The paper is an epidemiological study on the burden of disease from air pollution and does not report pharmacokinetic parameters for nickel. |
| PD | Tainio_2015 | irrelevant | 0 | 0 | The paper is a burden of disease assessment that applies pre-existing exposure-response functions to population data, rather than reporting new toxicodynamic data or deriving specific dose-response parameters for nickel. |
| PGx | Tang_2025 | not_relevant | 0 | 0 | The paper investigates amoxicillin resistance in H. pylori bacteria, not human pharmacogenomics or the PK/PD of nickel. |
| popPK | Tejada-Tovar_2022 | irrelevant | 0 | 0 | The paper describes the adsorption of nickel ions from aqueous solutions onto a bioadsorbent, which is a chemical engineering/environmental study, not a pharmacokinetic study of nickel as a drug. |
| PD | Tejada-Tovar_2022 | irrelevant | 0 | 0 | The paper studies the adsorption of Nickel (II) onto oil palm waste for removal purposes, reporting a "dose-response" model fit for the breakthrough curve (a mass transfer/adsorption kinetic model), which is not a toxicodynamic adverse dose-response relationship. |
| popPK | Tian_2023 | irrelevant | 0 | 0 | The study is a cross-sectional epidemiological analysis of heavy metal exposure and renal function, not a pharmacokinetic study, and reports no disposition parameters for nickel. |
| popPK | Tosca_2025 | irrelevant | 0 | 0 | The paper is a review on the application of Large Language Models in pharmacometrics and does not contain any pharmacokinetic data or parameters for nickel. |
| PD | Tosca_2025 | irrelevant | 0 | 0 | The paper is a review on the application of Large Language Models in pharmacometrics and does not study Nickel or report any toxicodynamic data. |
| PGx | Ucar_2024 | not_relevant | 0 | 0 | The paper studies plant stress responses to heavy metals, not human pharmacogenomics or drug PK/PD. |
| PGx | Ugurlar_2023 | not_relevant | 0 | 0 | The paper studies plant physiology and nickel toxicity in pepper plants, not human pharmacogenomics or drug PK/PD. |
| PGx | Verma_2021 | not_relevant | 0 | 0 | The paper studies the physiological response of a cyanobacterium to nickel stress and signaling molecules, not the pharmacokinetics or pharmacodynamics of nickel in humans or animals. |
| PD | Wang_2021 | irrelevant | 0 | 0 | The paper studies the enzymatic activity of carboxylesterase genes in the insect *Plutella xylostella* and does not investigate the toxicodynamics or adverse dose-response relationship of Nickel. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper describes a diagnostic platform for detecting KCNJ5 mutations in primary aldosteronism and does not report pharmacokinetic or pharmacodynamic effects of nickel or any other drug. |
| popPK | Wills_1985 | irrelevant | 0 | 0 | The study measures trace metal concentrations in tissues and plasma but does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for nickel. |
| PGx | Wittenborn_2019 | not_relevant | 0 | 0 | The paper investigates the structural biology and assembly mechanism of a nickel-dependent enzyme (CODH) in bacteria, not the pharmacogenomics of nickel as a drug. |
| popPK | Xie_1994 | irrelevant | 2 | 0 | The study reports qualitative changes in tissue distribution and excretion rates following chelation, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model for nickel. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of daptomycin, not nickel. |
| PD | Xie_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the antibiotic daptomycin, not the metal nickel, so it contains no toxicodynamic data for the named substance. |
| PGx | Yadav_2024 | not_relevant | 0 | 0 | The paper describes the synthesis and anticancer activity of novel compounds, with nickel mentioned only as a catalyst in the synthesis process, not as a drug subject to pharmacogenomic analysis. |
| PD | Younes_2021 | irrelevant | 0 | 0 | The paper studies the food additive polydextrose (E 1200), not nickel; nickel is only mentioned as a trace impurity for which exposure limits are calculated, but no toxicodynamic dose-response data for nickel itself is reported. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic modeling for opioids (e.g., buprenorphine, methadone) in pregnancy and does not contain any data or parameters for the drug nickel. |
| PD | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic modeling for opioids in pregnancy and does not study Nickel or report any toxicodynamic data for it. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper investigates structural biology and protein-protein interactions of urease accessory proteins, not the pharmacokinetics or pharmacodynamics of nickel as a drug in humans. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not nickel. |
| PD | Zhang_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of imipenem, not Nickel, and therefore does not provide any toxicodynamic data for the target substance. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study on the association between heavy metal exposure and lung function, not a pharmacokinetic study, and reports no PK parameters for nickel. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for immunoglobulins (IVIg/SCIg), not nickel. |
| PD | van_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of immunoglobulins (IVIg/SCIg) and does not investigate Nickel or any of its metabolites. |
| popPK | Åström_2022 | irrelevant | 0 | 0 | The paper is a geochemical and epidemiological study on multiple sclerosis and soil metals, not a pharmacokinetic study reporting quantitative disposition parameters for nickel. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/toxins/toxin_nickel`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
