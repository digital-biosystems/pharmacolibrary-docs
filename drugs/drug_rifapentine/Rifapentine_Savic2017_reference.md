<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;rifapentine&quot;,&quot;href&quot;:&quot;drugs/drug_rifapentine/&quot;},{&quot;label&quot;:&quot;Savic_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifapentine_Hibma2020_reference&quot;,&quot;label&quot;:&quot;Hibma_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifapentine/Rifapentine_Hibma2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rifapentine — `Rifapentine_Savic2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Apparent metabolite clearance and volume parameters double-correct for bioavailability, causing incoherence for rifapentine.**

The record lists apparent metabolite clearance (1.91 L/h) and volume (8.83 L), which already account for the fraction metabolized. Including these alongside parent drug apparent parameters like CL/F (1.86 L/h) leads to double correction errors. Additionally, the 'fraction' unit for the metabolite fraction parameter was not converted to standard SI units. Extracted — rifapentine: CL/F 1.86 L/h, V/F 12.8 L, kabs 0.07 1/h, CLm/F 1.91 L/h, Vm/F 8.83 L, Fab 1 reference, Frel 0.74, fm 1.34 fraction.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rifapentine, the second reading unknown; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Savic RM et al., Defining the optimal dose of rifapentin…, Clinical pharmacology and t… (2017)
  ·  DOI: [10.1002/cpt.634](https://doi.org/10.1002/cpt.634)

<div class="pk-model-meta" hidden drug="rifapentine" model-id="Rifapentine_Savic2017_reference" status="rejected" stale="false" population="adults with pulmonary tuberculosis" measured-compound="rifapentine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, CLm/F, V/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 1.86 | L/h | 5.166666666666667e-07 | [l] / [h] | 40 | exact (1.0) | cpt634-tbl-0002:row1:col1, cpt634-tbl-0002:row1:col2 | — | not captured |
| V/F (L) | `Q76` · V/F | 12.77 | L | 0.01277 | [l] | 5 | exact (1.0) | cpt634-tbl-0002:row2:col1 | — | not captured |
| ka (h‐1) | `Q49` · kabs | 0.07 | 1/h | 1.9444444444444445e-05 | 1/h | 3 | exact (1.0) | cpt634-tbl-0002:row3:col1 | — | not captured |
| CLm/Fm (L/h) | `Q351` · CLm/F | 1.91 | L/h | 5.305555555555555e-07 | [l] / [h] | 44 | exact (1.0) | cpt634-tbl-0002:row4:col1, cpt634-tbl-0002:row4:col2 | — | not captured |
| Vm/Fm (L) | `Q367` · Vm/F | 8.83 | L | 0.008830000000000001 | [l] | 12 | llm_confirmed (0.6) | cpt634-tbl-0002:row5:col1 | — | not captured |
| Bioavailability of 450‐mg dose with high fat food (reference) | `Q40` · Fab | 1 | reference | not captured | not captured | 36 | llm_confirmed (0.6) | cpt634-tbl-0002:row6:col1, cpt634-tbl-0002:row6:col2 | — | not captured |
| Bioavailability of 1200‐mg dose (fraction) relative to reference dose | `Q87` · Frel | 0.74 | not captured | not captured | not captured | 8 | llm_corrected (0.6) | cpt634-tbl-0002:row9:col1 | — | not captured |
| age_effect_on_cl_yearly_decrease_from_the_median_age_31_y_a | `Q900` · age_effect_on_cl_yearly_decrease_from_the_median_age_31_y_a | -0.00379 | not captured | not captured | not captured | 50 | not captured (not captured) | cpt634-tbl-0002:row18:col1 | — | not captured |
| Dose effect (&gt; 600 mg) on fraction metabolized, Fm (fraction) | `Q45` · fm | 1.34 | fraction | not captured | [fraction] | 4 | llm_confirmed (0.6) | cpt634-tbl-0002:row20:col1 | — | not captured |
| theta_q22_sex | `Q900` · theta_q22_sex | 0.81 | not captured | not captured | not captured | 36 | not captured (not captured) | cpt634-tbl-0002:row19:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h‐1' (kabs)
- covariate level 'Age effect on CL (yearly decrease from the median age 31 y)a' → Q900:age_effect_on_cl_yearly_decrease_from_the_median_age_31_y_a = -0.00379 (linear_fractional on Q27)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka (h‐1)' → 1/h (from the paper text: "The parameter label in the input 'ka (h‐1)' and the description 'Absorption rate constant' indicate the unit is h^-1, wh")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rifapentine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[age_effect_on_cl_yearly_decrease_from_the_median_age_31_y_a]` | -0.00379 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of 1200‐mg dose (fraction) relative to reference dose]` | 0.74 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of 450‐mg dose with high fat food]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of 450‐mg dose with high fat food]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of 600‐mg dose (fraction) relative to reference dose]` | not captured | 0.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1.86 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 1.86 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/fm]` | 1.91 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/fm]` | not captured | 1.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose effect (&gt; 600 mg) on fraction metabolized, fm]` | 1.34 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose effect (&gt; 600 mg) on fraction metabolized, fm]` | not captured | 1.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.07 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.07 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_age]` | not captured | -0.00379 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_sex]` | 0.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_sex]` | not captured | 0.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 12.77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 12.77 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/fm]` | 8.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/fm]` | not captured | 8.83 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rifapentine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rifapentine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt634-tbl-0002:row1:col1', 'cpt634-tbl-0002:row1:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt634-tbl-0002:row4:col1', 'cpt634-tbl-0002:row4:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt634-tbl-0002:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt634-tbl-0002:row3:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt634-tbl-0002:row2:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=1.34 present with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.86 L/h | not captured | not captured | ['cpt634-tbl-0002:row1:col1', 'cpt634-tbl-0002:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 12.8 L | not captured | not captured | ['cpt634-tbl-0002:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rifapentine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Savic_2017` / `Savic_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:25 UTC</sub>
