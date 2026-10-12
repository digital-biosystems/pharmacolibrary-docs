<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;vestronidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_vestronidase_alfa/&quot;},{&quot;label&quot;:&quot;Qi_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VestronidaseAlfa_Qi2019_reference&quot;,&quot;label&quot;:&quot;Qi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vestronidase alfa — `VestronidaseAlfa_Qi2019_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The vestronidase alfa parameters (CL 9.61, V1 9.64, Q 16.3, V2 4.23) were reported with the unit 'units' instead of L/h or L, so no SI values could be established and the record was rejected.**

All four structural parameters of the two-compartment model — clearance 9.61, central volume 9.64, intercompartmental clearance 16.3, and peripheral volume 4.23 — carry the verbatim unit 'units', which does not state the physical dimension (L/h for clearances, L for volumes). This unit could not be converted to SI, so the parameters reached the model without valid SI values, giving a dimension mismatch on structural parameters. The record was therefore rejected. Extracted — vestronidase alfa: CL 9.61 units, V1 9.64 units, Q 16.3 units, V2 4.23 units.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has vestronidase_alfa, the second reading vestronidase alfa; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:42:06.599592+00:00) predates the upstream re-run (2026-10-05 12:12:14.830754+00:00). Current validate status: `extracted`.

## Citation
Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y)

<div class="pk-model-meta" hidden drug="vestronidase alfa" model-id="VestronidaseAlfa_Qi2019_reference" status="extracted" stale="true" population="adult and pediatric subjects with MPS VII" measured-compound="vestronidase_alfa" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h)a | `Q22` · CL | 1.99 | L/h | 5.527777777777778e-07 | L/h | not captured | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col5 | — | 0.170 (None% RSE) |
| Vc (L)a | `Q63` · V1 | 1.49 | L | 0.00149 | L | not captured | llm_confirmed (0.6) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col5 | — | 0.0944 (None% RSE) |
| Q (L/h)a | `Q30` · Q | 0.940 | L/h | 2.6111111111111113e-07 | L/h | not captured | llm (0.6) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col5 | — | not captured |
| Vp (L)a | `Q64` · V2 | 3.03 | L | 0.0030299999999999997 | L | not captured | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col5 | — | 0.0236 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 for CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 for Vc' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 for Q' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 for Vp' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ2 prop' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'BWT on CL and Qb' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col5'])
- dropped unlinked row (NIL): 'BWT on Vc and Vpb' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col5'])
- implicit units: 'CL (L/h)a' → L/h (from the paper text: "Table 2 footnote states 'CL serum clearance' and the text explicitly states 'Typical PK parameter value estimates for se")
- implicit units: 'Vc (L)a' → L (from the paper text: "Table 2 footnote states 'Vc volume of distribution in the central compartment' and the text explicitly states 'volume of")
- implicit units: 'Q (L/h)a' → L/h (from the paper text: "Table 2 footnote states 'Q intercompartmental clearance' and the text explicitly states 'intercompartment clearance (Q).")
- implicit units: 'Vp (L)a' → L (from the paper text: "Table 2 footnote states 'Vp volume of distribution in the peripheral compartment' and the text explicitly states 'volume")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vestronidase_alfa
- molar mass: none found for 'vestronidase_alfa' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '1.63, 2.38'
- unparsed cell Tab2:row2:col6 = '1.60, 2.42'
- unparsed cell Tab2:row3:col3 = '1.26, 1.83'
- unparsed cell Tab2:row3:col6 = '1.27, 1.76'
- unparsed cell Tab2:row4:col3 = '0.676, 1.28'
- unparsed cell Tab2:row4:col6 = '0.640, 1.29'
- unparsed cell Tab2:row5:col3 = '2.86, 3.38'
- unparsed cell Tab2:row5:col6 = '2.65, 3.42'
- unparsed cell Tab2:row7:col3 = '0.444, 0.730c'
- unparsed cell Tab2:row7:col6 = '0.413, 0.703'
- unparsed cell Tab2:row8:col3 = '0.315, 0.651c'
- unparsed cell Tab2:row8:col6 = '0.371, 0.642'
- unparsed cell Tab2:row10:col3 = '0.00281, 0.337'
- unparsed cell Tab2:row10:col4 = '43.0d'
- unparsed cell Tab2:row10:col6 = '0.0411, 0.331'
- unparsed cell Tab2:row11:col3 = '− 0.00556, 0.194'
- unparsed cell Tab2:row11:col6 = '0.00773, 0.209'
- unparsed cell Tab2:row12:col3 = '− 0.0152, 1.14'
- unparsed cell Tab2:row12:col4 = '86.9d'
- unparsed cell Tab2:row12:col6 = '0.117, 1.14'
- unparsed cell Tab2:row13:col3 = '0.00516, 0.0420'
- unparsed cell Tab2:row13:col6 = '0.00911, 0.0518'
- unparsed cell Tab2:row15:col3 = '0.0690, 0.149'
- unparsed cell Tab2:row15:col6 = '0.0687, 0.147'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bwt on cl and qb]` | not captured | 0.574 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | vestronidase_alfa | vestronidase alfa | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | vestronidase_alfa | vestronidase alfa | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 3.6 | 3.475 | 0.9653 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.99 | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.99 L/h | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.49 L | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.03 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vestronidase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Qi_2019` / `Qi_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_modelica.zip" download>VestronidaseAlfa_Qi2019_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_fmi.zip" download>VestronidaseAlfa_Qi2019_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_matlab.zip" download>VestronidaseAlfa_Qi2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_matlab_simbio.zip" download>VestronidaseAlfa_Qi2019_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_sbml.zip" download>VestronidaseAlfa_Qi2019_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_cellml.zip" download>VestronidaseAlfa_Qi2019_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference.svg" alt="VestronidaseAlfa_Qi2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 70 mg infusion over 10 min, single dose. Doses in the paper: 70, 140, 280 mg.

<dbs-fmusim paramsurl="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `VestronidaseAlfa_Qi2019_reference_params.json` · controls `VestronidaseAlfa_Qi2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 12:12 UTC</sub>
