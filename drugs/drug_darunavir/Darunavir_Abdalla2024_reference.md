<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;darunavir&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/&quot;},{&quot;label&quot;:&quot;Abdalla_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Darunavir_Courlet2021_reference&quot;,&quot;label&quot;:&quot;Courlet_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Courlet2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Darunavir_Stillemans2021_reference&quot;,&quot;label&quot;:&quot;Stillemans_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Stillemans2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# darunavir — `Darunavir_Abdalla2024_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-07 14:19 UTC (Reproduces with caveats), but the paper was screened again on 2026-10-07 15:42 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Accepted with a caveat: the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="darunavir" model-id="Darunavir_Abdalla2024_reference" status="rejected" stale="true" population="HIV-1 infected adolescents aged 12-18 years" measured-compound="darunavir" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Abdalla S, Compagnucci A, Riault Y, Chan MK, Bamford A, Nolan A et al. Simultaneous pharmacokinetic modeling of unbound and total darunavir with ritonavir in adolescents: a substudy of the SMILE trial. Antimicrobial agents and chemotherapy 68(2):e0100423 (2024).
  ·  DOI: [10.1128/aac.01004-23](https://doi.org/10.1128/aac.01004-23)

## Population and dosing

**Population:** HIV-1 infected adolescents aged 12-18 years · condition HIV-1 infection · age group adolescent · n = 152.

**Dosing:** 800 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| ka DRV (h -1 ) | kabs | 0.43 | h -1 | 21 |  |
| CL/F DRV, u (L/h) | CL/F | 169 | L/h | 4 | 29.3 (None% RSE) |
| V/F DRV, u (L) | V/F | 2601 | L | 18 | 76.1 (None% RSE) |
| K d, AAG (×10 -3 mmol/L) | KD | 0.85 |  | 10 |  |
| Θ HSA (L/mmol) | V | 5.54 | L/mmol | 25 |  |
| Unbound DRV concentrations | Ct | 40 | mg/L | 4 |  |
| theta_q314_weight | theta_q314_weight | 1 |  |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.524). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (fu), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has darunavir, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka DRV (h -1 ) | `Q49` · kabs | 0.43 | h -1 | 0.0001194 | 1/s | 1/h | 21 | llm_confirmed (0.6) | tab_1:row3:col1, tab_1:row3:col2 |  |
| CL/F DRV, u (L/h) | `Q27` · CL/F | 169 | L/h | 4.694e-05 | m3/s | l/h | 4 | llm_confirmed (0.6) | tab_1:row4:col1, tab_1:row4:col2 | 29.3 (None% RSE) |
| V/F DRV, u (L) | `Q76` · V/F | 2601 | L | 2.601 | m3 | l | 18 | llm_confirmed (0.6) | tab_1:row6:col1, tab_1:row6:col2 | 76.1 (None% RSE) |
| K d, AAG (×10 -3 mmol/L) | `Q331` · KD | 0.85 |  |  |  |  | 10 | llm (0.6) | tab_1:row8:col1, tab_1:row8:col2 |  |
| Θ HSA (L/mmol) | `Q61` · V | 5.54 | L/mmol |  |  | l/mM | 25 | llm (0.6) | tab_1:row9:col1, tab_1:row9:col2 |  |
| Unbound DRV concentrations | `Q75` · Ct | 40 | mg/L |  |  | mg/L | 4 | llm_corrected (0.6) | tab_1:row23:col1, tab_1:row23:col2 |  |
| theta_q314_weight | `Q900` · theta_q314_weight | 1 |  |  |  |  |  |  | tab_1:row13:col1, tab_1:row16:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F DRV,u' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'V/F DRV,u' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'CL/F RTV' routed out of structural estimates ('Inter-individual variability (CV%)')
- unit_dimension_mismatch: 'AUC RTV effect on CL/F DRV, u' → Q27 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('AUC RTV effect on CL/F DRV, u', value '-0.5') — already have one for this compound
- dropped unlinked row (NIL): 'N AAG' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1'])
- unit_dimension_mismatch: 'Θ HSA (L/mmol)' → Q61 (unit '[length] ** 3 / [substance]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q49 ('ka RTV (h -1 )', value '0.18') — already have one for this compound
- dropped duplicate Q27 ('CL/F RTV (L/h)', value '21.6') — already have one for this compound
- dropped duplicate Q76 ('V/F RTV (L)', value '105.7') — already have one for this compound
- dropped unlinked row (NIL): 'Total DRV concentrations' — extend the ontology if this is a real PK parameter (source ['tab_1:row24:col1', 'tab_1:row24:col2'])
- dropped duplicate Q75 ('RTV concentrations', value '50') — already have one for this compound
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'K d, AAG (×10 -3 mmol/L)' — the LLM proposed 'mmol/L', whose dimension does not fit Q331; left unset
- implicit units: 'Unbound DRV concentrations' → mg/L (from the paper text: "Concentrations in the paper are expressed in mg/L (e.g., 'WT EC 90 (0.00243 mg/L)' for unbound DRV trough concentrations")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=darunavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.524 (11/21 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['ritonavir', 'darunavir', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc rtv effect on cl/f drv]` |  | -0.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k d, aag]` | 0.85 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_weight]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[unbound drv concentrations].parameter_id` | Q75 | Q46 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | darunavir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | darunavir | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C5_dimension_Q61 | fail | [length] ** 3 / [substance] | L/mmol | ['tab_1:row9:col1', 'tab_1:row9:col2'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['tab_1:row23:col1', 'tab_1:row23:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_1:row6:col1', 'tab_1:row6:col2'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 |  | ['tab_1:row8:col1', 'tab_1:row8:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 169 L/h | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.6e+03 L | ['tab_1:row6:col1', 'tab_1:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=darunavir) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdarunavir%5D%20Darunavir_Abdalla2024_reference&body=Drug%3A%20darunavir%0ARecord%3A%20Darunavir_Abdalla2024_reference%0APaper%3A%20Abdalla_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_darunavir/Darunavir_Abdalla2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:42 UTC</sub>
