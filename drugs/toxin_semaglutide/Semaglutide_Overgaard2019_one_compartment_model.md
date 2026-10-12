<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/toxin_semaglutide/&quot;},{&quot;label&quot;:&quot;Overgaard_2019 \u00b7 one_compartment_model&quot;}]"></div>

# semaglutide — `Semaglutide_Overgaard2019_one_compartment_model`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Overgaard_2019)

<div class="pk-model-meta" hidden drug="semaglutide" model-id="Semaglutide_Overgaard2019_one_compartment_model" status="extracted" stale="false" population="healthy subjects and subjects with type 2 diabetes" measured-compound="semaglutide" parameterization="apparent" topology="1C"></div>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant ka, h−1 | `Q49` · kabs | 0.0296 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Overgaard_2019_table_5:row0:col2 | — | not captured |
| Total volume/Fb, L | `Q76` · V/F | 9.77 | not captured | not captured | not captured | not captured | llm (0.6) | Overgaard_2019_table_5:row3:col2 | — | not captured |
| theta_q27_body_weight | `Q900` · theta_q27_body_weight | 0.0473 | not captured | not captured | not captured | not captured | not captured (not captured) | Overgaard_2019_table_5:row1:col2 | — | not captured |
| CL/F | `Q27` · CL/F | 0.0478 | l/h | 1.3277777777777778e-08 | L/h | not captured | review_gapfill (0.7) | Carlsson_2018:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
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

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Carlsson_2018:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0478 L/h | not captured | not captured | ['Carlsson_2018:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_semaglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Overgaard_2019` / `Overgaard_2019::one_compartment_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
