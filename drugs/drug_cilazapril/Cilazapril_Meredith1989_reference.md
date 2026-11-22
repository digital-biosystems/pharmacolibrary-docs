<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;cilazapril&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/&quot;},{&quot;label&quot;:&quot;Meredith_1989 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cilazapril_Meredith1989_reference&quot;,&quot;label&quot;:&quot;Meredith_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/Cilazapril_Meredith1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cilazapril_Song2002_reference&quot;,&quot;label&quot;:&quot;Song_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/Cilazapril_Song2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cilazapril_Williams1989v2_reference&quot;,&quot;label&quot;:&quot;Williams_1989_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/Cilazapril_Williams1989v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cilazapril — `Cilazapril_Meredith1989_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record lacks a link between parent cilazapril and metabolite cilazaprilat, and the apparent clearance calculation failed.

<div class="pk-model-meta" hidden drug="cilazapril" model-id="Cilazapril_Meredith1989_reference" status="needs_review" stale="false" population="essential hypertension" measured-compound="cilazaprilat" parameterization="apparent" topology="1C"></div>

## Citation
Meredith PA, Elliott HL, Reid JL, Francis RJ. The pharmacokinetics and angiotensin converting enzyme inhibition dynamics of cilazapril in essential hypertension. British journal of clinical pharmacology 27 Suppl 2(Suppl 2):263S–266S (1989).
  ·  DOI: [10.1111/j.1365-2125.1989.tb03490.x](https://doi.org/10.1111/j.1365-2125.1989.tb03490.x)

## Population and dosing

**Population:** essential hypertension · condition essential hypertension · age group adult.

**Dosing:** 5, 10, 20 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed cilazapril, measured cilazaprilat.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cilazapril/Cilazapril_Meredith1989_reference/Cilazapril_Meredith1989_reference.svg" alt="Cilazapril_Meredith1989_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Fitted coefficients: ke (h-1) | kel | 0.60 | h-1 |
| Fitted coefficients: ka (h-1) | kabs | 3.32 | h-1 |
| Fitted coefficients: P (ng ml-1) | equation variable | 3.23 | ng ml-1 |
| Fitted coefficients: V/F (l) | V/F | 30.5 | l |
| Derived parameters: t1/2 (h) | t1/2z | 1.4 | h |
| Derived parameters: CL/F (initial) (l h-1) | CLm/F | 16.0 | l h-1 |
| Derived parameters: Ct,90 (ng ml-1) | Ct | 3.0 | ng ml-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.467). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record lacks a link between parent cilazapril and metabolite cilazaprilat, and the apparent clearance calculation failed.**

The structure defines a metabolite but lists no links, preventing a path from the dose to cilazaprilat. Additionally, the derived parameter check failed to correctly bind the apparent clearance value. The model builder also defaulted the lag time and assumed full bioavailability, while a second reader disagreed on the presence of specific fitted coefficients and the parent-metabolite connection. Extracted — cilazaprilat: kel 0.6 h-1, kabs 3.32 h-1, V/F 30.5 l, t1/2z 1.4 h, CLm/F 16 l h-1, Ct 3 ng ml-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading cilazapril → cilazaprilat (metabolism); it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Fitted coefficients: ke (h-1) | `Q47` · kel | 0.60 | h-1 | 0.0001667 | 1/s | 1/h | exact (1) | Meredith_1989_table_p3_1:row0:col1, Meredith_1989_table_p3_1:row1:col1, Meredith_1989_table_p3_1:row2:col1 |
| Fitted coefficients: ka (h-1) | `Q49` · kabs | 3.32 | h-1 | 0.0009222 | 1/s | 1/h | exact (1) | Meredith_1989_table_p3_1:row0:col2, Meredith_1989_table_p3_1:row1:col2, Meredith_1989_table_p3_1:row2:col2 |
| Fitted coefficients: P (ng ml-1) | `Q900` · equation variable | 3.23 | ng ml-1 |  |  | ng/ml | llm (0.6) | Meredith_1989_table_p3_1:row0:col3, Meredith_1989_table_p3_1:row1:col3, Meredith_1989_table_p3_1:row2:col3 |
| Fitted coefficients: V/F (l) | `Q76` · V/F | 30.5 | l | 0.0305 | m3 | l | exact (1) | Meredith_1989_table_p3_1:row0:col7, Meredith_1989_table_p3_1:row1:col7, Meredith_1989_table_p3_1:row2:col7 |
| Derived parameters: t1/2 (h) | `Q57` · t1/2z | 1.4 | h | 5040 | s | h | llm_confirmed (0.6) | Meredith_1989_table_p3_1:row0:col8, Meredith_1989_table_p3_1:row1:col8, Meredith_1989_table_p3_1:row2:col8 |
| Derived parameters: CL/F (initial) (l h-1) | `Q351` · CLm/F | 16.0 | l h-1 | 4.444e-06 | m3/s | l/h | exact (1) | Meredith_1989_table_p3_1:row0:col10, Meredith_1989_table_p3_1:row1:col10, Meredith_1989_table_p3_1:row2:col10 |
| Derived parameters: Ct,90 (ng ml-1) | `Q75` · Ct | 3.0 | ng ml-1 | 3e-06 | kg/m3 | ng/ml | llm_confirmed (0.6) | Meredith_1989_table_p3_1:row0:col13, Meredith_1989_table_p3_1:row1:col13, Meredith_1989_table_p3_1:row2:col13 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '20' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'Fitted coefficients: C150 (ng ml-1)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Meredith_1989_table_p3_1:row0:col4', 'Meredith_1989_table_p3_1:row1:col4', 'Meredith_1989_table_p3_1:row2:col4'])
- dropped PD-category row 'Fitted coefficients: C50 (ng ml-1)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Meredith_1989_table_p3_1:row0:col5', 'Meredith_1989_table_p3_1:row1:col5', 'Meredith_1989_table_p3_1:row2:col5'])
- dropped PD-category row 'Fitted coefficients: Imax (%)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Meredith_1989_table_p3_1:row0:col6', 'Meredith_1989_table_p3_1:row1:col6', 'Meredith_1989_table_p3_1:row2:col6'])
- dropped duplicate Q57 ('Derived parameters: t1/2,2 (h)', value '74.7') — already have one for this compound
- dropped duplicate Q27 ('Derived parameters: CL/F (terminal) (l h-1)', value '0.46') — already have one for this compound
- dropped PD-category row 'Derived parameters: Ct,50 (ng ml-1)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Meredith_1989_table_p3_1:row0:col12', 'Meredith_1989_table_p3_1:row1:col12', 'Meredith_1989_table_p3_1:row2:col12'])
- metabolite cilazaprilat: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cilazaprilat
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Fitted coefficients: V/F (l)' is the general volume)
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 15 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- derived CL/F=18.3 L/h from Ke × V/F = CL/F (Q47 × Q76); not separately reported

**Extraction notes:**
- transposed table Meredith_1989_table_p3_1: logical view retains original source coordinates
- table Meredith_1989_table_1: no_numeric_grid
- table Meredith_1989_table_1: ragged_grid
- companion parameter table 1 transcribed (0 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.467 (7/15 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['cilazapril', 'cilazaprilat', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[derived parameters: ct,90]` | 3.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[derived parameters: t1/2,2]` |  | 74.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fitted coefficients: c150]` |  | 0.089 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fitted coefficients: ka]` |  | 3.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fitted coefficients: ka]` | 3.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fitted coefficients: p]` | 3.23 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fitted coefficients: v/f].parameter_id` | Q76 | Q290 | mismatch |

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Meredith_1989_table_p3_1:row0:col10', 'Meredith_1989_table_p3_1:row1:col10', 'Meredith_1989_table_p3_1:row2:col10'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Meredith_1989_table_p3_1:row0:col1', 'Meredith_1989_table_p3_1:row1:col1', 'Meredith_1989_table_p3_1:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Meredith_1989_table_p3_1:row0:col2', 'Meredith_1989_table_p3_1:row1:col2', 'Meredith_1989_table_p3_1:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Meredith_1989_table_p3_1:row0:col8', 'Meredith_1989_table_p3_1:row1:col8', 'Meredith_1989_table_p3_1:row2:col8'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Meredith_1989_table_p3_1:row0:col13', 'Meredith_1989_table_p3_1:row1:col13', 'Meredith_1989_table_p3_1:row2:col13'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Meredith_1989_table_p3_1:row0:col7', 'Meredith_1989_table_p3_1:row1:col7', 'Meredith_1989_table_p3_1:row2:col7'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 30.5 L | ['Meredith_1989_table_p3_1:row0:col7', 'Meredith_1989_table_p3_1:row1:col7', 'Meredith_1989_table_p3_1:row2:col7'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_derived_parameters | fail | 1 deterministic parameter derivation(s) emitted | not correctly bound: ['CL/F'] | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable | pass | C_central (measured=cilazaprilat) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| X1_cross_check | skipped |  |  | no second reading of this record |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 3.32 /h, F 1). Doses in the paper: 5, 10, 20 mg.

<dbs-fmusim paramsurl="drugs/drug_cilazapril/Cilazapril_Meredith1989_reference/Cilazapril_Meredith1989_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_cilazapril/Cilazapril_Meredith1989_reference/Cilazapril_Meredith1989_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cilazapril_Meredith1989_reference_params.json` · controls `Cilazapril_Meredith1989_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcilazapril%5D%20Cilazapril_Meredith1989_reference&body=Drug%3A%20cilazapril%0ARecord%3A%20Cilazapril_Meredith1989_reference%0APaper%3A%20Meredith_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cilazapril/Cilazapril_Meredith1989_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 11:16 UTC</sub>
