<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/&quot;},{&quot;label&quot;:&quot;Drevin_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_daunorubicin&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_daunorubicin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_daunorubicin.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_only_present&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_only_present&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_only_present_study&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_only_present_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daunorubicin — `Daunorubicin_Drevin2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-10-05 09:26 UTC) predates the latest extraction (2026-10-06 16:52 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="daunorubicin" model-id="Daunorubicin_Drevin2022_reference" status="extracted" stale="true" population="adults with acute myeloid leukaemia" measured-compound="daunorubicin and daunorubicinol" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Drevin G, Briet M, Bazzoli C, Gyan E, Schmidt A, Dombret H et al. Daunorubicin and Its Active Metabolite Pharmacokinetic Profiles in Acute Myeloid Leukaemia Patients: A Pharmacokinetic Ancillary Study of the BIG-1 Trial. Pharmaceutics 14(4) (2022).
  ·  DOI: [10.3390/pharmaceutics14040792](https://doi.org/10.3390/pharmaceutics14040792)

## Population and dosing

**Population:** adults with acute myeloid leukaemia · condition acute myeloid leukaemia · age group adult · n = 14.

**Dosing:** 90 mg/m2/day, iv, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed daunorubicin, measured daunorubicin and daunorubicinol.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| V1 (L) | V1 | 21.1 | L |
| V2 (L) | V2 | 1449 | L |
| V3 (L) | V3 | 323 | L |
| Q1 (L/h) | Q | 69.4 | L/h |
| Q2 (L/h) | Q2 | 125 | L/h |
| Q3 (L/h) | Q | 591 | L/h |
| V5 (L) | V2 | 536 | L |
| Kp1m (1/h) | kfm | 3.73 | 1/h |
| Clm (L/h) | CL | 41.3 | L/h |
| β BSA (m2) on Clm | equation variable | 1.04 |  |
| theta_q335_creatinine | theta_q335_creatinine | -0.027 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.045), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — daunorubicin: V1 22.4 L, V2 1.39e+03 L, V3 330 L, Q 75.1 L/h, Q2 135 L/h; daunorubicinol: Q 573 L/h, V2 79.2 L, allometric_exponent 0.98, kfm 3.9 1/h, CL 35.8 L/h, CL 1.04.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which molecule was measured: this record has daunorubicin and daunorubicinol, the second reading daunorubicin; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1 (L) | `Q63` · V1 | 21.1 | L | 0.0211 | m3 | l | exact (1) | pharmaceutics-14-00792-t002:row3:col1, pharmaceutics-14-00792-t002:row3:col2 |
| V2 (L) | `Q64` · V2 | 1449 | L | 1.449 | m3 | l | exact (1) | pharmaceutics-14-00792-t002:row4:col1, pharmaceutics-14-00792-t002:row4:col2 |
| V3 (L) | `Q77` · V3 | 323 | L | 0.323 | m3 | l | exact (1) | pharmaceutics-14-00792-t002:row5:col1, pharmaceutics-14-00792-t002:row5:col2 |
| Q1 (L/h) | `Q30` · Q | 69.4 | L/h | 1.928e-05 | m3/s | l/h | exact (1) | pharmaceutics-14-00792-t002:row6:col1, pharmaceutics-14-00792-t002:row6:col2 |
| Q2 (L/h) | `Q99` · Q2 | 125 | L/h | 3.472e-05 | m3/s | l/h | exact (1) | pharmaceutics-14-00792-t002:row7:col1, pharmaceutics-14-00792-t002:row7:col2 |
| Q3 (L/h) | `Q30` · Q | 591 | L/h | 0.0001642 | m3/s | l/h | exact (1) | pharmaceutics-14-00792-t002:row8:col1, pharmaceutics-14-00792-t002:row8:col2 |
| V5 (L) | `Q64` · V2 | 536 | L | 0.536 | m3 | l | exact (1) | pharmaceutics-14-00792-t002:row9:col1, pharmaceutics-14-00792-t002:row9:col2 |
| Kp1m (1/h) | `Q305` · kfm | 3.73 | 1/h | 0.001036 | 1/s | 1/h | exact (1) | pharmaceutics-14-00792-t002:row11:col1, pharmaceutics-14-00792-t002:row11:col2 |
| Clm (L/h) | `Q22` · CL | 41.3 | L/h | 1.147e-05 | m3/s | l/h | exact (1) | pharmaceutics-14-00792-t002:row12:col1, pharmaceutics-14-00792-t002:row12:col2 |
| β BSA (m2) on Clm | `Q900` · equation variable | 1.04 |  |  |  |  | llm_corrected (0.6) | pharmaceutics-14-00792-t002:row14:col1 |
| theta_q335_creatinine | `Q900` · theta_q335_creatinine | -0.027 |  |  |  |  |  | pharmaceutics-14-00792-t002:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'β BSA (m2) on V5' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-00792-t002:row10:col1'])
- dropped duplicate Q305 ('Kp3m (1/h)', value '0.25') — already have one for this compound
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Kp1m (1/h)' → 1/h (from the popPK convention: 'The paper describes Kp1m as a metabolite transformation rate but does not state its unit. As a first-order transformatio')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daunorubicin and daunorubicinol
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [1]
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 20 linked by role; re-tagged parent→daunorubicin and daunorubicinol ×2, parent→daunorubicinol ×13
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.045 (1/22 fields) | 21 |
| `gpt-oss:120b` | confirmed | 1.0 (12/12 fields) | none |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['daunorubicin', 'daunorubicinol', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[clm]` |  | 35.8 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm]` | 41.3 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[creatinine_mol_l_on_clm]` |  | -0.027 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kp1m]` |  | 3.9 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kp1m]` | 3.73 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q1].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[q1].value` | 69.4 | 75.1 | mismatch |
| `qwen3.8-27b` | `parameters[q2]` | 125 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q3]` |  | 573 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q3]` | 591 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q335_creatinine]` | -0.027 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` |  | 22.37 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` | 21.1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2].value` | 1449 | 1393 | mismatch |
| `qwen3.8-27b` | `parameters[v3].value` | 323 | 330 | mismatch |
| `qwen3.8-27b` | `parameters[v5]` | 536 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[β bsa (m2) on clm]` | 1.04 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[β bsa (m2) on v5]` |  | 0.98 | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | daunorubicin and daunorubicinol | daunorubicin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-00792-t002:row12:col1', 'pharmaceutics-14-00792-t002:row12:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-00792-t002:row6:col1', 'pharmaceutics-14-00792-t002:row6:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-00792-t002:row8:col1', 'pharmaceutics-14-00792-t002:row8:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['pharmaceutics-14-00792-t002:row11:col1', 'pharmaceutics-14-00792-t002:row11:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-14-00792-t002:row3:col1', 'pharmaceutics-14-00792-t002:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-14-00792-t002:row4:col1', 'pharmaceutics-14-00792-t002:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-14-00792-t002:row9:col1', 'pharmaceutics-14-00792-t002:row9:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['pharmaceutics-14-00792-t002:row5:col1', 'pharmaceutics-14-00792-t002:row5:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-00792-t002:row7:col1', 'pharmaceutics-14-00792-t002:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 41.3 | ['pharmaceutics-14-00792-t002:row12:col1', 'pharmaceutics-14-00792-t002:row12:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 41.3 L/h | ['pharmaceutics-14-00792-t002:row12:col1', 'pharmaceutics-14-00792-t002:row12:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 21.1 L | ['pharmaceutics-14-00792-t002:row3:col1', 'pharmaceutics-14-00792-t002:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.45e+03 L | ['pharmaceutics-14-00792-t002:row4:col1', 'pharmaceutics-14-00792-t002:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 536 L | ['pharmaceutics-14-00792-t002:row9:col1', 'pharmaceutics-14-00792-t002:row9:col2'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_matlab.zip" download>Daunorubicin_Drevin2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_matlab_simbio.zip" download>Daunorubicin_Drevin2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_sbml.zip" download>Daunorubicin_Drevin2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_cellml.zip" download>Daunorubicin_Drevin2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Drevin G, Briet M, Bazzoli C, Gyan E, Schmidt A, Dombret H et al. Daunorubicin and Its Active Metabolite Pharmacokinetic Profiles in Acute Myeloid Leukaemia Patients: A Pharmacokinetic Ancillary Study of the BIG-1 Trial. Pharmaceutics 14(4) (2022). [doi:10.3390/pharmaceutics14040792](https://doi.org/10.3390/pharmaceutics14040792)

**This record:** Pharmacolibrary v26.09, model `Daunorubicin_Drevin2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference>

```bibtex
@misc{pharmacolibrary_DaunorubicinDrevin2022reference,
  title  = {{Pharmacolibrary model Daunorubicin_Drevin2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics14040792},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaunorubicin%5D%20Daunorubicin_Drevin2022_reference&body=Drug%3A%20daunorubicin%0ARecord%3A%20Daunorubicin_Drevin2022_reference%0APaper%3A%20Drevin_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:52 UTC</sub>
