<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;fidaxomicin&quot;}]"></div>

# fidaxomicin

- **generic name:** fidaxomicin
- **ATC codes:** `A07AA12`
- **DrugBank:** [DB08874](https://go.drugbank.com/drugs/DB08874) · **PubChem:** [CID 70678896](https://pubchem.ncbi.nlm.nih.gov/compound/70678896)
- **molar mass:** 1058.05 g/mol (C52H74Cl2O18) — DrugBank
- **groups:** approved, investigational

## About

Fidaxomicin is an intestinal antibiotic used to treat Clostridium infections. It is approved and authorised in the European Union, and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q111242331](https://www.wikidata.org/wiki/Q111242331) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:53 | 1:43 | 0/0/0 | 1/0/0 | 0/0/0 | 52,332/2,046 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/14 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | [Malinen_2019_DHEAS_uptake](drugs/drug_fidaxomicin/pd_Malinen_2019_DHEAS_uptake.md) | OSTα/β-mediated dehydroepiandrosterone sulfate (DHEAS) uptake ← fidaxomicin · direct sigmoid Emax (Hill) effect | — | Malinen MM et al., Novel in Vitro Method Reveals Drugs Tha…, Molecular pharmaceutics (2019) | [10.1021/acs.molpharmaceut.8b00966](https://doi.org/10.1021/acs.molpharmaceut.8b00966) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fidaxomicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | stomach | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 54 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cao_2022.pdf` | Cao YR et al., Pharmacokinetic evaluation and relative…, International journal of cl… (2022) | popPK | 8 | [10.5414/CP204263](https://doi.org/10.5414/CP204263) | [35979900](https://pubmed.ncbi.nlm.nih.gov/35979900) | The study reports non-compartmental PK parameters (Cmax, AUC, tmax) for fidaxomicin in humans, but lacks compartmental model parameters like clearance (CL) or volume (V). |
| `Högenauer_2018.pdf` | Högenauer C et al., Pharmacokinetics and safety of fidaxomi…, The Journal of antimicrobia… (2018) | popPK | 8 | [10.1093/jac/dky368](https://doi.org/10.1093/jac/dky368) | [30260412](https://pubmed.ncbi.nlm.nih.gov/30260412) | The study reports plasma PK parameters (Cmax, Tmax) for fidaxomicin and its metabolite in humans, but lacks compartmental model parameters (CL, V, ka) and full concentration-time data. |
| `Tashiro_2023.pdf` | Tashiro S et al., Fecal pharmacokinetics/pharmacodynamics…, Clinical microbiology and i… (2023) | popPK | 8 | [10.1016/j.cmi.2022.12.015](https://doi.org/10.1016/j.cmi.2022.12.015) | [36574949](https://pubmed.ncbi.nlm.nih.gov/36574949) | The study reports fecal PK/PD parameters (AUC/MIC) for fidaxomicin in a mouse model, but specific numeric PK values like clearance or volume are not explicitly listed in the provided text. |
| `Rougée_2025.pdf` | Rougée LRA et al., Heterotropic allosteric modulation of C…, Drug metabolism and disposi… (2025) | pgx | 7 | [10.1124/dmd.124.001820](https://doi.org/10.1124/dmd.124.001820) | [39884818](https://www.ncbi.nlm.nih.gov/pubmed/39884818) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T17:53:09.837339+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abutaleb_2020 | irrelevant | 0 | 0 | The study investigates the efficacy of auranofin in a CDI mouse model, using fidaxomicin only as a comparator for MICs and stability, with no pharmacokinetic parameters reported for fidaxomicin. |
| PD | Abutaleb_2020 | not_relevant | 0 | 0 | The paper investigates auranofin, not fidaxomicin, and does not report any pharmacodynamic or exposure-response parameters for fidaxomicin. |
| popPK | Ali_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MRP3 transporter inhibition, not a pharmacokinetic study reporting disposition parameters for fidaxomicin. |
| popPK | Auchtung_2025 | irrelevant | 0 | 0 | The study focuses on the effects of antibiotics on gastrointestinal microbiota in preclinical models and does not report pharmacokinetic parameters for fidaxomicin. |
| PD | Auchtung_2025 | not_relevant | 0 | 0 | The paper evaluates the impact of antibiotics on microbial community diversity using qualitative statistical comparisons (ANOVA, PERMANOVA) and does not report any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | Begum_2020 | irrelevant | 0 | 0 | The paper is an in-vitro susceptibility study of omadacycline against C. difficile, with fidaxomicin serving only as a comparator for MICs, and contains no pharmacokinetic parameters. |
| PD | Begum_2020 | not_relevant | 0 | 0 | The paper studies omadacycline, not fidaxomicin, and reports in vitro MICs and time-kill data without fidaxomicin-specific PD parameters. |
| popPK | Beneš_2016 | irrelevant | 0 | 0 | The paper is a clinical review comparing antibiotics for CDI treatment and does not report quantitative pharmacokinetic parameters for fidaxomicin. |
| PD | Beneš_2016 | not_relevant | 1 | 0 | The text is a qualitative review comparing antibiotics for CDI and mentions fidaxomicin's faster action and lower recurrence risk, but it provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Bhansali_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of LFF571 and vancomycin; fidaxomicin is only mentioned as a background treatment option and no PK parameters for it are reported. |
| PGx | Caramoci_2022 | not_relevant | 0 | 0 | The paper reports a UGT1A1 mutation affecting irinotecan toxicity, not fidaxomicin, and does not provide pharmacokinetic or pharmacodynamic data for fidaxomicin. |
| popPK | Chahine_2014 | irrelevant | 2 | 0 | This is a narrative review that summarizes fidaxomicin's properties but does not report original quantitative pharmacokinetic parameter values (CL, V, ka, etc.) in the provided text. |
| PD | Chahine_2014 | not_relevant | 2 | 0 | The paper is a general review of fidaxomicin's properties and clinical efficacy, lacking specific numeric pharmacodynamic parameters or exposure-response modeling. |
| popPK | Chandorkar_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for surotomycin, not fidaxomicin, which is only mentioned as a comparator. |
| popPK | Crawford_2012 | irrelevant | 1 | 0 | The paper is a clinical review that discusses pharmacology and efficacy but does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for fidaxomicin. |
| PD | Crawford_2012 | not_relevant | 1 | 1 | The text is a general review that mentions MIC ranges and qualitative dose-proportionality but does not report a specific exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | Daniels_2011 | irrelevant | 2 | 1 | This is a review article that cites PK data (half-life, Cmax) from other studies but does not report original quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| PD | Daniels_2011 | not_relevant | 2 | 1 | The paper is a review discussing pediatric use and cites adult PK data (fecal concentrations) and MICs, but it does not report a fitted exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | Dhruv_2020 | irrelevant | 0 | 0 | The paper is a case report on a drug-drug interaction (fidaxomicin and warfarin) and does not report any pharmacokinetic parameters for fidaxomicin. |
| PD | Dhruv_2020 | not_relevant | 0 | 0 | The paper is a single case report describing a qualitative drug-drug interaction (decreased INR) without any pharmacokinetic data, concentration measurements, or quantitative dose-response analysis. |
| popPK | Endres_2017 | irrelevant | 0 | 0 | The paper is a review of cadazolid, and fidaxomicin is only mentioned as a comparator agent without specific PK parameter values provided. |
| PD | Endres_2017 | not_relevant | 1 | 0 | The text is a review abstract for cadazolid that only qualitatively mentions pharmacodynamics and compares clinical outcomes with fidaxomicin, without providing any numeric PD parameters or exposure-response data for fidaxomicin. |
| popPK | Escudero-Sánchez_2023 | irrelevant | 0 | 0 | The paper is a clinical outcome study comparing dosing regimens for recurrence rates and does not report any pharmacokinetic parameters. |
| PD | Escudero-Sánchez_2023 | not_relevant | 0 | 0 | The paper is a clinical comparison of dosing regimens (conventional vs. extended-pulsed) based on recurrence rates and does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Eubank_2025 | irrelevant | 0 | 0 | The study evaluates ibezapolstat and vancomycin; fidaxomicin is only mentioned as an exclusion criterion and is not the subject of the pharmacokinetic analysis. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | The paper describes the discovery of new anthelmintic compounds (flavonoids) and does not involve fidaxomicin or its pharmacokinetics. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of anthelmintic compounds (flavonoids, etc.) and does not mention or analyze fidaxomicin. |
| popPK | Gangadhar_2022 | irrelevant | 0 | 0 | This is a clinical case report describing the treatment of C. difficile infection with fidaxomicin, containing no pharmacokinetic data or disposition parameters. |
| popPK | Hardesty_2011 | irrelevant | 0 | 0 | The text is a general review/overview of fidaxomicin's clinical use and approval status, containing no quantitative pharmacokinetic parameters or model data. |
| PD | Hardesty_2011 | not_relevant | 1 | 0 | The text is a general review/summary of fidaxomicin's clinical profile and mentions "pharmacodynamic properties" qualitatively but provides no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Higashiguchi_2025 | irrelevant | 1 | 0 | The study is a mechanistic in-vitro/theoretical investigation of food effects on absorption (Fa) and permeation, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| PD | Higashiguchi_2025 | not_relevant | 0 | 0 | The paper focuses on in vitro dissolution and permeation kinetics (food effect on absorption) and does not report any pharmacodynamic or exposure-response relationship for fidaxomicin. |
| popPK | Hollibaugh_2020 | irrelevant | 0 | 0 | The paper is a chemical synthesis study describing the construction of fidaxomicin fragments and does not report any pharmacokinetic parameters. |
| popPK | Hostler_2013 | irrelevant | 1 | 0 | The paper is a review article summarizing literature rather than an original study reporting quantitative PK parameters, and no numeric values are present in the evidence. |
| PD | Hostler_2013 | not_relevant | 2 | 0 | The text is a review article summarizing fidaxomicin's properties and clinical use, but it does not present original data, specific numeric PD parameters (like Emax or EC50), or an extractable concentration-effect curve. |
| popPK | Högenauer_2018 | relevant | 8 | 4 | The study reports plasma PK parameters (Cmax, Tmax) for fidaxomicin and its metabolite in humans, but lacks compartmental model parameters (CL, V, ka) and full concentration-time data. |
| popPK | Jaramillo_2023 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of recurrent C. difficile infection and does not contain any pharmacokinetic data or quantitative disposition parameters for fidaxomicin. |
| PD | Jaramillo_2023 | not_relevant | 0 | 0 | The paper is a clinical case report describing the treatment history of a patient with recurrent C. difficile infection and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for fidaxomicin. |
| popPK | Juang_2013 | irrelevant | 0 | 0 | The paper is a narrative review discussing the clinical role of fidaxomicin without reporting any original quantitative pharmacokinetic parameters. |
| PD | Juang_2013 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical efficacy and general pharmacological properties without providing any numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Lancaster_2012 | irrelevant | 1 | 0 | The paper is a narrative review of fidaxomicin for CDI that discusses pharmacokinetic properties qualitatively but does not report original quantitative PK parameter values (CL, V, ka, etc.) in the provided evidence. |
| PD | Lancaster_2012 | not_relevant | 2 | 0 | The paper is a narrative review that summarizes general pharmacodynamic properties (MICs) and clinical efficacy but does not report specific numeric PD parameters (e.g., Emax, EC50) or an exposure-response model for fidaxomicin. |
| popPK | Malinen_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition (IC50) and does not report pharmacokinetic disposition parameters for fidaxomicin. |
| popPK | Parvez_2020 | irrelevant | 0 | 0 | The paper is a computational molecular docking study predicting fidaxomicin as an inhibitor of SARS-CoV-2 RdRp, containing no pharmacokinetic disposition parameters (CL, V, ka, etc.) for the drug. |
| PGx | Rougée_2025 | not_relevant | 0 | 0 | The paper investigates the effect of progesterone on CYP3A4 inhibition kinetics, not the effect of a gene variant or genotype on fidaxomicin pharmacokinetics or pharmacodynamics. |
| popPK | Salim_2025 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of carbohydrate derivatives and contains no pharmacokinetic data for fidaxomicin. |
| PD | Salim_2025 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of 2-acetylnoviosamine derivatives and contains no pharmacodynamic, exposure-response, or dose-response data for fidaxomicin. |
| popPK | Skinner_2020 | irrelevant | 0 | 0 | The paper is a clinical review discussing efficacy and safety in children, with no quantitative pharmacokinetic parameters reported. |
| PD | Skinner_2020 | not_relevant | 0 | 0 | The text is a brief overview of fidaxomicin's approval and efficacy in children, containing no pharmacokinetic, pharmacodynamic, or exposure-response data. |
| popPK | Srinivas_2015 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| popPK | Sullivan_2010 | irrelevant | 1 | 0 | The paper is a narrative review that summarizes general PK characteristics (low plasma, high stool) without reporting specific quantitative disposition parameters or model values. |
| PD | Sullivan_2010 | not_relevant | 1 | 0 | The paper is a narrative review that qualitatively mentions PK/PD characteristics (low plasma, high stool, PAE) but does not report or provide numeric PD parameters or exposure-response curves. |
| popPK | Tashiro_2023 | relevant | 8 | 2 | The study reports fecal PK/PD parameters (AUC/MIC) for fidaxomicin in a mouse model, but specific numeric PK values like clearance or volume are not explicitly listed in the provided text. |
| popPK | Vande_2012 | irrelevant | 0 | 0 | The paper is a review of new drug approvals and does not report any quantitative pharmacokinetic parameters for fidaxomicin. |
| PD | Vande_2012 | not_relevant | 0 | 0 | The paper is a general review of new drug approvals in 2011 and provides only qualitative descriptions of fidaxomicin without any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing hospital-level antibiotic usage patterns for CDI and does not report any pharmacokinetic parameters for fidaxomicin. |
| PD | Xu_2022 | not_relevant | 0 | 0 | The paper analyzes hospital-level epidemiological data (CDI prevalence vs. antibiotic use rates) and does not report any pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | Yee_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for bezlotoxumab, not fidaxomicin. |
| PD | Yee_2019 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationship for bezlotoxumab, not fidaxomicin. |
| popPK | Zhanel_2015 | irrelevant | 2 | 0 | The paper is a clinical review focusing on efficacy and microbiology, lacking original quantitative population pharmacokinetic parameters (CL, V, ka) for fidaxomicin. |
| PD | Zhanel_2015 | not_relevant | 2 | 1 | The paper is a review discussing chemistry, mechanism, and clinical outcomes, providing PK data (concentrations) and MICs, but it does not report a fitted pharmacodynamic model or an exposure-response analysis with numeric PD parameters (e.g., Emax, EC50) for fidaxomicin. |
| popPK | de_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bezlotoxumab, with fidaxomicin serving only as a comparator agent in a specific patient population. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
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
<sub>Generated by `docs.py` (scholarv2)</sub>
