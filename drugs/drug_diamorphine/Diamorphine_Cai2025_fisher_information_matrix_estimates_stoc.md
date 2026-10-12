<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;diamorphine&quot;,&quot;href&quot;:&quot;drugs/drug_diamorphine/&quot;},{&quot;label&quot;:&quot;Cai_2025 \u00b7 fisher_information_matrix_estimates_stochastic_approximation&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diamorphine — `Diamorphine_Cai2025_fisher_information_matrix_estimates_stoc`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Rejected because diamorphine model parameters carry implausible negative values: absorption rate constant kabs −1.85 1/h, bioavailability Fab −3.55, k12 −7.19, k21 −10.6, k13 −9.00, k31 −0.448 1/h, and morphine apparent clearance CLm,norm/F −9.98 L/h.**

All reported rate constants, the bioavailability and the morphine metabolite clearance are negative, which is pharmacokinetically impossible for first-order rate constants, fractions reaching systemic circulation, and clearance; the negative-clearance/volume check failed on these base values. The label 'stochastic approximation' for Fab's unit could not be converted to SI, so the bioavailability reached the model without an SI value. The volumes V1 (1.33 L) and V2 (2.84 L) are positive, but the remaining parameters are implausible as reported. Extracted — diamorphine: kabs -1.85 1/h, Fab -3.55 stochastic approximation, V1 1.33 L, V2 2.84 L, k12 -7.19 1/h, k21 -10.6 1/h, k31 -0.448 1/h, k13 -9 1/h; morphine: CLm,norm/F -9.98 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has none, the second reading 0.5564729359758813; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `diamorphine`, measured `morphine`.

## Citation
Cai L et al., Intranasal diamorphine population pharm…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13186](https://doi.org/10.1002/psp4.13186)

<div class="pk-model-meta" hidden drug="diamorphine" model-id="Diamorphine_Cai2025_fisher_information_matrix_estimates_stoc" status="rejected" stale="false" population="adults (model) with pediatric simulation for breakthrough pain" measured-compound="morphine" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CLm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K a [h−1 per 70 kg] | `Q49` · kabs | -1.85 | 1/h | -0.0005138888888888889 | 1/h | not captured | exact (1.0) | psp413186-tbl-0002:row2:col1, psp413186-tbl-0002:row2:col2, psp413186-tbl-0002:row2:col4 | — | not captured |
| F % [per 70 kg] | `Q40` · Fab | -3.55 | stochastic approximation | not captured | [s] · [tochasticapproximation] | not captured | llm (0.6) | psp413186-tbl-0002:row3:col1, psp413186-tbl-0002:row3:col2, psp413186-tbl-0002:row3:col4 | — | not captured |
| V 1 [L/per 70 kg] (=V 2) | `Q63` · V1 | 1.33 | L | 0.00133 | L | not captured | exact (1.0) | psp413186-tbl-0002:row4:col1, psp413186-tbl-0002:row4:col2, psp413186-tbl-0002:row4:col4 | — | not captured |
| V 3 [L/per 70 kg] | `Q64` · V2 | 2.84 | L | 0.00284 | L | not captured | exact (1.0) | psp413186-tbl-0002:row5:col1, psp413186-tbl-0002:row5:col2, psp413186-tbl-0002:row5:col4 | — | not captured |
| K 12 [h−1/per 70 kg] | `Q301` · k12 | -7.19 | 1/h | -0.0019972222222222223 | 1/h | not captured | llm (0.6) | psp413186-tbl-0002:row6:col1, psp413186-tbl-0002:row6:col2, psp413186-tbl-0002:row6:col4 | — | not captured |
| K 23 [h−1/per 70 kg] | `Q302` · k21 | -10.6 | 1/h | -0.0029444444444444444 | 1/h | not captured | llm (0.6) | psp413186-tbl-0002:row7:col1, psp413186-tbl-0002:row7:col2, psp413186-tbl-0002:row7:col4 | — | not captured |
| K 3p [h−1/per 70 kg] | `Q304` · k31 | -0.448 | 1/h | -0.00012444444444444444 | 1/h | not captured | llm (0.6) | psp413186-tbl-0002:row8:col1, psp413186-tbl-0002:row8:col2, psp413186-tbl-0002:row8:col4 | — | not captured |
| K p3 [h−1/per 70 kg] | `Q303` · k13 | -9.00 | 1/h | -0.0025 | 1/h | not captured | llm (0.6) | psp413186-tbl-0002:row9:col1, psp413186-tbl-0002:row9:col2, psp413186-tbl-0002:row9:col4 | — | not captured |
| CL [L/h/per 70 kg] | `Q375` · CLm,norm/F | -9.98 | L/h | -2.7722222222222223e-06 | L/h | not captured | exact (1.0) | psp413186-tbl-0002:row10:col1, psp413186-tbl-0002:row10:col2, psp413186-tbl-0002:row10:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'stochastic approximation' (kabs)
- unit_dimension_unknown: 'stochastic approximation' (Fab)
- unit_dimension_unknown: '=V 2' (V1)
- unit_dimension_unknown: 'stochastic approximation' (V2)
- unit_dimension_unknown: 'stochastic approximation' (k12)
- unit_dimension_unknown: 'stochastic approximation' (k21)
- unit_dimension_unknown: 'stochastic approximation' (k31)
- unit_dimension_unknown: 'stochastic approximation' (k13)
- unit_dimension_unknown: 'stochastic approximation' (CL)
- routed 'corr_V 1_K a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'K a [h−1 per 70 kg]' → 1/h (from the paper text: "Table lists 'K a [h−1 per 70 kg]' for the absorption rate constant (kabs).")
- implicit units: 'V 1 [L/per 70 kg] (=V 2)' → L (from the paper text: "Table lists 'V 1 [L/per 70 kg]' for the central volume of distribution; text also reports morphine central volumes in L ")
- implicit units: 'V 3 [L/per 70 kg]' → L (from the paper text: "Table lists 'V 3 [L/per 70 kg]' for the peripheral volume of distribution.")
- implicit units: 'K 12 [h−1/per 70 kg]' → 1/h (from the paper text: "Table lists 'K 12 [h−1/per 70 kg]' for the first-order transfer rate constant from central to peripheral compartment.")
- implicit units: 'K 23 [h−1/per 70 kg]' → 1/h (from the paper text: "Table lists 'K 23 [h−1/per 70 kg]' for the first-order transfer rate constant from peripheral to central compartment.")
- implicit units: 'K 3p [h−1/per 70 kg]' → 1/h (from the paper text: "Table lists 'K 3p [h−1/per 70 kg]' for the first-order transfer rate constant from the second peripheral compartment to ")
- implicit units: 'K p3 [h−1/per 70 kg]' → 1/h (from the paper text: "Table lists 'K p3 [h−1/per 70 kg]' for the first-order transfer rate constant from central to the second peripheral comp")
- implicit units: 'CL [L/h/per 70 kg]' → L/h (from the paper text: "Table lists 'CL [L/h/per 70 kg]'; text also reports clearance in L/h (132 L/h, 95% CI: 97–189 L/h).")
- metabolite morphine: Q22→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at route_to_review — not promoted
- population split: 'fisher information matrix estimates (stochastic approximation)' subgroup of Cai_2025 (paper reports 2 populations: fisher information matrix estimates (stochastic approximation), population value(estimation mode))
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 26 linked by role; re-tagged parent→morphine ×9
- review gap-fill skipped: this record measures 'morphine', not diamorphine — the review values are the parent's

**Extraction notes:**
- unparsed cell psp413186-tbl-0002:row2:col3 = '3.70 [1.67–4.63]'
- unparsed cell psp413186-tbl-0002:row3:col3 = '0.532 [0.504–0.592]'
- unparsed cell psp413186-tbl-0002:row4:col3 = '9.43 [5.17–12.5]'
- unparsed cell psp413186-tbl-0002:row5:col3 = '34.3 [29.8–38.7]'
- unparsed cell psp413186-tbl-0002:row6:col3 = '102 [83.6–127]'
- unparsed cell psp413186-tbl-0002:row7:col3 = '100 [91.6–115]'
- unparsed cell psp413186-tbl-0002:row8:col3 = '23.9 [23.3–24.6]'
- unparsed cell psp413186-tbl-0002:row9:col3 = '3.07 [2.14–3.42]'
- unparsed cell psp413186-tbl-0002:row10:col3 = '139 [123–164]'
- unparsed cell Cai_2025_table_S3:row1:col2 = '1 (MLE)'
- unparsed cell Cai_2025_table_S3:row2:col2 = '1 (MLE)'
- unparsed cell Cai_2025_table_S3:row3:col2 = '1 (MLE)'
- companion parameter table S3 transcribed (3 record(s))
- LLM selected parameter table(s) 2, S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (4/24 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | not captured | 0.5564729359758813 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | not captured | 26.0086 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl [l/h/per 70 kg]].value` | -9.98 | 97.05 | mismatch |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 57.3906 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f % [per 70 kg]].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[f % [per 70 kg]].value` | -3.55 | 0.40 | mismatch |
| `gpt-oss-120b` | `parameters[f]` | not captured | 0.5564729359758813 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 12 [h-1/per 70 kg]].parameter_id` | Q301 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[k 12 [h-1/per 70 kg]].value` | -7.19 | 70.92 | mismatch |
| `gpt-oss-120b` | `parameters[k 23 [h-1/per 70 kg]]` | -10.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23 [h-1/per 70 kg]]` | not captured | 73.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 3p [h-1/per 70 kg]]` | -0.448 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 3p [h-1/per 70 kg]]` | not captured | 16.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a [h-1 per 70 kg]].value` | -1.85 | 2.44 | mismatch |
| `gpt-oss-120b` | `parameters[k p3 [h-1/per 70 kg]]` | -9.00 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k34]` | not captured | 49.8731671036749 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k43]` | not captured | 5.59181439173388 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1 [l/per 70 kg]].value` | 1.33 | 6.32 | mismatch |
| `gpt-oss-120b` | `parameters[v 3 [l/per 70 kg]]` | 2.84 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 3 [l/per 70 kg]]` | not captured | 21.41 | only_one_extracted |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q375 | fail | not captured | -9.98 | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413186-tbl-0002:row6:col1', 'psp413186-tbl-0002:row6:col2', 'psp413186-tbl-0002:row6:col4'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413186-tbl-0002:row7:col1', 'psp413186-tbl-0002:row7:col2', 'psp413186-tbl-0002:row7:col4'] |
| C5_dimension_Q303 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413186-tbl-0002:row9:col1', 'psp413186-tbl-0002:row9:col2', 'psp413186-tbl-0002:row9:col4'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413186-tbl-0002:row8:col1', 'psp413186-tbl-0002:row8:col2', 'psp413186-tbl-0002:row8:col4'] |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413186-tbl-0002:row10:col1', 'psp413186-tbl-0002:row10:col2', 'psp413186-tbl-0002:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413186-tbl-0002:row2:col1', 'psp413186-tbl-0002:row2:col2', 'psp413186-tbl-0002:row2:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413186-tbl-0002:row4:col1', 'psp413186-tbl-0002:row4:col2', 'psp413186-tbl-0002:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413186-tbl-0002:row5:col1', 'psp413186-tbl-0002:row5:col2', 'psp413186-tbl-0002:row5:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.33 L | not captured | not captured | ['psp413186-tbl-0002:row4:col1', 'psp413186-tbl-0002:row4:col2', 'psp413186-tbl-0002:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.84 L | not captured | not captured | ['psp413186-tbl-0002:row5:col1', 'psp413186-tbl-0002:row5:col2', 'psp413186-tbl-0002:row5:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_diamorphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cai_2025` / `Cai_2025::fisher_information_matrix_estimates_stochastic_approximation`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:56 UTC</sub>
