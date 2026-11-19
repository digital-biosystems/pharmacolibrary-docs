<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Epirubicin&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/&quot;},{&quot;label&quot;:&quot;Ansaar_2023 \u00b7 std_error_of_the_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epirubicin_Camaggi1988_reference&quot;,&quot;label&quot;:&quot;Camaggi_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Camaggi1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Janssen2023_reference&quot;,&quot;label&quot;:&quot;Janssen_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Janssen2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Robert1994_reference&quot;,&quot;label&quot;:&quot;Robert_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Robert1994_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_1&quot;,&quot;label&quot;:&quot;Twelves_1992_group_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_2&quot;,&quot;label&quot;:&quot;Twelves_1992_group_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_2.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_3&quot;,&quot;label&quot;:&quot;Twelves_1992_group_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_3.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Epirubicin — `Epirubicin_Ansaar2023_std_error_of_the_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The total volume of distribution was incorrectly recorded as 200.0 µL, a physiologically implausible value for epirubicin, leading to record rejection.

<div class="pk-model-meta" hidden drug="Epirubicin" model-id="Epirubicin_Ansaar2023_std_error_of_the_estimate" status="rejected" stale="false" population="Sim-Cancer oncology patients" measured-compound="Epirubicin" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Ansaar R, Meech R, Rowland A. A Physiologically Based Pharmacokinetic Model to Predict Determinants of Variability in Epirubicin Exposure and Tissue Distribution. Pharmaceutics 15(4) (2023).
  ·  DOI: [10.3390/pharmaceutics15041222](https://doi.org/10.3390/pharmaceutics15041222)

## Population and dosing

**Population:** Sim-Cancer oncology patients · condition cancer · age group adult · n = 2000.

**Dosing:** 50 mg/m2, iv, multiple, every 504 h.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| a | equation variable | 0.141 | h |
| d | D1 | 0.099 | h |
| e | E | 0.087 | h |
| f | Fab | 0.082 |  |
| AUC (ng/mL·h) | AUC | 1191 | ng/mL·h |
| CMax (ng/mL) | Cmax | 864 | ng/mL |
| CL (Dose/AUC) (L/h) | CL | 10.2 | L/h |
| total volume | V | 200.0 | µL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The total volume of distribution was incorrectly recorded as 200.0 µL, a physiologically implausible value for epirubicin, leading to record rejection.**

The record lists the total volume of distribution for epirubicin as 200.0 µL. This value is orders of magnitude lower than the typical physiological range, indicating a severe unit extraction error. Consequently, the clearance-to-volume ratio fell outside acceptable physiological limits, resulting in the model's rejection. Extracted — epirubicin: D1 0.099 h, E 0.087 h, Fab 0.082, AUC 1.19e+03 ng/mL·h, Cmax 864 ng/mL, CL 10.2 L/h, V 200 µL.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| a | `Q900` · equation variable | 0.141 | h |  |  | h | llm (0.6) | pharmaceutics-15-01222-t005:row1:col4 |
| d | `Q310` · D1 | 0.099 | h | 356.4 | s | h | exact (1) | pharmaceutics-15-01222-t005:row4:col4 |
| e | `Q38` · E | 0.087 | h |  |  | h | exact (1) | pharmaceutics-15-01222-t005:row5:col4 |
| f | `Q40` · Fab | 0.082 |  |  |  |  | exact (1) | pharmaceutics-15-01222-t005:row6:col4 |
| AUC (ng/mL·h) | `Q88` · AUC | 1191 | ng/mL·h | 4.288 | kg*s/m3 | ng/(h·ml) | exact (1) | Ansaar_2023_table_3:row12:col1 |
| CMax (ng/mL) | `Q32` · Cmax | 864 | ng/mL | 0.000864 | kg/m3 | ng/ml | exact (1) | Ansaar_2023_table_3:row12:col2 |
| CL (Dose/AUC) (L/h) | `Q22` · CL | 10.2 | L/h | 2.833e-06 | m3/s | l/h | space_fold (0.95) | Ansaar_2023_table_3:row12:col4 |
| total volume | `Q61` · V | 200.0 | µL | 2e-07 | m3 | L | review_gapfill (0.7) | Ansaar_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'std. error of the estimate' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-01222-t005:row2:col4'])
- dropped unlinked row (NIL): 'c' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-01222-t005:row3:col4'])
- dropped duplicate Q900 ('g', value '0.079') — already have one for this compound
- dropped unlinked row (NIL): 'h' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-01222-t005:row8:col4'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.869 (source ['pharmaceutics-15-01222-t005:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Epirubicin
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 'std. error of the estimate' subgroup of Ansaar_2023 (paper reports 2 populations: geometric mean, std. error of the estimate)
- row roles (LLM): model_class=other; 13/13 row label(s) assigned, 13 linked by role; re-tagged Epirubicin→parent ×30
- gap-filled Q61 (V) from Ansaar_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 1 transcribed (20 record(s))
- table Ansaar_2023_table_3: ambiguous_numeric_format
- transposed table Ansaar_2023_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (39 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ansaar_2023_table_3:row12:col4'] |
| C5_dimension_Q310 | pass | [time] |  | ['pharmaceutics-15-01222-t005:row4:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Ansaar_2023_table_3:row12:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ansaar_2023:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Ansaar_2023_table_3:row12:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.2 | ['Ansaar_2023_table_3:row12:col4'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.2 L/h | ['Ansaar_2023_table_3:row12:col4'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | ['Ansaar_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepirubicin%5D%20Epirubicin_Ansaar2023_std_error_of_the_estimate&body=Drug%3A%20epirubicin%0ARecord%3A%20Epirubicin_Ansaar2023_std_error_of_the_estimate%0APaper%3A%20Ansaar_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_epirubicin/Epirubicin_Ansaar2023_std_error_of_the_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 13:06 UTC</sub>
