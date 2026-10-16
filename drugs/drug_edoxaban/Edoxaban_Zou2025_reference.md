<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;edoxaban&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/&quot;},{&quot;label&quot;:&quot;Zou_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Edoxaban_Zou2025_reference&quot;,&quot;label&quot;:&quot;Zou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Zou2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Edoxaban_Edwina2025_reference&quot;,&quot;label&quot;:&quot;Edwina_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Edwina2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# edoxaban — `Edoxaban_Zou2025_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The edoxaban pediatric model was quarantined because clearance, absorption rate constant and absorption lag time had no source values, so placeholder numbers stood in for these parameters instead of the reported ones.**

Although the paper reports edoxaban values such as CL/F 42.87 L/h, Ka 3.71 1/h, V1/F 261 L, Q/F 8.59 L/h and V2/F 343.5 L, the built model left clearance, absorption rate constant and absorption lag time without extracted values, so library placeholder numbers were used and the model was held back rather than published with an invented number; the absorption rate constant was judged an invented value not reported in the source. The model also assumed F=1 and Fm=1 with no molar correction (apparent parameterization). In addition, the covariate effects defined in the record (body-weight power and eGFR, theta 0.268) were not exercised: only the reference individual was simulated. Extracted — edoxaban: CL/F 42.9, kabs 3.71, V1/F 261 L, Q/F 8.59 L/h, V2/F 344 L, ktr 47.5.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:37:52.285084+00:00) predates the upstream re-run (2026-10-05 14:43:16.893362+00:00). Current validate status: `extracted`.

## Citation
Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248)

<div class="pk-model-meta" hidden drug="edoxaban" model-id="Edoxaban_Zou2025_reference" status="extracted" stale="true" population="pediatric patients" measured-compound="edoxaban" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance, CL/F (L/h) a | `Q27` · CL/F | 42.87 | L/h | 1.1908333333333333e-05 | L/h | not captured | llm_confirmed (0.6) | psp413248-tbl-0001:row1:col1 | — | not captured |
| Absorption rate constant, Ka (1/h) | `Q49` · kabs | 3.71 | 1/h | 0.0010305555555555556 | 1/h | not captured | llm_confirmed (0.6) | psp413248-tbl-0001:row2:col1 | — | not captured |
| Apparent central compartment volume, Vc/F (L) | `Q290` · V1/F | 261 | L | 0.261 | [l] | not captured | llm_corrected (0.6) | psp413248-tbl-0001:row3:col1 | — | not captured |
| Apparent inter‐compartmental clearance, Q/F (L/h) | `Q69` · Q/F | 8.59 | L/h | 2.3861111111111113e-06 | [l] / [h] | not captured | llm_corrected (0.6) | psp413248-tbl-0001:row4:col1 | — | not captured |
| Apparent peripheral compartment volume, Vp/F (L) | `Q82` · V2/F | 343.5 | L | 0.3435 | [l] | not captured | llm_corrected (0.6) | psp413248-tbl-0001:row5:col1 | — | not captured |
| Transit rate constant, Ktr (1/h) | `Q306` · ktr | 47.5 | 1/h | 0.013194444444444444 | 1/h | not captured | llm_confirmed (0.6) | psp413248-tbl-0001:row6:col1 | — | not captured |
| theta_q22_egfr | `Q900` · theta_q22_egfr | 0.268 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413248-tbl-0001:row10:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| theta_q319_body_weight_power | Q900 | not captured | not captured |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped PD-category row 'Hill coefficient of maturation function, HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413248-tbl-0001:row8:col1'])
- dropped unlinked row (NIL): 'Post‐menstrual age (PMA) at half max of the maturation function, TM50' — extend the ontology if this is a real PK parameter (source ['psp413248-tbl-0001:row9:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Apparent clearance, CL/F (L/h) a' → L/h (from the paper text: "The paper text states: 'the typical value for systemic CL/F was 42.9 L/h' and the abstract mentions 'clearance ... was e")
- implicit units: 'Absorption rate constant, Ka (1/h)' → 1/h (from the paper text: "The paper text states: 'Ka was 3.71 h−1'.")
- implicit units: 'Transit rate constant, Ktr (1/h)' → 1/h (from the paper text: "The paper text states: 'Ktr were estimated as 15 and 47.5 h−1, respectively'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=edoxaban
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413248-tbl-0001:row1:col2 = '3%'
- unparsed cell psp413248-tbl-0001:row2:col2 = '0.6%'
- unparsed cell psp413248-tbl-0001:row3:col2 = '0.9%'
- unparsed cell psp413248-tbl-0001:row4:col2 = '2.3%'
- unparsed cell psp413248-tbl-0001:row5:col2 = '10.7%'
- unparsed cell psp413248-tbl-0001:row6:col2 = '1%'
- unparsed cell psp413248-tbl-0001:row10:col2 = '16%'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413248-tbl-0001:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413248-tbl-0001:row3:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413248-tbl-0001:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413248-tbl-0001:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413248-tbl-0001:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413248-tbl-0001:row5:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 42.9 L/h | not captured | not captured | ['psp413248-tbl-0001:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 261 L | not captured | not captured | ['psp413248-tbl-0001:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 344 L | not captured | not captured | ['psp413248-tbl-0001:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 30 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 50 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_edoxaban/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zou_2025` / `Zou_2025::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_edoxaban/models/modelica/_needs_review/Edoxaban_Zou2025_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_edoxaban/models/modelica/_needs_review/Edoxaban_Zou2025_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference_modelica.zip" download>Edoxaban_Zou2025_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference_fmi.zip" download>Edoxaban_Zou2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference_matlab.zip" download>Edoxaban_Zou2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference_matlab_simbio.zip" download>Edoxaban_Zou2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference_sbml.zip" download>Edoxaban_Zou2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference_cellml.zip" download>Edoxaban_Zou2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference.svg" alt="Edoxaban_Zou2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 30 mg, single dose, first-order absorption (ka 3.71 /h, F 1). Doses in the paper: 30, 60 mg.

<dbs-fmusim paramsurl="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_edoxaban/Edoxaban_Zou2025_reference/Edoxaban_Zou2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Edoxaban_Zou2025_reference_params.json` · controls `Edoxaban_Zou2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 14:43 UTC</sub>
