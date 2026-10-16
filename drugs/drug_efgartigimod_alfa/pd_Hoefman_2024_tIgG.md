<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;efgartigimod alfa&quot;,&quot;href&quot;:&quot;drugs/drug_efgartigimod_alfa/&quot;},{&quot;label&quot;:&quot;Hoefman_2024 \u00b7 PD total IgG&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# total IgG — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.00).">human + animal</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.00).

## Record summary

**As extracted:** Efgartigimod drives total IgG: indirect response — drug stimulates the loss of total IgG.

**Model:** No model was generated from this record.

> Efgartigimod concentration, converted to FcRn receptor occupancy (RO), increases the elimination of total IgG via an additive indirect response mechanism. The model specifies a kout of 0.00194 1/h, kin of 0.124 µM/h, maximum effect (Emax) of 0.00603 1/h, and a shape factor (gamma) of 7.39, with a human R0 of 53.6 nM and an in vivo KD scaling factor of 2.10.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Hoefman_2024`
- **model family:** `indirect_response_iv`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/additive

## Citation
Hoefman S et al., Translational population target binding…, Journal of pharmacokinetics… (2024)
  ·  DOI: [10.1007/s10928-024-09952-5](https://doi.org/10.1007/s10928-024-09952-5)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Emax IgG human | `Q320` · not captured | 0.00603 | /h | not captured | llm (not captured) | Hoefman_2024:pdv3 |
| PD (effect) | γ receptor occupancy | `Q325` · not captured | 7.39 | not captured | not captured | llm (not captured) | Hoefman_2024:pdv3 |
| PD (effect) | kout IgG human | `Q328` · not captured | 0.00194 | /h | not captured | llm (not captured) | Hoefman_2024:pdv3 |
| PD (effect) | kin IgG human | `Q327` · not captured | 0.124 | µM/h | not captured | llm (not captured) | Hoefman_2024:pdv3 |
| PD (effect) | R0 human | `Q333` · not captured | 53.6 | nM | not captured | llm (not captured) | Hoefman_2024:pdv3 |
| model term | In vivo KD (factor) | `Q900` · not captured | 2.10 | not captured | not captured | llm (not captured) | Hoefman_2024:pdv3 |
| PD (effect) | slope for tIgG f(time) for 4w tox. rat | `Q335` · not captured | -0.000695 | not captured | not captured | llm (not captured) | Hoefman_2024:pdv3 |
| PD (effect) | R0 human (nM) [C] | `Q336` · not captured | 53.6 | (nM) | not captured | review_gapfill (not captured) | Hoefman_2024:review |
| variability | ω2 kin tIgG | `Q312` · not captured | 0.129 | not captured | not captured | llm (not captured) | Hoefman_2024:pdv3 |
| variability | ω2 Emax | `Q312` · not captured | 0.0366 | not captured | not captured | llm (not captured) | Hoefman_2024:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [efgartigimod alfa](drugs/drug_efgartigimod_alfa/)</sub>
