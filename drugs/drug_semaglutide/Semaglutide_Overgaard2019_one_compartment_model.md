<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/&quot;},{&quot;label&quot;:&quot;Overgaard_2019 \u00b7 one_compartment_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Semaglutide_Carlsson2018_base&quot;,&quot;label&quot;:&quot;Carlsson_2018_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Carlsson2018_base.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Carlsson2018_full&quot;,&quot;label&quot;:&quot;Carlsson_2018_full&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Carlsson2018_full.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Overgaard2019_estimate&quot;,&quot;label&quot;:&quot;Overgaard_2019_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Overgaard2019_estimate.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Yu2024_reference&quot;,&quot;label&quot;:&quot;Yu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Yu2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Guo_2025_Weight&quot;,&quot;label&quot;:&quot;Guo_2025 \u00b7 \u0394\u0394Weight&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/pd_Guo_2025_Weight.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# semaglutide — `Semaglutide_Overgaard2019_one_compartment_model`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has semaglutide, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `accepted_with_caveats` (reviewed 2026-09-28 14:40:29.768934+00:00) predates the upstream re-run (2026-10-05 02:39:27.995132+00:00). Current validate status: `needs_review`.

## Citation
Overgaard RV et al., Population Pharmacokinetics of Semaglut…, Diabetes therapy : research… (2019)
  ·  DOI: [10.1007/s13300-019-0581-y](https://doi.org/10.1007/s13300-019-0581-y)

<div class="pk-model-meta" hidden drug="semaglutide" model-id="Semaglutide_Overgaard2019_one_compartment_model" status="needs_review" stale="true" population="healthy subjects and those with type 2 diabetes" measured-compound="semaglutide" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant ka, h−1 | `Q49` · kabs | 0.0296 | h−1 | 8.222222222222222e-06 | [1] / [h] | not captured | llm_confirmed (0.6) | Overgaard_2019_table_5:row0:col2 | — | not captured |
| Total volume/Fb, L | `Q76` · V/F | 9.77 | L | 0.00977 | [l] | not captured | llm (0.6) | Overgaard_2019_table_5:row3:col2 | — | not captured |
| theta_q27_body_weight | `Q900` · theta_q27_body_weight | 0.0473 | not captured | not captured | not captured | not captured | not captured (not captured) | Overgaard_2019_table_5:row1:col2 | — | not captured |
| CL/F | `Q27` · CL/F | 0.0478 | l/h | 1.3277777777777778e-08 | L/h | not captured | review_gapfill (0.7) | Carlsson_2018:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'body weight'/'' on Q27 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=semaglutide
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'one-compartment model' subgroup of Overgaard_2019 (paper reports 4 populations: estimate, one-compartment model, one-compartment model from phase 3a trialsa, two-compartment final model)
- gap-filled Q27 (CL/F) from Carlsson_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row1:col2 = '[0.0236–0.027]'
- unparsed cell Tab4:row2:col2 = '[0.0327–0.0369]'
- unparsed cell Tab4:row3:col2 = '[3.28–3.9]'
- unparsed cell Tab4:row4:col2 = '[0.249–0.359]'
- unparsed cell Tab4:row5:col2 = '[3.78–4.42]'
- unparsed cell Tab4:row6:col2 = '[0.798–0.896]'
- unparsed cell Tab4:row7:col2 = '[0.912–1.1]'
- unparsed cell Tab4:row8:col2 = '[0.833–1.01]'
- unparsed cell Tab4:row9:col2 = '[1.09–1.16]'
- unparsed cell Tab4:row10:col2 = '[0.844–0.921]'
- unparsed cell Tab4:row11:col2 = '[0.0301–0.039]'
- unparsed cell Tab4:row12:col2 = '[0.0438–0.0615]'
- unparsed cell Tab4:row13:col2 = '[0.109–0.168]'
- unparsed cell Tab4:row14:col2 = '[0.485–0.603]'
- unparsed cell Overgaard_2019_table_5:row0:col3 = '0.0286 (fixed)c'
- companion parameter table 5 transcribed (10 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.875 (7/8 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 0.0478 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption rate constant ka]` | 0.0296 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption rate constant ka]` | not captured | 0.0296 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_body_weight]` | 0.0473 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_body_weight]` | not captured | 0.0473 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total volume/fb]` | 9.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total volume/fb]` | not captured | 9.77 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | semaglutide | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | semaglutide | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Carlsson_2018:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Overgaard_2019_table_5:row0:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Overgaard_2019_table_5:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0478 L/h | not captured | not captured | ['Carlsson_2018:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 9.77 L | not captured | not captured | ['Overgaard_2019_table_5:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=semaglutide) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_semaglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Overgaard_2019` / `Overgaard_2019::one_compartment_model`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_semaglutide/models/modelica/Semaglutide_Overgaard2019_one_compartment_model.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_semaglutide/models/modelica/Semaglutide_Overgaard2019_one_compartment_model.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_semaglutide/models/modelica/Semaglutide_Overgaard2019_one_compartment_model.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_one_compartment_model/Semaglutide_Overgaard2019_one_compartment_model_modelica.zip" download>Semaglutide_Overgaard2019_one_compartment_model_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_one_compartment_model/Semaglutide_Overgaard2019_one_compartment_model_fmi.zip" download>Semaglutide_Overgaard2019_one_compartment_model_fmi.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_one_compartment_model/Semaglutide_Overgaard2019_one_compartment_model_matlab.zip" download>Semaglutide_Overgaard2019_one_compartment_model_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_one_compartment_model/Semaglutide_Overgaard2019_one_compartment_model_matlab_simbio.zip" download>Semaglutide_Overgaard2019_one_compartment_model_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_one_compartment_model/Semaglutide_Overgaard2019_one_compartment_model_sbml.zip" download>Semaglutide_Overgaard2019_one_compartment_model_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_one_compartment_model/Semaglutide_Overgaard2019_one_compartment_model_cellml.zip" download>Semaglutide_Overgaard2019_one_compartment_model_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 02:39 UTC</sub>
