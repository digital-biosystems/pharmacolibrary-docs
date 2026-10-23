<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03B&quot;,&quot;href&quot;:&quot;atc/G03B.md&quot;},{&quot;label&quot;:&quot;testosterone&quot;,&quot;href&quot;:&quot;drugs/drug_testosterone/&quot;},{&quot;label&quot;:&quot;Pastuszak_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# testosterone — `Testosterone_Pastuszak2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The intercompartmental clearance of 10 L/h for testosterone was rejected because its unit could not be converted to standard SI units.

<div class="pk-model-meta" hidden drug="testosterone" model-id="Testosterone_Pastuszak2021_reference" status="rejected" stale="false" population="adult males with hypogonadism" measured-compound="testosterone" parameterization="apparent" topology="1C"></div>

## Citation
Pastuszak AW, Bush M, Curd L, Vijayan S, Priestley T, Xiang Q et al. Population Pharmacokinetic Modeling and Simulations to Evaluate a Potential Dose Regimen of Testosterone Undecanoate in Hypogonadal Males. Journal of clinical pharmacology 61(12):1618–1625 (2021).
  ·  DOI: [10.1002/jcph.1939](https://doi.org/10.1002/jcph.1939)

## Population and dosing

**Population:** adult males with hypogonadism · condition hypogonadism · age group adult · n = 117.

**Dosing:** 750 mg, im, multiple, every 240 h.

**Dosed compound ≠ measured compound:** dosed testosterone undecanoate, measured testosterone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F, L/h | CLm/F | 197 | L/h | 6.9 |
| Ka, L/h | kabs | 0.001 | L/h | 8.6 |
| Rss, mg/h | CLm/F | 0.572 | mg/h | 9.6 |
| K1, L/h | Q | 10 | L/h |  |
| theta_q319_weight_power | theta_q319_weight_power | 0.75 |  |  |
| theta_kabs_weight_power | theta_kabs_weight_power | -1.83 |  | 12.0 |
| theta_q319_weight_power | theta_q319_weight_power | 1.0 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.55). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intercompartmental clearance of 10 L/h for testosterone was rejected because its unit could not be converted to standard SI units.**

The record lists the intercompartmental clearance parameter as 10 L/h. Because this specific unit format was not recognized for conversion to standard SI units, the parameter lacked a valid value. This prevented the model from establishing the correct dimensional relationships required for structural validation. Extracted — testosterone: CLm/F 197 L/h, kabs 0.001 L/h, CLm/F 0.572 mg/h, Q 10 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has testosterone undecanoate, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q351` · CLm/F | 197 | L/h | 5.472e-05 | m3/s | l/h | 6.9 | exact (1) | jcph1939-tbl-0002:row2:col1 |
| Ka, L/h | `Q49` · kabs | 0.001 | L/h |  |  | l/h | 8.6 | exact (1) | jcph1939-tbl-0002:row4:col1 |
| Rss, mg/h | `Q351` · CLm/F | 0.572 | mg/h |  |  | mg/h | 9.6 | llm (0.6) | jcph1939-tbl-0002:row6:col1 |
| K1, L/h | `Q30` · Q | 10 | L/h | 2.778e-06 | m3/s | l/h |  | llm (0.6) | jcph1939-tbl-0002:row7:col1, jcph1939-tbl-0002:row7:col2 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.75 |  |  |  |  |  |  | jcph1939-tbl-0002:row9:col1, jcph1939-tbl-0002:row9:col2 |
| theta_kabs_weight_power | `Q900` · theta_kabs_weight_power | -1.83 |  |  |  |  | 12.0 |  | jcph1939-tbl-0002:row11:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.0 |  |  |  |  |  |  | jcph1939-tbl-0002:row12:col1, jcph1939-tbl-0002:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Proportional residual error, %' routed out of structural estimates ('Interindividual variability Ka, % CV')
- table section iiv: 'Additive residual error SE, ng/dL' routed out of structural estimates ('Interindividual variability Ka, % CV')
- unit_dimension_mismatch: 'Ka, L/h' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Rb, mg/h' — extend the ontology if this is a real PK parameter (source ['jcph1939-tbl-0002:row5:col1'])
- unit_dimension_mismatch: 'Rss, mg/h' → Q22 (unit '[mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'K2, L/h' — extend the ontology if this is a real PK parameter (source ['jcph1939-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'SHBG, CL/F (power)' — extend the ontology if this is a real PK parameter (source ['jcph1939-tbl-0002:row10:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- metabolite testosterone: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite testosterone: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=testosterone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 2 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph1939-tbl-0002:row2:col2 = '198 (174 to 227)'
- unparsed cell jcph1939-tbl-0002:row4:col2 = '0.001 (0.001 to 0.002)'
- unparsed cell jcph1939-tbl-0002:row5:col2 = '0.446 (0.378 to 0.531)'
- unparsed cell jcph1939-tbl-0002:row6:col2 = '0.575 (0.483 to 0.697)'
- unparsed cell jcph1939-tbl-0002:row8:col2 = '0.000733 (0.000535 to 0.000982)'
- unparsed cell jcph1939-tbl-0002:row10:col2 = '–0.219 (–0.299 to –0.144)'
- unparsed cell jcph1939-tbl-0002:row11:col2 = '–1.83 (–2.27 to –1.38)'
- unparsed cell jcph1939-tbl-0002:row15:col2 = '18.7 (16.4 to 21.1)'
- unparsed cell jcph1939-tbl-0002:row16:col2 = '56.7 (45.6 to 66.5)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.55 (11/20 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[k1].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[k2]` |  | 0.000727 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rss]` | 0.572 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight_power]` |  | -0.219 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_weight_power]` |  | 1.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | testosterone undecanoate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | testosterone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph1939-tbl-0002:row7:col1', 'jcph1939-tbl-0002:row7:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['jcph1939-tbl-0002:row2:col1'] |
| C5_dimension_Q351 | fail | [mass] / [time] | mg/h | ['jcph1939-tbl-0002:row6:col1'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['jcph1939-tbl-0002:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btestosterone%5D%20Testosterone_Pastuszak2021_reference&body=Drug%3A%20testosterone%0ARecord%3A%20Testosterone_Pastuszak2021_reference%0APaper%3A%20Pastuszak_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_testosterone/Testosterone_Pastuszak2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:30 UTC</sub>
