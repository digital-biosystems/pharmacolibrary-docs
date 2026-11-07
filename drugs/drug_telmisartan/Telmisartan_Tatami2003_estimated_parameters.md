<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;telmisartan&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/&quot;},{&quot;label&quot;:&quot;Tatami_2003 \u00b7 estimated_parameters&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Telmisartan_Huang2019_reference&quot;,&quot;label&quot;:&quot;Huang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Huang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Ieiri2011_reference&quot;,&quot;label&quot;:&quot;Ieiri_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Ieiri2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Petersen2024_reference&quot;,&quot;label&quot;:&quot;Petersen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Petersen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Tatami2003_final&quot;,&quot;label&quot;:&quot;Tatami_2003_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Jeong2025_reference&quot;,&quot;label&quot;:&quot;Jeong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Jeong2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Tatami2003_estimated_parameters&quot;,&quot;label&quot;:&quot;Tatami_2003_estimated_parameters&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_estimated_parameters.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# telmisartan — `Telmisartan_Tatami2003_estimated_parameters`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="telmisartan" model-id="Telmisartan_Tatami2003_estimated_parameters" status="rejected" stale="false" population="healthy volunteers and hypertensive patients" measured-compound="telmisartan" parameterization="mechanistic" topology="1C"></div>

## Citation
Tatami S, Sarashina A, Yamamura N, Igarashi T, Tanigawara Y. Population pharmacokinetics of an angiotensin II receptor antagonist, telmisartan, in healthy volunteers and hypertensive patients. Drug metabolism and pharmacokinetics 18(3):203–211 (2003).
  ·  DOI: [10.2133/dmpk.18.203](https://doi.org/10.2133/dmpk.18.203)

## Population and dosing

**Population:** healthy volunteers and hypertensive patients · condition healthy, hypertension · age group adult · n = 149.

**Dosing:** 20, 40, 80 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_telmisartan/Telmisartan_Tatami2003_estimated_parameters/Telmisartan_Tatami2003_estimated_parameters.svg" alt="Telmisartan_Tatami2003_estimated_parameters diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1 | equation variable | 40 | ng W mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. A reported unit could not be converted (equation variable), so that value has no SI equivalent. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[1].parameter_id`: this record has Q900, the second reading Q32; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 40 | ng W mL | ng·wml | llm (0.6) | Tatami_2003_table_3:row1:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- unit_dimension_unknown: 'ng W mL' (equation variable)
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row2:col5'])
- dropped unlinked row (NIL): '3M a l e80' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row3:col5'])
- dropped unlinked row (NIL): '4M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row4:col5'])
- dropped duplicate Q900 ('5M a l e6 0', value '125') — already have one for this compound
- dropped unlinked row (NIL): '6M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row6:col5'])
- dropped unlinked row (NIL): '7M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row7:col5'])
- dropped unlinked row (NIL): '8M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row8:col5'])
- table mostly unlinked (6/8 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=telmisartan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'estimated parameters' subgroup of Tatami_2003 (paper reports 5 populations: covariates, estimated parameters, estimated value, final estimates of the model parameters, value)
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row1:col2', 'Tatami_2003_table_3:row1:col3', 'Tatami_2003_table_3:row1:col5', 'Tatami_2003_table_3:row1:col6', 'Tatami_2003_table_3:row1:col7', 'Tatami_2003_table_3:row1:col8', 'Tatami_2003_table_3:row1:col10', 'Tatami_2003_table_3:row1:col11', 'Tatami_2003_table_3:row1:col12', 'Tatami_2003_table_3:row1:col13', 'Tatami_2003_table_3:row1:col14'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row2:col2', 'Tatami_2003_table_3:row2:col3', 'Tatami_2003_table_3:row2:col5', 'Tatami_2003_table_3:row2:col6', 'Tatami_2003_table_3:row2:col7', 'Tatami_2003_table_3:row2:col8', 'Tatami_2003_table_3:row2:col10', 'Tatami_2003_table_3:row2:col11', 'Tatami_2003_table_3:row2:col12', 'Tatami_2003_table_3:row2:col13', 'Tatami_2003_table_3:row2:col14'])
- dropped unlinked row (NIL): '3M a l e80' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row3:col3', 'Tatami_2003_table_3:row3:col4', 'Tatami_2003_table_3:row3:col5', 'Tatami_2003_table_3:row3:col6', 'Tatami_2003_table_3:row3:col7', 'Tatami_2003_table_3:row3:col8', 'Tatami_2003_table_3:row3:col10', 'Tatami_2003_table_3:row3:col11', 'Tatami_2003_table_3:row3:col12'])
- dropped unlinked row (NIL): '4M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row4:col3', 'Tatami_2003_table_3:row4:col4', 'Tatami_2003_table_3:row4:col5', 'Tatami_2003_table_3:row4:col6', 'Tatami_2003_table_3:row4:col7', 'Tatami_2003_table_3:row4:col8', 'Tatami_2003_table_3:row4:col10', 'Tatami_2003_table_3:row4:col11', 'Tatami_2003_table_3:row4:col12'])
- dropped unlinked row (NIL): '5M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row5:col3', 'Tatami_2003_table_3:row5:col4', 'Tatami_2003_table_3:row5:col5', 'Tatami_2003_table_3:row5:col6', 'Tatami_2003_table_3:row5:col7', 'Tatami_2003_table_3:row5:col8', 'Tatami_2003_table_3:row5:col10', 'Tatami_2003_table_3:row5:col11', 'Tatami_2003_table_3:row5:col12'])
- dropped unlinked row (NIL): '6M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row6:col2', 'Tatami_2003_table_3:row6:col3', 'Tatami_2003_table_3:row6:col4', 'Tatami_2003_table_3:row6:col5', 'Tatami_2003_table_3:row6:col6', 'Tatami_2003_table_3:row6:col7', 'Tatami_2003_table_3:row6:col8', 'Tatami_2003_table_3:row6:col10', 'Tatami_2003_table_3:row6:col11'])
- dropped unlinked row (NIL): '7M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row7:col2', 'Tatami_2003_table_3:row7:col3', 'Tatami_2003_table_3:row7:col4', 'Tatami_2003_table_3:row7:col5', 'Tatami_2003_table_3:row7:col6', 'Tatami_2003_table_3:row7:col7', 'Tatami_2003_table_3:row7:col8', 'Tatami_2003_table_3:row7:col10', 'Tatami_2003_table_3:row7:col11'])
- dropped unlinked row (NIL): '8M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row8:col2', 'Tatami_2003_table_3:row8:col3', 'Tatami_2003_table_3:row8:col4', 'Tatami_2003_table_3:row8:col5', 'Tatami_2003_table_3:row8:col6', 'Tatami_2003_table_3:row8:col7', 'Tatami_2003_table_3:row8:col8', 'Tatami_2003_table_3:row8:col10', 'Tatami_2003_table_3:row8:col11'])
- dropped unlinked row (NIL): 's 2' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_4:row7:col4'])
- implicit units: 'CLW F' → L/h (from the paper text: "The text explicitly states: 'The basic pharmacokinetic parameters were oral clearance (CL W F, L W hr)'")
- implicit units: 'V 1 W F' → L (from the paper text: "The text explicitly states: 'volume of distribution for the central compartment (V1 W F, L)'")
- implicit units: 'Q W F' → L/h (from the paper text: "The text explicitly states: 'inter-compartmen- tal clearance (Q W F, L W hr)'")
- implicit units: 'V 2 W F' → L (from the paper text: "The text explicitly states: 'volume of distribution for the peripheral compartment (V 2 W F, L)'")
- implicit units: 'Ka' → 1/h (from the paper text: "The text explicitly states: 'ˆrst-order ab- sorption rate constant (Ka, hr -1 )'")
- implicit units: 'Absorption lag time' → h (from the paper text: "The text explicitly states: 'absorption lag time (ALAG, hr)'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=telmisartan
- population split: 'estimated parameters' subgroup of Tatami_2003 (paper reports 5 populations: estimated parameters, estimated value, final estimates of the model parameters, hypothesized value, value)

**Extraction notes:**
- table Tatami_2003_table_2: units_need_context
- companion parameter table 2 transcribed (39 record(s))
- table Tatami_2003_table_3: unknown_column_role
- table Tatami_2003_table_3: ragged_grid
- table Tatami_2003_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (87 record(s))
- table Tatami_2003_table_4: unknown_column_role
- table Tatami_2003_table_4: ragged_grid
- table Tatami_2003_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1].parameter_id` | Q900 | Q32 | mismatch |
| `gpt-oss-120b` | `parameters[2]` |  | 40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[4m a l e6 0]` |  | 367 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 102 /h, lag 6.07e+03 min, F 1). Doses in the paper: 20, 40, 80 mg.

<dbs-fmusim paramsurl="drugs/drug_telmisartan/Telmisartan_Tatami2003_estimated_parameters/Telmisartan_Tatami2003_estimated_parameters_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_telmisartan/Telmisartan_Tatami2003_estimated_parameters/Telmisartan_Tatami2003_estimated_parameters_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Telmisartan_Tatami2003_estimated_parameters_params.json` · controls `Telmisartan_Tatami2003_estimated_parameters_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelmisartan%5D%20Telmisartan_Tatami2003_estimated_parameters&body=Drug%3A%20telmisartan%0ARecord%3A%20Telmisartan_Tatami2003_estimated_parameters%0APaper%3A%20Tatami_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telmisartan/Telmisartan_Tatami2003_estimated_parameters%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 16:53 UTC</sub>
