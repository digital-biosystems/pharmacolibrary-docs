<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Parker_2001 \u00b7 PD Increase in amplitude in the theta EEG frequency band&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Increase in amplitude in the theta EEG frequency band — PD  <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Record summary

**As extracted:** Clozapine (concentrations from this paper's PK model) drives Increase in amplitude in the theta EEG frequency band (in µV s−1): direct sigmoid Emax (Hill) effect.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> Clozapine plasma concentrations (ng ml−1) stimulate the amplitude of the theta EEG band (µV s−1) in rat via a sigmoid Emax model linked to an effect compartment, with an effect-site disappearance half-life of 2.9 min for theta (Kco 14 h−1). The record reports baseline E0 80 µV s−1 and two stimulatory components (Emax 18 µV s−1, EC50 1260 ng ml−1, N 5.9; and Emax 29 µV s−1, EC50 99 ng ml−1, N 2.4); the excerpts give no theta-band Emax/EC50 values (only beta Emax 45 µV s−1) and do not otherwise describe the mechanism.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Parker_2001`
- **model family:** `sigmoid_emax`
- **driver:** `pk_record`
- **tier:** population
- **effect:** stimulation/additive

## Citation
Parker TJ et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2001)
  ·  DOI: [10.1038/sj.bjp.0703791](https://doi.org/10.1038/sj.bjp.0703791)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Kco | `Q326` · not captured | 14 | h−1 | not captured | llm (not captured) | Parker_2001:pdv3 |
| PD (effect) | E0 | `Q324` · not captured | 80 | µV s−1 | not captured | llm (not captured) | Parker_2001:pdv3 |
| PD (effect) | Emax | `Q320` · not captured | 18 | µV s−1 | not captured | llm (not captured) | Parker_2001:pdv3 |
| PD (effect) | EC50 | `Q321` · not captured | 1260 | ng ml−1 | not captured | llm (not captured) | Parker_2001:pdv3 |
| PD (effect) | N | `Q325` · not captured | 5.9 | not captured | not captured | llm (not captured) | Parker_2001:pdv3 |
| PD (effect) | Emax (2) | `Q320` · not captured | 29 | µV s−1 | not captured | llm (not captured) | Parker_2001:pdv3 |
| PD (effect) | EC50 (2) | `Q321` · not captured | 99 | ng ml−1 | not captured | llm (not captured) | Parker_2001:pdv3 |
| PD (effect) | N (2) | `Q325` · not captured | 2.4 | not captured | not captured | llm (not captured) | Parker_2001:pdv3 |
| variability | σ2 E0 | `Q312` · not captured | 0.057 | not captured | not captured | llm (not captured) | Parker_2001:pdv3 |
| variability | σ2 Emax | `Q312` · not captured | 0.036 | not captured | not captured | llm (not captured) | Parker_2001:pdv3 |
| variability | σ2 Emax (2) | `Q312` · not captured | 0.56 | not captured | not captured | llm (not captured) | Parker_2001:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Clozapine_Parker2001_PD_theta_amplitude` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 80 µV s−1 | — |
| Emax | 18 µV s−1 | — |
| EC50 | 1260 ng ml−1 | 0.00126 kg/m3 |
| gamma | 5.9 | — |

Closed-form check points (response, SI): `at_0` = 80, `at_EC50` = 89, `at_inf` = 98

## Review

Verdict <span class="pk-badge pk-badge--green">reviewed — candidate</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response rises, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clozapine/Clozapine_Parker2001_PD_theta_amplitude/Clozapine_Parker2001_PD_theta_amplitude_modelica.zip" download>Clozapine_Parker2001_PD_theta_amplitude_modelica.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clozapine/Clozapine_Parker2001_PD_theta_amplitude/Clozapine_Parker2001_PD_theta_amplitude_matlab.zip" download>Clozapine_Parker2001_PD_theta_amplitude_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clozapine/Clozapine_Parker2001_PD_theta_amplitude/Clozapine_Parker2001_PD_theta_amplitude_sbml.zip" download>Clozapine_Parker2001_PD_theta_amplitude_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clozapine/Clozapine_Parker2001_PD_theta_amplitude/Clozapine_Parker2001_PD_theta_amplitude_cellml.zip" download>Clozapine_Parker2001_PD_theta_amplitude_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [clozapine](drugs/drug_clozapine/)</sub>
