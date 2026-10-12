<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Park_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Park2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The donepezil 2-compartment model was held back because its simulated peak concentration and terminal half-life do not match the paper's reported values, and bioavailability (F) was left at library defaults instead of an estimate from the paper.**

Simulated Cmax is 6.108796091798451e-06 while the paper reports values from 2.912e-05 to 0.00010012 (ratios 0.061 to 0.2332), and the simulated terminal half-life is 433.5333748225677 h versus the reported 223.16 h (ratio 1.9427). The model builder substituted a default for F (bioavailability) rather than a value estimated in the paper, which was judged not acceptable. The Cmax comparisons also note a unit mismatch between ng/mL converted to SI and simulated kg/m3. Extracted — donepezil: CL 9.57 L/h, V1 58.2 L, V2 2.05e+03 L, kabs 0.00173 1/h, Q 100 L/h, D1 497 h, tlag 299 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has donepezil (GB-5001A LAI / oral Aricept), the second reading GB-5001A; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `donepezil (GB-5001A LAI / oral Aricept)`, measured `donepezil`.

## Citation
Park YC et al., Pharmacokinetic Evaluation of GB-5001,…, Pharmaceutics (2025)
  ·  DOI: [10.3390/pharmaceutics17121517](https://doi.org/10.3390/pharmaceutics17121517)

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Park2025_reference" status="needs_review" stale="false" population="healthy male adults" measured-compound="donepezil" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q22` · CL | 9.57 | L/h | 2.6583333333333334e-06 | [l] / [h] | 0.57 | exact (1.0) | pharmaceutics-17-01517-t006:row1:col1, pharmaceutics-17-01517-t006:row1:col2, pharmaceutics-17-01517-t006:row1:col3 | — | 0.0945 (0.0334% RSE) |
| V1, L | `Q63` · V1 | 58.2 | L | 0.0582 | [l] | 47.9 | exact (1.0) | pharmaceutics-17-01517-t006:row3:col1, pharmaceutics-17-01517-t006:row3:col2, pharmaceutics-17-01517-t006:row3:col3 | — | 6.97 (1.69% RSE) |
| V2, L | `Q64` · V2 | 2050 | L | 2.05 | [l] | 303 | exact (1.0) | pharmaceutics-17-01517-t006:row5:col1, pharmaceutics-17-01517-t006:row5:col2, pharmaceutics-17-01517-t006:row5:col3 | — | not captured |
| KA3, 1/h | `Q49` · kabs | 0.00173 | 1/h | 4.805555555555556e-07 | [1] / [h] | 0.000141 | llm (0.6) | pharmaceutics-17-01517-t006:row6:col1, pharmaceutics-17-01517-t006:row6:col2, pharmaceutics-17-01517-t006:row6:col3 | — | not captured |
| Q | `Q30` · Q | 100 | L/h | 2.777777777777778e-05 | L/h | not captured | exact (1.0) | pharmaceutics-17-01517-t006:row10:col1 | — | not captured |
| D1 | `Q310` · D1 | 497 | h | 1789200.0 | h | 5.9 | exact (1.0) | pharmaceutics-17-01517-t006:row11:col1, pharmaceutics-17-01517-t006:row11:col2, pharmaceutics-17-01517-t006:row11:col3 | — | not captured |
| ALAG3 | `Q83` · tlag | 299 | h | 1076400.0 | h | 6.97 | llm (0.6) | pharmaceutics-17-01517-t006:row12:col1, pharmaceutics-17-01517-t006:row12:col2, pharmaceutics-17-01517-t006:row12:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped duplicate Q49 ('KA4, 1/h', value '0.0113') — already have one for this compound
- dropped unlinked row (NIL): 'F3' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-01517-t006:row8:col1', 'pharmaceutics-17-01517-t006:row8:col2', 'pharmaceutics-17-01517-t006:row8:col3'])
- dropped unlinked row (NIL): 'F4' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-01517-t006:row9:col1', 'pharmaceutics-17-01517-t006:row9:col2', 'pharmaceutics-17-01517-t006:row9:col3'])
- dropped duplicate Q83 ('ALAG4', value '1130') — already have one for this compound
- routed 'ε1 (additive), ng/mL' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'ε2 (proportional) a' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'Q' → L/h (from the paper text: "Text states: 'The intercompartmental clearance (Q) in GB-5001A model was fixed at 100 L/h in the final model.'")
- implicit units: 'D1' → h (from the popPK convention: 'D1 is a duration of zero-order input; durations are conventionally expressed in hours in population PK models, and no un')
- implicit units: 'ALAG3' → h (from the popPK convention: 'ALAG3 is an absorption lag time; lag times are conventionally expressed in hours in population PK models, and no unit is')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL, L/h); Q63 (V1, L); Q64 (V2, L); Q30 (Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=donepezil

**Extraction notes:**
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.833 (15/18 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['donepezil', '6-o-desmethyl donepezil', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[f4]` | not captured | 0.195 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | donepezil (GB-5001A LAI / oral Aricept) | GB-5001A | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01517-t006:row1:col1', 'pharmaceutics-17-01517-t006:row1:col2', 'pharmaceutics-17-01517-t006:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01517-t006:row10:col1'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-17-01517-t006:row11:col1', 'pharmaceutics-17-01517-t006:row11:col2', 'pharmaceutics-17-01517-t006:row11:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01517-t006:row6:col1', 'pharmaceutics-17-01517-t006:row6:col2', 'pharmaceutics-17-01517-t006:row6:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01517-t006:row3:col1', 'pharmaceutics-17-01517-t006:row3:col2', 'pharmaceutics-17-01517-t006:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01517-t006:row5:col1', 'pharmaceutics-17-01517-t006:row5:col2', 'pharmaceutics-17-01517-t006:row5:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-17-01517-t006:row12:col1', 'pharmaceutics-17-01517-t006:row12:col2', 'pharmaceutics-17-01517-t006:row12:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.57 | not captured | not captured | ['pharmaceutics-17-01517-t006:row1:col1', 'pharmaceutics-17-01517-t006:row1:col2', 'pharmaceutics-17-01517-t006:row1:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.57 L/h | not captured | not captured | ['pharmaceutics-17-01517-t006:row1:col1', 'pharmaceutics-17-01517-t006:row1:col2', 'pharmaceutics-17-01517-t006:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 58.2 L | not captured | not captured | ['pharmaceutics-17-01517-t006:row3:col1', 'pharmaceutics-17-01517-t006:row3:col2', 'pharmaceutics-17-01517-t006:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.05e+03 L | not captured | not captured | ['pharmaceutics-17-01517-t006:row5:col1', 'pharmaceutics-17-01517-t006:row5:col2', 'pharmaceutics-17-01517-t006:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=donepezil) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 6.108796091798451e-06 | not captured | non-numeric value |
| T1_cmax | reference | skipped | not captured | 6.108796091798451e-06 | not captured | non-numeric value |
| T1_cmax | reference | pass | 5.28e-06 | 6.108796091798451e-06 | 1.157 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.912e-05 | 6.108796091798451e-06 | 0.2098 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00010012 | 6.108796091798451e-06 | 0.061 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 1.24 | 6.108796091798451e-06 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | fail | 2.6199999999999996e-05 | 6.108796091798451e-06 | 0.2332 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 5.239999999999999e-05 | 6.108796091798451e-06 | 0.1166 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 5.1399999999999996e-05 | 6.108796091798451e-06 | 0.1188 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 2.61 | 6.108796091798451e-06 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | not captured | 6.108796091798451e-06 | not captured | non-numeric value |
| T1_cmin_ss | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 18.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 36.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 36.0 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | 433.5333748225677 | not captured | non-numeric value |
| T1_t_half_terminal | reference | fail | 223.16 | 433.5333748225677 | 1.9427 | h→SI vs simulated h |
| T1_tmax | reference | skipped | not captured | 659.0166666666711 | not captured | non-numeric value |
| T1_tmax | reference | pass | 552.03 | 659.0166666666711 | 1.1938 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_donepezil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Park_2025` / `Park_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_donepezil/models/modelica/Donepezil_Park2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_donepezil/models/modelica/Donepezil_Park2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_donepezil/models/modelica/Donepezil_Park2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_modelica.zip" download>Donepezil_Park2025_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_fmi.zip" download>Donepezil_Park2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_matlab.zip" download>Donepezil_Park2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_matlab_simbio.zip" download>Donepezil_Park2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_sbml.zip" download>Donepezil_Park2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_cellml.zip" download>Donepezil_Park2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference.svg" alt="Donepezil_Park2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 70 mg, single dose, first-order absorption (ka 0.00173 /h, lag 1.79e+04 min, F 0.9). Doses in the paper: 70, 140, 280 mg.

<dbs-fmusim paramsurl="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Donepezil_Park2025_reference_params.json` · controls `Donepezil_Park2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:30 UTC</sub>
