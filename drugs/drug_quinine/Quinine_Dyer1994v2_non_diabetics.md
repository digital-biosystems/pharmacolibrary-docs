<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;quinine&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/&quot;},{&quot;label&quot;:&quot;Dyer_1994_2 \u00b7 non_diabetics&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinine_Hendriksen2013_reference&quot;,&quot;label&quot;:&quot;Hendriksen_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Hendriksen2013_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Kloprogge2014_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Kloprogge2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Phillips1986_reference&quot;,&quot;label&quot;:&quot;Phillips_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Phillips1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinine — `Quinine_Dyer1994v2_non_diabetics`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; λ1 has no unit.

<div class="pk-model-meta" hidden drug="quinine" model-id="Quinine_Dyer1994v2_non_diabetics" status="needs_review" stale="false" population="elderly diabetic and non-diabetic adults" measured-compound="quinine" parameterization="apparent" topology="1C"></div>

## Citation
Dyer JR, Davis TM, Giele C, Annus T, Garcia-Webb P, Robson J. The pharmacokinetics and pharmacodynamics of quinine in the diabetic and non-diabetic elderly. British journal of clinical pharmacology 38(3):205–212 (1994).
  ·  DOI: [10.1111/j.1365-2125.1994.tb04343.x](https://doi.org/10.1111/j.1365-2125.1994.tb04343.x)

## Population and dosing

**Population:** elderly diabetic and non-diabetic adults · condition non-insulin-dependent diabetes and healthy elderly controls · age group elderly · n = 22.

**Dosing:** 600 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed quinine sulphate, measured quinine.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Volume of distribution (V/F) 1 kg-1 | Vnorm/F | 1.70 | L/kg |
| Absorption lag-time (t_lag) h | tlag | 1.0 | h |
| Absorption half-time (t_1/2,abs) h | t1/2ka | 0.6 | h |
| Maximum concentration (C_max) mg 1-1 | Cmax | 3.4 | mg/L |
| Elimination half-time (t_1/2,l) h | λ1 | 19.9 |  |
| Systemic clearance (CL/F) ml kg-1 min-1 | CL/F | 1.07 | mL/kg/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; λ1 has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax), so that value has no SI equivalent. Extracted — quinine: Vnorm/F 1.7 L/kg, tlag 1 h, t1/2ka 0.6 h, Cmax 3.4 mg/L, λ1 19.9, CL/F 1.07 mL/kg/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[elimination half-time (t_1/2,l) h].parameter_id`: this record has Q67, the second reading Q57; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Volume of distribution (V/F) 1 kg-1 | `Q353` · Vnorm/F | 1.70 | L/kg | 0.119 | m3 | L | llm_corrected (0.6) | Dyer_1994_2_table_p3_1:row0:col1 |
| Absorption lag-time (t_lag) h | `Q83` · tlag | 1.0 | h | 3600 | s | h | llm_confirmed (0.6) | Dyer_1994_2_table_p3_1:row1:col1 |
| Absorption half-time (t_1/2,abs) h | `Q95` · t1/2ka | 0.6 | h | 2160 | s | h | llm_corrected (0.6) | Dyer_1994_2_table_p3_1:row2:col1 |
| Maximum concentration (C_max) mg 1-1 | `Q32` · Cmax | 3.4 | mg/L |  |  | mg/L | llm_confirmed (0.6) | Dyer_1994_2_table_p3_1:row3:col1 |
| Elimination half-time (t_1/2,l) h | `Q67` · λ1 | 19.9 |  |  |  |  | llm (0.6) | Dyer_1994_2_table_p3_1:row4:col1 |
| Systemic clearance (CL/F) ml kg-1 min-1 | `Q27` · CL/F | 1.07 | mL/kg/min | 1.248e-06 | m3/s | L/h | llm_corrected (0.6) | Dyer_1994_2_table_p3_1:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number 1.07 (source ['tab_0:footnote', 'tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'fu' from footnote/prose loose number 19 (source ['tab_0:footnote', 'tab_0:footnote']); the table cell was unparseable — needs review
- implicit units: 'Volume of distribution (V/F) 1 kg-1' → L/kg (from the paper text: 'Table 2 lists volume of distribution normalized per kg body weight (V/F 1 kg-1), i.e. L/kg.')
- implicit units: 'Absorption lag-time (t_lag) h' → h (from the paper text: "Table 2 shows absorption lag-time in h (t_lag h = 1.0); abstract also reports 'mean absorption lag-time of approximately")
- implicit units: 'Absorption half-time (t_1/2,abs) h' → h (from the paper text: 'Table 2 lists absorption half-time in h (t1/2,abs h = 0.6).')
- implicit units: 'Maximum concentration (C_max) mg 1-1' → mg/L (from the paper text: 'Table 2 gives Cmax as mg 1-1 (mg/L); assay concentrations reported in mg l-1.')
- implicit units: 'Elimination half-time (t_1/2,l) h' — the LLM proposed 'h', whose dimension does not fit Q67; left unset
- implicit units: 'Systemic clearance (CL/F) ml kg-1 min-1' → mL/kg/min (from the paper text: 'Table 2 states Systemic clearance (CL/F) ml kg-1 min-1 = 1.07.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=quinine
- population split: 'non-diabetics' subgroup of Dyer_1994_2 (paper reports 2 populations: diabetics, non-diabetics)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Dyer_1994_2
- unparsed cell Dyer_1994_2_table_p3_1:row0:col3 = '0.56, -0.56'
- unparsed cell Dyer_1994_2_table_p3_1:row1:col3 = '0.3, -0.7'
- unparsed cell Dyer_1994_2_table_p3_1:row2:col3 = '0.3, -0.5'
- unparsed cell Dyer_1994_2_table_p3_1:row3:col3 = '0.5, -1.1'
- unparsed cell Dyer_1994_2_table_p3_1:row4:col3 = '6.4, -6.6'
- unparsed cell Dyer_1994_2_table_p3_1:row5:col2 = '1.14 ±-0.58'
- unparsed cell Dyer_1994_2_table_p3_1:row5:col3 = '0.41, -0.55'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[elimination half-time (t_1/2,l) h].parameter_id` | Q67 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[volume of distribution (v/f) 1 kg-1].parameter_id` | Q353 | Q76 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Dyer_1994_2_table_p3_1:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Dyer_1994_2_table_p3_1:row3:col1'] |
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['Dyer_1994_2_table_p3_1:row0:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Dyer_1994_2_table_p3_1:row1:col1'] |
| C5_dimension_Q95 | pass | [time] |  | ['Dyer_1994_2_table_p3_1:row2:col1'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['Dyer_1994_2_table_p3_1:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.49 L/h | ['Dyer_1994_2_table_p3_1:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinine%5D%20Quinine_Dyer1994v2_non_diabetics&body=Drug%3A%20quinine%0ARecord%3A%20Quinine_Dyer1994v2_non_diabetics%0APaper%3A%20Dyer_1994_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quinine/Quinine_Dyer1994v2_non_diabetics%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:36 UTC</sub>
