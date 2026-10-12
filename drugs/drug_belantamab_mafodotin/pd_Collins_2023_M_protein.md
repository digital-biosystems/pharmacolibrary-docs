<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Collins_2023 \u00b7 PD serum M-protein concentration&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# serum M-protein concentration — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Belantamab mafodotin (measured concentrations) drives serum M-protein concentration (in g/L): disease-progression model.

**Model:** No model was generated from this record.

> Belantamab mafodotin concentrations drove a logistic tumor-growth inhibition model of serum M-protein, promoting tumor shrinkage (kill) relative to growth, with resistance reducing shrinkage over time and an effect-compartment delay; the paper does not describe direct inhibition of M-protein production or elimination. The reported growth and kill rates were 0.0174 and 0.0207 day−1, respectively, the resistance rate was 0.0024 day−1, and the effect-compartment rate constant (KEO) was 0.0284 day−1; reported exposure-effect terms were A50 1.16 μg/ml and slope 0.619 ml/μg.
>
> <sub>Source-based summary by gpt-6-luna from the paper's text; not human-verified</sub>

- **paper:** `Collins_2023`
- **model family:** `disease_progression`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Collins J et al., Longitudinal efficacy and safety modeli…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.13016](https://doi.org/10.1002/psp4.13016)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| model term | TVKGR | `Q900` · not captured | 0.0174 (0.0146, 0.0208) | day−1 | not captured | llm (not captured) | Collins_2023:pdv3 |
| model term | TVKD | `Q900` · not captured | 0.0207 (0.0159, 0.0268) | day−1 | not captured | llm (not captured) | Collins_2023:pdv3 |
| model term | TVLAMBDA | `Q900` · not captured | 0.0024 (0.00123, 0.00480) | day−1 | not captured | llm (not captured) | Collins_2023:pdv3 |
| PD (effect) | Slope | `Q335` · not captured | 0.619 (0.554, 0.691) | ml/μg | not captured | llm (not captured) | Collins_2023:pdv3 |
| PD (effect) | TVKEO | `Q326` · not captured | 0.0284 (0.0248, 0.0326) | day−1 | not captured | llm (not captured) | Collins_2023:pdv3 |
| model term | A50 | `Q900` · not captured | 1.16 (0.839, 1.481) | μg/ml | not captured | llm (not captured) | Collins_2023:pdv3 |
| model term | Effect of baseline sBCMA on KEO | `Q900` · not captured | −0.414 (−0.561, −0.267) | not captured | not captured | llm (not captured) | Collins_2023:pdv3 |
| model term | Effect of MEDFL on KEO | `Q900` · not captured | 0.108 (0.0617, 0.187) | not captured | not captured | llm (not captured) | Collins_2023:pdv3 |
| model term | Effect of bB2M on KGR | `Q900` · not captured | 0.219 (0.011, 0.427) | not captured | not captured | llm (not captured) | Collins_2023:pdv3 |
| model term | Effect of bMPROT &lt; 20 on KD | `Q900` · not captured | 1.41 (1.08, 1.85) | not captured | not captured | llm (not captured) | Collins_2023:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `openai:gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:qwen3.8-27b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:qwen3.8-27b` | `effect_direction` | stimulation | inhibition | mismatch |
| `einfracz:qwen3.8-27b` | `effect_form` | unknown | proportional | mismatch |
| `einfracz:qwen3.8-27b` | `parameters[Q100]` | not captured | 0.0174 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q321]` | not captured | 1.16 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q326].value` | 0.0284 (0.0248, 0.0326) | 0.0284 | mismatch |
| `einfracz:qwen3.8-27b` | `parameters[Q331]` | not captured | 0.0207 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q335].value` | 0.619 (0.554, 0.691) | 0.619 | mismatch |
| `einfracz:qwen3.8-27b` | `parameters[Q342]` | not captured | 0.0024 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q900]` | 1.41 (1.08, 1.85) | not captured | only_one_extracted |

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
<sub>← back to [belantamab mafodotin](drugs/drug_belantamab_mafodotin/)</sub>
