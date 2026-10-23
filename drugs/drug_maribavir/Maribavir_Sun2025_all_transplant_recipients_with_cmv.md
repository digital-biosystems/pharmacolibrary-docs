<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;maribavir&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/&quot;},{&quot;label&quot;:&quot;Sun_2025 \u00b7 all_transplant_recipients_with_cmv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Maribavir_Song2024_reference&quot;,&quot;label&quot;:&quot;Song_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Song2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Sun2025_estimates&quot;,&quot;label&quot;:&quot;Sun_2025_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Sun2025_estimates.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Fromage2025_reference&quot;,&quot;label&quot;:&quot;Fromage_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Fromage2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Song2020_reference&quot;,&quot;label&quot;:&quot;Song_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Song2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# maribavir — `Maribavir_Sun2025_all_transplant_recipients_with_cmv`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="maribavir" model-id="Maribavir_Sun2025_all_transplant_recipients_with_cmv" status="needs_review" stale="false" population="transplant recipients with CMV infection and healthy volunteers" measured-compound="maribavir" parameterization="mechanistic" topology="1C"></div>

## Citation
Sun K, Jomphe C, Gosselin NH, Pheng L, Durairaj C, Hang Y et al. Population Pharmacokinetics and Exposure-Response Relationships of Maribavir in Transplant Recipients With First Episode or Refractory Cytomegalovirus. CPT: pharmacometrics & systems pharmacology 14(8):1346–1358 (2025).
  ·  DOI: [10.1002/psp4.70054](https://doi.org/10.1002/psp4.70054)

## Population and dosing

**Population:** transplant recipients with CMV infection and healthy volunteers · condition CMV infection after transplant · age group adult.

**Dosing:** 400 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUCss (μg·h/mL) | AUCSS | 724 | μg·h/mL |
| C max,ss (μg/mL) | Cmax | 724 | μg/mL |
| C min,ss (μg/mL) | Cmin | 724 | μg/mL |
| t 1/2 (h) | t1/2z | 724 | h |
| confirmed CMV viremia clearance at week 8 (primary endpoint) | CL | 178 | L/h |
| Letermovir Ka (h − 1) | kabs | 0.15 | h − 1 |
| Letermovir Alag (h) | tlag | 0.674 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.769). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; the clearance plausibility check could not be computed.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — maribavir: AUCSS 724 μg·h/mL, Cmax 724 μg/mL, Cmin 724 μg/mL, t1/2z 724 h, CL 178 L/h, kabs 0.15 h − 1, tlag 0.674 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has none, the second reading 1; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUCss (μg·h/mL) | `Q18` · AUCSS | 724 | μg·h/mL |  |  | (h·µg)/ml | exact (1) | Sun_2025_table_3:row1:col5 |
| C max,ss (μg/mL) | `Q32` · Cmax | 724 | μg/mL |  |  | µg/ml | llm (0.6) | Sun_2025_table_3:row2:col5 |
| C min,ss (μg/mL) | `Q36` · Cmin | 724 | μg/mL |  |  | µg/ml | llm (0.6) | Sun_2025_table_3:row3:col5 |
| t 1/2 (h) | `Q57` · t1/2z | 724 | h | 2.606e+06 | s | h | space_fold (0.95) | Sun_2025_table_3:row4:col5 |
| confirmed CMV viremia clearance at week 8 (primary endpoint) | `Q22` · CL | 178 | L/h | 4.944e-05 | m3/s | L/h | boundary (0.8) | Sun_2025:other_prose |
| Letermovir Ka (h − 1) | `Q49` · kabs | 0.15 | h − 1 | 4.167e-05 | 1/s | 1/h | review_gapfill (0.7) | Fromage_2025:review |
| Letermovir Alag (h) | `Q83` · tlag | 0.674 | h | 2426 | s | h | review_gapfill (0.7) | Fromage_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q/F' from footnote/prose loose number None (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'tlag' from footnote/prose loose number 0.212 (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- salvaged Q22 ('confirmed CMV viremia clearance at week 8 (primary endpoint)'=178) from results prose — parameter table was unreadable
- implicit units: 'confirmed CMV viremia clearance at week 8 (primary endpoint)' → L/h (from the paper text: "Table 2 note states: 'CL/F (L/h) = 3.94 × (WT[kg]/70)0.301 ...'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=maribavir
- population split: 'all transplant recipients with cmv' subgroup of Sun_2025 (paper reports 5 populations: all individuals a, all transplant recipients with cmv, estimates, healthy volunteers, transplant recipients with cmv (aurora study only))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Fromage_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Fromage_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp470054-tbl-0002:row2:col1 = '× 0.905'
- unparsed cell psp470054-tbl-0002:row5:col4 = '−1.17 to −0.875'
- unparsed cell psp470054-tbl-0002:row6:col1 = '× 0.457'
- unparsed cell psp470054-tbl-0002:row9:col1 = '× 0.709'
- unparsed cell psp470054-tbl-0002:row10:col1 = '× 2.27'
- unparsed cell psp470054-tbl-0002:row11:col1 = '× 0.678'
- transposed table Sun_2025_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (32 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[letermovir alag]` | 0.674 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[letermovir ka]` | 0.15 |  | only_one_extracted |

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
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 |  | ['Sun_2025_table_3:row1:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Sun_2025:other_prose'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Sun_2025_table_3:row2:col5'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Sun_2025_table_3:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fromage_2025:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Sun_2025_table_3:row4:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['Fromage_2025:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 178 | ['Sun_2025:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 178 L/h | ['Sun_2025:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmaribavir%5D%20Maribavir_Sun2025_all_transplant_recipients_with_cmv&body=Drug%3A%20maribavir%0ARecord%3A%20Maribavir_Sun2025_all_transplant_recipients_with_cmv%0APaper%3A%20Sun_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_maribavir/Maribavir_Sun2025_all_transplant_recipients_with_cmv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:08 UTC</sub>
