<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/toxin_amoxicillin/&quot;},{&quot;label&quot;:&quot;Baklouti_2026 \u00b7 breastfeeding mothers&quot;}]"></div>

# amoxicillin — `Amoxicillin_Baklouti2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `not_modelled` (reviewed 2026-09-11 08:46:39.901040+00:00) predates the upstream re-run (2026-09-16 16:40:12.386350+00:00). Current validate status: `extracted`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Baklouti S; Rigourd V; Panchaud A; Nordeng H; Allegaert K; Annaert P; Huang MC; Monfort A; Guidi M; Gandia P et al. (2026). British journal of clinical pharmacology 92
  ·  DOI: [10.1002/bcp.70434](https://doi.org/10.1002/bcp.70434)

<div class="pk-model-meta" hidden drug="amoxicillin" model-id="Amoxicillin_Baklouti2026_reference" status="extracted" stale="true" population="breastfeeding mothers" measured-compound="amoxicillin" parameterization="apparent" topology="1C"></div>

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) | `Q49` · kabs | 0.17 | h−1 | 4.722222222222223e-05 | [1] / [h] | 39.9 | exact (1.0) | bcp70434-tbl-0003:row1:col1, bcp70434-tbl-0003:row1:col2, bcp70434-tbl-0003:row1:col3 | — | not captured |
| V/F (L) | `Q76` · V/F | 82.38 | L | 0.08238 | [l] | 11.0 | exact (1.0) | bcp70434-tbl-0003:row2:col1, bcp70434-tbl-0003:row2:col2, bcp70434-tbl-0003:row2:col3 | — | not captured |
| Ke (h−1) | `Q47` · kel | 0.31 | h−1 | 8.61111111111111e-05 | [1] / [h] | 23.1 | exact (1.0) | bcp70434-tbl-0003:row3:col1, bcp70434-tbl-0003:row3:col2, bcp70434-tbl-0003:row3:col3 | — | not captured |
| Kmilk (h−1) | `Q301` · k12 | 0.028 | h−1 | 7.777777777777777e-06 | [1] / [h] | 12.5 | exact (1.0) | bcp70434-tbl-0003:row4:col1, bcp70434-tbl-0003:row4:col2, bcp70434-tbl-0003:row4:col3 | — | not captured |
| Kmilk_e (h−1) | `Q346` · kout_peripheral | 0.33 | h−1 | 9.166666666666667e-05 | [1] / [h] | 19.4 | exact (1.0) | bcp70434-tbl-0003:row5:col1, bcp70434-tbl-0003:row5:col2, bcp70434-tbl-0003:row5:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'b1 (se)' — extend the ontology if this is a real PK parameter (source ['bcp70434-tbl-0003:row11:col1', 'bcp70434-tbl-0003:row11:col2', 'bcp70434-tbl-0003:row11:col3'])
- dropped unlinked row (NIL): 'b2 (se)' — extend the ontology if this is a real PK parameter (source ['bcp70434-tbl-0003:row12:col1', 'bcp70434-tbl-0003:row12:col2', 'bcp70434-tbl-0003:row12:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amoxicillin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- amount-only peripheral compartment: a peripheral output rate (kout_peripheral) is present with no reported volume — model its AMOUNT; concentration is not identifiable without an assumed volume
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Ground-truth comparison:** <span class="pk-badge pk-badge--green">confirmed</span>  (5/5 matched, agreement 1.0, tol 0.25)

| o_id | agreement | extracted | truth | fold |
|---|---|---|---|---|
| `Q301` · k12 | match | 0.028 h−1 | 0.028 | 1.0 |
| `Q346` · kout_peripheral | match | 0.33 h−1 | 0.33 | 1.0 |
| `Q47` · kel | match | 0.31 h−1 | 0.31 | 1.0 |
| `Q49` · kabs | match | 0.17 h−1 | 0.17 | 1.0 |
| `Q76` · V/F | match | 82.38 L | 82.38 | 1.0 |

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp70434-tbl-0003:row4:col1', 'bcp70434-tbl-0003:row4:col2', 'bcp70434-tbl-0003:row4:col3'] |
| C5_dimension_Q346 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp70434-tbl-0003:row5:col1', 'bcp70434-tbl-0003:row5:col2', 'bcp70434-tbl-0003:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp70434-tbl-0003:row3:col1', 'bcp70434-tbl-0003:row3:col2', 'bcp70434-tbl-0003:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp70434-tbl-0003:row1:col1', 'bcp70434-tbl-0003:row1:col2', 'bcp70434-tbl-0003:row1:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70434-tbl-0003:row2:col1', 'bcp70434-tbl-0003:row2:col2', 'bcp70434-tbl-0003:row2:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 82.4 L | not captured | not captured | ['bcp70434-tbl-0003:row2:col1', 'bcp70434-tbl-0003:row2:col2', 'bcp70434-tbl-0003:row2:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Baklouti_2026` / `Baklouti_2026::breastfeeding mothers`)


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
