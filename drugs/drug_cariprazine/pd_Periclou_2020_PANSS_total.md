<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;cariprazine&quot;,&quot;href&quot;:&quot;drugs/drug_cariprazine/&quot;},{&quot;label&quot;:&quot;Periclou_2020 \u00b7 PD Positive and Negative Syndrome Scale total score&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Positive and Negative Syndrome Scale total score — PD  <span class="pk-badge pk-badge--orange">needs review</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Total cariprazine (sum of cariprazine, DCAR, and DDCAR) (measured concentrations) drive Positive and Negative Syndrome Scale total score: direct sigmoid Emax (Hill) effect.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> Total cariprazine active moiety (cariprazine + DCAR + DDCAR, averaged concentration Cave, nM) acts on PANSS total score via a sigmoid Emax model as a proportional inhibitory effect on baseline PANSS (PANSS0 = 96.4), with Emax = 0.118 (11.8% reduction; 3.11% in study RGH-MD-03), EC50 = 55.0 nM, and Hill coefficient γ = 2.11; the placebo time course was described by a Weibull function (PLmax = 0.263, TD = 36.8 days, WPOW = 1.14).
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Periclou_2020`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020)
  ·  DOI: [10.1111/cts.12720](https://doi.org/10.1111/cts.12720)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | PANSS0 | `Q324` · not captured | 96.4 | not captured | not captured | llm (not captured) | Periclou_2020:pdv3 |
| PD (effect) | PLmax | `Q341` · not captured | 0.263 | not captured | not captured | llm (not captured) | Periclou_2020:pdv3 |
| PD (effect) | TD (days) | `Q343` · not captured | 36.8 | days | not captured | llm (not captured) | Periclou_2020:pdv3 |
| PD (effect) | WPOW | `Q343` · not captured | 1.14 | not captured | not captured | llm (not captured) | Periclou_2020:pdv3 |
| PD (effect) | Emax | `Q323` · not captured | 0.118 | not captured | not captured | direction (not captured) | Periclou_2020:pdv3 |
| PD (effect) | EC50 (nM) | `Q321` · not captured | 55.0 | nM | not captured | llm (not captured) | Periclou_2020:pdv3 |
| PD (effect) | γ | `Q325` · not captured | 2.11 | not captured | not captured | llm (not captured) | Periclou_2020:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Cariprazine_Periclou2020_PD_panss_total` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 96.4 | — |
| Emax | -0.118 | — |
| EC50 | 55 nM | — |
| gamma | 2.11 | — |

Closed-form check points (response, SI): `at_0` = 96.4, `at_EC50` = 96.34, `at_inf` = 96.28

Deviations:

- `pd_binding_imax_as_negative_emax` — Imax (Q323) enters SigmoidEmaxSweep as −Emax
- `pd_binding_exposure_unit_unresolved` — 'nM' — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response falls, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |

Advisory:

- exposure unit not resolved to SI — the x axis is in the paper's unit


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2020_PD_panss_total/Cariprazine_Periclou2020_PD_panss_total_modelica.zip" download>Cariprazine_Periclou2020_PD_panss_total_modelica.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2020_PD_panss_total/Cariprazine_Periclou2020_PD_panss_total_matlab.zip" download>Cariprazine_Periclou2020_PD_panss_total_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2020_PD_panss_total/Cariprazine_Periclou2020_PD_panss_total_sbml.zip" download>Cariprazine_Periclou2020_PD_panss_total_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2020_PD_panss_total/Cariprazine_Periclou2020_PD_panss_total_cellml.zip" download>Cariprazine_Periclou2020_PD_panss_total_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [cariprazine](drugs/drug_cariprazine/)</sub>
