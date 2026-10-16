<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;cibenzoline&quot;,&quot;href&quot;:&quot;drugs/drug_cibenzoline/&quot;},{&quot;label&quot;:&quot;Holazo_1986 \u00b7 PD premature ventricular contractions (PVCs) per hour or ventricular contractions (VCs) per hour&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# premature ventricular contractions (PVCs) per hour or ventricular contractions (VCs) per hour — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.778), einfracz:gpt-oss-120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Cibenzoline (concentrations from this paper's PK model) drives premature ventricular contractions (PVCs) per hour or ventricular contractions (VCs) per hour (in PVCs/hr or VCs/hr): direct sigmoid Emax (Hill) effect.

**Model:** No model was generated from this record.

> Cibenzoline plasma concentrations inhibit the rate of premature ventricular contractions (PVCs) per hour via a sigmoid Emax model linked to the plasma concentration through an effect compartment (ke0). The paper reports patient-specific parameters including ke0 values of 0.101, 0.028, 0.036, and 0.147 hr-1; C(ss)(50) values of 391, 77, 230, and 91 ng/mL; gamma values of 7.2, 0.5, 1.3, and 1.1; and baseline E0 values of 98, 103, 2,212, and 454 PVCs/hr.
>
> <sub>Source-based summary by qwen3.8:27b-mtp-q8_0 from the paper's text; not human-verified</sub>

- **paper:** `Holazo_1986`
- **model family:** `sigmoid_emax`
- **driver:** `pk_record`
- **tier:** descriptive
- **effect:** inhibition/additive

## Citation
Holazo AA et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (1986)
  ·  DOI: [10.1002/j.1552-4604.1986.tb03535.x](https://doi.org/10.1002/j.1552-4604.1986.tb03535.x)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | keo | `Q326` · not captured | 0.101 | hr-1 | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | C(ss)(50) | `Q322` · not captured | 391 | ng/mL | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | gamma | `Q325` · not captured | 7.2 | not captured | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | E0 | `Q324` · not captured | 98 | PVCs/hr or VCs/hr | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | keo | `Q326` · not captured | 0.028 | hr-1 | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | C(ss)(50) | `Q322` · not captured | 77 | ng/mL | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | gamma | `Q325` · not captured | 0.5 | not captured | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | E0 | `Q324` · not captured | 103 | PVCs/hr or VCs/hr | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | keo | `Q326` · not captured | 0.036 | hr-1 | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | C(ss)(50) | `Q322` · not captured | 230 | ng/mL | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | gamma | `Q325` · not captured | 1.3 | not captured | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | E0 | `Q324` · not captured | 2,212 | PVCs/hr or VCs/hr | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | keo | `Q326` · not captured | 0.147 | hr-1 | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | C(ss)(50) | `Q322` · not captured | 91 | ng/mL | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | gamma | `Q325` · not captured | 1.1 | not captured | not captured | llm (not captured) | Holazo_1986:pdv3 |
| PD (effect) | E0 | `Q324` · not captured | 454 | PVCs/hr or VCs/hr | not captured | llm (not captured) | Holazo_1986:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `ollama:qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `ollama:gpt-oss:120b` | not confirmed | 0.778 (7/9 fields) | 2 |
| `einfracz:gpt-oss-120b` | not confirmed | 0.7 (7/10 fields) | 3 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `parameters[Q321]` | not captured | 391 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q322]` | 391 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q328]` | not captured | 0.064 | only_one_extracted |
| `ollama:gpt-oss:120b` | `parameters[Q321]` | not captured | 91 | only_one_extracted |
| `ollama:gpt-oss:120b` | `parameters[Q322]` | 91 | not captured | only_one_extracted |

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
<sub>← back to [cibenzoline](drugs/drug_cibenzoline/)</sub>
