<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;centhaquine&quot;}]"></div>

# centhaquine

- **generic name:** centhaquine
- **ATC codes:** `C01CA28`
- **DrugBank:** [DB16122](https://go.drugbank.com/drugs/DB16122) · **PubChem:** not captured
- **molar mass:** 331.463 g/mol (C22H25N3) — DrugBank
- **groups:** investigational

## About

Centhaquine is an adrenergic agent classified under cardiac therapy, suggesting use as a cardiac stimulant in cardiovascular conditions. It remains investigational and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q83080535](https://www.wikidata.org/wiki/Q83080535) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:33 | 1:27 | 0/0/0 | 0/0/0 | 0/0/0 | 50,307/1,932 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/8 | 3/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals related to obesity and diabetes, and does not contain pharmacokinetic data for centhaquine. |
| PD | Auerbach_2016 | not_relevant | 0 | 0 | The paper is a high-throughput screening review using ToxCast data to prioritize environmental chemicals for obesity/diabetes research; it does not report pharmacodynamic modeling or specific exposure-response parameters for centhaquine. |
| popPK | Courlet_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cabamiquine, not centhaquine. |
| popPK | Dardano_2026 | irrelevant | 0 | 0 | The paper is a review on antioxidants, microbiota, and epilepsy, with no mention of centhaquine or its pharmacokinetics. |
| PD | Dardano_2026 | not_relevant | 0 | 0 | The paper is a review on gut microbiota, antioxidants, and epilepsy, and does not mention centhaquine or report any pharmacodynamic or exposure-response data. |
| popPK | Dreyer_2019 | irrelevant | 0 | 0 | The paper studies the effect of fipronil and ivermectin on mosquitoes, not the pharmacokinetics of centhaquine. |
| PD | Dreyer_2019 | not_relevant | 0 | 0 | The paper investigates the effect of fipronil and ivermectin on mosquitoes, not centhaquine, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Fosse_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketoprofen in piglets, not centhaquine. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a clinical study on Peg-IFN α-2b for chronic hepatitis B and does not involve the drug centhaquine or any pharmacokinetic parameters. |
| popPK | Phee_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of colistin and fusidic acid in an in vitro system, not centhaquine. |
| popPK | Shen_2024 | irrelevant | 0 | 0 | The paper describes a multi-omics microsampling methodology for health profiling and does not report pharmacokinetic parameters for centhaquine. |
| PD | Shen_2024 | not_relevant | 0 | 0 | The paper focuses on multi-omics microsampling for health profiling and does not mention centhaquine or report any pharmacodynamic or exposure-response relationships. |
| popPK | Sugita_1992 | irrelevant | 0 | 0 | The paper describes an enzymatic assay for creatinine and reports creatinine clearance reference values, but does not study the drug centhaquine or its pharmacokinetics. |
| popPK | Vossen_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of doripenem, not centhaquine. |
| PD | Vossen_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of doripenem (not centhaquine) and does not report any pharmacodynamic or exposure-response relationship. |
| popPK | Woodall_2025 | irrelevant | 0 | 0 | The paper describes an in vitro antiviral assay for SARS-CoV-2 and does not involve the drug centhaquine or any pharmacokinetic parameters. |
| PD | Woodall_2025 | not_relevant | 0 | 0 | The paper does not mention or report any data for centhaquine; it focuses on SARS-CoV-2 antivirals (remdesivir, nirmatrelvir, etc.). |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of centhaquine pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
