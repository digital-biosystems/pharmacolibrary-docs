<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;tafamidis&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/&quot;},{&quot;label&quot;:&quot;Ulaszek_2026 \u00b7 PD Total transthyretin (TTR) concentration in plasma&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafamidis_Parkinson2013_reference&quot;,&quot;label&quot;:&quot;Parkinson_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Total transthyretin (TTR) concentration in plasma — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Tafamidis (concentrations from this paper's PK model) drives Total transthyretin (TTR) concentration in plasma (in μM): indirect response — drug inhibits the loss of Total transthyretin (TTR) concentration in plasma.

**Model:** No model was generated from this record.

> Tafamidis plasma concentrations (μM, from the PBPK model) drive increases in total plasma TTR (μM) via a binding/turnover mechanism: tafamidis binds TTR tetramers (kon1 = 16,200 μM−1·h−1, koff1 = 50.2 h−1; second binding kon2 = 12,600 μM−1·h−1, koff2 = 2998.8 h−1), stabilizing tetramers, and the bound TTR–tafamidis complexes are irreversibly eliminated at Tbound,deg = Tdeg × 0.75 (1/h), with unbound TTR dissociation 0.0024 h−1, tetramer association 360,000 μM−3·h−1, and monomer degradation 0.016 h−1; the paper states the mechanism of the clinically observed TTR increase remains incompletely understood and is explored via this QSP model rather than an Imax/IC50-type indirect-response formulat
>
> <sub>Source-based summary by glm-5.3-flash from the paper's text; not human-verified</sub>

- **paper:** `Ulaszek_2026`
- **model family:** `indirect_response_ii`
- **driver:** `pk_record`
- **tier:** descriptive
- **effect:** inhibition/proportional

## Citation
Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026)
  ·  DOI: [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Irreversible elimination rate of bound TTR–tafamidis complexes | `Q328` · not captured | Tdeg × 0.75 | 1/h | not captured | llm (not captured) | Ulaszek_2026:pdv3 |
| PD (effect) | Association rate constant for first tafamidis–TTR binding | `Q329` · not captured | 16,200 | 1/μM·h | not captured | llm (not captured) | Ulaszek_2026:pdv3 |
| PD (effect) | Dissociation rate constant for first tafamidis–TTR binding | `Q330` · not captured | 50.2OR28.8 | 1/h | not captured | llm (not captured) | Ulaszek_2026:pdv3 |
| PD (effect) | Association rate constant for second tafamidis–TTR binding | `Q329` · not captured | 12,600 | 1/μM·h | not captured | llm (not captured) | Ulaszek_2026:pdv3 |
| PD (effect) | Dissociation rate constant for second tafamidis–TTR binding | `Q330` · not captured | 2998.8OR216 | 1/h | not captured | llm (not captured) | Ulaszek_2026:pdv3 |
| PD (effect) | Association rate constant for tafamidis–albumin binding | `Q329` · not captured | 1000 | 1/μM·h | not captured | llm (not captured) | Ulaszek_2026:pdv3 |
| PD (effect) | Dissociation rate constant for tafamidis–albumin binding | `Q330` · not captured | 1800 | 1/h | not captured | llm (not captured) | Ulaszek_2026:pdv3 |
| PK (driver) | Dissociation rate of unbound TTR | `Q46` · not captured | 0.0024 | 1/h | not captured | boundary (not captured) | Ulaszek_2026:pdv3 |
| PK (driver) | Association rate of unbound TTR | `Q46` · not captured | 360,000 | 1/μM3·h | not captured | boundary (not captured) | Ulaszek_2026:pdv3 |
| — | Monomer degradation rate | `Q100` · not captured | 0.016 | 1/h | not captured | nil (not captured) | Ulaszek_2026:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `ollama:glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `parameters[Q100]` | 0.016 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q328]` | Tdeg × 0.75 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q329]` | 1000 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q330]` | 1800 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q335]` | not captured | 0.75 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q46]` | 360,000 | not captured | only_one_extracted |

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
<sub>← back to [tafamidis](drugs/drug_tafamidis/)</sub>
