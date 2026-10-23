<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;teprenone&quot;}]"></div>

# teprenone

- **generic name:** teprenone
- **ATC codes:** `A02BX15`
- **DrugBank:** [DB15955](https://go.drugbank.com/drugs/DB15955) · **PubChem:** not captured
- **molar mass:** 330.556 g/mol (C23H38O) — DrugBank
- **groups:** investigational

## About

Teprenone is an anti-ulcer agent classified among other drugs for peptic ulcer and acid-related disorders. It is considered investigational in major Western databases and is not authorised in the European Union; it has been used mainly in Japan for gastric complaints.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72509552](https://www.wikidata.org/wiki/Q72509552) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-04 12:00 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 24,120/602 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ding_2007.pdf` | Ding L et al., HPLC-APCI-MS for the determination of t…, Journal of pharmaceutical a… (2007) | popPK | 8 | [10.1016/j.jpba.2007.03.021](https://doi.org/10.1016/j.jpba.2007.03.021) | [17482416](https://pubmed.ncbi.nlm.nih.gov/17482416) | The study reports quantitative pharmacokinetic parameters (Cmax, t1/2, Tmax) for teprenone in human plasma, though clearance and volume of distribution are not explicitly listed. |
| `Harada_1994.pdf` | Harada Y et al., Receptor binding profiles of KB-5492, a…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90558-4](https://doi.org/10.1016/0014-2999(94)90558-4) | [8045277](https://www.ncbi.nlm.nih.gov/pubmed/8045277) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T12:00:01.068980+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bocchini_2016 | irrelevant | 0 | 0 | The paper investigates STAT3 protein stability and function in AD-HIES, not the pharmacokinetics of teprenone. |
| PGx | Bocchini_2016 | not_relevant | 0 | 0 | The paper investigates the effect of chaperone modulators on STAT3 mutations in hyper-IgE syndrome and does not mention teprenone. |
| popPK | Harada_1994 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Harada_1994 | not_relevant | 0 | 0 | The paper focuses on the receptor binding profile of KB-5492, not teprenone, and does not report pharmacodynamic exposure-response or dose-response relationships for teprenone. |
| popPK | Iwakiri_2014 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of rabeprazole versus teprenone for peptic ulcer prevention, with no pharmacokinetic parameters reported for teprenone. |
| PD | Iwakiri_2014 | not_relevant | 0 | 0 | The paper is a clinical trial comparing rabeprazole and teprenone for ulcer prevention; it reports clinical efficacy rates but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters for teprenone. |
| popPK | Otani_2020 | irrelevant | 0 | 0 | The paper investigates the pharmacology and degradation of the MCT9 transporter in HEK293 cells and does not report pharmacokinetic parameters for teprenone. |
| popPK | Seno_1995 | irrelevant | 0 | 0 | The study investigates the role of gastric mucus in ischemia/reperfusion injury using tetraprenyl acetone (TPA) as a mucus stimulant, not teprenone, and does not report pharmacokinetic parameters. |
| popPK | Song_2008 | irrelevant | 0 | 0 | Teprenone is used only as an internal standard for the quantification of vitamin K1, not as the subject drug for pharmacokinetic analysis. |
| popPK | Sun_2017 | irrelevant | 0 | 0 | The study investigates the effects of geranylgeranylacetone (GGA) on Alzheimer's disease phenotypes in mice and does not involve teprenone or report any pharmacokinetic parameters for it. |
| popPK | Yue_2018 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of GDNF and geranylgeranylacetone (GGA) in a Parkinson's disease model and does not involve teprenone or report any pharmacokinetic parameters. |
| PD | Yue_2018 | not_relevant | 0 | 0 | The paper studies GDNF and geranylgeranylacetone (GGA), not teprenone, and reports qualitative/semi-quantitative efficacy data without exposure-response modeling or numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
