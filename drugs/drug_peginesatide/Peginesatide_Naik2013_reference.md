<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;peginesatide&quot;,&quot;href&quot;:&quot;drugs/drug_peginesatide/&quot;},{&quot;label&quot;:&quot;Naik_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# peginesatide — `Peginesatide_Naik2013_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.871). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance; vmax has no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Vmax, Km, Fab and theta_kabs_category), so that value has no SI equivalent. Extracted — peginesatide: Vmax 45.3 in ng/mL/hr, Km 1.88e+03 ng/mL, V1 35.6 mL/kg, kabs 0.00865 1/hr, Fab 0.498 F1, Q 5.23 mL/kg/hr, V2 7.44 mL/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has none, the second reading peginesatide → hemoglobin (pharmacodynamic_stimulation); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Naik H et al., A Population Pharmacokinetic and Pharma…, PloS one (2013)
  ·  DOI: [10.1371/journal.pone.0066422](https://doi.org/10.1371/journal.pone.0066422)

<div class="pk-model-meta" hidden drug="peginesatide" model-id="Peginesatide_Naik2013_reference" status="needs_review" stale="false" population="patients with chronic kidney disease on dialysis" measured-compound="peginesatide" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Maximum rate of elimination (Vmax), in ng/mL/hr | `Q66` · Vmax | 45.3 | in ng/mL/hr | not captured | [inng] / [[h] · [ml]] | 10.0 | llm_confirmed (0.6) | pone-0066422-t006:row1:col1 | — | not captured |
| Concentration needed to reach 50% of Vmax (KM),in ng/mL | `Q1` · Km | 1880 | ng/mL | not captured | ng/mL | 14.6 | llm_corrected (0.6) | pone-0066422-t006:row2:col1 | — | 0.0589 (29.0% RSE) |
| Central volume of distribution (V2), in mL/kg | `Q63` · V1 | 35.6 | mL/kg | 0.002492 | L | 2.7 | boundary_compartment (0.9) | pone-0066422-t006:row3:col1 | — | not captured |
| Absorption rate constant (Ka), in 1/hr | `Q49` · kabs | 0.00865 | 1/hr | 2.4027777777777777e-06 | 1/h | 15.6 | llm_confirmed (0.6) | pone-0066422-t006:row4:col1 | — | 0.197 (32.0% RSE) |
| Subcutaneous bioavailability (F1) | `Q40` · Fab | 0.498 | F1 | not captured | not captured | 4.4 | llm_confirmed (0.6) | pone-0066422-t006:row5:col1 | — | not captured |
| Inter–compartmental clearance (Q), in mL/kg/hr | `Q30` · Q | 5.23 | mL/kg/hr | 1.0169444444444444e-07 | L/h | not captured | llm_confirmed (0.6) | pone-0066422-t006:row6:col1 | — | not captured |
| Peripheral volume of distribution (V3), in mL/kg | `Q64` · V2 | 7.44 | mL/kg | 0.0005208 | L | 10.3 | boundary_compartment (0.9) | pone-0066422-t006:row7:col1 | — | 0.101 (8.1% RSE) |
| theta_q319_bmi_power | `Q900` · theta_q319_bmi_power | -0.491 | not captured | not captured | not captured | 8.7 | not captured (not captured) | pone-0066422-t006:row8:col1 | — | not captured |
| theta_q335_age | `Q900` · theta_q335_age | -0.125 | not captured | not captured | not captured | 19.0 | not captured (not captured) | pone-0066422-t006:row9:col1 | — | not captured |
| theta_km_weight_power | `Q900` · theta_km_weight_power | -0.194 | not captured | not captured | not captured | 25.5 | not captured (not captured) | pone-0066422-t006:row10:col1 | — | not captured |
| theta_q335_category | `Q900` · theta_q335_category | 0.477 | not captured | not captured | not captured | 22.4 | not captured (not captured) | pone-0066422-t006:row11:col1 | — | not captured |
| theta_q335_creatinine | `Q900` · theta_q335_creatinine | 7.84E-04 | not captured | not captured | not captured | 69.1 | not captured (not captured) | pone-0066422-t006:row12:col1 | — | not captured |
| theta_kabs_category | `Q900` · theta_kabs_category | 0.00811 | in 1/hr | not captured | not captured | 20.3 | not captured (not captured) | pone-0066422-t006:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'in ng/mL/hr' (Vmax)
- unit_dimension_unknown: 'in ng/mL' (Km)
- unit_dimension_unknown: 'in mL/kg' (V1)
- unit_dimension_unknown: 'in 1/hr' (kabs)
- unit_dimension_unknown: 'in mL/kg/hr' (Q)
- unit_dimension_unknown: 'in mL/kg' (V2)
- routed 'Cov between V2 and Ka' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Maximum rate of elimination (Vmax), in ng/mL/hr' — the LLM proposed 'ng/mL/hr', whose dimension does not fit Q66; left unset
- implicit units: 'Concentration needed to reach 50% of Vmax (KM),in ng/mL' → ng/mL (from the paper text: "Parameter list explicitly states: 'Concentration needed to reach 50% of Vmax (KM),in ng/mL = 1880'")
- implicit units: 'Central volume of distribution (V2), in mL/kg' → mL/kg (from the paper text: "Parameter list explicitly states: 'Central volume of distribution (V2), in mL/kg = 35.6'; Also supported by text: 'The e")
- implicit units: 'Absorption rate constant (Ka), in 1/hr' → 1/hr (from the paper text: "Parameter list explicitly states: 'Absorption rate constant (Ka), in 1/hr = 0.00865'")
- implicit units: 'Inter–compartmental clearance (Q), in mL/kg/hr' → mL/kg/hr (from the paper text: "Parameter list explicitly states: 'Inter–compartmental clearance (Q), in mL/kg/hr = 5.23'")
- implicit units: 'Peripheral volume of distribution (V3), in mL/kg' → mL/kg (from the paper text: "Parameter list explicitly states: 'Peripheral volume of distribution (V3), in mL/kg = 7.44'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=peginesatide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'peginesatide' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.871 (27/31 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['peginesatide', 'hemoglobin', 'pharmacodynamic_stimulation']] | mismatch |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution (v3), in ml/kg].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss:120b` | `parameters[theta_q319_bmi_power]` | -0.485 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v2_bmi_power]` | not captured | -0.485 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['pone-0066422-t006:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pone-0066422-t006:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pone-0066422-t006:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pone-0066422-t006:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pone-0066422-t006:row7:col1'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | in ng/mL/hr | not captured | not captured | ['pone-0066422-t006:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.49 L | not captured | not captured | ['pone-0066422-t006:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.521 L | not captured | not captured | ['pone-0066422-t006:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_peginesatide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Naik_2013` / `Naik_2013::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:37 UTC</sub>
