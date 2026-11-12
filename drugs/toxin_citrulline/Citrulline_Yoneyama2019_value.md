<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Citrulline&quot;,&quot;href&quot;:&quot;drugs/toxin_citrulline/&quot;},{&quot;label&quot;:&quot;Yoneyama_2019 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citrulline_Aschner2023_reference&quot;,&quot;label&quot;:&quot;Aschner_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_citrulline/Citrulline_Aschner2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Citrulline — `Citrulline_Yoneyama2019_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Irinotecan's metabolic Vmax has incorrect substance-based units, and SN-38's fm value is mislabeled as a feedback parameter.

<div class="pk-model-meta" hidden drug="Citrulline" model-id="Citrulline_Yoneyama2019_value" status="rejected" stale="false" population="rats and humans (translational model)" measured-compound="Citrulline" parameterization="apparent" topology="manual_model_class"></div>

## Citation
Yoneyama T, Abdul-Hadi K, Brown A, Guan E, Wagoner M, Zhu AZX. A Citrulline-Based Translational Population System Toxicology Model for Gastrointestinal-Related Adverse Events Associated With Anticancer Treatments. CPT: pharmacometrics & systems pharmacology 8(12):951-961 (2019).
  ·  DOI: [10.1002/psp4.12475](https://doi.org/10.1002/psp4.12475)

## Population and dosing

**Population:** rats and humans (translational model) · condition cancer treatment · age group adult.

**Dosing:** 1.8, 6.25, 7.2, 12.5, 25, 50, 100, 125, 175, 350 mixed, ip/iv, multiple.

**Dosed compound ≠ measured compound:** dosed Irinotecan, measured Citrulline.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Vmax | Vmax | 20.6 | nmol/hour/kg | 23.3 | 36.8 (None% RSE) |
| L/hour/kg | CL | 16.6 | Intercompartmental clearance of irinotecan |  |  |
| L/kg | V | 14.2 | Peripheral volume of irinotecan |  |  |
| CLm | CLm/F | 0.464 | L/hour/kg | 4.6 | 45.2 (None% RSE) |
| — | fm | 30.6 | feedback Parameter to stem cells |  |  |
| 1/hour | kabs | 18.0 | Absorption rate constant of SN‐38 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Irinotecan's metabolic Vmax has incorrect substance-based units, and SN-38's fm value is mislabeled as a feedback parameter.**

The maximum metabolic rate for irinotecan to SN-38 is 20.6 nmol/hour/kg, which conflicts with the required mass-based dimensions. The fraction of irinotecan converted to SN-38 is listed as 30.6 with a nonsensical unit of 'feedback Parameter to stem cells'. These unit and label inconsistencies violate parameter coherence rules, resulting in the model's rejection. Extracted — citrulline: Vmax 20.6 nmol/hour/kg, CL 16.6 Intercompartmental clearance of irinotecan, V 14.2 Peripheral volume of irinotecan, CLm/F 0.464 L/hour/kg; SN-38: fm 30.6 feedback Parameter to stem cells, kabs 18 Absorption rate constant of SN‐38.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vmax | `Q66` · Vmax | 20.6 | nmol/hour/kg |  |  | nM/(h·kg) | 23.3 | special_case (0.95) | psp412475-tbl-0001:row1:col4 | 36.8 (None% RSE) |
| L/hour/kg | `Q22` · CL | 16.6 | Intercompartmental clearance of irinotecan |  |  | clearance·intercompartmental·irinotecan·of |  | llm (0.6) | psp412475-tbl-0001:row3:col4, psp412475-tbl-0001:row5:col4 |  |
| L/kg | `Q61` · V | 14.2 | Peripheral volume of irinotecan |  |  | irinotecan·of·peripheral·volume |  | llm (0.6) | psp412475-tbl-0001:row4:col4, psp412475-tbl-0001:row6:col4 |  |
| CLm | `Q351` · CLm/F | 0.464 | L/hour/kg | 9.022e-06 | m3/s | l/(h·kg) | 4.6 | exact (1) | psp412475-tbl-0001:row13:col4 | 45.2 (None% RSE) |
| — | `Q45` · fm | 30.6 | feedback Parameter to stem cells |  |  | s·cells·feedback·parameter·tem·to |  | exact (1) | psp412475-tbl-0001:row15:col4, psp412475-tbl-0001:row31:col4 |  |
| 1/hour | `Q49` · kabs | 18.0 | Absorption rate constant of SN‐38 |  |  | s·absorption·constant·n‐38·of·rate |  | exact (1) | psp412475-tbl-0001:row16:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Vmax'; source reconciliation required
- table representations disagree for 'nM'; source reconciliation required
- table representations disagree for 'L/hour/kg'; source reconciliation required
- table representations disagree for 'L/kg'; source reconciliation required
- table representations disagree for 'mg/kg'; source reconciliation required
- table representations disagree for 'IIV on Dmaxp'; source reconciliation required
- table representations disagree for 'IIV on Vmax'; source reconciliation required
- table representations disagree for 'Residual error'; source reconciliation required
- table representations disagree for 'CLm'; source reconciliation required
- table representations disagree for '—'; source reconciliation required
- table representations disagree for '1/hour'; source reconciliation required
- table representations disagree for 'IIV on CLm'; source reconciliation required
- table representations disagree for 'Cov between Vmax and CLm'; source reconciliation required
- table representations disagree for 'SCss'; source reconciliation required
- table representations disagree for '1/day/μM'; source reconciliation required
- conflicting source units for 'nM': [{'unit': 'Baseline of plasma citrulline', 'source': 'psp412475-tbl-0001:row33:col2', 'scope': 'unit_column'}, {'unit': '100', 'source': 'psp412475-tbl-0001:row33:col3', 'scope': 'description'}]
- table representations disagree for 'IIV on BL'; source reconciliation required
- unit_dimension_mismatch: 'Vmax' → Q66 (unit '[substance] / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'nM' — extend the ontology if this is a real PK parameter (source ['psp412475-tbl-0001:row2:col4', 'psp412475-tbl-0001:row33:col4'])
- unit_dimension_unknown: 'Intercompartmental clearance of irinotecan' (CL)
- unit_dimension_unknown: 'Peripheral volume of irinotecan' (V)
- dropped unlinked row (NIL): 'mg/kg' — extend the ontology if this is a real PK parameter (source ['psp412475-tbl-0001:row8:col4', 'psp412475-tbl-0001:row9:col4'])
- unit_dimension_unknown: 'feedback Parameter to stem cells' (fm)
- unit_dimension_unknown: 'Absorption rate constant of SN‐38' (kabs)
- dropped unlinked row (NIL): 'mg/kg' — extend the ontology if this is a real PK parameter (source ['psp412475-tbl-0001:row17:col4', 'psp412475-tbl-0001:row18:col4'])
- routed 'Cov between Vmax and CLm' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'SCss' — extend the ontology if this is a real PK parameter (source ['psp412475-tbl-0001:row24:col4'])
- dropped unlinked row (NIL): '1/day/μM' — extend the ontology if this is a real PK parameter (source ['psp412475-tbl-0001:row30:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Citrulline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 'value' subgroup of Yoneyama_2019 (paper reports 2 populations: value, value (% rse))
- row roles: 7 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=turnover; 35/35 row label(s) assigned, 18 linked by role; re-tagged parent→SN-38 ×18, parent→Citrulline ×9
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table psp412475-tbl-0001: conflicting_units
- table psp412475-tbl-0001: ragged_grid
- table psp412475-tbl-0001: representations disagree; selected evidence retained, not merged
- table Yoneyama_2019_table_2: ambiguous_numeric_format
- companion parameter table 2 transcribed (21 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['psp412475-tbl-0001:row13:col4'] |
| C5_dimension_Q66 | fail | [mass] / [time] | nmol/hour/kg ([substance] / [time]) | ['psp412475-tbl-0001:row1:col4'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | Intercompartmental clearance of irinotecan | ['psp412475-tbl-0001:row3:col4', 'psp412475-tbl-0001:row5:col4'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | Absorption rate constant of SN‐38 | ['psp412475-tbl-0001:row16:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | Peripheral volume of irinotecan | ['psp412475-tbl-0001:row4:col4', 'psp412475-tbl-0001:row6:col4'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=30.6 present with apparent parameterization |  |
| C8_topology | fail |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitrulline%5D%20Citrulline_Yoneyama2019_value&body=Drug%3A%20citrulline%0ARecord%3A%20Citrulline_Yoneyama2019_value%0APaper%3A%20Yoneyama_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_citrulline/Citrulline_Yoneyama2019_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 07:40 UTC</sub>
