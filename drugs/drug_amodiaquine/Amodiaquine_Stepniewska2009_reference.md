<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/&quot;},{&quot;label&quot;:&quot;Stepniewska_2009 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amodiaquine — `Amodiaquine_Stepniewska2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The amodiaquine record was rejected because the metabolism link from amodiaquine to its metabolite desethylamodiaquine carries no parameter value, leaving the metabolite formation unquantified and desethylamodiaquine effectively unlinked from the dose.

<div class="pk-model-meta" hidden drug="amodiaquine" model-id="Amodiaquine_Stepniewska2009_reference" status="rejected" stale="false" population="African children with acute uncomplicated falciparum malaria" measured-compound="desethylamodiaquine" parameterization="apparent" topology="general_linear"></div>

## Citation
Stepniewska K, Taylor W, Sirima SB, Ouedraogo EB, Ouedraogo A, Gansané A et al. Population pharmacokinetics of artesunate and amodiaquine in African children. Malaria journal 8:200 (2009).
  ·  DOI: [10.1186/1475-2875-8-200](https://doi.org/10.1186/1475-2875-8-200)

## Population and dosing

**Population:** African children with acute uncomplicated falciparum malaria · condition acute uncomplicated falciparum malaria · age group child · n = 70.

**Dosing:** 25, 50, 67.5, 153 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed amodiaquine, measured desethylamodiaquine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka (h -1) | kabs | 4.271 | h -1 | 2.091 |
| CL/F1 (L kg-1 h-1) | CL | 0.616 | L kg-1 h-1 | 0.075 |
| V/F (L kg-1) | V1/F | 2.134 | L kg-1 | 0.317 |
| Ka (h-1) | kabs | 0.13 | h-1 | 2.587 |
| CL/F (L kg-1 h-1) | CLm/F | 0.610 | L kg-1 h-1 | 0.038 |
| Q (L kg-1 h-1) | Q | 0.680 | L kg-1 h-1 | 0.306 |
| Vcentral/F (L kg-1) | V1/F | 35.4 | L kg-1 | 11.5 |
| Vperipheral/F (L kg-1) | V2/F | 87.9 | L kg-1 | 17.1 |
| theta_q27_category | theta_q27_category | 0.662 |  | 0.160 |
| theta_q76_age | theta_q76_age | 0.063 |  | 0.015 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The amodiaquine record was rejected because the metabolism link from amodiaquine to its metabolite desethylamodiaquine carries no parameter value, leaving the metabolite formation unquantified and desethylamodiaquine effectively unlinked from the dose.**

The link from amodiaquine to desethylamodiaquine (relation: metabolism) has link_parameter 'none' with unknown kind, so no formation rate connects the parent to the metabolite; the same missing-parameter problem affects the artesunate-to-dihydroartemisinin hydrolysis link. The metabolite desethylamodiaquine itself has reported parameters (kabs 0.13 h-1, CLm/F 0.610 L kg-1 h-1, Q 0.680 L kg-1 h-1, V1/F 35.4 L kg-1, V2/F 87.9 L kg-1), but without a quantified formation step it cannot be reached from the administered amodiaquine dose. The record was therefore held back for an unlinked metabolite. Extracted — dihydroartemisinin: kabs 4.27 h -1, CL 0.616 L kg-1 h-1, V1/F 2.13 L kg-1; desethylamodiaquine: kabs 0.13 h-1, CLm/F 0.61 L kg-1 h-1, Q 0.68 L kg-1 h-1, V1/F 35.4 L kg-1, V2/F 87.9 L kg-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl/f: this record has 0.610, the second reading none; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka (h -1) | `Q49` · kabs | 4.271 | h -1 | 0.001186 | 1/s | 1/h | 2.091 | exact (1) | T4:row2:col1 |
| CL/F1 (L kg-1 h-1) | `Q22` · CL | 0.616 | L kg-1 h-1 | 1.198e-05 | m3/s | l/(h·kg) | 0.075 | exact (1) | T4:row3:col1, T4:row14:col1 |
| V/F (L kg-1) | `Q290` · V1/F | 2.134 | L kg-1 | 0.1494 | m3 | l/kg | 0.317 | exact (1) | T4:row5:col1, T4:row16:col1 |
| Ka (h-1) | `Q49` · kabs | 0.13 | h-1 | 3.611e-05 | 1/s | 1/h | 2.587 | exact (1) | T4:row13:col1, Stepniewska_2009_table_3:row0:col1 |
| CL/F (L kg-1 h-1) | `Q351` · CLm/F | 0.610 | L kg-1 h-1 | 1.186e-05 | m3/s | l/(h·kg) | 0.038 | exact (1) | Stepniewska_2009_table_3:row1:col1 |
| Q (L kg-1 h-1) | `Q30` · Q | 0.680 | L kg-1 h-1 | 1.322e-05 | m3/s | l/(h·kg) | 0.306 | exact (1) | Stepniewska_2009_table_3:row2:col1 |
| Vcentral/F (L kg-1) | `Q290` · V1/F | 35.4 | L kg-1 | 2.478 | m3 | l/kg | 11.5 | exact (1) | Stepniewska_2009_table_3:row3:col1 |
| Vperipheral/F (L kg-1) | `Q82` · V2/F | 87.9 | L kg-1 | 6.153 | m3 | l/kg | 17.1 | exact (1) | Stepniewska_2009_table_3:row4:col1 |
| theta_q27_category | `Q900` · theta_q27_category | 0.662 |  |  |  |  | 0.160 |  | T4:row4:col1, T4:row15:col1 |
| theta_q76_age | `Q900` · theta_q76_age | 0.063 |  |  |  |  | 0.015 |  | T4:row6:col1, T4:row17:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- metabolite desethylamodiaquine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desethylamodiaquine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 11 linked by role; re-tagged dihydroartemisinin→desethylamodiaquine ×7
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T4:row5:col2 = '47%'
- unparsed cell T4:row16:col2 = '48%'
- unparsed cell Stepniewska_2009_table_3:row1:col2 = '22.7%'
- companion parameter table 3 transcribed (6 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (4/24 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f1]` |  | 0.616 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f1]` | 0.616 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 0.610 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 0.610 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | 2.587 | 2.091 | mismatch |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | 2.091 | 2.587 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 0.13 | 4.271 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 4.271 | 0.13 | mismatch |
| `gpt-oss-120b` | `parameters[q]` | 0.680 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 0.680 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_category]` |  | 0.662 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_category]` | 0.662 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_age]` |  | 0.063 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_age]` | 0.063 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 2.134 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 2.134 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcentral/f]` | 35.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcentral/f]` |  | 35.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vperipheral/f]` | 87.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vperipheral/f]` |  | 87.9 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row3:col1', 'T4:row14:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T4:row5:col1', 'T4:row16:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Stepniewska_2009_table_3:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Stepniewska_2009_table_3:row2:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Stepniewska_2009_table_3:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T4:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T4:row13:col1', 'Stepniewska_2009_table_3:row0:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Stepniewska_2009_table_3:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 43.1 L/h | ['T4:row3:col1', 'T4:row14:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 149 L | ['T4:row5:col1', 'T4:row16:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.48e+03 L | ['Stepniewska_2009_table_3:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 6.15e+03 L | ['Stepniewska_2009_table_3:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamodiaquine%5D%20Amodiaquine_Stepniewska2009_reference&body=Drug%3A%20amodiaquine%0ARecord%3A%20Amodiaquine_Stepniewska2009_reference%0APaper%3A%20Stepniewska_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:41 UTC</sub>
