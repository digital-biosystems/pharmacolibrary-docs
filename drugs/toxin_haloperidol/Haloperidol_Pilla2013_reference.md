<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Haloperidol&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/&quot;},{&quot;label&quot;:&quot;Pilla_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Haloperidol_Franken2017_reference&quot;,&quot;label&quot;:&quot;Franken_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Franken2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Johnson2016_reference&quot;,&quot;label&quot;:&quot;Johnson_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Johnson2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Holley1983_reference&quot;,&quot;label&quot;:&quot;Holley_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Holley1983_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_base&quot;,&quot;label&quot;:&quot;Li_2022_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_final&quot;,&quot;label&quot;:&quot;Li_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Haloperidol — `Haloperidol_Pilla2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for haloperidol's clearance and absorption lag time; t6_deviations.

<div class="pk-model-meta" hidden drug="Haloperidol" model-id="Haloperidol_Pilla2013_reference" status="model_quarantined" stale="false" population="patients with schizophrenia" measured-compound="Haloperidol" parameterization="apparent" topology="2C"></div>

## Citation
Pilla Reddy V, Kozielska M, Johnson M, Mafirakureva N, Vermeulen A, Liu J et al. Population pharmacokinetic-pharmacodynamic modeling of haloperidol in patients with schizophrenia using positive and negative syndrome rating scale. Journal of clinical psychopharmacology 33(6):731–739 (2013).
  ·  DOI: [10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c)

## Population and dosing

**Population:** patients with schizophrenia · condition schizophrenia · age group adult · n = 122 (PK), 473 (PD).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Q/F (L/h) | Q/F | 12 | L/h |
| Vc/F (L) | V1/F | 9 | L |
| Vp/F (L) | V2/F | 12 | L |
| Ka (h −1) | kabs | 6 | h −1 |
| Pmax | equation variable | 4 | &gt;50% |
| KT (1/d) | k12 | 6 | 1/d |
| BHAZ: haloperidol (1/d) | kel | 0.1 | 1/d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for haloperidol's clearance and absorption lag time; t6_deviations.**

The model was built, but haloperidol's clearance and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — haloperidol: Q/F 12 L/h, V1/F 9 L, V2/F 12 L, kabs 6 h −1, k12 6 1/d, kel 0.1 1/d.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of bhaz: haloperidol: this record has 0.1, the second reading none; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Q/F (L/h) | `Q69` · Q/F | 12 | L/h | 3.333e-06 | m3/s | l/h | exact (1) | Pilla_2013_table_2:row1:col3, Pilla_2013_table_2:row1:col4 |
| Vc/F (L) | `Q290` · V1/F | 9 | L | 0.009 | m3 | l | exact (1) | Pilla_2013_table_2:row2:col3, Pilla_2013_table_2:row2:col4 |
| Vp/F (L) | `Q82` · V2/F | 12 | L | 0.012 | m3 | l | exact (1) | Pilla_2013_table_2:row3:col3, Pilla_2013_table_2:row3:col4 |
| Ka (h −1) | `Q49` · kabs | 6 | h −1 | 0.001667 | 1/s | 1/h | exact (1) | Pilla_2013_table_2:row4:col3, Pilla_2013_table_2:row4:col4 |
| Pmax | `Q900` · equation variable | 4 | &gt;50% |  |  | &gt;50% | llm (0.6) | Pilla_2013_table_2:row9:col3, Pilla_2013_table_2:row9:col4 |
| KT (1/d) | `Q301` · k12 | 6 | 1/d | 6.944e-05 | 1/s | 1/d | llm (0.6) | Pilla_2013_table_2:row12:col3, Pilla_2013_table_2:row12:col4 |
| BHAZ: haloperidol (1/d) | `Q47` · kel | 0.1 | 1/d | 1.157e-06 | 1/s | 1/d | llm (0.6) | Pilla_2013_table_2:row15:col3, Pilla_2013_table_2:row15:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F | Q27 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped 'CL/F (L/h)' → Q27 = -2: a clearance of -2 is not a parameter value (source ['Pilla_2013_table_2:row0:col3', 'Pilla_2013_table_2:row0:col4'])
- dropped PD-category row 'Baseline PANSS' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Pilla_2013_table_2:row8:col3', 'Pilla_2013_table_2:row8:col4'])
- unit_dimension_unknown: '&gt;50%' (equation variable)
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Pilla_2013_table_2:row10:col3', 'Pilla_2013_table_2:row10:col4'])
- dropped PD-category row 'EC50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Pilla_2013_table_2:row11:col3', 'Pilla_2013_table_2:row11:col4'])
- dropped PD-category row 'BHAZ: placebo (1/d)' → Q341 (placebo_Emax, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Pilla_2013_table_2:row14:col3', 'Pilla_2013_table_2:row14:col4'])
- dropped 'BETA' → Q47 = -0.2: a rate of -0.2 is not a parameter value (source ['Pilla_2013_table_2:row16:col3', 'Pilla_2013_table_2:row16:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Haloperidol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q27 (CL/F): CL/F = TVCL * [weight / 70] 0.75
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F'; equation kept verbatim
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Pilla_2013_table_2: unbound_uncertainty
- LLM selected parameter table(s) 2
- captured model equation CL/F = TVCL * [weight / 70] 0.75

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[bhaz: haloperidol]` | 0.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka].value` | 6 | 0.235 | mismatch |
| `gpt-oss:120b` | `parameters[kt].parameter_id` | Q301 | Q47 | mismatch |
| `gpt-oss:120b` | `parameters[kt].value` | 6 | 0.112 | mismatch |
| `gpt-oss:120b` | `parameters[pmax]` | 4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/f].value` | 12 | 250 | mismatch |
| `gpt-oss:120b` | `parameters[vc/f].value` | 9 | 700 | mismatch |
| `gpt-oss:120b` | `parameters[vp/f].value` | 12 | 2715 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Pilla_2013_table_2:row2:col3', 'Pilla_2013_table_2:row2:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Pilla_2013_table_2:row12:col3', 'Pilla_2013_table_2:row12:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Pilla_2013_table_2:row15:col3', 'Pilla_2013_table_2:row15:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Pilla_2013_table_2:row4:col3', 'Pilla_2013_table_2:row4:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Pilla_2013_table_2:row1:col3', 'Pilla_2013_table_2:row1:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Pilla_2013_table_2:row3:col3', 'Pilla_2013_table_2:row3:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 9 L | ['Pilla_2013_table_2:row2:col3', 'Pilla_2013_table_2:row2:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 12 L | ['Pilla_2013_table_2:row3:col3', 'Pilla_2013_table_2:row3:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhaloperidol%5D%20Haloperidol_Pilla2013_reference&body=Drug%3A%20haloperidol%0ARecord%3A%20Haloperidol_Pilla2013_reference%0APaper%3A%20Pilla_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_haloperidol/Haloperidol_Pilla2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 18:44 UTC</sub>
