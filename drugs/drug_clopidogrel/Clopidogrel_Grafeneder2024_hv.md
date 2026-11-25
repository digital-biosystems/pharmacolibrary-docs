<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;clopidogrel&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/&quot;},{&quot;label&quot;:&quot;Grafeneder_2024 \u00b7 hv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clopidogrel_Jung2024_reference&quot;,&quot;label&quot;:&quot;Jung_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Jung2024_reference.md&quot;,&quot;status&quot;:&quot;Curated (human-checked)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Ma2014_reference&quot;,&quot;label&quot;:&quot;Ma_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Ma2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Yousef2013_reference&quot;,&quot;label&quot;:&quot;Yousef_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Yousef2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Jung_2024_PRU&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Jung_2024_PRU.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Simon_2015_IPA&quot;,&quot;label&quot;:&quot;Simon_2015 \u00b7 IPA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Simon_2015_IPA.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Jung_2024_CYP2C19_Q45&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 CYP2C19&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pgx_Jung_2024_CYP2C19_Q45.md&quot;,&quot;status&quot;:&quot;Simulated \u00b7 quantitative&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clopidogrel — `Clopidogrel_Grafeneder2024_hv`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for clopidogrel's clearance and volume of distribution; the model does not reproduce the paper's peak concentration (Cmax) (paper 3.3, model 0.00674) (+4 more).

<div class="pk-model-meta" hidden drug="clopidogrel" model-id="Clopidogrel_Grafeneder2024_hv" status="model_quarantined" stale="false" population="hemodialysis patients and healthy volunteers" measured-compound="clopidogrel active metabolite" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Grafeneder J, van Os W, Minichmayr IK, Kovacevic Miljevic KD, Reiter B, Säemann MD et al. Prospective Trial on the Pharmacokinetics of Clopidogrel in Hemodialysis Patients. Kidney international reports 9(10):2970–2980 (2024).
  ·  DOI: [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029)

## Population and dosing

**Population:** hemodialysis patients and healthy volunteers · condition end-stage renal disease · age group adult · n = 32.

**Dosing:** 75, 300 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed clopidogrel, measured clopidogrel active metabolite.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax, CLO [ng/ml] | Cmax | 1.9 | ng/ml |
| Cmax ratio CAM: CLO | Cmax_ratio | 13.5 |  |
| AUClast, CLO [ng/ml·min] | AUClast | 160 | ng/ml·min |
| t1/2, CLO [min] | t1/2z | 87.5 | min |
| Cmax [µg/ml] | Cmax | 12 | µg/ml |
| AUClast [µg/ml·min] | AUClast | 423 | µg/ml·min |
| t1/2 [min] | t1/2z | 83.9 | min |
| Clearance [ml/min] | CL | 81.9 | ml/min |
| Vd [ml] | V | 8484 | ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.174), gpt-5.6-luna (not confirmed, agreement 0.077). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for clopidogrel's clearance and volume of distribution; the model does not reproduce the paper's peak concentration (Cmax) (paper 3.3, model 0.00674) (+4 more).**

The model was built, but clopidogrel's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — clopidogrel: Cmax 1.9 ng/ml, Cmax_ratio 13.5, AUClast 160 ng/ml·min, t1/2z 87.5 min; pantoprazole: Cmax 12 µg/ml, AUClast 423 µg/ml·min, t1/2z 83.9 min, CL 81.9 ml/min, V 8.48e+03 ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of aucinf_clo [ng/ml min]: this record has none, the second reading 227; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax, CLO [ng/ml] | `Q32` · Cmax | 1.9 | ng/ml | 1.9e-06 | kg/m3 | ng/ml | llm_confirmed (0.6) | Grafeneder_2024_table_3:row2:col1, Grafeneder_2024_table_3:row2:col2, Grafeneder_2024_table_3:row2:col3 |
| Cmax ratio CAM: CLO | `Q33` · Cmax_ratio | 13.5 |  | 13.5 |  |  | llm_corrected (0.6) | Grafeneder_2024_table_3:row4:col1, Grafeneder_2024_table_3:row4:col2, Grafeneder_2024_table_3:row4:col3 |
| AUClast, CLO [ng/ml·min] | `Q74` · AUClast | 160 | ng/ml·min | 0.0096 | kg*s/m3 | ng/(min·ml) | llm_confirmed (0.6) | Grafeneder_2024_table_3:row5:col1, Grafeneder_2024_table_3:row5:col2, Grafeneder_2024_table_3:row5:col3 |
| t1/2, CLO [min] | `Q57` · t1/2z | 87.5 | min | 5250 | s | min | llm_confirmed (0.6) | Grafeneder_2024_table_3:row7:col1, Grafeneder_2024_table_3:row7:col2, Grafeneder_2024_table_3:row7:col3 |
| Cmax [µg/ml] | `Q32` · Cmax | 12 | µg/ml | 0.012 | kg/m3 | µg/ml | llm_confirmed (0.6) | Grafeneder_2024_table_3:row10:col1, Grafeneder_2024_table_3:row10:col2, Grafeneder_2024_table_3:row10:col3 |
| AUClast [µg/ml·min] | `Q74` · AUClast | 423 | µg/ml·min | 25.38 | kg*s/m3 | µg/(min·ml) | llm_confirmed (0.6) | Grafeneder_2024_table_3:row11:col1, Grafeneder_2024_table_3:row11:col2, Grafeneder_2024_table_3:row11:col3 |
| t1/2 [min] | `Q57` · t1/2z | 83.9 | min | 5034 | s | min | llm_confirmed (0.6) | Grafeneder_2024_table_3:row12:col1, Grafeneder_2024_table_3:row12:col2, Grafeneder_2024_table_3:row12:col3 |
| Clearance [ml/min] | `Q22` · CL | 81.9 | ml/min | 1.365e-06 | m3/s | ml/min | llm_confirmed (0.6) | Grafeneder_2024_table_3:row13:col1, Grafeneder_2024_table_3:row13:col2, Grafeneder_2024_table_3:row13:col3 |
| Vd [ml] | `Q61` · V | 8484 | ml | 0.008484 | m3 | ml | llm_confirmed (0.6) | Grafeneder_2024_table_3:row14:col1, Grafeneder_2024_table_3:row14:col2, Grafeneder_2024_table_3:row14:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax, CAM [ng/ml]', value '22.1') — already have one for this compound
- dropped duplicate Q74 ('AUClast, CAM [ng/ml·min]', value '1601') — already have one for this compound
- dropped duplicate Q57 ('t1/2, CAM [min]', value '33') — already have one for this compound
- dropped unlinked row (NIL): 'ADP [U]' — extend the ontology if this is a real PK parameter (source ['Grafeneder_2024_table_3:row16:col1', 'Grafeneder_2024_table_3:row16:col2', 'Grafeneder_2024_table_3:row16:col3'])
- dropped unlinked row (NIL): '0 min [%]' — extend the ontology if this is a real PK parameter (source ['Grafeneder_2024_table_3:row18:col1', 'Grafeneder_2024_table_3:row18:col2', 'Grafeneder_2024_table_3:row18:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clopidogrel active metabolite
- template fit: PK_3M_3C — hepatic compartment; parent 1 + hepatic, metabolites [0] (site hepatic: 'A liver compartment was included in the model to account for the first-pass metabolism of clopidogrel.')
- population split: 'hv' subgroup of Grafeneder_2024 (paper reports 4 populations: hdp, hdp n = 17, hv, hv n = 16)
- row roles: 7 per-group rows of clopidogrel summary_statistic but 0 reference group(s) — kept as printed
- row roles: 6 per-group rows of clopidogrel active metabolite summary_statistic but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles: 9 per-group rows of pantoprazole summary_statistic but 0 reference group(s) — kept as printed
- row roles: 26 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 0 linked by role; re-tagged parent→pantoprazole ×42
- molar mass: none of 1 PubChem candidate(s) is 'clopidogrel active metabolite' (LLM) — left in mass units
- molar mass: none found for 'clopidogrel active metabolite' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'clopidogrel active metabolite', not clopidogrel — the review values are the parent's

**Extraction notes:**
- table tbl2: ambiguous_numeric_format
- table Grafeneder_2024_table_3: missing_label
- table Grafeneder_2024_table_3: ambiguous_numeric_format
- companion parameter table 3 transcribed (96 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.174 (4/23 fields) | 19 |
| `gpt-5.6-luna` | not confirmed | 0.077 (1/13 fields) | 12 |

<details><summary>31 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `model.links` | [['clopidogrel', 'clopidogrel active metabolite', 'metabolism']] | [['clopidogrel', 'clopidogrel active metabolite (cam)', 'metabolism']] | mismatch |
| `gpt-5.6-luna` | `parameters[auclast_clo [ng/ml min]]` | 127 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[clearance [ml/min]]` | 79 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[clearance]` |  | 85.7 | only_one_extracted |
| `gpt-5.6-luna` | `parameters[cmax ratio cam:clo]` | 24.2 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[cmax_clo [ng/ml]]` | 1.5 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[ka]` | 5.95 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[t1/2_clo [min]]` | 131 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[vd [ml]]` | 4128 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[vd]` |  | 7528 | only_one_extracted |
| `gpt-5.6-luna` | `screen.dose_compound` | clopidogrel | clopidogrel and pantoprazole | mismatch |
| `gpt-5.6-luna` | `screen.primary_analyte` | clopidogrel | clopidogrel and its active metabolite | mismatch |
| `gpt-oss-120b` | `parameters[aucinf [ug/ml min]]` |  | 468 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf_clo [ng/ml min]]` |  | 227 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast [ug/ml min]].value` | 423 | 409 | mismatch |
| `gpt-oss-120b` | `parameters[auclast, clo [ng/ml min]]` | 160 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast_clo [ng/ml min]]` |  | 188 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance [ml/min]].covariate_forms` | [] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[clearance [ml/min]].value` | 81.9 | 85.7 | mismatch |
| `gpt-oss-120b` | `parameters[cmax [ug/ml]].value` | 12 | 9.6 | mismatch |
| `gpt-oss-120b` | `parameters[cmax ratio cam: clo]` | 13.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax ratio cam:clo]` |  | 12.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax, clo [ng/ml]]` | 1.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax,clo [ng/ml]]` |  | 2.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intermediate_metabolizer]` |  | 7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[normal_metabolizer]` |  | 8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rapid_metabolizer]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 [min]].value` | 83.9 | 76.8 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2, clo [min]]` | 87.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2_clo [min]]` |  | 87.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd [ml]].value` | 8484 | 7528 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 87.5 | 71.8 | 0.8206 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Grafeneder_2024_table_3:row13:col1', 'Grafeneder_2024_table_3:row13:col2', 'Grafeneder_2024_table_3:row13:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Grafeneder_2024_table_3:row2:col1', 'Grafeneder_2024_table_3:row2:col2', 'Grafeneder_2024_table_3:row2:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Grafeneder_2024_table_3:row10:col1', 'Grafeneder_2024_table_3:row10:col2', 'Grafeneder_2024_table_3:row10:col3'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Grafeneder_2024_table_3:row7:col1', 'Grafeneder_2024_table_3:row7:col2', 'Grafeneder_2024_table_3:row7:col3'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Grafeneder_2024_table_3:row12:col1', 'Grafeneder_2024_table_3:row12:col2', 'Grafeneder_2024_table_3:row12:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Grafeneder_2024_table_3:row14:col1', 'Grafeneder_2024_table_3:row14:col2', 'Grafeneder_2024_table_3:row14:col3'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Grafeneder_2024_table_3:row5:col1', 'Grafeneder_2024_table_3:row5:col2', 'Grafeneder_2024_table_3:row5:col3'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Grafeneder_2024_table_3:row11:col1', 'Grafeneder_2024_table_3:row11:col2', 'Grafeneder_2024_table_3:row11:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.91 L/h |  |  | ['Grafeneder_2024_table_3:row13:col1', 'Grafeneder_2024_table_3:row13:col2', 'Grafeneder_2024_table_3:row13:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.48 L |  |  | ['Grafeneder_2024_table_3:row14:col1', 'Grafeneder_2024_table_3:row14:col2', 'Grafeneder_2024_table_3:row14:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | fail | Metabolite_C (measured=clopidogrel active metabolite) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | skipped |  |  |  | no second reading of this record |
| T1_cmax | reference | skipped | 3.3 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | fail | 7.7e-06 | 0.00674 | 875.4 | reported 7.7 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped |  | 0.00674 |  | the transcribed record carries no number for this value |
| T1_cmax | reference | fail | 1.22e-05 | 0.00674 | 552.5 | reported 12.2 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 1.5 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.5 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 12.8 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | fail | 2.3e-06 | 0.00674 | 2931 | reported 2.3 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 7.7e-06 | 0.00674 | 875.4 | reported 7.7 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.47e-05 | 0.00674 | 272.9 | reported 24.7 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.22e-05 | 0.00674 | 552.5 | reported 12.2 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 12.8 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.5 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.0096 | 0.00674 | 0.7021 | reported 9.6 μg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0029 | 0.00674 | 2.324 | reported 2.9 μg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.9e-06 | 0.00674 | 3548 | reported 1.9 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.1e-06 | 0.00674 | 2174 | reported 3.1 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.54e-06 | 0.00674 | 4377 | reported 1.54 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 7.6e-06 | 0.00674 | 886.9 | reported 7.6 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.02e-05 | 0.00674 | 660.8 | reported 10.2 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.21e-05 | 0.00674 | 305 | reported 22.1 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.48e-05 | 0.00674 | 271.8 | reported 24.8 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.545e-05 | 0.00674 | 190.1 | reported 35.45 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.22e-05 | 0.00674 | 552.5 | reported 12.2 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.22e-05 | 0.00674 | 552.5 | reported 12.2 ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 13.5 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8.1 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 24.2 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.6 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.4 | 0.00674 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.012 | 0.00674 | 0.5617 | reported 12.0 μg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | pass | 0.0068 | 0.00674 | 0.9912 | reported 6.8 μg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0187 | 0.00674 | 0.3605 | reported 18.7 μg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0032 | 0.00674 | 2.106 | reported 3.2 μg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0027 | 0.00674 | 2.497 | reported 2.7 μg/ml→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | fail | 1.458 | 1.053 | 0.7217 | reported 87.5 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.117 | 1.053 | 0.4973 | reported 127.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.5867 | 1.053 | 1.794 | reported 35.2 min→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.235 | 1.053 | 0.8522 | reported 74.1 min→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.28 | 1.053 | 0.8223 | reported 76.8 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.167 | 1.053 | 0.4858 | reported 130.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.458 | 1.053 | 0.7217 | reported 87.5 min→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.367 | 1.053 | 0.7701 | reported 82.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.183 | 1.053 | 0.4821 | reported 131.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.363 | 1.053 | 0.772 | reported 81.8 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.3 | 1.053 | 0.4576 | reported 138.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.55 | 1.053 | 1.914 | reported 33.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.72 | 1.053 | 1.462 | reported 43.2 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.4 | 1.053 | 2.631 | reported 24.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.82 | 1.053 | 1.284 | reported 49.2 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.283 | 1.053 | 0.3206 | reported 197.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.398 | 1.053 | 0.7527 | reported 83.9 min→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.155 | 1.053 | 0.9113 | reported 69.3 min→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 0.955 | 1.053 | 1.102 | reported 57.3 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.25 | 1.053 | 0.3239 | reported 195.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.867 | 1.053 | 0.5639 | reported 112.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.167 | 1.053 | 0.4858 | reported 130.0 min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clopidogrel/Clopidogrel_Grafeneder2024_hv/Clopidogrel_Grafeneder2024_hv_matlab.zip" download>Clopidogrel_Grafeneder2024_hv_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clopidogrel/Clopidogrel_Grafeneder2024_hv/Clopidogrel_Grafeneder2024_hv_matlab_simbio.zip" download>Clopidogrel_Grafeneder2024_hv_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clopidogrel/Clopidogrel_Grafeneder2024_hv/Clopidogrel_Grafeneder2024_hv_sbml.zip" download>Clopidogrel_Grafeneder2024_hv_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clopidogrel/Clopidogrel_Grafeneder2024_hv/Clopidogrel_Grafeneder2024_hv_cellml.zip" download>Clopidogrel_Grafeneder2024_hv_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Grafeneder J, van Os W, Minichmayr IK, Kovacevic Miljevic KD, Reiter B, Säemann MD et al. Prospective Trial on the Pharmacokinetics of Clopidogrel in Hemodialysis Patients. Kidney international reports 9(10):2970–2980 (2024). [doi:10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029)

**This record:** Pharmacolibrary, model `Clopidogrel_Grafeneder2024_hv`. <https://pharmacolibrary.github.io/#/drugs/drug_clopidogrel/Clopidogrel_Grafeneder2024_hv>

```bibtex
@misc{pharmacolibrary_ClopidogrelGrafeneder2024hv,
  title  = {{Pharmacolibrary model Clopidogrel_Grafeneder2024_hv}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_clopidogrel/Clopidogrel_Grafeneder2024_hv},
  note   = {Parameters from doi:10.1016/j.ekir.2024.07.029},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclopidogrel%5D%20Clopidogrel_Grafeneder2024_hv&body=Drug%3A%20clopidogrel%0ARecord%3A%20Clopidogrel_Grafeneder2024_hv%0APaper%3A%20Grafeneder_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clopidogrel/Clopidogrel_Grafeneder2024_hv%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:52 UTC</sub>
