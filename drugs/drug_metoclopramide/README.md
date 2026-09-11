# metoclopramide

- **generic name:** metoclopramide
- **ATC codes:** `A03FA01`
- **DrugBank:** [DB01233](https://go.drugbank.com/drugs/DB01233)
- **groups:** approved, investigational

## About

**Description.** Diabetic gastroparesis is a condition that causes frequent nausea and vomiting, which has a negative impact on quality of life and poses a significant burden on the healthcare system.[A184934] Metoclopramide is a dopamine antagonist used to treat nausea and vomiting that may be associated with diabetic gastroparesis in addition to gastroesophageal reflux disease (GERD). It can also be used to prevent nausea or vomiting associated with chemotherapy or certain surgical or diagnostic procedures.[L8417] 

One unique property of this drug is that it does not increase gastric acid secretion. It is available in the oral tablet form or in solution, and can also be administered through the intravenous route.[T683] Metoclopramide was initially approved by the FDA in 1980.[A184922]

**Indication.** Metoclopramide in the oral tablet form is used for symptomatic treatment of both acute and recurrent diabetic gastroparesis, in addition to the treatment of gastroesophageal reflux disease (GERD) in patients who have failed to respond to traditional therapy.[L8414] A nasal spray formulation is also indicated to treat adults with acute, recurrent diabetic gastroparesis.[L14381]

In the intravenous injection form, it is indicated for the above conditions as well as for the prevention of vomiting that may follow emetogenic chemotherapy or nausea and vomiting after surgery. Intravenous metoclopramide facilitates intubation of the small bowel and stimulates gastric emptying and barium flow in patients who require radiological examination of the stomach or small intestine.  In some cases, the delay of gastrointestinal emptying interferes with the radiographic visualization of the gastrointestinal tract, and metoclopramide is used to facilitate emptying in these cases, allowing for adequate diagnostic visualization.[L8417]

Some off-label uses of metoclopramide include the management of radiation-induced nausea and vomiting, gastric bezoars, intractable hiccups, and migraine pain.[A184961,A184964,A184967,A40105]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:40 | 24:07 | 1/1/1 | 0/0/0 | 0/0/2 | 168,055/30,835 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 6/7 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ge_2020](drugs/drug_metoclopramide/Metoclopramide_Ge2020_reference.md) | Ge S et al., Population Pharmacokinetics of Metoclop…, Clinical and translational… (2020) | [10.1111/cts.12803](https://doi.org/10.1111/cts.12803) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.0171)</sub><br><sub>route_to: `human_review`</sub> | [Brandon_2024](drugs/drug_metoclopramide/Metoclopramide_Brandon2024_reference.md) | Brandon AM et al., Evaluation of pharmacokinetics of metoc…, Veterinary surgery : VS (2024) | [10.1111/vsu.14128](https://doi.org/10.1111/vsu.14128) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Bateman_1978](drugs/drug_metoclopramide/Metoclopramide_Bateman1978_reference.md) | Bateman DN et al., Pharmacokinetic and concentration-effec…, British journal of clinical… (1978) | [10.1111/j.1365-2125.1978.tb04604.x](https://doi.org/10.1111/j.1365-2125.1978.tb04604.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q22` · CL | metabolism | [Fink_2023](drugs/drug_metoclopramide/pgx_Fink_2023_CYP2D6_Q22.md) | Fink FM et al., Case report: metoclopramide induced acu…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1201566](https://doi.org/10.3389/fphar.2023.1201566) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q22` · CL | metabolism | [Wong_2021](drugs/drug_metoclopramide/pgx_Wong_2021_CYP2D6_Q22.md) | Wong DY et al., Acute pharmacogenetic dystonic reaction…, Journal of medical case rep… (2021) | [10.1186/s13256-021-03022-x](https://doi.org/10.1186/s13256-021-03022-x) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 158 matched, 62 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bateman_1978.pdf` | Bateman DN et al., Pharmacokinetic and concentration-effec…, British journal of clinical… (1978) | popPK | 10 | [10.1111/j.1365-2125.1978.tb04604.x](https://doi.org/10.1111/j.1365-2125.1978.tb04604.x) | [728283](https://pubmed.ncbi.nlm.nih.gov/728283) | The paper reports quantitative PK parameters (clearance, half-lives) for metoclopramide in humans, with values explicitly present in the text. |
| `Huhn_1992.pdf` | Huhn JC et al., Pharmacokinetics of metoclopramide in g…, Journal of veterinary pharm… (1992) | popPK | 10 | [10.1111/j.1365-2885.1992.tb00982.x](https://doi.org/10.1111/j.1365-2885.1992.tb00982.x) | [1573702](https://pubmed.ncbi.nlm.nih.gov/1573702) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution) for metoclopramide in goats, with values explicitly stated in the text. |
| `Jones_1994.pdf` | Jones RD et al., Bioavailability and pharmacokinetics of…, Journal of veterinary pharm… (1994) | popPK | 10 | [10.1111/j.1365-2885.1994.tb00224.x](https://doi.org/10.1111/j.1365-2885.1994.tb00224.x) | [8040934](https://pubmed.ncbi.nlm.nih.gov/8040934) | The study reports quantitative pharmacokinetic parameters (CL, Vd, half-lives) for metoclopramide in cattle with specific numeric values present in the text. |
| `Kearns_1988.pdf` | Kearns GL et al., Metoclopramide pharmacokinetics and pha…, Journal of pediatric gastro… (1988) | popPK | 10 | [10.1097/00005176-198811000-00005](https://doi.org/10.1097/00005176-198811000-00005) | [3199269](https://pubmed.ncbi.nlm.nih.gov/3199269) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life, elimination rate) for metoclopramide in infants with values explicitly listed in the text. |
| `Ross-Lee_1981.pdf` | Ross-Lee LM et al., Single-dose pharmacokinetics of metoclo…, European journal of clinica… (1981) | popPK | 10 | [10.1007/BF00542101](https://doi.org/10.1007/BF00542101) | [7286058](https://pubmed.ncbi.nlm.nih.gov/7286058) | The evidence explicitly reports quantitative PK parameters (CL, V, t1/2) for metoclopramide in a human study. |
| `Kearns_1998.pdf` | Kearns GL et al., Pharmacokinetics of metoclopramide in n…, Journal of clinical pharmac… (1998) | popPK | 9 | [10.1002/j.1552-4604.1998.tb04400.x](https://doi.org/10.1002/j.1552-4604.1998.tb04400.x) | [9549642](https://pubmed.ncbi.nlm.nih.gov/9549642) | The study reports quantitative PK parameters for metoclopramide in neonates, but the specific numeric values are not listed in the provided text, only relative comparisons to adult data. |
| `Vlase_2006.pdf` | Vlase L et al., Pharmacokinetic interaction between flu…, Biopharmaceutics & drug dis… (2006) | popPK | 9 | [10.1002/bdd.510](https://doi.org/10.1002/bdd.510) | [16770757](https://pubmed.ncbi.nlm.nih.gov/16770757) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2) for metoclopramide in humans, with all numeric values explicitly present in the text. |
| `Dolton_2012.pdf` | Dolton MJ et al., Multicenter study of posaconazole thera…, Antimicrobial agents and ch… (2012) | pd | 5 | [10.1128/AAC.00802-12](https://doi.org/10.1128/AAC.00802-12) | [22890761](https://www.ncbi.nlm.nih.gov/pubmed/22890761) | metadata signals extractable PD data (exposure-response) |
| `Corsi_1991.pdf` | Corsi M et al., Pharmacological analysis of 5-hydroxytr…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12494.x](https://doi.org/10.1111/j.1476-5381.1991.tb12494.x) | [1797331](https://www.ncbi.nlm.nih.gov/pubmed/1797331) | metadata signals extractable PD data (EC50) |
| `Eglen_1990.pdf` | Eglen RM et al., Characterization of 5-HT3 and 'atypical…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14113.x](https://doi.org/10.1111/j.1476-5381.1990.tb14113.x) | [2076474](https://www.ncbi.nlm.nih.gov/pubmed/2076474) | metadata signals extractable PD data (EC50) |
| `Faisal_2020.pdf` | Faisal R et al., Azithromycin induced contractile respon…, Pakistan journal of pharmac… (2020) | pd | 4 | not captured | [33832879](https://www.ncbi.nlm.nih.gov/pubmed/33832879) | metadata signals extractable PD data (Emax) |
| `Bae_2020.pdf` | Bae JW et al., Effects of CYP2D6 genetic polymorphism…, Archives of pharmacal resea… (2020) | pgx | 8 | [10.1007/s12272-020-01293-4](https://doi.org/10.1007/s12272-020-01293-4) | [33247397](https://www.ncbi.nlm.nih.gov/pubmed/33247397) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Desta_2002.pdf` | Desta Z et al., The gastroprokinetic and antiemetic dru…, Drug metabolism and disposi… (2002) | pgx | 8 | [10.1124/dmd.30.3.336](https://doi.org/10.1124/dmd.30.3.336) | [11854155](https://www.ncbi.nlm.nih.gov/pubmed/11854155) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Rauers_2010.pdf` | Rauers NI et al., Antagonistic effects of ondansetron and…, The journal of pain (2010) | pgx | 8 | [10.1016/j.jpain.2010.03.003](https://doi.org/10.1016/j.jpain.2010.03.003) | [20488759](https://www.ncbi.nlm.nih.gov/pubmed/20488759) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Alotaibi_2025.pdf` | Alotaibi BS et al., Effect of chloroquine pre-treatment on…, Expert opinion on drug safe… (2025) | pgx | 7 | [10.1080/14740338.2024.2387312](https://doi.org/10.1080/14740338.2024.2387312) | [39086080](https://www.ncbi.nlm.nih.gov/pubmed/39086080) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kaukab_2019.pdf` | Kaukab I et al., Evaluation of Pharmacokinetic Interacti…, Current drug metabolism (2019) | pgx | 7 | [10.2174/1389200220666191105115805](https://doi.org/10.2174/1389200220666191105115805) | [31702486](https://www.ncbi.nlm.nih.gov/pubmed/31702486) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kaukab_2020.pdf` | Kaukab I et al., Effect of clarithromycin pre-treatment…, Expert opinion on drug meta… (2020) | pgx | 7 | [10.1080/17425255.2020.1779699](https://doi.org/10.1080/17425255.2020.1779699) | [32524862](https://www.ncbi.nlm.nih.gov/pubmed/32524862) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kotlinska-Lemieszek_2014.pdf` | Kotlinska-Lemieszek A et al., Polypharmacy in patients with advanced…, Journal of pain and symptom… (2014) | pgx | 7 | [10.1016/j.jpainsymman.2014.03.008](https://doi.org/10.1016/j.jpainsymman.2014.03.008) | [24780183](https://www.ncbi.nlm.nih.gov/pubmed/24780183) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Labbé_1999.pdf` | Labbé L et al., Clinical pharmacokinetics of mexiletine, Clinical pharmacokinetics (1999) | pgx | 7 | [10.2165/00003088-199937050-00002](https://doi.org/10.2165/00003088-199937050-00002) | [10589372](https://www.ncbi.nlm.nih.gov/pubmed/10589372) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Tod_2011.pdf` | Tod M et al., Quantitative prediction of cytochrome P…, Clinical pharmacokinetics (2011) | pgx | 7 | [10.2165/11592620-000000000-00000](https://doi.org/10.2165/11592620-000000000-00000) | [21740075](https://www.ncbi.nlm.nih.gov/pubmed/21740075) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `unknown_2016.pdf` | unknown, Metoclopramide, domperidone: sudden car…, Prescrire international (2016) | pgx | 7 | not captured | [30645828](https://www.ncbi.nlm.nih.gov/pubmed/30645828) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Livezey_2014.pdf` | Livezey MR et al., Metoclopramide is metabolized by CYP2D6…, Xenobiotica; the fate of fo… (2014) | pgx | 5 | [10.3109/00498254.2013.835885](https://doi.org/10.3109/00498254.2013.835885) | [24010633](https://www.ncbi.nlm.nih.gov/pubmed/24010633) | metadata signals extractable PGX data (CYP2D6) |
| `Parkman_2012.pdf` | Parkman HP et al., Clinical response and side effects of m…, Journal of clinical gastroe… (2012) | pgx | 5 | [10.1097/MCG.0b013e3182522624](https://doi.org/10.1097/MCG.0b013e3182522624) | [22688145](https://www.ncbi.nlm.nih.gov/pubmed/22688145) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-09-11T02:26:29.294273+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alotaibi_2025 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (chloroquine inhibiting CYP2D6) rather than a pharmacogenomic effect based on genetic variants or genotypes. |
| PGx | Auvity_2018 | not_relevant | 0 | 0 | The study investigates the effect of pharmacological inhibition (tariquidar) on the PK of metoclopramide in baboons, not the effect of a gene variant/genotype. |
| PGx | Breuil_2023 | not_relevant | 0 | 0 | The paper investigates pharmacological modulation of P-glycoprotein function using [11C]metoclopramide as a PET tracer, not the effect of genetic variants on metoclopramide pharmacokinetics or pharmacodynamics. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of posaconazole, with metoclopramide serving only as a co-administered agent to test for interactions, and no PK parameters for metoclopramide are reported. |
| popPK | Claassen_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Corsi_1991 | irrelevant | 0 | 0 | The paper focuses on the pharmacological effects of 5-hydroxytryptamine on the urinary bladder and does not report pharmacokinetic parameters for metoclopramide. |
| PD | Corsi_1991 | not_relevant | 0 | 0 | The paper analyzes the effects of 5-hydroxytryptamine on the human urinary bladder and does not mention metoclopramide or report any PD parameters for it. |
| popPK | Cruz_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mediation in human placental vein, using metoclopramide only as a receptor antagonist, and reports no pharmacokinetic parameters. |
| PD | Cruz_1998 | not_relevant | 0 | 0 | The paper studies 5-HT receptor mediation in human placental vein and uses metoclopramide only as a non-effective antagonist; it does not report a pharmacodynamic exposure- or dose-response relationship for metoclopramide itself. |
| PGx | Davis_2016 | not_relevant | 0 | 0 | The paper is a review of antiemetic therapies and does not report any pharmacogenomic effects on metoclopramide PK or PD parameters. |
| PGx | Desta_2002 | not_relevant | 2 | 0 | The paper identifies CYP2D6 as the metabolic enzyme for metoclopramide in vitro but does not report in vivo pharmacokinetic or pharmacodynamic data stratified by genotype or phenotype. |
| popPK | Dolton_2012 | irrelevant | 0 | 0 | The paper focuses on posaconazole therapeutic drug monitoring and does not report pharmacokinetic parameters for metoclopramide. |
| PD | Dolton_2012 | not_relevant | 0 | 0 | The paper focuses on posaconazole, not metoclopramide. |
| popPK | Eglen_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on guinea-pig ileal contractions and does not report pharmacokinetic parameters for metoclopramide. |
| PD | Eglen_1990 | not_relevant | 0 | 0 | The paper focuses on 5-HT receptor characterization in guinea-pig ileum and does not mention metoclopramide or report any pharmacodynamic parameters for it. |
| popPK | Faisal_2020 | irrelevant | 0 | 0 | The paper focuses on the mechanistic effects of azithromycin on intestinal smooth muscle, not the pharmacokinetics of metoclopramide. |
| PD | Faisal_2020 | not_relevant | 0 | 0 | The paper focuses on azithromycin and intestinal smooth muscle, not metoclopramide. |
| PGx | Fink_2023 | not_relevant | 5 | 0 | The paper is a case report describing clinical adverse events (dystonia) in CYP2D6 poor metabolizers but does not report quantitative pharmacokinetic or pharmacodynamic parameter measurements. |
| PGx | Gronich_2022 | not_relevant | 0 | 0 | The study investigates the pharmacogenomic effect of CYP2C19 on proton pump inhibitors (PPIs), not metoclopramide. |
| PGx | Hernández-Lozano_2024 | not_relevant | 0 | 0 | The study uses metoclopramide as a radiotracer to measure P-glycoprotein function in mice, not to assess the pharmacokinetics of metoclopramide itself. |
| popPK | Ireland_1987 | irrelevant | 0 | 0 | The study is a pharmacological characterization of receptor antagonism (pKB values) in an isolated nerve preparation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Kaukab_2019 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (cilostazol) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Kaukab_2020 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (clarithromycin) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Kearns_1998 | relevant | 9 | 2 | The study reports quantitative PK parameters for metoclopramide in neonates, but the specific numeric values are not listed in the provided text, only relative comparisons to adult data. |
| PGx | Kotlinska-Lemieszek_2014 | not_relevant | 0 | 0 | The paper is a cross-sectional study on polypharmacy and drug-drug interactions in cancer patients and does not report any pharmacogenomic effects on metoclopramide PK/PD parameters. |
| PGx | Labbé_1999 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of mexiletine, not metoclopramide, and only mentions metoclopramide as a drug that enhances mexiletine absorption. |
| popPK | Linnik_1991 | irrelevant | 0 | 0 | The study is a pharmacological investigation of serotonergic mechanisms and receptor binding, not a pharmacokinetic study, and reports no disposition parameters for metoclopramide. |
| PGx | Livezey_2014 | not_relevant | 0 | 0 | The paper reports in vitro metabolic pathways and inhibition kinetics but does not report pharmacogenomic effects (genotype-based differences) on PK or PD parameters in humans. |
| PGx | Mills_2023 | not_relevant | 0 | 0 | The paper evaluates the congruence of clinical decision support alerts for metoclopramide, not the pharmacokinetic or pharmacodynamic effects of gene variants on the drug. |
| PGx | Nakamura_2026 | not_relevant | 0 | 0 | The paper is a case report of an adverse event (akathisia) and explicitly states that CYP2D6 genotype/phenotype was not evaluated, so no pharmacogenomic effect is reported. |
| PGx | Parkman_2012 | not_relevant | 5 | 5 | The paper reports associations between genotypes and clinical outcomes (efficacy/side effects) rather than specific pharmacokinetic or pharmacodynamic parameters. |
| PGx | Pottier_2016 | not_relevant | 0 | 0 | The study investigates the effect of P-glycoprotein (P-gp) transporter function on metoclopramide brain kinetics in rats, but it does not report any pharmacogenomic effects (i.e., no analysis of gene variants, genotypes, or phenotypes). |
| PGx | Rao_2010 | not_relevant | 2 | 0 | The paper is a review that mentions pharmacogenetics as a potential mechanism for tardive dyskinesia risk but does not report specific quantitative effects of gene variants on metoclopramide PK or PD parameters. |
| PGx | Rauers_2010 | not_relevant | 0 | 0 | The study analyzes CYP2D6 variants for tramadol metabolism, not metoclopramide, and does not report pharmacogenomic effects on metoclopramide PK or PD. |
| PGx | Sternieri_2006 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and mentions metoclopramide only as a CYP substrate in the context of interaction risks, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Tod_2011 | not_relevant | 0 | 0 | The paper focuses on CYP2D6-mediated drug-drug interactions and predictive modeling, not on pharmacogenomic effects of gene variants on metoclopramide PK/PD. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | The paper is a review of cardiac adverse effects and drug-drug interactions (CYP3A4 inhibition) but does not report pharmacogenomic effects of specific gene variants on metoclopramide PK/PD. |
| popPK | Walkembach_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interactions and does not report pharmacokinetic disposition parameters for metoclopramide. |
| PGx | Wong_2021 | not_relevant | 5 | 0 | The paper is a case report describing clinical adverse events (dystonia) associated with a genotype, but it does not report quantitative pharmacokinetic or pharmacodynamic parameter measurements. |
| popPK | Yang_1994 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of calcium mobilization where metoclopramide is used only as a receptor antagonist, not as a subject drug for pharmacokinetic analysis. |
| PGx | Yu_2006 | not_relevant | 2 | 0 | The paper identifies a new CYP2D6-mediated metabolite of metoclopramide and suggests a link to adverse reactions, but it does not report quantitative pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, EC50) stratified by genotype or phenotype. |
| PGx | Zoufal_2020 | not_relevant | 0 | 0 | The study uses metoclopramide as a PET tracer to measure P-glycoprotein (ABCB1) activity in mice, not to assess the effect of a gene variant on metoclopramide's pharmacokinetics or pharmacodynamics. |
| PGx | unknown_2016 | not_relevant | 0 | 0 | The paper discusses epidemiological risks of cardiac arrhythmia and the impact of CYP3A4 inhibitors on clearance, but does not report specific gene variants or genotypes affecting PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_metoclopramide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
