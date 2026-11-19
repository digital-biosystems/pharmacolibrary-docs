<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Mirtazapine&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/&quot;},{&quot;label&quot;:&quot;Jamshidfar_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirtazapine_Bissinger2023_reference&quot;,&quot;label&quot;:&quot;Bissinger_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Bissinger2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mirtazapine_Buhles2018_reference&quot;,&quot;label&quot;:&quot;Buhles_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Buhles2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mirtazapine_Quimby2011_reference&quot;,&quot;label&quot;:&quot;Quimby_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Quimby2011_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mirtazapine_Quimby2011v2_reference&quot;,&quot;label&quot;:&quot;Quimby_2011_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Quimby2011v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mirtazapine_Timmer1997_reference&quot;,&quot;label&quot;:&quot;Timmer_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mirtazapine/Mirtazapine_Timmer1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mirtazapine — `Mirtazapine_Jamshidfar2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The record was rejected because AUC units are reported as '0–120' instead of time-concentration units, and metabolites have zero compartments, rendering them unreachable from the dose.

<div class="pk-model-meta" hidden drug="Mirtazapine" model-id="Mirtazapine_Jamshidfar2017_reference" status="rejected" stale="false" population="rats" measured-compound="Mirtazapine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Jamshidfar S, Ardakani YH, Lavasani H, Rouini M. Inhibition of mirtazapine metabolism by Ecstasy (MDMA) in isolated perfused rat liver model. Daru : journal of Faculty of Pharmacy, Tehran University of Medical Sciences 25(1):16 (2017).
  ·  DOI: [10.1186/s40199-017-0183-z](https://doi.org/10.1186/s40199-017-0183-z)

## Population and dosing

**Population:** rats · condition isolated perfused liver · n = 12.

**Dosing:** 210 mg, ip, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F | Fab | 0.13 |  |
| E | E | 0.87 |  |
| CLh(ml/min) | CLH | 7.21 | ml/min |
| CLint(ml/min) | CLint | 63.4 | ml/min |
| 1 | AUC | 15530.1 | 0–120 |
| 3 | AUC | 16443.6 | 0–120 |
| 5 | AUC | 13295.1 | 0–120 |
| intrinsic clearance (Clint) | CL | 60 | ml/min |
| elimination half-life | t1/2z | 30 | h |
| Ka | kabs | 1.2 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because AUC units are reported as '0–120' instead of time-concentration units, and metabolites have zero compartments, rendering them unreachable from the dose.**

The Area Under the Curve (AUC) parameters for mirtazapine and its metabolites are assigned the non-standard unit '0–120', which fails dimensional analysis against the expected mass-time/volume unit. Additionally, both 8-hydroxymirtazapine and N-desmethylmirtazapine are defined with zero compartments, meaning they lack a volume of distribution and cannot receive drug input from the parent compound despite having formation clearance links. This structural inconsistency prevents the model from simulating metabolite kinetics. Extracted — mirtazapine: Fab 0.13, E 0.87, CLH 7.21 ml/min, CLint 63.4 ml/min, AUC 1.55e+04 0–120, CL 60 ml/min, t1/2z 30 h, kabs 1.2 h−1; 8-hydroxymirtazapine: AUC 1.64e+04 0–120; N-desmethylmirtazapine: AUC 1.33e+04 0–120.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.13 |  |  |  |  | exact (1) | Tab2:row1:col1, Tab2:row2:col1 |
| E | `Q38` · E | 0.87 |  | 0.87 |  |  | exact (1) | Tab2:row1:col2, Tab2:row2:col2 |
| CLh(ml/min) | `Q25` · CLH | 7.21 | ml/min | 1.202e-07 | m3/s | ml/min | exact (1) | Tab2:row1:col3, Tab2:row2:col3 |
| CLint(ml/min) | `Q3` · CLint | 63.4 | ml/min |  |  | ml/min | exact (1) | Tab2:row1:col4, Tab2:row2:col4 |
| 1 | `Q88` · AUC | 15530.1 | 0–120 |  |  | 0-120 | llm (0.6) | Jamshidfar_2017_table_1:row1:col1, Jamshidfar_2017_table_1:row1:col3, Jamshidfar_2017_table_1:row1:col5 |
| 3 | `Q88` · AUC | 16443.6 | 0–120 |  |  | 0-120 | llm (0.6) | Jamshidfar_2017_table_1:row3:col1, Jamshidfar_2017_table_1:row3:col3, Jamshidfar_2017_table_1:row3:col5 |
| 5 | `Q88` · AUC | 13295.1 | 0–120 |  |  | 0-120 | llm (0.6) | Jamshidfar_2017_table_1:row5:col1, Jamshidfar_2017_table_1:row5:col3, Jamshidfar_2017_table_1:row5:col5 |
| intrinsic clearance (Clint) | `Q22` · CL | 60 | ml/min | 1e-06 | m3/s | L/h | boundary (0.8) | Jamshidfar_2017:prose |
| elimination half-life | `Q57` · t1/2z | 30 | h | 1.08e+05 | s | h | half_life_rule (0.95) | Jamshidfar_2017:prose |
| Ka | `Q49` · kabs | 1.2 | h−1 | 0.0003333 | 1/s | 1/h | review_gapfill (0.7) | Yan_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CLint(ml/min)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- unit_dimension_mismatch: '1' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: '2' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('2', value '9928.7') — already have one for this compound
- unit_dimension_mismatch: '3' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: '4' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('4', value '10611.4') — already have one for this compound
- unit_dimension_mismatch: '5' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: '6' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('6', value '19497.1') — already have one for this compound
- dropped unlinked row (NIL): 'MEAN' — extend the ontology if this is a real PK parameter (source ['Jamshidfar_2017_table_1:row7:col1', 'Jamshidfar_2017_table_1:row7:col3', 'Jamshidfar_2017_table_1:row7:col5'])
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['Jamshidfar_2017_table_1:row8:col1', 'Jamshidfar_2017_table_1:row8:col3', 'Jamshidfar_2017_table_1:row8:col5'])
- dropped unlinked row (NIL): 'CV' — extend the ontology if this is a real PK parameter (source ['Jamshidfar_2017_table_1:row9:col1', 'Jamshidfar_2017_table_1:row9:col3', 'Jamshidfar_2017_table_1:row9:col5'])
- dropped value-less row: 'Table 2. Comparison of availability, extarction ratio, clearance and intrinsic clearance (±SD) in control and treatment groups (n = 6)' (captured trailing unit 'n = 6' for child rows)
- salvaged Q22 ('intrinsic clearance (Clint)'=60) from results prose — parameter table was unreadable
- salvaged Q57 ('elimination half-life'=30) from results prose — parameter table was unreadable
- implicit units: 'intrinsic clearance (Clint)' → ml/min (from the paper text: "The text explicitly states the units for the clearance parameters when discussing Table 2: 'CLh and CLint demonstrated 2")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Mirtazapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- toxin: elimination half-life printed only as a range — the value is the range's midpoint; route to review
- status held at "Needs review" — not promoted
- row roles: 2 per-group rows of Mirtazapine other but 2 reference group(s) — kept as printed
- row roles: 5 per-group rows of Mirtazapine summary_statistic but 5 reference group(s) — kept as printed
- row roles: 2 per-group rows of 8-hydroxymirtazapine summary_statistic but 2 reference group(s) — kept as printed
- row roles: 2 per-group rows of N-desmethylmirtazapine summary_statistic but 2 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 14/14 row label(s) assigned, 3 linked by role; re-tagged parent→8-hydroxymirtazapine ×6, parent→N-desmethylmirtazapine ×6
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Yan_2026's review values (primary lacked it)

**Extraction notes:**
- transposed table Tab2: logical view retains original source coordinates
- companion parameter table 1 transcribed (27 record(s))
- LLM selected parameter table(s) 1, 2
- toxin: the located table(s) gave no kinetic value — 14 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Jamshidfar_2017:prose'] |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col3', 'Tab2:row2:col3'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | ml/min ([length] ** 3 / [time]) | ['Tab2:row1:col4', 'Tab2:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Yan_2026:review'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | 0–120 (dimensionless) | ['Jamshidfar_2017_table_1:row1:col1', 'Jamshidfar_2017_table_1:row1:col3', 'Jamshidfar_2017_table_1:row1:col5'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | 0–120 (dimensionless) | ['Jamshidfar_2017_table_1:row3:col1', 'Jamshidfar_2017_table_1:row3:col3', 'Jamshidfar_2017_table_1:row3:col5'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | 0–120 (dimensionless) | ['Jamshidfar_2017_table_1:row5:col1', 'Jamshidfar_2017_table_1:row5:col3', 'Jamshidfar_2017_table_1:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 60 | ['Jamshidfar_2017:prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.6 L/h | ['Jamshidfar_2017:prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmirtazapine%5D%20Mirtazapine_Jamshidfar2017_reference&body=Drug%3A%20mirtazapine%0ARecord%3A%20Mirtazapine_Jamshidfar2017_reference%0APaper%3A%20Jamshidfar_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mirtazapine/Mirtazapine_Jamshidfar2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 18:09 UTC</sub>
