<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;metformin&quot;,&quot;href&quot;:&quot;drugs/toxin_metformin/&quot;},{&quot;label&quot;:&quot;Patel_2019 \u00b7 met_grt&quot;}]"></div>

# metformin — `Metformin_Patel2019_met_grt`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Patel O; Muller CJF; Joubert E; Rosenkranz B; Taylor MJC; Louw J; et al. et al. (2019). Frontiers in pharmacology 10
  ·  DOI: [10.3389/fphar.2019.01243](https://doi.org/10.3389/fphar.2019.01243)

<div class="pk-model-meta" hidden drug="metformin" model-id="Metformin_Patel2019_met_grt" status="rejected" stale="false" population="Wistar rats" measured-compound="metformin" parameterization="apparent" topology="3C"></div>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T max (h) | `Q56` · tmax | —(suppressed) | h | — | [h] | not captured | space_fold (0.95) | T4:row1:col4 | — | not captured |
| T 1/2 (h) | `Q57` · t1/2z | —(suppressed) | h | — | [h] | not captured | space_fold (0.95) | T4:row3:col4 | — | not captured |
| MRT0-∞ (h) | `Q53` · MRT | —(suppressed) | h | — | [h] | not captured | exact (1.0) | T4:row6:col4 | — | not captured |
| Vz/F (mg/kg)/(L/kg) | `Q76` · V/F | —(suppressed) | L/kg | — | [l] / [kg] | not captured | llm_confirmed (0.6) | T4:row7:col4 | — | not captured |
| CL/F (mg/kg)/(L/kg*hr) | `Q27` · CL/F | —(suppressed) | L/kg*hr | — | [l] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | T4:row8:col4 | — | not captured |
| V1 (mg/kg)/(μg/mL) | `Q63` · V1 | —(suppressed) | μg/mL | — | [µg] / [ml] | not captured | llm_confirmed (0.6) | T4:row9:col4 | — | not captured |
| V2 (mg/kg)/(μg/mL) | `Q64` · V2 | —(suppressed) | μg/mL | — | [µg] / [ml] | not captured | llm_confirmed (0.6) | T4:row10:col4 | — | not captured |
| K12 (1/h) | `Q301` · k12 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | T4:row11:col4 | — | not captured |
| K21 (1/h) | `Q302` · k21 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | T4:row12:col4 | — | not captured |
| Ka (h -1 ) Absorption rate constant | `Q49` · kabs | —(suppressed) | h -1 | — | 1/h | not captured | review_gapfill (0.7) | Chae_2012:review | — | not captured |
| Tlag | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Zhang_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CL/F (mg/kg)/(L/kg*hr)' → Q27 (unit '[length] ** 3 * [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V1 (mg/kg)/(μg/mL)' → Q63 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'V2 (mg/kg)/(μg/mL)' → Q64 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=metformin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'met + grt' subgroup of Patel_2019 (paper reports 3 populations: ator + grt, met, met + grt)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Chae_2012's review values (primary lacked it)
- gap-filled Q83 (tlag) from Zhang_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T4:row2:col2 = '48.72 ± 20.38*'
- unparsed cell T4:row2:col3 = '4, 727.97 ± 1471.97'
- unparsed cell T4:row2:col4 = '3, 530.64 ± 517.61'
- unparsed cell T4:row4:col2 = '135.66 ± 53.27*'
- unparsed cell T4:row4:col3 = '15, 983.48 ± 3529.52'
- unparsed cell T4:row4:col4 = '12, 538.03 ± 1919.92'
- unparsed cell T4:row5:col3 = '17, 856.48 ± 4797.19'
- unparsed cell T4:row5:col4 = '14, 667.16 ± 2696.19'
- unparsed cell T4:row7:col2 = '1.14 ± 0.55**'
- unparsed cell T4:row8:col2 = '0.25 ± 0.06**'
- unparsed cell T4:row10:col2 = '1.66 ± 0.93**'
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | fail | [length] ** 3 * [time] | L/kg*hr | not captured | not captured | ['T4:row8:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chae_2012:review'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['T4:row6:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['T4:row1:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T4:row3:col4'] |
| C5_dimension_Q63 | fail | [mass] / [length] ** 3 | μg/mL | not captured | not captured | ['T4:row9:col4'] |
| C5_dimension_Q64 | fail | [mass] / [length] ** 3 | μg/mL | not captured | not captured | ['T4:row10:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row7:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Zhang_2024:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.8 L | not captured | not captured | ['T4:row7:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Patel_2019` / `Patel_2019::met_grt`)


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
