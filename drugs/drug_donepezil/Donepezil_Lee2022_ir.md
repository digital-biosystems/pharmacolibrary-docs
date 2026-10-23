<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Lee_2022 \u00b7 ir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Lee2022_ir`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The model does not reproduce the paper's peak concentration (Cmax); the model does not reproduce the paper's time of the peak (tmax) (paper 1, model 1.8).

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Lee2022_ir" status="needs_review" stale="false" population="Beagle dogs" measured-compound="donepezil" parameterization="apparent" topology="1C"></div>

## Citation
Lee DY, Shin S, Kim TH, Shin BS. Establishment of Level a In Vitro-In Vivo Correlation (IVIVC) via Extended DoE-IVIVC Model: A Donepezil Case Study. Pharmaceutics 14(6) (2022).
  ·  DOI: [10.3390/pharmaceutics14061226](https://doi.org/10.3390/pharmaceutics14061226)

## Population and dosing

**Population:** Beagle dogs · condition healthy · age group adult · n = 3.

**Dosing:** 4.562, 5 mg, oral, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir.svg" alt="Donepezil_Lee2022_ir diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 (h) | t1/2z | 5.39 | h |
| Cmax (ng/mL) | Cmax | 3.19 | ng/mL |
| AUClast (ng·h/mL) | AUClast | 11.08 | ng·h/mL |
| AUCinf (ng·h/mL) | AUC∞ | 13.29 | ng·h/mL |
| Vz/F (L) | V/F | 2679.87 | L |
| CL/F (mL/min) | CL/F | 5941.79 | mL/min |
| MRT (h) b | MRT | 6.55 | h |
| Absorption rate constant, /hour | kabs | 2.73 | /hour |
| Lag time, hours | tlag | 0.54 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax); the model does not reproduce the paper's time of the peak (tmax) (paper 1, model 1.8).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax, AUClast and AUC∞), so that value has no SI equivalent. Extracted — donepezil: t1/2z 5.39 h, Cmax 3.19 ng/mL, AUClast 11.1 ng·h/mL, AUC∞ 13.3 ng·h/mL, V/F 2.68e+03 L, CL/F 5.94e+03 mL/min, MRT 6.55 h, kabs 2.73 /hour, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has donepezil, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 (h) | `Q57` · t1/2z | 5.39 | h | 1.94e+04 | s | h | exact (1) | Lee_2022_table_3:row1:col1 |
| Cmax (ng/mL) | `Q32` · Cmax | 3.19 | ng/mL |  |  | ng/ml | exact (1) | Lee_2022_table_3:row3:col1 |
| AUClast (ng·h/mL) | `Q74` · AUClast | 11.08 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Lee_2022_table_3:row4:col1 |
| AUCinf (ng·h/mL) | `Q17` · AUC∞ | 13.29 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Lee_2022_table_3:row5:col1 |
| Vz/F (L) | `Q76` · V/F | 2679.87 | L | 2.68 | m3 | l | exact (1) | Lee_2022_table_3:row6:col1 |
| CL/F (mL/min) | `Q27` · CL/F | 5941.79 | mL/min | 9.903e-05 | m3/s | ml/min | exact (1) | Lee_2022_table_3:row7:col1 |
| MRT (h) b | `Q53` · MRT | 6.55 | h | 2.358e+04 | s | h | llm_confirmed (0.6) | Lee_2022_table_3:row8:col1 |
| Absorption rate constant, /hour | `Q49` · kabs | 2.73 | /hour | 0.0007583 | 1/s | 1/h | review_gapfill (0.7) | Bakker_2021:review |
| Lag time, hours | `Q83` · tlag | 0.54 | hours | 1944 | s | h | review_gapfill (0.7) | Bakker_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose (mg)' — extend the ontology if this is a real PK parameter (source ['Lee_2022_table_3:row0:col1'])
- unit_dimension_unknown: 'n = 3' (MRT)
- implicit units: 'MRT (h) b' → h (from the paper text: "Table 3 caption footnote states 'b mean residence time' and the table itself labels the parameter 'MRT (h)', indicating ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=donepezil
- population split: 'ir (n = 3)' subgroup of Lee_2022 (paper reports 5 populations: ir (n = 3), population mean, sr-1 (n = 3), sr-2 (n = 3), sr-3 (n = 3))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bakker_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Bakker_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pharmaceutics-14-01226-t004:row1:col1 = 'V1'
- unparsed cell pharmaceutics-14-01226-t004:row2:col1 = 'V2'
- unparsed cell pharmaceutics-14-01226-t004:row7:col1 = 'AM50·in vivo'
- unparsed cell pharmaceutics-14-01226-t004:row9:col1 = 'Vmax·in vivo·SR-1'
- unparsed cell pharmaceutics-14-01226-t004:row10:col1 = 'Vmax·in vivo·SR-2'
- unparsed cell pharmaceutics-14-01226-t004:row11:col1 = 'Vmax·in vivo·SR-3'
- companion parameter table 3 transcribed (32 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 2.73 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf]` | 13.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf]` |  | 13.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast]` | 11.08 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast]` |  | 11.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 5941.79 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 5941.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 3.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 3.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt (h) b]` | 6.55 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt (h) b]` |  | 6.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 5.39 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 5.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 2679.87 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` |  | 2679.87 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | donepezil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | donepezil | unknown | mismatch |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Lee_2022_table_3:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Lee_2022_table_3:row7:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Lee_2022_table_3:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bakker_2021:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Lee_2022_table_3:row8:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Lee_2022_table_3:row1:col1'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Lee_2022_table_3:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Lee_2022_table_3:row6:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Bakker_2021:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 357 L/h | ['Lee_2022_table_3:row7:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.68e+03 L | ['Lee_2022_table_3:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=donepezil) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 1.458e-06 |  | non-numeric value |
| T1_cmax | reference | fail | 3.19e-06 | 1.458e-06 | 0.457 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 7.8e-07 | 1.458e-06 | 1.869 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 6.84 | 1.458e-06 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8.91 | 1.458e-06 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 1.458e-06 |  | non-numeric value |
| T1_tmax | reference | fail | 1 | 1.802 | 1.802 | h→SI vs simulated h |
| T1_tmax | reference | pass | 1.5 | 1.802 | 1.201 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir_modelica.zip" download>Donepezil_Lee2022_ir_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir_fmi.zip" download>Donepezil_Lee2022_ir_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir_matlab.zip" download>Donepezil_Lee2022_ir_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir_matlab_simbio.zip" download>Donepezil_Lee2022_ir_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir_sbml.zip" download>Donepezil_Lee2022_ir_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir_cellml.zip" download>Donepezil_Lee2022_ir_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3795 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1944 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4.562e-06 | kg |
| input | model | `Cl` | 9.903e-05 | m3/s |
| input | model | `VdPerKg` | 0.03828 | m3/kg |
| input | model | `ka` | 0.0007583 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Lee DY, Shin S, Kim TH, Shin BS. Establishment of Level a In Vitro-In Vivo Correlation (IVIVC) via Extended DoE-IVIVC Model: A Donepezil Case Study. Pharmaceutics 14(6) (2022). [doi:10.3390/pharmaceutics14061226](https://doi.org/10.3390/pharmaceutics14061226)

**This record:** Pharmacolibrary v26.09, model `Donepezil_Lee2022_ir`. <https://pharmacolibrary.github.io/#/drugs/drug_donepezil/Donepezil_Lee2022_ir>

```bibtex
@misc{pharmacolibrary_DonepezilLee2022ir,
  title  = {{Pharmacolibrary model Donepezil_Lee2022_ir}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_donepezil/Donepezil_Lee2022_ir},
  note   = {Parameters from doi:10.3390/pharmaceutics14061226},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 4.562 mg, single dose, first-order absorption (ka 2.73 /h, lag 32.4 min, F 1). Doses in the paper: 4.562, 5 mg.

<dbs-fmusim paramsurl="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_donepezil/Donepezil_Lee2022_ir/Donepezil_Lee2022_ir_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Donepezil_Lee2022_ir_params.json` · controls `Donepezil_Lee2022_ir_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Lee2022_ir&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Lee2022_ir%0APaper%3A%20Lee_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_donepezil/Donepezil_Lee2022_ir%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 01:30 UTC</sub>
