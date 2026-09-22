<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;fidaxomicin&quot;}]"></div>

# fidaxomicin

- **generic name:** fidaxomicin
- **ATC codes:** `A07AA12`
- **DrugBank:** [DB08874](https://go.drugbank.com/drugs/DB08874)
- **groups:** approved, investigational

## About

**Description.** Fidaxomicin is a novel macrolide antibiotic used in the treatment of diarrhea caused by _Clostridioides_ (formerly _Clostridium_) _difficile_ in adult and pediatric patients over the age of 6 months.[L11575] Fidaxomicin is a naturally-occurring 18-member macrocycle derived from fermentation.[A190501] Because fidaxomicin contains an 18-membered lactone ring in its structure, it is referred to as a macrocyclic lactone antibiotic drug.[A190492] The antibacterial activity of fidaxomicin is distinct from macrolides and rifamycins, as the bactericidal activity is time-dependent, and not concentration-dependent.[A190492] Fidaxomicin was the first macrocyclic lactone antibiotic with activity against _C. difficile_,[A190486] and it displays a narrow spectrum of activity against gram-positive anaerobes.[A7445] It mediates its potent bactericidal action on the bacteria by inhibiting the bacterial RNA synthase, thereby disrupting bacterial transcription.[A190486] The minimum inhibitory concentration (MIC<sub>90</sub>) for fidaxomicin is four times less than that of [vancomycin], which was the primary drug of choice for _C. difficile_ infection before the approval of fidaxomicin.[A190492] Unlike vancomycin, however, fidaxomicin has a negligible effect on normal colonic microflora.[A190516]

The FDA initially approved fidaxomicin in May 2011 for the treatment of _C. difficile_-associated diarrhea in adult patients over the age of 18.[A190492] Later that year in December, the drug was also approved by the European Medicine Agency.[A190492] In June 2012, fidaxomicin was also granted approval by Health Canada.[A190486] The approved indication of fidaxomicin was expanded by the FDA in January 2020 to include pediatric patients over the age of 6 months in the treatment population.[L11575]

**Indication.** Fidaxomicin is indicated for the treatment of _Clostridioides_ (formerly _Clostridium_) _difficile_-associated diarrhea in adult and pediatric patients 6 months of age and older.[L11575]

Fidaxomicin should only be used in patients with proven or strongly suspected _C. difficile_ infection to reduce the risk of development of drug-resistant bacteria and maximize the therapeutic effectiveness of fidaxomicin and other antimicrobial agents.[L11575]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 01:17 | 11:06 | 0/0/0 | 0/0/0 | 0/0/0 | 252,750/6,095 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/14 | 16/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fidaxomicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | stomach | <sub>“…it is speculated that this biotransformation is mediated by gastric acid or enzymatic acti…”</sub> | prose |
| excretion | bile duct | <sub>“…wing oral administration, fidaxomicin is mainly excreted in feces. More than 92% of the do…”</sub> | prose |
| excretion | kidney | <sub>“…fo the oral dose (200 mg) administered was recovered in the urine as the main metabolite,…”</sub> | prose |

## Coverage

- **PubMed hits:** 62 matched, 54 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rougée_2025.pdf` | Rougée LRA et al., Heterotropic allosteric modulation of C…, Drug metabolism and disposi… (2025) | pgx | 7 | [10.1124/dmd.124.001820](https://doi.org/10.1124/dmd.124.001820) | [39884818](https://www.ncbi.nlm.nih.gov/pubmed/39884818) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-22T01:16:10.843370+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abutaleb_2020 | irrelevant | 0 | 0 | The study investigates the efficacy of auranofin in a CDI mouse model, using fidaxomicin only as a comparator for MICs and stability, with no pharmacokinetic parameters reported for fidaxomicin. |
| PD | Abutaleb_2020 | not_relevant | 0 | 0 | The paper investigates auranofin, not fidaxomicin, and does not report any pharmacodynamic or exposure-response parameters for fidaxomicin. |
| popPK | Ali_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MRP3 transporter inhibition, not a pharmacokinetic study reporting disposition parameters for fidaxomicin. |
| popPK | Auchtung_2025 | irrelevant | 0 | 0 | The paper is a microbiome study examining the effects of antibiotics on gut microbial communities, not a pharmacokinetic study, and contains no PK parameters for fidaxomicin. |
| PD | Auchtung_2025 | not_relevant | 0 | 0 | The paper evaluates the impact of antibiotics on microbial community diversity using qualitative statistical comparisons (ANOVA, PERMANOVA) and does not report any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | Begum_2020 | irrelevant | 0 | 0 | The paper is an in-vitro susceptibility study of omadacycline against C. difficile, with fidaxomicin serving only as a comparator for MICs, and contains no pharmacokinetic parameters. |
| PD | Begum_2020 | not_relevant | 0 | 0 | The paper studies omadacycline, not fidaxomicin, and reports in vitro MICs and time-kill data without fidaxomicin-specific PD parameters. |
| popPK | Beneš_2016 | irrelevant | 0 | 0 | The paper is a clinical review comparing antibiotics for CDI treatment and does not report quantitative pharmacokinetic parameters for fidaxomicin. |
| PD | Beneš_2016 | not_relevant | 1 | 0 | The text is a qualitative review comparing antibiotics for CDI and mentions fidaxomicin's faster action and lower recurrence risk, but it provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Bhansali_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of LFF571 and vancomycin, with fidaxomicin mentioned only as a background comparator and no PK parameters reported for it. |
| popPK | Cao_2022 | relevant | 4 | 2 | The study reports non-compartmental PK parameters (Cmax, AUC, tmax) for fidaxomicin, but lacks the specific compartmental or population PK parameters (CL, V, Q, ka) required for the extraction task. |
| PGx | Caramoci_2022 | not_relevant | 0 | 0 | The paper reports a UGT1A1 variant affecting irinotecan toxicity, not fidaxomicin. |
| popPK | Chahine_2014 | irrelevant | 1 | 0 | The paper is a narrative review that summarizes fidaxomicin's properties but does not report original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) in the provided evidence. |
| PD | Chahine_2014 | not_relevant | 2 | 0 | The paper is a general review of fidaxomicin's properties and clinical efficacy, lacking specific numeric pharmacodynamic parameters or exposure-response modeling. |
| popPK | Chandorkar_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of surotomycin, not fidaxomicin, which is only mentioned as a comparator. |
| popPK | Crawford_2012 | irrelevant | 1 | 0 | The paper is a clinical review that discusses pharmacology and efficacy but does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for fidaxomicin. |
| PD | Crawford_2012 | not_relevant | 1 | 1 | The text is a general review that mentions MIC ranges and qualitative dose-proportionality but does not report a specific exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | Daniels_2011 | irrelevant | 2 | 1 | This is a review article that cites PK data (half-life, Cmax) from other studies but does not report original quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| PD | Daniels_2011 | not_relevant | 2 | 1 | The paper is a review discussing pediatric use and cites adult PK data (fecal concentrations) and MICs, but it does not report a fitted exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | Dhruv_2020 | irrelevant | 0 | 0 | The paper is a case report on a drug-drug interaction (fidaxomicin and warfarin) and does not report any pharmacokinetic parameters for fidaxomicin. |
| PD | Dhruv_2020 | not_relevant | 0 | 0 | The paper is a single case report describing a qualitative drug-drug interaction (decreased INR) without any pharmacokinetic data, concentration measurements, or quantitative dose-response analysis. |
| popPK | Endres_2017 | irrelevant | 0 | 0 | The paper is a review of cadazolid, and fidaxomicin is only mentioned as a comparator without any original quantitative PK parameters provided. |
| PD | Endres_2017 | not_relevant | 1 | 0 | The text is a review abstract for cadazolid that only qualitatively mentions pharmacodynamics and compares clinical outcomes with fidaxomicin, without providing any numeric PD parameters or exposure-response data for fidaxomicin. |
| popPK | Escudero-Sánchez_2023 | irrelevant | 0 | 0 | The paper is a clinical outcome study comparing dosing regimens for recurrence rates and does not report any pharmacokinetic parameters. |
| PD | Escudero-Sánchez_2023 | not_relevant | 0 | 0 | The paper is a clinical comparison of dosing regimens (conventional vs. extended-pulsed) based on recurrence rates and does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Eubank_2025 | irrelevant | 0 | 0 | The study investigates ibezapolstat and vancomycin, with fidaxomicin mentioned only as an exclusion criterion, and no fidaxomicin PK parameters are reported. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | The paper is a high-throughput screening study for anthelmintic compounds (chalcone, tolfenpyrad, etc.) and does not involve fidaxomicin or report any pharmacokinetic parameters for it. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of anthelmintic compounds (flavonoids, etc.) and does not mention or analyze fidaxomicin. |
| popPK | Gangadhar_2022 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of C. difficile infection and does not contain any pharmacokinetic data or disposition parameters for fidaxomicin. |
| popPK | Hardesty_2011 | irrelevant | 0 | 0 | The text is a general review/overview of fidaxomicin's clinical use and approval status, containing no quantitative pharmacokinetic parameters or model data. |
| PD | Hardesty_2011 | not_relevant | 1 | 0 | The text is a general review/summary of fidaxomicin's clinical profile and mentions "pharmacodynamic properties" qualitatively but provides no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Higashiguchi_2025 | irrelevant | 1 | 0 | The study is a mechanistic in-vitro/theoretical investigation of food effects on absorption (Fa) and permeation, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| PD | Higashiguchi_2025 | not_relevant | 0 | 0 | The paper focuses on in vitro dissolution and permeation kinetics (food effect on absorption) and does not report any pharmacodynamic or exposure-response relationship for fidaxomicin. |
| popPK | Hollibaugh_2020 | irrelevant | 0 | 0 | The paper is a chemical synthesis study focused on the structural construction of fidaxomicin and does not report any pharmacokinetic parameters. |
| popPK | Hostler_2013 | irrelevant | 1 | 0 | The paper is a review article summarizing literature rather than an original study reporting quantitative PK parameters, and no numeric values are present in the evidence. |
| PD | Hostler_2013 | not_relevant | 2 | 0 | The text is a review article summarizing fidaxomicin's properties and clinical use, but it does not present original data, specific numeric PD parameters (like Emax or EC50), or an extractable concentration-effect curve. |
| popPK | Högenauer_2018 | relevant | 4 | 2 | The study reports sparse PK parameters (Cmax, Tmax) for fidaxomicin but lacks compartmental model parameters (CL, V, ka) or population-PK estimates. |
| popPK | Jaramillo_2023 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of recurrent C. difficile infection and does not contain any pharmacokinetic data or quantitative disposition parameters for fidaxomicin. |
| PD | Jaramillo_2023 | not_relevant | 0 | 0 | The paper is a clinical case report describing the treatment history of a patient with recurrent C. difficile infection and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for fidaxomicin. |
| popPK | Juang_2013 | irrelevant | 0 | 0 | The paper is a narrative review discussing the clinical role of fidaxomicin without reporting any original quantitative pharmacokinetic parameters. |
| PD | Juang_2013 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical efficacy and general pharmacological properties without providing any numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Lancaster_2012 | irrelevant | 1 | 0 | The paper is a narrative review of fidaxomicin for CDI that discusses pharmacokinetic properties qualitatively but does not report original quantitative PK parameter values (CL, V, ka, etc.) in the provided evidence. |
| PD | Lancaster_2012 | not_relevant | 2 | 0 | The paper is a narrative review that summarizes general pharmacodynamic properties (MICs) and clinical efficacy but does not report specific numeric PD parameters (e.g., Emax, EC50) or an exposure-response model for fidaxomicin. |
| popPK | Malinen_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition (IC50) and does not report pharmacokinetic disposition parameters for fidaxomicin. |
| popPK | Parvez_2020 | irrelevant | 0 | 0 | The paper is a computational molecular docking study for SARS-CoV-2 inhibitors and does not report any pharmacokinetic disposition parameters for fidaxomicin. |
| PGx | Rougée_2025 | not_relevant | 0 | 0 | The paper investigates the effect of progesterone on CYP3A4 inhibition kinetics, not the effect of a gene variant or genotype on fidaxomicin pharmacokinetics or pharmacodynamics. |
| popPK | Salim_2025 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of carbohydrate derivatives and contains no pharmacokinetic data for fidaxomicin. |
| PD | Salim_2025 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of 2-acetylnoviosamine derivatives and contains no pharmacodynamic, exposure-response, or dose-response data for fidaxomicin. |
| popPK | Skinner_2020 | irrelevant | 0 | 0 | The paper is a clinical review discussing efficacy and safety in children, containing no pharmacokinetic parameters or quantitative disposition data for fidaxomicin. |
| PD | Skinner_2020 | not_relevant | 0 | 0 | The text is a brief overview of fidaxomicin's approval and efficacy in children, containing no pharmacokinetic, pharmacodynamic, or exposure-response data. |
| popPK | Srinivas_2015 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| popPK | Sullivan_2010 | irrelevant | 1 | 0 | The paper is a narrative review that summarizes general PK characteristics (low plasma, high stool) without reporting specific quantitative disposition parameters or model values. |
| PD | Sullivan_2010 | not_relevant | 1 | 0 | The paper is a narrative review that qualitatively mentions PK/PD characteristics (low plasma, high stool, PAE) but does not report or provide numeric PD parameters or exposure-response curves. |
| popPK | Tashiro_2023 | irrelevant | 2 | 0 | The study reports PK/PD indices (AUC/MIC) and MIC breakpoints for fidaxomicin in a mouse model, but does not provide standard quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Vande_2012 | irrelevant | 0 | 0 | The paper is a review of new drug approvals and does not report any quantitative pharmacokinetic parameters for fidaxomicin. |
| PD | Vande_2012 | not_relevant | 0 | 0 | The paper is a general review of new drug approvals in 2011 and provides only qualitative descriptions of fidaxomicin without any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing hospital-level antibiotic usage patterns for CDI and does not report any pharmacokinetic parameters for fidaxomicin. |
| PD | Xu_2022 | not_relevant | 0 | 0 | The paper analyzes hospital-level epidemiological data (CDI prevalence vs. antibiotic use rates) and does not report any pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | Yee_2019 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for bezlotoxumab, not fidaxomicin. |
| PD | Yee_2019 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationship for bezlotoxumab, not fidaxomicin. |
| popPK | Zhanel_2015 | irrelevant | 2 | 0 | The paper is a clinical review focusing on efficacy and microbiology, lacking original quantitative population pharmacokinetic parameters (CL, V, ka) for fidaxomicin. |
| PD | Zhanel_2015 | not_relevant | 2 | 1 | The paper is a review discussing chemistry, mechanism, and clinical outcomes, providing PK data (concentrations) and MICs, but it does not report a fitted pharmacodynamic model or an exposure-response analysis with numeric PD parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | de_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bezlotoxumab, with fidaxomicin serving only as a comparator drug in a specific patient population. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The paper discusses G-CSF, BCR-ABL, and VTE risk assessment, with no mention of fidaxomicin or its pharmacokinetic parameters. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The paper discusses G-CSF administration timing and other unrelated pediatric oncology topics; it does not contain any pharmacodynamic or exposure-response data for fidaxomicin. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is a title fragment for vancomycin, not fidaxomicin, and contains no data or analysis. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for conference abstracts and contains no data, results, or PD parameters for fidaxomicin. |
| popPK | unknown_2019_2 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | unknown_2019_2 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of fidaxomicin pharmacodynamics. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 47 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters regarding fidaxomicin pharmacodynamics. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The paper focuses on the clinical efficacy of live fecal microbiota capsules (Vowst) for CDI prevention and does not report any pharmacokinetic or pharmacodynamic modeling or exposure-response analysis for fidaxomicin. |
| popPK | unknown_2023_2 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The paper focuses on live fecal microbiota (Rebyota) for CDI prevention and does not report pharmacodynamic or exposure-response data for fidaxomicin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fidaxomicin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
