# dicoumarol

- **generic name:** dicoumarol
- **ATC codes:** `B01AA01`
- **DrugBank:** [DB00266](https://go.drugbank.com/drugs/DB00266)
- **groups:** approved

## About

**Description.** Dicoumarol is an oral anticoagulant agent that works by interfering with the metabolism of vitamin K. In addition to its clinical use, it is also used in biochemical experiments as an inhibitor of reductases.

**Indication.** For decreasing blood clotting. Often used along with heparin for treatment of deep vein thrombosis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:48 | 7:15 | 0/0/0 | 0/2/0 | 0/0/0 | 141,198/2,002 | ollama / qwen3.8:27b-mtp-q8_0 | 34 | 18/10 | 11/23 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Duhaiman_1996](drugs/drug_dicoumarol/pd_Duhaiman_1996_oxidoreductase_activity_of_camel_lens_alpha_cr.md) | Duhaiman AS, Inhibition of zeta-crystallin by Coumar…, Journal of protein chemistry (1996) | [10.1007/BF01887114](https://doi.org/10.1007/BF01887114) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2005](drugs/drug_dicoumarol/pd_Lee_2005_NQO1.md) | Lee YY et al., Human NAD(P)H:quinone oxidoreductase in…, Free radical biology & medi… (2005) | [10.1016/j.freeradbiomed.2005.03.013](https://doi.org/10.1016/j.freeradbiomed.2005.03.013) |

## Coverage

- **PubMed hits:** 59 matched, 59 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bloedow_1976 | irrelevant | 2 | 0 | The study focuses on the effect of lipids on bioavailability (extent and rate) rather than reporting quantitative disposition parameters like clearance, volume, or half-life for dicoumarol. |
| PGx | Chang_2026 | not_relevant | 0 | 0 | The paper uses dicoumarol as an inhibitor of NQO1 to study camphorquinone toxicity, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Chen_2011 | irrelevant | 0 | 0 | Dicoumarol is used as an NQO1 inhibitor to study aristolochic acid metabolism, not as the subject drug for PK parameter estimation. |
| popPK | Chickering_1996 | irrelevant | 2 | 0 | The study focuses on the characterization of bioadhesive microspheres and only qualitatively mentions increased bioavailability of dicoumarol without reporting specific quantitative PK parameters like clearance or volume. |
| popPK | Cummings_1992 | irrelevant | 0 | 0 | The study focuses on the enzymology of doxorubicin metabolism in rat tumours, using dicoumarol only as an in-vitro enzyme inhibitor rather than as the subject drug for pharmacokinetic analysis. |
| PD | Cummings_1992 | not_relevant | 1 | 1 | The paper reports an IC50 for dicoumarol as an enzyme inhibitor in an in vitro enzymology study, which is not a pharmacodynamic exposure-response relationship for the drug in a biological system. |
| popPK | Damanhouri_1988 | irrelevant | 2 | 0 | The study focuses on itraconazole's effect on enzyme activity using dicoumarol as a probe, and no quantitative PK parameter values for dicoumarol are provided in the evidence. |
| popPK | De_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NQO1 enzyme activity and dicoumarol is used only as an inhibitor, with no pharmacokinetic parameters reported. |
| PD | De_2002 | not_relevant | 3 | 2 | The paper mentions dicoumarol only as an inhibitor to test NQO1 thresholds, providing a qualitative comparison (5x EC50) rather than a quantitative exposure-response or dose-response analysis for dicoumarol itself. |
| popPK | Dong_2023 | irrelevant | 0 | 0 | The study focuses on a novel NQO1 inhibitor (skullcapflavone II) and uses dicoumarol only as a reference inhibitor for binding affinity and coagulation assays, without reporting any pharmacokinetic parameters for dicoumarol. |
| PD | Dong_2023 | not_relevant | 0 | 0 | The paper focuses on a novel NQO1 inhibitor (Skullcapflavone II) and only mentions dicoumarol as a reference compound with side effects; it does not report any pharmacodynamic or exposure-response data for dicoumarol. |
| popPK | Duhaiman_1996 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme inhibition study reporting IC50 and Ki values, not pharmacokinetic disposition parameters. |
| popPK | Eagling_1994 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of zidovudine, using dicoumarol only as a DT-diaphorase inhibitor probe rather than as the subject drug for PK parameter estimation. |
| popPK | Feng_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of genipin-induced apoptosis where dicoumarol is used solely as a JNK inhibitor tool compound, with no pharmacokinetic parameters reported. |
| PD | Feng_2011 | not_relevant | 4 | 4 | The paper reports an IC50 and dose-response data for genipin, but dicoumarol is used only as a qualitative inhibitor to block the pathway, with no exposure-response or dose-response analysis or numeric PD parameters reported for dicoumarol itself. |
| popPK | Freedman_1994 | irrelevant | 1 | 0 | This is a review article focused on drug interactions with oral anticoagulants (primarily warfarin) and does not report original quantitative pharmacokinetic parameters for dicoumarol. |
| PD | Freedman_1994 | not_relevant | 1 | 0 | The text is a general review of drug interactions with oral anticoagulants and does not provide specific numeric PD parameters or concentration-effect data for dicoumarol. |
| popPK | Ge_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of dicoumarol's effect on NLRP3 inflammasome activation in osteoarthritis and does not report any pharmacokinetic parameters. |
| PGx | Glorieux_2019 | not_relevant | 0 | 0 | The paper investigates the effect of NQO1 polymorphisms on cancer cell sensitivity to quinones (like menadione and doxorubicin), using dicoumarol only as a tool to modulate NQO1 expression, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Graumann_2002 | not_relevant | 0 | 0 | The paper uses dicoumarol as a tool compound to inhibit DT-diaphorase in a neurotoxicity model, not to study the pharmacokinetics or pharmacodynamics of dicoumarol itself in relation to genetic variants. |
| popPK | Haider_2023 | irrelevant | 0 | 0 | The paper is a clinical case report on brodifacoum intoxication where dicoumarol is only mentioned as a related compound, and no pharmacokinetic parameters for dicoumarol are reported. |
| popPK | Huang_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP inhibition by mushroom compounds, where dicoumarol is used only as a positive control and no pharmacokinetic parameters for dicoumarol are reported. |
| PD | Huang_2009 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition data for mushroom compounds and only mentions dicoumarol as a qualitative reference standard; it does not report any PD or exposure-response relationship for dicoumarol. |
| PGx | Huang_2009 | not_relevant | 0 | 0 | The paper investigates food-drug interactions involving mushroom compounds and CYP enzymes, using dicoumarol only as a reference inhibitor, and does not report any pharmacogenomic effects on dicoumarol's PK or PD. |
| popPK | Itharat_2012 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on dioscoreanone where dicoumarol is used only as a tool compound to inhibit redox cycling, with no pharmacokinetic parameters reported. |
| PD | Itharat_2012 | not_relevant | 0 | 0 | The paper studies dioscoreanone, not dicoumarol; dicoumarol is only mentioned as an inhibitor of NQOR in the mechanism of action. |
| popPK | Kammari_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro biological activity of dicoumarol derivatives as anti-HIV agents, containing no pharmacokinetic data. |
| PD | Kammari_2017 | not_relevant | 2 | 1 | The paper reports only a single IC50 value (&lt;25 nM) for a lead compound in a kinase assay, which is a standard pharmacological potency metric, not a pharmacodynamic (exposure-response) relationship or model with derivable PD parameters like Emax or EC50 curves. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis, structural characterization, and in-vitro cytotoxicity of dicoumarol derivatives, containing no pharmacokinetic or disposition parameters. |
| PGx | Kobayashi_2013 | not_relevant | 0 | 0 | The paper studies benzbromarone toxicity and uses dicoumarol only as a tool compound to inhibit NQO1, not as the subject of a pharmacogenomic study. |
| popPK | Kudugunti_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CAPE toxicity where dicoumarol is used only as a diaphorase inhibitor modulator, with no pharmacokinetic parameters reported. |
| PD | Kudugunti_2010 | not_relevant | 0 | 0 | The paper focuses on the mechanism of CAPE toxicity; dicoumarol is only mentioned as a tool compound to modulate toxicity, with no exposure-response or dose-response analysis for dicoumarol itself. |
| popPK | Lavanya_2023 | irrelevant | 0 | 0 | The study is an in-vitro biophysical investigation of DNA binding and antioxidant activity, not a pharmacokinetic study reporting disposition parameters for dicoumarol. |
| PD | Lavanya_2023 | not_relevant | 0 | 0 | The paper reports biophysical binding constants (Kb, KSV) for a coumarin analog (CDC) with DNA, not a pharmacodynamic exposure-response or dose-response relationship for dicoumarol. |
| popPK | Lavanya_2024 | irrelevant | 0 | 0 | The study is an in-vitro biophysical investigation of dicoumarol-DNA binding interactions and does not report any pharmacokinetic parameters. |
| PD | Lavanya_2024 | not_relevant | 0 | 0 | The paper reports biophysical binding constants (Kb) for dicoumarol-DNA interaction, which are physicochemical parameters, not pharmacodynamic (exposure-response) parameters like Emax or EC50 for a biological effect. |
| popPK | Lee_2005 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic assay measuring NQO1 inhibition by dicoumarol, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study is an in-vitro Caco-2 cell permeability assay, not a pharmacokinetic study reporting disposition parameters like clearance or volume for dicoumarol. |
| popPK | Li_2003 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on oxidative stress where dicoumarol is used only as a negative control antagonist, with no pharmacokinetic parameters reported. |
| PD | Li_2003 | not_relevant | 0 | 0 | The paper reports that dicoumarol has no effect on the protective function of vitamin K, providing no numeric dose-response or exposure-response parameters for dicoumarol. |
| popPK | Macheras_1986 | irrelevant | 2 | 0 | The study focuses on bioavailability comparisons (AUC, Cmax) and in-vitro solubility rather than reporting specific quantitative disposition parameters like clearance, volume, or half-life for dicoumarol. |
| popPK | Megarity_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition and binding cooperativity, not a pharmacokinetic study reporting disposition parameters for dicoumarol. |
| popPK | Melander_1978 | irrelevant | 0 | 0 | The paper is a review discussing the general influence of food on bioavailability and mentions dicoumarol only as an example without providing any quantitative pharmacokinetic parameters. |
| popPK | Melander_1978_2 | relevant | 8 | 2 | The study reports dicoumarol PK (AUC) but lacks specific numeric values for clearance, volume, or half-life in the provided text. |
| popPK | Melkoumian_2005 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study where dicoumarol is used only as a tool compound (NQO1 inhibitor) and no pharmacokinetic parameters are reported. |
| PGx | Merk_1991 | not_relevant | 0 | 0 | The paper studies NQR enzyme activity in skin and liver, using dicoumarol only as an inhibitor, and does not report pharmacogenomic effects on dicoumarol's PK or PD parameters. |
| popPK | Nishiyama_1993 | irrelevant | 0 | 0 | The study focuses on the mechanism of mitomycin C activation in cell lines, using dicoumarol only as an enzyme inhibitor, and reports no pharmacokinetic parameters for dicoumarol. |
| PD | Nishiyama_1993 | not_relevant | 0 | 0 | The paper investigates the mechanism of Mitomycin C activation by DT-diaphorase and uses dicoumarol only as a qualitative inhibitor to demonstrate this mechanism; it does not report a pharmacodynamic exposure-response or dose-response relationship for dicoumarol itself. |
| popPK | Nishiyama_1993_2 | irrelevant | 0 | 0 | The study investigates dicoumarol as a DT-diaphorase inhibitor to modulate mitomycin C cytotoxicity, not as a subject drug for pharmacokinetic analysis. |
| PD | Nishiyama_1993_2 | not_relevant | 1 | 0 | The paper investigates the relationship between DT-diaphorase activity and Mitomycin C efficacy, using dicoumarol only as a qualitative inhibitor to modulate this effect, without reporting any exposure-response or dose-response parameters for dicoumarol itself. |
| popPK | Nowak_2002 | irrelevant | 0 | 0 | The paper is a review discussing direct thrombin inhibitors and only mentions dicoumarol derivatives as a comparator class without providing any quantitative pharmacokinetic parameters for dicoumarol. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The paper discusses direct thrombin inhibitors and dicoumarol derivatives generally but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Perucca_1982 | irrelevant | 0 | 0 | The paper is a review of drug interactions where dicoumarol is mentioned only as an interacting agent affecting phenytoin, with no original pharmacokinetic parameters reported for dicoumarol itself. |
| PD | Perucca_1982 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetic interactions and mentions that enzyme induction decreases the clinical efficacy of dicoumarol, but it provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Phillips_1996 | irrelevant | 0 | 0 | The study focuses on the bioreductive activation of indoloquinone analogues (E09, E04, etc.) by DT-diaphorase, using dicoumarol only as an enzyme inhibitor, and does not report pharmacokinetic parameters for dicoumarol. |
| PD | Phillips_1996 | not_relevant | 3 | 2 | The paper reports IC50 values for the test compounds (EO4, EO9, EO68) and mentions that dicoumarol inhibits the activation of EO4, but it does not provide numeric PD parameters (such as Ki, IC50, or concentration-effect curves) for dicoumarol itself. |
| popPK | Pond_1975 | irrelevant | 2 | 0 | The study reports qualitative changes in half-life for dicoumarol in only one subject without providing quantitative PK parameter values (CL, V, etc.) in the evidence. |
| popPK | Qadir_2022 | irrelevant | 0 | 0 | The paper focuses on the anticancer mechanism of β-lapachone, using dicoumarol only as a mechanistic inhibitor of NQO1, and reports no pharmacokinetic parameters for dicoumarol. |
| popPK | Rehman_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro biological activities (cytotoxicity, antimicrobial) of dicoumarol salts, containing no pharmacokinetic data. |
| popPK | Riley_1992 | irrelevant | 0 | 0 | The study investigates the in-vitro metabolism of SR 4233 by DT-diaphorase, using dicoumarol only as a specific enzyme inhibitor rather than as the subject drug for pharmacokinetic analysis. |
| PD | Riley_1992 | not_relevant | 0 | 0 | The paper reports in vitro enzymology (Km/Vmax) for the reduction of SR 4233 by DT-diaphorase and mentions dicoumarol only as a qualitative inhibitor, providing no exposure-response or dose-response PD relationship for dicoumarol. |
| popPK | Roy_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-nitroso-BP, and dicoumarol is only used as an in-vitro inhibitor to characterize enzyme activity, not as the subject drug. |
| popPK | Silva_2026 | irrelevant | 0 | 0 | The study focuses on the cytotoxicity and molecular docking of oxime β-lapachone, with dicoumarol mentioned only as a comparator for binding energy in docking simulations, and no PK parameters for dicoumarol are reported. |
| PD | Silva_2026 | not_relevant | 0 | 0 | The paper studies the pharmacology of oxime β-lapachone (Oxβ-Lp), not dicoumarol; dicoumarol is only mentioned as a reference compound in molecular docking. |
| popPK | Simijonović_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro enzymatic inhibition (LOX) of dicoumarol derivatives, containing no pharmacokinetic data. |
| PD | Simijonović_2018 | not_relevant | 3 | 3 | The paper reports single-point IC50 values for enzyme inhibition (LOX) of dicoumarol derivatives, which is a pharmacological potency metric, but it does not provide a full concentration-effect curve, Emax, or a PK/PD model fit required for extractable pharmacodynamic relationship parameters. |
| popPK | Smitskamp-Wilms_1994 | irrelevant | 0 | 0 | The paper concerns chemosensitivity to the indoloquinone EO9 and DT-diaphorase activity, with no mention of dicoumarol or its pharmacokinetic parameters. |
| PD | Smitskamp-Wilms_1994 | not_relevant | 0 | 0 | The paper discusses the chemosensitivity of the indoloquinone EO9 and its correlation with DT-diaphorase activity, not dicoumarol, and does not report PD parameters for dicoumarol. |
| popPK | Takatsuki_1969 | irrelevant | 0 | 0 | The study is an in-vitro virology experiment examining the antiviral effects of dicoumarol, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Takatsuki_1969 | not_relevant | 0 | 0 | The paper focuses on ascochlorin and rotenone; dicoumarol is listed as a tested compound but no dose-response data or PD parameters are reported for it. |
| popPK | Talstad_1994 | irrelevant | 0 | 0 | The paper is a case report on warfarin resistance where dicoumarol is only mentioned as a comparator drug with no quantitative pharmacokinetic parameters reported. |
| popPK | Thanos_2003 | irrelevant | 2 | 0 | The study reports relative bioavailability and pharmacokinetic descriptors (Tmax, Cmax) but does not provide quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Thanos_2003_2 | relevant | 8 | 2 | The study reports relative bioavailability percentages for dicoumarol formulations in swine but lacks absolute quantitative PK parameters like clearance, volume, or half-life. |
| popPK | Vad_2008 | irrelevant | 0 | 0 | The study investigates the in vitro metabolism and toxicity of 4-hydroxybenzoate, using dicoumarol only as a diaphorase inhibitor/modulator, and reports no pharmacokinetic parameters for dicoumarol. |
| PD | Vad_2008 | not_relevant | 0 | 0 | The paper investigates the toxicity of ethyl 4-hydroxybenzoate (4-HEB), not dicoumarol; dicoumarol is only mentioned as a diaphorase inhibitor used to modulate 4-HEB toxicity, and no PD parameters for dicoumarol itself are reported. |
| popPK | Vad_2009 | irrelevant | 0 | 0 | The study investigates the biochemical mechanism of acetaminophen toxicity in melanoma cells, using dicoumarol only as a diaphorase inhibitor/modulator, and reports no pharmacokinetic parameters for dicoumarol. |
| PD | Vad_2009 | not_relevant | 0 | 0 | The paper focuses on the mechanism of acetaminophen toxicity; dicoumarol is only mentioned as a qualitative enhancer of toxicity without any reported concentration-effect data or numeric PD parameters. |
| popPK | Yacobi_1975 | relevant | 9 | 2 | The study reports quantitative PK parameters (half-life, volume, clearance) for dicoumarol in rats, but specific numeric values for clearance and volume are not explicitly listed in the provided text, only ranges and ratios. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of dicoumarol as an NQO1 inhibitor in cancer cells, not the effect of genetic variants on dicoumarol pharmacokinetics or pharmacodynamics. |
| PGx | Yu_2013 | not_relevant | 0 | 0 | The paper studies the metabolism of BYZX, using dicoumarol only as a chemical inhibitor to identify the enzyme responsible for a specific reaction, rather than reporting a pharmacogenomic effect on dicoumarol's PK/PD. |
| popPK | Zaheer_2015 | irrelevant | 0 | 0 | The paper studies bis-(4-hydroxycoumarin-3-yl) methane derivatives as antileishmanial agents, not the drug dicoumarol, and contains no pharmacokinetic parameters for dicoumarol. |
| PD | Zaheer_2015 | not_relevant | 2 | 2 | The paper reports IC50 values for novel bis-coumarin derivatives, not for dicoumarol, and provides no exposure-response or PK/PD modeling. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dicoumarol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
