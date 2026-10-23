<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Daryani_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Daryani_2016_bioluminescence&quot;,&quot;label&quot;:&quot;Daryani_2016 \u00b7 bioluminescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/pd_Daryani_2016_bioluminescence.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Daryani2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.50).">human + animal</span>

> The intercompartmental clearance between central and peripheral compartments is assigned the invalid unit 'Qm', causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_Daryani2016_reference" status="rejected" stale="false" population="children with pediatric ependymoma" measured-compound="fluorouracil" parameterization="mechanistic" topology="2C"></div>

## Citation
Daryani VM, Patel YT, Tagen M, Turner DC, Carcaboso AM, Atkinson JM et al. Translational Pharmacokinetic-Pharmacodynamic Modeling and Simulation: Optimizing 5-Fluorouracil Dosing in Children With Pediatric Ependymoma. CPT: pharmacometrics & systems pharmacology 5(4):211–221 (2016).
  ·  DOI: [10.1002/psp4.12075](https://doi.org/10.1002/psp4.12075)

## Population and dosing

**Population:** children with pediatric ependymoma · condition ependymoma · age group child · n = ,.

**Dosing:** 5250 mg, iv, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.50).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Maximum plasma 5-FU elimination rate (V max,plasma,m) | kel | 2040 | µmol/hr/kg | 12.2 (None% RSE) |
| Volume of central compartment (V1,m) | V1 | 0.962 | L/kg | 22.1 (None% RSE) |
| Intercompartmental clearance (Qm) | Q | 1.67 | Qm | 31.1 (None% RSE) |
| Volume of peripheral compartment (V2,m) | V2 | 0.332 | L/kg | 93.9 (None% RSE) |
| 5-FU fraction unbound in mouse plasma (fu,m) | fu | 0.37 | fu,m | 7.8 (None% RSE) |
| Volume of tECF compartment (V3,m) | V3 | 0.001 | L/hr |  |
| Maximum tumor 5-FU elimination rate (Vmax,tumor,m) | Vmax | 0.0063 | µmol/hr/kg |  |
| Systemic clearance (CLp) | CL | 16.6 | L/hr/m2 | 28.8 (None% RSE) |
| theta_q1_category | theta_q1_category | 125 |  |  |
| theta_q303_category | theta_q303_category | 0.0043 |  |  |
| theta_q304_category | theta_q304_category | 3.24 |  |  |
| theta_fu_category | theta_fu_category | 1.82 | fu,m |  |
| Ka, Absorption rate constant (h−1) | kabs | 0.757 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intercompartmental clearance between central and peripheral compartments is assigned the invalid unit 'Qm', causing a dimension mismatch.**

The parameter representing apparent intercompartmental clearance has a value of 1.67 but is reported with the unit 'Qm'. This unit could not be converted to standard units, so the parameter was not available in a consistent unit for model building. Consequently, a structural dimension mismatch was identified during the review process. Extracted — fluorouracil: kel 2.04e+03 µmol/hr/kg, V1 0.962 L/kg, Q 1.67 Qm, V2 0.332 L/kg, fu 0.37 fu,m, V3 0.001 L/hr, Vmax 0.0063 µmol/hr/kg, CL 16.6 L/hr/m2, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has 5-fluorouracil, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Maximum plasma 5-FU elimination rate (V max,plasma,m) | `Q47` · kel | 2040 | µmol/hr/kg |  |  | (µM·ol)/(h·kg) | llm_confirmed (0.6) | Daryani_2016_table_p6_1:row1:col2 | 12.2 (None% RSE) |
| Volume of central compartment (V1,m) | `Q63` · V1 | 0.962 | L/kg | 0.06734 | m3 | l/kg | boundary_compartment (0.9) | Daryani_2016_table_p6_1:row3:col2 | 22.1 (None% RSE) |
| Intercompartmental clearance (Qm) | `Q30` · Q | 1.67 | Qm |  |  | qm | exact (1) | Daryani_2016_table_p6_1:row4:col2 | 31.1 (None% RSE) |
| Volume of peripheral compartment (V2,m) | `Q64` · V2 | 0.332 | L/kg | 0.02324 | m3 | l/kg | boundary_compartment (0.9) | Daryani_2016_table_p6_1:row5:col2 | 93.9 (None% RSE) |
| 5-FU fraction unbound in mouse plasma (fu,m) | `Q46` · fu | 0.37 | fu,m |  |  | fu | llm_confirmed (0.6) | Daryani_2016_table_p6_1:row10:col2 | 7.8 (None% RSE) |
| Volume of tECF compartment (V3,m) | `Q77` · V3 | 0.001 | L/hr | 2.778e-10 | m3/s | l/h | llm_corrected (0.6) | Daryani_2016_table_p6_1:row11:col2 |  |
| Maximum tumor 5-FU elimination rate (Vmax,tumor,m) | `Q66` · Vmax | 0.0063 | µmol/hr/kg |  |  | (µM·ol)/(h·kg) | llm_corrected (0.6) | Daryani_2016_table_p6_1:row14:col2 |  |
| Systemic clearance (CLp) | `Q22` · CL | 16.6 | L/hr/m2 |  |  | l/(h·m2) | llm_confirmed (0.6) | Daryani_2016_table_2:row0:col2 | 28.8 (None% RSE) |
| theta_q1_category | `Q900` · theta_q1_category | 125 |  |  |  |  |  | Daryani_2016_table_p6_1:row2:col2 |  |
| theta_q303_category | `Q900` · theta_q303_category | 0.0043 |  |  |  |  |  | Daryani_2016_table_p6_1:row8:col2 |  |
| theta_q304_category | `Q900` · theta_q304_category | 3.24 |  |  |  |  |  | Daryani_2016_table_p6_1:row9:col2 |  |
| theta_fu_category | `Q900` · theta_fu_category | 1.82 | fu,m |  |  |  |  | Daryani_2016_table_p6_1:row12:col2 |  |
| Ka, Absorption rate constant (h−1) | `Q49` · kabs | 0.757 | h−1 | 0.0002103 | 1/s | 1/h | review_gapfill (0.7) | Bae_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Maximum plasma 5-FU elimination rate (V max,plasma,m)' routed out of structural estimates ('IIV (% CV)')
- table section iiv: 'Volume of central compartment (V1,m)' routed out of structural estimates ('IIV (% CV)')
- table section iiv: 'Intercompartmental clearance (Qm)' routed out of structural estimates ('IIV (% CV)')
- table section iiv: 'Rate constant for 5-FU movement from plasma to tECF (K13,m)' routed out of structural estimates ('IIV (% CV)')
- table section iiv: 'Rate constant for 5-FU movement from tECF to plasma (K31,m)' routed out of structural estimates ('IIV (% CV)')
- table section iiv: 'Exponential tumor growth parameter (θkexp,m,1) for experiment one' routed out of structural estimates ('IIV (% CV)')
- table section iiv: '5-FU tECF concentration producing half the maximum tumor inhibitory effect (IC50,m)' routed out of structural estimates ('IIV (% CV)')
- table section iiv: 'Systemic clearance (CLp)' routed out of structural estimates ('IIV (% CV)')
- table section iov: 'Systemic clearance (CLp)' routed out of structural estimates ('IOV')
- table section iiv: 'Volume of central compartment (V1,p)' routed out of structural estimates ('IIV (% CV)')
- table section iiv: 'Intercompartmental clearance (Qp)' routed out of structural estimates ('IIV (% CV)')
- table section iiv: 'Volume of peripheral compartment (V2,p)' routed out of structural estimates ('IIV (% CV)')
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive' routed out of structural estimates ('Residual variability')
- column 'estimate ± se' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- conflicting source units for 'Intercompartmental clearance (Qm)': [{'unit': 'L/hr/kg', 'source': 'Daryani_2016_table_p6_1:row4:col1', 'scope': 'unit_column'}, {'unit': 'Qm', 'source': 'Daryani_2016_table_p6_1:row4:col0', 'scope': 'label'}]
- unit_dimension_mismatch: 'Maximum plasma 5-FU elimination rate (V max,plasma,m)' → Q47 (unit '[substance] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Intercompartmental clearance (Qm)' → Q30 (unit '[length]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'fu,m' (fu)
- unit_dimension_mismatch: 'Volume of tECF compartment (V3,m)' → Q77 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Rate parameter for intratumoral 5-FU disposition (K43,m)' — extend the ontology if this is a real PK parameter (source ['Daryani_2016_table_p6_1:row13:col2'])
- unit_dimension_mismatch: 'Maximum tumor 5-FU elimination rate (Vmax,tumor,m)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_unknown: 'L/hr/m2' (CL)
- unit_dimension_unknown: 'L/m2' (V1)
- dropped duplicate Q63 ('Volume of central compartment (V1,p)', value '4.2') — already have one for this compound
- unit_dimension_unknown: 'L/hr/m2' (Q)
- dropped duplicate Q30 ('Intercompartmental clearance (Qp)', value '1.6') — already have one for this compound
- unit_dimension_unknown: 'L/m2' (V2)
- dropped duplicate Q64 ('Volume of peripheral compartment (V2,p)', value '20.1') — already have one for this compound
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q303 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q304 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q1 — ambiguous identity (two shifts cannot share one category)
- implicit units: 'Systemic clearance (CLp)' — the LLM proposed 'L/h/m2', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q49 (kabs) from Bae_2026's review values (primary lacked it)

**Extraction notes:**
- table Daryani_2016_table_p6_1: conflicting_units
- table Daryani_2016_table_p6_1: missing_unit_binding
- table Daryani_2016_table_p6_1: unparsed_numeric_cell
- table Daryani_2016_table_2: missing_unit_binding
- companion parameter table 2 transcribed (11 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (12/18 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka, absorption rate constant]` | 0.757 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate constant transit tumor compartment]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_ktr_category]` |  | 0.334 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q48_category]` |  | 1.82 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | 5-fluorouracil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | 5-fluorouracil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q30 | fail | [length] | Qm | ['Daryani_2016_table_p6_1:row4:col2'] |
| C5_dimension_Q47 | fail | [substance] / [time] | µmol/hr/kg | ['Daryani_2016_table_p6_1:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Daryani_2016_table_p6_1:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Daryani_2016_table_p6_1:row5:col2'] |
| C5_dimension_Q66 | fail | [substance] / [time] | µmol/hr/kg | ['Daryani_2016_table_p6_1:row14:col2'] |
| C5_dimension_Q77 | fail | [length] ** 3 / [time] | L/hr | ['Daryani_2016_table_p6_1:row11:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | L/hr/m2 | ['Daryani_2016_table_2:row0:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.6 | ['Daryani_2016_table_2:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 67.3 L | ['Daryani_2016_table_p6_1:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 23.2 L | ['Daryani_2016_table_p6_1:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Daryani2016_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Daryani2016_reference%0APaper%3A%20Daryani_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluorouracil/Fluorouracil_Daryani2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:02 UTC</sub>
