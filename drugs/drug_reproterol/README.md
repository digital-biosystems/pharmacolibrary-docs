<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;reproterol&quot;}]"></div>

# reproterol

- **generic name:** reproterol
- **ATC codes:** `R03AC15`, `R03AK05`, `R03CC14`
- **DrugBank:** [DB12846](https://go.drugbank.com/drugs/DB12846) · **PubChem:** [CID 25654](https://pubchem.ncbi.nlm.nih.gov/compound/25654)
- **molar mass:** 389.412 g/mol (C18H23N5O5) — DrugBank
- **groups:** investigational

## About

Reproterol is a selective beta-2 adrenergic agonist that acts as a bronchodilator for obstructive airway diseases such as asthma. It is considered investigational in DrugBank and has no European Union marketing authorisation, so it is not widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1292703](https://www.wikidata.org/wiki/Q1292703) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Foster_1991_sGaw](drugs/drug_reproterol/pd_Foster_1991_sGaw.md) | specific airways conductance (log sGaw) increase against background bronchoconstriction ← reproterol · direct linear effect | — | Foster RW et al., A method for bioassay of potency and ef…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb05561.x](https://doi.org/10.1111/j.1365-2125.1991.tb05561.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=reproterol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:18 | 0:12 | 0/0/0 | 1/0/0 | 0/0/0 | 12,705/540 | ollama / glm-5.3-flash | 2 | 1/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Patchett_1985 | irrelevant | 0 | 0 | This is a pharmacodynamic dose-response study of bronchodilation (FEV1/PEFR) with no PK parameters (CL, V, ka, half-life, or PK model) for reproterol. |
| popPK | Susanna_1990 | irrelevant | 0 | 0 | Reproterol is only a co-administered bronchoprotective agent in a pharmacodynamic adenosine challenge study; no PK parameters or numeric disposition values are reported. |
| popPK | Zimmer_2000 | irrelevant | 0 | 0 | Isolated working rat heart pharmacodynamic/toxicity study of beta-agonists; no PK disposition parameters for reproterol are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
