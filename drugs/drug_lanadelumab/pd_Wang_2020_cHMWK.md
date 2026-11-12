<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;lanadelumab&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/&quot;},{&quot;label&quot;:&quot;Wang_2020 \u00b7 PD cHMWK&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Wang_2020_cHMWK&quot;,&quot;label&quot;:&quot;Wang_2020 \u00b7 cHMWK&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/pd_Wang_2020_cHMWK.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Wang_2020_HAE_attack_rate&quot;,&quot;label&quot;:&quot;Wang_2020 \u00b7 HAE attack rate&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/pd_Wang_2020_HAE_attack_rate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# cHMWK — PD  <span class="pk-badge pk-badge--green">Reproduces with caveats</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Lanadelumab (concentrations from this paper's PK model) drives cHMWK: indirect response — drug inhibits the production of cHMWK.

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> Lanadelumab concentrations inhibit the formation (kin) of cHMWK via an indirect-response Imax model, with a maximum inhibition (Imax) of 53.7% and an IC50 of 5.71 µg/mL. The model parameters include a cHMWK formation rate (kin) of 11.8 %/hour and a degradation rate (kout) of 0.367 hour–1.
>
> <sub>Source-based summary by qwen3.8:27b-mtp-q8_0 from the paper's text; not human-verified</sub>

- **paper:** `Wang_2020`
- **model family:** `indirect_response_i`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020)
  ·  DOI: [10.1111/cts.12806](https://doi.org/10.1111/cts.12806)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | K in | `Q327` ·  | 11.8 | %/hour | llm | Wang_2020:pdv3 |
| PD (effect) | K out | `Q328` ·  | 0.367 | hour–1 | llm | Wang_2020:pdv3 |
| PD (effect) | Imax | `Q323` ·  | 53.7 | % | llm | Wang_2020:pdv3 |
| PD (effect) | IC50 | `Q322` ·  | 5.71 | µg/mL | llm | Wang_2020:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Lanadelumab_Wang2020_PD_chmwk` — turnover (indirect response type IV), `response = E0/(1 + Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 32.15 | — |
| Emax | 53.7 | — |
| EC50 | 5.71 µg/mL | 0.00571 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 32.15, `at_EC50` = 1.154, `at_inf` = 0.5878

Deviations:

- `defaulted_parameters` — gamma
- `pd_binding_e0_from_kin_kout` — no baseline row; E0 = kin/kout (11.8/0.367 = 32.15) — the paper's stated baseline may differ
- `pd_binding_emax_not_a_fraction` — type I needs Imax ≤ 1 but the record has 53.7; bound as the reciprocal stimulation form (IV) the paper fitted

## Review

Verdict <span class="pk-badge pk-badge--green">Reproduces with caveats</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response falls, as IDR-IV predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | advisory | only convention defaults (gamma = 1) |

Advisory:

- defaulted: gamma (convention)


**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `ollama:qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |

_All readers agree on the compared fields of this PD record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk/Lanadelumab_Wang2020_PD_chmwk_modelica.zip" download>Lanadelumab_Wang2020_PD_chmwk_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk/Lanadelumab_Wang2020_PD_chmwk_fmi.zip" download>Lanadelumab_Wang2020_PD_chmwk_fmi.zip</a> <span class="pk-size">(4.7 kB)</span><br><a href="models/fmu/PD_IndirectTurnoverSweep.fmu" download>PD_IndirectTurnoverSweep.fmu</a> <span class="pk-size">(1.2 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk/Lanadelumab_Wang2020_PD_chmwk_matlab.zip" download>Lanadelumab_Wang2020_PD_chmwk_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk/Lanadelumab_Wang2020_PD_chmwk_sbml.zip" download>Lanadelumab_Wang2020_PD_chmwk_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk/Lanadelumab_Wang2020_PD_chmwk_cellml.zip" download>Lanadelumab_Wang2020_PD_chmwk_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PD_IndirectTurnoverSweep.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | model | `E0` | 32.15 |  |
| input | model | `EC50` | 0.00571 |  |
| input | model | `Emax` | 53.7 |  |
| input | model | `exposure_per_s` | 0.001 |  |
| input | model | `gamma` | 1 |  |
| output | concentration | `response` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacodynamic.IndirectTurnoverSweep`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**This record:** Pharmacolibrary, model `Lanadelumab_Wang2020_PD_chmwk`. <https://pharmacolibrary.github.io/#/drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk>

```bibtex
@misc{pharmacolibrary_LanadelumabWang2020PDchmwk,
  title  = {{Pharmacolibrary model Lanadelumab_Wang2020_PD_chmwk}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk/Lanadelumab_Wang2020_PD_chmwk_params.json" metaurl="assets/fmu/PD_IndirectTurnoverSweep.vr.json" wasmurl="assets/fmu/PD_IndirectTurnoverSweep.js" controlsurl="drugs/drug_lanadelumab/Lanadelumab_Wang2020_PD_chmwk/Lanadelumab_Wang2020_PD_chmwk_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PD_IndirectTurnoverSweep` · parameters `Lanadelumab_Wang2020_PD_chmwk_params.json` · controls `Lanadelumab_Wang2020_PD_chmwk_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blanadelumab%5D%20pd_Wang_2020_cHMWK&body=Drug%3A%20lanadelumab%0ARecord%3A%20pd_Wang_2020_cHMWK%0APaper%3A%20Wang_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lanadelumab/pd_Wang_2020_cHMWK%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [lanadelumab](drugs/drug_lanadelumab/)</sub>
