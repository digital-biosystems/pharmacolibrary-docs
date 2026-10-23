<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01B&quot;,&quot;href&quot;:&quot;atc/H01B.md&quot;},{&quot;label&quot;:&quot;vasopressin (argipressin)&quot;}]"></div>

# vasopressin (argipressin)

- **generic name:** vasopressin (argipressin)
- **ATC codes:** `H01BA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Argipressin (vasopressin) is a pituitary hormone analogue used as an antidiuretic and vasoconstrictor, for example in diabetes insipidus, bleeding, and certain heart rhythm and postoperative problems. It remains an approved medicine, classified internationally under posterior pituitary lobe hormones, and is used mainly in hospital settings for these serious conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q183011](https://www.wikidata.org/wiki/Q183011) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:19 | 2:03 | 0/0/0 | 0/0/0 | 0/0/0 | 41,567/1,734 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 1172 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
