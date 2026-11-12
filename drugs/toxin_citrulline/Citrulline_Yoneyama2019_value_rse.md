<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Citrulline&quot;,&quot;href&quot;:&quot;drugs/toxin_citrulline/&quot;},{&quot;label&quot;:&quot;Yoneyama_2019 \u00b7 value_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citrulline_Aschner2023_reference&quot;,&quot;label&quot;:&quot;Aschner_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_citrulline/Citrulline_Aschner2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Citrulline — `Citrulline_Yoneyama2019_value_rse`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The intercompartmental clearance parameters for SN-38 were recorded with units of 1/hour instead of volume per time.

<div class="pk-model-meta" hidden drug="Citrulline" model-id="Citrulline_Yoneyama2019_value_rse" status="rejected" stale="false" population="rats and humans (translational model)" measured-compound="Citrulline" parameterization="mechanistic" topology="manual_model_class"></div>

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
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ke | kel | 4.56 | 1/hour |
| V1 | V1 | 5.52 | L |
| k12 | Q | 57.8 | 1/hour |
| k13 | Q2 | 1.96 | 1/hour |
| kem | kel | 2.52 | 1/hour |
| Vm | V | 200 | L |
| mk12 | Q | 2.6 | 1/hour |
| k2 | equation variable | 0.75 | 1/day |
| absorption rate constant | kabs | 0.95 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intercompartmental clearance parameters for SN-38 were recorded with units of 1/hour instead of volume per time.**

The parameters Q and Q2 for SN-38 have values 2.6 and 1.96, respectively, both expressed in 1/hour. These parameters represent apparent intercompartmental clearance, which requires units of volume per time. The mismatch between the recorded units and the physical dimension of the parameters caused the model to be rejected. Extracted — citrulline: kel 4.56 1/hour, V1 5.52 L, Q 57.8 1/hour, Q2 1.96 1/hour, kabs 0.95 h-1; SN-38: kel 2.52 1/hour, V 200 L, Q 2.6 1/hour.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ke | `Q47` · kel | 4.56 | 1/hour | 0.001267 | 1/s | 1/h | exact (1) | Yoneyama_2019_table_2:row0:col3 |
| V1 | `Q63` · V1 | 5.52 | L | 0.00552 | m3 | l | exact (1) | Yoneyama_2019_table_2:row1:col3 |
| k12 | `Q30` · Q | 57.8 | 1/hour |  |  | 1/h | exact (1) | Yoneyama_2019_table_2:row2:col3 |
| k13 | `Q99` · Q2 | 1.96 | 1/hour |  |  | 1/h | exact (1) | Yoneyama_2019_table_2:row4:col3 |
| kem | `Q47` · kel | 2.52 | 1/hour | 0.0007 | 1/s | 1/h | exact (1) | Yoneyama_2019_table_2:row6:col3 |
| Vm | `Q61` · V | 200 | L | 0.2 | m3 | l | exact (1) | Yoneyama_2019_table_2:row7:col3 |
| mk12 | `Q30` · Q | 2.6 | 1/hour |  |  | 1/h | exact (1) | Yoneyama_2019_table_2:row8:col3 |
| k2 | `Q900` · equation variable | 0.75 | 1/day |  |  | 1/d | llm (0.6) | Yoneyama_2019_table_2:row12:col3 |
| absorption rate constant | `Q49` · kabs | 0.95 | h-1 | 0.0002639 | 1/s | 1/h | review_gapfill (0.7) | Aschner_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'k12' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k21' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k21', value '2.58') — already have one for this compound
- unit_dimension_mismatch: 'k13' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k31' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q99 ('k31', value '0.0812') — already have one for this compound
- unit_dimension_mismatch: 'mk12' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'mk21' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('mk21', value '0.0584') — already have one for this compound
- dropped unlinked row (NIL): 'SCss' — extend the ontology if this is a real PK parameter (source ['Yoneyama_2019_table_2:row10:col3'])
- dropped unlinked row (NIL): 'k1' — extend the ontology if this is a real PK parameter (source ['Yoneyama_2019_table_2:row11:col3'])
- dropped unlinked row (NIL): 'k3' — extend the ontology if this is a real PK parameter (source ['Yoneyama_2019_table_2:row13:col3'])
- dropped unlinked row (NIL): 'CV' — extend the ontology if this is a real PK parameter (source ['Yoneyama_2019_table_2:row14:col3'])
- dropped unlinked row (NIL): 'nPPC' — extend the ontology if this is a real PK parameter (source ['Yoneyama_2019_table_2:row15:col3'])
- dropped PD-category row 'kkill' → Q337 (ktol, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yoneyama_2019_table_2:row16:col3'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['Yoneyama_2019_table_2:row17:col3'])
- dropped PD-category row 'hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yoneyama_2019_table_2:row18:col3'])
- dropped PD-category row 'kout' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yoneyama_2019_table_2:row20:col3'])
- metabolite volume: 'Vm' Q63→Q61 for SN-38 — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Citrulline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 'value (% rse)' subgroup of Yoneyama_2019 (paper reports 2 populations: value, value (% rse))
- row roles: 7 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=turnover; 35/35 row label(s) assigned, 18 linked by role; re-tagged parent→SN-38 ×18, parent→Citrulline ×9
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Aschner_2023's review values (primary lacked it)

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
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | 1/hour (1 / [time]) | ['Yoneyama_2019_table_2:row2:col3'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | 1/hour (1 / [time]) | ['Yoneyama_2019_table_2:row8:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Yoneyama_2019_table_2:row0:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Yoneyama_2019_table_2:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Aschner_2023:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Yoneyama_2019_table_2:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Yoneyama_2019_table_2:row1:col3'] |
| C5_dimension_Q99 | fail | [length] ** 3 / [time] | 1/hour (1 / [time]) | ['Yoneyama_2019_table_2:row4:col3'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 200 L | ['Yoneyama_2019_table_2:row7:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.52 L | ['Yoneyama_2019_table_2:row1:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitrulline%5D%20Citrulline_Yoneyama2019_value_rse&body=Drug%3A%20citrulline%0ARecord%3A%20Citrulline_Yoneyama2019_value_rse%0APaper%3A%20Yoneyama_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_citrulline/Citrulline_Yoneyama2019_value_rse%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 07:40 UTC</sub>
