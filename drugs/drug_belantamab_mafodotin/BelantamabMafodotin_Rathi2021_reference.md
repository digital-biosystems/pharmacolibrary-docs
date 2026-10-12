<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Rathi_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belantamab mafodotin — `BelantamabMafodotin_Rathi2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 0.235).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (allometric_exponent and equation variable), so that value has no SI equivalent. Extracted — belantamab mafodotin: CL 0.94 L/day, V1 4.47 L, Q 0.78 L/day, V2 5.96 L, t1/2z 53.9 day, allometric_exponent 0.5 θV1_BWT.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has belantamab mafodotin (belamaf; ADC), the second reading belantamab_mafodotin; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `belantamab mafodotin (belamaf; ADC)`, measured `belantamab mafodotin (ADC)`.

## Citation
Rathi C et al., Population pharmacokinetics of belantam…, CPT: pharmacometrics & syst… (2021)
  ·  DOI: [10.1002/psp4.12660](https://doi.org/10.1002/psp4.12660)

<div class="pk-model-meta" hidden drug="belantamab mafodotin" model-id="BelantamabMafodotin_Rathi2021_reference" status="needs_review" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="belantamab mafodotin (ADC)" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL (L/day) | `Q22` · CL | 0.94 | L/day | 1.087962962962963e-08 | [l] / [d] | not captured | tv_prefix (0.95) | psp412660-tbl-0001:row2:col1 | — | not captured |
| TVV1 (L) | `Q63` · V1 | 4.47 | L | 0.00447 | [l] | not captured | exact (1.0) | psp412660-tbl-0001:row3:col1 | — | not captured |
| TVQ (L/day) | `Q30` · Q | 0.78 | L/day | 9.027777777777778e-09 | [l] / [d] | not captured | tv_prefix (0.95) | psp412660-tbl-0001:row4:col1 | — | not captured |
| TVV2 (L) | `Q64` · V2 | 5.96 | L | 0.00596 | [l] | not captured | exact (1.0) | psp412660-tbl-0001:row5:col1 | — | not captured |
| TI50 (day) | `Q57` · t1/2z | 53.90 | day | 4656960.0 | [d] | not captured | llm (0.6) | psp412660-tbl-0001:row7:col1 | — | not captured |
| Effect of BWT on V1 (θV1_BWT) | `Q319` · allometric_exponent | 0.50 | θV1_BWT | not captured | [bwt] · [θv1_] | not captured | llm_corrected (0.6) | psp412660-tbl-0001:row9:col1 | — | not captured |
| Effect of BIGG on CL (θCL_BIGG) | `Q900` · equation variable | 0.13 | θCL_BIGG | not captured | [bigg] · [θcl_] | not captured | llm_corrected (0.6) | psp412660-tbl-0001:row15:col1 | — | not captured |
| theta_v1_sex | `Q900` · theta_v1_sex | 1.14 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412660-tbl-0001:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'IMAX' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412660-tbl-0001:row6:col1'])
- dropped PD-category row 'GAMMA' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412660-tbl-0001:row8:col1'])
- unit_dimension_unknown: 'θV1_BWT' (allometric_exponent)
- unit_dimension_unknown: 'θCL_BWT' (allometric_exponent)
- dropped duplicate Q319 ('Effect of BWT on CL (θCL_BWT)', value '0.51') — already have one for this compound
- unit_dimension_unknown: 'θCL_BALB' (CL)
- dropped duplicate Q22 ('Effect of BALB on CL (θCL_BALB)', value '-0.97') — already have one for this compound
- unit_dimension_unknown: 'θV1_BALB' (V1)
- dropped duplicate Q63 ('Effect of BALB on V1 (θV1_BALB)', value '-0.47') — already have one for this compound
- unit_dimension_unknown: 'θCL_BSBCMA' (CL)
- dropped duplicate Q22 ('Effect of BSBCMA on CL (θCL_BSBCMA)', value '0.13') — already have one for this compound
- unit_dimension_unknown: 'θCL_BIGG' (equation variable)
- unit_dimension_unknown: 'θV2_ADOSE&lt;1' (V2)
- dropped duplicate Q64 ('Effect of dose &lt;1 mg/kg on V2 (θV2_ADOSE&lt;1)', value '0.13') — already have one for this compound
- unit_dimension_unknown: 'θCL_ADOSE&lt;1' (CL)
- dropped duplicate Q22 ('Effect of dose &lt;1 mg/kg on CL (θCL_ADOSE&lt;1)', value '0.62') — already have one for this compound
- unit_dimension_unknown: 'θV1_DREAMM1' (V1)
- dropped duplicate Q63 ('Effect of DREAMM1/BMA117159 on V1 (θV1_DREAMM1)', value '0.66') — already have one for this compound
- unit_dimension_unknown: 'θCL_DREAMM1' (CL)
- dropped duplicate Q22 ('Effect of DREAMM1/BMA117159 on CL (θCL_DREAMM1)', value '0.61') — already have one for this compound
- routed 'ETACL (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ETAV1 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ETAQ (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ETAV2 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ETAIMAX (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ETATI50 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'RES ERR, additive SIGMA on log scale' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped value-less row: 'BALB'
- dropped value-less row: 'BIGG'
- dropped value-less row: 'BSBCMA'
- dropped value-less row: 'BWT'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belantamab mafodotin (ADC)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 29/29 row label(s) assigned, 4 linked by role
- molar mass: no plausible PubChem entry for 'belantamab mafodotin (ADC)' ('belantamab mafodotin') — left in mass units
- molar mass: none found for 'belantamab mafodotin (ADC)' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412660-tbl-0001:row2:col2 = '0.87, 1.00'
- unparsed cell psp412660-tbl-0001:row3:col2 = '4.34, 4.61'
- unparsed cell psp412660-tbl-0001:row4:col2 = '0.70, 0.88'
- unparsed cell psp412660-tbl-0001:row5:col2 = '5.52, 6.47'
- unparsed cell psp412660-tbl-0001:row6:col2 = '–0.44, –0.24'
- unparsed cell psp412660-tbl-0001:row7:col2 = '46.90, 64.40'
- unparsed cell psp412660-tbl-0001:row8:col2 = '3.01, 8.02'
- unparsed cell psp412660-tbl-0001:row9:col2 = '0.41, 0.58'
- unparsed cell psp412660-tbl-0001:row10:col2 = '0.27, 0.71'
- unparsed cell psp412660-tbl-0001:row11:col2 = '–1.64, –0.25'
- unparsed cell psp412660-tbl-0001:row12:col2 = '–0.60, –0.33'
- unparsed cell psp412660-tbl-0001:row13:col2 = '1.09, 1.18'
- unparsed cell psp412660-tbl-0001:row14:col2 = '0.09, 0.17'
- unparsed cell psp412660-tbl-0001:row15:col2 = '0.09, 0.16'
- unparsed cell psp412660-tbl-0001:row16:col2 = '0.02, 0.29'
- unparsed cell psp412660-tbl-0001:row17:col2 = '0.46, 0.86'
- unparsed cell psp412660-tbl-0001:row18:col2 = '0.63, 0.70'
- unparsed cell psp412660-tbl-0001:row19:col2 = '0.53, 0.70'
- unparsed cell psp412660-tbl-0001:row20:col2 = '26.70, 40.10'
- unparsed cell psp412660-tbl-0001:row21:col2 = '12.60, 16.30'
- unparsed cell psp412660-tbl-0001:row22:col2 = '17.90, 49.50'
- unparsed cell psp412660-tbl-0001:row23:col2 = '32.60, 60.50'
- unparsed cell psp412660-tbl-0001:row24:col2 = '76.10, 199.0'
- unparsed cell psp412660-tbl-0001:row25:col2 = '18.80, 39.50'
- unparsed cell psp412660-tbl-0001:row26:col2 = '0.016, 0.023'
- LLM selected parameter table(s) 1
- LLM region Rathi_2021:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.5 (7/14 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['belantamab mafodotin (adc)', 'cys-mcmmaf', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `parameters[effect of bigg on cl]` | 0.13 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of bwt on v1]` | 0.50 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of dreamm1/bma117159 on cl]` | not captured | 0.61 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ti50]` | 53.90 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | belantamab mafodotin (belamaf; ADC) | belantamab_mafodotin | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | belantamab mafodotin (ADC) | belantamab_mafodotin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 14.0 | 3.296 | 0.2354 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412660-tbl-0001:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412660-tbl-0001:row4:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['psp412660-tbl-0001:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412660-tbl-0001:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412660-tbl-0001:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.94 | not captured | not captured | ['psp412660-tbl-0001:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0392 L/h | not captured | not captured | ['psp412660-tbl-0001:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.47 L | not captured | not captured | ['psp412660-tbl-0001:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.96 L | not captured | not captured | ['psp412660-tbl-0001:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_belantamab_mafodotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rathi_2021` / `Rathi_2021::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:53 UTC</sub>
