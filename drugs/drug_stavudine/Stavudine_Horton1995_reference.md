<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;stavudine&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/&quot;},{&quot;label&quot;:&quot;Horton_1995 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Stavudine_Panhard2007_reference&quot;,&quot;label&quot;:&quot;Panhard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Panhard2007_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Sinxadi2010_reference&quot;,&quot;label&quot;:&quot;Sinxadi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Sinxadi2010_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Jullien2007_reference&quot;,&quot;label&quot;:&quot;Jullien_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Jullien2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# stavudine — `Stavudine_Horton1995_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q49 unit liters/h ([length] ** 3 / [time]) vs 1 / [time].

<div class="pk-model-meta" hidden drug="stavudine" model-id="Stavudine_Horton1995_reference" status="rejected" stale="false" population="patients with AIDS or AIDS-related complex" measured-compound="stavudine" parameterization="apparent" topology="2C"></div>

## Citation
Horton CM, Dudley MN, Kaul S, Mayer KH, Squires K, Dunkle L et al. Population pharmacokinetics of stavudine (d4T) in patients with AIDS or advanced AIDS-related complex. Antimicrobial agents and chemotherapy 39(10):2309–2315 (1995).
  ·  DOI: [10.1128/AAC.39.10.2309](https://doi.org/10.1128/AAC.39.10.2309)

## Population and dosing

**Population:** patients with AIDS or AIDS-related complex · condition AIDS · age group mixed · n = 76.

**Dosing:** 7, 840 mg, oral, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (liters/h) | CL/F | 30.9 | liters/h |
| V ss /F (liters) | Vss | 68.9 | liters |
| Q/F (liters/h) | Q/F | 12.4 | liters/h |
| K a (liters/h) | kabs | 2.38 | liters/h |
| V 1 /F (liters) | V1/F | 8.42 | liters |
| F (% of dose) | Fab | 99.1 | % of dose |
| CL (liters/h) | CL | 34.6 | liters/h |
| V 1 (liters) | V1 | 23.9 | liters |
| Q (liters/h) | Q | 20.3 | liters/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.267). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q49 unit liters/h ([length] ** 3 / [time]) vs 1 / [time].**

A reported unit could not be converted (kabs and Fab), so that value has no SI equivalent. Extracted — stavudine: CL/F 30.9 liters/h, Vss 68.9 liters, Q/F 12.4 liters/h, kabs 2.38 liters/h, V1/F 8.42 liters, Fab 99.1 % of dose, CL 34.6 liters/h, V1 23.9 liters, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has 99.1, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (liters/h) | `Q27` · CL/F | 30.9 | liters/h | 8.583e-06 | m3/s | l/h | exact (1) | tab_5:row6:col1, tab_5:row7:col1, Horton_1995_table_2:row0:col1, Horton_1995_table_2:row2:col1 |
| V ss /F (liters) | `Q65` · Vss | 68.9 | liters | 0.0689 | m3 | l | llm (0.6) | tab_5:row7:col3, Horton_1995_table_2:row0:col3, Horton_1995_table_2:row2:col3 |
| Q/F (liters/h) | `Q69` · Q/F | 12.4 | liters/h | 3.444e-06 | m3/s | l/h | exact (1) | tab_5:row7:col4, Horton_1995_table_2:row0:col4, Horton_1995_table_2:row2:col4 |
| K a (liters/h) | `Q49` · kabs | 2.38 | liters/h |  |  | l/h | space_fold (0.95) | tab_5:row7:col5, Horton_1995_table_2:row0:col5, Horton_1995_table_2:row2:col5, Horton_1995_table_3:row0:col6, Horton_1995_table_3:row2:col6 |
| V 1 /F (liters) | `Q290` · V1/F | 8.42 | liters | 0.00842 | m3 | l | space_fold (0.95) | Horton_1995_table_2:row0:col2 |
| F (% of dose) | `Q40` · Fab | 99.1 | % of dose |  |  |  | exact (1) | Horton_1995_table_3:row0:col1, Horton_1995_table_3:row2:col1 |
| CL (liters/h) | `Q22` · CL | 34.6 | liters/h | 9.611e-06 | m3/s | l/h | exact (1) | Horton_1995_table_3:row0:col2, Horton_1995_table_3:row2:col2 |
| V 1 (liters) | `Q63` · V1 | 23.9 | liters | 0.0239 | m3 | l | space_fold (0.95) | Horton_1995_table_3:row0:col3 |
| Q (liters/h) | `Q30` · Q | 20.3 | liters/h | 5.639e-06 | m3/s | l/h | exact (1) | Horton_1995_table_3:row0:col5, Horton_1995_table_3:row2:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'K a (liters/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'ε1' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_2:row0:col6', 'Horton_1995_table_3:row0:col7'])
- dropped unlinked row (NIL): 'ε2' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_2:row0:col7', 'Horton_1995_table_3:row0:col8'])
- dropped duplicate Q65 ('V ss (liters)', value '56.1') — already have one for this compound
- dropped value-less row: 'CV (in percent)' (captured trailing unit 'in percent' for child rows)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=stavudine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted

**Extraction notes:**
- table tab_5: unparsed_numeric_cell
- transposed table tab_5: logical view retains original source coordinates
- table Horton_1995_table_2: unparsed_numeric_cell
- transposed table Horton_1995_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (11 record(s))
- table Horton_1995_table_3: unparsed_numeric_cell
- transposed table Horton_1995_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (12 record(s))
- LLM selected parameter table(s) 2, 3, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 99.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].value` | 30.9 | 20 | mismatch |
| `gpt-oss-120b` | `parameters[cl]` | 34.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 99.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a].value` | 2.38 | 82 | mismatch |
| `gpt-oss-120b` | `parameters[q/f].value` | 12.4 | 30 | mismatch |
| `gpt-oss-120b` | `parameters[q]` | 20.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1 /f]` | 8.42 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1]` | 23.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v ss /f].parameter_id` | Q65 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[v ss /f].value` | 68.9 | 89 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Horton_1995_table_3:row0:col2', 'Horton_1995_table_3:row2:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_5:row6:col1', 'tab_5:row7:col1', 'Horton_1995_table_2:row0:col1', 'Horton_1995_table_2:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Horton_1995_table_2:row0:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Horton_1995_table_3:row0:col5', 'Horton_1995_table_3:row2:col5'] |
| C5_dimension_Q49 | fail | 1 / [time] | liters/h ([length] ** 3 / [time]) | ['tab_5:row7:col5', 'Horton_1995_table_2:row0:col5', 'Horton_1995_table_2:row2:col5', 'Horton_1995_table_3:row0:col6', 'Horton_1995_table_3:row2:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Horton_1995_table_3:row0:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tab_5:row7:col3', 'Horton_1995_table_2:row0:col3', 'Horton_1995_table_2:row2:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['tab_5:row7:col4', 'Horton_1995_table_2:row0:col4', 'Horton_1995_table_2:row2:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 34.6 L/h | ['Horton_1995_table_3:row0:col2', 'Horton_1995_table_3:row2:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 30.9 L/h | ['tab_5:row6:col1', 'tab_5:row7:col1', 'Horton_1995_table_2:row0:col1', 'Horton_1995_table_2:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.42 L | ['Horton_1995_table_2:row0:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 23.9 L | ['Horton_1995_table_3:row0:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 68.9 L | ['tab_5:row7:col3', 'Horton_1995_table_2:row0:col3', 'Horton_1995_table_2:row2:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bstavudine%5D%20Stavudine_Horton1995_reference&body=Drug%3A%20stavudine%0ARecord%3A%20Stavudine_Horton1995_reference%0APaper%3A%20Horton_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_stavudine/Stavudine_Horton1995_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:45 UTC</sub>
