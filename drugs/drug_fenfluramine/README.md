<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;fenfluramine&quot;}]"></div>

# fenfluramine

- **generic name:** fenfluramine
- **ATC codes:** `A08AA02`, `N03AX26`
- **DrugBank:** [DB00574](https://go.drugbank.com/drugs/DB00574)
- **groups:** approved, illicit, investigational, withdrawn

## About

**Description.** Dravet syndrome is a pediatric encephalopathy that typically manifests within the first year of life following exposure to elevated temperatures. It is characterized by recurrent pharmacoresistant seizures, which increase in frequency and severity with disease progression. Concomitantly with these seizures, patients typically display delayed development and neurocognitive impairment.[A214694, A214709, A214712, A214715] Fenfluramine is a serotonergic phenethylamine originally used as an appetite suppressant until concerns regarding cardiotoxicity in obese patients lead to its withdrawal from the market in 1997.[A214694, A214718, A11906] Through its ability to modulate neurotransmission, fenfluramine has reemerged as an effective therapy against pharmacoresistant seizures, such as those involved in Dravet syndrome.[A214688, A214691, A214700]

Fenfluramine was granted initial FDA approval in 1973 prior to its withdrawal; it was granted a new FDA approval on June 25, 2020, for treatment of patients with Dravet syndrome and Lennox-Gastaut syndrome through the restricted FINTEPLA REMS program. It is currently sold under the name FINTEPLA® by Zogenix INC.[L14522]

**Indication.** Fenfluramine is indicated for the treatment of seizures associated with Dravet syndrome and  Lennox-Gastaut syndrome in patients aged two years and older.[L14522]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-12 01:16 | 38:23 | 0/0/0 | 4/1/0 | 0/0/0 | 550,653/7,981 | ollama / qwen3.8:27b-mtp-q8_0 | 38 | 0/0 | 36/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Leonardi_1994](drugs/drug_fenfluramine/pd_Leonardi_1994_MAO_A_activity.md) | Leonardi ET et al., MDMA (ecstasy) inhibition of MAO type A…, Neuropsychopharmacology : o… (1994) | [10.1038/npp.1994.26](https://doi.org/10.1038/npp.1994.26) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leonardi_1994](drugs/drug_fenfluramine/pd_Leonardi_1994_MAO_B_activity.md) | Leonardi ET et al., MDMA (ecstasy) inhibition of MAO type A…, Neuropsychopharmacology : o… (1994) | [10.1038/npp.1994.26](https://doi.org/10.1038/npp.1994.26) |
| <span class="pk-badge pk-badge--green">extracted</span> | [McComic_2026](drugs/drug_fenfluramine/pd_McComic_2026_unknown.md) | McComic SE et al., Discovery of mCMV280: An Oral Ectoparas…, Journal of medicinal chemis… (2026) | [10.1021/acs.jmedchem.5c03776](https://doi.org/10.1021/acs.jmedchem.5c03776) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sheeni_2025](drugs/drug_fenfluramine/pd_Sheeni_2025_MMI.md) | Sheeni Y et al., Enantioselective comparative analysis o…, Epilepsia (2025) | [10.1111/epi.18542](https://doi.org/10.1111/epi.18542) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sheeni_2025](drugs/drug_fenfluramine/pd_Sheeni_2025_unknown.md) | Sheeni Y et al., Enantioselective comparative analysis o…, Epilepsia (2025) | [10.1111/epi.18542](https://doi.org/10.1111/epi.18542) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2026](drugs/drug_fenfluramine/pd_van_2026_bacterial_load.md) | van den Berg S et al., The pharmacodynamics of polymyxin B in…, The Journal of antimicrobia… (2026) | [10.1093/jac/dkag097](https://doi.org/10.1093/jac/dkag097) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Erenburg_2024](drugs/drug_fenfluramine/pd_Erenburg_2024_unknown.md) | Erenburg N et al., Stereoselective Analysis of the Antisei…, International journal of mo… (2024) | [10.3390/ijms25052522](https://doi.org/10.3390/ijms25052522) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fenfluramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…0% of fenfluramine is excreted in urine and less than 5% in feces; unchanged fenfluramine…”</sub> | prose |
| excretion | kidney | <sub>“…Over 90% of fenfluramine is excreted in urine and less than 5% in feces; unchanged fenflur…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor/substrate | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1A (target), HTR1D (target), HTR2A (target), HTR2B (target), HTR2C (target), SIGMAR1 (target).</sub>

## Coverage

- **PubMed hits:** 167 matched, 88 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mittur_2024.pdf` | Mittur A et al., Effect of Hepatic Impairment on the Pha…, Journal of clinical pharmac… (2024) | pd | 5 | [10.1002/jcph.2431](https://doi.org/10.1002/jcph.2431) | [38523492](https://www.ncbi.nlm.nih.gov/pubmed/38523492) | metadata signals extractable PD data (exposure-response) |
| `Berger_1992.pdf` | Berger UV et al., The substituted amphetamines 3,4-methyl…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90023-w](https://doi.org/10.1016/0014-2999(92)90023-w) | [1356787](https://www.ncbi.nlm.nih.gov/pubmed/1356787) | metadata signals extractable PD data (EC50) |
| `Gobbi_1989.pdf` | Gobbi M et al., In-vivo (+)-[3H]fenfluramine binding to…, The Journal of pharmacy and… (1989) | pd | 4 | [10.1111/j.2042-7158.1989.tb06445.x](https://doi.org/10.1111/j.2042-7158.1989.tb06445.x) | [2568465](https://www.ncbi.nlm.nih.gov/pubmed/2568465) | metadata signals extractable PD data (IC50) |
| `Kannengiesser_1976.pdf` | Kannengiesser MH et al., Comparative action of fenfluramine on t…, European journal of pharmac… (1976) | pd | 4 | [10.1016/0014-2999(76)90298-3](https://doi.org/10.1016/0014-2999(76)90298-3) | [1253827](https://www.ncbi.nlm.nih.gov/pubmed/1253827) | metadata signals extractable PD data (IC50) |
| `McElroy_1988.pdf` | McElroy JF et al., Discriminative stimulus properties of c…, The Journal of pharmacology… (1988) | pd | 4 | not captured | [2834535](https://www.ncbi.nlm.nih.gov/pubmed/2834535) | metadata signals extractable PD data (IC50) |
| `Robinson_1989.pdf` | Robinson TN et al., The mechanism of tetrahydroaminoacridin…, British journal of pharmaco… (1989) | pd | 4 | [10.1111/j.1476-5381.1989.tb12656.x](https://doi.org/10.1111/j.1476-5381.1989.tb12656.x) | [2611486](https://www.ncbi.nlm.nih.gov/pubmed/2611486) | metadata signals extractable PD data (IC50) |
| `Rothman_2003.pdf` | Rothman RB et al., (+)-Fenfluramine and its major metaboli…, The Journal of pharmacology… (2003) | pd | 4 | [10.1124/jpet.103.049684](https://doi.org/10.1124/jpet.103.049684) | [12649307](https://www.ncbi.nlm.nih.gov/pubmed/12649307) | metadata signals extractable PD data (EC50) |
| `Wee_2006.pdf` | Wee S et al., Self-administration of mixtures of fenf…, Pharmacology, biochemistry,… (2006) | pd | 4 | [10.1016/j.pbb.2006.05.022](https://doi.org/10.1016/j.pbb.2006.05.022) | [16828855](https://www.ncbi.nlm.nih.gov/pubmed/16828855) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-09-12T01:05:22.040349+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abou-Khalil_2022 | not_relevant | 0 | 0 | The provided text is only the title and publication history of a review article, containing no data, models, or numeric parameters for fenfluramine or any other drug. |
| popPK | Agogo-Mawuli_2025 | irrelevant | 0 | 0 | The paper describes the development of RGS14 inhibitors and does not involve fenfluramine or report its pharmacokinetic parameters. |
| PD | Agogo-Mawuli_2025 | not_relevant | 0 | 0 | The paper reports in vitro biochemical IC50 values for RGS14 inhibitors, not pharmacodynamic exposure-response or dose-response relationships for fenfluramine. |
| PD | Anderer_2000 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of buspirone, not fenfluramine, and does not report any numeric PD parameters or exposure-response relationships for fenfluramine. |
| popPK | Ariefta_2026 | irrelevant | 0 | 0 | The paper studies quinoline derivatives for antimalarial activity and does not involve fenfluramine. |
| PD | Ariefta_2026 | not_relevant | 0 | 0 | The paper evaluates quinoline derivatives for antiplasmodial activity and does not mention fenfluramine or report any pharmacodynamic modeling. |
| popPK | Berger_1992 | irrelevant | 0 | 0 | The paper is a mechanistic study on serotonin release and does not report pharmacokinetic parameters for fenfluramine. |
| PD | Berger_1992 | not_relevant | 0 | 0 | The paper describes a qualitative mechanism of action (5-HT release blocked by fluoxetine/cocaine) without providing numeric concentration-effect data, dose-response curves, or PD parameters for fenfluramine. |
| popPK | Buslov_2025 | irrelevant | 0 | 0 | The paper is a biocatalysis study on the synthesis of aromatic d-amino acids using phenylalanine ammonia lyase and does not involve the drug fenfluramine or report any pharmacokinetic parameters. |
| PD | Buslov_2025 | not_relevant | 0 | 0 | The paper reports on the biocatalytic synthesis of d-amino acids using engineered enzymes and contains no pharmacodynamic or exposure-response data for fenfluramine. |
| PGx | Chiron_2019 | not_relevant | 0 | 0 | The paper discusses stiripentol and mentions fenfluramine only as a competitor, without reporting any pharmacogenomic effects on fenfluramine's PK or PD parameters. |
| popPK | Dahleh_2025 | irrelevant | 0 | 0 | The paper is a computational study on Selective Androgen Receptor Modulators (SARMs) and does not involve fenfluramine or report any pharmacokinetic parameters. |
| PD | Dahleh_2025 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking, DFT, MD) of SARMs and does not contain any pharmacodynamic, exposure-response, or dose-response data for fenfluramine. |
| popPK | De_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel LIFR/GPBAR1 modulators for liver fibrosis and does not report pharmacokinetic parameters for fenfluramine. |
| PD | De_2025 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological data (IC50) for novel LIFR/GPBAR1 modulators, not for fenfluramine, and does not contain any pharmacokinetic or exposure-response analysis. |
| PGx | DellIsola_2026 | not_relevant | 0 | 0 | The study reports clinical efficacy (seizure reduction) and tolerability of fenfluramine in SCN1A-related GEFS+, but does not report pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, receptor binding) or genotype-dependent changes in these parameters. |
| PD | Dini_2022 | not_relevant | 2 | 0 | The paper is a narrative review summarizing clinical trial outcomes (seizure reduction percentages) and general pharmacokinetic properties, but it does not report or derive specific numeric pharmacodynamic parameters (such as Emax, EC50, or slope) from an exposure-response or dose-response analysis. |
| popPK | Dziubina_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of novel compounds DSZ-13 and DSZ-19, not fenfluramine. |
| PD | Dziubina_2026 | not_relevant | 0 | 0 | The paper studies novel pyrrolopyridine derivatives (DSZ-13/19) and does not mention or analyze fenfluramine. |
| popPK | Erenburg_2024 | irrelevant | 2 | 0 | The study reports single-timepoint plasma and brain concentrations for PK-PD correlation in mice, but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Fielden_2010 | irrelevant | 0 | 0 | The paper is a mechanistic study on valvular heart disease and receptor binding, not a pharmacokinetic study, and contains no PK parameters for fenfluramine. |
| PD | Gadow_1992 | not_relevant | 1 | 0 | The text is a general review that mentions fenfluramine's efficacy qualitatively but provides no numeric PD parameters, dose-response curves, or PK/PD modeling. |
| popPK | Gapińska_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SSR504734, not fenfluramine. |
| PD | Gapińska_2025 | not_relevant | 0 | 0 | The paper investigates SSR504734, not fenfluramine, and does not report a pharmacodynamic model or numeric PD parameters for fenfluramine. |
| PD | Gobbi_1989 | not_relevant | 0 | 0 | The paper describes in-vitro/in-vivo radioligand binding studies (Kd, Bmax) for fenfluramine, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships for a physiological effect. |
| popPK | Gobbi_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin release in rat hippocampal synaptosomes and does not report pharmacokinetic parameters. |
| popPK | Hara_2026 | irrelevant | 0 | 0 | The paper focuses on the identification of KDM5B inhibitors (JB-157 and JB-161) and their antitumor effects, with no mention of fenfluramine or its pharmacokinetic parameters. |
| PD | Hara_2026 | not_relevant | 0 | 0 | The paper focuses on KDM5B inhibitors (JB-157, JB-161) and does not mention fenfluramine or report any pharmacodynamic parameters for it. |
| popPK | Hawtin_2023 | irrelevant | 0 | 0 | The paper describes the preclinical characterization of MHV370, a TLR7/8 antagonist, and does not study fenfluramine or report its pharmacokinetic parameters. |
| PD | Hawtin_2023 | not_relevant | 0 | 0 | The paper reports preclinical data for MHV370, not fenfluramine. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on SARS-CoV-2 PLpro inhibitors and does not report pharmacokinetic parameters for fenfluramine. |
| PD | Iuga_2026 | not_relevant | 0 | 0 | The paper reports biochemical IC50 and antiviral EC50 values for SARS-CoV-2 PLpro inhibitors, but does not contain any data, analysis, or mention of fenfluramine. |
| popPK | Jena_2026 | irrelevant | 0 | 0 | The paper is a computational study on Nipah virus peptide-ligand conjugates and does not involve fenfluramine or report any pharmacokinetic parameters for it. |
| PD | Jena_2026 | not_relevant | 0 | 0 | The paper is an in silico study on Nipah virus peptide-ligand conjugates and does not involve fenfluramine or report any pharmacodynamic or exposure-response data. |
| popPK | Jha_2023 | irrelevant | 0 | 0 | The paper is a computational study on MTHFD2 inhibitors and does not involve fenfluramine or report any pharmacokinetic parameters for it. |
| PD | Jha_2023 | not_relevant | 0 | 0 | The paper is a computational study on MTHFD2 inhibitors and does not contain any pharmacodynamic or exposure-response data for fenfluramine. |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated efflux in cell lines, not a pharmacokinetic study reporting disposition parameters for fenfluramine. |
| PD | Johnson_1998 | not_relevant | 4 | 2 | The paper reports a rank order of potency and qualitative efficacy groups for fenfluramine in a cell-based assay, but does not provide specific numeric EC50 values or a derivable dose-response curve for fenfluramine in the provided text. |
| PD | Kannengiesser_1976 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action regarding serotonin and dopamine uptake/release, not on pharmacokinetic-pharmacodynamic modeling or exposure-response relationships. |
| popPK | Karabıyık_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and cytotoxicity of ruthenium complexes, not the pharmacokinetics of fenfluramine. |
| PD | Karabıyık_2024 | not_relevant | 0 | 0 | The paper investigates ruthenium(II) complexes, not fenfluramine, and reports only IC50 values without a formal pharmacodynamic model or exposure-response analysis. |
| PD | Kut_1992 | not_relevant | 3 | 2 | The paper describes a qualitative biphasic dose-response effect of fenfluramine on T-cell activity but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on bicyclo[1.1.1]pentanes and does not involve fenfluramine or pharmacokinetic parameters. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper is a synthetic chemistry study on the synthesis of bicyclo[1.1.1]pentane derivatives and contains no pharmacodynamic or exposure-response data for fenfluramine. |
| PD | Li_2004 | not_relevant | 0 | 0 | The paper characterizes SERT ligands (AFM/DASB) for PET imaging and mentions fenfluramine only as a competitor in binding assays, without reporting any exposure-response or dose-response PD model or numeric PD parameters for fenfluramine. |
| popPK | Luo_2026 | irrelevant | 0 | 0 | The paper studies SARS-CoV-2 Mpro inhibitors (nirmatrelvir, FD3-32, etc.) and does not involve fenfluramine. |
| PD | Luo_2026 | not_relevant | 0 | 0 | The paper reports on the discovery of SARS-CoV-2 Mpro inhibitors and does not contain any pharmacodynamic or exposure-response data for fenfluramine. |
| popPK | Malik_2025 | irrelevant | 0 | 0 | The paper is a machine learning study on EGFR inhibitors and does not contain any pharmacokinetic data for fenfluramine. |
| PD | Malik_2025 | not_relevant | 0 | 0 | The paper describes a machine learning model for classifying EGFR inhibitors and does not contain any pharmacodynamic or exposure-response data for fenfluramine. |
| PGx | Martin_2022 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interaction potential and metabolic pathways (CYP enzymes) but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Martin_2022_2 | not_relevant | 0 | 0 | The paper evaluates in vitro drug-drug interaction potential (CYP inhibition/induction and transporter inhibition) of fenfluramine, not the effect of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | McComic_2026 | irrelevant | 0 | 0 | The paper studies isoxazoline ectoparasiticides (e.g., fluralaner, mCMV280) and does not mention or report pharmacokinetic parameters for fenfluramine. |
| PD | McElroy_1988 | not_relevant | 0 | 0 | The paper focuses on the discriminative stimulus properties of clenbuterol, not fenfluramine, and does not report any pharmacodynamic parameters for fenfluramine. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel CAR agonists and does not report pharmacokinetic parameters for fenfluramine. |
| PD | Mittur_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of fenfluramine and norfenfluramine in subjects with hepatic impairment and does not report any pharmacodynamic or exposure-response data. |
| popPK | Ni_2004 | irrelevant | 0 | 0 | The study focuses on the vasoactive pharmacodynamics of the metabolite norfenfluramine and does not report any pharmacokinetic parameters for fenfluramine. |
| popPK | Ni_2005 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of arterial contraction in mice, not a pharmacokinetic study, and reports no disposition parameters for fenfluramine. |
| PD | Nickel_1986 | not_relevant | 1 | 0 | The text is an abstract that qualitatively states pharmacodynamic activity is tied to plasma levels but does not provide numeric PD parameters, dose-response curves, or specific concentration-effect data. |
| popPK | Nicolai_2024 | irrelevant | 0 | 0 | The paper is an organic chemistry study on the synthesis of bicyclo[4.1.1]octanes and does not involve fenfluramine or pharmacokinetics. |
| PD | Nicolai_2024 | not_relevant | 0 | 0 | The paper describes a Lewis acid-catalyzed organic synthesis reaction ([4+2] annulation) and contains no pharmacodynamic, exposure-response, or dose-response data for fenfluramine or any other drug. |
| PD | Odi_2021 | not_relevant | 1 | 0 | The text is a narrative review discussing mechanisms and clinical efficacy without providing specific numeric PD parameters, concentration-effect curves, or PK/PD modeling results. |
| PD | Pan_2025 | not_relevant | 0 | 0 | The paper describes an immunoassay method for detecting fenfluramine in food, not a pharmacodynamic or exposure-response study in biological subjects. |
| PD | Pigliasco_2024 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for quantifying fenfluramine and cannabidiol in plasma and reports mean plasma concentrations, but it does not present any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| PGx | Reist_2004 | not_relevant | 2 | 5 | The study investigates the association between 5-HT2A genotypes and fenfluramine-induced prolactin release (a PD parameter) but explicitly reports that no significant effects of either polymorphism were associated with fenfluramine-stimulated prolactin release. |
| PD | Roberti_2025 | not_relevant | 1 | 0 | The text is a review of drug-drug interactions in epilepsy syndromes and does not report specific numeric pharmacodynamic parameters or exposure-response relationships for fenfluramine. |
| PGx | Roberti_2025 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in epilepsy syndromes and does not report pharmacogenomic effects on fenfluramine PK/PD parameters. |
| PD | Robinson_1989 | not_relevant | 0 | 0 | The paper investigates the mechanism of 5-HT and dopamine release evoked by tetrahydroaminoacridine, not fenfluramine, and does not report any exposure-response or dose-response PD parameters for fenfluramine. |
| popPK | Rosencrans_2025 | irrelevant | 0 | 0 | The paper is a molecular biology study on PINK1/Parkin mitophagy activators (FB231, MTK458) and does not involve fenfluramine or report its pharmacokinetic parameters. |
| PD | Rosencrans_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacology of FB231 and MTK458, not fenfluramine. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | The evidence describes a mechanistic study on transporter substrates and contains no pharmacokinetic parameters or numeric values for fenfluramine. |
| PD | Rothman_2003 | not_relevant | 0 | 0 | The text only identifies fenfluramine as a substrate for norepinephrine transporters and does not report any pharmacodynamic, exposure-response, or dose-response data or numeric parameters. |
| popPK | Rothman_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin transporter modulation using rat brain synaptosomes and does not report pharmacokinetic parameters for fenfluramine. |
| PD | Rothman_2010 | not_relevant | 4 | 2 | The paper reports in vitro dose-response parameters (EC50, Emax) for fenfluramine as a substrate, but does not provide the specific numeric values in the text, nor does it model fenfluramine as a drug with a pharmacodynamic effect on a biological endpoint. |
| popPK | Sarkar_2021 | irrelevant | 0 | 0 | The paper is a computational study on quinoline inhibitors for SARS-CoV-2 and does not involve fenfluramine or report any pharmacokinetic parameters. |
| PD | Sarkar_2021 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and MD simulations) of quinoline inhibitors for SARS-CoV-2 proteins and does not contain any pharmacokinetic or pharmacodynamic data for fenfluramine. |
| popPK | Schaduangrat_2023 | irrelevant | 0 | 0 | The paper is a machine learning study for predicting estrogen receptor inhibitors and does not contain any pharmacokinetic data for fenfluramine. |
| PD | Schaduangrat_2023 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting estrogen receptor inhibitors and does not contain any pharmacodynamic or exposure-response data for fenfluramine. |
| PD | Schechter_1981 | not_relevant | 3 | 2 | The paper reports qualitative behavioral effects (pentobarbital-like responding) for fenfluramine at specific doses but does not provide numeric PD parameters (e.g., ED50, Emax) or a quantitative dose-response curve analysis for fenfluramine itself. |
| PD | Schechter_1985 | not_relevant | 3 | 2 | The paper reports a dose-response curve for d-amphetamine (with ED50 values) but only provides qualitative descriptions ("intermediate results") for fenfluramine without numeric PD parameters or a defined dose-effect curve for the target drug. |
| popPK | Schulz_2026 | irrelevant | 0 | 0 | The paper is a structural biology and medicinal chemistry study on KIT/PDGFRA inhibitors for GIST and does not involve fenfluramine or pharmacokinetic parameters. |
| PD | Schulz_2026 | not_relevant | 0 | 0 | The paper focuses on the structural biology and chemical synthesis of kinase inhibitors for GIST, reporting no pharmacokinetic or pharmacodynamic data for fenfluramine. |
| popPK | Sheeni_2025 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic potency (ED50, EC50) and concentration-response relationships in mice, reporting only single-timepoint concentrations at peak effect rather than quantitative pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | Sheeni_2026 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic potency (EC50/ED50) and neurotoxicity rather than reporting quantitative pharmacokinetic disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Siam_2026 | irrelevant | 0 | 0 | The paper is a narrative review of the medicinal plant Lannea coromandelica and does not contain any pharmacokinetic data or parameters for fenfluramine. |
| PD | Siam_2026 | not_relevant | 0 | 0 | The paper is a narrative review of the medicinal plant Lannea coromandelica and does not contain any pharmacodynamic or exposure-response data for fenfluramine. |
| PGx | Souche_1991 | not_relevant | 2 | 0 | The paper describes a study protocol and pilot results for citalopram/lithium, mentioning fenfluramine only as a probe for serotonergic function and noting that pharmacogenetics were assessed, but it does not report specific data on how gene variants change fenfluramine PK/PD parameters. |
| PGx | Surdi_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (seizure frequency, cognitive status) in Dravet syndrome patients and does not report pharmacokinetic or pharmacodynamic parameters modified by genetic variants. |
| popPK | Sánchez_1995 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice where fenfluramine is used as a serotonergic probe, and it contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and antiplasmodial activity of HDAC inhibitors and does not involve fenfluramine or report its pharmacokinetic parameters. |
| PD | Tavares_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for HDAC inhibitors against malaria parasites, but does not contain any data, analysis, or mention of fenfluramine. |
| PGx | Ton_2007 | not_relevant | 0 | 0 | The paper investigates the association between dopamine gene polymorphisms and smoking cessation outcomes, not the pharmacokinetic or pharmacodynamic parameters of fenfluramine. |
| popPK | Tükenmez_2026 | irrelevant | 0 | 0 | The paper describes the development of new antibiotics (TriPcides) against Staphylococcus aureus and does not involve fenfluramine or pharmacokinetic parameters. |
| PD | Tükenmez_2026 | not_relevant | 0 | 0 | The paper describes the development of TriPcides (antibiotics) and their mechanism of action against bacteria; it does not contain any pharmacodynamic or exposure-response data for fenfluramine. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review on the design of HIV NNRTIs and does not contain any pharmacokinetic data for fenfluramine. |
| PD | Vanangamudi_2023 | not_relevant | 0 | 0 | The paper is a review on the design and development of NNRTIs and does not mention fenfluramine or report any pharmacodynamic or exposure-response data. |
| popPK | Wali_2026 | irrelevant | 0 | 0 | The paper is a review of natural products as kinase inhibitors in lung cancer and does not mention fenfluramine or report any pharmacokinetic parameters for it. |
| PD | Wali_2026 | not_relevant | 0 | 0 | The paper is a review of natural products as kinase inhibitors in lung cancer and does not contain any pharmacodynamic or exposure-response data for fenfluramine. |
| PD | Wee_2006 | not_relevant | 0 | 0 | The paper describes behavioral self-administration studies in rhesus monkeys and does not report pharmacokinetic data or quantitative exposure-response/dose-response modeling with numeric PD parameters. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper describes a deep learning model for drug discovery targeting YTHDC2 and does not involve fenfluramine or pharmacokinetic parameters. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper reports the discovery of a YTHDC2 inhibitor (DC2-C1) with an IC50, but does not contain any data, analysis, or mention of fenfluramine. |
| popPK | van_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of polymyxin B, not fenfluramine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fenfluramine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
