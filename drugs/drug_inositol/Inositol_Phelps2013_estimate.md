<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;inositol&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/&quot;},{&quot;label&quot;:&quot;Phelps_2013 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Inositol_Phelps2016_reference&quot;,&quot;label&quot;:&quot;Phelps_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/Inositol_Phelps2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# inositol — `Inositol_Phelps2013_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6), gpt-oss:120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V, CL, kel and t1/2z have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V, CL, kel and t1/2z), so that value has no SI equivalent. Extracted — inositol: V 0.511 volume, CL 0.0679 clearance, kel 0.133 elimination rate; Cl/V, t1/2z 5.22 half-life; 0.693/k, E 39.2 endogenous concentration; R/Cl.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has inositol, the second reading myo-inositol; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:38:22.679987+00:00) predates the upstream re-run (2026-10-07 16:34:55.020089+00:00). Current validate status: `needs_review`.

## Citation
Phelps DL et al., Pharmacokinetics and safety of a single…, Pediatric research (2013)
  ·  DOI: [10.1038/pr.2013.162](https://doi.org/10.1038/pr.2013.162)

<div class="pk-model-meta" hidden drug="inositol" model-id="Inositol_Phelps2013_estimate" status="needs_review" stale="true" population="preterm infants" measured-compound="inositol" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V (volume) | `Q61` · V | 0.5115 | L/kg | 0.035805000000000003 | L | not captured | exact (1.0) | Phelps_2013_table_4:row1:col2 | — | not captured |
| Cl (clearance) | `Q22` · CL | 0.0679 | L/kg/h | 1.3202777777777777e-06 | L/h | not captured | exact (1.0) | Phelps_2013_table_4:row2:col2 | — | not captured |
| R (endogenous infusion rate) | `Q367` · Vm/F | 2.666 | endogenous infusion rate | not captured | [endogenousinfusionrate] | not captured | llm (0.6) | Phelps_2013_table_4:row3:col2 | — | not captured |
| k (elimination rate; Cl/V) | `Q47` · kel | 0.133 | 1/h | 3.694444444444445e-05 | 1/h | not captured | exact (1.0) | Phelps_2013_table_4:row6:col2 | — | not captured |
| t1/2 (half-life; 0.693/k) | `Q57` · t1/2z | 5.22 | h | 18792.0 | h | not captured | exact (1.0) | Phelps_2013_table_4:row7:col2 | — | not captured |
| E (endogenous concentration; R/Cl) | `Q38` · E | 39.25 | endogenous concentration; R/Cl | not captured | [endogenousconcentration] | not captured | exact (1.0) | Phelps_2013_table_4:row8:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'volume' (V)
- unit_dimension_unknown: 'clearance' (CL)
- unit_dimension_unknown: 'endogenous infusion rate' (Vm/F)
- unit_dimension_unknown: 'elimination rate; Cl/V' (kel)
- unit_dimension_unknown: 'half-life; 0.693/k' (t1/2z)
- unit_dimension_unknown: 'endogenous concentration; R/Cl' (E)
- implicit units: 'V (volume)' → L/kg (from the paper text: "The paper text states: 'The central volume of distribution was 0.5115 l/kg'.")
- implicit units: 'Cl (clearance)' → L/kg/h (from the paper text: "The paper text states: 'the clearance 0.0679 l/kg/h'.")
- implicit units: 'R (endogenous infusion rate)' — the LLM proposed 'mg/kg/h', whose dimension does not fit Q367; left unset
- implicit units: 'k (elimination rate; Cl/V)' → 1/h (from the popPK convention: 'First-order elimination rate constants are conventionally expressed in reciprocal time units (1/h). This is also mathema')
- implicit units: 't1/2 (half-life; 0.693/k)' → h (from the paper text: "The paper text states: 'the half life 5.22 h'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=inositol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Phelps_2013 (paper reports 2 populations: covariate estimate(standard error), estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T7:row2:col6 = '2708.2 (NA)'
- companion parameter table 4 transcribed (15 record(s))
- LLM selected parameter table(s) 4, 7

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (6/10 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[r]` | 2.666 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | inositol | myo-inositol | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | inositol | myo-inositol | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | inositol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | inositol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 5.22 | 5.222 | 1.0004 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Phelps_2013_table_4:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Phelps_2013_table_4:row6:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Phelps_2013_table_4:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Phelps_2013_table_4:row1:col2'] |
| C5_unit_missing_Q367 | fail | [length] ** 3 | endogenous infusion rate | not captured | not captured | ['Phelps_2013_table_4:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.75 L/h | not captured | not captured | ['Phelps_2013_table_4:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 35.8 L | not captured | not captured | ['Phelps_2013_table_4:row1:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_inositol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Phelps_2013` / `Phelps_2013::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_inositol/Inositol_Phelps2013_estimate/Inositol_Phelps2013_estimate_modelica.zip" download>Inositol_Phelps2013_estimate_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2013_estimate/Inositol_Phelps2013_estimate_fmi.zip" download>Inositol_Phelps2013_estimate_fmi.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2013_estimate/Inositol_Phelps2013_estimate_matlab.zip" download>Inositol_Phelps2013_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2013_estimate/Inositol_Phelps2013_estimate_matlab_simbio.zip" download>Inositol_Phelps2013_estimate_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2013_estimate/Inositol_Phelps2013_estimate_sbml.zip" download>Inositol_Phelps2013_estimate_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2013_estimate/Inositol_Phelps2013_estimate_cellml.zip" download>Inositol_Phelps2013_estimate_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:34 UTC</sub>
