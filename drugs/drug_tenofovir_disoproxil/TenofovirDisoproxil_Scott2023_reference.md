<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir disoproxil&quot;,&quot;href&quot;:&quot;drugs/drug_tenofovir_disoproxil/&quot;},{&quot;label&quot;:&quot;Scott_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tenofovir disoproxil — `TenofovirDisoproxil_Scott2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-07 14:43 UTC) predates the latest extraction (2026-10-07 16:32 UTC); the status shown comes from the current checks. Tenofovir's apparent clearance (16.7 L/h) is physiologically implausible for pregnant adults, indicating an extraction error.

<div class="pk-model-meta" hidden drug="tenofovir disoproxil" model-id="TenofovirDisoproxil_Scott2023_reference" status="rejected" stale="true" population="cisgender women at risk of HIV (PrEP), pregnancy simulation" measured-compound="tenofovir (TFV)" parameterization="apparent" topology="general_linear"></div>

## Citation
Scott RK, Yu Y, Marzinke MA, Coleman JS, Hendrix CW, Bies R. Clinical trial simulation to evaluate tenofovir disoproxil fumarate/emtricitabine HIV pre-exposure prophylaxis dosing during pregnancy. Frontiers in reproductive health 5:1224580 (2023).
  ·  DOI: [10.3389/frph.2023.1224580](https://doi.org/10.3389/frph.2023.1224580)

## Population and dosing

**Population:** cisgender women at risk of HIV (PrEP), pregnancy simulation · condition HIV pre-exposure prophylaxis, pregnancy · age group adult · n = 128.

**Dosing:** 200, 300 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed tenofovir disoproxil fumarate/emtricitabine, measured tenofovir (TFV).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CLm/F | 16.7 | L/h | 9 | None (9% RSE) |
| V2/F (L) | V1/F | 58.8 | L | 62 |  |
| Q/F (L/h) | Q/F | 13.8 | L/h | 22 | None (43% RSE) |
| V3/F (L/h) | V2/F | 190 | L/h | 18 | None (145% RSE) |
| KA (/h) | kabs | 0.616 | /h | 56 | None (26% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Tenofovir's apparent clearance (16.7 L/h) is physiologically implausible for pregnant adults, indicating an extraction error.**

The apparent clearance of tenofovir is listed as 16.7 L/h, which falls outside the physiological window for the population. This magnitude mismatch is inconsistent with the peripheral volume of distribution recorded as 190 L/h. The findings confirm that the clearance value was extracted with an incorrect scale or unit conversion. Extracted — tenofovir disoproxil: CLm/F 16.7 L/h, V1/F 58.8 L, Q/F 13.8 L/h, V2/F 190 L/h, kabs 0.616 /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tenofovir disoproxil fumarate/emtricitabine, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q351` · CLm/F | 16.7 | L/h | 4.639e-06 | m3/s | l/h | 9 | exact (1) | T2:row1:col1, T2:row1:col2, Scott_2023_table_3:row0:col1, Scott_2023_table_3:row0:col2 | None (9% RSE) |
| V2/F (L) | `Q290` · V1/F | 58.8 | L | 0.0588 | m3 | l | 62 | exact (1) | T2:row2:col1, T2:row2:col2, Scott_2023_table_3:row1:col1, Scott_2023_table_3:row1:col2 |  |
| Q/F (L/h) | `Q69` · Q/F | 13.8 | L/h | 3.833e-06 | m3/s | l/h | 22 | exact (1) | T2:row3:col1, T2:row3:col2, Scott_2023_table_3:row2:col1, Scott_2023_table_3:row2:col2 | None (43% RSE) |
| V3/F (L/h) | `Q82` · V2/F | 190 | L/h | 5.278e-05 | m3/s | l/h | 18 | exact (1) | T2:row4:col1, T2:row4:col2, Scott_2023_table_3:row3:col1, Scott_2023_table_3:row3:col2 | None (145% RSE) |
| KA (/h) | `Q49` · kabs | 0.616 | /h | 0.0001711 | 1/s | 1/h | 56 | exact (1) | T2:row5:col1, T2:row5:col2, Scott_2023_table_3:row4:col1, Scott_2023_table_3:row4:col2 | None (26% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[cl/f]` |  | 16.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 16.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.616 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.616 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 13.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 13.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  | 58.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 58.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 190 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 190 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tenofovir disoproxil fumarate/emtricitabine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tenofovir (TFV) | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row2:col1', 'T2:row2:col2', 'Scott_2023_table_3:row1:col1', 'Scott_2023_table_3:row1:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['T2:row1:col1', 'T2:row1:col2', 'Scott_2023_table_3:row0:col1', 'Scott_2023_table_3:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row5:col1', 'T2:row5:col2', 'Scott_2023_table_3:row4:col1', 'Scott_2023_table_3:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T2:row3:col1', 'T2:row3:col2', 'Scott_2023_table_3:row2:col1', 'Scott_2023_table_3:row2:col2'] |
| C5_dimension_Q82 | fail | [length] ** 3 / [time] | L/h | ['T2:row4:col1', 'T2:row4:col2', 'Scott_2023_table_3:row3:col1', 'Scott_2023_table_3:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 58.8 L | ['T2:row2:col1', 'T2:row2:col2', 'Scott_2023_table_3:row1:col1', 'Scott_2023_table_3:row1:col2'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.0528 L | ['T2:row4:col1', 'T2:row4:col2', 'Scott_2023_table_3:row3:col1', 'Scott_2023_table_3:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btenofovir_disoproxil%5D%20TenofovirDisoproxil_Scott2023_reference&body=Drug%3A%20tenofovir_disoproxil%0ARecord%3A%20TenofovirDisoproxil_Scott2023_reference%0APaper%3A%20Scott_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Scott2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:32 UTC</sub>
