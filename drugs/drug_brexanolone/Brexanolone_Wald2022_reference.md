<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;brexanolone&quot;,&quot;href&quot;:&quot;drugs/drug_brexanolone/&quot;},{&quot;label&quot;:&quot;Wald_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brexanolone — `Brexanolone_Wald2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 8.97e-05, model 6.95e-06); the model does not reproduce the paper's time of the peak (tmax) (paper 47.8, model 0.183).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax, Cavg, Css and AUCt), so that value has no SI equivalent. Extracted — brexanolone: Cmax 89.7 ng/mL, tmax 47.8 h, Cavg 70.6 ng/mL, Css 80.1 ng/mL, AUCt 3.36e+03 ng·h/mL, AUC∞ 3.74e+03 ng·h/mL, t1/2z 11.3 h, kel 0.06 1/h, … (+2).

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:36:20.539530+00:00) predates the upstream re-run (2026-10-06 22:02:09.270344+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `brexanolone`, measured `allopregnanolone`.

## Citation
Wald J et al., Allopregnanolone Concentrations in Brea…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-022-01155-w](https://doi.org/10.1007/s40262-022-01155-w)

<div class="pk-model-meta" hidden drug="brexanolone" model-id="Brexanolone_Wald2022_reference" status="rejected" stale="true" population="healthy lactating women and patients with postpartum depression" measured-compound="allopregnanolone" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax, ng/mL | `Q32` · Cmax | 89.7 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Tab3:row1:col1, Tab3:row1:col2 | — | not captured |
| tmax, h | `Q56` · tmax | 47.8 | h | 172080.0 | [h] | not captured | exact (1.0) | Tab3:row2:col1, Tab3:row2:col2 | — | not captured |
| Cavg, ng/mL | `Q71` · Cavg | 70.6 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Css, ng/mL | `Q34` · Css | 80.1 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| AUC0–60, ng·h/mL | `Q19` · AUCt | 3358.4 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm (0.6) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| AUC0–∞, ng·h/mL | `Q17` · AUC∞ | 3736.5 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Tab3:row8:col1, Tab3:row8:col2 | — | not captured |
| t½, h | `Q57` · t1/2z | 11.3 | h | 40680.0 | [h] | not captured | llm (0.6) | Tab3:row11:col1, Tab3:row11:col2 | — | not captured |
| λZ, 1/h | `Q47` · kel | 0.06 | 1/h | 1.6666666666666667e-05 | [1] / [h] | not captured | exact (1.0) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |
| CL, L/h | `Q22` · CL | 87.5 | L/h | 2.4305555555555558e-05 | [l] / [h] | not captured | exact (1.0) | Tab3:row13:col1, Tab3:row13:col2 | — | not captured |
| VZ, L | `Q61` · V | 1431.2 | L | 1.4312 | [l] | not captured | exact (1.0) | Tab3:row14:col1, Tab3:row14:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q19 ('AUC24–56, ng·h/mL', value '2257.9') — already have one for this compound
- dropped duplicate Q19 ('AUC0–t, ng·h/mL', value '3557.8') — already have one for this compound
- dropped unlinked row (NIL): 'tlast, h' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2'])
- dropped unlinked row (NIL): 'R2 adjusted' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1', 'Tab3:row10:col2'])
- dropped value-less row: 'AUC0–60'
- dropped value-less row: 'AUC24–56'
- dropped value-less row: 'AUC0–t'
- dropped value-less row: 'AUCo–∞'
- dropped value-less row: 'Cavg'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'Css'
- dropped value-less row: 'CL'
- dropped value-less row: 'λz'
- dropped value-less row: 'PK'
- dropped value-less row: 'R2'
- dropped value-less row: 't½'
- dropped value-less row: 'tlast'
- dropped value-less row: 'tmax'
- dropped value-less row: 'Vz'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=allopregnanolone
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 11.3 | 11.338 | 1.0034 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col1', 'Tab3:row8:col2'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row13:col1', 'Tab3:row13:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row1:col1', 'Tab3:row1:col2'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row12:col1', 'Tab3:row12:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab3:row11:col1', 'Tab3:row11:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row14:col1', 'Tab3:row14:col2'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 87.5 | not captured | not captured | ['Tab3:row13:col1', 'Tab3:row13:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 87.5 L/h | not captured | not captured | ['Tab3:row13:col1', 'Tab3:row13:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.43e+03 L | not captured | not captured | ['Tab3:row14:col1', 'Tab3:row14:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=allopregnanolone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 8.97e-05 | 6.95168504972154e-06 | 0.0775 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_beta | reference | pass | 11.3 | 11.335063444960905 | 1.0031 | h→SI vs simulated h |
| T1_tmax | reference | fail | 47.8 | 0.18333333335172533 | 0.0038 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_brexanolone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wald_2022` / `Wald_2022::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_brexanolone/models/modelica/Brexanolone_Wald2022_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_brexanolone/models/modelica/Brexanolone_Wald2022_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_brexanolone/models/modelica/Brexanolone_Wald2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:02 UTC</sub>
