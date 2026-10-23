<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;lasmiditan&quot;,&quot;href&quot;:&quot;drugs/drug_lasmiditan/&quot;},{&quot;label&quot;:&quot;Tsai_2021 \u00b7 population_mean_see&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Tsai_2021_lasmiditan_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lasmiditan — `Lasmiditan_Tsai2021_population_mean_see`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Lasmiditan's volume of distribution and absorption lag time lacked extracted values, causing library placeholders to hold the model back from publication.

<div class="pk-model-meta" hidden drug="lasmiditan" model-id="Lasmiditan_Tsai2021_population_mean_see" status="model_quarantined" stale="false" population="pediatric patients with migraine" measured-compound="lasmiditan" parameterization="apparent" topology="1C"></div>

## Citation
Tsai M, Nery ESM, Kerr L, Khanna R, Komori M, Dennehy EB et al. Pharmacokinetics, Safety, and Tolerability of Lasmiditan in Pediatric Patients with Migraine. Clinical pharmacokinetics 60(6):819-828 (2021).
  ·  DOI: [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z)

## Population and dosing

**Population:** pediatric patients with migraine · condition migraine · age group child · n = ,n_subjects.

**Dosing:** 100, 200 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka, 1/h | kabs | 0.295 | 1/h |
| CL/F, L/h | CL/F | 107 | L/h |
| V2/F, L | V2/F | 127 | L |
| Q/F, L/h | Q/F | 21.2 | L/h |
| V3/F, L | V3/F | 172 | L |
| MTT, h | MTT | 0.436 | h |
| theta_q319_body_weight | theta_q319_body_weight | 0.877 |  |
| theta_v2_f_body_weight | theta_v2_f_body_weight | 1.15 | L |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Lasmiditan's volume of distribution and absorption lag time lacked extracted values, causing library placeholders to hold the model back from publication.**

The record specifies a three-compartment structure but failed to extract values for volume of distribution and absorption lag time, leaving them at default placeholders. Additionally, the model builder did not simulate the defined covariate effects for body weight, leaving those scenarios unverified. Extracted — lasmiditan: kabs 0.295 1/h, CL/F 107 L/h, V2/F 127 L, Q/F 21.2 L/h, V3/F 172 L, MTT 0.436 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].rse_percent`: this record has none, the second reading 22.7; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka, 1/h | `Q49` · kabs | 0.295 | 1/h | 8.194e-05 | 1/s | 1/h | exact (1) | Tab3:row1:col1 |
| CL/F, L/h | `Q27` · CL/F | 107 | L/h | 2.972e-05 | m3/s | l/h | exact (1) | Tab3:row2:col1 |
| V2/F, L | `Q82` · V2/F | 127 | L | 0.127 | m3 | l | exact (1) | Tab3:row3:col1 |
| Q/F, L/h | `Q69` · Q/F | 21.2 | L/h | 5.889e-06 | m3/s | l/h | exact (1) | Tab3:row4:col1 |
| V3/F, L | `Q78` · V3/F | 172 | L | 0.172 | m3 | l | exact (1) | Tab3:row5:col1 |
| MTT, h | `Q81` · MTT | 0.436 | h |  |  | h | exact (1) | Tab3:row7:col1 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.877 |  |  |  |  |  | Tab3:row8:col1 |
| theta_v2_f_body_weight | `Q900` · theta_v2_f_body_weight | 1.15 | L |  |  |  |  | Tab3:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Ntr' — extend the ontology if this is a real PK parameter (source ['Tab3:row6:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lasmiditan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'population mean (%see)' subgroup of Tsai_2021 (paper reports 2 populations: lasmiditan geometric mean (cv%), population mean (%see))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tsai_2021_table_2:row4:col2 = '2590 (13.7)c'
- unparsed cell Tsai_2021_table_2:row6:col2 = '77.1 (13.7)c'
- unparsed cell Tsai_2021_table_2:row7:col2 = '456 (11.3)c'
- unparsed cell Tsai_2021_table_2:row8:col2 = '534 (21.1)c'
- companion parameter table 2 transcribed (9 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.571 (12/21 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].rse_percent` |  | 22.7 | mismatch |
| `gpt-oss-120b` | `parameters[ka].rse_percent` |  | 0 | mismatch |
| `gpt-oss-120b` | `parameters[mtt].rse_percent` |  | 36.3 | mismatch |
| `gpt-oss-120b` | `parameters[q/f].rse_percent` |  | 0 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_body_weight]` |  | 0.877 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` | 0.877 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f].rse_percent` |  | 89.2 | mismatch |
| `gpt-oss-120b` | `parameters[v3/f].rse_percent` |  | 0 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row1:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row4:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab3:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 107 L/h | ['Tab3:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 127 L | ['Tab3:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 3 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 4 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 4 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.5–2 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blasmiditan%5D%20Lasmiditan_Tsai2021_population_mean_see&body=Drug%3A%20lasmiditan%0ARecord%3A%20Lasmiditan_Tsai2021_population_mean_see%0APaper%3A%20Tsai_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lasmiditan/Lasmiditan_Tsai2021_population_mean_see%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:26 UTC</sub>
