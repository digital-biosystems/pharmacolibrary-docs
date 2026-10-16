<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;rezafungin&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin/&quot;},{&quot;label&quot;:&quot;Rubino_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rezafungin — `Rezafungin_Rubino2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.348). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Cmax and Cmin have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax and Cmin), so that value has no SI equivalent. Extracted — rezafungin: CL 3.74 liter/h, V1 8.87 liter, V2 4.42 liter, Q 8.11 liter/h, V3 11.8 liter, V3/F 8.38 liter, Cmax 16.4 n = 68, Cmin 2.07 n = 68, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Rubino CM et al., Population Pharmacokinetics of Rezafung…, Antimicrobial agents and ch… (2021)
  ·  DOI: [10.1128/AAC.00842-21](https://doi.org/10.1128/AAC.00842-21)

<div class="pk-model-meta" hidden drug="rezafungin" model-id="Rezafungin_Rubino2021_reference" status="needs_review" stale="false" population="healthy volunteers and patients with candidemia and/or invasive candidiasis" measured-compound="rezafungin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted, plus 4 covariate effects.

**Parameterization:** V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, liter/h | `Q22` · CL | 3.74 | liter/h | 1.038888888888889e-06 | [l] / [h] | not captured | exact (1.0) | T2:row2:col1, T2:row2:col2, Rubino_2021_table_3:row6:col1 | — | 0.0562 (23.7% RSE) |
| Vc, liter | `Q63` · V1 | 8.87 | liter | 0.00887 | [l] | not captured | exact (1.0) | T2:row7:col1, T2:row7:col2 | — | 0.148 (38.5% RSE) |
| Vp1, liter | `Q64` · V2 | 4.42 | liter | 0.00442 | [l] | not captured | exact (1.0) | T2:row11:col1, T2:row11:col2 | — | 0.0107 (21.7% RSE) |
| theta_v2_albumin_power | `Q900` · theta_v2_albumin_power | 10.6 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row12:col1, T2:row12:col2 | — | not captured |
| CLd2, liter/h | `Q30` · Q | 8.11 | liter/h | 2.2527777777777774e-06 | [l] / [h] | not captured | special_case (0.95) | T2:row14:col1, T2:row14:col2 | — | not captured |
| Vp2, liter | `Q77` · V3 | 11.8 | liter | 0.011800000000000001 | [l] | not captured | exact (1.0) | T2:row15:col1, T2:row15:col2 | — | not captured |
| theta_v3_weight_power | `Q900` · theta_v3_weight_power | 18.4 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row16:col1, T2:row16:col2 | — | not captured |
| Vp3, liter | `Q78` · V3/F | 8.38 | liter | 0.00838 | [l] | not captured | llm (0.6) | T2:row20:col1, T2:row20:col2 | — | not captured |
| Cmax, mg/literb | `Q32` · Cmax | 16.4 | n = 68 | not captured | [n=68] | not captured | llm_confirmed (0.6) | Rubino_2021_table_3:row2:col1 | — | not captured |
| Cmin, mg/literb | `Q36` · Cmin | 2.07 | n = 68 | not captured | [n=68] | not captured | llm_confirmed (0.6) | Rubino_2021_table_3:row4:col1 | — | not captured |
| Vss, liter | `Q65` · Vss | 61.0 | liter | 0.061 | [l] | not captured | exact (1.0) | Rubino_2021_table_3:row8:col1 | — | not captured |
| theta_cl_albumin_power | `Q900` · theta_cl_albumin_power | 9.34 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row3:col1, T2:row3:col2 | — | not captured |
| theta_v2_weight_power | `Q900` · theta_v2_weight_power | 15.6 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row13:col1, T2:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL, liter/h' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Vc, liter' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Vp1, liter' routed out of structural estimates ('Interindividual variability (%CV)')
- dropped PD-category row 'Proportional change in females' → Q345 (proportional_odds, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row4:col1', 'T2:row4:col2'])
- dropped PD-category row 'Vc-BSA slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row8:col1', 'T2:row8:col2'])
- dropped unlinked row (NIL): 'Proportional change in infected patients' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1', 'T2:row9:col2', 'T2:row17:col1', 'T2:row17:col2'])
- dropped duplicate Q22 ('CLd1, liter/h', value '1.09') — already have one for this compound
- covariate level 'Vp1-albumin power' → Q900:theta_v2_albumin_power = 10.6 (power on Q64)
- covariate level 'Vp2-BSA power' → Q900:theta_v3_weight_power = 18.4 (power on Q77)
- dropped duplicate Q22 ('CLd3, liter/h', value '7.62') — already have one for this compound
- dropped unlinked row (NIL): 'AUC0–168, mg·h/literb' — extend the ontology if this is a real PK parameter (source ['Rubino_2021_table_3:row0:col1'])
- unit_dimension_unknown: 'n = 68' (Cmax)
- unit_dimension_unknown: 'n = 68' (Cmin)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rezafungin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- companion parameter table 3 transcribed (5 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.348 (8/23 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[auc0-168, mg h/literb]` | not captured | 709 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].value` | 3.74 | 0.254 | mismatch |
| `gpt-oss-120b` | `parameters[cld2].value` | 8.11 | 0.541 | mismatch |
| `gpt-oss-120b` | `parameters[proportional change in females]` | not captured | -0.133 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin_power].value` | 9.34 | -0.844 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power]` | not captured | 2.47 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_albumin_power].value` | 10.6 | -0.829 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v2_weight_power].value` | 15.6 | 1.14 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v3_weight_power]` | 18.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].value` | 8.87 | 11.1 | mismatch |
| `gpt-oss-120b` | `parameters[vp1].value` | 4.42 | 14.6 | mismatch |
| `gpt-oss-120b` | `parameters[vp2].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[vp2].value` | 11.8 | 6.69 | mismatch |
| `gpt-oss-120b` | `parameters[vp3]` | 8.38 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'Rubino_2021_table_3:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row14:col1', 'T2:row14:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Rubino_2021_table_3:row8:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row15:col1', 'T2:row15:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row20:col1', 'T2:row20:col2'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | n = 68 | not captured | not captured | ['Rubino_2021_table_3:row2:col1'] |
| C5_unit_missing_Q36 | fail | [mass] / [length] ** 3 | n = 68 | not captured | not captured | ['Rubino_2021_table_3:row4:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.74 L/h | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'Rubino_2021_table_3:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.87 L | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.42 L | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 61 L | not captured | not captured | ['Rubino_2021_table_3:row8:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rezafungin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rubino_2021` / `Rubino_2021::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:53 UTC</sub>
