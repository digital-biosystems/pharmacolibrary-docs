<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Nelson_1982 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Nelson1982_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Nelson1982_reference" status="needs_review" stale="false" population="patients with cancer" measured-compound="vinblastine" parameterization="mechanistic" topology="1C"></div>

## Citation
Nelson RL. The comparative clinical pharmacology and pharmacokinetics of vindesine, vincristine, and vinblastine in human patients with cancer. Medical and pediatric oncology 10(2):115–127 (1982).
  ·  DOI: [10.1002/mpo.2950100202](https://doi.org/10.1002/mpo.2950100202)

## Population and dosing

**Population:** patients with cancer · condition cancer · age group adult.

**Dosing:** 2, 2.2, 3.5, 4, 5 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k₁₂ (hr⁻¹) | k12 | 4.42 | hr⁻¹ |
| k₂₁ (hr⁻¹) | k21 | 0.829 | hr⁻¹ |
| k₁₃ (hr⁻¹) | k13 | 1.245 | hr⁻¹ |
| k₃₁ (hr⁻¹) | k31 | 0.070 | hr⁻¹ |
| k₂₀ (hr⁻¹) | ki0 | 0.085 | hr⁻¹ |
| Vc (liter/kg) | V | 0.328 | liter/kg |
| t₁/₂α (hr) | t1/2α | 0.077 | hr |
| t₁/₂β (hr) | t1/2β | 2.27 | hr |
| t₁/₂γ (hr) | t1/2γ | 85.0 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Extracted — vinblastine: k12 4.42 hr⁻¹, k21 0.829 hr⁻¹, k13 1.25 hr⁻¹, k31 0.07 hr⁻¹, ki0 0.085 hr⁻¹, V 0.328 liter/kg, t1/2α 0.077 hr, t1/2β 2.27 hr, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has vinblastine, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k₁₂ (hr⁻¹) | `Q301` · k12 | 4.42 | hr⁻¹ | 0.001228 | 1/s | 1/h | exact (1) | Nelson_1982_table_2:row0:col1, Nelson_1982_table_2:row1:col1, Nelson_1982_table_2:row2:col1, Nelson_1982_table_2:row3:col1, Nelson_1982_table_2:row4:col1, Nelson_1982_table_2:row5:col1, Nelson_1982_table_2:row6:col1, Nelson_1982_table_2:row7:col1, Nelson_1982_table_2:row8:col1, Nelson_1982_table_2:row9:col1, Nelson_1982_table_2:row10:col1, Nelson_1982_table_3:row0:col1, Nelson_1982_table_3:row1:col1, Nelson_1982_table_3:row2:col1, Nelson_1982_table_3:row3:col1, Nelson_1982_table_3:row4:col1, Nelson_1982_table_3:row5:col1 |
| k₂₁ (hr⁻¹) | `Q302` · k21 | 0.829 | hr⁻¹ | 0.0002303 | 1/s | 1/h | exact (1) | Nelson_1982_table_2:row0:col2, Nelson_1982_table_2:row1:col2, Nelson_1982_table_2:row2:col2, Nelson_1982_table_2:row3:col2, Nelson_1982_table_2:row4:col2, Nelson_1982_table_2:row5:col2, Nelson_1982_table_2:row6:col2, Nelson_1982_table_2:row7:col2, Nelson_1982_table_2:row8:col2, Nelson_1982_table_2:row9:col2, Nelson_1982_table_2:row10:col2, Nelson_1982_table_3:row0:col2, Nelson_1982_table_3:row1:col2, Nelson_1982_table_3:row2:col2, Nelson_1982_table_3:row3:col2, Nelson_1982_table_3:row4:col2, Nelson_1982_table_3:row5:col2 |
| k₁₃ (hr⁻¹) | `Q303` · k13 | 1.245 | hr⁻¹ | 0.0003458 | 1/s | 1/h | exact (1) | Nelson_1982_table_2:row0:col3, Nelson_1982_table_2:row1:col3, Nelson_1982_table_2:row2:col3, Nelson_1982_table_2:row3:col3, Nelson_1982_table_2:row4:col3, Nelson_1982_table_2:row5:col3, Nelson_1982_table_2:row6:col3, Nelson_1982_table_2:row7:col3, Nelson_1982_table_2:row8:col3, Nelson_1982_table_2:row9:col3, Nelson_1982_table_2:row10:col3, Nelson_1982_table_3:row0:col3, Nelson_1982_table_3:row1:col3, Nelson_1982_table_3:row2:col3, Nelson_1982_table_3:row3:col3, Nelson_1982_table_3:row4:col3, Nelson_1982_table_3:row5:col3 |
| k₃₁ (hr⁻¹) | `Q304` · k31 | 0.070 | hr⁻¹ | 1.944e-05 | 1/s | 1/h | exact (1) | Nelson_1982_table_2:row0:col4, Nelson_1982_table_2:row1:col4, Nelson_1982_table_2:row2:col4, Nelson_1982_table_2:row3:col4, Nelson_1982_table_2:row4:col4, Nelson_1982_table_2:row5:col4, Nelson_1982_table_2:row6:col4, Nelson_1982_table_2:row7:col4, Nelson_1982_table_2:row8:col4, Nelson_1982_table_2:row9:col4, Nelson_1982_table_2:row10:col4, Nelson_1982_table_3:row0:col4, Nelson_1982_table_3:row1:col4, Nelson_1982_table_3:row2:col4, Nelson_1982_table_3:row3:col4, Nelson_1982_table_3:row4:col4, Nelson_1982_table_3:row5:col4 |
| k₂₀ (hr⁻¹) | `Q373` · ki0 | 0.085 | hr⁻¹ | 2.361e-05 | 1/s | 1/h | exact (1) | Nelson_1982_table_2:row0:col5, Nelson_1982_table_2:row1:col5, Nelson_1982_table_2:row2:col5, Nelson_1982_table_2:row3:col5, Nelson_1982_table_2:row4:col5, Nelson_1982_table_2:row5:col5, Nelson_1982_table_2:row6:col5, Nelson_1982_table_2:row7:col5, Nelson_1982_table_2:row8:col5, Nelson_1982_table_2:row9:col5, Nelson_1982_table_2:row10:col5, Nelson_1982_table_3:row0:col5, Nelson_1982_table_3:row1:col5, Nelson_1982_table_3:row2:col5, Nelson_1982_table_3:row3:col5, Nelson_1982_table_3:row4:col5, Nelson_1982_table_3:row5:col5 |
| Vc (liter/kg) | `Q61` · V | 0.328 | liter/kg | 0.02296 | m3 | l/kg | exact (1) | Nelson_1982_table_2:row0:col6, Nelson_1982_table_2:row1:col6, Nelson_1982_table_2:row2:col6, Nelson_1982_table_2:row3:col6, Nelson_1982_table_2:row4:col6, Nelson_1982_table_2:row5:col6, Nelson_1982_table_2:row6:col6, Nelson_1982_table_2:row7:col6, Nelson_1982_table_2:row8:col6, Nelson_1982_table_2:row9:col6, Nelson_1982_table_2:row10:col6, Nelson_1982_table_3:row0:col6, Nelson_1982_table_3:row1:col6, Nelson_1982_table_3:row2:col6, Nelson_1982_table_3:row3:col6, Nelson_1982_table_3:row4:col6, Nelson_1982_table_3:row5:col6 |
| t₁/₂α (hr) | `Q59` · t1/2α | 0.077 | hr | 277.2 | s | h | exact (1) | Nelson_1982_table_2:row0:col7, Nelson_1982_table_2:row1:col7, Nelson_1982_table_2:row2:col7, Nelson_1982_table_2:row3:col7, Nelson_1982_table_2:row4:col7, Nelson_1982_table_2:row5:col7, Nelson_1982_table_2:row6:col7, Nelson_1982_table_2:row7:col7, Nelson_1982_table_2:row8:col7, Nelson_1982_table_2:row9:col7, Nelson_1982_table_2:row10:col7, Nelson_1982_table_3:row0:col7, Nelson_1982_table_3:row1:col7, Nelson_1982_table_3:row2:col7, Nelson_1982_table_3:row3:col7, Nelson_1982_table_3:row4:col7, Nelson_1982_table_3:row5:col7 |
| t₁/₂β (hr) | `Q60` · t1/2β | 2.27 | hr | 8172 | s | h | exact (1) | Nelson_1982_table_2:row0:col8, Nelson_1982_table_2:row1:col8, Nelson_1982_table_2:row2:col8, Nelson_1982_table_2:row3:col8, Nelson_1982_table_2:row4:col8, Nelson_1982_table_2:row5:col8, Nelson_1982_table_2:row6:col8, Nelson_1982_table_2:row7:col8, Nelson_1982_table_2:row8:col8, Nelson_1982_table_2:row9:col8, Nelson_1982_table_2:row10:col8, Nelson_1982_table_3:row0:col8, Nelson_1982_table_3:row1:col8, Nelson_1982_table_3:row2:col8, Nelson_1982_table_3:row3:col8, Nelson_1982_table_3:row4:col8, Nelson_1982_table_3:row5:col8 |
| t₁/₂γ (hr) | `Q89` · t1/2γ | 85.0 | hr | 3.06e+05 | s | h | exact (1) | Nelson_1982_table_2:row0:col9, Nelson_1982_table_2:row1:col9, Nelson_1982_table_2:row2:col9, Nelson_1982_table_2:row3:col9, Nelson_1982_table_2:row4:col9, Nelson_1982_table_2:row5:col9, Nelson_1982_table_2:row6:col9, Nelson_1982_table_2:row7:col9, Nelson_1982_table_2:row8:col9, Nelson_1982_table_2:row9:col9, Nelson_1982_table_2:row10:col9, Nelson_1982_table_3:row0:col9, Nelson_1982_table_3:row1:col9, Nelson_1982_table_3:row2:col9, Nelson_1982_table_3:row3:col9, Nelson_1982_table_3:row4:col9, Nelson_1982_table_3:row5:col9 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q301 ('k 12 (hr-1)', value '10.9') — already have one for this compound
- dropped duplicate Q302 ('k 21 (hr-1)', value '1.29') — already have one for this compound
- dropped duplicate Q303 ('k 13 (hr-1)', value '2.18') — already have one for this compound
- dropped duplicate Q304 ('k 31 (hr-1)', value '0.087') — already have one for this compound
- dropped duplicate Q373 ('k 20 (hr-1)', value '0.190') — already have one for this compound
- dropped duplicate Q63 ('V c (liter/kg)', value '0.696') — already have one for this compound
- dropped duplicate Q59 ('t 1/2 α (hr)', value '0.062') — already have one for this compound
- dropped duplicate Q60 ('t 1/2β (hr)', value '1.64') — already have one for this compound
- dropped duplicate Q89 ('t 1/2 γ (hr)', value '24.8') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (liter/kg)' is the general volume)
- base model from table(s) without population columns (Nelson_1982:discussion_prose, Nelson_1982_table_2, Nelson_1982_table_3, Nelson_1982_table_4); populations vinblastine kept as separate records
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3, 4, 5
- transposed table Nelson_1982_table_2: logical view retains original source coordinates
- transposed table Nelson_1982_table_3: logical view retains original source coordinates
- transposed table Nelson_1982_table_4: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | vinblastine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | vinblastine | unknown | mismatch |

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
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Nelson_1982_table_2:row0:col1', 'Nelson_1982_table_2:row1:col1', 'Nelson_1982_table_2:row2:col1', 'Nelson_1982_table_2:row3:col1', 'Nelson_1982_table_2:row4:col1', 'Nelson_1982_table_2:row5:col1', 'Nelson_1982_table_2:row6:col1', 'Nelson_1982_table_2:row7:col1', 'Nelson_1982_table_2:row8:col1', 'Nelson_1982_table_2:row9:col1', 'Nelson_1982_table_2:row10:col1', 'Nelson_1982_table_3:row0:col1', 'Nelson_1982_table_3:row1:col1', 'Nelson_1982_table_3:row2:col1', 'Nelson_1982_table_3:row3:col1', 'Nelson_1982_table_3:row4:col1', 'Nelson_1982_table_3:row5:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Nelson_1982_table_2:row0:col2', 'Nelson_1982_table_2:row1:col2', 'Nelson_1982_table_2:row2:col2', 'Nelson_1982_table_2:row3:col2', 'Nelson_1982_table_2:row4:col2', 'Nelson_1982_table_2:row5:col2', 'Nelson_1982_table_2:row6:col2', 'Nelson_1982_table_2:row7:col2', 'Nelson_1982_table_2:row8:col2', 'Nelson_1982_table_2:row9:col2', 'Nelson_1982_table_2:row10:col2', 'Nelson_1982_table_3:row0:col2', 'Nelson_1982_table_3:row1:col2', 'Nelson_1982_table_3:row2:col2', 'Nelson_1982_table_3:row3:col2', 'Nelson_1982_table_3:row4:col2', 'Nelson_1982_table_3:row5:col2'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['Nelson_1982_table_2:row0:col3', 'Nelson_1982_table_2:row1:col3', 'Nelson_1982_table_2:row2:col3', 'Nelson_1982_table_2:row3:col3', 'Nelson_1982_table_2:row4:col3', 'Nelson_1982_table_2:row5:col3', 'Nelson_1982_table_2:row6:col3', 'Nelson_1982_table_2:row7:col3', 'Nelson_1982_table_2:row8:col3', 'Nelson_1982_table_2:row9:col3', 'Nelson_1982_table_2:row10:col3', 'Nelson_1982_table_3:row0:col3', 'Nelson_1982_table_3:row1:col3', 'Nelson_1982_table_3:row2:col3', 'Nelson_1982_table_3:row3:col3', 'Nelson_1982_table_3:row4:col3', 'Nelson_1982_table_3:row5:col3'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['Nelson_1982_table_2:row0:col4', 'Nelson_1982_table_2:row1:col4', 'Nelson_1982_table_2:row2:col4', 'Nelson_1982_table_2:row3:col4', 'Nelson_1982_table_2:row4:col4', 'Nelson_1982_table_2:row5:col4', 'Nelson_1982_table_2:row6:col4', 'Nelson_1982_table_2:row7:col4', 'Nelson_1982_table_2:row8:col4', 'Nelson_1982_table_2:row9:col4', 'Nelson_1982_table_2:row10:col4', 'Nelson_1982_table_3:row0:col4', 'Nelson_1982_table_3:row1:col4', 'Nelson_1982_table_3:row2:col4', 'Nelson_1982_table_3:row3:col4', 'Nelson_1982_table_3:row4:col4', 'Nelson_1982_table_3:row5:col4'] |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['Nelson_1982_table_2:row0:col5', 'Nelson_1982_table_2:row1:col5', 'Nelson_1982_table_2:row2:col5', 'Nelson_1982_table_2:row3:col5', 'Nelson_1982_table_2:row4:col5', 'Nelson_1982_table_2:row5:col5', 'Nelson_1982_table_2:row6:col5', 'Nelson_1982_table_2:row7:col5', 'Nelson_1982_table_2:row8:col5', 'Nelson_1982_table_2:row9:col5', 'Nelson_1982_table_2:row10:col5', 'Nelson_1982_table_3:row0:col5', 'Nelson_1982_table_3:row1:col5', 'Nelson_1982_table_3:row2:col5', 'Nelson_1982_table_3:row3:col5', 'Nelson_1982_table_3:row4:col5', 'Nelson_1982_table_3:row5:col5'] |
| C5_dimension_Q59 | pass | [time] |  | ['Nelson_1982_table_2:row0:col7', 'Nelson_1982_table_2:row1:col7', 'Nelson_1982_table_2:row2:col7', 'Nelson_1982_table_2:row3:col7', 'Nelson_1982_table_2:row4:col7', 'Nelson_1982_table_2:row5:col7', 'Nelson_1982_table_2:row6:col7', 'Nelson_1982_table_2:row7:col7', 'Nelson_1982_table_2:row8:col7', 'Nelson_1982_table_2:row9:col7', 'Nelson_1982_table_2:row10:col7', 'Nelson_1982_table_3:row0:col7', 'Nelson_1982_table_3:row1:col7', 'Nelson_1982_table_3:row2:col7', 'Nelson_1982_table_3:row3:col7', 'Nelson_1982_table_3:row4:col7', 'Nelson_1982_table_3:row5:col7'] |
| C5_dimension_Q60 | pass | [time] |  | ['Nelson_1982_table_2:row0:col8', 'Nelson_1982_table_2:row1:col8', 'Nelson_1982_table_2:row2:col8', 'Nelson_1982_table_2:row3:col8', 'Nelson_1982_table_2:row4:col8', 'Nelson_1982_table_2:row5:col8', 'Nelson_1982_table_2:row6:col8', 'Nelson_1982_table_2:row7:col8', 'Nelson_1982_table_2:row8:col8', 'Nelson_1982_table_2:row9:col8', 'Nelson_1982_table_2:row10:col8', 'Nelson_1982_table_3:row0:col8', 'Nelson_1982_table_3:row1:col8', 'Nelson_1982_table_3:row2:col8', 'Nelson_1982_table_3:row3:col8', 'Nelson_1982_table_3:row4:col8', 'Nelson_1982_table_3:row5:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Nelson_1982_table_2:row0:col6', 'Nelson_1982_table_2:row1:col6', 'Nelson_1982_table_2:row2:col6', 'Nelson_1982_table_2:row3:col6', 'Nelson_1982_table_2:row4:col6', 'Nelson_1982_table_2:row5:col6', 'Nelson_1982_table_2:row6:col6', 'Nelson_1982_table_2:row7:col6', 'Nelson_1982_table_2:row8:col6', 'Nelson_1982_table_2:row9:col6', 'Nelson_1982_table_2:row10:col6', 'Nelson_1982_table_3:row0:col6', 'Nelson_1982_table_3:row1:col6', 'Nelson_1982_table_3:row2:col6', 'Nelson_1982_table_3:row3:col6', 'Nelson_1982_table_3:row4:col6', 'Nelson_1982_table_3:row5:col6'] |
| C5_dimension_Q89 | pass | [time] |  | ['Nelson_1982_table_2:row0:col9', 'Nelson_1982_table_2:row1:col9', 'Nelson_1982_table_2:row2:col9', 'Nelson_1982_table_2:row3:col9', 'Nelson_1982_table_2:row4:col9', 'Nelson_1982_table_2:row5:col9', 'Nelson_1982_table_2:row6:col9', 'Nelson_1982_table_2:row7:col9', 'Nelson_1982_table_2:row8:col9', 'Nelson_1982_table_2:row9:col9', 'Nelson_1982_table_2:row10:col9', 'Nelson_1982_table_3:row0:col9', 'Nelson_1982_table_3:row1:col9', 'Nelson_1982_table_3:row2:col9', 'Nelson_1982_table_3:row3:col9', 'Nelson_1982_table_3:row4:col9', 'Nelson_1982_table_3:row5:col9'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 23 L | ['Nelson_1982_table_2:row0:col6', 'Nelson_1982_table_2:row1:col6', 'Nelson_1982_table_2:row2:col6', 'Nelson_1982_table_2:row3:col6', 'Nelson_1982_table_2:row4:col6', 'Nelson_1982_table_2:row5:col6', 'Nelson_1982_table_2:row6:col6', 'Nelson_1982_table_2:row7:col6', 'Nelson_1982_table_2:row8:col6', 'Nelson_1982_table_2:row9:col6', 'Nelson_1982_table_2:row10:col6', 'Nelson_1982_table_3:row0:col6', 'Nelson_1982_table_3:row1:col6', 'Nelson_1982_table_3:row2:col6', 'Nelson_1982_table_3:row3:col6', 'Nelson_1982_table_3:row4:col6', 'Nelson_1982_table_3:row5:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Nelson1982_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Nelson1982_reference%0APaper%3A%20Nelson_1982%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinblastine/Vinblastine_Nelson1982_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 18:40 UTC</sub>
