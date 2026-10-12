<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;guanfacine&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/&quot;},{&quot;label&quot;:&quot;Knebel_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guanfacine_Knebel2015_reference&quot;,&quot;label&quot;:&quot;Knebel_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# guanfacine — `Guanfacine_Knebel2015_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has guanfacine, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:38:08.791376+00:00) predates the upstream re-run (2026-10-09 06:31:43.110224+00:00). Current validate status: `extracted`.

## Citation
Knebel W et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2015)
  ·  DOI: [10.1007/s40262-015-0245-7](https://doi.org/10.1007/s40262-015-0245-7)

## Model component
<dbs-pgx drug="guanfacine" model-id="Guanfacine_Knebel2015_reference" status="extracted" stale="true" population="pediatric patients" measured-compound="guanfacine" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 33.1 | L/h | 9.194444444444445e-06 | L/h | not captured | exact (1.0) | Knebel_2015:results_prose | — | not captured |
| V/F | `Q76` · V/F | 804 | L | 0.804 | L | not captured | exact (1.0) | Knebel_2015:results_prose | — | not captured |
| Ka | `Q49` · kabs | 0.552 | h -1 | 0.00015333333333333334 | 1/h | not captured | exact (1.0) | Knebel_2015:results_prose | — | not captured |
| ALAG | `Q83` · tlag | 0.651 | h | 2343.6 | h | not captured | exact (1.0) | Knebel_2015:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'X 1.1CL/F' routed out of structural estimates ('Interindividual variance (% SE)')
- table section iiv: 'X 1.2 COV CL/F-V/F' routed out of structural estimates ('Interindividual variance (% SE)')
- table section iiv: 'X 2.2V/F' routed out of structural estimates ('Interindividual variance (% SE)')
- table section iiv: 'X 1.3 COV CL/F-Ka' routed out of structural estimates ('Interindividual variance (% SE)')
- table section iiv: 'X 2.4 COV V/F-Ka' routed out of structural estimates ('Interindividual variance (% SE)')
- table section iiv: 'X 3.3Ka' routed out of structural estimates ('Interindividual variance (% SE)')
- dropped unlinked row (NIL): 'r 2 pro' — extend the ontology if this is a real PK parameter (source ['tab_2:row19:col1', 'tab_2:row19:col2'])
- routed 'r 2 add' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- salvaged Q27 ('CL/F'=33.1) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=804) from results prose — parameter table was unreadable
- salvaged Q49 ('Ka'=0.552) from results prose — parameter table was unreadable
- salvaged Q83 ('ALAG'=0.651) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=guanfacine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_2:row12:col3 = '0.134 to 0.227'
- unparsed cell tab_2:row13:col3 = '-0.0466 to 0.0515'
- unparsed cell tab_2:row14:col3 = '0.216 to 0.427'
- unparsed cell tab_2:row15:col3 = '-0.128 to 0.0373'
- unparsed cell tab_2:row16:col3 = '0.311 to 0.628'
- unparsed cell tab_2:row17:col3 = '0.573 to 1.12'
- unparsed cell tab_2:row19:col3 = '0.0377 to 0.0552'
- unparsed cell tab_2:row20:col3 = '0.0125 to 0.0340'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |
| `gpt-oss:120b` | confirmed | 1.0 (8/8 fields) | none |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag]` | 0.651 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` | not captured | 0.651 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 33.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 33.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.552 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.552 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 804 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 804 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | guanfacine | unknown | mismatch |

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
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 33.1 L/h | not captured | not captured | ['Knebel_2015:results_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 804 L | not captured | not captured | ['Knebel_2015:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=guanfacine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_guanfacine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Knebel_2015` / `Knebel_2015::reference`)
- model: `../../../knowledgebase/drugs/drug_guanfacine/models/modelica/Guanfacine_Knebel2015_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_guanfacine/models/modelica/Guanfacine_Knebel2015_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_guanfacine/models/modelica/Guanfacine_Knebel2015_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference_modelica.zip" download>Guanfacine_Knebel2015_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference_fmi.zip" download>Guanfacine_Knebel2015_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference_matlab.zip" download>Guanfacine_Knebel2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference_matlab_simbio.zip" download>Guanfacine_Knebel2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference_sbml.zip" download>Guanfacine_Knebel2015_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference_cellml.zip" download>Guanfacine_Knebel2015_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference.svg" alt="Guanfacine_Knebel2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 0.552 /h, lag 39.1 min, F 1). Doses in the paper: 1, 2, 3, 4 mg.

<dbs-fmusim paramsurl="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_guanfacine/Guanfacine_Knebel2015_reference/Guanfacine_Knebel2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Guanfacine_Knebel2015_reference_params.json` · controls `Guanfacine_Knebel2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-09 06:31 UTC</sub>
