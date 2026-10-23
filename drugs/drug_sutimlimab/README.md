<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sutimlimab&quot;}]"></div>

# sutimlimab

- **generic name:** sutimlimab
- **ATC codes:** `L04AJ04`
- **DrugBank:** [DB14996](https://go.drugbank.com/drugs/DB14996) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sutimlimab is a monoclonal antibody that inhibits complement and is used to treat haemolysis in cold agglutinin disease, a form of autoimmune haemolytic anaemia. It is approved and authorised in the European Union, though it remains a newer, specialised treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q60785670](https://www.wikidata.org/wiki/Q60785670) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Bartko_2018_CP_activity](drugs/drug_sutimlimab/pd_Bartko_2018_CP_activity.md) | CP activity ← sutimlimab · direct sigmoid Emax (Hill) effect | — | Bartko J et al., A Randomized, First-in-Human, Healthy V…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1111](https://doi.org/10.1002/cpt.1111) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Frank_2023_Hb](drugs/drug_sutimlimab/pd_Frank_2023_Hb.md) | Hb ← sutimlimab · indirect response — drug stimulates the production of Hb | — | Frank T et al., Sutimlimab Pharmacokinetics and Pharmac…, The Journal of pharmacology… (2023) | [10.1124/jpet.122.001511](https://doi.org/10.1124/jpet.122.001511) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sutimlimab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: C1S (antibody), C1S (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:36 | 0:08 | 0/0/0 | 1/1/0 | 0/0/0 | 20,704/877 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Frank_2023.pdf` | Frank T et al., Sutimlimab Pharmacokinetics and Pharmac…, The Journal of pharmacology… (2023) | popPK | 10 | [10.1124/jpet.122.001511](https://doi.org/10.1124/jpet.122.001511) | [37164370](https://pubmed.ncbi.nlm.nih.gov/37164370) | The paper describes a population PK model for sutimlimab in humans, but the extracted evidence contains only qualitative descriptions of the model structure and covariates without any specific numeric parameter values (e.g., CL, V, Q). |

<sub>queue written 2026-10-07T00:36:20.557957+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartko_2018 | relevant | 5 | 2 | The paper reports standard non-compartmental PK parameters (Cmax, tmax, AUC, t1/2) but lacks specific quantitative disposition parameters like clearance (CL) and volume of distribution (V) required for population PK modeling; these are typically derived via compartmental analysis not provided in this evidence. |
| popPK | Frank_2023 | relevant | 10 | 0 | The paper describes a population PK model for sutimlimab in humans, but the extracted evidence contains only qualitative descriptions of the model structure and covariates without any specific numeric parameter values (e.g., CL, V, Q). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
