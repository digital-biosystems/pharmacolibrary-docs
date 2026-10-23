<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadiazine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/&quot;},{&quot;label&quot;:&quot;Tajima_2023_2 \u00b7 sdz&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadiazine_Boulanger2024_reference&quot;,&quot;label&quot;:&quot;Boulanger_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Boulanger2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Tajima2023v2_sdz&quot;,&quot;label&quot;:&quot;Tajima_2023_2_sdz&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfadiazine — `Sulfadiazine_Tajima2023v2_sdz`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> The model does not reproduce the paper's time of the peak (tmax); the model does not reproduce the paper's terminal half-life.

<div class="pk-model-meta" hidden drug="sulfadiazine" model-id="Sulfadiazine_Tajima2023v2_sdz" status="needs_review" stale="false" population="female Holstein milking cows" measured-compound="sulfadiazine" parameterization="mechanistic" topology="1C"></div>

## Citation
Tajima T, Saiga M, Yamamoto H, Elbadawy M, Abugomaa A, Miura R et al. Oral pharmacokinetics of sulfadiazine and sulfamonomethoxine in female Holstein milking cows. The Journal of veterinary medical science 85(7):715–720 (2023).
  ·  DOI: [10.1292/jvms.23-0110](https://doi.org/10.1292/jvms.23-0110)

## Population and dosing

**Population:** female Holstein milking cows · condition healthy · age group adult · n = &gt; 4.

**Dosing:** 350, 700 mg, oral, iv, single.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz.svg" alt="Sulfadiazine_Tajima2023v2_sdz diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka | kabs | 0.158 | 1/hr |
| t1/2ka | t1/2ka | 4.51 | hr |
| kel | kel | 0.262 | 1/hr |
| t1/2kel | t1/2z | 2.66 | hr |
| Cmax | Cmax | 7.01 | µg/mL |
| Tmax | tmax | 5.00 | hr |
| F | Fab | 85.7 |  |
| MAT | MAT | 5.92 | hr |
| AUCi.v. | AUC | 52.0 | µg·h/mL |
| CLtot | CL | 0.0973 | L/hr/kg |
| Vdss | Vss | 0.357 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax); the model does not reproduce the paper's terminal half-life.**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax and AUC), so that value has no SI equivalent. Extracted — sulfadiazine: kabs 0.158 1/hr, t1/2ka 4.51 hr, kel 0.262 1/hr, t1/2z 2.66 hr, Cmax 7.01 µg/mL, tmax 5 hr, Fab 85.7, MAT 5.92 hr, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulfadiazine, the second reading sulfadiazine and sulfamonomethoxine; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.158 | 1/hr | 4.389e-05 | 1/s | 1/h | exact (1) | tbl_002:row2:col2 |
| t1/2ka | `Q95` · t1/2ka | 4.51 | hr | 1.624e+04 | s | h | exact (1) | tbl_002:row3:col2 |
| kel | `Q47` · kel | 0.262 | 1/hr | 7.278e-05 | 1/s | 1/h | exact (1) | tbl_002:row4:col2 |
| t1/2kel | `Q57` · t1/2z | 2.66 | hr | 9576 | s | h | fuzzy (0.92) | tbl_002:row5:col2 |
| Cmax | `Q32` · Cmax | 7.01 | µg/mL |  |  | µg/mL | exact (1) | tbl_002:row6:col2 |
| Tmax | `Q56` · tmax | 5.00 | hr | 1.8e+04 | s | h | exact (1) | tbl_002:row7:col2 |
| F | `Q40` · Fab | 85.7 |  |  |  |  | exact (1) | tbl_002:row8:col2 |
| MAT | `Q73` · MAT | 5.92 | hr | 2.131e+04 | s | h | exact (1) | tbl_002:row9:col2 |
| AUCi.v. | `Q88` · AUC | 52.0 | µg·h/mL |  |  | µg·h/mL | llm (0.6) | tbl_002:row12:col2 |
| CLtot | `Q22` · CL | 0.0973 | L/hr/kg | 1.892e-06 | m3/s | L/h | exact (1) | tbl_002:row14:col2 |
| Vdss | `Q65` · Vss | 0.357 | L/kg | 0.02499 | m3 | L | llm (0.6) | tbl_002:row15:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- dropped unlinked row (NIL): 'MRTi.v.' — extend the ontology if this is a real PK parameter (source ['tbl_002:row10:col2'])
- dropped unlinked row (NIL): 'MRTp.o.' — extend the ontology if this is a real PK parameter (source ['tbl_002:row11:col2'])
- dropped duplicate Q88 ('AUCp.o.', value '98.5') — already have one for this compound
- implicit units: 'ka' → 1/hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and since rate constants (ka, kel) are inversely propo")
- implicit units: 't1/2ka' → hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and half-life is a time parameter.")
- implicit units: 'kel' → 1/hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and since rate constants (ka, kel) are inversely propo")
- implicit units: 't1/2kel' → hr (from the paper text: "The text explicitly mentions 'The t1/2kel of SMM was significantly shorter (1.62 ± 0.24 hr)' and 'SDZ (2.66 ± 0.25 hr)'.")
- implicit units: 'Cmax' → µg/mL (from the popPK convention: 'Concentration in PK studies is typically reported in µg/mL. While the specific unit is not stated in the excerpt for Cma')
- implicit units: 'Tmax' → hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and Tmax is a time parameter. Additionally, the text m")
- implicit units: 'MAT' → hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and MAT is a time parameter. Additionally, the text me")
- implicit units: 'AUCi.v.' → µg·h/mL (from the popPK convention: 'AUC is concentration-time. Given the concentration unit is likely µg/mL (see Cmax) and time is hr, the unit is µg·h/mL. ')
- implicit units: 'CLtot' → L/hr/kg (from the paper text: "The text explicitly states 'The CLtot of SMM (0.202 ± 0.023 L/hr/kg) was significantly higher than that of SDZ (0.0973 ±")
- implicit units: 'Vdss' → L/kg (from the popPK convention: 'Volume of distribution (Vdss) is typically expressed in L/kg in population PK studies, especially when data are normaliz')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfadiazine
- population split: 'sdz' subgroup of Tajima_2023_2 (paper reports 2 populations: sdz, smm)
- skipped review gap-fill of V from Boulanger_2024: its label names a different analyte ('tmp') — 'volume of distribution of TMP'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tbl_002:row2:col1 = 'hr−1'
- unparsed cell tbl_002:row2:col3 = '0.179 ± 0.023*'
- unparsed cell tbl_002:row3:col3 = '3.91 ± 0.51*'
- unparsed cell tbl_002:row4:col1 = 'hr−1'
- unparsed cell tbl_002:row4:col3 = '0.433 ± 0.058*'
- unparsed cell tbl_002:row5:col3 = '1.62 ± 0.24*'
- unparsed cell tbl_002:row6:col3 = '4.29 ± 0.32*'
- unparsed cell tbl_002:row7:col3 = '2.75 ± 0.96*'
- unparsed cell tbl_002:row9:col3 = '5.24 ± 0.69*'
- unparsed cell tbl_002:row10:col3 = '2.21 ± 0.31*'
- unparsed cell tbl_002:row11:col3 = '7.45 ± 0.66*'
- unparsed cell tbl_002:row12:col3 = '25.1 ± 3.0*'
- unparsed cell tbl_002:row13:col3 = '45.6 ± 6.0*'
- unparsed cell tbl_002:row14:col3 = '0.202 ± 0.023*'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (14/18 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrti.v.]` |  | 3.69 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulfadiazine | sulfadiazine and sulfamonomethoxine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sulfadiazine | sulfadiazine and sulfamonomethoxine | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl_002:row14:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tbl_002:row6:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tbl_002:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tbl_002:row2:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['tbl_002:row7:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['tbl_002:row5:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tbl_002:row15:col2'] |
| C5_dimension_Q73 | pass | [time] |  | ['tbl_002:row9:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tbl_002:row12:col2'] |
| C5_dimension_Q95 | pass | [time] |  | ['tbl_002:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0973 | ['tbl_002:row14:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.81 L/h | ['tbl_002:row14:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 25 L | ['tbl_002:row15:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=sulfadiazine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.328 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.328 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 4.8 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 4.8 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 4.8 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 4.8 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 4.8 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 4.8 |  | non-numeric value |
| T1_t_half_terminal | reference | pass | 3.91 | 4.8 | 1.228 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.51 | 4.8 | 1.064 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.62 | 4.8 | 2.963 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.66 | 4.8 | 1.804 | hr→SI vs simulated h |
| T1_tmax | reference | skipped |  | 4.86 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 4.86 |  | non-numeric value |
| T1_tmax | reference | fail | 2.75 | 4.86 | 1.767 | hr→SI vs simulated h |
| T1_tmax | reference | pass | 5 | 4.86 | 0.9721 | hr→SI vs simulated h |
| T1_tmax | reference | fail | 2.75 | 4.86 | 1.767 | hr→SI vs simulated h |
| T1_tmax | reference | pass | 5 | 4.86 | 0.9721 | hr→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_modelica.zip" download>Sulfadiazine_Tajima2023v2_sdz_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_fmi.zip" download>Sulfadiazine_Tajima2023v2_sdz_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_matlab.zip" download>Sulfadiazine_Tajima2023v2_sdz_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_matlab_simbio.zip" download>Sulfadiazine_Tajima2023v2_sdz_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_sbml.zip" download>Sulfadiazine_Tajima2023v2_sdz_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_cellml.zip" download>Sulfadiazine_Tajima2023v2_sdz_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2503 | kg/mol |
| input | dosing | `F` | 85.7 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00035 | kg |
| input | model | `Cl` | 1.892e-06 | m3/s |
| input | model | `VdPerKg` | 0.000357 | m3/kg |
| input | model | `ka` | 4.389e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Tajima T, Saiga M, Yamamoto H, Elbadawy M, Abugomaa A, Miura R et al. Oral pharmacokinetics of sulfadiazine and sulfamonomethoxine in female Holstein milking cows. The Journal of veterinary medical science 85(7):715–720 (2023). [doi:10.1292/jvms.23-0110](https://doi.org/10.1292/jvms.23-0110)

**This record:** Pharmacolibrary v26.09, model `Sulfadiazine_Tajima2023v2_sdz`. <https://pharmacolibrary.github.io/#/drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz>

```bibtex
@misc{pharmacolibrary_SulfadiazineTajima2023v2sdz,
  title  = {{Pharmacolibrary model Sulfadiazine_Tajima2023v2_sdz}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz},
  note   = {Parameters from doi:10.1292/jvms.23-0110},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 350 mg, single dose, first-order absorption (ka 0.158 /h, F 85.7). Doses in the paper: 350, 700 mg.

<dbs-fmusim paramsurl="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Sulfadiazine_Tajima2023v2_sdz_params.json` · controls `Sulfadiazine_Tajima2023v2_sdz_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfadiazine%5D%20Sulfadiazine_Tajima2023v2_sdz&body=Drug%3A%20sulfadiazine%0ARecord%3A%20Sulfadiazine_Tajima2023v2_sdz%0APaper%3A%20Tajima_2023_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:38 UTC</sub>
