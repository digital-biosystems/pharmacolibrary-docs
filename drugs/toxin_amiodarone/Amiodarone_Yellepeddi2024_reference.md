<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Amiodarone&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/&quot;},{&quot;label&quot;:&quot;Yellepeddi_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amiodarone_Brien1990_reference&quot;,&quot;label&quot;:&quot;Brien_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Brien1990_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Deb2021_reference&quot;,&quot;label&quot;:&quot;Deb_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Deb2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Lescroart2022_reference&quot;,&quot;label&quot;:&quot;Lescroart_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Lescroart2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_reference&quot;,&quot;label&quot;:&quot;Pollak_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Freedman1991_reference&quot;,&quot;label&quot;:&quot;Freedman_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Freedman1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Amiodarone — `Amiodarone_Yellepeddi2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Amiodarone" model-id="Amiodarone_Yellepeddi2024_reference" status="rejected" stale="false" population="pediatric patients on ECMO (PBPK scaled from adults; neonates to adolescents)" measured-compound="amiodarone" parameterization="mechanistic" topology="1C"></div>

## Citation
Yellepeddi VK, Hunt JP, Green DJ, McKnite A, Whelan A, Watt K. A physiologically-based pharmacokinetic modeling approach for dosing amiodarone in children on ECMO. CPT: pharmacometrics & systems pharmacology 13(9):1542–1553 (2024).
  ·  DOI: [10.1002/psp4.13199](https://doi.org/10.1002/psp4.13199)

## Population and dosing

**Population:** pediatric patients on ECMO (PBPK scaled from adults; neonates to adolescents) · condition children on ECMO for cardiac arrest/ventricular arrhythmias · age group mixed · n = 40 (38 POPS + 2 PCH; virtual populations N=1000).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 8.9709765999999996E-2 | Css | 18246.03 | ng/mL |
| 2 | Cmax | 874.1395 | ng/mL |
| 4 | Ct | 746.19479999999999 | ng/mL |
| 48 | C0 | 104.55132999999999 | ng/mL |
| 96 | equation variable | 63.75329 | ng/mL |
| 144 | Km | 34.492690000000003 | ng/mL |
| 648 | A1 | 13.369339 | ng/mL |
| 984 | fu | 10.771191999999999 | ng/mL |
| 4.0696335000000001 | Vmax | 0.34608936000000001 | µg/mL |
| CLsys | CL | 53.363 | L/h |
| tvV(L) | V | 30.703 | L |
| k a3 | kabs | 2.05 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.353). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 144: this record has 34.492690000000003, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 8.9709765999999996E-2 | `Q34` · Css | 18246.03 | ng/mL | 0.01825 | kg/m3 | ng/ml | llm (0.6) | Yellepeddi_2024_table_S2:row0:col1 |
| 2 | `Q32` · Cmax | 874.1395 | ng/mL | 0.0008741 | kg/m3 | ng/ml | llm (0.6) | Yellepeddi_2024_table_S2:row2:col1 |
| 4 | `Q75` · Ct | 746.19479999999999 | ng/mL | 0.0007462 | kg/m3 | ng/ml | llm (0.6) | Yellepeddi_2024_table_S2:row3:col1 |
| 48 | `Q86` · C0 | 104.55132999999999 | ng/mL |  |  | ng/ml | llm (0.6) | Yellepeddi_2024_table_S2:row8:col1 |
| 96 | `Q900` · equation variable | 63.75329 | ng/mL |  |  | ng/ml | llm (0.6) | Yellepeddi_2024_table_S2:row9:col1 |
| 144 | `Q1` · Km | 34.492690000000003 | ng/mL | 3.449e-05 | kg/m3 | ng/ml | llm (0.6) | Yellepeddi_2024_table_S2:row10:col1 |
| 648 | `Q415` · A1 | 13.369339 | ng/mL |  |  | ng/ml | llm (0.6) | Yellepeddi_2024_table_S2:row14:col1 |
| 984 | `Q46` · fu | 10.771191999999999 | ng/mL |  |  | ng/ml | llm (0.6) | Yellepeddi_2024_table_S2:row16:col1 |
| 4.0696335000000001 | `Q66` · Vmax | 0.34608936000000001 | µg/mL |  |  | µg/ml | llm (0.6) | Yellepeddi_2024_table_S3:row3:col1 |
| CLsys | `Q22` · CL | 53.363 | L/h | 1.482e-05 | m3/s | L/h | review_gapfill (0.7) | Deb_2021:review |
| tvV(L) | `Q61` · V | 30.703 | L | 0.0307 | m3 | L | review_gapfill (0.7) | Li_2025:review |
| k a3 | `Q49` · kabs | 2.05 | h -1 | 0.0005694 | 1/s | 1/h | review_gapfill (0.7) | Rodríguez-Fernández_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '0.5' — extend the ontology if this is a real PK parameter (source ['Yellepeddi_2024_table_S2:row1:col1'])
- dropped duplicate Q75 ('8', value '494.49063000000001') — already have one for this compound
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['Yellepeddi_2024_table_S2:row5:col1'])
- dropped duplicate Q75 ('24', value '231.34557000000001') — already have one for this compound
- dropped duplicate Q34 ('34', value '115.307') — already have one for this compound
- unit_dimension_mismatch: '48' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q32 ('216', value '26.275585') — already have one for this compound
- dropped duplicate Q32 ('312', value '21.079151') — already have one for this compound
- dropped duplicate Q32 ('480', value '14.767723999999999') — already have one for this compound
- dropped duplicate Q1 ('816', value '11.498538') — already have one for this compound
- dropped duplicate Q1 ('1152', value '9.7516420000000004') — already have one for this compound
- dropped duplicate Q32 ('1488', value '7.3383710000000004') — already have one for this compound
- dropped duplicate Q32 ('1824', value '5.813034') — already have one for this compound
- dropped duplicate Q1 ('1.5340391', value '0.10138107') — already have one for this compound
- dropped duplicate Q32 ('2.0674223999999999', value '0.15208885') — already have one for this compound
- unit_dimension_mismatch: '3.0271525000000001' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q86 ('3.0271525000000001', value '0.31231436000000001') — already have one for this compound
- unit_dimension_mismatch: '4.0696335000000001' → Q66 (unit '[mass] / [length] ** 3' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: '6.0507073' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q86 ('6.0507073', value '0.42508859999999998') — already have one for this compound
- dropped duplicate Q34 ('7.9744400000000004', value '0.44611377000000002') — already have one for this compound
- dropped duplicate Q1 ('10.041862500000001', value '0.32841384000000001') — already have one for this compound
- dropped duplicate Q34 ('12.1272745', value '0.4086127') — already have one for this compound
- dropped duplicate Q75 ('13.995015', value '0.38110670000000002') — already have one for this compound
- dropped duplicate Q1 ('24.008994999999999', value '0.26858320000000002') — already have one for this compound
- dropped value-less row: 'a'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amiodarone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Deb_2021's review values (primary lacked it)
- gap-filled Q61 (V) from Li_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Rodríguez-Fernández_2022's review values (primary lacked it)

**Extraction notes:**
- table Yellepeddi_2024_table_S1: unknown_column_role
- table Yellepeddi_2024_table_S1: ragged_grid
- companion parameter table S1 transcribed (16 record(s))
- companion parameter table S3 transcribed (10 record(s))
- LLM selected parameter table(s) 2, S1, S2, S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.353 (6/17 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[144]` | 34.492690000000003 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[24]` |  | 231.34557000000001 | only_one_extracted |
| `gpt-oss:120b` | `parameters[2].parameter_id` | Q32 | Q99 | mismatch |
| `gpt-oss:120b` | `parameters[34]` |  | 115.307 | only_one_extracted |
| `gpt-oss:120b` | `parameters[4.0696335000000001]` | 0.34608936000000001 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[48]` | 104.55132999999999 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[4]` | 746.19479999999999 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[648]` | 13.369339 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[8.9709765999999996e-2].parameter_id` | Q34 | Q32 | mismatch |
| `gpt-oss:120b` | `parameters[96]` | 63.75329 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[984]` | 10.771191999999999 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Yellepeddi_2024_table_S2:row10:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Deb_2021:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Yellepeddi_2024_table_S2:row2:col1'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 |  | ['Yellepeddi_2024_table_S2:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Rodríguez-Fernández_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Li_2025:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | µg/mL ([mass] / [length] ** 3) | ['Yellepeddi_2024_table_S3:row3:col1'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Yellepeddi_2024_table_S2:row3:col1'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng/mL ([mass] / [length] ** 3) | ['Yellepeddi_2024_table_S2:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 53.36 | ['Deb_2021:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 53.4 L/h | ['Deb_2021:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 30.7 L | ['Li_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamiodarone%5D%20Amiodarone_Yellepeddi2024_reference&body=Drug%3A%20amiodarone%0ARecord%3A%20Amiodarone_Yellepeddi2024_reference%0APaper%3A%20Yellepeddi_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_amiodarone/Amiodarone_Yellepeddi2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 19:27 UTC</sub>
