<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;abatacept&quot;,&quot;href&quot;:&quot;drugs/drug_abatacept/&quot;},{&quot;label&quot;:&quot;Gandhi_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abatacept — `Abatacept_Gandhi2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.344). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (kabs), so that value has no SI equivalent. Extracted — abatacept: kabs 11 L/h, V1 1.57 L, CL 1.36 L/h, V2 3.71 L, Fab 6.09, allometric_exponent 27.3.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[bioavailability of sc formulation a].parameter_id`: this record has Q44, the second reading Q40; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Gandhi Y et al., Model-Based Selection and Recommendatio…, Journal of clinical pharmac… (2021)
  ·  DOI: [10.1002/jcph.1797](https://doi.org/10.1002/jcph.1797)

<div class="pk-model-meta" hidden drug="abatacept" model-id="Abatacept_Gandhi2021_reference" status="rejected" stale="false" population="adults with rheumatoid arthritis and patients with polyarticular juvenile idiopathic arthritis" measured-compound="abatacept" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 9 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA (L/h) | `Q49` · kabs | 11.0 | L/h | not captured | [l] / [h] | not captured | exact (1.0) | Gandhi_2021_table_p5_1:row0:col1, Gandhi_2021_table_p5_1:row0:col2 | — | not captured |
| VC (L)ª | `Q63` · V1 | 1.57 | L | 0.00157 | [l] | not captured | llm_confirmed (0.6) | Gandhi_2021_table_p5_1:row1:col1, Gandhi_2021_table_p5_1:row1:col2 | — | not captured |
| power_of_age_on_vc | `Q900` · power_of_age_on_vc | 23.4 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row3:col1, Gandhi_2021_table_p5_1:row3:col2 | — | not captured |
| CL (L/h)ª | `Q22` · CL | 1.36 | L/h | 3.777777777777778e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Gandhi_2021_table_p5_1:row4:col1, Gandhi_2021_table_p5_1:row4:col2 | — | not captured |
| exponent_of_nsaid_on_cl | `Q900` · exponent_of_nsaid_on_cl | 12.5 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row9:col1, Gandhi_2021_table_p5_1:row9:col2 | — | not captured |
| VP (L)ª | `Q64` · V2 | 3.71 | L | 0.00371 | [l] | not captured | llm_confirmed (0.6) | Gandhi_2021_table_p5_1:row11:col1, Gandhi_2021_table_p5_1:row11:col2 | — | not captured |
| Bioavailability of SC formulationª | `Q40` · Fab | 6.09 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Gandhi_2021_table_p5_1:row14:col1, Gandhi_2021_table_p5_1:row14:col2 | — | not captured |
| Power of body weight on bioavailability | `Q319` · allometric_exponent | 27.3 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Gandhi_2021_table_p5_1:row16:col1, Gandhi_2021_table_p5_1:row16:col2 | — | not captured |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 6.99 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row2:col1, Gandhi_2021_table_p5_1:row2:col2 | — | not captured |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 2.93 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row5:col1, Gandhi_2021_table_p5_1:row5:col2 | — | not captured |
| theta_q23_gfr_power | `Q900` · theta_q23_gfr_power | 7.19 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row6:col1, Gandhi_2021_table_p5_1:row6:col2 | — | not captured |
| theta_q23_albumin_power | `Q900` · theta_q23_albumin_power | 9.69 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row7:col1, Gandhi_2021_table_p5_1:row7:col2 | — | not captured |
| theta_q23_weight_power | `Q900` · theta_q23_weight_power | 12.8 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row8:col1, Gandhi_2021_table_p5_1:row8:col2 | — | not captured |
| theta_q23_sex_power | `Q900` · theta_q23_sex_power | 21.4 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row10:col1, Gandhi_2021_table_p5_1:row10:col2 | — | not captured |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 7.20 | not captured | not captured | not captured | not captured | not captured (not captured) | Gandhi_2021_table_p5_1:row12:col1, Gandhi_2021_table_p5_1:row12:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'KA (L/h)' routed out of structural estimates ('IntraIndividual Variability/Residual Variability')
- table section residual_error: 'Power of body weight on VC' routed out of structural estimates ('IntraIndividual Variability/Residual Variability')
- table section residual_error: 'Power of albumin on CLᵇ' routed out of structural estimates ('IntraIndividual Variability/Residual Variability')
- table section residual_error: 'Power of body weight on VP' routed out of structural estimates ('IntraIndividual Variability/Residual Variability')
- table section residual_error: 'Power of body weight on bioavailability' routed out of structural estimates ('IntraIndividual Variability/Residual Variability')
- table section residual_error: 'Proportional residual error' routed out of structural estimates ('IntraIndividual Variability/Residual Variability')
- table section residual_error: 'Additive residual error' routed out of structural estimates ('IntraIndividual Variability/Residual Variability')
- table representations disagree for 'KA (L/h)'; source reconciliation required
- table representations disagree for 'VC (L)ª'; source reconciliation required
- table representations disagree for 'Power of body weight on VC'; source reconciliation required
- table representations disagree for 'Power of age on VC'; source reconciliation required
- table representations disagree for 'CL (L/h)ª'; source reconciliation required
- table representations disagree for 'Power of body weight on CLᵇ'; source reconciliation required
- table representations disagree for 'Power of GFR on CLᵇ'; source reconciliation required
- table representations disagree for 'Power of albumin on CLᵇ'; source reconciliation required
- table representations disagree for 'Power of SJC on CLᵇ'; source reconciliation required
- table representations disagree for 'Exponent of NSAID on CLᵇ'; source reconciliation required
- table representations disagree for 'Exponent of male sex on CLᵇ'; source reconciliation required
- table representations disagree for 'VP (L)ª'; source reconciliation required
- table representations disagree for 'Power of body weight on VP'; source reconciliation required
- table representations disagree for 'Intercompartmental CL (L/h)'; source reconciliation required
- table representations disagree for 'Bioavailability of SC formulationª'; source reconciliation required
- table representations disagree for 'Exponent of JIA on bioavailability'; source reconciliation required
- table representations disagree for 'Power of body weight on bioavailability'; source reconciliation required
- table representations disagree for 'Power of age on bioavailability'; source reconciliation required
- unit_dimension_mismatch: 'KA (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- covariate level 'Power of age on VC' → Q900:power_of_age_on_vc = 23.4 (power on the model)
- covariate level 'Exponent of NSAID on CLᵇ' → Q900:exponent_of_nsaid_on_cl = 12.5 (power on Q22)
- dropped duplicate Q22 ('Intercompartmental CL (L/h)', value '7.25') — already have one for this compound
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['jcph1797-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q23 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abatacept
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'abatacept' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Gandhi_2021_table_p5_1: conflicting_units
- table jcph1797-tbl-0002: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.344 (11/32 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability of sc formulation a].parameter_id` | Q44 | Q40 | mismatch |
| `gpt-oss-120b` | `parameters[cl (l/h) a].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[intercompartmental cl]` | 7.25 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[power of age on bioavailability]` | 27.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[power of body weight on bioavailability].covariate_forms` | ['power', 'power', 'power', 'power'] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_body_weight_power]` | 6.99 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_sex_power]` | not captured | 21.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_weight_power]` | 12.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex_power]` | 21.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_albumin_power]` | not captured | 9.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_body_weight_power]` | not captured | 2.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_gfr_power]` | not captured | 7.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_weight_power]` | not captured | 12.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_albumin_power]` | 9.69 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_gfr_power]` | 7.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_weight_power]` | 12.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_age_power]` | not captured | 23.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_body_weight_power]` | not captured | 6.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_body_weight_power]` | not captured | 7.20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc (l) a].covariate_forms` | [] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[vp (l) a].covariate_forms` | [] | ['power'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Gandhi_2021_table_p5_1:row4:col1', 'Gandhi_2021_table_p5_1:row4:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['Gandhi_2021_table_p5_1:row0:col1', 'Gandhi_2021_table_p5_1:row0:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gandhi_2021_table_p5_1:row1:col1', 'Gandhi_2021_table_p5_1:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gandhi_2021_table_p5_1:row11:col1', 'Gandhi_2021_table_p5_1:row11:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.36 | not captured | not captured | ['Gandhi_2021_table_p5_1:row4:col1', 'Gandhi_2021_table_p5_1:row4:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.36 L/h | not captured | not captured | ['Gandhi_2021_table_p5_1:row4:col1', 'Gandhi_2021_table_p5_1:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.57 L | not captured | not captured | ['Gandhi_2021_table_p5_1:row1:col1', 'Gandhi_2021_table_p5_1:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.71 L | not captured | not captured | ['Gandhi_2021_table_p5_1:row11:col1', 'Gandhi_2021_table_p5_1:row11:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_abatacept/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gandhi_2021` / `Gandhi_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:18 UTC</sub>
