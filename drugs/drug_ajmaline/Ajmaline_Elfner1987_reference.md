<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ajmaline&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/&quot;},{&quot;label&quot;:&quot;Elfner_1987 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ajmaline_Iven1977_reference&quot;,&quot;label&quot;:&quot;Iven_1977_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ajmaline — `Ajmaline_Elfner1987_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; t1/2α has no unit.

<div class="pk-model-meta" hidden drug="ajmaline" model-id="Ajmaline_Elfner1987_reference" status="needs_review" stale="false" population="patients with ventricular ectopic activity" measured-compound="n-propyl-ajmaline" parameterization="mechanistic" topology="1C"></div>

## Citation
Elfner R, Achtert G, Hausleiter HJ, Lentz A, Heene DL. Pharmacokinetics of n-propyl-ajmaline-bitartrate in elderly patients with ventricular ectopic activity. European journal of drug metabolism and pharmacokinetics 12(1):77–82 (1987).
  ·  DOI: [10.1007/BF03189865](https://doi.org/10.1007/BF03189865)

## Population and dosing

**Population:** patients with ventricular ectopic activity · condition ventricular ectopic activity · age group adult · n = 11.

**Dosing:** 20 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed n-propyl-ajmaline-bitartrate, measured n-propyl-ajmaline.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α hr⁻¹ | t1/2α | 1.13 |  |
| t₁/₂β hr | t1/2β | 11.6 | h |
| kₐ hr⁻¹ | kabs | 9.48 | 1/h |
| t_max hr | tmax | 1.58 | h |
| c_max ng/ml | Cmax | 182 | ng/ml |
| V_d l/kg | Vnorm | 0.91 | L/kg |
| t₁/₂k_e1 hr | kel | 6.3 | 1/h |
| Clearance ml/min/kg | CL | 1.58 | mL/min/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; t1/2α has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax), so that value has no SI equivalent. None of the extracted parameters is ajmaline's own; they describe n-propyl-ajmaline. Extracted — n-propyl-ajmaline: t1/2α 1.13, t1/2β 11.6 h, kabs 9.48 1/h, tmax 1.58 h, Cmax 182 ng/ml, Vnorm 0.91 L/kg, kel 6.3 1/h, CL 1.58 mL/min/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has n-propyl-ajmaline-bitartrate, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α hr⁻¹ | `Q59` · t1/2α | 1.13 |  |  |  |  | llm (0.6) | Elfner_1987_table_1:row2:col1, Elfner_1987_table_1:row2:col2, Elfner_1987_table_1:row2:col3, Elfner_1987_table_1:row2:col4, Elfner_1987_table_1:row2:col5, Elfner_1987_table_1:row2:col6, Elfner_1987_table_1:row2:col7, Elfner_1987_table_1:row2:col8, Elfner_1987_table_1:row2:col9, Elfner_1987_table_1:row2:col10, Elfner_1987_table_1:row2:col11, Elfner_1987_table_1:row2:col12, Elfner_1987_table_1:row2:col13 |
| t₁/₂β hr | `Q60` · t1/2β | 11.6 | h | 4.176e+04 | s | h | llm_confirmed (0.6) | Elfner_1987_table_1:row4:col1, Elfner_1987_table_1:row4:col2, Elfner_1987_table_1:row4:col3, Elfner_1987_table_1:row4:col4, Elfner_1987_table_1:row4:col5, Elfner_1987_table_1:row4:col6, Elfner_1987_table_1:row4:col7, Elfner_1987_table_1:row4:col8, Elfner_1987_table_1:row4:col9, Elfner_1987_table_1:row4:col10, Elfner_1987_table_1:row4:col11, Elfner_1987_table_1:row4:col12, Elfner_1987_table_1:row4:col13 |
| kₐ hr⁻¹ | `Q49` · kabs | 9.48 | 1/h | 0.002633 | 1/s | 1/h | llm_confirmed (0.6) | Elfner_1987_table_1:row5:col1, Elfner_1987_table_1:row5:col2, Elfner_1987_table_1:row5:col3, Elfner_1987_table_1:row5:col4, Elfner_1987_table_1:row5:col5, Elfner_1987_table_1:row5:col6, Elfner_1987_table_1:row5:col7, Elfner_1987_table_1:row5:col8, Elfner_1987_table_1:row5:col9, Elfner_1987_table_1:row5:col10, Elfner_1987_table_1:row5:col11, Elfner_1987_table_1:row5:col12, Elfner_1987_table_1:row5:col13 |
| t_max hr | `Q56` · tmax | 1.58 | h | 5688 | s | h | llm (0.6) | Elfner_1987_table_1:row6:col1, Elfner_1987_table_1:row6:col2, Elfner_1987_table_1:row6:col3, Elfner_1987_table_1:row6:col4, Elfner_1987_table_1:row6:col5, Elfner_1987_table_1:row6:col6, Elfner_1987_table_1:row6:col7, Elfner_1987_table_1:row6:col8, Elfner_1987_table_1:row6:col9, Elfner_1987_table_1:row6:col10, Elfner_1987_table_1:row6:col11, Elfner_1987_table_1:row6:col12, Elfner_1987_table_1:row6:col13 |
| c_max ng/ml | `Q32` · Cmax | 182 | ng/ml |  |  | ng/ml | llm (0.6) | Elfner_1987_table_1:row7:col1, Elfner_1987_table_1:row7:col2, Elfner_1987_table_1:row7:col3, Elfner_1987_table_1:row7:col4, Elfner_1987_table_1:row7:col5, Elfner_1987_table_1:row7:col6, Elfner_1987_table_1:row7:col7, Elfner_1987_table_1:row7:col8, Elfner_1987_table_1:row7:col9, Elfner_1987_table_1:row7:col10, Elfner_1987_table_1:row7:col11, Elfner_1987_table_1:row7:col12, Elfner_1987_table_1:row7:col13 |
| V_d l/kg | `Q352` · Vnorm | 0.91 | L/kg | 0.0637 | m3 | L | llm (0.6) | Elfner_1987_table_1:row8:col1, Elfner_1987_table_1:row8:col2, Elfner_1987_table_1:row8:col3, Elfner_1987_table_1:row8:col4, Elfner_1987_table_1:row8:col5, Elfner_1987_table_1:row8:col6, Elfner_1987_table_1:row8:col7, Elfner_1987_table_1:row8:col8, Elfner_1987_table_1:row8:col9, Elfner_1987_table_1:row8:col10, Elfner_1987_table_1:row8:col11, Elfner_1987_table_1:row8:col12, Elfner_1987_table_1:row8:col13 |
| t₁/₂k_e1 hr | `Q47` · kel | 6.3 | 1/h | 0.00175 | 1/s | 1/h | llm (0.6) | Elfner_1987_table_1:row10:col1, Elfner_1987_table_1:row10:col2, Elfner_1987_table_1:row10:col3, Elfner_1987_table_1:row10:col4, Elfner_1987_table_1:row10:col5, Elfner_1987_table_1:row10:col6, Elfner_1987_table_1:row10:col7, Elfner_1987_table_1:row10:col8, Elfner_1987_table_1:row10:col9, Elfner_1987_table_1:row10:col10, Elfner_1987_table_1:row10:col11, Elfner_1987_table_1:row10:col12, Elfner_1987_table_1:row10:col13 |
| Clearance ml/min/kg | `Q22` · CL | 1.58 | mL/min/kg | 1.843e-06 | m3/s | L/h | llm_confirmed (0.6) | Elfner_1987_table_1:row11:col1, Elfner_1987_table_1:row11:col2, Elfner_1987_table_1:row11:col3, Elfner_1987_table_1:row11:col4, Elfner_1987_table_1:row11:col5, Elfner_1987_table_1:row11:col6, Elfner_1987_table_1:row11:col7, Elfner_1987_table_1:row11:col8, Elfner_1987_table_1:row11:col9, Elfner_1987_table_1:row11:col10, Elfner_1987_table_1:row11:col11, Elfner_1987_table_1:row11:col12, Elfner_1987_table_1:row11:col13 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age y' — extend the ontology if this is a real PK parameter (source ['Elfner_1987_table_1:row0:col1', 'Elfner_1987_table_1:row0:col2', 'Elfner_1987_table_1:row0:col3', 'Elfner_1987_table_1:row0:col4', 'Elfner_1987_table_1:row0:col5', 'Elfner_1987_table_1:row0:col6', 'Elfner_1987_table_1:row0:col7', 'Elfner_1987_table_1:row0:col8', 'Elfner_1987_table_1:row0:col9', 'Elfner_1987_table_1:row0:col10', 'Elfner_1987_table_1:row0:col11', 'Elfner_1987_table_1:row0:col12', 'Elfner_1987_table_1:row0:col13'])
- dropped unlinked row (NIL): 'Creat. mg/dl' — extend the ontology if this is a real PK parameter (source ['Elfner_1987_table_1:row1:col1', 'Elfner_1987_table_1:row1:col2', 'Elfner_1987_table_1:row1:col3', 'Elfner_1987_table_1:row1:col4', 'Elfner_1987_table_1:row1:col5', 'Elfner_1987_table_1:row1:col6', 'Elfner_1987_table_1:row1:col7', 'Elfner_1987_table_1:row1:col8', 'Elfner_1987_table_1:row1:col9', 'Elfner_1987_table_1:row1:col10', 'Elfner_1987_table_1:row1:col11', 'Elfner_1987_table_1:row1:col12', 'Elfner_1987_table_1:row1:col13'])
- implicit units: 'α hr⁻¹' — the LLM proposed '1/h', whose dimension does not fit Q59; left unset
- implicit units: 't₁/₂β hr' → h (from the paper text: "Table I header lists 'hr' for the column corresponding to t1/2 beta (terminal half-life).")
- implicit units: 'kₐ hr⁻¹' → 1/h (from the paper text: "Table I header lists 'hr-I' for the column corresponding to ka (absorption rate constant).")
- implicit units: 't_max hr' → h (from the paper text: "Table I header lists 'hr' for the column corresponding to tmax.")
- implicit units: 'c_max ng/ml' → ng/ml (from the paper text: "Table I header lists 'ng/ml' for the column corresponding to cmax.")
- implicit units: 'V_d l/kg' → L/kg (from the paper text: "Table I header lists 'I/kg' (interpreted as L/kg) for the column corresponding to Vd, and the Abstract states 'median vo")
- implicit units: 't₁/₂k_e1 hr' → 1/h (from the paper text: "Table I header lists 'hr-I' for the column corresponding to kel (elimination rate constant).")
- implicit units: 'Clearance ml/min/kg' → mL/min/kg (from the paper text: "Table I header lists 'ml/min/kg' for the Clearance column, and the Abstract states 'median clearance of N-PAB was 6.86 m")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance ml/min/kg)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=n-propyl-ajmaline
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- transposed table Elfner_1987_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[c_max ng/ml]` | 182 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance ml/min/kg]` | 1.58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 4.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka hr-]` | 9.48 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2k_e1 hr]` | 6.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2β hr]` | 11.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t_max hr]` | 1.58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_d l/kg]` | 0.91 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[α hr-]` | 1.13 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | n-propyl-ajmaline-bitartrate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | n-propyl-ajmaline | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Elfner_1987_table_1:row11:col1', 'Elfner_1987_table_1:row11:col2', 'Elfner_1987_table_1:row11:col3', 'Elfner_1987_table_1:row11:col4', 'Elfner_1987_table_1:row11:col5', 'Elfner_1987_table_1:row11:col6', 'Elfner_1987_table_1:row11:col7', 'Elfner_1987_table_1:row11:col8', 'Elfner_1987_table_1:row11:col9', 'Elfner_1987_table_1:row11:col10', 'Elfner_1987_table_1:row11:col11', 'Elfner_1987_table_1:row11:col12', 'Elfner_1987_table_1:row11:col13'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Elfner_1987_table_1:row7:col1', 'Elfner_1987_table_1:row7:col2', 'Elfner_1987_table_1:row7:col3', 'Elfner_1987_table_1:row7:col4', 'Elfner_1987_table_1:row7:col5', 'Elfner_1987_table_1:row7:col6', 'Elfner_1987_table_1:row7:col7', 'Elfner_1987_table_1:row7:col8', 'Elfner_1987_table_1:row7:col9', 'Elfner_1987_table_1:row7:col10', 'Elfner_1987_table_1:row7:col11', 'Elfner_1987_table_1:row7:col12', 'Elfner_1987_table_1:row7:col13'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['Elfner_1987_table_1:row8:col1', 'Elfner_1987_table_1:row8:col2', 'Elfner_1987_table_1:row8:col3', 'Elfner_1987_table_1:row8:col4', 'Elfner_1987_table_1:row8:col5', 'Elfner_1987_table_1:row8:col6', 'Elfner_1987_table_1:row8:col7', 'Elfner_1987_table_1:row8:col8', 'Elfner_1987_table_1:row8:col9', 'Elfner_1987_table_1:row8:col10', 'Elfner_1987_table_1:row8:col11', 'Elfner_1987_table_1:row8:col12', 'Elfner_1987_table_1:row8:col13'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Elfner_1987_table_1:row10:col1', 'Elfner_1987_table_1:row10:col2', 'Elfner_1987_table_1:row10:col3', 'Elfner_1987_table_1:row10:col4', 'Elfner_1987_table_1:row10:col5', 'Elfner_1987_table_1:row10:col6', 'Elfner_1987_table_1:row10:col7', 'Elfner_1987_table_1:row10:col8', 'Elfner_1987_table_1:row10:col9', 'Elfner_1987_table_1:row10:col10', 'Elfner_1987_table_1:row10:col11', 'Elfner_1987_table_1:row10:col12', 'Elfner_1987_table_1:row10:col13'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Elfner_1987_table_1:row5:col1', 'Elfner_1987_table_1:row5:col2', 'Elfner_1987_table_1:row5:col3', 'Elfner_1987_table_1:row5:col4', 'Elfner_1987_table_1:row5:col5', 'Elfner_1987_table_1:row5:col6', 'Elfner_1987_table_1:row5:col7', 'Elfner_1987_table_1:row5:col8', 'Elfner_1987_table_1:row5:col9', 'Elfner_1987_table_1:row5:col10', 'Elfner_1987_table_1:row5:col11', 'Elfner_1987_table_1:row5:col12', 'Elfner_1987_table_1:row5:col13'] |
| C5_dimension_Q56 | pass | [time] |  | ['Elfner_1987_table_1:row6:col1', 'Elfner_1987_table_1:row6:col2', 'Elfner_1987_table_1:row6:col3', 'Elfner_1987_table_1:row6:col4', 'Elfner_1987_table_1:row6:col5', 'Elfner_1987_table_1:row6:col6', 'Elfner_1987_table_1:row6:col7', 'Elfner_1987_table_1:row6:col8', 'Elfner_1987_table_1:row6:col9', 'Elfner_1987_table_1:row6:col10', 'Elfner_1987_table_1:row6:col11', 'Elfner_1987_table_1:row6:col12', 'Elfner_1987_table_1:row6:col13'] |
| C5_dimension_Q60 | pass | [time] |  | ['Elfner_1987_table_1:row4:col1', 'Elfner_1987_table_1:row4:col2', 'Elfner_1987_table_1:row4:col3', 'Elfner_1987_table_1:row4:col4', 'Elfner_1987_table_1:row4:col5', 'Elfner_1987_table_1:row4:col6', 'Elfner_1987_table_1:row4:col7', 'Elfner_1987_table_1:row4:col8', 'Elfner_1987_table_1:row4:col9', 'Elfner_1987_table_1:row4:col10', 'Elfner_1987_table_1:row4:col11', 'Elfner_1987_table_1:row4:col12', 'Elfner_1987_table_1:row4:col13'] |
| C5_unit_missing_Q59 | fail | [time] |  | ['Elfner_1987_table_1:row2:col1', 'Elfner_1987_table_1:row2:col2', 'Elfner_1987_table_1:row2:col3', 'Elfner_1987_table_1:row2:col4', 'Elfner_1987_table_1:row2:col5', 'Elfner_1987_table_1:row2:col6', 'Elfner_1987_table_1:row2:col7', 'Elfner_1987_table_1:row2:col8', 'Elfner_1987_table_1:row2:col9', 'Elfner_1987_table_1:row2:col10', 'Elfner_1987_table_1:row2:col11', 'Elfner_1987_table_1:row2:col12', 'Elfner_1987_table_1:row2:col13'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.58 | ['Elfner_1987_table_1:row11:col1', 'Elfner_1987_table_1:row11:col2', 'Elfner_1987_table_1:row11:col3', 'Elfner_1987_table_1:row11:col4', 'Elfner_1987_table_1:row11:col5', 'Elfner_1987_table_1:row11:col6', 'Elfner_1987_table_1:row11:col7', 'Elfner_1987_table_1:row11:col8', 'Elfner_1987_table_1:row11:col9', 'Elfner_1987_table_1:row11:col10', 'Elfner_1987_table_1:row11:col11', 'Elfner_1987_table_1:row11:col12', 'Elfner_1987_table_1:row11:col13'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.64 L/h | ['Elfner_1987_table_1:row11:col1', 'Elfner_1987_table_1:row11:col2', 'Elfner_1987_table_1:row11:col3', 'Elfner_1987_table_1:row11:col4', 'Elfner_1987_table_1:row11:col5', 'Elfner_1987_table_1:row11:col6', 'Elfner_1987_table_1:row11:col7', 'Elfner_1987_table_1:row11:col8', 'Elfner_1987_table_1:row11:col9', 'Elfner_1987_table_1:row11:col10', 'Elfner_1987_table_1:row11:col11', 'Elfner_1987_table_1:row11:col12', 'Elfner_1987_table_1:row11:col13'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bajmaline%5D%20Ajmaline_Elfner1987_reference&body=Drug%3A%20ajmaline%0ARecord%3A%20Ajmaline_Elfner1987_reference%0APaper%3A%20Elfner_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ajmaline/Ajmaline_Elfner1987_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-08 15:32 UTC</sub>
