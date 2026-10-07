<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01B&quot;,&quot;href&quot;:&quot;atc/H01B.md&quot;},{&quot;label&quot;:&quot;vasopressin (argipressin)&quot;}]"></div>

# vasopressin (argipressin)

- **generic name:** vasopressin (argipressin)
- **ATC codes:** `H01BA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Argipressin (vasopressin) is a pituitary hormone analogue used as an antidiuretic and vasoconstrictor, for example in diabetes insipidus, bleeding, and certain heart rhythm and postoperative problems. It remains an approved medicine, classified internationally under posterior pituitary lobe hormones, and is used mainly in hospital settings for these serious conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q183011](https://www.wikidata.org/wiki/Q183011) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:19 | 2:03 | 0/0/0 | 0/0/0 | 0/0/0 | 41,567/1,734 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1172 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Share_1985.pdf` | Share L et al., Metabolism of vasopressin, Federation proceedings (1985) | popPK | 9 | not captured | [3967770](https://pubmed.ncbi.nlm.nih.gov/3967770) | The paper reports quantitative clearance parameters (urinary, renal organ, splanchnic) for vasopressin in dogs. |

<sub>queue written 2026-10-07T09:19:00.497475+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allan_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of moxonidine in rats and mentions vasopressin only as a receptor antagonist for comparison, providing no pharmacokinetic parameters for vasopressin. |
| popPK | Berl_1973 | irrelevant | 0 | 0 | The study investigates the renal physiological effects of prostaglandin E1 (PGE1) on water excretion and hemodynamics in dogs, where vasopressin is only implicated as a mediator of the antidiuretic response, not the subject of pharmacokinetic analysis. |
| popPK | Bora_2016 | irrelevant | 0 | 0 | The paper is a review on the renal effects of MDMA, where vasopressin (AVP) is discussed as an endogenous hormone involved in the mechanism of hyponatremia, not as the subject drug for PK parameter estimation. |
| popPK | Casadevall_1992 | irrelevant | 0 | 0 | The study focuses on gastric blood flow measurement techniques in rats using vasopressin only as a pharmacological agent to induce vasoconstriction, reporting no pharmacokinetic parameters. |
| popPK | Dabrowski_2016 | irrelevant | 0 | 0 | The paper is a review of clinical management in pediatrics and contains no pharmacokinetic parameter estimates. |
| popPK | Daniel_1978 | irrelevant | 0 | 0 | The study measures plasma vasopressin concentrations as a physiological response to occlusion, not as a pharmacokinetic subject drug with disposition parameters (CL, V, etc.). |
| popPK | Danielsen_1986 | irrelevant | 0 | 0 | The study measures plasma concentrations of arginine vasopressin as a diagnostic/endocrine marker in kidney disease patients, but does not report pharmacokinetic disposition parameters (clearance, volume, half-life) resulting from exogenous dosing of argipressin. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The study is a neurobiological mechanistic study on microglia and astrocytes in rats, not a pharmacokinetic study of vasopressin/argipressin. |
| popPK | Hwang_2010 | irrelevant | 0 | 0 | The paper is a clinical review of thiazide-induced hyponatremia mechanisms and does not report pharmacokinetic parameters for vasopressin. |
| popPK | Ingbar_2019 | irrelevant | 0 | 0 | The paper is a review of the pathophysiology and treatment of cardiogenic pulmonary edema and does not contain pharmacokinetic data for vasopressin_argipressin. |
| popPK | Ray_1985 | irrelevant | 0 | 0 | The study investigates the renal physiological response to vasopressin administration in rats, not the pharmacokinetic disposition parameters (clearance, volume, etc.) of vasopressin itself. |
| popPK | Roberts_2023 | irrelevant | 0 | 0 | The study measures plasma arginine-vasopressin (AVP) as a biomarker to assess physiological regulation of water balance in children, not the pharmacokinetic disposition parameters (CL, V, t1/2) of exogenous vasopressin as a drug. |
| popPK | Russell_2010 | irrelevant | 0 | 0 | The paper is a narrative review of vasopressin's immune and physiological effects in septic shock and does not report quantitative pharmacokinetic parameters (CL, V, half-life, etc.) for vasopressin. |
| popPK | Smithline_1976 | irrelevant | 0 | 0 | The paper reports renal tubular dysfunction and fluid clearance in a nephropathy case, using vasopressin only as a diagnostic agent, with no pharmacokinetic parameters for the drug itself. |
| popPK | Stoff_1981 | irrelevant | 0 | 0 | The study investigates renal physiology and prostaglandin regulation of water excretion, not the pharmacokinetics or disposition of vasopressin. |
| popPK | Thompson_1977 | irrelevant | 0 | 0 | This is a clinical pharmacodynamics study of clofibrate and chlorpropamide in patients with diabetes insipidus, not a pharmacokinetic study of vasopressin/argipressin; no PK parameters for vasopressin are reported. |
| popPK | Walter_2007 | irrelevant | 0 | 0 | The paper is a review of conivaptan (a vasopressin antagonist) and does not report pharmacokinetic parameters for vasopressin or argipressin. |
| popPK | Ziegler_2018 | irrelevant | 0 | 0 | The paper is a review of measurement methodologies for oxytocin and vasopressin in nonhuman primates, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, half-life) for vasopressin/argipressin as a drug. |
| popPK | de_2002 | irrelevant | 0 | 0 | The paper is a narrative review of vasopressin antagonists in heart failure and does not report quantitative pharmacokinetic parameters for vasopressin or argipressin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
