<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;guselkumab&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/&quot;},{&quot;label&quot;:&quot;Chen_2022 \u00b7 PD American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guselkumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Guselkumab_Yao2018_reference&quot;,&quot;label&quot;:&quot;Yao_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_Yao2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Guselkumab_Chen2022_reference&quot;,&quot;label&quot;:&quot;Chen_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_Chen2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria — PD  <span class="pk-badge pk-badge--orange">needs review</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Guselkumab (concentrations from this paper's PK model) drives American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria: indirect response — drug inhibits the production of American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria.

**Model:** Model available in **Models**; browser simulation unavailable.

> The model describes an indirect response mechanism where guselkumab serum concentrations inhibit the production of the clinical response (ACR improvement) with an EC50 of 0.173 µg/ml and a kout of 0.0218 1/day. The paper characterizes this as a latent variable indirect response model where the drug exposure drives the time course of the ACR response, consistent with the proportional inhibition parameter set (PBMX=4.94, DEMX=2.75).
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Chen_2022`
- **model family:** `indirect_response_i`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022)
  ·  DOI: [10.1111/cts.13197](https://doi.org/10.1111/cts.13197)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| — | PBMX | `Q100` · not captured | 4.94 | not captured | not captured | nil (not captured) | Chen_2022:pdv3 |
| PD (effect) | kout | `Q328` · not captured | 0.0218 | 1/day | not captured | llm (not captured) | Chen_2022:pdv3 |
| PD (effect) | EC50 | `Q321` · not captured | 0.173 | µg/ml | not captured | llm (not captured) | Chen_2022:pdv3 |
| PD (effect) | DEMX | `Q323` · not captured | 2.75 | not captured | not captured | direction (not captured) | Chen_2022:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Guselkumab_Chen2022_PD_acr20_acr50_acr70_4` — turnover (indirect response type IV), `response = E0/(1 + Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | 2.75 | — |
| EC50 | 0.173 µg/ml | 0.000173 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = 0, `at_inf` = 0

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_emax_not_a_fraction` — type I needs Imax ≤ 1 but the record has 2.75; bound as the reciprocal stimulation form (IV) the paper fitted

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | effect_direction 'inhibition' |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_guselkumab/Guselkumab_Chen2022_PD_acr20_acr50_acr70_4/Guselkumab_Chen2022_PD_acr20_acr50_acr70_4_modelica.zip" download>Guselkumab_Chen2022_PD_acr20_acr50_acr70_4_modelica.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_guselkumab/Guselkumab_Chen2022_PD_acr20_acr50_acr70_4/Guselkumab_Chen2022_PD_acr20_acr50_acr70_4_matlab.zip" download>Guselkumab_Chen2022_PD_acr20_acr50_acr70_4_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_guselkumab/Guselkumab_Chen2022_PD_acr20_acr50_acr70_4/Guselkumab_Chen2022_PD_acr20_acr50_acr70_4_sbml.zip" download>Guselkumab_Chen2022_PD_acr20_acr50_acr70_4_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_guselkumab/Guselkumab_Chen2022_PD_acr20_acr50_acr70_4/Guselkumab_Chen2022_PD_acr20_acr50_acr70_4_cellml.zip" download>Guselkumab_Chen2022_PD_acr20_acr50_acr70_4_cellml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [guselkumab](drugs/drug_guselkumab/)</sub>
