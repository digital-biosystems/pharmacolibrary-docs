<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;escitalopram&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/&quot;},{&quot;label&quot;:&quot;Friberg_2006 \u00b7 PD Heart-rate corrected QT interval&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Escitalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Escitalopram_Poweleit2023_reference&quot;,&quot;label&quot;:&quot;Poweleit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Poweleit2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Heart-rate corrected QT interval — PD  <span class="pk-badge pk-badge--orange">needs review</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Citalopram (concentrations from this paper's PK model) drives Heart-rate corrected QT interval (in ms): delayed effect through an effect compartment.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> Citalopram plasma concentration (mg/l) prolongs the individually heart-rate-corrected QT interval (QTci, ms) via a linear concentration-effect model with an effect compartment (effect delay half-life t½,eq = 1.43 h, t_eq ≈ 1.4 h); the slope is 40.0 ms·l·mg⁻¹, with baseline QTci0 of 429 ms in women and 420 ms in men. Although Emax (20 ms) and EC50 (0.2 mg/l) values appear, the paper states the nonlinear Emax models were overparameterized and the linear model was chosen.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Friberg_2006`
- **model family:** `effect_compartment`
- **driver:** `pk_record`
- **tier:** population
- **effect:** stimulation/additive

## Citation
Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006)
  ·  DOI: [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | QTci0, women | `Q324` · not captured | 429 | ms | not captured | llm (not captured) | Friberg_2006:pdv3 |
| PD (effect) | QTci0, men | `Q324` · not captured | 420 | ms | not captured | llm (not captured) | Friberg_2006:pdv3 |
| PD (effect) | Slope | `Q335` · not captured | 40.0 | ms l mg-1 | not captured | llm (not captured) | Friberg_2006:pdv3 |
| PD (effect) | half-life of effect delay | `Q326` · not captured | 1.43 | h | not captured | llm (not captured) | Friberg_2006:pdv3 |
| model term | age effect on QTci0 | `Q900` · not captured | 1.07 | not captured | not captured | llm (not captured) | Friberg_2006:pdv3 |
| PD (effect) | E max (ms) | `Q320` · not captured | 20 | ms | not captured | review_gapfill (not captured) | Friberg_2006:review |
| PD (effect) | Ec 50 (mg/l -1 ) | `Q321` · not captured | 0.2 | mg/l -1 | not captured | review_gapfill (not captured) | Friberg_2006:review |
| variability | BSV in Slope | `Q312` · not captured | 70.2 | % | not captured | llm (not captured) | Friberg_2006:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Escitalopram_Friberg2006_PD_qtci` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 429 ms | 0.429 s |
| Emax | 20 ms | 0.02 s |
| EC50 | 0.2 mg/l -1 | — |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0.429, `at_EC50` = 0.439, `at_inf` = 0.449

Deviations:

- `defaulted_parameters` — gamma
- `pd_binding_family_inferred` — the record's model family is effect_compartment; read from the parameters: Emax/Imax and EC50/IC50 without a Hill coefficient — Emax
- `pd_binding_exposure_unit_unresolved` — 'mg/l -1' — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response rises, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | advisory | only convention defaults (gamma = 1) |

Advisory:

- defaulted: gamma (convention)
- exposure unit not resolved to SI — the x axis is in the paper's unit


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_escitalopram/Escitalopram_Friberg2006_PD_qtci/Escitalopram_Friberg2006_PD_qtci_modelica.zip" download>Escitalopram_Friberg2006_PD_qtci_modelica.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_escitalopram/Escitalopram_Friberg2006_PD_qtci/Escitalopram_Friberg2006_PD_qtci_matlab.zip" download>Escitalopram_Friberg2006_PD_qtci_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_escitalopram/Escitalopram_Friberg2006_PD_qtci/Escitalopram_Friberg2006_PD_qtci_sbml.zip" download>Escitalopram_Friberg2006_PD_qtci_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_escitalopram/Escitalopram_Friberg2006_PD_qtci/Escitalopram_Friberg2006_PD_qtci_cellml.zip" download>Escitalopram_Friberg2006_PD_qtci_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [escitalopram](drugs/drug_escitalopram/)</sub>
