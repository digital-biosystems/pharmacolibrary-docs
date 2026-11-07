<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Franken_2016 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Ihmsen2021_reference&quot;,&quot;label&quot;:&quot;Ihmsen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Ihmsen2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_f&quot;,&quot;label&quot;:&quot;Andersen_1986_f&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_f.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_j&quot;,&quot;label&quot;:&quot;Andersen_1986_j&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_j.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_k&quot;,&quot;label&quot;:&quot;Andersen_1986_k&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_k.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Franken2016_final`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Franken2016_final" status="not_simulated" stale="false" population="terminally ill adult patients" measured-compound="morphine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Franken LG, Masman AD, de Winter BC, Koch BC, Baar FP, Tibboel D et al. Pharmacokinetics of Morphine, Morphine-3-Glucuronide and Morphine-6-Glucuronide in Terminally Ill Adult Patients. Clinical pharmacokinetics 55(6):697–709 (2016).
  ·  DOI: [10.1007/s40262-015-0345-4](https://doi.org/10.1007/s40262-015-0345-4)

## Population and dosing

**Population:** terminally ill adult patients · condition terminal illness · age group adult · n = 47.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F | Fab | 0.30 |  |  | 37.8 (None% RSE) |
| CL (L/h) | CL | 1.78 | L/h |  | 53.4 (None% RSE) |
| V1 (L) | V1 | 8.24 | L |  | 151.7 (None% RSE) |
| Q (L/h) | Q | 76.1 | L/h |  |  |
| V2 (L) | V2 | 243 | L |  |  |
| TTDc (Δ), days | equation variable | 17.6 | days | 24.7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet.**

A reported unit could not be converted (equation variable), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of albumin: this record has none, the second reading 1.1; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.30 |  |  |  |  |  | exact (1) | Tab2:row4:col2 | 37.8 (None% RSE) |
| CL (L/h) | `Q22` · CL | 1.78 | L/h | 4.944e-07 | m3/s | l/h |  | exact (1) | Tab2:row5:col2, Tab2:row11:col2, Tab2:row15:col2 | 53.4 (None% RSE) |
| V1 (L) | `Q63` · V1 | 8.24 | L | 0.00824 | m3 | l |  | exact (1) | Tab2:row6:col2, Tab2:row12:col2, Tab2:row16:col2 | 151.7 (None% RSE) |
| Q (L/h) | `Q30` · Q | 76.1 | L/h | 2.114e-05 | m3/s | l/h |  | exact (1) | Tab2:row7:col2 |  |
| V2 (L) | `Q64` · V2 | 243 | L | 0.243 | m3 | l |  | exact (1) | Tab2:row8:col2 |  |
| TTDc (Δ), days | `Q900` · equation variable | 17.6 | days |  |  | d | 24.7 | llm (0.6) | Tab2:row21:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'F' routed out of structural estimates ('Between-subject variability (%)')
- table section iiv: 'Morphine CL' routed out of structural estimates ('Between-subject variability (%)')
- table section iiv: 'M3G CL' routed out of structural estimates ('Between-subject variability (%)')
- table section iiv: 'M6G CL' routed out of structural estimates ('Between-subject variability (%)')
- table section iiv: 'M3G V1' routed out of structural estimates ('Between-subject variability (%)')
- table section iiv: 'M6G V1' routed out of structural estimates ('Between-subject variability (%)')
- table section residual_error: 'Morphine' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M3G' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M6G' routed out of structural estimates ('Residual variability')
- table representations disagree for 'F'; source reconciliation required
- table representations disagree for 'CL (L/h)'; source reconciliation required
- table representations disagree for 'V1 (L)'; source reconciliation required
- table representations disagree for 'Q (L/h)'; source reconciliation required
- table representations disagree for 'V2 (L)'; source reconciliation required
- table representations disagree for 'eGFRb'; source reconciliation required
- table representations disagree for 'Albumin'; source reconciliation required
- table representations disagree for 'TTDc (Δ), days'; source reconciliation required
- table representations disagree for 'TTDc (rate), days'; source reconciliation required
- dropped unlinked row (NIL): 'eGFRb' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col2'])
- dropped unlinked row (NIL): 'Albumin' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col2'])
- dropped duplicate Q900 ('TTDc (rate), days', value '0.13') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- status held at "Needs review" — not promoted
- model-stage split: 'final model' is the final model of Franken_2016 (paper reports 2 stages: final model, structural model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 20 linked by role; re-tagged parent→morphine-3-glucuronide ×9, parent→morphine-6-glucuronide ×6

**Extraction notes:**
- table Tab2: unbound_uncertainty
- table Tab2: unparsed_numeric_cell
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[albumin]` |  | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ttdc (δ)]` | 17.6 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col2', 'Tab2:row11:col2', 'Tab2:row15:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row7:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row6:col2', 'Tab2:row12:col2', 'Tab2:row16:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.78 | ['Tab2:row5:col2', 'Tab2:row11:col2', 'Tab2:row15:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.78 L/h | ['Tab2:row5:col2', 'Tab2:row11:col2', 'Tab2:row15:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.24 L | ['Tab2:row6:col2', 'Tab2:row12:col2', 'Tab2:row16:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 243 L | ['Tab2:row8:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_morphine/Morphine_Franken2016_final/Morphine_Franken2016_final_modelica.zip" download>Morphine_Franken2016_final_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_morphine/Morphine_Franken2016_final/Morphine_Franken2016_final_matlab.zip" download>Morphine_Franken2016_final_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_morphine/Morphine_Franken2016_final/Morphine_Franken2016_final_matlab_simbio.zip" download>Morphine_Franken2016_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_morphine/Morphine_Franken2016_final/Morphine_Franken2016_final_sbml.zip" download>Morphine_Franken2016_final_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_morphine/Morphine_Franken2016_final/Morphine_Franken2016_final_cellml.zip" download>Morphine_Franken2016_final_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Franken LG, Masman AD, de Winter BC, Koch BC, Baar FP, Tibboel D et al. Pharmacokinetics of Morphine, Morphine-3-Glucuronide and Morphine-6-Glucuronide in Terminally Ill Adult Patients. Clinical pharmacokinetics 55(6):697–709 (2016). [doi:10.1007/s40262-015-0345-4](https://doi.org/10.1007/s40262-015-0345-4)

**This record:** Pharmacolibrary, model `Morphine_Franken2016_final`. <https://pharmacolibrary.github.io/#/drugs/drug_morphine/Morphine_Franken2016_final>

```bibtex
@misc{pharmacolibrary_MorphineFranken2016final,
  title  = {{Pharmacolibrary model Morphine_Franken2016_final}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_morphine/Morphine_Franken2016_final},
  note   = {Parameters from doi:10.1007/s40262-015-0345-4},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Franken2016_final&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Franken2016_final%0APaper%3A%20Franken_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Franken2016_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 10:50 UTC</sub>
