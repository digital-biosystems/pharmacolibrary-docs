<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;azapropazone&quot;}]"></div>

# azapropazone

- **generic name:** azapropazone
- **ATC codes:** `M01AX04`
- **DrugBank:** [DB07402](https://go.drugbank.com/drugs/DB07402) · **PubChem:** [CID 46937068](https://pubchem.ncbi.nlm.nih.gov/compound/46937068)
- **molar mass:** 298.3397 g/mol (C16H18N4O2) — DrugBank
- **groups:** approved, withdrawn

## About

Azapropazone is a non-steroidal anti-inflammatory drug that was used to treat inflammatory and rheumatic conditions. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q368222](https://www.wikidata.org/wiki/Q368222) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Pallapies_1994_TXB2](drugs/drug_azapropazone/pd_Pallapies_1994_TXB2.md) | platelet TXB2 generation ← azapropazone · direct sigmoid Emax (Hill) effect | — | Pallapies D et al., Effects on platelet functions and pharm…, British journal of clinical… (1994) | [10.1111/j.1365-2125.1994.tb04286.x](https://doi.org/10.1111/j.1365-2125.1994.tb04286.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=azapropazone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:39 | 0:06 | 0/0/0 | 0/1/0 | 0/0/0 | 10,476/641 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brouwers_1994 | irrelevant | 1 | 0 | The paper is a qualitative review of NSAID drug-drug interactions that mentions azapropazone only in the context of being prone to interactions, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Higgens_1984 | irrelevant | 0 | 0 | The study focuses on the uricosuric pharmacodynamic effects of azapropazone (plasma and urinary uric acid levels) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Pallapies_1994 | irrelevant | 1 | 0 | The study focuses on platelet function pharmacodynamics (pharmacology) and reports PK only in the context of correlation (EC50), without providing specific disposition parameters like clearance, volume, or half-life for the drug itself in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
