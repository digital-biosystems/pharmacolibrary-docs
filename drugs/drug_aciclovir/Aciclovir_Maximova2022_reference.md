<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;aciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_aciclovir/&quot;},{&quot;label&quot;:&quot;Maximova_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aciclovir — `Aciclovir_Maximova2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUC has no unit.

<div class="pk-model-meta" hidden drug="aciclovir" model-id="Aciclovir_Maximova2022_reference" status="needs_review" stale="false" population="pediatric oncology patients" measured-compound="acyclovir" parameterization="mechanistic" topology="1C"></div>

## Citation
Maximova N, Nisticò D, Luci G, Simeone R, Piscianz E, Segat L et al. Population Pharmacokinetics of Intravenous Acyclovir in Oncologic Pediatric Patients. Frontiers in pharmacology 13:865871 (2022).
  ·  DOI: [10.3389/fphar.2022.865871](https://doi.org/10.3389/fphar.2022.865871)

## Population and dosing

**Population:** pediatric oncology patients · condition hematological malignancies / HSCT · age group child.

**Dosing:** 381.3, 432.5, 500 mg, iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 2.965 | L/h |
| V (L) | V | 14.945 | L |
| egfr_on_cl | egfr_on_cl | 0.769 |  |
| AUC (hxmg/L) | AUC | 26.0 | hxmg/L |
| kel (h−1) | kel | 0.574 | h−1 |
| t1/2 (h) | t1/2z | 1.364 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUC has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — aciclovir: CL 2.96 L/h, V 14.9 L, AUC 26 hxmg/L, kel 0.574 h−1, t1/2z 1.36 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has acyclovir, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 2.965 | L/h | 8.236e-07 | m3/s | l/h | exact (1) | T2:row3:col1, T2:row3:col2, T2:row3:col3, T2:row3:col4, Maximova_2022_table_3:row2:col1, Maximova_2022_table_3:row2:col2, Maximova_2022_table_4:row1:col1, Maximova_2022_table_4:row1:col4, Maximova_2022_table_5:row1:col4 |
| V (L) | `Q61` · V | 14.945 | L | 0.01494 | m3 | l | exact (1) | T2:row4:col1, T2:row4:col2, T2:row4:col3, T2:row4:col4, Maximova_2022_table_3:row4:col1, Maximova_2022_table_3:row4:col2, Maximova_2022_table_4:row3:col1, Maximova_2022_table_4:row3:col4, Maximova_2022_table_5:row3:col4 |
| egfr_on_cl | `Q900` · egfr_on_cl | 0.769 |  |  |  |  |  | T2:row5:col1, T2:row5:col2, T2:row5:col3, T2:row5:col4 |
| AUC (hxmg/L) | `Q88` · AUC | 26.0 | hxmg/L |  |  | (h·mg)/l | exact (1) | Maximova_2022_table_3:row3:col1, Maximova_2022_table_3:row3:col2, Maximova_2022_table_4:row2:col1, Maximova_2022_table_4:row2:col4, Maximova_2022_table_5:row2:col4 |
| kel (h−1) | `Q47` · kel | 0.574 | h−1 | 0.0001594 | 1/s | 1/h | exact (1) | Maximova_2022_table_3:row5:col1, Maximova_2022_table_3:row5:col2 |
| t1/2 (h) | `Q57` · t1/2z | 1.364 | h | 4910 | s | h | exact (1) | Maximova_2022_table_3:row6:col1, Maximova_2022_table_3:row6:col2, Maximova_2022_table_4:row4:col1, Maximova_2022_table_4:row4:col4, Maximova_2022_table_5:row4:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1', 'T2:row2:col3', 'T2:row2:col4'])
- covariate level 'EGFR on CL' → Q900:egfr_on_cl = 0.769 (linear_fractional on Q22)
- dropped diagnostic row 'Shrinkage' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'Dose (mg)' — extend the ontology if this is a real PK parameter (source ['Maximova_2022_table_3:row1:col1', 'Maximova_2022_table_3:row1:col2', 'Maximova_2022_table_4:row0:col1', 'Maximova_2022_table_4:row0:col4', 'Maximova_2022_table_5:row0:col4'])
- unit_dimension_unknown: 'hxmg/L' (AUC)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acyclovir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row10:col1 = 'η1 shrinkage'
- unparsed cell T2:row10:col3 = 'η2 shrinkage'
- companion parameter table 3 transcribed (12 record(s), model stage 'final')
- transposed table Maximova_2022_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Maximova_2022_table_4:row0:col2 = '(350.0)'
- unparsed cell Maximova_2022_table_4:row0:col3 = '0.213**'
- unparsed cell Maximova_2022_table_4:row0:col5 = '(350.0)'
- unparsed cell Maximova_2022_table_4:row1:col2 = '(14.1)'
- unparsed cell Maximova_2022_table_4:row1:col3 = '0.440*'
- unparsed cell Maximova_2022_table_4:row1:col5 = '(14.6)'
- unparsed cell Maximova_2022_table_4:row2:col2 = '(23.3)'
- unparsed cell Maximova_2022_table_4:row2:col3 = '0.755**'
- unparsed cell Maximova_2022_table_4:row2:col5 = '(23.9)'
- unparsed cell Maximova_2022_table_4:row3:col2 = '(25.4)'
- unparsed cell Maximova_2022_table_4:row3:col3 = '0.300*'
- unparsed cell Maximova_2022_table_4:row3:col5 = '(28.0)'
- unparsed cell Maximova_2022_table_4:row4:col2 = '(1.237)'
- unparsed cell Maximova_2022_table_4:row4:col3 = '0.924**'
- unparsed cell Maximova_2022_table_4:row4:col5 = '(1.238)'
- companion parameter table 4 transcribed (10 record(s))
- transposed table Maximova_2022_table_5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Maximova_2022_table_5:row0:col1 = '199.2 ± 157.8 (123.0)'
- unparsed cell Maximova_2022_table_5:row0:col2 = '283.1 ± 188.6 (250.0)'
- unparsed cell Maximova_2022_table_5:row0:col3 = '298.5 ± 177.6 (300.0)'
- unparsed cell Maximova_2022_table_5:row1:col1 = '12.5 ± 5.3 (13.3)'
- unparsed cell Maximova_2022_table_5:row1:col2 = '11.74 ± 4.7 (12.5)'
- unparsed cell Maximova_2022_table_5:row1:col3 = '12.3 ± 4.0 (12.3)'
- unparsed cell Maximova_2022_table_5:row2:col1 = '17.4 ± 11.8 (13.1)'
- unparsed cell Maximova_2022_table_5:row2:col2 = '26.7 ± 21.4 (20.0)'
- unparsed cell Maximova_2022_table_5:row2:col3 = '24.3 ± 11.5 (24.4)'
- unparsed cell Maximova_2022_table_5:row3:col1 = '22.5 ± 10.9 (20.2)'
- unparsed cell Maximova_2022_table_5:row3:col2 = '24.4 ± 11.5 (25.5)'
- unparsed cell Maximova_2022_table_5:row3:col3 = '24.4 ± 11.5 (25.5)'
- unparsed cell Maximova_2022_table_5:row4:col1 = '1.310 ± 0.501 (1.100)'
- unparsed cell Maximova_2022_table_5:row4:col2 = '1.533 ± 0.816 (1.425)'
- unparsed cell Maximova_2022_table_5:row4:col3 = '1.441 ± 0.661 (1.319)'
- companion parameter table 5 transcribed (5 record(s))
- LLM selected parameter table(s) 3, 4, 5
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 2.965 | 1.630 | mismatch |
| `gpt-oss-120b` | `parameters[dose]` |  | 334.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[egfr_on_cl]` | 0.769 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kel]` | 0.574 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_egfr]` |  | 0.269 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v].value` | 14.945 | 2.135 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | acyclovir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | acyclovir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4', 'Maximova_2022_table_3:row2:col1', 'Maximova_2022_table_3:row2:col2', 'Maximova_2022_table_4:row1:col1', 'Maximova_2022_table_4:row1:col4', 'Maximova_2022_table_5:row1:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Maximova_2022_table_3:row5:col1', 'Maximova_2022_table_3:row5:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Maximova_2022_table_3:row6:col1', 'Maximova_2022_table_3:row6:col2', 'Maximova_2022_table_4:row4:col1', 'Maximova_2022_table_4:row4:col4', 'Maximova_2022_table_5:row4:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4', 'Maximova_2022_table_3:row4:col1', 'Maximova_2022_table_3:row4:col2', 'Maximova_2022_table_4:row3:col1', 'Maximova_2022_table_4:row3:col4', 'Maximova_2022_table_5:row3:col4'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | hxmg/L | ['Maximova_2022_table_3:row3:col1', 'Maximova_2022_table_3:row3:col2', 'Maximova_2022_table_4:row2:col1', 'Maximova_2022_table_4:row2:col4', 'Maximova_2022_table_5:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.965 | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4', 'Maximova_2022_table_3:row2:col1', 'Maximova_2022_table_3:row2:col2', 'Maximova_2022_table_4:row1:col1', 'Maximova_2022_table_4:row1:col4', 'Maximova_2022_table_5:row1:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.96 L/h | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4', 'Maximova_2022_table_3:row2:col1', 'Maximova_2022_table_3:row2:col2', 'Maximova_2022_table_4:row1:col1', 'Maximova_2022_table_4:row1:col4', 'Maximova_2022_table_5:row1:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.9 L | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4', 'Maximova_2022_table_3:row4:col1', 'Maximova_2022_table_3:row4:col2', 'Maximova_2022_table_4:row3:col1', 'Maximova_2022_table_4:row3:col4', 'Maximova_2022_table_5:row3:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baciclovir%5D%20Aciclovir_Maximova2022_reference&body=Drug%3A%20aciclovir%0ARecord%3A%20Aciclovir_Maximova2022_reference%0APaper%3A%20Maximova_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aciclovir/Aciclovir_Maximova2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:02 UTC</sub>
