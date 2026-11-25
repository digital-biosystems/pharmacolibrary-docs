<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02D&quot;,&quot;href&quot;:&quot;atc/P02D.md&quot;},{&quot;label&quot;:&quot;niclosamide&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/&quot;},{&quot;label&quot;:&quot;Kim_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niclosamide_Zhang2019_reference&quot;,&quot;label&quot;:&quot;Zhang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# niclosamide — `Niclosamide_Kim2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="niclosamide" model-id="Niclosamide_Kim2024_reference" status="rejected" stale="false" population="male hamsters" measured-compound="niclosamide" parameterization="mechanistic" topology="3C"></div>

## Citation
Kim T, Jung W, Cho S, Kim G, Yun HY, Chae JW. Predicting lung exposure of intramuscular niclosamide as an antiviral agent: Power-law based pharmacokinetic modeling. Clinical and translational science 17(5):e13833 (2024).
  ·  DOI: [10.1111/cts.13833](https://doi.org/10.1111/cts.13833)

## Population and dosing

**Population:** male hamsters · condition healthy · n = 20.

**Dosing:** 3850, 6720, 8960, 16800 mg, im, single.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| V c (L) | V1 | 0.371 | L | 0.299 (None% RSE) |
| V p (L) | V2 | 1.647 | L |  |
| V l (L) | V | 0.000919 | L |  |
| CL (L/h) | CL | 0.485 | L/h | 0.0233 (None% RSE) |
| Q inter (L/h) | Q2 | 0.365 | L/h |  |
| Q lung (L/h) | Q | 0.0613 | L/h |  |
| K A2 (1/h) | A2 | 0.002 | 1/h |  |
| F | Fab | 0.430 |  | 0.169 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (A2), so that value has no SI equivalent. Extracted — niclosamide: V1 0.371 L, V2 1.65 L, V 0.000919 L, CL 0.485 L/h, Q2 0.365 L/h, Q 0.0613 L/h, A2 0.002 1/h, Fab 0.43.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of k a1: this record has none, the second reading 0.042; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| V c (L) | `Q63` · V1 | 0.371 | L | 0.000371 | m3 | l | space_fold (0.95) | cts13833-tbl-0002:row3:col1, cts13833-tbl-0002:row3:col2 | 0.299 (None% RSE) |
| V p (L) | `Q64` · V2 | 1.647 | L | 0.001647 | m3 | l | space_fold (0.95) | cts13833-tbl-0002:row4:col1, cts13833-tbl-0002:row4:col2 |  |
| V l (L) | `Q61` · V | 0.000919 | L | 9.19e-07 | m3 | l | llm (0.6) | cts13833-tbl-0002:row5:col1, cts13833-tbl-0002:row5:col2 |  |
| CL (L/h) | `Q22` · CL | 0.485 | L/h | 1.347e-07 | m3/s | l/h | exact (1) | cts13833-tbl-0002:row6:col1, cts13833-tbl-0002:row6:col2 | 0.0233 (None% RSE) |
| Q inter (L/h) | `Q99` · Q2 | 0.365 | L/h | 1.014e-07 | m3/s | l/h | llm (0.6) | cts13833-tbl-0002:row7:col1, cts13833-tbl-0002:row7:col2 |  |
| Q lung (L/h) | `Q30` · Q | 0.0613 | L/h | 1.703e-08 | m3/s | l/h | llm (0.6) | cts13833-tbl-0002:row8:col1, cts13833-tbl-0002:row8:col2 |  |
| K A2 (1/h) | `Q416` · A2 | 0.002 | 1/h |  |  | 1/h | llm_confirmed (0.6) | cts13833-tbl-0002:row10:col1, cts13833-tbl-0002:row10:col2 |  |
| F | `Q40` · Fab | 0.430 |  |  |  |  | exact (1) | cts13833-tbl-0002:row13:col1, cts13833-tbl-0002:row13:col2 | 0.169 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'V c' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'F' routed out of structural estimates ('Interindividual variability')
- column 'power' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'V c (L)'; source reconciliation required
- table representations disagree for 'V p (L)'; source reconciliation required
- table representations disagree for 'V l (L)'; source reconciliation required
- table representations disagree for 'CL (L/h)'; source reconciliation required
- table representations disagree for 'Q inter (L/h)'; source reconciliation required
- table representations disagree for 'Q lung (L/h)'; source reconciliation required
- table representations disagree for 'K A1 (1/h)'; source reconciliation required
- table representations disagree for 'K A2 (1/h)'; source reconciliation required
- table representations disagree for 'Lambda (h)'; source reconciliation required
- table representations disagree for 'Gamma'; source reconciliation required
- table representations disagree for 'F'; source reconciliation required
- table representations disagree for 'X cl'; source reconciliation required
- table representations disagree for 'Plasma'; source reconciliation required
- table representations disagree for 'Lung'; source reconciliation required
- dropped unlinked row (NIL): 'K A1 (1/h)' — extend the ontology if this is a real PK parameter (source ['cts13833-tbl-0002:row9:col1', 'cts13833-tbl-0002:row9:col2'])
- dropped PD-category row 'Lambda (h)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts13833-tbl-0002:row11:col1', 'cts13833-tbl-0002:row11:col2'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts13833-tbl-0002:row12:col1', 'cts13833-tbl-0002:row12:col2'])
- dropped duplicate Q22 ('X cl', value '0.753') — already have one for this compound
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['cts13833-tbl-0002:row20:col1', 'cts13833-tbl-0002:row20:col2'])
- dropped unlinked row (NIL): 'Lung' — extend the ontology if this is a real PK parameter (source ['cts13833-tbl-0002:row21:col1', 'cts13833-tbl-0002:row21:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=niclosamide
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted

**Extraction notes:**
- table cts13833-tbl-0002: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (12/16 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k a1]` |  | 0.042 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a2]` | 0.002 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q inter].parameter_id` | Q99 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[q lung].parameter_id` | Q30 | Q54 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13833-tbl-0002:row6:col1', 'cts13833-tbl-0002:row6:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts13833-tbl-0002:row8:col1', 'cts13833-tbl-0002:row8:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cts13833-tbl-0002:row5:col1', 'cts13833-tbl-0002:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts13833-tbl-0002:row3:col1', 'cts13833-tbl-0002:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts13833-tbl-0002:row4:col1', 'cts13833-tbl-0002:row4:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['cts13833-tbl-0002:row7:col1', 'cts13833-tbl-0002:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.485 | ['cts13833-tbl-0002:row6:col1', 'cts13833-tbl-0002:row6:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.485 L/h | ['cts13833-tbl-0002:row6:col1', 'cts13833-tbl-0002:row6:col2'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.000919 L | ['cts13833-tbl-0002:row5:col1', 'cts13833-tbl-0002:row5:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.371 L | ['cts13833-tbl-0002:row3:col1', 'cts13833-tbl-0002:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.65 L | ['cts13833-tbl-0002:row4:col1', 'cts13833-tbl-0002:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bniclosamide%5D%20Niclosamide_Kim2024_reference&body=Drug%3A%20niclosamide%0ARecord%3A%20Niclosamide_Kim2024_reference%0APaper%3A%20Kim_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_niclosamide/Niclosamide_Kim2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:54 UTC</sub>
