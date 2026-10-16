<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;antithymocyte immunoglobulin (rabbit)&quot;}]"></div>

# antithymocyte immunoglobulin (rabbit)

- **generic name:** antithymocyte immunoglobulin (rabbit)
- **ATC codes:** `L04AA04`
- **DrugBank:** [DB00098](https://go.drugbank.com/drugs/DB00098) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Rabbit anti-thymocyte globulin is an immunosuppressant antibody medicine used to suppress T cells, for example in transplant settings. It is an approved medicine, though it carries a boxed warning and is also being studied for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801777](https://www.wikidata.org/wiki/Q20801777) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:32 | 0:58 | 0/0/1 | 0/0/0 | 0/0/0 | 42,575/2,048 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Admiraal_2015_2_reference](drugs/drug_antithymocyte_immunoglobulin_rabbit/AntithymocyteImmunoglobulinRabbit_Admiraal2015v2_reference.md) | — | 1-compartment (no model) | 2 | Admiraal R et al., Population pharmacokinetic modeling of…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0214-6](https://doi.org/10.1007/s40262-014-0214-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=antithymocyte_immunoglobulin_rabbit).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD1A (inhibitor), CD4 (inducer), CD86 (binder), FCGR2B (inducer), ITGAL (inducer), ITGAV (inducer), ITGB1 (inducer), ITGB3 (inducer), MR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Admiraal_2015 | irrelevant | 2 | 1 | The study uses a pre-existing population PK model to calculate exposure metrics (AUC) for clinical outcome analysis, but does not report the new PK parameter estimates (CL, V, etc.) or the model structure itself in the provided evidence. |
| popPK | Admiraal_2017 | irrelevant | 4 | 2 | The study uses a population PK model to calculate exposure metrics (AUC, Cmax) for survival analysis, but the specific parameter values (CL, V, etc.) of the model are not reported in the provided text, only the derived exposure ranges. |
| popPK | Breitinger_2009 | irrelevant | 0 | 0 | The study investigates the immunological content (antibodies against GPI-APs) of ATG preparations and their potential mechanism of action, but does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:31 UTC</sub>
