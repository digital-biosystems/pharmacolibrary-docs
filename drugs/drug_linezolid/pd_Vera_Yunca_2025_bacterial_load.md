<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;linezolid&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/&quot;},{&quot;label&quot;:&quot;Vera-Yunca_2025 \u00b7 PD bacterial load&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linezolid_BandnVilar2022_reference&quot;,&quot;label&quot;:&quot;Band\u00edn-Vilar_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/Linezolid_BandnVilar2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linezolid_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/Linezolid_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vera_Yunca_2025_bacterial_load&quot;,&quot;label&quot;:&quot;Vera-Yunca_2025 \u00b7 bacterial load&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/pd_Vera_Yunca_2025_bacterial_load.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# bacterial load — PD  <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.20).">human + animal</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.20).

## Record summary

**As extracted:** Linezolid (concentrations from the PK model of Bandín-Vilar_2022) drives bacterial load (in log10 cfu/total lung): direct sigmoid Emax (Hill) effect.

**Model:** Model and browser simulation available in **Models** and **Simulation**.

- **paper:** `Vera-Yunca_2025`
- **model family:** `sigmoid_emax`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** inhibition/additive

## Citation
Vera-Yunca D et al., Model-based translation of the PKPD-rel…, The Journal of antimicrobia… (2025)
  ·  DOI: [10.1093/jac/dkaf140](https://doi.org/10.1093/jac/dkaf140)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | E max,LZD | `Q323` ·  | 1.97 | h−1 | direction | Vera-Yunca_2025:pdv3 |
| PD (effect) | EC50,LZD | `Q321` ·  | 0.560 | mg/L | llm | Vera-Yunca_2025:pdv3 |
| PD (effect) | γ LZD | `Q325` ·  | 2.19 |  | llm | Vera-Yunca_2025:pdv3 |
| model term | RatioEMAX,LZD | `Q900` ·  | 0.303 |  | llm | Vera-Yunca_2025:pdv3 |
| PD (effect) | k e0,LZD | `Q326` ·  | 0.0129 | h−1 | llm | Vera-Yunca_2025:pdv3 |
| PD (effect) | B 0 [log10 (cfu/mL)] Initial bacterial load | `Q324` ·  | 6.01 | log10 (cfu/mL) | review_gapfill | Vera-Yunca_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Linezolid_VeraYunca2025_PD_bacterial_load` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 6.01 log10 (cfu/mL) | — |
| Emax | -1.97 h−1 | -0.0005472 1/s |
| EC50 | 0.56 mg/L | 0.00056 kg/m3 |
| gamma | 2.19 | — |

Closed-form check points (response, SI): `at_0` = 6.01, `at_EC50` = 6.01, `at_inf` = 6.009

Deviations:

- `pd_binding_imax_as_negative_emax` — Imax (Q323) enters SigmoidEmaxSweep as −Emax

## Review

Verdict <span class="pk-badge pk-badge--green">Reproduces paper</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response falls, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `einfracz:qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `effect_direction` | inhibition | stimulation | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q320]` |  | 1.97 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q323]` | 1.97 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q326]` | 0.0129 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q900]` | 0.303 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_linezolid/Linezolid_VeraYunca2025_PD_bacterial_load/Linezolid_VeraYunca2025_PD_bacterial_load_modelica.zip" download>Linezolid_VeraYunca2025_PD_bacterial_load_modelica.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_linezolid/Linezolid_VeraYunca2025_PD_bacterial_load/Linezolid_VeraYunca2025_PD_bacterial_load_matlab.zip" download>Linezolid_VeraYunca2025_PD_bacterial_load_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_linezolid/Linezolid_VeraYunca2025_PD_bacterial_load/Linezolid_VeraYunca2025_PD_bacterial_load_sbml.zip" download>Linezolid_VeraYunca2025_PD_bacterial_load_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_linezolid/Linezolid_VeraYunca2025_PD_bacterial_load/Linezolid_VeraYunca2025_PD_bacterial_load_cellml.zip" download>Linezolid_VeraYunca2025_PD_bacterial_load_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PD_SigmoidEmaxSweep.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | model | `E0` | 6.01 |  |
| input | model | `EC50` | 0.00056 |  |
| input | model | `Emax` | -0.0005472 |  |
| input | model | `exposure_per_s` | 0.001 |  |
| input | model | `gamma` | 2.19 |  |
| output | concentration | `response` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacodynamic.SigmoidEmaxSweep`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**This record:** Pharmacolibrary, model `Linezolid_VeraYunca2025_PD_bacterial_load`. <https://pharmacolibrary.github.io/#/drugs/drug_linezolid/Linezolid_VeraYunca2025_PD_bacterial_load>

```bibtex
@misc{pharmacolibrary_LinezolidVeraYunca2025PDbacterialload,
  title  = {{Pharmacolibrary model Linezolid_VeraYunca2025_PD_bacterial_load}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_linezolid/Linezolid_VeraYunca2025_PD_bacterial_load},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_linezolid/Linezolid_VeraYunca2025_PD_bacterial_load/Linezolid_VeraYunca2025_PD_bacterial_load_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_linezolid/Linezolid_VeraYunca2025_PD_bacterial_load/Linezolid_VeraYunca2025_PD_bacterial_load_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PD_SigmoidEmaxSweep` · parameters `Linezolid_VeraYunca2025_PD_bacterial_load_params.json` · controls `Linezolid_VeraYunca2025_PD_bacterial_load_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blinezolid%5D%20pd_Vera_Yunca_2025_bacterial_load&body=Drug%3A%20linezolid%0ARecord%3A%20pd_Vera_Yunca_2025_bacterial_load%0APaper%3A%20Vera-Yunca_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_linezolid/pd_Vera_Yunca_2025_bacterial_load%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [linezolid](drugs/drug_linezolid/)</sub>
