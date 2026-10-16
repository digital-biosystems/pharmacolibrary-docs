<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nicotine&quot;,&quot;href&quot;:&quot;drugs/drug_nicotine/&quot;},{&quot;label&quot;:&quot;Olsson_2021 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nicotine — `Nicotine_Olsson2021_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.682). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The nicotine two-compartment model record was rejected because a structural parameter failed a dimensional check: the equation variable 'pow' (12.3) has no unit, and the lag-time parameter is reported as 'Start (h)' (5.29 h), a label inconsistent with its meaning as an absorption lag time.**

The record for nicotine in healthy smokers carries structurally consistent disposition parameters (CL 67.4 L/h, V1 117 L, Q 38.6 L/h, V2 130 L, Q3 216 L/h, V3 53.4 L), but the dimensional check failed on a structural parameter. The equation variable 'pow' with value 12.3 is dimensionless and unlabelled, and the absorption lag time is reported under the label 'Start (h)' with value 5.29 h, which does not match its pharmacokinetic meaning. Additionally, one reported unit could not be expressed in SI units, so that parameter was recorded without an SI value; this reflects a limitation of the extraction process rather than an error in the published values. Extracted — nicotine: CL 67.4 L/h, V1 117 L, Q 38.6 L/h, V2 130 L, Q3 216 L/h, V3 53.4 L, D1 3.82 mg, kabs 1.55 h−1, … (+5).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clch24: this record has none, the second reading 11.6; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Olsson Gisleskog PO et al., Nicotine Population Pharmacokinetics in…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-020-00960-5](https://doi.org/10.1007/s40262-020-00960-5)

<div class="pk-model-meta" hidden drug="nicotine" model-id="Nicotine_Olsson2021_estimate" status="rejected" stale="false" population="healthy smokers" measured-compound="nicotine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 67.4 | L/h | 1.8722222222222223e-05 | [l] / [h] | not captured | exact (1.0) | Olsson_2021_table_3:row1:col1 | — | 27.0 (None% RSE) |
| V1 (L) | `Q63` · V1 | 117 | L | 0.117 | [l] | not captured | exact (1.0) | Olsson_2021_table_3:row2:col1 | — | 68.1 (None% RSE) |
| Q2 (L/h) | `Q30` · Q | 38.6 | L/h | 1.0722222222222223e-05 | [l] / [h] | not captured | special_case (0.95) | Olsson_2021_table_3:row3:col1 | — | not captured |
| V2 (L) | `Q64` · V2 | 130 | L | 0.13 | [l] | not captured | exact (1.0) | Olsson_2021_table_3:row4:col1 | — | 230 (None% RSE) |
| Q3 (L/h) | `Q308` · Q3 | 216 | L/h | 6e-05 | [l] / [h] | not captured | exact (1.0) | Olsson_2021_table_3:row5:col1 | — | not captured |
| V3 (L) | `Q77` · V3 | 53.4 | L | 0.0534 | [l] | not captured | exact (1.0) | Olsson_2021_table_3:row6:col1 | — | 75.4 (None% RSE) |
| Pre-washout nicotine dose (mg) | `Q310` · D1 | 3.82 | mg | not captured | [mg] | not captured | llm (0.6) | Olsson_2021_table_3:row7:col1, Olsson_2021_table_4:row9:col1, Olsson_2021_table_6:row11:col1 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 1.55 | h−1 | 0.00043055555555555555 | [1] / [h] | not captured | exact (1.0) | Olsson_2021_table_4:row1:col1 | — | not captured |
| F study 92NNBT005 (%) | `Q87` · Frel | 39.5 | not captured | not captured | not captured | not captured | llm (0.6) | Olsson_2021_table_4:row2:col1 | — | not captured |
| Ktr study 93NNBT007 (h−1) | `Q306` · ktr | 3.60 | h−1 | 0.001 | [1] / [h] | not captured | llm_confirmed (0.6) | Olsson_2021_table_4:row4:col1 | — | 45.2 (None% RSE) |
| Start (h) | `Q83` · tlag | 5.29 | h | 19044.0 | [h] | not captured | llm (0.6) | Olsson_2021_table_4:row5:col1 | — | not captured |
| pow | `Q900` · equation variable | 12.3 | not captured | not captured | not captured | not captured | llm (0.6) | Olsson_2021_table_4:row8:col1 | — | not captured |
| F (%) | `Q40` · Fab | 75.8 | not captured | not captured | not captured | not captured | exact (1.0) | Olsson_2021_table_6:row1:col1 | — | not captured |
| Krel (h−1) | `Q47` · kel | 0.146 | h−1 | 4.055555555555555e-05 | [1] / [h] | not captured | llm (0.6) | Olsson_2021_table_6:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional residual error' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive residual error (ng/mL)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional residual error (%)' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'Pre-washout nicotine dose (mg)' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
- dropped duplicate Q87 ('F study 93NNBT007 (%)', value '22.3') — already have one for this compound
- dropped unlinked row (NIL): 'Duration (h)' — extend the ontology if this is a real PK parameter (source ['Olsson_2021_table_4:row6:col1'])
- dropped PD-category row 'Emax (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Olsson_2021_table_4:row7:col1'])
- dropped duplicate Q22 ('CLch24 (%)', value '11.6') — already have one for this compound
- dropped duplicate Q87 ('Fr1 Nicorette (%)', value '40.0') — already have one for this compound
- dropped duplicate Q87 ('Fr1 Invisipatch (%)', value '71.9') — already have one for this compound
- dropped duplicate Q83 ('Lag time1 (h)', value '0.53') — already have one for this compound
- dropped duplicate Q83 ('Lag time2 (h)', value '4.06') — already have one for this compound
- dropped duplicate Q40 ('Frdur1 Nicorette (%)', value '44.5') — already have one for this compound
- dropped duplicate Q40 ('Frdur1 Invisipatch (%)', value '96.2') — already have one for this compound
- dropped duplicate Q306 ('Ktrs (h−1)', value '3.62') — already have one for this compound
- NIL: refused to back-fill base 'omega_cov' from footnote/prose loose number None (source ['Tab5:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'prop_error' from footnote/prose loose number None (source ['Tab5:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'IV'
- dropped value-less row: 'Ka'
- dropped value-less row: 'Krel'
- dropped value-less row: 'Ktr'
- dropped value-less row: '(R)SE'
- dropped value-less row: 'aRSE on variance scale for variability estimates'
- dropped value-less row: 'cKa after buccal and sublingual administration, respectively'
- dropped value-less row: 'dKa after 3 mg of Nicorette classic and 2 mg of Freshmint, respectively'
- dropped value-less row: 'eFrsw after 2 and 4 mg, respectively'
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['Tab5:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'gAdditive on logit scale'
- documentation only: 'Frdur1 × 16 h' → Q43 (FR) comes from ['Fig1:caption'], not from a located parameter table — not emitted as a model parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nicotine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Olsson_2021 (paper reports 5 populations: chewing gum, estimate, inhaler, lozenge, mouth spray)

**Extraction notes:**
- unparsed cell Tab5:row5:col2 = '3.4, 17'
- unparsed cell Tab5:row5:col5 = '1.0, 0.4'
- unparsed cell Tab5:row8:col4 = '− 75.2'
- unparsed cell Olsson_2021_table_3:row1:col3 = '62.1 to 72.7'
- unparsed cell Olsson_2021_table_3:row2:col3 = '91.8 to 143'
- unparsed cell Olsson_2021_table_3:row3:col3 = '34.8 to 42.4'
- unparsed cell Olsson_2021_table_3:row4:col3 = '76.8 to 184'
- unparsed cell Olsson_2021_table_3:row5:col3 = '197 to 236'
- unparsed cell Olsson_2021_table_3:row6:col3 = '42.6 to 64.2'
- unparsed cell Olsson_2021_table_3:row7:col3 = '3.94 to 5.86'
- unparsed cell Olsson_2021_table_3:row9:col3 = '22.2 to 31.2'
- unparsed cell Olsson_2021_table_3:row10:col3 = '46.4 to 87.3'
- unparsed cell Olsson_2021_table_3:row11:col1 = '− 0.231'
- unparsed cell Olsson_2021_table_3:row11:col3 = '− 0.431 to − 0.0303'
- unparsed cell Olsson_2021_table_3:row12:col3 = '50.6 to 98'
- unparsed cell Olsson_2021_table_3:row13:col3 = '0.317 to 0.789'
- unparsed cell Olsson_2021_table_3:row14:col3 = '142 to 346'
- unparsed cell Olsson_2021_table_3:row15:col3 = '56.5 to 107'
- unparsed cell Olsson_2021_table_3:row17:col3 = '0.0896 to 0.0957'
- unparsed cell Olsson_2021_table_3:row18:col3 = '0.204 to 0.221'
- companion parameter table 3 transcribed (37 record(s), model stage 'final')
- unparsed cell Olsson_2021_table_4:row1:col3 = '0.978 to 2.12'
- unparsed cell Olsson_2021_table_4:row2:col3 = '32.8 to 46.1'
- unparsed cell Olsson_2021_table_4:row3:col3 = '14.4 to 30.1'
- unparsed cell Olsson_2021_table_4:row4:col3 = '0.771 to 6.42'
- unparsed cell Olsson_2021_table_4:row5:col3 = '4.83 to 5.75'
- unparsed cell Olsson_2021_table_4:row6:col3 = '0.646 to 3.19'
- unparsed cell Olsson_2021_table_4:row7:col3 = '35.6 to 119'
- unparsed cell Olsson_2021_table_4:row8:col3 = '4.74 to 19.9'
- unparsed cell Olsson_2021_table_4:row9:col3 = '2.92 to 6.93'
- unparsed cell Olsson_2021_table_4:row11:col3 = '0 to 36.7'
- unparsed cell Olsson_2021_table_4:row12:col3 = '0 to 94'
- unparsed cell Olsson_2021_table_4:row13:col3 = '27 to 147'
- unparsed cell Olsson_2021_table_4:row14:col3 = '0 to 106'
- unparsed cell Olsson_2021_table_4:row16:col3 = '8.38 to 11.4'
- unparsed cell Olsson_2021_table_4:row17:col3 = '− 0.0103 to 0.335'
- companion parameter table 4 transcribed (35 record(s), model stage 'final')
- companion parameter table 6 transcribed (68 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4, 5, 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.682 (15/22 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clch24]` | not captured | 11.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f study 92nnbt005].parameter_id` | Q87 | Q40 | mismatch |
| `gpt-oss-120b` | `parameters[f study 93nnbt007]` | not captured | 22.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 75.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[krel]` | 0.146 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[pow]` | 12.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[pre-washout nicotine dose]` | 3.82 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 4.5 | 4.207 | 0.9349 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Olsson_2021_table_3:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Olsson_2021_table_3:row3:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Olsson_2021_table_4:row4:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Olsson_2021_table_3:row5:col1'] |
| C5_dimension_Q310 | fail | [mass] | mg | not captured | not captured | ['Olsson_2021_table_3:row7:col1', 'Olsson_2021_table_4:row9:col1', 'Olsson_2021_table_6:row11:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Olsson_2021_table_6:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Olsson_2021_table_4:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Olsson_2021_table_3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Olsson_2021_table_3:row4:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Olsson_2021_table_3:row6:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Olsson_2021_table_4:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 67.4 | not captured | not captured | ['Olsson_2021_table_3:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 67.4 L/h | not captured | not captured | ['Olsson_2021_table_3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 117 L | not captured | not captured | ['Olsson_2021_table_3:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 130 L | not captured | not captured | ['Olsson_2021_table_3:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nicotine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Olsson_2021` / `Olsson_2021::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:40 UTC</sub>
