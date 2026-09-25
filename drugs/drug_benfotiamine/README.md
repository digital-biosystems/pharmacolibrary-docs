<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11D&quot;,&quot;href&quot;:&quot;atc/A11D.md&quot;},{&quot;label&quot;:&quot;benfotiamine&quot;}]"></div>

# benfotiamine

- **generic name:** benfotiamine
- **ATC codes:** `A11DA03`
- **DrugBank:** [DB11748](https://go.drugbank.com/drugs/DB11748)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Benfotiamine has been investigated for the treatment and prevention of Diabetic Nephropathy and Diabetes Mellitus, Type 2.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 03:51 | 13:24 | 0/0/0 | 0/0/0 | 0/0/0 | 84,973/9,614 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 5/9 | 13/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xie_2014.pdf` | Xie F et al., Pharmacokinetic study of benfotiamine a…, Journal of clinical pharmac… (2014) | popPK | 9 | [10.1002/jcph.261](https://doi.org/10.1002/jcph.261) | [24399744](https://pubmed.ncbi.nlm.nih.gov/24399744) | The paper is a PK study of benfotiamine reporting a one-compartment model, but the specific numeric disposition parameters (CL, V, ka) are not present in the provided text, which only lists bioavailability percentages. |

<sub>queue written 2026-09-16T03:50:29.743454+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Avakumov_1976 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| popPK | Babaei-Jadidi_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of dyslipidaemia and metabolic markers in rats, not a pharmacokinetic study, and reports no quantitative disposition parameters (CL, V, ka, etc.) for benfotiamine. |
| PD | Bashir_2024 | not_relevant | 2 | 1 | The study reports qualitative dose-response trends (100 vs 200 mg/kg) and behavioral improvements but lacks concentration data or numeric PD parameters (Emax, EC50) required for an extractable exposure-response relationship. |
| popPK | Beltramo_2021 | irrelevant | 0 | 0 | The paper is a narrative review discussing the therapeutic mechanisms and clinical history of thiamine and benfotiamine in diabetes, without reporting any original quantitative pharmacokinetic parameters. |
| PD | Beltramo_2021 | not_relevant | 1 | 0 | The paper is a narrative review discussing the history and mechanisms of thiamine/benfotiamine in diabetes, containing no original PK/PD data, dose-response curves, or numeric PD parameters. |
| popPK | Bitsch_1991 | irrelevant | 2 | 0 | The study reports bioavailability metrics (AUC, Cmax) and efficacy data but does not provide quantitative compartmental PK parameters (CL, V, ka) or a population PK model for benfotiamine. |
| popPK | Bozic_2023 | irrelevant | 0 | 0 | The paper is a review focusing on therapeutic potential and neuroprotective effects, with no quantitative pharmacokinetic parameters reported. |
| popPK | Bunik_2023 | irrelevant | 0 | 0 | The paper is an editorial discussing the mechanisms of thiamine/benfotiamine in Alzheimer's disease and cancer metabolism, containing no pharmacokinetic data or quantitative disposition parameters. |
| PD | Bykov_2022 | not_relevant | 0 | 0 | The paper is a review of sulbutiamine and does not report any quantitative pharmacodynamic or exposure-response data for benfotiamine. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on d-ribose and HbA1c where benfotiamine is used only as a therapeutic agent to lower d-ribose levels, with no pharmacokinetic parameters reported. |
| popPK | Erdogan_2020 | irrelevant | 0 | 0 | The study is a mechanistic investigation of oxidative stress and histopathology in rats, reporting no pharmacokinetic parameters for benfotiamine. |
| popPK | Eskandari_2022 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study of benfotiamine as a potential SARS-CoV-2 inhibitor and contains no pharmacokinetic data or disposition parameters. |
| popPK | FUKUI_1962 | irrelevant | 0 | 0 | The study investigates the biological activity of S-benzoylthiamine monophosphate (BTMP) in yeast, not the pharmacokinetics of benfotiamine in humans or animals. |
| PD | Fung_2013 | not_relevant | 0 | 0 | The paper explicitly states that benfotiamine did not interfere with the effect of hepcidin on ferroportin, and no PD parameters are reported for it. |
| PD | Gholami_2025 | not_relevant | 3 | 2 | The study reports group-level mean effects for two fixed doses (100 and 200 mg/kg) without measuring drug concentrations or fitting a dose-response model, making it impossible to derive specific PD parameters like Emax or EC50. |
| popPK | Gibson_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for Alzheimer's disease and does not report pharmacokinetic parameters (CL, V, ka, etc.) for benfotiamine. |
| popPK | Hanawa_1995 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding benfotiamine pharmacokinetics. |
| PD | Hanawa_1995 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding benfotiamine or pharmacodynamics. |
| popPK | Higaki_2025 | irrelevant | 0 | 0 | The study is a retrospective observational analysis of vitamin B1 levels and cognitive scores in Alzheimer's patients, containing no pharmacokinetic data or disposition parameters for benfotiamine. |
| popPK | Javed_2015 | irrelevant | 0 | 0 | The paper is a review of treatments for painful diabetic neuropathy and mentions benfotiamine only as a pathogenetic treatment candidate without reporting any pharmacokinetic parameters. |
| popPK | Karpov_1986 | irrelevant | 0 | 0 | The study investigates benzoylthiamine monophosphate, not benfotiamine, and reports qualitative distribution/excretion observations without quantitative PK parameters. |
| popPK | Kolomoĭskaia_1989 | irrelevant | 0 | 0 | The paper is a clinical study on myocardial contractile function and hemodynamics, not a pharmacokinetic study, and contains no PK parameters for benfotiamine. |
| popPK | Laskova_1995 | irrelevant | 0 | 0 | The paper discusses immunomodulating effects and physical fitness in rats, containing no pharmacokinetic parameters or quantitative disposition data for benfotiamine. |
| popPK | Masson_1966 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| popPK | Obrenovich_2003 | irrelevant | 0 | 0 | The text is a mechanistic summary of a study on metabolic pathways in diabetic rats and contains no quantitative pharmacokinetic parameters for benfotiamine. |
| PD | Parlak_2024 | not_relevant | 2 | 1 | The study is a qualitative toxicology experiment comparing fixed doses of benfotiamine and cyfluthrin in rats, reporting histological and sperm quality outcomes without any concentration-effect modeling, PK/PD fitting, or derivation of numeric PD parameters like Emax or EC50. |
| popPK | Rabbani_2011 | irrelevant | 0 | 0 | The paper is a review discussing the role of thiamine and benfotiamine in diabetic nephropathy without reporting any quantitative pharmacokinetic parameters or original disposition data. |
| popPK | Raval_2015 | irrelevant | 0 | 0 | This is a systematic review of clinical outcomes for diabetic kidney disease, not a pharmacokinetic study, and it contains no quantitative PK parameters for benfotiamine. |
| popPK | SAMPEREZ_1965 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| popPK | Strekalova_2025 | irrelevant | 0 | 0 | The study is a behavioral and mechanistic investigation of oxidative stress and inflammation in a mouse model, reporting no pharmacokinetic parameters for benfotiamine. |
| popPK | Takekawa_2023 | irrelevant | 0 | 0 | The paper is a clinical case report on headache treatment where benfotiamine is merely a co-administered supplement, and it contains no pharmacokinetic data or disposition parameters. |
| popPK | Várkonyi_2017 | irrelevant | 0 | 0 | The paper is a review of therapeutic management for diabetic neuropathy and does not report any quantitative pharmacokinetic parameters for benfotiamine. |
| PD | Winkler_1999 | not_relevant | 3 | 1 | The paper reports a clinical dose-comparison study with qualitative efficacy conclusions but provides no numeric concentration-effect data, PK parameters, or derivable PD model parameters (e.g., Emax, EC50). |
| popPK | Xie_2014 | relevant | 9 | 2 | The paper is a PK study of benfotiamine reporting a one-compartment model, but the specific numeric disposition parameters (CL, V, ka) are not present in the provided text, which only lists bioavailability percentages. |
| popPK | Yako_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell viability and metabolism where benfotiamine is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zaheer_2021 | irrelevant | 0 | 0 | The paper is a review of treatment options for diabetic polyneuropathy and does not report any pharmacokinetic parameters for benfotiamine. |
| popPK | Ziegler_2021 | irrelevant | 0 | 0 | The paper is a clinical review of diabetic polyneuropathy management that mentions benfotiamine as a therapeutic agent but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Ziegler_2022 | irrelevant | 0 | 0 | The paper is a clinical consensus guideline for diabetic neuropathy management and does not contain any pharmacokinetic data or quantitative disposition parameters for benfotiamine. |
| popPK | Ziegler_2022_2 | irrelevant | 0 | 0 | The paper is a review discussing the role of biofactors like benfotiamine in diabetic complications and does not report any quantitative pharmacokinetic parameters. |
| popPK | Ziegler_2023 | irrelevant | 0 | 0 | The paper is a review of pathogenetic treatments for diabetic peripheral neuropathy and does not report any quantitative pharmacokinetic parameters for benfotiamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
