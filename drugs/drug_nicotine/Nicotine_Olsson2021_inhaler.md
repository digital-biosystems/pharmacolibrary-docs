<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nicotine&quot;,&quot;href&quot;:&quot;drugs/drug_nicotine/&quot;},{&quot;label&quot;:&quot;Olsson_2021 \u00b7 inhaler&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nicotine — `Nicotine_Olsson2021_inhaler`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.562). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The nicotine record was rejected because the parameter D1 carries a dimension mismatch: its label reports a pre-washout nicotine dose of 7.31 mg, while its meaning is the duration of a zero-order input, so the value cannot be used as a structural parameter.**

In the Olsson_2021 model of (s)-(−)-nicotine in healthy smokers, the parameter D1 is documented as the duration of a zero-order input (infusion or zero-order absorption) into the dosing compartment, but the record gives it as 'Pre-washout nicotine dose (mg)' with value 7.31 mg — a mass where a time is required, which failed the dimension check on a structural parameter. A further limitation states that a reported unit could not be converted to SI, so that parameter was handed on without an SI value. The remaining nicotine parameters (kabs 0.753 h−1, Fab 66.9%, ktr 5.26 h−1, Frel 66.0%, V 2.6 L, allometric exponent 80) are recorded without conflicting findings. Extracted — nicotine: kabs 0.753 h−1, Fab 66.9, ktr 5.26 h−1, allometric_exponent 80, Frel 66, D1 7.31 mg, V 2.6 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has none, the second reading 100; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Olsson Gisleskog PO et al., Nicotine Population Pharmacokinetics in…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-020-00960-5](https://doi.org/10.1007/s40262-020-00960-5)

<div class="pk-model-meta" hidden drug="nicotine" model-id="Nicotine_Olsson2021_inhaler" status="rejected" stale="false" population="healthy smokers" measured-compound="nicotine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h−1) | `Q49` · kabs | 0.753 | h−1 | 0.00020916666666666666 | [1] / [h] | not captured | exact (1.0) | Tab5:row5:col10, Tab5:row5:col11 | — | not captured |
| Frsw (%) | `Q40` · Fab | 66.9 | not captured | not captured | not captured | not captured | llm (0.6) | Tab5:row6:col10, Tab5:row6:col11 | — | not captured |
| Ktrg (h−1) | `Q306` · ktr | 5.26 | h−1 | 0.001461111111111111 | [1] / [h] | not captured | llm (0.6) | Tab5:row7:col10, Tab5:row7:col11 | — | not captured |
| pow | `Q319` · allometric_exponent | 80 | not captured | not captured | not captured | not captured | llm (0.6) | Tab5:row11:col10 | — | not captured |
| F increase, Study 97NNIN024 (%) | `Q87` · Frel | 66.0 | not captured | not captured | not captured | not captured | llm (0.6) | Tab5:row14:col10, Tab5:row14:col11 | — | not captured |
| Pre-washout nicotine dose (mg) | `Q310` · D1 | 7.31 | mg | not captured | [mg] | not captured | llm (0.6) | Tab5:row15:col10, Tab5:row15:col11 | — | not captured |
| VTotal | `Q61` · V | 2.6 | L | 0.0026000000000000003 | L | not captured | review_gapfill (0.7) | Moore_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional residual error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive residual error (ng/mL)' routed out of structural estimates ('Residual variability')
- dropped PD-category row 'Emax (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab5:row8:col10', 'Tab5:row8:col11'])
- dropped unlinked row (NIL): 'Start (h)' — extend the ontology if this is a real PK parameter (source ['Tab5:row9:col10', 'Tab5:row9:col11'])
- dropped unlinked row (NIL): 'Duration (h)' — extend the ontology if this is a real PK parameter (source ['Tab5:row10:col10', 'Tab5:row10:col11'])
- unit_dimension_mismatch: 'Pre-washout nicotine dose (mg)' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
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
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['Tab5:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'gAdditive on logit scale'
- dropped duplicate Q40 ('Frdur1 × 16 h', value 16) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nicotine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'inhaler' subgroup of Olsson_2021 (paper reports 5 populations: chewing gum, estimate, inhaler, lozenge, mouth spray)
- gap-filled Q61 (V) from Moore_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

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
| `gpt-oss-120b` | not confirmed | 0.562 (9/16 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | not captured | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability]` | not captured | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[frsw].parameter_id` | Q40 | Q43 | mismatch |
| `gpt-oss-120b` | `parameters[pow]` | 80 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[pre-washout nicotine dose].parameter_id` | Q310 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[start]` | not captured | 2.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vtotal]` | 2.6 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab5:row7:col10', 'Tab5:row7:col11'] |
| C5_dimension_Q310 | fail | [mass] | mg | not captured | not captured | ['Tab5:row15:col10', 'Tab5:row15:col11'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab5:row5:col10', 'Tab5:row5:col11'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Moore_2024:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.6 L | not captured | not captured | ['Moore_2024:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nicotine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Olsson_2021` / `Olsson_2021::inhaler`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:40 UTC</sub>
