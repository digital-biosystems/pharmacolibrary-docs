<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;tegafur&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/&quot;},{&quot;label&quot;:&quot;Kim_2017 \u00b7 multiple_dose&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tegafur_Kim2017_multiple_dose&quot;,&quot;label&quot;:&quot;Kim_2017_multiple_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tegafur_Kim2017_single_dose&quot;,&quot;label&quot;:&quot;Kim_2017_single_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_single_dose.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tegafur_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tegafur — `Tegafur_Kim2017_multiple_dose`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Rejected), but the paper was screened again on 2026-10-07 17:20 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="tegafur" model-id="Tegafur_Kim2017_multiple_dose" status="extracted" stale="true" population="rats" measured-compound="tegafur" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Kim TH, Shin S, Shin JC, Bulitta JB, Weon KY, Yoo SD et al. Effect of Sipjeondaebo-Tang on the Pharmacokinetics of S-1, an Anticancer Agent, in Rats Evaluated by Population Pharmacokinetic Modeling. Molecules (Basel, Switzerland) 22(9) (2017).
  ·  DOI: [10.3390/molecules22091488](https://doi.org/10.3390/molecules22091488)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 350 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose.svg" alt="Tegafur_Kim2017_multiple_dose diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| AUCall (ng·h/mL) | AUClast | 46842.4 | ng·h/mL |
| AUCinf (ng·h/mL) | AUC∞ | 47461.3 | ng·h/mL |
| CL/F (mL/min/kg) | CL/F | 1.8 | mL/min/kg |
| Vz/F (L/kg) | V/F | 0.5 | L/kg |
| Tmax (h) | tmax | 2.4 | h |
| Ka | kabs | 0.08 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tegafur parent–metabolite model for Sprague-Dawley rats fails to reproduce the paper's terminal half-life (2.3 h vs 3.23 h) and tmax (1.7 h vs 3.06 h), uses a defaulted ka, and its structure does not match the reported parent–metabolite topology, so it was rejected.**

Simulated as the paper dosed it, the model's terminal half-life is 3.23 h against the paper's 2.3 h (ratio 1.4027) and its tmax is 3.06 h against 1.7 h (ratio 1.7981); other reported tmax values (0.6 h, 1.2 h) and half-lives (1.2 h, 0.32166666666666666 h) also miss by ratios up to 10.0294. The model structure is a one-compartment enteral model rather than the parent–metabolite structure linking tegafur to 5-FU via Kfm, and the simulated output is the parent compartment rather than the measured analyte. The absorption rate constant ka and Tlag were left at library defaults instead of values from the paper, and bioavailability was assumed F=1 with Fm=1 and no molar correction, giving an apparent parameterization. One reported unit could not be converted to SI, so that parameter reached the model builder without an SI value. Extracted — tegafur: AUClast 4.68e+04 ng·h/mL, AUC∞ 4.75e+04 ng·h/mL, CL/F 1.8 mL/min/kg, V/F 0.5 L/kg, tmax 2.4 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.08, the second reading none. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUCall (ng·h/mL) | `Q74` · AUClast | 46842.4 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Kim_2017_table_1:row4:col4 |
| AUCinf (ng·h/mL) | `Q17` · AUC∞ | 47461.3 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Kim_2017_table_1:row5:col4 |
| CL/F (mL/min/kg) | `Q27` · CL/F | 1.8 | mL/min/kg | 2.1e-06 | m3/s | ml/(min·kg) | exact (1) | Kim_2017_table_1:row6:col4 |
| Vz/F (L/kg) | `Q76` · V/F | 0.5 | L/kg | 0.035 | m3 | l/kg | exact (1) | Kim_2017_table_1:row7:col4 |
| Tmax (h) | `Q56` · tmax | 2.4 | h | 8640 | s | h | exact (1) | Kim_2017_table_1:row9:col4, Kim_2017_table_1:row15:col4 |
| Ka | `Q49` · kabs | 0.08 | h-1 | 2.222e-05 | 1/s | 1/h | review_gapfill (0.7) | Zuo_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Tegafur' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row1:col4', 'Kim_2017_table_1:row1:col5'])
- dropped unlinked row (NIL): '5-FU' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row8:col4', 'Kim_2017_table_1:row8:col5'])
- dropped unlinked row (NIL): 'Gimeracil' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row14:col4', 'Kim_2017_table_1:row14:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tegafur
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [0] (site presystemic: 'To determine the effect of SDT multiple dose pretreatment, the oral absorption rate of tegafur (Ka), metabolic conversio')
- population split: 'multiple dose' subgroup of Kim_2017 (paper reports 3 populations: multiple dose, population mean (bsv), single dose)
- row roles: 2 per-group rows of tegafur absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of 5-FU formation_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of 5-FU clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 24 linked by role; re-tagged parent→5-FU ×22, parent→gimeracil ×5
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Zuo_2024's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell Kim_2017_table_1:row1:col3 = '3.5 ± 0.7 *'
- unparsed cell Kim_2017_table_1:row2:col4 = '3.2 ± 1.6 *'
- unparsed cell Kim_2017_table_1:row3:col4 = '4960.0 ± 431.9 *'
- unparsed cell Kim_2017_table_1:row7:col2 = '0.6 ± 0.2 *'
- unparsed cell Kim_2017_table_1:row10:col4 = '64.3 ± 23.0 *'
- unparsed cell Kim_2017_table_1:row11:col4 = '362.7 ± 96.2 *'
- unparsed cell Kim_2017_table_1:row12:col4 = '429.6 ± 83.2 *'
- unparsed cell Kim_2017_table_1:row13:col4 = '1.5 ± 0.5 *'
- unparsed cell Kim_2017_table_1:row16:col4 = '142.3 ± 41.8 *'
- unparsed cell Kim_2017_table_1:row17:col4 = '180.2 ± 41.5 *'
- unparsed cell Kim_2017_table_1:row18:col4 = '247.4 ± 57.4 *'
- unparsed cell Kim_2017_table_1:row19:col4 = '101.9 ± 22.6 *'
- unparsed cell Kim_2017_table_1:row20:col4 = '6.8 ± 0.9 *'
- companion parameter table 1 transcribed (73 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.08 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Kim_2017_table_1:row5:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Kim_2017_table_1:row6:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Zuo_2024:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kim_2017_table_1:row9:col4', 'Kim_2017_table_1:row15:col4'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Kim_2017_table_1:row4:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kim_2017_table_1:row7:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.56 L/h | ['Kim_2017_table_1:row6:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 35 L | ['Kim_2017_table_1:row7:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=tegafur) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion |  | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | deviation_id: not acceptable; defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable; input_model: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.005281 |  | non-numeric value |
| T1_cmax | reference | skipped | 72.6 | 0.005281 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 40.9 | 0.005281 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_t_half_terminal | reference | fail | 2.3 | 3.226 | 1.403 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.6 | 3.226 | 1.241 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.2 | 3.226 | 2.688 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 3.226 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 0.3217 | 3.226 | 10.03 | min→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 3.226 |  | non-numeric value |
| T1_tmax | reference | fail | 1.7 | 3.057 | 1.798 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.6 | 3.057 | 5.095 | h→SI vs simulated h |
| T1_tmax | reference | pass | 3.2 | 3.057 | 0.9553 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.2 | 3.057 | 2.547 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose_modelica.zip" download>Tegafur_Kim2017_multiple_dose_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose_fmi.zip" download>Tegafur_Kim2017_multiple_dose_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose_matlab.zip" download>Tegafur_Kim2017_multiple_dose_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose_matlab_simbio.zip" download>Tegafur_Kim2017_multiple_dose_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose_sbml.zip" download>Tegafur_Kim2017_multiple_dose_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose_cellml.zip" download>Tegafur_Kim2017_multiple_dose_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2002 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00035 | kg |
| input | model | `Cl` | 2.1e-06 | m3/s |
| input | model | `VdPerKg` | 0.0005 | m3/kg |
| input | model | `ka` | 2.222e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kim TH, Shin S, Shin JC, Bulitta JB, Weon KY, Yoo SD et al. Effect of Sipjeondaebo-Tang on the Pharmacokinetics of S-1, an Anticancer Agent, in Rats Evaluated by Population Pharmacokinetic Modeling. Molecules (Basel, Switzerland) 22(9) (2017). [doi:10.3390/molecules22091488](https://doi.org/10.3390/molecules22091488)

**This record:** Pharmacolibrary v26.09, model `Tegafur_Kim2017_multiple_dose`. <https://pharmacolibrary.github.io/#/drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose>

```bibtex
@misc{pharmacolibrary_TegafurKim2017multipledose,
  title  = {{Pharmacolibrary model Tegafur_Kim2017_multiple_dose}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose},
  note   = {Parameters from doi:10.3390/molecules22091488},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 350 mg, single dose, first-order absorption (ka 0.08 /h, F 1). Dose in the paper: 350 mg.

<dbs-fmusim paramsurl="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose/Tegafur_Kim2017_multiple_dose_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tegafur_Kim2017_multiple_dose_params.json` · controls `Tegafur_Kim2017_multiple_dose_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btegafur%5D%20Tegafur_Kim2017_multiple_dose&body=Drug%3A%20tegafur%0ARecord%3A%20Tegafur_Kim2017_multiple_dose%0APaper%3A%20Kim_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:20 UTC</sub>
