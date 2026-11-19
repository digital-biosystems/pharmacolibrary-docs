<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ethanol&quot;,&quot;href&quot;:&quot;drugs/toxin_ethanol/&quot;},{&quot;label&quot;:&quot;Anderson_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethanol — `Ethanol_Anderson2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).

<div class="pk-model-meta" hidden drug="Ethanol" model-id="Ethanol_Anderson2024_reference" status="rejected" stale="false" population="human skin model (transdermal ethanol kinetics, simulation)" measured-compound="Ethanol" parameterization="mechanistic" topology="retention"></div>

## Citation
Anderson JC. A new approach to modeling transdermal ethanol kinetics. Physiological reports 12(19):e70070 (2024).
  ·  DOI: [10.14814/phy2.70070](https://doi.org/10.14814/phy2.70070)

## Population and dosing

**Population:** human skin model (transdermal ethanol kinetics, simulation) · age group adult.

**Dosing:** 0.02, 0.04, 0.06, 0.08, 0.1 g/dL, transdermal, single.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| β b | blood_air_partition | 232 |  |
| β e | k21 | 232 |  |
| β s | equation variable | 211 |  |
| metabolic elimination rate | kel | 0.018 | g/dL/h |
| Volume Distribution (L/kg) | V | -1.017 | L/kg |
| kA has greater values in our research | kabs | 0.08 | min−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (kel), so that value has no SI equivalent. Extracted — ethanol: blood_air_partition 232, k21 232, kel 0.018 g/dL/h, V -1.02 L/kg, kabs 0.08 min−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of metabolic elimination rate: this record has 0.018, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| β b | `Q411` · blood_air_partition | 232 |  |  |  |  | llm (0.6) | phy270070-tbl-0001:row1:col2 |
| β e | `Q302` · k21 | 232 |  |  |  |  | llm (0.6) | phy270070-tbl-0001:row2:col2 |
| β s | `Q900` · equation variable | 211 |  | 211 |  |  | llm (0.6) | phy270070-tbl-0001:row3:col2 |
| metabolic elimination rate | `Q47` · kel | 0.018 | g/dL/h |  |  | g/dL/h | boundary (0.8) | Anderson_2024:results_prose |
| Volume Distribution (L/kg) | `Q61` · V | -1.017 | L/kg | -0.07119 | m3 | L | review_gapfill (0.7) | Iheagwam_2019:review |
| kA has greater values in our research | `Q49` · kabs | 0.08 | min−1 | 0.001333 | 1/s | 1/h | review_gapfill (0.7) | Zekan_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('L e', value '0.02') — already have one for this compound
- dropped duplicate Q900 ('L s', value '0.0015') — already have one for this compound
- dropped unlinked row (NIL): 'L g' — extend the ontology if this is a real PK parameter (source ['phy270070-tbl-0001:row8:col2'])
- covariate category for Kp from footnote/prose kept as documentation only (['phy270070-tbl-0001:footnote'])
- salvaged Q47 ('metabolic elimination rate'=0.018) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ethanol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Iheagwam_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Zekan_2023's review values (primary lacked it)

**Extraction notes:**
- table phy270070-tbl-0001: units_need_context
- table phy270070-tbl-0001: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[metabolic elimination rate]` | 0.018 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[β b].parameter_id` | Q411 | Q47 | mismatch |
| `gpt-oss:120b` | `parameters[β e]` | 232 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[β s]` | 211 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_base_sign_Q61 | fail |  | -1.017 |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Zekan_2023:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Iheagwam_2019:review'] |
| C5_unit_missing_Q302 | fail | 1 / [time] |  | ['phy270070-tbl-0001:row2:col2'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | g/dL/h | ['Anderson_2024:results_prose'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethanol%5D%20Ethanol_Anderson2024_reference&body=Drug%3A%20ethanol%0ARecord%3A%20Ethanol_Anderson2024_reference%0APaper%3A%20Anderson_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethanol/Ethanol_Anderson2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 06:59 UTC</sub>
