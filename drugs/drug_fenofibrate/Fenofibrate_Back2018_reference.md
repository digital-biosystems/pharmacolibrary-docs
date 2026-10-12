<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;fenofibrate&quot;,&quot;href&quot;:&quot;drugs/drug_fenofibrate/&quot;},{&quot;label&quot;:&quot;Back_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fenofibrate_Back2018_reference&quot;,&quot;label&quot;:&quot;Back_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fenofibrate/Fenofibrate_Back2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fenofibrate_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fenofibrate/Fenofibrate_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fenofibrate — `Fenofibrate_Back2018_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading fenofibrate → fenofibric acid (metabolism); it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `fenofibrate`, measured `fenofibric acid`.

## Citation
Back HM et al., A mechanism-based pharmacokinetic model…, BMC pharmacology & toxicolo… (2018)
  ·  DOI: [10.1186/s40360-018-0194-5](https://doi.org/10.1186/s40360-018-0194-5)

<div class="pk-model-meta" hidden drug="fenofibrate" model-id="Fenofibrate_Back2018_reference" status="curated_candidate" stale="false" population="healthy adults" measured-compound="fenofibric acid" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| kg (hr−1) | `Q49` · kabs | 0.042 | hr−1 | 1.1666666666666668e-05 | [1] / [h] | not captured | exact (1.0) | Tab3:row1:col4 | — | not captured |
| km&a (hr− 1) | `Q305` · kfm | 0.172 | hr− 1 | 4.777777777777777e-05 | [1] / [h] | not captured | exact (1.0) | Tab3:row2:col4 | — | not captured |
| kel (hr− 1) | `Q47` · kel | 0.28 | hr− 1 | 7.777777777777778e-05 | [1] / [h] | not captured | exact (1.0) | Tab3:row3:col4 | — | not captured |
| Vc/F (L) | `Q76` · V/F | 11.91 | L | 0.01191 | [l] | not captured | exact (1.0) | Tab3:row4:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Proportional error (% RSE)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'Vstomach (L)' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1', 'Tab3:row5:col4'])
- dropped duplicate Q47 ('kg’ (hr−1)', value '0.011') — already have one for this compound
- dropped PD-category row 'kout (hr−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row8:col4'])
- dropped unlinked row (NIL): 'E bile' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col4'])
- dropped unlinked row (NIL): 'MTIME2 (hr)' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col4'])
- dropped unlinked row (NIL): 'E food' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fenofibric acid
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 4 linked by role; re-tagged fenofibric acid→parent ×2
- review gap-fill skipped: this record measures 'fenofibric acid', not fenofibrate — the review values are the parent's
- derived CL/F=3.3348 L/h from Ke × V/F = CL/F (Q47 × Q76); not separately reported

**Extraction notes:**
- unparsed cell Tab3:row1:col1 = '0.0412 (8.5%)'
- unparsed cell Tab3:row1:col2 = '31.7% (22.1%)'
- unparsed cell Tab3:row2:col1 = '0.198 (28.9%)'
- unparsed cell Tab3:row3:col1 = '0.27 (13. 6%)'
- unparsed cell Tab3:row3:col2 = '86.3% (29.2%)'
- unparsed cell Tab3:row3:col3 = '44.9% (43.5%)'
- unparsed cell Tab3:row4:col1 = '12.9 (27.8%)'
- unparsed cell Tab3:row4:col2 = '93% (28.9%)'
- unparsed cell Tab3:row4:col3 = '50.9% (22.6%)'
- unparsed cell Tab3:row7:col1 = '0.00971 (58.9%)'
- unparsed cell Tab3:row8:col1 = '0.00972 (38.3%)'
- unparsed cell Tab3:row9:col1 = '0.0239 (22.2%)'
- unparsed cell Tab3:row11:col1 = '6.94 (12.4%)'
- unparsed cell Tab3:row12:col1 = '0.617 (40.4%)'
- unparsed cell Tab3:row16:col1 = '0.608 (6.4%)'
- companion parameter table 5 transcribed (0 record(s))
- LLM selected parameter table(s) 5
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (7/14 fields) | 7 |
| `gpt-oss:120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['fenofibrate', 'fenofibric acid', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[e bile]` | not captured | 0.027 | only_one_extracted |
| `gpt-oss-120b` | `parameters[e food]` | not captured | 0.64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kg’]` | not captured | 0.011 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtime2]` | not captured | 6.92 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].parameter_id` | Q76 | Q290 | mismatch |
| `gpt-oss-120b` | `parameters[vstomach]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [] | [['fenofibrate', 'fenofibric acid', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[kel]` | 0.28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kg]` | 0.042 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[km&a]` | 0.172 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/f]` | 11.91 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vstomach]` | not captured | not captured | only_one_extracted |

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
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row2:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row1:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 11.9 L | not captured | not captured | ['Tab3:row4:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_derived_parameters | not captured | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report | not captured | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable | not captured | pass | C_central (measured=fenofibric acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fenofibrate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Back_2018` / `Back_2018::reference`)
- model: `../../../knowledgebase/drugs/drug_fenofibrate/models/modelica/Fenofibrate_Back2018_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_fenofibrate/models/modelica/Fenofibrate_Back2018_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_fenofibrate/models/modelica/Fenofibrate_Back2018_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference_modelica.zip" download>Fenofibrate_Back2018_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference_fmi.zip" download>Fenofibrate_Back2018_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference.svg" alt="Fenofibrate_Back2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 250 mg, single dose, first-order absorption (ka 0.042 /h, F 1). Dose in the paper: 250 mg.

<dbs-fmusim paramsurl="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fenofibrate_Back2018_reference_params.json` · controls `Fenofibrate_Back2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:36 UTC</sub>
