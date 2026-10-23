<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;ibrexafungerp&quot;}]"></div>

# ibrexafungerp

- **generic name:** ibrexafungerp
- **ATC codes:** `J02AX07`
- **DrugBank:** [DB12471](https://go.drugbank.com/drugs/DB12471) · **PubChem:** [CID 46871657](https://pubchem.ncbi.nlm.nih.gov/compound/46871657)
- **molar mass:** 730.051 g/mol (C44H67N5O4) — DrugBank
- **groups:** approved

## About

Ibrexafungerp is an antifungal medicine used for systemic treatment of fungal infections. It is an approved drug, but it carries a boxed warning and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27273787](https://www.wikidata.org/wiki/Q27273787) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ibrexafungerp).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate/transporter | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate/transporter | DrugBank actor |
| distribution | placenta | `ABCB1` substrate/transporter | DrugBank actor |
| distribution | testis | `ABCB1` substrate/transporter | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inhibitor/substrate, `SLCO1B3` inhibitor, `SULT1A1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `SULT1A1` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate/transporter | DrugBank actor |
| excretion | liver | `ABCB1` substrate/transporter | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:26 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 6,010/157 | einfracz / qwen3.8-27b | 2 | 0/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Spec_2019.pdf` | Spec A et al., MSG-10: a Phase 2 study of oral ibrexaf…, The Journal of antimicrobia… (2019) | popPK | 9 | [10.1093/jac/dkz277](https://doi.org/10.1093/jac/dkz277) | [31304536](https://pubmed.ncbi.nlm.nih.gov/31304536) | The paper describes a population pharmacokinetic analysis for ibrexafungerp, but the abstract only reports the predicted proportion of patients achieving target exposure and dose recommendations, without providing specific numeric values for clearance, volume, or other PK parameters which are likely in the full text or supplementary materials not fully detailed in the evidence. |

<sub>queue written 2026-10-07 12:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Spec_2019 | relevant | 9 | 2 | The paper describes a population pharmacokinetic analysis for ibrexafungerp, but the abstract only reports the predicted proportion of patients achieving target exposure and dose recommendations, without providing specific numeric values for clearance, volume, or other PK parameters which are likely in the full text or supplementary materials not fully detailed in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibrexafungerp%5D&body=Drug%3A%20ibrexafungerp%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ibrexafungerp/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
