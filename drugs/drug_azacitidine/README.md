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
| 2026-10-14 23:54 | 2:58 | 0/0/0 | 0/0/0 | 0/0/0 | 107,083/3,372 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/15 | 10/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=azacitidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CDA (substrate), DNA (other), DNMT1 (inhibitor), PARP1 (inhibitor), RNA (other).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 97 matched, 89 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gaudy_2023.pdf` | Gaudy A et al., Population Pharmacokinetics of Oral Aza…, Clinical pharmacology and t… (2023) | popPK | 10 | [10.1002/cpt.2982](https://doi.org/10.1002/cpt.2982) | [37422689](https://pubmed.ncbi.nlm.nih.gov/37422689) | The paper describes a population pharmacokinetic model for oral azacitidine, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| `Agarwal_2019.pdf` | Agarwal S et al., Optimizing venetoclax dose in combinati…, Hematological oncology (2019) | pd | 5 | [10.1002/hon.2646](https://doi.org/10.1002/hon.2646) | [31251400](https://www.ncbi.nlm.nih.gov/pubmed/31251400) | metadata signals extractable PD data (exposure-response) |
| `Anders_2016.pdf` | Anders NM et al., Simultaneous quantitative determination…, Journal of chromatography.… (2016) | pd | 5 | [10.1016/j.jchromb.2016.03.029](https://doi.org/10.1016/j.jchromb.2016.03.029) | [27082761](https://www.ncbi.nlm.nih.gov/pubmed/27082761) | metadata signals extractable PD data (exposure-response) |
| `Badawi_2024.pdf` | Badawi M et al., Dosing of Venetoclax in Pediatric Patie…, Clinical therapeutics (2024) | pd | 5 | [10.1016/j.clinthera.2024.09.008](https://doi.org/10.1016/j.clinthera.2024.09.008) | [39368878](https://www.ncbi.nlm.nih.gov/pubmed/39368878) | metadata signals extractable PD data (Exposure-Response) |
| `Brackman_2022.pdf` | Brackman D et al., Venetoclax exposure-efficacy and exposu…, Hematological oncology (2022) | pd | 5 | [10.1002/hon.2964](https://doi.org/10.1002/hon.2964) | [35043428](https://www.ncbi.nlm.nih.gov/pubmed/35043428) | metadata signals extractable PD data (Exposure-response) |
| `Kytölä_2025.pdf` | Kytölä S et al., Capillary Sampling Enables Venetoclax C…, Basic & clinical pharmacolo… (2025) | pgx | 8 | [10.1111/bcpt.70041](https://doi.org/10.1111/bcpt.70041) | [40289318](https://www.ncbi.nlm.nih.gov/pubmed/40289318) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kobayashi_2022.pdf` | Kobayashi M et al., Utility of therapeutic drug monitoring…, Medical oncology (Northwood… (2022) | pgx | 7 | [10.1007/s12032-022-01865-y](https://doi.org/10.1007/s12032-022-01865-y) | [36224276](https://www.ncbi.nlm.nih.gov/pubmed/36224276) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-14T23:51:57.592248+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abaza_2017 | irrelevant | 1 | 0 | The study focuses on pracinostat as the subject drug, with azacitidine serving only as a co-administered agent in a combination arm, and no quantitative PK parameters for azacitidine are reported. |
| PD | Abaza_2017 | not_relevant | 1 | 0 | The paper focuses on pracinostat PK/PD (histone acetylation) and only qualitatively mentions a lack of dose-dependent effect, without providing numeric PD parameters or an exposure-response model for azacitidine. |
| popPK | Agarwal_2019 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Agarwal_2019 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for venetoclax, not azacitidine. |
| popPK | Al-Kofahi_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, not azacitidine. |
| PD | Al-Kofahi_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (clearance) of tacrolimus, not azacitidine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Anders_2016 | irrelevant | 0 | 0 | no_text gate: only 243 chars of text extracted (&lt; 400) |
| popPK | Badawi_2024 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Badawi_2024 | not_relevant | 0 | 0 | The paper focuses on Venetoclax, not azacitidine. |
| popPK | Ball_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BTX A51, not azacitidine, which is only mentioned as a prior therapy or in ex-vivo synergy studies. |
| PD | Ball_2025 | not_relevant | 0 | 0 | The paper reports on BTX A51, not azacitidine; while azacitidine is mentioned in combination synergy studies, no exposure-response or dose-response PD parameters for azacitidine itself are reported. |
| popPK | Baroud_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis and characterization of azacitidine prodrug self-assemblies and in-vitro cytotoxicity, reporting no pharmacokinetic parameters. |
| popPK | Brackman_2022 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| PD | Brackman_2022 | not_relevant | 0 | 0 | The paper analyzes venetoclax, not azacitidine. |
| popPK | Butler_2020 | irrelevant | 0 | 0 | The study is a preclinical mechanistic and efficacy evaluation of azacitidine in breast cancer models, reporting no pharmacokinetic parameters. |
| PGx | Calleja_2020 | not_relevant | 0 | 0 | The paper investigates clonal evolution and mutation dynamics in cancer cells under treatment, not the effect of patient germline pharmacogenomic variants on drug PK or PD parameters. |
| PGx | Chen_2010 | not_relevant | 0 | 0 | The paper assesses CYP inhibition/induction potential of azacitidine in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper studies a different drug (gliocidin) for glioblastoma and does not report pharmacokinetic parameters for azacitidine. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper investigates the drug gliocidin, not azacitidine. |
| PGx | Chou_2017 | not_relevant | 0 | 0 | The study compares pharmacokinetics between ethnic groups (Taiwanese vs. North American) but does not report specific gene variants or genotypes associated with PK/PD changes. |
| PGx | Daver_2023 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of a drug combination, not pharmacokinetic or pharmacodynamic parameters modulated by specific gene variants. |
| PGx | De_2023 | not_relevant | 0 | 0 | The paper reports a clinical trial of a drug-drug interaction (venetoclax/itraconazole) and does not investigate the effect of a gene variant on the pharmacokinetics or pharmacodynamics of azacitidine. |
| popPK | Derakhshani_2023 | irrelevant | 0 | 0 | The study is an in vitro and in silico investigation of antileishmanial activity and does not report any pharmacokinetic parameters for azacitidine. |
| PGx | DiNardo_2023 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of enasidenib in IDH2-mutant MDS, but does not report pharmacokinetic or pharmacodynamic parameters of azacitidine or any pharmacogenomic effects on them. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and antimicrobial activity of menthol-based derivatives, with no mention of azacitidine or pharmacokinetic parameters. |
| PD | Di_2026 | not_relevant | 0 | 0 | The paper discusses menthol-based antimicrobials (MF1, MCl2) and does not mention azacitidine or report any pharmacodynamic parameters for it. |
| popPK | Ericsson_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AZD5718, not azacitidine. |
| PD | Ericsson_2020 | not_relevant | 0 | 0 | The paper studies AZD5718, not azacitidine, and does not report specific numeric PD parameters for the requested drug. |
| popPK | Faessel_2019 | irrelevant | 0 | 0 | The study reports population PK parameters for pevonedistat, not azacitidine, which is only a co-administered drug. |
| popPK | Fakhrabadi_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and apoptosis in hematopoietic stem cells, reporting no pharmacokinetic parameters for azacitidine. |
| PGx | Filì_2013 | not_relevant | 2 | 5 | The study investigates PI-PLCβ1 expression and SNPs as predictors of clinical response (efficacy), not as determinants of pharmacokinetic or pharmacodynamic parameters of azacitidine. |
| PGx | Fiumara_2025 | not_relevant | 0 | 0 | The paper is a review of VEXAS syndrome pathogenesis and general treatment options, and does not report specific pharmacogenomic effects on azacitidine PK or PD parameters. |
| popPK | Garcia-Manero_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of decitabine and cedazuridine, not azacitidine. |
| PD | Garcia-Manero_2024 | not_relevant | 0 | 0 | The study focuses on pharmacokinetic bioequivalence (AUC) and safety, with no quantitative pharmacodynamic modeling or numeric exposure-response parameters reported. |
| popPK | Gaudy_2023 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for oral azacitidine, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| popPK | Gruber_2025 | irrelevant | 0 | 0 | The paper is a mass spectrometry imaging benchmark study for sulfatides in a mouse model of metachromatic leukodystrophy and does not involve azacitidine pharmacokinetics. |
| PD | Gruber_2025 | not_relevant | 0 | 0 | The paper describes a mass spectrometry imaging dataset for lipid annotation in a mouse model and contains no pharmacodynamic or exposure-response analysis for azacitidine. |
| PGx | Ikoma_2025 | not_relevant | 0 | 0 | The paper investigates the prognostic value of somatic gene mutations in AML patients treated with azacitidine, not the effect of germline pharmacogenomic variants on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Jachiet_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of azacitidine in VEXAS syndrome but does not investigate pharmacogenomic effects on PK or PD parameters. |
| popPK | Jacobberger_2024 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic assay for DNMT1 levels and does not report any pharmacokinetic parameters for azacitidine. |
| PD | Jacobberger_2024 | not_relevant | 1 | 0 | The paper describes a qualitative pharmacodynamic assay for measuring DNMT1 levels but does not report any numeric exposure-response or dose-response parameters (e.g., Emax, EC50) for azacitidine. |
| popPK | Kagan_2023 | irrelevant | 2 | 0 | This is a review article focusing on biomarkers and exposure-response relationships, and it does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for azacitidine. |
| PD | Kagan_2023 | not_relevant | 2 | 0 | The text is an abstract for a review article summarizing challenges and opportunities in DNMTi exposure-response, but it does not report specific numeric PD parameters or extractable concentration-effect curves for azacitidine. |
| PGx | Karagiannis_2012 | not_relevant | 0 | 0 | The text is a general overview of epigenetic mechanisms and diseases, mentioning azacitidine only as a clinical example without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Karakuzu_2024 | irrelevant | 0 | 0 | The paper is a review on MRI reproducibility and does not contain any pharmacokinetic data for azacitidine. |
| PD | Karakuzu_2024 | not_relevant | 0 | 0 | The paper is a review on reproducible research practices in MRI neuroimaging and contains no pharmacodynamic or exposure-response data for azacitidine. |
| PGx | Kobayashi_2022 | not_relevant | 0 | 0 | The paper focuses on therapeutic drug monitoring of venetoclax and does not report pharmacogenomic effects on azacitidine. |
| PGx | Kytölä_2025 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for venetoclax, not azacitidine. |
| popPK | Lee_1996 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for theophylline, not azacitidine. |
| PD | Lee_1996 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of theophylline, not azacitidine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The study evaluates a reduced dose of venetoclax in Asian patients but does not report pharmacogenomic effects (gene variants) on the PK/PD of azacitidine. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper reports clinical outcomes (efficacy and safety) of a drug combination but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Madarang_2024 | not_relevant | 0 | 0 | The paper reports clinical outcomes (OS, CR) in elderly AML patients treated with venetoclax and hypomethylating agents, but does not report pharmacokinetic or pharmacodynamic parameters of azacitidine or any pharmacogenomic effects. |
| PGx | Meng_2025 | not_relevant | 0 | 0 | The study evaluates a food-drug interaction (grapefruit juice) and does not report any pharmacogenomic effects of gene variants on azacitidine PK or PD. |
| popPK | Miskei_2026 | irrelevant | 0 | 0 | The paper discusses APOBEC-mediated mutagenesis in HSV-1 and contains no pharmacokinetic data for azacitidine. |
| PD | Miskei_2026 | not_relevant | 0 | 0 | The paper investigates APOBEC-mediated mutagenesis in HSV-1 and does not involve azacitidine or report any pharmacodynamic or exposure-response relationships. |
| PGx | Montesinos_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (OS, EFS, CR) of a drug combination in a specific genetic subgroup, but does not report changes in pharmacokinetic or pharmacodynamic parameters of azacitidine due to genotype. |
| popPK | Murase_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug resistance in cell lines and does not report pharmacokinetic disposition parameters for azacitidine. |
| popPK | Ngara_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BTZ-043 and its interactions with other antituberculosis drugs, not azacitidine. |
| PD | Ngara_2025 | not_relevant | 0 | 0 | The paper focuses on the drug BTZ-043, not azacitidine, and does not report any pharmacodynamic data for azacitidine. |
| popPK | Nguyen_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell viability and gene expression, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Nguyen_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus in kidney transplant patients, not azacitidine. |
| PD | Nguyen_2023 | not_relevant | 0 | 0 | The paper focuses on tacrolimus pharmacokinetics (AUC estimation) in kidney transplant patients and does not involve azacitidine or report any pharmacodynamic or exposure-response relationships. |
| PGx | Niemeyer_2021 | not_relevant | 0 | 0 | The paper reports clinical outcomes and general PK profiles in a pediatric population but does not analyze the impact of specific gene variants or genotypes on azacitidine pharmacokinetics or pharmacodynamics. |
| popPK | Odenike_2015 | irrelevant | 0 | 0 | The study is a Phase I dose-escalation and pharmacodynamic trial focused on toxicity and gene expression, with no pharmacokinetic parameters or quantitative disposition data reported for azacitidine. |
| PD | Odenike_2015 | not_relevant | 2 | 1 | The study reports qualitative changes in gene expression (MDR1 upregulation) and clinical responses but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response/dose-response model for azacitidine. |
| popPK | Paxson_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity assay measuring IC50 values, not a pharmacokinetic study reporting disposition parameters for azacitidine. |
| popPK | Philippe_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, with azacitidine serving only as a co-administered drug in the treatment regimen. |
| popPK | Port_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fludarabine monophosphate in rats, not azacitidine. |
| PD | Port_2006 | not_relevant | 0 | 0 | The paper studies fludarabine monophosphate, not azacitidine, and focuses on PK/release modeling rather than pharmacodynamic exposure-response relationships. |
| popPK | Pospiech_2026 | irrelevant | 0 | 0 | The paper is a case report and ex vivo sensitivity study focusing on FLT3 inhibitors (gilteritinib, midostaurin, quizartinib), with azacitidine mentioned only as a co-administered therapy without any pharmacokinetic parameter reporting. |
| PD | Pospiech_2026 | not_relevant | 0 | 0 | The paper reports ex vivo IC50 values for FLT3 inhibitors (gilteritinib, midostaurin, quizartinib), but does not report any pharmacodynamic or exposure-response relationship for azacitidine. |
| popPK | Prebet_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting response rates and survival, with no pharmacokinetic parameters or quantitative disposition data for azacitidine. |
| PD | Prebet_2014 | not_relevant | 1 | 0 | The paper reports clinical outcomes and a qualitative observation of pharmacodynamic antagonism (demethylation) but provides no numeric PD parameters, concentration-effect curves, or formal PK/PD modeling. |
| popPK | Ramsey_2020 | relevant | 8 | 4 | The paper reports quantitative PK parameters (AUC, bioavailability) for azacitidine in animal models, but lacks specific compartmental parameters like clearance (CL) or volume (V) values in the text. |
| PGx | Rausch_2022 | not_relevant | 0 | 0 | The text is a general clinical update on AML treatment guidelines and does not report specific pharmacogenomic effects on azacitidine PK or PD parameters. |
| PD | Rudek_2005 | not_relevant | 1 | 0 | The paper reports only pharmacokinetic parameters (Cmax, AUC, Tmax) and qualitatively mentions PD effects (DNA methyltransferase inhibition) without providing any numeric PD parameters or exposure-response data. |
| PGx | Sallman_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of a drug combination in TP53-mutant patients, but does not report pharmacokinetic or pharmacodynamic parameter changes driven by the genotype. |
| PGx | Sanchez-Garcia_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy and changes in tumor mutational burden (VAF) but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Schönung_2025 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic biomarkers (DNA methylation) and does not report any pharmacokinetic parameters for azacitidine. |
| PD | Schönung_2025 | not_relevant | 2 | 1 | The paper reports qualitative associations between DNA methylation signatures and clinical response, but does not provide numeric exposure-response parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| PGx | Schönung_2025 | not_relevant | 0 | 0 | The paper investigates DNA methylation signatures as biomarkers for response, not the effect of a specific gene variant/genotype on the pharmacokinetics or pharmacodynamics of azacitidine. |
| PGx | Sciumè_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes for venetoclax combinations and does not analyze the impact of gene variants on the pharmacokinetics or pharmacodynamics of azacitidine. |
| popPK | Sedloev_2024 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo mechanistic study on proteasome inhibitors and NK cells, with no pharmacokinetic parameters reported for azacitidine. |
| PD | Sedloev_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of proteasome inhibitors (Bortezomib/Carfilzomib) and CAR-NK cells, not azacitidine; azacitidine is only mentioned in the context of resistance conditioning. |
| popPK | Thakre_2025 | irrelevant | 2 | 0 | The study focuses on a PK/PD model for venetoclax and disease dynamics, with azacitidine treated as a covariate or input rather than the subject of quantitative PK parameter estimation. |
| popPK | Thanigaimani_2022 | irrelevant | 0 | 0 | The paper is a clinical study on abdominal aortic aneurysm growth and only mentions azacitidine as one of several immunosuppressants prescribed to a single patient, containing no pharmacokinetic data. |
| popPK | Tong_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for azacitidine. |
| popPK | Trocóniz_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of BIBN 4096 BS, not azacitidine. |
| PD | Trocóniz_2006 | not_relevant | 0 | 0 | The paper reports a PD model for BIBN 4096 BS, not azacitidine. |
| popPK | Ueda_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting response rates and survival, with no pharmacokinetic parameters or quantitative disposition data for azacitidine. |
| PD | Ueda_2019 | not_relevant | 1 | 0 | The paper reports clinical outcomes and a qualitative finding of no correlation between a PD marker (DNMT1) and dose/response, but provides no numeric PD parameters or concentration-effect curves. |
| popPK | Von_2018 | irrelevant | 2 | 0 | The paper is a Phase I safety study that lists pharmacokinetics as a secondary endpoint but provides no quantitative PK parameter values (CL, V, etc.) in the extracted evidence. |
| PD | Von_2018 | not_relevant | 1 | 0 | The abstract mentions pharmacodynamics as a secondary endpoint but provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Watts_2023 | irrelevant | 0 | 0 | The study focuses on olutasidenib as the subject drug, with azacitidine serving only as a co-administered comparator agent, and no quantitative PK parameters for azacitidine are reported. |
| PD | Watts_2023 | not_relevant | 0 | 0 | The text describes a Phase 1 trial of olutasidenib (with or without azacitidine) and reports safety and clinical response rates, but it does not provide any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for azacitidine. |
| PGx | Westra_2026 | not_relevant | 2 | 0 | The paper reports that CYP3A4 polymorphisms cause interpatient variability in venetoclax exposure, but it does not report specific pharmacokinetic parameter values or effect sizes for specific genotypes. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of SPI-62, not azacitidine. |
| PD | Wu_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of SPI-62 using a target-mediated drug disposition (TMDD) model, not azacitidine, and does not report pharmacodynamic (PD) parameters or exposure-response relationships for the drug of interest. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug synergy/antagonism and does not report pharmacokinetic parameters for azacitidine. |
| popPK | Yoshida-Sakai_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug resistance in cell lines and does not report pharmacokinetic parameters for azacitidine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
