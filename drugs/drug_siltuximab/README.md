<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;siltuximab&quot;}]"></div>

# siltuximab

- **generic name:** siltuximab
- **ATC codes:** `L04AC11`
- **DrugBank:** [DB09036](https://go.drugbank.com/drugs/DB09036) · **PubChem:** none
- **groups:** approved, investigational

## About

Siltuximab, a monoclonal antibody, is used to treat Castleman's disease (giant lymph node hyperplasia). It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3960572](https://www.wikidata.org/wiki/Q3960572) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Puchalski_2010_CRP](drugs/drug_siltuximab/pd_Puchalski_2010_CRP.md) | C-reactive protein ← siltuximab · indirect response — drug inhibits the production of C-reactive protein | — | Puchalski T et al., Pharmacokinetic and pharmacodynamic mod…, Clinical cancer research :… (2010) | [10.1158/1078-0432.CCR-09-2581](https://doi.org/10.1158/1078-0432.CCR-09-2581) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=siltuximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IL6 (antibody), IL6 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:33 | 0:28 | 0/0/0 | 0/1/0 | 0/0/0 | 6,374/481 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nikanjam_2019.pdf` | Nikanjam M et al., Population pharmacokinetics of siltuxim…, Cancer chemotherapy and pha… (2019) | popPK | 10 | [10.1007/s00280-019-03939-7](https://doi.org/10.1007/s00280-019-03939-7) | [31482226](https://pubmed.ncbi.nlm.nih.gov/31482226) | The paper reports a population PK model for siltuximab with specific quantitative values for half-life and qualitative ranges for clearance covariates, but specific numeric values for CL, V, and Q are not explicitly listed in the provided abstract text. |
| `Mayer_2015.pdf` | Mayer CL et al., Dose selection of siltuximab for multic…, Cancer chemotherapy and pha… (2015) | popPK | 9 | [10.1007/s00280-015-2720-0](https://doi.org/10.1007/s00280-015-2720-0) | [25784388](https://pubmed.ncbi.nlm.nih.gov/25784388) | The study reports a two-compartment PK model for siltuximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Puchalski_2010.pdf` | Puchalski T et al., Pharmacokinetic and pharmacodynamic mod…, Clinical cancer research :… (2010) | popPK | 9 | [10.1158/1078-0432.CCR-09-2581](https://doi.org/10.1158/1078-0432.CCR-09-2581) | [20179212](https://pubmed.ncbi.nlm.nih.gov/20179212) | The study reports a two-compartment PK model for siltuximab, but specific numeric parameter values are not provided in the extracted text. |

<sub>queue written 2026-10-07 00:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mayer_2015 | relevant | 9 | 0 | The study reports a two-compartment PK model for siltuximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Nikanjam_2019 | relevant | 10 | 4 | The paper reports a population PK model for siltuximab with specific quantitative values for half-life and qualitative ranges for clearance covariates, but specific numeric values for CL, V, and Q are not explicitly listed in the provided abstract text. |
| popPK | Puchalski_2010 | relevant | 9 | 1 | The study reports a two-compartment PK model for siltuximab, but specific numeric parameter values are not provided in the extracted text. |
| popPK | Vernon_2016 | irrelevant | 0 | 0 | The paper focuses on health utility values and QALYs (health economics) rather than pharmacokinetic parameters such as clearance or volume of distribution. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsiltuximab%5D&body=Drug%3A%20siltuximab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_siltuximab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
