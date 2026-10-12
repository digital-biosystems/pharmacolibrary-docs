<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir disoproxil&quot;,&quot;href&quot;:&quot;drugs/drug_tenofovir_disoproxil/&quot;},{&quot;label&quot;:&quot;Scott_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tenofovir disoproxil — `TenofovirDisoproxil_Scott2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Tenofovir's apparent clearance (16.7 L/h) is physiologically implausible for pregnant adults, indicating an extraction error.**

The apparent clearance of tenofovir is listed as 16.7 L/h, which falls outside the physiological window for the population. This magnitude mismatch is inconsistent with the peripheral volume of distribution recorded as 190 L/h. The findings confirm that the clearance value was extracted with an incorrect scale or unit conversion. Extracted — tenofovir disoproxil: CLm/F 16.7 L/h, V1/F 58.8 L, Q/F 13.8 L/h, V2/F 190 L/h, kabs 0.616 /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tenofovir disoproxil fumarate/emtricitabine, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-07 14:43:02.330514+00:00) predates the upstream re-run (2026-10-07 16:32:17.767507+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `tenofovir disoproxil fumarate/emtricitabine`, measured `tenofovir (TFV)`.

## Citation
Scott RK et al., Clinical trial simulation to evaluate t…, Frontiers in reproductive h… (2023)
  ·  DOI: [10.3389/frph.2023.1224580](https://doi.org/10.3389/frph.2023.1224580)

<div class="pk-model-meta" hidden drug="tenofovir disoproxil" model-id="TenofovirDisoproxil_Scott2023_reference" status="rejected" stale="true" population="cisgender women at risk of HIV (PrEP), pregnancy simulation" measured-compound="tenofovir (TFV)" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q351` · CLm/F | 16.7 | L/h | 4.638888888888889e-06 | [l] / [h] | 9 | exact (1.0) | T2:row1:col1, T2:row1:col2, Scott_2023_table_3:row0:col1, Scott_2023_table_3:row0:col2 | — | None (9% RSE) |
| V2/F (L) | `Q290` · V1/F | 58.8 | L | 0.0588 | [l] | 62 | exact (1.0) | T2:row2:col1, T2:row2:col2, Scott_2023_table_3:row1:col1, Scott_2023_table_3:row1:col2 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 13.8 | L/h | 3.833333333333334e-06 | [l] / [h] | 22 | exact (1.0) | T2:row3:col1, T2:row3:col2, Scott_2023_table_3:row2:col1, Scott_2023_table_3:row2:col2 | — | None (43% RSE) |
| V3/F (L/h) | `Q82` · V2/F | 190 | L/h | 5.277777777777778e-05 | [l] / [h] | 18 | exact (1.0) | T2:row4:col1, T2:row4:col2, Scott_2023_table_3:row3:col1, Scott_2023_table_3:row3:col2 | — | None (145% RSE) |
| KA (/h) | `Q49` · kabs | 0.616 | /h | 0.0001711111111111111 | [1] / [h] | 56 | exact (1.0) | T2:row5:col1, T2:row5:col2, Scott_2023_table_3:row4:col1, Scott_2023_table_3:row4:col2 | — | None (26% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V3/F (L/h)' → Q82 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped value-less row: 'CL/F increment during 1st trimester (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'CL/F increment during 2nd trimester (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'CL/F increment during 3rd trimester (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'CL/F increment during pregnancy (%)' (captured trailing unit '%' for child rows)
- metabolite tenofovir (tfv): Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tenofovir (TFV)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles: 3 per-group rows of tenofovir (TFV) covariate_effect but 0 reference group(s) — kept as printed
- row roles: 3 per-group rows of tenofovir (TFV) residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 20 linked by role; re-tagged parent→tenofovir (TFV) ×40, parent→emtricitabine (FTC) ×1
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row6:col1 = '21.4%'
- unparsed cell T2:row7:col1 = '33.9%'
- unparsed cell T2:row8:col1 = '63.9%'
- unparsed cell T2:row9:col1 = '35.9%'
- unparsed cell T2:row10:col1 = '41.4%'
- unparsed cell T2:row11:col1 = '67.6%'
- unparsed cell T2:row12:col1 = '56.7%'
- unparsed cell T2:row13:col1 = '56.4%'
- unparsed cell T2:row14:col1 = '21.2%'
- unparsed cell T2:row15:col1 = '71.2%'
- unparsed cell Scott_2023_table_3:row5:col1 = '63.1%'
- unparsed cell Scott_2023_table_3:row6:col1 = '50.6%'
- unparsed cell Scott_2023_table_3:row7:col1 = '62.5%'
- unparsed cell Scott_2023_table_3:row8:col1 = '41.6%'
- unparsed cell Scott_2023_table_3:row9:col1 = '20.5%'
- unparsed cell Scott_2023_table_3:row10:col1 = '29.3%'
- unparsed cell Scott_2023_table_3:row11:col1 = '85.4%'
- companion parameter table 3 transcribed (19 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.071 (1/14 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tenofovir disoproxil fumarate', 'tenofovir (tfv)', 'hydrolysis']] | [['tenofovir disoproxil fumarate', 'tenofovir', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 16.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 16.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.616 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.616 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 13.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 13.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | 58.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 58.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | not captured | 190 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 190 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tenofovir disoproxil fumarate/emtricitabine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tenofovir (TFV) | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'Scott_2023_table_3:row1:col1', 'Scott_2023_table_3:row1:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row1:col1', 'T2:row1:col2', 'Scott_2023_table_3:row0:col1', 'Scott_2023_table_3:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'Scott_2023_table_3:row4:col1', 'Scott_2023_table_3:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'Scott_2023_table_3:row2:col1', 'Scott_2023_table_3:row2:col2'] |
| C5_dimension_Q82 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'Scott_2023_table_3:row3:col1', 'Scott_2023_table_3:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 58.8 L | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'Scott_2023_table_3:row1:col1', 'Scott_2023_table_3:row1:col2'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.0528 L | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'Scott_2023_table_3:row3:col1', 'Scott_2023_table_3:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tenofovir_disoproxil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Scott_2023` / `Scott_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:32 UTC</sub>
