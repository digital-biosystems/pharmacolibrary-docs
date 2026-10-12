<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;clopidogrel&quot;,&quot;href&quot;:&quot;drugs/toxin_clopidogrel/&quot;},{&quot;label&quot;:&quot;Grafeneder_2024 \u00b7 hv&quot;}]"></div>

# clopidogrel — `Clopidogrel_Grafeneder2024_hv`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `clopidogrel`, measured `clopidogrel active metabolite`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Grafeneder J; van Os W; Minichmayr IK; Kovacevic Miljevic KD; Reiter B; Säemann MD; et al. et al. (2024). Kidney international reports 9
  ·  DOI: [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029)

<div class="pk-model-meta" hidden drug="clopidogrel" model-id="Clopidogrel_Grafeneder2024_hv" status="extracted" stale="false" population="hemodialysis patients and healthy volunteers" measured-compound="clopidogrel active metabolite" parameterization="mechanistic" topology="parent_metabolite"></div>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax_CLO [ng/ml] | `Q32` · Cmax | 1.5 | not captured | not captured | not captured | not captured | llm (0.6) | Grafeneder_2024_table_3:row3:col3 | — | not captured |
| Cmax ratio CAM:CLO | `Q33` · Cmax_ratio | 24.2 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Grafeneder_2024_table_3:row5:col3 | — | not captured |
| AUClast_CLO [ng/ml·min] | `Q74` · AUClast | 127 | not captured | not captured | not captured | not captured | llm (0.6) | Grafeneder_2024_table_3:row6:col3 | — | not captured |
| t1/2_CLO [min] | `Q57` · t1/2z | 131 | not captured | not captured | not captured | not captured | llm (0.6) | Grafeneder_2024_table_3:row8:col3 | — | not captured |
| Clearance [ml/min] | `Q22` · CL | 79 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Grafeneder_2024_table_3:row14:col3 | — | not captured |
| VD [ml] | `Q61` · V | 4128 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Grafeneder_2024_table_3:row15:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'n' — extend the ontology if this is a real PK parameter (source ['Grafeneder_2024_table_3:row1:col1', 'Grafeneder_2024_table_3:row1:col2', 'Grafeneder_2024_table_3:row1:col3'])
- dropped duplicate Q32 ('Cmax_CAM [ng/ml]', value '35.4') — already have one for this compound
- dropped duplicate Q74 ('AUClast_CAM [ng/ml·min]', value '1706') — already have one for this compound
- dropped duplicate Q57 ('t1/2_CAM [min]', value '24') — already have one for this compound
- dropped duplicate Q32 ('Cmax [μg/ml]', value '18.7') — already have one for this compound
- dropped duplicate Q74 ('AUClast [μg/ml·min]', value '492') — already have one for this compound
- dropped duplicate Q57 ('t1/2 [min]', value '57.3') — already have one for this compound
- dropped unlinked row (NIL): 'ADP [U]' — extend the ontology if this is a real PK parameter (source ['Grafeneder_2024_table_3:row17:col3'])
- dropped unlinked row (NIL): '0 min [%]' — extend the ontology if this is a real PK parameter (source ['Grafeneder_2024_table_3:row19:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clopidogrel active metabolite
- population split: 'hv' subgroup of Grafeneder_2024 (paper reports 2 populations: hdp, hv)
- review gap-fill skipped: this record measures 'clopidogrel active metabolite', not clopidogrel — the review values are the parent's

**Extraction notes:**
- unparsed cell Grafeneder_2024_table_3:row3:col1 = '1.9 (1.1–2.1)'
- unparsed cell Grafeneder_2024_table_3:row3:col2 = '3.1 (2.9–4.2)'
- unparsed cell Grafeneder_2024_table_3:row3:col4 = '4 (2.1–9.6)'
- unparsed cell Grafeneder_2024_table_3:row3:col5 = '7.6 (4.1–7.9)'
- unparsed cell Grafeneder_2024_table_3:row3:col6 = '10.2 (6.7–19.9)'
- unparsed cell Grafeneder_2024_table_3:row4:col1 = '22.1 (13.3–30.1)'
- unparsed cell Grafeneder_2024_table_3:row4:col2 = '24.8 (17.8–49.5)'
- unparsed cell Grafeneder_2024_table_3:row4:col4 = '5.3 (1.2–73.2)'
- unparsed cell Grafeneder_2024_table_3:row4:col5 = '12.2 (3.6–35.2)'
- unparsed cell Grafeneder_2024_table_3:row4:col6 = '12.2 (5.1–23.4)'
- unparsed cell Grafeneder_2024_table_3:row5:col1 = '13.5 (10.5–18)'
- unparsed cell Grafeneder_2024_table_3:row5:col2 = '8.1 (3.7–28.6)'
- unparsed cell Grafeneder_2024_table_3:row5:col4 = '2.6 (0.1–18.2)'
- unparsed cell Grafeneder_2024_table_3:row5:col5 = '1.6 (0.9–14.7)'
- unparsed cell Grafeneder_2024_table_3:row5:col6 = '1.4 (0.6–1.6)'
- unparsed cell Grafeneder_2024_table_3:row6:col1 = '160 (94–195)'
- unparsed cell Grafeneder_2024_table_3:row6:col2 = '279 (193–461)'
- unparsed cell Grafeneder_2024_table_3:row6:col4 = '389 (184–1599)'
- unparsed cell Grafeneder_2024_table_3:row6:col5 = '628 (525–1068)'
- unparsed cell Grafeneder_2024_table_3:row6:col6 = '641 (594–1729)'
- unparsed cell Grafeneder_2024_table_3:row7:col1 = '1601 (987–1929)'
- unparsed cell Grafeneder_2024_table_3:row7:col2 = '1354 (1124–2452)'
- unparsed cell Grafeneder_2024_table_3:row7:col4 = '994 (527–1731)'
- unparsed cell Grafeneder_2024_table_3:row7:col5 = '156 (1044–2341)'
- unparsed cell Grafeneder_2024_table_3:row7:col6 = '1057 (458–4794)'
- unparsed cell Grafeneder_2024_table_3:row8:col1 = '87.5 (66.1–123)'
- unparsed cell Grafeneder_2024_table_3:row8:col2 = '82 (60.7–139)'
- unparsed cell Grafeneder_2024_table_3:row8:col4 = '132 (132–132)'
- unparsed cell Grafeneder_2024_table_3:row8:col5 = '81.8 (65.6–121)'
- unparsed cell Grafeneder_2024_table_3:row8:col6 = '138 (112–150)'
- unparsed cell Grafeneder_2024_table_3:row9:col1 = '33 (30.6–42.4)'
- unparsed cell Grafeneder_2024_table_3:row9:col2 = '43.2 (35–53.2)'
- unparsed cell Grafeneder_2024_table_3:row9:col4 = '161 (35.8–287)'
- unparsed cell Grafeneder_2024_table_3:row9:col5 = '49.2 (42.6–149)'
- unparsed cell Grafeneder_2024_table_3:row9:col6 = '197 (59.5–384)'
- unparsed cell Grafeneder_2024_table_3:row11:col1 = '12 (3.6–16.7)'
- unparsed cell Grafeneder_2024_table_3:row11:col2 = '6.8 (4.3–13.3)'
- unparsed cell Grafeneder_2024_table_3:row11:col4 = '3.9 (0.8–4.3)'
- unparsed cell Grafeneder_2024_table_3:row11:col5 = '3.2 (2.3–4.1)'
- unparsed cell Grafeneder_2024_table_3:row11:col6 = '2.7 (1–3.1)'
- unparsed cell Grafeneder_2024_table_3:row12:col1 = '423 (359–537)'
- unparsed cell Grafeneder_2024_table_3:row12:col2 = '363 (265–442)'
- unparsed cell Grafeneder_2024_table_3:row12:col4 = '391 (41.3–500)'
- unparsed cell Grafeneder_2024_table_3:row12:col5 = '417 (281 – 500)'
- unparsed cell Grafeneder_2024_table_3:row12:col6 = '329 (56–362)'
- unparsed cell Grafeneder_2024_table_3:row13:col1 = '83.9 (64.9–97.5)'
- unparsed cell Grafeneder_2024_table_3:row13:col2 = '69.3 (55.8–92.3)'
- unparsed cell Grafeneder_2024_table_3:row13:col4 = '129 (39.2–285)'
- unparsed cell Grafeneder_2024_table_3:row13:col5 = '195 (131–219)'
- unparsed cell Grafeneder_2024_table_3:row13:col6 = '112 (51.4–134)'
- unparsed cell Grafeneder_2024_table_3:row14:col1 = '81.9 (59–99.1)'
- unparsed cell Grafeneder_2024_table_3:row14:col2 = '99.8 (65–144)'
- unparsed cell Grafeneder_2024_table_3:row14:col4 = '61.2 (58.1–100)'
- unparsed cell Grafeneder_2024_table_3:row14:col5 = '89.7 (77.9–91.9)'
- unparsed cell Grafeneder_2024_table_3:row14:col6 = '78 (27.4–389)'
- unparsed cell Grafeneder_2024_table_3:row15:col1 = '8484 (5923–12,003)'
- unparsed cell Grafeneder_2024_table_3:row15:col2 = '7682 (3987–11,705)'
- unparsed cell Grafeneder_2024_table_3:row15:col4 = '17,774 (16,415–17,923'
- unparsed cell Grafeneder_2024_table_3:row15:col5 = '15,619 (11,837–21,927'
- unparsed cell Grafeneder_2024_table_3:row15:col6 = '20,376 (14,061–52,852)'
- unparsed cell Grafeneder_2024_table_3:row17:col1 = '15 (12–18)'
- unparsed cell Grafeneder_2024_table_3:row17:col2 = '11 (8–20)'
- unparsed cell Grafeneder_2024_table_3:row17:col4 = '34 (15–87)'
- unparsed cell Grafeneder_2024_table_3:row17:col5 = '14 (13–28)'
- unparsed cell Grafeneder_2024_table_3:row17:col6 = '27 (17–44)'
- unparsed cell Grafeneder_2024_table_3:row19:col1 = '71 (59–80)'
- unparsed cell Grafeneder_2024_table_3:row19:col2 = '41 (25–53)'
- unparsed cell Grafeneder_2024_table_3:row19:col4 = '60 (36–71)'
- unparsed cell Grafeneder_2024_table_3:row19:col5 = '44 (29–66)'
- unparsed cell Grafeneder_2024_table_3:row19:col6 = '70 (57–73)'
- companion parameter table 3 transcribed (33 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 79.0 | not captured | not captured | ['Grafeneder_2024_table_3:row14:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clopidogrel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Grafeneder_2024` / `Grafeneder_2024::hv`)


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
