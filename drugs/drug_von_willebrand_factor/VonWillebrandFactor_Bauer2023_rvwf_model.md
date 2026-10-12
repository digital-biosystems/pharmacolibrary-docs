<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;von Willebrand factor&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/&quot;},{&quot;label&quot;:&quot;Bauer_2023 \u00b7 rvwf_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VonWillebrandFactor_Schning2026_reference&quot;,&quot;label&quot;:&quot;Sch\u00f6ning_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Schning2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Valke2024_reference&quot;,&quot;label&quot;:&quot;Valke_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Valke2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Wong2025_reference&quot;,&quot;label&quot;:&quot;Wong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Wong2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Zhu2020_reference&quot;,&quot;label&quot;:&quot;Zhu_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Zhu2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Al2025_final&quot;,&quot;label&quot;:&quot;Al_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# von Willebrand factor — `VonWillebrandFactor_Bauer2023_rvwf_model`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has von Willebrand factor, the second reading VWF:RCo; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `accepted_with_caveats` (reviewed 2026-09-28 14:42:07.760702+00:00) predates the upstream re-run (2026-10-05 20:06:14.623010+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `recombinant von Willebrand factor`, measured `von Willebrand factor`.

## Citation
Bauer A et al., Pharmacokinetic-Pharmacodynamic Compari…, Journal of blood medicine (2023)
  ·  DOI: [10.2147/JBM.S395845](https://doi.org/10.2147/JBM.S395845)

<div class="pk-model-meta" hidden drug="von Willebrand factor" model-id="VonWillebrandFactor_Bauer2023_rvwf_model" status="rejected" stale="true" population="adults with von Willebrand disease" measured-compound="von Willebrand factor" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, dL/h | `Q22` · CL | 2.10 | dL/h | 5.833333333333333e-08 | [dl] / [h] | not captured | exact (1.0) | t0004:row3:col1, t0004:row3:col2 | — | 0.401 (None% RSE) |
| Vc, dL | `Q63` · V1 | 43.5 | dL | 0.004350000000000001 | [dl] | not captured | exact (1.0) | t0004:row4:col1, t0004:row4:col2 | — | 0.292 (None% RSE) |
| Q, dL/h | `Q30` · Q | 2.29 | dL/h | 6.361111111111111e-08 | [dl] / [h] | not captured | exact (1.0) | t0004:row5:col1, t0004:row5:col2 | — | not captured |
| Vp, dL | `Q64` · V2 | 15.8 | dL | 0.0015800000000000002 | [dl] | not captured | exact (1.0) | t0004:row6:col1, t0004:row6:col2 | — | not captured |
| wt_effect_on_cl_and_q | `Q900` · wt_effect_on_cl_and_q | 0.750 | not captured | not captured | not captured | not captured | not captured (not captured) | t0004:row8:col1 | — | not captured |
| wt_effect_on_vc_and_vp | `Q900` · wt_effect_on_vc_and_vp | 1.00 | not captured | not captured | not captured | not captured | not captured (not captured) | t0004:row9:col1 | — | not captured |
| Absorption rate constant (kapop) [h−1] | `Q49` · kabs | 0.5 | h−1 | 0.0001388888888888889 | 1/h | not captured | review_gapfill (0.7) | Schöning_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'EVWF, VWD type 3, IU/dL' — extend the ontology if this is a real PK parameter (source ['t0004:row7:col1'])
- covariate level 'WT effect on CL and Q' → Q900:wt_effect_on_cl_and_q = 0.750 (linear_fractional on Q22)
- covariate level 'WT effect on Vc and Vp' → Q900:wt_effect_on_vc_and_vp = 1.00 (linear_fractional on Q22)
- dropped duplicate Q63 ('Hematocrit effect on Vc', value '-0.334') — already have one for this compound
- dropped PD-category row 'Baseline FVIII, IU/dLc,d' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row16:col1'])
- dropped PD-category row 'kout, h−1 c' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row17:col1'])
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row18:col1'])
- dropped PD-category row 'IC50, IU/dL' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row19:col1'])
- dropped unlinked row (NIL): 'Hematocrit effect on baseline FVIII' — extend the ontology if this is a real PK parameter (source ['t0004:row20:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=von Willebrand factor
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'rvwf model' subgroup of Bauer_2023 (paper reports 2 populations: pdvwf/fviii model, rvwf model)
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
| `gpt-oss:120b` | not confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['recombinant von willebrand factor', 'factor viii', 'interconversion'], ['plasma-derived von willebrand factor', 'factor viii', 'interconversion']] | [['recombinant von willebrand factor', 'vwf:rco activity', 'interconversion'], ['plasma-derived von willebrand factor/fviii concentrate', 'vwf:rco activity', 'interconversion'], ['plasma-derived von willebrand factor/fviii concentrate', 'factor viii', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[theta_cl_wt]` | not captured | 0.750 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_wt]` | not captured | 1.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[wt_effect_on_cl_and_q]` | 0.750 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[wt_effect_on_vc_and_vp]` | 1.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | von Willebrand factor | VWF:RCo | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0004:row3:col1', 't0004:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0004:row5:col1', 't0004:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Schöning_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0004:row4:col1', 't0004:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0004:row6:col1', 't0004:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.1 | not captured | not captured | ['t0004:row3:col1', 't0004:row3:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.21 L/h | not captured | not captured | ['t0004:row3:col1', 't0004:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.35 L | not captured | not captured | ['t0004:row4:col1', 't0004:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.58 L | not captured | not captured | ['t0004:row6:col1', 't0004:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=von_willebrand_factor) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 1.74 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_von_willebrand_factor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bauer_2023` / `Bauer_2023::rvwf_model`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_von_willebrand_factor/models/modelica/VonWillebrandFactor_Bauer2023_rvwf_model.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_von_willebrand_factor/models/modelica/VonWillebrandFactor_Bauer2023_rvwf_model.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_von_willebrand_factor/models/modelica/VonWillebrandFactor_Bauer2023_rvwf_model.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 20:06 UTC</sub>
