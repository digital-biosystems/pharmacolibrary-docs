<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belimumab&quot;,&quot;href&quot;:&quot;drugs/drug_belimumab/&quot;},{&quot;label&quot;:&quot;Wu_2025 \u00b7 PD SLE Responder Index (SRI) response&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# SLE Responder Index (SRI) response — PD  <span class="pk-badge pk-badge--red">Rejected</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Belimumab (concentrations from the PK model of Brunner_2025) drives SLE Responder Index (SRI) response (in %): direct Emax (saturable) effect.

**Model:** No model was generated from this record.

> Belimumab's steady-state average concentration (Cavg_ss) drives the binary 52-week SLE Responder Index (SRI) response via a direct Emax mechanism within a logistic regression model, with the logit of the probability modeled as the sum of the placebo effect and the Emax term. The paper reports a Ln(EC50) of 2.07 μg mL−1 and a Ln(Emax) of -1.32, with a baseline placebo effect of -0.789.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Wu_2025`
- **model family:** `emax`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Wu J et al., Inter-regional pharmacokinetics and exp…, British journal of clinical… (2025)
  ·  DOI: [10.1111/bcp.16263](https://doi.org/10.1111/bcp.16263)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Placebo effect | `Q341` ·  | -0.789 |  | llm | Wu_2025:pdv3 |
| PD (effect) | BEL112341 on placebo effect | `Q341` ·  | 0.404 |  | boundary | Wu_2025:pdv3 |
| PD (effect) | Race_African‐American on placebo effect | `Q341` ·  | -0.375 |  | boundary | Wu_2025:pdv3 |
| PD (effect) | Race_Haiwaiian or Native American on placebo effect | `Q341` ·  | 0.394 |  | boundary | Wu_2025:pdv3 |
| PD (effect) | SELENA‐SLEDAI ≥10 on placebo effect | `Q341` ·  | 0.533 |  | boundary | Wu_2025:pdv3 |
| PD (effect) | Ln (E max ) | `Q320` ·  | -1.32 |  | llm | Wu_2025:pdv3 |
| — | SELENA‐SLEDAI ≥10 on E max | `Q100` ·  | 0.503 |  | nil | Wu_2025:pdv3 |
| PD (effect) | Ln (EC 50 ), μg mL −1 | `Q321` ·  | 2.07 | μg mL−1 | llm | Wu_2025:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelimumab%5D%20pd_Wu_2025_SRI&body=Drug%3A%20belimumab%0ARecord%3A%20pd_Wu_2025_SRI%0APaper%3A%20Wu_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belimumab/pd_Wu_2025_SRI%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [belimumab](drugs/drug_belimumab/)</sub>
