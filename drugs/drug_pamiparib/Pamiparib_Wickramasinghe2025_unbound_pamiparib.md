<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;pamiparib&quot;,&quot;href&quot;:&quot;drugs/drug_pamiparib/&quot;},{&quot;label&quot;:&quot;Wickramasinghe_2025 \u00b7 unbound_pamiparib&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pamiparib — `Pamiparib_Wickramasinghe2025_unbound_pamiparib`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected because the peripheral volume parameter is dimensionally inconsistent and the peripheral compartment is structurally unreachable from the dose.

<div class="pk-model-meta" hidden drug="pamiparib" model-id="Pamiparib_Wickramasinghe2025_unbound_pamiparib" status="rejected" stale="false" population="glioblastoma patients" measured-compound="pamiparib" parameterization="apparent" topology="2C"></div>

## Citation
Wickramasinghe C, Kim S, Jiang Y, Bao X, Yue Y, Jiang J et al. Population Pharmacokinetic Modeling of Total and Unbound Pamiparib in Glioblastoma Patients: Insights into Drug Disposition and Dosing Optimization. Pharmaceutics 17(4) (2025).
  ·  DOI: [10.3390/pharmaceutics17040524](https://doi.org/10.3390/pharmaceutics17040524)

## Population and dosing

**Population:** glioblastoma patients · condition glioblastoma · age group adult · n = $41.

**Dosing:** 60 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| θ1 (Ka) (h−1) | kabs | 1.86 | h−1 | 380 (None% RSE) |
| θ2 (V/F) (L) | V2/F | 441 | L |  |
| θ3 (CL/F) (L/h) | CL/F | 185 | L/h | 52 (None% RSE) |
| θ4 (Fu) | fu | 0.042 | Fu | 11 (None% RSE) |
| β1 (PCC) | C0 | 0.0083 | PCC |  |
| V/F_SD | Vmax | 0.35 |  |  |
| TV_V/F (L) | V/F | 1060 | L | 41 (None% RSE) |
| theta_q319_age | theta_q319_age | -0.016 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected because the peripheral volume parameter is dimensionally inconsistent and the peripheral compartment is structurally unreachable from the dose.**

The model defines a two-compartment structure but lists the volume parameter as 'V2/F', explicitly identifying it as the peripheral compartment volume. However, the findings indicate this compartment is orphaned, meaning there is no flow path from the dose site to this peripheral space. Additionally, a reported unit could not be converted to SI, leaving the parameter without a standardized value. Extracted — pamiparib: kabs 1.86 h−1, V2/F 441 L, CL/F 185 L/h, fu 0.042 Fu, C0 0.0083 PCC, Vmax 0.35, V/F 1.06e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pamiparib, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| θ1 (Ka) (h−1) | `Q49` · kabs | 1.86 | h−1 | 0.0005167 | 1/s | 1/h | llm_confirmed (0.6) | pharmaceutics-17-00524-t003:row2:col4, pharmaceutics-17-00524-t003:row2:col5 | 380 (None% RSE) |
| θ2 (V/F) (L) | `Q82` · V2/F | 441 | L | 0.441 | m3 | l | llm_corrected (0.6) | pharmaceutics-17-00524-t003:row3:col4, pharmaceutics-17-00524-t003:row3:col5 |  |
| θ3 (CL/F) (L/h) | `Q27` · CL/F | 185 | L/h | 5.139e-05 | m3/s | l/h | llm_confirmed (0.6) | pharmaceutics-17-00524-t003:row4:col4, pharmaceutics-17-00524-t003:row4:col5 | 52 (None% RSE) |
| θ4 (Fu) | `Q46` · fu | 0.042 | Fu |  |  | fu | llm (0.6) | pharmaceutics-17-00524-t003:row5:col4, pharmaceutics-17-00524-t003:row5:col5, Wickramasinghe_2025_table_2:row9:col3, Wickramasinghe_2025_table_2:row9:col4 | 11 (None% RSE) |
| β1 (PCC) | `Q86` · C0 | 0.0083 | PCC |  |  | pcc | llm (0.6) | pharmaceutics-17-00524-t003:row6:col4, pharmaceutics-17-00524-t003:row6:col5 |  |
| V/F_SD | `Q66` · Vmax | 0.35 |  |  |  |  | llm (0.6) | pharmaceutics-17-00524-t003:row9:col4, pharmaceutics-17-00524-t003:row9:col5 |  |
| TV_V/F (L) | `Q76` · V/F | 1060 | L | 1.06 | m3 | l | tv_prefix (0.95) | Wickramasinghe_2025_table_2:row3:col3, Wickramasinghe_2025_table_2:row3:col4 | 41 (None% RSE) |
| theta_q319_age | `Q900` · theta_q319_age | -0.016 |  |  |  |  |  | Wickramasinghe_2025_table_2:row11:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'β1 (PCC)' → Q86 (unit '[length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'β2 (Age)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-00524-t003:row7:col4', 'pharmaceutics-17-00524-t003:row7:col5'])
- dropped duplicate Q49 ('Ka_SD', value '1.66') — already have one for this compound
- dropped duplicate Q27 ('CL/F_SD', value '0.46') — already have one for this compound
- dropped unlinked row (NIL): 'Fu_SD' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-00524-t003:row11:col4', 'pharmaceutics-17-00524-t003:row11:col5'])
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Wickramasinghe_2025_table_2:row1:col3', 'Wickramasinghe_2025_table_2:row1:col4'])
- dropped duplicate Q49 ('TV_KA (h−1)', value '1.7') — already have one for this compound
- dropped duplicate Q27 ('TV_CL/F (L/h)', value '62.5') — already have one for this compound
- dropped duplicate Q46 ('TV_Fu', value '0.042') — already have one for this compound
- unit_dimension_mismatch: 'θ1 (Ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('θ1 (Ka)', value '1.7') — already have one for this compound
- unit_dimension_unknown: 'V/F' (V/F)
- dropped duplicate Q76 ('θ2 (V/F)', value '402') — already have one for this compound
- unit_dimension_unknown: 'CL/F' (CL/F)
- dropped duplicate Q27 ('θ3 (CL/F)', value '163') — already have one for this compound
- dropped unlinked row (NIL): 'β1 (PCC on V/F)' — extend the ontology if this is a real PK parameter (source ['Wickramasinghe_2025_table_2:row10:col4'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'V/F_SD' — the LLM proposed '1', whose dimension does not fit Q66; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pamiparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'unbound pamiparib' subgroup of Wickramasinghe_2025 (paper reports 2 populations: total pamiparib, unbound pamiparib)

**Extraction notes:**
- unparsed cell pharmaceutics-17-00524-t003:row2:col3 = '(0.64, 4.15)'
- unparsed cell pharmaceutics-17-00524-t003:row2:col6 = '(0.67, 4.07)'
- unparsed cell pharmaceutics-17-00524-t003:row3:col3 = '(8, 30)'
- unparsed cell pharmaceutics-17-00524-t003:row3:col6 = '(219, 787)'
- unparsed cell pharmaceutics-17-00524-t003:row4:col3 = '(3.6, 15.9)'
- unparsed cell pharmaceutics-17-00524-t003:row4:col6 = '(83, 454)'
- unparsed cell pharmaceutics-17-00524-t003:row5:col3 = '(0.039, 0.044)'
- unparsed cell pharmaceutics-17-00524-t003:row5:col6 = '(0.039, 0.044)'
- unparsed cell pharmaceutics-17-00524-t003:row6:col3 = '(0.0035, 0.015)'
- unparsed cell pharmaceutics-17-00524-t003:row6:col6 = '(0.0027, 0.014)'
- unparsed cell pharmaceutics-17-00524-t003:row7:col3 = '(−0.03, −0.0054)'
- unparsed cell pharmaceutics-17-00524-t003:row7:col6 = '(−0.032, −0.0053)'
- unparsed cell pharmaceutics-17-00524-t003:row8:col3 = '(1.0, 2.3)'
- unparsed cell pharmaceutics-17-00524-t003:row8:col6 = '(1.1, 2.34)'
- unparsed cell pharmaceutics-17-00524-t003:row9:col3 = '(0.16, 0.5)'
- unparsed cell pharmaceutics-17-00524-t003:row9:col6 = '(0.16, 0.5)'
- unparsed cell pharmaceutics-17-00524-t003:row10:col3 = '(0.35, 0.56)'
- unparsed cell pharmaceutics-17-00524-t003:row10:col6 = '(0.37, 0.37)'
- unparsed cell pharmaceutics-17-00524-t003:row11:col3 = '(0.06, 0.16)'
- unparsed cell pharmaceutics-17-00524-t003:row11:col6 = '(0.059, 0.15)'
- companion parameter table 2 transcribed (56 record(s), model stage 'final')
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (7/14 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q319_age]` | -0.016 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tv_v/f]` | 1060 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f_sd]` | 0.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β1].parameter_id` | Q86 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[θ2 (v/f)].parameter_id` | Q82 | Q76 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | pamiparib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pamiparib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-17-00524-t003:row4:col4', 'pharmaceutics-17-00524-t003:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-17-00524-t003:row2:col4', 'pharmaceutics-17-00524-t003:row2:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Wickramasinghe_2025_table_2:row3:col3', 'Wickramasinghe_2025_table_2:row3:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['pharmaceutics-17-00524-t003:row3:col4', 'pharmaceutics-17-00524-t003:row3:col5'] |
| C5_dimension_Q86 | fail | [length] ** 3 | PCC | ['pharmaceutics-17-00524-t003:row6:col4', 'pharmaceutics-17-00524-t003:row6:col5'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 |  | ['pharmaceutics-17-00524-t003:row9:col4', 'pharmaceutics-17-00524-t003:row9:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 185 L/h | ['pharmaceutics-17-00524-t003:row4:col4', 'pharmaceutics-17-00524-t003:row4:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.06e+03 L | ['Wickramasinghe_2025_table_2:row3:col3', 'Wickramasinghe_2025_table_2:row3:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 441 L | ['pharmaceutics-17-00524-t003:row3:col4', 'pharmaceutics-17-00524-t003:row3:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpamiparib%5D%20Pamiparib_Wickramasinghe2025_unbound_pamiparib&body=Drug%3A%20pamiparib%0ARecord%3A%20Pamiparib_Wickramasinghe2025_unbound_pamiparib%0APaper%3A%20Wickramasinghe_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pamiparib/Pamiparib_Wickramasinghe2025_unbound_pamiparib%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 22:35 UTC</sub>
