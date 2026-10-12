<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/toxin_amoxicillin/&quot;},{&quot;label&quot;:&quot;Carceles_1995_3 \u00b7 goats&quot;}]"></div>

# amoxicillin — `Amoxicillin_Carceles1995v3_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Carceles_1995_3)

<div class="pk-model-meta" hidden drug="amoxicillin" model-id="Amoxicillin_Carceles1995v3_reference" status="not_modelled" stale="false" population="goats" measured-compound="amoxicillin" parameterization="mechanistic" topology="1C"></div>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row3:col4 | — | not captured |
| t1,2a | `Q59` · t1/2α | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row6:col4 | — | not captured |
| tlag | `Q83` · tlag | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row8:col4 | — | not captured |
| tn.+ tIag | `Q83` · tlag | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row9:col2 | — | not captured |
| Cmax | `Q32` · Cmax | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row10:col4 | — | not captured |
| AUC | `Q88` · AUC | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row15:col2, Carceles_1995_3_table_1:row13:col2 | — | not captured |
| AUC | `Q88` · AUC | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row15:col4 | — | not captured |
| MRT | `Q53` · MRT | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row16:col4 | — | not captured |
| MAT | `Q73` · MAT | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row17:col4 | — | not captured |
| k21 | `Q302` · k21 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Carceles_1995_3_table_1:row7:col2 | — | not captured |
| CL | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Carceles_1995_3_table_1:row9:col2 | — | not captured |
| t1/2a | `Q59` · t1/2α | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Carceles_1995_3_table_1:row10:col2 | — | not captured |
| MRT | `Q53` · MRT | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Carceles_1995_3_table_1:row14:col2 | — | not captured |
| Vd | `Q61` · V | —(suppressed) | L/kg | — | L | not captured | review_gapfill (0.7) | Bardhi_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Ca' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col4'])
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col2'])
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col4'])
- dropped unlinked row (NIL): '13' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col4'])
- dropped unlinked row (NIL): 't, 2/5' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col4'])
- dropped unlinked row (NIL): 'ka`(b)' — extend the ontology if this is a real PK parameter (source ['tab_1:row12:col2'])
- dropped unlinked row (NIL): 't I ,2a,' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col4'])
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['Carceles_1995_3_table_1:row1:col2'])
- dropped unlinked row (NIL): '1(12' — extend the ontology if this is a real PK parameter (source ['Carceles_1995_3_table_1:row6:col2'])
- dropped unlinked row (NIL): 'tina' — extend the ontology if this is a real PK parameter (source ['Carceles_1995_3_table_1:row11:col2'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q61 (V) from Bardhi_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row3:col2 = 'h-1'
- unparsed cell tab_1:row5:col2 = 'h-1'
- unparsed cell Carceles_1995_3_table_1:row4:col2 = '0.5751 ± 0.0136 0.0847 ± 0.0091'
- unparsed cell Carceles_1995_3_table_1:row4:col3 = '0.8033 ± 0.0247 0.0528 ± 0.0071'
- unparsed cell Carceles_1995_3_table_1:row5:col2 = '0.1907 ± 0.0188 0.1706 ± 0.0174'
- unparsed cell Carceles_1995_3_table_1:row5:col3 = '0.1508 ± 0.0143 0.1270 ± 0.0108'
- unparsed cell Carceles_1995_3_table_1:row6:col1 = 'h-1'
- unparsed cell Carceles_1995_3_table_1:row7:col1 = 'h-1'
- companion parameter table 1 transcribed (20 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bardhi_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.1097 | not captured | not captured | ['Carceles_1995_3_table_1:row9:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 30.8 L | not captured | not captured | ['Bardhi_2026:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 10.71 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 5.75 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2.73 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.42 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.41 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.93 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carceles_1995_3` / `Carceles_1995_3::goats`)


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
