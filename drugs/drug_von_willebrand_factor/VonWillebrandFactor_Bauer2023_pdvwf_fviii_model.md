<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;von Willebrand factor&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/&quot;},{&quot;label&quot;:&quot;Bauer_2023 \u00b7 pdvwf_fviii_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VonWillebrandFactor_Schning2026_reference&quot;,&quot;label&quot;:&quot;Sch\u00f6ning_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Schning2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Valke2024_reference&quot;,&quot;label&quot;:&quot;Valke_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Valke2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Wong2025_reference&quot;,&quot;label&quot;:&quot;Wong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Wong2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Zhu2020_reference&quot;,&quot;label&quot;:&quot;Zhu_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Zhu2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Al2025_final&quot;,&quot;label&quot;:&quot;Al_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# von Willebrand factor — `VonWillebrandFactor_Bauer2023_pdvwf_fviii_model`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:42 UTC (Reproduces with caveats), but the paper was screened again on 2026-10-05 20:06 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Accepted with a caveat: the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="von Willebrand factor" model-id="VonWillebrandFactor_Bauer2023_pdvwf_fviii_model" status="rejected" stale="true" population="adults with von Willebrand disease" measured-compound="von Willebrand factor" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Bauer A, Friberg-Hietala S, Smania G, Wolfsegger M. Pharmacokinetic-Pharmacodynamic Comparison of Recombinant and Plasma-Derived von Willebrand Factor in Patients with von Willebrand Disease Type 3. Journal of blood medicine 14:399–411 (2023).
  ·  DOI: [10.2147/JBM.S395845](https://doi.org/10.2147/JBM.S395845)

## Population and dosing

**Population:** adults with von Willebrand disease · condition von Willebrand disease · age group adult · n = : 99.

**Dosing:** 50 IU/kg, iv, single.

**Dosed compound ≠ measured compound:** dosed recombinant von Willebrand factor, measured von Willebrand factor.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL, dL/h | CL | 4.14 | dL/h | 0.235 (None% RSE) |
| Vc, dL | V1 | 47.0 | dL | 0.373 (None% RSE) |
| Q, dL/h | Q | 4.47 | dL/h |  |
| Vp, dL | V2 | 19.3 | dL |  |
| wt_effect_on_cl_and_q | wt_effect_on_cl_and_q | 0.750 |  |  |
| wt_effect_on_vc_and_vp | wt_effect_on_vc_and_vp | 1.00 |  |  |
| Absorption rate constant (kapop) [h−1] | kabs | 0.5 | h−1 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has von Willebrand factor, the second reading VWF:RCo; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL, dL/h | `Q22` · CL | 4.14 | dL/h | 1.15e-07 | m3/s | dl/h | exact (1) | t0004:row3:col3, t0004:row3:col4 | 0.235 (None% RSE) |
| Vc, dL | `Q63` · V1 | 47.0 | dL | 0.0047 | m3 | dl | exact (1) | t0004:row4:col3, t0004:row4:col4 | 0.373 (None% RSE) |
| Q, dL/h | `Q30` · Q | 4.47 | dL/h | 1.242e-07 | m3/s | dl/h | exact (1) | t0004:row5:col3, t0004:row5:col4 |  |
| Vp, dL | `Q64` · V2 | 19.3 | dL | 0.00193 | m3 | dl | exact (1) | t0004:row6:col3, t0004:row6:col4 |  |
| wt_effect_on_cl_and_q | `Q900` · wt_effect_on_cl_and_q | 0.750 |  |  |  |  |  | t0004:row8:col3 |  |
| wt_effect_on_vc_and_vp | `Q900` · wt_effect_on_vc_and_vp | 1.00 |  |  |  |  |  | t0004:row9:col3 |  |
| Absorption rate constant (kapop) [h−1] | `Q49` · kabs | 0.5 | h−1 | 0.0001389 | 1/s | 1/h | review_gapfill (0.7) | Schöning_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'EVWF, VWD type 3, IU/dL' — extend the ontology if this is a real PK parameter (source ['t0004:row7:col3'])
- covariate level 'WT effect on CL and Q' → Q900:wt_effect_on_cl_and_q = 0.750 (linear_fractional on Q22)
- covariate level 'WT effect on Vc and Vp' → Q900:wt_effect_on_vc_and_vp = 1.00 (linear_fractional on Q22)
- dropped duplicate Q63 ('Hematocrit effect on Vc', value '-0.334') — already have one for this compound
- dropped PD-category row 'Baseline FVIII, IU/dLc,d' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row16:col3'])
- dropped PD-category row 'kout, h−1 c' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row17:col3'])
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row18:col3', 't0004:row18:col4'])
- dropped PD-category row 'IC50, IU/dL' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row19:col3', 't0004:row19:col4'])
- dropped unlinked row (NIL): 'Hematocrit effect on baseline FVIII' — extend the ontology if this is a real PK parameter (source ['t0004:row20:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=von Willebrand factor
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- population split: 'pdvwf/fviii model' subgroup of Bauer_2023 (paper reports 2 populations: pdvwf/fviii model, rvwf model)
- molar mass: none found for 'von_willebrand_factor' — its concentrations stay mass-only
- molar mass: none found for 'von Willebrand factor' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Schöning_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.429 (6/14 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['recombinant von willebrand factor', 'factor viii', 'interconversion'], ['plasma-derived von willebrand factor', 'factor viii', 'interconversion']] | [['recombinant von willebrand factor', 'vwf:rco activity', 'interconversion'], ['plasma-derived von willebrand factor/fviii concentrate', 'vwf:rco activity', 'interconversion'], ['plasma-derived von willebrand factor/fviii concentrate', 'factor viii', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[theta_cl_wt]` |  | 0.750 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v1_wt]` |  | 1.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[wt_effect_on_cl_and_q]` | 0.750 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[wt_effect_on_vc_and_vp]` | 1.00 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | von Willebrand factor | VWF:RCo | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0004:row3:col3', 't0004:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t0004:row5:col3', 't0004:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Schöning_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['t0004:row4:col3', 't0004:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['t0004:row6:col3', 't0004:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.14 | ['t0004:row3:col3', 't0004:row3:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.414 L/h | ['t0004:row3:col3', 't0004:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.7 L | ['t0004:row4:col3', 't0004:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.93 L | ['t0004:row6:col3', 't0004:row6:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=von_willebrand_factor) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 1.74 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvon_willebrand_factor%5D%20VonWillebrandFactor_Bauer2023_pdvwf_fviii_model&body=Drug%3A%20von_willebrand_factor%0ARecord%3A%20VonWillebrandFactor_Bauer2023_pdvwf_fviii_model%0APaper%3A%20Bauer_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_von_willebrand_factor/VonWillebrandFactor_Bauer2023_pdvwf_fviii_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 20:06 UTC</sub>
