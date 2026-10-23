<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;propranolol&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/&quot;},{&quot;label&quot;:&quot;Salehifar_2017 \u00b7 other_sources&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propranolol_Takechi2018_reference&quot;,&quot;label&quot;:&quot;Takechi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/Propranolol_Takechi2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propranolol — `Propranolol_Salehifar2017_other_sources`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (model/paper ratio 1.58).

<div class="pk-model-meta" hidden drug="propranolol" model-id="Propranolol_Salehifar2017_other_sources" status="needs_review" stale="false" population="healthy Iranian adults" measured-compound="propranolol" parameterization="mechanistic" topology="1C"></div>

## Citation
Salehifar E, Ebrahim S, Shiran MR, Faramarzi F, Askari Rad H, Avan R et al. Pharmacokinetic Parameters and Over-Responsiveness of Iranian Population to Propranolol. Advanced pharmaceutical bulletin 7(2):195–202 (2017).
  ·  DOI: [10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024)

## Population and dosing

**Population:** healthy Iranian adults · condition healthy · age group adult · n = ? The JSON schema requires valid JSON. 20 is valid..

**Dosing:** 40 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cl (Lit/kg/hr) | CL | 0.096 | L/kg/h |
| Vd (Lit/kg) | V | 4.3 | L/kg |
| t 1/2 (hr) | t1/2z | 3.4 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 1.58).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — propranolol: CL 0.096 L/kg/h, V 4.3 L/kg, t1/2z 3.4 hr.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl (Lit/kg/hr) | `Q22` · CL | 0.096 | L/kg/h | 1.867e-06 | m3/s | L/h | exact (1) | Salehifar_2017_table_4:row0:col2 |
| Vd (Lit/kg) | `Q61` · V | 4.3 | L/kg | 0.301 | m3 | L | exact (1) | Salehifar_2017_table_4:row1:col2 |
| t 1/2 (hr) | `Q57` · t1/2z | 3.4 | hr | 1.224e+04 | s | h | space_fold (0.95) | Salehifar_2017_table_4:row2:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'other sources' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'Lit/kg/hr' (CL)
- unit_dimension_unknown: 'Lit/kg' (V)
- implicit units: 'Cl (Lit/kg/hr)' → L/kg/h (from the paper text: "Table 4 explicitly lists the parameter as 'Cl (Lit/kg/hr)'. Additionally, the text mentions '0.96 L/kg/hr' in the contex")
- implicit units: 'Vd (Lit/kg)' → L/kg (from the paper text: "Table 4 explicitly lists the parameter as 'Vd (Lit/kg)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propranolol
- population split: 'other sources' subgroup of Salehifar_2017 (paper reports 5 populations: female (n=10), male (n=10), mean of differences, other sources, this study)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table T2: ragged_grid
- table T2: representations disagree; selected evidence retained, not merged
- table Salehifar_2017_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 19.7 | 31.05 | 1.576 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Salehifar_2017_table_4:row0:col2'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Salehifar_2017_table_4:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Salehifar_2017_table_4:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.096 |  |  | ['Salehifar_2017_table_4:row0:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.72 L/h |  |  | ['Salehifar_2017_table_4:row0:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 301 L |  |  | ['Salehifar_2017_table_4:row1:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources/Propranolol_Salehifar2017_other_sources_modelica.zip" download>Propranolol_Salehifar2017_other_sources_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources/Propranolol_Salehifar2017_other_sources_fmi.zip" download>Propranolol_Salehifar2017_other_sources_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources/Propranolol_Salehifar2017_other_sources_matlab.zip" download>Propranolol_Salehifar2017_other_sources_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources/Propranolol_Salehifar2017_other_sources_matlab_simbio.zip" download>Propranolol_Salehifar2017_other_sources_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources/Propranolol_Salehifar2017_other_sources_sbml.zip" download>Propranolol_Salehifar2017_other_sources_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources/Propranolol_Salehifar2017_other_sources_cellml.zip" download>Propranolol_Salehifar2017_other_sources_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Salehifar E, Ebrahim S, Shiran MR, Faramarzi F, Askari Rad H, Avan R et al. Pharmacokinetic Parameters and Over-Responsiveness of Iranian Population to Propranolol. Advanced pharmaceutical bulletin 7(2):195–202 (2017). [doi:10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024)

**This record:** Pharmacolibrary v26.09, model `Propranolol_Salehifar2017_other_sources`. <https://pharmacolibrary.github.io/#/drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources>

```bibtex
@misc{pharmacolibrary_PropranololSalehifar2017othersources,
  title  = {{Pharmacolibrary model Propranolol_Salehifar2017_other_sources}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources},
  note   = {Parameters from doi:10.15171/apb.2017.024},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropranolol%5D%20Propranolol_Salehifar2017_other_sources&body=Drug%3A%20propranolol%0ARecord%3A%20Propranolol_Salehifar2017_other_sources%0APaper%3A%20Salehifar_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 12:33 UTC</sub>
