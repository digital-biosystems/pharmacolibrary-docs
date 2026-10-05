<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;sulglicotide&quot;}]"></div>

# sulglicotide

- **generic name:** sulglicotide
- **ATC codes:** `A02BX08`
- **DrugBank:** [DB13299](https://go.drugbank.com/drugs/DB13299) · **PubChem:** not captured
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 11:43 | 1:23 | 0/0/0 | 0/0/0 | 0/0/0 | 48,669/1,592 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Omary_2017 | irrelevant | 0 | 0 | The paper is about Gliclazide, a different drug, not sulglicotide. |
| popPK | Aoki_1991 | irrelevant | 0 | 0 | The paper studies endogenous insulin secretion in diabetes patients and does not involve sulglicotide or its pharmacokinetics. |
| popPK | Barzilai_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of glipizide on insulin clearance, not the pharmacokinetics of sulglicotide. |
| popPK | Bray_2006 | irrelevant | 0 | 0 | The paper is a review of exenatide, not sulglicotide, and contains no data for the target drug. |
| popPK | Folick_2022 | irrelevant | 0 | 0 | The paper is a case report regarding glipizide-induced hypoglycemia and does not contain any data or parameters for sulglicotide. |
| popPK | Füsgen_1980 | irrelevant | 0 | 0 | The paper discusses sulfonylureas (a different drug class) and does not mention sulglicotide or provide any pharmacokinetic parameters for it. |
| popPK | Groop_1987 | irrelevant | 0 | 0 | The study investigates glyburide and glipizide, not sulglicotide. |
| popPK | Gupta_2011 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors (gliptins) for diabetes and does not mention sulglicotide or provide any pharmacokinetic parameters for it. |
| popPK | Halas_2001 | irrelevant | 0 | 0 | The paper is a review of nateglinide, a different drug, and does not contain data for sulglicotide. |
| popPK | Ju_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of glimepiride, not sulglicotide. |
| popPK | Kharade_2019 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of VU0071063, not sulglicotide. |
| popPK | Melander_1983 | irrelevant | 0 | 0 | The paper reviews the clinical pharmacology of glipizide and other sulfonylureas, not sulglicotide. |
| popPK | Moeez_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin, not sulglicotide. |
| popPK | Morini_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastro-protective effects in rats and does not report any pharmacokinetic parameters for sulglicotide. |
| popPK | Natale_2024 | irrelevant | 0 | 0 | The paper is a systematic review of SGLT2 inhibitors for CKD and diabetes and does not mention sulglicotide or report any pharmacokinetic parameters for it. |
| popPK | Niemi_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glyburide and glipizide, not sulglicotide. |
| popPK | Niemi_2001_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glimepiride, not sulglicotide. |
| popPK | Niemi_2003 | irrelevant | 0 | 0 | The paper is a review of rifampicin's pharmacokinetic interactions and does not mention sulglicotide or provide any PK parameters for it. |
| popPK | Park_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gliclazide, not sulglicotide. |
| popPK | Pearson_1985 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for glyburide, not sulglicotide. |
| popPK | Reid_1995 | irrelevant | 0 | 0 | The study investigates cerebral blood flow regulation in rats using L-NMMA, cromakalim, and glibenclamide, and does not involve sulglicotide or its pharmacokinetics. |
| popPK | Sener_1995 | irrelevant | 0 | 0 | The paper describes an assay method for sulfonylureas (glibenclamide, gliquidone, glipizide, gliclazide) and does not involve sulglicotide. |
| popPK | Skillman_1981 | irrelevant | 0 | 0 | The paper is a review of sulfonylureas (e.g., tolbutamide, glyburide) and does not mention sulglicotide or provide any pharmacokinetic parameters for it. |
| popPK | Srinivasan_2018 | irrelevant | 0 | 0 | The paper is a review of pharmacogenetics for antidiabetic drugs and does not mention sulglicotide or report any pharmacokinetic parameters. |
| popPK | Szkudlarek_2017 | irrelevant | 0 | 0 | The paper investigates the in vitro binding of tolbutamide and losartan to human serum albumin and does not mention sulglicotide or report any pharmacokinetic parameters for it. |
| popPK | Yamazaki_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glimepiride, not sulglicotide. |
| popPK | Young_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of albiglutide, not sulglicotide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
