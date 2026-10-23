<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;veralipride&quot;}]"></div>

# veralipride

- **generic name:** veralipride
- **ATC codes:** `N05AL06`
- **DrugBank:** [DB13523](https://go.drugbank.com/drugs/DB13523) · **PubChem:** none
- **molar mass:** 383.46 g/mol (C17H25N3O5S) — DrugBank
- **groups:** experimental

## About

Veralipride is a benzamide antipsychotic drug. It is not an approved medicine and appears only as an experimental compound, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3564216](https://www.wikidata.org/wiki/Q3564216) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 18:02 | 0:34 | 0/0/0 | 0/0/0 | 0/0/0 | 12,372/371 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Csajka_2005.pdf` | Csajka C et al., The use of a sum of inverse Gaussian fu…, Pharmaceutical research (2005) | popPK | 8 | [10.1007/s11095-005-5266-8](https://doi.org/10.1007/s11095-005-5266-8) | [16078132](https://pubmed.ncbi.nlm.nih.gov/16078132) | Veralipride is a subject drug in a population PK absorption-modeling analysis, but no numeric parameter values appear in the evidence (they reside in the referenced published studies/figures). |
| `Godfrey_2011.pdf` | Godfrey KR et al., Modelling the Double Peak Phenomenon in…, Computer methods and progra… (2011) | popPK | 8 | [10.1016/j.cmpb.2010.03.007](https://doi.org/10.1016/j.cmpb.2010.03.007) | [20381191](https://pubmed.ncbi.nlm.nih.gov/20381191) | Compartmental PK models of veralipride (double-peak absorption) are the subject, but no numeric parameter values appear in the evidence; the data likely live in figures/supplementary material not provided. |
| `Plusquellec_1994.pdf` | Plusquellec Y et al., Pharmacokinetic compartmental model wit…, Arzneimittel-Forschung (1994) | popPK | 5 |  | [8024648](https://pubmed.ncbi.nlm.nih.gov/8024648) | A compartmental absorption model for veralipride is presented, but only simulated curves are given; no numeric PK parameter values appear in the evidence. |

<sub>queue written 2026-10-06 18:02 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Csajka_2005 | relevant | 8 | 2 | Veralipride is a subject drug in a population PK absorption-modeling analysis, but no numeric parameter values appear in the evidence (they reside in the referenced published studies/figures). |
| popPK | Godfrey_2011 | relevant | 8 | 1 | Compartmental PK models of veralipride (double-peak absorption) are the subject, but no numeric parameter values appear in the evidence; the data likely live in figures/supplementary material not provided. |
| popPK | Plusquellec_1994 | relevant | 5 | 2 | A compartmental absorption model for veralipride is presented, but only simulated curves are given; no numeric PK parameter values appear in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bveralipride%5D&body=Drug%3A%20veralipride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_veralipride/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
