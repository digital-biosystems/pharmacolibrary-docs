<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Al-Qurain_2022 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_AlQurain2022_final`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526), gpt-oss:120b (not confirmed, agreement 0.208). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The tramadol parent–metabolite model was rejected because its clearance and volume values are physiologically implausible — CL/F 0.00604 l/h, V1/F 0.373 l, V2/F 0.379 l, Q 0.0426 l/h — indicating a unit or scale extraction error.**

For oral tramadol in older patients, the reported apparent clearance of 0.00604 l/h and central volume of 0.373 l are orders of magnitude below any physiologically plausible range, and the peripheral volume (0.379 l) and intercompartmental clearance (0.0426 l/h) are similarly implausible, so the record was refused on the plausibility check. The metabolite parameters (formation clearance 0.0492 l/h, metabolite clearance 0.143 l/h) and covariate effects on CL/F and V2/F were extracted, but the implausible parent values dominate the verdict. A second reader left several extracted values (CL/F 0.00604, Ka 2.96 /h, Q 0.0426 l/h, V1/F 0.373 l, and both creatinine-clearance covariate effects) without disagreement, though it disputed the dose compound and primary analyte fields. Extracted — tramadol: kabs 2.96 /h, V1/F 0.373 l, Q 0.0426 l/h, V2/F 0.379 l, CL/F 0.00604 l/h; O-desmethyltramadol: CLfm 0.0492 l/h, CL/F 0.143 l/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tramadol → o-desmethyltramadol (metabolism), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:32:54.572884+00:00) predates the upstream re-run (2026-10-07 15:10:08.503707+00:00). Current validate status: `rejected`.

## Citation
Al-Qurain AA et al., Population Pharmacokinetic Model for Tr…, European journal of drug me… (2022)
  ·  DOI: [10.1007/s13318-022-00756-x](https://doi.org/10.1007/s13318-022-00756-x)

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_AlQurain2022_final" status="rejected" stale="true" population="older patients" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka, /h | `Q49` · kabs | 2.96 | /h | 0.0008222222222222222 | [1] / [h] | not captured | exact (1.0) | Tab3:row2:col3, Tab3:row2:col4 | — | 0.378 (None% RSE) |
| V1/F, l | `Q290` · V1/F | 0.373 | l | 0.000373 | [l] | not captured | exact (1.0) | Tab3:row3:col3, Tab3:row3:col4 | — | 0.738 (None% RSE) |
| Q, l/h | `Q30` · Q | 0.0426 | l/h | 1.1833333333333333e-08 | [l] / [h] | not captured | exact (1.0) | Tab3:row4:col3, Tab3:row4:col4 | — | 0.0219 (None% RSE) |
| V2/F, l | `Q82` · V2/F | 0.379 | l | 0.000379 | [l] | not captured | exact (1.0) | Tab3:row6:col3, Tab3:row6:col4 | — | 0.974 (None% RSE) |
| CL/F, l/h | `Q27` · CL/F | 0.00604 | l/h | 1.677777777777778e-09 | [l] / [h] | not captured | exact (1.0) | Tab3:row8:col3, Tab3:row8:col4 | — | 0.0661 (None% RSE) |
| crcl_effect_on_cl_f | `Q900` · crcl_effect_on_cl_f | 0.00498 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row9:col3, Tab3:row9:col4 | — | not captured |
| Kt, l/h | `Q305` · kfm | 0.0492 | l/h | not captured | [l] / [h] | not captured | exact (1.0) | Tab3:row10:col3, Tab3:row10:col4 | — | not captured |
| CLm/F, l/h | `Q27` · CL/F | 0.143 | l/h | 3.972222222222222e-08 | [l] / [h] | not captured | exact (1.0) | Tab3:row11:col3, Tab3:row11:col4 | — | not captured |
| theta_v2_f_crcl | `Q900` · theta_v2_f_crcl | 0.0119 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row7:col3, Tab3:row7:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('ISAR effect on Q', value '0.255') — already have one for this compound
- covariate level 'CrCL effect on CL/F' → Q900:crcl_effect_on_cl_f = 0.00498 (linear_fractional on Q30)
- unit_dimension_mismatch: 'Kt, l/h' → Q305 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Tramadol, b (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row20:col3', 'Tab3:row20:col4'])
- dropped unlinked row (NIL): 'O-desmethyltramadol, a (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row21:col3', 'Tab3:row21:col4'])
- dropped unlinked row (NIL): 'O-desmethyltramadol, b (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row22:col3', 'Tab3:row22:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- model-stage split: 'final model' is the final model of Al-Qurain_2022 (paper reports 2 stages: base model, final model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 28 linked by role; re-tagged parent→O-desmethyltramadol ×24
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.526 (10/19 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.208 (5/24 fields) | 19 |

<details><summary>28 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tramadol', 'o-desmethyltramadol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[clm/f]` | not captured | 0.143 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` | 0.143 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[crcl_effect_on_cl_f]` | 0.00498 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kt]` | 0.0492 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[o-desmethyltramadol, b]` | not captured | 0.189 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_crcl]` | not captured | 0.00498 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 0.00604 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 0.00604 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 2.96 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 2.96 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kt].parameter_id` | Q370 | Q305 | mismatch |
| `gpt-oss:120b` | `parameters[o-desmethyltramadol, a]` | not captured | 5.19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 0.0426 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 0.0426 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_crcl]` | 0.00498 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_crcl]` | not captured | 0.00498 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v2_f_crcl]` | 0.0119 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v2_f_crcl]` | not captured | 0.0119 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tramadol, b]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | 0.373 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | not captured | 0.373 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | 0.379 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | not captured | 0.379 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | tramadol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tramadol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row8:col3', 'Tab3:row8:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row11:col3', 'Tab3:row11:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col3', 'Tab3:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col3', 'Tab3:row4:col4'] |
| C5_dimension_Q305 | fail | [length] ** 3 / [time] | l/h | not captured | not captured | ['Tab3:row10:col3', 'Tab3:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row2:col3', 'Tab3:row2:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row6:col3', 'Tab3:row6:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.00604 L/h | not captured | not captured | ['Tab3:row8:col3', 'Tab3:row8:col4'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.143 L/h | not captured | not captured | ['Tab3:row11:col3', 'Tab3:row11:col4'] |
| C9_phys_window_Q290 | fail | volume within physiological range | 0.373 L | not captured | not captured | ['Tab3:row3:col3', 'Tab3:row3:col4'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.379 L | not captured | not captured | ['Tab3:row6:col3', 'Tab3:row6:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tramadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Al-Qurain_2022` / `Al-Qurain_2022::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:10 UTC</sub>
