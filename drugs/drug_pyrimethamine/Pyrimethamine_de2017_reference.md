<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/drug_pyrimethamine/&quot;},{&quot;label&quot;:&quot;de_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrimethamine — `Pyrimethamine_de2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The pyrimethamine model was rejected because the Mozambique covariate effect on clearance is a negative value (-20.2 %), giving an implausible negative clearance in that scenario.**

The record's covariate parameter 'Difference in clearance in Mozambique' is -20.2 %, which when applied to the base oral clearance (CL/F 1.35 L/h) yields a negative clearance in the Mozambique scenario, an implausible result. All other parameters (Fab 1, V1/F 163 L, kabs 1.31 /h, Q2/F 1.45 L/h, V2/F 29.8 L, Kp 0.324, CL change 21.2 %) are plausible. The negative shift is the sole reason for rejection. Extracted — pyrimethamine: Fab 1, CL/F 1.35 L/h, V1/F 163 L, kabs 1.31 /h, Q2/F 1.45 L/h, V2/F 29.8 L, Kp 0.324, CL_ratio 21.2, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulfadoxine/pyrimethamine, the second reading pyrimethamine and sulfadoxine; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `sulfadoxine/pyrimethamine`, measured `pyrimethamine`.

## Citation
de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181)

<div class="pk-model-meta" hidden drug="pyrimethamine" model-id="Pyrimethamine_de2017_reference" status="rejected" stale="false" population="pregnant and postpartum women receiving IPTp" measured-compound="pyrimethamine" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, Q2/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | psp412181-tbl-0002:row2:col3 | — | not captured |
| CL/F during pregnancy [L/h]b | `Q27` · CL/F | 1.35 | L/h | 3.75e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | psp412181-tbl-0002:row3:col3, psp412181-tbl-0002:row3:col4 | — | not captured |
| Vc/F [L]b | `Q290` · V1/F | 163 | L | 0.163 | [l] | not captured | llm_confirmed (0.6) | psp412181-tbl-0002:row4:col3 | — | not captured |
| ka [/h] | `Q49` · kabs | 1.31 | /h | 0.0003638888888888889 | [1] / [h] | not captured | llm_confirmed (0.6) | psp412181-tbl-0002:row5:col3 | — | not captured |
| Qp1/F [L/h]b | `Q80` · Q2/F | 1.45 | L/h | 4.0277777777777773e-07 | [l] / [h] | not captured | llm_corrected (0.6) | psp412181-tbl-0002:row6:col3 | — | not captured |
| Vp1/F [L]b | `Q82` · V2/F | 29.8 | L | 0.0298 | [l] | not captured | llm (0.6) | psp412181-tbl-0002:row7:col3 | — | not captured |
| θRBC/PL [fraction of one] | `Q410` · Kp | 0.324 | not captured | not captured | not captured | not captured | llm (0.6) | psp412181-tbl-0002:row10:col3 | — | not captured |
| Change in CL when non‐pregnant [%] | `Q31` · CL_ratio | 21.2 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | psp412181-tbl-0002:row11:col3 | — | not captured |
| Difference in clearance in Mozambique [%] | `Q22` · CL | -20.2 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp412181-tbl-0002:row14:col3 | — | 12.3 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q80 ('Qp2/F [L/h]b', value '0.122') — already have one for this compound
- dropped duplicate Q82 ('Vp2/F [L]b', value '251') — already have one for this compound
- routed 'Site effect (scaling on observations) in Mozambique [%]' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Site effect (scaling on observations) in Sudan [%]' — extend the ontology if this is a real PK parameter (source ['psp412181-tbl-0002:row16:col3'])
- dropped unlinked row (NIL): 'Site effect (scaling on observations) in Zambia [%]' — extend the ontology if this is a real PK parameter (source ['psp412181-tbl-0002:row17:col3'])
- implicit units: 'Change in CL when non‐pregnant [%]' — the LLM proposed '%', whose dimension does not fit Q31; left unset
- implicit units: 'Difference in clearance in Mozambique [%]' — the LLM proposed '%', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pyrimethamine
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412181-tbl-0002:row3:col2 = '0.0185, 0.0349'
- unparsed cell psp412181-tbl-0002:row4:col2 = '13.2, 14.4'
- unparsed cell psp412181-tbl-0002:row4:col4 = '151, 166'
- unparsed cell psp412181-tbl-0002:row5:col2 = '0.464, 0.565'
- unparsed cell psp412181-tbl-0002:row5:col4 = '1.11, 2.70'
- unparsed cell psp412181-tbl-0002:row6:col2 = '0.0136, 0.0269'
- unparsed cell psp412181-tbl-0002:row6:col4 = '0.72, 1.61'
- unparsed cell psp412181-tbl-0002:row7:col2 = '82, 212'
- unparsed cell psp412181-tbl-0002:row7:col4 = '23.9, 32.1'
- unparsed cell psp412181-tbl-0002:row8:col4 = '0.064, 0.166'
- unparsed cell psp412181-tbl-0002:row9:col4 = '142, 317'
- unparsed cell psp412181-tbl-0002:row10:col2 = '0.023, 0.189'
- unparsed cell psp412181-tbl-0002:row10:col4 = '0.106, 0.525'
- unparsed cell psp412181-tbl-0002:row11:col2 = '−88.7, −66.6'
- unparsed cell psp412181-tbl-0002:row11:col4 = '12.3, 24.9'
- unparsed cell psp412181-tbl-0002:row12:col2 = '5.47, 6.75'
- unparsed cell psp412181-tbl-0002:row13:col2 = '2.90, 7.41'
- unparsed cell psp412181-tbl-0002:row14:col4 = '−28.4, −17.4'
- unparsed cell psp412181-tbl-0002:row15:col2 = '8.2, 24.6'
- unparsed cell psp412181-tbl-0002:row15:col4 = '41.5, 60.6'
- unparsed cell psp412181-tbl-0002:row16:col2 = '4.8, 20.0'
- unparsed cell psp412181-tbl-0002:row16:col4 = '19.6, 35.6'
- unparsed cell psp412181-tbl-0002:row17:col2 = '−30.7, −22.2'
- unparsed cell psp412181-tbl-0002:row17:col4 = '−12.1, −3.9'
- unparsed cell psp412181-tbl-0002:row18:col2 = '21.8, 51.2'
- unparsed cell psp412181-tbl-0002:row18:col4 = '7.1, 16.9'
- unparsed cell psp412181-tbl-0002:row19:col2 = '16.7, 22.9'
- unparsed cell psp412181-tbl-0002:row19:col4 = '12.9, 21.5'
- unparsed cell psp412181-tbl-0002:row20:col4 = '11.8, 22.3'
- unparsed cell psp412181-tbl-0002:row21:col2 = '42.4, 70.1'
- unparsed cell psp412181-tbl-0002:row22:col2 = '55.9, 71.9'
- unparsed cell psp412181-tbl-0002:row23:col2 = '2.00, 2.21'
- unparsed cell psp412181-tbl-0002:row23:col4 = '2.01, 2.68'
- unparsed cell psp412181-tbl-0002:row24:col2 = '14.8, 17.5'
- unparsed cell psp412181-tbl-0002:row24:col4 = '15.1, 18.7'
- unparsed cell psp412181-tbl-0002:row25:col2 = '54.2, 63.9'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.526 (10/19 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[change in cl when non‐pregnant [%]].parameter_id` | Q31 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[difference in clearance in mozambique [%]]` | -20.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp1/f [l/h]b].parameter_id` | Q80 | Q69 | mismatch |
| `gpt-oss-120b` | `parameters[qp2/f [l/h]b]` | not captured | 0.122 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 3.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total]` | not captured | 97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θrbc/pl [fraction of one]]` | 0.324 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulfadoxine/pyrimethamine | pyrimethamine and sulfadoxine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pyrimethamine | pyrimethamine and sulfadoxine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q22 | fail | not captured | -20.2 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row3:col3', 'psp412181-tbl-0002:row3:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412181-tbl-0002:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row5:col3'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row6:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412181-tbl-0002:row7:col3'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row14:col3'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row11:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.35 L/h | not captured | not captured | ['psp412181-tbl-0002:row3:col3', 'psp412181-tbl-0002:row3:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 163 L | not captured | not captured | ['psp412181-tbl-0002:row4:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 29.8 L | not captured | not captured | ['psp412181-tbl-0002:row7:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pyrimethamine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `de_2017` / `de_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:08 UTC</sub>
