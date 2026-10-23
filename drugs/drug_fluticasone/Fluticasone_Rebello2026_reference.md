<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;fluticasone&quot;,&quot;href&quot;:&quot;drugs/drug_fluticasone/&quot;},{&quot;label&quot;:&quot;Rebello_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluticasone_Rebello2026_reference&quot;,&quot;label&quot;:&quot;Rebello_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluticasone/Fluticasone_Rebello2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluticasone — `Fluticasone_Rebello2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 1.4e-07, model 0); the model does not reproduce the paper's time of the peak (tmax) (paper 1.84, model 0).

<div class="pk-model-meta" hidden drug="fluticasone" model-id="Fluticasone_Rebello2026_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="fluticasone propionate" parameterization="apparent" topology="2C"></div>

## Citation
Rebello J, Shukla S, Naidu K, Patil J, Morde N, Ducharme MP. Understanding Pulmonary and Systemic Pharmacokinetics of Inhaled Fluticasone Propionate in Healthy Subjects Using Population PK Analysis. European journal of drug metabolism and pharmacokinetics (2026).
  ·  DOI: [10.1007/s13318-026-00989-0](https://doi.org/10.1007/s13318-026-00989-0)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult.

**Dosing:** 1 mg, inhaled, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference.svg" alt="Fluticasone_Rebello2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc/F (*) | V1/F | 70.3 | L |
| Vp/F (*) | V2/F | 84.4 | L |
| Vp2/F (*) | V3/F | 46.2 | L |
| CL/F (*) | CL/F | 27.0 | L/h |
| CLD/F (*) | Q/F | 60.2 | L/h |
| kaINHD1c | kabs | 46.8 | 1/h |
| TlagD1c | tlag | 31.6 | h |
| Frel | Frel | 34.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.867). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 1.4e-07, model 0); the model does not reproduce the paper's time of the peak (tmax) (paper 1.84, model 0).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. None of the extracted parameters is fluticasone's own; they describe fluticasone propionate. Extracted — fluticasone propionate: V1/F 70.3 L, V2/F 84.4 L, V3/F 46.2 L, CL/F 27 L/h, Q/F 60.2 L/h, kabs 46.8 1/h, tlag 31.6 h, Frel 34.2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of % systemic exposure due to central lung absorption: this record has none, the second reading 34.5; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc/F (*) | `Q290` · V1/F | 70.3 | L | 0.0703 | m3 | L | exact (1) | Tab5:row3:col2, Tab5:row3:col3, Tab5:row3:col4, Tab5:row3:col5 |
| Vp/F (*) | `Q82` · V2/F | 84.4 | L | 0.0844 | m3 | L | exact (1) | Tab5:row4:col2, Tab5:row4:col3, Tab5:row4:col4, Tab5:row4:col5 |
| Vp2/F (*) | `Q78` · V3/F | 46.2 | L | 0.0462 | m3 | L | exact (1) | Tab5:row5:col2, Tab5:row5:col3, Tab5:row5:col4, Tab5:row5:col5 |
| CL/F (*) | `Q27` · CL/F | 27.0 | L/h | 7.5e-06 | m3/s | L/h | exact (1) | Tab5:row6:col2, Tab5:row6:col3, Tab5:row6:col4, Tab5:row6:col5 |
| CLD/F (*) | `Q69` · Q/F | 60.2 | L/h | 1.672e-05 | m3/s | L/h | exact (1) | Tab5:row7:col2, Tab5:row7:col3, Tab5:row7:col4, Tab5:row7:col5 |
| kaINHD1c | `Q49` · kabs | 46.8 | 1/h | 0.013 | 1/s | 1/h | llm (0.6) | Rebello_2026_table_4:row2:col2, Rebello_2026_table_4:row2:col3, Rebello_2026_table_4:row2:col4, Rebello_2026_table_4:row2:col5 |
| TlagD1c | `Q83` · tlag | 31.6 | h | 1.138e+05 | s | h | llm (0.6) | Rebello_2026_table_4:row7:col2, Rebello_2026_table_4:row7:col3, Rebello_2026_table_4:row7:col4, Rebello_2026_table_4:row7:col5 |
| Frel | `Q87` · Frel | 34.2 |  |  |  |  | exact (1) | Rebello_2026_table_4:row19:col2, Rebello_2026_table_4:row19:col3, Rebello_2026_table_4:row19:col4, Rebello_2026_table_4:row19:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Systemic parameters—Formulation 1/2' — extend the ontology if this is a real PK parameter (source ['Tab5:row2:col1', 'Tab5:row2:col2', 'Tab5:row2:col3', 'Tab5:row2:col4', 'Tab5:row2:col5'])
- dropped duplicate Q69 ('CLD2/F (*)', value '61.9') — already have one for this compound
- dropped duplicate Q49 ('kaINHD1p', value '51.2') — already have one for this compound
- dropped duplicate Q49 ('kaINHGD1', value '9.6') — already have one for this compound
- dropped unlinked row (NIL): '% Systemic exposure due to central lung absorption' — extend the ontology if this is a real PK parameter (source ['Rebello_2026_table_4:row5:col2', 'Rebello_2026_table_4:row5:col3', 'Rebello_2026_table_4:row5:col4', 'Rebello_2026_table_4:row5:col5', 'Rebello_2026_table_4:row14:col2', 'Rebello_2026_table_4:row14:col3', 'Rebello_2026_table_4:row14:col4', 'Rebello_2026_table_4:row14:col5'])
- dropped unlinked row (NIL): '% Systemic exposure due to peripheral lung absorption' — extend the ontology if this is a real PK parameter (source ['Rebello_2026_table_4:row6:col2', 'Rebello_2026_table_4:row6:col3', 'Rebello_2026_table_4:row6:col4', 'Rebello_2026_table_4:row6:col5', 'Rebello_2026_table_4:row15:col2', 'Rebello_2026_table_4:row15:col3', 'Rebello_2026_table_4:row15:col4', 'Rebello_2026_table_4:row15:col5'])
- dropped duplicate Q83 ('TlagD1p', value '20.4') — already have one for this compound
- dropped duplicate Q83 ('TlagGD1', value '47.5') — already have one for this compound
- dropped duplicate Q49 ('kaINHD2c', value '44.7') — already have one for this compound
- dropped duplicate Q49 ('kaINHD2p', value '56.8') — already have one for this compound
- dropped duplicate Q49 ('kaINHGD2', value '17.9') — already have one for this compound
- dropped duplicate Q83 ('TlagD2c', value '24.2') — already have one for this compound
- dropped duplicate Q83 ('TlagD2p', value '50.7') — already have one for this compound
- dropped duplicate Q83 ('TlagGD2', value '63.4') — already have one for this compound
- implicit units: 'Vc/F (*)' → L (from the popPK convention: 'Vc/F is a volume of distribution parameter. In population PK, volumes are conventionally expressed in liters (L). The va')
- implicit units: 'Vp/F (*)' → L (from the popPK convention: 'Vp/F is a volume of distribution parameter. In population PK, volumes are conventionally expressed in liters (L). The va')
- implicit units: 'Vp2/F (*)' → L (from the popPK convention: 'Vp2/F is a volume of distribution parameter. In population PK, volumes are conventionally expressed in liters (L). The v')
- implicit units: 'CL/F (*)' → L/h (from the popPK convention: 'CL/F is a clearance parameter. In population PK, clearances are conventionally expressed in liters per hour (L/h). The v')
- implicit units: 'CLD/F (*)' → L/h (from the popPK convention: 'CLD/F is an intercompartmental clearance parameter. In population PK, intercompartmental clearances are conventionally e')
- implicit units: 'kaINHD1c' → 1/h (from the paper text: "Table 4 explicitly lists the unit for 'kaINHD1c' as 'h−1' (which is equivalent to 1/h) in the 'Units' column.")
- implicit units: 'TlagD1c' → h (from the popPK convention: 'TlagD1c is a lag time parameter. In population PK, lag times are conventionally expressed in hours (h). The value 31.6 i')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fluticasone propionate
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell Rebello_2026_table_4:row2:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row3:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row4:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row11:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row12:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row13:col1 = 'h−1'
- companion parameter table 4 transcribed (68 record(s), model stage 'final')
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[% systemic exposure due to central lung absorption]` |  | 34.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 140.28 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab5:row6:col2', 'Tab5:row6:col3', 'Tab5:row6:col4', 'Tab5:row6:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab5:row3:col2', 'Tab5:row3:col3', 'Tab5:row3:col4', 'Tab5:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Rebello_2026_table_4:row2:col2', 'Rebello_2026_table_4:row2:col3', 'Rebello_2026_table_4:row2:col4', 'Rebello_2026_table_4:row2:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab5:row7:col2', 'Tab5:row7:col3', 'Tab5:row7:col4', 'Tab5:row7:col5'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab5:row5:col2', 'Tab5:row5:col3', 'Tab5:row5:col4', 'Tab5:row5:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab5:row4:col2', 'Tab5:row4:col3', 'Tab5:row4:col4', 'Tab5:row4:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['Rebello_2026_table_4:row7:col2', 'Rebello_2026_table_4:row7:col3', 'Rebello_2026_table_4:row7:col4', 'Rebello_2026_table_4:row7:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 27 L/h | ['Tab5:row6:col2', 'Tab5:row6:col3', 'Tab5:row6:col4', 'Tab5:row6:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 70.3 L | ['Tab5:row3:col2', 'Tab5:row3:col3', 'Tab5:row3:col4', 'Tab5:row3:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 84.4 L | ['Tab5:row4:col2', 'Tab5:row4:col3', 'Tab5:row4:col4', 'Tab5:row4:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=fluticasone propionate) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 1.403e-07 | 0 | 0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.557e-07 | 0 | 0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.313e-07 | 0 | 0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.468e-07 | 0 | 0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.3e-10 | 0 | 0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.4e-10 | 0 | 0 | pg/ml→SI vs simulated kg/m3 |
| T1_tmax | reference | fail | 1.84 | 0 | 0 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.58 | 0 | 0 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.5 | 0 | 0 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.5 | 0 | 0 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_modelica.zip" download>Fluticasone_Rebello2026_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_fmi.zip" download>Fluticasone_Rebello2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_matlab.zip" download>Fluticasone_Rebello2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_matlab_simbio.zip" download>Fluticasone_Rebello2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_sbml.zip" download>Fluticasone_Rebello2026_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_cellml.zip" download>Fluticasone_Rebello2026_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5006 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1.138e+05 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-06 | kg |
| input | model | `Cl` | 7.5e-06 | m3/s |
| input | model | `VdPerKg` | 0.001004 | m3/kg |
| input | model | `k12` | 0.0002379 | 1/s |
| input | model | `k21` | 0.0001981 | 1/s |
| input | model | `ka` | 0.013 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Rebello J, Shukla S, Naidu K, Patil J, Morde N, Ducharme MP. Understanding Pulmonary and Systemic Pharmacokinetics of Inhaled Fluticasone Propionate in Healthy Subjects Using Population PK Analysis. European journal of drug metabolism and pharmacokinetics (2026). [doi:10.1007/s13318-026-00989-0](https://doi.org/10.1007/s13318-026-00989-0)

**This record:** Pharmacolibrary v26.09, model `Fluticasone_Rebello2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_fluticasone/Fluticasone_Rebello2026_reference>

```bibtex
@misc{pharmacolibrary_FluticasoneRebello2026reference,
  title  = {{Pharmacolibrary model Fluticasone_Rebello2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fluticasone/Fluticasone_Rebello2026_reference},
  note   = {Parameters from doi:10.1007/s13318-026-00989-0},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 46.8 /h, lag 1.9e+03 min, F 1). Dose in the paper: 1 mg.

<dbs-fmusim paramsurl="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Fluticasone_Rebello2026_reference_params.json` · controls `Fluticasone_Rebello2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluticasone%5D%20Fluticasone_Rebello2026_reference&body=Drug%3A%20fluticasone%0ARecord%3A%20Fluticasone_Rebello2026_reference%0APaper%3A%20Rebello_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluticasone/Fluticasone_Rebello2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:06 UTC</sub>
