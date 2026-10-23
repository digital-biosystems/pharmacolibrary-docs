<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;temsirolimus&quot;}]"></div>

# temsirolimus

- **generic name:** temsirolimus
- **ATC codes:** `L01EG01`, `L01XE09`
- **DrugBank:** [DB06287](https://go.drugbank.com/drugs/DB06287) · **PubChem:** [CID 23724530](https://pubchem.ncbi.nlm.nih.gov/compound/23724530)
- **molar mass:** 1030.2871 g/mol (C56H87NO16) — DrugBank
- **groups:** approved, investigational

## About

Temsirolimus is an anticancer medicine used to treat kidney cancer (renal cell carcinoma) and mantle cell lymphoma. It is an authorised medicine in the European Union and is used mainly in oncology, typically in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7699074](https://www.wikidata.org/wiki/Q7699074) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cardillo_2013_cell_growth](drugs/drug_temsirolimus/pd_Cardillo_2013_cell_growth.md) | cell growth ← temsirolimus · inhibition effect | — | Cardillo TM et al., Targeting both IGF-1R and mTOR synergis…, BMC cancer (2013) | [10.1186/1471-2407-13-170](https://doi.org/10.1186/1471-2407-13-170) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=temsirolimus).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MTOR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:13 | 0:51 | 0/0/0 | 1/0/0 | 0/0/0 | 26,424/3,354 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mizuno_2017.pdf` | Mizuno T et al., Population pharmacokinetics of temsirol…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13181](https://doi.org/10.1111/bcp.13181) | [28000286](https://pubmed.ncbi.nlm.nih.gov/28000286) | A pediatric population-PK model is reported, but no numeric parameter values are provided in the evidence. |
| `Mbatchi_2017.pdf` | Mbatchi LC et al., Association of NR1I2, CYP3A5 and ABCB1…, Cancer chemotherapy and pha… (2017) | popPK | 9 | [10.1007/s00280-017-3379-5](https://doi.org/10.1007/s00280-017-3379-5) | [28676933](https://pubmed.ncbi.nlm.nih.gov/28676933) | The human study examines temsirolimus pharmacokinetics, but numeric disposition parameter values are not present in the evidence provided. |

<sub>queue written 2026-10-07 08:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cardillo_2013 | irrelevant | 0 | 0 | This is an in-vitro growth-inhibition study and reports no temsirolimus pharmacokinetic parameters. |
| popPK | Mbatchi_2017 | relevant | 9 | 2 | The human study examines temsirolimus pharmacokinetics, but numeric disposition parameter values are not present in the evidence provided. |
| popPK | Mizuno_2017 | relevant | 10 | 0 | A pediatric population-PK model is reported, but no numeric parameter values are provided in the evidence. |
| popPK | Niyomdecha_2021 | irrelevant | 0 | 0 | Temsirolimus is only an in-vitro comparator, with no pharmacokinetic parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btemsirolimus%5D&body=Drug%3A%20temsirolimus%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_temsirolimus/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
