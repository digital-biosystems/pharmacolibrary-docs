<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadiazine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/&quot;},{&quot;label&quot;:&quot;Ekstrand_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadiazine_Boulanger2024_reference&quot;,&quot;label&quot;:&quot;Boulanger_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Boulanger2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Sulfadiazine_Tajima2023v2_sdz&quot;,&quot;label&quot;:&quot;Tajima_2023_2_sdz&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfadiazine — `Sulfadiazine_Ekstrand2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> Sulfadiazine model parameters defaulted, causing terminal half-life 3359.5785727050093 instead of reported values 0.1 to 12.6 hours.

<div class="pk-model-meta" hidden drug="sulfadiazine" model-id="Sulfadiazine_Ekstrand2026_reference" status="needs_review" stale="false" population="Beagle dogs" measured-compound="sulfadiazine" parameterization="mechanistic" topology="3C"></div>

## Citation
Ekstrand C, Löwgren M, Erkas M, Devreese M, De Baere S, Vo-Thanh J et al. Comparative pharmacokinetics of trimethoprim-sulfadiazine and trimethoprim-sulfamethoxazole in dogs. BMC veterinary research 22(1) (2026).
  ·  DOI: [10.1186/s12917-026-05604-7](https://doi.org/10.1186/s12917-026-05604-7)

## Population and dosing

**Population:** Beagle dogs · condition healthy · n = 24.

**Dosing:** 140, 210, 280, 700, 1050, 1400, 3500 mg, iv, oral, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 3-compartment, oral mammillary model — template `PK_3C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference.svg" alt="Sulfadiazine_Ekstrand2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Cl | CL | 0.43 | L/h/kg | 9.78 | 28.47 (None% RSE) |
| Vc | V1 | 0.37 | L/kg | 6.02 | 33.28 (None% RSE) |
| Vp | V2 | 0.09 | L/kg | 30.0 | 30.54 (None% RSE) |
| Q | Q | 0.14 | L/h/kg | 30.3 |  |
| ka | kabs | 3.69 | 1/h | 25.9 | 74.17 (None% RSE) |
| F | Fab | 0.94 |  | 8.20 | 36.10 (None% RSE) |
| b | equation variable | 0.41 |  | 4.15 |  |
| V | V | 2.62 | L/kg | 6.38 | 22.69 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.95). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sulfadiazine model parameters defaulted, causing terminal half-life 3359.5785727050093 instead of reported values 0.1 to 12.6 hours.**

The record lacks explicit estimates for intercompartmental transfer rates, so library defaults were used. This results in a simulated terminal half-life of 3359.5785727050093, which vastly exceeds the paper's reported range. The model also simulates a peak time of 2.693386773547094 hours, whereas the paper reports 4.0 hours. Extracted — sulfadiazine: CL 0.43 L/h/kg, V1 0.37 L/kg, V2 0.09 L/kg, Q 0.14 L/h/kg, kabs 3.69 1/h, Fab 0.94, V 2.62 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of b: this record has 0.41, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl | `Q22` · CL | 0.43 | L/h/kg | 8.361e-06 | m3/s | L/h | 9.78 | exact (1) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col6, Tab2:row3:col7, Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col6, Tab2:row11:col7, Tab2:row19:col2, Tab2:row19:col3, Tab2:row19:col6, Tab2:row19:col7 | 28.47 (None% RSE) |
| Vc | `Q63` · V1 | 0.37 | L/kg | 0.0259 | m3 | L | 6.02 | exact (1) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col6, Tab2:row4:col7, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col6, Tab2:row12:col7 | 33.28 (None% RSE) |
| Vp | `Q64` · V2 | 0.09 | L/kg | 0.0063 | m3 | L | 30.0 | exact (1) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col6, Tab2:row5:col7, Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col6, Tab2:row13:col7 | 30.54 (None% RSE) |
| Q | `Q30` · Q | 0.14 | L/h/kg | 2.722e-06 | m3/s | L/h | 30.3 | exact (1) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col6, Tab2:row6:col7, Tab2:row14:col2 |  |
| ka | `Q49` · kabs | 3.69 | 1/h | 0.001025 | 1/s | 1/h | 25.9 | exact (1) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col6, Tab2:row7:col7, Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col6, Tab2:row15:col7, Tab2:row21:col1, Tab2:row21:col2, Tab2:row21:col3, Tab2:row21:col6, Tab2:row21:col7 | 74.17 (None% RSE) |
| F | `Q40` · Fab | 0.94 |  |  |  |  | 8.20 | exact (1) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col6, Tab2:row8:col7, Tab2:row16:col2, Tab2:row16:col3, Tab2:row16:col6, Tab2:row16:col7, Tab2:row22:col2, Tab2:row22:col3, Tab2:row22:col6, Tab2:row22:col7 | 36.10 (None% RSE) |
| b | `Q900` · equation variable | 0.41 |  |  |  |  | 4.15 | llm (0.6) | Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col6, Tab2:row9:col7, Tab2:row17:col2, Tab2:row17:col3, Tab2:row17:col6, Tab2:row17:col7, Tab2:row23:col2, Tab2:row23:col3, Tab2:row23:col6, Tab2:row23:col7 |  |
| V | `Q61` · V | 2.62 | L/kg | 0.1834 | m3 | L | 6.38 | exact (1) | Tab2:row20:col2, Tab2:row20:col3, Tab2:row20:col6, Tab2:row20:col7 | 22.69 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12', 'k13', 'k31']

**Interpretation flags:**
- table section iiv: 'Cl' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Vc' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Vp' routed out of structural estimates ('IIV (%)')
- table section iiv: 'ka' routed out of structural estimates ('IIV (%)')
- table section iiv: 'F' routed out of structural estimates ('IIV (%)')
- table section iiv: 'V' routed out of structural estimates ('IIV (%)')
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'Cl' → L/h/kg (from the paper text: "The paper text states: 'TMP was adequately described by a one-compartment model following IV administration, with marked")
- implicit units: 'Vc' → L/kg (from the paper text: "The paper text states for SDZ: '...and the V at steady-state was approximately 0.54 L/kg.' Since the study normalizes pa")
- implicit units: 'Vp' → L/kg (from the paper text: 'Consistent with the unit for Vc (parameter 2) and the explicit mention of Vss in L/kg for SDZ. The text explicitly gives')
- implicit units: 'Q' → L/h/kg (from the paper text: "The paper text states: 'The SMX parameter Q was fixed to 0.14 L/kg/h based on preliminary results...'")
- implicit units: 'ka' → 1/h (from the paper text: "The paper text states: 'Oral absorption of TMP was rapid (kₐ 3.69 1/h and absorption half-life 0.19 h)...'")
- implicit units: 'V' → L/kg (from the paper text: "The paper text states: '...and a substantially larger V (2.62 L/kg) than SDZ and SMX.'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfadiazine
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.95 (19/20 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b]` | 0.41 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col6', 'Tab2:row6:col7', 'Tab2:row14:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col6', 'Tab2:row7:col7', 'Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col6', 'Tab2:row15:col7', 'Tab2:row21:col1', 'Tab2:row21:col2', 'Tab2:row21:col3', 'Tab2:row21:col6', 'Tab2:row21:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col6', 'Tab2:row20:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col6', 'Tab2:row4:col7', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col6', 'Tab2:row12:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col6', 'Tab2:row5:col7', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col6', 'Tab2:row13:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.43 | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 30.1 L/h | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 183 L | ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col6', 'Tab2:row20:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 25.9 L | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col6', 'Tab2:row4:col7', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col6', 'Tab2:row12:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.3 L | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col6', 'Tab2:row5:col7', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col6', 'Tab2:row13:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=sulfadiazine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 3C → PK_3C* | PK_3C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 7.5 | 3360 | 447.9 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.6 | 3360 | 266.6 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 4.2 | 3360 | 799.9 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.1 | 3360 | 3.36e+04 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.1 | 3360 | 3054 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.39 | 3360 | 8614 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.61 | 3360 | 5508 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.19 | 3360 | 1.768e+04 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4 | 2.693 | 0.6733 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4 | 2.693 | 0.6733 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference_modelica.zip" download>Sulfadiazine_Ekstrand2026_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference_fmi.zip" download>Sulfadiazine_Ekstrand2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3C_enteral.fmu" download>PK_3C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference_matlab.zip" download>Sulfadiazine_Ekstrand2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference_matlab_simbio.zip" download>Sulfadiazine_Ekstrand2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference_sbml.zip" download>Sulfadiazine_Ekstrand2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference_cellml.zip" download>Sulfadiazine_Ekstrand2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2503 | kg/mol |
| input | dosing | `F` | 0.94 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00014 | kg |
| input | model | `Cl` | 8.361e-06 | m3/s |
| input | model | `VdPerKg` | 0.00037 | m3/kg |
| input | model | `k21` | 0.0004321 | 1/s |
| input | model | `ka` | 0.001025 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ekstrand C, Löwgren M, Erkas M, Devreese M, De Baere S, Vo-Thanh J et al. Comparative pharmacokinetics of trimethoprim-sulfadiazine and trimethoprim-sulfamethoxazole in dogs. BMC veterinary research 22(1) (2026). [doi:10.1186/s12917-026-05604-7](https://doi.org/10.1186/s12917-026-05604-7)

**This record:** Pharmacolibrary v26.09, model `Sulfadiazine_Ekstrand2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference>

```bibtex
@misc{pharmacolibrary_SulfadiazineEkstrand2026reference,
  title  = {{Pharmacolibrary model Sulfadiazine_Ekstrand2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference},
  note   = {Parameters from doi:10.1186/s12917-026-05604-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 140 mg, single dose, first-order absorption (ka 3.69 /h, F 0.94). Doses in the paper: 140, 210, 280, 700, 1050, 1400, 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference/Sulfadiazine_Ekstrand2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3C_enteral` · parameters `Sulfadiazine_Ekstrand2026_reference_params.json` · controls `Sulfadiazine_Ekstrand2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfadiazine%5D%20Sulfadiazine_Ekstrand2026_reference&body=Drug%3A%20sulfadiazine%0ARecord%3A%20Sulfadiazine_Ekstrand2026_reference%0APaper%3A%20Ekstrand_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:38 UTC</sub>
