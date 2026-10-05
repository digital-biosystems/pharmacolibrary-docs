<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;methylcellulose&quot;}]"></div>

# methylcellulose

- **generic name:** methylcellulose
- **ATC codes:** `A06AC06`
- **DrugBank:** [DB11228](https://go.drugbank.com/drugs/DB11228) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Methylcellulose is a bulk-forming laxative used to treat constipation. It is an approved drug and remains in use as a constipation remedy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416312](https://www.wikidata.org/wiki/Q416312) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:34 | 8:57 | 0/0/0 | 0/0/0 | 0/0/0 | 384,147/4,621 | ollama / qwen3.8:27b-mtp-q8_0 | 32 | 5/20 | 30/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylcellulose) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 298 matched, 103 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gong_2019.pdf` | Gong T et al., Nanocrystal Formulation Improves Vagina…, AAPS PharmSciTech (2019) | pd | 4 | [10.1208/s12249-019-1503-z](https://doi.org/10.1208/s12249-019-1503-z) | [31410664](https://www.ncbi.nlm.nih.gov/pubmed/31410664) | metadata signals extractable PD data (EC50) |
| `Yi_2010.pdf` | Yi J et al., [Effect of parthenolide on leukemia K56…, Zhongguo Zhong yao za zhi =… (2010) | pd | 4 | [10.4268/cjcmm20100223](https://doi.org/10.4268/cjcmm20100223) | [20394299](https://www.ncbi.nlm.nih.gov/pubmed/20394299) | metadata signals extractable PD data (IC50) |
| `Kang_2026.pdf` | Kang HE et al., Physiologically based pharmacokinetic m…, Drug metabolism and disposi… (2026) | pgx | 7 | [10.1016/j.dmd.2026.100355](https://doi.org/10.1016/j.dmd.2026.100355) | [42485828](https://www.ncbi.nlm.nih.gov/pubmed/42485828) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T16:29:21.756918+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abd-Elhakim_2021 | not_relevant | 0 | 0 | The paper investigates the protective effects of curcumin against fenitrothion toxicity in rats and does not report any pharmacogenomic effects on the PK or PD of methylcellulose. |
| PD | Akl_2019 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics of a tolmetin sodium suppository, using methylcellulose only as an excipient, and does not report any pharmacodynamic or exposure-response data for methylcellulose. |
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report pharmacokinetic parameters for methylcellulose. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report any specific pharmacodynamic or exposure-response data for methylcellulose. |
| popPK | Assmus_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of benznidazole in mice, not methylcellulose. |
| PD | Assmus_2025 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for benznidazole, not methylcellulose (which is only mentioned as an excipient in the formulation). |
| PD | Attia_2004 | not_relevant | 1 | 0 | The paper compares the relative efficacy of different gel formulations (including methylcellulose) but does not report a concentration-effect or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for methylcellulose itself. |
| PD | Baciu_2022 | not_relevant | 0 | 0 | The paper uses methylcellulose as a component of the culture medium for a 3D cell model and does not report any pharmacodynamic or exposure-response data for methylcellulose itself. |
| popPK | Brandt_2007 | irrelevant | 0 | 0 | Methylcellulose is used only as a vehicle/excipient for the peptide, not as the subject drug for PK analysis. |
| PD | Brandt_2007 | not_relevant | 0 | 0 | The paper reports an EC50 for the antiviral peptide RC-2, not for methylcellulose, which is used only as a vehicle; no PD relationship or parameters for methylcellulose are provided. |
| PGx | CAMPBELL_1965 | not_relevant | 0 | 0 | The paper studies Mengo encephalomyelitis virus and plaque size, unrelated to methylcellulose pharmacogenomics. |
| popPK | Campbell_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of atrazine and its metabolites, with methylcellulose mentioned only as a vehicle for dosing. |
| PD | Cashman_1992 | not_relevant | 2 | 1 | The paper describes qualitative dose-response observations for TGF-beta and GM-CSF in methylcellulose assays but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves. |
| popPK | Chan_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of GDC-0334 (a TRPA1 inhibitor), and methylcellulose is only mentioned as an excipient in the vehicle formulation. |
| PGx | Choi_2024 | not_relevant | 0 | 0 | The paper discusses a formulation of niclosamide using hydroxypropyl methylcellulose (HPMC) as an excipient, not the pharmacogenomics of methylcellulose itself. |
| PGx | Dao_2026 | not_relevant | 0 | 0 | The paper describes the formulation and in vivo evaluation of ophthalmic inserts in rabbits, with no mention of human gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | DeJongh_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AZD7648 and olaparib in mice, where methylcellulose is only mentioned as an excipient in the formulation. |
| popPK | Denduyver_2025 | irrelevant | 0 | 0 | The paper studies the manufacturing process (twin-screw wet granulation) and API homogeneity of formulations using hydroxypropyl methylcellulose (HPMC) as an excipient, not the pharmacokinetics of methylcellulose. |
| popPK | Fernández-Varón_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of marbofloxacin, with methylcellulose (CMC) serving only as an excipient in a formulation, not as the subject drug. |
| popPK | Flores_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of DNL343, not methylcellulose. |
| PD | Flores_2025 | not_relevant | 0 | 0 | The paper investigates DNL343, not methylcellulose. |
| popPK | Fraser_2008 | irrelevant | 0 | 0 | Methylcellulose is used only as a component of the liquid meal for gastric emptying assessment, not as the subject drug for PK parameter estimation. |
| PD | Fraser_2008 | not_relevant | 0 | 0 | The paper studies the pharmacology of TZP-101 and ghrelin; methylcellulose is only mentioned as the vehicle for the gastric emptying assay, not as the drug of interest for PD analysis. |
| PD | Gelatt_1983 | not_relevant | 0 | 0 | The paper reports dose-response data for pilocarpine-epinephrine, with methylcellulose serving only as the placebo vehicle; no PD parameters are reported for methylcellulose itself. |
| PD | Gelatt_1984 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for carbamylcholine, not methylcellulose, which is only used as a placebo vehicle. |
| popPK | Goetz_2024 | irrelevant | 0 | 0 | The study focuses on melanoma inhibitors (Belvarafenib and Cobimetinib) and does not involve methylcellulose. |
| PD | Goetz_2024 | not_relevant | 0 | 0 | The paper focuses on pan-RAF (Belvarafenib) and MEK (Cobimetinib) inhibitors in melanoma and does not mention or analyze methylcellulose. |
| popPK | Gong_2019 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Gong_2019 | not_relevant | 0 | 0 | The paper focuses on the formulation and delivery of CSIC (carrageenan-sulfated inulin conjugate) for HIV prevention, not methylcellulose, and does not report pharmacodynamic or exposure-response parameters for methylcellulose. |
| popPK | González-Correa_2025 | irrelevant | 0 | 0 | The study investigates the effects of a probiotic on hydrochlorothiazide response in rats and does not involve methylcellulose. |
| PD | González-Correa_2025 | not_relevant | 0 | 0 | The paper investigates the effect of a probiotic (LC40) on the efficacy of hydrochlorothiazide (HCTZ) and does not report a pharmacodynamic model or exposure-response relationship for methylcellulose, which is used only as a vehicle. |
| popPK | Grkovski_2017 | irrelevant | 0 | 0 | Methylcellulose is used only as a vehicle for drug administration, not as the subject of pharmacokinetic analysis. |
| popPK | Guiastrennec_2017 | irrelevant | 0 | 0 | The study models the erosion/release of hydroxypropyl methylcellulose (HPMC) matrix tablets, not the pharmacokinetics of methylcellulose as a drug. |
| PD | Hara_1977 | not_relevant | 0 | 0 | The paper describes a dose-response relationship for erythropoietin (EPO) using methylcellulose as a culture medium, not a pharmacodynamic relationship for methylcellulose itself. |
| PD | He_2012 | not_relevant | 1 | 0 | The paper focuses on formulation development and in vitro/in vivo release and retention properties, mentioning only qualitative comparative efficacy without providing numeric PD parameters or exposure-response data. |
| PD | Hoang_1986 | not_relevant | 2 | 1 | The paper describes qualitative dose-response curves for GM-CSF in methylcellulose cultures but does not provide numeric PD parameters or extractable concentration-effect data. |
| popPK | Hoyt_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of food allergen absorption and anaphylaxis in mice, not the pharmacokinetics of methylcellulose. |
| PD | Hoyt_2025 | not_relevant | 0 | 0 | The paper studies the mechanism of food allergen absorption and anaphylaxis in mice, focusing on leukotrienes and DPEP1, and does not report any pharmacodynamic or exposure-response relationship for methylcellulose. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CPD37 (an Elovl1 inhibitor), not methylcellulose, which is only mentioned as a vehicle component. |
| popPK | Iakab_2026 | irrelevant | 0 | 0 | The paper describes a 3D MALDI imaging platform for spatial metabolomics in cell cultures and does not report pharmacokinetic parameters for methylcellulose. |
| PD | Iakab_2026 | not_relevant | 0 | 0 | The paper describes a 3D MALDI imaging platform for spatial omics and does not report any pharmacodynamic or exposure-response analysis for methylcellulose. |
| PGx | Jasińska_2006 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between simvastatin and nifedipine in rabbits, with methylcellulose serving only as a vehicle control, and does not report any pharmacogenomic effects. |
| PGx | Kang_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of ketoconazole in rats and does not report any pharmacogenomic effects on methylcellulose. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of loxoprofen, using methylcellulose (HPMC) only as an excipient for formulation, not as the subject drug. |
| popPK | Kim_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of baclofen, using hydroxypropyl methylcellulose (HPMC) only as an excipient in the formulation, not as the subject drug. |
| PD | Kirk_1988 | not_relevant | 0 | 0 | The paper uses methylcellulose as a non-absorbed tracer to measure water consumption, not as a drug to evaluate pharmacodynamic effects or dose-response relationships. |
| popPK | Kottom_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ISFP10, where methylcellulose is used only as a vehicle excipient. |
| popPK | Kubis_2002 | irrelevant | 0 | 0 | The study investigates the release of hydrocortisone from methylcellulose gels, treating methylcellulose as a formulation excipient rather than the subject drug for pharmacokinetic analysis. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | Methylcellulose is used only as a vehicle/comparator in a study of lamotrigine pharmacokinetics in mice. |
| PD | Kumar_2020 | not_relevant | 0 | 0 | The paper investigates an animal model of drug-resistant epilepsy using methylcellulose only as a vehicle; it does not report any pharmacodynamic or exposure-response relationship for methylcellulose itself. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper investigates the role of the CXCL12/CXCR4 axis in glioblastoma stem-like cells and uses methylcellulose only as a medium for colony formation assays, not as a drug subject to pharmacogenomic analysis. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper focuses on albendazole formulations and PK/PD in a rat model, with no specific analysis or numeric parameters for methylcellulose. |
| PD | Lin_2025 | not_relevant | 0 | 0 | The paper focuses on mupirocin and piperine; methylcellulose is only mentioned as a hydrogel excipient, and no exposure-response or dose-response PD parameters are reported for it. |
| PD | Lippert_2012 | not_relevant | 0 | 0 | The paper investigates the dose-response of zinc and fluoride on caries remineralization; methylcellulose is only used as a vehicle for the acid gel and is not the subject of any pharmacodynamic analysis. |
| PD | Lizoňová_2022 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of curcumin nanocrystals, reporting an IC50 for curcumin, but does not report a pharmacodynamic or exposure-response relationship for methylcellulose. |
| popPK | Luo_2026 | irrelevant | 0 | 0 | The paper focuses on SARS-CoV-2 Mpro inhibitors and does not involve methylcellulose. |
| PD | Luo_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (Ki) and in vivo antiviral efficacy for SARS-CoV-2 Mpro inhibitors, but contains no pharmacodynamic (exposure-response) analysis or numeric PD parameters for methylcellulose. |
| PGx | Ma_2020 | not_relevant | 0 | 0 | The paper reports the generation of a Slco1b2 knockout rat model and characterizes its phenotype using pitavastatin, but does not report pharmacokinetic or pharmacodynamic parameters for methylcellulose. |
| popPK | Maruyama_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of the S1PR1 antagonist KSI-6666, where methylcellulose is used only as a vehicle/solvent. |
| popPK | Matanović_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of heparin, with methylcellulose (specifically hydroxypropyl methylcellulose) serving only as a formulation excipient to modify gel dissolution. |
| popPK | McComic_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of isoxazoline ectoparasiticides (mCMV280, fluralaner), not methylcellulose. |
| PGx | Mihara_2019 | not_relevant | 0 | 0 | The paper describes a 3D cell culture method using methylcellulose as a medium component, not a pharmacogenomic study of methylcellulose as a drug. |
| PGx | Mistry_2026 | not_relevant | 0 | 0 | The paper reports pharmacokinetic effects of a formulation (OB-001) on osimertinib, not a pharmacogenomic effect of a gene variant on methylcellulose. |
| popPK | Moein_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apitolisib, and methylcellulose is only mentioned as a component of the vehicle formulation. |
| PD | Mohammed_2020 | not_relevant | 0 | 0 | The paper investigates a plant extract (Suaeda vermiculata) and uses methylcellulose (CMC) only as a vehicle/control, providing no pharmacodynamic or exposure-response data for methylcellulose itself. |
| popPK | Mudde_2022 | irrelevant | 0 | 0 | The study focuses on tuberculosis treatment regimens in mice and does not involve methylcellulose or its pharmacokinetics. |
| PD | Mudde_2022 | not_relevant | 0 | 0 | The paper reports a treatment-duration-response relationship for tuberculosis regimens, not a concentration- or dose-response pharmacodynamic relationship for methylcellulose, which is only mentioned as a vehicle for linezolid. |
| popPK | Mukesh_2023 | irrelevant | 0 | 0 | The study focuses on celecoxib formulations using methylcellulose derivatives as polymers, not the pharmacokinetics of methylcellulose itself. |
| PD | Mukesh_2023 | not_relevant | 0 | 0 | The paper focuses on biopharmaceutical formulation development (solid dispersions) and molecular simulations of drug-polymer interactions; it does not report pharmacodynamic (PD) modeling or exposure-response relationships for methylcellulose or any other drug. |
| PGx | Muzammil_2016 | not_relevant | 0 | 0 | The paper studies oral delivery of monoclonal antibodies in cynomolgus macaques and does not report pharmacogenomic effects on the PK/PD of methylcellulose. |
| popPK | Myers_2026 | irrelevant | 0 | 0 | The paper studies BMX-001 in rectal cancer and does not involve methylcellulose or report any pharmacokinetic parameters for it. |
| PD | Myers_2026 | not_relevant | 0 | 0 | The paper studies BMX-001 (a manganese porphyrin), not methylcellulose, and does not report a pharmacodynamic model or numeric PD parameters for methylcellulose. |
| PD | Najib_2023 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of bedaquiline-loaded solid lipid nanoparticles, not methylcellulose, and does not report a pharmacodynamic exposure-response relationship for methylcellulose. |
| PD | Neumann_1985 | not_relevant | 0 | 0 | The paper uses methylcellulose as a culture medium for colony assays and does not report any pharmacodynamic or exposure-response relationship for methylcellulose itself. |
| popPK | Odunsi_2022 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and metabolic effects of the IDO1 inhibitor epacadostat, not the pharmacokinetics of methylcellulose. |
| PD | Odunsi_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of an IDO1 inhibitor (epacadostat) and does not report any pharmacodynamic or exposure-response analysis for methylcellulose. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report pharmacokinetic parameters for methylcellulose. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for methylcellulose. |
| PD | Ortega_2017 | not_relevant | 1 | 0 | The study is a pharmacokinetic evaluation of extended-release formulations; it mentions a minimum effective concentration (0.3 µg/mL) but does not report a concentration-effect curve, Emax, EC50, or any quantitative PD model parameters. |
| popPK | Pai_2026 | irrelevant | 0 | 0 | The paper is a review of extemporaneous formulations for pediatric patients and does not report any pharmacokinetic parameters for methylcellulose. |
| PD | Pai_2026 | not_relevant | 0 | 0 | The paper is a review on extemporaneous formulations for pediatric patients and does not report any pharmacodynamic or exposure-response data for methylcellulose. |
| PGx | Pan_2022 | not_relevant | 0 | 0 | The paper reports the crystal structure of a transporter protein (CmABCB1) and uses methylcellulose derivatives only as viscosity agents for the experimental setup, not as a drug subject to pharmacogenomic analysis. |
| popPK | Poceviciute_2026 | irrelevant | 0 | 0 | The study investigates the effect of phytocannabinoids on alcohol consumption in rats and does not involve methylcellulose or its pharmacokinetics. |
| PD | Poceviciute_2026 | not_relevant | 0 | 0 | The paper studies phytocannabinoids (CBN, THCV, CBD) and mentions methylcellulose only as a vehicle component for CBD suspension, providing no pharmacodynamic or exposure-response data for methylcellulose itself. |
| popPK | R_2026 | irrelevant | 0 | 0 | The study focuses on PARP inhibitors (rucaparib, niraparib, olaparib) and does not involve methylcellulose. |
| PD | R_2026 | not_relevant | 0 | 0 | The paper investigates the spatial distribution and lysosomal sequestration of PARP inhibitors (olaparib, niraparib, rucaparib) in ovarian cancer explants, not methylcellulose, and does not report pharmacodynamic parameters for methylcellulose. |
| PD | Randhawa_1977 | not_relevant | 0 | 0 | The paper describes a virological plaque assay technique and compares overlay media (including methylcellulose) for virus titration; it does not report a pharmacodynamic exposure-response or dose-response relationship for methylcellulose as a drug. |
| popPK | Rehfeld_2020 | irrelevant | 0 | 0 | The study investigates the pharmacology of CatSper channels in sperm, using methylcellulose only as a viscosity medium for functional assays, not as a subject drug for PK analysis. |
| PD | Rehfeld_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacology of steroids and triterpenoids on CatSper channels, using methylcellulose only as a medium for a functional penetration assay, and does not report any pharmacodynamic or exposure-response relationship for methylcellulose itself. |
| PGx | Saljé_2012 | not_relevant | 0 | 0 | The study investigates the effect of drug inducers (rifampicin, etc.) on ABCB1 expression and talinolol distribution in rats, not the effect of a genetic variant on methylcellulose pharmacokinetics or pharmacodynamics. |
| PD | Selim_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for a nanocomposite material (HPMC-collagen-CuO@Cr2O3) in an in vitro assay, which is a material characterization study, not a pharmacodynamic (exposure-response) analysis of the drug methylcellulose. |
| PD | Sriwidodo_2022 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (IC50) of mangosteen extract formulations, not a pharmacodynamic exposure-response relationship for methylcellulose. |
| popPK | Swaih_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the EGFR inhibitor AZ14289671, not methylcellulose. |
| PGx | Tompkins_2010 | not_relevant | 0 | 0 | The paper investigates the effect of excipients on CYP3A4 expression, not the effect of a gene variant on the PK/PD of methylcellulose. |
| popPK | Troches-Mafla_2025 | irrelevant | 0 | 0 | The paper is a review of diltiazem hydrochloride formulations and does not study methylcellulose as the subject drug. |
| PD | Troches-Mafla_2025 | not_relevant | 0 | 0 | The paper is a review of controlled-release technologies for diltiazem hydrochloride and does not report any pharmacodynamic or exposure-response data for methylcellulose. |
| popPK | Velaga_2018 | irrelevant | 0 | 0 | The study focuses on the physical drying kinetics of polymer films (HPMC/PVA) and does not report pharmacokinetic parameters for methylcellulose. |
| PD | Velaga_2018 | not_relevant | 0 | 0 | The paper models the drying kinetics of polymer films using the Hill equation, which is a physical/chemical process model, not a pharmacodynamic drug-response model. |
| popPK | Wang_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporine A, using hydroxypropyl methylcellulose phthalate (HPMCP) only as a nanoparticle carrier, not as the subject drug. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper investigates the efficacy of a BCL-xL degrader (DT2216) in AML models and does not involve methylcellulose as a subject drug or report its pharmacokinetic parameters. |
| PD | Wang_2025 | not_relevant | 0 | 0 | The paper investigates the efficacy of DT2216, not methylcellulose, and does not report any pharmacodynamic or exposure-response parameters for methylcellulose. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the design of EGFR inhibitors for lung cancer and does not involve methylcellulose pharmacokinetics. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on the design of EGFR inhibitors (ZW-49) and reports in vitro IC50 values and in vivo tumor regression data, but contains no pharmacodynamic modeling, exposure-response analysis, or PK/PD fitting for methylcellulose or any other drug. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper studies erythropoiesis and IL-17 in mice and does not involve methylcellulose pharmacokinetics. |
| PD | Wu_2025 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of IL-17 and Erythropoietin, not methylcellulose. |
| PD | Yamashita_1989 | not_relevant | 4 | 2 | The paper describes dose-response curves for vincristine and doxorubicin in methylcellulose culture, but it does not report specific numeric PD parameters (such as IC50, Emax, or slope values) in the provided text, only qualitative comparisons of sensitivity. |
| PD | Yi_2010 | not_relevant | 0 | 0 | The paper studies parthenolide, not methylcellulose, and does not report any pharmacodynamic relationship for the target drug. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper investigates EGFR-TKI resistance mechanisms in NSCLC cell lines and does not involve methylcellulose or pharmacokinetic parameters. |
| PGx | unknown_1999 | not_relevant | 0 | 0 | The paper is a toxicology and carcinogenicity study of AZT in mice where methylcellulose is used only as a vehicle, and it does not report any pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
