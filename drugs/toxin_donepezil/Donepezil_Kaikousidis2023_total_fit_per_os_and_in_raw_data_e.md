<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Donepezil&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/&quot;},{&quot;label&quot;:&quot;Kaikousidis_2023 \u00b7 total_fit_per_os_and_in_raw_data_estimated_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Karalis2023_drug_donepezil&quot;,&quot;label&quot;:&quot;Karalis_2023_drug_donepezil&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Karalis2023_drug_donepezil.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Pyka2024_reference&quot;,&quot;label&quot;:&quot;Pyka_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Pyka2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Donepezil — `Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data_e`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> C8 unreachable/orphan compartment or unlinked metabolite; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="Donepezil" model-id="Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data_e" status="rejected" stale="false" population="mice (Donepezil PK after oral solution and intranasal film administration)" measured-compound="Donepezil" parameterization="mechanistic" topology="2C"></div>

## Citation
Kaikousidis C, Papakyriakopoulou P, Dokoumetzidis A, Valsami G. Donepezil Brain and Blood Pharmacokinetic Modeling after Nasal Film and Oral Solution Administration in Mice. Pharmaceutics 15(5):1409 (2023).
  ·  DOI: [10.3390/pharmaceutics15051409](https://doi.org/10.3390/pharmaceutics15051409)

## Population and dosing

**Population:** mice (Donepezil PK after oral solution and intranasal film administration) · condition healthy · n = 3-7 per group.

**Dosing:** 0.1, 4, 10 mg/kg; mg/kg; mg, oral; other; other, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| k12 (1/min) | k12 | 0.065 | 1/min | 19.79 |
| k20 (1/min) | ki0 | 0.039 | 1/min | 23.66 |
| k23 (1/min) | kcomp | 0.011 | 1/min | 70.55 |
| Vbrain_PO (L) | V2 | 0.015 | L | 51.43 |
| Tlag (min) | tlag | 3.59 | min | 0.11 |
| Tk0 (min) | equation variable | 11.4 | min | 0.06 |
| Mtt (min) | MTT | 53.8 | min | 15.82 |
| ktr (1/min) | ktr | 0.205 | 1/min | 43.12 |
| Vblood_IN (L) | V | 0.024 | L | 12.46 |
| ka (1/min) | kabs | 0.127 | 1/min | 103.15 |
| a3 | A3 | 0.084 |  | 25.66 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — donepezil: k12 0.065 1/min, ki0 0.039 1/min, kcomp 0.011 1/min, V2 0.015 L, tlag 3.59 min, MTT 53.8 min, ktr 0.205 1/min, V 0.024 L, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of p2: this record has none, the second reading 0.306; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| k12 (1/min) | `Q301` · k12 | 0.065 | 1/min | 0.001083 | 1/s | 1/min | 19.79 | exact (1) | pharmaceutics-15-01409-t004:row2:col1 |
| k20 (1/min) | `Q373` · ki0 | 0.039 | 1/min | 0.00065 | 1/s | 1/min | 23.66 | exact (1) | pharmaceutics-15-01409-t004:row3:col1 |
| k23 (1/min) | `Q48` · kcomp | 0.011 | 1/min | 0.0001833 | 1/s | 1/min | 70.55 | exact (1) | pharmaceutics-15-01409-t004:row4:col1 |
| Vbrain_PO (L) | `Q64` · V2 | 0.015 | L | 1.5e-05 | m3 | l | 51.43 | llm (0.6) | pharmaceutics-15-01409-t004:row8:col1 |
| Tlag (min) | `Q83` · tlag | 3.59 | min | 215.4 | s | min | 0.11 | exact (1) | pharmaceutics-15-01409-t004:row9:col1 |
| Tk0 (min) | `Q900` · equation variable | 11.4 | min |  |  | min | 0.06 | llm (0.6) | pharmaceutics-15-01409-t004:row10:col1 |
| Mtt (min) | `Q81` · MTT | 53.8 | min | 3228 | s | min | 15.82 | exact (1) | pharmaceutics-15-01409-t004:row11:col1 |
| ktr (1/min) | `Q306` · ktr | 0.205 | 1/min | 0.003417 | 1/s | 1/min | 43.12 | exact (1) | pharmaceutics-15-01409-t004:row12:col1 |
| Vblood_IN (L) | `Q61` · V | 0.024 | L | 2.4e-05 | m3 | l | 12.46 | llm (0.6) | pharmaceutics-15-01409-t004:row13:col1 |
| ka (1/min) | `Q49` · kabs | 0.127 | 1/min | 0.002117 | 1/s | 1/min | 103.15 | exact (1) | pharmaceutics-15-01409-t004:row17:col1 |
| a3 | `Q417` · A3 | 0.084 |  | 0.084 |  |  | 25.66 | exact (1) | pharmaceutics-15-01409-t004:row22:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q48 ('k24 (1/min)', value '0.018') — already have one for this compound
- dropped duplicate Q48 ('k42 (1/min)', value '0.031') — already have one for this compound
- dropped duplicate Q373 ('k30 (1/min)', value '0.276') — already have one for this compound
- dropped duplicate Q64 ('Vbrain_IN (L)', value '0.005') — already have one for this compound
- dropped duplicate Q301 ('P1', value '0.557') — already have one for this compound
- dropped duplicate Q61 ('P2', value '0.306') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (Vbrain_PO (L)); Q61 (Vblood_IN (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Donepezil
- population split: 'total fit—per os and in raw data / estimated value' subgroup of Kaikousidis_2023 (paper reports 4 populations: in—mean data / estimated value, per os blood data / estimated value, per os—mean data / estimated value, total fit—per os and in raw data / estimated value)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pharmaceutics-15-01409-t004: conflicting_units
- table Kaikousidis_2023_table_1: conflicting_units
- companion parameter table 1 transcribed (15 record(s))
- table Kaikousidis_2023_table_2: conflicting_units
- companion parameter table 2 transcribed (54 record(s))
- table Kaikousidis_2023_table_3: conflicting_units
- companion parameter table 3 transcribed (72 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4
- toxin: the located table(s) gave no kinetic value — 7 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.889 (24/27 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[p2]` |  | 0.306 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tk0]` | 11.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vbrain_po].parameter_id` | Q64 | Q77 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row2:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row12:col1'] |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row3:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row17:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pharmaceutics-15-01409-t004:row13:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-15-01409-t004:row8:col1'] |
| C5_dimension_Q81 | pass | [time] |  | ['pharmaceutics-15-01409-t004:row11:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceutics-15-01409-t004:row9:col1'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.024 L | ['pharmaceutics-15-01409-t004:row13:col1'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.015 L | ['pharmaceutics-15-01409-t004:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data_e&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data_e%0APaper%3A%20Kaikousidis_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_donepezil/Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data_e%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:40 UTC</sub>
