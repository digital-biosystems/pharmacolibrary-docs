<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;dosulepin&quot;}]"></div>

# dosulepin

- **generic name:** dosulepin
- **ATC codes:** `N06AA16`
- **DrugBank:** [DB09167](https://go.drugbank.com/drugs/DB09167)
- **groups:** approved, investigational

## About

**Description.** Dosulepin (INN, BAN) formerly known as dothiepin (USAN), is a tricyclic antidepressant with anxiolytic properties that is used in several European and South Asian countries, as well as Australia, South Africa, and New Zealand. It is not FDA-approved due to low therpeutic index and significant toxicity in overdose. Dosulepin inhibits the reuptake of biogenic amines, increasing available neurotransmitter levels at the synaptic cleft. The use of dosulepsin is only recommended in patients who are intolerant or unresponsive to alternative antidepressant therapies. Dosulepsin is a thio derivative of [DB00321] with a similar efficacy to that of [DB00321], and also exhibits anticholinergic, antihistamine and central sedative properties [L882]. 
Its hydrochloride form is a common active ingredient in different drug formulations.

**Indication.** Indicated in the treatment of symptoms of depressive illness, especially where an anti-anxiety effect is required.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 21:42 | 7:27 | 0/0/0 | 0/0/0 | 0/0/0 | 46,348/1,782 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 3/1 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dosulepin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Dosulepin is well absorbed from the intestines to reach the peak plasma concentration of 3…”</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>“…den S-oxide is among 12 basic metabolites that are found in urine. The metabolic pathways…”</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…etabolites accounts for 50% - 60% of total elimination, and biliary/fecal excretion is abo…”</sub> | prose |
| excretion | kidney | <sub>“…Dosulepin is predominantly cleared via renal elimination, mainly in the form of metabolite…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), HRH1 (target), HTR1A (target), HTR2A (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Crampton_1980.pdf` | Crampton EL et al., Chemical ionisation mass fragmentograph…, Journal of chromatography (1980) | popPK | 10 | [10.1016/s0378-4347(00)81687-4](https://doi.org/10.1016/s0378-4347(00)81687-4) | [7400272](https://pubmed.ncbi.nlm.nih.gov/7400272) | The study reports quantitative PK parameters (half-life, volume of distribution) for dothiepin (dosulepin), but specific numeric values for volume and clearance are not explicitly listed in the provided abstract text. |
| `Moharir_2024.pdf` | Moharir S et al., Improved Pharmacokinetic and Pharmacody…, European journal of drug me… (2024) | popPK | 8 | [10.1007/s13318-023-00870-4](https://doi.org/10.1007/s13318-023-00870-4) | [38172422](https://pubmed.ncbi.nlm.nih.gov/38172422) | The paper is a pharmacokinetic study of dosulepin (and deuterated analogs) in animals, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-09-23T21:42:32.576124+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Attia_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP metabolism for amitriptyline, dothiepin, and fluphenazine, and does not report population pharmacokinetic parameters for dosulepin. |
| popPK | Bareggi_1990 | irrelevant | 0 | 0 | The study investigates dothiepin (a different drug), not dosulepin. |
| popPK | Crampton_1980 | relevant | 10 | 2 | The study reports quantitative PK parameters (half-life, volume of distribution) for dothiepin (dosulepin), but specific numeric values for volume and clearance are not explicitly listed in the provided abstract text. |
| popPK | El_2021 | irrelevant | 0 | 0 | The study focuses on pantoprazole and amitriptyline, not dosulepin. |
| popPK | Elama_2018 | irrelevant | 0 | 0 | The paper describes analytical methods for drug quantification in dosage forms, not a pharmacokinetic study reporting disposition parameters. |
| PD | Elama_2018 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Hippisley-Cox_2001 | irrelevant | 0 | 0 | The paper is an epidemiological case-control study assessing the risk of ischaemic heart disease associated with dosulepin use, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Hippisley-Cox_2001 | not_relevant | 3 | 2 | The paper reports a clinical dose-response association (odds ratios for IHD vs. dose/prescriptions) but lacks pharmacokinetic data or formal pharmacodynamic parameters (Emax, EC50) required for PD modeling. |
| popPK | Howell_2009 | irrelevant | 0 | 0 | The study is an in-vitro binding investigation of liposomes and does not report quantitative pharmacokinetic disposition parameters for dosulepin. |
| PD | Howell_2009 | not_relevant | 0 | 0 | The paper describes in vitro binding of drugs to liposomes for overdose treatment and does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for dosulepin. |
| popPK | Kitzlerová_2003 | irrelevant | 0 | 0 | The study investigates the correlation between dosulepine plasma levels and ECG parameters (cardiotoxicity), not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | The study is a mechanistic investigation of adrenergic receptor sensitivity in rat brain tissue and does not report quantitative pharmacokinetic parameters for dosulepin. |
| popPK | Li_1979 | irrelevant | 0 | 0 | The paper describes an HPLC assay for thioxanthene neuroleptics and does not report pharmacokinetic parameters for dosulepin. |
| popPK | Maguire_1981 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dothiepin, not dosulepin. |
| popPK | Maguire_1983 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dothiepin, not dosulepin. |
| popPK | Meert_2010 | irrelevant | 0 | 0 | The paper is a case report focusing on electrocardiographic changes (Brugada-like pattern) and does not report quantitative pharmacokinetic parameters for dosulepin. |
| popPK | Milani_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UGT2B10 substrates and does not report pharmacokinetic parameters for dosulepin. |
| popPK | Moharir_2024 | relevant | 8 | 0 | The paper is a pharmacokinetic study of dosulepin (and deuterated analogs) in animals, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Moharir_2024 | not_relevant | 2 | 1 | The paper reports qualitative improvements in pharmacodynamic behavior (FST/TST) and PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response/dose-response curve for dosulepin. |
| popPK | Ogura_1983 | irrelevant | 0 | 0 | The study investigates dothiepin and amitriptyline, not dosulepin. |
| popPK | Pounder_1994 | irrelevant | 2 | 0 | The study focuses on postmortem redistribution and degradation of dothiepin (a metabolite of dosulepin) rather than reporting quantitative pharmacokinetic parameters (CL, V, etc.) for dosulepin itself. |
| popPK | Presley_2013 | irrelevant | 0 | 0 | The paper is a review of case reports regarding the use of intravenous lipid emulsion for toxicity reversal and does not report pharmacokinetic parameters for dosulepin. |
| PD | Presley_2013 | not_relevant | 0 | 0 | The paper is a review of case reports regarding the use of intravenous lipid emulsion as a rescue therapy for drug toxicity; it does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for dosulepin. |
| popPK | Saito_2020 | irrelevant | 0 | 0 | The paper investigates the chemical degradation of amoxapine (not dosulepin) in artificial gastric juice and does not report pharmacokinetic parameters for dosulepin. |
| popPK | Thanacoody_2005 | irrelevant | 0 | 0 | The paper is a review of cardiovascular toxicity mechanisms and clinical predictors in tricyclic antidepressant poisoning, containing no pharmacokinetic parameters or quantitative disposition data for dosulepin. |
| PD | Thanacoody_2005 | not_relevant | 1 | 0 | The text is a qualitative review of cardiovascular toxicity mechanisms and clinical predictors (ECG changes) without reporting any numeric concentration-effect or dose-response parameters for dosulepin. |
| popPK | Wever_2026 | irrelevant | 0 | 0 | The study is a retrospective analysis of treatment interventions and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for dosulepin, noting that no patients in the cohort used the drug. |
| popPK | Yu_1986 | irrelevant | 0 | 0 | The study investigates dothiepin, not dosulepin, and reports no parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
