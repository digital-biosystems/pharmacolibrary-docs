<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoteric acid&quot;,&quot;href&quot;:&quot;drugs/drug_gadoteric_acid/&quot;},{&quot;label&quot;:&quot;Scala_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadoteric acid — `GadotericAcid_Scala2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit h µmol/L ([time] * [substance] / [length] ** 3) vs [mass] * [time] / [length] ** 3; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="gadoteric acid" model-id="GadotericAcid_Scala2018_reference" status="rejected" stale="false" population="pediatric subjects younger than 2 years" measured-compound="gadoteric acid" parameterization="mechanistic" topology="2C"></div>

## Citation
Scala M, Koob M, de Buttet S, Bourrinet P, Felices M, Jurkiewicz E. A Pharmacokinetics, Efficacy, and Safety Study of Gadoterate Meglumine in Pediatric Subjects Aged Younger Than 2 Years. Investigative radiology 53(2):70–79 (2018).
  ·  DOI: [10.1097/RLI.0000000000000412](https://doi.org/10.1097/RLI.0000000000000412)

## Population and dosing

**Population:** pediatric subjects younger than 2 years · condition healthy · age group infant.

**Dosing:** 0.1 mmol/kg, iv, single.

**Dosed compound ≠ measured compound:** dosed gadoterate meglumine, measured gadoteric acid.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC, h µmol/L | AUC | 1591.1 | h µmol/L |
| CL/kg, L/h per kg* | CLnorm | 0.0602 | L/h per kg* |
| Vss/kg, L/kg* | Vnorm | 0.0473 | L/kg* |
| t1/2β, h | t1/2β | 1.3545 | h |
| CL | CL | 2.51 | L/h |
| V1 | V1 | 0.161 | L |
| Q | Q | 0.335 | L/h |
| volume of distribution Vdss estimated in the study | V | 0.0473 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214), qwen3.8-27b (not confirmed, agreement 0.312). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit h µmol/L ([time] * [substance] / [length] ** 3) vs [mass] * [time] / [length] ** 3; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — gadoteric acid: AUC 1.59e+03 h µmol/L, CLnorm 0.0602 L/h per kg*, Vnorm 0.0473 L/kg*, t1/2β 1.35 h, CL 2.51 L/h, V1 0.161 L, Q 0.335 L/h, V 0.0473 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has gadoteric acid, the second reading gadoterate meglumine; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC, h µmol/L | `Q88` · AUC | 1591.1 | h µmol/L |  |  | (h·µM·ol)/l | exact (1) | Scala_2018_table_p4_3:row0:col1, Scala_2018_table_p4_3:row0:col2, Scala_2018_table_p4_3:row0:col3 |
| CL/kg, L/h per kg* | `Q354` · CLnorm | 0.0602 | L/h per kg* | 1.171e-06 | m3/s | l/(h·kg) | llm (0.6) | Scala_2018_table_p4_3:row1:col1, Scala_2018_table_p4_3:row1:col2, Scala_2018_table_p4_3:row1:col3 |
| Vss/kg, L/kg* | `Q352` · Vnorm | 0.0473 | L/kg* | 0.003311 | m3 | l/kg | llm (0.6) | Scala_2018_table_p4_3:row2:col1, Scala_2018_table_p4_3:row2:col2, Scala_2018_table_p4_3:row2:col3 |
| t1/2β, h | `Q60` · t1/2β | 1.3545 | h | 4876 | s | h | half_life_rule (0.95) | Scala_2018_table_p4_3:row3:col1, Scala_2018_table_p4_3:row3:col2, Scala_2018_table_p4_3:row3:col3 |
| CL | `Q22` · CL | 2.51 | L/h | 6.972e-07 | m3/s | L/h | exact (1) | Scala_2018:results_prose |
| V1 | `Q63` · V1 | 0.161 | L | 0.000161 | m3 | L | exact (1) | Scala_2018:results_prose |
| Q | `Q30` · Q | 0.335 | L/h | 9.306e-08 | m3/s | L/h | exact (1) | Scala_2018:results_prose |
| volume of distribution Vdss estimated in the study | `Q61` · V | 0.0473 | L/kg | 0.003311 | m3 | L | boundary (0.8) | Scala_2018:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC, h µmol/L' → Q88 (unit '[time] * [substance] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'L/h per kg*' (CLnorm)
- unit_dimension_unknown: 'L/kg*' (Vnorm)
- salvaged Q22 ('CL'=2.51) from results prose — parameter table was unreadable
- salvaged Q63 ('V1'=0.161) from results prose — parameter table was unreadable
- salvaged Q30 ('Q'=0.335) from results prose — parameter table was unreadable
- salvaged Q61 ('volume of distribution Vdss estimated in the study'=0.0473) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadoteric acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.214 (3/14 fields) | 11 |
| `qwen3.8-27b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc].value` | 1591.1 | 2841 | mismatch |
| `gpt-oss-120b` | `parameters[cl/kg].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl/kg].value` | 0.0602 | 0.1019 | mismatch |
| `gpt-oss-120b` | `parameters[cl]` | 2.51 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.335 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2β].value` | 1.3545 | 3.0291 | mismatch |
| `gpt-oss-120b` | `parameters[v1]` | 0.161 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution vdss estimated in the study]` | 0.0473 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss/kg].parameter_id` | Q352 | Q65 | mismatch |
| `gpt-oss-120b` | `parameters[vss/kg].value` | 0.0473 | 0.1597 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | gadoteric acid | gadoterate meglumine | mismatch |
| `qwen3.8-27b` | `model.links` | [] | [['gadoterate meglumine', 'gadoteric acid', 'hydrolysis']] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[auc, h umol/l]` |  | 1591.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[auc, h umol/l]` | 1591.1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/kg, l/h per kg*]` |  | 0.0602 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/kg, l/h per kg*]` | 0.0602 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].parameter_id` | Q22 | Q351 | mismatch |
| `qwen3.8-27b` | `parameters[t1/2β]` |  | 1.3545 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2β]` | 1.3545 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vss/kg]` |  | 0.0473 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vss/kg]` | 0.0473 |  | only_one_extracted |

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
| C5_dimension_Q60 | pass | [time] |  | ['Scala_2018_table_p4_3:row3:col1', 'Scala_2018_table_p4_3:row3:col2', 'Scala_2018_table_p4_3:row3:col3'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | h µmol/L ([time] * [substance] / [length] ** 3) | ['Scala_2018_table_p4_3:row0:col1', 'Scala_2018_table_p4_3:row0:col2', 'Scala_2018_table_p4_3:row0:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.51 | ['Scala_2018:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.51 L/h | ['Scala_2018:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.31 L | ['Scala_2018:discussion_prose'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.161 L | ['Scala_2018:results_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadoteric_acid%5D%20GadotericAcid_Scala2018_reference&body=Drug%3A%20gadoteric_acid%0ARecord%3A%20GadotericAcid_Scala2018_reference%0APaper%3A%20Scala_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadoteric_acid/GadotericAcid_Scala2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:06 UTC</sub>
