<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;tafenoquine&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/&quot;},{&quot;label&quot;:&quot;Thakkar_2018_2 \u00b7 median_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafenoquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tafenoquine_Watson2022_reference&quot;,&quot;label&quot;:&quot;Watson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tafenoquine — `Tafenoquine_Thakkar2018v2_median_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C7 apparent-parameter coherence violated (double correction).**

A reported unit could not be converted (Frel), so that value has no SI equivalent. Extracted — tafenoquine: CL/F 2.96 liters/h, V2/F 913 liters, Q/F 5.1 liters/h, V3/F 665 liters, tlag 0.93 h, kabs 0.254 h^-1, Frel 0.866 capsule.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tafenoquine, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Thakkar N et al., Population Pharmacokinetics of Tafenoqu…, Antimicrobial agents and ch… (2018)
  ·  DOI: [10.1128/AAC.00711-18](https://doi.org/10.1128/AAC.00711-18)

<div class="pk-model-meta" hidden drug="tafenoquine" model-id="Tafenoquine_Thakkar2018v2_median_estimate" status="rejected" stale="false" population="healthy volunteers and patients with malaria" measured-compound="tafenoquine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (liters/h) | `Q27` · CL/F | 2.96 | liters/h | 8.222222222222222e-07 | [l] / [h] | not captured | exact (1.0) | Thakkar_2018_2_table_p4_1:row0:col2 | — | not captured |
| V_2/F (liters) | `Q82` · V2/F | 913 | liters | 0.913 | [l] | not captured | exact (1.0) | Thakkar_2018_2_table_p4_1:row1:col2 | — | not captured |
| Q/F (liters/h) | `Q69` · Q/F | 5.10 | liters/h | 1.4166666666666665e-06 | [l] / [h] | not captured | exact (1.0) | Thakkar_2018_2_table_p4_1:row2:col2 | — | not captured |
| V_3/F (liters) | `Q78` · V3/F | 665 | liters | 0.665 | [l] | not captured | exact (1.0) | Thakkar_2018_2_table_p4_1:row3:col2 | — | not captured |
| Absorption lag time (h) | `Q83` · tlag | 0.930 | h | 3348.0 | [h] | not captured | exact (1.0) | Thakkar_2018_2_table_p4_1:row4:col2 | — | not captured |
| K_a (h^-1) | `Q49` · kabs | 0.254 | h^-1 | 7.055555555555556e-05 | [1] / [h] | not captured | exact (1.0) | Thakkar_2018_2_table_p4_1:row5:col2 | — | not captured |
| Relative bioavailability (capsule) | `Q87` · Frel | 0.866 | capsule | not captured | not captured | not captured | exact (1.0) | Thakkar_2018_2_table_p4_1:row7:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('Capsule effect on K_a', value '0.914') — already have one for this compound
- unit_dimension_unknown: 'healthy volunteers/patients' (V2/F)
- dropped duplicate Q82 ('V_2/F ratio (healthy volunteers/patients)', value '1.35') — already have one for this compound
- unit_dimension_unknown: 'healthy volunteers/patients' (V3/F)
- dropped duplicate Q78 ('V_3/F ratio (healthy volunteers/patients)', value '0.340') — already have one for this compound
- dropped duplicate Q27 ('IV CL/F', value '32.0') — already have one for this compound
- dropped duplicate Q82 ('IV V_2/F', value '34.3') — already have one for this compound
- dropped unlinked row (NIL): 'IV CL–V_2 block' — extend the ontology if this is a real PK parameter (source ['Thakkar_2018_2_table_p4_1:row12:col2'])
- dropped duplicate Q49 ('IV K_a', value '39.6') — already have one for this compound
- dropped unlinked row (NIL): 'IV ALAG1' — extend the ontology if this is a real PK parameter (source ['Thakkar_2018_2_table_p4_1:row14:col2'])
- routed 'IV error' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tafenoquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'median estimate' subgroup of Thakkar_2018_2 (paper reports 2 populations: final run, median estimate)

**Extraction notes:**
- table Thakkar_2018_2_table_4: units_need_context
- table Thakkar_2018_2_table_4: ragged_grid
- companion parameter table 4 transcribed (4 record(s))
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag time]` | 0.904 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` | not captured | 0.904 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 2.87 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 2.87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.226 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.226 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 4.76 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 4.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` | 0.833 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` | not captured | 0.833 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 879 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | 879 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 634 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | not captured | 634 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tafenoquine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tafenoquine | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Thakkar_2018_2_table_p4_1:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Thakkar_2018_2_table_p4_1:row5:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Thakkar_2018_2_table_p4_1:row2:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Thakkar_2018_2_table_p4_1:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Thakkar_2018_2_table_p4_1:row1:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Thakkar_2018_2_table_p4_1:row4:col2'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.866 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.96 L/h | not captured | not captured | ['Thakkar_2018_2_table_p4_1:row0:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 913 L | not captured | not captured | ['Thakkar_2018_2_table_p4_1:row1:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tafenoquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Thakkar_2018_2` / `Thakkar_2018_2::median_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:44 UTC</sub>
