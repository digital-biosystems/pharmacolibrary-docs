<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;fosdenopterin&quot;}]"></div>

# fosdenopterin

- **generic name:** fosdenopterin
- **ATC codes:** `A16AX19`
- **DrugBank:** [DB16628](https://go.drugbank.com/drugs/DB16628) · **PubChem:** not captured
- **molar mass:** 363.223 g/mol (C10H14N5O8P) — DrugBank
- **groups:** approved

## About

**Description.** Molybdenum cofactor deficiency (MoCD) is an exceptionally rare autosomal recessive disorder resulting in a deficiency of three molybdenum-dependent enzymes: sulfite oxidase (SOX), xanthine dehydrogenase, and aldehyde oxidase.[A230088] Signs and symptoms begin shortly after birth and are caused by a build-up of toxic sulfites resulting from a lack of SOX activity.[A230088,L32163] Patients with MoCD may present with metabolic acidosis, intracranial hemorrhage, feeding difficulties, and significant neurological symptoms such as muscle hyper- and hypotonia, intractable seizures, spastic paraplegia, myoclonus, and opisthotonus. In addition, patients with MoCD are often born with morphologic evidence of the disorder such as microcephaly, cerebral atrophy/hypodensity, dilated ventricles, and ocular abnormalities.[A230088] MoCD is incurable and median survival in untreated patients is approximately 36 months[A230088] - treatment, then, is focused on improving survival and maintaining neurological function.

The most common subtype of MoCD, type A, involves mutations in _MOCS1_ wherein the first step of molybdenum cofactor synthesis - the conversion of guanosine triphosphate into cyclic pyranopterin monophosphate (cPMP) - is interrupted.[A230088,A230593] In the past, management strategies for this disorder involved symptomatic and supportive treatment,[L32163] though efforts were made to develop a suitable exogenous replacement for the missing cPMP. In 2009 a recombinant, E. coli-produced cPMP was granted orphan drug designation by the FDA, becoming the first therapeutic option for patients with MoCD type A.[A230088]

Fosdenopterin was approved by the FDA on Februrary 26, 2021, for the reduction of mortality in patients with MoCD type A,[L32163] becoming the first and only therapy approved for the treatment of MoCD. By improving the three-year survival rate from 55% to 84%,[L32288] and considering the lack of alternative therapies available, fosdenopterin appears poised

**Indication.** Fosdenopterin is indicated to reduce the risk of mortality in patients with molybdenum cofactor deficiency (MoCD) type A.[L32288]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 08:12 | 4:14 | 0/0/0 | 0/1/0 | 0/0/0 | 21,072/3,779 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 0/21 | 19/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed</span> | [Hoeben_2026_TV](drugs/drug_fosdenopterin/pd_Hoeben_2026_TV.md) | tumor volume ← plasma asparaginase activity · direct linear effect | — | Hoeben E et al., PKPD-Based Translational Modeling of Ca…, European journal of drug me… (2026) | [10.1007/s13318-026-01010-4](https://doi.org/10.1007/s13318-026-01010-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fosdenopterin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `XDH` cofactor | DrugBank actor |
| metabolism | small intestine | `XDH` cofactor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor, `SLC47A1` substrate, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MOCS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10962 matched, 71 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stahl_2002.pdf` | Stahl M et al., Human microdialysis, Current pharmaceutical biot… (2002) | pd | 5 | [10.2174/1389201023378373](https://doi.org/10.2174/1389201023378373) | [12022259](https://www.ncbi.nlm.nih.gov/pubmed/12022259) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-09-27T08:10:22.434088+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aardema_2008 | irrelevant | 0 | 0 | The paper evaluates the genotoxicity of dextromethorphan, not the pharmacokinetics of fosdenopterin. |
| PD | Aardema_2008 | not_relevant | 0 | 0 | The paper evaluates the genotoxicity of Dextromethorphan, not the pharmacodynamics of fosdenopterin. |
| PGx | Alonzo_2020 | not_relevant | 0 | 0 | The paper reports a case of molybdenum cofactor deficiency and prenatal findings, but does not discuss fosdenopterin pharmacokinetics or pharmacodynamics. |
| popPK | Arrigoni_2007 | irrelevant | 0 | 0 | The paper is a review on QT liability assessment methods and does not contain any pharmacokinetic data or parameters for fosdenopterin. |
| PD | Arrigoni_2007 | not_relevant | 0 | 0 | The text is a general review of QT liability assessment methodologies and does not contain any specific data, analysis, or PD parameters for fosdenopterin. |
| popPK | Avila_2007 | irrelevant | 0 | 0 | The paper is an immunogenicity study of an influenza vaccine and does not involve fosdenopterin or pharmacokinetic parameters. |
| popPK | Baroudi_2026 | irrelevant | 0 | 0 | The study focuses on tacrolimus pharmacokinetics and model selection methodology, not fosdenopterin. |
| PD | Baroudi_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (popPK) model selection for tacrolimus and does not report any pharmacodynamic (PD) or exposure-response relationships for fosdenopterin. |
| popPK | Barry_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not fosdenopterin. |
| PD | Barry_2026 | not_relevant | 0 | 0 | The paper analyzes vancomycin, not fosdenopterin. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for enzyme replacement therapies in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not mention or report parameters for fosdenopterin. |
| PD | Barzel_2026 | not_relevant | 1 | 0 | The paper is a review of population PK/PD models for lysosomal storage diseases and does not report specific PD parameters or exposure-response relationships for fosdenopterin. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric modeling using warfarin and generic PK data, with no mention of fosdenopterin or specific quantitative parameters for it. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric modeling using NODEs and LASSO, demonstrating it on warfarin PK/PD data, but does not report any PD or exposure-response relationship for fosdenopterin. |
| PGx | Cantoreggi_2026 | not_relevant | 0 | 0 | The paper focuses on PCR correction methods for malaria efficacy studies and does not involve fosdenopterin or pharmacogenomics. |
| popPK | Carter_2008 | irrelevant | 0 | 0 | The paper is a review of an influenza H5N1 vaccine and does not contain any pharmacokinetic data for fosdenopterin. |
| popPK | Champeroux_2000 | irrelevant | 0 | 0 | The paper is a review on preclinical assessment of QT interval prolongation and does not report pharmacokinetic parameters for fosdenopterin. |
| PD | Champeroux_2000 | not_relevant | 0 | 0 | The text is a general review of preclinical methods for assessing QT prolongation risk and does not report any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for fosdenopterin. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rivaroxaban, not fosdenopterin. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper focuses on the external validation of population pharmacokinetic (PK) models for rivaroxaban and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Crenshaw_2026 | not_relevant | 0 | 0 | The paper is a case report of a patient with Molybdenum Cofactor Deficiency who died before treatment could be initiated, and it does not report any pharmacokinetic or pharmacodynamic data for fosdenopterin. |
| popPK | De_2015 | irrelevant | 0 | 0 | The paper is a review on OPRM1 as a biomarker for breast cancer pain and does not involve fosdenopterin or pharmacokinetic parameters. |
| PD | De_2015 | not_relevant | 0 | 0 | The paper is a review on OPRM1 as a biomarker for opioid response in breast cancer and does not report any pharmacodynamic or exposure-response data for fosdenopterin. |
| PGx | De_2015 | not_relevant | 0 | 0 | The paper discusses OPRM1 and opioid pharmacodynamics in breast cancer, not fosdenopterin. |
| popPK | Disse_2002 | irrelevant | 0 | 0 | The paper is a review of mucoactive drugs for respiratory diseases and does not mention fosdenopterin or report any pharmacokinetic parameters. |
| popPK | Draper_1980 | irrelevant | 0 | 0 | The paper discusses guidelines for mutagenicity testing and does not contain any pharmacokinetic data or parameters for fosdenopterin. |
| PD | Draper_1980 | not_relevant | 0 | 0 | The paper discusses guidelines for mutagenicity testing and does not contain any pharmacodynamic or exposure-response data for fosdenopterin. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a methodological comparison of software tools (OpenPMX vs NONMEM) and does not report pharmacokinetic parameters for fosdenopterin. |
| PD | Eleveld_2026 | not_relevant | 0 | 0 | The paper is a methodological comparison of software tools (OpenPMX vs NONMEM) using simulation studies and does not report any pharmacodynamic or exposure-response data for fosdenopterin. |
| PGx | Forcić_2001 | not_relevant | 0 | 0 | The paper discusses HCV RNA screening in plasma pools and is unrelated to fosdenopterin or pharmacogenomics. |
| popPK | Gleiter_1998 | irrelevant | 0 | 0 | The paper is a regulatory review of bioavailability study requirements and does not report any pharmacokinetic parameters for fosdenopterin. |
| PD | Gleiter_1998 | not_relevant | 0 | 0 | The paper is a regulatory review of bioavailability study requirements and does not report any pharmacodynamic or exposure-response data for fosdenopterin. |
| popPK | Goeyvaerts_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mosnodenvir, not fosdenopterin. |
| popPK | Hanke_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on acetylcholinesterase reactivation by oximes and does not involve fosdenopterin or pharmacokinetic parameters. |
| PD | Hanke_1990 | not_relevant | 0 | 0 | The paper discusses oxime reactivation of acetylcholinesterase and does not mention fosdenopterin or report any pharmacodynamic parameters for it. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of calaspargase pegol (CalPEG), not fosdenopterin. |
| PGx | Holzschuh_2025 | not_relevant | 0 | 0 | The paper focuses on nanopore sequencing methods for distinguishing malaria recrudescence from new infections, not on pharmacogenomics or fosdenopterin. |
| popPK | Hover_2015 | irrelevant | 0 | 0 | The paper describes the biochemical mechanism of molybdenum cofactor biosynthesis and does not involve fosdenopterin or pharmacokinetic parameters. |
| PD | Hover_2015 | not_relevant | 0 | 0 | The paper describes the biochemical mechanism of molybdenum cofactor biosynthesis and does not contain any pharmacokinetic or pharmacodynamic data for fosdenopterin. |
| popPK | Hsu_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study on covariate identification in PopPK modeling and does not report quantitative disposition parameters for fosdenopterin. |
| PD | Hsu_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PopPK) covariate identification methods and simulation power, containing no pharmacodynamic (PD) or exposure-response analysis for fosdenopterin. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not fosdenopterin. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not fosdenopterin, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not involve fosdenopterin. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not mention fosdenopterin or report any PD parameters for it. |
| popPK | Karges_1996 | irrelevant | 0 | 0 | The paper discusses Factor XIII pharmacokinetics and safety, not fosdenopterin. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for bevacizumab (CT-P16), not fosdenopterin. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bevacizumab (CT-P16) and compares exposure to a published benchmark, but it does not fit a pharmacodynamic (PD) model or report numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Knox_2021 | irrelevant | 0 | 0 | The paper studies the delivery of argininosuccinate synthetase (AS) using a cell-permeant miniature protein, not the pharmacokinetics of fosdenopterin. |
| PD | Knox_2021 | not_relevant | 0 | 0 | The paper describes the delivery of a protein (ZF-AS) for citrullinemia, not fosdenopterin, and reports only delivery concentrations without any pharmacodynamic or exposure-response analysis. |
| popPK | Kong_2025 | irrelevant | 0 | 0 | The paper describes a software framework (PKPy) and uses theophylline for validation, containing no data or parameters for fosdenopterin. |
| PD | Kong_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) software framework and validation studies; it contains no pharmacodynamic (PD) or exposure-response analysis for fosdenopterin or any other drug. |
| popPK | Lazar_2002 | irrelevant | 0 | 0 | The paper discusses viral inactivation during the processing of horse plasma IgG and does not involve fosdenopterin or pharmacokinetic parameters. |
| PGx | Lerch_2017 | not_relevant | 0 | 0 | The paper focuses on genotyping methods for malaria parasites and does not mention fosdenopterin or human pharmacogenomics. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper studies PF-06804103, not fosdenopterin. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper discusses PF-06804103, not fosdenopterin, and does not report PD parameters for the target drug. |
| popPK | Liao_2016 | irrelevant | 0 | 0 | The paper is a meta-analysis of influenza vaccine immunogenicity in SLE patients and contains no pharmacokinetic data for fosdenopterin. |
| popPK | Lina_2000 | irrelevant | 0 | 0 | The paper is a clinical trial of an influenza vaccine and does not involve fosdenopterin or pharmacokinetic parameters. |
| popPK | Lodge_1988 | irrelevant | 0 | 0 | The paper studies NMDA antagonists (CPP, CPMP, etc.) and does not involve fosdenopterin. |
| PD | Lodge_1988 | not_relevant | 0 | 0 | The paper studies NMDA antagonists (CPP, D-AP5, etc.) and does not mention fosdenopterin. |
| popPK | Manzoli_2011 | irrelevant | 0 | 0 | The paper is a meta-analysis of influenza vaccine immunogenicity and does not involve fosdenopterin or pharmacokinetic parameters. |
| popPK | Milanetti_2014 | irrelevant | 0 | 0 | The paper is a clinical study on influenza vaccine safety and immunogenicity in rheumatoid arthritis patients and does not involve fosdenopterin or pharmacokinetic parameters. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor, not fosdenopterin. |
| PD | Ooi_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of elafibranor, not fosdenopterin. |
| popPK | Powell_2000 | irrelevant | 0 | 0 | The paper is a regulatory review of antibacterial agents and does not contain any pharmacokinetic data for fosdenopterin. |
| PD | Powell_2000 | not_relevant | 0 | 0 | The text is a regulatory overview of EU licensing procedures for antibacterial agents and does not contain any pharmacodynamic data, models, or parameters for fosdenopterin. |
| popPK | Sarsenbayeva_2020 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the immunogenicity and safety of an influenza vaccine, not a pharmacokinetic study of fosdenopterin. |
| PGx | Schnoz_2024 | not_relevant | 0 | 0 | The paper focuses on genotyping methods for Plasmodium falciparum to assess antimalarial drug efficacy and does not involve fosdenopterin or human pharmacogenomics. |
| popPK | Schwahn_2024 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic biomarkers and biological half-life of enzyme activities, not the pharmacokinetic disposition parameters (CL, V, etc.) of fosdenopterin. |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for asparaginase (native and pegylated), not fosdenopterin. |
| PD | Sethuramalingam_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of asparaginase (N-Asp and P-Asp) and compares asparaginase activity levels, but it does not report a pharmacodynamic model or exposure-response relationship for fosdenopterin. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B, not fosdenopterin. |
| PD | Soeorg_2026 | not_relevant | 0 | 0 | The paper describes a PK/PD model for meropenem and colistin/polymyxin B, not fosdenopterin. |
| PGx | Spiegel_2022 | not_relevant | 0 | 0 | The paper describes the natural history of Molybdenum cofactor deficiency and does not report pharmacokinetic or pharmacodynamic parameters of fosdenopterin. |
| popPK | Stahl_2002 | irrelevant | 0 | 0 | The text is a general review of the microdialysis technique and contains no specific pharmacokinetic data or parameters for fosdenopterin. |
| PD | Stahl_2002 | not_relevant | 0 | 0 | The text is a general review of the microdialysis technique and does not contain any specific data, analysis, or PD parameters for fosdenopterin. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not fosdenopterin. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil, not fosdenopterin, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper focuses on pharmacokinetic sampling strategies for busulfan, not fosdenopterin. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on busulfan pharmacokinetics and limited sampling strategies, not fosdenopterin, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Tosca_2025 | irrelevant | 0 | 0 | The paper is a review on the application of Large Language Models in pharmacometrics and does not report any pharmacokinetic parameters for fosdenopterin. |
| PD | Tosca_2025 | not_relevant | 0 | 0 | The paper is a conceptual review on the application of Large Language Models in pharmacometrics and does not report any specific pharmacodynamic data or parameters for fosdenopterin. |
| popPK | Trijzelaar_1993 | irrelevant | 0 | 0 | The paper is a regulatory review on virus removal validation and contains no pharmacokinetic data for fosdenopterin. |
| popPK | Vajo_2017 | irrelevant | 0 | 0 | The paper is a clinical trial regarding influenza vaccine immunogenicity and does not involve fosdenopterin or pharmacokinetic parameters. |
| PD | Vajo_2017 | not_relevant | 0 | 0 | The paper studies influenza vaccine dose-response, not fosdenopterin pharmacodynamics. |
| popPK | Vinnemeier_2014 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the immunogenicity and safety of an influenza vaccine, not a pharmacokinetic study of fosdenopterin. |
| popPK | Walenga_2002 | irrelevant | 0 | 0 | The paper discusses fondaparinux, not fosdenopterin. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for polymyxin B, not fosdenopterin. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of polymyxin B and does not report any pharmacodynamic (PD) or exposure-response relationships for fosdenopterin. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological study using simulated data to demonstrate a statistical metric (95% CDIRAs) and does not report pharmacokinetic parameters for fosdenopterin. |
| PD | Wanika_2026 | not_relevant | 0 | 0 | The paper is a methodological case study on uncertainty quantification using simulated PK data and does not report any pharmacodynamic or exposure-response data for fosdenopterin. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for bosutinib, not fosdenopterin. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bosutinib, not fosdenopterin, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not fosdenopterin. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of tacrolimus and does not report any pharmacodynamic (PD) or exposure-response relationships for fosdenopterin or any other drug. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of daptomycin and does not contain any data or parameters for fosdenopterin. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses on daptomycin population pharmacokinetics (PopPK) and precision dosing, not fosdenopterin, and does not report any pharmacodynamic (PD) or exposure-response models. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B, not fosdenopterin. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) exposure prediction (AUC) for polymyxin B using Bayesian and machine learning methods, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of opioid pharmacokinetics in pregnancy and does not mention or report any data for fosdenopterin. |
| PD | Zaidi_2026 | not_relevant | 0 | 0 | The paper is a systematic review of opioid PK models in pregnancy and does not contain any data, analysis, or parameters for fosdenopterin. |
| popPK | Zasztowt-Sternicka_2025 | irrelevant | 0 | 0 | The paper studies the immunogenicity of an influenza vaccine in pregnant women and does not involve fosdenopterin or pharmacokinetic parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not fosdenopterin. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | unknown_1999 | irrelevant | 0 | 0 | The paper is a regulatory guidance document for Parkinson's disease and does not contain any pharmacokinetic data for fosdenopterin. |
| PD | unknown_1999 | not_relevant | 0 | 0 | The text is a regulatory guidance document for Parkinson's disease and does not contain any data, analysis, or parameters for fosdenopterin. |
| popPK | van_2015 | irrelevant | 0 | 0 | The paper is a clinical trial on influenza vaccines and does not involve fosdenopterin or pharmacokinetic parameters. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for immunoglobulins (IVIg/SCIg), not fosdenopterin. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of immunoglobulin (IVIg/SCIg) pharmacokinetics and does not contain any data, models, or parameters for fosdenopterin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
