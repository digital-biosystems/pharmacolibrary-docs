<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;nicotinic acid&quot;,&quot;href&quot;:&quot;drugs/drug_nicotinic_acid/&quot;},{&quot;label&quot;:&quot;Andersson_2017 \u00b7 PD FFA&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# FFA — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Record summary

**As extracted:** NiAc (measured concentrations) drives FFA (in mM): indirect response — drug inhibits the loss of FFA.

**Model:** No model was generated from this record.

> Nicotinic acid concentrations (in µM) inhibit the production of plasma FFA (mM) via an indirect response model featuring dynamic efficacy and an insulin-controlled integral regulator to account for tolerance and adaptation. Key parameters include an IC50 of 0.436 µM (lean) and 0.456 µM (obese), a maximum inhibition (Imax) of 1, and an FFA elimination rate constant (kout) of 428 h⁻¹ (lean) and 173 h⁻¹ (obese).
>
> <sub>in the paper's terms — summarised by qwen3.8:27b-mtp-q8_0 from the paper's text; not checked by a person</sub>

- **paper:** `Andersson_2017`
- **model family:** `indirect_response_ii`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Andersson R et al., Modeling of free fatty acid dynamics: i…, Journal of pharmacokinetics… (2017)
  ·  DOI: [10.1007/s10928-017-9512-6](https://doi.org/10.1007/s10928-017-9512-6)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| — | F_0 | `Q100` · not captured | {"lean": 0.707, "obese": 1.14} | mM | not captured | nil (not captured) | Andersson_2017:pdv3 |
| PD (effect) | k_outF | `Q328` · not captured | {"lean": 428, "obese": 173} | h^-1 | not captured | fuzzy (not captured) | Andersson_2017:pdv3 |
| — | I_maxNF | `Q100` · not captured | {"lean": 1, "obese": 1} | dimensionless | not captured | nil (not captured) | Andersson_2017:pdv3 |
| — | IC_50NF | `Q100` · not captured | {"lean": 0.436, "obese": 0.456} | uM | not captured | nil (not captured) | Andersson_2017:pdv3 |
| — | m | `Q100` · not captured | {"lean": 1.24, "obese": 0.731} | dimensionless | not captured | nil (not captured) | Andersson_2017:pdv3 |
| PD (effect) | k_tolF | `Q337` · not captured | {"lean": 1.21, "obese": 0.708} | h^-1 | not captured | fuzzy (not captured) | Andersson_2017:pdv3 |
| — | k_outRF | `Q100` · not captured | {"lean": 0.965, "obese": 0.0165} | nM^-1 h^-1 | not captured | nil (not captured) | Andersson_2017:pdv3 |
| — | k_NF | `Q100` · not captured | {"lean": 0.00654, "obese": 0.0377} | h^-1 | not captured | nil (not captured) | Andersson_2017:pdv3 |
| — | N_50F | `Q100` · not captured | {"lean": 3.05, "obese": 0.854} | uM | not captured | nil (not captured) | Andersson_2017:pdv3 |
| — | phi | `Q100` · not captured | {"lean": 1, "obese": 8.83} | dimensionless | not captured | nil (not captured) | Andersson_2017:pdv3 |
| — | S_NF | `Q100` · not captured | {"lean": 0.807, "obese": 1} | dimensionless | not captured | nil (not captured) | Andersson_2017:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `ollama:qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.091 (1/11 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | NiAc | nicotinic acid | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | unknown | proportional | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | indirect_response_ii | indirect_response_i | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q100].value` | {"lean": 0.807, "obese": 1} | 0.0377 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q322]` | not captured | 0.456 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q323]` | not captured | 1 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q324]` | not captured | 1.14 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q325]` | not captured | 0.731 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q328].value` | {"lean": 428, "obese": 173} | 173 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q337].value` | {"lean": 1.21, "obese": 0.708} | 0.708 | mismatch |

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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [nicotinic acid](drugs/drug_nicotinic_acid/)</sub>
