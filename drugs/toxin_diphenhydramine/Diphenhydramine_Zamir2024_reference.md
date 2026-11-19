<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Diphenhydramine&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/&quot;},{&quot;label&quot;:&quot;Zamir_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diphenhydramine_Gyawali2019_reference&quot;,&quot;label&quot;:&quot;Gyawali_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Gyawali2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Wasfi2003_reference&quot;,&quot;label&quot;:&quot;Wasfi_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Wasfi2003_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Yoo1990_reference&quot;,&quot;label&quot;:&quot;Yoo_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Yoo1990_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Kawase2021_control&quot;,&quot;label&quot;:&quot;Kawase_2021_control&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Kawase2021_control.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Kawase2021_lps&quot;,&quot;label&quot;:&quot;Kawase_2021_lps&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Kawase2021_lps.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Simons1990_reference&quot;,&quot;label&quot;:&quot;Simons_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Simons1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Xie2016_reference&quot;,&quot;label&quot;:&quot;Xie_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Diphenhydramine — `Diphenhydramine_Zamir2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q349 unit cm/min ([length] / [time]) vs 1 / [time].

<div class="pk-model-meta" hidden drug="Diphenhydramine" model-id="Diphenhydramine_Zamir2024_reference" status="rejected" stale="false" population="healthy young adults, elderly adults, children and adolescents" measured-compound="Diphenhydramine" parameterization="mechanistic" topology="1C"></div>

## Citation
Zamir A, Rasool MF, Alqahtani F, Alqhtani H, Ahmad T. Integration of Ontogeny-Based Changes for Predicting the Exposure of Diphenhydramine in the Pediatric Population: A PBPK Modeling Approach. Pharmaceutics 16(12) (2024).
  ·  DOI: [10.3390/pharmaceutics16121553](https://doi.org/10.3390/pharmaceutics16121553)

## Population and dosing

**Population:** healthy young adults, elderly adults, children and adolescents · condition healthy · age group mixed.

**Dosing:** 0.556, 0.807, 0.93, 1.25, 25, 50, 87.9 mg; mg/kg, iv (bolus); oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted, plus 8 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight (g/mol) | MW | 255.36 | g/mol |
| Specific organ permeability (cm/min) | kuptake | 0.19 | cm/min |
| Percent of drug unbound to protein (fu) | fu | 18 | fu |
| Renal clearance (CLR) (L/h/kg) | CLR | 0.01 | L/h/kg |
| Cmax (ng/mL) Pre | Cmax | 150.54 | ng/mL |
| Cmax (ng/mL) R Ratio | Cmax_ratio | 0.6 | ng/mL |
| AUC0-inf (ng/mL·h) Pre | AUC∞ | 841.09 | ng/mL·h |
| AUC0-inf (ng/mL·h) R Ratio | AUC ratio | 1.48 | ng/mL·h |
| CL (L/h) Pre | CL | 59.44 | L/h |
| theta_q66_cyp1a2 | theta_q66_cyp1a2 | 14 |  |
| theta_q1_cyp1a2 | theta_q1_cyp1a2 | 295 |  |
| theta_q66_cyp2c9 | theta_q66_cyp2c9 | 4.43 |  |
| theta_q1_cyp2c9 | theta_q1_cyp2c9 | 134 |  |
| theta_q66_cyp2c19 | theta_q66_cyp2c19 | 11 |  |
| theta_q1_cyp2c19 | theta_q1_cyp2c19 | 55.7 |  |
| theta_q66_cyp2d6 | theta_q66_cyp2d6 | 2.38 |  |
| theta_q1_cyp2d6 | theta_q1_cyp2d6 | 1.12 |  |
| VD (µL/g) | V | 82.0 | µL/g |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.826). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q349 unit cm/min ([length] / [time]) vs 1 / [time].**

A reported unit could not be converted (kuptake, fu, Cmax_ratio and AUC ratio), so that value has no SI equivalent. Extracted — diphenhydramine: MW 255 g/mol, kuptake 0.19 cm/min, fu 18 fu, CLR 0.01 L/h/kg, Cmax 151 ng/mL, Cmax_ratio 0.6 ng/mL, AUC∞ 841 ng/mL·h, AUC ratio 1.48 ng/mL·h, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of acid dissociation constant: this record has none, the second reading 8.98; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 255.36 | g/mol | 0.2554 |  | g/(m·ol) | exact (1) | Zamir_2024_table_2:row1:col1 |
| Specific organ permeability (cm/min) | `Q349` · kuptake | 0.19 | cm/min |  |  | cm/min | llm (0.6) | Zamir_2024_table_2:row9:col1 |
| Percent of drug unbound to protein (fu) | `Q46` · fu | 18 | fu |  |  | fu | llm_confirmed (0.6) | Zamir_2024_table_2:row12:col1 |
| Renal clearance (CLR) (L/h/kg) | `Q26` · CLR | 0.01 | L/h/kg | 1.944e-07 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Zamir_2024_table_2:row22:col1 |
| Cmax (ng/mL) Pre | `Q32` · Cmax | 150.54 | ng/mL | 0.0001505 | kg/m3 | ng/ml | llm_confirmed (0.6) | Zamir_2024_table_3:row0:col2, Zamir_2024_table_3:row1:col2, Zamir_2024_table_3:row2:col2, Zamir_2024_table_3:row3:col2, Zamir_2024_table_3:row4:col2, Zamir_2024_table_3:row5:col2, Zamir_2024_table_3:row6:col2, Zamir_2024_table_3:row7:col2 |
| Cmax (ng/mL) R Ratio | `Q33` · Cmax_ratio | 0.6 | ng/mL |  |  | ng/ml | llm_corrected (0.6) | Zamir_2024_table_3:row0:col4, Zamir_2024_table_3:row1:col4, Zamir_2024_table_3:row2:col4, Zamir_2024_table_3:row3:col4, Zamir_2024_table_3:row4:col4, Zamir_2024_table_3:row5:col4, Zamir_2024_table_3:row6:col4, Zamir_2024_table_3:row7:col4 |
| AUC0-inf (ng/mL·h) Pre | `Q17` · AUC∞ | 841.09 | ng/mL·h | 3.028 | kg*s/m3 | ng/(h·ml) | llm_confirmed (0.6) | Zamir_2024_table_3:row0:col5, Zamir_2024_table_3:row1:col5, Zamir_2024_table_3:row2:col5, Zamir_2024_table_3:row3:col5, Zamir_2024_table_3:row4:col5, Zamir_2024_table_3:row5:col5, Zamir_2024_table_3:row6:col5, Zamir_2024_table_3:row7:col5 |
| AUC0-inf (ng/mL·h) R Ratio | `Q21` · AUC ratio | 1.48 | ng/mL·h |  |  | ng/(h·ml) | llm_corrected (0.6) | Zamir_2024_table_3:row0:col7, Zamir_2024_table_3:row1:col7, Zamir_2024_table_3:row2:col7, Zamir_2024_table_3:row3:col7, Zamir_2024_table_3:row4:col7, Zamir_2024_table_3:row5:col7, Zamir_2024_table_3:row6:col7, Zamir_2024_table_3:row7:col7 |
| CL (L/h) Pre | `Q22` · CL | 59.44 | L/h | 1.651e-05 | m3/s | l/h | llm_confirmed (0.6) | Zamir_2024_table_3:row0:col8, Zamir_2024_table_3:row1:col8, Zamir_2024_table_3:row2:col8, Zamir_2024_table_3:row3:col8, Zamir_2024_table_3:row4:col8, Zamir_2024_table_3:row5:col8, Zamir_2024_table_3:row6:col8, Zamir_2024_table_3:row7:col8 |
| theta_q66_cyp1a2 | `Q900` · theta_q66_cyp1a2 | 14 |  |  |  |  |  | Zamir_2024_table_2:row14:col1 |
| theta_q1_cyp1a2 | `Q900` · theta_q1_cyp1a2 | 295 |  |  |  |  |  | Zamir_2024_table_2:row15:col1 |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 4.43 |  |  |  |  |  | Zamir_2024_table_2:row16:col1 |
| theta_q1_cyp2c9 | `Q900` · theta_q1_cyp2c9 | 134 |  |  |  |  |  | Zamir_2024_table_2:row17:col1 |
| theta_q66_cyp2c19 | `Q900` · theta_q66_cyp2c19 | 11 |  |  |  |  |  | Zamir_2024_table_2:row18:col1 |
| theta_q1_cyp2c19 | `Q900` · theta_q1_cyp2c19 | 55.7 |  |  |  |  |  | Zamir_2024_table_2:row19:col1 |
| theta_q66_cyp2d6 | `Q900` · theta_q66_cyp2d6 | 2.38 |  |  |  |  |  | Zamir_2024_table_2:row20:col1 |
| theta_q1_cyp2d6 | `Q900` · theta_q1_cyp2d6 | 1.12 |  |  |  |  |  | Zamir_2024_table_2:row21:col1 |
| VD (µL/g) | `Q61` · V | 82.0 | µL/g | 0.00574 | m3 | L | review_gapfill (0.7) | Gyawali_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- conflicting source units for 'Percent of drug unbound to protein (fu)': [{'unit': 'fu', 'source': 'Zamir_2024_table_2:row12:col0', 'scope': 'label'}, {'unit': '%', 'source': 'Zamir_2024_table_2:row12:col1', 'scope': 'inline'}]
- column '1-' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2-' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3-' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4-' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5-' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6-' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7-' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8-' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Lipophilicity (Log P)' — extend the ontology if this is a real PK parameter (source ['Zamir_2024_table_2:row2:col1'])
- dropped unlinked row (NIL): 'Acid dissociation constant (pKa)' — extend the ontology if this is a real PK parameter (source ['Zamir_2024_table_2:row5:col1'])
- dropped unlinked row (NIL): 'Caco-2 cell permeability (cm/s × 10−4)' — extend the ontology if this is a real PK parameter (source ['Zamir_2024_table_2:row7:col1'])
- unit_dimension_mismatch: 'Specific organ permeability (cm/min)' → Q349 (unit '[length] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q32 ('Cmax (ng/mL) Obs', value '251.1') — already have one for this compound
- dropped duplicate Q17 ('AUC0-inf (ng/mL·h) Obs', value '565.97') — already have one for this compound
- dropped duplicate Q22 ('CL (L/h) Obs', value '88.34') — already have one for this compound
- dropped duplicate Q22 ('CL (L/h) R Ratio', value '0.67') — already have one for this compound
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Diphenhydramine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- pharmacogenetic covariate 'theta_q66_cyp1a2' (cyp1a2) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp1a2' (cyp1a2) — PGx domain
- pharmacogenetic covariate 'theta_q66_cyp2c9' (cyp2c9) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp2c9' (cyp2c9) — PGx domain
- pharmacogenetic covariate 'theta_q66_cyp2c19' (cyp2c19) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp2c19' (cyp2c19) — PGx domain
- pharmacogenetic covariate 'theta_q66_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp2d6' (cyp2d6) — PGx domain
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Gyawali_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Zamir_2024_table_2: conflicting_units
- table Zamir_2024_table_2: unparsed_numeric_cell
- table Zamir_2024_table_3: unparsed_numeric_cell
- transposed table Zamir_2024_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (72 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.826 (19/23 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[acid dissociation constant]` |  | 8.98 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-inf (ng/ml h) r ratio]` | 1.48 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax (ng/ml) r ratio]` | 0.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[specific organ permeability].parameter_id` | Q349 | Q410 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Zamir_2024_table_3:row0:col5', 'Zamir_2024_table_3:row1:col5', 'Zamir_2024_table_3:row2:col5', 'Zamir_2024_table_3:row3:col5', 'Zamir_2024_table_3:row4:col5', 'Zamir_2024_table_3:row5:col5', 'Zamir_2024_table_3:row6:col5', 'Zamir_2024_table_3:row7:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zamir_2024_table_3:row0:col8', 'Zamir_2024_table_3:row1:col8', 'Zamir_2024_table_3:row2:col8', 'Zamir_2024_table_3:row3:col8', 'Zamir_2024_table_3:row4:col8', 'Zamir_2024_table_3:row5:col8', 'Zamir_2024_table_3:row6:col8', 'Zamir_2024_table_3:row7:col8'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Zamir_2024_table_2:row22:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Zamir_2024_table_3:row0:col2', 'Zamir_2024_table_3:row1:col2', 'Zamir_2024_table_3:row2:col2', 'Zamir_2024_table_3:row3:col2', 'Zamir_2024_table_3:row4:col2', 'Zamir_2024_table_3:row5:col2', 'Zamir_2024_table_3:row6:col2', 'Zamir_2024_table_3:row7:col2'] |
| C5_dimension_Q349 | fail | 1 / [time] | cm/min ([length] / [time]) | ['Zamir_2024_table_2:row9:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Zamir_2024_table_2:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 / [mass] |  | ['Gyawali_2019:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 59.44 | ['Zamir_2024_table_3:row0:col8', 'Zamir_2024_table_3:row1:col8', 'Zamir_2024_table_3:row2:col8', 'Zamir_2024_table_3:row3:col8', 'Zamir_2024_table_3:row4:col8', 'Zamir_2024_table_3:row5:col8', 'Zamir_2024_table_3:row6:col8', 'Zamir_2024_table_3:row7:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 59.4 L/h | ['Zamir_2024_table_3:row0:col8', 'Zamir_2024_table_3:row1:col8', 'Zamir_2024_table_3:row2:col8', 'Zamir_2024_table_3:row3:col8', 'Zamir_2024_table_3:row4:col8', 'Zamir_2024_table_3:row5:col8', 'Zamir_2024_table_3:row6:col8', 'Zamir_2024_table_3:row7:col8'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.74 L | ['Gyawali_2019:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiphenhydramine%5D%20Diphenhydramine_Zamir2024_reference&body=Drug%3A%20diphenhydramine%0ARecord%3A%20Diphenhydramine_Zamir2024_reference%0APaper%3A%20Zamir_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_diphenhydramine/Diphenhydramine_Zamir2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 02:54 UTC</sub>
