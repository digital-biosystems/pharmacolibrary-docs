<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Abouellil_2023 \u00b7 gs_704277&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Roberts2025_reference&quot;,&quot;label&quot;:&quot;Roberts_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Roberts2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Abouellil2023_gs_704277`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="remdesivir" model-id="Remdesivir_Abouellil2023_gs_704277" status="not_simulated" stale="false" population="healthy adults" measured-compound="remdesivir" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Abouellil A, Bilal M, Taubert M, Fuhr U. A population pharmacokinetic model of remdesivir and its major metabolites based on published mean values from healthy subjects. Naunyn-Schmiedeberg's archives of pharmacology 396(1):73–82 (2023).
  ·  DOI: [10.1007/s00210-022-02292-6](https://doi.org/10.1007/s00210-022-02292-6)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 3, 10, 30, 75, 150, 225 mg, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Central compartment volume of distribution (L) | V1 | 96.4 | L |
| Peripheral compartment volume of distribution (L) | V2 | 8.64 | L |
| Inter-compartmental clearance (L/h) | Q | 0.12 | L/h |
| Total body clearance (L/h) | CL | 36.9 | L/h |
| Central formation clearance (L/h) | CLfm | 16.9 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Remdesivir model lacks central volume 96.4 L and peripheral volume 8.64 L, preventing simulation.**

Parameter coverage failed, with central and peripheral volumes missing from the emitted or defaulted set. A second reader disagreed on all values, suggesting central volume 4.89 L and inter-compartmental clearance 13.2 L/h. The formation clearance of 16.9 L/h was not identified by the second reader. Extracted — remdesivir: V1 96.4 L, V2 8.64 L, Q 0.12 L/h, CL 36.9 L/h; GS-704277: CLfm 16.9 L/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[central compartment volume of distribution].value`: this record has 96.4, the second reading 4.89; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Central compartment volume of distribution (L) | `Q63` · V1 | 96.4 | L | 0.0964 | m3 | l | llm_confirmed (0.6) | Tab2:row1:col2 |
| Peripheral compartment volume of distribution (L) | `Q64` · V2 | 8.64 | L | 0.00864 | m3 | l | llm_confirmed (0.6) | Tab2:row2:col2 |
| Inter-compartmental clearance (L/h) | `Q30` · Q | 0.12 | L/h | 3.333e-08 | m3/s | l/h | llm_confirmed (0.6) | Tab2:row3:col2 |
| Total body clearance (L/h) | `Q22` · CL | 36.9 | L/h | 1.025e-05 | m3/s | l/h | llm_confirmed (0.6) | Tab2:row4:col2 |
| Central formation clearance (L/h) | `Q370` · CLfm | 16.9 | L/h | 4.694e-06 | m3/s | l/h | exact (1) | Tab2:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q370 ('Peripheral formation clearance (L/h)', value '18.9') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remdesivir
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- population split: 'gs‐704277' subgroup of Abouellil_2023 (paper reports 3 populations: gs‐441524, gs‐704277, remdesivir)
- row roles (LLM): model_class=compartmental; 6/6 row label(s) assigned, 15 linked by role; re-tagged remdesivir→parent ×4, parent→GS-704277 ×3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[central compartment volume of distribution].value` | 96.4 | 4.89 | mismatch |
| `gpt-oss:120b` | `parameters[central formation clearance]` | 16.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[inter-compartmental clearance].value` | 0.12 | 13.2 | mismatch |
| `gpt-oss:120b` | `parameters[peripheral compartment volume of distribution].value` | 8.64 | 46.5 | mismatch |
| `gpt-oss:120b` | `parameters[total body clearance].value` | 36.9 | 18.1 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 36.9 | ['Tab2:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 36.9 L/h | ['Tab2:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 96.4 L | ['Tab2:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 8.64 L | ['Tab2:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['V1', 'V2'] |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 13.7 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 807 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 726 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 645.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 29.36 |  | no simulated metric for this quantity (single reference sim) |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277/Remdesivir_Abouellil2023_gs_704277_modelica.zip" download>Remdesivir_Abouellil2023_gs_704277_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277/Remdesivir_Abouellil2023_gs_704277_matlab.zip" download>Remdesivir_Abouellil2023_gs_704277_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277/Remdesivir_Abouellil2023_gs_704277_matlab_simbio.zip" download>Remdesivir_Abouellil2023_gs_704277_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277/Remdesivir_Abouellil2023_gs_704277_sbml.zip" download>Remdesivir_Abouellil2023_gs_704277_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277/Remdesivir_Abouellil2023_gs_704277_cellml.zip" download>Remdesivir_Abouellil2023_gs_704277_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Abouellil A, Bilal M, Taubert M, Fuhr U. A population pharmacokinetic model of remdesivir and its major metabolites based on published mean values from healthy subjects. Naunyn-Schmiedeberg's archives of pharmacology 396(1):73–82 (2023). [doi:10.1007/s00210-022-02292-6](https://doi.org/10.1007/s00210-022-02292-6)

**This record:** Pharmacolibrary v26.09, model `Remdesivir_Abouellil2023_gs_704277`. <https://pharmacolibrary.github.io/#/drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277>

```bibtex
@misc{pharmacolibrary_RemdesivirAbouellil2023gs704277,
  title  = {{Pharmacolibrary model Remdesivir_Abouellil2023_gs_704277}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277},
  note   = {Parameters from doi:10.1007/s00210-022-02292-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremdesivir%5D%20Remdesivir_Abouellil2023_gs_704277&body=Drug%3A%20remdesivir%0ARecord%3A%20Remdesivir_Abouellil2023_gs_704277%0APaper%3A%20Abouellil_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 12:38 UTC</sub>
