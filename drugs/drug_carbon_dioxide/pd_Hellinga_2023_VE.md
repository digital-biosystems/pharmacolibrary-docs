<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;carbon dioxide&quot;,&quot;href&quot;:&quot;drugs/drug_carbon_dioxide/&quot;},{&quot;label&quot;:&quot;Hellinga_2023 \u00b7 PD Minute ventilation (ventilatory response to brain tissue carbon dioxide partial pressure)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CarbonDioxide_Hellinga2023_reference&quot;,&quot;label&quot;:&quot;Hellinga_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Minute ventilation (ventilatory response to brain tissue carbon dioxide partial pressure) — PD  <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Carbon dioxide (brain tissue/effect-site PCO2) drives Minute ventilation (ventilatory response to brain tissue carbon dioxide partial pressure) (in L/min): direct linear effect.

**Model:** No model was generated from this record.

> In the oxycodone study, brain effect-site carbon dioxide (PCO2, kPa) drives minute ventilation (VE, L/min) via a linear hypercapnic ventilatory response model with baseline VE 8.0 ± 0.2 L/min, baseline PETCO2 5.3 ± 0.11 kPa, VRT 5.8 ± 0.1 kPa, and slope 16.6 ± 1.5 L/min/kPa; oxycodone depresses this response, with VE55 most sensitive (C50 = 0.05 ng/mL) versus slope (C50 = 0.13 ng/mL) and baseline variables (C50 = 0.33 ng/mL). The excerpts do not state the exact mechanism (e.g., effect-compartment ke0 or inhibitory form) beyond a blood-to-effect-site equilibration being defined.
>
> <sub>Source-based summary by glm-5.3-flash from the paper's text; not human-verified</sub>

- **paper:** `Hellinga_2023`
- **model family:** `linear`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/additive

## Citation
Hellinga M et al., Oral Oxycodone-Induced Respiratory Depr…, Clinical pharmacology and t… (2023)
  ·  DOI: [10.1002/cpt.2863](https://doi.org/10.1002/cpt.2863)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Baseline VE | `Q324` ·  | 8.0 ± 0.2 | L/min | llm | Hellinga_2023:pdv3 |
| PD (effect) | Baseline P ET CO 2 | `Q324` ·  | 5.3 ± 0.11 | kPa | llm | Hellinga_2023:pdv3 |
| PD (effect) | Baseline VRT | `Q324` ·  | 5.8 ± 0.1 | kPa | llm | Hellinga_2023:pdv3 |
| PD (effect) | Slope at baseline | `Q335` ·  | 16.6 ± 1.5 | L/min/kPa | llm | Hellinga_2023:pdv3 |
| PD (effect) | VE 55 at baseline | `Q324` ·  | 32.3 ± 2.8 | L/min | llm | Hellinga_2023:pdv3 |
| PD (effect) | potency values | `Q321` ·  | 0.05 | ng/mL | review_gapfill | Hellinga_2023:review |
| variability | σ 2 VE at baseline | `Q315` ·  | 0.206 ± 0.024 |  | llm | Hellinga_2023:pdv3 |
| variability | σ 2 P ET CO 2 at baseline | `Q315` ·  | 0.114 ± 0.013 |  | llm | Hellinga_2023:pdv3 |
| variability | σ 2 VRT | `Q315` ·  | 0.089 ± 0.010 |  | llm | Hellinga_2023:pdv3 |
| variability | σ 2 Slope | `Q315` ·  | 17.2 ± 2.0 |  | llm | Hellinga_2023:pdv3 |
| variability | σ 2 VE 55 | `Q315` ·  | 14.8 ± 1.7 |  | llm | Hellinga_2023:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `ollama:glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | secondary_empty | 0.0 (0/7 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | carbon dioxide (brain tissue/effect-site PCO2) |  | mismatch |
| `einfracz:gpt-oss-120b` | `effect_direction` | stimulation |  | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | additive |  | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | linear |  | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q321]` | 0.05 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q324]` | 32.3 ± 2.8 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q335]` | 16.6 ± 1.5 |  | only_one_extracted |

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
<sub>← back to [carbon dioxide](drugs/drug_carbon_dioxide/)</sub>
