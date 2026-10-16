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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:10 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 17,040/557 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huupponen_1992.pdf` | Huupponen R et al., The effect of some macromolecular ionic…, Journal of ocular pharmacol… (1992) | popPK | 9 | [10.1089/jop.1992.8.59](https://doi.org/10.1089/jop.1992.8.59) | [1402295](https://pubmed.ncbi.nlm.nih.gov/1402295) | The study reports PK/PD of cyclopentolate in rabbits, but the provided text only contains qualitative findings (increased mydriatic effect, 3-fold increase in ocular penetration) without specific numeric PK parameters (CL, V, t1/2, etc.). |
| `Ishikawa_1998.pdf` | Ishikawa H et al., Selectivity of muscarinic agonists incl…, Journal of ocular pharmacol… (1998) | pd | 4 | [10.1089/jop.1998.14.363](https://doi.org/10.1089/jop.1998.14.363) | [9715440](https://www.ncbi.nlm.nih.gov/pubmed/9715440) | metadata signals extractable PD data (EC50) |
| `Qi_2005.pdf` | Qi L et al., Quantitative determination of pharmaceu…, Journal of pharmaceutical a… (2005) | pd | 4 | [10.1016/j.jpba.2004.09.023](https://doi.org/10.1016/j.jpba.2004.09.023) | [15708661](https://www.ncbi.nlm.nih.gov/pubmed/15708661) | metadata signals extractable PD data (concentrationeffect) |

<sub>queue written 2026-10-07T19:10:12.958584+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bryant_2009 | irrelevant | 0 | 0 | This is a toxicity/pharmacodynamic study assessing survivability in rats, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Huupponen_1992 | relevant | 9 | 0 | The study reports PK/PD of cyclopentolate in rabbits, but the provided text only contains qualitative findings (increased mydriatic effect, 3-fold increase in ocular penetration) without specific numeric PK parameters (CL, V, t1/2, etc.). |
| popPK | Ishikawa_1998 | irrelevant | 0 | 0 | The study reports pKB values for muscarinic receptors in human intraocular tissues, which is a pharmacodynamic/receptor binding study, not a pharmacokinetic study of cyclopentolate. |
| popPK | Lovasik_1986 | irrelevant | 1 | 0 | The study measures the pharmacodynamic effect (accommodative loss/cycloplegia) rather than quantifying pharmacokinetic parameters like clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
