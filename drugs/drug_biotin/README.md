<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;biotin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Biotin_Wang2023_reference&quot;,&quot;label&quot;:&quot;Wang_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_biotin/Biotin_Wang2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# biotin

- **generic name:** biotin
- **ATC codes:** `A11HA05`
- **DrugBank:** [DB00121](https://go.drugbank.com/drugs/DB00121)
- **groups:** approved, investigational, nutraceutical

## About

**Description.** A water-soluble, enzyme co-factor present in minute amounts in every living cell. It occurs mainly bound to proteins or polypeptides and is abundant in liver, kidney, pancreas, yeast, and milk.

**Indication.** For nutritional supplementation, also for treating dietary shortage or imbalance.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 11:15 | 1:05 | 1/0/0 | 1/0/0 | 0/0/0 | 31,441/1,175 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Wang_2023_reference](drugs/drug_biotin/Biotin_Wang2023_reference.md) | Wang Y et al., A picogram BA-ELISA quantification assa…, PLoS neglected tropical dis… (2023) | [10.1371/journal.pntd.0011568](https://doi.org/10.1371/journal.pntd.0011568) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Niu_2024](drugs/drug_biotin/pd_Niu_2024_IC50.md) | Niu G et al., Leucinostatins target Plasmodium mitoch…, Parasites & vectors (2024) | [10.1186/s13071-024-06608-8](https://doi.org/10.1186/s13071-024-06608-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Niu_2024](drugs/drug_biotin/pd_Niu_2024_TB.md) | Niu G et al., Leucinostatins target Plasmodium mitoch…, Parasites & vectors (2024) | [10.1186/s13071-024-06608-8](https://doi.org/10.1186/s13071-024-06608-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Niu_2024](drugs/drug_biotin/pd_Niu_2024_unknown.md) | Niu G et al., Leucinostatins target Plasmodium mitoch…, Parasites & vectors (2024) | [10.1186/s13071-024-06608-8](https://doi.org/10.1186/s13071-024-06608-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=biotin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | lung | `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: ACACA (cofactor), ACACB (cofactor), HLCS (substrate), MCCC1 (cofactor), MCCC2 (cofactor), PC (cofactor), PCCA (cofactor), PCCB (cofactor), SLC5A6 (substrate), SLC5A8 (substrate).</sub>

## Coverage

- **PubMed hits:** 182 matched, 63 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2001.pdf` | Wang KS et al., The clearance and metabolism of biotin…, The Journal of nutrition (2001) | popPK | 9 | [10.1093/jn/131.4.1271](https://doi.org/10.1093/jn/131.4.1271) | [11285337](https://pubmed.ncbi.nlm.nih.gov/11285337) | The study reports quantitative pharmacokinetic parameters (half-lives) for biotin in pigs using a compartmental model, with values explicitly listed in the text. |
| `Ogden_2012.pdf` | Ogden A et al., Evaluation of pharmacokinetic/pharmacod…, Antimicrobial agents and ch… (2012) | pd | 5 | [10.1128/AAC.00090-11](https://doi.org/10.1128/AAC.00090-11) | [21986824](https://www.ncbi.nlm.nih.gov/pubmed/21986824) | metadata signals extractable PD data (PK/PD) |
| `Jackson_2015.pdf` | Jackson DN et al., Garcinia xanthochymus Benzophenones Pro…, Antimicrobial agents and ch… (2015) | pd | 4 | [10.1128/AAC.00820-15](https://doi.org/10.1128/AAC.00820-15) | [26195512](https://www.ncbi.nlm.nih.gov/pubmed/26195512) | metadata signals extractable PD data (EC50) |
| `Vlaming_2009.pdf` | Vlaming ML et al., Physiological and pharmacological roles…, Advanced drug delivery revi… (2009) | pgx | 7 | [10.1016/j.addr.2008.08.007](https://doi.org/10.1016/j.addr.2008.08.007) | [19118589](https://www.ncbi.nlm.nih.gov/pubmed/19118589) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Zhang_2009.pdf` | Zhang H et al., Facile detection of proteins on a solid…, Talanta (2009) | pgx | 7 | [10.1016/j.talanta.2009.04.056](https://doi.org/10.1016/j.talanta.2009.04.056) | [19576433](https://www.ncbi.nlm.nih.gov/pubmed/19576433) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Bathum_1998.pdf` | Bathum L et al., A dual label oligonucleotide ligation a…, Therapeutic drug monitoring (1998) | pgx | 5 | [10.1097/00007691-199802000-00001](https://doi.org/10.1097/00007691-199802000-00001) | [9485546](https://www.ncbi.nlm.nih.gov/pubmed/9485546) | metadata signals extractable PGX data (CYP2C19*1) |
| `Litos_2007.pdf` | Litos IK et al., Rapid genotyping of CYP2D6, CYP2C19 and…, Analytical and bioanalytica… (2007) | pgx | 5 | [10.1007/s00216-007-1593-4](https://doi.org/10.1007/s00216-007-1593-4) | [17909762](https://www.ncbi.nlm.nih.gov/pubmed/17909762) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-16T11:15:20.405708+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aoki_1995 | not_relevant | 0 | 0 | The paper describes a genetic disease (HCS deficiency) affecting biotin metabolism, not a pharmacogenomic effect of a gene variant on the PK/PD of biotin as a drug. |
| PGx | Bathum_1998 | not_relevant | 0 | 0 | The paper describes a genotyping assay for CYP2C19 and uses biotin only as a chemical label for the probe, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| popPK | Ben-Eliezer_2020 | irrelevant | 2 | 0 | The study focuses on MRI imaging of a biotinylated contrast agent (b-BSA-Gd-DTPA) in murine placentas rather than the pharmacokinetics of biotin itself, and no standard PK parameters (CL, V, ka) for biotin are reported. |
| PGx | Bognanni_2024 | not_relevant | 0 | 0 | The paper uses biotin as a targeting ligand for drug delivery and investigates gene expression levels, but does not report pharmacogenomic effects on the PK or PD parameters of biotin itself. |
| popPK | Bond_2018 | irrelevant | 0 | 0 | The paper studies the mechanism of action of a cancer drug (AK306) and uses biotin only as a chemical linker for binding assays, containing no pharmacokinetic data for biotin. |
| popPK | Bradley_2011 | irrelevant | 0 | 0 | The paper studies P2X7 receptor pharmacology and uses biotin only as a labeling reagent, not as the subject drug for pharmacokinetic analysis. |
| PD | Bradley_2011 | not_relevant | 0 | 0 | The paper reports receptor pharmacology (EC50/IC50) for P2X7 agonists/antagonists, not a pharmacodynamic exposure-response relationship for the drug biotin. |
| PGx | Brownsey_2006 | not_relevant | 0 | 0 | The paper is a review of acetyl-CoA carboxylase regulation and does not report pharmacogenomic effects on biotin pharmacokinetics or pharmacodynamics. |
| PGx | Báez-Saldaña_2009 | not_relevant | 0 | 0 | The study investigates the physiological effects of biotin deficiency/excess on reproduction in mice and does not report any pharmacogenomic effects (gene variants) on biotin pharmacokinetics or pharmacodynamics. |
| PGx | Cicalini_2021 | not_relevant | 0 | 0 | The paper describes a genetic disorder (biotinidase deficiency) affecting endogenous metabolism, not the pharmacokinetics or pharmacodynamics of biotin as an administered drug. |
| popPK | Cremonesi_1999 | irrelevant | 2 | 2 | The study focuses on the dosimetry of a radioimmunotherapy protocol where biotin is a carrier for Yttrium-90, rather than a pharmacokinetic study of biotin as a subject drug, and it reports residence times/doses rather than standard PK parameters like CL or V. |
| PGx | Dhaini_2003 | not_relevant | 0 | 0 | The paper investigates CYP3A4/5 expression as a biomarker for osteosarcoma prognosis, not the pharmacokinetics or pharmacodynamics of biotin. |
| PGx | Ding_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Artemetin in asthma and uses biotin only as a labeling reagent, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Donti_2016 | not_relevant | 0 | 0 | The paper describes a genetic disorder of biotin metabolism (holocarboxylase synthetase deficiency) and its clinical presentation, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of biotin as a drug. |
| PGx | Fetsch_2006 | not_relevant | 0 | 0 | The paper investigates the tissue localization of the ABCG2 transporter protein and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of biotin. |
| popPK | Foster_2007 | irrelevant | 0 | 0 | The study uses biotin as a chemical labeling reagent for protein characterization in Cryptococcus neoformans, not as a subject drug for pharmacokinetic analysis. |
| PD | Foster_2007 | not_relevant | 0 | 0 | The paper uses biotin as a chemical labeling reagent for protein isolation and characterization, not as a pharmacological agent, and reports no drug exposure-response or dose-response relationship. |
| popPK | Frankevich_2026 | irrelevant | 0 | 0 | The paper is a metabolomic study on amino acid dysregulation in gestational diabetes, where biotin is only mentioned as part of a metabolic pathway, not as a subject drug for pharmacokinetic analysis. |
| popPK | Goicolea_2022 | irrelevant | 0 | 0 | The paper describes a polymer-based ELISA mimic for lactoferrin detection where biotin is used only as a conjugate for competitive inhibition, not as a subject drug for pharmacokinetic analysis. |
| PD | Goicolea_2022 | not_relevant | 0 | 0 | The paper describes a synthetic polymer for lactoferrin detection and reports an EC50 for the assay's binding affinity, not a pharmacodynamic or exposure-response relationship for the drug biotin. |
| PGx | Gow_2020 | not_relevant | 0 | 0 | The paper investigates the mechanism of Dectin-1 S-nitrosylation and its effect on macrophage function, using biotin only as a chemical reagent in a detection assay, not as a drug subject to pharmacogenomic analysis. |
| PGx | Gowda_2022 | not_relevant | 0 | 0 | The paper describes a clinical case of biotinidase deficiency and its treatment, but does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of biotin. |
| popPK | Guo_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cobra venom cytotoxin, using biotin only as a component of the detection assay (biotin-avidin ELISA), not as the subject drug. |
| PGx | Hassan_2023 | not_relevant | 0 | 0 | The paper is a review of episodic ataxia and does not report pharmacogenomic effects on biotin PK/PD parameters. |
| PGx | Hasslacher_1993 | not_relevant | 0 | 0 | The paper describes the regulation of the yeast acetyl-CoA carboxylase gene (ACC1) and its role in fatty acid synthesis, not the pharmacokinetics or pharmacodynamics of the drug biotin in humans. |
| popPK | Jackson_2015 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Jackson_2015 | not_relevant | 0 | 0 | The paper investigates the antifungal activity of Garcinia xanthochymus benzophenones and their interaction with fluconazole, not the pharmacodynamics of biotin. |
| popPK | Jung_2024 | irrelevant | 0 | 0 | The study focuses on biotinylated nanoparticles as an MRI probe for ROS imaging and drug delivery, not on the pharmacokinetics of biotin itself. |
| PGx | Kojima_2006 | not_relevant | 0 | 0 | The paper investigates tissue engineering and cell attachment using the avidin-biotin system, not the pharmacokinetics or pharmacodynamics of biotin as a drug in relation to genetic variants. |
| PGx | Konstantou_2009 | not_relevant | 0 | 0 | The paper describes a genotyping assay method where biotin is used as a chemical label, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| popPK | Krzyzanski_2017 | irrelevant | 0 | 0 | The paper uses biotin as a labeling agent for red blood cells to study cell survival kinetics, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Litos_2007 | not_relevant | 0 | 0 | The paper describes a genotyping method using biotin as a reagent, not a pharmacogenomic study of biotin's PK/PD. |
| popPK | Lledó-García_2012 | irrelevant | 0 | 0 | The study focuses on modeling red blood cell life-spans, using biotin only as a labeling agent for RBCs rather than as the subject drug for pharmacokinetic analysis. |
| popPK | Mak_2024 | irrelevant | 0 | 0 | The paper focuses on the immunological properties of a vitamin B2 metabolite and uses biotin only as a chemical label for detection, not as a subject drug for pharmacokinetic analysis. |
| PGx | Mao_2011 | not_relevant | 0 | 0 | The paper investigates a genetic variant's effect on Wnt signaling, and biotin is used only as a chemical reagent for protein labeling, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Meguro_2022 | not_relevant | 2 | 5 | The paper reports a clinical case of safe pregnancy in a patient with a genetic deficiency, but it does not quantify how the genotype alters the pharmacokinetic or pharmacodynamic parameters of biotin. |
| PGx | Mei_2019 | not_relevant | 0 | 0 | The paper investigates the role of lncRNA ZBTB40-IT1 in osteoporosis and bone metabolism, not the pharmacokinetics or pharmacodynamics of the drug biotin. |
| PGx | Menke_2026 | not_relevant | 0 | 0 | The paper uses biotin as a chemical tag for proximity labeling in a proteomics study of Fabry disease, not as a drug subject to pharmacogenomic analysis. |
| PGx | Munnich_1981 | not_relevant | 2 | 5 | The paper describes a congenital metabolic disorder (biotin-dependent multiple carboxylase deficiency) and its response to biotin supplementation, but does not report a pharmacogenomic effect of a specific gene variant on the PK/PD of biotin as a drug in a healthy or general population context. |
| PGx | Munnich_1981_2 | not_relevant | 0 | 0 | The paper describes a metabolic disorder (Multiple Biotin-Dependent Carboxylase Deficiency) and its clinical response to biotin, but does not report a pharmacogenomic effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of biotin as a drug. |
| popPK | Niu_2024 | irrelevant | 0 | 0 | The paper studies leucinostatins as antimalarial agents, using biotin only as a chemical label for conjugation, and contains no pharmacokinetic data for biotin. |
| popPK | Ogden_2012 | irrelevant | 0 | 0 | no_text gate: only 190 chars of text extracted (&lt; 400) |
| PGx | Omran_2012 | not_relevant | 0 | 0 | The paper investigates ABCG2 expression as a prognostic marker in breast cancer and does not report pharmacokinetic or pharmacodynamic effects of biotin. |
| PGx | Opolka-Hoffmann_2021 | not_relevant | 0 | 0 | The paper studies the impact of immunogenicity (anti-drug antibodies) on the pharmacokinetics of therapeutic antibodies, not the pharmacogenomics of biotin. |
| PGx | Reche-López_2025 | not_relevant | 0 | 0 | The paper investigates biotin as a therapeutic agent for a genetic disorder (BPAN) via epigenetic mechanisms, not how a gene variant affects the pharmacokinetics or pharmacodynamics of biotin. |
| PGx | Ronquillo-Sánchez_2013 | not_relevant | 0 | 0 | The study investigates the effect of biotin on CYP1A enzyme expression in rats, not the effect of a gene variant on biotin's pharmacokinetics or pharmacodynamics. |
| PGx | Ruan_2021 | not_relevant | 0 | 0 | The paper describes the development of a PTH analogue modified with biotin to increase albumin affinity, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of biotin. |
| PGx | Semeraro_2022 | not_relevant | 0 | 0 | The paper reports on the incidence of biotinidase deficiency in a newborn screening program and does not report pharmacokinetic or pharmacodynamic parameters of biotin as a drug. |
| PGx | Shi_2016 | not_relevant | 0 | 0 | The paper investigates the efficacy of a drug delivery system (epirubicin-loaded microbubbles) on cancer cells, where biotin is merely a chemical component of the lipid microbubble structure, not the subject of pharmacogenomic analysis. |
| popPK | Shrestha_2016 | irrelevant | 0 | 0 | The study models red blood cell lifespan using biotin as a labeling agent, not as the subject drug for pharmacokinetic analysis. |
| PGx | Smirnova_2023 | not_relevant | 0 | 0 | The paper uses biotin as a chemical reagent for proximity labeling (TurboID) to study protein interactions, not as a drug subject to pharmacogenomic analysis. |
| popPK | Strating_2022 | irrelevant | 0 | 0 | The study focuses on a PDGFRβ-targeting nanobody for imaging, where biotin is used only as a labeling reagent, not as the subject drug for pharmacokinetic analysis. |
| PD | Strating_2022 | not_relevant | 3 | 2 | The paper reports binding affinity (EC50) for a nanobody tracer, which is a pharmacological binding parameter, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug biotin or the nanobody's therapeutic effect. |
| PGx | Thompson_2023 | not_relevant | 0 | 0 | The paper reports a clinical case of a metabolic disorder treated with biotin, but does not report pharmacogenomic effects on biotin's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tie_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine on hematopoiesis and mentions biotin synthesis as a pathway, but does not report pharmacogenomic effects on biotin PK/PD parameters. |
| PGx | Underwood_2025 | not_relevant | 0 | 0 | The paper uses biotin as a chemical reagent for proximity labeling (TurboID) to identify protein ligands, not as a drug subject to pharmacogenomic analysis. |
| PGx | Vlaming_2009 | not_relevant | 0 | 0 | The paper discusses the physiological role of ABCG2 in secreting biotin into breast milk but does not report a pharmacogenomic effect on the PK or PD parameters of biotin as a drug. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rLj-RGD3, a toxin protein, using a biotin-avidin ELISA assay, so biotin is a reagent rather than the subject drug. |
| PGx | Weyandt_2022 | not_relevant | 0 | 0 | The paper focuses on the genomics and evolution of Wolbachia endosymbionts in nematodes, not on pharmacogenomics or the pharmacokinetics/pharmacodynamics of biotin in humans. |
| PGx | Xue_2014 | not_relevant | 0 | 0 | The paper describes a diagnostic method for EGFR mutations using biotin as a chemical label, not a pharmacogenomic study of biotin's pharmacokinetics or pharmacodynamics. |
| PGx | Yamamoto_1993 | not_relevant | 0 | 0 | The paper investigates the cellular localization of CYP2D6 in autoimmune hepatitis and does not report pharmacogenomic effects on the PK or PD of biotin. |
| PGx | Yılmaz_2024 | not_relevant | 0 | 0 | The paper describes a genetic metabolic disorder (biotinidase deficiency) and its clinical/genetic spectrum, not the pharmacogenomics of biotin as a drug (i.e., how variants affect the PK/PD of exogenous biotin administration). |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper describes a chemiluminescent detection method using a biotin-polymer and does not report any pharmacogenomic effects on biotin pharmacokinetics or pharmacodynamics. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The paper describes a biosensor for detecting the CYP2C19*2 allele and uses biotin only as a chemical linker for probe immobilization, not as the drug of interest for pharmacokinetic or pharmacodynamic analysis. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper describes an immunoassay for semicarbazide where biotin is used only as a derivatizing agent/linker, not as the subject drug for pharmacokinetic analysis. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper describes an immunoassay method for detecting semicarbazide; the reported EC50 values refer to the analytical sensitivity of the assay, not a pharmacodynamic drug-response relationship. |
| PGx | Zhou_2023 | not_relevant | 0 | 0 | The paper investigates the role of the ABCG2 gene in milk fat synthesis and biotin secretion in buffaloes, not the pharmacokinetics or pharmacodynamics of biotin as a drug in humans. |
| PGx | Ürey_2023 | not_relevant | 0 | 0 | The paper reports clinical cases of succinate dehydrogenase deficiency and mentions biotin as part of a treatment cocktail, but it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of biotin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_biotin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
