<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;metformin&quot;,&quot;href&quot;:&quot;drugs/toxin_metformin/&quot;},{&quot;label&quot;:&quot;Choi_2018 \u00b7 healthy adults&quot;}]"></div>

# metformin — `Metformin_Choi2018_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-11 08:46:59.346767+00:00) predates the upstream re-run (2026-09-16 14:45:01.266400+00:00). Current validate status: `rejected`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Choi S; Jeon S; Han S et al. (2018). Translational and clinical pharmacology 26
  ·  DOI: [10.12793/tcp.2018.26.1.25](https://doi.org/10.12793/tcp.2018.26.1.25)

<div class="pk-model-meta" hidden drug="metformin" model-id="Metformin_Choi2018_reference" status="rejected" stale="true" population="healthy adults" measured-compound="metformin" parameterization="apparent" topology="2C"></div>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | 3.62 | exact (1.0) | T3:row2:col2, T3:row2:col3 | — | 19.8 (4.53% RSE) |
| Vc/F (L) | `Q290` · V1/F | —(suppressed) | L | — | [l] | 10.2 | exact (1.0) | T3:row3:col2, T3:row3:col3 | — | 32.8 (10.3% RSE) |
| Q/F (L/h) | `Q69` · Q/F | —(suppressed) | L/h | — | [l] / [h] | 14.1 | exact (1.0) | T3:row4:col2, T3:row4:col3 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | 6.50 | exact (1.0) | T3:row5:col2, T3:row5:col3 | — | not captured |
| Ka1 (1/h) | `Q95` · t1/2ka | —(suppressed) | not captured | — | not captured | 15.3 | llm (0.6) | T3:row6:col2, T3:row6:col3 | — | not captured |
| F1 | `Q40` · Fab | —(suppressed) | not captured | — | not captured | 20.5 | exact (1.0) | T3:row8:col2, T3:row8:col3 | — | not captured |
| D2 (1/h) | `Q310` · D1 | —(suppressed) | not captured | — | not captured | 3.30 | llm (0.6) | T3:row9:col2, T3:row9:col3 | — | not captured |
| Ka (h -1 ) Absorption rate constant | `Q49` · kabs | —(suppressed) | h -1 | — | 1/h | not captured | review_gapfill (0.7) | Chae_2012:review | — | not captured |
| Tlag | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Zhang_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'ALAG2 (h)' — extend the ontology if this is a real PK parameter (source ['T3:row10:col2', 'T3:row10:col3'])
- dropped unlinked row (NIL): 'ρCL/F~Vc/F' — extend the ontology if this is a real PK parameter (source ['T3:row16:col2', 'T3:row16:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=metformin
- gap-filled Q49 (kabs) from Chae_2012's review values (primary lacked it)
- gap-filled Q83 (tlag) from Zhang_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T3:row2:col4 = '77.2 (71.7–83.0)'
- unparsed cell T3:row3:col4 = '194 (139–269)'
- unparsed cell T3:row4:col4 = '19.4 (11.1–29.8)'
- unparsed cell T3:row5:col4 = '105 (82.0–127)'
- unparsed cell T3:row6:col4 = '1.21 (0.873–1.66)'
- unparsed cell T3:row8:col4 = '0.314 (0.202–0.484)'
- unparsed cell T3:row9:col4 = '4.44 (3.07–4.75)'
- unparsed cell T3:row10:col4 = '0.250 (0.249–0.251)'
- unparsed cell T3:row11:col4 = '0.939 (0.888–0.991)'
- unparsed cell T3:row13:col4 = '19.6 (15.5–23.1)'
- unparsed cell T3:row14:col4 = '29.7 (21.4–40.7)'
- unparsed cell T3:row15:col4 = '56.7 (38.5–75.7)'
- unparsed cell T3:row16:col4 = '0.223 (0.190–0.268)'
- unparsed cell T3:row18:col4 = '0.254 (0.232–0.283)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row2:col2', 'T3:row2:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row3:col2', 'T3:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chae_2012:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row4:col2', 'T3:row4:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row5:col2', 'T3:row5:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Zhang_2024:review'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.94 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 76.7 L/h | not captured | not captured | ['T3:row2:col2', 'T3:row2:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 180 L | not captured | not captured | ['T3:row3:col2', 'T3:row3:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 109 L | not captured | not captured | ['T3:row5:col2', 'T3:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Choi_2018` / `Choi_2018::healthy adults`)


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
