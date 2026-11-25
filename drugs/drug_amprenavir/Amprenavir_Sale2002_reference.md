<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amprenavir&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/&quot;},{&quot;label&quot;:&quot;Sale_2002 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_reference&quot;,&quot;label&quot;:&quot;Okusanya_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Sale2002_reference&quot;,&quot;label&quot;:&quot;Sale_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Sale2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amprenavir_Johnson2014_reference&quot;,&quot;label&quot;:&quot;Johnson_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Johnson2014_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amprenavir — `Amprenavir_Sale2002_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The covariate scenarios were not simulated; t3_param_coverage (+1 more).

<div class="pk-model-meta" hidden drug="amprenavir" model-id="Amprenavir_Sale2002_reference" status="needs_review" stale="false" population="healthy HIV-seronegative adults" measured-compound="amprenavir" parameterization="apparent" topology="1C"></div>

## Citation
Sale M, Sadler BM, Stein DS. Pharmacokinetic modeling and simulations of interaction of amprenavir and ritonavir. Antimicrobial agents and chemotherapy 46(3):746–754 (2002).
  ·  DOI: [10.1128/AAC.46.3.746-754.2002](https://doi.org/10.1128/AAC.46.3.746-754.2002)

## Population and dosing

**Population:** healthy HIV-seronegative adults · condition healthy · age group adult · n = 54.

**Dosing:** 450, 900 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 6 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amprenavir/Amprenavir_Sale2002_reference/Amprenavir_Sale2002_reference.svg" alt="Amprenavir_Sale2002_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (θ1) (h⁻¹) | kabs | 1.31 | h⁻¹ |
| K (θ2) (h⁻¹) | kel | 0.50 | h⁻¹ |
| V/F (θ3) (liters) | V/F | 156 | liters |
| K23 (θ4) (h⁻¹) | kcomp | 0.486 | h⁻¹ |
| Km of RTV on K (θ7) | Km | 0.0122 | microg/ml |
| Lag time (θ8) (h) | tlag | 0.242 | h |
| theta_q314_weight_power | theta_q314_weight_power | -0.646 |  |
| theta_q319_wt | theta_q319_wt | 0.801 |  |
| theta_q415_weight_power | theta_q415_weight_power | 0.671 |  |
| theta_kabs_weight_power | theta_kabs_weight_power | 0.748 |  |
| theta_q314_age_power | theta_q314_age_power | 0.436 |  |
| theta_q61_sex_power | theta_q61_sex_power | -0.391 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The covariate scenarios were not simulated; t3_param_coverage (+1 more).**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (Km), so that value has no SI equivalent. Extracted — amprenavir: kabs 1.31 h⁻¹, kel 0.5 h⁻¹, V/F 156 liters, kcomp 0.486 h⁻¹, Km 0.0122 microg/ml, tlag 0.242 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of baseline v (θ3): this record has none, the second reading 1.40; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (θ1) (h⁻¹) | `Q49` · kabs | 1.31 | h⁻¹ | 0.0003639 | 1/s | 1/h | space_fold (0.95) | Sale_2002_table_1:row1:col1, Sale_2002_table_1:row12:col1 |
| K (θ2) (h⁻¹) | `Q47` · kel | 0.50 | h⁻¹ | 0.0001389 | 1/s | 1/h | space_fold (0.95) | Sale_2002_table_1:row2:col1 |
| V/F (θ3) (liters) | `Q76` · V/F | 156 | liters | 0.156 | m3 | l | space_fold (0.95) | Sale_2002_table_1:row3:col1 |
| K23 (θ4) (h⁻¹) | `Q48` · kcomp | 0.486 | h⁻¹ | 0.000135 | 1/s | 1/h | space_fold (0.95) | Sale_2002_table_1:row4:col1 |
| Km of RTV on K (θ7) | `Q1` · Km | 0.0122 | microg/ml |  |  | microg/ml | llm_confirmed (0.6) | Sale_2002_table_1:row7:col1 |
| Lag time (θ8) (h) | `Q83` · tlag | 0.242 | h | 871.2 | s | h | llm_confirmed (0.6) | Sale_2002_table_1:row8:col1 |
| theta_q314_weight_power | `Q900` · theta_q314_weight_power | -0.646 |  |  |  |  |  | Sale_2002_table_1:row9:col1 |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.801 |  |  |  |  |  | Sale_2002_table_1:row10:col1 |
| theta_q415_weight_power | `Q900` · theta_q415_weight_power | 0.671 |  |  |  |  |  | Sale_2002_table_1:row16:col1 |
| theta_kabs_weight_power | `Q900` · theta_kabs_weight_power | 0.748 |  |  |  |  |  | Sale_2002_table_1:row17:col1 |
| theta_q314_age_power | `Q900` · theta_q314_age_power | 0.436 |  |  |  |  |  | Sale_2002_table_1:row18:col1 |
| theta_q61_sex_power | `Q900` · theta_q61_sex_power | -0.391 |  |  |  |  |  | Sale_2002_table_1:row19:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q48 ('K32 (θ5) (h⁻¹)', value '0.0639') — already have one for this compound
- dropped PD-category row 'Emax of RTV on K (θ6)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Sale_2002_table_1:row6:col1'])
- dropped unlinked row (NIL): 'Baseline V (θ2) (hr⁻¹)' — extend the ontology if this is a real PK parameter (source ['Sale_2002_table_1:row13:col1'])
- dropped unlinked row (NIL): 'Baseline V (θ3) (liter)' — extend the ontology if this is a real PK parameter (source ['Sale_2002_table_1:row14:col1'])
- dropped duplicate Q83 ('Lag time (θ4) (h)', value '0.220') — already have one for this compound
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q415 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Km of RTV on K (θ7)' → microg/ml (from the popPK convention: 'The parameter is Km of RTV, representing the ritonavir concentration at which half-maximal inhibition of the elimination')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amprenavir
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- derived CL/F=78 L/h from Ke × V/F = CL/F (Q47 × Q76); not separately reported

**Extraction notes:**
- final table tab_0: no supported point estimates; targeted recovery unresolved
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (12/24 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[baseline v (θ3)]` |  | 1.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k (θ2)].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_kel_age_power]` |  | 0.436 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_age_power]` | 0.436 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_weight_power]` | -0.646 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_wt]` | 0.801 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q40_weight_power]` |  | 0.671 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q415_weight_power]` | 0.671 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_sex_power]` | -0.391 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_sex_power]` |  | -0.391 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_weight_power]` |  | -0.646 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_wt]` |  | 0.801 | only_one_extracted |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Sale_2002_table_1:row7:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Sale_2002_table_1:row2:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Sale_2002_table_1:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sale_2002_table_1:row1:col1', 'Sale_2002_table_1:row12:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Sale_2002_table_1:row3:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Sale_2002_table_1:row8:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 156 L | ['Sale_2002_table_1:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | pass | C_central (measured=amprenavir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered |  | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.5 (12 of 24 compared fields agree, 11 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.5 | cross-check contradicted by a second reader: verdict disputed; agreement 0.5 (12 of 24 compared fields agree, 11 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_cmin_ss | reference | skipped | 2.95 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 2.47 |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amprenavir/Amprenavir_Sale2002_reference/Amprenavir_Sale2002_reference_modelica.zip" download>Amprenavir_Sale2002_reference_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amprenavir/Amprenavir_Sale2002_reference/Amprenavir_Sale2002_reference_fmi.zip" download>Amprenavir_Sale2002_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5056 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00045 | kg |
| input | model | `Cl` | 2.167e-05 | m3/s |
| input | model | `VdPerKg` | 0.002229 | m3/kg |
| input | model | `ka` | 0.0003639 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sale M, Sadler BM, Stein DS. Pharmacokinetic modeling and simulations of interaction of amprenavir and ritonavir. Antimicrobial agents and chemotherapy 46(3):746–754 (2002). [doi:10.1128/AAC.46.3.746-754.2002](https://doi.org/10.1128/AAC.46.3.746-754.2002)

**This record:** Pharmacolibrary, model `Amprenavir_Sale2002_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amprenavir/Amprenavir_Sale2002_reference>

```bibtex
@misc{pharmacolibrary_AmprenavirSale2002reference,
  title  = {{Pharmacolibrary model Amprenavir_Sale2002_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amprenavir/Amprenavir_Sale2002_reference},
  note   = {Parameters from doi:10.1128/AAC.46.3.746-754.2002},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 450 mg, single dose, first-order absorption (ka 1.31 /h, F 1). Doses in the paper: 450, 900 mg.

<dbs-fmusim paramsurl="drugs/drug_amprenavir/Amprenavir_Sale2002_reference/Amprenavir_Sale2002_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_amprenavir/Amprenavir_Sale2002_reference/Amprenavir_Sale2002_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Amprenavir_Sale2002_reference_params.json` · controls `Amprenavir_Sale2002_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamprenavir%5D%20Amprenavir_Sale2002_reference&body=Drug%3A%20amprenavir%0ARecord%3A%20Amprenavir_Sale2002_reference%0APaper%3A%20Sale_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amprenavir/Amprenavir_Sale2002_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:27 UTC</sub>
