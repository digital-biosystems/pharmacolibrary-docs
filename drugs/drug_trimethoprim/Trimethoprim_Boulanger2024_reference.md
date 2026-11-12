<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Boulanger_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Boulanger2024_reference&quot;,&quot;label&quot;:&quot;Boulanger_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Mead_2026_CFU_mL_1&quot;,&quot;label&quot;:&quot;Mead_2026 \u00b7 CFU mL -1&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/pd_Mead_2026_CFU_mL_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Boulanger2024_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<div class="pk-model-meta" hidden drug="trimethoprim" model-id="Trimethoprim_Boulanger2024_reference" status="not_modelled" stale="false" population="broilers" measured-compound="trimethoprim" parameterization="mechanistic" topology="1C"></div>

## Citation
Boulanger M, Taillandier JF, Henri J, Devreese M, De Baere S, Ferran AA et al. Pharmacokinetic modeling of sulfamethoxazole-trimethoprim and sulfadiazine-trimethoprim combinations in broilers. Poultry science 103(11):104200 (2024).
  ·  DOI: [10.1016/j.psj.2024.104200](https://doi.org/10.1016/j.psj.2024.104200)

## Population and dosing

**Population:** broilers · condition healthy · age group adult.

**Dosing:** 2240 mg, iv, single.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference.svg" alt="Trimethoprim_Boulanger2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F_TMP | equation variable | 99 |  |
| ka_SDZ | kabs | 20.10 | 1/h |
| Vd_SDZ | V | 7.81 | L/kg |
| CL_SDZ | CL | 6.00 | L/h/kg |
| CL_TMP | CLmp | 4.77 | L/h/kg |
| theta_v_sdz_bw | theta_v_sdz_bw | 40.70 |  |
| theta_v_smx_bw | theta_v_smx_bw | 46.40 |  |
| theta_cl_sdz_bw | theta_cl_sdz_bw | 41.40 |  |
| theta_cl_mp_bw | theta_cl_mp_bw | 23.10 |  |
| T1/2β SDZ (h) | t1/2β | 2.00 | h |
| AUC∞ SDZ (h × µg/mL) | AUC∞ | 187.00 | h × µg/mL |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trimethoprim, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F_TMP | `Q900` · equation variable | 99 |  | 99 |  |  | llm (0.6) | tbl0001:row4:col2 |
| ka_SDZ | `Q49` · kabs | 20.10 | 1/h | 0.005583 | 1/s | 1/h | llm (0.6) | tbl0001:row5:col2, tbl0001:row5:col3 |
| Vd_SDZ | `Q61` · V | 7.81 | L/kg | 0.5467 | m3 | L | llm (0.6) | tbl0001:row8:col2, tbl0001:row8:col3 |
| CL_SDZ | `Q22` · CL | 6.00 | L/h/kg | 0.0001167 | m3/s | L/h | llm (0.6) | tbl0001:row11:col2, tbl0001:row11:col3 |
| CL_TMP | `Q371` · CLmp | 4.77 | L/h/kg | 9.275e-05 | m3/s | L/h | llm_confirmed (0.6) | tbl0001:row13:col2, tbl0001:row13:col3 |
| theta_v_sdz_bw | `Q900` · theta_v_sdz_bw | 40.70 |  |  |  |  |  | tbl0001:row14:col2, tbl0001:row14:col3 |
| theta_v_smx_bw | `Q900` · theta_v_smx_bw | 46.40 |  |  |  |  |  | tbl0001:row15:col2, tbl0001:row15:col3 |
| theta_cl_sdz_bw | `Q900` · theta_cl_sdz_bw | 41.40 |  |  |  |  |  | tbl0001:row16:col2, tbl0001:row16:col3 |
| theta_cl_mp_bw | `Q900` · theta_cl_mp_bw | 23.10 |  |  |  |  |  | tbl0001:row17:col2, tbl0001:row17:col3 |
| T1/2β SDZ (h) | `Q60` · t1/2β | 2.00 | h | 7200 | s | h | half_life_rule (0.95) | Boulanger_2024_table_2:row2:col1, Boulanger_2024_table_2:row2:col2, Boulanger_2024_table_2:row2:col3, Boulanger_2024_table_2:row2:col4 |
| AUC∞ SDZ (h × µg/mL) | `Q17` · AUC∞ | 187.00 | h × µg/mL | 673.2 | kg*s/m3 | (h·µg)/ml | llm_confirmed (0.6) | Boulanger_2024_table_2:row5:col1, Boulanger_2024_table_2:row5:col2, Boulanger_2024_table_2:row5:col3, Boulanger_2024_table_2:row5:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'F_SDZ' — extend the ontology if this is a real PK parameter (source ['tbl0001:row2:col2'])
- dropped unlinked row (NIL): 'F_SMX' — extend the ontology if this is a real PK parameter (source ['tbl0001:row3:col2'])
- dropped duplicate Q49 ('ka_SMX', value '16.40') — already have one for this compound
- dropped duplicate Q49 ('ka_TMP', value '11.30') — already have one for this compound
- dropped duplicate Q61 ('Vd_SMX', value '10.10') — already have one for this compound
- dropped duplicate Q61 ('Vd_TMP', value '5.42') — already have one for this compound
- dropped duplicate Q22 ('CL_SMX', value '8.72') — already have one for this compound
- 'β_Vd_SDZ_BW' is a β covariate effect on _Vd_, not Q61 (llm link set aside)
- covariate level 'β_Vd_SDZ_BW' → Q900:theta_v_sdz_bw = 40.70 (linear_fractional on Q61)
- 'β_Vd_SMX_BW' is a β covariate effect on _Vd_, not Q352 (llm link set aside)
- covariate level 'β_Vd_SMX_BW' → Q900:theta_v_smx_bw = 46.40 (linear_fractional on Q61)
- 'β_CL_SDZ_BW' is a β covariate effect on _CL_, not Q22 (llm link set aside)
- covariate level 'β_CL_SDZ_BW' → Q900:theta_cl_sdz_bw = 41.40 (linear_fractional on Q22)
- 'β_CL_TMP_BW' is a β covariate effect on _CL_T, not Q31 (llm link set aside)
- covariate level 'β_CL_TMP_BW' → Q900:theta_cl_mp_bw = 23.10 (linear_fractional on Q22)
- dropped duplicate Q60 ('T1/2β SMX (h)', value '2.80') — already have one for this compound
- dropped duplicate Q60 ('T1/2β TMP (h)', value '1.50') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ SMX (h × µg/mL)', value '204.00') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ TMP (h × µg/mL)', value '4.00') — already have one for this compound
- implicit units: 'ka_SDZ' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for ka in the table or text excerpts. However, ka is an absorption rate con')
- implicit units: 'Vd_SDZ' → L/kg (from the paper text: "The text states: 'The volume of distribution of TMP was found to be 3.14 L/kg and about 6 times higher in comparison to ")
- implicit units: 'CL_SDZ' → L/h/kg (from the paper text: "The text states: 'The clearance of SMX and SDZ were found to be similar (around 0.15 L/h/kg)'. The value 6.00 correspond")
- implicit units: 'CL_TMP' → L/h/kg (from the paper text: "The text states: 'The population clearance of TMP (1.53 L/h/kg) was found to be 10 times higher...'. Although the parame")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (Vd_SDZ); Q22 (CL_SDZ)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trimethoprim

**Extraction notes:**
- unparsed cell tbl0001:row2:col3 = '&lt;0.1'
- unparsed cell tbl0001:row3:col3 = '&lt;0.1'
- unparsed cell tbl0001:row4:col3 = '&lt;0.1'
- unparsed cell tbl0001:row5:col1 = 'h−1'
- unparsed cell tbl0001:row6:col1 = 'h−1'
- unparsed cell tbl0001:row7:col1 = 'h−1'
- companion parameter table 2 transcribed (24 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['unknown', 'unknown', 'unknown']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl_sdz].value` | 6.00 | 0.15 | mismatch |
| `gpt-oss-120b` | `parameters[cl_tmp]` | 4.77 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka_sdz].value` | 20.10 | 0.71 | mismatch |
| `gpt-oss-120b` | `parameters[vd_sdz].value` | 7.81 | 0.51 | mismatch |
| `gpt-oss-120b` | `parameters[β_cl_tmp_bw]` | 23.10 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β_vd_sdz_bw]` | 40.70 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trimethoprim | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trimethoprim | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Boulanger_2024_table_2:row5:col1', 'Boulanger_2024_table_2:row5:col2', 'Boulanger_2024_table_2:row5:col3', 'Boulanger_2024_table_2:row5:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C5_dimension_Q371 | pass | [length] ** 3 / [time] |  | ['tbl0001:row13:col2', 'tbl0001:row13:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tbl0001:row5:col2', 'tbl0001:row5:col3'] |
| C5_dimension_Q60 | pass | [time] |  | ['Boulanger_2024_table_2:row2:col1', 'Boulanger_2024_table_2:row2:col2', 'Boulanger_2024_table_2:row2:col3', 'Boulanger_2024_table_2:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl0001:row8:col2', 'tbl0001:row8:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6 | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 420 L/h | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 547 L | ['tbl0001:row8:col2', 'tbl0001:row8:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | note |
|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | skipped |  | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | 1.49 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 2.01 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 2.83 | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference_modelica.zip" download>Trimethoprim_Boulanger2024_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference_fmi.zip" download>Trimethoprim_Boulanger2024_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference_matlab.zip" download>Trimethoprim_Boulanger2024_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference_matlab_simbio.zip" download>Trimethoprim_Boulanger2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference_sbml.zip" download>Trimethoprim_Boulanger2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference_cellml.zip" download>Trimethoprim_Boulanger2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2903 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00224 | kg |
| input | model | `Cl` | 0.0001167 | m3/s |
| input | model | `VdPerKg` | 0.00781 | m3/kg |
| input | model | `ka` | 0.005583 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Boulanger M, Taillandier JF, Henri J, Devreese M, De Baere S, Ferran AA et al. Pharmacokinetic modeling of sulfamethoxazole-trimethoprim and sulfadiazine-trimethoprim combinations in broilers. Poultry science 103(11):104200 (2024). [doi:10.1016/j.psj.2024.104200](https://doi.org/10.1016/j.psj.2024.104200)

**This record:** Pharmacolibrary, model `Trimethoprim_Boulanger2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference>

```bibtex
@misc{pharmacolibrary_TrimethoprimBoulanger2024reference,
  title  = {{Pharmacolibrary model Trimethoprim_Boulanger2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference},
  note   = {Parameters from doi:10.1016/j.psj.2024.104200},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2240 mg, single dose, first-order absorption (ka 20.1 /h, F 0.9). Dose in the paper: 2240 mg.

<dbs-fmusim paramsurl="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference/Trimethoprim_Boulanger2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Trimethoprim_Boulanger2024_reference_params.json` · controls `Trimethoprim_Boulanger2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrimethoprim%5D%20Trimethoprim_Boulanger2024_reference&body=Drug%3A%20trimethoprim%0ARecord%3A%20Trimethoprim_Boulanger2024_reference%0APaper%3A%20Boulanger_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 11:15 UTC</sub>
