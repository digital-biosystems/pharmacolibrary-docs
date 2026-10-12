<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;propranolol&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/&quot;},{&quot;label&quot;:&quot;Salehifar_2017 \u00b7 female&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propranolol_Takechi2018_reference&quot;,&quot;label&quot;:&quot;Takechi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/Propranolol_Takechi2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propranolol — `Propranolol_Salehifar2017_female`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778), gpt-oss:120b (partly confirmed, agreement 0.933). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — propranolol: Cmax 44.6 ng/ml, tmax 96 min, V 307 L, CL 125 L/h, kabs 0.56 hr -1, t1/2α 0.7 hr, t1/2β 17.4 hr, t1/2z 1.83 hr, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc 0-10: this record has 194.5, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-29 08:52:10.559791+00:00) predates the upstream re-run (2026-10-07 15:15:02.487440+00:00). Current validate status: `needs_review`.

## Citation
Salehifar E et al., Pharmacokinetic Parameters and Over-Res…, Advanced pharmaceutical bul… (2017)
  ·  DOI: [10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024)

<div class="pk-model-meta" hidden drug="propranolol" model-id="Propranolol_Salehifar2017_female" status="needs_review" stale="true" population="healthy Iranian adults" measured-compound="propranolol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cp max (ng/ml) | `Q32` · Cmax | 44.6 | ng/ml | not captured | [ng] / [ml] | not captured | llm (0.6) | T2:row3:col4, T2:row3:col5, T2:row3:col6 | — | not captured |
| T max (min) | `Q56` · tmax | 96 | min | 5760.0 | [min] | not captured | space_fold (0.95) | T2:row4:col4, T2:row4:col5, T2:row4:col6 | — | not captured |
| Vd (Lit) | `Q61` · V | 307.4 | L | 0.3074 | L | not captured | exact (1.0) | T2:row5:col4, T2:row5:col5, T2:row5:col6 | — | not captured |
| Cl (Lit/hr) | `Q22` · CL | 124.7 | L/h | 3.463888888888889e-05 | L/h | not captured | exact (1.0) | T2:row7:col4, T2:row7:col5, T2:row7:col6 | — | not captured |
| Ka (hr -1) | `Q49` · kabs | 0.56 | hr -1 | 0.00015555555555555556 | [1] / [h] | not captured | exact (1.0) | T2:row9:col4, T2:row9:col5, T2:row9:col6 | — | not captured |
| T½α (hr) | `Q59` · t1/2α | 0.70 | hr | 2520.0 | [h] | not captured | llm (0.6) | T2:row10:col4, T2:row10:col5, T2:row10:col6 | — | not captured |
| T½β (hr) | `Q60` · t1/2β | 17.4 | hr | 62639.99999999999 | [h] | not captured | llm (0.6) | T2:row11:col4, T2:row11:col5, T2:row11:col6 | — | not captured |
| T½ (hr) | `Q57` · t1/2z | 1.83 | hr | 6588.0 | [h] | not captured | llm (0.6) | T2:row12:col4, T2:row12:col5, T2:row12:col6 | — | not captured |
| AUC 0-2 (ng×hr/ml) | `Q88` · AUC | 43.8 | ng*h/mL | not captured | ng*h/mL | not captured | llm_confirmed (0.6) | T2:row13:col4, T2:row13:col5, T2:row13:col6 | — | not captured |
| AUC 0-10 (ng×hr/ml) | `Q19` · AUCt | 194.5 | ng*h/mL | not captured | ng*h/mL | not captured | llm_corrected (0.6) | T2:row14:col4, T2:row14:col5, T2:row14:col6 | — | not captured |
| AUC 0-∞ (ng×hr/ml) | `Q17` · AUC∞ | 194.8 | ng*h/mL | not captured | ng*h/mL | not captured | space_fold (0.95) | T2:row15:col4, T2:row15:col5, T2:row15:col6 | — | not captured |

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
- unit_dimension_unknown: 'N=10' (equation variable)
- dropped unlinked row (NIL): '\u200dDose (mg/kg)' — extend the ontology if this is a real PK parameter (source ['T2:row2:col4', 'T2:row2:col5', 'T2:row2:col6'])
- unit_dimension_unknown: 'Lit' (V)
- unit_dimension_unknown: 'Lit/Kg' (V)
- dropped duplicate Q61 ('Vd (Lit/Kg)', value '5.28') — already have one for this compound
- unit_dimension_unknown: 'Lit/hr' (CL)
- unit_dimension_unknown: 'Lit /Kg/hr' (CL)
- dropped duplicate Q22 ('Cl (Lit /Kg/hr)', value '2.17') — already have one for this compound
- unit_dimension_unknown: 'ng×hr/ml' (AUC)
- unit_dimension_unknown: 'ng×hr/ml' (AUCt)
- unit_dimension_unknown: 'ng×hr/ml' (AUC∞)
- dropped unlinked row (NIL): 'pH at time zero urine' — extend the ontology if this is a real PK parameter (source ['T2:row16:col4', 'T2:row16:col5', 'T2:row16:col6'])
- dropped unlinked row (NIL): 'pH at time 4hr urine' — extend the ontology if this is a real PK parameter (source ['T2:row17:col4', 'T2:row17:col5', 'T2:row17:col6'])
- implicit units: 'Vd (Lit)' → L (from the paper text: "Table 2 row label explicitly states 'Vd (Lit)'.")
- implicit units: 'Cl (Lit/hr)' → L/h (from the paper text: "Table 2 row label explicitly states 'Cl (Lit/hr)'.")
- implicit units: 'AUC 0-2 (ng×hr/ml)' → ng*h/mL (from the paper text: "Table 2 row label explicitly states 'AUC 0-2 (ng×hr/ml)'.")
- implicit units: 'AUC 0-10 (ng×hr/ml)' → ng*h/mL (from the paper text: "Table 2 row label explicitly states 'AUC 0-10 (ng×hr/ml)'.")
- implicit units: 'AUC 0-∞ (ng×hr/ml)' → ng*h/mL (from the paper text: "Table 2 row label explicitly states 'AUC 0-∞ (ng×hr/ml)'.")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (Vd (Lit)); Q22 (Cl (Lit/hr))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propranolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'female (n=10)' subgroup of Salehifar_2017 (paper reports 4 populations: female (n=10), male (n=10), mean of differences, this study)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Salehifar_2017_table_4:row0:col4 = '0.59 to 1.44'
- unparsed cell Salehifar_2017_table_4:row0:col5 = '&lt;0.001'
- unparsed cell Salehifar_2017_table_4:row1:col4 = '0.24 to 1.87\u200f-'
- unparsed cell Salehifar_2017_table_4:row2:col4 = '-1.79 to -1.05'
- unparsed cell Salehifar_2017_table_4:row2:col5 = '&lt;0.001'
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (14/18 fields) | 4 |
| `gpt-oss:120b` | partly confirmed | 0.933 (14/15 fields) | 1 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc 0-10]` | 194.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc 0-2].parameter_id` | Q88 | Q19 | mismatch |
| `gpt-oss-120b` | `parameters[variable]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[‍dose]` | not captured | 0.68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[variable]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 32.5 | 1.709 | 0.0526 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['T2:row15:col4', 'T2:row15:col5', 'T2:row15:col6'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['T2:row14:col4', 'T2:row14:col5', 'T2:row14:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col4', 'T2:row3:col5', 'T2:row3:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row9:col4', 'T2:row9:col5', 'T2:row9:col6'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T2:row12:col4', 'T2:row12:col5', 'T2:row12:col6'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['T2:row10:col4', 'T2:row10:col5', 'T2:row10:col6'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['T2:row11:col4', 'T2:row11:col5', 'T2:row11:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row5:col4', 'T2:row5:col5', 'T2:row5:col6'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['T2:row13:col4', 'T2:row13:col5', 'T2:row13:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 124.7 | not captured | not captured | ['T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 125 L/h | not captured | not captured | ['T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 307 L | not captured | not captured | ['T2:row5:col4', 'T2:row5:col5', 'T2:row5:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_propranolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Salehifar_2017` / `Salehifar_2017::female`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:15 UTC</sub>
