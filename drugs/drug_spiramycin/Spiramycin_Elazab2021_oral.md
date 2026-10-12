<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;spiramycin&quot;,&quot;href&quot;:&quot;drugs/drug_spiramycin/&quot;},{&quot;label&quot;:&quot;Elazab_2021 \u00b7 oral&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spiramycin_Elazab2021_iv&quot;,&quot;label&quot;:&quot;Elazab_2021_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_spiramycin/Spiramycin_Elazab2021_iv.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Spiramycin_Elazab2021_oral&quot;,&quot;label&quot;:&quot;Elazab_2021_oral&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_spiramycin/Spiramycin_Elazab2021_oral.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# spiramycin — `Spiramycin_Elazab2021_oral`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Cmax, AUClast and AUC∞), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has spiramycin, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Elazab ST et al., Pharmacokinetic/Pharmacodynamic Modelin…, Pathogens (Basel, Switzerla… (2021)
  ·  DOI: [10.3390/pathogens10101238](https://doi.org/10.3390/pathogens10101238)

<div class="pk-model-meta" hidden drug="spiramycin" model-id="Spiramycin_Elazab2021_oral" status="curated_candidate" stale="false" population="chickens" measured-compound="spiramycin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (µg/mL) | `Q32` · Cmax | 4.78 | µg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | pathogens-10-01238-t001:row1:col2 | — | not captured |
| Tmax (h) | `Q56` · tmax | 2.00 | h | 7200.0 | [h] | not captured | exact (1.0) | pathogens-10-01238-t001:row2:col2 | — | not captured |
| λz (1/h) | `Q47` · kel | 0.12 | 1/h | 3.3333333333333335e-05 | 1/h | not captured | exact (1.0) | pathogens-10-01238-t001:row3:col2 | — | not captured |
| T1/2 λz (h) | `Q57` · t1/2z | 6.25 | h | 22500.0 | [h] | not captured | space_fold (0.95) | pathogens-10-01238-t001:row4:col2 | — | not captured |
| AUC0-last (µg*h/mL) | `Q74` · AUClast | 23.11 | µg*h/mL | not captured | [[h] · [µg]] / [ml] | not captured | exact (1.0) | pathogens-10-01238-t001:row5:col2 | — | not captured |
| AUC0-∞ (µg*h/mL) | `Q17` · AUC∞ | 23.61 | µg*h/mL | not captured | [[h] · [µg]] / [ml] | not captured | exact (1.0) | pathogens-10-01238-t001:row6:col2 | — | not captured |
| Vz_F_obs (L/kg) | `Q61` · V | 6.58 | L/kg | 0.4606 | [l] / [kg] | not captured | llm (0.6) | pathogens-10-01238-t001:row8:col2 | — | not captured |
| MRT (h) | `Q53` · MRT | 6.63 | h | 23868.0 | [h] | not captured | exact (1.0) | pathogens-10-01238-t001:row11:col2 | — | not captured |
| F (%) | `Q40` · Fab | 77.18 | not captured | not captured | not captured | not captured | exact (1.0) | pathogens-10-01238-t001:row12:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Cl_F_obs (L/h/kg)' — extend the ontology if this is a real PK parameter (source ['pathogens-10-01238-t001:row10:col2'])
- implicit units: 'λz (1/h)' → 1/h (from the paper text: "Table 1 footnote: 'λz: the first order rate constant'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=spiramycin
- population split: 'oral' subgroup of Elazab_2021 (paper reports 2 populations: iv, oral)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- derived CL=55.272 L/h from Ke × V = CL (Q47 × Q61); not separately reported

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[cl_f_obs]` | not captured | 0.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz_f_obs].parameter_id` | Q61 | Q76 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | spiramycin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | spiramycin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['pathogens-10-01238-t001:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['pathogens-10-01238-t001:row1:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['pathogens-10-01238-t001:row3:col2'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['pathogens-10-01238-t001:row11:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['pathogens-10-01238-t001:row2:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['pathogens-10-01238-t001:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['pathogens-10-01238-t001:row8:col2'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['pathogens-10-01238-t001:row5:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 461 L | not captured | not captured | ['pathogens-10-01238-t001:row8:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_derived_parameters | not captured | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report | not captured | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable | not captured | pass | C_central (measured=spiramycin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | not captured | 5.776484662673732 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_spiramycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Elazab_2021` / `Elazab_2021::oral`)
- model: `../../../knowledgebase/drugs/drug_spiramycin/models/modelica/Spiramycin_Elazab2021_oral.mo`
- deviation: `../../../knowledgebase/drugs/drug_spiramycin/models/modelica/Spiramycin_Elazab2021_oral.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_spiramycin/models/modelica/Spiramycin_Elazab2021_oral.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_spiramycin/Spiramycin_Elazab2021_oral/Spiramycin_Elazab2021_oral_modelica.zip" download>Spiramycin_Elazab2021_oral_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_spiramycin/Spiramycin_Elazab2021_oral/Spiramycin_Elazab2021_oral_fmi.zip" download>Spiramycin_Elazab2021_oral_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_spiramycin/Spiramycin_Elazab2021_oral/Spiramycin_Elazab2021_oral.svg" alt="Spiramycin_Elazab2021_oral diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1190 mg infusion over 10 min, single dose. Dose in the paper: 1190 mg.

<dbs-fmusim paramsurl="drugs/drug_spiramycin/Spiramycin_Elazab2021_oral/Spiramycin_Elazab2021_oral_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_spiramycin/Spiramycin_Elazab2021_oral/Spiramycin_Elazab2021_oral_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Spiramycin_Elazab2021_oral_params.json` · controls `Spiramycin_Elazab2021_oral_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:24 UTC</sub>
