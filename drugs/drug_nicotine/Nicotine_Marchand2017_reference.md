<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nicotine&quot;,&quot;href&quot;:&quot;drugs/drug_nicotine/&quot;},{&quot;label&quot;:&quot;Marchand_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nicotine — `Nicotine_Marchand2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The nicotine record from Marchand_2017 was rejected because its apparent (F-adjusted) parameters were corrected a second time via the relative bioavailability Frel = 1, and a structural parameter (the formation clearance dCldCYP2A6 = 1.6, reported without a convertible unit) had a dimension mismatch.**

The nicotine parameters V1/F = 1.9 L, CL/F = 2.5 L/min, V2/F = 29.4 L and Q/F = 14.3 L/min are already adjusted for bioavailability, so applying the relative bioavailability Frel = 1 as an additional correction constitutes a double correction of the apparent parameters. The formation clearance to metabolite (dCldCYP2A6 = 1.6) was reported without a unit that could be converted to SI, so it reached the model without an SI value and failed the dimension check on a structural parameter. The remaining nicotine parameters (D1 = 12.4 min, C0 = 22.6 ng/mL, λ1 = 0.00858 1/min, kel = 0.000678 1/min, t1/2α = 1.35 h, t1/2z = 17.0 h) are not implicated. Extracted — nicotine: V1/F 1.9 L, CL/F 2.5 L/min, V2/F 29.4 L, Q/F 14.3 L/min, D1 12.4 min, Frel 1, C0 22.6 ng/mL, CLfm 1.6, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[c0].value`: this record has 22.6, the second reading 0.358; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Marchand M et al., Nicotine Population Pharmacokinetics in…, European journal of drug me… (2017)
  ·  DOI: [10.1007/s13318-017-0405-2](https://doi.org/10.1007/s13318-017-0405-2)

<div class="pk-model-meta" hidden drug="nicotine" model-id="Nicotine_Marchand2017_reference" status="rejected" stale="false" population="healthy adult smokers" measured-compound="nicotine" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1/F (L) | `Q290` · V1/F | 1.9 | L | 0.0019 | [l] | not captured | exact (1.0) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col3, Tab3:row2:col4, Tab3:row2:col5, Tab3:row2:col6, Marchand_2017_table_4:row3:col2, Marchand_2017_table_4:row3:col3 | — | not captured |
| Cl/F (L/min) | `Q27` · CL/F | 2.5 | L/min | 4.1666666666666665e-05 | [l] / [min] | not captured | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3, Tab3:row3:col4, Tab3:row3:col5, Tab3:row3:col6, Marchand_2017_table_4:row2:col2, Marchand_2017_table_4:row2:col3 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 29.4 | L | 0.0294 | [l] | not captured | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4, Tab3:row4:col5, Tab3:row4:col6 | — | not captured |
| Cl2/F (L/min) | `Q69` · Q/F | 14.3 | L/min | 0.00023833333333333334 | [l] / [min] | not captured | special_case (0.95) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4, Tab3:row5:col5, Tab3:row5:col6 | — | not captured |
| Tdur (min) | `Q310` · D1 | 12.4 | min | 744.0 | [min] | not captured | llm (0.6) | Tab3:row6:col1, Tab3:row6:col2, Tab3:row6:col3, Tab3:row6:col4, Tab3:row6:col5, Tab3:row6:col6, Marchand_2017_table_4:row5:col2, Marchand_2017_table_4:row5:col3 | — | not captured |
| Frel–THS | `Q87` · Frel | 1 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab3:row7:col1 | — | not captured |
| C0 (ng/mL) | `Q86` · C0 | 22.6 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Tab3:row8:col1, Tab3:row8:col2, Tab3:row8:col3, Tab3:row8:col4, Tab3:row8:col5, Tab3:row8:col6, Marchand_2017_table_4:row4:col2, Marchand_2017_table_4:row4:col3 | — | not captured |
| dCldCYP2A6 | `Q370` · CLfm | 1.6 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row13:col1, Tab3:row13:col2 | — | not captured |
| dC0dCYP2A6 | `Q900` · equation variable | 1.6 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row16:col1, Tab3:row16:col2 | — | not captured |
| Alpha (1/min) | `Q67` · λ1 | 0.00858 | not captured | not captured | not captured | not captured | exact (1.0) | Tab3:row23:col1 | — | not captured |
| Initial half-life (h) | `Q59` · t1/2α | 1.35 | h | 4860.0 | [h] | not captured | llm (0.6) | Tab3:row24:col1 | — | not captured |
| Beta (1/min) | `Q47` · kel | 0.000678 | 1/min | 1.13e-05 | 1/h | not captured | exact (1.0) | Tab3:row25:col1 | — | not captured |
| Terminal half-life (h) | `Q57` · t1/2z | 17.0 | h | 61200.0 | [h] | not captured | llm (0.6) | Tab3:row26:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'equations for the covariate effects on typical parameter values' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'C0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'dTdurd–GUM' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2'])
- dropped duplicate Q87 ('dFreld–CC', value '5.2') — already have one for this compound
- dropped duplicate Q87 ('dFreld–NNS', value '5.2') — already have one for this compound
- dropped duplicate Q87 ('dFreld–GUM', value '5.2') — already have one for this compound
- dropped unlinked row (NIL): 'dCldSEX (female)' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1', 'Tab3:row14:col2'])
- dropped duplicate Q87 ('dFreldDOSE', value '1.6') — already have one for this compound
- dropped duplicate Q87 ('dFreldWT', value '1.6') — already have one for this compound
- dropped duplicate Q900 ('dVdMENTH', value '1.6') — already have one for this compound
- dropped duplicate Q900 ('dC0dBLACK', value '1.6') — already have one for this compound
- dropped unlinked row (NIL): 'dTdurdMENTH' — extend the ontology if this is a real PK parameter (source ['Tab3:row20:col1', 'Tab3:row20:col2'])
- implicit units: 'dCldCYP2A6' — the LLM proposed '1/%', whose dimension does not fit Q370; left unset
- implicit units: 'Alpha (1/min)' — the LLM proposed '1/min', whose dimension does not fit Q67; left unset
- implicit units: 'Beta (1/min)' → 1/min (from the paper text: "The parameter is listed as 'Beta (1/min)' in the parameter table; the text describes beta as the rate constant of the mo")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nicotine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Marchand_2017_table_4:row1:col3 = 'The bioavailability of CC, NNS and nicotine gum relative to THS was 102, 24, and 61%, respectively (i.e., e 0.0189, e −1.42, and e −0.489, respectively)'
- unparsed cell Marchand_2017_table_4:row2:col1 = 'CYP2A6 activity and sex'
- unparsed cell Marchand_2017_table_4:row4:col1 = 'CYP2A6 activity and being black'
- companion parameter table 4 transcribed (11 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (10/20 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[c0].value` | 22.6 | 0.358 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].value` | 2.5 | 0.407 | mismatch |
| `gpt-oss-120b` | `parameters[cl2/f].value` | 14.3 | 0.171 | mismatch |
| `gpt-oss-120b` | `parameters[dc0dcyp2a6]` | 1.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[dcldcyp2a6].parameter_id` | Q370 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[dcldcyp2a6].value` | 1.6 | 0.322 | mismatch |
| `gpt-oss-120b` | `parameters[dvdmenth]` | not captured | 0.0912 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tdur]` | 12.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f].value` | 1.9 | 70.0 | mismatch |
| `gpt-oss-120b` | `parameters[v2/f].value` | 29.4 | 171 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4', 'Tab3:row3:col5', 'Tab3:row3:col6', 'Marchand_2017_table_4:row2:col2', 'Marchand_2017_table_4:row2:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:row2:col4', 'Tab3:row2:col5', 'Tab3:row2:col6', 'Marchand_2017_table_4:row3:col2', 'Marchand_2017_table_4:row3:col3'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Tab3:row6:col5', 'Tab3:row6:col6', 'Marchand_2017_table_4:row5:col2', 'Marchand_2017_table_4:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row25:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab3:row26:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Tab3:row24:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4', 'Tab3:row5:col5', 'Tab3:row5:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4', 'Tab3:row4:col5', 'Tab3:row4:col6'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng/mL | not captured | not captured | ['Tab3:row8:col1', 'Tab3:row8:col2', 'Tab3:row8:col3', 'Tab3:row8:col4', 'Tab3:row8:col5', 'Tab3:row8:col6', 'Marchand_2017_table_4:row4:col2', 'Marchand_2017_table_4:row4:col3'] |
| C5_unit_missing_Q370 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row13:col1', 'Tab3:row13:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['Tab3:row23:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=-0.489 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 150 L/h | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4', 'Tab3:row3:col5', 'Tab3:row3:col6', 'Marchand_2017_table_4:row2:col2', 'Marchand_2017_table_4:row2:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.9 L | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:row2:col4', 'Tab3:row2:col5', 'Tab3:row2:col6', 'Marchand_2017_table_4:row3:col2', 'Marchand_2017_table_4:row3:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 29.4 L | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4', 'Tab3:row4:col5', 'Tab3:row4:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nicotine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Marchand_2017` / `Marchand_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:40 UTC</sub>
