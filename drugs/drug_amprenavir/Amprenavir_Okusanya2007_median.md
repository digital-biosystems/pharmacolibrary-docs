<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amprenavir&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/&quot;},{&quot;label&quot;:&quot;Okusanya_2007 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amprenavir_Johnson2014_reference&quot;,&quot;label&quot;:&quot;Johnson_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Johnson2014_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_mean&quot;,&quot;label&quot;:&quot;Okusanya_2007_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_median&quot;,&quot;label&quot;:&quot;Okusanya_2007_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_median.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amprenavir — `Amprenavir_Okusanya2007_median`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.765). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amprenavir, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-10-07 14:32:43.552673+00:00) predates the upstream re-run (2026-10-07 15:09:32.023492+00:00). Current validate status: `extracted`.

## Citation
Okusanya O et al., Compartmental pharmacokinetic analysis…, Antimicrobial agents and ch… (2007)
  ·  DOI: [10.1128/AAC.00570-06](https://doi.org/10.1128/AAC.00570-06)

<div class="pk-model-meta" hidden drug="amprenavir" model-id="Amprenavir_Okusanya2007_median" status="extracted" stale="true" population="HIV-seronegative healthy adults" measured-compound="amprenavir" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 12 extracted.

**Parameterization:** CLnorm/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc/F (liters/kg) | `Q290` · V1/F | 0.987 | liters/kg | 0.06909 | [l] / [kg] | not captured | exact (1.0) | tab_1:row1:col2 | — | not captured |
| Vp/F (liters/kg) | `Q82` · V2/F | 5.61 | liters/kg | 0.39270000000000005 | [l] / [kg] | not captured | exact (1.0) | tab_1:row2:col2 | — | not captured |
| CLd (liters/h/kg) | `Q30` · Q | 0.320 | liters/h/kg | 6.222222222222222e-06 | [l] / [[h] · [kg]] | not captured | exact (1.0) | tab_1:row3:col2 | — | not captured |
| CLt/F (liters/h/kg) | `Q355` · CLnorm/F | 0.917 | liters/h/kg | 1.7830555555555556e-05 | [l] / [[h] · [kg]] | not captured | llm (0.6) | tab_1:row4:col2 | — | not captured |
| Fraction recycled | `Q43` · FR | 0.065 | not captured | not captured | not captured | not captured | llm (0.6) | tab_1:row6:col2 | — | not captured |
| TLag (h) | `Q83` · tlag | 0.013 | h | 46.8 | [h] | not captured | exact (1.0) | tab_1:row8:col2 | — | not captured |
| ka (h Ϫ1 ) | `Q49` · kabs | 0.995 | h Ϫ1 | 0.0002763888888888889 | [1] / [h] | not captured | exact (1.0) | tab_1:row9:col2 | — | not captured |
| kel (h Ϫ1 ) | `Q47` · kel | 0.963 | h Ϫ1 | 0.0002675 | [1] / [h] | not captured | exact (1.0) | tab_1:row10:col2 | — | not captured |
| kcp (h Ϫ1 ) | `Q301` · k12 | 0.363 | h Ϫ1 | 0.00010083333333333334 | [1] / [h] | not captured | exact (1.0) | tab_1:row11:col2 | — | not captured |
| kpc (h Ϫ1 ) | `Q302` · k21 | 0.059 | h Ϫ1 | 1.638888888888889e-05 | [1] / [h] | not captured | exact (1.0) | tab_1:row12:col2 | — | not captured |
| ␣ t 1/2 (h) | `Q57` · t1/2z | 0.520 | h | 1872.0 | [h] | not captured | llm (0.6) | tab_1:row13:col2 | — | not captured |
| ␤ t 1/2 (h) | `Q60` · t1/2β | 21.0 | h | 75600.0 | [h] | not captured | llm (0.6) | tab_1:row14:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q355 ('CLb/F (liters/h/kg)', value '0.090') — already have one for this compound
- dropped unlinked row (NIL): 'Recycling time (h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amprenavir
- population split: 'median' subgroup of Okusanya_2007 (paper reports 2 populations: mean, median)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.765 (13/17 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clt/f].parameter_id` | Q355 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[fraction recycled]` | 0.065 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amprenavir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amprenavir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row11:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row12:col2'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row9:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_1:row13:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab_1:row14:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row2:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_1:row8:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 69.1 L | not captured | not captured | ['tab_1:row1:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 393 L | not captured | not captured | ['tab_1:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=amprenavir) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 9 scholar param(s) emitted or defaulted | 9 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_amprenavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Okusanya_2007` / `Okusanya_2007::median`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_amprenavir/models/modelica/Amprenavir_Okusanya2007_median.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_amprenavir/models/modelica/Amprenavir_Okusanya2007_median.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_amprenavir/models/modelica/Amprenavir_Okusanya2007_median.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_median/Amprenavir_Okusanya2007_median_fmi.zip" download>Amprenavir_Okusanya2007_median_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_median/Amprenavir_Okusanya2007_median_matlab.zip" download>Amprenavir_Okusanya2007_median_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_median/Amprenavir_Okusanya2007_median_matlab_simbio.zip" download>Amprenavir_Okusanya2007_median_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_median/Amprenavir_Okusanya2007_median_sbml.zip" download>Amprenavir_Okusanya2007_median_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_median/Amprenavir_Okusanya2007_median_cellml.zip" download>Amprenavir_Okusanya2007_median_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_amprenavir/Amprenavir_Okusanya2007_median/Amprenavir_Okusanya2007_median.svg" alt="Amprenavir_Okusanya2007_median diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 0.995 /h, lag 0.78 min, F 1). Dose in the paper: 600 mg.

<dbs-fmusim paramsurl="drugs/drug_amprenavir/Amprenavir_Okusanya2007_median/Amprenavir_Okusanya2007_median_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_amprenavir/Amprenavir_Okusanya2007_median/Amprenavir_Okusanya2007_median_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Amprenavir_Okusanya2007_median_params.json` · controls `Amprenavir_Okusanya2007_median_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:09 UTC</sub>
