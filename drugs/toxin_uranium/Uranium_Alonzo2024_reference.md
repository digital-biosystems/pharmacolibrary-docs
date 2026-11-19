<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Uranium&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium/&quot;},{&quot;label&quot;:&quot;Alonzo_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Uranium_Morris1990_reference&quot;,&quot;label&quot;:&quot;Morris_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium/Uranium_Morris1990_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Uranium — `Uranium_Alonzo2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q47 unit unit ([luminosity] / [length] ** 2) vs 1 / [time]; Q81 unit 5.88 - 6.68 (dimensionless) vs [time]; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="Uranium" model-id="Uranium_Alonzo2024_reference" status="rejected" stale="false" population="Daphnia magna (laboratory waterborne DU exposure, multigenerational)" measured-compound="uranium internal concentration (scaled, Daphnia magna)" parameterization="mechanistic" topology="1C"></div>

## Citation
Alonzo F, Trijau M, Plaire D, Billoir E. A toxicokinetic-toxicodynamic model with a transgenerational damage to explain toxicity changes over generations (in Daphnia magna exposed to depleted uranium). The Science of the total environment 914:169845 (2024).
  ·  DOI: [10.1016/j.scitotenv.2023.169845](https://doi.org/10.1016/j.scitotenv.2023.169845)

## Population and dosing

**Population:** Daphnia magna (laboratory waterborne DU exposure, multigenerational) · condition chronic multigenerational waterborne exposure (healthy laboratory animals).

**Dosing:** 2, 9.9, 10, 22.2, 25, 50, 75 µg L-1, waterborne (aqueous exposure), multiple (continuous exposure).

**Dosed compound ≠ measured compound:** dosed depleted uranium (uranium in water), measured uranium internal concentration (scaled, Daphnia magna).

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Lm | kmet | 4.12 |  |
| rm | rm | 894 | unit |
| tauG | MTT | 39.8 | 5.88 - 6.68 |
| nitric acid volume | V | 3.0 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q47 unit unit ([luminosity] / [length] ** 2) vs 1 / [time]; Q81 unit 5.88 - 6.68 (dimensionless) vs [time]; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (rm and MTT), so that value has no SI equivalent. None of the extracted parameters is uranium's own; they describe depleted uranium and uranium internal concentration (scaled, Daphnia magna). Extracted — depleted uranium: kmet 4.12, MTT 39.8 5.88 - 6.68; uranium internal concentration (scaled, Daphnia magna): V 3 mL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has depleted uranium (uranium in water), the second reading depleted uranium; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Lm | `Q51` · kmet | 4.12 |  |  |  |  | llm (0.6) | Alonzo_2024_table_4:row1:col3, Alonzo_2024_table_4:row5:col3, Alonzo_2024_table_4:row9:col3, Alonzo_2024_table_4:row14:col3, Alonzo_2024_table_4:row18:col3 |
| rm | `Q900` · rm | 894 | unit |  |  | unit |  | Alonzo_2024_table_4:row4:col2, Alonzo_2024_table_4:row4:col3, Alonzo_2024_table_4:row8:col2, Alonzo_2024_table_4:row8:col3, Alonzo_2024_table_4:row12:col2, Alonzo_2024_table_4:row12:col3, Alonzo_2024_table_4:row17:col2, Alonzo_2024_table_4:row17:col3, Alonzo_2024_table_4:row21:col2, Alonzo_2024_table_4:row21:col3 |
| tauG | `Q81` · MTT | 39.8 | 5.88 - 6.68 |  |  | 5.88-6.68 | llm (0.6) | Alonzo_2024_table_4:row29:col2, Alonzo_2024_table_4:row29:col3 |
| nitric acid volume | `Q61` · V | 3.0 | mL | 3e-06 | m3 | L | review_gapfill (0.7) | Ortiz-Robles_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| ke | Q47 | exact |
| z1 | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- column '(unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'r*B' — extend the ontology if this is a real PK parameter (source ['Alonzo_2024_table_4:row2:col2', 'Alonzo_2024_table_4:row6:col2', 'Alonzo_2024_table_4:row10:col2', 'Alonzo_2024_table_4:row15:col2', 'Alonzo_2024_table_4:row19:col2'])
- covariate level 'Rm' → Q900:rm = 894 (linear_fractional on the model)
- unit_dimension_mismatch: 'ke' → Q47 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'b1' — extend the ontology if this is a real PK parameter (source ['Alonzo_2024_table_4:row25:col2'])
- unit_dimension_mismatch: 'kr' → Q47 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('kr', value None) — already have one for this compound
- dropped PD-category row 'z2' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Alonzo_2024_table_4:row27:col2'])
- dropped duplicate Q900 ('b2', value None) — already have one for this compound
- unit_dimension_mismatch: 'tauG' → Q81 (unit 'dimensionless' vs ontology '[time]') — route to review
- unit inherited for rm (Q900): 'unit' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=uranium internal concentration (scaled, Daphnia magna)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- pharmacogenetic covariate 'rm' (rm) — PGx domain
- status held at "Needs review" — not promoted
- molar mass: none found for 'uranium internal concentration (scaled, Daphnia magna)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Ortiz-Robles_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Alonzo_2024_table_4: unbound_uncertainty
- table Alonzo_2024_table_4: unparsed_numeric_cell
- LLM selected parameter table(s) 4
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[ke].value` |  | 2 | mismatch |
| `gpt-oss:120b` | `parameters[lm]` | 4.12 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[lp]` |  | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[rm]` | 894 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[taug]` | 39.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q53_rm]` |  | 894 | only_one_extracted |
| `gpt-oss:120b` | `parameters[z1]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | depleted uranium (uranium in water) | depleted uranium | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | uranium internal concentration (scaled, Daphnia magna) | depleted uranium | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | fail | 1 / [time] | unit ([luminosity] / [length] ** 2) | ['Alonzo_2024_table_4:row23:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ortiz-Robles_2026:review'] |
| C5_dimension_Q81 | fail | [time] | 5.88 - 6.68 (dimensionless) | ['Alonzo_2024_table_4:row29:col2', 'Alonzo_2024_table_4:row29:col3'] |
| C5_unit_missing_Q51 | fail | 1 / [time] |  | ['Alonzo_2024_table_4:row1:col3', 'Alonzo_2024_table_4:row5:col3', 'Alonzo_2024_table_4:row9:col3', 'Alonzo_2024_table_4:row14:col3', 'Alonzo_2024_table_4:row18:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.003 L | ['Ortiz-Robles_2026:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Buranium%5D%20Uranium_Alonzo2024_reference&body=Drug%3A%20uranium%0ARecord%3A%20Uranium_Alonzo2024_reference%0APaper%3A%20Alonzo_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_uranium/Uranium_Alonzo2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 16:19 UTC</sub>
