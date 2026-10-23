<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;sonidegib&quot;}]"></div>

# sonidegib

- **generic name:** sonidegib
- **ATC codes:** `L01XJ02`
- **DrugBank:** [DB09143](https://go.drugbank.com/drugs/DB09143) · **PubChem:** [CID 24775005](https://pubchem.ncbi.nlm.nih.gov/compound/24775005)
- **molar mass:** 485.507 g/mol (C26H26F3N3O3) — DrugBank
- **groups:** approved, investigational

## About

Sonidegib is a hedgehog pathway inhibitor used to treat basal-cell carcinoma of the skin. It is authorised in the European Union and is an approved cancer medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22075856](https://www.wikidata.org/wiki/Q22075856) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sonidegib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SMO (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:41 | 0:10 | 0/0/0 | 0/0/0 | 0/0/0 | 6,104/266 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Deng_2018.pdf` | Deng J et al., To Take or Not to Take With Meals? Unra…, Clinical pharmacology in dr… (2018) | popPK | 5 | [10.1002/cpdd.416](https://doi.org/10.1002/cpdd.416) | [29197167](https://pubmed.ncbi.nlm.nih.gov/29197167) | The paper discusses sonidegib in a case study regarding food effects but does not provide the specific numeric population pharmacokinetic parameter values (CL, V, etc.) in the extracted evidence. |

<sub>queue written 2026-10-06T21:41:46.665229+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Deng_2018 | irrelevant | 5 | 0 | The paper discusses sonidegib in a case study regarding food effects but does not provide the specific numeric population pharmacokinetic parameter values (CL, V, etc.) in the extracted evidence. |
| popPK | Goel_2016 | irrelevant | 1 | 0 | The provided evidence consists of garbled characters and a fragment of a figure caption that lacks any readable text, context, or quantitative pharmacokinetic parameters for sonidegib. |
| popPK | Zhou_2016 | irrelevant | 0 | 0 | The paper is an exposure-response analysis using plasma concentration data (Cmin, Cmax, AUC) for efficacy and safety, but it does not report quantitative pharmacokinetic disposition parameters (CL, V, Q, ka, t1/2) or a compartmental/population-PK model. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
