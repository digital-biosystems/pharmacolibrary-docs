<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;exenatide&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/&quot;},{&quot;label&quot;:&quot;Li_2012 \u00b7 PD serum insulin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Exenatide_Admiraal2023_reference&quot;,&quot;label&quot;:&quot;Admiraal_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Admiraal2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Exenatide_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Li2012_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Exenatide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# serum insulin — PD  <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Record summary

**As extracted:** Exenatide (concentrations from this paper's PK model) drives serum insulin (in mU/L): indirect response — drug stimulates the production of serum insulin.

**Model:** Model available in **Models**; browser simulation unavailable.

> Exenatide stimulates the zero-order production rate of serum insulin (mU/L) via a proportional indirect response mechanism, with a maximal stimulation (Sm1) of 0.822 and a half-maximal effective concentration (SC50) of 4.02 μg/L. The insulin turnover is characterized by a production rate constant (kinI) of 21.3 mU•L⁻¹•h⁻¹ and an elimination rate constant (koutI) of 2.11 h⁻¹.
>
> <sub>Source-based summary by qwen3.8:27b-mtp-q8_0 from the paper's text; not human-verified</sub>

- **paper:** `Li_2012`
- **model family:** `indirect_response_iii`
- **driver:** `pk_record`
- **tier:** population
- **effect:** stimulation/proportional

## Citation
Li XG et al., Pharmacokinetic/pharmacodynamic studies…, Acta pharmacologica Sinica (2012)
  ·  DOI: [10.1038/aps.2012.33](https://doi.org/10.1038/aps.2012.33)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | S m1 | `Q320` · not captured | 0.822 | not captured | not captured | llm (not captured) | Li_2012:pdv3 |
| PD (effect) | SC 50 | `Q321` · not captured | 4.02 | μg/L | not captured | llm (not captured) | Li_2012:pdv3 |
| PD (effect) | k inI | `Q327` · not captured | 21.3 | mU•L -1 •h -1 | not captured | llm (not captured) | Li_2012:pdv3 |
| PD (effect) | k outI | `Q328` · not captured | 2.11 | h -1 | not captured | llm (not captured) | Li_2012:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Exenatide_Li2012_PD_ins` — turnover (indirect response type III), `response = E0*(1 + Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 10.09 mU/L | — |
| Emax | 0.822 | — |
| EC50 | 4.02 μg/L | 4.02e-06 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 10.09, `at_EC50` = 14.24, `at_inf` = 18.39

Deviations:

- `defaulted_parameters` — gamma
- `pd_binding_e0_from_kin_kout` — no baseline row; E0 = kin/kout (21.3/2.11 = 10.09) — the paper's stated baseline may differ

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


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `ollama:qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `parameters[Q100]` | not captured | +... (error)   0.822 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q320]` | 0.822 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q321].value` | 4.02 | value | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q324]` | not captured | value | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q327].value` | 21.3 | value | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q328].value` | 2.11 | value | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_exenatide/Exenatide_Li2012_PD_ins/Exenatide_Li2012_PD_ins_modelica.zip" download>Exenatide_Li2012_PD_ins_modelica.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_exenatide/Exenatide_Li2012_PD_ins/Exenatide_Li2012_PD_ins_matlab.zip" download>Exenatide_Li2012_PD_ins_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_exenatide/Exenatide_Li2012_PD_ins/Exenatide_Li2012_PD_ins_sbml.zip" download>Exenatide_Li2012_PD_ins_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_exenatide/Exenatide_Li2012_PD_ins/Exenatide_Li2012_PD_ins_cellml.zip" download>Exenatide_Li2012_PD_ins_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [exenatide](drugs/drug_exenatide/)</sub>
