<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;lutetium (177Lu) vipivotide tetraxetan&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_vipivotide_tetraxetan/&quot;},{&quot;label&quot;:&quot;Siebinga_2024 \u00b7 PD prostate-specific antigen (PSA)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lutetium177luVipivotideTetraxetan_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lutetium177luVipivotideTetraxetan_Siebinga2023_reference&quot;,&quot;label&quot;:&quot;Siebinga_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# prostate-specific antigen (PSA) — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** [177Lu]Lu-PSMA-I&T drives prostate-specific antigen (PSA) (in µg/L): direct linear effect.

**Model:** Model available in **Models**; browser simulation unavailable.

> The paper describes a sequential PKPD model where [177Lu]Lu-PSMA-I&T concentrations act on PSA dynamics through a linear direct inhibitory effect (parameter KD, direct 0.000335 L·day−1·GBq−1) and a linear delayed effect (parameter 0.0000328 L·day−1·MBq−1) via an effect compartment (kE0 0.00128 h−1), in addition to a baseline exponential PSA growth rate of 0.000408 h−1. The authors note that the delayed effect is linearly concentration-dependent and suggest mechanisms such as tumor microenvironment changes or radiation-induced bystander effects, but do not specify the precise PD mechanism for the immediate inhibition.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Siebinga_2024`
- **model family:** `linear`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/additive

## Citation
Siebinga H et al., Quantification of biochemical PSA dynam…, EJNMMI physics (2024)
  ·  DOI: [10.1186/s40658-024-00642-2](https://doi.org/10.1186/s40658-024-00642-2)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Baseline PSA | `Q324` · not captured | 140 | µg/L | not captured | llm (not captured) | Siebinga_2024:pdv3 |
| PD (effect) | PSA growth rate | `Q340` · not captured | 0.000408 | h−1 | not captured | llm (not captured) | Siebinga_2024:pdv3 |
| PD (effect) | Direct drug-induced effect | `Q335` · not captured | 0.000335 | L·day−1·GBq−1 | not captured | llm (not captured) | Siebinga_2024:pdv3 |
| PD (effect) | Rate constant effect compartment | `Q326` · not captured | 0.00128 | h−1 | not captured | llm (not captured) | Siebinga_2024:pdv3 |
| PD (effect) | Delayed drug-induced effect | `Q335` · not captured | 0.0000328 | L·day−1·MBq−1 | not captured | llm (not captured) | Siebinga_2024:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Lutetium177luVipivotideTetraxetan_Siebinga2024_PD_psa` — linear, `response = E0 + slope*exposure`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 140 µg/L | 0.00014 kg/m3 |
| slope | 0.000335 L·day−1·GBq−1 | — |

Closed-form check points (response, SI): `at_0` = 0.00014, `per_exposure_unit` = 0.000335

Deviations:

- `pd_binding_off_target_driver` — driver compound '[177Lu]Lu-PSMA-I&T' is not 'lutetium_177lu_vipivotide_tetraxetan' nor one of its metabolites — the curve belongs to that compound's exposure (S12)

## Review

Verdict <span class="pk-badge pk-badge--red">rejected</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | fail | off-target driver — the curve belongs to that compound |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | a line has no plateau to compare |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |

Blocking:

- off_target_driver: '[177Lu]Lu-PSMA-I&T' is not 'lutetium_177lu_vipivotide_tetraxetan' (S12)


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `ollama:qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | not confirmed | 0.0 (0/9 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | [177Lu]Lu-PSMA-I&T | [177Lu]Lu-PSMA-I&T tumor concentration | mismatch |
| `einfracz:gpt-oss-120b` | `effect_direction` | inhibition | stimulation | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | additive | proportional | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | effect_compartment | linear | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q324].value` | 140 | 57.5 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q326]` | 0.00128 | not captured | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q327]` | not captured | 0.000408 | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q335].value` | 0.0000328 | 0.00335 | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q340]` | 0.000408 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [lutetium (177Lu) vipivotide tetraxetan](drugs/drug_lutetium_177lu_vipivotide_tetraxetan/)</sub>
