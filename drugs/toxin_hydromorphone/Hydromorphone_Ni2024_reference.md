<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Hydromorphone&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/&quot;},{&quot;label&quot;:&quot;Ni_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydromorphone_Balyan2020_reference&quot;,&quot;label&quot;:&quot;Balyan_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/Hydromorphone_Balyan2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Olofsen2026_reference&quot;,&quot;label&quot;:&quot;Olofsen_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/Hydromorphone_Olofsen2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Vallner1981_reference&quot;,&quot;label&quot;:&quot;Vallner_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/Hydromorphone_Vallner1981_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Chang1988_reference&quot;,&quot;label&quot;:&quot;Chang_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/Hydromorphone_Chang1988_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Hydromorphone — `Hydromorphone_Ni2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q364 unit ng/mL ([mass] / [length] ** 3) vs [length] ** 3 / [time].

<div class="pk-model-meta" hidden drug="Hydromorphone" model-id="Hydromorphone_Ni2024_reference" status="rejected" stale="false" population="virtual Caucasian population of 200 individuals aged 18-60 (PBPK simulations); observed data from healthy adult volunteers" measured-compound="Hydromorphone" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Ni L, Cao Z, Jiang J, Zhang W, Hu W, Zhang Q et al. Evaluating Drug Interactions between Ritonavir and Opioid Analgesics: Implications from Physiologically Based Pharmacokinetic Simulation. Pharmaceuticals (Basel, Switzerland) 17(5) (2024).
  ·  DOI: [10.3390/ph17050640](https://doi.org/10.3390/ph17050640)

## Population and dosing

**Population:** virtual Caucasian population of 200 individuals aged 18-60 (PBPK simulations); observed data from healthy adult volunteers · condition healthy (oral and IV dosing; ritonavir-pretreated in DDI scenarios) · age group adult · n = 200 (virtual population individuals).

**Dosed compound ≠ measured compound:** dosed Hydromorphone (also hydrocodone as parent drug of hydromorphone), measured Hydromorphone.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| HYD ER 10 mg SD + R 100 mg QD | Qd | 10.4 | ng/mL |
| HYD ER 10 mg SD + R 100 mg BID | Cmax_ratio | 10.5 | ng/mL |
| HYD ER 10 mg BID + R 100 mg QD | Cmax | 21.2 | ng/mL |
| CYP2D6 (normal metabolic activity) clearance | CL | 3 |  |
| Vd (L/kg) — Buprenorphine | V | 8.3 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q364 unit ng/mL ([mass] / [length] ** 3) vs [length] ** 3 / [time].**

No model template covers this structure. Extracted — hydromorphone: Qd 10.4 ng/mL, Cmax_ratio 10.5 ng/mL, Cmax 21.2 ng/mL, CL 3, V 8.3 L/kg.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| HYD ER 10 mg SD + R 100 mg QD | `Q364` · Qd | 10.4 | ng/mL |  |  | ng/ml | llm_confirmed (0.6) | Ni_2024_table_3:row1:col1, Ni_2024_table_3:row1:col2, Ni_2024_table_3:row1:col3, Ni_2024_table_3:row1:col4, Ni_2024_table_3:row1:col5, Ni_2024_table_3:row1:col6 |
| HYD ER 10 mg SD + R 100 mg BID | `Q33` · Cmax_ratio | 10.5 | ng/mL |  |  | ng/ml | llm (0.6) | Ni_2024_table_3:row2:col1, Ni_2024_table_3:row2:col2, Ni_2024_table_3:row2:col3, Ni_2024_table_3:row2:col4, Ni_2024_table_3:row2:col5, Ni_2024_table_3:row2:col6 |
| HYD ER 10 mg BID + R 100 mg QD | `Q32` · Cmax | 21.2 | ng/mL | 2.12e-05 | kg/m3 | ng/ml | llm_corrected (0.6) | Ni_2024_table_3:row4:col1, Ni_2024_table_3:row4:col2, Ni_2024_table_3:row4:col3, Ni_2024_table_3:row4:col4, Ni_2024_table_3:row4:col5, Ni_2024_table_3:row4:col6 |
| CYP2D6 (normal metabolic activity) clearance | `Q22` · CL | 3 |  |  |  | L/h | boundary (0.8) | Ni_2024:other_prose |
| Vd (L/kg) — Buprenorphine | `Q61` · V | 8.3 | L/kg | 0.581 | m3 | L | review_gapfill (0.7) | Coluzzi_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'HYD ER 10 mg SD' — extend the ontology if this is a real PK parameter (source ['Ni_2024_table_3:row0:col1', 'Ni_2024_table_3:row0:col2', 'Ni_2024_table_3:row0:col3', 'Ni_2024_table_3:row0:col4', 'Ni_2024_table_3:row0:col5', 'Ni_2024_table_3:row0:col6'])
- unit_dimension_mismatch: 'HYD ER 10 mg SD + R 100 mg QD' → Q364 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q33 ('HYD ER 10 mg BID', value '12.24') — already have one for this compound
- dropped duplicate Q32 ('HYD ER 10 mg BID + R 100 mg BID', value '22.1') — already have one for this compound
- dropped duplicate Q33 ('HYD uncoated 5 mg q6h', value '17.1') — already have one for this compound
- dropped unlinked row (NIL): 'HYD uncoated 5 mg q6h + R 100 mg QD' — extend the ontology if this is a real PK parameter (source ['Ni_2024_table_3:row7:col1', 'Ni_2024_table_3:row7:col2', 'Ni_2024_table_3:row7:col3', 'Ni_2024_table_3:row7:col4', 'Ni_2024_table_3:row7:col5', 'Ni_2024_table_3:row7:col6'])
- dropped duplicate Q33 ('HYD uncoated 5 mg q6h + R 100 mg BID', value '27.3') — already have one for this compound
- salvaged Q22 ('CYP2D6 (normal metabolic activity) clearance'=3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Hydromorphone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Ni_2024:other_prose, Ni_2024:results_prose, Ni_2024_table_3); populations hydromorphone kept as separate records
- gap-filled Q61 (V) from Coluzzi_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)

**Extraction notes:**
- table Ni_2024_table_4: units_need_context
- transposed table Ni_2024_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (24 record(s))
- companion parameter table 3 transcribed (54 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Ni_2024_table_3:row4:col1', 'Ni_2024_table_3:row4:col2', 'Ni_2024_table_3:row4:col3', 'Ni_2024_table_3:row4:col4', 'Ni_2024_table_3:row4:col5', 'Ni_2024_table_3:row4:col6'] |
| C5_dimension_Q364 | fail | [length] ** 3 / [time] | ng/mL ([mass] / [length] ** 3) | ['Ni_2024_table_3:row1:col1', 'Ni_2024_table_3:row1:col2', 'Ni_2024_table_3:row1:col3', 'Ni_2024_table_3:row1:col4', 'Ni_2024_table_3:row1:col5', 'Ni_2024_table_3:row1:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Coluzzi_2020:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Ni_2024:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3 | ['Ni_2024:other_prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 581 L | ['Coluzzi_2020:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydromorphone%5D%20Hydromorphone_Ni2024_reference&body=Drug%3A%20hydromorphone%0ARecord%3A%20Hydromorphone_Ni2024_reference%0APaper%3A%20Ni_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hydromorphone/Hydromorphone_Ni2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 10:29 UTC</sub>
