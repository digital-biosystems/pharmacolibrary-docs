<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Dimethyltryptamine&quot;,&quot;href&quot;:&quot;drugs/drug_dimethyltryptamine/&quot;},{&quot;label&quot;:&quot;Eckern\u00e4s_2023 \u00b7 PD Lempel-Ziv complexity score&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dimethyltryptamine_Jiang2016_reference&quot;,&quot;label&quot;:&quot;Jiang_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dimethyltryptamine/Dimethyltryptamine_Jiang2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Lempel-Ziv complexity score — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** DMT drives Lempel-Ziv complexity score: direct sigmoid Emax (Hill) effect.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> DMT plasma concentrations act on Lempel-Ziv complexity via an effect compartment mechanism, producing a sigmoidal maximum stimulatory response (Emax model). The estimated parameters were a baseline response (R0) of 0.321, a maximum increase (Emax) of 0.10, an effect compartment EC50 of 54 nM, a ke0 of 0.76 min−1, and a Hill slope (γ) of 4.8.
>
> <sub>in the paper's terms — summarised by qwen3.8-27b from the paper's text; not checked by a person</sub>

- **paper:** `Eckernäs_2023`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/proportional

## Citation
Eckernäs E et al., N,N-dimethyltryptamine affects electroe…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12933](https://doi.org/10.1002/psp4.12933)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | R 0 | `Q324` · not captured | 0.321 | not captured | not captured | llm (not captured) | Eckernäs_2023:pdv3 |
| PD (effect) | E max | `Q320` · not captured | 0.10 | not captured | not captured | llm (not captured) | Eckernäs_2023:pdv3 |
| PD (effect) | EC50,e | `Q321` · not captured | 54 | nM | not captured | llm (not captured) | Eckernäs_2023:pdv3 |
| PD (effect) | K e0 | `Q326` · not captured | 0.76 | min−1 | not captured | llm (not captured) | Eckernäs_2023:pdv3 |
| PD (effect) | γ | `Q325` · not captured | 4.8 | not captured | not captured | llm (not captured) | Eckernäs_2023:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Dimethyltryptamine_Eckerns2023_PD_lzc` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0.321 | — |
| Emax | 0.1 | — |
| EC50 | 54 nM | — |
| gamma | 4.8 | — |

Closed-form check points (response, SI): `at_0` = 0.321, `at_EC50` = 0.371, `at_inf` = 0.421

Deviations:

- `pd_binding_off_target_driver` — driver compound 'DMT' is not 'dimethyltryptamine' nor one of its metabolites — the curve belongs to that compound's exposure (S12)
- `pd_binding_exposure_unit_unresolved` — 'nM' — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--red">rejected</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | fail | off-target driver — the curve belongs to that compound |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response rises, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |

Blocking:

- off_target_driver: 'DMT' is not 'dimethyltryptamine' (S12)

Advisory:

- exposure unit not resolved to SI — the x axis is in the paper's unit


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [Dimethyltryptamine](drugs/drug_dimethyltryptamine/)</sub>
