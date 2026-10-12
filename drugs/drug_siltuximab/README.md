<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;siltuximab&quot;}]"></div>

# siltuximab

- **generic name:** siltuximab
- **ATC codes:** `L04AC11`
- **DrugBank:** [DB09036](https://go.drugbank.com/drugs/DB09036) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Siltuximab, a monoclonal antibody, is used to treat Castleman's disease (giant lymph node hyperplasia). It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3960572](https://www.wikidata.org/wiki/Q3960572) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:33 | 0:28 | 0/0/0 | 0/1/0 | 0/0/0 | 6,374/481 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Puchalski_2010_CRP](drugs/drug_siltuximab/pd_Puchalski_2010_CRP.md) | C-reactive protein ← siltuximab · indirect response — drug inhibits the production of C-reactive protein | — | Puchalski T et al., Pharmacokinetic and pharmacodynamic mod…, Clinical cancer research :… (2010) | [10.1158/1078-0432.CCR-09-2581](https://doi.org/10.1158/1078-0432.CCR-09-2581) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nikanjam_2019.pdf` | Nikanjam M et al., Population pharmacokinetics of siltuxim…, Cancer chemotherapy and pha… (2019) | popPK | 10 | [10.1007/s00280-019-03939-7](https://doi.org/10.1007/s00280-019-03939-7) | [31482226](https://pubmed.ncbi.nlm.nih.gov/31482226) | The paper reports a population PK model for siltuximab with specific quantitative values for half-life and qualitative ranges for clearance covariates, but specific numeric values for CL, V, and Q are not explicitly listed in the provided abstract text. |
| `Mayer_2015.pdf` | Mayer CL et al., Dose selection of siltuximab for multic…, Cancer chemotherapy and pha… (2015) | popPK | 9 | [10.1007/s00280-015-2720-0](https://doi.org/10.1007/s00280-015-2720-0) | [25784388](https://pubmed.ncbi.nlm.nih.gov/25784388) | The study reports a two-compartment PK model for siltuximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Puchalski_2010.pdf` | Puchalski T et al., Pharmacokinetic and pharmacodynamic mod…, Clinical cancer research :… (2010) | popPK | 9 | [10.1158/1078-0432.CCR-09-2581](https://doi.org/10.1158/1078-0432.CCR-09-2581) | [20179212](https://pubmed.ncbi.nlm.nih.gov/20179212) | The study reports a two-compartment PK model for siltuximab, but specific numeric parameter values are not provided in the extracted text. |

<sub>queue written 2026-10-07T00:33:28.810385+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mayer_2015 | relevant | 9 | 0 | The study reports a two-compartment PK model for siltuximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Nikanjam_2019 | relevant | 10 | 4 | The paper reports a population PK model for siltuximab with specific quantitative values for half-life and qualitative ranges for clearance covariates, but specific numeric values for CL, V, and Q are not explicitly listed in the provided abstract text. |
| popPK | Puchalski_2010 | relevant | 9 | 1 | The study reports a two-compartment PK model for siltuximab, but specific numeric parameter values are not provided in the extracted text. |
| popPK | Vernon_2016 | irrelevant | 0 | 0 | The paper focuses on health utility values and QALYs (health economics) rather than pharmacokinetic parameters such as clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
