<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/&quot;},{&quot;label&quot;:&quot;Retlich_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linagliptin_Retlich2010v2_reference&quot;,&quot;label&quot;:&quot;Retlich_2010_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Retlich2010v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Retlich_2015_DPP_4&quot;,&quot;label&quot;:&quot;Retlich_2015 \u00b7 DPP-4&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/pd_Retlich_2015_DPP_4.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# linagliptin — `Linagliptin_Retlich2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.409), gpt-oss:120b (not confirmed, agreement 0.409). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (t1/2ka , λ2, equation variable and Cmax), so that value has no SI equivalent. Extracted — linagliptin: t1/2ka 0.933 1/h, λ2 0.795 1/h, V/F 715 L, Q 412 L/h, CL/F 258 L/h, Cmax 0.00332 C g, CL -0.765 12pt, kabs 1.63 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has linagliptin, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015)
  ·  DOI: [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4)

<div class="pk-model-meta" hidden drug="linagliptin" model-id="Linagliptin_Retlich2015_reference" status="rejected" stale="false" population="patients with type 2 diabetes mellitus" measured-compound="linagliptin" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K a,1 (1/h) | `Q95` · t1/2ka | 0.933 | 1/h | not captured | [1] / [h] | not captured | llm (0.6) | Tab4:row5:col1 | — | not captured |
| K a,2 (1/h) | `Q68` · λ2 | 0.795 | 1/h | not captured | [1] / [h] | not captured | llm (0.6) | Tab4:row6:col1 | — | not captured |
| Dose_K a c | `Q900` · equation variable | -6.51 | % | not captured | [%] | not captured | llm (0.6) | Tab4:row8:col1 | — | not captured |
| V C/F (L) | `Q76` · V/F | 715 | L | 0.715 | [l] | not captured | space_fold (0.95) | Tab4:row9:col1 | — | not captured |
| Q P/F (L/h)d | `Q30` · Q | 412 | L/h | 0.00011444444444444445 | [l] / [h] | not captured | llm (0.6) | Tab4:row10:col1 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 258 | L/h | 7.166666666666667e-05 | [l] / [h] | not captured | exact (1.0) | Tab4:row12:col1 | — | not captured |
| DPP_B max,C g | `Q32` · Cmax | 0.00332 | C g | not captured | [cg] | not captured | llm (0.6) | Tab4:row15:col1 | — | not captured |
| Corr F_CL | `Q22` · CL | -0.765 | 12pt | not captured | [12pt] | not captured | llm (0.6) | Tab4:row23:col1 | — | not captured |
| KA [h -1 ] | `Q49` · kabs | 1.63 | h -1 | 0.00045277777777777775 | 1/h | not captured | review_gapfill (0.7) | Tadayasu_2013:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ prop,phase 2a (%)h' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ prop,phase 2b (%)h' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'F in study 4 (%)' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col1'])
- dropped unlinked row (NIL): 'Weight_F b' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col1'])
- unit_dimension_mismatch: 'K a,1 (1/h)' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'K a,2 (1/h)' → Q68 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'K a,3 (1/h)' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped duplicate Q95 ('K a,3 (1/h)', value '0.441') — already have one for this compound
- dropped unlinked row (NIL): 'GGT_CLe,f' — extend the ontology if this is a real PK parameter (source ['Tab4:row13:col1'])
- dropped unlinked row (NIL): 'B max,C (nmol/L)' — extend the ontology if this is a real PK parameter (source ['Tab4:row14:col1'])
- unit_dimension_mismatch: 'DPP_B max,C g' → Q32 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Dose_B max,C g' → Q32 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q32 ('Dose_B max,C g', value '3.41') — already have one for this compound
- dropped unlinked row (NIL): 'Age_B max,C g' — extend the ontology if this is a real PK parameter (source ['Tab4:row17:col1'])
- dropped unlinked row (NIL): 'Sex_B max,C e' — extend the ontology if this is a real PK parameter (source ['Tab4:row18:col1'])
- dropped unlinked row (NIL): 'K d (nmol/L)d' — extend the ontology if this is a real PK parameter (source ['Tab4:row19:col1'])
- unit_dimension_unknown: '12pt' (CL)
- dropped unlinked row (NIL): 'πF (CV %)' — extend the ontology if this is a real PK parameter (source ['Tab4:row28:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=linagliptin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V C/F (L)' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Tadayasu_2013's review values (primary lacked it)

**Extraction notes:**
- table Tab4: ambiguous_numeric_format
- table Tab4: unparsed_numeric_cell
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.409 (9/22 fields) | 13 |
| `gpt-oss:120b` | not confirmed | 0.409 (9/22 fields) | 13 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | not captured | 100 | only_one_extracted |
| `gpt-oss-120b` | `model.links` | [] | [['linagliptin', 'dpp-4 activity', 'binding']] | mismatch |
| `gpt-oss-120b` | `parameters[corr f_cl]` | -0.765 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose_b max,c g]` | not captured | 3.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f in study 4]` | not captured | 169 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ggt_cle,f]` | not captured | -0.0339 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a,2]` | 0.795 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a,3]` | 0.441 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` | not captured | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p/f (l)d].parameter_id` | Q61 | Q78 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | linagliptin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | linagliptin | unknown | mismatch |
| `gpt-oss:120b` | `model.bioavailability.theta` | not captured | 100 | only_one_extracted |
| `gpt-oss:120b` | `parameters[arelative bioavailability]` | not captured | 100 | only_one_extracted |
| `gpt-oss:120b` | `parameters[corr f_cl]` | -0.765 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[dpp_b max,c g]` | 0.00332 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f in study 4]` | not captured | 169 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ggt_cle,f]` | not captured | -0.0339 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a,2]` | 0.795 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a,3]` | 0.441 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q p/f (l/h)d].parameter_id` | Q69 | Q30 | mismatch |
| `gpt-oss:120b` | `parameters[v p/f (l)d].parameter_id` | Q61 | Q82 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | linagliptin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | linagliptin | unknown | mismatch |

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
| C2_base_sign_Q22 | fail | not captured | -0.765 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row12:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row10:col1'] |
| C5_dimension_Q32 | fail | [mass] | C g | not captured | not captured | ['Tab4:row15:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tadayasu_2013:review'] |
| C5_dimension_Q68 | fail | 1 / [time] | 1/h | not captured | not captured | ['Tab4:row6:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row9:col1'] |
| C5_dimension_Q95 | fail | 1 / [time] | 1/h | not captured | not captured | ['Tab4:row5:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | 12pt | not captured | not captured | ['Tab4:row23:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 258 L/h | not captured | not captured | ['Tab4:row12:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 715 L | not captured | not captured | ['Tab4:row9:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_linagliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Retlich_2015` / `Retlich_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:40 UTC</sub>
