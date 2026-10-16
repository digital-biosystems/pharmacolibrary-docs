<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;decitabine&quot;}]"></div>

# decitabine

- **generic name:** decitabine
- **ATC codes:** `L01BC08`
- **DrugBank:** [DB01262](https://go.drugbank.com/drugs/DB01262) · **PubChem:** [CID 451668](https://pubchem.ncbi.nlm.nih.gov/compound/451668)
- **molar mass:** 228.2053 g/mol (C8H12N4O4) — DrugBank
- **groups:** approved, investigational

## About

Decitabine is an anticancer antimetabolite used to treat myelodysplastic syndrome and acute myeloid leukemia. It is an approved medicine, with one product authorised in the European Union for myeloid leukemia, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1181878](https://www.wikidata.org/wiki/Q1181878) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:38 | 4:42 | 0/0/0 | 0/0/0 | 0/0/0 | 150,158/5,490 | ollama / qwen3.8:27b-mtp-q8_0 | 31 | 18/26 | 28/3 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=decitabine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CDA (substrate), CMPK1 (substrate), DCK (substrate), DNA (other/unknown), DNMT1 (inhibitor), DNMT3A (inhibitor), DNMT3B (inhibitor), HDAC1 (inhibitor), NME1 (substrate), SLC28A1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 297 matched, 128 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2019.pdf` | Zhou W et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1357](https://doi.org/10.1002/jcph.1357) | [30536675](https://pubmed.ncbi.nlm.nih.gov/30536675) | The paper describes a population PK model for decitabine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Agarwal_2019.pdf` | Agarwal S et al., Optimizing venetoclax dose in combinati…, Hematological oncology (2019) | pd | 5 | [10.1002/hon.2646](https://doi.org/10.1002/hon.2646) | [31251400](https://www.ncbi.nlm.nih.gov/pubmed/31251400) | metadata signals extractable PD data (exposure-response) |
| `Anders_2016.pdf` | Anders NM et al., Simultaneous quantitative determination…, Journal of chromatography.… (2016) | pd | 5 | [10.1016/j.jchromb.2016.03.029](https://doi.org/10.1016/j.jchromb.2016.03.029) | [27082761](https://www.ncbi.nlm.nih.gov/pubmed/27082761) | metadata signals extractable PD data (exposure-response) |
| `Minocha_2016.pdf` | Minocha M et al., Blockade of the High-Affinity Interleuk…, Clinical pharmacokinetics (2016) | pd | 5 | [10.1007/s40262-015-0305-z](https://doi.org/10.1007/s40262-015-0305-z) | [26242380](https://www.ncbi.nlm.nih.gov/pubmed/26242380) | metadata signals extractable PD data (sigmoid) |
| `Sun_2008.pdf` | Sun Y et al., Modulation of transcription parameters…, Molecular and cellular endo… (2008) | pd | 4 | [10.1016/j.mce.2008.05.008](https://doi.org/10.1016/j.mce.2008.05.008) | [18583028](https://www.ncbi.nlm.nih.gov/pubmed/18583028) | metadata signals extractable PD data (EC50) |
| `Jin_2004.pdf` | Jin B et al., CpG methylation of the mouse CYP1A2 pro…, Toxicology letters (2004) | pgx | 7 | [10.1016/j.toxlet.2004.03.016](https://doi.org/10.1016/j.toxlet.2004.03.016) | [15294342](https://www.ncbi.nlm.nih.gov/pubmed/15294342) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Oswald_2011.pdf` | Oswald S et al., LC-MS/MS method for the simultaneous de…, Journal of pharmaceutical a… (2011) | pgx | 7 | [10.1016/j.jpba.2011.01.019](https://doi.org/10.1016/j.jpba.2011.01.019) | [21310577](https://www.ncbi.nlm.nih.gov/pubmed/21310577) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shirai_2024.pdf` | Shirai K et al., Air-liquid interface culture and modifi…, Drug metabolism and pharmac… (2024) | pgx | 7 | [10.1016/j.dmpk.2023.100994](https://doi.org/10.1016/j.dmpk.2023.100994) | [38452616](https://www.ncbi.nlm.nih.gov/pubmed/38452616) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Tran_2016.pdf` | Tran JQ et al., Therapeutic protein-drug interaction as…, British journal of clinical… (2016) | pgx | 7 | [10.1111/bcp.12936](https://doi.org/10.1111/bcp.12936) | [26991517](https://www.ncbi.nlm.nih.gov/pubmed/26991517) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-15T03:34:50.706208+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdallah_2018 | not_relevant | 0 | 0 | The paper describes an LC-MS/MS method for sofosbuvir and daclatasvir, not decitabine, and does not report pharmacogenomic effects. |
| PGx | Abdel-Lateef_2019 | not_relevant | 0 | 0 | The paper describes an analytical method for daclatasvir, not a pharmacogenomic study of decitabine. |
| popPK | Agarwal_2019 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Agarwal_2019 | not_relevant | 0 | 0 | The paper analyzes venetoclax, not decitabine. |
| PGx | Aldapt_2026 | not_relevant | 0 | 0 | The paper is a clinical case report describing treatment outcomes and does not investigate the impact of gene variants on the pharmacokinetics or pharmacodynamics of decitabine. |
| popPK | Anders_2016 | irrelevant | 0 | 0 | no_text gate: only 243 chars of text extracted (&lt; 400) |
| PD | Anders_2016 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring genomic incorporation and DNA demethylation but does not report a pharmacodynamic model or numeric exposure-response parameters for decitabine. |
| PGx | Arimany-Nardi_2014 | not_relevant | 2 | 0 | The study reports that decitabine is not translocated by nucleoside transporters and is not transported by hOCT1/2, thus failing to demonstrate a pharmacogenomic effect on its PK/PD parameters. |
| PGx | Armstrong_2026 | not_relevant | 0 | 0 | The paper investigates genetic variation in glymphatic pathway genes (AQP4, DAG1, DTNA, SNTA1) and their association with Alzheimer's disease phenotypes (cognition, brain volume, Aβ burden), not the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Arora_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of decitabine in glioblastoma (epigenetic reprogramming) and builds a prognostic survival model, but it does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of decitabine. |
| popPK | Ataabadi_2023 | irrelevant | 0 | 0 | The study focuses on dacarbazine and enoxaparin, not decitabine, and reports no pharmacokinetic parameters for the target drug. |
| PD | Ataabadi_2023 | not_relevant | 0 | 0 | The paper studies dacarbazine and enoxaparin, not decitabine. |
| popPK | Badawi_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, with decitabine mentioned only as a co-administered agent. |
| PD | Badawi_2024 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationships for venetoclax, not decitabine. |
| popPK | Baker_2026 | irrelevant | 0 | 0 | The paper focuses on antibody-mediated delivery of BRM degraders in lung cancer models and does not involve decitabine or report any pharmacokinetic parameters for it. |
| PD | Baker_2026 | not_relevant | 0 | 0 | The paper describes antibody-drug conjugates (DACs) targeting BRM/BRG1, not decitabine, and does not report exposure-response or dose-response PD parameters for decitabine. |
| popPK | Balthasar_2026 | irrelevant | 0 | 0 | The paper describes a PK-PD model for degrader-antibody conjugates (DACs) and does not mention decitabine or report any pharmacokinetic parameters for it. |
| PD | Balthasar_2026 | not_relevant | 0 | 0 | The paper describes a PK/PD model for degrader-antibody conjugates (DAC/PROTAC) and does not report any pharmacodynamic data or parameters for decitabine. |
| PGx | Bejar_2014 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic effect (clinical response/survival) associated with TET2 mutations, but does not report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, receptor binding) of decitabine. |
| PGx | Ben-Kasus_2005 | not_relevant | 0 | 0 | The paper studies the metabolism of zebularine, not decitabine, and does not report pharmacogenomic effects. |
| popPK | Beumer_2008 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of 3,4,5,6-tetrahydrouridine (THU), not decitabine, which is only mentioned as a substrate for the enzyme inhibited by THU. |
| popPK | Bhargav_2021 | irrelevant | 0 | 0 | The paper is a study on Ayurvedic prakriti diagnosis in psychiatric patients and contains no pharmacokinetic data for decitabine. |
| popPK | Blum_2012 | irrelevant | 0 | 0 | The paper is a clinical trial reporting pharmacodynamic activity and clinical outcomes, with no pharmacokinetic parameters or quantitative disposition data for decitabine. |
| PD | Blum_2012 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacodynamic change (FLT3 down-regulation) with a p-value, but does not provide numeric PD parameters (e.g., Emax, EC50) or an exposure-response curve for decitabine. |
| popPK | Bouligny_2024 | irrelevant | 2 | 1 | This is a commentary on a clinical trial that reports only AUC ratios for bioequivalence, lacking specific compartmental PK parameters like clearance, volume, or half-life. |
| PD | Bouligny_2024 | not_relevant | 2 | 0 | The text is a commentary that qualitatively states pharmacodynamic effects (LINE-1 methylation) were similar between formulations but does not provide numeric PD parameters, concentration-effect curves, or model fits. |
| popPK | Bourkhis_2018 | irrelevant | 0 | 0 | The paper describes the synthesis and cytotoxicity of lipidic compounds, not the pharmacokinetics of decitabine. |
| PD | Bourkhis_2018 | not_relevant | 0 | 0 | The paper discusses synthetic lipid compounds (DAC/BAC) and their cytotoxicity, not decitabine. |
| popPK | Caraglia_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of EGF-R upregulation and does not report any pharmacokinetic parameters for decitabine. |
| PGx | Carrette_2018 | not_relevant | 0 | 0 | The paper discusses a mixed modality approach for Rett syndrome using an Xist antisense oligonucleotide and a DNA methylation inhibitor (5-aza-2'-deoxycytidine), but does not report pharmacogenomic effects on the PK or PD of decitabine. |
| popPK | Cassarino_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression and hormone secretion, not a pharmacokinetic study, and reports no disposition parameters for decitabine. |
| PGx | Chen_2019 | not_relevant | 0 | 0 | The paper is a general review of BCRP/ABCG2 variability and does not report specific pharmacokinetic or pharmacodynamic data for decitabine. |
| popPK | Chowdhury_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA methylation dynamics and TET protein binding, not a pharmacokinetic study reporting disposition parameters for decitabine. |
| popPK | Chu_2013 | irrelevant | 2 | 0 | The paper is a Phase I clinical trial focused on toxicity and pharmacodynamics (fetal hemoglobin) rather than reporting quantitative pharmacokinetic parameters (CL, V, etc.) for decitabine. |
| PD | Chu_2013 | not_relevant | 2 | 1 | The study reports qualitative changes in fetal hemoglobin (a PD marker) but provides no numeric concentration-effect or dose-response parameters, curves, or model fits. |
| popPK | Corrao_1993 | irrelevant | 0 | 0 | The paper is a case-control study on alcohol intake and liver cirrhosis, containing no pharmacokinetic data for decitabine. |
| PD | Corrao_1993 | not_relevant | 0 | 0 | The paper studies the dose-response relationship between alcohol intake and liver cirrhosis, not the pharmacodynamics of decitabine. |
| popPK | Cortvrindt_1987 | irrelevant | 0 | 0 | The paper studies 5-azacytidine and 5-aza-2'-deoxycytidine (azacitidine/decitabine) in an in-vitro cytotoxicity context, not pharmacokinetics, and does not report disposition parameters for decitabine. |
| PGx | Coutinho_2013 | not_relevant | 0 | 0 | The paper discusses the genetics of LDL cholesterol and cardiovascular disease, not the pharmacogenomics of decitabine. |
| PGx | Cui_2014 | not_relevant | 0 | 0 | The paper describes a reporter system for studying epigenetic therapies (DNMTi/HDACi) and does not report pharmacogenomic effects on the PK or PD of decitabine. |
| PGx | Dahn_2020 | not_relevant | 2 | 5 | The paper investigates the role of deoxycytidine kinase (DCK) expression levels in determining decitabine sensitivity in cell lines, but it does not report a specific genetic variant or genotype associated with a change in a pharmacokinetic or pharmacodynamic parameter. |
| popPK | DiNardo_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting response rates and survival, containing no pharmacokinetic parameters or disposition data for decitabine. |
| PD | DiNardo_2020 | not_relevant | 0 | 0 | The paper is a clinical trial reporting efficacy and safety outcomes (response rates, survival) without providing any pharmacokinetic data, concentration-effect analysis, or numeric pharmacodynamic parameters for decitabine. |
| PGx | Ford_2008 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction between fosamprenavir-ritonavir and rifabutin, not a pharmacogenomic effect on decitabine. |
| popPK | Fujimoto_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug synergy on cell growth inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Garcia-Manero_2020 | irrelevant | 4 | 2 | The study reports non-compartmental AUC ratios for bioequivalence but lacks specific compartmental PK parameters (CL, V, ka) or population PK model estimates for decitabine. |
| popPK | Garcia-Manero_2024 | irrelevant | 2 | 0 | The study reports only the relative AUC ratio (98.93%) for bioequivalence and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Garcia-Manero_2024 | not_relevant | 1 | 0 | The study focuses on pharmacokinetic bioequivalence (AUC) and safety, with no numeric pharmacodynamic parameters or exposure-response modeling reported. |
| PGx | Grottenthaler_2018 | not_relevant | 0 | 0 | The paper reports on the efficacy and safety of DAA treatment for HCV/HIV coinfection and does not mention decitabine or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Gupta_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on breast cancer resistance where decitabine is used only as a tool compound, with no pharmacokinetic parameters reported. |
| PD | Gupta_2025 | not_relevant | 0 | 0 | The paper focuses on tamoxifen resistance mechanisms in breast cancer; decitabine is only mentioned as a qualitative agent to restore sensitivity, with no exposure-response or dose-response PD parameters reported for it. |
| popPK | Gupta_2025_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on breast cancer resistance where decitabine is used as a demethylating agent, and it does not report any pharmacokinetic parameters for decitabine. |
| PD | Gupta_2025_2 | not_relevant | 0 | 0 | The paper focuses on the mechanism of tamoxifen resistance in breast cancer; decitabine is only mentioned as a qualitative tool to restore gene expression, with no exposure-response or dose-response PD analysis for decitabine. |
| PGx | Habano_2009 | not_relevant | 0 | 0 | The paper investigates the epigenetic regulation of CYP1B1 expression in colorectal cancer cells using 5-azacytidine, but does not report pharmacokinetic or pharmacodynamic parameters for decitabine. |
| popPK | Hao_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell differentiation and apoptosis, not a pharmacokinetic study, and reports no disposition parameters for decitabine. |
| PGx | Hogarth_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of thiopurines (6-MP/6-TG) and TPMT, not decitabine. |
| PGx | Issa_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of a drug combination in AML but does not analyze the impact of specific gene variants on the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Jackson-Litteken_2021 | not_relevant | 0 | 0 | The paper investigates the role of the CdaA gene in Borrelia turicatae virulence and physiology, not the pharmacogenomics of decitabine. |
| popPK | Jacobberger_2024 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic assay for DNMT1 levels and does not report any pharmacokinetic parameters for decitabine. |
| PD | Jacobberger_2024 | not_relevant | 1 | 0 | The paper describes a method for measuring DNMT1 levels as a pharmacodynamic biomarker but does not report any exposure-response or dose-response data, curves, or numeric PD parameters for decitabine. |
| PGx | Jin_2004 | not_relevant | 0 | 0 | The paper studies the effect of 5-aza-2'-deoxycytidine (a different drug) on CYP1A2 expression, not the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Joharji_2023 | not_relevant | 0 | 0 | The paper studies hepatitis C treatment with sofosbuvir and daclatasvir, not decitabine, and does not report pharmacogenomic effects. |
| popPK | Kagan_2023 | irrelevant | 1 | 0 | This is a review article discussing biomarkers and exposure-response concepts without reporting original quantitative pharmacokinetic parameter values for decitabine. |
| PD | Kagan_2023 | not_relevant | 2 | 0 | The paper is a review summarizing challenges and opportunities in DNMTi exposure-response and biomarker development, but it does not present original data or specific numeric PD parameters (e.g., Emax, EC50) for decitabine. |
| PGx | Kalantri_2018 | not_relevant | 2 | 0 | The paper evaluates decitabine efficacy in HbE/β-thalassemia and mentions XMN1 polymorphism as a determinant, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes driven by the genotype. |
| PGx | Karagiannis_2012 | not_relevant | 0 | 0 | The text is a general overview of epigenetic mechanisms and diseases, mentioning decitabine only as a clinical example without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Khaleel_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of tacrolimus, not decitabine. |
| PGx | Kim_2023 | not_relevant | 0 | 0 | The paper investigates the prognostic value of tumor variant burden (disease monitoring) in AML patients, not the effect of patient germline pharmacogenomic variants on decitabine pharmacokinetics or pharmacodynamics. |
| PGx | Lamba_2009 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for cytarabine and only mentions decitabine as a related drug in the conclusion without reporting specific data or effects for decitabine. |
| PD | Lau_2023 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative/semi-quantitative PD endpoints (DNMT1 levels, CDA activity) but does not provide a concentration-effect model, Emax/EC50 parameters, or a derivable numeric PD curve. |
| popPK | Lee_2011 | irrelevant | 0 | 0 | The paper investigates glucocorticoid receptor mutations and transcriptional effects, not the pharmacokinetics of decitabine. |
| PD | Lee_2011 | not_relevant | 0 | 0 | The paper discusses glucocorticoid receptor mutations and transcriptional effects, not decitabine pharmacodynamics. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel compounds where decitabine is used only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Lin_2025 | not_relevant | 0 | 0 | The paper focuses on the design and evaluation of a new compound (Y7) and only uses decitabine as a qualitative comparator without reporting any PK/PD parameters or exposure-response data for decitabine. |
| PGx | Madarang_2024 | not_relevant | 0 | 0 | The paper reports clinical outcomes (survival, response) in elderly AML patients treated with venetoclax and hypomethylating agents, but does not report pharmacokinetic or pharmacodynamic parameters of decitabine or any pharmacogenomic effects. |
| popPK | Mahmood_2021 | irrelevant | 0 | 0 | The paper is a study on Shiitake mushroom extracts in zebrafish and cell lines, mentioning decitabine only as a compound identified in the extract, with no pharmacokinetic data. |
| PD | Mahmood_2021 | not_relevant | 0 | 0 | The paper studies Shiitake extracts in zebrafish and does not report a pharmacodynamic or exposure-response relationship for the drug decitabine itself. |
| PGx | Makis_2006 | not_relevant | 0 | 0 | The paper is a general review of genomics in sickle cell disease and mentions decitabine only as a therapeutic agent without reporting specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Mbous_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on deep eutectic solvents and does not involve the drug decitabine or report any pharmacokinetic parameters. |
| PD | Mbous_2020 | not_relevant | 0 | 0 | The paper studies deep eutectic solvents (DES) and their interaction with cancer cell membranes, not the drug decitabine. |
| popPK | Meza-Morales_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and characterization of zinc curcuminoid complexes and their in-vitro cytotoxicity, containing no pharmacokinetic data for decitabine. |
| PD | Meza-Morales_2023 | not_relevant | 0 | 0 | The paper studies zinc curcuminoid complexes, not decitabine, and reports only static IC50 values without any exposure-response or PK/PD modeling. |
| PGx | Micozzi_2014 | not_relevant | 0 | 0 | The paper characterizes cytidine deaminase variants regarding cytarabine and natural substrates, but does not report pharmacokinetic or pharmacodynamic effects for decitabine. |
| popPK | Minocha_2016 | irrelevant | 0 | 0 | no_text gate: only 174 chars of text extracted (&lt; 400) |
| PD | Minocha_2016 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of daclizumab, not decitabine. |
| PGx | Mioč_2022 | not_relevant | 0 | 0 | The paper investigates the interaction of crown ethers with the ABCG2 transporter in cell lines, not the pharmacogenomics of decitabine. |
| PGx | Molica_2020 | not_relevant | 2 | 5 | The paper reports clinical outcomes (response rates, survival) associated with TP53 mutations, not pharmacokinetic or pharmacodynamic parameters of decitabine. |
| PGx | Moon_2016 | not_relevant | 0 | 0 | The study investigates the effect of 5-aza-2'-deoxycytidine (decitabine) on ABCG2 expression and subsequent sensitivity to other drugs (5-FU, oxaliplatin, irinotecan), rather than how a genetic variant affects the PK/PD of decitabine itself. |
| popPK | Müller_2022 | irrelevant | 0 | 0 | The paper studies an antimicrobial peptide (leucinostatin derivative) and its binding proteins, not the pharmacokinetics of decitabine. |
| PD | Müller_2022 | not_relevant | 0 | 0 | The paper studies an antimicrobial peptide (peptide 6027), not decitabine, and focuses on protein binding targets rather than pharmacodynamic modeling. |
| popPK | Nguyen_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug action in cell lines and does not report pharmacokinetic parameters. |
| PGx | Oda_2013 | not_relevant | 0 | 0 | The paper investigates the epigenetic regulation of UGT1A1 expression in kidney vs. liver tissues and does not report pharmacogenomic effects on the PK or PD of decitabine. |
| PGx | Oki_2008 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic effects of decitabine on methylation and mutant allele clearance in CMML patients but does not report any pharmacogenomic analysis linking specific gene variants to changes in PK or PD parameters. |
| PGx | Onda_2012 | not_relevant | 0 | 0 | The paper investigates the effect of decitabine on P-glycoprotein expression in cell lines, not the effect of a genetic variant on decitabine's PK or PD parameters. |
| PGx | Oswald_2011 | not_relevant | 0 | 0 | The paper describes an LC-MS/MS method for clarithromycin and rifampicin in horses and does not involve decitabine or pharmacogenomics. |
| PGx | Ozawa_2023 | not_relevant | 0 | 0 | The paper discusses the effects of DAC (5-aza-2'-deoxycytidine) on CYP expression and drug sensitivity in cancer cells, but does not report pharmacogenomic effects on the PK/PD of decitabine. |
| PGx | Parhizkar_2020 | not_relevant | 0 | 0 | The paper investigates nanoparticle delivery and drug synergy in cell lines, not the effect of genetic variants on decitabine pharmacokinetics or pharmacodynamics. |
| PGx | Peters_2020 | not_relevant | 0 | 0 | The paper investigates nucleotide pools and drug sensitivity in HL60 cell lines, but does not mention decitabine or any pharmacogenomic effect on its PK/PD parameters. |
| PGx | Phan_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of decitabine on breast cancer stem cells in vitro but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Phillips_2016 | irrelevant | 0 | 0 | The paper studies daclizumab in multiple sclerosis and contains no pharmacokinetic data for decitabine. |
| popPK | Pommert_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy and pharmacodynamic study (gene expression/methylation) that does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for decitabine. |
| PD | Pommert_2022 | not_relevant | 2 | 0 | The paper reports clinical response rates and qualitative correlative pharmacodynamics (gene signatures) but does not provide numeric exposure-response or dose-response parameters (e.g., Emax, EC50) for decitabine. |
| popPK | Qin_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of resistance mechanisms (IC50, gene expression) and does not report pharmacokinetic disposition parameters for decitabine. |
| popPK | Rani_2026 | irrelevant | 0 | 0 | The study investigates the antihypertensive effects of Gymnema sylvestre extract in rats and does not involve decitabine or its pharmacokinetics. |
| PD | Rani_2026 | not_relevant | 0 | 0 | The paper studies Gymnema sylvestre, not decitabine. |
| popPK | Richel_1988 | irrelevant | 0 | 0 | The study focuses on antileukaemic activity, cell cycle kinetics, and stem cell toxicity in a rat model, reporting no pharmacokinetic parameters (CL, V, t1/2) for decitabine. |
| PGx | Rivero-Juarez_2018 | not_relevant | 0 | 0 | The paper reviews the PK/PD of daclatasvir/sofosbuvir/ribavirin for hepatitis C and does not mention decitabine or any pharmacogenomic effects. |
| popPK | Ruiz_1994 | irrelevant | 0 | 0 | The paper focuses on the molecular mechanism of gemcitabine resistance in cell lines and does not report pharmacokinetic parameters for decitabine. |
| PD | Ruiz_1994 | not_relevant | 0 | 0 | The paper studies gemcitabine (2',2'-difluorodeoxycytidine), not decitabine, and focuses on the molecular mechanism of resistance (dCK deficiency) rather than a pharmacodynamic exposure-response model for decitabine. |
| popPK | Ruiz_1995 | irrelevant | 0 | 0 | The paper studies gemcitabine resistance in cell lines and does not report pharmacokinetic parameters for decitabine. |
| PD | Ruiz_1995 | not_relevant | 0 | 0 | The paper studies gemcitabine resistance in cell lines, not decitabine pharmacodynamics. |
| PGx | Salcedo_2017 | not_relevant | 0 | 0 | The paper studies daclatasvir in HCV, not decitabine, and does not report pharmacogenomic effects on PK/PD. |
| popPK | Savona_2025 | irrelevant | 1 | 0 | The paper is a clinical efficacy and safety analysis of decitabine/cedazuridine in CMML that reports response rates and survival, but it does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for decitabine in the text. |
| PD | Savona_2025 | not_relevant | 2 | 1 | The paper reports clinical efficacy and safety outcomes (response rates, survival) and mentions pharmacodynamics (LINE-1 methylation) in the abstract, but the provided text and supplementary materials do not contain numeric PD parameters (Emax, EC50) or quantitative exposure-response/dose-response curves. |
| PGx | Sciumè_2023 | not_relevant | 0 | 0 | The paper focuses on venetoclax-based regimens and does not report pharmacogenomic effects on the PK or PD of decitabine. |
| PGx | Shirai_2024 | not_relevant | 0 | 0 | The paper describes an in vitro cell culture method for intestinal epithelial cells and does not report pharmacogenomic effects on the PK/PD of decitabine. |
| popPK | Smith_2021 | irrelevant | 0 | 0 | The paper is an ecological risk assessment for the herbicide atrazine and does not contain any pharmacokinetic data for decitabine. |
| PD | Smith_2021 | not_relevant | 0 | 0 | The paper discusses atrazine (a herbicide), not decitabine, and focuses on ecological risk assessment rather than pharmacodynamic modeling. |
| popPK | Stegmann_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on gene mutations and resistance, containing no pharmacokinetic parameters for decitabine. |
| PD | Stegmann_1995 | not_relevant | 2 | 1 | The paper describes a resistance induction study in cell lines and mentions IC50 values only as relative thresholds for resistance development, without providing a quantitative exposure-response or dose-response curve or specific numeric PD parameters for decitabine. |
| popPK | Stockler_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cephapirin in dairy cows, not decitabine. |
| popPK | Suay-Fuentes_2025 | irrelevant | 0 | 0 | The paper describes an immunoassay for cyanotoxins and does not involve decitabine or pharmacokinetic parameters. |
| PD | Suay-Fuentes_2025 | not_relevant | 0 | 0 | The paper describes an immunoassay for cyanotoxins and is unrelated to decitabine pharmacodynamics. |
| PGx | Sumarpo_2020 | not_relevant | 0 | 0 | The paper focuses on taxane resistance and ABCB1 mechanisms, not decitabine pharmacokinetics or pharmacodynamics. |
| popPK | Sun_2008 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Sun_2008 | not_relevant | 0 | 0 | The paper discusses glucocorticoid receptor-mediated repression and does not mention decitabine or report any pharmacodynamic parameters for it. |
| PGx | Tanaka_2018 | not_relevant | 0 | 0 | The paper investigates the relationship between DNA methylation and MATE1 expression, but does not report pharmacokinetic or pharmacodynamic parameters for decitabine. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on miR-29c and decitabine resistance in cell lines, reporting IC50 values rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Tatman_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity assessment of decitabine on cultured tumors and does not report any pharmacokinetic parameters. |
| PGx | Tomiyasu_2014 | not_relevant | 0 | 0 | The paper studies epigenetic regulation of ABCB1 in canine cell lines and does not report pharmacogenomic effects on the PK or PD of decitabine. |
| popPK | Tran_2016 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PGx | Tran_2016 | not_relevant | 0 | 0 | The paper discusses daclizumab in multiple sclerosis, not decitabine. |
| popPK | Uddin_2021 | irrelevant | 0 | 0 | The paper is a review of DNA methylation inhibitors and does not report quantitative pharmacokinetic parameters for decitabine. |
| PD | Uddin_2021 | not_relevant | 2 | 0 | The text is a review chapter discussing the classification and general pharmacodynamics of DNA hypomethylating agents without providing specific numeric PD parameters or exposure-response data for decitabine. |
| popPK | Ueda_2020 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic analysis of cellular uptake and phosphorylation in HCT116 cells, not a population pharmacokinetic study reporting systemic disposition parameters (CL, V, t1/2) for decitabine. |
| popPK | Veselý_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug resistance in cell lines, not a pharmacokinetic study, and does not report disposition parameters for decitabine. |
| PD | Veselý_1987 | not_relevant | 3 | 2 | The paper reports IC50 values and fold-resistance for a drug analog (5-aza-2'-deoxycytidine) in a cell line, but does not report a PD model or exposure-response relationship for decitabine itself. |
| popPK | Wallace_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cytosine arabinoside (ara-C) and neuronal survival, not a pharmacokinetic study of decitabine. |
| PD | Wallace_1989 | not_relevant | 0 | 0 | The paper investigates the effects of cytosine arabinoside (Ara-C) and deoxycytidine on neuronal survival, not decitabine. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper studies the effect of a DNA methylation inhibitor (5-aza-2-deoxycytidine) on CYP3A4 expression, not the pharmacokinetics or pharmacodynamics of decitabine itself. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of trichostatin C with decitabine as a comparator, reporting no pharmacokinetic parameters. |
| PD | Wang_2024 | not_relevant | 2 | 1 | The paper reports IC50 values for trichostatin C and qualitative synergy with decitabine, but does not provide numeric PD parameters or a quantitative exposure-response model for decitabine itself. |
| PGx | Woost_2024 | not_relevant | 0 | 0 | The paper reports the development of a flow cytometry assay to measure DNMT1 depletion (a pharmacodynamic effect) by decitabine, but it does not report how specific gene variants or genotypes alter this pharmacokinetic or pharmacodynamic parameter. |
| PGx | Xie_2014 | not_relevant | 0 | 0 | The paper studies irinotecan metabolic genes (CES2, UGT1A1, GUSB) and the effect of DAC (decitabine) on their expression, but does not report pharmacokinetic or pharmacodynamic parameters of decitabine itself. |
| PGx | Xie_2014_2 | not_relevant | 0 | 0 | The paper studies the effect of UGT1A1 methylation on CPT-11 sensitivity, not decitabine. |
| PGx | Xu_2020 | not_relevant | 0 | 0 | The paper studies HMGB1 polymorphisms and their effect on the efficacy of conventional DMARDs in rheumatoid arthritis, not decitabine. |
| PGx | Yamada_2005 | not_relevant | 0 | 0 | The paper investigates the mutagenicity of chrysene analogs and CYP isoform selectivity, not the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Younas_2021 | not_relevant | 0 | 0 | The paper focuses on the efficacy and side effects of direct-acting antivirals (sofosbuvir/daclatasvir) for HCV, not decitabine. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of MC180295, with decitabine serving only as a co-administered comparator agent without reported PK parameters. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses on the CDK9 inhibitor MC180295; decitabine is used only as a combination partner in efficacy studies without any PD or exposure-response modeling for decitabine itself. |
| PGx | Zhang_2024_2 | not_relevant | 0 | 0 | The paper investigates the epigenetic mechanism of CYP1A2 repression and the effect of decitabine on sorafenib sensitivity, but does not report a pharmacogenomic effect (gene variant) on decitabine's PK or PD parameters. |
| popPK | Zhou_2019 | relevant | 10 | 0 | The paper describes a population PK model for decitabine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | de_2005 | not_relevant | 0 | 0 | The text is a historical review of decitabine's development and clinical application, containing no information on pharmacogenomics or gene variants affecting PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
