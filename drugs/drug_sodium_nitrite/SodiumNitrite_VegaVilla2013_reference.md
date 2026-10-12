<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sodium nitrite&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_nitrite/&quot;},{&quot;label&quot;:&quot;Vega-Villa_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumNitrite_Grimm2023_reference&quot;,&quot;label&quot;:&quot;Grimm_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_nitrite/SodiumNitrite_Grimm2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium nitrite — `SodiumNitrite_VegaVilla2013_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The sodium nitrite model was rejected because the nitric oxide metabolite is unlinked from the dose path, and the parameter kNO3_R (5.91E-06 min−1.µmol−1) carries a unit that could not be converted to SI, so it reached the record without an SI value.**

The structure lists nitric oxide as a metabolite formed from nitrite with 0 compartments, and its link to nitrate via kHbNO2 does not give it a path from the administered dose, so the check for unreachable compartments or unlinked metabolites failed. The unit min−1.µmol−1 on the nitrate formation rate constant kNO3_R could not be converted to SI, leaving that parameter without an SI value. The remaining parameters, including nitrite clearance CL_E0_NO2 of 0.382 l.min−1 and volumes of 12.418 l, were extracted with values. Extracted — nitrite: kcomp 1.75 min−1, ktr 6.83e-05 min−1, CLm/F 0.382 l.min−1, V 12.4 l; nitrate: kcomp 0.16 min−1, CL 0.00941 l.min−1, V 12.4 l, kfm 5.91e-06 min−1.µmol−1; nitric oxide: kfm 0.234 min−1; methemoglobin: V2 3.28 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has nitrite → nitrate (metabolism); nitrite → nitric oxide (metabolism); nitrate → nitrite (interconversion) …, the second reading none; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `sodium nitrite`, measured `nitrite`.

## Citation
Vega-Villa K et al., Quantitative Systems Pharmacology Model…, CPT: pharmacometrics & syst… (2013)
  ·  DOI: [10.1038/psp.2013.35](https://doi.org/10.1038/psp.2013.35)

<div class="pk-model-meta" hidden drug="sodium nitrite" model-id="SodiumNitrite_VegaVilla2013_reference" status="rejected" stale="false" population="healthy adults" measured-compound="nitrite" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| kTP_NO2 (min−1) | `Q48` · kcomp | 1.745 | min−1 | 0.029083333333333336 | [1] / [min] | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row1:col2 | — | not captured |
| kPT_NO3 (min−1) | `Q48` · kcomp | 0.160 | min−1 | 0.0026666666666666666 | [1] / [min] | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row2:col2 | — | not captured |
| kMYO (min−1) | `Q305` · kfm | 0.234 | min−1 | 0.0039000000000000003 | [1] / [min] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row5:col2 | — | not captured |
| kT_RDT (min−1) | `Q306` · ktr | 6.83E-05 | min−1 | 1.1383333333333334e-06 | [1] / [min] | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row6:col2 | — | not captured |
| CL_E0_NO2 (l.min−1) | `Q351` · CLm/F | 0.382 | l.min−1 | 6.366666666666667e-06 | [l] / [min] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row7:col2 | — | not captured |
| V_NO2_P (l) | `Q61` · V | 12.418 | l | 0.012418 | [l] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row9:col2 | — | not captured |
| CL_E0_NO3 (l.min−1) | `Q22` · CL | 9.41E-03 | l.min−1 | 1.5683333333333333e-07 | [l] / [min] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row10:col2 | — | not captured |
| V_NO3_P (l) | `Q61` · V | 12.418 | l | 0.012418 | [l] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row12:col2 | — | not captured |
| kNO3_R (min−1.µmol−1) | `Q305` · kfm | 5.91E-06 | min−1.µmol−1 | not captured | [1] / [[min] · [µM] · [ol]] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row15:col2 | — | not captured |
| S_MetHb | `Q900` · equation variable | 0.045 | not captured | not captured | not captured | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row18:col2 | — | not captured |
| V_R_MetHb (l) | `Q64` · V2 | 3.284 | l | 0.003284 | [l] | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row21:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'kPT_NO2 (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kTP_NO2 (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kNO2_RDT (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_NO2_P (l)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'CL_E0_NO3 (l.min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kPR_NO2 (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kRP_NO3 (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kNO3_R (min−1.µmol−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'S_MetHb' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_R_NO2 (l)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_R_MetHb (l)' routed out of structural estimates ('IIV (%CV)')
- table section residual_error: 'Additive error for plasma nitrite (µmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for plasma nitrite (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for RBC nitrite (µmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for RBC nitrite (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for plasma and RBC nitrate (µmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for plasma and RBC nitrate (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for methemoglobin (µmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for methemoglobin (%)' routed out of structural estimates ('Residual variability')
- dropped PD-category row 'kPT_NO2 (min−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Vega-Villa_2013_table_p4_1:row0:col2'])
- dropped duplicate Q48 ('kTP_NO3 (min−1)', value '0.515') — already have one for this compound
- dropped PD-category row 'kNO2_RDT (min−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Vega-Villa_2013_table_p4_1:row4:col2'])
- dropped unlinked row (NIL): 'S_NO2' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row8:col2'])
- dropped unlinked row (NIL): 'S_NO3' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row11:col2'])
- dropped PD-category row 'kPR_NO2 (min−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Vega-Villa_2013_table_p4_1:row13:col2'])
- dropped duplicate Q48 ('kRP_NO3 (min−1)', value '5.17E-03') — already have one for this compound
- unit_dimension_unknown: 'min−1.µmol−1' (kfm)
- dropped duplicate Q305 ('kNO_R (min−1.µmol−1)', value '1.42E-04') — already have one for this compound
- dropped PD-category row 'kDEG (min−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Vega-Villa_2013_table_p4_1:row17:col2'])
- dropped duplicate Q63 ('V_R_NO2 (l)', value '5.816') — already have one for this compound
- dropped duplicate Q63 ('V_R_NO3 (l)', value '4.391') — already have one for this compound
- unit_dimension_unknown: 'min−2.µmol−1' (kfm)
- dropped duplicate Q305 ('K_HbNO (min−2.µmol−1)', value '2.86E-05') — already have one for this compound
- dropped unlinked row (NIL): 'K_HbNO2 (min−2.µmol−1)' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row23:col2'])
- implicit units: 'kNO3_R (min−1.µmol−1)' — the LLM proposed '1/min/µmol', whose dimension does not fit Q305; left unset
- metabolite nitrite: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V_NO2_P (l)' Q63→Q61 for nitrite — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'V_NO3_P (l)' Q63→Q61 for nitrate — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nitrite
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 16 linked by role; re-tagged parent→nitrite ×19, parent→nitrate ×13, parent→nitric oxide ×4, parent→methemoglobin ×4
- review gap-fill skipped: this record measures 'nitrite', not sodium_nitrite — the review values are the parent's

**Extraction notes:**
- final table tbl1: grid unusable → re-running vision table extraction for Vega-Villa_2013

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.091 (2/22 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['nitrite', 'nitrate', 'metabolism'], ['nitrite', 'nitric oxide', 'metabolism'], ['nitrate', 'nitrite', 'interconversion'], ['nitric oxide', 'nitrate', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl_e0_no2]` | not captured | 0.382 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_e0_no2]` | 0.382 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_e0_no3]` | 9.41E-03 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kmyo]` | 0.234 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kno3_r]` | not captured | 5.91E-06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kno3_r]` | 5.91E-06 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kpt_no2]` | not captured | 0.108 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kpt_no3]` | 0.160 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[krp_no3]` | not captured | 5.17E-03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kt_rdt]` | 6.83E-05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ktp_no2]` | not captured | 1.745 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ktp_no2]` | 1.745 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ktp_no3]` | not captured | 0.515 | only_one_extracted |
| `gpt-oss-120b` | `parameters[s_methb]` | 0.045 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_no2_p]` | not captured | 12.418 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_no2_p]` | 12.418 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_no3_p]` | 12.418 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_r_methb]` | 3.284 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row10:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row5:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row6:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row7:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row1:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row12:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row21:col2'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | min−1.µmol−1 | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row15:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['kNO2_RDT'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.565 L/h | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row10:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.4 L | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row9:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.4 L | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row12:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.28 L | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row21:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sodium_nitrite/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vega-Villa_2013` / `Vega-Villa_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:28 UTC</sub>
