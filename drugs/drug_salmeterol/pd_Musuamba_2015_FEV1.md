<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salmeterol&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/&quot;},{&quot;label&quot;:&quot;Musuamba_2015 \u00b7 PD trough FEV1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salmeterol_Berkhout2025_reference&quot;,&quot;label&quot;:&quot;Berkhout_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Berkhout2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Himstedt2020_salmeterol&quot;,&quot;label&quot;:&quot;Himstedt_2020_salmeterol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Thoueille2026_reference&quot;,&quot;label&quot;:&quot;Thoueille_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# trough FEV1 — PD  <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Salmeterol (concentrations from the PK model of Berkhout_2025) drives trough FEV1 (in L): indirect response — drug stimulates the production of trough FEV1.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> Salmeterol (inhaled, 50 μg twice daily) stimulates the production (Kin) of trough FEV1 via an indirect response model with a multiplicative Emax function on Kin, driven by dose (μg) rather than measured concentrations. Key parameters: Emax = 0.36, EDK50/Emax = 8.66 μg, KDE = 52.46 hr−1, Kin = 0.0004 L/day, with disease baseline intercept 1.16 L and linear disease progression slope −0.596 L/day; severity and reversibility modifiers on Emax were 0.94 and 1.05.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Musuamba_2015`
- **model family:** `indirect_response_iii`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** stimulation/proportional

## Citation
Musuamba FT et al., Prediction of disease progression, trea…, Pharmaceutical research (2015)
  ·  DOI: [10.1007/s11095-014-1490-4](https://doi.org/10.1007/s11095-014-1490-4)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | ΘTVEmax | `Q320` · not captured | 0.36 | not captured | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| PD (effect) | ΘEDK50/Emax | `Q321` · not captured | 8.66 | μg | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| PD (effect) | ΘKDE | `Q326` · not captured | 52.46 | hr−1 | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| PD (effect) | ΘInt_Dis | `Q324` · not captured | 1.16 | L | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| PD (effect) | ΘSlope_Dis | `Q340` · not captured | −0.596 | L/day | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| PD (effect) | ΘKin | `Q327` · not captured | 0.0004 | L/day | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| model term | Θseverity on Emax | `Q900` · not captured | 0.94 | not captured | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| model term | Θreversibility on Emax | `Q900` · not captured | 1.05 | not captured | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| variability | IIVEmax | `Q312` · not captured | 70 | CV% | not captured | llm (not captured) | Musuamba_2015:pdv3 |
| variability | IIVKin | `Q312` · not captured | 8 | CV% | not captured | llm (not captured) | Musuamba_2015:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Salmeterol_Musuamba2015_PD_fev1` — turnover (indirect response type III), `response = E0*(1 + Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 1.16 L | 0.00116 m3 |
| Emax | 0.36 | — |
| EC50 | 8.66 μg | 8.66e-09 kg |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0.00116, `at_EC50` = 0.001369, `at_inf` = 0.001578

Deviations:

- `defaulted_parameters` — gamma

## Review

Verdict <span class="pk-badge pk-badge--green">accepted (caveats)</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response rises, as IDR-III predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | advisory | only convention defaults (gamma = 1) |

Advisory:

- defaulted: gamma (convention)


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `ollama:glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | secondary_empty | 0.0 (0/11 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | salmeterol | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `effect_direction` | stimulation | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | proportional | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | indirect_response_iii | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q320]` | 0.36 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q321]` | 8.66 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q324]` | 1.16 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q326]` | 52.46 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q327]` | 0.0004 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q340]` | −0.596 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q900]` | 1.05 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_salmeterol/Salmeterol_Musuamba2015_PD_fev1/Salmeterol_Musuamba2015_PD_fev1_modelica.zip" download>Salmeterol_Musuamba2015_PD_fev1_modelica.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_salmeterol/Salmeterol_Musuamba2015_PD_fev1/Salmeterol_Musuamba2015_PD_fev1_matlab.zip" download>Salmeterol_Musuamba2015_PD_fev1_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_salmeterol/Salmeterol_Musuamba2015_PD_fev1/Salmeterol_Musuamba2015_PD_fev1_sbml.zip" download>Salmeterol_Musuamba2015_PD_fev1_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_salmeterol/Salmeterol_Musuamba2015_PD_fev1/Salmeterol_Musuamba2015_PD_fev1_cellml.zip" download>Salmeterol_Musuamba2015_PD_fev1_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [salmeterol](drugs/drug_salmeterol/)</sub>
