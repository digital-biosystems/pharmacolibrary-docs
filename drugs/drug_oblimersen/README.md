<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;oblimersen&quot;}]"></div>

# oblimersen

- **generic name:** oblimersen
- **ATC codes:** `L01XX36`
- **DrugBank:** [DB13811](https://go.drugbank.com/drugs/DB13811) · **PubChem:** none
- **groups:** investigational

## About

Oblimersen is an investigational antisense oligonucleotide drug that was studied as a treatment for melanoma. It has never been approved; a marketing application in the European Union was refused, so it remains experimental.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7075165](https://www.wikidata.org/wiki/Q7075165) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oblimersen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: BCL2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:14 | 1:40 | 0/0/0 | 0/0/0 | 0/0/0 | 59,344/789 | einfracz / qwen3.8-27b | 2 | 0/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 36 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marcucci_2005.pdf` | Marcucci G et al., Phase I study of oblimersen sodium, an…, Journal of clinical oncolog… (2005) | popPK | 9 | [10.1200/JCO.2005.09.118](https://doi.org/10.1200/JCO.2005.09.118) | [15824414](https://pubmed.ncbi.nlm.nih.gov/15824414) | The study reports Phase I PK/PD data for oblimersen in humans, including specific quantitative intracellular concentration values (17.0 vs 4.4 pmol/mg protein), although standard disposition parameters (CL, Vd, t1/2) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-06 21:14 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Advani_2011 | irrelevant | 2 | 0 | The paper is a review of oblimersen in CLL and does not contain original quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided text. |
| popPK | Chiu_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and delivery efficiency study in K562 cells, reporting no pharmacokinetic parameters (CL, V, T1/2) for oblimersen. |
| popPK | Hall_2013 | irrelevant | 0 | 0 | The paper is a review of Bcl-2 inhibitors and does not report quantitative pharmacokinetic parameters for oblimersen. |
| popPK | Marcucci_2003 | irrelevant | 0 | 0 | The paper studies G3139, not oblimersen, and does not report oblimersen PK parameters. |
| popPK | Marcucci_2005 | relevant | 9 | 1 | The study reports Phase I PK/PD data for oblimersen in humans, including specific quantitative intracellular concentration values (17.0 vs 4.4 pmol/mg protein), although standard disposition parameters (CL, Vd, t1/2) are not explicitly listed in the provided text. |
| popPK | Ploumaki_2023 | irrelevant | 0 | 0 | The paper is a clinical review of Bcl-2 inhibitors that mentions oblimersen in the context of trial outcomes (efficacy/toxicity) but does not provide original quantitative pharmacokinetic parameters (CL, V, Q, etc.). |
| popPK | Tarhini_2007 | irrelevant | 0 | 0 | The paper is a review article that summarizes efficacy and general pharmacology without providing original quantitative pharmacokinetic parameter values in the extracted evidence. |
| popPK | Tolcher_2005 | irrelevant | 3 | 1 | The study reports pharmacokinetic-pharmacodynamic correlation using steady-state concentration (Css) but does not provide standard quantitative disposition parameters such as clearance (CL), volume of distribution (V), or half-life. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boblimersen%5D&body=Drug%3A%20oblimersen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oblimersen/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
