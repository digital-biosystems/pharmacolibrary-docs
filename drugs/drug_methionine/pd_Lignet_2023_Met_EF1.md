<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;methionine&quot;,&quot;href&quot;:&quot;drugs/drug_methionine/&quot;},{&quot;label&quot;:&quot;Lignet_2023 \u00b7 PD Met-EF1\u03b1 (uncleaved N-terminal methionine elongation factor 1\u03b1) in tumor tissue, normalized to total protein&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methionine_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methionine/Methionine_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methionine_Giulidori1984_reference&quot;,&quot;label&quot;:&quot;Giulidori_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methionine/Methionine_Giulidori1984_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Met-EF1α (uncleaved N-terminal methionine elongation factor 1α) in tumor tissue, normalized to total protein — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">mouse</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.90).

## Record summary

**As extracted:** M8891 (effect compartment concentration Ce) (measured concentrations) drives Met-EF1α (uncleaved N-terminal methionine elongation factor 1α) in tumor tissue, normalized to total protein (in µg/mg protein): indirect response — drug inhibits the loss of Met-EF1α (uncleaved N-terminal methionine elongation factor 1α) in tumor tissue, normalized to total protein.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> M8891 effect-compartment concentrations (Ce, ng/mL) inhibit MetAP2-mediated processing, described by a turnover model with inhibition of the degradation (kout) of Met-EF1α in tumor tissue (µg/mg protein), with an effect-compartment distribution rate ke0 of 0.0566 1/h, zero-order synthesis kin of 29.1 µg/mg/h, first-order degradation kout of 1.45 1/h, Imax 0.91, and IC50 340 ng/mL (0.88 µM total, 28 nM free).
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Lignet_2023`
- **model family:** `indirect_response_ii`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/proportional

## Citation
Lignet F et al., Preclinical Pharmacokinetics and Transl…, Pharmaceutical research (2023)
  ·  DOI: [10.1007/s11095-023-03611-z](https://doi.org/10.1007/s11095-023-03611-z)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | ke0 | `Q326` · not captured | 0.0566 | 1/h | not captured | llm (not captured) | Lignet_2023:pdv3 |
| PD (effect) | Kin | `Q327` · not captured | 29.1 | µg/mg/h | not captured | llm (not captured) | Lignet_2023:pdv3 |
| PD (effect) | Kout | `Q328` · not captured | 1.45 | 1/h | not captured | llm (not captured) | Lignet_2023:pdv3 |
| PD (effect) | Imax | `Q323` · not captured | 0.91 | Unitless | not captured | llm (not captured) | Lignet_2023:pdv3 |
| PD (effect) | IC50 | `Q322` · not captured | 340 | ng/mL | not captured | llm (not captured) | Lignet_2023:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Methionine_Lignet2023_PD_met_ef1` — turnover (indirect response type II), `response = E0/(1 - Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 20.07 µg/mg protein | — |
| Emax | 0.91 | — |
| EC50 | 340 ng/mL | 0.00034 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 20.07, `at_EC50` = 36.82, `at_inf` = 223

Deviations:

- `defaulted_parameters` — gamma
- `pd_binding_off_target_driver` — driver compound 'M8891 (effect compartment concentration Ce)' is not 'methionine' nor one of its metabolites — the curve belongs to that compound's exposure (S12)
- `pd_binding_e0_from_kin_kout` — no baseline row; E0 = kin/kout (29.1/1.45 = 20.07) — the paper's stated baseline may differ

## Review

Verdict <span class="pk-badge pk-badge--red">rejected</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | fail | off-target driver — the curve belongs to that compound |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response rises, as IDR-II predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | advisory | only convention defaults (gamma = 1) |

Blocking:

- off_target_driver: 'M8891 (effect compartment concentration Ce)' is not 'methionine' (S12)

Advisory:

- defaulted: gamma (convention)


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `ollama:glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | secondary_empty | 0.0 (0/9 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | M8891 (effect compartment concentration Ce) | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `effect_direction` | inhibition | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | proportional | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | indirect_response_ii | not captured | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q322]` | 340 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q323]` | 0.91 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q326]` | 0.0566 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q327]` | 29.1 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q328]` | 1.45 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [methionine](drugs/drug_methionine/)</sub>
