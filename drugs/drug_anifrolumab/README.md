<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anifrolumab&quot;}]"></div>

# anifrolumab

- **generic name:** anifrolumab
- **ATC codes:** `L04AG11`
- **DrugBank:** [DB11976](https://go.drugbank.com/drugs/DB11976) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Anifrolumab is a monoclonal antibody used to treat systemic lupus erythematosus. It is approved and authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:39 | 0:40 | 0/0/1 | 0/0/0 | 0/0/0 | 80,333/2,668 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.692). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q56 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Almquist_2022_reference](drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference.md) | — | 2-compartment (no model) | 7 | Almquist J et al., Nonlinear Population Pharmacokinetics o…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2055](https://doi.org/10.1002/jcph.2055) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=anifrolumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IFNAR1 (inhibitor), IFNAR2 (target), IFNGR2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chia_2021.pdf` | Chia YL et al., Exposure-response analysis for selectio…, Rheumatology (Oxford, Engla… (2021) | popPK | 10 | [10.1093/rheumatology/keab176](https://doi.org/10.1093/rheumatology/keab176) | [33629110](https://pubmed.ncbi.nlm.nih.gov/33629110) | The paper describes a population PK model for anifrolumab in humans, but the evidence provided only contains qualitative descriptions of covariates (weight, IFNGS) and conclusions regarding dosage, without listing specific numeric parameter estimates (CL, V, Q, etc.). |

<sub>queue written 2026-10-06T23:38:43.500012+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chia_2021 | relevant | 10 | 2 | The paper describes a population PK model for anifrolumab in humans, but the evidence provided only contains qualitative descriptions of covariates (weight, IFNGS) and conclusions regarding dosage, without listing specific numeric parameter estimates (CL, V, Q, etc.). |
| popPK | Chia_2022 | irrelevant | 2 | 0 | The study is an exposure-response analysis using model-predicted concentrations but does not report specific quantitative population PK parameters (CL, V, Q, etc.) for anifrolumab. |
| popPK | Chia_2022_2 | relevant | 9 | 2 | The paper analyzes PK/PD relationships and uses a compartmental population PK model for anifrolumab, but the specific quantitative disposition parameters (CL, V, Q) are in Table 2 or Supplementary Material, which are not provided; only concentration metrics (Ctrough, Cave, IC80) are visible in the text. |
| popPK | Rademacher_2026 | irrelevant | 0 | 0 | The study analyzes clinical outcomes (SLEDAI scores) and serological biomarkers (complement, anti-dsDNA) in SLE patients, reporting no pharmacokinetic parameters (CL, V, ka) for anifrolumab. |
| popPK | Tang_2023 | relevant | 4 | 8 | This is a review article summarizing quantitative PK parameters (CL, t1/2, AUC) from original clinical trials, with values present in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:38 UTC</sub>
