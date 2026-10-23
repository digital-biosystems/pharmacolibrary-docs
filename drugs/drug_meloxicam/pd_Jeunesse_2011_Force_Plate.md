<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;meloxicam&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/&quot;},{&quot;label&quot;:&quot;Jeunesse_2011 \u00b7 PD Vertical normalized maximal force of the paw&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Meloxicam_Aoyama2017_reference&quot;,&quot;label&quot;:&quot;Aoyama_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Meloxicam_Lehr2010_reference&quot;,&quot;label&quot;:&quot;Lehr_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/Meloxicam_Lehr2010_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Vertical normalized maximal force of the paw — PD  <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Record summary

**As extracted:** Meloxicam (concentrations from the PK model of Aoyama_2017) drives Vertical normalized maximal force of the paw (in kg/kg): indirect response — drug inhibits the loss of Vertical normalized maximal force of the paw.

**Model:** Model available in **Models**; browser simulation unavailable.

> Plasma meloxicam concentrations inhibit the production of vertical force via an indirect response model, with an IC50 of 546 ng/ml, a Hill coefficient (gamma) of 3.03, and an Imax of 1. The response is lost with a rate constant (kout) of 3.03 h^-1, and the production rate (kin) is 7.64 Response/h, while a separate IC50 of 68 ng/ml (gamma = 2.27) characterizes the time development of kaolin inflammation.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Jeunesse_2011`
- **model family:** `indirect_response_ii`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** inhibition/proportional

## Citation
Jeunesse EC et al., Paw inflammation model in dogs for prec…, The Journal of pharmacology… (2011)
  ·  DOI: [10.1124/jpet.110.178350](https://doi.org/10.1124/jpet.110.178350)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Zero-order rate constant for production of the response | `Q327` ·  | 7.64 | Response per hour | llm | Jeunesse_2011:pdv3 |
| PD (effect) | Plasma meloxicam IC 50 on the time development of kaolin inflammation | `Q322` ·  | 68 | Nanograms per milliliter | llm | Jeunesse_2011:pdv3 |
| PD (effect) | Hill coefficient associated with IC 50B | `Q325` ·  | 2.27 | No unit | llm | Jeunesse_2011:pdv3 |
| PD (effect) | First-order rate constant for loss of response | `Q328` ·  | 3.03 | h Ϫ1 | llm | Jeunesse_2011:pdv3 |
| PD (effect) | Maximal possible clinical effect (between 0 and 1) | `Q323` ·  | 1 | No unit | llm | Jeunesse_2011:pdv3 |
| PD (effect) | Plasma meloxicam concentration for I maxA /2 for the clinical endpoints | `Q322` ·  | 546 | Nanograms per milliliter | llm | Jeunesse_2011:pdv3 |
| PD (effect) | Hill coefficient associated with IC 50A | `Q325` ·  | 3.03 | No unit | llm | Jeunesse_2011:pdv3 |
| model term | Parameters characterizing time development of kaolin inflammatory action | `Q900` ·  | 303 | Same as kin | llm | Jeunesse_2011:pdv3 |
| model term | Parameters characterizing time development of kaolin inflammatory action | `Q900` ·  | 0.0052 | h Ϫ1 | llm | Jeunesse_2011:pdv3 |
| model term | Parameters characterizing time development of kaolin inflammatory action | `Q900` ·  | 0.71 | h Ϫ1 | llm | Jeunesse_2011:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Meloxicam_Jeunesse2011_PD_force_plate` — turnover (indirect response type II), `response = E0/(1 - Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 2.521 kg/kg | — |
| Emax | 1 | — |
| EC50 | 68 Nanograms per milliliter | — |
| gamma | 2.27 | — |

Closed-form check points (response, SI): `at_0` = 2.521, `at_EC50` = 5.043, `at_inf` = inf

Deviations:

- `pd_binding_e0_from_kin_kout` — no baseline row; E0 = kin/kout (7.64/3.03 = 2.521) — the paper's stated baseline may differ
- `pd_binding_exposure_unit_unresolved` — 'Nanograms per milliliter' — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--orange">Needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | effect_direction 'inhibition' |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |

Advisory:

- exposure unit not resolved to SI — the x axis is in the paper's unit


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `einfracz:qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `model_family` | indirect_response_ii | indirect_response_i | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q100]` |  | 0.71 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q322].value` | 546 | 68 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q325].value` | 3.03 | 2.27 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q900]` | 0.71 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_meloxicam/Meloxicam_Jeunesse2011_PD_force_plate/Meloxicam_Jeunesse2011_PD_force_plate_modelica.zip" download>Meloxicam_Jeunesse2011_PD_force_plate_modelica.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Jeunesse2011_PD_force_plate/Meloxicam_Jeunesse2011_PD_force_plate_matlab.zip" download>Meloxicam_Jeunesse2011_PD_force_plate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Jeunesse2011_PD_force_plate/Meloxicam_Jeunesse2011_PD_force_plate_sbml.zip" download>Meloxicam_Jeunesse2011_PD_force_plate_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Jeunesse2011_PD_force_plate/Meloxicam_Jeunesse2011_PD_force_plate_cellml.zip" download>Meloxicam_Jeunesse2011_PD_force_plate_cellml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**This record:** Pharmacolibrary v26.09, model `Meloxicam_Jeunesse2011_PD_force_plate`. <https://pharmacolibrary.github.io/#/drugs/drug_meloxicam/Meloxicam_Jeunesse2011_PD_force_plate>

```bibtex
@misc{pharmacolibrary_MeloxicamJeunesse2011PDforceplate,
  title  = {{Pharmacolibrary model Meloxicam_Jeunesse2011_PD_force_plate}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_meloxicam/Meloxicam_Jeunesse2011_PD_force_plate},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [meloxicam](drugs/drug_meloxicam/)</sub>
