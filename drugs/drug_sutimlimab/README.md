<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sutimlimab&quot;}]"></div>

# sutimlimab

- **generic name:** sutimlimab
- **ATC codes:** `L04AJ04`
- **DrugBank:** [DB14996](https://go.drugbank.com/drugs/DB14996) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sutimlimab is a monoclonal antibody that inhibits complement and is used to treat haemolysis in cold agglutinin disease, a form of autoimmune haemolytic anaemia. It is approved and authorised in the European Union, though it remains a newer, specialised treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q60785670](https://www.wikidata.org/wiki/Q60785670) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:36 | 0:08 | 0/0/0 | 1/1/0 | 0/0/0 | 20,704/877 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bartko_2018_CP_activity](drugs/drug_sutimlimab/pd_Bartko_2018_CP_activity.md) | CP activity ← sutimlimab · direct sigmoid Emax (Hill) effect | — | Bartko J et al., A Randomized, First-in-Human, Healthy V…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1111](https://doi.org/10.1002/cpt.1111) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Frank_2023_Hb](drugs/drug_sutimlimab/pd_Frank_2023_Hb.md) | Hb ← sutimlimab · indirect response — drug stimulates the production of Hb | — | Frank T et al., Sutimlimab Pharmacokinetics and Pharmac…, The Journal of pharmacology… (2023) | [10.1124/jpet.122.001511](https://doi.org/10.1124/jpet.122.001511) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
