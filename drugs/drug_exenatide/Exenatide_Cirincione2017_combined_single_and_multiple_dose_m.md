<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;exenatide&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/&quot;},{&quot;label&quot;:&quot;Cirincione_2017 \u00b7 combined_single_and_multiple_dose_models_parameter_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Exenatide_Admiraal2023_reference&quot;,&quot;label&quot;:&quot;Admiraal_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Admiraal2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Exenatide_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Li2012_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Exenatide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# exenatide — `Exenatide_Cirincione2017_combined_single_and_multiple_dose_m`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.609), gpt-oss:120b (not confirmed, agreement 0.56). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The exenatide record was rejected because the reported total clearance of 12.3 L/h is dimensionally inconsistent with the model's structural clearance parameters expressed per day, a C5 dimension mismatch.**

The paper reports exenatide clearance as 12.3 L/h, while the two-compartment model's clearance parameters (CLint 110 L/day, Q 89.3 L/day) are on a per-day scale, so the value could not be reconciled dimensionally. Because the per-hour unit could not be converted to the model's per-day scale, the clearance value arrived without a usable SI value. A second reader additionally disagreed on several extracted values, reading Km as null versus 567 pg/mL, CLint as null versus 110 L/day, and Vmax as null versus 0.0372 mg/day, and read a value of 2.4 where this record had none; these disagreements were inconclusive. Extracted — exenatide: kabs 3.85, CLint 110 L/day, V 7.03 L, Fab 1.18, ktr 0.105, Km 567 pg/mL, Vmax 0.0372 mg/day, Q 89.3 L/day, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has exenatide, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:37:59.206664+00:00) predates the upstream re-run (2026-10-04 23:58:32.018367+00:00). Current validate status: `rejected`.

## Citation
Cirincione B et al., Population Pharmacokinetics of an Exten…, The AAPS journal (2017)
  ·  DOI: [10.1208/s12248-016-9975-1](https://doi.org/10.1208/s12248-016-9975-1)

<div class="pk-model-meta" hidden drug="exenatide" model-id="Exenatide_Cirincione2017_combined_single_and_multiple_dose_m" status="rejected" stale="true" population="patients with type 2 diabetes mellitus" measured-compound="exenatide" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (1/day) | `Q49` · kabs | 3.85 | 1/day | 4.456018518518519e-05 | 1/h | 37.6 | exact (1.0) | Cirincione_2017_table_p6_1:row0:col5, Cirincione_2017_table_p6_1:row0:col6, Cirincione_2017_table_p6_1:row0:col8 | — | not captured |
| CLint (L/day) | `Q3` · CLint | 110 | L/day | not captured | [l] / [d] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row1:col5 | — | not captured |
| Vcint (L) | `Q61` · V | 7.03 | L | 0.007030000000000001 | [l] | not captured | llm (0.6) | Cirincione_2017_table_p6_1:row2:col5 | — | not captured |
| f1 (%) | `Q40` · Fab | 1.18 | not captured | not captured | not captured | 23.4 | exact (1.0) | Cirincione_2017_table_p6_1:row3:col5, Cirincione_2017_table_p6_1:row3:col6, Cirincione_2017_table_p6_1:row3:col8 | — | not captured |
| ktr1 (1/day) | `Q306` · ktr | 0.105 | 1/day | 1.2152777777777776e-06 | 1/h | 9.50 | llm (0.6) | Cirincione_2017_table_p6_1:row8:col5, Cirincione_2017_table_p6_1:row8:col6 | — | not captured |
| cl_egfr | `Q900` · cl_egfr | 0.838 | not captured | not captured | not captured | not captured | not captured (not captured) | Cirincione_2017_table_p6_1:row13:col5 | — | not captured |
| Km (pg/mL) | `Q1` · Km | 567 | pg/mL | not captured | [pg] / [ml] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row14:col5 | — | not captured |
| Vmax (mg/day) | `Q66` · Vmax | 0.0372 | mg/day | not captured | [mg] / [d] | not captured | special_case (0.95) | Cirincione_2017_table_p6_1:row15:col5 | — | not captured |
| CLd (L/day) | `Q30` · Q | 89.3 | L/day | 1.0335648148148148e-06 | [l] / [d] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row16:col5 | — | not captured |
| VP (L) | `Q64` · V2 | 7.04 | L | 0.00704 | [l] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row17:col5 | — | not captured |
| clearance | `Q22` · CL | 12.3 | L/h | 3.416666666666667e-06 | L/h | not captured | review_gapfill (0.7) | Admiraal_2023:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CLint (L/day)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped unlinked row (NIL): 'f2 (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row4:col5', 'Cirincione_2017_table_p6_1:row4:col6'])
- dropped unlinked row (NIL): 'f3 (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row5:col5'])
- dropped unlinked row (NIL): 'fret(single-dose study) (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row6:col5', 'Cirincione_2017_table_p6_1:row6:col6', 'Cirincione_2017_table_p6_1:row6:col8'])
- dropped unlinked row (NIL): 'fret(Mdstudy) (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row7:col5', 'Cirincione_2017_table_p6_1:row7:col6'])
- dropped duplicate Q306 ('ktr2 (1/day)', value '0.570') — already have one for this compound
- dropped unlinked row (NIL): 'N1' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row10:col5', 'Cirincione_2017_table_p6_1:row10:col6', 'Cirincione_2017_table_p6_1:row10:col8'])
- dropped unlinked row (NIL): 'N2' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row11:col5', 'Cirincione_2017_table_p6_1:row11:col6'])
- dropped unlinked row (NIL): 'Vctwkg' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row12:col5'])
- covariate level 'CL eGFR' → Q900:cl_egfr = 0.838 (power on Q3)
- unit_dimension_mismatch: 'Vmax (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'RVS D study (Log SD)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row18:col5', 'Cirincione_2017_table_p6_1:row18:col6'])
- dropped unlinked row (NIL): 'RVM D study (Log SD)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row19:col5', 'Cirincione_2017_table_p6_1:row19:col6'])
- implicit units: 'ka (1/day)' → 1/day (from the paper text: "The parameter is explicitly listed in the input as 'ka (1/day) = 3.85'. Additionally, the context of exenatide extended-")
- implicit units: 'ktr1 (1/day)' → 1/day (from the paper text: "The parameter is explicitly listed in the input as 'ktr1 (1/day) = 0.105'. The magnitude (0.105) is consistent with a da")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=exenatide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'combined single- and multiple-dose models parameter estimate' subgroup of Cirincione_2017 (paper reports 2 populations: combined single- and multiple-dose models parameter estimate, single-dose model parameter estimate)
- gap-filled Q22 (CL) from Admiraal_2023's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.609 (14/23 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.56 (14/25 fields) | 11 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl_egfr]` | 0.838 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 12.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[f2]` | not captured | 48.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f3]` | not captured | 50.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_egfr_power]` | not captured | 0.838 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcint].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | exenatide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | exenatide | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl_egfr]` | 0.838 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clint].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[f2]` | not captured | 48.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fret(mdstudy)]` | not captured | 15.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[n1]` | not captured | 0.591 | only_one_extracted |
| `gpt-oss:120b` | `parameters[n2]` | not captured | 26.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q22_egfr_power]` | not captured | 0.838 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vcint].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss:120b` | `parameters[vctwkg]` | not captured | 2.67 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | exenatide | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | exenatide | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row14:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Admiraal_2023:review'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/day | not captured | not captured | ['Cirincione_2017_table_p6_1:row1:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row16:col5'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row8:col5', 'Cirincione_2017_table_p6_1:row8:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row0:col5', 'Cirincione_2017_table_p6_1:row0:col6', 'Cirincione_2017_table_p6_1:row0:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row2:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row17:col5'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | not captured | not captured | ['Cirincione_2017_table_p6_1:row15:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.3 | not captured | not captured | ['Admiraal_2023:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.3 L/h | not captured | not captured | ['Admiraal_2023:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.03 L | not captured | not captured | ['Cirincione_2017_table_p6_1:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.04 L | not captured | not captured | ['Cirincione_2017_table_p6_1:row17:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_exenatide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cirincione_2017` / `Cirincione_2017::combined_single_and_multiple_dose_models_parameter_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 23:58 UTC</sub>
