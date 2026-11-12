<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Botulinum neurotoxin type A&quot;,&quot;href&quot;:&quot;drugs/toxin_botulinum_neurotoxin_type_a/&quot;},{&quot;label&quot;:&quot;Ryu_2024 \u00b7 PD Compound muscle action potential&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Compound muscle action potential — PD  <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Record summary

**As extracted:** Virtual infusion rate (A(1)*KDE) drives Compound muscle action potential (in mV): indirect response — drug inhibits the production of Compound muscle action potential.

**Model:** No model was generated from this record.

- **paper:** `Ryu_2024`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Ryu HJ et al., Model-based interspecies interpretation…, Biopharmaceutics & drug dis… (2024)
  ·  DOI: [10.1002/bdd.2398](https://doi.org/10.1002/bdd.2398)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Emax_CMAP | `Q323` ·  | 1.04 | mol | llm | Ryu_2024:pdv3 |
| PD (effect) | Emax_CMAP | `Q323` ·  | 0.94 | mol | llm | Ryu_2024:pdv3 |
| PD (effect) | Emax_CMAP | `Q323` ·  | 1 |  | llm | Ryu_2024:pdv3 |
| PD (effect) | EDK50_CMAP | `Q322` ·  | 1.07 | U day−1 | llm | Ryu_2024:pdv3 |
| PD (effect) | EDK50_CMAP | `Q322` ·  | 6.19 | U day−1 | llm | Ryu_2024:pdv3 |
| PD (effect) | EDK50_CMAP | `Q322` ·  | 0.00938 | U day−1 | llm | Ryu_2024:pdv3 |
| PD (effect) | Kin_CMAP | `Q327` ·  | 365 | day−1 | llm | Ryu_2024:pdv3 |
| PD (effect) | Kin_CMAP | `Q327` ·  | 217 | day−1 | llm | Ryu_2024:pdv3 |
| PD (effect) | Kin_CMAP | `Q327` ·  | 255 | day−1 | llm | Ryu_2024:pdv3 |
| PD (effect) | Base_CMAP | `Q324` ·  | 98.4 |  | llm | Ryu_2024:pdv3 |
| PD (effect) | Base_CMAP | `Q324` ·  | 91.9 |  | llm | Ryu_2024:pdv3 |
| PD (effect) | Base_CMAP | `Q324` ·  | 100 |  | llm | Ryu_2024:pdv3 |
| variability | Additive error_CMAP | `Q315` ·  | 7.11 |  | llm | Ryu_2024:pdv3 |
| variability | Additive error_CMAP | `Q315` ·  | 7.73 |  | llm | Ryu_2024:pdv3 |
| variability | Additive error_CMAP | `Q315` ·  | 12.1 |  | llm | Ryu_2024:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbotulinum_neurotoxin_type_a%5D%20pd_Ryu_2024_CMAP&body=Drug%3A%20botulinum_neurotoxin_type_a%0ARecord%3A%20pd_Ryu_2024_CMAP%0APaper%3A%20Ryu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_botulinum_neurotoxin_type_a/pd_Ryu_2024_CMAP%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [Botulinum neurotoxin type A](drugs/toxin_botulinum_neurotoxin_type_a/)</sub>
