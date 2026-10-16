<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;azithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/&quot;},{&quot;label&quot;:&quot;Benn_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azithromycin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Benn2017_reference&quot;,&quot;label&quot;:&quot;Benn_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Benn2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Azithromycin_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azithromycin — `Azithromycin_Benn2017_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Bioavailability for azithromycin was omitted from the extracted record, leaving its value undefined for the model.**

The paper lists parameters like clearance and volume but provides no estimate for bioavailability. Consequently, the model lacks a data-supported bioavailability value from Benn_2017. The simulated profile therefore relies on a standard convention rather than a specific study result. Extracted — azithromycin: CL 18.1 L/h, V1 305 L, Q 46.2 L/h, V2 451 L, t1/2α 2.4 h, t1/2z 33 h, AUC∞ 18.8 μg.h/L, kabs 0.71 1/h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has azithromycin, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Benn K et al., Bradycardia and Hypothermia Complicatin…, The American journal of cas… (2017)
  ·  DOI: [10.12659/ajcr.905400](https://doi.org/10.12659/ajcr.905400)

<div class="pk-model-meta" hidden drug="azithromycin" model-id="Azithromycin_Benn2017_reference" status="needs_review" stale="false" population="paediatric oncology patient" measured-compound="azithromycin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (L/h) | `Q22` · CL | 18.1 | L/h | 5.027777777777778e-06 | [l] / [h] | not captured | exact (1.0) | t1-amjcaserep-18-883:row2:col1 | — | not captured |
| Central volume of distribution (L) | `Q63` · V1 | 305 | L | 0.305 | [l] | not captured | boundary_compartment (0.9) | t1-amjcaserep-18-883:row3:col1 | — | not captured |
| Inter-compartmental clearance (L/h) | `Q30` · Q | 46.2 | L/h | 1.2833333333333335e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | t1-amjcaserep-18-883:row4:col1 | — | not captured |
| Peripheral volume of distribution (L) | `Q64` · V2 | 451 | L | 0.451 | [l] | not captured | boundary_compartment (0.9) | t1-amjcaserep-18-883:row5:col1 | — | not captured |
| Distribution half-life (h) | `Q59` · t1/2α | 2.4 | h | 8640.0 | [h] | not captured | llm (0.6) | t1-amjcaserep-18-883:row9:col1 | — | not captured |
| Terminal elimination half-life (h) | `Q57` · t1/2z | 33 | h | 118800.0 | [h] | not captured | llm (0.6) | t1-amjcaserep-18-883:row10:col1 | — | not captured |
| Total area under the curve to infinity (μg.h/L) | `Q17` · AUC∞ | 18.785 | μg.h/L | not captured | [[h] · [µg]] / [l] | not captured | llm_corrected (0.6) | t1-amjcaserep-18-883:row15:col1 | — | not captured |
| Ka | `Q49` · kabs | 0.71 | 1/h | 0.00019722222222222222 | 1/h | not captured | review_gapfill (0.7) | Alshehri_2023:review | — | not captured |
| Tlag | `Q83` · tlag | 0.75 | h | 2700.0 | h | not captured | review_gapfill (0.7) | Alshehri_2023:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): 'First dose' — extend the ontology if this is a real PK parameter (source ['t1-amjcaserep-18-883:row12:col1'])
- dropped unlinked row (NIL): 'Second dose' — extend the ontology if this is a real PK parameter (source ['t1-amjcaserep-18-883:row13:col1'])
- dropped unlinked row (NIL): 'Third dose' — extend the ontology if this is a real PK parameter (source ['t1-amjcaserep-18-883:row14:col1'])
- dropped unlinked row (NIL): 'Baseline heart rate (beats/min)' — extend the ontology if this is a real PK parameter (source ['t1-amjcaserep-18-883:row17:col1'])
- dropped PD-category row 'Half maximal effective concentration (EC50) (μg/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t1-amjcaserep-18-883:row18:col1'])
- dropped PD-category row 'Maximal effect (Emax) (beats/min)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t1-amjcaserep-18-883:row19:col1'])
- dropped PD-category row 'Hill coefficient' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t1-amjcaserep-18-883:row20:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azithromycin
- gap-filled Q49 (kabs) from Alshehri_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Alshehri_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell t1-amjcaserep-18-883:row10:col2 = '31.6±6.6*'
- unparsed cell t1-amjcaserep-18-883:row12:col2 = '224±120*'
- unparsed cell t1-amjcaserep-18-883:row15:col2 = '7.364±2.604*'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[first dose]` | not captured | 530 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.71 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[third dose]` | not captured | 378 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | azithromycin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | azithromycin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['t1-amjcaserep-18-883:row15:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t1-amjcaserep-18-883:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t1-amjcaserep-18-883:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Alshehri_2023:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['t1-amjcaserep-18-883:row10:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['t1-amjcaserep-18-883:row9:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['t1-amjcaserep-18-883:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['t1-amjcaserep-18-883:row5:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Alshehri_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.1 | not captured | not captured | ['t1-amjcaserep-18-883:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.1 L/h | not captured | not captured | ['t1-amjcaserep-18-883:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 305 L | not captured | not captured | ['t1-amjcaserep-18-883:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 451 L | not captured | not captured | ['t1-amjcaserep-18-883:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=azithromycin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_azithromycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Benn_2017` / `Benn_2017::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_azithromycin/models/modelica/Azithromycin_Benn2017_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_azithromycin/models/modelica/Azithromycin_Benn2017_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_azithromycin/models/modelica/Azithromycin_Benn2017_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_modelica.zip" download>Azithromycin_Benn2017_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_fmi.zip" download>Azithromycin_Benn2017_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_matlab.zip" download>Azithromycin_Benn2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_matlab_simbio.zip" download>Azithromycin_Benn2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_sbml.zip" download>Azithromycin_Benn2017_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_cellml.zip" download>Azithromycin_Benn2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference.svg" alt="Azithromycin_Benn2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 85 mg, single dose, first-order absorption (ka 0.71 /h, lag 45 min, F 0.9). Doses in the paper: 85, 170 mg.

<dbs-fmusim paramsurl="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Azithromycin_Benn2017_reference_params.json` · controls `Azithromycin_Benn2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:33 UTC</sub>
