<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;epinastine&quot;,&quot;href&quot;:&quot;drugs/drug_epinastine/&quot;},{&quot;label&quot;:&quot;Sarashina_2005 \u00b7 estimated_value&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# epinastine — `Epinastine_Sarashina2005_estimated_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="epinastine" model-id="Epinastine_Sarashina2005_estimated_value" status="rejected" stale="false" population="healthy adults and paediatric atopic dermatitis patients" measured-compound="epinastine" parameterization="apparent" topology="1C"></div>

## Citation
Sarashina A, Tatami S, Yamamura N, Tsuda Y, Igarashi T. Population pharmacokinetics of epinastine, a histamine H1 receptor antagonist, in adults and children. British journal of clinical pharmacology 59(1):43–53 (2005).
  ·  DOI: [10.1111/j.1365-2125.2005.2250](https://doi.org/10.1111/j.1365-2125.2005.2250)

## Population and dosing

**Population:** healthy adults and paediatric atopic dermatitis patients · condition healthy and atopic dermatitis · age group mixed · n = 124.

**Dosing:** 10, 20, 40 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** Q/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| q 1 | Q | 19.1 | L/h | None (None% RSE) |
| q 3 | Q3 | 34.4 | L/h |  |
| q 5 | equation variable | 1.18 |  |  |
| q 6 | Q/F | 1.41 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.429). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of absorption lag time: food: this record has none, the second reading 0.234; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| q 1 | `Q30` · Q | 19.1 | L/h | 5.306e-06 | m3/s | L/h | space_fold (0.95) | tab_2:row12:col5, tab_2:row12:col6 | None (None% RSE) |
| q 3 | `Q308` · Q3 | 34.4 | L/h | 9.556e-06 | m3/s | L/h | space_fold (0.95) | tab_2:row14:col5, tab_2:row14:col6 |  |
| q 5 | `Q900` · equation variable | 1.18 |  |  |  |  | llm (0.6) | tab_2:row16:col5, tab_2:row16:col6 |  |
| q 6 | `Q69` · Q/F | 1.41 |  |  |  |  | llm (0.6) | tab_2:row17:col5, tab_2:row17:col6, Sarashina_2005_table_2:row0:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability was necessary for CL/F, V 1 /F, Q, V 2 /F and Ka.')
- table section iiv: 'V 1 /F' routed out of structural estimates ('Interindividual variability was necessary for CL/F, V 1 /F, Q, V 2 /F and Ka.')
- table section iiv: 'Q' routed out of structural estimates ('Interindividual variability was necessary for CL/F, V 1 /F, Q, V 2 /F and Ka.')
- table section iiv: 'V 2 /F' routed out of structural estimates ('Interindividual variability was necessary for CL/F, V 1 /F, Q, V 2 /F and Ka.')
- table section iiv: 'Ka' routed out of structural estimates ('Interindividual variability was necessary for CL/F, V 1 /F, Q, V 2 /F and Ka.')
- dropped unlinked row (NIL): 'FOOD' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col1', 'tab_2:row9:col3'])
- dropped duplicate Q30 ('q 2', value '174') — already have one for this compound
- dropped duplicate Q30 ('q 4', value '452') — already have one for this compound
- dropped duplicate Q900 ('q 7', value '1.75') — already have one for this compound
- dropped duplicate Q30 ('q 8', value '0.234') — already have one for this compound
- dropped duplicate Q900 ('q 9', value '1.06') — already have one for this compound
- dropped duplicate Q30 ('q 10', value '0.805') — already have one for this compound
- dropped unlinked row (NIL): 'q 11' — extend the ontology if this is a real PK parameter (source ['tab_2:row22:col5', 'tab_2:row22:col6', 'Sarashina_2005_table_2:row5:col3'])
- documentation only: 'CL/F' → Q27 (CL/F) comes from ['fig_0:caption'], not from a located parameter table — not emitted as a model parameter
- dropped duplicate Q30 ('Q', value None) — already have one for this compound
- documentation only: 'Ka' → Q49 (kabs) comes from ['fig_0:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'ALAG' → Q83 (tlag) comes from ['fig_0:caption'], not from a located parameter table — not emitted as a model parameter
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['fig_0:caption']); the table cell was unparseable — needs review
- implicit units: 'q 1' → L/h (from the paper text: 'The equation states “CL/F(litres h-1) = q1 ...”, so q1 has units of L/h.')
- implicit units: 'q 3' → L/h (from the paper text: 'The equation states “Q(litres h-1) = q3 exp(ηQ)”, so q3 has units of L/h.')
- implicit units: 'q 6' — the LLM proposed 'dimensionless', whose dimension does not fit Q69; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=epinastine
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- population split: 'estimated value' subgroup of Sarashina_2005 (paper reports 2 populations: estimated value, hypothesized value)

**Extraction notes:**
- unparsed cell tab_2:row9:col4 = 'if fed if fasted 1 ,'
- unparsed cell Sarashina_2005_table_2:row0:col6 = 'P &lt; 0.01'
- unparsed cell Sarashina_2005_table_2:row1:col6 = 'P &lt; 0.01'
- unparsed cell Sarashina_2005_table_2:row2:col6 = 'P &lt; 0.01'
- unparsed cell Sarashina_2005_table_2:row3:col6 = 'P &lt; 0.01'
- unparsed cell Sarashina_2005_table_2:row4:col6 = 'P &lt; 0.01'
- unparsed cell Sarashina_2005_table_2:row5:col6 = 'P &lt; 0.01'
- companion parameter table 2 transcribed (20 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.429 (6/14 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[absorption lag time: food]` |  | 0.234 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f]` |  | 19.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka]` |  | 1.18 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q 4]` |  | 452 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q 5]` | 1.18 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q 6]` | 1.41 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 1 /f]` |  | 174 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 2 /f]` |  | 452 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row12:col5', 'tab_2:row12:col6'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab_2:row14:col5', 'tab_2:row14:col6'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] |  | ['tab_2:row17:col5', 'tab_2:row17:col6', 'Sarashina_2005_table_2:row0:col3'] |
| C7_apparent_coherence | pass |  |  |  |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepinastine%5D%20Epinastine_Sarashina2005_estimated_value&body=Drug%3A%20epinastine%0ARecord%3A%20Epinastine_Sarashina2005_estimated_value%0APaper%3A%20Sarashina_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_epinastine/Epinastine_Sarashina2005_estimated_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 23:26 UTC</sub>
