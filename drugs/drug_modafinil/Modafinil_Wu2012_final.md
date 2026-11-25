<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;modafinil&quot;,&quot;href&quot;:&quot;drugs/drug_modafinil/&quot;},{&quot;label&quot;:&quot;Wu_2012 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Modafinil_Tao2010_reference&quot;,&quot;label&quot;:&quot;Tao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_modafinil/Modafinil_Tao2010_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# modafinil — `Modafinil_Wu2012_final`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="modafinil" model-id="Modafinil_Wu2012_final" status="not_simulated" stale="false" population="healthy volunteers from 5 major ethnic groups of China" measured-compound="modafinil acid" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Wu KH, Guo T, Deng CH, Guan Z, Li L, Zhou TY et al. Population pharmacokinetics of modafinil acid and estimation of the metabolic conversion of modafinil into modafinil acid in 5 major ethnic groups of China. Acta pharmacologica Sinica 33(11):1401–1408 (2012).
  ·  DOI: [10.1038/aps.2012.124](https://doi.org/10.1038/aps.2012.124)

## Population and dosing

**Population:** healthy volunteers from 5 major ethnic groups of China · condition healthy · age group adult · n = 49.

**Dosing:** 200 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed modafinil, measured modafinil acid.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL1/F1 (l/h) Male | CLm/F | 3.51 | l/h |
| V1/F1=θ2×θCOV-V1 (l) θ2 | V1 | 7.74 | l |
| CL2/F1 (l/h) Male | Q | 7.02 | l/h |
| V2/F1 (l) Male | V2 | 35.0 | l |
| CL3/F1F2=θ5×θCOV-CL3 (l/h) θ5 | CLm/F | 4.94 | l/h |
| (l) | V | 2.73 | l |
| ka (1/h) | kabs | 0.755 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.909). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet; t3_topology_template (+1 more).**

Extracted — modafinil: CLm/F 3.51 l/h, V1 7.74 l, Q 7.02 l/h, V2 35 l, kabs 0.755 1/h; modafinil acid: CLm/F 4.94 l/h, V 2.73 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has modafinil → modafinil acid (metabolism), the second reading none. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL1/F1 (l/h) Male | `Q351` · CLm/F | 3.51 | l/h | 9.75e-07 | m3/s | l/h | exact (1) | Wu_2012_table_2:row0:col3 |
| V1/F1=θ2×θCOV-V1 (l) θ2 | `Q63` · V1 | 7.74 | l | 0.00774 | m3 | l | exact (1) | Wu_2012_table_2:row2:col3 |
| CL2/F1 (l/h) Male | `Q30` · Q | 7.02 | l/h | 1.95e-06 | m3/s | l/h | exact (1) | Wu_2012_table_2:row6:col3 |
| V2/F1 (l) Male | `Q64` · V2 | 35.0 | l | 0.035 | m3 | l | exact (1) | Wu_2012_table_2:row8:col3 |
| CL3/F1F2=θ5×θCOV-CL3 (l/h) θ5 | `Q351` · CLm/F | 4.94 | l/h | 1.372e-06 | m3/s | l/h | exact (1) | Wu_2012_table_2:row10:col3 |
| (l) | `Q61` · V | 2.73 | l | 0.00273 | m3 | l | exact (1) | Wu_2012_table_2:row13:col3 |
| ka (1/h) | `Q49` · kabs | 0.755 | 1/h | 0.0002097 | 1/s | 1/h | exact (1) | Wu_2012_table_2:row14:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q22 ('CL1/F1 (l/h) Female', value '3.14') — already have one for this compound
- dropped duplicate Q30 ('CL2/F1 (l/h) Female', value '4.84') — already have one for this compound
- dropped duplicate Q64 ('V2/F1 (l) Female', value '20.41') — already have one for this compound
- dropped value-less row: 'F 1'
- dropped value-less row: 'F 2'
- NIL: refused to back-fill base 'omega_cov' from footnote/prose loose number 1 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- metabolite modafinil acid: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: '(l)' Q63→Q61 for modafinil acid — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=modafinil acid
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- model-stage split: 'final model' is the final model of Wu_2012 (paper reports 2 stages: base model, final model); same population, different model-building step
- row roles: 2 per-group rows of modafinil clearance but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of modafinil intercompartmental_clearance but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of modafinil peripheral_volume but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: θ COV-V1, θ COV-CL3
- row roles (LLM): model_class=compartmental; 24/24 row label(s) assigned, 17 linked by role; re-tagged parent→modafinil acid ×6, modafinil acid→parent ×2

**Extraction notes:**
- table Wu_2012_table_2: missing_label
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['modafinil', 'modafinil acid', 'metabolism']] | [] | mismatch |

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Wu_2012_table_2:row6:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Wu_2012_table_2:row0:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Wu_2012_table_2:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Wu_2012_table_2:row14:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wu_2012_table_2:row13:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wu_2012_table_2:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Wu_2012_table_2:row8:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.73 L | ['Wu_2012_table_2:row13:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.74 L | ['Wu_2012_table_2:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 35 L | ['Wu_2012_table_2:row8:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_shared_parameters | pass | 2 shared param(s) bound once | bound once |  | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.909 (10 of 11 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.909 | cross-check contradicted by a second reader: verdict disputed; agreement 0.909 (10 of 11 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_modafinil/Modafinil_Wu2012_final/Modafinil_Wu2012_final_modelica.zip" download>Modafinil_Wu2012_final_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Wu KH, Guo T, Deng CH, Guan Z, Li L, Zhou TY et al. Population pharmacokinetics of modafinil acid and estimation of the metabolic conversion of modafinil into modafinil acid in 5 major ethnic groups of China. Acta pharmacologica Sinica 33(11):1401–1408 (2012). [doi:10.1038/aps.2012.124](https://doi.org/10.1038/aps.2012.124)

**This record:** Pharmacolibrary, model `Modafinil_Wu2012_final`. <https://pharmacolibrary.github.io/#/drugs/drug_modafinil/Modafinil_Wu2012_final>

```bibtex
@misc{pharmacolibrary_ModafinilWu2012final,
  title  = {{Pharmacolibrary model Modafinil_Wu2012_final}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_modafinil/Modafinil_Wu2012_final},
  note   = {Parameters from doi:10.1038/aps.2012.124},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmodafinil%5D%20Modafinil_Wu2012_final&body=Drug%3A%20modafinil%0ARecord%3A%20Modafinil_Wu2012_final%0APaper%3A%20Wu_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_modafinil/Modafinil_Wu2012_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:45 UTC</sub>
