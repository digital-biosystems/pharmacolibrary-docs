<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;enasidenib&quot;,&quot;href&quot;:&quot;drugs/drug_enasidenib/&quot;},{&quot;label&quot;:&quot;Li_2019 \u00b7 PD 4\u03b2-hydroxycholesterol/cholesterol ratio&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enasidenib_Li2019_reference&quot;,&quot;label&quot;:&quot;Li_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enasidenib/Enasidenib_Li2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# 4β-hydroxycholesterol/cholesterol ratio — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Enasidenib (concentrations from this paper's PK model) drives 4β-hydroxycholesterol/cholesterol ratio: indirect response — drug stimulates the production of 4β-hydroxycholesterol/cholesterol ratio.

**Model:** Model available in **Models**; browser simulation unavailable.

> The plasma concentration of enasidenib acts to stimulate the 4β-hydroxycholesterol/cholesterol ratio via an indirect response mechanism involving CYP3A4 enzyme induction, characterized by a maximum effect (Emax) of 7.36 and a half-maximal effective concentration (EC50) of 31,400 ng/mL. The model further specifies that the formation rate of the marker (KF) is 4.28 × 10⁶ 1/day, the removal rate (K) is 3.69 × 10² 1/day, and the baseline enzyme turnover rate (KO) is fixed at 0.238 1/day.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Li_2019`
- **model family:** `indirect_response_iii`
- **driver:** `pk_record`
- **tier:** population
- **effect:** stimulation/proportional

## Citation
Li Y et al., Modeling and simulation of the endogeno…, Clinical pharmacology : adv… (2019)
  ·  DOI: [10.2147/CPAA.S192687](https://doi.org/10.2147/CPAA.S192687)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | KF | `Q327` · not captured | 4.28 (fixed) | 1/day × 106 | not captured | llm (not captured) | Li_2019:pdv3 |
| PD (effect) | K | `Q328` · not captured | 3.69 | 1/day × 102 | not captured | llm (not captured) | Li_2019:pdv3 |
| PD (effect) | Emax | `Q320` · not captured | 7.36 | not captured | not captured | llm (not captured) | Li_2019:pdv3 |
| PD (effect) | EC50 | `Q321` · not captured | 31,400 | ng/mL | not captured | llm (not captured) | Li_2019:pdv3 |
| PD (effect) | KO | `Q328` · not captured | 0.238 (fixed) | 1/day | not captured | llm (not captured) | Li_2019:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio` — turnover (indirect response type III), `response = E0*(1 + Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | 7.36 | — |
| EC50 | 3.14e+04 ng/mL | 0.0314 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = 0, `at_inf` = 0

Deviations:

- `defaulted_parameters` — E0, gamma

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | effect_direction 'stimulation' |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `einfracz:qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `parameters[Q320].value` | 7.36 | parameter_id | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q327]` | 4.28 (fixed) | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q328].value` | 0.238 (fixed) | 3.69 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enasidenib/Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio/Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio_modelica.zip" download>Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enasidenib/Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio/Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio_matlab.zip" download>Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enasidenib/Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio/Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio_sbml.zip" download>Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enasidenib/Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio/Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio_cellml.zip" download>Enasidenib_Li2019_PD_4_hydroxycholesterol_cholesterol_ratio_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [enasidenib](drugs/drug_enasidenib/)</sub>
