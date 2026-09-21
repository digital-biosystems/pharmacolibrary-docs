<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naloxone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Naloxone_Gu2023_reference&quot;,&quot;label&quot;:&quot;Gu_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_naloxone/Naloxone_Gu2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# naloxone

- **generic name:** naloxone
- **ATC codes:** `A06AH04`, `N02AA53`, `N02AA55`, `N02AD51`, `N02AX51`, `V03AB15`
- **DrugBank:** [DB01183](https://go.drugbank.com/drugs/DB01183)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Naloxone is an opioid antagonist medication used to block or reverse the effects of opioid drugs, particularly within the setting of drug overdoses which are rapidly becoming a leading cause of death worldwide.[A234594] More specifically, naloxone has a high affinity for μ-opioid receptors, where it acts as an inverse agonist, causing the rapid removal of any other drugs bound to these receptors.[A234594] When taken in large quantities, opioid medications such as [morphine], [hydromorphone], [methadone], [heroin], or [fentanyl] are capable of causing life-threatening symptoms such as respiratory depression, reduced heart rate, slurred speech, drowsiness, and constricted pupils.[A234594,L33724] If untreated, this can progress to vomiting, absent pulse and breathing, loss of consciousness, and even death.[L33724] Naloxone is indicated for the rapid reversal of these symptoms of central nervous system depression in opioid overdose.[A234589] It's important to note that naloxone only works on opioid receptors within the body, and is therefore not capable of reversing the effects of non-opioid medications such as stimulants like [methamphetamine] or [cocaine], or benzodiazepines like [lorazepam] or [diazepam]. 

Also known as the brand name product Narcan, naloxone is currently available by intramuscular (IM) or subcutaneous (SubQ) injection, nasal spray, or intravenous (IV) infusion.[L33729,L33739] Naloxone IM injections are commonly available in the form of "kits", which is ideal for making overdose treatment accessible and readily available for administration by minimally trained individuals within the community.[L33734] Kits commonly include the supplies necessary to treat an overdose in a non-medical setting such as alcohol swabs, syringes, a rescue breathing mask, and instructions for use. Frequently also carried by medical and emergency personnel and at events known to be associated with heavy drug use like music festivals, naloxone kits are considered a key comp

**Indication.** Naloxone nasal sprays are indicated for the reversal of an opioid overdose or suspected opioid overdose: it is intended for immediate administration as emergency therapy in settings where opioids may be present.[L33694,L45515] Intramuscular, intravenous, and subcutaneous injections are indicated for complete or partial reversal of opioid depression, diagnosis of known or suspected opioid overdose, and as an adjunct therapy in the treatment of septic shock.[L33739]

Sublingual tablets and films are formulated with [buprenorphine] for the treatment of opioid dependence.[L33714,L33719] Naloxone is also formulated with [pentazocine] as an oral tablet for severe pain.[L33744]

Intramuscular or subcutaneous naloxone autoinjectors are used for the emergency treatment of people 12 years of age and older where the use of high-potency opioids such as fentanyl analogues as a chemical weapon, is suspected.[L40758, L40763]

Naloxone has been used off-label for the treatment of neuraxial opioid-induced pruritus.[A234604]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 11:48 | 19:15 | 0/1/0 | 1/1/0 | 0/0/0 | 152,135/12,942 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 0/1 | 10/2 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Gu_2023_reference](drugs/drug_naloxone/Naloxone_Gu2023_reference.md) | Gu M et al., Population pharmacokinetics of buprenor…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1089862](https://doi.org/10.3389/fphar.2023.1089862) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yang_2024](drugs/drug_naloxone/pd_Yang_2024_ventilation.md) | Yang TE et al., Mechanistic pharmacokinetic-pharmacodyn…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13215](https://doi.org/10.1002/psp4.13215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Mu_2024](drugs/drug_naloxone/pd_Mu_2024_unknown.md) | Mu RJ et al., PBPK-PD model for predicting morphine p…, Acta pharmacologica Sinica (2024) | [10.1038/s41401-024-01255-2](https://doi.org/10.1038/s41401-024-01255-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=naloxone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | skeletal muscle | <sub>“…5 hours, and an AUC of 16.7-19.0 h\*ng/mL.[L33694] A 0.4 mg intramuscular dose reaches a C…”</sub> | prose |
| absorption | small intestine | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CES1` binder, `CYP2C19` substrate, `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | <sub>“…venous administration, naloxone is 25-40% eliminated in the urine within 6 hours, 50% in 2…”</sub> | prose |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), ESR1 (target), OPRD1 (target), OPRK1 (target), OPRM1 (target), TLR4 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 432 matched, 61 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dowling_2008.pdf` | Dowling J et al., Population pharmacokinetics of intraven…, Therapeutic drug monitoring (2008) | popPK | 10 | [10.1097/FTD.0b013e3181816214](https://doi.org/10.1097/FTD.0b013e3181816214) | [18641540](https://pubmed.ncbi.nlm.nih.gov/18641540) | The paper reports a population PK study for naloxone with all quantitative parameter values (CL, V, Q, Ka) explicitly listed in the text. |
| `Oh_2024.pdf` | Oh M et al., Machine Learned Classification of Ligan…, ACS chemical neuroscience (2024) | pd | 5 | [10.1021/acschemneuro.4c00212](https://doi.org/10.1021/acschemneuro.4c00212) | [38990780](https://www.ncbi.nlm.nih.gov/pubmed/38990780) | metadata signals extractable PD data (Emax) |
| `Long_2014.pdf` | Long Z et al., Amide alkaloids from Scopolia tangutica, Planta medica (2014) | pd | 4 | [10.1055/s-0034-1382961](https://doi.org/10.1055/s-0034-1382961) | [25127021](https://www.ncbi.nlm.nih.gov/pubmed/25127021) | metadata signals extractable PD data (EC50) |
| `Crist_2018.pdf` | Crist RC et al., Pharmacogenetic analysis of opioid depe…, The American journal of dru… (2018) | pgx | 8 | [10.1080/00952990.2017.1420795](https://doi.org/10.1080/00952990.2017.1420795) | [29333880](https://www.ncbi.nlm.nih.gov/pubmed/29333880) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Docci_2020.pdf` | Docci L et al., Construction and Verification of Physio…, The AAPS journal (2020) | pgx | 8 | [10.1208/s12248-020-00513-5](https://doi.org/10.1208/s12248-020-00513-5) | [33033903](https://www.ncbi.nlm.nih.gov/pubmed/33033903) | metadata signals extractable PGX data (UGT2B15, PK/PD-context) |
| `Ettienne_2019.pdf` | Ettienne EB et al., Pharmacogenomics and Opioid Use Disorde…, Journal of the National Med… (2019) | pgx | 8 | [10.1016/j.jnma.2019.09.006](https://doi.org/10.1016/j.jnma.2019.09.006) | [31676110](https://www.ncbi.nlm.nih.gov/pubmed/31676110) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kaya-Akyüzlü_2022.pdf` | Kaya-Akyüzlü D et al., Effects of UGT2B7 rs7662029 and rs74393…, Environmental toxicology an… (2022) | pgx | 8 | [10.1016/j.etap.2022.103902](https://doi.org/10.1016/j.etap.2022.103902) | [35697190](https://www.ncbi.nlm.nih.gov/pubmed/35697190) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Bruce_2011.pdf` | Bruce RD et al., Tipranavir/ritonavir induction of bupre…, The American journal of dru… (2011) | pgx | 7 | [10.3109/00952990.2011.568081](https://doi.org/10.3109/00952990.2011.568081) | [21438849](https://www.ncbi.nlm.nih.gov/pubmed/21438849) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Ershad_2020.pdf` | Ershad M et al., Opioid Toxidrome Following Grapefruit J…, Journal of addiction medici… (2020) | pgx | 7 | [10.1097/ADM.0000000000000535](https://doi.org/10.1097/ADM.0000000000000535) | [31206401](https://www.ncbi.nlm.nih.gov/pubmed/31206401) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Grahl_2025.pdf` | Grahl J et al., Pharmacogenetic Evaluation of Hospitali…, Hospital pharmacy (2025) | pgx | 5 | [10.1177/00185787251339360](https://doi.org/10.1177/00185787251339360) | [40406364](https://www.ncbi.nlm.nih.gov/pubmed/40406364) | metadata signals extractable PGX data (CYP1A2) |

<sub>queue written 2026-09-11T11:39:51.988599+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Huniti_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for naloxegol, a derivative of naloxone, not for naloxone itself. |
| PGx | Al-Huniti_2016 | not_relevant | 0 | 0 | The study analyzes the pharmacokinetics of naloxegol (a naloxone derivative) and reports effects of CYP3A4 inhibitors/inducers, but does not report pharmacogenomic effects (gene variants) on naloxone or naloxegol PK/PD. |
| popPK | Al-Huniti_2016_2 | irrelevant | 0 | 0 | The study focuses on naloxegol (a naloxone derivative) and reports exposure-response parameters, not pharmacokinetic disposition parameters for naloxone itself. |
| popPK | Algera_2019 | irrelevant | 2 | 0 | The paper is a review of PKPD modeling for opioid reversal and does not report original quantitative disposition parameters (CL, V, etc.) for naloxone. |
| PD | Algera_2019 | not_relevant | 2 | 0 | The text is a review abstract that describes the types of PK/PD models used in the literature but does not report specific numeric PD parameters or extractable concentration-effect data for naloxone. |
| PGx | Bright_2021 | not_relevant | 0 | 0 | The study focuses on genetic risk scores for opioid addiction (OUD) and does not report pharmacokinetic or pharmacodynamic parameters of naloxone. |
| PGx | Bruce_2011 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (tipranavir/ritonavir) on buprenorphine metabolism, not a pharmacogenomic effect of a gene variant on naloxone. |
| PGx | Busch_2018 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying naloxone glucuronide in intestinal microsomes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Busse_2020 | not_relevant | 0 | 0 | The paper focuses on in vitro UGT isoform contributions to naloxone metabolism using pooled liver microsomes and does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Crist_2018 | not_relevant | 0 | 0 | The study analyzes pharmacogenetic associations with dropout rates and dose for methadone and buprenorphine/naloxone, but does not report specific pharmacokinetic or pharmacodynamic parameters for naloxone. |
| PGx | Crist_2021 | not_relevant | 0 | 0 | The study investigates the molecular mechanism of a genetic variant (transcription factor binding) and does not report any pharmacokinetic or pharmacodynamic parameters of naloxone. |
| PGx | Dayer_1997 | not_relevant | 0 | 0 | The paper discusses the pharmacology of tramadol and mentions naloxone only as an antagonist that partially inhibits tramadol's effect, without reporting any pharmacogenomic effects on naloxone's PK or PD parameters. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study focuses on the mechanism of thalidomide in neuropathic pain, using naloxone only as a pharmacological antagonist to block opioid receptors, with no pharmacokinetic parameters reported. |
| PGx | Di_2005 | not_relevant | 0 | 0 | The paper describes a method for determining UGT selectivity and identifies UGT2B7 as the enzyme for naloxone, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Docci_2020 | not_relevant | 0 | 0 | The paper simulates the impact of UGT2B15 polymorphisms only for oxazepam and lorazepam, not for naloxone. |
| PGx | Ershad_2020 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (grapefruit juice and methadone) and does not report any pharmacogenomic effects on naloxone. |
| PGx | Ettienne_2019 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of buprenorphine (CYP3A4/5) and does not report any pharmacokinetic or pharmacodynamic effects of gene variants on naloxone. |
| popPK | Garimella_2014 | irrelevant | 1 | 0 | Naloxone is a co-administered component of the buprenorphine/naloxine formulation used as a probe drug, and no specific pharmacokinetic parameters for naloxone are reported. |
| PGx | Grahl_2025 | not_relevant | 2 | 5 | The study reports associations between genotypes and the clinical event of opioid toxicity requiring naloxone, but does not measure or report changes in specific pharmacokinetic or pharmacodynamic parameters of naloxone itself. |
| PGx | Grün_2012 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of tilidine and its metabolites, not naloxone. |
| popPK | Kaski_2021 | irrelevant | 0 | 0 | The paper is a clinical outcome study on pain management and retention rates, not a pharmacokinetic study, and contains no PK parameters for naloxone. |
| popPK | Kaur_2026 | irrelevant | 0 | 0 | The study is a neuroimaging (DTI) analysis of brain white matter integrity and does not report any pharmacokinetic parameters for naloxone. |
| PGx | Kaya-Akyüzlü_2022 | not_relevant | 0 | 0 | The study explicitly states that the investigated polymorphisms did not affect the measured parameters, and no pharmacokinetic or pharmacodynamic effect of the genotype on naloxone or buprenorphine was reported. |
| PGx | Kaya-Akyüzlü_2022_2 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of buprenorphine, not naloxone. |
| PGx | Kaya-Akyüzlü_2023 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on buprenorphine and its metabolite norbuprenorphine, not on naloxone. |
| PGx | Kaya-Akyüzlü_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on buprenorphine levels, not naloxone. |
| PGx | Kazi_2024 | not_relevant | 0 | 0 | The study reports associations between genetic variants and clinical outcomes (urine drug screens/abstinence) rather than direct pharmacokinetic or pharmacodynamic parameters of naloxone. |
| PGx | Kim_2017 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of naloxone glucuronidation by AM-2201, not a pharmacogenomic effect (gene variant) on naloxone PK/PD. |
| PGx | King_2017 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between HCV antivirals and naloxone, not pharmacogenomic effects of gene variants on naloxone PK/PD. |
| PGx | Kosloski_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between antivirals and opioids, not pharmacogenomic effects of gene variants on naloxone PK/PD. |
| PGx | Lalezari_2015 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions between HCV antivirals and opioids, not pharmacogenomic effects on naloxone. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The paper is a mechanistic/pharmacological study on receptor activation and does not report any pharmacokinetic parameters for naloxone. |
| PD | Lin_2022 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/activation data (EC50) for a novel compound in the presence of naloxone, but does not report a pharmacodynamic exposure-response or dose-response relationship for naloxone itself. |
| popPK | Livett_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on chromaffin cells where naloxone is used only as a diagnostic agent to reverse peptide effects, with no pharmacokinetic parameters reported. |
| PD | Livett_1983 | not_relevant | 1 | 0 | The paper is a review of basic release mechanisms in chromaffin cells and mentions naloxone only qualitatively as a reversible agent for enkephalin effects, without providing any numeric PD parameters or concentration-effect data for naloxone. |
| popPK | Lohman_2015 | irrelevant | 0 | 0 | The paper focuses on the structure-activity relationships of nociceptin peptides and ORL-1 receptor binding, with naloxone mentioned only as a classic opioid antagonist that does not inhibit the receptor, providing no pharmacokinetic data for naloxone. |
| PD | Lohman_2015 | not_relevant | 0 | 0 | The paper focuses on the structure-activity relationships of nociceptin peptides and their interaction with ORL-1 receptors; naloxone is only mentioned as a classic opioid antagonist that does not inhibit these peptides, with no PD or exposure-response data provided for naloxone. |
| popPK | Long_2014 | irrelevant | 0 | 0 | The paper title indicates a study on amide alkaloids from a plant species, with no evidence of naloxone pharmacokinetics. |
| PD | Long_2014 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of amide alkaloids from Scopolia tangutica and does not contain any pharmacodynamic or exposure-response data for naloxone. |
| PGx | Mei_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of action of an enkephalinase inhibitor in a migraine model and does not report any pharmacogenomic effects on the PK or PD of naloxone. |
| popPK | Mu_2024 | irrelevant | 2 | 0 | The study focuses on morphine PK/PD with naloxone as an antagonist/comparator, and specific quantitative PK parameters for naloxone are not provided in the text (referenced in supplementary tables/figures not included). |
| PGx | Nelson_2025 | not_relevant | 2 | 1 | The paper reports a pharmacogenomic effect on the PK/PD of butorphanol (the drug causing toxicity), not naloxone (the antidote used for reversal). |
| PGx | Nielsen_2022 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the clinical efficacy (cocaine use) of buprenorphine, not on the pharmacokinetic or pharmacodynamic parameters of naloxone. |
| popPK | Oh_2024 | irrelevant | 0 | 0 | The paper focuses on machine learning classification of ligand intrinsic activities at the μ-opioid receptor, not on pharmacokinetic parameters for naloxone. |
| PD | Oh_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning classification of ligand intrinsic activities at the receptor level, not on pharmacokinetic/pharmacodynamic modeling or exposure-response relationships in a biological system. |
| popPK | Paredes_1999 | irrelevant | 0 | 0 | The paper is a behavioral study on female rat sexual behavior where naloxone is used only as a pharmacological antagonist to block opioid-mediated reward, with no pharmacokinetic parameters reported. |
| PGx | Reddy_2021 | not_relevant | 0 | 0 | The paper is a review on PBPK modeling for UGT substrates and does not report pharmacogenomic effects on naloxone PK/PD. |
| popPK | Rizk_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing suicidal ideation outcomes in opioid use disorder, not a pharmacokinetic study, and contains no PK parameters for naloxone. |
| PGx | Seguí_2020 | not_relevant | 0 | 0 | The paper reviews the pharmacogenomics of buprenorphine, not naloxone. |
| PGx | Tijani_2026 | not_relevant | 0 | 0 | The paper describes a novel drug delivery system (microneedle patches) and its pharmacokinetic performance in porcine models, but it does not investigate any gene variants or pharmacogenomic effects on naloxone. |
| PGx | Tournier_2010 | not_relevant | 0 | 0 | The paper investigates in vitro transporter interactions (P-gp/BCRP) for naloxone but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Tsekouras_2023 | relevant | 10 | 0 | The paper is a pharmacokinetic study of naloxone, but the provided evidence contains only equations and figure captions without the actual numeric parameter values (CL, V, ka, etc.). |
| popPK | Yang_2024 | relevant | 9 | 2 | The paper describes a population PK model for naloxone, but the specific numeric parameter values (CL, V, etc.) are stated to be in Appendix S1, which is not included in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_naloxone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
