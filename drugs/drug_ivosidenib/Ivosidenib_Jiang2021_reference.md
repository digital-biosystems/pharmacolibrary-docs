<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ivosidenib&quot;,&quot;href&quot;:&quot;drugs/drug_ivosidenib/&quot;},{&quot;label&quot;:&quot;Jiang_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ivosidenib — `Ivosidenib_Jiang2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit.

<div class="pk-model-meta" hidden drug="ivosidenib" model-id="Ivosidenib_Jiang2021_reference" status="needs_review" stale="false" population="patients with IDH1-mutant advanced hematologic malignancies" measured-compound="ivosidenib" parameterization="apparent" topology="2C"></div>

## Citation
Jiang X, Wada R, Poland B, Kleijn HJ, Fan B, Liu G et al. Population pharmacokinetic and exposure-response analyses of ivosidenib in patients with IDH1-mutant advanced hematologic malignancies. Clinical and translational science 14(3):942–953 (2021).
  ·  DOI: [10.1111/cts.12959](https://doi.org/10.1111/cts.12959)

## Population and dosing

**Population:** patients with IDH1-mutant advanced hematologic malignancies · condition advanced hematologic malignancies (AML) · age group adult · n = 253.

**Dosing:** 100, 300, 500, 800, 1200 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Steady‐state CL/F, L/h | CL/F | 5.39 | L/h |
| Steady‐state Vc/F, L | V1/F | 234 | L |
| Steady‐state Q/F, L/h | Q/F | 15.8 | L/h |
| Steady‐state Vp/F, L | V2/F | 151 | L |
| ka, 1/h | kabs | 1.38 | 1/h |
| Tlag, h | tlag | 0.27 | h |
| Steady‐state fold change in Frel | Frel | 0.50 |  |
| Steady‐state fold change in CL | CL | 1.66 |  |
| dose_frel_exponent | dose_frel_exponent | -0.49 |  |
| baseline_albumin_cl_f_exponent | baseline_albumin_cl_f_exponent | 0.82 |  |
| baseline_albumin_vc_f_exponent | baseline_albumin_vc_f_exponent | 0.73 |  |
| theta_q319_wt_power | theta_q319_wt_power | 0.92 |  |
| theta_cl_f_albumin_power | theta_cl_f_albumin_power | 0.99 |  |
| theta_v1_f_albumin_power | theta_v1_f_albumin_power | 1.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.074). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — ivosidenib: CL/F 5.39 L/h, V1/F 234 L, Q/F 15.8 L/h, V2/F 151 L, kabs 1.38 1/h, tlag 0.27 h, Frel 0.5, CL 1.66.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ivosidenib, the second reading unknown; it also differs on 24 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Steady‐state CL/F, L/h | `Q27` · CL/F | 5.39 | L/h | 1.497e-06 | m3/s | l/h | llm_confirmed (0.6) | cts12959-tbl-0001:row2:col1, cts12959-tbl-0001:row2:col2, cts12959-tbl-0001:row2:col3, cts12959-tbl-0001:row2:col4 |
| Steady‐state Vc/F, L | `Q290` · V1/F | 234 | L | 0.234 | m3 | l | llm_confirmed (0.6) | cts12959-tbl-0001:row3:col1, cts12959-tbl-0001:row3:col2, cts12959-tbl-0001:row3:col3, cts12959-tbl-0001:row3:col4 |
| Steady‐state Q/F, L/h | `Q69` · Q/F | 15.8 | L/h | 4.389e-06 | m3/s | l/h | llm_confirmed (0.6) | cts12959-tbl-0001:row4:col1, cts12959-tbl-0001:row4:col2 |
| Steady‐state Vp/F, L | `Q82` · V2/F | 151 | L | 0.151 | m3 | l | llm_confirmed (0.6) | cts12959-tbl-0001:row5:col1, cts12959-tbl-0001:row5:col2 |
| ka, 1/h | `Q49` · kabs | 1.38 | 1/h | 0.0003833 | 1/s | 1/h | exact (1) | cts12959-tbl-0001:row10:col1, cts12959-tbl-0001:row10:col2, cts12959-tbl-0001:row10:col3, cts12959-tbl-0001:row10:col4 |
| Tlag, h | `Q83` · tlag | 0.27 | h | 972 | s | h | exact (1) | cts12959-tbl-0001:row11:col1, cts12959-tbl-0001:row11:col2 |
| Steady‐state fold change in Frel | `Q87` · Frel | 0.50 |  |  |  |  | llm_confirmed (0.6) | cts12959-tbl-0001:row12:col1, cts12959-tbl-0001:row12:col2 |
| Steady‐state fold change in CL | `Q22` · CL | 1.66 |  |  |  |  | llm_confirmed (0.6) | cts12959-tbl-0001:row13:col1, cts12959-tbl-0001:row13:col2 |
| dose_frel_exponent | `Q900` · dose_frel_exponent | -0.49 |  |  |  |  |  | cts12959-tbl-0001:row14:col1, cts12959-tbl-0001:row14:col2 |
| baseline_albumin_cl_f_exponent | `Q900` · baseline_albumin_cl_f_exponent | 0.82 |  |  |  |  |  | cts12959-tbl-0001:row16:col1, cts12959-tbl-0001:row16:col2 |
| baseline_albumin_vc_f_exponent | `Q900` · baseline_albumin_vc_f_exponent | 0.73 |  |  |  |  |  | cts12959-tbl-0001:row18:col1, cts12959-tbl-0001:row18:col2 |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.92 |  |  |  |  |  | cts12959-tbl-0001:row15:col1, cts12959-tbl-0001:row15:col2 |
| theta_cl_f_albumin_power | `Q900` · theta_cl_f_albumin_power | 0.99 |  |  |  |  |  | cts12959-tbl-0001:row17:col1, cts12959-tbl-0001:row17:col2 |
| theta_v1_f_albumin_power | `Q900` · theta_v1_f_albumin_power | 1.1 |  |  |  |  |  | cts12959-tbl-0001:row19:col1, cts12959-tbl-0001:row19:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'fixed effect' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'between‐patient variability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q27 ('First‐dose CL/F, L/h', value '1.63') — already have one for this compound
- dropped duplicate Q290 ('First‐dose Vc/F, L', value '71') — already have one for this compound
- dropped duplicate Q69 ('First‐dose Q/F, L/h', value '4.8') — already have one for this compound
- dropped duplicate Q82 ('First‐dose Vp/F, L', value '46') — already have one for this compound
- covariate level 'Dose‐Frel exponent' → Q900:dose_frel_exponent = -0.49 (power on Q27)
- covariate level 'Baseline albumin‐CL/F exponent' → Q900:baseline_albumin_cl_f_exponent = 0.82 (power on Q27)
- covariate level 'Baseline albumin‐Vc/F exponent' → Q900:baseline_albumin_vc_f_exponent = 0.73 (power on Q27)
- dropped duplicate Q22 ('Fold change in CL with voriconazole', value '0.64') — already have one for this compound
- dropped unlinked row (NIL): 'Fold change in CL with fluconazole' — extend the ontology if this is a real PK parameter (source ['cts12959-tbl-0001:row21:col1', 'cts12959-tbl-0001:row21:col2'])
- dropped duplicate Q22 ('Fold change in CL with posaconazole', value '0.65') — already have one for this compound
- dropped unlinked row (NIL): 'Fold change in CL with other moderate/strong CYP3A inhibitors' — extend the ontology if this is a real PK parameter (source ['cts12959-tbl-0001:row23:col1', 'cts12959-tbl-0001:row23:col2'])
- dropped unlinked row (NIL): 'Fold change in CL with mild CYP3A inhibitors' — extend the ontology if this is a real PK parameter (source ['cts12959-tbl-0001:row24:col1', 'cts12959-tbl-0001:row24:col2'])
- dropped unlinked row (NIL): 'Log‐additive CV%' — extend the ontology if this is a real PK parameter (source ['cts12959-tbl-0001:row25:col1', 'cts12959-tbl-0001:row25:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ivosidenib

**Extraction notes:**
- LLM selected parameter table(s) 1
- skipped illustrative/example figure caption(s) cts12959-fig-0001 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.074 (2/27 fields) | 25 |

<details><summary>25 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[baseline_albumin_cl_f_exponent]` | 0.82 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[baseline_albumin_vc_f_exponent]` | 0.73 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose_frel_exponent]` | -0.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 1.38 | 7 | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state cl/f].covariate_forms` | ['power', 'power', 'power', 'power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state cl/f].value` | 5.39 | 6 | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state fold change in cl].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state fold change in cl].parameter_id` | Q22 | Q31 | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state fold change in cl].value` | 1.66 | 11 | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state fold change in frel].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state fold change in frel].value` | 0.50 | 7 | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state q/f].value` | 15.8 | 19 | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state vc/f].covariate_forms` | ['power'] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state vc/f].value` | 234 | 6 | mismatch |
| `gpt-oss-120b` | `parameters[steady‐state vp/f].value` | 151 | 22 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_albumin_power]` | 0.99 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_ratio_albumin_power]` |  | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_weight_power]` |  | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_albumin_power]` |  | 20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` | 0.92 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_albumin_power].value` | 1.1 | 38 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_f_wt_power]` |  | 13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag].value` | 0.27 | 11 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | ivosidenib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ivosidenib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts12959-tbl-0001:row2:col1', 'cts12959-tbl-0001:row2:col2', 'cts12959-tbl-0001:row2:col3', 'cts12959-tbl-0001:row2:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cts12959-tbl-0001:row3:col1', 'cts12959-tbl-0001:row3:col2', 'cts12959-tbl-0001:row3:col3', 'cts12959-tbl-0001:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts12959-tbl-0001:row10:col1', 'cts12959-tbl-0001:row10:col2', 'cts12959-tbl-0001:row10:col3', 'cts12959-tbl-0001:row10:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cts12959-tbl-0001:row4:col1', 'cts12959-tbl-0001:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cts12959-tbl-0001:row5:col1', 'cts12959-tbl-0001:row5:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts12959-tbl-0001:row11:col1', 'cts12959-tbl-0001:row11:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['cts12959-tbl-0001:row13:col1', 'cts12959-tbl-0001:row13:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.39 L/h | ['cts12959-tbl-0001:row2:col1', 'cts12959-tbl-0001:row2:col2', 'cts12959-tbl-0001:row2:col3', 'cts12959-tbl-0001:row2:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 234 L | ['cts12959-tbl-0001:row3:col1', 'cts12959-tbl-0001:row3:col2', 'cts12959-tbl-0001:row3:col3', 'cts12959-tbl-0001:row3:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 151 L | ['cts12959-tbl-0001:row5:col1', 'cts12959-tbl-0001:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bivosidenib%5D%20Ivosidenib_Jiang2021_reference&body=Drug%3A%20ivosidenib%0ARecord%3A%20Ivosidenib_Jiang2021_reference%0APaper%3A%20Jiang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ivosidenib/Ivosidenib_Jiang2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 20:47 UTC</sub>
