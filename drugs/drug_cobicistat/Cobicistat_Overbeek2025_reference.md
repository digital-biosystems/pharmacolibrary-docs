<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cobicistat&quot;,&quot;href&quot;:&quot;drugs/drug_cobicistat/&quot;},{&quot;label&quot;:&quot;Overbeek_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cobicistat_Barcel2016_reference&quot;,&quot;label&quot;:&quot;Barcel\u00f3_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobicistat/Cobicistat_Barcel2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cobicistat — `Cobicistat_Overbeek2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; cLint has no unit.

<div class="pk-model-meta" hidden drug="cobicistat" model-id="Cobicistat_Overbeek2025_reference" status="needs_review" stale="false" population="healthy volunteers and patients with rheumatoid arthritis, cancer, or HIV infection" measured-compound="cobicistat" parameterization="mechanistic" topology="1C"></div>

## Citation
Overbeek JK, van Erp NP, Burger DM, den Broeder AA, Koolen SLW, Huitema ADR et al. Population Pharmacokinetics of Cobicistat and its Effect on the Pharmacokinetics of the Anticancer Drug Olaparib. Clinical pharmacokinetics 64(3):425–435 (2025).
  ·  DOI: [10.1007/s40262-025-01480-w](https://doi.org/10.1007/s40262-025-01480-w)

## Population and dosing

**Population:** healthy volunteers and patients with rheumatoid arthritis, cancer, or HIV infection · condition mixed (healthy, rheumatoid arthritis, cancer, HIV) · age group adult · n = 66.

**Dosing:** 100, 150, 300 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc (L) | V | 8.7 | L |
| CLint (L.h−1.Lliver−1) | CLint | 6.7 | L.h−1.Lliver−1 |
| F1cobicistat | Fab | 6 |  |
| darunavir clearance (9) | CL | 10.9 | L/h |
| absorption rate constant | kabs | 0.306 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; cLint has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Abdalla_2024, Courlet_2021) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CLint), so that value has no SI equivalent. Extracted — cobicistat: V 8.7 L, CLint 6.7 L.h−1.Lliver−1, Fab 6, CL 10.9 L/h, kabs 0.306 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cobicistat, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q61` · V | 8.7 | L | 0.0087 | m3 | l | exact (1) | Tab2:row2:col1, Tab2:row2:col2, Overbeek_2025_table_3:row1:col1, Overbeek_2025_table_3:row1:col2 |
| CLint (L.h−1.Lliver−1) | `Q3` · CLint | 6.7 | L.h−1.Lliver−1 |  |  | 1/(h·l·iver) | exact (1) | Tab2:row3:col1, Tab2:row3:col2 |
| F1cobicistat | `Q40` · Fab | 6 |  |  |  |  | llm (0.6) | Overbeek_2025_table_3:row3:col1, Overbeek_2025_table_3:row3:col2 |
| darunavir clearance (9) | `Q22` · CL | 10.9 | L/h | 3.028e-06 | m3/s | L/h | review_gapfill (0.7) | Abdalla_2024:review |
| absorption rate constant | `Q49` · kabs | 0.306 | h−1 | 8.5e-05 | 1/s | 1/h | review_gapfill (0.7) | Courlet_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'Population parameters' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: 'L.h−1.Lliver−1' (CLint)
- dropped duplicate Q3 ('CLint-olaparib', value '16.3') — already have one for this compound
- routed 'Between-subject variability' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q63 ('Vc', value '16.6') — already have one for this compound
- dropped duplicate Q3 ('CLint', value '12.3') — already have one for this compound
- routed 'Additive (mg/L)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q3 ('Clint (L.h−1.Lliver−1)', value '14.4') — already have one for this compound
- dropped duplicate Q3 ('CLint-cobicistat', value '6.5') — already have one for this compound
- dropped duplicate Q3 ('CLint-without cobicistat', value '17.4') — already have one for this compound
- dropped duplicate Q3 ('CLint-with cobicistat', value '13.9') — already have one for this compound
- dropped value-less row: 'ktr'
- dropped value-less row: 'Lliver'
- implicit units: 'CLint (L.h−1.Lliver−1)' — the LLM proposed 'L.h−1.Lliver−1', whose dimension does not fit Q3; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cobicistat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (L)' is the general volume)
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Abdalla_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Courlet_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row1:col1 = 'ktr (h−1)'
- unparsed cell Overbeek_2025_table_3:row0:col1 = 'ktr (h−1)'
- companion parameter table 3 transcribed (28 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.306 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[darunavir clearance]` | 10.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1cobicistat].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | cobicistat | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cobicistat | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Abdalla_2024:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Courlet_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Overbeek_2025_table_3:row1:col1', 'Overbeek_2025_table_3:row1:col2'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | L.h−1.Lliver−1 | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.9 | ['Abdalla_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.9 L/h | ['Abdalla_2024:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.7 L | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Overbeek_2025_table_3:row1:col1', 'Overbeek_2025_table_3:row1:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcobicistat%5D%20Cobicistat_Overbeek2025_reference&body=Drug%3A%20cobicistat%0ARecord%3A%20Cobicistat_Overbeek2025_reference%0APaper%3A%20Overbeek_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cobicistat/Cobicistat_Overbeek2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:26 UTC</sub>
