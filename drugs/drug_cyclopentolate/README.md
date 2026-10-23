<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01F&quot;,&quot;href&quot;:&quot;atc/S01F.md&quot;},{&quot;label&quot;:&quot;cyclopentolate&quot;}]"></div>

# cyclopentolate

- **generic name:** cyclopentolate
- **ATC codes:** `S01FA04`
- **DrugBank:** [DB00979](https://go.drugbank.com/drugs/DB00979) · **PubChem:** [CID 2905](https://pubchem.ncbi.nlm.nih.gov/compound/2905)
- **molar mass:** 291.3853 g/mol (C17H25NO3) — DrugBank
- **groups:** approved

## About

Cyclopentolate is an anticholinergic eye drop used as a mydriatic and cycloplegic, for example to dilate the pupil before eye examinations. It is an approved medicine and is widely used in ophthalmic practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q867332](https://www.wikidata.org/wiki/Q867332) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cyclopentolate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:10 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 17,040/557 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huupponen_1992.pdf` | Huupponen R et al., The effect of some macromolecular ionic…, Journal of ocular pharmacol… (1992) | popPK | 9 | [10.1089/jop.1992.8.59](https://doi.org/10.1089/jop.1992.8.59) | [1402295](https://pubmed.ncbi.nlm.nih.gov/1402295) | The study reports PK/PD of cyclopentolate in rabbits, but the provided text only contains qualitative findings (increased mydriatic effect, 3-fold increase in ocular penetration) without specific numeric PK parameters (CL, V, t1/2, etc.). |
| `Ishikawa_1998.pdf` | Ishikawa H et al., Selectivity of muscarinic agonists incl…, Journal of ocular pharmacol… (1998) | pd | 4 | [10.1089/jop.1998.14.363](https://doi.org/10.1089/jop.1998.14.363) | [9715440](https://www.ncbi.nlm.nih.gov/pubmed/9715440) | metadata signals extractable PD data (EC50) |
| `Qi_2005.pdf` | Qi L et al., Quantitative determination of pharmaceu…, Journal of pharmaceutical a… (2005) | pd | 4 | [10.1016/j.jpba.2004.09.023](https://doi.org/10.1016/j.jpba.2004.09.023) | [15708661](https://www.ncbi.nlm.nih.gov/pubmed/15708661) | metadata signals extractable PD data (concentrationeffect) |

<sub>queue written 2026-10-07 19:10 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bryant_2009 | irrelevant | 0 | 0 | This is a toxicity/pharmacodynamic study assessing survivability in rats, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Huupponen_1992 | relevant | 9 | 0 | The study reports PK/PD of cyclopentolate in rabbits, but the provided text only contains qualitative findings (increased mydriatic effect, 3-fold increase in ocular penetration) without specific numeric PK parameters (CL, V, t1/2, etc.). |
| popPK | Ishikawa_1998 | irrelevant | 0 | 0 | The study reports pKB values for muscarinic receptors in human intraocular tissues, which is a pharmacodynamic/receptor binding study, not a pharmacokinetic study of cyclopentolate. |
| popPK | Lovasik_1986 | irrelevant | 1 | 0 | The study measures the pharmacodynamic effect (accommodative loss/cycloplegia) rather than quantifying pharmacokinetic parameters like clearance or volume of distribution. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyclopentolate%5D&body=Drug%3A%20cyclopentolate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cyclopentolate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
