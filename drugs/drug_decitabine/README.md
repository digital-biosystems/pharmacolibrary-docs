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
| 2026-10-07 16:43 | 1:18 | 0/0/0 | 1/0/0 | 0/0/0 | 150,032/5,843 | einfracz / qwen3.8-27b | 31 | 18/26 | 28/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fujimoto_2010_inhibition](drugs/drug_decitabine/pd_Fujimoto_2010_inhibition.md) | cell growth inhibition ← decitabine · direct Emax (saturable) effect | — | Fujimoto J et al., Validation of a novel statistical model…, Cancer prevention research… (2010) | [10.1158/1940-6207.CAPR-10-0129](https://doi.org/10.1158/1940-6207.CAPR-10-0129) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=decitabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CDA (substrate), CMPK1 (substrate), DCK (substrate), DNA (other/unknown), DNMT1 (inhibitor), DNMT3A (inhibitor), DNMT3B (inhibitor), HDAC1 (inhibitor), NME1 (substrate), SLC28A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 297 matched, 128 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2019.pdf` | Zhou W et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2019) | popPK | 9 | [10.1002/jcph.1357](https://doi.org/10.1002/jcph.1357) | [30536675](https://pubmed.ncbi.nlm.nih.gov/30536675) | The paper is a direct population pharmacokinetic study of decitabine in humans, but the specific numeric parameter values (CL, V, etc.) are described qualitatively in the abstract without providing the actual numbers, which are likely in the full text tables or figures not included in the evidence. |
| `Agarwal_2019.pdf` | Agarwal S et al., Optimizing venetoclax dose in combinati…, Hematological oncology (2019) | pd | 5 | [10.1002/hon.2646](https://doi.org/10.1002/hon.2646) | [31251400](https://www.ncbi.nlm.nih.gov/pubmed/31251400) | metadata signals extractable PD data (exposure-response) |
| `Anders_2016.pdf` | Anders NM et al., Simultaneous quantitative determination…, Journal of chromatography.… (2016) | pd | 5 | [10.1016/j.jchromb.2016.03.029](https://doi.org/10.1016/j.jchromb.2016.03.029) | [27082761](https://www.ncbi.nlm.nih.gov/pubmed/27082761) | metadata signals extractable PD data (exposure-response) |
| `Minocha_2016.pdf` | Minocha M et al., Blockade of the High-Affinity Interleuk…, Clinical pharmacokinetics (2016) | pd | 5 | [10.1007/s40262-015-0305-z](https://doi.org/10.1007/s40262-015-0305-z) | [26242380](https://www.ncbi.nlm.nih.gov/pubmed/26242380) | metadata signals extractable PD data (sigmoid) |
| `Sun_2008.pdf` | Sun Y et al., Modulation of transcription parameters…, Molecular and cellular endo… (2008) | pd | 4 | [10.1016/j.mce.2008.05.008](https://doi.org/10.1016/j.mce.2008.05.008) | [18583028](https://www.ncbi.nlm.nih.gov/pubmed/18583028) | metadata signals extractable PD data (EC50) |
| `Jin_2004.pdf` | Jin B et al., CpG methylation of the mouse CYP1A2 pro…, Toxicology letters (2004) | pgx | 7 | [10.1016/j.toxlet.2004.03.016](https://doi.org/10.1016/j.toxlet.2004.03.016) | [15294342](https://www.ncbi.nlm.nih.gov/pubmed/15294342) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Oswald_2011.pdf` | Oswald S et al., LC-MS/MS method for the simultaneous de…, Journal of pharmaceutical a… (2011) | pgx | 7 | [10.1016/j.jpba.2011.01.019](https://doi.org/10.1016/j.jpba.2011.01.019) | [21310577](https://www.ncbi.nlm.nih.gov/pubmed/21310577) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shirai_2024.pdf` | Shirai K et al., Air-liquid interface culture and modifi…, Drug metabolism and pharmac… (2024) | pgx | 7 | [10.1016/j.dmpk.2023.100994](https://doi.org/10.1016/j.dmpk.2023.100994) | [38452616](https://www.ncbi.nlm.nih.gov/pubmed/38452616) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Tran_2016.pdf` | Tran JQ et al., Therapeutic protein-drug interaction as…, British journal of clinical… (2016) | pgx | 7 | [10.1111/bcp.12936](https://doi.org/10.1111/bcp.12936) | [26991517](https://www.ncbi.nlm.nih.gov/pubmed/26991517) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T16:42:09.027304+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdallah_2018 | not_relevant | 0 | 0 | The paper describes an LC-MS/MS method for sofosbuvir and daclatasvir, not decitabine, and contains no pharmacogenomic analysis. |
| PGx | Abdel-Lateef_2019 | not_relevant | 0 | 0 | The paper focuses on a spectrofluorimetric method for daclatasvir, not the pharmacogenomics of decitabine. |
| popPK | Agarwal_2019 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Agarwal_2019 | not_relevant | 0 | 0 | The paper analyzes venetoclax, not decitabine. |
| PGx | Aldapt_2026 | not_relevant | 0 | 0 | The paper is a case report on a specific treatment regimen for a patient and does not report a pharmacogenomic study linking genetic variants to decitabine pharmacokinetic or pharmacodynamic parameters. |
| popPK | Anders_2016 | irrelevant | 0 | 0 | no_text gate: only 243 chars of text extracted (&lt; 400) |
| PD | Anders_2016 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring genomic incorporation and DNA demethylation but does not report a pharmacodynamic model or numeric exposure-response parameters for decitabine. |
| PGx | Arimany-Nardi_2014 | not_relevant | 0 | 0 | The study reports that hOCT1 polymorphic variants affect zebularine efflux, but explicitly states that decitabine was not translocated by any nucleoside transporter or hOCT1/hOCT2. |
| PGx | Armstrong_2026 | not_relevant | 0 | 0 | The paper examines genetic variation in the glymphatic pathway and its association with Alzheimer's disease phenotypes, with no mention of decitabine. |
| PGx | Arora_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of decitabine in glioblastoma cells and survival prognostication, but does not report pharmacokinetic or pharmacodynamic parameters altered by specific genetic variants. |
| popPK | Ataabadi_2023 | irrelevant | 0 | 0 | The study focuses on dacarbazine and enoxaparin, not decitabine, and reports no pharmacokinetic parameters for the target drug. |
| PD | Ataabadi_2023 | not_relevant | 0 | 0 | The paper studies dacarbazine and enoxaparin, not decitabine. |
| popPK | Badawi_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, while decitabine is only mentioned as a co-administered drug. |
| PD | Badawi_2024 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationships for venetoclax, not decitabine. |
| popPK | Baker_2026 | irrelevant | 0 | 0 | The paper focuses on antibody-mediated delivery of BRM degraders in lung cancer models and does not involve decitabine or report any pharmacokinetic parameters for it. |
| PD | Baker_2026 | not_relevant | 0 | 0 | The paper describes antibody-drug conjugates (DACs) targeting BRM/BRG1, not decitabine, and does not report exposure-response or dose-response PD parameters for decitabine. |
| popPK | Balthasar_2026 | irrelevant | 0 | 0 | The paper focuses on a PK-PD model for degrader-antibody conjugates and does not mention decitabine or report its pharmacokinetic parameters. |
| PD | Balthasar_2026 | not_relevant | 0 | 0 | The paper describes a PK/PD model for degrader-antibody conjugates (DAC/PROTAC) and does not report any pharmacodynamic data or parameters for decitabine. |
| PGx | Bejar_2014 | not_relevant | 4 | 5 | The paper reports a genetic association with clinical response and survival (an outcome), not a direct pharmacokinetic or pharmacodynamic parameter (like AUC, Cmax, or EC50) of decitabine. |
| PGx | Ben-Kasus_2005 | not_relevant | 0 | 0 | The paper reports the metabolic activation of zebularine, not decitabine, and does not discuss pharmacogenomic effects. |
| popPK | Beumer_2008 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 3,4,5,6-tetrahydrouridine (THU), a cytidine deaminase inhibitor, not for decitabine. |
| popPK | Bhargav_2021 | irrelevant | 0 | 0 | The paper is about Ayurvedic prakriti diagnosis in psychiatric patients and contains no pharmacokinetic data for decitabine. |
| popPK | Blum_2012 | irrelevant | 0 | 0 | The paper is a clinical trial reporting pharmacodynamic activity and clinical outcomes, with no pharmacokinetic parameters or quantitative disposition data for decitabine. |
| PD | Blum_2012 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacodynamic change (FLT3 down-regulation) with a p-value, but does not provide numeric PD parameters (e.g., Emax, EC50) or an exposure-response curve for decitabine. |
| popPK | Bouligny_2024 | irrelevant | 2 | 1 | This is a commentary on a clinical trial that reports only AUC ratios for bioequivalence, lacking specific compartmental PK parameters like clearance, volume, or half-life. |
| PD | Bouligny_2024 | not_relevant | 2 | 0 | The text is a commentary that qualitatively states pharmacodynamic effects (LINE-1 methylation) were similar between formulations but does not provide numeric PD parameters, concentration-effect curves, or model fits. |
| popPK | Bourkhis_2018 | irrelevant | 0 | 0 | The paper describes the synthesis and cytotoxicity of lipidic compounds, not the pharmacokinetics of decitabine. |
| PD | Bourkhis_2018 | not_relevant | 0 | 0 | The paper discusses synthetic lipid compounds (DAC/BAC) and their cytotoxicity, not decitabine. |
| popPK | Caraglia_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of EGF-R upregulation and does not report any pharmacokinetic parameters for decitabine. |
| PGx | Carrette_2018 | not_relevant | 0 | 0 | The paper describes the use of 5-azacytidine (a related DNMT inhibitor) for Rett syndrome to reactivate the X-chromosome and does not report pharmacogenomic effects on the PK or PD of decitabine. |
| popPK | Cassarino_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression and hormone secretion, not a pharmacokinetic study, and reports no disposition parameters for decitabine. |
| PGx | Chen_2019 | not_relevant | 2 | 1 | The paper is a review of ABCG2 biology and precision medicine strategies; it does not report specific experimental data or quantitative changes in PK/PD parameters of decitabine associated with genetic variants. |
| popPK | Chowdhury_2015 | irrelevant | 0 | 0 | The study is a mechanistic investigation of DNA methylation dynamics in cell lines and does not report pharmacokinetic parameters such as clearance or volume for decitabine. |
| popPK | Chu_2013 | irrelevant | 2 | 0 | The paper is a Phase I clinical trial focused on toxicity and pharmacodynamics (fetal hemoglobin) rather than reporting quantitative pharmacokinetic parameters (CL, V, etc.) for decitabine. |
| PD | Chu_2013 | not_relevant | 2 | 1 | The study reports qualitative changes in fetal hemoglobin (a PD marker) but provides no numeric concentration-effect or dose-response parameters, curves, or model fits. |
| popPK | Corrao_1993 | irrelevant | 0 | 0 | The paper is a case-control study on alcohol intake and liver cirrhosis, containing no pharmacokinetic data for decitabine. |
| PD | Corrao_1993 | not_relevant | 0 | 0 | The paper studies the dose-response relationship between alcohol intake and liver cirrhosis, not the pharmacodynamics of decitabine. |
| popPK | Cortvrindt_1987 | irrelevant | 0 | 0 | The paper studies 5-azacytidine and 5-aza-2'-deoxycytidine (azacitidine/decitabine) in an in-vitro cytotoxicity context, not pharmacokinetics, and does not report disposition parameters for decitabine. |
| PGx | Coutinho_2013 | not_relevant | 0 | 0 | The paper discusses the role of the SORT1 gene in LDL cholesterol metabolism and cardiovascular risk, but makes no mention of decitabine or any other pharmacogenomic effect on a PK/PD parameter for a specific drug. |
| PGx | Cui_2014 | not_relevant | 0 | 0 | The paper describes a reporter system for DNA methylation and discusses the pharmacodynamics of the DNMT inhibitor 5-aza-deoxycitidine (DAC), not decitabine, and contains no pharmacogenomic analysis. |
| PGx | Dahn_2020 | not_relevant | 2 | 5 | The study investigates the role of deoxycytidine kinase (DCK) and ABCB1 expression levels in determining decitabine sensitivity, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes linked to germline gene variants or genotypes in humans. |
| popPK | DiNardo_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting response rates and survival, containing no pharmacokinetic parameters or disposition data for decitabine. |
| PD | DiNardo_2020 | not_relevant | 0 | 0 | The paper is a clinical trial reporting efficacy and safety outcomes (response rates, survival) without providing any pharmacokinetic data, concentration-effect analysis, or numeric pharmacodynamic parameters for decitabine. |
| PGx | Ford_2008 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction between fosamprenavir/ritonavir and rifabutin, not the pharmacogenomics of decitabine. |
| popPK | Fujimoto_2010 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assessment of drug synergy (growth inhibition) and does not report pharmacokinetic parameters for decitabine. |
| popPK | Garcia-Manero_2020 | relevant | 5 | 4 | The study reports pharmacokinetic data (AUC, Cmax timing) for decitabine in humans, comparing oral and IV formulations, but lacks standard disposition parameters like clearance, volume of distribution, or half-life, and detailed numeric PK table values are not fully legible in the text. |
| popPK | Garcia-Manero_2024 | irrelevant | 2 | 0 | The study reports only the relative AUC ratio (98.93%) for bioequivalence and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Garcia-Manero_2024 | not_relevant | 1 | 0 | The study focuses on pharmacokinetic bioequivalence (AUC) and safety, with no numeric pharmacodynamic parameters or exposure-response modeling reported. |
| PGx | Grottenthaler_2018 | not_relevant | 0 | 0 | The paper focuses on DAA treatment for HCV/HIV coinfection and does not mention decitabine, gene variants, or pharmacogenomics. |
| popPK | Gupta_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on breast cancer resistance where decitabine is used only as a tool compound, with no pharmacokinetic parameters reported. |
| PD | Gupta_2025 | not_relevant | 0 | 0 | The paper focuses on tamoxifen resistance mechanisms in breast cancer; decitabine is only mentioned as a qualitative agent to restore sensitivity, with no exposure-response or dose-response PD parameters reported for it. |
| popPK | Gupta_2025_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on breast cancer resistance where decitabine is used as a demethylating agent, and it does not report any pharmacokinetic parameters for decitabine. |
| PD | Gupta_2025_2 | not_relevant | 0 | 0 | The paper focuses on the mechanism of tamoxifen resistance in breast cancer; decitabine is only mentioned as a qualitative tool to restore gene expression, with no exposure-response or dose-response PD analysis for decitabine. |
| PGx | Habano_2009 | not_relevant | 1 | 0 | The paper uses decitabine as a tool to demonstrate epigenetic regulation of CYP enzymes but does not report changes in decitabine's own PK/PD parameters driven by genetic variants. |
| popPK | Hao_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell differentiation and apoptosis, not a pharmacokinetic study, and reports no disposition parameters for decitabine. |
| PGx | Hogarth_2008 | not_relevant | 0 | 0 | The paper investigates thiopurines (6-MP, 6-TG) and TPMT, not decitabine. |
| PGx | Issa_2026 | not_relevant | 0 | 0 | The study evaluates the efficacy and safety of an all-oral combination regimen and does not report pharmacogenomic associations or genotype-specific changes in the PK or PD of decitabine. |
| PGx | Jackson-Litteken_2021 | not_relevant | 0 | 0 | The paper investigates the role of a diadenylate cyclase gene in Borrelia virulence, which is unrelated to the pharmacokinetics or pharmacodynamics of the drug decitabine. |
| popPK | Jacobberger_2024 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic assay for DNMT1 levels and does not report any pharmacokinetic parameters for decitabine. |
| PD | Jacobberger_2024 | not_relevant | 1 | 0 | The paper describes a method for measuring DNMT1 levels as a pharmacodynamic biomarker but does not report any exposure-response or dose-response data, curves, or numeric PD parameters for decitabine. |
| PGx | Jin_2004 | not_relevant | 0 | 0 | The paper studies mouse CYP1A2 promoter methylation and uses 5-azacytidine (decitabine) only as a generic demethylating agent to test mechanism, rather than analyzing the pharmacogenomics of decitabine's PK/PD parameters in humans. |
| PGx | Joharji_2023 | not_relevant | 0 | 0 | The paper focuses on sofosbuvir and daclatasvir for HCV treatment and contains no mention of decitabine or pharmacogenomics. |
| popPK | Kagan_2023 | irrelevant | 1 | 0 | The paper is a review article discussing clinical studies and biomarkers, and it does not contain original quantitative pharmacokinetic parameters or numeric values for decitabine. |
| PD | Kagan_2023 | not_relevant | 2 | 0 | The paper is a review summarizing challenges and opportunities in DNMTi exposure-response and biomarker development, but it does not present original data or specific numeric PD parameters (e.g., Emax, EC50) for decitabine. |
| PGx | Kalantri_2018 | not_relevant | 0 | 0 | The paper reports the clinical efficacy of decitabine in beta-thalassemia and lists XMN1 polymorphism as an evaluated determinant of response, but does not present results linking any gene variant to specific pharmacokinetic or pharmacodynamic changes. |
| PGx | Karagiannis_2012 | not_relevant | 0 | 0 | The text is an introductory overview of epigenetic mechanisms and diseases, mentioning decitabine only as a standard treatment without reporting any gene-variant-specific effects on its PK or PD parameters. |
| PGx | Khaleel_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of Tacrolimus, not decitabine. |
| PGx | Kim_2023 | not_relevant | 0 | 0 | The paper evaluates the prognostic impact of tumor variant burden (disease monitoring) on survival outcomes, not pharmacogenomic effects on decitabine's pharmacokinetics or pharmacodynamics. |
| PGx | Lamba_2009 | not_relevant | 1 | 0 | The paper is a review on cytarabine pharmacogenetics; decitabine is only mentioned as a drug metabolized by the same pathway, with no specific pharmacogenomic data reported for it. |
| PD | Lau_2023 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative/semi-quantitative PD endpoints (DNMT1 levels, CDA activity) but does not provide a concentration-effect model, Emax/EC50 parameters, or a derivable numeric PD curve. |
| popPK | Lee_2011 | irrelevant | 0 | 0 | The paper describes mechanistic studies on glucocorticoid receptor mutations and transcriptional activity, containing no pharmacokinetic data for decitabine. |
| PD | Lee_2011 | not_relevant | 0 | 0 | The paper discusses glucocorticoid receptor mutations and transcriptional effects, not decitabine pharmacodynamics. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel compounds where decitabine is used only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Lin_2025 | not_relevant | 0 | 0 | The paper focuses on the design and evaluation of a new compound (Y7) and only uses decitabine as a qualitative comparator without reporting any PK/PD parameters or exposure-response data for decitabine. |
| PGx | Madarang_2024 | not_relevant | 0 | 0 | The paper reports clinical outcomes (overall survival and response rates) in elderly patients treated with venetoclax and hypomethylating agents, not pharmacokinetic/pharmacodynamic parameters of decitabine altered by genotype. |
| popPK | Mahmood_2021 | irrelevant | 0 | 0 | The paper is a toxicological and mechanistic study of Shiitake extracts in zebrafish, where decitabine is identified merely as a chemical component present in the extract, with no pharmacokinetic modeling or disposition parameters reported. |
| PD | Mahmood_2021 | not_relevant | 0 | 0 | The paper studies Shiitake extracts in zebrafish and does not report a pharmacodynamic or exposure-response relationship for the drug decitabine itself. |
| PGx | Makis_2006 | not_relevant | 0 | 0 | The text is a general introduction to the use of drugs (including decitabine) and the concept of pharmacogenomics in sickle cell disease, but it does not report any specific study, variant, or measured pharmacokinetic/pharmacodynamic data. |
| popPK | Mbous_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on deep eutectic solvents and does not involve the drug decitabine or report any pharmacokinetic parameters. |
| PD | Mbous_2020 | not_relevant | 0 | 0 | The paper studies deep eutectic solvents (DES) and their interaction with cancer cell membranes, not the drug decitabine. |
| popPK | Meza-Morales_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and characterization of zinc curcuminoid complexes and their in-vitro cytotoxicity, containing no pharmacokinetic data for decitabine. |
| PD | Meza-Morales_2023 | not_relevant | 0 | 0 | The paper studies zinc curcuminoid complexes, not decitabine, and reports only static IC50 values without any exposure-response or PK/PD modeling. |
| PGx | Micozzi_2014 | not_relevant | 0 | 0 | The paper discusses cytarabine and general cytosine nucleosides, not decitabine. |
| popPK | Minocha_2016 | irrelevant | 0 | 0 | no_text gate: only 174 chars of text extracted (&lt; 400) |
| PD | Minocha_2016 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of daclizumab, not decitabine. |
| PGx | Mioč_2022 | not_relevant | 0 | 0 | The paper describes the interaction of crown ether compounds with the ABCG2 transporter, not the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Molica_2020 | not_relevant | 4 | 4 | The paper is a review of TP53 mutation status and clinical outcomes (efficacy) in AML, not a study quantifying pharmacokinetic or pharmacodynamic parameters (like AUC, Css, or receptor occupancy) of decitabine directly linked to the genotype. |
| PGx | Moon_2016 | not_relevant | 0 | 0 | The study investigates the effects of 5-aza-2'-deoxycytidine on drug sensitivity in colorectal cancer, not the pharmacokinetics or pharmacodynamics of decitabine. |
| popPK | Müller_2022 | irrelevant | 0 | 0 | The paper studies an antimicrobial peptide, not decitabine, and contains no PK parameters for the target drug. |
| PD | Müller_2022 | not_relevant | 0 | 0 | The paper studies an antimicrobial peptide (peptide 6027), not decitabine, and focuses on protein binding targets rather than pharmacodynamic modeling. |
| popPK | Nguyen_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of cell viability and gene expression in NSCLC cell lines, reporting no pharmacokinetic disposition parameters for decitabine. |
| PGx | Oda_2013 | not_relevant | 0 | 0 | The paper describes the tissue-specific expression of UGT1A1 and its epigenetic regulation but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Oki_2008 | not_relevant | 1 | 5 | The study monitors disease markers and drug mechanism in a small cohort but does not report a genetic variant determining PK or PD parameters. |
| PGx | Onda_2012 | not_relevant | 1 | 1 | The paper studies the effect of decitabine on drug resistance mechanisms (ABCB1/P-gp) in cell lines, but does not report how a human gene variant changes decitabine's own PK/PD parameters. |
| PGx | Oswald_2011 | not_relevant | 0 | 0 | The paper describes an LC-MS/MS method for determining clarithromycin and rifampicin in horses, with no mention of decitabine or pharmacogenomics. |
| PGx | Ozawa_2023 | not_relevant | 0 | 0 | The study uses a DNA methyltransferase inhibitor (decitabine) to investigate the pharmacodynamic effects on other drugs (irinotecan, 5-FU) and gene expression, but it does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of decitabine itself. |
| PGx | Parhizkar_2020 | not_relevant | 0 | 0 | The study investigates nanoparticle-mediated drug delivery and cytotoxicity in cell lines, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Peters_2020 | not_relevant | 0 | 0 | The paper studies decitabine in HL60 cell lines to analyze differentiation resistance and nucleotide pools, but it does not report any genetic variant or genotype associated with pharmacokinetic or pharmacodynamic parameters in a human clinical or pharmacogenomic context. |
| PGx | Phan_2016 | not_relevant | 0 | 0 | The paper reports on the pharmacodynamic effects of 5-azacytidine (decitabine) on cancer cells but does not investigate how any specific gene variant or genotype alters these effects. |
| popPK | Phillips_2016 | irrelevant | 0 | 0 | The paper reports on health-related quality of life outcomes for daclizumab in multiple sclerosis and contains no pharmacokinetic data for decitabine. |
| popPK | Pommert_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy and pharmacodynamic study (gene expression/methylation) that does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for decitabine. |
| PD | Pommert_2022 | not_relevant | 2 | 0 | The paper reports clinical response rates and qualitative correlative pharmacodynamics (gene signatures) but does not provide numeric exposure-response or dose-response parameters (e.g., Emax, EC50) for decitabine. |
| popPK | Qin_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of resistance mechanisms (IC50, gene expression) and does not report pharmacokinetic disposition parameters for decitabine. |
| popPK | Rani_2026 | irrelevant | 0 | 0 | The paper investigates the antihypertensive effects of a Gymnema sylvestre extract in rodents and contains no data regarding decitabine. |
| PD | Rani_2026 | not_relevant | 0 | 0 | The paper studies Gymnema sylvestre, not decitabine. |
| popPK | Richel_1988 | irrelevant | 0 | 0 | The study focuses on antileukaemic activity, cell cycle kinetics, and stem cell toxicity in a rat model, reporting no pharmacokinetic parameters (CL, V, t1/2) for decitabine. |
| PGx | Rivero-Juarez_2018 | not_relevant | 0 | 0 | The paper reviews the PK/PD of HCV medications and does not discuss decitabine or any pharmacogenomic effects. |
| popPK | Ruiz_1994 | irrelevant | 0 | 0 | The paper focuses on the molecular mechanism of gemcitabine resistance in cell lines and does not report pharmacokinetic parameters for decitabine. |
| PD | Ruiz_1994 | not_relevant | 0 | 0 | The paper studies gemcitabine (2',2'-difluorodeoxycytidine), not decitabine, and focuses on the molecular mechanism of resistance (dCK deficiency) rather than a pharmacodynamic exposure-response model for decitabine. |
| popPK | Ruiz_1995 | irrelevant | 0 | 0 | The paper studies gemcitabine resistance in cell lines and does not report pharmacokinetic parameters for decitabine. |
| PD | Ruiz_1995 | not_relevant | 0 | 0 | The paper studies gemcitabine resistance in cell lines, not decitabine pharmacodynamics. |
| PGx | Salcedo_2017 | not_relevant | 0 | 0 | The paper studies daclatasvir in HCV patients and does not mention decitabine or any pharmacogenomic effects on its PK/PD. |
| popPK | Savona_2025 | irrelevant | 1 | 0 | The paper is a clinical efficacy and safety analysis of decitabine/cedazuridine in CMML that reports response rates and survival, but it does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for decitabine in the text. |
| PD | Savona_2025 | not_relevant | 2 | 1 | The paper reports clinical efficacy and safety outcomes (response rates, survival) and mentions pharmacodynamics (LINE-1 methylation) in the abstract, but the provided text and supplementary materials do not contain numeric PD parameters (Emax, EC50) or quantitative exposure-response/dose-response curves. |
| PGx | Sciumè_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes for venetoclax-based regimens and does not investigate the effect of any gene variant or genotype on the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Shirai_2024 | not_relevant | 0 | 0 | The paper describes the development of an in vitro intestinal epithelial cell model for drug PK evaluation and does not report pharmacogenomic effects on the PK/PD of decitabine. |
| popPK | Smith_2021 | irrelevant | 0 | 0 | The paper is an ecological risk assessment for the herbicide atrazine and does not mention decitabine or report any pharmacokinetic parameters. |
| PD | Smith_2021 | not_relevant | 0 | 0 | The paper discusses atrazine (a herbicide), not decitabine, and focuses on ecological risk assessment rather than pharmacodynamic modeling. |
| popPK | Stegmann_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on gene mutations and resistance, containing no pharmacokinetic parameters for decitabine. |
| PD | Stegmann_1995 | not_relevant | 2 | 1 | The paper describes a resistance induction study in cell lines and mentions IC50 values only as relative thresholds for resistance development, without providing a quantitative exposure-response or dose-response curve or specific numeric PD parameters for decitabine. |
| popPK | Stockler_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cephapirin in dairy cows, not decitabine. |
| popPK | Suay-Fuentes_2025 | irrelevant | 0 | 0 | The paper describes an immunoassay for cyanotoxins and does not involve decitabine or pharmacokinetic parameters. |
| PD | Suay-Fuentes_2025 | not_relevant | 0 | 0 | The paper describes an immunoassay for cyanotoxins and is unrelated to decitabine pharmacodynamics. |
| PGx | Sumarpo_2020 | not_relevant | 0 | 0 | The paper discusses taxane resistance and ABCB1, but does not mention decitabine or report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Sun_2008 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Sun_2008 | not_relevant | 0 | 0 | The paper discusses glucocorticoid receptor-mediated repression and does not mention decitabine or report any pharmacodynamic parameters for it. |
| PGx | Tanaka_2018 | not_relevant | 0 | 0 | The paper investigates epigenetic regulation of MATE1 expression using 5-aza-2'-deoxycytidine (decitabine) as a tool, but does not report pharmacogenomic effects of decitabine itself on its own PK/PD parameters. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on miR-29c and decitabine resistance in cell lines, reporting IC50 values rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Tatman_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity assessment of decitabine on cultured tumors and does not report any pharmacokinetic parameters. |
| PGx | Tomiyasu_2014 | not_relevant | 0 | 0 | The study concerns canine ABCB1 gene regulation and multidrug resistance, does not involve the drug decitabine, and reports no human pharmacogenomic effects on decitabine PK/PD parameters. |
| popPK | Tran_2016 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PGx | Tran_2016 | not_relevant | 0 | 0 | The paper focuses on daclizumab in multiple sclerosis, not decitabine. |
| popPK | Uddin_2021 | irrelevant | 0 | 0 | The paper is a review of DNA methylation inhibitors and does not report quantitative pharmacokinetic parameters for decitabine. |
| PD | Uddin_2021 | not_relevant | 2 | 0 | The text is a review chapter discussing the classification and general pharmacodynamics of DNA hypomethylating agents without providing specific numeric PD parameters or exposure-response data for decitabine. |
| popPK | Ueda_2020 | irrelevant | 0 | 0 | The study is an in-vitro cell transport mechanism analysis, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, half-life) for decitabine in a subject. |
| popPK | Veselý_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug resistance in cell lines, not a pharmacokinetic study, and does not report disposition parameters for decitabine. |
| PD | Veselý_1987 | not_relevant | 3 | 2 | The paper reports IC50 values and fold-resistance for a drug analog (5-aza-2'-deoxycytidine) in a cell line, but does not report a PD model or exposure-response relationship for decitabine itself. |
| popPK | Wallace_1989 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of cytosine arabinoside (Ara-C) and deoxycytidine effects on neuron survival, not a pharmacokinetic study of decitabine. |
| PD | Wallace_1989 | not_relevant | 0 | 0 | The paper investigates the effects of cytosine arabinoside (Ara-C) and deoxycytidine on neuronal survival, not decitabine. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP3A4 regulation by DNA methylation using 5-aza-2-deoxycytidine, but does not report pharmacogenomic effects on the PK or PD of decitabine itself. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of trichostatin C with decitabine as a comparator, reporting no pharmacokinetic parameters. |
| PD | Wang_2024 | not_relevant | 2 | 1 | The paper reports IC50 values for trichostatin C and qualitative synergy with decitabine, but does not provide numeric PD parameters or a quantitative exposure-response model for decitabine itself. |
| PGx | Woost_2024 | not_relevant | 3 | 4 | The paper proposes DNMT1 protein levels as a pharmacodynamic biomarker for hypomethylating therapies and notes inter-individual variability is due to pharmacogenetics, but it does not study a specific gene variant or genotype to quantify its effect on PK/PD. |
| PGx | Xie_2014 | not_relevant | 0 | 0 | The paper studies the effects of DAC (decitabine) on the expression of genes involved in irinotecan metabolism, not the effect of a gene variant on decitabine's own pharmacokinetic or pharmacodynamic parameters. |
| PGx | Xie_2014_2 | not_relevant | 0 | 0 | The paper studies CPT-11 sensitivity in colorectal cancer cells, not the pharmacokinetics or pharmacodynamics of decitabine. |
| PGx | Xu_2020 | not_relevant | 0 | 0 | The paper focuses on conventional synthetic DMARDs for rheumatoid arthritis, not decitabine. |
| PGx | Yamada_2005 | not_relevant | 0 | 0 | The paper investigates the mutagenicity of chrysene analogs and their interaction with CYP enzymes, and does not involve the drug decitabine or report pharmacogenomic effects on its PK/PD parameters. |
| PGx | Younas_2021 | not_relevant | 0 | 0 | The paper discusses direct-acting antivirals (sofosbuvir/daclatasvir) for HCV, not decitabine, and does not report pharmacogenomic effects. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of MC180295, with decitabine serving only as a co-administered comparator agent without reported PK parameters. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses on the CDK9 inhibitor MC180295; decitabine is used only as a combination partner in efficacy studies without any PD or exposure-response modeling for decitabine itself. |
| PGx | Zhang_2024_2 | not_relevant | 0 | 0 | The paper investigates decitabine as an epigenetic therapy that upregulates CYP1A2 to sensitize cells to sorafenib, but it does not report a pharmacogenomic effect of a gene variant on the PK or PD parameters of decitabine itself. |
| popPK | Zhou_2019 | relevant | 9 | 1 | The paper is a direct population pharmacokinetic study of decitabine in humans, but the specific numeric parameter values (CL, V, etc.) are described qualitatively in the abstract without providing the actual numbers, which are likely in the full text tables or figures not included in the evidence. |
| PGx | de_2005 | not_relevant | 0 | 0 | The provided text is a general review of decitabine's history and clinical applications, containing no information on pharmacogenomics, genetic variants, or their impact on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
