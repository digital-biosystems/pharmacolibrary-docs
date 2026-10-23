<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;vorinostat&quot;}]"></div>

# vorinostat

- **generic name:** vorinostat
- **ATC codes:** `L01XH01`
- **DrugBank:** [DB02546](https://go.drugbank.com/drugs/DB02546) · **PubChem:** [CID 5311](https://pubchem.ncbi.nlm.nih.gov/compound/5311)
- **molar mass:** 264.3202 g/mol (C14H20N2O3) — DrugBank
- **groups:** approved, investigational

## About

Vorinostat is a histone deacetylase inhibitor used as an anticancer drug, mainly for cutaneous T-cell lymphoma and studied in other blood cancers such as mycosis fungoides, acute myeloid leukemia, and lymphomas. It is an approved medicine, though an application for one product in the European Union was withdrawn, so its use is mainly outside the EU.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q905901](https://www.wikidata.org/wiki/Q905901) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.98).">in vitro</span> | [Wen_2014_Antiproliferative_activity](drugs/drug_vorinostat/pd_Wen_2014_Antiproliferative_activity.md) | Antiproliferative activity ← Vorinostat · inhibition effect | — | Wen JC et al., [Synthesis and antitumor activity of S-…, Yao xue xue bao = Acta phar… (2014) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vorinostat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HDAC1 (inhibitor), HDAC2 (inhibitor), HDAC3 (inhibitor), HDAC6 (inhibitor), HDAC8 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:26 | 28:20 | 0/0/0 | 0/1/0 | 0/0/0 | 1,066,057/10,022 | einfracz / qwen3.8-27b | 59 | 6/44 | 57/2 | 0 |

## Coverage

- **PubMed hits:** 668 matched, 139 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moj_2017.pdf` | Moj D et al., A physiologically based pharmacokinetic…, Cancer chemotherapy and pha… (2017) | popPK | 10 | [10.1007/s00280-017-3447-x](https://doi.org/10.1007/s00280-017-3447-x) | [28988277](https://pubmed.ncbi.nlm.nih.gov/28988277) | The study describes a PBPK/PD model for vorinostat, but specific numeric parameter values are not provided in the text. |
| `Muscal_2013.pdf` | Muscal JA et al., A phase I trial of vorinostat and borte…, Pediatric blood & cancer (2013) | popPK | 9 | [10.1002/pbc.24271](https://doi.org/10.1002/pbc.24271) | [22887890](https://pubmed.ncbi.nlm.nih.gov/22887890) | The study reports pharmacokinetics for vorinostat in humans and notes wide interpatient variability, but specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |

<sub>queue written 2026-10-06 22:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akada_2012 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of vorinostat in a JAK2V617F mouse model, but it does not examine the influence of a specific pharmacogenomic variant on vorinostat's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Akhlaq_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug synergy and does not report any pharmacokinetic parameters for vorinostat. |
| popPK | An_2026 | irrelevant | 0 | 0 | The paper is a genomic and clinical study of RB1 in hepatocellular carcinoma and does not report any pharmacokinetic parameters for vorinostat. |
| popPK | Biju_2026 | irrelevant | 0 | 0 | The paper is a review of endophyte-derived metabolites for antimicrobial resistance and does not study vorinostat or report its pharmacokinetic parameters. |
| popPK | Chang_2012 | irrelevant | 0 | 0 | The paper studies anti-HIV agents (enfuvirtide conjugates) and uses vorinostat (SAHA) only as a cell activation agent in in vitro assays, with no PK data reported for vorinostat. |
| popPK | Chen_2011 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on hydroxamic acid derivatives as CLA-1 up-regulators; it contains no pharmacokinetic data for vorinostat. |
| PGx | Chen_2022 | not_relevant | 2 | 0 | The paper reports genetic interactions affecting clinical response/resistance (survival and IC50/AUC in cell lines), not pharmacokinetic or pharmacodynamic parameters in patients. |
| PGx | Chikamatsu_2013 | not_relevant | 0 | 0 | The study does not involve a specific gene variant/genotype influencing the pharmacokinetics or pharmacodynamics of vorinostat. |
| PGx | Das_2025 | not_relevant | 0 | 0 | The paper is a review of hydroxamic acid-based HDAC inhibitors in breast cancer and does not report pharmacogenomic effects on the PK or PD of vorinostat. |
| popPK | De_2020 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of HIV latency reversal where vorinostat is used only as a comparator drug, containing no pharmacokinetic parameters for vorinostat. |
| popPK | Dias_2026 | irrelevant | 0 | 0 | The paper focuses on the anti-malarial activity and mechanism of 6-anilinopurine derivatives, with vorinostat used only as a reference inhibitor, providing no pharmacokinetic data for vorinostat. |
| PGx | Duan_2017 | not_relevant | 3 | 2 | The study investigates the effect of HDAC inhibitors (SAHA/TSA) on P-gp expression in cell lines, not the pharmacogenomic effect of a specific gene variant on the PK or PD of vorinostat. |
| PGx | Dyer_2024 | not_relevant | 0 | 0 | The paper characterizes a transgenic mouse line for retinal ganglion cells and has no connection to vorinostat or human pharmacogenomics. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | The paper is an EFSA update on the Qualified Presumption of Safety list for microorganisms and contains no information regarding vorinostat or pharmacokinetics. |
| popPK | Fleckenstein_2026 | irrelevant | 0 | 0 | The paper focuses on developing biosensors for trimethoprim and tetracycline and does not involve vorinostat or its pharmacokinetics. |
| PGx | Francis_2024 | not_relevant | 0 | 0 | The paper discusses ctDNA monitoring for treatment response in a patient treated with vorinostat, but does not report pharmacogenomic effects on vorinostat's PK/PD parameters. |
| popPK | Fujimoto_2010 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of drug synergy in cell lines and does not report pharmacokinetic parameters for vorinostat. |
| popPK | Furtado_2026 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of novel HDAC inhibitors, using vorinostat only as a mechanistic comparator for cellular activity and enzyme inhibition, without reporting quantitative pharmacokinetic parameters for vorinostat. |
| PGx | Gandia_2011 | not_relevant | 1 | 5 | The study explicitly states there was no correlation with UGT1A1 or UGT2B17 polymorphisms regarding vorinostat pharmacokinetics. |
| popPK | Gimenez_2026 | irrelevant | 0 | 0 | The paper is a mechanistic and in-vitro study of new HDAC6 inhibitors where vorinostat is used only as a comparator/control agent, with no PK parameters reported. |
| PGx | Goey_2016 | not_relevant | 4 | 2 | The paper is a review mentioning UGT2B17 polymorphisms for vorinostat, but it does not report specific quantitative PK/PD changes or fitted effect sizes in the provided text. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The paper is a machine learning study on predicting drug combinations and contains no pharmacokinetic data or parameters for vorinostat. |
| PGx | Guntner_2020 | not_relevant | 0 | 0 | The study measures cerebrospinal fluid drug concentrations to evaluate blood-brain barrier penetration; it does not report pharmacogenomic effects of gene variants on PK or PD. |
| popPK | Guo_2018 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacological assessment of vorinostat's anti-parasitic activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hassig_2008 | irrelevant | 0 | 0 | The study focuses on the antitumor activity of a new HDAC inhibitor (KD5170) and only mentions vorinostat as a clinical precedent without reporting its pharmacokinetic parameters. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics study on drug repositioning using transcriptomic data and does not report any pharmacokinetic parameters for vorinostat. |
| popPK | Hernandez-Paez_2025 | irrelevant | 0 | 0 | The paper is a pharmacogenomics study focusing on SNPs associated with diabetes drugs (metformin, DPP-4 inhibitors, etc.) in Colombian populations and does not report pharmacokinetic parameters for vorinostat. |
| PGx | Hou_2012 | not_relevant | 0 | 0 | The paper reports in vitro SAR and physicochemical properties of a new compound (NK-HDAC-1) and does not investigate pharmacogenomic effects on vorinostat. |
| PGx | Huijberts_2020 | not_relevant | 0 | 0 | The text is a study protocol/abstract that lists pharmacogenetic analysis only as an exploratory endpoint, without reporting any results or data. |
| popPK | Inayatullah_2026 | irrelevant | 0 | 0 | The paper is a pan-cancer genomic study on chemoresistance mechanisms and does not contain any pharmacokinetic data or parameters for vorinostat. |
| popPK | Jaster_2025 | irrelevant | 0 | 0 | The paper studies the pharmacology and neural mechanisms of psilocybin and oxycodone in mice, and does not mention or report pharmacokinetic parameters for vorinostat. |
| popPK | Jenkins_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for piperonyl butoxide (PBO) in mice, not vorinostat. |
| popPK | Kajiwara_2009 | irrelevant | 0 | 0 | The paper is an in-vitro study assessing drug combination efficacy in cell lines using E(max) and Loewe models, not pharmacokinetic disposition parameters. |
| PGx | Kavanaugh_2010 | not_relevant | 2 | 0 | The text mentions UGT1A1 polymorphisms as a *potential* predictor of toxicity but reports no specific pharmacogenomic study data, effect sizes, or quantitative PK/PD changes. |
| popPK | Kutkaite_2026 | irrelevant | 0 | 0 | The paper is a computational study on pan-cancer gene expression biomarkers for drug sensitivity in cell lines and does not report pharmacokinetic parameters for vorinostat. |
| popPK | Kwon_2025 | irrelevant | 0 | 0 | This is a toxicology and machine learning study analyzing OECD guideline data for reproductive/developmental toxicity; it does not report pharmacokinetic parameters for vorinostat. |
| PGx | LeBlanc_2022 | not_relevant | 1 | 0 | The paper reports a genotype associated with clinical response (efficacy) but does not report its effect on pharmacokinetic (PK) parameters or specific pharmacodynamic (PD) biomarkers (e.g., biomarker concentrations) of vorinostat. |
| PGx | Lee_2023 | not_relevant | 0 | 0 | The paper describes computational drug repurposing and general cell viability in Burkitt Lymphoma, but does not report a specific gene variant or genotype affecting a PK or PD parameter of vorinostat. |
| popPK | Leesang_2025 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of ATRA and ascorbate in myeloid leukemia, and vorinostat is only mentioned as a co-administered comparator agent, with no PK data reported. |
| PGx | Lin_2015 | not_relevant | 0 | 0 | The paper describes CYP450 induction/inhibition in rats, not a pharmacogenomic effect (gene variant impact) on vorinostat PK/PD. |
| popPK | Lin_2026 | irrelevant | 0 | 0 | This is an in vitro proteomic study of cancer cell lines, not a pharmacokinetic study, and reports no disposition parameters for vorinostat. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | The study focuses on nanocarrier drug delivery and immunotherapy mechanisms using doxorubicin and camptothecin/vorinostat conjugates in mice, reporting no population PK parameters for vorinostat. |
| PGx | McGee-Lawrence_2018 | not_relevant | 0 | 0 | The paper investigates the effect of the HDAC inhibitor vorinostat on osteoprotegerin expression in mice, but does not report any pharmacogenomic effect (gene variant altering PK/PD) on vorinostat. |
| popPK | Mejia_2014 | irrelevant | 0 | 0 | The study is an in-vitro screening for HIV-1 latency reversal agents and uses vorinostat (SAHA) only as a positive control, reporting no pharmacokinetic or disposition parameters for the drug. |
| popPK | Moj_2017 | relevant | 10 | 0 | The study describes a PBPK/PD model for vorinostat, but specific numeric parameter values are not provided in the text. |
| popPK | Muscal_2013 | relevant | 9 | 2 | The study reports pharmacokinetics for vorinostat in humans and notes wide interpatient variability, but specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| popPK | Naeem_2026 | irrelevant | 0 | 0 | The paper is a review of Terminalia arjuna for ulcerative colitis and does not contain any pharmacokinetic data for vorinostat. |
| PGx | Neumann_2016 | not_relevant | 1 | 0 | The paper reports age-dependent changes in UGT activity and vorinostat glucuronidation, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| PGx | Orfanos_2000 | not_relevant | 0 | 0 | The paper discusses a clinical syndrome involving androgens, unrelated to vorinostat pharmacogenomics. |
| popPK | Oyebade_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro cytotoxicity of a nanomedicine containing a generic macrocyclic HDAC inhibitor and an NIR dye, not a pharmacokinetic study of vorinostat. |
| popPK | Peer_2018 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of belinostat, and vorinostat is only mentioned in the introduction as a comparable drug without providing its PK parameters. |
| PGx | Peer_2018 | not_relevant | 2 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of belinostat; vorinostat is mentioned only as a class-mate for context. |
| PGx | Pishas_2018 | not_relevant | 0 | 0 | The paper investigates mechanisms of resistance to SP-2509 in Ewing sarcoma cell lines and mentions vorinostat sensitivity, but it does not report any pharmacogenomic effects of gene variants on the pharmacokinetic or pharmacodynamic parameters of vorinostat. |
| PGx | Qadri_2017 | not_relevant | 0 | 0 | The paper investigates the secondary metabolism of a fungus (Muscodor yucatanensis) using epigenetic modifiers, not the pharmacogenomics of vorinostat in humans or its PK/PD parameters. |
| PGx | Rai_2026 | not_relevant | 0 | 0 | The paper investigates the mechanistic targets of HDAC inhibitors (like vorinostat) and suggests HDAC enzyme activity is not the universal anticancer target, but it does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Rameika_2025 | not_relevant | 5 | 5 | The paper identifies a pharmacodynamic effect (increased cytotoxicity) and a metabolic pathway (acetylation) for vorinostat based on NAT2 alleles, but it does not report standard clinical pharmacokinetic (e.g., AUC, CL, t1/2) or pharmacodynamic (e.g., IC50, EC50) parameter changes in a human/clinical context, limiting its direct utility for standard PK/PD pharmacogenomic modeling. |
| popPK | Reeves_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the monoclonal antibody VRC01 and its effects on HIV-1 viral load, not the pharmacokinetics of vorinostat. |
| popPK | Rjoob_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics study on knowledge graphs for drug repurposing and does not report any pharmacokinetic parameters for vorinostat. |
| popPK | Rjoob_2026 | irrelevant | 0 | 0 | The paper is a machine learning/knowledge graph study on cardiovascular diseases and does not contain any pharmacokinetic data for vorinostat. |
| PGx | Robey_2024 | not_relevant | 0 | 0 | The paper focuses on resistance to romidepsin and states that the cell line is not resistant to vorinostat, without reporting specific pharmacogenomic effects on vorinostat PK/PD parameters. |
| popPK | Rossi_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro antiparasitic activity of SAHA analogues, with no pharmacokinetic or population-PK data for vorinostat. |
| popPK | Saha_2026 | irrelevant | 0 | 0 | The paper is a review on AI and machine learning in cancer research and contains no pharmacokinetic data or parameters for vorinostat. |
| PGx | Seo_2020 | not_relevant | 0 | 0 | The paper is a computational study using SNPs as input features to predict side effects; it does not report a specific genotype's effect on vorinostat's pharmacokinetics or pharmacodynamics. |
| PGx | Shah_2022 | not_relevant | 2 | 2 | The paper identifies vorinostat as a candidate drug for drug repositioning based on gene expression reversal (sRGES) and predicts its pharmacokinetic profile (CNS-MPO), but it does not report that a specific gene variant or genotype alters vorinostat's actual PK or PD parameters. |
| popPK | Shakil_2022 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity study using vorinostat as a positive control, not a pharmacokinetic study. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic screening assay focused on SIRT1 up-regulation, not a pharmacokinetic study of vorinostat. |
| popPK | Shin_2024 | irrelevant | 0 | 0 | The paper studies HIV-1 Tat inhibitors and mentions vorinostat (as SAHA) only as a mechanistic control for HDAC inhibition, without reporting any pharmacokinetic parameters for vorinostat. |
| PGx | Stark_2010 | not_relevant | 0 | 0 | The paper examines confounding variables (growth rate, EBV copy number) for drug cytotoxicity in cell lines and notes vorinostat, but does not report a specific gene variant effect on vorinostat PK or PD parameters. |
| PGx | Subash_2024 | not_relevant | 0 | 0 | The paper discusses in vitro metabolic scaling methods (RAF vs REF) for vorinostat but does not report pharmacogenomic effects or clinical PK/PD parameters linked to gene variants. |
| PGx | Takeuchi_2020 | not_relevant | 0 | 0 | The paper assesses pharmacodynamic biomarkers of vorinostat activity (e.g., BIM mRNA isoforms, acetylated histone H3) in a specific patient population, but does not report pharmacogenomic effects (i.e., the effect of genetic variants on PK/PD parameters). |
| PGx | Tanimoto_2017 | not_relevant | 2 | 2 | The paper investigates the mechanism of action of vorinostat (HDAC3 inhibition/BIM splicing) to overcome resistance to osimertinib, but it does not report pharmacogenomic changes in the pharmacokinetic or pharmacodynamic parameters of vorinostat itself. |
| popPK | Tanrikulu_2019 | irrelevant | 0 | 0 | The study investigates the in vitro effects of mesenchymal stem cells and vorinostat (SAHA) on glioblastoma cell apoptosis, containing no pharmacokinetic parameters or models. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | The paper describes the development of novel antimalarial HDAC inhibitors and uses vorinostat (SAHA) only as a comparator reference, not as the subject of pharmacokinetic analysis. |
| popPK | Tseng_2015 | irrelevant | 0 | 0 | The study focuses on the novel drug AR-42 in mice, using vorinostat only as a comparator agent for survival analysis without providing any pharmacokinetic parameters for vorinostat. |
| popPK | Tsiami_2024 | irrelevant | 0 | 0 | The paper investigates CRISPR-Cas9 screens and epigenetic mechanisms in medulloblastoma and does not involve vorinostat or pharmacokinetic parameter estimation. |
| popPK | Votruba_2026 | irrelevant | 0 | 0 | The paper reports cognitive and psychological safety outcomes in pediatric patients, containing no pharmacokinetic parameter values. |
| popPK | Waitman_2025 | irrelevant | 0 | 0 | The paper describes the discovery of novel HDAC6/AKT2 inhibitors for myeloid cancer and does not report pharmacokinetic parameters for vorinostat. |
| popPK | Walz_2022 | irrelevant | 0 | 0 | This is a general review paper discussing modeling and simulation for epigenetic modifier drugs without providing specific quantitative pharmacokinetic parameters for vorinostat. |
| PGx | Wang_2017 | not_relevant | 1 | 10 | The study focuses on the pharmacokinetics of SN-38 (iriotecan metabolite) and reports that vorinostat does not inhibit UGT1A9, failing to report a pharmacogenomic effect on vorinostat's own parameters. |
| PGx | Wang_2019_2 | not_relevant | 0 | 0 | The study investigates the effects of the drug (vorinostat/SAHA) on the expression of drug transporters in cell lines, not how a human genetic variant affects the pharmacokinetics or pharmacodynamics of the drug. |
| popPK | Wei_2014 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of HIV latency reversal by HDAC inhibitors, where vorinostat is used as a comparator agent rather than being the subject of a pharmacokinetic analysis. |
| PGx | Wei_2025 | not_relevant | 0 | 0 | The study investigates the molecular mechanism of ABCB1 regulation by HDAC5 in rat hepatocytes using SAHA (vorinostat) as a tool, but it does not report pharmacokinetic or pharmacodynamic parameters of vorinostat itself, nor does it involve human gene variants. |
| PGx | White_2018 | not_relevant | 0 | 0 | The study investigates the transcriptional modulation of Human Endogenous Retroviruses (HERVs) by vorinostat in primary CD4+ T cells, rather than examining a pharmacogenomic effect on a PK/PD parameter of the drug itself. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The paper investigates cytarabine-induced testicular toxicity in mice and does not involve vorinostat or any pharmacokinetic analysis. |
| PGx | You_2019 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of HDAC inhibitor-induced MDR1 upregulation in brain endothelial cells and does not report a pharmacogenomic association for vorinostat. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amlodipine and telmisartan, not vorinostat. |
| PGx | Zhao_2022 | not_relevant | 0 | 0 | The paper investigates transcriptomic changes associated with aging induced by cancer drugs, not pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zheng_2023 | not_relevant | 0 | 0 | The paper presents a machine learning framework (SCAD) for predicting drug sensitivity from single-cell RNA-seq data; it does not report pharmacogenomic studies of specific gene variants affecting the PK or PD of vorinostat. |
| PGx | Zhu_2016 | not_relevant | 0 | 0 | The paper describes a tumor model study where a specific genotype (Pten haploinsufficiency) alters the efficacy (pharmacodynamics) of vorinostat, but it is not a pharmacogenomic study of human genetic variants affecting PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvorinostat%5D&body=Drug%3A%20vorinostat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vorinostat/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
