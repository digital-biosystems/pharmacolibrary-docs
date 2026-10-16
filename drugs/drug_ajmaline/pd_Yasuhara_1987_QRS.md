<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ajmaline&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/&quot;},{&quot;label&quot;:&quot;Yasuhara_1987 \u00b7 PD QRS interval change&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ajmaline_Iven1977_reference&quot;,&quot;label&quot;:&quot;Iven_1977_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yasuhara_1987_PQ&quot;,&quot;label&quot;:&quot;Yasuhara_1987 \u00b7 PQ&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/pd_Yasuhara_1987_PQ.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yasuhara_1987_QRS&quot;,&quot;label&quot;:&quot;Yasuhara_1987 \u00b7 QRS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/pd_Yasuhara_1987_QRS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# QRS interval change — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.429), einfracz:gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Record summary

**As extracted:** Ajmaline (concentrations from this paper's PK model) drives QRS interval change (in msec): delayed effect through an effect compartment.

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> The paper describes an effect compartment model where the unbound plasma concentration of ajmaline drives the prolongation of the QRS interval, with the effect compartment linked to the central compartment by a first-order rate constant. The estimated parameters for the four dogs include effect compartment rate constants (P) ranging from 0.041 to 0.187 min⁻¹, maximum response values (Rm) from 13.1 to 18.5 msec, and half-maximal effective concentrations (Ce50) from 0.362 to 0.413 µg/ml.
>
> <sub>Source-based summary by qwen3.8:27b-mtp-q8_0 from the paper's text; not human-verified</sub>

- **paper:** `Yasuhara_1987`
- **model family:** `effect_compartment`
- **driver:** `pk_record`
- **tier:** descriptive
- **effect:** stimulation/additive

## Citation
Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987)
  ·  DOI: [10.1007/BF01062938](https://doi.org/10.1007/BF01062938)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | P | `Q326` · not captured | 0.043 | min -1 | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | Rm | `Q320` · not captured | 15.2 | msec | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | Ce(50) | `Q321` · not captured | 0.362 | µg/ml | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | P | `Q326` · not captured | 0.187 | min -1 | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | Rm | `Q320` · not captured | 13.1 | msec | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | Ce(50) | `Q321` · not captured | 0.413 | µg/ml | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | P | `Q326` · not captured | 0.164 | min -1 | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | Rm | `Q320` · not captured | 16.6 | msec | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | Ce(50) | `Q321` · not captured | 0.371 | µg/ml | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | P | `Q326` · not captured | 0.041 | min -1 | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | Rm | `Q320` · not captured | 18.5 | msec | not captured | llm (not captured) | Yasuhara_1987:pdv3 |
| PD (effect) | Ce(50) | `Q321` · not captured | 0.400 | µg/ml | not captured | llm (not captured) | Yasuhara_1987:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Ajmaline_Yasuhara1987_PD_qrs` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | 15.2 msec | 0.0152 s |
| EC50 | 0.362 µg/ml | 0.000362 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = 0.0076, `at_inf` = 0.0152

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_family_inferred` — the record's model family is effect_compartment; read from the parameters: Emax/Imax and EC50/IC50 without a Hill coefficient — Emax

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response rises, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `ollama:qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `ollama:gpt-oss:120b` | not confirmed | 0.429 (3/7 fields) | 4 |
| `einfracz:gpt-oss-120b` | not confirmed | 0.143 (1/7 fields) | 6 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | ajmaline | unbound plasma ajmaline (Pf) | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | additive | proportional | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | effect_compartment | emax | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q320].value` | 18.5 | 15.2 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q321].value` | 0.400 | 0.362 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q326].value` | 0.041 | 0.043 | mismatch |
| `ollama:gpt-oss:120b` | `driver_compound` | ajmaline | unbound plasma ajmaline (Pf) | mismatch |
| `ollama:gpt-oss:120b` | `parameters[Q320].value` | 18.5 | : 15.2 (Dog 1), 13.1 (Dog 2), 16.6 (Dog 3), 18.5 (Dog 4) | mismatch |
| `ollama:gpt-oss:120b` | `parameters[Q321].value` | 0.400 | : 0.362 (Dog 1), 0.413 (Dog 2), 0.371 (Dog 3), 0.400 (Dog 4) | mismatch |
| `ollama:gpt-oss:120b` | `parameters[Q326].value` | 0.041 | : 0.043 (Dog 1), 0.187 (Dog 2), 0.164 (Dog 3), 0.041 (Dog 4) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_modelica.zip" download>Ajmaline_Yasuhara1987_PD_qrs_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_matlab.zip" download>Ajmaline_Yasuhara1987_PD_qrs_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_sbml.zip" download>Ajmaline_Yasuhara1987_PD_qrs_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_cellml.zip" download>Ajmaline_Yasuhara1987_PD_qrs_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PD_SigmoidEmaxSweep.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PD_SigmoidEmaxSweep` · parameters `Ajmaline_Yasuhara1987_PD_qrs_params.json` · controls `Ajmaline_Yasuhara1987_PD_qrs_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [ajmaline](drugs/drug_ajmaline/)</sub>
