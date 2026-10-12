<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfamethoxazole&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/&quot;},{&quot;label&quot;:&quot;Ekstrand_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfamethoxazole_Hess1993_reference&quot;,&quot;label&quot;:&quot;Hess_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/Sulfamethoxazole_Hess1993_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfamethoxazole_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfamethoxazole — `Sulfamethoxazole_Ekstrand2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The sulfamethoxazole record was held back because its terminal half-life failed to match the paper's reports and key inter-compartmental parameters relied on library defaults rather than study-specific estimates.**

Simulations using the extracted clearance and volume parameters produced a terminal half-life that deviated significantly from the paper's reported values. Additionally, the model builder substituted library defaults for the inter-compartmental clearance terms (k12, k13, k31) rather than using values from the study, leaving these influential parameters unsupported by the paper. Extracted — sulfamethoxazole: CL 0.43 L/h/kg, V1 0.37 L/kg, V2 0.09 L/kg, Q 0.14 L/h/kg, kabs 3.69 1/h, Fab 0.94, V 2.62 L/kg.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `sulfamethoxazole, trimethoprim`, measured `sulfamethoxazole`.

## Citation
Ekstrand C et al., Comparative pharmacokinetics of trimeth…, BMC veterinary research (2026)
  ·  DOI: [10.1186/s12917-026-05604-7](https://doi.org/10.1186/s12917-026-05604-7)

<div class="pk-model-meta" hidden drug="sulfamethoxazole" model-id="Sulfamethoxazole_Ekstrand2026_reference" status="needs_review" stale="false" population="Beagle dogs" measured-compound="sulfamethoxazole" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment, oral mammillary model — template `PK_3C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl | `Q22` · CL | 0.43 | L/h/kg | 8.361111111111111e-06 | L/h | 9.78 | exact (1.0) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col6, Tab2:row3:col7, Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col6, Tab2:row11:col7, Tab2:row19:col2, Tab2:row19:col3, Tab2:row19:col6, Tab2:row19:col7 | — | 28.47 (None% RSE) |
| Vc | `Q63` · V1 | 0.37 | L/kg | 0.0259 | L | 6.02 | exact (1.0) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col6, Tab2:row4:col7, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col6, Tab2:row12:col7 | — | 33.28 (None% RSE) |
| Vp | `Q64` · V2 | 0.09 | L/kg | 0.006299999999999999 | L | 30.0 | exact (1.0) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col6, Tab2:row5:col7, Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col6, Tab2:row13:col7 | — | 30.54 (None% RSE) |
| Q | `Q30` · Q | 0.14 | L/h/kg | 2.7222222222222224e-06 | L/h | 30.3 | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col6, Tab2:row6:col7, Tab2:row14:col2 | — | not captured |
| ka | `Q49` · kabs | 3.69 | 1/h | 0.001025 | 1/h | 25.9 | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col6, Tab2:row7:col7, Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col6, Tab2:row15:col7, Tab2:row21:col1, Tab2:row21:col2, Tab2:row21:col3, Tab2:row21:col6, Tab2:row21:col7 | — | 74.17 (None% RSE) |
| F | `Q40` · Fab | 0.94 | not captured | not captured | not captured | 8.20 | exact (1.0) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col6, Tab2:row8:col7, Tab2:row16:col2, Tab2:row16:col3, Tab2:row16:col6, Tab2:row16:col7, Tab2:row22:col2, Tab2:row22:col3, Tab2:row22:col6, Tab2:row22:col7 | — | 36.10 (None% RSE) |
| V | `Q61` · V | 2.62 | L/kg | 0.18340000000000004 | L | 6.38 | exact (1.0) | Tab2:row20:col2, Tab2:row20:col3, Tab2:row20:col6, Tab2:row20:col7 | — | 22.69 (None% RSE) |

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
- table section iiv: 'SDZ' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'SMX' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'TMP' routed out of structural estimates ('IIV (CV%)')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col6', 'Tab2:row9:col7', 'Tab2:row17:col2', 'Tab2:row17:col3', 'Tab2:row17:col6', 'Tab2:row17:col7', 'Tab2:row23:col2', 'Tab2:row23:col3', 'Tab2:row23:col6', 'Tab2:row23:col7'])
- dropped value-less row: 'SDZ'
- dropped value-less row: 'SMX'
- dropped value-less row: 'TMP'
- implicit units: 'Cl' → L/h/kg (from the paper text: "The text explicitly states: 'TMP was adequately described by a one-compartment model following IV administration, with m")
- implicit units: 'Vc' → L/kg (from the paper text: "While the specific value 0.37 is in the table, the text defines the unit convention for TMP volume of distribution as 's")
- implicit units: 'Vp' → L/kg (from the paper text: "Consistent with the unit for Vc and the general volume of distribution (V) which the text cites as 'V (2.62 L/kg)' for T")
- implicit units: 'Q' → L/h/kg (from the paper text: "The text explicitly states: 'The SMX parameter Q was fixed to 0.14 L/kg/h based on preliminary results...' Note that L/k")
- implicit units: 'ka' → 1/h (from the paper text: "The text explicitly states: 'Oral absorption of TMP was rapid (kₐ 3.69 1/h and absorption half-life 0.19 h)'")
- implicit units: 'V' → L/kg (from the paper text: "The text explicitly states: '...substantially larger V (2.62 L/kg) than SDZ and SMX.'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfamethoxazole
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 3 transcribed (9 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

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
| T3_output_variable | not captured | pass | C_central (measured=sulfamethoxazole) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 3C → PK_3C* | PK_3C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | not captured | 3359.5785423852135 | not captured | non-numeric value |
| T1_t_half_beta | reference | fail | 7.5 | 3359.5785423852135 | 447.9438 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.6 | 3359.5785423852135 | 266.6332 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 4.2 | 3359.5785423852135 | 799.8997 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | not captured | 3359.5785423852135 | not captured | non-numeric value |
| T1_t_half_terminal | reference | fail | 0.1 | 3359.5785423852135 | 33595.7854 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.1 | 3359.5785423852135 | 3054.1623 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.39 | 3359.5785423852135 | 8614.304 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.61 | 3359.5785423852135 | 5507.5058 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.19 | 3359.5785423852135 | 17681.9923 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 4.2 | 3359.5785423852135 | 799.8997 | h→SI vs simulated h |
| T1_tmax | reference | skipped | not captured | 2.693386773547094 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 2.693386773547094 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sulfamethoxazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ekstrand_2026` / `Ekstrand_2026::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sulfamethoxazole/models/modelica/Sulfamethoxazole_Ekstrand2026_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sulfamethoxazole/models/modelica/Sulfamethoxazole_Ekstrand2026_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sulfamethoxazole/models/modelica/Sulfamethoxazole_Ekstrand2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference_modelica.zip" download>Sulfamethoxazole_Ekstrand2026_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference_fmi.zip" download>Sulfamethoxazole_Ekstrand2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3C_enteral.fmu" download>PK_3C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference_matlab.zip" download>Sulfamethoxazole_Ekstrand2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference_matlab_simbio.zip" download>Sulfamethoxazole_Ekstrand2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference_sbml.zip" download>Sulfamethoxazole_Ekstrand2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference_cellml.zip" download>Sulfamethoxazole_Ekstrand2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference.svg" alt="Sulfamethoxazole_Ekstrand2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2000 mg, single dose, first-order absorption (ka 3.69 /h, F 0.94). _The paper's dose was not captured; the default is the WHO ATC DDD 2000 mg oral (J01EC01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference/Sulfamethoxazole_Ekstrand2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3C_enteral` · parameters `Sulfamethoxazole_Ekstrand2026_reference_params.json` · controls `Sulfamethoxazole_Ekstrand2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:57 UTC</sub>
