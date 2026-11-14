<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;dacarbazine&quot;,&quot;href&quot;:&quot;drugs/drug_dacarbazine/&quot;},{&quot;label&quot;:&quot;Osieka_1984 \u00b7 PD Growth delay (GD)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dacarbazine_Middleton2000_reference&quot;,&quot;label&quot;:&quot;Middleton_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dacarbazine/Dacarbazine_Middleton2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Osieka_1984_GD&quot;,&quot;label&quot;:&quot;Osieka_1984 \u00b7 GD&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_dacarbazine/pd_Osieka_1984_GD.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Growth delay (GD) — PD  <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Record summary

**As extracted:** Dacarbazine (the dose) drives Growth delay (GD): direct linear effect.

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> In this study, the dose of dacarbazine (expressed in mg/kg as a fraction of LD10/30) was found to linearly inhibit the measured response of Growth Delay (GD) values in human melanoma xenografts, calculated via linear regression with a slope of 2.67. The paper does not specify the specific pharmacodynamic mechanism (e.g., production or elimination rates) or potency parameters like EC50 or IC50 for this model.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Osieka_1984`
- **model family:** `linear`
- **driver:** `dose_only`
- **tier:** descriptive
- **effect:** inhibition/additive

## Citation
Osieka R, Primary and acquired resistance to anti…, Cancer (1984)
  ·  DOI: [10.1002/1097-0142(19840915)54:1+<1168::aid-cncr2820541313>3.0.co;2-z](https://doi.org/10.1002/1097-0142(19840915)54:1+<1168::aid-cncr2820541313>3.0.co;2-z)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | slope | `Q335` ·  | 2.67 |  | llm | Osieka_1984:pdv3 |
| — | intercept | `Q100` ·  | -1.1 |  | nil | Osieka_1984:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Dacarbazine_Osieka1984_PD_gd` — linear, `response = E0 + slope*exposure`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| slope | 2.67 | 2.67e+06 (1)/(1) |

Closed-form check points (response, SI): `at_0` = 0, `per_exposure_unit` = 2.67e+06

Deviations:

- `defaulted_parameters` — E0
- `pd_binding_slope_unit_assumed` — slope unit '(none)' read as response per mg/kg

## Review

Verdict <span class="pk-badge pk-badge--orange">Needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | a line has no plateau to compare |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `einfracz:qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `parameters[Q100]` | -1.1 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q324]` |  | -1.1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd/Dacarbazine_Osieka1984_PD_gd_modelica.zip" download>Dacarbazine_Osieka1984_PD_gd_modelica.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd/Dacarbazine_Osieka1984_PD_gd_fmi.zip" download>Dacarbazine_Osieka1984_PD_gd_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><span class="pk-missing">generic PD_LinearSweep.fmu not published yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd/Dacarbazine_Osieka1984_PD_gd_matlab.zip" download>Dacarbazine_Osieka1984_PD_gd_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd/Dacarbazine_Osieka1984_PD_gd_sbml.zip" download>Dacarbazine_Osieka1984_PD_gd_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd/Dacarbazine_Osieka1984_PD_gd_cellml.zip" download>Dacarbazine_Osieka1984_PD_gd_cellml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PD_LinearSweep.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | model | `E0` | 0 |  |
| input | model | `exposure_per_s` | 1e-06 |  |
| input | model | `slope` | 2.67e+06 |  |
| output | concentration | `response` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacodynamic.LinearSweep`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**This record:** Pharmacolibrary, model `Dacarbazine_Osieka1984_PD_gd`. <https://pharmacolibrary.github.io/#/drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd>

```bibtex
@misc{pharmacolibrary_DacarbazineOsieka1984PDgd,
  title  = {{Pharmacolibrary model Dacarbazine_Osieka1984_PD_gd}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd/Dacarbazine_Osieka1984_PD_gd_params.json" metaurl="assets/fmu/PD_LinearSweep.vr.json" wasmurl="assets/fmu/PD_LinearSweep.js" controlsurl="drugs/drug_dacarbazine/Dacarbazine_Osieka1984_PD_gd/Dacarbazine_Osieka1984_PD_gd_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PD_LinearSweep` · parameters `Dacarbazine_Osieka1984_PD_gd_params.json` · controls `Dacarbazine_Osieka1984_PD_gd_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdacarbazine%5D%20pd_Osieka_1984_GD&body=Drug%3A%20dacarbazine%0ARecord%3A%20pd_Osieka_1984_GD%0APaper%3A%20Osieka_1984%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dacarbazine/pd_Osieka_1984_GD%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [dacarbazine](drugs/drug_dacarbazine/)</sub>
