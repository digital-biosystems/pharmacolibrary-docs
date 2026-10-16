<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;exenatide&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/&quot;},{&quot;label&quot;:&quot;Cirincione_2017_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Exenatide_Admiraal2023_reference&quot;,&quot;label&quot;:&quot;Admiraal_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Admiraal2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Exenatide_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Li2012_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Exenatide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# exenatide — `Exenatide_Cirincione2017v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889), gpt-oss:120b (not confirmed, agreement 0.815). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The exenatide record was held back because the absorption rate constant ka was not reported in the source and a placeholder value was substituted, alongside unreported lag time and an assumed F=1 apparent parameterization.**

The source reports only CL/F (9.1 l/h) and V (7.04 l) for exenatide; no absorption rate constant or lag time was extracted, so library placeholder values were used in their place, and the invented ka was flagged as not acceptable. The model was built with an apparent parameterization assuming F=1 and Fm=1 without molar correction, using first-order depot input for extravascular dosing. A second reader also disagreed on several extracted values, e.g. reading 1.35 and 96 where this record had none, and 100 where this record had 1. Extracted — exenatide: CL/F 9.1 l h−1, V 7.04 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of vc=vc_int⋅weight84.8vc_wtkg: this record has none, the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:37:59.301563+00:00) predates the upstream re-run (2026-10-04 23:58:39.184912+00:00). Current validate status: `rejected`.

## Citation
Cirincione B et al., Population pharmacokinetics of exenatide, British journal of clinical… (2017)
  ·  DOI: [10.1111/bcp.13135](https://doi.org/10.1111/bcp.13135)

<div class="pk-model-meta" hidden drug="exenatide" model-id="Exenatide_Cirincione2017v2_reference" status="rejected" stale="true" population="adults with type 2 diabetes mellitus" measured-compound="exenatide" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl_int (l h −1 ) | `Q3` · CLint | 4.58 | l h −1 | not captured | [l] / [h] | 19.1 | exact (1.0) | bcp13135-tbl-0002:row1:col1, bcp13135-tbl-0002:row1:col2, bcp13135-tbl-0002:row1:col4 | — | 33.9 (None% RSE) |
| Cl_eGFR | `Q22` · CL | 0.838 | unit | not captured | [unit] | 12.3 | llm (0.6) | bcp13135-tbl-0002:row2:col1, bcp13135-tbl-0002:row2:col2 | — | None (None% RSE) |
| Cl d (l h −1 ) | `Q30` · Q | 3.72 | l h −1 | 1.0333333333333333e-06 | [l] / [h] | 21.7 | space_fold (0.95) | bcp13135-tbl-0002:row4:col1, bcp13135-tbl-0002:row4:col2 | — | not captured |
| K m (pg ml −1 ) | `Q1` · Km | 567 | pg ml −1 | not captured | [pg] / [ml] | 21.9 | space_fold (0.95) | bcp13135-tbl-0002:row5:col1, bcp13135-tbl-0002:row5:col2, bcp13135-tbl-0002:row5:col4 | — | 95.7 (None% RSE) |
| V max (μg h −1 ) | `Q66` · Vmax | 1.55 | μg h −1 | not captured | [µg] / [h] | 22.1 | special_case (0.95) | bcp13135-tbl-0002:row6:col1, bcp13135-tbl-0002:row6:col2 | — | not captured |
| V p (l) | `Q64` · V2 | 7.04 | l | 0.00704 | [l] | 9.49 | space_fold (0.95) | bcp13135-tbl-0002:row7:col1, bcp13135-tbl-0002:row7:col2, bcp13135-tbl-0002:row11:col1, bcp13135-tbl-0002:row11:col2 | — | not captured |
| Vc_int (l) | `Q61` · V | 7.03 | l | 0.007030000000000001 | [l] | 13.2 | llm (0.6) | bcp13135-tbl-0002:row8:col1, bcp13135-tbl-0002:row8:col2, bcp13135-tbl-0002:row8:col4 | — | not captured |
| k a_max (μg h −1 ) | `Q49` · kabs | 12.8 | μg h −1 | not captured | [µg] / [h] | 42.5 | llm (0.6) | bcp13135-tbl-0002:row12:col1, bcp13135-tbl-0002:row12:col2 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | bcp13135-tbl-0002:row15:col1 | — | not captured |
| fr | `Q43` · FR | 0.628 | not captured | not captured | not captured | 3.5 | exact (1.0) | bcp13135-tbl-0002:row16:col1, bcp13135-tbl-0002:row16:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Vc=Vc_int⋅weight84.8Vc_wtkg | Q63 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Cl_int (l h −1 )' routed out of structural estimates ('IIV(%)')
- table section iiv: 'Cl = Cl_int ⋅eGFR80 Cl_eGFR' routed out of structural estimates ('IIV(%)')
- table section iiv: 'K m (pg ml −1 )' routed out of structural estimates ('IIV(%)')
- table section iiv: 'Vc_int (l)' routed out of structural estimates ('IIV(%)')
- table section iiv: 'Vc=Vc_int⋅weight84.8Vc_wtkg' routed out of structural estimates ('IIV(%)')
- unit_dimension_mismatch: 'Cl_int (l h −1 )' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- unit_dimension_mismatch: 'Cl_eGFR' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Cl = Cl_int ⋅eGFR80 Cl_eGFR' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('Cl = Cl_int ⋅eGFR80 Cl_eGFR', value None) — already have one for this compound
- unit_dimension_mismatch: 'V max (μg h −1 )' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Vc_wtkg' → Q61 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q61 ('Vc_wtkg', value '2.67') — already have one for this compound
- unit_dimension_mismatch: 'Vc=Vc_int⋅weight84.8Vc_wtkg' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'k a_max (μg h −1 )' → Q49 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'K m_ka (μg)' → Q1 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('K m_ka (μg)', value '16.9') — already have one for this compound
- dropped unlinked row (NIL): 'τ (h)' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row14:col1'])
- dropped unlinked row (NIL): 'RV (log units) SD' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row17:col1'])
- dropped unlinked row (NIL): 'Study 1' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row18:col1', 'bcp13135-tbl-0002:row18:col2'])
- dropped unlinked row (NIL): 'Study 5' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row19:col1', 'bcp13135-tbl-0002:row19:col2'])
- dropped unlinked row (NIL): 'All other studies' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row20:col1', 'bcp13135-tbl-0002:row20:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=exenatide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.889 (24/27 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.815 (22/27 fields) | 5 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[vc=vc_int⋅weight84.8vc_wtkg]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc_int].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[vc_wtkg]` | not captured | 2.67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc=vc_int⋅weight84.8vc_wtkg]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc_int].parameter_id` | Q61 | Q63 | mismatch |
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
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['bcp13135-tbl-0002:row5:col1', 'bcp13135-tbl-0002:row5:col2', 'bcp13135-tbl-0002:row5:col4'] |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['bcp13135-tbl-0002:row2:col1', 'bcp13135-tbl-0002:row2:col2'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | l h −1 | not captured | not captured | ['bcp13135-tbl-0002:row1:col1', 'bcp13135-tbl-0002:row1:col2', 'bcp13135-tbl-0002:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13135-tbl-0002:row4:col1', 'bcp13135-tbl-0002:row4:col2'] |
| C5_dimension_Q49 | fail | [mass] / [time] | μg h −1 | not captured | not captured | ['bcp13135-tbl-0002:row12:col1', 'bcp13135-tbl-0002:row12:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13135-tbl-0002:row8:col1', 'bcp13135-tbl-0002:row8:col2', 'bcp13135-tbl-0002:row8:col4'] |
| C5_dimension_Q63 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['bcp13135-tbl-0002:row10:col1', 'bcp13135-tbl-0002:row10:col2', 'bcp13135-tbl-0002:row10:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13135-tbl-0002:row7:col1', 'bcp13135-tbl-0002:row7:col2', 'bcp13135-tbl-0002:row11:col1', 'bcp13135-tbl-0002:row11:col2'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μg h −1 | not captured | not captured | ['bcp13135-tbl-0002:row6:col1', 'bcp13135-tbl-0002:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.838 | not captured | not captured | ['bcp13135-tbl-0002:row2:col1', 'bcp13135-tbl-0002:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.03 L | not captured | not captured | ['bcp13135-tbl-0002:row8:col1', 'bcp13135-tbl-0002:row8:col2', 'bcp13135-tbl-0002:row8:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.04 L | not captured | not captured | ['bcp13135-tbl-0002:row7:col1', 'bcp13135-tbl-0002:row7:col2', 'bcp13135-tbl-0002:row11:col1', 'bcp13135-tbl-0002:row11:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=exenatide) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 1.5039683164079344e-07 | not captured | non-numeric value |
| T1_cmax | reference | skipped | 7 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 273 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp 'pg ml−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 24 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 321 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp 'pg ml−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 256 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp 'pg ml−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 287 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp 'pg ml−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 18 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 237 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp 'pg ml−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 34 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 189 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp 'pg ml−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 211 | 1.5039683164079344e-07 | not captured | unresolved concentration unit (exp 'pg ml−1', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_exenatide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cirincione_2017_2` / `Cirincione_2017_2::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_exenatide/models/modelica/Exenatide_Cirincione2017v2_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_exenatide/models/modelica/Exenatide_Cirincione2017v2_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_exenatide/models/modelica/Exenatide_Cirincione2017v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 23:58 UTC</sub>
