<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mitoxantrone&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/&quot;},{&quot;label&quot;:&quot;Richard_1992 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitoxantrone_Fang1990_reference&quot;,&quot;label&quot;:&quot;Fang_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Fang1990_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Gokhale2001_reference&quot;,&quot;label&quot;:&quot;Gokhale_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Gokhale2001_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Launay1989_reference&quot;,&quot;label&quot;:&quot;Launay_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Launay1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Czejka1990_reference&quot;,&quot;label&quot;:&quot;Czejka_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Czejka1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Hu1992_reference&quot;,&quot;label&quot;:&quot;Hu_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Hu1992_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mitoxantrone — `Mitoxantrone_Richard1992_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The infusion duration D1 is assigned the value 2.87 with the unit µg h ml⁻¹, which conflicts with the required time dimension.

<div class="pk-model-meta" hidden drug="Mitoxantrone" model-id="Mitoxantrone_Richard1992_reference" status="rejected" stale="false" population="Cancer patients (women)" measured-compound="Mitoxantrone" parameterization="mechanistic" topology="1C"></div>

## Citation
Richard B, Launay-Iliadis MC, Iliadis A, Just-Landi S, Blaise D, Stoppa AM et al. Pharmacokinetics of mitoxantrone in cancer patients treated by high-dose chemotherapy and autologous bone marrow transplantation. British journal of cancer 65(3):399-404 (1992).
  ·  DOI: [10.1038/bjc.1992.81](https://doi.org/10.1038/bjc.1992.81)

## Population and dosing

**Population:** Cancer patients (women) · condition cancer · age group adult · n = 15.

**Dosing:** 12 mg/m2, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| B | AUMC | 1.04 | µg h ml-1 |
| 5 | AUC | 3.12 | µg h ml-1 |
| D | D1 | 2.87 | µg h ml-1 |
| E | E | 0.66 | µg h ml-1 |
| F | Fab | 2.39 | µg h ml-1 |
| 4 | AUC∞ | 1.97 | µg h ml-1 |
| The mean total plasma clearance (CL) | CL | 21.41 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The infusion duration D1 is assigned the value 2.87 with the unit µg h ml⁻¹, which conflicts with the required time dimension.**

The parameter D1 represents the duration of zero-order input, necessitating a unit of time. However, the record lists its unit as µg h ml⁻¹, a concentration-like dimension that failed the dimensional analysis. Consequently, the model was rejected because this structural parameter could not be converted to the standard time unit required for simulation. Extracted — mitoxantrone: AUMC 1.04 µg h ml-1, AUC 3.12 µg h ml-1, D1 2.87 µg h ml-1, E 0.66 µg h ml-1, Fab 2.39 µg h ml-1, AUC∞ 1.97 µg h ml-1, CL 21.4 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| B | `Q20` · AUMC | 1.04 | µg h ml-1 | 3.744 | kg*s/m3 | (h·µg)/ml | llm (0.6) | Richard_1992_table_3:row2:col1, Richard_1992_table_3:row2:col2, Richard_1992_table_3:row2:col3, Richard_1992_table_3:row2:col4, Richard_1992_table_3:row2:col5 |
| 5 | `Q88` · AUC | 3.12 | µg h ml-1 | 11.23 | kg*s/m3 | (h·µg)/ml | llm (0.6) | Richard_1992_table_3:row4:col1, Richard_1992_table_3:row4:col2, Richard_1992_table_3:row4:col3, Richard_1992_table_3:row4:col4, Richard_1992_table_3:row4:col5, Richard_1992_table_3:row18:col1, Richard_1992_table_3:row18:col2, Richard_1992_table_3:row18:col3, Richard_1992_table_3:row18:col4, Richard_1992_table_3:row18:col5 |
| D | `Q310` · D1 | 2.87 | µg h ml-1 |  |  | (h·µg)/ml | exact (1) | Richard_1992_table_3:row6:col1, Richard_1992_table_3:row6:col2, Richard_1992_table_3:row6:col3, Richard_1992_table_3:row6:col4, Richard_1992_table_3:row6:col5 |
| E | `Q38` · E | 0.66 | µg h ml-1 |  |  | (h·µg)/ml | exact (1) | Richard_1992_table_3:row7:col1, Richard_1992_table_3:row7:col2, Richard_1992_table_3:row7:col3, Richard_1992_table_3:row7:col4, Richard_1992_table_3:row7:col5 |
| F | `Q40` · Fab | 2.39 | µg h ml-1 |  |  |  | exact (1) | Richard_1992_table_3:row8:col1, Richard_1992_table_3:row8:col2, Richard_1992_table_3:row8:col3, Richard_1992_table_3:row8:col4, Richard_1992_table_3:row8:col5 |
| 4 | `Q17` · AUC∞ | 1.97 | µg h ml-1 | 7.092 | kg*s/m3 | (h·µg)/ml | llm (0.6) | Richard_1992_table_3:row17:col1, Richard_1992_table_3:row17:col2, Richard_1992_table_3:row17:col3, Richard_1992_table_3:row17:col4, Richard_1992_table_3:row17:col5 |
| The mean total plasma clearance (CL) | `Q22` · CL | 21.41 | L/h | 5.947e-06 | m3/s | L/h | boundary (0.8) | Richard_1992:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'no. compartments' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['Richard_1992_table_3:row1:col1', 'Richard_1992_table_3:row1:col2', 'Richard_1992_table_3:row1:col3', 'Richard_1992_table_3:row1:col4', 'Richard_1992_table_3:row1:col5'])
- dropped unlinked row (NIL): '2a' — extend the ontology if this is a real PK parameter (source ['Richard_1992_table_3:row3:col1', 'Richard_1992_table_3:row3:col2', 'Richard_1992_table_3:row3:col3', 'Richard_1992_table_3:row3:col4', 'Richard_1992_table_3:row3:col5'])
- dropped unlinked row (NIL): 'C' — extend the ontology if this is a real PK parameter (source ['Richard_1992_table_3:row5:col1', 'Richard_1992_table_3:row5:col2', 'Richard_1992_table_3:row5:col3', 'Richard_1992_table_3:row5:col4', 'Richard_1992_table_3:row5:col5'])
- unit_dimension_mismatch: 'D' → Q310 (unit '[time] * [mass] / [length] ** 3' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'G' — extend the ontology if this is a real PK parameter (source ['Richard_1992_table_3:row9:col1', 'Richard_1992_table_3:row9:col2', 'Richard_1992_table_3:row9:col3', 'Richard_1992_table_3:row9:col4', 'Richard_1992_table_3:row9:col5'])
- dropped duplicate Q88 ('H', value '0.52') — already have one for this compound
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['Richard_1992_table_3:row11:col2', 'Richard_1992_table_3:row11:col3', 'Richard_1992_table_3:row11:col4', 'Richard_1992_table_3:row11:col5', 'Richard_1992_table_3:row21:col2', 'Richard_1992_table_3:row21:col3', 'Richard_1992_table_3:row21:col4', 'Richard_1992_table_3:row23:col2', 'Richard_1992_table_3:row23:col3', 'Richard_1992_table_3:row23:col4'])
- dropped duplicate Q88 ('1', value '1.13') — already have one for this compound
- dropped unlinked row (NIL): '2b' — extend the ontology if this is a real PK parameter (source ['Richard_1992_table_3:row15:col1', 'Richard_1992_table_3:row15:col2', 'Richard_1992_table_3:row15:col3', 'Richard_1992_table_3:row15:col4', 'Richard_1992_table_3:row15:col5'])
- dropped duplicate Q88 ('3', value '1.97') — already have one for this compound
- dropped duplicate Q88 ('6', value '1.87') — already have one for this compound
- dropped duplicate Q20 ('7', value '1.30') — already have one for this compound
- salvaged Q22 ('The mean total plasma clearance (CL)'=21.41) from results prose — parameter table was unreadable
- implicit units: 'The mean total plasma clearance (CL)' → L/h (from the paper text: 'Abstract: "mean ± s.d. values of clearance, half-life and total distribution volume were 21.41 ± 14.59 l h-\' ... respect')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Mitoxantrone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['Richard_1992_table_3:row17:col1', 'Richard_1992_table_3:row17:col2', 'Richard_1992_table_3:row17:col3', 'Richard_1992_table_3:row17:col4', 'Richard_1992_table_3:row17:col5'] |
| C5_dimension_Q20 | pass | [time] * [mass] / [length] ** 3 |  | ['Richard_1992_table_3:row2:col1', 'Richard_1992_table_3:row2:col2', 'Richard_1992_table_3:row2:col3', 'Richard_1992_table_3:row2:col4', 'Richard_1992_table_3:row2:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Richard_1992:other_prose'] |
| C5_dimension_Q310 | fail | [time] | µg h ml-1 ([time] * [mass] / [length] ** 3) | ['Richard_1992_table_3:row6:col1', 'Richard_1992_table_3:row6:col2', 'Richard_1992_table_3:row6:col3', 'Richard_1992_table_3:row6:col4', 'Richard_1992_table_3:row6:col5'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 |  | ['Richard_1992_table_3:row4:col1', 'Richard_1992_table_3:row4:col2', 'Richard_1992_table_3:row4:col3', 'Richard_1992_table_3:row4:col4', 'Richard_1992_table_3:row4:col5', 'Richard_1992_table_3:row18:col1', 'Richard_1992_table_3:row18:col2', 'Richard_1992_table_3:row18:col3', 'Richard_1992_table_3:row18:col4', 'Richard_1992_table_3:row18:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 21.41 | ['Richard_1992:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.4 L/h | ['Richard_1992:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitoxantrone%5D%20Mitoxantrone_Richard1992_reference&body=Drug%3A%20mitoxantrone%0ARecord%3A%20Mitoxantrone_Richard1992_reference%0APaper%3A%20Richard_1992%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mitoxantrone/Mitoxantrone_Richard1992_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 12:10 UTC</sub>
