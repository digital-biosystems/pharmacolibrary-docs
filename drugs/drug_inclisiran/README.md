<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;inclisiran&quot;}]"></div>

# inclisiran

- **generic name:** inclisiran
- **ATC codes:** `C10AX16`
- **DrugBank:** [DB14901](https://go.drugbank.com/drugs/DB14901) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Inclisiran is a small interfering RNA medication used to treat hypercholesterolaemia and other dyslipidaemias. It is authorised in the European Union as a lipid-lowering agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q48969359](https://www.wikidata.org/wiki/Q48969359) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gosselin_2023_LDL_C](drugs/drug_inclisiran/pd_Gosselin_2023_LDL_C.md) | low-density lipoprotein cholesterol ← inclisiran · indirect response — drug inhibits the production of low-density lipoprotein cholesterol | — | Gosselin NH et al., Translational Population-Pharmacodynami…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2774](https://doi.org/10.1002/cpt.2774) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gosselin_2023_PCSK9](drugs/drug_inclisiran/pd_Gosselin_2023_PCSK9.md) | proprotein convertase subtilisin/kexin type 9 ← inclisiran · indirect response — drug inhibits the production of proprotein convertase subtilisin/kexin type 9 | — | Gosselin NH et al., Translational Population-Pharmacodynami…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2774](https://doi.org/10.1002/cpt.2774) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=inclisiran).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PCSK9 (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:23 | 0:39 | 0/0/0 | 0/1/0 | 0/0/0 | 20,868/828 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gosselin_2023.pdf` | Gosselin NH et al., Translational Population-Pharmacodynami…, Clinical pharmacology and t… (2023) | popPK | 8 | [10.1002/cpt.2774](https://doi.org/10.1002/cpt.2774) | [36281788](https://pubmed.ncbi.nlm.nih.gov/36281788) | The paper describes a translational population PK/PD model for inclisiran, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T11:22:51.154637+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gosselin_2023 | relevant | 8 | 2 | The paper describes a translational population PK/PD model for inclisiran, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Jeon_2022 | irrelevant | 2 | 0 | This is a minireview discussing modeling approaches for siRNA therapeutics generally, and the provided evidence contains no original quantitative PK parameter values for inclisiran. |
| popPK | Lumen_2024 | irrelevant | 2 | 0 | The paper describes a mechanistic PBPK-PD modeling framework for organ impairment and does not report specific quantitative disposition parameters (CL, V, Q, ka) for inclisiran in the provided evidence. |
| popPK | McDougall_2022 | irrelevant | 2 | 0 | This is a minireview discussing general GalNAc-siRNA properties without providing specific quantitative PK parameter values for inclisiran. |
| popPK | Nguyen_2026 | irrelevant | 0 | 0 | The paper is a clinical practice study analyzing lipid management variability and does not report any pharmacokinetic parameters for inclisiran. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
