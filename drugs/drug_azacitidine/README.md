<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;azacitidine&quot;}]"></div>

# azacitidine

- **generic name:** azacitidine
- **ATC codes:** `L01BC07`
- **DrugBank:** [DB00928](https://go.drugbank.com/drugs/DB00928) · **PubChem:** [CID 9444](https://pubchem.ncbi.nlm.nih.gov/compound/9444)
- **molar mass:** 244.2047 g/mol (C8H12N4O5) — DrugBank
- **groups:** approved, investigational

## About

Azacitidine is an anticancer antimetabolite used to treat blood cancers such as myelodysplastic syndrome, acute myeloid leukemia, and chronic myelomonocytic leukemia. It is approved and authorised in the European Union, with several authorised products, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416451](https://www.wikidata.org/wiki/Q416451) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:26 | 1:10 | 0/0/0 | 0/1/0 | 0/0/0 | 107,075/4,326 | einfracz / qwen3.8-27b | 10 | 1/15 | 10/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Thakre_2025_RBC](drugs/drug_azacitidine/pd_Thakre_2025_RBC.md) | red blood cells ← venetoclax, azacitidine · disease-progression model | — | Thakre N et al., Semi-mechanistic population PK/PD model…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13284](https://doi.org/10.1002/psp4.13284) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Thakre_2025_blasts](drugs/drug_azacitidine/pd_Thakre_2025_blasts.md) | bone marrow blasts ← venetoclax, azacitidine · disease-progression model | — | Thakre N et al., Semi-mechanistic population PK/PD model…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13284](https://doi.org/10.1002/psp4.13284) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Thakre_2025_neutrophils](drugs/drug_azacitidine/pd_Thakre_2025_neutrophils.md) | neutrophils ← venetoclax, azacitidine · disease-progression model | — | Thakre N et al., Semi-mechanistic population PK/PD model…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13284](https://doi.org/10.1002/psp4.13284) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Thakre_2025_platelets](drugs/drug_azacitidine/pd_Thakre_2025_platelets.md) | platelets ← venetoclax, azacitidine · disease-progression model | — | Thakre N et al., Semi-mechanistic population PK/PD model…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13284](https://doi.org/10.1002/psp4.13284) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=azacitidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CDA (substrate), DNA (other), DNMT1 (inhibitor), PARP1 (inhibitor), RNA (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 97 matched, 89 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gaudy_2023.pdf` | Gaudy A et al., Population Pharmacokinetics of Oral Aza…, Clinical pharmacology and t… (2023) | popPK | 10 | [10.1002/cpt.2982](https://doi.org/10.1002/cpt.2982) | [37422689](https://pubmed.ncbi.nlm.nih.gov/37422689) | The paper describes a population pharmacokinetic model for oral azacitidine, but the specific numeric parameter values (e.g., CL, V, ka) are not provided in the evidence text. |
| `Agarwal_2019.pdf` | Agarwal S et al., Optimizing venetoclax dose in combinati…, Hematological oncology (2019) | pd | 5 | [10.1002/hon.2646](https://doi.org/10.1002/hon.2646) | [31251400](https://www.ncbi.nlm.nih.gov/pubmed/31251400) | metadata signals extractable PD data (exposure-response) |
| `Anders_2016.pdf` | Anders NM et al., Simultaneous quantitative determination…, Journal of chromatography.… (2016) | pd | 5 | [10.1016/j.jchromb.2016.03.029](https://doi.org/10.1016/j.jchromb.2016.03.029) | [27082761](https://www.ncbi.nlm.nih.gov/pubmed/27082761) | metadata signals extractable PD data (exposure-response) |
| `Badawi_2024.pdf` | Badawi M et al., Dosing of Venetoclax in Pediatric Patie…, Clinical therapeutics (2024) | pd | 5 | [10.1016/j.clinthera.2024.09.008](https://doi.org/10.1016/j.clinthera.2024.09.008) | [39368878](https://www.ncbi.nlm.nih.gov/pubmed/39368878) | metadata signals extractable PD data (Exposure-Response) |
| `Brackman_2022.pdf` | Brackman D et al., Venetoclax exposure-efficacy and exposu…, Hematological oncology (2022) | pd | 5 | [10.1002/hon.2964](https://doi.org/10.1002/hon.2964) | [35043428](https://www.ncbi.nlm.nih.gov/pubmed/35043428) | metadata signals extractable PD data (Exposure-response) |
| `Kytölä_2025.pdf` | Kytölä S et al., Capillary Sampling Enables Venetoclax C…, Basic & clinical pharmacolo… (2025) | pgx | 8 | [10.1111/bcpt.70041](https://doi.org/10.1111/bcpt.70041) | [40289318](https://www.ncbi.nlm.nih.gov/pubmed/40289318) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kobayashi_2022.pdf` | Kobayashi M et al., Utility of therapeutic drug monitoring…, Medical oncology (Northwood… (2022) | pgx | 7 | [10.1007/s12032-022-01865-y](https://doi.org/10.1007/s12032-022-01865-y) | [36224276](https://www.ncbi.nlm.nih.gov/pubmed/36224276) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T16:26:04.951386+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abaza_2017 | irrelevant | 1 | 0 | The study focuses on pracinostat as the subject drug, with azacitidine serving only as a co-administered agent in a combination arm, and no quantitative PK parameters for azacitidine are reported. |
| PD | Abaza_2017 | not_relevant | 1 | 0 | The paper focuses on pracinostat PK/PD (histone acetylation) and only qualitatively mentions a lack of dose-dependent effect, without providing numeric PD parameters or an exposure-response model for azacitidine. |
| popPK | Agarwal_2019 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Agarwal_2019 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for venetoclax, not azacitidine. |
| popPK | Al-Kofahi_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of tacrolimus, not azacitidine. |
| PD | Al-Kofahi_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (clearance) of tacrolimus, not azacitidine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Anders_2016 | irrelevant | 0 | 0 | no_text gate: only 243 chars of text extracted (&lt; 400) |
| popPK | Badawi_2024 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Badawi_2024 | not_relevant | 0 | 0 | The paper focuses on Venetoclax, not azacitidine. |
| popPK | Ball_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BTX A51, not azacitidine, which is only mentioned as a prior therapy or in ex-vivo synergy studies. |
| PD | Ball_2025 | not_relevant | 0 | 0 | The paper reports on BTX A51, not azacitidine; while azacitidine is mentioned in combination synergy studies, no exposure-response or dose-response PD parameters for azacitidine itself are reported. |
| popPK | Baroud_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis and characterization of azacitidine prodrug self-assemblies and in-vitro cytotoxicity, reporting no pharmacokinetic parameters. |
| PGx | Bejar_2014 | not_relevant | 2 | 1 | The paper evaluates TET2 mutations for clinical treatment response/survival, not for changes in pharmacokinetic or pharmacodynamic parameters of azacitidine. |
| popPK | Brackman_2022 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| PD | Brackman_2022 | not_relevant | 0 | 0 | The paper analyzes venetoclax, not azacitidine. |
| popPK | Butler_2020 | irrelevant | 0 | 0 | The study is a preclinical mechanistic and efficacy evaluation of azacitidine in breast cancer models, reporting no pharmacokinetic parameters. |
| PGx | Calleja_2020 | not_relevant | 0 | 0 | The paper investigates clonal selection and genomic dynamics (TP53, DNA methylation genes) during azacitidine treatment, but does not report how specific gene variants alter pharmacokinetic (PK) or pharmacodynamic (PD) parameters of the drug itself. |
| PGx | Chen_2010 | not_relevant | 0 | 0 | The paper assesses in vitro CYP inhibition and induction by azacitidine but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper studies the prodrug gliocidin in glioblastoma, not azacitidine. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper investigates the drug gliocidin, not azacitidine. |
| PGx | Chou_2017 | not_relevant | 1 | 5 | The study compares PK between ethnicities (proxy for genotype) but reports no specific gene variants or genotypes, finding only non-meaningful differences. |
| PGx | Daver_2023 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (CR, OS, AEs) of the combination therapy but does not report pharmacokinetic or pharmacodynamic parameters influenced by genetic variants. |
| PGx | De_2023 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction involving azacitidine but does not report pharmacogenomic effects of gene variants on its PK or PD parameters. |
| popPK | Derakhshani_2023 | irrelevant | 0 | 0 | The study is an in vitro and in silico investigation of antileishmanial activity and does not report any pharmacokinetic parameters for azacitidine. |
| PGx | DiNardo_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes (efficacy and safety) of enasidenib and azacitidine in MDS patients but does not report a pharmacokinetic or pharmacodynamic parameter changed by a specific gene variant. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper is about antimicrobial menthol derivatives and does not mention azacitidine or pharmacokinetics. |
| PD | Di_2026 | not_relevant | 0 | 0 | The paper discusses menthol-based antimicrobials (MF1, MCl2) and does not mention azacitidine or report any pharmacodynamic parameters for it. |
| popPK | Ericsson_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of AZD5718 (a FLAP inhibitor), not azacitidine. |
| PD | Ericsson_2020 | not_relevant | 0 | 0 | The paper studies AZD5718, not azacitidine, and does not report specific numeric PD parameters for the requested drug. |
| popPK | Faessel_2019 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of pevonedistat, not azacitidine; azacitidine is only a co-administered drug whose lack of effect on pevonedistat clearance is noted. |
| popPK | Fakhrabadi_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and apoptosis in hematopoietic stem cells, reporting no pharmacokinetic parameters for azacitidine. |
| PGx | Fanciullino_2015 | not_relevant | 5 | 5 | Reports clinical outcomes (toxicity/remission) linked to genotype but does not report quantitative changes in specific PK parameters (e.g., AUC, Cmax) or PD biomarkers. |
| PGx | Filì_2013 | not_relevant | 5 | 5 | The study investigates SNP and PI-PLCβ1 levels as predictors of clinical response (hematologic improvement), which is a clinical outcome rather than a direct pharmacokinetic or pharmacodynamic parameter change. |
| PGx | Fiumara_2025 | not_relevant | 0 | 0 | The paper is a review of VEXAS syndrome pathogenesis and treatment options (including azacitidine) but does not report pharmacogenomic effects of specific gene variants on azacitidine PK or PD parameters. |
| popPK | Garcia-Manero_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of decitabine and cedazuridine, not azacitidine. |
| PD | Garcia-Manero_2024 | not_relevant | 0 | 0 | The study focuses on pharmacokinetic bioequivalence (AUC) and safety, with no quantitative pharmacodynamic modeling or numeric exposure-response parameters reported. |
| popPK | Gaudy_2023 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for oral azacitidine, but the specific numeric parameter values (e.g., CL, V, ka) are not provided in the evidence text. |
| popPK | Gruber_2025 | irrelevant | 0 | 0 | The paper is a benchmark dataset for mass spectrometry imaging of lipids in a mouse model and does not report pharmacokinetic parameters for azacitidine. |
| PD | Gruber_2025 | not_relevant | 0 | 0 | The paper describes a mass spectrometry imaging dataset for lipid annotation in a mouse model and contains no pharmacodynamic or exposure-response analysis for azacitidine. |
| PGx | Ikoma_2025 | not_relevant | 0 | 0 | The paper reports clinical and genomic prognostic factors for treatment response and survival, but does not report pharmacokinetic or pharmacodynamic parameters of azacitidine influenced by gene variants. |
| PGx | Jachiet_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes in VEXAS syndrome but does not analyze pharmacogenomic effects on PK or PD parameters. |
| popPK | Jacobberger_2024 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic assay for DNMT1 levels and does not report any pharmacokinetic parameters for azacitidine. |
| PD | Jacobberger_2024 | not_relevant | 1 | 0 | The paper describes a qualitative pharmacodynamic assay for measuring DNMT1 levels but does not report any numeric exposure-response or dose-response parameters (e.g., Emax, EC50) for azacitidine. |
| popPK | Kagan_2023 | irrelevant | 1 | 0 | This is a review article focusing on biomarkers and clinical trials, and it does not report quantitative pharmacokinetic parameter values for azacitidine. |
| PD | Kagan_2023 | not_relevant | 2 | 0 | The text is an abstract for a review article summarizing challenges and opportunities in DNMTi exposure-response, but it does not report specific numeric PD parameters or extractable concentration-effect curves for azacitidine. |
| PGx | Karagiannis_2012 | not_relevant | 0 | 0 | The paper is a forum overview discussing epigenetic mechanisms and disease associations; it mentions azacitidine's clinical use but does not report pharmacogenomic data affecting its PK or PD parameters. |
| popPK | Karakuzu_2024 | irrelevant | 0 | 0 | The paper is a review of reproducibility in magnetic resonance neuroimaging and does not contain any pharmacokinetic data or parameters for azacitidine. |
| PD | Karakuzu_2024 | not_relevant | 0 | 0 | The paper is a review on reproducible research practices in MRI neuroimaging and contains no pharmacodynamic or exposure-response data for azacitidine. |
| PGx | Kobayashi_2022 | not_relevant | 0 | 0 | The study focuses on therapeutic drug monitoring of venetoclax and reports on the effect of body surface area and CYP3A4 inhibitors on its pharmacokinetics, containing no data on azacitidine pharmacokinetics or pharmacodynamics. |
| PGx | Kytölä_2025 | not_relevant | 0 | 0 | The paper focuses on venetoclax pharmacokinetics and a feasibility study for capillary sampling; it does not report pharmacogenomic effects on azacitidine parameters. |
| popPK | Lee_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of theophylline in premature infants, not azacitidine. |
| PD | Lee_1996 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of theophylline, not azacitidine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The study evaluates dosing differences based on ethnicity/phenotype for the drug venetoclax (PK), but contains no data or analysis regarding pharmacogenomic variants affecting azacitidine PK or PD parameters. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper evaluates the clinical safety and efficacy of a drug combination (venetoclax/voriconazole/azacitidine) without reporting any pharmacogenomic data or genetic variants affecting PK/PD parameters. |
| PGx | Madarang_2024 | not_relevant | 0 | 0 | The paper examines venetoclax and hypomethylating agent (HMA) therapy in elderly AML patients, correlating molecular markers with clinical outcomes, and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of azacitidine. |
| PGx | Meng_2025 | not_relevant | 0 | 0 | The paper reports on grapefruit juice interaction with venetoclax, not pharmacogenomic effects on azacitidine. |
| popPK | Miskei_2026 | irrelevant | 0 | 0 | The paper studies APOBEC-mediated mutagenesis in Herpes simplex virus type 1 and does not involve azacitidine pharmacokinetics. |
| PD | Miskei_2026 | not_relevant | 0 | 0 | The paper investigates APOBEC-mediated mutagenesis in HSV-1 and does not involve azacitidine or report any pharmacodynamic or exposure-response relationships. |
| PGx | Montesinos_2025 | not_relevant | 2 | 10 | The paper reports clinical outcomes (OS, EFS) in a genetically defined population (IDH1-mutated) but does not report how the genotype directly modifies the pharmacokinetic or pharmacodynamic parameters (e.g., exposure, receptor binding) of azacitidine. |
| popPK | Murase_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug resistance in cell lines and does not report pharmacokinetic disposition parameters for azacitidine. |
| popPK | Ngara_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BTZ-043, bedaquiline, pretomanid, and linezolid, and does not involve azacitidine. |
| PD | Ngara_2025 | not_relevant | 0 | 0 | The paper focuses on the drug BTZ-043, not azacitidine, and does not report any pharmacodynamic data for azacitidine. |
| popPK | Nguyen_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell viability and gene expression in cancer cell lines, reporting no pharmacokinetic disposition parameters. |
| popPK | Nguyen_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus in kidney transplant patients, not azacitidine. |
| PD | Nguyen_2023 | not_relevant | 0 | 0 | The paper focuses on tacrolimus pharmacokinetics (AUC estimation) in kidney transplant patients and does not involve azacitidine or report any pharmacodynamic or exposure-response relationships. |
| PGx | Niemeyer_2021 | not_relevant | 0 | 0 | The study analyzes methylation signatures and variant allele frequencies as biomarkers of response, but does not report genetic variants affecting azacitidine pharmacokinetics or pharmacodynamics. |
| popPK | Odenike_2015 | irrelevant | 0 | 0 | The study is a Phase I dose-escalation and pharmacodynamic trial focused on toxicity and gene expression, with no pharmacokinetic parameters or quantitative disposition data reported for azacitidine. |
| PD | Odenike_2015 | not_relevant | 2 | 1 | The study reports qualitative changes in gene expression (MDR1 upregulation) and clinical responses but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response/dose-response model for azacitidine. |
| popPK | Paxson_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity assay measuring IC50 values, not a pharmacokinetic study reporting disposition parameters for azacitidine. |
| popPK | Philippe_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, where azacitidine is only a co-administered agent/comparator. |
| popPK | Port_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fludarabine monophosphate in rats, not azacitidine. |
| PD | Port_2006 | not_relevant | 0 | 0 | The paper studies fludarabine monophosphate, not azacitidine, and focuses on PK/release modeling rather than pharmacodynamic exposure-response relationships. |
| popPK | Pospiech_2026 | irrelevant | 0 | 0 | The paper is a case report and ex vivo sensitivity study focusing on FLT3 inhibitors (gilteritinib, midostaurin, quizartinib), with azacitidine mentioned only as a co-administered therapy without any pharmacokinetic parameter reporting. |
| PD | Pospiech_2026 | not_relevant | 0 | 0 | The paper reports ex vivo IC50 values for FLT3 inhibitors (gilteritinib, midostaurin, quizartinib), but does not report any pharmacodynamic or exposure-response relationship for azacitidine. |
| popPK | Prebet_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting response rates and survival, with no pharmacokinetic parameters or quantitative disposition data for azacitidine. |
| PD | Prebet_2014 | not_relevant | 1 | 0 | The paper reports clinical outcomes and a qualitative observation of pharmacodynamic antagonism (demethylation) but provides no numeric PD parameters, concentration-effect curves, or formal PK/PD modeling. |
| popPK | Ramsey_2020 | relevant | 8 | 4 | The paper reports quantitative PK parameters (AUC, bioavailability) for azacitidine in animal models, but lacks specific compartmental parameters like clearance (CL) or volume (V) values in the text. |
| PGx | Rausch_2022 | not_relevant | 0 | 0 | The text is a general review of AML therapy updates and mentions azacitidine usage but does not report any specific pharmacogenomic effects on its PK or PD parameters. |
| PD | Rudek_2005 | not_relevant | 1 | 0 | The paper reports only pharmacokinetic parameters (Cmax, AUC, Tmax) and qualitatively mentions PD effects (DNA methyltransferase inhibition) without providing any numeric PD parameters or exposure-response data. |
| PGx | Sallman_2021 | not_relevant | 0 | 0 | The paper reports clinical outcomes (response rate, survival) and molecular changes (TP53 VAF) in a specific genomic subset, but does not report changes in the pharmacokinetics (PK) or pharmacodynamics (PD) of azacitidine itself. |
| PGx | Sanchez-Garcia_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy and changes in tumor mutation burden, but does not report pharmacokinetic or pharmacodynamic parameters influenced by host germline variants or genotypes. |
| popPK | Schönung_2025 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic biomarkers (DNA methylation) and does not report any pharmacokinetic parameters for azacitidine. |
| PD | Schönung_2025 | not_relevant | 2 | 1 | The paper reports qualitative associations between DNA methylation signatures and clinical response, but does not provide numeric exposure-response parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| PGx | Schönung_2025 | not_relevant | 0 | 0 | The study analyzes pharmacodynamic biomarkers (DNA methylation) and mutation frequencies, but does not report the effect of host gene variants on PK or PD parameters. |
| PGx | Sciumè_2023 | not_relevant | 0 | 0 | The paper reports a clinical experience of venetoclax combinations and does not provide pharmacogenomic data on gene variants affecting the PK/PD of azacitidine. |
| popPK | Sedloev_2024 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo mechanistic study on proteasome inhibitors and NK cells, with no pharmacokinetic parameters reported for azacitidine. |
| PD | Sedloev_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of proteasome inhibitors (Bortezomib/Carfilzomib) and CAR-NK cells, not azacitidine; azacitidine is only mentioned in the context of resistance conditioning. |
| popPK | Thakre_2025 | irrelevant | 2 | 0 | The paper focuses on a semi-mechanistic PD model of hematologic cell dynamics driven by venetoclax PK and azacitidine treatment, without reporting quantitative PK parameters (CL, V, etc.) for azacitidine itself. |
| popPK | Thanigaimani_2022 | irrelevant | 0 | 0 | The paper is an observational study on abdominal aortic aneurysm growth where azacitidine is merely listed as one of many immunosuppressant drugs, containing no pharmacokinetic data. |
| popPK | Tong_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for azacitidine. |
| popPK | Trocóniz_2006 | irrelevant | 0 | 0 | The study models the pharmacokinetics and pharmacodynamics of BIBN 4096 BS, not azacitidine. |
| PD | Trocóniz_2006 | not_relevant | 0 | 0 | The paper reports a PD model for BIBN 4096 BS, not azacitidine. |
| popPK | Ueda_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting response rates and survival, with no pharmacokinetic parameters or quantitative disposition data for azacitidine. |
| PD | Ueda_2019 | not_relevant | 1 | 0 | The paper reports clinical outcomes and a qualitative finding of no correlation between a PD marker (DNMT1) and dose/response, but provides no numeric PD parameters or concentration-effect curves. |
| popPK | Von_2018 | irrelevant | 2 | 0 | The paper is a Phase I safety study that lists pharmacokinetics as a secondary endpoint but provides no quantitative PK parameter values (CL, V, etc.) in the extracted evidence. |
| PD | Von_2018 | not_relevant | 1 | 0 | The abstract mentions pharmacodynamics as a secondary endpoint but provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Watts_2023 | irrelevant | 0 | 0 | The study focuses on olutasidenib as the subject drug, with azacitidine serving only as a co-administered comparator agent, and no quantitative PK parameters for azacitidine are reported. |
| PD | Watts_2023 | not_relevant | 0 | 0 | The text describes a Phase 1 trial of olutasidenib (with or without azacitidine) and reports safety and clinical response rates, but it does not provide any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for azacitidine. |
| PGx | Westra_2026 | not_relevant | 5 | 0 | The paper mentions CYP3A4 polymorphisms and states they reduce variability, but it does not report specific quantitative pharmacogenomic effect sizes (e.g., AUC ratios by genotype) for the drug; the primary PK data are for drug-drug interaction (cobicistat). |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of SPI-62, not azacitidine. |
| PD | Wu_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of SPI-62 using a target-mediated drug disposition (TMDD) model, not azacitidine, and does not report pharmacodynamic (PD) parameters or exposure-response relationships for the drug of interest. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug synergy/antagonism and does not report pharmacokinetic parameters for azacitidine. |
| popPK | Yoshida-Sakai_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug resistance in cell lines and does not report pharmacokinetic parameters for azacitidine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
