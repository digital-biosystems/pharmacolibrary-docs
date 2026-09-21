<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;Tocopherol&quot;}]"></div>

# Tocopherol

- **generic name:** Tocopherol
- **ATC codes:** `A11HA03`
- **DrugBank:** [DB11251](https://go.drugbank.com/drugs/DB11251)
- **groups:** approved, investigational

## About

**Description.** Tocopherol exists in four different forms designated as α, β, δ, and γ. They present strong antioxidant activities, and it is determined as the major form of vitamin E. Tocopherol, as a group, is composed of soluble phenolic compounds that consist of a chromanol ring and a 16-carbon phytyl chain. The classification of the tocopherol molecules is designated depending on the number and position of the methyl substituent in the chromanol ring. The different types of tocopherol can be presented trimethylated, dimethylated or methylated in the positions 5-, 7- and 8-. When the carbons at position 5- and 7- are not methylated, they can function as electrophilic centers that can trap reactive oxygen and nitrogen species. Tocopherols can be found in the diet as part of vegetable oil such as corn, soybean, sesame, and cottonseed.[A32436] It is currently under the list of substances generally recognized as safe (GRAS) in the FDA for the use of human consumption.[L2114]

**Indication.** Tocopherol can be used as a dietary supplement for patients with a deficit of vitamin E; this is mainly prescribed in the alpha form.[A32443] Vitamin E deficiency is rare, and it is primarily found in premature babies of very low birth weight, patients with fat malabsorption or patients with abetalipoproteinemia.[L2120]

Tocopherol, due to its antioxidant properties, is studied for its use in prevention or treatment in different complex diseases such as cancer,[A32436] atherosclerosis, cardiovascular diseases,[A32442] and age-related macular degeneration.[A32444]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 27 | 5/14 | 25/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tocopherol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transporter | DrugBank actor |
| absorption | kidney | `ABCB1` transporter | DrugBank actor |
| absorption | liver | `ABCB1` transporter | DrugBank actor |
| absorption | placenta | `ABCB1` transporter | DrugBank actor |
| absorption | small intestine | `ABCB1` transporter | DrugBank actor |
| metabolism | bile duct | <sub>“…These intermediate-chain metabolites can be found in human feces and urine. The catabolic…”</sub> | prose |
| metabolism | kidney | `CYP4F2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP4F2` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…fferent conjugated metabolites are excreted in the urine or feces depending on the length…”</sub> | prose |
| excretion | kidney | <sub>“…7] The different conjugated metabolites are excreted in the urine or feces depending on th…”</sub> | prose |

<sub>Actors without a tissue in the table: APOBR (transporter), Free radicals (binder), LDLR (binder), SCARB1 (transporter), SEC14L2 (substrate), SEC14L3 (substrate), SEC14L4 (substrate), TTPA (substrate), VLDLR (binder).</sub>

## Coverage

- **PubMed hits:** 1019 matched, 100 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hidiroglou_1996.pdf` | Hidiroglou M, Pharmacokinetic profile of plasma tocop…, Journal of dairy science (1996) | popPK | 10 | [10.3168/jds.S0022-0302(96)76455-X](https://doi.org/10.3168/jds.S0022-0302(96)76455-X) | [8827467](https://pubmed.ncbi.nlm.nih.gov/8827467) | The study reports quantitative pharmacokinetic parameters (Ka, half-life, AUC) for tocopherol in sheep, with all numeric values explicitly present in the text. |
| `Hidiroglou_1991.pdf` | Hidiroglou M, Plasma kinetics of tritiated d-alpha-to…, Annales de recherches veter… (1991) | popPK | 9 | not captured | [1809212](https://pubmed.ncbi.nlm.nih.gov/1809212) | The study reports quantitative PK modeling (2- and 3-compartment) for tocopherol in sheep, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Bateman_1985.pdf` | Bateman NE et al., Kinetics of D-alpha-tocopherol in a wat…, The Journal of pharmacy and… (1985) | popPK | 8 | [10.1111/j.2042-7158.1985.tb04952.x](https://doi.org/10.1111/j.2042-7158.1985.tb04952.x) | [2867143](https://pubmed.ncbi.nlm.nih.gov/2867143) | The study investigates tocopherol PK in humans using a compartmental model, but the evidence only provides plasma concentration data (Cmax, C24h) rather than explicit quantitative disposition parameters like clearance, volume, or half-life. |
| `Hidiroglou_1992.pdf` | Hidiroglou M et al., Biokinetics and biliary excretion of ra…, Journal of animal science (1992) | popPK | 8 | [10.2527/1992.7041220x](https://doi.org/10.2527/1992.7041220x) | [1316347](https://pubmed.ncbi.nlm.nih.gov/1316347) | The study describes a two-compartment PK model for tocopherol in sheep, but specific numeric parameter values (CL, V, t1/2) are not provided in the text. |
| `Hidiroglou_1993.pdf` | Hidiroglou M, Assessment of the oral administration o…, Veterinary research (1993) | popPK | 8 | not captured | [8111430](https://pubmed.ncbi.nlm.nih.gov/8111430) | The study reports a 2-compartment PK model for tocopherol in sheep, but the specific numeric parameter values are not present in the provided evidence. |
| `Watanabe_2021.pdf` | Watanabe A et al., Pharmacokinetic-pharmacodynamic modelin…, Biopharmaceutics & drug dis… (2021) | pd | 5 | [10.1002/bdd.2271](https://doi.org/10.1002/bdd.2271) | [33724506](https://www.ncbi.nlm.nih.gov/pubmed/33724506) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `de_1990.pdf` | de Whalley CV et al., Flavonoids inhibit the oxidative modifi…, Biochemical pharmacology (1990) | pd | 5 | [10.1016/0006-2952(90)90120-a](https://doi.org/10.1016/0006-2952(90)90120-a) | [2344371](https://www.ncbi.nlm.nih.gov/pubmed/2344371) | metadata signals extractable PD data (IC50) |
| `Cantele_2020.pdf` | Cantele C et al., Antioxidant Effects of Hemp (Cannabis s…, Antioxidants (Basel, Switze… (2020) | pd | 4 | [10.3390/antiox9111131](https://doi.org/10.3390/antiox9111131) | [33202647](https://www.ncbi.nlm.nih.gov/pubmed/33202647) | metadata signals extractable PD data (EC50) |
| `Dumandan_2022.pdf` | Dumandan NG et al., Extraction, Profiling, and Characteriza…, Biochemistry research inter… (2022) | pd | 4 | [10.1155/2022/6604984](https://doi.org/10.1155/2022/6604984) | [36606186](https://www.ncbi.nlm.nih.gov/pubmed/36606186) | metadata signals extractable PD data (EC50) |
| `Findik_2024.pdf` | Findik BT et al., Phytochemical profile, enzyme inhibitio…, Food chemistry (2024) | pd | 4 | [10.1016/j.foodchem.2024.139921](https://doi.org/10.1016/j.foodchem.2024.139921) | [38843718](https://www.ncbi.nlm.nih.gov/pubmed/38843718) | metadata signals extractable PD data (IC50) |
| `Khan_2016.pdf` | Khan H et al., Antioxidant and Antiplasmodial Activiti…, Oxidative medicine and cell… (2016) | pd | 4 | [10.1155/2016/1051925](https://doi.org/10.1155/2016/1051925) | [26998192](https://www.ncbi.nlm.nih.gov/pubmed/26998192) | metadata signals extractable PD data (EC50) |
| `Masaki_1995.pdf` | Masaki H et al., Peroxyl radical scavenging activities o…, Free radical research (1995) | pd | 4 | [10.3109/10715769509147550](https://doi.org/10.3109/10715769509147550) | [7633570](https://www.ncbi.nlm.nih.gov/pubmed/7633570) | metadata signals extractable PD data (IC50) |
| `Yamamoto_1984.pdf` | Yamamoto T et al., Effects of fatty acids on activity of c…, Archives of biochemistry an… (1984) | pd | 4 | [10.1016/0003-9861(84)90132-2](https://doi.org/10.1016/0003-9861(84)90132-2) | [6322693](https://www.ncbi.nlm.nih.gov/pubmed/6322693) | metadata signals extractable PD data (IC50) |
| `Clarke_2009.pdf` | Clarke MW et al., Vitamin E supplementation and hepatic d…, Journal of cardiovascular p… (2009) | pgx | 7 | [10.1097/FJC.0b013e3181bfae18](https://doi.org/10.1097/FJC.0b013e3181bfae18) | [19755916](https://www.ncbi.nlm.nih.gov/pubmed/19755916) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Perepechaeva_2022.pdf` | Perepechaeva ML et al., Effects of prolonged subchronic benzo(α…, Drug and chemical toxicology (2022) | pgx | 7 | [10.1080/01480545.2020.1849270](https://doi.org/10.1080/01480545.2020.1849270) | [33213213](https://www.ncbi.nlm.nih.gov/pubmed/33213213) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |

<sub>queue written 2026-09-16T11:57:24.259358+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Agyare_2013 | not_relevant | 0 | 0 | The paper reports MICs and IC50s for plant extracts and uses tocopherol only as a reference standard for antioxidant activity, without providing a pharmacodynamic model or exposure-response relationship for tocopherol itself. |
| popPK | Alum_2025 | irrelevant | 0 | 0 | The study focuses on the neuroprotective effects of Jimson weed extract against methotrexate-induced toxicity and does not involve tocopherol or report any pharmacokinetic parameters. |
| PD | Alum_2025 | not_relevant | 0 | 0 | The paper studies Jimson weed extract, not Tocopherol, and reports only qualitative group comparisons without numeric PD parameters or exposure-response modeling. |
| popPK | Azevedo_2021 | irrelevant | 0 | 0 | The paper is an in silico study of enzymatic tunnels for biotransformation and does not report pharmacokinetic parameters for tocopherol. |
| PD | Azevedo_2021 | not_relevant | 0 | 0 | The paper is an in silico structural analysis of enzymatic tunnels for biotransformation and does not report any pharmacodynamic, exposure-response, or dose-response relationships for Tocopherol. |
| popPK | Bateman_1985 | relevant | 8 | 2 | The study investigates tocopherol PK in humans using a compartmental model, but the evidence only provides plasma concentration data (Cmax, C24h) rather than explicit quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Bulitta_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel, with tocopherol serving only as a formulation vehicle (Tocosol) rather than the subject drug. |
| popPK | Cantele_2020 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Cantele_2020 | not_relevant | 0 | 0 | The paper investigates the antioxidant stability of linseed oil using hemp extract, not the pharmacodynamics of Tocopherol in a biological system. |
| popPK | Chow_1995 | irrelevant | 0 | 0 | The study investigates the stability of liposomes and the role of alpha-tocopherol as an antioxidant, not the pharmacokinetics of tocopherol. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not report pharmacokinetic parameters for tocopherol. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a general review of phytochemicals and biological activities in the Helianthus genus and does not report specific pharmacodynamic or exposure-response data for Tocopherol. |
| popPK | Dumandan_2022 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| PD | Dumandan_2022 | not_relevant | 0 | 0 | The paper focuses on the extraction and characterization of phytosterols and triterpenoids from Pili pulp oil, not on the pharmacokinetics or pharmacodynamics of Tocopherol. |
| PD | Durmaz_2022 | not_relevant | 0 | 0 | The paper investigates Magnofluorine, not Tocopherol; Tocopherol is only used as a positive control in in vitro antioxidant assays, and no pharmacodynamic model or exposure-response relationship for Tocopherol is reported. |
| popPK | Encinas-Valero_2022 | irrelevant | 0 | 0 | The study is an ecological/physiological analysis of tocopherol concentrations in oak leaves as stress markers, not a pharmacokinetic study. |
| PD | Findik_2024 | not_relevant | 0 | 0 | The paper focuses on the phytochemical profile and in vitro bioactivity (enzyme inhibition, antioxidant, antibacterial) of Rosa pimpinellifolia, not on the pharmacokinetics or pharmacodynamics of Tocopherol in a biological system. |
| PD | Fraisse_1993 | not_relevant | 1 | 1 | The paper reports IC50 values for novel compounds compared to alpha-tocopherol, but does not provide a concentration-effect curve or numeric PD parameters for Tocopherol itself. |
| popPK | Fujinami_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of radical scavenging activity, not a pharmacokinetic study, and tocopherol is used only as a comparator. |
| popPK | Gonzalez_2022 | irrelevant | 0 | 0 | The study is an in-vitro embryology experiment using lycopene, with tocopherol mentioned only as a comparative antioxidant, and no pharmacokinetic parameters are reported. |
| PD | Grisar_1991 | not_relevant | 3 | 2 | The paper reports a single-dose efficacy result (54% reduction at 1 mg/kg/h) and an in vitro IC50, but lacks a dose-response curve or PK/PD model to derive standard PD parameters like Emax or EC50 for the in vivo effect. |
| popPK | Główka_2024 | irrelevant | 0 | 0 | The study measures plasma concentrations of tocopherol in CVD patients to assess nutritional status and psychosocial factors, but does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Główka_2024 | not_relevant | 0 | 0 | The study is a cross-sectional observational analysis of vitamin concentrations and psychosocial factors in CVD patients, reporting no pharmacodynamic modeling, dose-response curves, or numeric PD parameters for tocopherol. |
| popPK | Hidiroglou_1991 | relevant | 9 | 0 | The study reports quantitative PK modeling (2- and 3-compartment) for tocopherol in sheep, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Hidiroglou_1992 | relevant | 8 | 2 | The study describes a two-compartment PK model for tocopherol in sheep, but specific numeric parameter values (CL, V, t1/2) are not provided in the text. |
| popPK | Hidiroglou_1993 | relevant | 8 | 0 | The study reports a 2-compartment PK model for tocopherol in sheep, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Hishinuma_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tocopherol's protective effects on hepatocyte cytolysis and glutathione levels, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Huang_2019 | not_relevant | 3 | 2 | The paper reports epidemiological hazard ratios for mortality across quintiles of serum alpha-tocopherol, which is an observational association rather than a pharmacodynamic exposure-response model with numeric PD parameters like Emax or EC50. |
| PD | Janero_1989 | not_relevant | 0 | 0 | The paper does not report a pharmacodynamic or exposure-response relationship for Tocopherol; it only mentions alpha-tocopherol qualitatively as a known antioxidant with a similar profile to the tested oxygenase inhibitors. |
| popPK | Jungert_2020 | irrelevant | 0 | 0 | The study is a longitudinal epidemiological analysis of plasma concentrations and determinants, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kabran_2015 | irrelevant | 0 | 0 | The paper is a phytochemical study isolating compounds and testing in vitro antiparasitic activity, with no pharmacokinetic data for tocopherol. |
| PD | Kabran_2015 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity (EC50/LC100) for phloroglucinols and other compounds, but does not report a pharmacodynamic or exposure-response relationship for Tocopherol. |
| PD | Kaufman_1994 | not_relevant | 0 | 0 | The paper focuses on captopril and ascorbic acid; tocopherol is only mentioned as a negative control in a mixture, with no specific PD parameters or dose-response analysis reported for it. |
| popPK | Khan_2016 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Khan_2016 | not_relevant | 0 | 0 | The paper focuses on Bergenin and 11-O-Galloylbergenin, not Tocopherol, and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on bicyclo[1.1.1]pentane derivatives and does not report pharmacokinetic parameters for tocopherol, which is only mentioned as a substrate for functionalization. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper is a synthetic chemistry study on the synthesis of bicyclo[1.1.1]pentane derivatives and contains no pharmacodynamic, exposure-response, or dose-response data for Tocopherol or any other drug. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is a clinical trial on probiotics and GI function where tocopherol is only mentioned as a fecal metabolite biomarker, with no pharmacokinetic parameters reported. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study is an epidemiological analysis of dietary intake and cognitive decline, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Lozada-García_2017 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro cytotoxic/antioxidant screening of curcumin derivatives; α-tocopherol is used only as a reference standard in antioxidant assays, and no pharmacodynamic or exposure-response relationship for tocopherol is reported. |
| popPK | Luo_2008 | irrelevant | 0 | 0 | The paper analyzes smoking cessation patterns in the ATBC study and does not report any pharmacokinetic parameters for tocopherol. |
| popPK | Lőrincz_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell death pathways where tocopherol is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Lőrincz_2019 | not_relevant | 0 | 0 | The paper focuses on the mechanism of ascorbate-induced cell death and mentions tocopherol only as a qualitative inhibitor of ferroptosis, without providing any numeric PD parameters or dose-response data for tocopherol. |
| PD | Masaki_1995 | not_relevant | 0 | 0 | The paper focuses on the antioxidant activity of hamamelitannin, not Tocopherol, and does not report pharmacodynamic or exposure-response relationships for the target drug. |
| popPK | Mnisi_2025 | irrelevant | 0 | 0 | The paper is a review of the plant Senna petersiana and mentions tocopherol only as a phytochemical constituent, providing no pharmacokinetic data or disposition parameters. |
| PD | Mnisi_2025 | not_relevant | 0 | 0 | The paper is a review of Senna petersiana and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not report pharmacokinetic parameters for tocopherol. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain specific data, models, or numeric PD parameters for Tocopherol. |
| popPK | Paemanee_2018 | irrelevant | 0 | 0 | The study is an in-vitro screening for anti-dengue virus activity and does not report any pharmacokinetic parameters for tocopherol. |
| PD | Paemanee_2018 | not_relevant | 1 | 0 | The paper reports that alpha-tocopherol slightly increased DENV infection levels but does not provide numeric dose-response parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for this compound. |
| popPK | Prom_2022 | irrelevant | 0 | 0 | The study focuses on β-carotene supplementation and transfer, with α-tocopherol serving only as a secondary metabolite measured for concentration changes rather than as the subject of a pharmacokinetic analysis. |
| popPK | Saldanha_2023 | irrelevant | 0 | 0 | The paper is a review on in silico studies for vaccine development and does not report any pharmacokinetic parameters for tocopherol. |
| PD | Saldanha_2023 | not_relevant | 0 | 0 | The paper is a review of in silico methods for vaccine development and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| popPK | Sebastiani_2020 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of vitamin E for NASH and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tocopherol. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer therapy and does not report quantitative pharmacokinetic parameters for tocopherol. |
| PD | Talath_2026 | not_relevant | 0 | 0 | The text is a general review of natural supplements in breast cancer and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for Tocopherol. |
| popPK | Thanishka_2026 | irrelevant | 0 | 0 | The paper focuses on the formulation and in vitro evaluation of a herbal suppository containing Peperomia pellucida and does not study tocopherol or report any pharmacokinetic parameters. |
| PD | Thanishka_2026 | not_relevant | 0 | 0 | The paper studies Peperomia pellucida, not Tocopherol, and reports in vitro IC50 values for a plant extract rather than a pharmacodynamic model for the specified drug. |
| PD | Tung_2013 | not_relevant | 0 | 0 | The paper reports IC50 values for other compounds (isobruceine B, etc.) but does not provide any cytotoxicity data, IC50, or PD parameters for α-tocopherol (compound 8). |
| popPK | Watanabe_2021 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Watanabe_2021 | not_relevant | 0 | 0 | The paper focuses on antisense oligonucleotides, not Tocopherol, and does not report PD parameters for the specified drug. |
| popPK | Yamamoto_1984 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Yamamoto_1984 | not_relevant | 0 | 0 | The paper investigates the effects of fatty acids on phosphodiesterase activity and does not mention Tocopherol or report any exposure-response or dose-response data for it. |
| popPK | Yang_2006 | irrelevant | 0 | 0 | The paper studies the antioxidant properties of a plant extract and uses tocopherol only as a comparator in in-vitro assays, reporting no pharmacokinetic parameters. |
| PD | Yang_2006 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) for plant extracts, not a pharmacodynamic or exposure-response relationship for the drug Tocopherol in a biological system. |
| PD | Yoshino_1994 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding Tocopherol or pharmacodynamics. |
| PD | Yue_1992 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (IC50) for Carvedilol, not Tocopherol. |
| popPK | Zhakipbekov_2026 | irrelevant | 0 | 0 | The paper is a review of the plant Cirsium arvense and does not report pharmacokinetic parameters for tocopherol, which is only mentioned as a standard antioxidant comparator. |
| PD | Zhakipbekov_2026 | not_relevant | 0 | 0 | The paper is a narrative review of the plant Cirsium arvense and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| PD | de_1990 | not_relevant | 0 | 0 | The paper focuses on flavonoids and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| PD | de_2020 | not_relevant | 0 | 0 | The paper studies plant extracts (Eugenia pyriformis) and uses tocopherol only as a qualitative positive control for antioxidant activity; it does not report a pharmacodynamic or exposure-response relationship for tocopherol itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tocopherol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
