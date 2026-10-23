<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefuroxime&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/&quot;},{&quot;label&quot;:&quot;Schouwenburg_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefuroxime_Cao2025_reference&quot;,&quot;label&quot;:&quot;Cao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Cao2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Hartman2020_reference&quot;,&quot;label&quot;:&quot;Hartman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Hartman2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Gertler2018_reference&quot;,&quot;label&quot;:&quot;Gertler_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Gertler2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Viberg2006_reference&quot;,&quot;label&quot;:&quot;Viberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Viberg2006_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefuroxime — `Cefuroxime_Schouwenburg2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Cefuroxime's clearance and volume of distribution lacked extracted values, so library placeholders were used and the model was quarantined.

<div class="pk-model-meta" hidden drug="cefuroxime" model-id="Cefuroxime_Schouwenburg2026_reference" status="model_quarantined" stale="false" population="critically ill term neonates and children" measured-compound="cefuroxime" parameterization="mechanistic" topology="1C"></div>

## Citation
Schouwenburg S, Preijers T, Asperen RMW, Hartman SJF, de Wildt SN, de Hoog M et al. Low Target Attainment of Intravenous Cefuroxime in Critically Ill Term Neonates and Children: A Pooled Population Pharmacokinetics Study. Clinical pharmacokinetics 65(1):97-108 (2026).
  ·  DOI: [10.1007/s40262-025-01577-2](https://doi.org/10.1007/s40262-025-01577-2)

## Population and dosing

**Population:** critically ill term neonates and children · condition critical illness · age group mixed · n = 45.

**Dosing:** 75, 100 mg/kg/day, iv, multiple.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cefuroxime's clearance and volume of distribution lacked extracted values, so library placeholders were used and the model was quarantined.**

The record lists parameters for total clearance and central volume, but no numerical values were provided for them. Consequently, standard library defaults stood in for these essential pharmacokinetic estimates. The model was held back because it relied on these placeholder values rather than explicit data from the study. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clcefu: this record has none, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CLcefu | Q22 | tv_prefix |
| V1cefu | Q63 | tv_prefix |
| V2cefu | Q64 | tv_prefix |
| Qcefu | Q30 | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (mg/L)' routed out of structural estimates ('Residual variability')
- dropped value-less row: 'CLcefu=TVCL×(BW70)0.75×(CRCL81.3)θCRCL×(PNA391)θPNA'
- dropped value-less row: 'TVCL (Lh/70kg)' (captured trailing unit 'Lh/70kg' for child rows)
- dropped value-less row: 'V1cefu=TVV1×(BW70)1.00'
- dropped value-less row: 'TVV1 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'V2cefu=TVV2×(BW70)1.00'
- dropped value-less row: 'TVV2 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Qcefu=TVQ×(BW70)0.75'
- dropped value-less row: 'TVQ (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'θCLCR'
- dropped value-less row: 'θPNA'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefuroxime
- bound model equation to Q22 (CL): CLcefu = TVCL*(BW/70)^0.75*(CRCL/81.3)^θCRCL*(PNA/391)^θPNA
- bound model equation to Q63 (V1): V1cefu = TVV1*(BW/70)^1.00
- bound model equation to Q64 (V2): V2cefu = TVV2*(BW/70)^1.00
- bound model equation to Q30 (Q): Qcefu = TVQ*(BW/70)^0.75
- Q22 (CL) is equation-defined: value moved to equation-variable 'CLcefu'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'V1cefu'; equation kept verbatim
- Q64 (V2) is equation-defined: value moved to equation-variable 'V2cefu'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Qcefu'; equation kept verbatim
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab3:row3:col2 = '5.30 (4.76–5.92) [6.6]'
- unparsed cell Tab3:row5:col2 = '4.98 (3.42–5.92) [19.7]'
- unparsed cell Tab3:row7:col2 = '12.41 (10.51–14.28) [9.3]'
- unparsed cell Tab3:row9:col2 = '28.23 (18.26–44.06) [29.3]'
- unparsed cell Tab3:row11:col2 = '0.766 (0.49–1.02) [21.6]'
- unparsed cell Tab3:row12:col2 = '0.084 (0.043–0.130) [30.0]'
- unparsed cell Tab3:row16:col2 = '40.6% (35.8%–46.1%) [7.9%]'
- unparsed cell Tab3:row17:col2 = '0.550 (0.385–0.796) [23.3]'
- LLM selected parameter table(s) 3
- captured model equation CLcefu = TVCL*(BW/70)^0.75*(CRCL/81.3)^θCRCL*(PNA/391)^θPNA
- captured model equation V1cefu = TVV1*(BW/70)^1.00
- captured model equation V2cefu = TVV2*(BW/70)^1.00
- captured model equation Qcefu = TVQ*(BW/70)^0.75

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clcefu]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intravenous cefuroxime clearance]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 4 |
| C0b_disposition_core | pass |  |
| C0c_disposition_complete | pass |  |
| C8_topology | pass |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 4.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 4.5 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefuroxime%5D%20Cefuroxime_Schouwenburg2026_reference&body=Drug%3A%20cefuroxime%0ARecord%3A%20Cefuroxime_Schouwenburg2026_reference%0APaper%3A%20Schouwenburg_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefuroxime/Cefuroxime_Schouwenburg2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:04 UTC</sub>
