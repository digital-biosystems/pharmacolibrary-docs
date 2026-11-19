<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Dodecyl gallate&quot;,&quot;href&quot;:&quot;drugs/toxin_dodecyl_gallate/&quot;},{&quot;label&quot;:&quot;Punt_2021 \u00b7 pbk_model_prediction&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dodecyl gallate — `DodecylGallate_Punt2021_pbk_model_prediction`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit ng*hr/mL ([mass] * [time] / [length] ** 3) vs [time].

<div class="pk-model-meta" hidden drug="Dodecyl gallate" model-id="DodecylGallate_Punt2021_pbk_model_prediction" status="rejected" stale="false" population="rat and human (PBK-modelled)" measured-compound="dodecyl gallate" parameterization="mechanistic" topology="1C"></div>

## Citation
Punt A, Pinckaers N, Peijnenburg A, Louisse J. Development of a Web-Based Toolbox to Support Quantitative In-Vitro-to-In-Vivo Extrapolations (QIVIVE) within Nonanimal Testing Strategies. Chemical research in toxicology 34(2):460–472 (2021).
  ·  DOI: [10.1021/acs.chemrestox.0c00307](https://doi.org/10.1021/acs.chemrestox.0c00307)

## Population and dosing

**Population:** rat and human (PBK-modelled) · condition dietary/food-additive exposure assessment · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.90).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| rats | AUC | 2333 | ng*hr/mL |
| 100 mg of methylparaben/kg bw | D1 | 1436 | ng*hr/mL |
| 1.4 mg of propyl gallate/kg bw | equation variable | 4 | ng*hr/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit ng*hr/mL ([mass] * [time] / [length] ** 3) vs [time].**

A reported unit could not be converted (D1 and equation variable), so that value has no SI equivalent. Extracted — dodecyl gallate: AUC 2.33e+03 ng*hr/mL, D1 1.44e+03 ng*hr/mL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 1.4 mg of propyl gallate/kg bw: this record has 4, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| rats | `Q88` · AUC | 2333 | ng*hr/mL | 8.399 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Punt_2021_table_2:row1:col2, Punt_2021_table_2:row1:col3 |
| 100 mg of methylparaben/kg bw | `Q310` · D1 | 1436 | ng*hr/mL |  |  | (h·ng)/ml | llm (0.6) | Punt_2021_table_2:row10:col2 |
| 1.4 mg of propyl gallate/kg bw | `Q900` · equation variable | 4 | ng*hr/mL |  |  | (h·ng)/ml | llm (0.6) | Punt_2021_table_2:row14:col2, Punt_2021_table_2:row14:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '14 mg of propyl gallate/kg bw' — extend the ontology if this is a real PK parameter (source ['Punt_2021_table_2:row4:col2', 'Punt_2021_table_2:row4:col3'])
- dropped unlinked row (NIL): '17.5 mg of octyl gallate/kg bw' — extend the ontology if this is a real PK parameter (source ['Punt_2021_table_2:row7:col2'])
- dropped unlinked row (NIL): '10 mg of dodecyl gallate/kg bw' — extend the ontology if this is a real PK parameter (source ['Punt_2021_table_2:row9:col2'])
- unit_dimension_mismatch: '100 mg of methylparaben/kg bw' → Q310 (unit '[mass] * [time] / [length] ** 3' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'humans' — extend the ontology if this is a real PK parameter (source ['Punt_2021_table_2:row11:col2', 'Punt_2021_table_2:row11:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dodecyl gallate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'pbk-model prediction' subgroup of Punt_2021 (paper reports 3 populations: dodecyl gallate, pbk-model prediction, reported in vivo)
- molar mass: none found for 'dodecyl gallate' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table tbl1: unparsed_numeric_cell
- table Punt_2021_table_2: unknown_column_role
- table Punt_2021_table_2: ragged_grid
- companion parameter table 2 transcribed (33 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[1.4 mg of propyl gallate/kg bw]` | 4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[10 mg of dodecyl gallate/kg bw]` |  | 38 | only_one_extracted |
| `gpt-oss:120b` | `parameters[100 mg of methylparaben/kg bw]` | 1436 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[rats]` | 2333 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q310 | fail | [time] | ng*hr/mL ([mass] * [time] / [length] ** 3) | ['Punt_2021_table_2:row10:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Punt_2021_table_2:row1:col2', 'Punt_2021_table_2:row1:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdodecyl_gallate%5D%20DodecylGallate_Punt2021_pbk_model_prediction&body=Drug%3A%20dodecyl_gallate%0ARecord%3A%20DodecylGallate_Punt2021_pbk_model_prediction%0APaper%3A%20Punt_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dodecyl_gallate/DodecylGallate_Punt2021_pbk_model_prediction%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:20 UTC</sub>
