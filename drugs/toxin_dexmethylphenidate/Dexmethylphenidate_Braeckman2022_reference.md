<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Dexmethylphenidate&quot;,&quot;href&quot;:&quot;drugs/toxin_dexmethylphenidate/&quot;},{&quot;label&quot;:&quot;Braeckman_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexmethylphenidate_Arvidsson2020_reference&quot;,&quot;label&quot;:&quot;Arvidsson_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dexmethylphenidate/Dexmethylphenidate_Arvidsson2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dexmethylphenidate — `Dexmethylphenidate_Braeckman2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The clearance parameter for dexmethylphenidate has the non-SI unit CL/L/Kg, preventing conversion to standard units and causing a structural unit mismatch.

<div class="pk-model-meta" hidden drug="Dexmethylphenidate" model-id="Dexmethylphenidate_Braeckman2022_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="Dexmethylphenidate" parameterization="mechanistic" topology="1C"></div>

## Citation
Braeckman R, Guenther S, Mickle TC, Barrett AC, Smith A, Oh C. Dose Proportionality and Steady-State Pharmacokinetics of Serdexmethylphenidate/Dexmethylphenidate, a Novel Prodrug Combination to Treat Attention-Deficit/Hyperactivity Disorder. Journal of child and adolescent psychopharmacology 32(5):288–295 (2022).
  ·  DOI: [10.1089/cap.2022.0015](https://doi.org/10.1089/cap.2022.0015)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 23.

**Dosing:** 5.2, 7.8, 10.4 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Serdexmethylphenidate and Dexmethylphenidate (SDX/d-MPH), measured Dexmethylphenidate.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 41.8 | ng/mL |
| Tmax (h) | tmax | 2.18 | h |
| T1/2 (h) | t1/2z | 5.5 | h |
| AUC0–24h (h*ng/mL) | AUC | 256.7 | h*ng/mL |
| AUC0–last (h*ng/mL) | AUClast | 246.9 | h*ng/mL |
| AUC0–inf (h*ng/mL) | AUC∞ | 248.6 | h*ng/mL |
| Clearance (CL/L/Kg) | CL | 36.67 | CL/L/Kg |
| Volume of distribution (Vz/F/kg) | V | 29.56 | L/kg |
| AR Cmin | Cmin | 0.9705 |  |
| AR kel | kel | 1.060 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance parameter for dexmethylphenidate has the non-SI unit CL/L/Kg, preventing conversion to standard units and causing a structural unit mismatch.**

The clearance parameter for dexmethylphenidate lists the unit CL/L/Kg, which is not convertible to SI units. This results in a dimension mismatch against the expected volume over time dimension. Consequently, the record was rejected due to this irrecoverable unit definition. Extracted — dexmethylphenidate: Cmax 41.8 ng/mL, tmax 2.18 h, t1/2z 5.5 h, AUC 257 h*ng/mL, AUClast 247 h*ng/mL, AUC∞ 249 h*ng/mL, CL 36.7 CL/L/Kg, V 29.6 L/kg, … (+2).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 41.8 | ng/mL | 4.18e-05 | kg/m3 | ng/ml | exact (1) | Braeckman_2022_table_4:row1:col1, Braeckman_2022_table_4:row1:col2, Braeckman_2022_table_4:row1:col3, Braeckman_2022_table_4:row1:col4 |
| Tmax (h) | `Q56` · tmax | 2.18 | h | 7848 | s | h | exact (1) | Braeckman_2022_table_4:row2:col1, Braeckman_2022_table_4:row2:col2, Braeckman_2022_table_4:row2:col3, Braeckman_2022_table_4:row2:col4 |
| T1/2 (h) | `Q57` · t1/2z | 5.5 | h | 1.98e+04 | s | h | half_life_rule (0.95) | Braeckman_2022_table_4:row3:col2, Braeckman_2022_table_4:row3:col4 |
| AUC0–24h (h*ng/mL) | `Q88` · AUC | 256.7 | h*ng/mL | 0.9241 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Braeckman_2022_table_4:row4:col1, Braeckman_2022_table_4:row4:col2, Braeckman_2022_table_4:row4:col3, Braeckman_2022_table_4:row4:col4 |
| AUC0–last (h*ng/mL) | `Q74` · AUClast | 246.9 | h*ng/mL | 0.8888 | kg*s/m3 | (h·ng)/ml | exact (1) | Braeckman_2022_table_4:row5:col2, Braeckman_2022_table_4:row5:col4 |
| AUC0–inf (h*ng/mL) | `Q17` · AUC∞ | 248.6 | h*ng/mL | 0.895 | kg*s/m3 | (h·ng)/ml | exact (1) | Braeckman_2022_table_4:row6:col2, Braeckman_2022_table_4:row6:col4 |
| Clearance (CL/L/Kg) | `Q22` · CL | 36.67 | CL/L/Kg |  |  | cl/(kg·l) | exact (1) | Braeckman_2022_table_4:row7:col2, Braeckman_2022_table_4:row7:col4 |
| Volume of distribution (Vz/F/kg) | `Q61` · V | 29.56 | L/kg | 2.069 | m3 | L | exact (1) | Braeckman_2022_table_4:row8:col2, Braeckman_2022_table_4:row8:col4 |
| AR Cmin | `Q36` · Cmin | 0.9705 |  |  |  |  | llm_confirmed (0.6) | Braeckman_2022_table_4:row10:col2, Braeckman_2022_table_4:row10:col4 |
| AR kel | `Q47` · kel | 1.060 |  |  |  |  | llm_confirmed (0.6) | Braeckman_2022_table_4:row12:col2, Braeckman_2022_table_4:row12:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'A versus B'; source reconciliation required
- table representations disagree for 'C versus B'; source reconciliation required
- dropped unlinked row (NIL): 'A versus B' — extend the ontology if this is a real PK parameter (source ['tb3:row1:col2', 'tb3:row1:col3', 'tb3:row1:col4'])
- dropped unlinked row (NIL): 'C versus B' — extend the ontology if this is a real PK parameter (source ['tb3:row5:col2', 'tb3:row5:col3', 'tb3:row5:col4'])
- unit_dimension_mismatch: 'Clearance (CL/L/Kg)' → Q22 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'Vz/F/kg' (V)
- dropped duplicate Q32 ('AR Cmax', value '1.004') — already have one for this compound
- dropped duplicate Q88 ('AR AUC0–24h', value '0.9196') — already have one for this compound
- implicit units: 'Volume of distribution (Vz/F/kg)' → L/kg (from the paper text: "The text states: '...and weight-normalized volume-of-distribution values (Vz/F/weight) for d-MPH ranged from 38.8 ± 25.0")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Dexmethylphenidate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Braeckman_2022:discussion_prose, Braeckman_2022:other_prose, Braeckman_2022:results_prose, Braeckman_2022_table_4, tb3); populations treatment / a, treatment / b, treatment / c kept as separate records
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tb3: unbound_uncertainty
- table tb3: missing_label
- table tb3: representations disagree; selected evidence retained, not merged
- companion parameter table 2 transcribed (24 record(s))
- companion parameter table 4 transcribed (30 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Braeckman_2022_table_4:row6:col2', 'Braeckman_2022_table_4:row6:col4'] |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | CL/L/Kg (dimensionless) | ['Braeckman_2022_table_4:row7:col2', 'Braeckman_2022_table_4:row7:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Braeckman_2022_table_4:row1:col1', 'Braeckman_2022_table_4:row1:col2', 'Braeckman_2022_table_4:row1:col3', 'Braeckman_2022_table_4:row1:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Braeckman_2022_table_4:row2:col1', 'Braeckman_2022_table_4:row2:col2', 'Braeckman_2022_table_4:row2:col3', 'Braeckman_2022_table_4:row2:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Braeckman_2022_table_4:row3:col2', 'Braeckman_2022_table_4:row3:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Braeckman_2022_table_4:row8:col2', 'Braeckman_2022_table_4:row8:col4'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Braeckman_2022_table_4:row5:col2', 'Braeckman_2022_table_4:row5:col4'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Braeckman_2022_table_4:row4:col1', 'Braeckman_2022_table_4:row4:col2', 'Braeckman_2022_table_4:row4:col3', 'Braeckman_2022_table_4:row4:col4'] |
| C5_unit_missing_Q36 | fail | [mass] / [length] ** 3 |  | ['Braeckman_2022_table_4:row10:col2', 'Braeckman_2022_table_4:row10:col4'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['Braeckman_2022_table_4:row12:col2', 'Braeckman_2022_table_4:row12:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 36.67 | ['Braeckman_2022_table_4:row7:col2', 'Braeckman_2022_table_4:row7:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.07e+03 L | ['Braeckman_2022_table_4:row8:col2', 'Braeckman_2022_table_4:row8:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexmethylphenidate%5D%20Dexmethylphenidate_Braeckman2022_reference&body=Drug%3A%20dexmethylphenidate%0ARecord%3A%20Dexmethylphenidate_Braeckman2022_reference%0APaper%3A%20Braeckman_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dexmethylphenidate/Dexmethylphenidate_Braeckman2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:04 UTC</sub>
