<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;nintedanib&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/&quot;},{&quot;label&quot;:&quot;Hartmann_2026 \u00b7 PD FVC Z-score&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nintedanib_Schmid2018_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nintedanib_Schmid2018v2_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# FVC Z-score — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Nintedanib (concentrations from the PK model of Schmid_2018) drives FVC Z-score (in Z-score): direct Emax (saturable) effect.

**Model:** Model available in **Models**; browser simulation unavailable.

> Nintedanib steady-state trough concentration (C trough,ss) produces an Emax disease-modifying effect on the annual rate of decline in FVC Z-score; the paper does not specify a production or elimination mechanism. EC50 was 8.12 nM, and Emax improved the rate of decline by 0.292 Z-score/year (difference from placebo); the typical pediatric annual rate of decline was −0.174 Z-score/year.
>
> <sub>Source-based summary by gpt-6-luna from the paper's text; not human-verified</sub>

- **paper:** `Hartmann_2026`
- **model family:** `emax`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** stimulation/additive

## Citation
Hartmann S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70135](https://doi.org/10.1002/psp4.70135)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Baseline | `Q324` · not captured | −3.49 | Z-score | not captured | llm (not captured) | Hartmann_2026:pdv3 |
| PD (effect) | Slope | `Q335` · not captured | −0.308 | Z-score/year | not captured | llm (not captured) | Hartmann_2026:pdv3 |
| PD (effect) | Rate of change in FVC Z-score at maximum drug effect (E max) | `Q320` · not captured | 0.292 | Z-score/year | not captured | llm (not captured) | Hartmann_2026:pdv3 |
| PD (effect) | EC50 | `Q321` · not captured | 8.12 | nM | not captured | llm (not captured) | Hartmann_2026:pdv3 |
| model term | Pediatric change in slope | `Q900` · not captured | 0.133 | Z-score/year | not captured | llm (not captured) | Hartmann_2026:pdv3 |
| variability | IIV baseline | `Q312` · not captured | 1.84 | SD | not captured | llm (not captured) | Hartmann_2026:pdv3 |
| variability | IIV slope | `Q312` · not captured | 0.379 | SD | not captured | llm (not captured) | Hartmann_2026:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Nintedanib_Hartmann2026_PD_fvc_2` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | -3.49 Z-score | — |
| Emax | 0.292 Z-score/year | — |
| EC50 | 8.12 nM | — |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = -3.49, `at_EC50` = -3.344, `at_inf` = -3.198

Deviations:

- `defaulted_parameters` — gamma
- `pd_binding_exposure_unit_unresolved` — 'nM' — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--red">rejected</span> · route to `human_review`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response rises, as direct effect predicts |
| `T3_plausibility` | fail | negative baseline -3.49 for a response in Z-score |
| `T4_defaults` | advisory | only convention defaults (gamma = 1) |

Blocking:

- T3 negative baseline -3.49 for a response in Z-score

Advisory:

- defaulted: gamma (convention)
- exposure unit not resolved to SI — the x axis is in the paper's unit


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `openai:gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:qwen3.8-27b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:qwen3.8-27b` | `effect_direction` | stimulation | inhibition | mismatch |
| `einfracz:qwen3.8-27b` | `parameters[Q320]` | 0.292 | not captured | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q323]` | not captured | 0.292 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q324].value` | −3.49 | -3.49 | mismatch |
| `einfracz:qwen3.8-27b` | `parameters[Q335].value` | −0.308 | -0.308 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [nintedanib](drugs/drug_nintedanib/)</sub>
