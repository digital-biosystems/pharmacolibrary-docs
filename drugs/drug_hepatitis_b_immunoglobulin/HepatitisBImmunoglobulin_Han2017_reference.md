<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;hepatitis B immunoglobulin&quot;,&quot;href&quot;:&quot;drugs/drug_hepatitis_b_immunoglobulin/&quot;},{&quot;label&quot;:&quot;Han_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;HepatitisBImmunoglobulin_Han2017_reference&quot;,&quot;label&quot;:&quot;Han_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hepatitis B immunoglobulin — `HepatitisBImmunoglobulin_Han2017_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has hepatitis B immunoglobulin (HBIG), the second reading hepatitis B immunoglobulin; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-07 14:30:08.332221+00:00) predates the upstream re-run (2026-10-07 16:16:43.865200+00:00). Current validate status: `extracted`.

## Citation
Han S et al., A 6-month mixed-effect pharmacokinetic…, Drug design, development an… (2017)
  ·  DOI: [10.2147/DDDT.S134711](https://doi.org/10.2147/DDDT.S134711)

<div class="pk-model-meta" hidden drug="hepatitis B immunoglobulin" model-id="HepatitisBImmunoglobulin_Han2017_reference" status="extracted" stale="true" population="adult liver transplant recipients" measured-compound="hepatitis B immunoglobulin (HBIG)" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| final value for CL | `Q22` · CL | 0.0064 | L/h | 1.777777777777778e-09 | L/h | not captured | boundary (0.8) | Han_2017:other_prose | — | not captured |
| typical value for volume of distribution (Vd) | `Q61` · V | 3.2 | L | 0.0032 | L | not captured | boundary (0.8) | Han_2017:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θ1' — extend the ontology if this is a real PK parameter (source ['t2-dddt-11-2099:row4:col3'])
- dropped unlinked row (NIL): 'θ2' — extend the ontology if this is a real PK parameter (source ['t2-dddt-11-2099:row5:col3'])
- dropped unlinked row (NIL): 'θ3' — extend the ontology if this is a real PK parameter (source ['t2-dddt-11-2099:row6:col3'])
- dropped unlinked row (NIL): 'θ4' — extend the ontology if this is a real PK parameter (source ['t2-dddt-11-2099:row7:col3'])
- routed 'θ5' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'θ6' — extend the ontology if this is a real PK parameter (source ['t2-dddt-11-2099:row10:col3', 't2-dddt-11-2099:row12:col3'])
- dropped unlinked row (NIL): 'θ7' — extend the ontology if this is a real PK parameter (source ['t2-dddt-11-2099:row13:col3'])
- routed 'ω12' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω32' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω42' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- salvaged Q22 ('final value for CL'=0.0064) from results prose — parameter table was unreadable
- salvaged Q61 ('typical value for volume of distribution (Vd)'=3.2) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=hepatitis B immunoglobulin (HBIG)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'hepatitis B immunoglobulin (HBIG)' ('hepatitis B immunoglobulin') — left in mass units
- molar mass: none found for 'hepatitis_b_immunoglobulin' — its concentrations stay mass-only
- molar mass: none found for 'hepatitis B immunoglobulin (HBIG)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell t2-dddt-11-2099:row4:col4 = '0.450 (0.297–0.680)'
- unparsed cell t2-dddt-11-2099:row5:col4 = '0.0355 (0.0267–0.0517)'
- unparsed cell t2-dddt-11-2099:row6:col4 = '0.0291 (0.0203–0.0451)'
- unparsed cell t2-dddt-11-2099:row7:col2 = 'h−1'
- unparsed cell t2-dddt-11-2099:row7:col4 = '0.0370 (0.0203–0.0451)'
- unparsed cell t2-dddt-11-2099:row8:col2 = 'h−1'
- unparsed cell t2-dddt-11-2099:row8:col4 = '0.00398 (0.00309–0.00501)'
- unparsed cell t2-dddt-11-2099:row10:col4 = '3.21 (2.94–3.50)'
- unparsed cell t2-dddt-11-2099:row12:col1 = 'Point estimate for the DNA titer making 50% of remaining fraction (DT50)'
- unparsed cell t2-dddt-11-2099:row12:col4 = '1,530 (423–5,180)'
- unparsed cell t2-dddt-11-2099:row13:col4 = '0.475 (0.303–0.751)'
- unparsed cell t2-dddt-11-2099:row15:col4 = '77.1 (55.7–110)'
- unparsed cell t2-dddt-11-2099:row16:col4 = '4.40 (2.20–7.10)'
- unparsed cell t2-dddt-11-2099:row17:col4 = '80.5 (37.6–138)'
- unparsed cell t2-dddt-11-2099:row18:col4 = '13.5 (3.2–23.0)'
- unparsed cell t2-dddt-11-2099:row19:col4 = '0.701 (0.335–0.919)'
- unparsed cell t2-dddt-11-2099:row20:col1 = 'Variance of proportional error for the observations until POD2'
- unparsed cell t2-dddt-11-2099:row20:col4 = '0.292 (0.125–0.447)'
- unparsed cell t2-dddt-11-2099:row21:col1 = 'Variance of additive error for the observations after POD2'
- unparsed cell t2-dddt-11-2099:row21:col4 = '344 (195–479)'
- unparsed cell t2-dddt-11-2099:row22:col1 = 'Variance of proportional error for the observations after POD2'
- unparsed cell t2-dddt-11-2099:row22:col4 = '0.0604 (0.0239–0.0970)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | not captured | 0.0064 | only_one_extracted |
| `gpt-oss-120b` | `parameters[final value for cl]` | 0.0064 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value for volume of distribution]` | 3.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | not captured | 3.20 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | hepatitis B immunoglobulin (HBIG) | hepatitis B immunoglobulin | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | hepatitis B immunoglobulin (HBIG) | hepatitis B immunoglobulin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q61 | pass | 3.2 | 3.2 | 1.0 | 0.05 | footnote reference category |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0064 | not captured | not captured | ['Han_2017:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0064 L/h | not captured | not captured | ['Han_2017:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.2 L | not captured | not captured | ['Han_2017:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_hepatitis_b_immunoglobulin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Han_2017` / `Han_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference_modelica.zip" download>HepatitisBImmunoglobulin_Han2017_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference_fmi.zip" download>HepatitisBImmunoglobulin_Han2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference_matlab.zip" download>HepatitisBImmunoglobulin_Han2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference_matlab_simbio.zip" download>HepatitisBImmunoglobulin_Han2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference_sbml.zip" download>HepatitisBImmunoglobulin_Han2017_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference_cellml.zip" download>HepatitisBImmunoglobulin_Han2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference.svg" alt="HepatitisBImmunoglobulin_Han2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference/HepatitisBImmunoglobulin_Han2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `HepatitisBImmunoglobulin_Han2017_reference_params.json` · controls `HepatitisBImmunoglobulin_Han2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:16 UTC</sub>
