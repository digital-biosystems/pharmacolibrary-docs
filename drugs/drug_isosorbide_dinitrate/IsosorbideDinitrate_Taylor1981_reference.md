<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;isosorbide dinitrate&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/&quot;},{&quot;label&quot;:&quot;Taylor_1981 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IsosorbideDinitrate_Jaruratanasirikul2020_reference&quot;,&quot;label&quot;:&quot;Jaruratanasirikul_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Jaruratanasirikul2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;IsosorbideDinitrate_Taylor1981_reference&quot;,&quot;label&quot;:&quot;Taylor_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# isosorbide dinitrate — `IsosorbideDinitrate_Taylor1981_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.056), gpt-oss:120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The record for isosorbide 5-mononitrate was held back because absorption rate constants were left at library defaults rather than extracted from the abstract-only source.**

The model builder substituted default values for the absorption rate constant and lag time, which were not reported in the paper's abstract. This deviation means the simulated absorption profile relies on generic conventions rather than data specific to isosorbide dinitrate. Additionally, the record uses apparent parameterization with bioavailability assumed to be one, further distancing the model from mechanistic estimates. Extracted — isosorbide 5-mononitrate: t1/2z 4.2 h, CLm/F 132 ml min-1, V 48.4 L, Cmax 191 ng ml-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has isosorbide 5-mononitrate, the second reading isosorbide_5_mononitrate; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Taylor T et al., Isosorbide 5-mononitrate pharmacokineti…, Biopharmaceutics & drug dis… (1981)
  ·  DOI: [10.1002/bdd.2510020306](https://doi.org/10.1002/bdd.2510020306)

<div class="pk-model-meta" hidden drug="isosorbide dinitrate" model-id="IsosorbideDinitrate_Taylor1981_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="isosorbide 5-mononitrate" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| elimination half-life | `Q57` · t1/2z | 4.2 | h | 15120.0 | [h] | not captured | llm (0.6) | Taylor_1981:abstract | — | not captured |
| systemic clearance | `Q351` · CLm/F | 132 | ml min-1 | 2.1999999999999997e-06 | [ml] / [min] | not captured | exact (1.0) | Taylor_1981:abstract | — | not captured |
| volume of distribution | `Q61` · V | 48.4 | L | 0.0484 | L | not captured | exact (1.0) | Taylor_1981:abstract | — | not captured |
| peak plasma isosorbide 5-mononitrate concentration | `Q32` · Cmax | 191 | ng ml-1 | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Taylor_1981:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped unlinked row (NIL): 'intravenously infused at a rate of' — extend the ontology if this is a real PK parameter (source ['Taylor_1981:abstract'])
- dropped unlinked row (NIL): 'concentrations in plasma increased slowly to' — extend the ontology if this is a real PK parameter (source ['Taylor_1981:abstract'])
- unit_dimension_unknown: 'V.' (V1)
- dropped unlinked row (NIL): 'was reached at' — extend the ontology if this is a real PK parameter (source ['Taylor_1981:abstract'])
- dropped duplicate Q57 ('terminal half-life', value 4.9) — already have one for this compound
- dropped duplicate Q32 ('peak plasma concentration of the 5-mononitrate metabolite', value 72) — already have one for this compound
- dropped unlinked row (NIL): 'occurred at' — extend the ontology if this is a real PK parameter (source ['Taylor_1981:abstract', 'Taylor_1981:abstract'])
- dropped unlinked row (NIL): 'of the oral dose of isosorbide dinitrate circulated in plasma as the 5-mononitrate metabolite' — extend the ontology if this is a real PK parameter (source ['Taylor_1981:abstract'])
- implicit units: 'volume of distribution' → L (from the popPK convention: 'Volume of distribution is a volume parameter; in population PK, volumes are conventionally reported in liters (L), and t')
- metabolite isosorbide 5-mononitrate: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'volume of distribution' Q63→Q61 for isosorbide 5-mononitrate — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=isosorbide 5-mononitrate
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 11/11 row label(s) assigned, 2 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Taylor_1981_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.056 (1/18 fields) | 17 |
| `gpt-oss:120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>35 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 4.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | not captured | 4.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction of oral dose of isosorbide dinitrate circulating as 5‐mononitrate metabolite]` | not captured | 50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[infusion duration]` | not captured | 2.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[infusion rate]` | not captured | 4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peak plasma concentration]` | not captured | 191 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peak plasma isosorbide 5-mononitrate concentration]` | 191 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma concentration]` | not captured | 185 | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` | 132 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` | not captured | 132 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` | not captured | 4.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to peak concentration (tmax) after oral 10 mg]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 48.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | not captured | 48.4 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | isosorbide 5-mononitrate | isosorbide_5_mononitrate | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | isosorbide 5-mononitrate | isosorbide_5_mononitrate | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[elimination half-life]` | not captured | 4.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` | 4.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fraction of oral dose circulating as 5-mononitrate metabolite]` | not captured | 50 | only_one_extracted |
| `gpt-oss:120b` | `parameters[infusion duration]` | not captured | 2.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[infusion rate]` | not captured | 4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[oral dose]` | not captured | 10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peak plasma concentration of 5-mononitrate metabolite after isosorbide dinitrate]` | not captured | 72 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peak plasma concentration]` | not captured | 191 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peak plasma isosorbide 5-mononitrate concentration]` | 191 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma concentration]` | not captured | 185 | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic clearance]` | not captured | 132 | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic clearance]` | 132 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[time to peak concentration of 5-mononitrate metabolite]` | not captured | 1.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[time to peak concentration]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | not captured | 48.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | 48.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | isosorbide 5-mononitrate | isosorbide dinitrate | mismatch |

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
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Taylor_1981:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Taylor_1981:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Taylor_1981:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Taylor_1981:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 48.4 L | not captured | not captured | ['Taylor_1981:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=isosorbide 5-mononitrate) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_isosorbide_dinitrate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Taylor_1981` / `Taylor_1981::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_isosorbide_dinitrate/models/modelica/IsosorbideDinitrate_Taylor1981_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_isosorbide_dinitrate/models/modelica/IsosorbideDinitrate_Taylor1981_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_isosorbide_dinitrate/models/modelica/IsosorbideDinitrate_Taylor1981_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference/IsosorbideDinitrate_Taylor1981_reference_modelica.zip" download>IsosorbideDinitrate_Taylor1981_reference_modelica.zip</a> <span class="pk-size">(5.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference/IsosorbideDinitrate_Taylor1981_reference_fmi.zip" download>IsosorbideDinitrate_Taylor1981_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference/IsosorbideDinitrate_Taylor1981_reference.svg" alt="IsosorbideDinitrate_Taylor1981_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 60 mg oral (C01DA08) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference/IsosorbideDinitrate_Taylor1981_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference/IsosorbideDinitrate_Taylor1981_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `IsosorbideDinitrate_Taylor1981_reference_params.json` · controls `IsosorbideDinitrate_Taylor1981_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 10:26 UTC</sub>
