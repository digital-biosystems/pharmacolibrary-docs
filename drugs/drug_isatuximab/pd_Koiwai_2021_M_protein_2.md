<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;isatuximab&quot;,&quot;href&quot;:&quot;drugs/drug_isatuximab/&quot;},{&quot;label&quot;:&quot;Koiwai_2021 \u00b7 PD serum M-protein concentrations&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isatuximab_Fau2020_reference&quot;,&quot;label&quot;:&quot;Fau_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# serum M-protein concentrations — PD  <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Isatuximab and lenalidomide drive serum M-protein concentrations (in g/L): disease-progression model.

**Model:** Model available in **Models**; browser simulation unavailable.

> Isatuximab concentration linearly stimulates elimination of serum M-protein (g/L) in the tumor-growth-inhibition model; the elimination-stimulation coefficient KD is 0.0193 mol⁻¹·d⁻¹, and the untreated M-protein proliferation rate KL is 0.00364 d⁻¹.
>
> <sub>Source-based summary by gpt-6-luna from the paper's text; not human-verified</sub>

- **paper:** `Koiwai_2021`
- **model family:** `disease_progression`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/proportional

## Citation
Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021)
  ·  DOI: [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | M0 | `Q324` · not captured | 23.8 | g·L−1 | not captured | llm (not captured) | Koiwai_2021:pdv3 |
| PD (effect) | KL | `Q340` · not captured | 0.00364 | d−1 | not captured | llm (not captured) | Koiwai_2021:pdv3 |
| PD (effect) | KD | `Q335` · not captured | 0.0193 | mol−1·d−1 | not captured | llm (not captured) | Koiwai_2021:pdv3 |
| — | R | `Q100` · not captured | 0.0175 | d−1 | not captured | nil (not captured) | Koiwai_2021:pdv3 |
| model term | K | `Q900` · not captured | 2.69 | not captured | not captured | llm (not captured) | Koiwai_2021:pdv3 |
| PD (effect) | λ0 | `Q342` · not captured | 0.0000255 | not captured | not captured | llm (not captured) | Koiwai_2021:pdv3 |
| model term | βT | `Q900` · not captured | 0.803 | not captured | not captured | llm (not captured) | Koiwai_2021:pdv3 |
| model term | βM | `Q900` · not captured | 0.0528 | not captured | not captured | llm (not captured) | Koiwai_2021:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Isatuximab_Koiwai2021_PD_m_protein_2` — linear, `response = E0 + slope*exposure`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 23.8 g·L−1 | 23.8 kg/m3 |
| slope | 0.0193 mol−1·d−1 | — |

Closed-form check points (response, SI): `at_0` = 23.8, `per_exposure_unit` = 0.0193

Deviations:

- `pd_binding_family_inferred` — the record's model family is disease_progression; read from the parameters: a slope and no Emax — linear

## Review

Verdict <span class="pk-badge pk-badge--green">reviewed — candidate</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | a line has no plateau to compare |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `openai:gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:qwen3.8-27b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:qwen3.8-27b` | `driver_compound` | isatuximab and lenalidomide | isatuximab, lenalidomide | mismatch |
| `einfracz:qwen3.8-27b` | `model_family` | disease_progression | indirect_response_iii | mismatch |
| `einfracz:qwen3.8-27b` | `parameters[Q100]` | 0.0175 | not captured | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q327]` | not captured | 0.00364 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q328]` | not captured | 0.0193 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q335]` | 0.0193 | not captured | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q337]` | not captured | 0.0175 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q340]` | 0.00364 | not captured | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q342]` | 0.0000255 | not captured | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q900]` | 0.0528 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_isatuximab/Isatuximab_Koiwai2021_PD_m_protein_2/Isatuximab_Koiwai2021_PD_m_protein_2_modelica.zip" download>Isatuximab_Koiwai2021_PD_m_protein_2_modelica.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_isatuximab/Isatuximab_Koiwai2021_PD_m_protein_2/Isatuximab_Koiwai2021_PD_m_protein_2_matlab.zip" download>Isatuximab_Koiwai2021_PD_m_protein_2_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_isatuximab/Isatuximab_Koiwai2021_PD_m_protein_2/Isatuximab_Koiwai2021_PD_m_protein_2_sbml.zip" download>Isatuximab_Koiwai2021_PD_m_protein_2_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_isatuximab/Isatuximab_Koiwai2021_PD_m_protein_2/Isatuximab_Koiwai2021_PD_m_protein_2_cellml.zip" download>Isatuximab_Koiwai2021_PD_m_protein_2_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [isatuximab](drugs/drug_isatuximab/)</sub>
