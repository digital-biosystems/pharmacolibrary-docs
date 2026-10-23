<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;olaparib&quot;,&quot;href&quot;:&quot;drugs/drug_olaparib/&quot;},{&quot;label&quot;:&quot;Velev_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olaparib_Velev2021_reference&quot;,&quot;label&quot;:&quot;Velev_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olaparib/Olaparib_Velev2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# olaparib — `Olaparib_Velev2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Absolute bioavailability (F) and lag time (Tlag) were left at library defaults, while relative bioavailability (Frel = 0.282) was recorded for olaparib.

<div class="pk-model-meta" hidden drug="olaparib" model-id="Olaparib_Velev2021_reference" status="needs_review" stale="false" population="BRCA-mutated ovarian cancer patients" measured-compound="olaparib" parameterization="mechanistic" topology="2C"></div>

## Citation
Velev M, Puszkiel A, Blanchet B, de Percin S, Delanoy N, Medioni J et al. Association between Olaparib Exposure and Early Toxicity in BRCA-Mutated Ovarian Cancer Patients: Results from a Retrospective Multicenter Study. Pharmaceuticals (Basel, Switzerland) 14(8) (2021).
  ·  DOI: [10.3390/ph14080804](https://doi.org/10.3390/ph14080804)

## Population and dosing

**Population:** BRCA-mutated ovarian cancer patients · condition ovarian cancer · age group adult · n = , 22.

**Dosing:** 100, 150, 200, 300, 400 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference.svg" alt="Olaparib_Velev2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L h−1) | CL | 3.60 | L h−1 |
| Vc (L) | V1 | 2.57 | L |
| Vp (L) | V2 | 19.7 | L |
| Q (L h−1) | Q | 1.11 | L h−1 |
| Frel capsule b | Frel | 0.282 | Mean Estimate from Zhou et al. |
| ka (h−1) capsule | kabs | 0.247 | 1/h |
| D1 (h) capsule | D1 | 0.901 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absolute bioavailability (F) and lag time (Tlag) were left at library defaults, while relative bioavailability (Frel = 0.282) was recorded for olaparib.**

The record provides a relative bioavailability value of 0.282 but lacks an explicit absolute bioavailability (F), causing the model to use generic placeholders. The lag time (Tlag) was similarly defaulted rather than extracted, despite the presence of specific absorption parameters like kabs (0.247 1/h) and D1 (0.901 h). Consequently, the simulated exposure relies on conventions not supported by the specific study data. Extracted — olaparib: CL 3.6 L h−1, V1 2.57 L, V2 19.7 L, Q 1.11 L h−1, Frel 0.282 Mean Estimate from Zhou et al., kabs 0.247 1/h, D1 0.901 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has olaparib, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L h−1) | `Q22` · CL | 3.60 | L h−1 | 1e-06 | m3/s | l/h | exact (1) | pharmaceuticals-14-00804-t0A1:row1:col2, Velev_2021_table_3:row0:col2 |
| Vc (L) | `Q63` · V1 | 2.57 | L | 0.00257 | m3 | l | exact (1) | pharmaceuticals-14-00804-t0A1:row3:col2, Velev_2021_table_3:row2:col2 |
| Vp (L) | `Q64` · V2 | 19.7 | L | 0.0197 | m3 | l | exact (1) | pharmaceuticals-14-00804-t0A1:row4:col2, Velev_2021_table_3:row3:col2 |
| Q (L h−1) | `Q30` · Q | 1.11 | L h−1 | 3.083e-07 | m3/s | l/h | exact (1) | pharmaceuticals-14-00804-t0A1:row5:col2, Velev_2021_table_3:row4:col2 |
| Frel capsule b | `Q87` · Frel | 0.282 | Mean Estimate from Zhou et al. |  |  | m·eanestimatefromzhouetal | llm_confirmed (0.6) | pharmaceuticals-14-00804-t0A1:row6:col1, pharmaceuticals-14-00804-t0A1:row6:col2, Velev_2021_table_3:row5:col1, Velev_2021_table_3:row5:col2 |
| ka (h−1) capsule | `Q49` · kabs | 0.247 | 1/h | 6.861e-05 | 1/s | 1/h | llm_confirmed (0.6) | pharmaceuticals-14-00804-t0A1:row8:col2, Velev_2021_table_3:row7:col2 |
| D1 (h) capsule | `Q310` · D1 | 0.901 | h | 3244 | s | h | llm_confirmed (0.6) | pharmaceuticals-14-00804-t0A1:row11:col2, Velev_2021_table_3:row10:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'Mean Estimate from Zhou et al.' (CL)
- dropped duplicate Q22 ('θECOG-PS on CL', value '-0.240') — already have one for this compound
- unit_dimension_unknown: 'Mean Estimate from Zhou et al.' (Frel)
- dropped duplicate Q87 ('Frel tablet c', value '0.627') — already have one for this compound
- unit_dimension_unknown: 'Mean Estimate from Zhou et al.' (kabs)
- dropped duplicate Q49 ('ka (h−1) tabletstrength 100 mg', value '0.374') — already have one for this compound
- dropped duplicate Q49 ('ka (h−1) tabletstrength 150 mg', value '0.267') — already have one for this compound
- unit_dimension_unknown: 'Mean Estimate from Zhou et al.' (D1)
- dropped duplicate Q310 ('D1 (h) tablet', value '0.467') — already have one for this compound
- implicit units: 'ka (h−1) capsule' → 1/h (from the popPK convention: "The parameter is 'kabs' (Absorption rate constant). The table text does not explicitly state a unit (the provided '(h−1)")
- implicit units: 'D1 (h) capsule' → h (from the popPK convention: "The parameter is 'D1' (Duration of a zero-order input). The table text does not explicitly state a unit. Based on Priori")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L h−1)); Q63 (Vc (L)); Q64 (Vp (L)); Q30 (Q (L h−1))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=olaparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceuticals-14-00804-t0A1:row2:col1 = 'Effect of ECOG-PS on clearance for ECOG-PS ≥ 1 a'
- unparsed cell pharmaceuticals-14-00804-t0A1:row9:col1 = 'First-order absorption rate constant for tablets strength 100 mg'
- unparsed cell pharmaceuticals-14-00804-t0A1:row10:col1 = 'First-order absorption rate constant for tablets strength 150 mg'
- unparsed cell pharmaceuticals-14-00804-t0A1:row17:col1 = 'Inter-individual variability in D1'
- unparsed cell Velev_2021_table_3:row1:col1 = 'Effect of ECOG-PS on clearance for ECOG-PS ≥ 1 a'
- unparsed cell Velev_2021_table_3:row8:col1 = 'First-order absorption rate constant for tablets strength 100 mg'
- unparsed cell Velev_2021_table_3:row9:col1 = 'First-order absorption rate constant for tablets strength 150 mg'
- unparsed cell Velev_2021_table_3:row16:col1 = 'Inter-individual variability in D1'
- companion parameter table 3 transcribed (20 record(s))

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 3.60 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 3.60 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1 (h) capsule]` | 0.901 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1 (h) capsule]` |  | 0.901 | only_one_extracted |
| `gpt-oss-120b` | `parameters[frel capsule b]` | 0.282 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[frel capsule b]` |  | 0.282 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka (h-1) capsule]` | 0.247 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka (h-1) capsule]` |  | 0.247 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 1.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 2.57 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 2.57 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 19.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 19.7 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | olaparib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | olaparib | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-14-00804-t0A1:row1:col2', 'Velev_2021_table_3:row0:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-14-00804-t0A1:row5:col2', 'Velev_2021_table_3:row4:col2'] |
| C5_dimension_Q310 | pass | [time] |  | ['pharmaceuticals-14-00804-t0A1:row11:col2', 'Velev_2021_table_3:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceuticals-14-00804-t0A1:row8:col2', 'Velev_2021_table_3:row7:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceuticals-14-00804-t0A1:row3:col2', 'Velev_2021_table_3:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceuticals-14-00804-t0A1:row4:col2', 'Velev_2021_table_3:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.6 | ['pharmaceuticals-14-00804-t0A1:row1:col2', 'Velev_2021_table_3:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.6 L/h | ['pharmaceuticals-14-00804-t0A1:row1:col2', 'Velev_2021_table_3:row0:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.57 L | ['pharmaceuticals-14-00804-t0A1:row3:col2', 'Velev_2021_table_3:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 19.7 L | ['pharmaceuticals-14-00804-t0A1:row4:col2', 'Velev_2021_table_3:row3:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=olaparib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference_modelica.zip" download>Olaparib_Velev2021_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference_fmi.zip" download>Olaparib_Velev2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference_matlab.zip" download>Olaparib_Velev2021_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference_matlab_simbio.zip" download>Olaparib_Velev2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference_sbml.zip" download>Olaparib_Velev2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference_cellml.zip" download>Olaparib_Velev2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4345 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1e-06 | m3/s |
| input | model | `VdPerKg` | 3.671e-05 | m3/kg |
| input | model | `k12` | 0.00012 | 1/s |
| input | model | `k21` | 1.565e-05 | 1/s |
| input | model | `ka` | 6.861e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Velev M, Puszkiel A, Blanchet B, de Percin S, Delanoy N, Medioni J et al. Association between Olaparib Exposure and Early Toxicity in BRCA-Mutated Ovarian Cancer Patients: Results from a Retrospective Multicenter Study. Pharmaceuticals (Basel, Switzerland) 14(8) (2021). [doi:10.3390/ph14080804](https://doi.org/10.3390/ph14080804)

**This record:** Pharmacolibrary v26.09, model `Olaparib_Velev2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_olaparib/Olaparib_Velev2021_reference>

```bibtex
@misc{pharmacolibrary_OlaparibVelev2021reference,
  title  = {{Pharmacolibrary model Olaparib_Velev2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_olaparib/Olaparib_Velev2021_reference},
  note   = {Parameters from doi:10.3390/ph14080804},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.247 /h, F 0.9). Doses in the paper: 100, 150, 200, 300, 400 mg.

<dbs-fmusim paramsurl="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_olaparib/Olaparib_Velev2021_reference/Olaparib_Velev2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Olaparib_Velev2021_reference_params.json` · controls `Olaparib_Velev2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bolaparib%5D%20Olaparib_Velev2021_reference&body=Drug%3A%20olaparib%0ARecord%3A%20Olaparib_Velev2021_reference%0APaper%3A%20Velev_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_olaparib/Olaparib_Velev2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:16 UTC</sub>
