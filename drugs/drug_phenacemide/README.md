<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;phenacemide&quot;}]"></div>

# phenacemide

- **generic name:** phenacemide
- **ATC codes:** `N03AX07`
- **DrugBank:** [DB01121](https://go.drugbank.com/drugs/DB01121) · **PubChem:** [CID 4753](https://pubchem.ncbi.nlm.nih.gov/compound/4753)
- **molar mass:** 178.1879 g/mol (C9H10N2O2) — DrugBank
- **groups:** approved

## About

Phenacemide is an antiepileptic drug used to treat complex partial seizures. It is classified among other antiepileptics, and it has been described as a developmental toxicant, though the available facts do not state whether it remains in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3742404](https://www.wikidata.org/wiki/Q3742404) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:18 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 5,242/261 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pranzatelli_1988.pdf` | Pranzatelli MR, Effect of antiepileptic and antimyoclon…, Epilepsia (1988) | pd | 4 | [10.1111/j.1528-1157.1988.tb03740.x](https://doi.org/10.1111/j.1528-1157.1988.tb03740.x) | [2839332](https://www.ncbi.nlm.nih.gov/pubmed/2839332) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T07:18:01.919260+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cahen_1994 | irrelevant | 1 | 0 | The study focuses on a pharmacodynamic interference (creatinine metabolism) rather than characterizing the population-pharmacokinetic parameters (CL, V, t1/2) of phenacemide itself. |
| PD | Cahen_1994 | not_relevant | 2 | 1 | The paper reports a qualitative dose-dependent inhibition in an in vitro assay and case observations, but provides no numeric PD parameters (e.g., IC50, Emax) or quantitative concentration-effect curve data. |
| popPK | Duggan_1986 | irrelevant | 0 | 0 | The paper reports clinical observations of elevated serum creatinine (renal function markers) rather than pharmacokinetic parameters (CL, V, t1/2) for phenacemide itself. |
| popPK | Fabro_1982 | irrelevant | 0 | 0 | The study is a teratogenicity risk assessment in mice proposing a "Relative Teratogenic Index" based on lethal and teratogenic doses, not a pharmacokinetic study, and reports no disposition parameters like clearance or volume for phenacemide. |
| popPK | Pranzatelli_1988 | irrelevant | 0 | 0 | The paper is an in-vitro study on serotonin receptors, not a pharmacokinetic study reporting quantitative disposition parameters for phenacemide. |
| PD | Pranzatelli_1988 | not_relevant | 0 | 0 | The paper focuses on in vitro receptor binding and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for phenacemide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
