<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;capivasertib&quot;,&quot;href&quot;:&quot;drugs/drug_capivasertib/&quot;},{&quot;label&quot;:&quot;Fernandez-Teruel_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capivasertib_Fernandez2025_reference&quot;,&quot;label&quot;:&quot;Fernandez_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capivasertib — `Capivasertib_FernandezTeruel2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.786). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's half life alpha (model/paper ratio 1.88); the model does not reproduce the paper's terminal half-life (model/paper ratio 0.637).**

Simulated as the paper dosed it, the model's half life alpha differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — capivasertib: kabs 0.408 1/h, CL/F 62 L/h, V2/F 50 L, V3/F 119 L, Q3/F 3.06 L/h, tlag 0.459 h, Frel 1.49, t1/2z 71 h, … (+2).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl0_bbw: this record has none, the second reading 0.00617; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Fernandez-Teruel C et al., Population Pharmacokinetics of Capivase…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01407-x](https://doi.org/10.1007/s40262-024-01407-x)

<div class="pk-model-meta" hidden drug="capivasertib" model-id="Capivasertib_FernandezTeruel2024_reference" status="needs_review" stale="false" population="patients with advanced or metastatic solid tumours" measured-compound="capivasertib" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, Q/F, Q3/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.408 | 1/h | 0.00011333333333333333 | 1/h | 1.46 | exact (1.0) | Tab3:row1:col1, Tab3:row1:col2, Tab3:row1:col3, Tab3:row1:col4 | — | not captured |
| CL0/F (L/h) | `Q27` · CL/F | 62 | L/h | 1.7222222222222224e-05 | [l] / [h] | 1.58 | llm_corrected (0.6) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col3, Tab3:row2:col4 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 50 | L | 0.05 | [l] | 1.34 | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3, Tab3:row3:col4 | — | 102 (7.94% RSE) |
| V3/F (L) | `Q78` · V3/F | 119 | L | 0.11900000000000001 | [l] | 4.27 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4 | — | not captured |
| Q3/F (L/h) | `Q309` · Q3/F | 3.06 | L/h | 8.5e-07 | [l] / [h] | 1.5 | exact (1.0) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4 | — | not captured |
| Lag1_cap (h) | `Q83` · tlag | 0.459 | h | 1652.4 | [h] | 0.292 | llm (0.6) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col3, Tab3:row7:col4 | — | not captured |
| LogitF1 | `Q87` · Frel | 1.49 | not captured | not captured | not captured | 6.96 | llm (0.6) | Tab3:row8:col1, Tab3:row8:col2, Tab3:row8:col3, Tab3:row8:col4 | — | not captured |
| T50 (h) | `Q57` · t1/2z | 71 | h | 255600.0 | [h] | 2.06 | llm (0.6) | Tab3:row9:col1, Tab3:row9:col2, Tab3:row9:col3, Tab3:row9:col4 | — | not captured |
| Q4/F (L/h) | `Q69` · Q/F | 19.9 | L/h | 5.527777777777777e-06 | [l] / [h] | 1.31 | llm (0.6) | Tab3:row10:col1, Tab3:row10:col2, Tab3:row10:col3, Tab3:row10:col4 | — | not captured |
| V4/F (L) | `Q76` · V/F | 95.7 | L | 0.09570000000000001 | [l] | 1.32 | llm (0.6) | Tab3:row11:col1, Tab3:row11:col2, Tab3:row11:col3, Tab3:row11:col4 | — | not captured |
| D2 (h) | `Q900` · equation variable | 45.1 | h | not captured | [h] | 0.331 | llm (0.6) | Tab3:row12:col1, Tab3:row12:col2, Tab3:row12:col3, Tab3:row12:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Imax'
- dropped value-less row: 'Imax_dose'
- dropped duplicate Q83 ('Lag1_tab (h)', value '0.203') — already have one for this compound
- dropped PD-category row 'Imax_pacl' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row17:col1', 'Tab3:row17:col2', 'Tab3:row17:col3', 'Tab3:row17:col4'])
- dropped duplicate Q27 ('CL0_BBW', value '0.00617') — already have one for this compound
- dropped value-less row: 'F1_BBW'
- implicit units: 'Ka (1/h)' → 1/h (from the paper text: 'Table 3 states “Ka (1/h)”.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=capivasertib
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell Tab3:row6:col1 = '− 1.54'
- unparsed cell Tab3:row6:col3 = '− 1.51'
- unparsed cell Tab3:row6:col4 = '− 1.85 to − 1.29'
- unparsed cell Tab3:row15:col1 = '− 0.00183'
- unparsed cell Tab3:row15:col3 = '− 0.00187'
- unparsed cell Tab3:row15:col4 = '− 0.00241 to − 0.00117'
- unparsed cell Tab3:row19:col1 = '− 1.11'
- unparsed cell Tab3:row19:col3 = '− 1.11'
- unparsed cell Tab3:row19:col4 = '− 1.56 to − 0.618'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.786 (22/28 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl0_bbw]` | not captured | 0.00617 | only_one_extracted |
| `qwen3.8-27b` | `parameters[d2].parameter_id` | Q900 | Q310 | mismatch |
| `qwen3.8-27b` | `parameters[lag1_cap].parameter_id` | Q83 | Q95 | mismatch |
| `qwen3.8-27b` | `parameters[lag1_tab]` | not captured | 0.203 | only_one_extracted |
| `qwen3.8-27b` | `parameters[logitf1]` | 1.49 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v4/f]` | 95.7 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_alpha | fail | 0.37 | 0.697 | 1.8838 | 0.25 | reported t½α |
| C1_half_life_beta | fail | 4.2 | 2.674 | 0.6367 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:row2:col4'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row1:col1', 'Tab3:row1:col2', 'Tab3:row1:col3', 'Tab3:row1:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab3:row9:col1', 'Tab3:row9:col2', 'Tab3:row9:col3', 'Tab3:row9:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row10:col1', 'Tab3:row10:col2', 'Tab3:row10:col3', 'Tab3:row10:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row11:col1', 'Tab3:row11:col2', 'Tab3:row11:col3', 'Tab3:row11:col4'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2', 'Tab3:row7:col3', 'Tab3:row7:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 62 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:row2:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 95.7 L | not captured | not captured | ['Tab3:row11:col1', 'Tab3:row11:col2', 'Tab3:row11:col3', 'Tab3:row11:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 50 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_capivasertib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fernandez-Teruel_2024` / `Fernandez-Teruel_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:20 UTC</sub>
