<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;ondansetron&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/&quot;},{&quot;label&quot;:&quot;Chiang_2021_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ondansetron_Chiang2021_estimate&quot;,&quot;label&quot;:&quot;Chiang_2021_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2021v2_reference&quot;,&quot;label&quot;:&quot;Chiang_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ondansetron_Landau2026_reference&quot;,&quot;label&quot;:&quot;Landau_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Landau2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ondansetron — `Ondansetron_Chiang2021v2_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7), gpt-oss:120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ondansetron, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:39:16.266787+00:00) predates the upstream re-run (2026-10-04 14:07:08.640198+00:00). Current validate status: `extracted`.

## Citation
Chiang MD et al., Plasma and cerebrospinal fluid pharmaco…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14412](https://doi.org/10.1111/bcp.14412)

<div class="pk-model-meta" hidden drug="ondansetron" model-id="Ondansetron_Chiang2021v2_reference" status="extracted" stale="true" population="patients" measured-compound="ondansetron" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 24.6 | L/h | 6.833333333333334e-06 | [l] / [h] | not captured | exact (1.0) | T4:row2:col2, T4:row2:col3, Chiang_2021_2_table_3:row4:col1 | — | not captured |
| VC (L) | `Q63` · V1 | 63.3 | L | 0.0633 | [l] | not captured | exact (1.0) | T4:row3:col2, T4:row3:col3 | — | not captured |
| Q (L/h) | `Q30` · Q | 211 | L/h | 5.861111111111111e-05 | [l] / [h] | not captured | exact (1.0) | T4:row4:col2, T4:row4:col3 | — | not captured |
| VT (L) | `Q61` · V | 107 | L | 0.107 | [l] | not captured | llm (0.6) | T4:row5:col2, T4:row5:col3 | — | not captured |
| KP | `Q410` · Kp | 0.145 | not captured | not captured | not captured | not captured | exact (1.0) | T4:row6:col2, T4:row6:col3 | — | not captured |
| V 2 (l) | `Q64` · V2 | 108.0 | l | 0.108 | L | not captured | review_gapfill (0.7) | Lee_2016:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV CL' routed out of structural estimates ('Inter-individual Variability (CV%)')
- table section iiv: 'IIV VC' routed out of structural estimates ('Inter-individual Variability (CV%)')
- table section iiv: 'IIV KP' routed out of structural estimates ('Inter-individual Variability (CV%)')
- table section residual_error: 'RVplasma' routed out of structural estimates ('Residual Variability (CV%)')
- column 'population pharmacokinetic parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'B for (VC, AGE)' — extend the ontology if this is a real PK parameter (source ['T4:row7:col2', 'T4:row7:col3'])
- dropped value-less row: 't1/2 (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'MRT (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'AUC0−∞ (h·μg/L)' (captured trailing unit 'h·μg/L' for child rows)
- dropped value-less row: 'Vd,ss (L)' (captured trailing unit 'L' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ondansetron
- gap-filled Q64 (V2) from Lee_2016's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T4:row10:col2 = '49.7%'
- unparsed cell T4:row11:col2 = '41.9%'
- unparsed cell T4:row12:col2 = '23.7%'
- unparsed cell T4:row15:col2 = '19.1%'
- companion parameter table 3 transcribed (5 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.7 (7/10 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[v 2]` | 108.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ondansetron | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ondansetron | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl].value` | 24.6 | 17 | mismatch |
| `gpt-oss:120b` | `parameters[kp].value` | 0.145 | 9 | mismatch |
| `gpt-oss:120b` | `parameters[q].value` | 211 | 7 | mismatch |
| `gpt-oss:120b` | `parameters[vc].value` | 63.3 | 14 | mismatch |
| `gpt-oss:120b` | `parameters[vt].value` | 107 | 9 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row2:col2', 'T4:row2:col3', 'Chiang_2021_2_table_3:row4:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row4:col2', 'T4:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row5:col2', 'T4:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row3:col2', 'T4:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lee_2016:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 24.6 | not captured | not captured | ['T4:row2:col2', 'T4:row2:col3', 'Chiang_2021_2_table_3:row4:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 24.6 L/h | not captured | not captured | ['T4:row2:col2', 'T4:row2:col3', 'Chiang_2021_2_table_3:row4:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 107 L | not captured | not captured | ['T4:row5:col2', 'T4:row5:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 63.3 L | not captured | not captured | ['T4:row3:col2', 'T4:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 108 L | not captured | not captured | ['Lee_2016:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=ondansetron) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ondansetron/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chiang_2021_2` / `Chiang_2021_2::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ondansetron/models/modelica/Ondansetron_Chiang2021v2_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ondansetron/models/modelica/Ondansetron_Chiang2021v2_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ondansetron/models/modelica/Ondansetron_Chiang2021v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference_modelica.zip" download>Ondansetron_Chiang2021v2_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference_fmi.zip" download>Ondansetron_Chiang2021v2_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference_matlab.zip" download>Ondansetron_Chiang2021v2_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference_matlab_simbio.zip" download>Ondansetron_Chiang2021v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference_sbml.zip" download>Ondansetron_Chiang2021v2_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference_cellml.zip" download>Ondansetron_Chiang2021v2_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference.svg" alt="Ondansetron_Chiang2021v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 16 mg infusion over 10 min, single dose. Dose in the paper: 16 mg.

<dbs-fmusim paramsurl="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference/Ondansetron_Chiang2021v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Ondansetron_Chiang2021v2_reference_params.json` · controls `Ondansetron_Chiang2021v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 14:07 UTC</sub>
