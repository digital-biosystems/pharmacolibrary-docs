<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/&quot;},{&quot;label&quot;:&quot;Retlich_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# linagliptin — `Linagliptin_Retlich2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-05 00:17 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Kabs, t1/2ka , k13, Q/F, V, Cmax and KD have no unit.

<div class="pk-model-meta" hidden drug="linagliptin" model-id="Linagliptin_Retlich2015_reference" status="rejected" stale="true" population="patients with type 2 diabetes mellitus" measured-compound="linagliptin" parameterization="apparent" topology="2C"></div>

## Citation
Retlich S, Duval V, Graefe-Mody U, Friedrich C, Patel S, Jaehde U et al. Population Pharmacokinetics and Pharmacodynamics of Linagliptin in Patients with Type 2 Diabetes Mellitus. Clinical pharmacokinetics 54(7):737–750 (2015).
  ·  DOI: [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4)

## Population and dosing

**Population:** patients with type 2 diabetes mellitus · condition type 2 diabetes mellitus · age group adult · n = 607.

**Dosing:** 0.5, 1, 2.5, 5, 10 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K a,1 (1/h) | kabs | 0.933 | 1/h |
| K a,2 (1/h) | t1/2ka | 0.795 |  |
| K a,3 (1/h) | k13 | 0.441 | 1/h |
| V C/F (L) | V1/F | 715 | L |
| Q P/F (L/h)d | Q/F | 412 | L/h |
| V P/F (L)d | V | 1650 | L |
| CL/F (L/h) | CL/F | 258 | L/h |
| B max,C (nmol/L) | Bmax | 4.97 | nmol/L |
| DPP_B max,C g | Cmax | 0.00332 |  |
| K d (nmol/L)d | KD | 0.0652 |  |
| Corr F_CL | CL | -0.765 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.409). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kabs, t1/2ka , k13, Q/F, V, Cmax and KD have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Bmax), so that value has no SI equivalent. Extracted — linagliptin: kabs 0.933, t1/2ka 0.795, k13 0.441, V1/F 715 L, Q/F 412, V 1.65e+03, CL/F 258 L/h, Bmax 4.97 nmol/L, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has linagliptin, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K a,1 (1/h) | `Q49` · kabs | 0.933 | 1/h | 0.0002592 | 1/s | 1/h | llm (0.6) | Tab4:row5:col1 |
| K a,2 (1/h) | `Q95` · t1/2ka | 0.795 |  |  |  |  | llm (0.6) | Tab4:row6:col1 |
| K a,3 (1/h) | `Q303` · k13 | 0.441 | 1/h | 0.0001225 | 1/s | 1/h | llm (0.6) | Tab4:row7:col1, Tab4:row7:col2 |
| V C/F (L) | `Q290` · V1/F | 715 | L | 0.715 | m3 | l | space_fold (0.95) | Tab4:row9:col1 |
| Q P/F (L/h)d | `Q69` · Q/F | 412 | L/h | 0.0001144 | m3/s | L/h | llm (0.6) | Tab4:row10:col1 |
| V P/F (L)d | `Q61` · V | 1650 | L | 1.65 | m3 | L | llm (0.6) | Tab4:row11:col1 |
| CL/F (L/h) | `Q27` · CL/F | 258 | L/h | 7.167e-05 | m3/s | l/h | exact (1) | Tab4:row12:col1 |
| B max,C (nmol/L) | `Q332` · Bmax | 4.97 | nmol/L |  |  | nM/l | llm (0.6) | Tab4:row14:col1 |
| DPP_B max,C g | `Q32` · Cmax | 0.00332 |  |  |  |  | llm (0.6) | Tab4:row15:col1 |
| K d (nmol/L)d | `Q331` · KD | 0.0652 |  |  |  |  | llm (0.6) | Tab4:row19:col1 |
| Corr F_CL | `Q22` · CL | -0.765 |  |  |  |  | llm (0.6) | Tab4:row23:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ prop,phase 2a (%)h' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ prop,phase 2b (%)h' routed out of structural estimates ('Residual variability')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'F in study 4 (%)' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col1'])
- dropped unlinked row (NIL): 'Weight_F b' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col1'])
- dropped unlinked row (NIL): 'Dose_K a c' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col1', 'Tab4:row8:col2'])
- dropped unlinked row (NIL): 'GGT_CLe,f' — extend the ontology if this is a real PK parameter (source ['Tab4:row13:col1'])
- dropped duplicate Q32 ('Dose_B max,C g', value '3.41') — already have one for this compound
- dropped unlinked row (NIL): 'Age_B max,C g' — extend the ontology if this is a real PK parameter (source ['Tab4:row17:col1'])
- dropped duplicate Q32 ('Sex_B max,C e', value '0.457') — already have one for this compound
- dropped unlinked row (NIL): 'A max,P/F (nmol)d' — extend the ontology if this is a real PK parameter (source ['Tab4:row20:col1'])
- dropped unlinked row (NIL): 'πF (CV %)' — extend the ontology if this is a real PK parameter (source ['Tab4:row28:col1'])
- implicit units: 'K a,1 (1/h)' → 1/h (from the paper text: "Table 4 lists the parameter as 'K a,1 (1/h)' with value 0.933.")
- implicit units: 'K a,2 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q95; left unset
- implicit units: 'K a,3 (1/h)' → 1/h (from the paper text: "Table 4 lists the parameter as 'K a,3 (1/h)' with value 0.441.")
- implicit units: 'Q P/F (L/h)d' → L/h (from the paper text: "Table 4 lists the parameter as 'Q P/F (L/h)d' with value 412.")
- implicit units: 'V P/F (L)d' → L (from the paper text: "Table 4 lists the parameter as 'V P/F (L)d' with value 1,650.")
- implicit units: 'DPP_B max,C g' — the LLM proposed 'nmol/L', whose dimension does not fit Q32; left unset
- implicit units: 'K d (nmol/L)d' — the LLM proposed 'nmol/L', whose dimension does not fit Q331; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=linagliptin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row3:col2 = 'Typical relative bioavailability in study 4'
- unparsed cell Tab4:row5:col2 = 'Typical absorption rate constant study 1 (powder in bottle formulation)'
- unparsed cell Tab4:row6:col2 = 'Typical absorption rate constant study 2 (tablet formulation 1)'
- unparsed cell Tab4:row15:col2 = 'Percentage change in B max,C per RFU change from the median DPP-4 activity of the population'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.409 (9/22 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `model.links` | [] | [['linagliptin', 'dpp-4 activity', 'binding']] | mismatch |
| `gpt-oss-120b` | `parameters[corr f_cl]` | -0.765 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose_b max,c g]` |  | 3.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f in study 4]` |  | 169 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ggt_cle,f]` |  | -0.0339 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a,2]` | 0.795 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a,3]` | 0.441 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p/f (l)d].parameter_id` | Q61 | Q78 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | linagliptin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | linagliptin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q22 | fail |  | -0.765 |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab4:row12:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab4:row9:col1'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['Tab4:row7:col1', 'Tab4:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab4:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab4:row11:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab4:row10:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Tab4:row23:col1'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['Tab4:row15:col1'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 |  | ['Tab4:row19:col1'] |
| C5_unit_missing_Q95 | fail | [time] |  | ['Tab4:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 258 L/h | ['Tab4:row12:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 715 L | ['Tab4:row9:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.65e+03 L | ['Tab4:row11:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blinagliptin%5D%20Linagliptin_Retlich2015_reference&body=Drug%3A%20linagliptin%0ARecord%3A%20Linagliptin_Retlich2015_reference%0APaper%3A%20Retlich_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_linagliptin/Linagliptin_Retlich2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 00:17 UTC</sub>
