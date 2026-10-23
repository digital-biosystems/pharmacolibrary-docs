<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ajmaline&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/&quot;},{&quot;label&quot;:&quot;Yasuhara_1987 \u00b7 PD QRS interval change&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ajmaline_Iven1977_reference&quot;,&quot;label&quot;:&quot;Iven_1977_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# QRS interval change — PD  <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Record summary

**As extracted:** Ajmaline (concentrations from this paper's PK model) drives QRS interval change (in msec): delayed effect through an effect compartment.

**Model:** Model available in **Models**; browser simulation unavailable.

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
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | P | `Q326` ·  | 0.043 | min -1 | llm | Yasuhara_1987:pdv3 |
| PD (effect) | Rm | `Q320` ·  | 15.2 | msec | llm | Yasuhara_1987:pdv3 |
| PD (effect) | Ce(50) | `Q321` ·  | 0.362 | µg/ml | llm | Yasuhara_1987:pdv3 |
| PD (effect) | P | `Q326` ·  | 0.187 | min -1 | llm | Yasuhara_1987:pdv3 |
| PD (effect) | Rm | `Q320` ·  | 13.1 | msec | llm | Yasuhara_1987:pdv3 |
| PD (effect) | Ce(50) | `Q321` ·  | 0.413 | µg/ml | llm | Yasuhara_1987:pdv3 |
| PD (effect) | P | `Q326` ·  | 0.164 | min -1 | llm | Yasuhara_1987:pdv3 |
| PD (effect) | Rm | `Q320` ·  | 16.6 | msec | llm | Yasuhara_1987:pdv3 |
| PD (effect) | Ce(50) | `Q321` ·  | 0.371 | µg/ml | llm | Yasuhara_1987:pdv3 |
| PD (effect) | P | `Q326` ·  | 0.041 | min -1 | llm | Yasuhara_1987:pdv3 |
| PD (effect) | Rm | `Q320` ·  | 18.5 | msec | llm | Yasuhara_1987:pdv3 |
| PD (effect) | Ce(50) | `Q321` ·  | 0.400 | µg/ml | llm | Yasuhara_1987:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

Verdict <span class="pk-badge pk-badge--orange">Needs review</span> · route to `scholar`

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


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `ollama:qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.143 (1/7 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | ajmaline | unbound plasma ajmaline (Pf) | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | additive | proportional | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | effect_compartment | emax | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q320].value` | 18.5 | 15.2 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q321].value` | 0.400 | 0.362 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q326].value` | 0.041 | 0.043 | mismatch |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_matlab.zip" download>Ajmaline_Yasuhara1987_PD_qrs_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_sbml.zip" download>Ajmaline_Yasuhara1987_PD_qrs_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs/Ajmaline_Yasuhara1987_PD_qrs_cellml.zip" download>Ajmaline_Yasuhara1987_PD_qrs_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**This record:** Pharmacolibrary v26.09, model `Ajmaline_Yasuhara1987_PD_qrs`. <https://pharmacolibrary.github.io/#/drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs>

```bibtex
@misc{pharmacolibrary_AjmalineYasuhara1987PDqrs,
  title  = {{Pharmacolibrary model Ajmaline_Yasuhara1987_PD_qrs}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ajmaline/Ajmaline_Yasuhara1987_PD_qrs},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bajmaline%5D%20pd_Yasuhara_1987_QRS&body=Drug%3A%20ajmaline%0ARecord%3A%20pd_Yasuhara_1987_QRS%0APaper%3A%20Yasuhara_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ajmaline/pd_Yasuhara_1987_QRS%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [ajmaline](drugs/drug_ajmaline/)</sub>
