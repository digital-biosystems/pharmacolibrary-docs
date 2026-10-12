<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;triptorelin&quot;,&quot;href&quot;:&quot;drugs/drug_triptorelin/&quot;},{&quot;label&quot;:&quot;M\u00fcller_1997 \u00b7 group_iv&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# triptorelin — `Triptorelin_Mller1997_group_iv`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (Cmax and Ae ), so that value has no SI equivalent. Extracted — triptorelin: t1/2z 220 h, t1/2β 50 h, Cmax 46.6 ng ml -1, MRT 10.1 h, Vss 34.7 l, Ae 144 mg, CLnorm 88.9 ml min-1.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `triptorelin acetate`, measured `triptorelin`.

## Citation
Müller FO et al., Pharmacokinetics of triptorelin after i…, British journal of clinical… (1997)
  ·  DOI: [10.1046/j.1365-2125.1997.t01-1-00592.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00592.x)

<div class="pk-model-meta" hidden drug="triptorelin" model-id="Triptorelin_Mller1997_group_iv" status="needs_review" stale="false" population="healthy males and males with renal or hepatic insufficiency" measured-compound="triptorelin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t 1/2, z (h) | `Q57` · t1/2z | 220 | h | 792000.0 | [h] | not captured | llm (0.6) | tab_2:row4:col4, tab_2:row4:col5, tab_2:row4:col6, Müller_1997_table_2:row7:col6 | — | not captured |
| t1/2, x (h) | `Q60` · t1/2β | 50 | h | 180000.0 | [h] | not captured | llm_corrected (0.6) | tab_2:row6:col4, tab_2:row6:col5, tab_2:row6:col6 | — | not captured |
| Cmax (ng ml -1 ) | `Q32` · Cmax | 46.6 | ng ml -1 | not captured | [ng] / [ml] | not captured | exact (1.0) | Müller_1997_table_2:row0:col2 | — | not captured |
| MRT (h) | `Q53` · MRT | 10.1 | h | 36360.0 | [h] | not captured | exact (1.0) | Müller_1997_table_2:row18:col6 | — | not captured |
| Vss (l) | `Q65` · Vss | 34.7 | l | 0.0347 | [l] | not captured | exact (1.0) | Müller_1997_table_2:row21:col6 | — | not captured |
| Ae ur (0-4 h) (mg ) | `Q91` · Ae | 144 | mg | not captured | [mg] | not captured | llm_confirmed (0.6) | Müller_1997_table_4:row1:col4 | — | not captured |
| CL creat (0-24 h) ## (ml min-1 ) | `Q354` · CLnorm | 88.9 | ml min-1 | 1.4816666666666667e-06 | [ml] / [min] | not captured | llm_corrected (0.6) | Müller_1997_table_4:row18:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Variable | Q900 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('t 1/2, y (h)', value '88') — already have one for this compound
- dropped duplicate Q57 ('t1/2, y (h)', value '0.56') — already have one for this compound
- dropped duplicate Q57 ('t 1/2, x (h)', value '0.06') — already have one for this compound
- dropped duplicate Q91 ('Ae ur (0-8 h) (mg )', value '197') — already have one for this compound
- dropped duplicate Q91 ('Ae ur (0-12 h) (mg)', value '229') — already have one for this compound
- dropped duplicate Q91 ('Aeur(0-24 h) (mg)', value '280') — already have one for this compound
- dropped duplicate Q91 ('Ae ur (0-24 h) # (%)', value '62.1') — already have one for this compound
- dropped value-less row: "Estimate of 'test/reference' mean ratio from analysis of variance of log-transformed data"
- dropped value-less row: ": 90% Conventional confidence interval for the 'test/ reference' mean ratio analysis of variance of log-transformed data"
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=triptorelin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'group iv' subgroup of Müller_1997 (paper reports 4 populations: group i, group ii, group iii, group iv)

**Extraction notes:**
- companion parameter table 2 transcribed (24 record(s))
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Müller_1997_table_2:row0:col2'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Müller_1997_table_4:row18:col4'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Müller_1997_table_2:row18:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row4:col6', 'Müller_1997_table_2:row7:col6'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab_2:row6:col4', 'tab_2:row6:col5', 'tab_2:row6:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Müller_1997_table_2:row21:col6'] |
| C5_dimension_Q91 | pass | [mass] | not captured | not captured | not captured | ['Müller_1997_table_4:row1:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q65 | pass | volume within physiological range | 34.7 L | not captured | not captured | ['Müller_1997_table_2:row21:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_triptorelin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Müller_1997` / `Müller_1997::group_iv`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:08 UTC</sub>
