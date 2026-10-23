<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;bemiparin&quot;}]"></div>

# bemiparin

- **generic name:** bemiparin
- **ATC codes:** `B01AB12`
- **DrugBank:** [DB09258](https://go.drugbank.com/drugs/DB09258) · **PubChem:** none
- **groups:** approved, investigational, withdrawn

## About

Bemiparin is a heparin-group antithrombotic medicine used to prevent and treat blood clots. It is an approved low-molecular-weight heparin, used mainly in some European countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q971360](https://www.wikidata.org/wiki/Q971360) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bemiparin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: F10 (target), SERPINC1 (target), SERPIND1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:05 | 2:25 | 0/0/0 | 0/0/0 | 0/0/0 | 75,678/2,021 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 7/10 | 8/6 | 0 |

## Coverage

- **PubMed hits:** 165 matched, 41 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Antonijoan_2009.pdf` | Antonijoan RM et al., Comparative pharmacodynamic time-course…, International journal of cl… (2009) | pd | 5 | [10.5414/cpp47726](https://doi.org/10.5414/cpp47726) | [19954711](https://www.ncbi.nlm.nih.gov/pubmed/19954711) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-05 14:05 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbemiparin%5D&body=Drug%3A%20bemiparin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bemiparin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
