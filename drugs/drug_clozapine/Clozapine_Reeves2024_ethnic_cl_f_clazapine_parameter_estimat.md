<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Reeves_2024 \u00b7 ethnic_cl_f_clazapine_parameter_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Parker_2001_beta_EEG&quot;,&quot;label&quot;:&quot;Parker_2001 \u00b7 beta EEG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/pd_Parker_2001_beta_EEG.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Parker_2001_theta_EEG&quot;,&quot;label&quot;:&quot;Parker_2001 \u00b7 theta EEG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/pd_Parker_2001_theta_EEG.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Shang_2014_PANSS&quot;,&quot;label&quot;:&quot;Shang_2014 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/pd_Shang_2014_PANSS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Reeves2024_ethnic_cl_f_clazapine_parameter_estimat`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (kabs, CL/F, Km and CL/F), so that value has no SI equivalent. Extracted — clozapine: kabs 0.69 unit, V/F 1.46e+03 L, CL/F 1 unit; norclozapine: kfm 0.005 h-1, Km 1 unit, CL 12 L h-1, CL/F 0.75 unit.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of iiv cl/f clozapine: this record has none, the second reading 93; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Reeves S et al., A population pharmacokinetic model to g…, British journal of clinical… (2024)
  ·  DOI: [10.1111/bcp.15691](https://doi.org/10.1111/bcp.15691)

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Reeves2024_ethnic_cl_f_clazapine_parameter_estimat" status="rejected" stale="false" population="patients with schizophrenia" measured-compound="clozapine" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h-1; fixed) | `Q49` · kabs | 0.69 | unit | not captured | [unit] | not captured | exact (1.0) | Reeves_2024_table_2:row1:col9 | — | not captured |
| V/Fclazapine (L) | `Q76` · V/F | 1460 | L | 1.46 | [l] | not captured | llm (0.6) | Reeves_2024_table_2:row2:col9 | — | not captured |
| β Weight_V/Fclazapine | `Q27` · CL/F | 1.0 | unit | not captured | [unit] | not captured | llm (0.6) | Reeves_2024_table_2:row3:col9 | — | not captured |
| Km (h-1) | `Q305` · kfm | 0.005 | h-1 | 1.388888888888889e-06 | [1] / [h] | not captured | exact (1.0) | Reeves_2024_table_2:row6:col9 | — | not captured |
| β Weight_V/Fnorclozapine | `Q1` · Km | 1 | unit | not captured | [unit] | not captured | llm (0.6) | Reeves_2024_table_2:row12:col9 | — | 0.12 (None% RSE) |
| CL/Fnorclozapine (L h-1) | `Q22` · CL | 12.0 | L h-1 | 3.3333333333333333e-06 | [l] / [h] | not captured | exact (1.0) | Reeves_2024_table_2:row13:col9 | — | not captured |
| β Weight_CL/Fnorclozapine | `Q27` · CL/F | 0.75 | unit | not captured | [unit] | not captured | llm (0.6) | Reeves_2024_table_2:row14:col9 | — | not captured |
| theta_cl_f_weight_power | `Q900` · theta_cl_f_weight_power | -0.013 | not captured | not captured | not captured | not captured | not captured (not captured) | Reeves_2024_table_2:row9:col9 | — | not captured |
| CL/Fclazapine | `Q900` · CL/Fclazapine | 20.2 | L h-1 | 5.611111111111111e-06 | not captured | not captured | not captured (not captured) | Reeves_2024_table_2:row4:col9 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/Fclazapine (L h-1) | Q22 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω1 V/Fclazapine' routed out of structural estimates ('Inter-individual standard deviation')
- table section iiv: 'ω2 CL/Fclazapine' routed out of structural estimates ('Inter-individual standard deviation')
- table section iiv: 'ω3 Km' routed out of structural estimates ('Inter-individual standard deviation')
- table section iiv: 'ω4 CL/Fnorclozapine' routed out of structural estimates ('Inter-individual standard deviation')
- unit_dimension_mismatch: 'Ka (h-1; fixed)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'β Weight_V/Fclazapine' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'β Weight_CL/Fclazapine' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('β Weight_CL/Fclazapine', value '0.75') — already have one for this compound
- 'β Smoking_CL/Fclazapine' is a β covariate effect on S, not Q27 (llm link set aside)
- dropped unlinked row (NIL): 'β Smoking_CL/Fclazapine' — extend the ontology if this is a real PK parameter (source ['Reeves_2024_table_2:row7:col9'])
- 'β Female_CL/Fclazapine' is a β covariate effect on Fe, not Q27 (llm link set aside)
- dropped unlinked row (NIL): 'β Female_CL/Fclazapine' — extend the ontology if this is a real PK parameter (source ['Reeves_2024_table_2:row8:col9'])
- unit_dimension_mismatch: 'β Afro-Caribbean_CL/Fclazapine' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('β Afro-Caribbean_CL/Fclazapine', value '+0.12') — already have one for this compound
- unit_dimension_mismatch: 'β Asian_CL/Fclazapine' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('β Asian_CL/Fclazapine', value '-0.19') — already have one for this compound
- unit_dimension_mismatch: 'β Weight_V/Fnorclozapine' → Q1 (unit '[luminosity] / [length] ** 2' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'β Weight_CL/Fnorclozapine' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'α intercept' — extend the ontology if this is a real PK parameter (source ['Reeves_2024_table_2:row21:col9'])
- dropped unlinked row (NIL): 'α Clozapine (mg L-1)' — extend the ontology if this is a real PK parameter (source ['Reeves_2024_table_2:row22:col9'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clozapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- bound model equation to Q22 (CL): clozapinei = μCL/F clozapine *(weight/70)^0.75 * (age i -40)^
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL/Fclazapine (L h-1)'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'ethnic cl/f_clazapine parameter estimates' subgroup of Reeves_2024 (paper reports 6 populations: age exp cl/f_clazapine parameter estimates, base model, base model parameter estimates, ethnic cl/f_clazapine parameter estimates, sex cl/f_clazapine parameter estimates, smoke cl/f_clazapine parameter estimates)
- row roles: 3 per-group rows of clozapine covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 25 linked by role; re-tagged parent→norclozapine ×34, clozapine→norclozapine ×16
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- table Reeves_2024_table_2: unbound_uncertainty
- captured model equation clozapinei = μCL/F clozapine *(weight/70)^0.75 * (age i -40)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.6:27b-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[iiv cl/f clozapine]` | not captured | 93 | only_one_extracted |
| `gpt-oss:120b` | `parameters[βsmoker cl/f clozapine]` | 0.37 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['Reeves_2024_table_2:row12:col9'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Reeves_2024_table_2:row4:col9'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Reeves_2024_table_2:row13:col9'] |
| C5_dimension_Q27 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['Reeves_2024_table_2:row3:col9'] |
| C5_dimension_Q27 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['Reeves_2024_table_2:row14:col9'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Reeves_2024_table_2:row6:col9'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['Reeves_2024_table_2:row1:col9'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Reeves_2024_table_2:row2:col9'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12 L/h | not captured | not captured | ['Reeves_2024_table_2:row13:col9'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.46e+03 L | not captured | not captured | ['Reeves_2024_table_2:row2:col9'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_clozapine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Reeves_2024` / `Reeves_2024::ethnic_cl_f_clazapine_parameter_estimates`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:23 UTC</sub>
