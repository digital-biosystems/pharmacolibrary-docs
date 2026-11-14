<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Exotoxin A (Pseudomonas aeruginosa)&quot;,&quot;href&quot;:&quot;drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/&quot;},{&quot;label&quot;:&quot;Liu-Chittenden_2015 \u00b7 c2d1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ExotoxinAPseudomonasAeruginosa_Benhar1995_reference&quot;,&quot;label&quot;:&quot;Benhar_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_Benhar1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ExotoxinAPseudomonasAeruginosa_Kuan1994_reference&quot;,&quot;label&quot;:&quot;Kuan_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_Kuan1994_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Exotoxin A (Pseudomonas aeruginosa) — `ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for exotoxin a pseudomonas aeruginosa's clearance and volume of distribution — all 8 extracted parameters describe IL-13-PE (recombinant human interleukin-13 fused to truncated Pseudomonas exotoxin A), not exotoxin a pseudomonas aeruginosa; t6_deviations.

<div class="pk-model-meta" hidden drug="Exotoxin A (Pseudomonas aeruginosa)" model-id="ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1" status="model_quarantined" stale="false" population="adult patients with metastatic adrenocortical carcinoma with confirmed IL-13 receptor alpha 2 (IL-13Ralpha2) expression in their tumors" measured-compound="IL-13-PE (serum concentration of the fusion protein, e.g. Cmax 21.0 ng/mL, terminal half-life 30-39 min at MTD)" parameterization="mechanistic" topology="1C"></div>

## Citation
Liu-Chittenden Y, Jain M, Kumar P, Patel D, Aufforth R, Neychev V et al. Phase I trial of systemic intravenous infusion of interleukin-13-Pseudomonas exotoxin in patients with metastatic adrenocortical carcinoma. Cancer medicine 4(7):1060–1068 (2015).
  ·  DOI: [10.1002/cam4.449](https://doi.org/10.1002/cam4.449)

## Population and dosing

**Population:** adult patients with metastatic adrenocortical carcinoma with confirmed IL-13 receptor alpha 2 (IL-13Ralpha2) expression in their tumors · condition metastatic adrenocortical carcinoma (Phase I dose-escalation oncology trial) · age group adult · n = 8.

**Dosing:** 0.07, 0.14 mg, iv, multiple, every 48 h.

**Dosed compound ≠ measured compound:** dosed IL-13-PE (recombinant fusion of human interleukin-13 and truncated Pseudomonas exotoxin A), given IV at 1-2 ug/kg on days 1, 3 and 5 of a 4-week cycle, measured IL-13-PE (serum concentration of the fusion protein, e.g. Cmax 21.0 ng/mL, terminal half-life 30-39 min at MTD).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) / GM | Cmax | 79.9 | ng/mL |
| Cmax (ng/mL) / GMR | Cmax_ratio | 665 | ng/mL |
| AUClast (min·ng/mL) / GM | AUClast | 92 | min·ng/mL |
| AUC0–∞ (min·ng/mL) / GM | AUC∞ | 79 | min·ng/mL |
| % AUCextrap / GM | AUC%ext | 87 | GM |
| t1/2 (min) / GM | t1/2z | 15 | min |
| Vz (mL) / GM | V | 78 | mL |
| CL (mL/min) / GM | CL | 87 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for exotoxin a pseudomonas aeruginosa's clearance and volume of distribution — all 8 extracted parameters describe IL-13-PE (recombinant human interleukin-13 fused to truncated Pseudomonas exotoxin A), not exotoxin a pseudomonas aeruginosa; t6_deviations.**

The model was built, but exotoxin a pseudomonas aeruginosa's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. A reported unit could not be converted (Cmax_ratio and AUC%ext), so that value has no SI equivalent. Extracted — IL-13-PE (recombinant human interleukin-13 fused to truncated Pseudomonas exotoxin A): Cmax 79.9 ng/mL, Cmax_ratio 665 ng/mL, AUClast 92 min·ng/mL, AUC∞ 79 min·ng/mL, AUC%ext 87 GM, t1/2z 15 min, V 78 mL, CL 87 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has IL-13-PE (recombinant fusion of human interleukin-13 and truncated Pseudomonas exotoxin A), given IV at 1-2 ug/kg on days 1, 3 and 5 of a 4-week cycle, the second reading IL-13-PE (interleukin-13-Pseudomonas exotoxin); it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) / GM | `Q32` · Cmax | 79.9 | ng/mL | 7.99e-05 | kg/m3 | ng/ml | llm_confirmed (0.6) | tbl3:row4:col3 |
| Cmax (ng/mL) / GMR | `Q33` · Cmax_ratio | 665 | ng/mL |  |  | ng/ml | llm_corrected (0.6) | tbl3:row4:col5 |
| AUClast (min·ng/mL) / GM | `Q74` · AUClast | 92 | min·ng/mL | 0.00552 | kg*s/m3 | (min·ng)/ml | llm_confirmed (0.6) | tbl3:row4:col6 |
| AUC0–∞ (min·ng/mL) / GM | `Q17` · AUC∞ | 79 | min·ng/mL | 0.00474 | kg*s/m3 | (min·ng)/ml | llm_confirmed (0.6) | tbl3:row4:col9 |
| % AUCextrap / GM | `Q84` · AUC%ext | 87 | GM |  |  | g·m | llm (0.6) | tbl3:row4:col12 |
| t1/2 (min) / GM | `Q57` · t1/2z | 15 | min | 900 | s | min | half_life_rule (0.95) | tbl3:row4:col14 |
| Vz (mL) / GM | `Q61` · V | 78 | mL | 7.8e-05 | m3 | ml | llm_confirmed (0.6) | tbl3:row4:col16 |
| CL (mL/min) / GM | `Q22` · CL | 87 | mL/min | 1.45e-06 | m3/s | ml/min | llm_confirmed (0.6) | tbl3:row4:col18 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Cycle, day'; source reconciliation required
- table representations disagree for 'No. of patients'; source reconciliation required
- table representations disagree for 'Cmax (ng/mL) / GM'; source reconciliation required
- table representations disagree for 'Cmax (ng/mL) / CV'; source reconciliation required
- table representations disagree for 'Cmax (ng/mL) / GMR'; source reconciliation required
- table representations disagree for 'AUClast (min·ng/mL) / GM'; source reconciliation required
- table representations disagree for 'AUClast (min·ng/mL) / CV'; source reconciliation required
- table representations disagree for 'AUClast (min·ng/mL) / GMR'; source reconciliation required
- table representations disagree for 'AUC0–∞ (min·ng/mL) / GM'; source reconciliation required
- table representations disagree for 'AUC0–∞ (min·ng/mL) / CV'; source reconciliation required
- table representations disagree for 'AUC0–∞ (min·ng/mL) / GMR'; source reconciliation required
- table representations disagree for '% AUCextrap / GM'; source reconciliation required
- table representations disagree for '% AUCextrap / CV'; source reconciliation required
- table representations disagree for 't1/2 (min) / GM'; source reconciliation required
- table representations disagree for 't1/2 (min) / CV'; source reconciliation required
- table representations disagree for 'Vz (mL) / GM'; source reconciliation required
- table representations disagree for 'Vz (mL) / CV'; source reconciliation required
- table representations disagree for 'CL (mL/min) / GM'; source reconciliation required
- dropped unlinked row (NIL): 'Cycle, day' — extend the ontology if this is a real PK parameter (source ['tbl3:row4:col1'])
- dropped unlinked row (NIL): 'No. of patients' — extend the ontology if this is a real PK parameter (source ['tbl3:row4:col2'])
- dropped unlinked row (NIL): 'Cmax (ng/mL) / CV' — extend the ontology if this is a real PK parameter (source ['tbl3:row4:col4'])
- dropped unlinked row (NIL): 'AUClast (min·ng/mL) / CV' — extend the ontology if this is a real PK parameter (source ['tbl3:row4:col7'])
- dropped duplicate Q74 ('AUClast (min·ng/mL) / GMR', value '836') — already have one for this compound
- dropped unlinked row (NIL): 'AUC0–∞ (min·ng/mL) / CV' — extend the ontology if this is a real PK parameter (source ['tbl3:row4:col10'])
- dropped duplicate Q17 ('AUC0–∞ (min·ng/mL) / GMR', value '15') — already have one for this compound
- unit_dimension_unknown: 'GM' (AUC%ext)
- dropped unlinked row (NIL): '% AUCextrap / CV' — extend the ontology if this is a real PK parameter (source ['tbl3:row4:col13'])
- relinked 't1/2 (min) / CV' Q100 → Q57: a half-life by its label (the unit decides, not the label)
- dropped duplicate Q57 ('t1/2 (min) / CV', value '7320') — already have one for this compound
- dropped unlinked row (NIL): 'Vz (mL) / CV' — extend the ontology if this is a real PK parameter (source ['tbl3:row4:col17'])
- dropped value-less row: 'Table 3. Geometric mean (GM) pharmacokinetic parameters of IL-13-PE treatment'
- dropped value-less row: 'IL-13-PE, interleukin-13-Pseudomonas exotoxin'
- dropped value-less row: 'Cmax, maximum serum concentration'
- dropped value-less row: 't1/2, terminal half-life'
- dropped value-less row: 'AUClast, area under the curve from time 0 to last quantifiable time point'
- dropped value-less row: 'AUC0–∞, area under the curve extrapolated from time 0 to infinity'
- dropped value-less row: '% AUCextrap, percentage AUC extrapolation'
- dropped value-less row: 'Vz, volume of distribution'
- dropped value-less row: 'CL, clearance'
- dropped value-less row: 'CV, coefficient of variation'
- dropped value-less row: 'GMR, geometric mean ratio'
- dropped value-less row: 'NA, not applicable'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=IL-13-PE (serum concentration of the fusion protein, e.g. Cmax 21.0 ng/mL, terminal half-life 30-39 min at MTD)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'c2d1' subgroup of Liu-Chittenden_2015 (paper reports 4 populations: 1 μg/kg, 2 μg/kg, c1d3, c2d1)
- molar mass: no plausible PubChem entry for 'IL-13-PE (serum concentration of the fusion protein, e.g. Cmax 21.0 ng/mL, terminal half-life 30-39 min at MTD)' ('interleukin-13-Pseudomonas exotoxin A fusion protein') — left in mass units
- molar mass: none found for 'exotoxin_a_pseudomonas_aeruginosa' — its concentrations stay mass-only
- molar mass: none found for 'IL-13-PE (serum concentration of the fusion protein, e.g. Cmax 21.0 ng/mL, terminal half-life 30-39 min at MTD)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'IL-13-PE (serum concentration of the fusion protein, e.g. Cmax 21.0 ng/mL, terminal half-life 30-39 min at MTD)', not exotoxin_a_pseudomonas_aeruginosa — the review values are the parent's

**Extraction notes:**
- table tbl3: ragged_grid
- transposed table tbl3: logical view retains original source coordinates
- table tbl3: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cmax (ng/ml) / gmr]` | 665 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | IL-13-PE (recombinant fusion of human interleukin-13 and truncated Pseudomonas exotoxin A), given IV at 1-2 ug/kg on days 1, 3 and 5 of a 4-week cycle | IL-13-PE (interleukin-13-Pseudomonas exotoxin) | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | IL-13-PE (serum concentration of the fusion protein, e.g. Cmax 21.0 ng/mL, terminal half-life 30-39 min at MTD) | IL-13-PE (interleukin-13-Pseudomonas exotoxin) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['tbl3:row4:col9'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl3:row4:col18'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tbl3:row4:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['tbl3:row4:col14'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl3:row4:col16'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 |  | ['tbl3:row4:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 87 | ['tbl3:row4:col18'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.22 L/h | ['tbl3:row4:col18'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.078 L | ['tbl3:row4:col16'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 17.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 41.2 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1_matlab.zip" download>ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1_matlab_simbio.zip" download>ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1_sbml.zip" download>ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1_cellml.zip" download>ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Liu-Chittenden Y, Jain M, Kumar P, Patel D, Aufforth R, Neychev V et al. Phase I trial of systemic intravenous infusion of interleukin-13-Pseudomonas exotoxin in patients with metastatic adrenocortical carcinoma. Cancer medicine 4(7):1060–1068 (2015). [doi:10.1002/cam4.449](https://doi.org/10.1002/cam4.449)

**This record:** Pharmacolibrary, model `ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1`. <https://pharmacolibrary.github.io/#/drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1>

```bibtex
@misc{pharmacolibrary_ExotoxinAPseudomonasAeruginosaLiuChittenden2015c2d1,
  title  = {{Pharmacolibrary model ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1},
  note   = {Parameters from doi:10.1002/cam4.449},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bexotoxin_a_pseudomonas_aeruginosa%5D%20ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1&body=Drug%3A%20exotoxin_a_pseudomonas_aeruginosa%0ARecord%3A%20ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1%0APaper%3A%20Liu-Chittenden_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_exotoxin_a_pseudomonas_aeruginosa/ExotoxinAPseudomonasAeruginosa_LiuChittenden2015_c2d1%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 21:16 UTC</sub>
