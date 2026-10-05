<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;bemiparin&quot;}]"></div>

# bemiparin

- **generic name:** bemiparin
- **ATC codes:** `B01AB12`
- **DrugBank:** [DB09258](https://go.drugbank.com/drugs/DB09258) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Bemiparin is a heparin-group antithrombotic medicine used to prevent and treat blood clots. It is an approved low-molecular-weight heparin, used mainly in some European countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q971360](https://www.wikidata.org/wiki/Q971360) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:05 | 2:25 | 0/0/0 | 0/0/0 | 0/0/0 | 75,678/2,021 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 7/10 | 8/6 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bemiparin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: F10 (target), SERPINC1 (target), SERPIND1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 165 matched, 41 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Antonijoan_2009.pdf` | Antonijoan RM et al., Comparative pharmacodynamic time-course…, International journal of cl… (2009) | pd | 5 | [10.5414/cpp47726](https://doi.org/10.5414/cpp47726) | [19954711](https://www.ncbi.nlm.nih.gov/pubmed/19954711) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-05T14:05:11.536229+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abad_2010 | irrelevant | 0 | 0 | The paper is a clinical review of bemiparin's efficacy and safety in VTE prevention and treatment, containing no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Alur_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-tumor effects and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Antonijoan_2009 | irrelevant | 2 | 2 | The study reports pharmacodynamic parameters (anti-Xa activity, half-life of effect) rather than pharmacokinetic disposition parameters (clearance, volume of distribution) for bemiparin. |
| popPK | Bajpai_2025 | irrelevant | 0 | 0 | This is a network meta-analysis of clinical efficacy (VTE/bleeding risk) and does not report pharmacokinetic parameters for bemiparin. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Branson_2011 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |
| popPK | Chapman_2003 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety in thrombosis prevention/treatment, containing no quantitative pharmacokinetic parameters (CL, V, etc.) for bemiparin. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| PD | Chase_2012 | not_relevant | 0 | 0 | The provided text is a conference session header and file link, containing no scientific content, data, or pharmacodynamic analysis for bemiparin. |
| popPK | Ciccone_2014 | irrelevant | 0 | 0 | The paper is a narrative review without original quantitative pharmacokinetic parameter values (CL, V, etc.) for bemiparin. |
| popPK | Del_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding gastrointestinal bleeding and does not contain any pharmacokinetic data or parameters for bemiparin. |
| popPK | Edo_2016 | irrelevant | 0 | 0 | The paper is a clinical case report describing the treatment of venous thrombosis with bemiparin, but it does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Ena_2020 | irrelevant | 0 | 0 | This is a meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Falkon_1998 | irrelevant | 2 | 0 | The study describes qualitative kinetic profiles and duration of action (time ranges) rather than reporting quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Ferriols-Lisart_2002 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical effectiveness and safety outcomes (DVT, PE rates) and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Fontcuberta_2010 | irrelevant | 2 | 0 | The paper is a review of clinical use in special populations that discusses pharmacokinetic profiles qualitatively but does not report any quantitative disposition parameters (CL, V, etc.) for bemiparin. |
| popPK | Gao_2017 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy (VTE prevention) and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Gerotziafas_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of thrombin generation in plasma, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | González_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of bemiparin in fetal growth restriction and does not report any pharmacokinetic parameters. |
| popPK | González_2026 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating neonatal morbidity outcomes, not a pharmacokinetic study, and contains no PK parameters for bemiparin. |
| popPK | Hao_2019 | irrelevant | 0 | 0 | The paper is a general review of low molecular weight heparins and does not report specific quantitative pharmacokinetic parameters for bemiparin. |
| popPK | Kakkar_2003 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for deep vein thrombosis treatment and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Lozano_2020 | irrelevant | 0 | 0 | The paper is a clinical observation of heparin-induced thrombocytopenia incidence in COVID-19 patients and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Lázaro-García_2022 | irrelevant | 0 | 0 | This is a clinical case report describing the management of heparin-induced thrombocytopenia, not a pharmacokinetic study, and contains no quantitative PK parameters for bemiparin. |
| popPK | Martínez-González_2008 | irrelevant | 2 | 0 | The paper is a review discussing pharmacodynamics and pharmacoeconomics, mentioning a half-life value but lacking a compartmental PK model or quantitative disposition parameters like clearance and volume. |
| PD | Martínez-González_2008 | not_relevant | 1 | 0 | The text is a general review summarizing pharmacological properties (MW, half-life, activity ratio) and clinical utility, but it does not report specific exposure-response or dose-response data, curves, or numeric PD parameters (e.g., EC50, Emax) for bemiparin. |
| popPK | Martínez-González_2010 | irrelevant | 0 | 0 | The paper is a narrative review discussing clinical applications and pharmacoeconomics of bemiparin without reporting any original quantitative pharmacokinetic parameter values. |
| popPK | Monreal_2010 | irrelevant | 0 | 0 | The paper is a review of bemiparin's clinical efficacy in oncology and thrombosis, containing no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Muñoa_2014 | irrelevant | 0 | 0 | The study is a clinical trial comparing efficacy and safety, not a pharmacokinetic study, and bemiparin is a comparator without any PK parameters reported. |
| popPK | Ozaslan_2018 | irrelevant | 0 | 0 | The paper is a clinical observational study on the efficacy and safety of LMWHs for VTE treatment, not a pharmacokinetic study, and does not report quantitative PK parameters (CL, V, etc.) for bemiparin. |
| popPK | Peña-Salazar_2020 | irrelevant | 0 | 0 | The paper is a clinical case report regarding status epilepticus in a COVID-19 patient where bemiparin is only mentioned as a co-administered medication, with no pharmacokinetic data provided. |
| popPK | Planès_2003 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and safety, mentioning a half-life but lacking quantitative disposition parameters (CL, V, Q) or a PK model. |
| popPK | Psifis_2025 | irrelevant | 0 | 0 | The study investigates the immunogenicity (anti-PF4/H antibody production) of bemiparin, not its pharmacokinetic disposition parameters. |
| popPK | Pérez-Balaguer_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the safety of electroconvulsive therapy in a patient taking bemiparin, and it does not contain any pharmacokinetic data or disposition parameters for bemiparin. |
| popPK | Reyes-Ortega_2015 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| popPK | Rico_2014 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (anti-FXa activity) and simulation results rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for bemiparin. |
| PD | Rico_2014 | not_relevant | 2 | 1 | The paper reports PK parameters (Amax) and dose adjustment recommendations based on renal function, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) for bemiparin. |
| popPK | San_2016 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of rosuvastatin as an adjuvant to bemiparin for DVT, and it does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Scala-Bertola_2009 | irrelevant | 2 | 2 | The study reports only AUC and relative bioavailability for bemiparin in rabbits, lacking the specific compartmental PK parameters (CL, V, ka) required for relevance. |
| popPK | Seebauer_2025 | irrelevant | 0 | 0 | The study is a clinical trial analyzing wound healing outcomes, not a pharmacokinetic study, and bemiparin is only mentioned as a comparator anticoagulant. |
| popPK | Shao_2019 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy (DVT prevention) and contains no pharmacokinetic parameters for bemiparin. |
| popPK | Tramontana_2019 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Urbanos_2019 | irrelevant | 0 | 0 | The paper is a clinical case report regarding stroke management in a patient with a ventricular assist device, where bemiparin is mentioned only as a concurrent anticoagulant, with no pharmacokinetic data provided. |
| popPK | Yazici_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology experiment measuring oxidative stress biomarkers (prolidase, MDA) in rat kidneys, not a pharmacokinetic study reporting disposition parameters for bemiparin. |
| popPK | Zhou_2019 | irrelevant | 0 | 0 | no_text gate: only 210 chars of text extracted (&lt; 400) |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or PD parameters for bemiparin. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of bemiparin pharmacodynamics. |
| popPK | Şenkal_2020 | irrelevant | 0 | 0 | The paper is a clinical study on ACE inhibitors and COVID-19 outcomes, containing no pharmacokinetic data for bemiparin. |
| PD | Şenkal_2020 | not_relevant | 0 | 0 | The paper is a retrospective clinical cohort study on ACE inhibitors in COVID-19 patients and does not involve bemiparin or report any pharmacokinetic/pharmacodynamic modeling or concentration-effect relationships. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
