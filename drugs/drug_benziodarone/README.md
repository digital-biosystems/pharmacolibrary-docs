<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;benziodarone&quot;}]"></div>

# benziodarone

- **generic name:** benziodarone
- **ATC codes:** `C01DX04`
- **DrugBank:** [DB13277](https://go.drugbank.com/drugs/DB13277) · **PubChem:** not captured
- **molar mass:** 518.089 g/mol (C17H12I2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Benziodarone is a vasodilator that was used in cardiac therapy and also acts as a uricosuric agent. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4890775](https://www.wikidata.org/wiki/Q4890775) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">human + animal</span> | [Brandt_2026_T4_TBG](drugs/drug_benziodarone/pd_Brandt_2026_T4_TBG.md) | T4-TBG binding ← Benziodarone · direct sigmoid Emax (Hill) effect | — | Brandt J et al., Thyroxin displacement from single and c…, Archives of toxicology (2026) | [10.1007/s00204-026-04400-4](https://doi.org/10.1007/s00204-026-04400-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">human + animal</span> | [Brandt_2026_T4_TTR](drugs/drug_benziodarone/pd_Brandt_2026_T4_TTR.md) | T4-TTR binding ← Benziodarone · direct sigmoid Emax (Hill) effect | — | Brandt J et al., Thyroxin displacement from single and c…, Archives of toxicology (2026) | [10.1007/s00204-026-04400-4](https://doi.org/10.1007/s00204-026-04400-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 09:55 | 0:27 | 0/0/0 | 1/0/0 | 0/0/0 | 14,379/879 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shimizu_1975.pdf` | Shimizu S et al., [Pharmacokinetics of benziodarone label…, Revista de farmacia e bioqu… (1975) | popPK | 8 | not captured | [1085962](https://pubmed.ncbi.nlm.nih.gov/1085962) | The study describes a pharmacokinetic analysis of benziodarone in rats, but the provided evidence contains only the abstract/methods description without any numeric parameter values. |

<sub>queue written 2026-10-06T09:55:36.352334+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brandt_2026 | irrelevant | 0 | 0 | The study is an in-vitro thyroid hormone protein binding assay measuring IC50 values for T4 displacement, not a pharmacokinetic study reporting disposition parameters like clearance or volume for benziodarone. |
| popPK | Kramp_1975 | irrelevant | 0 | 0 | The study investigates renal tubular permeability and urate clearance mechanisms in rats, not the systemic pharmacokinetic parameters (CL, V, ka) of benziodarone itself. |
| popPK | Perez-Ruiz_2003 | irrelevant | 0 | 0 | The study is a clinical efficacy review of urate-lowering therapy and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for benziodarone. |
| popPK | Shimizu_1975 | relevant | 8 | 0 | The study describes a pharmacokinetic analysis of benziodarone in rats, but the provided evidence contains only the abstract/methods description without any numeric parameter values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
