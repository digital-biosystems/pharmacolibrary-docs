<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;emicizumab&quot;,&quot;href&quot;:&quot;drugs/drug_emicizumab/&quot;},{&quot;label&quot;:&quot;Retout_2020 \u00b7 6_mg_kg_q4w&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emicizumab_Retout2020_estimate&quot;,&quot;label&quot;:&quot;Retout_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emicizumab/Emicizumab_Retout2020_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# emicizumab — `Emicizumab_Retout2020_6_mg_kg_q4w`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUCSS, CL/F and V/F have no unit.

<div class="pk-model-meta" hidden drug="emicizumab" model-id="Emicizumab_Retout2020_6_mg_kg_q4w" status="needs_review" stale="false" population="adult and pediatric persons with hemophilia A" measured-compound="emicizumab" parameterization="apparent" topology="1C"></div>

## Citation
Retout S, Schmitt C, Petry C, Mercier F, Frey N. Population Pharmacokinetic Analysis and Exploratory Exposure-Bleeding Rate Relationship of Emicizumab in Adult and Pediatric Persons with Hemophilia A. Clinical pharmacokinetics 59(12):1611–1625 (2020).
  ·  DOI: [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z)

## Population and dosing

**Population:** adult and pediatric persons with hemophilia A · condition hemophilia A · age group mixed · n = 389.

**Dosing:** 105, 210, 420 mg, sc, multiple, every 168 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 (day) | t1/2z | 26.8 | day |
| Cmax,SS (μg/mL) | Cmax | 66.8 | μg/mL |
| tmax,SS (day) | tmax | 4.99 | day |
| Ctrough,SS (μg/mL) | Ctrough | 38.3 | μg/mL |
| Cmax,SS/Ctrough,SS (–) | Cmax_ratio | 1.85 |  |
| AUCss,τ (μg × day/mL) | AUCSS | 1499 | μg × day/mL |
| Cav,SS (μg/mL) | Cavg | 53.5 | μg/mL |
| BPV on CL/F from 56.4 to 30.0% | CL/F | 56.4 | % |
| BPV on V/F from 60.7 to 28.1% | V/F | 60.7 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUCSS, CL/F and V/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax, Ctrough, AUCSS and Cavg), so that value has no SI equivalent. Extracted — emicizumab: t1/2z 26.8 day, Cmax 66.8 μg/mL, tmax 4.99 day, Ctrough 38.3 μg/mL, Cmax_ratio 1.85, AUCSS 1.5e+03 μg × day/mL, Cavg 53.5 μg/mL, CL/F 56.4 %, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has emicizumab, the second reading unknown; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 (day) | `Q57` · t1/2z | 26.8 | day | 2.316e+06 | s | d | exact (1) | Retout_2020_table_5:row1:col5 |
| Cmax,SS (μg/mL) | `Q32` · Cmax | 66.8 | μg/mL |  |  | µg/ml | llm_confirmed (0.6) | Retout_2020_table_5:row3:col5 |
| tmax,SS (day) | `Q56` · tmax | 4.99 | day | 4.311e+05 | s | d | llm_confirmed (0.6) | Retout_2020_table_5:row4:col5 |
| Ctrough,SS (μg/mL) | `Q37` · Ctrough | 38.3 | μg/mL |  |  | µg/ml | llm_confirmed (0.6) | Retout_2020_table_5:row5:col5 |
| Cmax,SS/Ctrough,SS (–) | `Q33` · Cmax_ratio | 1.85 |  |  |  |  | llm_corrected (0.6) | Retout_2020_table_5:row6:col5 |
| AUCss,τ (μg × day/mL) | `Q18` · AUCSS | 1499 | μg × day/mL |  |  | (d·µg)/ml | llm_confirmed (0.6) | Retout_2020_table_5:row7:col5 |
| Cav,SS (μg/mL) | `Q71` · Cavg | 53.5 | μg/mL |  |  | µg/ml | llm_confirmed (0.6) | Retout_2020_table_5:row8:col5 |
| BPV on CL/F from 56.4 to 30.0% | `Q27` · CL/F | 56.4 | % |  |  | % | boundary (0.8) | Retout_2020:results_prose |
| BPV on V/F from 60.7 to 28.1% | `Q76` · V/F | 60.7 | % |  |  | % | boundary (0.8) | Retout_2020:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('t1/2,abs (day)', value '1.61') — already have one for this compound
- unit_dimension_unknown: 'μg × day/mL' (AUCSS)
- salvaged Q27 ('BPV on CL/F from 56.4 to 30.0%'=56.4) from results prose — parameter table was unreadable
- salvaged Q76 ('BPV on V/F from 60.7 to 28.1%'=60.7) from results prose — parameter table was unreadable
- implicit units: 'AUCss,τ (μg × day/mL)' — the LLM proposed 'μg × day/mL', whose dimension does not fit Q18; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=emicizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: '6 mg/kg q4w' subgroup of Retout_2020 (paper reports 4 populations: 1.5 mg/kg qw, 3 mg/kg q2w, 6 mg/kg q4w, estimate)
- molar mass: none found for 'emicizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab4:row6:col3 = '8.6b'
- unparsed cell Tab4:row7:col3 = '8.9b'
- unparsed cell Tab4:row8:col3 = '14.7b'
- unparsed cell Tab4:row9:col3 = '31.8c'
- unparsed cell Tab4:row13:col2 = '1.57 × 10–2'
- unparsed cell Tab4:row13:col4 = '0.696 × 10–2 to 2.44 × 10–2'
- unparsed cell Tab4:row15:col2 = '− 0.215'
- unparsed cell Tab4:row15:col4 = '− 0.298 to − 0.132'
- unparsed cell Tab4:row16:col2 = '6.51 × 10–3'
- unparsed cell Tab4:row16:col4 = '4.43 × 10–3 to 8.59 × 10–3'
- unparsed cell Retout_2020_table_5:row1:col2 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row1:col4 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row1:col6 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row2:col2 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row2:col4 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row2:col6 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row3:col2 = '53.9 [30.9–82.4]'
- unparsed cell Retout_2020_table_5:row3:col4 = '57.0 [33.6–85.9]'
- unparsed cell Retout_2020_table_5:row3:col6 = '65.9 [40.4–97.7]'
- unparsed cell Retout_2020_table_5:row4:col2 = '2.50 [2.25–3.00]'
- unparsed cell Retout_2020_table_5:row4:col4 = '3.50 [3.00–5.25]'
- unparsed cell Retout_2020_table_5:row4:col6 = '4.50 [2.50–10.0]'
- unparsed cell Retout_2020_table_5:row5:col2 = '49.9 [28.4–78.7]'
- unparsed cell Retout_2020_table_5:row5:col4 = '45.6 [24.9–75.0]'
- unparsed cell Retout_2020_table_5:row5:col6 = '36.5 [17.7–64.7]'
- unparsed cell Retout_2020_table_5:row6:col2 = '1.07 [1.03–1.15]'
- unparsed cell Retout_2020_table_5:row6:col4 = '1.24 [1.12–1.49]'
- unparsed cell Retout_2020_table_5:row6:col6 = '1.74 [1.36–2.85]'
- unparsed cell Retout_2020_table_5:row7:col2 = '366 [211–568]'
- unparsed cell Retout_2020_table_5:row7:col4 = '733 [423–1135]'
- unparsed cell Retout_2020_table_5:row7:col6 = '1465 [845–2271]'
- unparsed cell Retout_2020_table_5:row8:col2 = '52.3 [30.2–81.1]'
- unparsed cell Retout_2020_table_5:row8:col4 = '52.3 [30.2–81.1]'
- unparsed cell Retout_2020_table_5:row8:col6 = '52.3 [30.2–81.1]'
- companion parameter table 5 transcribed (24 record(s), model stage 'final')
- LLM selected parameter table(s) 4, 5
- skipped illustrative/example figure caption(s) Fig2 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.091 (2/22 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[aucss,τ]` | 1499 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[aucss,τ]` |  | 1499 | only_one_extracted |
| `gpt-oss:120b` | `parameters[bpv on cl/f from 56.4 to 30.0%]` | 56.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[bpv on v/f from 60.7 to 28.1%]` | 60.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cav,ss]` | 53.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cav,ss]` |  | 53.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[classical cl/f exponent]` |  | 0.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax,ss/ctrough,ss]` | 1.85 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax,ss/ctrough,ss]` |  | 1.85 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax,ss]` | 66.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax,ss]` |  | 66.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ctrough,ss]` | 38.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ctrough,ss]` |  | 38.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2,abs]` |  | 1.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | 26.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` |  | 26.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax,ss]` | 4.99 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax,ss]` |  | 4.99 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | emicizumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | emicizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Retout_2020_table_5:row3:col5'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Retout_2020_table_5:row5:col5'] |
| C5_dimension_Q56 | pass | [time] |  | ['Retout_2020_table_5:row4:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['Retout_2020_table_5:row1:col5'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['Retout_2020_table_5:row8:col5'] |
| C5_unit_missing_Q18 | fail | [mass] * [time] / [length] ** 3 | μg × day/mL | ['Retout_2020_table_5:row7:col5'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | % | ['Retout_2020:results_prose'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 | % | ['Retout_2020:results_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bemicizumab%5D%20Emicizumab_Retout2020_6_mg_kg_q4w&body=Drug%3A%20emicizumab%0ARecord%3A%20Emicizumab_Retout2020_6_mg_kg_q4w%0APaper%3A%20Retout_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_emicizumab/Emicizumab_Retout2020_6_mg_kg_q4w%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-05 18:44 UTC</sub>
