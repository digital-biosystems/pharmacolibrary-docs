<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ethanol&quot;,&quot;href&quot;:&quot;drugs/toxin_ethanol/&quot;},{&quot;label&quot;:&quot;Zekan_2023 \u00b7 control_c&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethanol — `Ethanol_Zekan2023_control_c`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit g × min ([mass] * [time]) vs [mass] * [time] / [length] ** 3; Q301 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; c2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).

<div class="pk-model-meta" hidden drug="Ethanol" model-id="Ethanol_Zekan2023_control_c" status="rejected" stale="false" population="healthy adult male volunteers" measured-compound="Ethanol" parameterization="mechanistic" topology="1C"></div>

## Citation
Zekan P, Ljubičić N, Blagaić V, Dolanc I, Jonjić A, Čoklo M et al. Pharmacokinetic Analysis of Ethanol in a Human Study: New Modification of Mathematic Model. Toxics 11(9):793 (2023).
  ·  DOI: [10.3390/toxics11090793](https://doi.org/10.3390/toxics11090793)

## Population and dosing

**Population:** healthy adult male volunteers · condition healthy volunteers, oral alcohol consumption study · age group adult · n = 8.

**Dosing:** 21000 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C15 (g/L) | equation variable | 0.32 | g/L |
| CMAX (g/L) | Cmax | 0.42 | g/L |
| AUC ((g × min)/L) | AUC | 0.32 | g × min |
| kA (min−1) | kabs | 0.081 | min−1 |
| vMAX (g/min) | Vmax | 0.087 | g/min |
| kCP (L/min) | k12 | 0.01 | L/min |
| Volume Distribution (L/kg) | V | -1.017 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.308). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit g × min ([mass] * [time]) vs [mass] * [time] / [length] ** 3; Q301 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; c2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (equation variable, AUC and k12), so that value has no SI equivalent. Extracted — ethanol: Cmax 0.42 g/L, AUC 0.32 g × min, kabs 0.081 min−1, Vmax 0.087 g/min, k12 0.01 L/min, V -1.02 L/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of auc ((g × min)/l): this record has 0.32, the second reading none; it also differs on 8 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C15 (g/L) | `Q900` · equation variable | 0.32 | g/L |  |  | g/l | llm (0.6) | Zekan_2023_table_3:row0:col1 |
| CMAX (g/L) | `Q32` · Cmax | 0.42 | g/L | 0.42 | kg/m3 | g/l | exact (1) | Zekan_2023_table_3:row1:col1 |
| AUC ((g × min)/L) | `Q88` · AUC | 0.32 | g × min |  |  | min·g | llm_confirmed (0.6) | Zekan_2023_table_3:row2:col1 |
| kA (min−1) | `Q49` · kabs | 0.081 | min−1 | 0.00135 | 1/s | 1/min | exact (1) | Zekan_2023_table_6:row0:col1 |
| vMAX (g/min) | `Q66` · Vmax | 0.087 | g/min | 1.45e-06 | kg/s | g/min | special_case (0.95) | Zekan_2023_table_6:row2:col1 |
| kCP (L/min) | `Q301` · k12 | 0.01 | L/min |  |  | l/min | exact (1) | Zekan_2023_table_6:row3:col1 |
| Volume Distribution (L/kg) | `Q61` · V | -1.017 | L/kg | -0.07119 | m3 | L | review_gapfill (0.7) | Iheagwam_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC ((g × min)/L)' → Q88 (unit '[mass] * [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q900 ('f 2', value '0.520') — already have one for this compound
- unit_dimension_mismatch: 'kCP (L/min)' → Q301 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ethanol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'control (c)n = 8' subgroup of Zekan_2023 (paper reports 2 populations: control (c)n = 8, point estimate)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Iheagwam_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table toxics-11-00793-t005: unbound_uncertainty
- table toxics-11-00793-t005: representations disagree; selected evidence retained, not merged
- companion parameter table 3 transcribed (12 record(s))
- companion parameter table 4 transcribed (8 record(s))
- companion parameter table 6 transcribed (14 record(s))
- LLM selected parameter table(s) 3, 4, 5, 6
- LLM region Zekan_2023:results_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc ((g × min)/l)]` | 0.32 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[c15]` | 0.32 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 0.42 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.081 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` |  | 0.081 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kcp]` | 0.01 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kcp]` |  | 0.01 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vmax]` | 0.087 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vmax]` |  | 0.087 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_base_sign_Q61 | fail |  | -1.017 |  |
| C5_dimension_Q301 | fail | 1 / [time] | L/min ([length] ** 3 / [time]) | ['Zekan_2023_table_6:row3:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Zekan_2023_table_3:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Zekan_2023_table_6:row0:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Iheagwam_2019:review'] |
| C5_dimension_Q66 | pass | [mass] / [time] |  | ['Zekan_2023_table_6:row2:col1'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | g × min ([mass] * [time]) | ['Zekan_2023_table_3:row2:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethanol%5D%20Ethanol_Zekan2023_control_c&body=Drug%3A%20ethanol%0ARecord%3A%20Ethanol_Zekan2023_control_c%0APaper%3A%20Zekan_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethanol/Ethanol_Zekan2023_control_c%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 06:59 UTC</sub>
