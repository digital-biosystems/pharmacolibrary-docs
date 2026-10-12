<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;molnupiravir&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/&quot;},{&quot;label&quot;:&quot;Gouda_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Molnupiravir_Bihorel2023_reference&quot;,&quot;label&quot;:&quot;Bihorel_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Gouda2022_reference&quot;,&quot;label&quot;:&quot;Gouda_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Molnupiravir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# molnupiravir — `Molnupiravir_Gouda2022_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

None of the extracted parameters is molnupiravir's own; they describe NHC.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/fb].value`: this record has 75.2, the second reading 83.5; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `molnupiravir`, measured `NHC`.

## Citation
Gouda AS et al., A validated LC-MS/MS method for determi…, Journal of chromatography.… (2022)
  ·  DOI: [10.1016/j.jchromb.2022.123363](https://doi.org/10.1016/j.jchromb.2022.123363)

<div class="pk-model-meta" hidden drug="molnupiravir" model-id="Molnupiravir_Gouda2022_reference" status="curated_candidate" stale="false" population="healthy adult volunteers" measured-compound="NHC" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ktr | `Q306` · ktr | 14.4 | 1/h | 0.004 | 1/h | not captured | exact (1.0) | t0020:row2:col2, t0020:row2:col3, t0020:row2:col4 | — | not captured |
| MTT | `Q81` · MTT | 0.5 | not captured | not captured | not captured | not captured | exact (1.0) | t0020:row3:col2, t0020:row3:col3, t0020:row3:col4 | — | not captured |
| Ka | `Q49` · kabs | 2.3 | 1/h | 0.0006388888888888888 | 1/h | not captured | exact (1.0) | t0020:row4:col2, t0020:row4:col3, t0020:row4:col4 | — | not captured |
| CL/Fb | `Q351` · CLm/F | 75.2 | L/h | 2.088888888888889e-05 | L/h | not captured | exact (1.0) | t0020:row5:col1, t0020:row5:col2, t0020:row5:col3, t0020:row5:col4 | — | not captured |
| Vd/Fb | `Q61` · V | 118.1 | L | 0.1181 | L | not captured | exact (1.0) | t0020:row6:col1, t0020:row6:col2, t0020:row6:col3, t0020:row6:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'final model results' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap results' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['t0020:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['t0020:footnote']); the table cell was unparseable — needs review
- implicit units: 'Ktr' → 1/h (from the popPK convention: 'No unit stated for Ktr in text or footnotes; first-order rate constants conventionally in 1/h, consistent with reported ')
- implicit units: 'Ka' → 1/h (from the popPK convention: 'No unit stated for Ka; first-order absorption rate constant conventionally in 1/h, consistent with half-life of 1.1 h.')
- implicit units: 'CL/Fb' → L/h (from the paper text: '"The typical value of CL/F for a subject with body weight of 70 kg was 75 L/h"')
- implicit units: 'Vd/Fb' → L (from the paper text: '"the Vd/F was 118 L"')
- metabolite nhc: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'Vd/Fb' Q63→Q61 for NHC — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=NHC
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 13 linked by role
- review gap-fill skipped: this record measures 'NHC', not molnupiravir — the review values are the parent's

**Extraction notes:**
- unparsed cell t0020:row2:col1 = 'h−1'
- unparsed cell t0020:row2:col5 = '7.9, 32.9'
- unparsed cell t0020:row3:col5 = '0.4, 0.7'
- unparsed cell t0020:row4:col1 = 'h−1'
- unparsed cell t0020:row4:col5 = '1.3, 4.7'
- unparsed cell t0020:row5:col5 = '71.3, 95.3'
- unparsed cell t0020:row6:col5 = '97.2, 154.9'
- unparsed cell t0020:row7:col2 = '65 [43.5]'
- unparsed cell t0020:row7:col5 = '19.0, 100.4'
- unparsed cell t0020:row8:col2 = '35 [9.19]'
- unparsed cell t0020:row8:col5 = '9.0, 53.2'
- unparsed cell t0020:row9:col2 = '65 [34.7]'
- unparsed cell t0020:row9:col5 = '21.2, 124.4'
- unparsed cell t0020:row10:col2 = '14 [8.6]'
- unparsed cell t0020:row10:col5 = '7.8, 32.9'
- unparsed cell t0020:row11:col2 = '15 [35.3]'
- unparsed cell t0020:row11:col5 = '3.7, 60.4'
- unparsed cell t0020:row14:col5 = '15.8, 23.8'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/fb].value` | 75.2 | 83.5 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 2.3 | 2.1 | mismatch |
| `gpt-oss-120b` | `parameters[ktr].value` | 14.4 | 15.4 | mismatch |
| `gpt-oss-120b` | `parameters[vd/fb].value` | 118.1 | 128.8 | mismatch |

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
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['t0020:row2:col2', 't0020:row2:col3', 't0020:row2:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0020:row5:col1', 't0020:row5:col2', 't0020:row5:col3', 't0020:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['t0020:row4:col2', 't0020:row4:col3', 't0020:row4:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0020:row6:col1', 't0020:row6:col2', 't0020:row6:col3', 't0020:row6:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 118 L | not captured | not captured | ['t0020:row6:col1', 't0020:row6:col2', 't0020:row6:col3', 't0020:row6:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=NHC) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 0.004135961181333375 | not captured | non-numeric value |
| T1_cmax | reference | pass | 0.0036404299999999996 | 0.004135961181333375 | 1.1361 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | pass | 0.0038269999999999997 | 0.004135961181333375 | 1.0807 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 1.05 | 0.004135961181333375 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 1.1 | 1.063822447018247 | 0.9671 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.1 | 1.063822447018247 | 0.9671 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_molnupiravir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gouda_2022` / `Gouda_2022::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_molnupiravir/models/modelica/Molnupiravir_Gouda2022_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_molnupiravir/models/modelica/Molnupiravir_Gouda2022_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_molnupiravir/models/modelica/Molnupiravir_Gouda2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference/Molnupiravir_Gouda2022_reference_modelica.zip" download>Molnupiravir_Gouda2022_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference/Molnupiravir_Gouda2022_reference_fmi.zip" download>Molnupiravir_Gouda2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference/Molnupiravir_Gouda2022_reference.svg" alt="Molnupiravir_Gouda2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 800 mg, single dose, first-order absorption (ka 2.3 /h, F 1). Dose in the paper: 800 mg.

<dbs-fmusim paramsurl="drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference/Molnupiravir_Gouda2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference/Molnupiravir_Gouda2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Molnupiravir_Gouda2022_reference_params.json` · controls `Molnupiravir_Gouda2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:13 UTC</sub>
