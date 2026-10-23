<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;lusutrombopag&quot;,&quot;href&quot;:&quot;drugs/drug_lusutrombopag/&quot;},{&quot;label&quot;:&quot;Katsube_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lusutrombopag — `Lusutrombopag_Katsube2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-05 19:48 UTC); the status shown comes from the current checks. The lusutrombopag record was rejected because a structural parameter carries a dimensionally wrong unit: absolute bioavailability Fab is reported as 1.00 with unit h, and Km is reported as 0.0320 /h although it denotes enzyme affinity.

<div class="pk-model-meta" hidden drug="lusutrombopag" model-id="Lusutrombopag_Katsube2019_reference" status="rejected" stale="true" population="healthy subjects and patients with chronic liver disease" measured-compound="lusutrombopag" parameterization="apparent" topology="1C"></div>

## Citation
Katsube T, Shimizu R, Fukuhara T, Kano T, Wajima T. Pharmacokinetic/Pharmacodynamic Modelling and Simulation of Lusutrombopag, a Novel Thrombopoietin Receptor Agonist, for the Treatment of Thrombocytopenia in Patients with Chronic Liver Disease Undergoing Invasive Procedures. Clinical pharmacokinetics 58(11):1469–1482 (2019).
  ·  DOI: [10.1007/s40262-019-00770-4](https://doi.org/10.1007/s40262-019-00770-4)

## Population and dosing

**Population:** healthy subjects and patients with chronic liver disease · age group adult.

**Dosing:** 0.25, 1, 2, 3 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Typical CL/F | CL/F | 0.874 | L/h | 3.9 |
| Q3/F [L/h] | Q3/F | 0.872 | L/h | 8.0 |
| Typical V3/F | V3/F | 9.04 | L | 6.6 |
| Q4/F [L/h] | Q/F | 0.0265 | L/h | 9.7 |
| F1 of solution in the fasted state | Fab | 1.00 | h |  |
| KM [/h] | Km | 0.0320 | /h | 5.3 |
| KL [/h] | kel | 0.00863 | /h | 10.2 |
| KA Solution in the fed state | kabs | 0.166 | /h |  |
| Lag time Solution in the fed state | tlag | 0.568 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.037). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lusutrombopag record was rejected because a structural parameter carries a dimensionally wrong unit: absolute bioavailability Fab is reported as 1.00 with unit h, and Km is reported as 0.0320 /h although it denotes enzyme affinity.**

Fab is defined as the fraction of drug reaching systemic circulation, a dimensionless quantity, but the record lists it with unit h; Km is defined as a measure of enzyme-substrate affinity (a concentration-like quantity) but is listed as 0.0320 /h, a rate constant unit. These dimension mismatches on structural parameters triggered the refusal. The record also lacks an SI value for V2/F, whose unit could not be converted, and the second reader reports additional covariate and peripheral-volume parameters (e.g. V4/F 3.48 L, CL/F ethnicity effect 0.868, sex effect 0.874, weight effect on Q6 1.00) absent from this record. Extracted — lusutrombopag: CL/F 0.874 L/h, Q3/F 0.872 L/h, V3/F 9.04 L, Q/F 0.0265 L/h, Fab 1 h, Km 0.032 /h, kel 0.00863 /h, kabs 0.166 /h, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has lusutrombopag, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Typical CL/F | `Q27` · CL/F | 0.874 | L/h | 2.428e-07 | m3/s | l/h | 3.9 | llm_confirmed (0.6) | Tab2:row3:col1 |
| Q3/F [L/h] | `Q309` · Q3/F | 0.872 | L/h | 2.422e-07 | m3/s | l/h | 8.0 | llm_confirmed (0.6) | Tab2:row12:col1 |
| Typical V3/F | `Q78` · V3/F | 9.04 | L | 0.00904 | m3 | l | 6.6 | llm_confirmed (0.6) | Tab2:row14:col1 |
| Q4/F [L/h] | `Q69` · Q/F | 0.0265 | L/h | 7.361e-09 | m3/s | l/h | 9.7 | llm (0.6) | Tab2:row16:col1 |
| F1 of solution in the fasted state | `Q40` · Fab | 1.00 | h |  |  | h |  | llm_confirmed (0.6) | Tab2:row24:col1 |
| KM [/h] | `Q1` · Km | 0.0320 | /h |  |  | 1/h | 5.3 | llm_confirmed (0.6) | Tab2:row40:col1 |
| KL [/h] | `Q47` · kel | 0.00863 | /h | 2.397e-06 | 1/s | 1/h | 10.2 | llm (0.6) | Tab2:row41:col1 |
| KA Solution in the fed state | `Q49` · kabs | 0.166 | /h | 4.611e-05 | 1/s | 1/h |  | review_gapfill (0.7) | Katsube_2019:review |
| Lag time Solution in the fed state | `Q83` · tlag | 0.568 | h | 2045 | s | h |  | review_gapfill (0.7) | Katsube_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V2/F [L] | Q82 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Standard deviation for additive residual error [× 104/µL]' routed out of structural estimates ('Standard deviation for proportional residual error [CV%]')
- dropped unlinked row (NIL): 'Effect of WT' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1', 'Tab2:row10:col1', 'Tab2:row15:col1'])
- dropped unlinked row (NIL): 'Effect of sex' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1'])
- dropped unlinked row (NIL): 'Effect of ethnicity' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col1'])
- dropped unlinked row (NIL): 'Effect of subject population' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1', 'Tab2:row11:col1'])
- unit_dimension_mismatch: 'Typical V2/F' → Q82 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q82 ('Typical V2/F', value '12.2') — already have one for this compound
- dropped unlinked row (NIL): 'V4/F [L]' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col1'])
- dropped unlinked row (NIL): 'Solution in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col1', 'Tab2:row22:col1', 'Tab2:row26:col1'])
- dropped unlinked row (NIL): 'Others (solution in the fasted state, 2 mg tablet in the fed state, 0.25 mg tablet in the fed state, 2.5 mg [2 × 0.25 mg tablets and 1 × 2 mg tablet] in the fed state, 3.0 mg [4 × 0.25 mg tablets and 1 × 2 mg tablet] in the fed state, 1 mg tablet in the fed state, 3 mg tablet in the fed state)' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col1', 'Tab2:row23:col1'])
- dropped unlinked row (NIL): '2 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col1'])
- dropped unlinked row (NIL): '0.25 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col1'])
- dropped unlinked row (NIL): '2.5 mg (2 × 0.25 mg tablets and 1 × 2 mg tablet) in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row29:col1'])
- dropped unlinked row (NIL): '3.0 mg (4 × 0.25 mg tablets and 1 × 2 mg tablet) in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row30:col1'])
- dropped unlinked row (NIL): '1 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row31:col1'])
- dropped unlinked row (NIL): '3 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row32:col1'])
- unit_dimension_mismatch: 'KM [/h]' → Q1 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Typical SLOP' — extend the ontology if this is a real PK parameter (source ['Tab2:row43:col1'])
- dropped unlinked row (NIL): 'Effect of CPS ≥ 9' — extend the ontology if this is a real PK parameter (source ['Tab2:row44:col1'])
- dropped unlinked row (NIL): 'PLT0 [×104/µL]' — extend the ontology if this is a real PK parameter (source ['Tab2:row45:col1'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V3/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'slope' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lusutrombopag
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q49 (kabs) from Katsube_2019's review values (primary lacked it)
- gap-filled Q83 (tlag) from Katsube_2019's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row3:col2 = '0.876 (0.810–0.935)'
- unparsed cell Tab2:row5:col2 = '0.874 (0.816–0.941)'
- unparsed cell Tab2:row6:col2 = '0.866 (0.809–0.940)'
- unparsed cell Tab2:row7:col2 = '0.865 (0.788–0.952)'
- unparsed cell Tab2:row9:col2 = '12.3 (5.75–13.9)'
- unparsed cell Tab2:row11:col2 = '1.45 (1.25–2.17)'
- unparsed cell Tab2:row12:col2 = '0.851 (0.672–0.993)'
- unparsed cell Tab2:row14:col2 = '8.95 (7.71–12.1)'
- unparsed cell Tab2:row16:col2 = '0.0267 (0.0216–0.0341)'
- unparsed cell Tab2:row17:col2 = '3.43 (2.79–5.38)'
- unparsed cell Tab2:row19:col2 = '0.165 (0.0925–0.197)'
- unparsed cell Tab2:row20:col2 = '0.218 (0.117–0.249)'
- unparsed cell Tab2:row22:col2 = '0.568 (0.504–0.677)'
- unparsed cell Tab2:row23:col2 = '0.193 (0.183–0.208)'
- unparsed cell Tab2:row31:col2 = '0.971 (0.860–1.08)'
- unparsed cell Tab2:row32:col2 = '0.837 (0.766–0.915)'
- unparsed cell Tab2:row40:col2 = '0.0318 (0.0288–0.0353)'
- unparsed cell Tab2:row41:col2 = '0.00871 (0.00720–0.0108)'
- unparsed cell Tab2:row43:col2 = '9.09 (8.28–10.0)'
- unparsed cell Tab2:row44:col2 = '1.69 (1.26–2.13)'
- unparsed cell Tab2:row45:col2 = '3.92 (3.80–4.05)'
- unparsed cell Tab2:row53:col2 = '0.246 (0.130–0.332)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.037 (1/27 fields) | 26 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[2 mg tablet in the fed state]` |  | 0.857 | only_one_extracted |
| `gpt-oss:120b` | `parameters[3 mg tablet in the fed state]` |  | 0.843 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1 of solution in the fasted state]` | 1.00 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1 of solution in the fasted state]` |  | 1.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kl [/h]]` | 0.00863 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kl [/h]]` |  | 0.00863 | only_one_extracted |
| `gpt-oss:120b` | `parameters[km [/h]]` | 0.0320 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[km [/h]]` |  | 0.0320 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q3/f [l/h]]` | 0.872 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[q3/f [l/h]]` |  | 0.872 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q4/f [l/h]]` | 0.0265 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[q4/f [l/h]]` |  | 0.0265 | only_one_extracted |
| `gpt-oss:120b` | `parameters[solution in the fed state]` |  | 0.884 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_ethnicity]` |  | 0.868 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_sex]` |  | 0.874 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_wt]` |  | 1.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical cl/f]` | 0.874 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical cl/f]` |  | 0.874 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical v3/f]` | 9.04 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical v3/f]` |  | 9.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f [l]]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f [l]]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v4/f [l]]` |  | 3.48 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | lusutrombopag | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | lusutrombopag | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | 1 / [time] | /h | ['Tab2:row40:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['Tab2:row12:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab2:row41:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Katsube_2019:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row16:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab2:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row8:col1', 'Tab2:row8:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Katsube_2019:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.874 L/h | ['Tab2:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blusutrombopag%5D%20Lusutrombopag_Katsube2019_reference&body=Drug%3A%20lusutrombopag%0ARecord%3A%20Lusutrombopag_Katsube2019_reference%0APaper%3A%20Katsube_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lusutrombopag/Lusutrombopag_Katsube2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 19:48 UTC</sub>
