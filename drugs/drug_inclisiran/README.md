<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;inclisiran&quot;}]"></div>

# inclisiran

- **generic name:** inclisiran
- **ATC codes:** `C10AX16`
- **DrugBank:** [DB14901](https://go.drugbank.com/drugs/DB14901) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Inclisiran is a small interfering RNA medication used to treat hypercholesterolaemia and other dyslipidaemias. It is authorised in the European Union as a lipid-lowering agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q48969359](https://www.wikidata.org/wiki/Q48969359) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:23 | 0:39 | 0/0/0 | 0/1/0 | 0/0/0 | 20,868/828 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> | [Gosselin_2023_LDL_C](drugs/drug_inclisiran/pd_Gosselin_2023_LDL_C.md) | low-density lipoprotein cholesterol ← inclisiran · indirect response — drug inhibits the production of low-density lipoprotein cholesterol | — | Gosselin NH et al., Translational Population-Pharmacodynami…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2774](https://doi.org/10.1002/cpt.2774) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Gosselin_2023_PCSK9](drugs/drug_inclisiran/pd_Gosselin_2023_PCSK9.md) | proprotein convertase subtilisin/kexin type 9 ← inclisiran · indirect response — drug inhibits the production of proprotein convertase subtilisin/kexin type 9 | — | Gosselin NH et al., Translational Population-Pharmacodynami…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2774](https://doi.org/10.1002/cpt.2774) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
