<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Heparin&quot;,&quot;href&quot;:&quot;drugs/toxin_heparin/&quot;},{&quot;label&quot;:&quot;Jia_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Heparin_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_heparin/Heparin_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Heparin_Palm1987_reference&quot;,&quot;label&quot;:&quot;Palm_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_heparin/Heparin_Palm1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Heparin_Diepstraten2023_reference&quot;,&quot;label&quot;:&quot;Diepstraten_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_heparin/Heparin_Diepstraten2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Heparin_Edrich2015_female_only_subgroup_f&quot;,&quot;label&quot;:&quot;Edrich_2015_female_only_subgroup_f&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_heparin/Heparin_Edrich2015_female_only_subgroup_f.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Heparin_Edrich2015_male_only_subgroup_m&quot;,&quot;label&quot;:&quot;Edrich_2015_male_only_subgroup_m&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_heparin/Heparin_Edrich2015_male_only_subgroup_m.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Heparin_Zhang2016_reference&quot;,&quot;label&quot;:&quot;Zhang_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_heparin/Heparin_Zhang2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Heparin — `Heparin_Jia2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Heparin's bioavailability, clearance, volume of distribution, and lag time lacked values, so library placeholders were used, causing the model to be held back.

<div class="pk-model-meta" hidden drug="Heparin" model-id="Heparin_Jia2015_reference" status="model_quarantined" stale="false" population="Chinese patients undergoing cardiopulmonary bypass during cardiac surgery" measured-compound="Unfractionated heparin (anti-FIIa activity)" parameterization="mechanistic" topology="1C"></div>

## Citation
Jia Z, Tian G, Ren Y, Sun Z, Lu W, Hou X. Pharmacokinetic model of unfractionated heparin during and after cardiopulmonary bypass in cardiac surgery. Journal of translational medicine 13:45 (2015).
  ·  DOI: [10.1186/s12967-015-0404-5](https://doi.org/10.1186/s12967-015-0404-5)

## Population and dosing

**Population:** Chinese patients undergoing cardiopulmonary bypass during cardiac surgery · condition cardiopulmonary bypass · age group adult · n = 41.

**Dosing:** 1, 375 IU/kg, mg/kg, iv, multiple.

**Dosed compound ≠ measured compound:** dosed Unfractionated heparin, measured Unfractionated heparin (anti-FIIa activity).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLUFH, 1-order (L·h–1) | CL | 1.18 | L·h–1 | 7.25 | 0.122 (77.7% RSE) |
| VUFH-P (L) | V | 8.01 | L | 31.8 |  |
| ka | kabs | 0.495 | h-1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Heparin's bioavailability, clearance, volume of distribution, and lag time lacked values, so library placeholders were used, causing the model to be held back.**

The record lists clearance (1.18 L·h–1), volume of distribution (8.01 L), and absorption rate (0.495 h-1) for unfractionated heparin, not heparin itself. Since no values were extracted for heparin's specific parameters, the model relied on generic placeholders rather than explicit estimates. This prevented the model from being published with valid pharmacokinetic data for the intended compound. Extracted — Unfractionated heparin: CL 1.18 L·h–1, V 8.01 L; Unfractionated heparin (anti-FIIa activity): kabs 0.495 h-1.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLUFH, 1-order (L·h–1) | `Q22` · CL | 1.18 | L·h–1 | 3.278e-07 | m3/s | l/h | 7.25 | llm (0.6) | Tab2:row1:col1 | 0.122 (77.7% RSE) |
| VUFH-P (L) | `Q61` · V | 8.01 | L | 0.00801 | m3 | l | 31.8 | llm (0.6) | Tab2:row4:col1 |  |
| ka | `Q49` · kabs | 0.495 | h-1 | 0.0001375 | 1/s | 1/h |  | review_gapfill (0.7) | Chen_2024:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'VUFH-C (L)' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1'])
- dropped unlinked row (NIL): 'QUFH (L·h–1)' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Unfractionated heparin (anti-FIIa activity)
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'VUFH-P (L)' is the general volume)
- molar mass: no plausible PubChem entry for 'Unfractionated heparin (anti-FIIa activity)' ('unfractionated heparin') — left in mass units
- molar mass: none found for 'Unfractionated heparin (anti-FIIa activity)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chen_2024's review values (primary lacked it)

**Extraction notes:**
- table Tab2: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chen_2024:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.18 | ['Tab2:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.18 L/h | ['Tab2:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.01 L | ['Tab2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_heparin/Heparin_Jia2015_reference/Heparin_Jia2015_reference_matlab.zip" download>Heparin_Jia2015_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_heparin/Heparin_Jia2015_reference/Heparin_Jia2015_reference_matlab_simbio.zip" download>Heparin_Jia2015_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_heparin/Heparin_Jia2015_reference/Heparin_Jia2015_reference_sbml.zip" download>Heparin_Jia2015_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_heparin/Heparin_Jia2015_reference/Heparin_Jia2015_reference_cellml.zip" download>Heparin_Jia2015_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Jia Z, Tian G, Ren Y, Sun Z, Lu W, Hou X. Pharmacokinetic model of unfractionated heparin during and after cardiopulmonary bypass in cardiac surgery. Journal of translational medicine 13:45 (2015). [doi:10.1186/s12967-015-0404-5](https://doi.org/10.1186/s12967-015-0404-5)

**This record:** Pharmacolibrary, model `Heparin_Jia2015_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_heparin/Heparin_Jia2015_reference>

```bibtex
@misc{pharmacolibrary_HeparinJia2015reference,
  title  = {{Pharmacolibrary model Heparin_Jia2015_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_heparin/Heparin_Jia2015_reference},
  note   = {Parameters from doi:10.1186/s12967-015-0404-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bheparin%5D%20Heparin_Jia2015_reference&body=Drug%3A%20heparin%0ARecord%3A%20Heparin_Jia2015_reference%0APaper%3A%20Jia_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_heparin/Heparin_Jia2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 12:30 UTC</sub>
