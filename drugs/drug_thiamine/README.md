<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11D&quot;,&quot;href&quot;:&quot;atc/A11D.md&quot;},{&quot;label&quot;:&quot;Thiamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiamine_Rindi1980_rats&quot;,&quot;label&quot;:&quot;Rindi_1980_rats&quot;,&quot;href&quot;:&quot;drugs/drug_thiamine/Thiamine_Rindi1980_rats.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# Thiamine

- **generic name:** Thiamine
- **ATC codes:** `A11DA01`
- **DrugBank:** [DB00152](https://go.drugbank.com/drugs/DB00152)
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

**Description.** Thiamine or thiamin, also known as vitamin B1, is a colorless compound with the chemical formula C12H17N4OS. It is soluble in water and insoluble in alcohol. Thiamine decomposes if heated. Thiamine was first discovered by Umetaro Suzuki in Japan when researching how rice bran cured patients of Beriberi. Thiamine plays a key role in intracellular glucose metabolism and it is thought that thiamine inhibits the effect of glucose and insulin on arterial smooth muscle cell proliferation. Thiamine plays an important role in helping the body convert carbohydrates and fat into energy. It is essential for normal growth and development and helps to maintain proper functioning of the heart and the nervous and digestive systems. Thiamine cannot be stored in the body; however, once absorbed, the vitamin is concentrated in muscle tissue.

**Indication.** For the treatment of thiamine and niacin deficiency states, Korsakov's alcoholic psychosis, Wernicke-Korsakov syndrome, delirium, and peripheral neuritis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 04:32 | 30:08 | 0/0/0 | 4/0/0 | 0/0/0 | 224,992/17,689 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 3/17 | 19/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Rindi_1980_rats](drugs/drug_thiamine/Thiamine_Rindi1980_rats.md) | Rindi G et al., Thiamine content and turnover rates of…, Brain research (1980) | [10.1016/0006-8993(80)90619-8](https://doi.org/10.1016/0006-8993(80)90619-8) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bettendorff_1994](drugs/drug_thiamine/pd_Bettendorff_1994_thiamine_uptake.md) | Bettendorff L et al., Mechanism of thiamine transport in neur…, The Journal of biological c… (1994) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hoetzel_2026](drugs/drug_thiamine/pd_Hoetzel_2026_GFP.md) | Hoetzel J et al., Mechanism underlying the high regulator…, Nature communications (2026) | [10.1038/s41467-026-76256-2](https://doi.org/10.1038/s41467-026-76256-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mooney_2024](drugs/drug_thiamine/pd_Mooney_2024_cell_count.md) | Mooney R et al., Sodium Metabisulfite Inhibits Acanthamo…, Pathogens (Basel, Switzerla… (2024) | [10.3390/pathogens13060431](https://doi.org/10.3390/pathogens13060431) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Noguchi_2018](drugs/drug_thiamine/pd_Noguchi_2018_BDK.md) | Noguchi S et al., Ca2+-dependent inhibition of branched-c…, Biochemical and biophysical… (2018) | [10.1016/j.bbrc.2018.09.038](https://doi.org/10.1016/j.bbrc.2018.09.038) |

## Coverage

- **PubMed hits:** 308 matched, 89 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pipkin_1982.pdf` | Pipkin JD et al., Thiamine whole blood and urinary pharma…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600710208](https://doi.org/10.1002/jps.2600710208) | [7062238](https://pubmed.ncbi.nlm.nih.gov/7062238) | The study reports quantitative pharmacokinetic parameters (AUC, Vd, t0.5, ClTB) for thiamine in rats, but the specific numeric values are not present in the provided evidence text. |
| `Patrini_1993.pdf` | Patrini C et al., Effects of phenytoin on the in vivo kin…, Brain research (1993) | popPK | 8 | [10.1016/0006-8993(93)90953-k](https://doi.org/10.1016/0006-8993(93)90953-k) | [8313145](https://pubmed.ncbi.nlm.nih.gov/8313145) | The study reports quantitative compartmental PK parameters (fractional rate constants, turnover rates) for thiamine in rats, but the specific numeric values are not present in the provided abstract text. |
| `Rindi_1980.pdf` | Rindi G et al., Thiamine content and turnover rates of…, Brain research (1980) | popPK | 8 | [10.1016/0006-8993(80)90619-8](https://doi.org/10.1016/0006-8993(80)90619-8) | [7350971](https://pubmed.ncbi.nlm.nih.gov/7350971) | The study reports quantitative compartmental parameters (turnover rates, turnover times, and fractional rate constants) for thiamine in rat nervous tissues, with specific numeric values provided in the text. |
| `Xie_2014.pdf` | Xie F et al., Pharmacokinetic study of benfotiamine a…, Journal of clinical pharmac… (2014) | popPK | 8 | [10.1002/jcph.261](https://doi.org/10.1002/jcph.261) | [24399744](https://pubmed.ncbi.nlm.nih.gov/24399744) | The study reports a one-compartment model for thiamine and bioavailability ratios, but specific quantitative PK parameters (CL, V, ka) are not explicitly listed in the provided text. |
| `Gallant_2021.pdf` | Gallant J et al., Low-dose thiamine supplementation of la…, The American journal of cli… (2021) | pd | 4 | [10.1093/ajcn/nqab052](https://doi.org/10.1093/ajcn/nqab052) | [33829271](https://www.ncbi.nlm.nih.gov/pubmed/33829271) | metadata signals extractable PD data (Emax) |
| `Grassl_1994.pdf` | Grassl SM, Choline transport in human placental br…, Biochimica et biophysica ac… (1994) | pd | 4 | [10.1016/0005-2736(94)90221-6](https://doi.org/10.1016/0005-2736(94)90221-6) | [8075137](https://www.ncbi.nlm.nih.gov/pubmed/8075137) | metadata signals extractable PD data (IC50) |
| `Liu_2023.pdf` | Liu HH et al., The ecotoxicological effects of chromiu…, Environmental science and p… (2023) | pd | 4 | [10.1007/s11356-023-26301-0](https://doi.org/10.1007/s11356-023-26301-0) | [36890403](https://www.ncbi.nlm.nih.gov/pubmed/36890403) | metadata signals extractable PD data (EC50) |
| `Wu_2024.pdf` | Wu X et al., Metabolomic Response of Thalassiosira w…, Plants (Basel, Switzerland) (2024) | pd | 4 | [10.3390/plants13030354](https://doi.org/10.3390/plants13030354) | [38337887](https://www.ncbi.nlm.nih.gov/pubmed/38337887) | metadata signals extractable PD data (EC50) |
| `Zhang_2016.pdf` | Zhang L et al., Label-free, turn-on fluorescent sensor…, Talanta (2016) | pd | 4 | [10.1016/j.talanta.2016.09.011](https://doi.org/10.1016/j.talanta.2016.09.011) | [27769443](https://www.ncbi.nlm.nih.gov/pubmed/27769443) | metadata signals extractable PD data (IC50) |
| `Davies_2007.pdf` | Davies SJ et al., PRN prescribing in psychiatric inpatien…, Journal of psychopharmacolo… (2007) | pgx | 7 | [10.1177/0269881107067242](https://doi.org/10.1177/0269881107067242) | [17329294](https://www.ncbi.nlm.nih.gov/pubmed/17329294) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Cheng_2017.pdf` | Cheng X et al., Fast and robust detection of ancestral…, Molecular ecology (2017) | pgx | 5 | [10.1111/mec.14416](https://doi.org/10.1111/mec.14416) | [29113018](https://www.ncbi.nlm.nih.gov/pubmed/29113018) | metadata signals extractable PGX data (SLC35F3) |

<sub>queue written 2026-09-16T04:21:52.810789+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The paper is a clinical study on intense pulsed light therapy for meibomian gland dysfunction and does not involve thiamine or pharmacokinetic parameters. |
| popPK | Bellazzi_2001 | irrelevant | 2 | 0 | The paper focuses on a hybrid input-output modeling methodology for intracellular thiamine kinetics rather than reporting standard quantitative population pharmacokinetic parameters (CL, V, ka) for the drug, and no numeric values are present in the evidence. |
| PGx | Bokelmann_2018 | not_relevant | 0 | 0 | The paper investigates OCT1 promoter polymorphisms and their effect on the pharmacokinetics of other drugs (metformin, etc.), but does not report any pharmacokinetic or pharmacodynamic parameters for thiamine. |
| PGx | Bravatà_2014 | not_relevant | 0 | 0 | The paper reports a wild-type genotype (no variants found) in a single patient and does not demonstrate a pharmacogenomic effect on thiamine PK or PD parameters. |
| popPK | Brigatti_2026 | irrelevant | 0 | 0 | The paper focuses on maple syrup urine disease and gene therapy trial design, with no mention of thiamine pharmacokinetics. |
| PD | Brigatti_2026 | not_relevant | 0 | 0 | The paper describes a natural history cohort for external controls in maple syrup urine disease and does not report any pharmacodynamic or exposure-response analysis for thiamine. |
| PGx | Bruhn_2024 | not_relevant | 0 | 0 | The paper reports genetic variants causing a metabolic enzyme deficiency (PDCD) and their effect on enzyme activity, but does not report a pharmacogenomic effect on the PK or PD parameters of thiamine as a drug. |
| PGx | Bunik_2022 | not_relevant | 0 | 0 | The paper investigates the non-coenzyme regulatory effects of thiamine on pyridoxal kinase and the impact of PdxK variants on thiamine inhibition, rather than how a gene variant affects the pharmacokinetics or pharmacodynamics of thiamine itself. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper reports metabolomic signatures in asthma patients, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of thiamine. |
| PGx | Cheng_2017 | not_relevant | 0 | 0 | The paper focuses on population genetics and detecting selective sweeps, mentioning a thiamine transporter only as a candidate for adaptation, without reporting any pharmacokinetic or pharmacodynamic data. |
| PGx | Davies_2007 | not_relevant | 0 | 0 | The paper discusses PRN prescribing and CYP-mediated drug interactions in psychiatry, but does not mention thiamine or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Du_2021 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting thiamine pyrophosphate (TPP) in blood and does not report any pharmacokinetic parameters for thiamine. |
| PD | Du_2021 | not_relevant | 0 | 0 | The paper describes an analytical method (ribosensor) for detecting thiamine pyrophosphate, not a pharmacodynamic study of thiamine's biological effects; the reported EC50 is a sensor binding parameter, not a drug response parameter. |
| popPK | Duan_2025 | irrelevant | 0 | 0 | The study is a clinical trial on cognitive function where thiamine is a minor supplement ingredient, not the subject of pharmacokinetic analysis. |
| PGx | Díaz-Muñoz_2026 | not_relevant | 0 | 0 | The paper investigates the genetic modulation of stool frequency (a physiological trait) by thiamine intake, not the pharmacokinetic or pharmacodynamic parameters of thiamine as a drug. |
| popPK | Edwards_2026 | irrelevant | 0 | 0 | The paper describes an in-vitro enzymatic assay for transketolase activity to measure thiamine utilization, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ejsmond_2025 | irrelevant | 0 | 0 | The paper is a theoretical modeling study on micronutrient allocation and life history trade-offs, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Ejsmond_2025 | not_relevant | 1 | 0 | The paper presents a theoretical physiological allocation model and qualitative correlations between tissue thiamine levels and fitness traits, but does not report a pharmacodynamic exposure-response relationship with numeric PD parameters (e.g., Emax, EC50) for a drug effect. |
| PGx | Enogieru_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of thiamine (a nutrient) and the effects of drugs on thiamine transport, rather than the pharmacogenomic effects of a gene variant on the PK/PD of a specific drug. |
| PGx | Fritsch_1983 | not_relevant | 0 | 0 | The paper reports a case of maple syrup urine disease where thiamine treatment was ineffective, but it does not report a pharmacogenomic effect (gene variant changing PK/PD) of thiamine. |
| popPK | Gallant_2021 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Gallant_2021 | not_relevant | 0 | 0 | The paper reports changes in milk thiamine concentrations following supplementation but does not provide a pharmacokinetic-pharmacodynamic model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Girija_1982 | not_relevant | 4 | 2 | The paper mentions calculating bioavailability from individual dose-response curves but the provided text only contains qualitative conclusions and does not report specific numeric PD parameters (Emax, EC50, etc.) or the underlying data. |
| popPK | Go_2026 | irrelevant | 0 | 0 | The study is an observational analysis of drug-drug interaction prevalence in nursing home residents and does not report any pharmacokinetic parameters for thiamine. |
| PD | Go_2026 | not_relevant | 0 | 0 | The paper is an epidemiological study on drug-drug interaction prevalence in nursing home residents and contains no pharmacokinetic or pharmacodynamic modeling or data for Thiamine. |
| PD | Grassl_1994 | not_relevant | 0 | 0 | The paper focuses on choline transport in placental vesicles and does not report any pharmacodynamic or exposure-response data for thiamine. |
| PGx | Habeb_2018 | not_relevant | 2 | 5 | The paper reports clinical outcomes (glycemic control, insulin dose) rather than specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters of thiamine itself. |
| PGx | Haberkorn_2021 | not_relevant | 0 | 0 | The paper is a review of in vitro cell models for OCT1 transport and does not report pharmacogenomic effects on thiamine PK/PD parameters. |
| PGx | Hagstrom_2013 | not_relevant | 0 | 0 | The paper investigates pharmacogenetics for anti-VEGF therapy in AMD, not thiamine. |
| PGx | Hassan_2023 | not_relevant | 0 | 0 | The paper is a review of episodic ataxia etiologies and treatments, mentioning thiamine metabolism defects only as a secondary cause, without reporting pharmacogenomic effects on thiamine PK/PD. |
| popPK | Hoetzel_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanism of a doxycycline-binding riboswitch and does not report pharmacokinetic parameters for thiamine. |
| popPK | Hosseinzadeh_2016 | irrelevant | 0 | 0 | The study investigates in-vitro binding interactions between thiamine and lysozyme, not pharmacokinetic disposition parameters. |
| PD | Impeduglia_1987 | not_relevant | 3 | 2 | The paper describes qualitative changes in ethanol response (behavioral impairment/hypothermia) relative to blood ethanol concentrations (BEC) in rats, but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for thiamine itself; it focuses on the interaction between thiamine status and ethanol PK/PD. |
| PGx | Impeduglia_1987 | not_relevant | 2 | 5 | The paper investigates the effect of thiamine deficiency (a nutritional state) on ethanol pharmacokinetics and pharmacodynamics, not the effect of a gene variant on thiamine pharmacokinetics or pharmacodynamics. |
| PGx | Israels_1976 | not_relevant | 0 | 0 | The paper discusses lactic acidosis and thiamine metabolism in metabolic disorders but does not report pharmacogenomic effects on thiamine PK/PD parameters. |
| PGx | Jensen_2020 | not_relevant | 2 | 5 | The study explicitly reports that thiamine pharmacokinetics did not differ depending on OCT1 genotype, indicating a lack of pharmacogenomic effect. |
| PGx | Khan_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and gene expression in Rhododendron under heat stress, not human pharmacogenomics or thiamine pharmacokinetics. |
| PGx | Kong_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nutritional supplements in cardiac surgery and explicitly states that the current evidence base does not support genotype-guided precision supplementation; it does not report pharmacogenomic effects on thiamine PK/PD. |
| PGx | Koronica_2026 | not_relevant | 0 | 0 | The paper discusses ifosfamide pharmacogenomics (CYP2B6/3A4) and toxicity, not the pharmacokinetics or pharmacodynamics of thiamine. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper focuses on proteomic characterization of tau protein in neurodegenerative diseases and does not report pharmacokinetic parameters for thiamine. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper focuses on proteomic characterization of tau protein in neurodegenerative diseases and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PD | Labib_2019 | not_relevant | 0 | 0 | The text is a general review of sepsis care pathways and mentions thiamine only as part of a clinical trial (HYVITS) without providing any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PD | Lai_1986 | not_relevant | 0 | 0 | The paper studies the kinetic properties of the alpha-ketoglutarate dehydrogenase complex enzyme, not the pharmacodynamic response of the drug Thiamine in a biological system. |
| popPK | Lani_2026 | irrelevant | 0 | 0 | The paper is a review of date palm nutraceuticals and only lists thiamine content in fruit, providing no pharmacokinetic parameters. |
| PD | Lani_2026 | not_relevant | 0 | 0 | The paper is a narrative review of date palm (Phoenix dactylifera) nutraceuticals and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PGx | Lazzeri_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of ranibizumab, not thiamine. |
| PD | Lee_1985 | not_relevant | 4 | 2 | The paper describes a qualitative leftward shift in the dose-response curve for serotonin in thiamine-deficient rats but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect data in the text. |
| PD | Levine_1978 | not_relevant | 2 | 1 | The paper describes a qualitative synergistic effect of coenzymes on PDS-induced contractures but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for thiamine. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The paper reports genetic mutations causing Maple Syrup Urine Disease (a metabolic disorder) but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of thiamine as a drug. |
| PD | Li_2024 | not_relevant | 1 | 0 | The paper identifies thiamine pyrophosphate as a P2Y6R antagonist but does not provide numeric PD parameters (e.g., IC50, Emax) or an exposure-response curve in the provided text. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper studies the antifungal mechanism of sorbauphylin A in Botrytis cinerea, mentioning thiamine only as a biosynthetic pathway target, not as a subject drug for PK analysis. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports an EC50 for the fungicide sorbauphylin A, not for thiamine; thiamine is only mentioned as a biosynthetic pathway target, with no exposure-response or dose-response data for thiamine itself. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Liu_2023 | not_relevant | 0 | 0 | The paper investigates the ecotoxicological effects of chromium (III) oxide nanoparticles on Chlorella sp. and does not mention Thiamine or report any pharmacodynamic or exposure-response relationships for it. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a metagenomic study on autism spectrum disorder where thiamine is mentioned only as a bacterial metabolic pathway, not as a subject drug for pharmacokinetic analysis. |
| PGx | Lu_2015 | not_relevant | 2 | 5 | The paper reports an association between APOE genotype and thiamine metabolite levels (TDP), but it does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on the drug's response or disposition in a pharmacogenomic context (i.e., it is an observational correlation, not a PK/PD effect of a variant on drug handling). |
| popPK | Lyu_2025 | irrelevant | 0 | 0 | The study investigates the effects of glucocorticoids on gut microbiota and does not involve thiamine or report any pharmacokinetic parameters. |
| PD | Lyu_2025 | not_relevant | 0 | 0 | The paper investigates the effects of glucocorticoids on gut microbiota and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PD | Martin_1985 | not_relevant | 2 | 1 | The text describes qualitative changes in ethanol response (AUC, impairment, hypothermia) due to thiamine deficiency but does not provide numeric PD parameters or an extractable concentration-effect curve. |
| PGx | Medina_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a CFH polymorphism on the response to anti-VEGF therapy for AMD, not on the pharmacokinetics or pharmacodynamics of thiamine. |
| PGx | Nagarajan_2026 | not_relevant | 0 | 0 | The paper investigates genetic interactions with sleepiness in sleep apnea and does not report pharmacokinetic or pharmacodynamic parameters for thiamine. |
| PGx | Nakandala_2024 | not_relevant | 0 | 0 | The paper is a comparative genomics study of Australian wild limes and does not report pharmacogenomic effects on thiamine pharmacokinetics or pharmacodynamics. |
| PGx | Parmeggiani_2019 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR polymorphism on the efficacy of photodynamic therapy with verteporfin, not on the pharmacokinetics or pharmacodynamics of thiamine. |
| popPK | Patrini_1993 | relevant | 8 | 0 | The study reports quantitative compartmental PK parameters (fractional rate constants, turnover rates) for thiamine in rats, but the specific numeric values are not present in the provided abstract text. |
| PGx | Pavlu-Pereira_2021 | not_relevant | 0 | 0 | The paper characterizes structural and functional impacts of PDC-E1 variants on enzyme activity and TPP affinity, but does not report pharmacokinetic or pharmacodynamic parameters of thiamine as a drug in a pharmacogenomic context. |
| PGx | Pavlú-Pereira_2023 | not_relevant | 2 | 5 | The paper evaluates the therapeutic effect of thiamine on mitochondrial function in PDHA1-deficient cells, which is a pharmacodynamic response to a drug, but it does not report how the genotype changes the pharmacokinetics or pharmacodynamics of thiamine itself (e.g., thiamine clearance, half-life, or receptor binding affinity). |
| PGx | Pinilla_2025 | not_relevant | 0 | 0 | The paper is a case report on ifosfamide-induced encephalopathy and does not report any pharmacogenomic effects on thiamine PK or PD parameters. |
| popPK | Pipkin_1982 | relevant | 10 | 0 | The study reports quantitative pharmacokinetic parameters (AUC, Vd, t0.5, ClTB) for thiamine in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Porter_2025 | irrelevant | 0 | 0 | The study measures thiaminase enzyme kinetics (Vmax, Km) in fish extracts, not the pharmacokinetic disposition parameters (CL, V, ka) of thiamine in a biological system. |
| PD | Porter_2025 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Michaelis-Menten) for thiaminase activity, not a pharmacodynamic exposure-response relationship for thiamine as a drug. |
| PD | Rao_2020 | not_relevant | 1 | 0 | The text is a qualitative review of alcohol use disorders and mentions thiamine treatment for Wernicke's encephalopathy but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| PGx | Sainz_2015 | not_relevant | 0 | 0 | The paper discusses the source of cellular autofluorescence (riboflavin vs lipofuscin) in cancer stem cells and does not report pharmacogenomic effects on thiamine pharmacokinetics or pharmacodynamics. |
| PD | Schron_1988 | not_relevant | 0 | 0 | The paper investigates folate carrier kinetics and anion specificity; thiamine is only mentioned as a non-inhibitor of folate uptake, with no PD or exposure-response analysis for thiamine. |
| PGx | Sengul_2018 | not_relevant | 0 | 0 | The paper discusses ranibizumab, not thiamine. |
| PGx | Taberner_2016 | not_relevant | 0 | 0 | The paper discusses neonatal diabetes and mentions a thiamine-responsive syndrome, but it does not report pharmacokinetic or pharmacodynamic parameters of thiamine itself. |
| PGx | Tazhibaev_1982 | not_relevant | 0 | 0 | The paper discusses nutritional deficiencies and mineral balance, not pharmacogenomic effects on thiamine PK/PD. |
| PGx | Thompson_2023 | not_relevant | 0 | 0 | The paper describes a clinical case of a metabolic disorder (THMD5) and its response to treatment, but does not report pharmacokinetic or pharmacodynamic parameters or quantitative pharmacogenomic effects. |
| PGx | Torchia_2025 | not_relevant | 0 | 0 | The paper is a narrative review on ifosfamide-induced encephalopathy and does not report pharmacogenomic effects on thiamine PK/PD parameters. |
| PD | Umemoto_1989 | not_relevant | 0 | 0 | The paper focuses on methotrexate antibody conjugates and only mentions thiamine pyrophosphate qualitatively as a control inhibitor, providing no exposure-response or dose-response data for thiamine. |
| PGx | Valverde-Megías_2017 | not_relevant | 0 | 0 | The paper investigates ranibizumab, not thiamine. |
| popPK | Voskoboev_1976 | irrelevant | 0 | 0 | The paper describes the enzyme kinetics and structure of thiamine pyrophosphokinase, not the pharmacokinetics of thiamine. |
| PD | Voskoboev_1976 | not_relevant | 0 | 0 | The paper describes the quaternary structure and allosteric properties of an enzyme (thiamine pyrophosphokinase) in vitro, not a pharmacodynamic exposure-response relationship for the drug thiamine in a biological system. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The study is a nutritional epidemiology survey analyzing dietary intake of micronutrients, not a pharmacokinetic study reporting disposition parameters for thiamine. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The study investigates TDP levels as a biomarker for Alzheimer's disease and its association with APOE genotype, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of thiamine administration. |
| PGx | Weyandt_2022 | not_relevant | 0 | 0 | The paper focuses on the genomics of Wolbachia endosymbionts in nematodes and does not report pharmacogenomic effects on thiamine pharmacokinetics or pharmacodynamics. |
| popPK | Whitfield_2019 | irrelevant | 0 | 0 | The paper is a study protocol for a dose-response trial measuring thiamine concentrations in milk and blood, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Whitfield_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a future randomized controlled trial and does not report any results, data, or numeric PD parameters. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Wu_2024 | not_relevant | 0 | 0 | The paper studies the metabolomic response of a diatom to Erythromycin, not the pharmacodynamics of Thiamine. |
| popPK | Xie_2014 | relevant | 8 | 2 | The study reports a one-compartment model for thiamine and bioavailability ratios, but specific quantitative PK parameters (CL, V, ka) are not explicitly listed in the provided text. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The study focuses on the efficacy of conbercept for diabetic macular edema and does not involve thiamine or report any pharmacokinetic parameters. |
| popPK | Zeng_2023 | irrelevant | 0 | 0 | The paper is a structural biology study (cryo-EM) of the OCT1 transporter and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for thiamine. |
| PD | Zeng_2023 | not_relevant | 0 | 0 | The paper is a structural biology study (cryo-EM) describing the binding mode of thiamine to OCT1; it does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters like Emax or EC50. |
| PD | Zhang_2016 | not_relevant | 0 | 0 | The paper describes a fluorescent sensor for trypsin activity and inhibitor screening, which is unrelated to the pharmacodynamics of Thiamine. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a proteomic study of blood-brain barrier transporters and does not report pharmacokinetic parameters (CL, V, etc.) for thiamine. |
| PD | Zhou_2025 | not_relevant | 0 | 0 | The paper focuses on proteomic profiling of BBB transporters and uses PBPK modeling to simulate phenytoin distribution; it does not report any pharmacodynamic (exposure- or dose-response) relationship or numeric PD parameters for thiamine. |
| PGx | de_2024 | not_relevant | 0 | 0 | The paper describes the genome assembly of yeast strains for fermentation and does not report pharmacogenomic effects on thiamine pharmacokinetics or pharmacodynamics in humans. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_thiamine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
