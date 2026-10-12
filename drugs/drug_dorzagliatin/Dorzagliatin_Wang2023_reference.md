<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;dorzagliatin&quot;,&quot;href&quot;:&quot;drugs/drug_dorzagliatin/&quot;},{&quot;label&quot;:&quot;Wang_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dorzagliatin_Wang2023_reference&quot;,&quot;label&quot;:&quot;Wang_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dorzagliatin — `Dorzagliatin_Wang2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:37:50.002578+00:00) predates the upstream re-run (2026-10-04 22:51:46.223420+00:00). Current validate status: `extracted`.

## Citation
Wang K et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2023)
  ·  DOI: [10.1007/s40262-023-01286-8](https://doi.org/10.1007/s40262-023-01286-8)

<div class="pk-model-meta" hidden drug="dorzagliatin" model-id="Dorzagliatin_Wang2023_reference" status="extracted" stale="true" population="healthy subjects and patients with type 2 diabetes mellitus" measured-compound="dorzagliatin" parameterization="apparent" topology="3C"></div>

**Model structure:** 3-compartment, oral mammillary model — template `PK_3C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 10.4 | L/h | 2.8888888888888894e-06 | [l] / [h] | not captured | exact (1.0) | Tab3:row2:col2, Tab3:row2:col3, Tab3:footnote | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 80.6 | L | 0.08059999999999999 | [l] | not captured | exact (1.0) | Tab3:row3:col2, Tab3:row3:col3, Tab3:footnote | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 3.02 | L/h | 8.388888888888889e-07 | [l] / [h] | not captured | exact (1.0) | Tab3:row4:col2, Tab3:row4:col3 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 26.5 | L | 0.0265 | [l] | not captured | exact (1.0) | Tab3:row5:col2, Tab3:row5:col3 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 3.29 | h−1 | 0.0009138888888888889 | [1] / [h] | not captured | exact (1.0) | Tab3:row6:col2, Tab3:row6:col3 | — | not captured |
| D1 (h) | `Q310` · D1 | 0.418 | h | 1504.8 | [h] | not captured | exact (1.0) | Tab3:row7:col2, Tab3:row7:col3, Tab3:footnote | — | 82.8 (None% RSE) |
| CLBW | `Q22` · CL | 0.255 | L/h/kg | 4.958333333333334e-06 | L/h | not captured | llm (0.6) | Tab3:row10:col2, Tab3:row10:col3 | — | 22.5 (None% RSE) |
| Vc,BW | `Q63` · V1 | 0.553 | L/kg | 0.03871000000000001 | L | not captured | llm_confirmed (0.6) | Tab3:row11:col2, Tab3:row11:col3 | — | 14.9 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k13', 'k31']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'CLSTUDY' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col2', 'Tab3:row8:col3'])
- dropped duplicate Q310 ('D1,FOOD', value '2.26') — already have one for this compound
- dropped duplicate Q63 ('Vc,GEND', value '0.843') — already have one for this compound
- dropped duplicate Q22 ('Cor_CL,Vc', value '0.0181') — already have one for this compound
- implicit units: 'CLBW' → L/h/kg (from the popPK convention: 'The paper states the typical CL/F is 10.4 L/h for a subject with TBW of 69 kg. The parameter CLBW (0.255) is the allomet')
- implicit units: 'Vc,BW' → L/kg (from the popPK convention: 'The paper states the typical Vc/F is 80.6 L for a subject with TBW of 69 kg. The parameter Vc,BW (0.553) is the allometr')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dorzagliatin
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count

**Extraction notes:**
- unparsed cell Tab3:row2:col4 = '10.4 (10.2−10.6)'
- unparsed cell Tab3:row3:col4 = '80.6 (77.7−83.1)'
- unparsed cell Tab3:row4:col4 = '3.01 (2.29−4.14)'
- unparsed cell Tab3:row5:col4 = '26.7 (22.8−31.0)'
- unparsed cell Tab3:row6:col4 = '3.29 (2.94−3.64)'
- unparsed cell Tab3:row7:col4 = '0.415 (0.322−0.485)'
- unparsed cell Tab3:row8:col4 = '1.22 (1.17−1.28)'
- unparsed cell Tab3:row9:col4 = '2.28 (1.85−3.10)'
- unparsed cell Tab3:row10:col4 = '0.254 (0.161−0.351)'
- unparsed cell Tab3:row11:col4 = '0.553 (0.446−0.667)'
- unparsed cell Tab3:row14:col3 = '0.815−0.873'
- unparsed cell Tab3:row14:col4 = '0.843 (0.813−0.870)'
- unparsed cell Tab3:row15:col3 = '21.3−23.6'
- unparsed cell Tab3:row15:col4 = '22.4 (21.0−24.0)'
- unparsed cell Tab3:row16:col3 = '13.1−16.4'
- unparsed cell Tab3:row16:col4 = '14.8 (13.0−16.5)'
- unparsed cell Tab3:row17:col3 = '38.9−57.0'
- unparsed cell Tab3:row17:col4 = '48.5 (40.6−57.1)'
- unparsed cell Tab3:row18:col1 = 'IIV on D1'
- unparsed cell Tab3:row18:col3 = '68.3−95.2'
- unparsed cell Tab3:row18:col4 = '81.8 (65.8−98.4)'
- unparsed cell Tab3:row19:col3 = '0.0142−0.022'
- unparsed cell Tab3:row19:col4 = '0.0181 (0.0136−0.023)'
- unparsed cell Tab3:row20:col3 = '32.0−33.7'
- unparsed cell Tab3:row20:col4 = '32.8 (31.2−34.5)'
- unparsed cell Tab3:row21:col3 = '106−112'
- unparsed cell Tab3:row21:col4 = '109 (103−115)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row10:col2', 'Tab3:row10:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:footnote'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:footnote'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab3:row7:col2', 'Tab3:row7:col3', 'Tab3:footnote'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row6:col2', 'Tab3:row6:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row11:col2', 'Tab3:row11:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col2', 'Tab3:row4:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col2', 'Tab3:row5:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.9 L/h | not captured | not captured | ['Tab3:row10:col2', 'Tab3:row10:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.4 L/h | not captured | not captured | ['Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:footnote'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 80.6 L | not captured | not captured | ['Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:footnote'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 38.7 L | not captured | not captured | ['Tab3:row11:col2', 'Tab3:row11:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 26.5 L | not captured | not captured | ['Tab3:row5:col2', 'Tab3:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=dorzagliatin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 7 scholar param(s) emitted or defaulted | 7 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 3C → PK_3C* | PK_3C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dorzagliatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2023` / `Wang_2023::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dorzagliatin/models/modelica/Dorzagliatin_Wang2023_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dorzagliatin/models/modelica/Dorzagliatin_Wang2023_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dorzagliatin/models/modelica/Dorzagliatin_Wang2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_modelica.zip" download>Dorzagliatin_Wang2023_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_fmi.zip" download>Dorzagliatin_Wang2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3C_enteral.fmu" download>PK_3C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_matlab.zip" download>Dorzagliatin_Wang2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_matlab_simbio.zip" download>Dorzagliatin_Wang2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_sbml.zip" download>Dorzagliatin_Wang2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_cellml.zip" download>Dorzagliatin_Wang2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference.svg" alt="Dorzagliatin_Wang2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 3.29 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3C_enteral` · parameters `Dorzagliatin_Wang2023_reference_params.json` · controls `Dorzagliatin_Wang2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 22:51 UTC</sub>
