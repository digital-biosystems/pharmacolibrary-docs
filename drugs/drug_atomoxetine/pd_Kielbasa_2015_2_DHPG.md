<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Kielbasa_2015_2 \u00b7 PD Plasma DHPG&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Li2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Tobin2026_reference&quot;,&quot;label&quot;:&quot;Tobin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Tobin_2026_CYP2D6_Q27&quot;,&quot;label&quot;:&quot;Tobin_2026 \u00b7 CYP2D6&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/pgx_Tobin_2026_CYP2D6_Q27.md&quot;,&quot;status&quot;:&quot;quantitative&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Plasma DHPG — PD  <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Atomoxetine (concentrations from the PK model of Cheng_2024) drives Plasma DHPG (in pg/mL): indirect response — drug inhibits the production of Plasma DHPG.

**Model:** No model was generated from this record.

> Atomoxetine plasma concentration (ng/mL) inhibits the production (Kin) of plasma DHPG (pg/mL) via an inhibitory indirect response model, reflecting NET inhibition reducing intraneuronal NE metabolism to DHPG; key values are baseline DHPG 1240 pg/mL, Imax 0.367, and plasma IC50 2.67 ng/mL (10.5 nM). The record lists Kout 0.777 h⁻¹, but the paper describes the model as inhibition of Kin rather than of elimination.
>
> <sub>Source-based summary by glm-5.3-flash from the paper's text; not human-verified</sub>

- **paper:** `Kielbasa_2015_2`
- **model family:** `indirect_response_i`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Kielbasa W et al., Pharmacodynamics of norepinephrine reup…, Journal of clinical pharmac… (2015)
  ·  DOI: [10.1002/jcph.551](https://doi.org/10.1002/jcph.551)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Baseline | `Q324` ·  | 1240 | pg/mL | llm | Kielbasa_2015_2:pdv3 |
| PD (effect) | K out | `Q328` ·  | 0.777 | h À1 | llm | Kielbasa_2015_2:pdv3 |
| PD (effect) | I max | `Q323` ·  | 0.367 |  | llm | Kielbasa_2015_2:pdv3 |
| PD (effect) | Plasma IC50 | `Q322` ·  | 2.67,10.5 | ng/mL, nM | llm | Kielbasa_2015_2:pdv3 |
| variability | Baseline IPV | `Q312` ·  | 29 | % | llm | Kielbasa_2015_2:pdv3 |
| variability | I max IPV | `Q312` ·  | 24 | % | llm | Kielbasa_2015_2:pdv3 |
| variability | IC50 IPV | `Q312` ·  | 177 | % | llm | Kielbasa_2015_2:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.6:27b-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/79 fields) | 79 |

<details><summary>79 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | atomoxetine, duloxetine, edivoxetine |  | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition |  | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown |  | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_i |  | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | 75 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 67 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 37 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 17.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 12.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 53.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 44.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 40.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 36 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 68 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 18 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 13 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 11 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 12 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 1.23 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 3.18 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.0874 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.0839 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.481 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.895 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.235 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 177 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 241 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 53.3209 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 18.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.37 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.367 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.313 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.329 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.334 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.309 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 24 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 25 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 25 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.529 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.415 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.378 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.747 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.514 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1240 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1080 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1160 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1130 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1080 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 29 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 15 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 23 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 2180 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1880 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 2260 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1850 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1678 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.777 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.525 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 1.37 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.507 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.411 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.166 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.0979 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.0850 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.166 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.0413 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 47 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 74 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 95.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 76.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 954 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 542 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 504 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 1.55 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 1.30 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 1.13 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [atomoxetine](drugs/drug_atomoxetine/)</sub>
