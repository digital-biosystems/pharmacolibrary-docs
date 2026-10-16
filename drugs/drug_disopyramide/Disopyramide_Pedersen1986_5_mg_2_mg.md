<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;disopyramide&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/&quot;},{&quot;label&quot;:&quot;Pedersen_1986 \u00b7 5_mg_2_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Disopyramide_Bryson1978_reference&quot;,&quot;label&quot;:&quot;Bryson_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Bryson1978_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Disopyramide_Aso2001_reference&quot;,&quot;label&quot;:&quot;Aso_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Aso2001_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Horie_2001_IRI&quot;,&quot;label&quot;:&quot;Horie_2001 \u00b7 IRI&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/pd_Horie_2001_IRI.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# disopyramide — `Disopyramide_Pedersen1986_5_mg_2_mg`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**No value for disopyramide's clearance, central→peripheral rate constant and peripheral→central rate constant; t6_deviations.**

The model was built, but disopyramide's clearance, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. A reported unit could not be converted (CLnorm and CL), so that value has no SI equivalent. Extracted — disopyramide: V 0.7 l/kg, CLnorm 0.65 ml/min./kg, kel 0.96 hr-1, V1 0.84 l/kg, kfm 0.81 hr-1, Vnorm 1.37 l/kg, CL 0.98 ml/min./kg, AUC ratio 0.68.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of cl: this record has 0.98, the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Pedersen LE et al., The pharmacokinetics and protein bindin…, Acta pharmacologica et toxi… (1986)
  ·  DOI: [10.1111/j.1600-0773.1986.tb00110.x](https://doi.org/10.1111/j.1600-0773.1986.tb00110.x)

<div class="pk-model-meta" hidden drug="disopyramide" model-id="Disopyramide_Pedersen1986_5_mg_2_mg" status="model_quarantined" stale="false" population="pigs" measured-compound="disopyramide" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vd,f (l/kg) | `Q61` · V | 0.70 | l/kg | 0.049 | [l] / [kg] | not captured | llm_confirmed (0.6) | Pedersen_1986_table_p4_2:row1:col10 | — | not captured |
| Clf (ml/min./kg) | `Q354` · CLnorm | 0.65 | ml/min./kg | not captured | [ml] / [[min] · [kg]] | not captured | llm (0.6) | Pedersen_1986_table_p4_2:row2:col10 | — | not captured |
| βf (hr-1) | `Q47` · kel | 0.96 | hr-1 | 0.0002666666666666667 | [1] / [h] | not captured | llm (0.6) | Pedersen_1986_table_p4_2:row3:col10 | — | not captured |
| V1 (l/kg) | `Q63` · V1 | 0.84 | l/kg | 0.058800000000000005 | [l] / [kg] | not captured | exact (1.0) | Pedersen_1986_table_p4_2:row4:col10 | — | not captured |
| kf (hr-1) | `Q305` · kfm | 0.81 | hr-1 | 0.00022500000000000002 | [1] / [h] | not captured | exact (1.0) | Pedersen_1986_table_p4_2:row5:col10 | — | not captured |
| Vd,tot (l/kg) | `Q352` · Vnorm | 1.37 | l/kg | 0.09590000000000001 | [l] / [kg] | not captured | llm_corrected (0.6) | Pedersen_1986_table_p4_2:row7:col10 | — | not captured |
| Cl (ml/min./kg) | `Q22` · CL | 0.98 | ml/min./kg | not captured | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Pedersen_1986_table_p4_2:row8:col10 | — | not captured |
| AUCtot/AUCf | `Q21` · AUC ratio | 0.68 | not captured | not captured | not captured | not captured | llm (0.6) | Pedersen_1986_table_p4_2:row10:col10 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q47 ('β (hr-1)', value '0.71') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=disopyramide
- population split: '5 mg/2 mg' subgroup of Pedersen_1986 (paper reports 12 populations: 5 mg/2 mg, ii (2), ii (5), iii (2), iii (5), iv, iv (2), iv (5), v, v (1), v (2), v (5))
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Pedersen_1986_table_1: no_numeric_grid
- table Pedersen_1986_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (0 record(s))
- table Pedersen_1986_table_3: unknown_column_role
- table Pedersen_1986_table_3: ragged_grid
- companion parameter table 3 transcribed (21 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clf].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[vd,tot]` | 1.37 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Pedersen_1986_table_p4_2:row8:col10'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Pedersen_1986_table_p4_2:row5:col10'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['Pedersen_1986_table_p4_2:row7:col10'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Pedersen_1986_table_p4_2:row2:col10'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Pedersen_1986_table_p4_2:row3:col10'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Pedersen_1986_table_p4_2:row1:col10'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Pedersen_1986_table_p4_2:row4:col10'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.98 | not captured | not captured | ['Pedersen_1986_table_p4_2:row8:col10'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 49 L | not captured | not captured | ['Pedersen_1986_table_p4_2:row1:col10'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 58.8 L | not captured | not captured | ['Pedersen_1986_table_p4_2:row4:col10'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_disopyramide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pedersen_1986` / `Pedersen_1986::5_mg_2_mg`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_disopyramide/models/modelica/_needs_review/Disopyramide_Pedersen1986_5_mg_2_mg.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_disopyramide/models/modelica/_needs_review/Disopyramide_Pedersen1986_5_mg_2_mg.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:14 UTC</sub>
