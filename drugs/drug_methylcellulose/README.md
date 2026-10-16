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
| 2026-10-15 00:57 | 2:45 | 0/0/0 | 0/0/0 | 0/0/0 | 367,693/4,825 | einfracz / qwen3.8-27b | 32 | 5/20 | 30/2 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methylcellulose).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 298 matched, 103 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gong_2019.pdf` | Gong T et al., Nanocrystal Formulation Improves Vagina…, AAPS PharmSciTech (2019) | pd | 4 | [10.1208/s12249-019-1503-z](https://doi.org/10.1208/s12249-019-1503-z) | [31410664](https://www.ncbi.nlm.nih.gov/pubmed/31410664) | metadata signals extractable PD data (EC50) |
| `Yi_2010.pdf` | Yi J et al., [Effect of parthenolide on leukemia K56…, Zhongguo Zhong yao za zhi =… (2010) | pd | 4 | [10.4268/cjcmm20100223](https://doi.org/10.4268/cjcmm20100223) | [20394299](https://www.ncbi.nlm.nih.gov/pubmed/20394299) | metadata signals extractable PD data (IC50) |
| `Kang_2026.pdf` | Kang HE et al., Physiologically based pharmacokinetic m…, Drug metabolism and disposi… (2026) | pgx | 7 | [10.1016/j.dmd.2026.100355](https://doi.org/10.1016/j.dmd.2026.100355) | [42485828](https://www.ncbi.nlm.nih.gov/pubmed/42485828) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-15T00:56:02.349477+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abd-Elhakim_2021 | not_relevant | 0 | 0 | The paper investigates the toxicological effects of fenitrothion and curcumin in rats, with no analysis of pharmacogenomic variants affecting the PK or PD of methylcellulose. |
| PD | Akl_2019 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics of a tolmetin sodium suppository, using methylcellulose only as an excipient, and does not report any pharmacodynamic or exposure-response data for methylcellulose. |
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions for various APIs and does not contain specific pharmacokinetic data for methylcellulose. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report any specific pharmacodynamic or exposure-response data for methylcellulose. |
| popPK | Assmus_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of benznidazole in mice, not methylcellulose. |
| PD | Assmus_2025 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for benznidazole, not methylcellulose (which is only mentioned as an excipient in the formulation). |
| PD | Attia_2004 | not_relevant | 1 | 0 | The paper compares the relative efficacy of different gel formulations (including methylcellulose) but does not report a concentration-effect or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for methylcellulose itself. |
| PD | Baciu_2022 | not_relevant | 0 | 0 | The paper uses methylcellulose as a component of the culture medium for a 3D cell model and does not report any pharmacodynamic or exposure-response data for methylcellulose itself. |
| popPK | Brandt_2007 | irrelevant | 0 | 0 | Methylcellulose is used only as a formulation vehicle for a theta-defensin peptide in a viral keratitis model, with no pharmacokinetic parameters reported for methylcellulose itself. |
| PD | Brandt_2007 | not_relevant | 0 | 0 | The paper reports an EC50 for the antiviral peptide RC-2, not for methylcellulose, which is used only as a vehicle; no PD relationship or parameters for methylcellulose are provided. |
| PGx | CAMPBELL_1965 | not_relevant | 0 | 0 | The paper studies virus variants and plaque size, not pharmacogenomic effects on methylcellulose PK/PD. |
| popPK | Campbell_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atrazine, and methylcellulose is only mentioned as a vehicle for administration, not as the subject drug. |
| PD | Cashman_1992 | not_relevant | 2 | 1 | The paper describes qualitative dose-response observations for TGF-beta and GM-CSF in methylcellulose assays but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves. |
| popPK | Chan_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of the drug GDC-0334 (a TRPA1 inhibitor), using methylcellulose only as a vehicle component (0.5% solution) and not as the subject of analysis. |
| PGx | Choi_2024 | not_relevant | 0 | 0 | The paper describes the formulation of niclosamide using hydroxypropyl methylcellulose (HPMC) as an excipient to improve bioavailability, not the pharmacogenomics of methylcellulose itself. |
| PGx | Dao_2026 | not_relevant | 0 | 0 | The paper describes the formulation and in vivo evaluation of an ophthalmic drug delivery system for mangiferin and contains no information regarding pharmacogenomic effects on PK/PD parameters. |
| popPK | DeJongh_2025 | irrelevant | 0 | 0 | Methylcellulose is mentioned only as an excipient in the formulation of AZD7648, not as the subject drug for pharmacokinetic analysis. |
| popPK | Denduyver_2025 | irrelevant | 0 | 0 | The paper is a pharmaceutical manufacturing study focusing on the effect of filler particle size on API homogeneity in controlled-release granules, not a pharmacokinetic study of methylcellulose. |
| popPK | Fernández-Varón_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of marbofloxacin, with methylcellulose (CMC) serving only as an excipient in one of the formulations. |
| popPK | Flores_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of the drug DNL343, not methylcellulose. |
| PD | Flores_2025 | not_relevant | 0 | 0 | The paper investigates DNL343, not methylcellulose. |
| popPK | Fraser_2008 | irrelevant | 0 | 0 | Methylcellulose is used as a marker for gastric emptying studies in rats, not as the subject drug for pharmacokinetic analysis. |
| PD | Fraser_2008 | not_relevant | 0 | 0 | The paper studies the pharmacology of TZP-101 and ghrelin; methylcellulose is only mentioned as the vehicle for the gastric emptying assay, not as the drug of interest for PD analysis. |
| PD | Gelatt_1983 | not_relevant | 0 | 0 | The paper reports dose-response data for pilocarpine-epinephrine, with methylcellulose serving only as the placebo vehicle; no PD parameters are reported for methylcellulose itself. |
| PD | Gelatt_1984 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for carbamylcholine, not methylcellulose, which is only used as a placebo vehicle. |
| popPK | Goetz_2024 | irrelevant | 0 | 0 | The study focuses on Belvarafenib and Cobimetinib in melanoma, with no mention or data for methylcellulose. |
| PD | Goetz_2024 | not_relevant | 0 | 0 | The paper focuses on pan-RAF (Belvarafenib) and MEK (Cobimetinib) inhibitors in melanoma and does not mention or analyze methylcellulose. |
| popPK | Gong_2019 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Gong_2019 | not_relevant | 0 | 0 | The paper focuses on the formulation and delivery of CSIC (carrageenan-sulfated inulin conjugate) for HIV prevention, not methylcellulose, and does not report pharmacodynamic or exposure-response parameters for methylcellulose. |
| popPK | González-Correa_2025 | irrelevant | 0 | 0 | The study investigates the antihypertensive effects of a probiotic and hydrochlorothiazide in rats, with no focus on methylcellulose pharmacokinetics. |
| PD | González-Correa_2025 | not_relevant | 0 | 0 | The paper investigates the effect of a probiotic (LC40) on the efficacy of hydrochlorothiazide (HCTZ) and does not report a pharmacodynamic model or exposure-response relationship for methylcellulose, which is used only as a vehicle. |
| popPK | Grkovski_2017 | irrelevant | 0 | 0 | Methylcellulose is used only as a vehicle (comparator) for oral administration of cediranib, and no pharmacokinetic parameters for methylcellulose itself are reported. |
| popPK | Guiastrennec_2017 | irrelevant | 0 | 0 | The study models the physical erosion and release kinetics of HPMC matrix tablets (drug delivery mechanism) rather than the pharmacokinetic disposition (ADME) of methylcellulose as a drug in a biological system. |
| PD | Hara_1977 | not_relevant | 0 | 0 | The paper describes a dose-response relationship for erythropoietin (EPO) using methylcellulose as a culture medium, not a pharmacodynamic relationship for methylcellulose itself. |
| PD | He_2012 | not_relevant | 1 | 0 | The paper focuses on formulation development and in vitro/in vivo release and retention properties, mentioning only qualitative comparative efficacy without providing numeric PD parameters or exposure-response data. |
| PD | Hoang_1986 | not_relevant | 2 | 1 | The paper describes qualitative dose-response curves for GM-CSF in methylcellulose cultures but does not provide numeric PD parameters or extractable concentration-effect data. |
| popPK | Hoyt_2025 | irrelevant | 0 | 0 | The paper focuses on the mechanism of food allergen absorption and anaphylaxis in mice, with no data or mention of methylcellulose pharmacokinetics. |
| PD | Hoyt_2025 | not_relevant | 0 | 0 | The paper studies the mechanism of food allergen absorption and anaphylaxis in mice, focusing on leukotrienes and DPEP1, and does not report any pharmacodynamic or exposure-response relationship for methylcellulose. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of CPD37 (an Elovl1 inhibitor), and methylcellulose is mentioned only as a vehicle excipient. |
| popPK | Iakab_2026 | irrelevant | 0 | 0 | The paper describes a 3D MALDI imaging platform for spatial omics in cell cultures and contains no pharmacokinetic data or methylcellulose as a subject drug. |
| PD | Iakab_2026 | not_relevant | 0 | 0 | The paper describes a 3D MALDI imaging platform for spatial omics and does not report any pharmacodynamic or exposure-response analysis for methylcellulose. |
| PGx | Jasińska_2006 | not_relevant | 0 | 0 | The paper studies drug-drug interactions between simvastatin and nifedipine in rabbits, with methylcellulose used only as a vehicle for the control group. |
| PGx | Kang_2026 | not_relevant | 0 | 0 | The study focuses on the nonlinear pharmacokinetics of ketoconazole in rats, and methylcellulose is mentioned only as the vehicle for oral administration, with no genetic variants involved. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of loxoprofen, and methylcellulose (HPMC) is used only as a formulation excipient. |
| popPK | Kim_2019 | irrelevant | 0 | 0 | The study uses hydroxypropyl methylcellulose (HPMC) as a formulation excipient for baclofen, not as the subject drug for PK parameter extraction. |
| PD | Kirk_1988 | not_relevant | 0 | 0 | The paper uses methylcellulose as a non-absorbed tracer to measure water consumption, not as a drug to evaluate pharmacodynamic effects or dose-response relationships. |
| popPK | Kottom_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug ISFP10, where methylcellulose is used only as a vehicle/solvent component, not as the subject drug. |
| popPK | Kubis_2002 | irrelevant | 0 | 0 | The study focuses on the release of hydrocortisone from methylcellulose gels (formulation science) rather than the pharmacokinetic disposition of methylcellulose itself in a biological system. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | Methylcellulose is used only as an inert vehicle for drug administration in a mouse epilepsy model, not as the subject drug for pharmacokinetic analysis. |
| PD | Kumar_2020 | not_relevant | 0 | 0 | The paper investigates an animal model of drug-resistant epilepsy using methylcellulose only as a vehicle; it does not report any pharmacodynamic or exposure-response relationship for methylcellulose itself. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | Methylcellulose is used here as a medium component for colony formation assays, not as a drug with pharmacokinetic or pharmacodynamic properties modulated by genetic variants. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper focuses on albendazole formulations and PK/PD in a rat model, with no specific analysis or numeric parameters for methylcellulose. |
| PD | Lin_2025 | not_relevant | 0 | 0 | The paper focuses on mupirocin and piperine; methylcellulose is only mentioned as a hydrogel excipient, and no exposure-response or dose-response PD parameters are reported for it. |
| PD | Lippert_2012 | not_relevant | 0 | 0 | The paper investigates the dose-response of zinc and fluoride on caries remineralization; methylcellulose is only used as a vehicle for the acid gel and is not the subject of any pharmacodynamic analysis. |
| PD | Lizoňová_2022 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of curcumin nanocrystals, reporting an IC50 for curcumin, but does not report a pharmacodynamic or exposure-response relationship for methylcellulose. |
| popPK | Luo_2026 | irrelevant | 0 | 0 | The paper reports on SARS-CoV-2 protease inhibitors and contains no data on methylcellulose. |
| PD | Luo_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (Ki) and in vivo antiviral efficacy for SARS-CoV-2 Mpro inhibitors, but contains no pharmacodynamic (exposure-response) analysis or numeric PD parameters for methylcellulose. |
| PGx | Ma_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of pitavastatin in a Slco1b2 knockout rat model and does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of methylcellulose. |
| popPK | Maruyama_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of the drug KSI-6666, while methylcellulose is mentioned only as an inert vehicle/solvent. |
| popPK | Matanović_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of heparin, and methylcellulose (specifically hydroxypropyl methylcellulose) is only a component of the delivery system, not the subject drug. |
| popPK | McComic_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the isoxazoline compound mCMV280 and fluralaner, not methylcellulose. |
| PGx | Mihara_2019 | not_relevant | 0 | 0 | The paper investigates 3D cell culture methods and does not report pharmacogenomic effects on methylcellulose PK/PD parameters. |
| PGx | Mistry_2026 | not_relevant | 0 | 0 | The paper does not report a pharmacogenomic effect; it evaluates a drug-drug interaction involving an efflux transporter inhibitor (OB-001/elacridar) and mentions methylcellulose only as an excipient. |
| popPK | Moein_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apitolisib (a PI3K/mTOR inhibitor) in mice and humans, where methylcellulose is used only as an inert vehicle component (0.5% MCT). |
| PD | Mohammed_2020 | not_relevant | 0 | 0 | The paper investigates a plant extract (Suaeda vermiculata) and uses methylcellulose (CMC) only as a vehicle/control, providing no pharmacodynamic or exposure-response data for methylcellulose itself. |
| popPK | Mudde_2022 | irrelevant | 0 | 0 | The study investigates tuberculosis drug regimens in mice and does not involve methylcellulose or report pharmacokinetic parameters for it. |
| PD | Mudde_2022 | not_relevant | 0 | 0 | The paper reports a treatment-duration-response relationship for tuberculosis regimens, not a concentration- or dose-response pharmacodynamic relationship for methylcellulose, which is only mentioned as a vehicle for linezolid. |
| popPK | Mukesh_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and pharmacokinetics of the drug celecoxib using hydroxypropyl methylcellulose acetate succinate (a polymer excipient), not methylcellulose as the subject drug. |
| PD | Mukesh_2023 | not_relevant | 0 | 0 | The paper focuses on biopharmaceutical formulation development (solid dispersions) and molecular simulations of drug-polymer interactions; it does not report pharmacodynamic (PD) modeling or exposure-response relationships for methylcellulose or any other drug. |
| PGx | Muzammil_2016 | not_relevant | 0 | 0 | The paper investigates the oral delivery of monoclonal antibodies in macaques, not the pharmacokinetics of methylcellulose or any pharmacogenomic interaction. |
| popPK | Myers_2026 | irrelevant | 0 | 0 | The paper studies BMX-001 in cancer models and does not involve methylcellulose or any pharmacokinetic analysis. |
| PD | Myers_2026 | not_relevant | 0 | 0 | The paper studies BMX-001 (a manganese porphyrin), not methylcellulose, and does not report a pharmacodynamic model or numeric PD parameters for methylcellulose. |
| PD | Najib_2023 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of bedaquiline-loaded solid lipid nanoparticles, not methylcellulose, and does not report a pharmacodynamic exposure-response relationship for methylcellulose. |
| PD | Neumann_1985 | not_relevant | 0 | 0 | The paper uses methylcellulose as a culture medium for colony assays and does not report any pharmacodynamic or exposure-response relationship for methylcellulose itself. |
| popPK | Odunsi_2022 | irrelevant | 0 | 0 | The study investigates the immunologic and metabolic effects of an IDO1 inhibitor (epacadostat) in ovarian cancer patients and mice, and does not involve methylcellulose or its pharmacokinetics. |
| PD | Odunsi_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of an IDO1 inhibitor (epacadostat) and does not report any pharmacodynamic or exposure-response analysis for methylcellulose. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not contain pharmacokinetic data for methylcellulose. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for methylcellulose. |
| PD | Ortega_2017 | not_relevant | 1 | 0 | The study is a pharmacokinetic evaluation of extended-release formulations; it mentions a minimum effective concentration (0.3 µg/mL) but does not report a concentration-effect curve, Emax, EC50, or any quantitative PD model parameters. |
| popPK | Pai_2026 | irrelevant | 0 | 0 | The paper is a review of extemporaneous formulations in pediatrics and does not report any quantitative pharmacokinetic parameters for methylcellulose. |
| PD | Pai_2026 | not_relevant | 0 | 0 | The paper is a review on extemporaneous formulations for pediatric patients and does not report any pharmacodynamic or exposure-response data for methylcellulose. |
| PGx | Pan_2022 | not_relevant | 0 | 0 | The paper reports the crystal structure of a bacterial multi-drug exporter (CmABCB1) and contains no information regarding methylcellulose or human pharmacogenomics. |
| popPK | Poceviciute_2026 | irrelevant | 0 | 0 | The study investigates the behavioral effects of phytocannabinoids on alcohol consumption in rats and does not report pharmacokinetic parameters for methylcellulose. |
| PD | Poceviciute_2026 | not_relevant | 0 | 0 | The paper studies phytocannabinoids (CBN, THCV, CBD) and mentions methylcellulose only as a vehicle component for CBD suspension, providing no pharmacodynamic or exposure-response data for methylcellulose itself. |
| popPK | R_2026 | irrelevant | 0 | 0 | The paper studies PARP inhibitors (rucaparib, niraparib, olaparib) and does not mention methylcellulose or report its pharmacokinetic parameters. |
| PD | R_2026 | not_relevant | 0 | 0 | The paper investigates the spatial distribution and lysosomal sequestration of PARP inhibitors (olaparib, niraparib, rucaparib) in ovarian cancer explants, not methylcellulose, and does not report pharmacodynamic parameters for methylcellulose. |
| PD | Randhawa_1977 | not_relevant | 0 | 0 | The paper describes a virological plaque assay technique and compares overlay media (including methylcellulose) for virus titration; it does not report a pharmacodynamic exposure-response or dose-response relationship for methylcellulose as a drug. |
| popPK | Rehfeld_2020 | irrelevant | 0 | 0 | The study is a mechanistic investigation of the sperm calcium channel CatSper, where methylcellulose is used merely as a medium for a functional penetration assay, not as a drug subject to pharmacokinetic analysis. |
| PD | Rehfeld_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacology of steroids and triterpenoids on CatSper channels, using methylcellulose only as a medium for a functional penetration assay, and does not report any pharmacodynamic or exposure-response relationship for methylcellulose itself. |
| PGx | Saljé_2012 | not_relevant | 0 | 0 | The study investigates the regulation of the gene Abcb1 by various drugs in pregnant rats, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of methylcellulose. |
| PD | Selim_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for a nanocomposite material (HPMC-collagen-CuO@Cr2O3) in an in vitro assay, which is a material characterization study, not a pharmacodynamic (exposure-response) analysis of the drug methylcellulose. |
| PD | Sriwidodo_2022 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (IC50) of mangosteen extract formulations, not a pharmacodynamic exposure-response relationship for methylcellulose. |
| popPK | Swaih_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the TKI AZ14289671 (and comparators), not for methylcellulose. |
| PGx | Tompkins_2010 | not_relevant | 0 | 0 | The paper investigates the effect of excipients on CYP3A4 expression, not the effect of genetic variants on the PK/PD of methylcellulose. |
| popPK | Troches-Mafla_2025 | irrelevant | 0 | 0 | The paper is a review of diltiazem hydrochloride formulations and does not report PK parameters for methylcellulose. |
| PD | Troches-Mafla_2025 | not_relevant | 0 | 0 | The paper is a review of controlled-release technologies for diltiazem hydrochloride and does not report any pharmacodynamic or exposure-response data for methylcellulose. |
| popPK | Velaga_2018 | irrelevant | 0 | 0 | The study focuses on the physical drying kinetics of polymer films (HPMC/PVA) and does not report pharmacokinetic parameters for methylcellulose as a drug in vivo or in vitro. |
| PD | Velaga_2018 | not_relevant | 0 | 0 | The paper models the drying kinetics of polymer films using the Hill equation, which is a physical/chemical process model, not a pharmacodynamic drug-response model. |
| popPK | Wang_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cyclosporine A, which is the subject drug, while methylcellulose is only a component of the delivery vehicle (nanoparticle). |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper studies a BCL-xL degrader (DT2216) in leukemia models and does not involve methylcellulose as the subject drug for pharmacokinetic analysis. |
| PD | Wang_2025 | not_relevant | 0 | 0 | The paper investigates the efficacy of DT2216, not methylcellulose, and does not report any pharmacodynamic or exposure-response parameters for methylcellulose. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on EGFR inhibitors for non-small cell lung cancer and does not mention methylcellulose or report pharmacokinetic parameters for it. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on the design of EGFR inhibitors (ZW-49) and reports in vitro IC50 values and in vivo tumor regression data, but contains no pharmacodynamic modeling, exposure-response analysis, or PK/PD fitting for methylcellulose or any other drug. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper investigates IL-17 and erythropoiesis in mice and does not study methylcellulose or its pharmacokinetics. |
| PD | Wu_2025 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of IL-17 and Erythropoietin, not methylcellulose. |
| PD | Yamashita_1989 | not_relevant | 4 | 2 | The paper describes dose-response curves for vincristine and doxorubicin in methylcellulose culture, but it does not report specific numeric PD parameters (such as IC50, Emax, or slope values) in the provided text, only qualitative comparisons of sensitivity. |
| PD | Yi_2010 | not_relevant | 0 | 0 | The paper studies parthenolide, not methylcellulose, and does not report any pharmacodynamic relationship for the target drug. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper investigates drug resistance mechanisms in NSCLC cell lines using EGFR-TKIs (gefitinib, dacomitinib, osimertinib) and does not study the pharmacokinetics of methylcellulose. |
| PGx | unknown_1999 | not_relevant | 0 | 0 | The paper is a standard toxicology and carcinogenicity study of AZT in mice; methylcellulose is used merely as a vehicle solvent, and there is no analysis of gene variants or pharmacogenomic effects on its PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
