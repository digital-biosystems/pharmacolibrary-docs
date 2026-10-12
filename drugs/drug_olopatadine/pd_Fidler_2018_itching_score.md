<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;olopatadine&quot;,&quot;href&quot;:&quot;drugs/drug_olopatadine/&quot;},{&quot;label&quot;:&quot;Fidler_2018 \u00b7 PD ocular itching score&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# ocular itching score — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Olopatadine (KPD theoretical concentration) drives ocular itching score (in units (0–4, 0.5 unit increments)): direct Emax (saturable) effect.

**Model:** No model was generated from this record.

> Olopatadine dose (as a KPD theoretical concentration, %) acts on the categorical ocular itching score (0–4 units in 0.5 increments) via an inhibitory Emax-type differential odds model, with elimination of the theoretical KPD concentration from the ocular space driven by the observed effect rather than measured concentrations. Key values: Emax 3.40 and EC50 0.03%; the paper does not state kin, kout, ke0, or gamma values.
>
> <sub>Source-based summary by glm-5.3-flash from the paper's text; not human-verified</sub>

- **paper:** `Fidler_2018`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/additive

## Citation
Fidler ML et al., Projected 24-hour post-dose ocular itch…, Journal of pharmacokinetics… (2018)
  ·  DOI: [10.1007/s10928-018-9588-7](https://doi.org/10.1007/s10928-018-9588-7)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Maximum effect, Emax | `Q323` · not captured | 3.40 | not captured | not captured | direction (not captured) | Fidler_2018:pdv3 |
| PD (effect) | EC50 | `Q321` · not captured | 0.03 | % | not captured | llm (not captured) | Fidler_2018:pdv3 |
| — | Vehicle linear shift (Vb) | `Q100` · not captured | − 4.98 | not captured | not captured | nil (not captured) | Fidler_2018:pdv3 |
| model term | ψbaseline on Vb | `Q900` · not captured | 2.16 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| model term | ψbaseline, distribution | `Q900` · not captured | 5.37 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| model term | ψ Olopatadine 0.7 % shift on baseline, distribution | `Q900` · not captured | − 0.64 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | α0.5, Baseline cumulative log-odds | `Q344` · not captured | 8.79 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | α1, Baseline cumulative log-odds | `Q344` · not captured | − 1.47 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | α1.5, Baseline cumulative log-odds | `Q344` · not captured | − 1.03 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | α2, Baseline cumulative log-odds | `Q344` · not captured | − 0.85 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | α2.5, Baseline cumulative log-odds | `Q344` · not captured | − 1.88 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | α3, Baseline cumulative log-odds | `Q344` · not captured | − 2.88 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | α3.5, Baseline cumulative log-odds | `Q344` · not captured | − 3.02 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | α4, Baseline cumulative log-odds | `Q344` · not captured | − 2.14 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | δ2, Drug differential log-odds | `Q345` · not captured | 3.64 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | δ2.5, Drug differential log-odds | `Q345` · not captured | 1.56 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | v2.5, Vehicle differential log-odds | `Q345` · not captured | 2.38 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |
| PD (effect) | v3, Vehicle differential log-odds | `Q345` · not captured | 1.07 | not captured | not captured | llm (not captured) | Fidler_2018:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `ollama:glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | secondary_empty | 0.0 (0/10 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | olopatadine (KPD theoretical concentration) | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `effect_direction` | inhibition | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | additive | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | emax | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q100]` | − 4.98 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q321]` | 0.03 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q323]` | 3.40 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q344]` | − 2.14 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q345]` | 1.07 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q900]` | − 0.64 | not captured | only_one_extracted |

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
<sub>← back to [olopatadine](drugs/drug_olopatadine/)</sub>
