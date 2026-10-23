<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;spironolactone&quot;,&quot;href&quot;:&quot;drugs/drug_spironolactone/&quot;},{&quot;label&quot;:&quot;Lass_2024 \u00b7 model_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spironolactone_Zhou2010_reference&quot;,&quot;label&quot;:&quot;Zhou_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_spironolactone/Spironolactone_Zhou2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# spironolactone — `Spironolactone_Lass2024_model_2`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Spironolactone's elimination clearance had no extracted value, so a placeholder was used and the model was quarantined.

<div class="pk-model-meta" hidden drug="spironolactone" model-id="Spironolactone_Lass2024_model_2" status="model_quarantined" stale="false" population="infants with chronic heart failure, ascites and/or oedema" measured-compound="spironolactone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Lass J, Leroux S, Kõrgvee LT, Varendi H, Kipper K, Takkis K et al. Pharmacokinetics of oral spironolactone in infants up to 2 years of age. European journal of clinical pharmacology 80(2):239–248 (2024).
  ·  DOI: [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w)

## Population and dosing

**Population:** infants with chronic heart failure, ascites and/or oedema · condition chronic heart failure, ascites and/or oedema · age group infant · n = &gt;=23.

**Dosing:** 70 mg, oral, single.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| VTMS=VCAN | V | 103 | L |
| CL_TMS | CL | 78 | L/h |
| Ka (h -1 ) | kabs | 1.63 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Spironolactone's elimination clearance had no extracted value, so a placeholder was used and the model was quarantined.**

The record lists volume of distribution and clearance values for the metabolite 7 alphathiomethylspironolactone, but no elimination clearance for spironolactone itself. Consequently, a library placeholder was used for the missing spironolactone clearance parameter. A second reader also disagreed on the assignment of the 103 L and 78 L/h values to the metabolite parameters. Extracted — 7 alphathiomethylspironolactone: V 103 L, CL 78 L/h; spironolactone: kabs 1.63 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has spironolactone → 7 alphathiomethylspironolactone (metabolism); spironolactone → canrenone (metabolism), the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| VTMS=VCAN | `Q61` · V | 103 | L | 0.103 | m3 | L | exact (1) | Lass_2024_table_3:row0:col2 |
| CL_TMS | `Q22` · CL | 78 | L/h | 2.167e-05 | m3/s | L/h | exact (1) | Lass_2024_table_3:row1:col2 |
| Ka (h -1 ) | `Q49` · kabs | 1.63 | h -1 | 0.0004528 | 1/s | 1/h | review_gapfill (0.7) | Zhou_2010:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error for spironolactone' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Additive error for spironolactone' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Proportional error for TMS' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Additive error for TMS' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Proportional error for CAN' routed out of structural estimates ('Residual variability (%)')
- implicit units: 'VTMS=VCAN' → L (from the paper text: "The table footnote explicitly defines the parameter: 'VTMS, volume of distribution for TMS (L)'")
- implicit units: 'CL_TMS' → L/h (from the paper text: "The table footnote explicitly defines the parameter: 'CLTMS, Clearance for TMS (L/h)'")
- metabolite volume: 'VTMS=VCAN' Q63→Q61 for 7 alphathiomethylspironolactone — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=spironolactone
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- model equation 'CL_SP/F = θ2 x (CW/4300)⁰.⁷⁵ x (PNA/60)^θ3' not bound — neither LHS nor base term 'θ2' linked to an ontology parameter
- population split: 'model 2' subgroup of Lass_2024 (paper reports 2 populations: model 1, model 2)
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 38 linked by role; re-tagged parent→7 alphathiomethylspironolactone ×22, parent→canrenone ×8
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Zhou_2010's review values (primary lacked it)

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Lass_2024
- companion parameter table 2 transcribed (23 record(s))
- companion parameter table 3 transcribed (14 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation CL_SP/F = θ2 x (CW/4300)⁰.⁷⁵ x (PNA/60)^θ3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['spironolactone', '7 alphathiomethylspironolactone', 'metabolism'], ['spironolactone', 'canrenone', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl_tms]` |  | 78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_tms]` | 78 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.63 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vtms=vcan]` |  | 103 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vtms=vcan]` | 103 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lass_2024_table_3:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Zhou_2010:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Lass_2024_table_3:row0:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 78 | ['Lass_2024_table_3:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 78 L/h | ['Lass_2024_table_3:row1:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 103 L | ['Lass_2024_table_3:row0:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | fail | 3 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['kabs'] |
| T3_shared_parameters |  | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 1.4 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.4 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 2.1 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.1 |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_spironolactone/Spironolactone_Lass2024_model_2/Spironolactone_Lass2024_model_2_matlab.zip" download>Spironolactone_Lass2024_model_2_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_spironolactone/Spironolactone_Lass2024_model_2/Spironolactone_Lass2024_model_2_matlab_simbio.zip" download>Spironolactone_Lass2024_model_2_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_spironolactone/Spironolactone_Lass2024_model_2/Spironolactone_Lass2024_model_2_sbml.zip" download>Spironolactone_Lass2024_model_2_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_spironolactone/Spironolactone_Lass2024_model_2/Spironolactone_Lass2024_model_2_cellml.zip" download>Spironolactone_Lass2024_model_2_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Lass J, Leroux S, Kõrgvee LT, Varendi H, Kipper K, Takkis K et al. Pharmacokinetics of oral spironolactone in infants up to 2 years of age. European journal of clinical pharmacology 80(2):239–248 (2024). [doi:10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w)

**This record:** Pharmacolibrary v26.09, model `Spironolactone_Lass2024_model_2`. <https://pharmacolibrary.github.io/#/drugs/drug_spironolactone/Spironolactone_Lass2024_model_2>

```bibtex
@misc{pharmacolibrary_SpironolactoneLass2024model2,
  title  = {{Pharmacolibrary model Spironolactone_Lass2024_model_2}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_spironolactone/Spironolactone_Lass2024_model_2},
  note   = {Parameters from doi:10.1007/s00228-023-03599-w},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bspironolactone%5D%20Spironolactone_Lass2024_model_2&body=Drug%3A%20spironolactone%0ARecord%3A%20Spironolactone_Lass2024_model_2%0APaper%3A%20Lass_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_spironolactone/Spironolactone_Lass2024_model_2%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 18:46 UTC</sub>
