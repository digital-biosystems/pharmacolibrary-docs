<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;panitumumab&quot;,&quot;href&quot;:&quot;drugs/drug_panitumumab/&quot;},{&quot;label&quot;:&quot;Liao_2021 \u00b7 normal&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# panitumumab — `Panitumumab_Liao2021_normal`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="panitumumab" model-id="Panitumumab_Liao2021_normal" status="needs_review" stale="false" population="patients with metastatic RAS wild-type colorectal cancer" measured-compound="panitumumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Liao MZ, Prenen H, Dutta S, Upreti VV. The impact of hepatic and renal function on panitumumab exposures in patients with metastatic RAS wild-type colorectal cancer. Cancer chemotherapy and pharmacology 88(4):665–672 (2021).
  ·  DOI: [10.1007/s00280-021-04319-w](https://doi.org/10.1007/s00280-021-04319-w)

## Population and dosing

**Population:** patients with metastatic RAS wild-type colorectal cancer · condition metastatic RAS wild-type colorectal cancer · age group adult · n = , 349 and 351.

**Dosing:** 420 mg, iv, multiple, every 14 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax | Cmax | 218 | µg/mL |
| Ctrough | Ctrough | 226 | µg/mL |
| Mean (CV) values for Cmax and Ctrough were 166 µg/mL (37%) and 32 µg/mL (59%), respectively, for patients with normal renal function (Table 4). 2).Table 4Summary of serum panitumumab concentrations in patients with varying degrees of renal function on week 7 before and after IV infusion of panitumumab at 6 mg/kg Q2WRenal function, CLCR rangeCmaxCtroughnMean, μg/mLCV, %nMean, μg/mLCV, %Normal, &gt; 80 mL/min242166372473259Mild Impairment, 50–80 mL/min8016537853057Moderate Impairment, 30–49 mL/min1817227193268CLCR creatinine clearance, Cmax maximum serum concentration, Ctrough trough serum concentration, CV coefficient of variation, IV intravenous, Q2W every 2 weeksFig. 2Cmax (a) and Ctrough (b) in patients with varying degrees of renal dysfunction on week 7 before and after intravenous infusion of panitumumab at 6 mg/kg every 2 weeks. Cmax, maximum serum concentration; Ctrough, trough serum concentration | CL | 166 | µg/mL |
| panitumumab V1 | V1 | 3.22 | L |
| peripheral volume of distribution | V2 | 2.49 | L |
| inter-compartmental clearance | Q | 0.38 | L/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — panitumumab: Cmax 218 µg/mL, Ctrough 226 µg/mL, CL 166 µg/mL, V1 3.22 L, V2 2.49 L, Q 0.38 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has panitumumab, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax | `Q32` · Cmax | 218 | µg/mL |  |  | µg/mL | exact (1) | Liao_2021_table_3:row0:col2, Liao_2021_table_3:row1:col2, Liao_2021_table_3:row2:col2, Liao_2021_table_4:row0:col2, Liao_2021_table_4:row1:col2, Liao_2021_table_4:row2:col2 |
| Ctrough | `Q37` · Ctrough | 226 | µg/mL |  |  | µg/mL | exact (1) | Liao_2021_table_3:row3:col2, Liao_2021_table_3:row4:col2, Liao_2021_table_3:row5:col2, Liao_2021_table_4:row3:col2, Liao_2021_table_4:row4:col2, Liao_2021_table_4:row5:col2 |
| Mean (CV) values for Cmax and Ctrough were 166 µg/mL (37%) and 32 µg/mL (59%), respectively, for patients with normal renal function (Table 4). 2).Table 4Summary of serum panitumumab concentrations in patients with varying degrees of renal function on week 7 before and after IV infusion of panitumumab at 6 mg/kg Q2WRenal function, CLCR rangeCmaxCtroughnMean, μg/mLCV, %nMean, μg/mLCV, %Normal, &gt; 80 mL/min242166372473259Mild Impairment, 50–80 mL/min8016537853057Moderate Impairment, 30–49 mL/min1817227193268CLCR creatinine clearance, Cmax maximum serum concentration, Ctrough trough serum concentration, CV coefficient of variation, IV intravenous, Q2W every 2 weeksFig. 2Cmax (a) and Ctrough (b) in patients with varying degrees of renal dysfunction on week 7 before and after intravenous infusion of panitumumab at 6 mg/kg every 2 weeks. Cmax, maximum serum concentration; Ctrough, trough serum concentration | `Q22` · CL | 166 | µg/mL |  |  | µg/mL | boundary (0.8) | Liao_2021:other_prose |
| panitumumab V1 | `Q63` · V1 | 3.22 | L | 0.00322 | m3 | L | boundary (0.8) | Liao_2021:discussion_prose |
| peripheral volume of distribution | `Q64` · V2 | 2.49 | L | 0.00249 | m3 | L | boundary_compartment (0.9) | Liao_2021:discussion_prose |
| inter-compartmental clearance | `Q30` · Q | 0.38 | L/day | 4.398e-09 | m3/s | L/h | boundary (0.8) | Liao_2021:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('Mean (CV) values for Cmax and Ctrough were 166 µg/mL (37%) and 32 µg/mL (59%), respectively, for patients with normal renal function (Table 4). 2).Table 4Summary of serum panitumumab concentrations in patients with varying degrees of renal function on week 7 before and after IV infusion of panitumumab at 6 mg/kg Q2WRenal function, CLCR rangeCmaxCtroughnMean, μg/mLCV, %nMean, μg/mLCV, %Normal, &gt; 80 mL/min242166372473259Mild Impairment, 50–80 mL/min8016537853057Moderate Impairment, 30–49 mL/min1817227193268CLCR creatinine clearance, Cmax maximum serum concentration, Ctrough trough serum concentration, CV coefficient of variation, IV intravenous, Q2W every 2 weeksFig. 2Cmax (a) and Ctrough (b) in patients with varying degrees of renal dysfunction on week 7 before and after intravenous infusion of panitumumab at 6 mg/kg every 2 weeks. Cmax, maximum serum concentration; Ctrough, trough serum concentration'=166) from results prose — parameter table was unreadable
- salvaged Q63 ('panitumumab V1'=3.22) from results prose — parameter table was unreadable
- salvaged Q64 ('peripheral volume of distribution'=2.49) from results prose — parameter table was unreadable
- salvaged Q30 ('inter-compartmental clearance'=0.38) from results prose — parameter table was unreadable
- implicit units: 'Cmax' → µg/mL (from the paper text: "Table 4 caption and headers state 'Mean, μg/mL' for Cmax, and the text reports 'Mean (CV) values for Cmax and Ctrough we")
- implicit units: 'Ctrough' → µg/mL (from the paper text: "Table 4 caption and headers state 'Mean, μg/mL' for Ctrough, and the text reports 'Mean (CV) values for Cmax and Ctrough")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=panitumumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'normal' subgroup of Liao_2021 (paper reports 4 populations: mild_1 impairment, mild_2 impairment, moderate impairment, normal)
- molar mass: none found for 'panitumumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 3, 4
- transposed table Liao_2021_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Liao_2021_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` |  | 0.208 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 218 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctrough]` | 226 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` | 0.38 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` |  | 0.38 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean (cv) values for cmax and ctrough were 166 ug/ml (37%) and 32 ug/ml (59%), respectively, for patients with normal renal function (table 4). 2).table 4summary of serum panitumumab concentrations in patients with varying degrees of renal function on week 7 before and after iv infusion of panitumumab at 6 mg/kg q2wrenal function, clcr rangecmaxctroughnmean, ug/mlcv, %nmean, ug/mlcv, %normal, &gt; 80 ml/min242166372473259mild impairment, 50-80 ml/min8016537853057moderate impairment, 30-49 ml/min1817227193268clcr creatinine clearance, cmax maximum serum concentration, ctrough trough serum concentration, cv coefficient of variation, iv intravenous, q2w every 2 weeksfig. 2cmax (a) and ctrough (b) in patients with varying degrees of renal dysfunction on week 7 before and after intravenous infusion of panitumumab at 6 mg/kg every 2 weeks. cmax, maximum serum concentration; ctrough, trough serum concentration]` | 166 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[panitumumab v1]` | 3.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` | 2.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` |  | 2.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 3.22 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | panitumumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | panitumumab | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Liao_2021_table_3:row0:col2', 'Liao_2021_table_3:row1:col2', 'Liao_2021_table_3:row2:col2', 'Liao_2021_table_4:row0:col2', 'Liao_2021_table_4:row1:col2', 'Liao_2021_table_4:row2:col2'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Liao_2021_table_3:row3:col2', 'Liao_2021_table_3:row4:col2', 'Liao_2021_table_3:row5:col2', 'Liao_2021_table_4:row3:col2', 'Liao_2021_table_4:row4:col2', 'Liao_2021_table_4:row5:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | µg/mL | ['Liao_2021:other_prose'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 166 | ['Liao_2021:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.22 L | ['Liao_2021:discussion_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.49 L | ['Liao_2021:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpanitumumab%5D%20Panitumumab_Liao2021_normal&body=Drug%3A%20panitumumab%0ARecord%3A%20Panitumumab_Liao2021_normal%0APaper%3A%20Liao_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_panitumumab/Panitumumab_Liao2021_normal%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:04 UTC</sub>
