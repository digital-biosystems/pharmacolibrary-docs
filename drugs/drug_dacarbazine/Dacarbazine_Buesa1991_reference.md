<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;dacarbazine&quot;,&quot;href&quot;:&quot;drugs/drug_dacarbazine/&quot;},{&quot;label&quot;:&quot;Buesa_1991 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dacarbazine_Middleton2000_reference&quot;,&quot;label&quot;:&quot;Middleton_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dacarbazine/Dacarbazine_Middleton2000_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dacarbazine — `Dacarbazine_Buesa1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Rejection caused by dimension mismatches on dacarbazine parameters Cmax, V1, and V2, combined with an orphan metabolite compartment for AICA.

<div class="pk-model-meta" hidden drug="dacarbazine" model-id="Dacarbazine_Buesa1991_reference" status="rejected" stale="false" population="cancer patients" measured-compound="dacarbazine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Buesa JM, Urréchaga E. Clinical pharmacokinetics of high-dose DTIC. Cancer chemotherapy and pharmacology 28(6):475–479 (1991).
  ·  DOI: [10.1007/BF00685826](https://doi.org/10.1007/BF00685826)

## Population and dosing

**Population:** cancer patients · condition cancer · age group adult.

**Dosing:** 850, 1980 mg/m2, iv, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (mM) | Cmax | 0.3 | mM |
| Vc (1 kg⁻¹) | V1 | 0.42 | 1 kg⁻¹ |
| VB (1 kg⁻¹) | V2 | 1.49 | 1 kg⁻¹ |
| t1/2α (h) | t1/2α | 0.17 | h |
| t1/2β (h) | kel | 2 | h |
| DTIC excreted in urine (%) | fe | 54.87 | % |
| Total body clearance (1 kg⁻¹ h⁻¹) | CL | 0.58 | 1 kg⁻¹ h⁻¹ |
| Creatinine clearance (1 kg⁻¹ h⁻¹) | CLu | 0.09 | 1 kg⁻¹ h⁻¹ |
| Cmax (μg ml⁻¹) | Cmax | 3.04 | μg ml⁻¹ |
| t1/2 (h) | kel | 3.25 | h |
| Renal AICA clearance (1 kg⁻¹ h⁻¹) | CL | 0.15 | 1 kg⁻¹ h⁻¹ |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejection caused by dimension mismatches on dacarbazine parameters Cmax, V1, and V2, combined with an orphan metabolite compartment for AICA.**

The record lists dacarbazine Cmax as 0.3 mM and V1 as 0.42 1 kg⁻¹, units that conflict with the required physical dimensions for concentration and volume. Additionally, the AICA metabolite is defined with a compartment index of 0, rendering it unreachable from the dose. These structural inconsistencies prevent valid calculation of the model's kinetics. Extracted — dacarbazine: Cmax 0.3 mM, V1 0.42 1 kg⁻¹, V2 1.49 1 kg⁻¹, t1/2α 0.17 h, kel 2 h, fe 54.9 %, CL 0.58 1 kg⁻¹ h⁻¹, CLu 0.09 1 kg⁻¹ h⁻¹; AICA: Cmax 3.04 μg ml⁻¹, kel 3.25 h, CL 0.15 1 kg⁻¹ h⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has dacarbazine → aica (metabolism), the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (mM) | `Q32` · Cmax | 0.3 | mM |  |  | mM | exact (1) | Buesa_1991_table_1:row0:col2, Buesa_1991_table_1:row1:col2, Buesa_1991_table_1:row2:col2, Buesa_1991_table_1:row3:col2, Buesa_1991_table_1:row4:col2, Buesa_1991_table_1:row5:col2, Buesa_1991_table_1:row6:col2 |
| Vc (1 kg⁻¹) | `Q63` · V1 | 0.42 | 1 kg⁻¹ |  |  | 1/kg | exact (1) | Buesa_1991_table_1:row0:col3, Buesa_1991_table_1:row1:col3, Buesa_1991_table_1:row2:col3, Buesa_1991_table_1:row3:col3, Buesa_1991_table_1:row4:col3, Buesa_1991_table_1:row5:col3, Buesa_1991_table_1:row6:col3, Buesa_1991_table_1:row7:col3 |
| VB (1 kg⁻¹) | `Q64` · V2 | 1.49 | 1 kg⁻¹ |  |  | 1/kg | exact (1) | Buesa_1991_table_1:row0:col4, Buesa_1991_table_1:row1:col4, Buesa_1991_table_1:row2:col4, Buesa_1991_table_1:row3:col4, Buesa_1991_table_1:row4:col4, Buesa_1991_table_1:row5:col4, Buesa_1991_table_1:row6:col4, Buesa_1991_table_1:row7:col4 |
| t1/2α (h) | `Q59` · t1/2α | 0.17 | h | 612 | s | h | half_life_rule (0.95) | Buesa_1991_table_1:row0:col5, Buesa_1991_table_1:row1:col5, Buesa_1991_table_1:row2:col5, Buesa_1991_table_1:row3:col5, Buesa_1991_table_1:row4:col5, Buesa_1991_table_1:row5:col5, Buesa_1991_table_1:row6:col5, Buesa_1991_table_1:row7:col5 |
| t1/2β (h) | `Q47` · kel | 2 | h |  |  | h | exact (1) | Buesa_1991_table_1:row0:col6, Buesa_1991_table_1:row1:col6, Buesa_1991_table_1:row2:col6, Buesa_1991_table_1:row3:col6, Buesa_1991_table_1:row4:col6, Buesa_1991_table_1:row5:col6, Buesa_1991_table_1:row6:col6, Buesa_1991_table_1:row7:col6 |
| DTIC excreted in urine (%) | `Q44` · fe | 54.87 | % | 0.5487 |  | % | llm (0.6) | Buesa_1991_table_1:row0:col7, Buesa_1991_table_1:row1:col7, Buesa_1991_table_1:row2:col7, Buesa_1991_table_1:row3:col7, Buesa_1991_table_1:row4:col7, Buesa_1991_table_1:row5:col7 |
| Total body clearance (1 kg⁻¹ h⁻¹) | `Q22` · CL | 0.58 | 1 kg⁻¹ h⁻¹ |  |  | 1/(h·kg) | exact (1) | Buesa_1991_table_1:row0:col8, Buesa_1991_table_1:row1:col8, Buesa_1991_table_1:row2:col8, Buesa_1991_table_1:row3:col8, Buesa_1991_table_1:row4:col8, Buesa_1991_table_1:row5:col8, Buesa_1991_table_1:row6:col8, Buesa_1991_table_1:row7:col8 |
| Creatinine clearance (1 kg⁻¹ h⁻¹) | `Q24` · CLu | 0.09 | 1 kg⁻¹ h⁻¹ |  |  | 1/(h·kg) | llm_corrected (0.6) | Buesa_1991_table_1:row0:col10, Buesa_1991_table_1:row1:col10, Buesa_1991_table_1:row2:col10, Buesa_1991_table_1:row3:col10, Buesa_1991_table_1:row4:col10, Buesa_1991_table_1:row5:col10, Buesa_1991_table_1:row6:col10, Buesa_1991_table_1:row7:col10, Buesa_1991_table_2:row0:col6, Buesa_1991_table_2:row1:col6, Buesa_1991_table_2:row2:col6, Buesa_1991_table_2:row3:col6, Buesa_1991_table_2:row4:col6, Buesa_1991_table_2:row5:col6, Buesa_1991_table_2:row7:col6 |
| Cmax (μg ml⁻¹) | `Q32` · Cmax | 3.04 | μg ml⁻¹ | 0.00304 | kg/m3 | µg/ml | exact (1) | Buesa_1991_table_2:row0:col2, Buesa_1991_table_2:row1:col2, Buesa_1991_table_2:row2:col2, Buesa_1991_table_2:row3:col2, Buesa_1991_table_2:row4:col2, Buesa_1991_table_2:row5:col2, Buesa_1991_table_2:row6:col2 |
| t1/2 (h) | `Q47` · kel | 3.25 | h |  |  | h | exact (1) | Buesa_1991_table_2:row0:col3, Buesa_1991_table_2:row1:col3, Buesa_1991_table_2:row2:col3, Buesa_1991_table_2:row3:col3, Buesa_1991_table_2:row4:col3, Buesa_1991_table_2:row5:col3, Buesa_1991_table_2:row6:col3, Buesa_1991_table_2:row7:col3 |
| Renal AICA clearance (1 kg⁻¹ h⁻¹) | `Q22` · CL | 0.15 | 1 kg⁻¹ h⁻¹ |  |  | 1/(h·kg) | exact (1) | Buesa_1991_table_2:row0:col5, Buesa_1991_table_2:row1:col5, Buesa_1991_table_2:row2:col5, Buesa_1991_table_2:row3:col5, Buesa_1991_table_2:row4:col5, Buesa_1991_table_2:row5:col5, Buesa_1991_table_2:row7:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Patients (n)' — extend the ontology if this is a real PK parameter (source ['Buesa_1991_table_1:row0:col1', 'Buesa_1991_table_1:row1:col1', 'Buesa_1991_table_1:row2:col1', 'Buesa_1991_table_1:row3:col1', 'Buesa_1991_table_1:row4:col1', 'Buesa_1991_table_1:row5:col1', 'Buesa_1991_table_1:row6:col1', 'Buesa_1991_table_2:row0:col1', 'Buesa_1991_table_2:row1:col1', 'Buesa_1991_table_2:row2:col1', 'Buesa_1991_table_2:row3:col1', 'Buesa_1991_table_2:row4:col1', 'Buesa_1991_table_2:row5:col1', 'Buesa_1991_table_2:row6:col1'])
- unit_dimension_mismatch: 'Cmax (mM)' → Q32 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vc (1 kg⁻¹)' → Q63 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'VB (1 kg⁻¹)' → Q64 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 't1/2β (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Total body clearance (1 kg⁻¹ h⁻¹)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Renal DTIC clearance (1 kg⁻¹ h⁻¹)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('Renal DTIC clearance (1 kg⁻¹ h⁻¹)', value '0.28') — already have one for this compound
- unit_dimension_mismatch: 'Creatinine clearance (1 kg⁻¹ h⁻¹)' → Q24 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 't1/2 (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'DTIC excreted as AICA (%)' — extend the ontology if this is a real PK parameter (source ['Buesa_1991_table_2:row0:col4', 'Buesa_1991_table_2:row1:col4', 'Buesa_1991_table_2:row2:col4', 'Buesa_1991_table_2:row3:col4', 'Buesa_1991_table_2:row4:col4'])
- unit_dimension_mismatch: 'Renal AICA clearance (1 kg⁻¹ h⁻¹)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dacarbazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 54 linked by role; re-tagged parent→AICA ×27
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Buesa_1991_table_1: logical view retains original source coordinates
- transposed table Buesa_1991_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (41 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (10/20 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['dacarbazine', 'aica', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[cmax]` | 3.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine clearance].parameter_id` | Q24 | Q26 | mismatch |
| `gpt-oss-120b` | `parameters[renal aica clearance]` | 0.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal dtic clearance]` |  | 0.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 3.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 3.25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2β].parameter_id` | Q47 | Q60 | mismatch |
| `gpt-oss-120b` | `parameters[vb].parameter_id` | Q64 | Q76 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | 1 kg⁻¹ h⁻¹ (1 / [time]) | ['Buesa_1991_table_1:row0:col8', 'Buesa_1991_table_1:row1:col8', 'Buesa_1991_table_1:row2:col8', 'Buesa_1991_table_1:row3:col8', 'Buesa_1991_table_1:row4:col8', 'Buesa_1991_table_1:row5:col8', 'Buesa_1991_table_1:row6:col8', 'Buesa_1991_table_1:row7:col8'] |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | 1 kg⁻¹ h⁻¹ (1 / [time]) | ['Buesa_1991_table_2:row0:col5', 'Buesa_1991_table_2:row1:col5', 'Buesa_1991_table_2:row2:col5', 'Buesa_1991_table_2:row3:col5', 'Buesa_1991_table_2:row4:col5', 'Buesa_1991_table_2:row5:col5', 'Buesa_1991_table_2:row7:col5'] |
| C5_dimension_Q24 | fail | [length] ** 3 / [time] | 1 kg⁻¹ h⁻¹ (1 / [time]) | ['Buesa_1991_table_1:row0:col10', 'Buesa_1991_table_1:row1:col10', 'Buesa_1991_table_1:row2:col10', 'Buesa_1991_table_1:row3:col10', 'Buesa_1991_table_1:row4:col10', 'Buesa_1991_table_1:row5:col10', 'Buesa_1991_table_1:row6:col10', 'Buesa_1991_table_1:row7:col10', 'Buesa_1991_table_2:row0:col6', 'Buesa_1991_table_2:row1:col6', 'Buesa_1991_table_2:row2:col6', 'Buesa_1991_table_2:row3:col6', 'Buesa_1991_table_2:row4:col6', 'Buesa_1991_table_2:row5:col6', 'Buesa_1991_table_2:row7:col6'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | mM ([length]) | ['Buesa_1991_table_1:row0:col2', 'Buesa_1991_table_1:row1:col2', 'Buesa_1991_table_1:row2:col2', 'Buesa_1991_table_1:row3:col2', 'Buesa_1991_table_1:row4:col2', 'Buesa_1991_table_1:row5:col2', 'Buesa_1991_table_1:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Buesa_1991_table_2:row0:col2', 'Buesa_1991_table_2:row1:col2', 'Buesa_1991_table_2:row2:col2', 'Buesa_1991_table_2:row3:col2', 'Buesa_1991_table_2:row4:col2', 'Buesa_1991_table_2:row5:col2', 'Buesa_1991_table_2:row6:col2'] |
| C5_dimension_Q44 | pass | dimensionless |  | ['Buesa_1991_table_1:row0:col7', 'Buesa_1991_table_1:row1:col7', 'Buesa_1991_table_1:row2:col7', 'Buesa_1991_table_1:row3:col7', 'Buesa_1991_table_1:row4:col7', 'Buesa_1991_table_1:row5:col7'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['Buesa_1991_table_1:row0:col6', 'Buesa_1991_table_1:row1:col6', 'Buesa_1991_table_1:row2:col6', 'Buesa_1991_table_1:row3:col6', 'Buesa_1991_table_1:row4:col6', 'Buesa_1991_table_1:row5:col6', 'Buesa_1991_table_1:row6:col6', 'Buesa_1991_table_1:row7:col6'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['Buesa_1991_table_2:row0:col3', 'Buesa_1991_table_2:row1:col3', 'Buesa_1991_table_2:row2:col3', 'Buesa_1991_table_2:row3:col3', 'Buesa_1991_table_2:row4:col3', 'Buesa_1991_table_2:row5:col3', 'Buesa_1991_table_2:row6:col3', 'Buesa_1991_table_2:row7:col3'] |
| C5_dimension_Q59 | pass | [time] |  | ['Buesa_1991_table_1:row0:col5', 'Buesa_1991_table_1:row1:col5', 'Buesa_1991_table_1:row2:col5', 'Buesa_1991_table_1:row3:col5', 'Buesa_1991_table_1:row4:col5', 'Buesa_1991_table_1:row5:col5', 'Buesa_1991_table_1:row6:col5', 'Buesa_1991_table_1:row7:col5'] |
| C5_dimension_Q63 | fail | [length] ** 3 | 1 kg⁻¹ (dimensionless) | ['Buesa_1991_table_1:row0:col3', 'Buesa_1991_table_1:row1:col3', 'Buesa_1991_table_1:row2:col3', 'Buesa_1991_table_1:row3:col3', 'Buesa_1991_table_1:row4:col3', 'Buesa_1991_table_1:row5:col3', 'Buesa_1991_table_1:row6:col3', 'Buesa_1991_table_1:row7:col3'] |
| C5_dimension_Q64 | fail | [length] ** 3 | 1 kg⁻¹ (dimensionless) | ['Buesa_1991_table_1:row0:col4', 'Buesa_1991_table_1:row1:col4', 'Buesa_1991_table_1:row2:col4', 'Buesa_1991_table_1:row3:col4', 'Buesa_1991_table_1:row4:col4', 'Buesa_1991_table_1:row5:col4', 'Buesa_1991_table_1:row6:col4', 'Buesa_1991_table_1:row7:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.09 | ['Buesa_1991_table_1:row0:col10', 'Buesa_1991_table_1:row1:col10', 'Buesa_1991_table_1:row2:col10', 'Buesa_1991_table_1:row3:col10', 'Buesa_1991_table_1:row4:col10', 'Buesa_1991_table_1:row5:col10', 'Buesa_1991_table_1:row6:col10', 'Buesa_1991_table_1:row7:col10', 'Buesa_1991_table_2:row0:col6', 'Buesa_1991_table_2:row1:col6', 'Buesa_1991_table_2:row2:col6', 'Buesa_1991_table_2:row3:col6', 'Buesa_1991_table_2:row4:col6', 'Buesa_1991_table_2:row5:col6', 'Buesa_1991_table_2:row7:col6'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdacarbazine%5D%20Dacarbazine_Buesa1991_reference&body=Drug%3A%20dacarbazine%0ARecord%3A%20Dacarbazine_Buesa1991_reference%0APaper%3A%20Buesa_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dacarbazine/Dacarbazine_Buesa1991_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 02:30 UTC</sub>
