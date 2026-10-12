<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;metformin&quot;,&quot;href&quot;:&quot;drugs/toxin_metformin/&quot;},{&quot;label&quot;:&quot;Jacobs_2026 \u00b7 oral&quot;}]"></div>

# metformin — `Metformin_Jacobs2026_oral`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jacobs ME; Blea J; Hardy M; McKemie DS; Traynham M; Knych HK et al. (2026). Drug testing and analysis 18
  ·  DOI: [10.1002/dta.70000](https://doi.org/10.1002/dta.70000)

<div class="pk-model-meta" hidden drug="metformin" model-id="Metformin_Jacobs2026_oral" status="extracted" stale="false" population="Thoroughbred horses" measured-compound="metformin" parameterization="mechanistic" topology="1C"></div>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 941.0 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Jacobs_2026_table_2:row2:col3 | — | not captured |
| Tmax (h) | `Q56` · tmax | 0.86 | h | 3096.0 | [h] | not captured | exact (1.0) | Jacobs_2026_table_2:row3:col3 | — | not captured |
| AUCinf (h * ng/mL) | `Q17` · AUC∞ | 4324.7 | h * ng/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Jacobs_2026_table_2:row4:col3 | — | not captured |
| AUC % extrap | `Q84` · AUC%ext | 1.09 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Jacobs_2026_table_2:row5:col3 | — | not captured |
| Bioavailability (%) | `Q40` · Fab | 7.86 | not captured | not captured | not captured | not captured | exact (1.0) | Jacobs_2026_table_2:row6:col3 | — | not captured |
| Terminal t1/2 (h) | `Q57` · t1/2z | 85.8 | h | 308880.0 | [h] | not captured | exact (1.0) | Jacobs_2026_table_2:row9:col3 | — | not captured |
| CL | `Q22` · CL | 0.059 | L/h | 1.6388888888888888e-08 | L/h | not captured | review_gapfill (0.7) | Choi_2025:review | — | not captured |
| V | `Q61` · V | 0.418 | L/kg | 0.029259999999999998 | L | not captured | review_gapfill (0.7) | Dong_2024:review | — | not captured |
| Ka (h -1 ) Absorption rate constant | `Q49` · kabs | 0.41 | h -1 | 0.00011388888888888888 | 1/h | not captured | review_gapfill (0.7) | Chae_2012:review | — | not captured |
| Tlag | `Q83` · tlag | 0.5 | h | 1800.0 | h | not captured | review_gapfill (0.7) | Zhang_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=metformin
- population split: 'oral' subgroup of Jacobs_2026 (paper reports 2 populations: intravenous, oral)
- gap-filled Q22 (CL) from Choi_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Dong_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chae_2012's review values (primary lacked it)
- gap-filled Q83 (tlag) from Zhang_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Jacobs_2026_table_2:row1:col2 = '28,243.7 (20,340.9–34,370.8)'
- unparsed cell Jacobs_2026_table_2:row2:col4 = '832.6 (542.8–2346.0)'
- unparsed cell Jacobs_2026_table_2:row3:col4 = '0.88 (0.08–1.5)'
- unparsed cell Jacobs_2026_table_2:row4:col2 = '9987.0 (6972.6–14,107.3)'
- unparsed cell Jacobs_2026_table_2:row4:col4 = '4586.4 (2785.5–6263.2)'
- unparsed cell Jacobs_2026_table_2:row5:col2 = '0.50 (0.37–0.83)'
- unparsed cell Jacobs_2026_table_2:row5:col4 = '0.96 (0.60–2.34)'
- unparsed cell Jacobs_2026_table_2:row6:col4 = '8.02 (5.25–10.9)'
- unparsed cell Jacobs_2026_table_2:row7:col2 = '500.8 (354.4–717.1)'
- unparsed cell Jacobs_2026_table_2:row8:col2 = '4.15 (2.48–8.19)'
- unparsed cell Jacobs_2026_table_2:row9:col2 = '86.7 (64.1–105.6)'
- unparsed cell Jacobs_2026_table_2:row9:col4 = '87.8 (56.5–111.0)'
- companion parameter table 2 transcribed (12 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jacobs_2026_table_2:row4:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Choi_2025:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jacobs_2026_table_2:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chae_2012:review'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Jacobs_2026_table_2:row3:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Jacobs_2026_table_2:row9:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dong_2024:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Zhang_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.059 | not captured | not captured | ['Choi_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.059 L/h | not captured | not captured | ['Choi_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 29.3 L | not captured | not captured | ['Dong_2024:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jacobs_2026` / `Jacobs_2026::oral`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/toxin_metformin/Metformin_Jacobs2026_oral/Metformin_Jacobs2026_oral.svg" alt="Metformin_Jacobs2026_oral diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Model downloads

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/toxin_metformin/Metformin_Jacobs2026_oral/Metformin_Jacobs2026_oral_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_metformin/Metformin_Jacobs2026_oral/Metformin_Jacobs2026_oral_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Metformin_Jacobs2026_oral_params.json` · controls `Metformin_Jacobs2026_oral_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
