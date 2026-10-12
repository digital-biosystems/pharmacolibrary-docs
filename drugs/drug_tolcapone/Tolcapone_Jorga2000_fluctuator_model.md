<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;tolcapone&quot;,&quot;href&quot;:&quot;drugs/drug_tolcapone/&quot;},{&quot;label&quot;:&quot;Jorga_2000 \u00b7 fluctuator_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolcapone — `Tolcapone_Jorga2000_fluctuator_model`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The tolcapone record was rejected because the hepatic clearance covariate effect CLH is negative (-0.81), the peripheral volume V2 carries a relative unit (V p) instead of litres, and the three-compartment structure contains an unreachable compartment.**

The covariate parameter CLH (hepatic portion of clearance) has value -0.81, an implausible negative clearance shift. The peripheral volume V2 is reported as 1.08 in units of 'V p', a relative scale that could not be converted to SI, so no litres value reached the model. Additionally, the 3-compartment topology includes a compartment with no path from the dose, and the terminal half-life t1/2z (0.55) and volume V (1.40) are labelled with volume units despite being half-life and volume parameters respectively. Extracted — tolcapone: CL 4.8 l h -1, V1 16 l, kabs 1.7 h, tlag 0.4 h, V2 1.08 V p, Frel 0.88 F, CLnorm 0.73 CL, CLH -0.81 CL, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of h dose400mg: this record has 1.40, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Jorga K et al., Population pharmacokinetics of tolcapon…, British journal of clinical… (2000)
  ·  DOI: [10.1046/j.1365-2125.2000.00113.x](https://doi.org/10.1046/j.1365-2125.2000.00113.x)

<div class="pk-model-meta" hidden drug="tolcapone" model-id="Tolcapone_Jorga2000_fluctuator_model" status="rejected" stale="false" population="parkinsonian patients" measured-compound="tolcapone" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL ( l h -1 ) | `Q22` · CL | 4.8 | l h -1 | 1.3333333333333332e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3 | — | not captured |
| V c ( l) | `Q63` · V1 | 16 | l | 0.016 | [l] | not captured | space_fold (0.95) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3 | — | not captured |
| ka (h | `Q49` · kabs | 1.7 | h | not captured | [h] | not captured | llm_confirmed (0.6) | tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col5 | — | not captured |
| t lag (h) | `Q83` · tlag | 0.4 | h | 1440.0 | [h] | not captured | space_fold (0.95) | tab_1:row8:col3 | — | not captured |
| g(V p ) | `Q64` · V2 | 1.08 | V p | not captured | [vp] | not captured | llm (0.6) | tab_1:row12:col2 | — | not captured |
| h Food(F) | `Q87` · Frel | 0.88 | F | not captured | [f] | not captured | llm (0.6) | tab_1:row14:col1, tab_1:row14:col2, tab_1:row14:col3 | — | not captured |
| h LBW(CL) | `Q354` · CLnorm | 0.73 | CL | not captured | [cl] | not captured | llm (0.6) | tab_1:row15:col1, tab_1:row15:col2 | — | not captured |
| h Protein(CL) | `Q25` · CLH | -0.81 | CL | not captured | [cl] | not captured | llm (0.6) | tab_1:row16:col1, tab_1:row16:col2 | — | not captured |
| h Dose50mg (V) | `Q57` · t1/2z | 0.55 | V | not captured | [v] | not captured | llm (0.6) | tab_1:row20:col1, tab_1:row20:col2 | — | not captured |
| h Dose400mg (V) | `Q61` · V | 1.40 | V | not captured | [v] | not captured | llm (0.6) | tab_1:row21:col1, tab_1:row21:col2 | — | not captured |
| e (mult) | `Q38` · E | 0.22 | mult | not captured | [µl] · [m] · [t] | not captured | exact (1.0) | tab_1:row27:col1, tab_1:row27:col2, tab_1:row27:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iov: 'IOV (V p )' routed out of structural estimates ('Inter-occasion variability s 2')
- table section iov: 'IOV (CL)' routed out of structural estimates ('Inter-occasion variability s 2')
- unit_dimension_mismatch: 'ka (h' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'g(CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('g(CL)', value '0.02') — already have one for this compound
- unit_dimension_unknown: 'V c' (V1)
- dropped duplicate Q63 ('g(V c )', value '0.17') — already have one for this compound
- unit_dimension_unknown: 'V p' (V2)
- unit_dimension_unknown: 'F' (Frel)
- unit_dimension_mismatch: 'h LBW(CL)' → Q354 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'h Protein(CL)' → Q25 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'Vc' (V1)
- dropped duplicate Q63 ('h Protein(Vc)', value '-7.34') — already have one for this compound
- dropped duplicate Q63 ('h LBW(Vc)', value '0.65') — already have one for this compound
- unit_dimension_mismatch: 'h CLCr(CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('h CLCr(CL)', value '1.19') — already have one for this compound
- unit_dimension_unknown: 'V' (t1/2z)
- unit_dimension_unknown: 'V' (V)
- unit_dimension_unknown: 'Vp' (t1/2z)
- dropped duplicate Q57 ('h Albumin (Vp)', value '2.82') — already have one for this compound
- unit_dimension_unknown: 'mult' (E)
- unit_dimension_unknown: 'add' (E)
- dropped duplicate Q38 ('e (add)', value '0.52') — already have one for this compound
- dropped unlinked row (NIL): '200 mg' — extend the ontology if this is a real PK parameter (source ['Jorga_2000_table_3:row1:col4'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL ( l h -1 )); Q63 (V c ( l)); Q64 (g(V p )); Q61 (h Dose400mg (V))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tolcapone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'fluctuator model' subgroup of Jorga_2000 (paper reports 2 populations: fluctuator model, non-fluctuator model)

**Extraction notes:**
- unparsed cell tab_1:row7:col1 = '-1 )'
- unparsed cell tab_1:row10:col1 = '0.08 (29%)'
- unparsed cell tab_1:row10:col3 = '0.06 (25%)'
- unparsed cell tab_1:row11:col1 = '0.42 (72%)'
- unparsed cell tab_1:row11:col3 = '1.34 (168%)'
- unparsed cell tab_1:row12:col1 = '0.28 (57%)'
- unparsed cell Jorga_2000_table_3:row0:col2 = '-1 h)'
- unparsed cell Jorga_2000_table_3:row1:col2 = '-1 h)'
- unparsed cell Jorga_2000_table_3:row1:col3 = '2.9±2.2 26.5±7.8'
- unparsed cell Jorga_2000_table_3:row2:col2 = '5.5±4.1 55.8±16.7'
- unparsed cell Jorga_2000_table_3:row2:col3 = '8.0±4.2 54.3±19.8'
- companion parameter table 3 transcribed (4 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (12/16 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[h dose400mg]` | 1.40 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[h dose50mg].parameter_id` | Q57 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[h lbw]` | 0.73 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[h protein]` | -0.81 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q25 | fail | not captured | -0.81 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3'] |
| C5_dimension_Q25 | fail | [length] ** 3 | CL | not captured | not captured | ['tab_1:row16:col1', 'tab_1:row16:col2'] |
| C5_dimension_Q354 | fail | [length] ** 3 | CL | not captured | not captured | ['tab_1:row15:col1', 'tab_1:row15:col2'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_1:row8:col3'] |
| C5_unit_missing_Q57 | fail | [time] | V | not captured | not captured | ['tab_1:row20:col1', 'tab_1:row20:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | V | not captured | not captured | ['tab_1:row21:col1', 'tab_1:row21:col2'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | V p | not captured | not captured | ['tab_1:row12:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.8 | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.8 L/h | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 16 L | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tolcapone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jorga_2000` / `Jorga_2000::fluctuator_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 14:31 UTC</sub>
