<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/&quot;},{&quot;label&quot;:&quot;Ali_2018 \u00b7 typical_valuea&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amodiaquine — `Amodiaquine_Ali2018_typical_valuea`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated. · molar_mass_missing:desethylamodiaquine: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">Not simulated</span>

<div class="pk-model-meta" hidden drug="amodiaquine" model-id="Amodiaquine_Ali2018_typical_valuea" status="not_simulated" stale="false" population="pediatric and adult patients with uncomplicated malaria" measured-compound="desethylamodiaquine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Ali AM, Penny MA, Smith TA, Workman L, Sasi P, Adjei GO et al. Population Pharmacokinetics of the Antimalarial Amodiaquine: a Pooled Analysis To Optimize Dosing. Antimicrobial agents and chemotherapy 62(10) (2018).
  ·  DOI: [10.1128/AAC.02193-17](https://doi.org/10.1128/AAC.02193-17)

## Population and dosing

**Population:** pediatric and adult patients with uncomplicated malaria · condition uncomplicated malaria · age group mixed.

**Dosing:** 540 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed amodiaquine, measured desethylamodiaquine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 15 extracted, plus 2 covariate effects.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (1/h) | kabs | 0.589 | 1/h |
| MTT (h) | MTT | 0.236 | h |
| NN | n_transit | 2.00 |  |
| F | Fab | 1 |  |
| CLAQc (liters/h) | CLm/F | 2960 | liters/h |
| VcAQc (liters) | V1 | 13500 | liters |
| QAQc (liters/h) | Q | 2310 | liters/h |
| VpAQc (liters) | V2 | 22700 | liters |
| CLDEAQc (liters/h) | CLm/F | 32.6 | liters/h |
| VcDEAQc (liters) | V1 | 258 | liters |
| Q1DEAQc (liters/h) | Q | 154 | liters/h |
| Vp1DEAQc (liters) | V2 | 2460 | liters |
| Q2DEAQc (liters/h) | Q2 | 31.3 | liters/h |
| Vp2DEAQc (liters) | V3 | 5580 | liters |
| Effect of first dose on F (%) | Frel | -22.4 |  |
| theta_q325_category | theta_q325_category | 3.6 |  |
| theta_q325_category | theta_q325_category | 3.22 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.
- a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated. · molar_mass_missing:desethylamodiaquine: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.955). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The amodiaquine–desethylamodiaquine parent–metabolite model was not simulated: the metabolite desethylamodiaquine was built with no V, CL or formation clearance (all 0), its molar mass is missing, and the two peripheral-volume parameters (V2) were neither extracted nor defaulted.**

The record defines desethylamodiaquine as a metabolite of amodiaquine formed in the central compartment, but the built metabolite compartment had V = 0, CL = 0 and formation clearance = 0, so library placeholders would have been used; the molar mass of desethylamodiaquine is also missing (MW = 0), so metabolite amounts would be formed 1 mg per mg of parent without molar correction. Parameter coverage reached only 6 of 8 expected parameters, with the two V2 values (22700 L for amodiaquine, 2460 L for desethylamodiaquine) neither emitted nor defaulted. The model structure also mismatched: the record describes a parent–metabolite structure with a three-compartment metabolite, but the built model was a one-compartment enteral model. Additionally, Tlag was left at a default, F = 1 and Fm = 1 were assumed apparent, the covariate effects (3.6 and 3.22) were not exercised in simulation, and one reported unit could not be converted to SI. Extracted — amodiaquine: kabs 0.589 1/h, MTT 0.236 h, n_transit 2, Fab 1, CLm/F 2.96e+03 liters/h, V1 1.35e+04 liters, Q 2.31e+03 liters/h, V2 2.27e+04 liters, … (+1); desethylamodiaquine: CLm/F 32.6 liters/h, V1 258 liters, Q 154 liters/h, V2 2.46e+03 liters, Q2 31.3 liters/h, V3 5.58e+03 liters.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of qaqc: this record has 2310, the second reading none. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.589 | 1/h | 0.0001636 | 1/s | 1/h | exact (1) | T3:row4:col1 |
| MTT (h) | `Q81` · MTT | 0.236 | h |  |  | h | exact (1) | T3:row5:col1 |
| NN | `Q311` · n_transit | 2.00 |  |  |  |  | exact (1) | T3:row6:col1 |
| F | `Q40` · Fab | 1 |  |  |  |  | exact (1) | T3:row7:col1, F1:caption |
| CLAQc (liters/h) | `Q351` · CLm/F | 2960 | liters/h | 0.0008222 | m3/s | l/h | llm (0.6) | T3:row8:col1 |
| VcAQc (liters) | `Q63` · V1 | 13500 | liters | 13.5 | m3 | l | llm (0.6) | T3:row9:col1 |
| QAQc (liters/h) | `Q30` · Q | 2310 | liters/h | 0.0006417 | m3/s | l/h | llm (0.6) | T3:row10:col1 |
| VpAQc (liters) | `Q64` · V2 | 22700 | liters | 22.7 | m3 | l | llm (0.6) | T3:row11:col1 |
| CLDEAQc (liters/h) | `Q351` · CLm/F | 32.6 | liters/h | 9.056e-06 | m3/s | l/h | exact (1) | T3:row15:col1 |
| VcDEAQc (liters) | `Q63` · V1 | 258 | liters | 0.258 | m3 | l | exact (1) | T3:row16:col1 |
| Q1DEAQc (liters/h) | `Q30` · Q | 154 | liters/h | 4.278e-05 | m3/s | l/h | exact (1) | T3:row17:col1 |
| Vp1DEAQc (liters) | `Q64` · V2 | 2460 | liters | 2.46 | m3 | l | exact (1) | T3:row18:col1 |
| Q2DEAQc (liters/h) | `Q99` · Q2 | 31.3 | liters/h | 8.694e-06 | m3/s | l/h | exact (1) | T3:row19:col1 |
| Vp2DEAQc (liters) | `Q77` · V3 | 5580 | liters | 5.58 | m3 | l | exact (1) | T3:row20:col1 |
| Effect of first dose on F (%) | `Q87` · Frel | -22.4 |  |  |  |  | llm (0.6) | T3:row28:col1 |
| theta_q325_category | `Q900` · theta_q325_category | 3.6 |  |  |  |  |  | T3:row25:col1 |
| theta_q325_category | `Q900` · theta_q325_category | 3.22 |  |  |  |  |  | T3:row27:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'PMA50 for AQe (time [mo] from conception)' — extend the ontology if this is a real PK parameter (source ['T3:row24:col1'])
- dropped unlinked row (NIL): 'PMA50 for DEAQe (time [mo] from conception)' — extend the ontology if this is a real PK parameter (source ['T3:row26:col1'])
- covariate effect for Q325 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'No unit stated in text or footnotes; first-order absorption rate constants are conventionally expressed in 1/h in popula')
- metabolite desethylamodiaquine: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desethylamodiaquine
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [3]
- population split: 'typical valuea' subgroup of Ali_2018 (paper reports 2 populations: bsv or bova,b, typical valuea)
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 21 linked by role; re-tagged parent→desethylamodiaquine ×12, desethylamodiaquine→parent ×1
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row4:col2 = '0.409, 0.905'
- unparsed cell T3:row4:col7 = '62.0, 96.5'
- unparsed cell T3:row5:col2 = '0.161, 0.334'
- unparsed cell T3:row5:col7 = '60.6, 120'
- unparsed cell T3:row6:col2 = '1.09, 6.31'
- unparsed cell T3:row7:col7 = '26.5, 36.0'
- unparsed cell T3:row8:col2 = '2,600, 3,118'
- unparsed cell T3:row8:col7 = '24.2, 39.5'
- unparsed cell T3:row9:col2 = '7,423, 17,824'
- unparsed cell T3:row9:col7 = '19.4, 79.5'
- unparsed cell T3:row10:col2 = '1,877, 2,722'
- unparsed cell T3:row11:col2 = '17,956, 27,114'
- unparsed cell T3:row13:col2 = '16.1, 24.6'
- unparsed cell T3:row15:col2 = '29.7, 33.4'
- unparsed cell T3:row15:col7 = '15.5, 23.5'
- unparsed cell T3:row16:col2 = '201, 318'
- unparsed cell T3:row16:col7 = '36.0, 89.2'
- unparsed cell T3:row17:col2 = '131, 171'
- unparsed cell T3:row18:col2 = '2,129, 2,677'
- unparsed cell T3:row19:col2 = '26.8, 34.3'
- unparsed cell T3:row20:col2 = '4,968, 5,904'
- unparsed cell T3:row22:col2 = '22.2, 25.9'
- unparsed cell T3:row24:col2 = '10.50, 12.70'
- unparsed cell T3:row25:col2 = '3.23, 3.80'
- unparsed cell T3:row26:col2 = '11.60, 14.30'
- unparsed cell T3:row27:col2 = '2.85, 3.43'
- unparsed cell T3:row28:col2 = '−32.0, −15.6'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.955 (21/22 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[qaqc]` | 2310 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T3:row10:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T3:row17:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['T3:row8:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['T3:row15:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T3:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T3:row9:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T3:row16:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T3:row11:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T3:row18:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T3:row20:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['T3:row19:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.35e+04 L | ['T3:row9:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 258 L | ['T3:row16:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.27e+04 L | ['T3:row11:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.46e+03 L | ['T3:row18:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_metabolite_built[desethylamodiaquine] |  | fail | own V, CL and formation clearance &gt; 0 | {'V': 0, 'CL': 0, 'formation': 0} | desethylamodiaquine: V, CL, formation not set — the metabolite's compartment would be the template default |
| T3_metabolite_output[desethylamodiaquine] |  | skipped |  |  | the simulation recorded no per-molecule outputs |
| T3_molar_mass[desethylamodiaquine] |  | fail |  | {'MW': 0, 'MW_m1': 0} | a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule |
| T3_param_coverage |  | fail | 8 scholar param(s) emitted or defaulted | 6 covered | neither emitted nor in defaulted[]: ['V2', 'V2'] |
| T3_shared_parameters |  | pass | 7 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea/Amodiaquine_Ali2018_typical_valuea_modelica.zip" download>Amodiaquine_Ali2018_typical_valuea_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Ali AM, Penny MA, Smith TA, Workman L, Sasi P, Adjei GO et al. Population Pharmacokinetics of the Antimalarial Amodiaquine: a Pooled Analysis To Optimize Dosing. Antimicrobial agents and chemotherapy 62(10) (2018). [doi:10.1128/AAC.02193-17](https://doi.org/10.1128/AAC.02193-17)

**This record:** Pharmacolibrary v26.09, model `Amodiaquine_Ali2018_typical_valuea`. <https://pharmacolibrary.github.io/#/drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea>

```bibtex
@misc{pharmacolibrary_AmodiaquineAli2018typicalvaluea,
  title  = {{Pharmacolibrary model Amodiaquine_Ali2018_typical_valuea}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea},
  note   = {Parameters from doi:10.1128/AAC.02193-17},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamodiaquine%5D%20Amodiaquine_Ali2018_typical_valuea&body=Drug%3A%20amodiaquine%0ARecord%3A%20Amodiaquine_Ali2018_typical_valuea%0APaper%3A%20Ali_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:41 UTC</sub>
