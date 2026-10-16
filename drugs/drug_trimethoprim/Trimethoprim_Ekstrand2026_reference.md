<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Ekstrand_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Ekstrand2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Simulated trimethoprim terminal half-life and tmax deviate from paper values, and three intercompartmental rate constants use default values.**

The model's simulated terminal half-life does not match the paper's reported values of 0.1, 7.5, 1.1, 0.39, 12.6, 0.61, or 4.2 hours. The simulated time to peak concentration is 2.69 hours, whereas the paper reports 4.0 hours. The intercompartmental rate constants k12, k13, and k31 were left at library defaults instead of being extracted from the study. Extracted — trimethoprim: CL 0.43 L/h/kg, V1 0.37 L/kg, V2 0.09 L/kg, Q 0.14 L/h/kg, kabs 3.69 1/h, Fab 0.94, V 2.62 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trimethoprim-sulfadiazine, trimethoprim-sulfamethoxazole, trimethoprim, the second reading trimethoprim; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `trimethoprim-sulfadiazine, trimethoprim-sulfamethoxazole, trimethoprim`, measured `trimethoprim`.

## Citation
Ekstrand C et al., Comparative pharmacokinetics of trimeth…, BMC veterinary research (2026)
  ·  DOI: [10.1186/s12917-026-05604-7](https://doi.org/10.1186/s12917-026-05604-7)

<div class="pk-model-meta" hidden drug="trimethoprim" model-id="Trimethoprim_Ekstrand2026_reference" status="needs_review" stale="false" population="beagle dogs" measured-compound="trimethoprim" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment, oral mammillary model — template `PK_3C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl | `Q22` · CL | 0.43 | L/h/kg | 8.361111111111111e-06 | L/h | 0.37 | exact (1.0) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col6, Tab2:row3:col7, Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col6, Tab2:row11:col7, Tab2:row19:col2, Tab2:row19:col3, Tab2:row19:col6, Tab2:row19:col7 | — | 28.47 (None% RSE) |
| Vc | `Q63` · V1 | 0.37 | L/kg | 0.0259 | L | 0.32 | exact (1.0) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col6, Tab2:row4:col7, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col6, Tab2:row12:col7 | — | 33.28 (None% RSE) |
| Vp | `Q64` · V2 | 0.09 | L/kg | 0.006299999999999999 | L | 0.0002 | exact (1.0) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col6, Tab2:row5:col7, Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col6, Tab2:row13:col7 | — | 30.54 (None% RSE) |
| Q | `Q30` · Q | 0.14 | L/h/kg | 2.7222222222222224e-06 | L/h | 0.07 | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col6, Tab2:row6:col7, Tab2:row14:col2 | — | not captured |
| ka | `Q49` · kabs | 3.69 | 1/h | 0.001025 | 1/h | 2.37 | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col6, Tab2:row7:col7, Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col6, Tab2:row15:col7, Tab2:row21:col1, Tab2:row21:col2, Tab2:row21:col3, Tab2:row21:col6, Tab2:row21:col7 | — | 74.17 (None% RSE) |
| F | `Q40` · Fab | 0.94 | not captured | not captured | not captured | 0.76 | exact (1.0) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col6, Tab2:row8:col7, Tab2:row16:col2, Tab2:row16:col3, Tab2:row16:col6, Tab2:row16:col7, Tab2:row22:col2, Tab2:row22:col3, Tab2:row22:col6, Tab2:row22:col7 | — | 36.10 (None% RSE) |
| b | `Q900` · equation variable | 0.41 | not captured | not captured | not captured | 0.29 | llm (0.6) | Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col6, Tab2:row9:col7, Tab2:row17:col2, Tab2:row17:col3, Tab2:row17:col6, Tab2:row17:col7, Tab2:row23:col2, Tab2:row23:col3, Tab2:row23:col6, Tab2:row23:col7 | — | not captured |
| V | `Q61` · V | 2.62 | L/kg | 0.18340000000000004 | L | 2.22 | exact (1.0) | Tab2:row20:col2, Tab2:row20:col3, Tab2:row20:col6, Tab2:row20:col7 | — | 22.69 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'Cl' → L/h/kg (from the paper text: "The paper text states: 'In contrast, TMP was adequately described by a one-compartment model following IV administration")
- implicit units: 'Vc' → L/kg (from the paper text: "The paper text states for TMP: 'a substantially larger V (2.62 L/kg)'. As Vc (V1) is a volume of distribution parameter ")
- implicit units: 'Vp' → L/kg (from the paper text: "The paper text refers to 'V2' in the context of parameters 'F, V1, V2, and Q' and later gives units for other volumes li")
- implicit units: 'Q' → L/h/kg (from the paper text: "The paper text explicitly states: 'The SMX parameter Q was fixed to 0.14 L/kg/h based on preliminary results...'. Note: ")
- implicit units: 'ka' → 1/h (from the paper text: "The paper text states for TMP: 'Oral absorption of TMP was rapid (kₐ 3.69 1/h...)' and for SDZ: '(kₐ 0.65 1/h...)'.")
- implicit units: 'V' → L/kg (from the paper text: "The paper text states for TMP: 'a substantially larger V (2.62 L/kg)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trimethoprim
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.522 (12/23 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b].parameter_id` | Q900 | Q319 | mismatch |
| `gpt-oss-120b` | `parameters[b].rse_percent` | 0.29 | 4.15 | mismatch |
| `gpt-oss-120b` | `parameters[cl].rse_percent` | 0.37 | 9.78 | mismatch |
| `gpt-oss-120b` | `parameters[f bioavailability]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f].rse_percent` | 0.76 | 8.20 | mismatch |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | 2.37 | 25.9 | mismatch |
| `gpt-oss-120b` | `parameters[q].rse_percent` | 0.07 | 30.3 | mismatch |
| `gpt-oss-120b` | `parameters[v].rse_percent` | 2.22 | 6.38 | mismatch |
| `gpt-oss-120b` | `parameters[vc].rse_percent` | 0.32 | 6.02 | mismatch |
| `gpt-oss-120b` | `parameters[vp].rse_percent` | 0.0002 | 30.0 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | trimethoprim-sulfadiazine, trimethoprim-sulfamethoxazole, trimethoprim | trimethoprim | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col6', 'Tab2:row6:col7', 'Tab2:row14:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col6', 'Tab2:row7:col7', 'Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col6', 'Tab2:row15:col7', 'Tab2:row21:col1', 'Tab2:row21:col2', 'Tab2:row21:col3', 'Tab2:row21:col6', 'Tab2:row21:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col6', 'Tab2:row20:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col6', 'Tab2:row4:col7', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col6', 'Tab2:row12:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col6', 'Tab2:row5:col7', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col6', 'Tab2:row13:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.43 | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 30.1 L/h | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 183 L | not captured | not captured | ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col6', 'Tab2:row20:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 25.9 L | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col6', 'Tab2:row4:col7', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col6', 'Tab2:row12:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.3 L | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col6', 'Tab2:row5:col7', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col6', 'Tab2:row13:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=trimethoprim) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 3C → PK_3C* | PK_3C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 7.5 | 3359.5785727050093 | 447.9438 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.6 | 3359.5785727050093 | 266.6332 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 4.2 | 3359.5785727050093 | 799.8997 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.1 | 3359.5785727050093 | 33595.7857 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.1 | 3359.5785727050093 | 3054.1623 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.39 | 3359.5785727050093 | 8614.304 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.61 | 3359.5785727050093 | 5507.5059 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.19 | 3359.5785727050093 | 17681.9925 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4.0 | 2.693386773547094 | 0.6733 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4.0 | 2.693386773547094 | 0.6733 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trimethoprim/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ekstrand_2026` / `Ekstrand_2026::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trimethoprim/models/modelica/Trimethoprim_Ekstrand2026_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trimethoprim/models/modelica/Trimethoprim_Ekstrand2026_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trimethoprim/models/modelica/Trimethoprim_Ekstrand2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_modelica.zip" download>Trimethoprim_Ekstrand2026_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_fmi.zip" download>Trimethoprim_Ekstrand2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3C_enteral.fmu" download>PK_3C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_matlab.zip" download>Trimethoprim_Ekstrand2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_matlab_simbio.zip" download>Trimethoprim_Ekstrand2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_sbml.zip" download>Trimethoprim_Ekstrand2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_cellml.zip" download>Trimethoprim_Ekstrand2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference.svg" alt="Trimethoprim_Ekstrand2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 140 mg, single dose, first-order absorption (ka 3.69 /h, F 0.94). Doses in the paper: 140, 210, 280, 700, 1050, 1400, 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3C_enteral` · parameters `Trimethoprim_Ekstrand2026_reference_params.json` · controls `Trimethoprim_Ekstrand2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:16 UTC</sub>
