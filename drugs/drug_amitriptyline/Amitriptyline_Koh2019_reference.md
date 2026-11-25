<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;amitriptyline&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/&quot;},{&quot;label&quot;:&quot;Koh_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amitriptyline_Brsen2001_reference&quot;,&quot;label&quot;:&quot;Br\u00f8sen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_Brsen2001_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amitriptyline_Yukawa2002_reference&quot;,&quot;label&quot;:&quot;Yukawa_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_Yukawa2002_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amitriptyline — `Amitriptyline_Koh2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q30 unit L ([length] ** 3) vs [length] ** 3 / [time]; Q30 unit 1/h (1 / [time]) vs [length] ** 3 / [time].

<div class="pk-model-meta" hidden drug="amitriptyline" model-id="Amitriptyline_Koh2019_reference" status="rejected" stale="false" population="Korean healthy adult male volunteers" measured-compound="amitriptyline" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Koh A, Pak KC, Choi HY, Ryu S, Choi SE, Kim KS et al. Quantitative Modeling Analysis Demonstrates the Impact of CYP2C19 and CYP2D6 Genetic Polymorphisms on the Pharmacokinetics of Amitriptyline and Its Metabolite, Nortriptyline. Journal of clinical pharmacology 59(4):532–540 (2019).
  ·  DOI: [10.1002/jcph.1344](https://doi.org/10.1002/jcph.1344)

## Population and dosing

**Population:** Korean healthy adult male volunteers · condition healthy · age group adult · n = 24.

**Dosing:** 25 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| TVCLTRM,AMIT, L/h | CL/F | 92.1 | L/h |
| TVCLTPM,AMIT, L/h | CL | 35.8 | L/h |
| TVVc,AMIT, L | Q | 155 | L |
| TVVp,AMIT, L | V1 | 1670 | L |
| TVKa, 1/h | kabs | 0.125 | 1/h |
| TVALAG, h | tlag | 0.414 | h |
| D1, h | D1 | 1.13 | h |
| K24, 1/h | kcomp | 0.00581 | 1/h |
| K41, 1/h | k41 | 80.4 | 1/h |
| MTME2, h | MTT | 2.65 | h |
| CLT,NOR, L/h | CL | 58.2 | L/h |
| K56, 1/h | Q | 1.09 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.591). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q30 unit L ([length] ** 3) vs [length] ** 3 / [time]; Q30 unit 1/h (1 / [time]) vs [length] ** 3 / [time].**

A reported unit could not be converted (Q and Q), so that value has no SI equivalent. Extracted — amitriptyline: CL/F 92.1 L/h, CL 35.8 L/h, Q 155 L, V1 1.67e+03 L, kabs 0.125 1/h, tlag 0.414 h, D1 1.13 h, kcomp 0.00581 1/h, … (+2); nortriptyline: CL 58.2 L/h, Q 1.09 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| TVCLTRM,AMIT, L/h | `Q27` · CL/F | 92.1 | L/h | 2.558e-05 | m3/s | l/h | llm (0.6) | Koh_2019_table_3:row0:col1 |
| TVCLTPM,AMIT, L/h | `Q22` · CL | 35.8 | L/h | 9.944e-06 | m3/s | l/h | llm (0.6) | Koh_2019_table_3:row1:col1 |
| TVVc,AMIT, L | `Q30` · Q | 155 | L |  |  | l | llm (0.6) | Koh_2019_table_3:row8:col1 |
| TVVp,AMIT, L | `Q63` · V1 | 1670 | L | 1.67 | m3 | l | llm (0.6) | Koh_2019_table_3:row11:col1 |
| TVKa, 1/h | `Q49` · kabs | 0.125 | 1/h | 3.472e-05 | 1/s | 1/h | exact (1) | Koh_2019_table_3:row13:col1 |
| TVALAG, h | `Q83` · tlag | 0.414 | h | 1490 | s | h | tv_prefix (0.95) | Koh_2019_table_3:row15:col1 |
| D1, h | `Q310` · D1 | 1.13 | h | 4068 | s | h | exact (1) | Koh_2019_table_3:row17:col1 |
| K24, 1/h | `Q48` · kcomp | 0.00581 | 1/h | 1.614e-06 | 1/s | 1/h | exact (1) | Koh_2019_table_3:row18:col1 |
| K41, 1/h | `Q348` · k41 | 80.4 | 1/h | 0.02233 | 1/s | 1/h | exact (1) | Koh_2019_table_3:row19:col1 |
| MTME2, h | `Q81` · MTT | 2.65 | h | 9540 | s | h | llm (0.6) | Koh_2019_table_3:row22:col1 |
| CLT,NOR, L/h | `Q22` · CL | 58.2 | L/h | 1.617e-05 | m3/s | l/h | exact (1) | Koh_2019_table_3:row24:col1 |
| K56, 1/h | `Q30` · Q | 1.09 | 1/h |  |  | 1/h | exact (1) | Koh_2019_table_3:row26:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 2 row(s) → nortriptyline (abbreviation 2)
- dropped duplicate Q22 ('TVCLMROM,AMIT, L/h', value '30.6') — already have one for this compound
- dropped duplicate Q27 ('TVCLPMPM,AMIT, L/h', value '17') — already have one for this compound
- dropped unlinked row (NIL): 'IVCLTRM,AMIT (%CV)' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row4:col1'])
- dropped duplicate Q27 ('TVCLORM,AMIT, L/h', value '18.8') — already have one for this compound
- dropped unlinked row (NIL): 'IVCLMROM,AMIT (%CV)' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row7:col1'])
- unit_dimension_mismatch: 'TVVc,AMIT, L' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'IVVc,AMIT (%CV)' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row9:col1'])
- dropped duplicate Q30 ('TVQ, L/h', value '109') — already have one for this compound
- dropped unlinked row (NIL): 'IVVp,AMIT (%CV)' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row12:col1'])
- unit_dimension_unknown: 'CV, %' (kabs)
- dropped duplicate Q49 ('IVKa (CV, %)', value '0.137') — already have one for this compound
- dropped unlinked row (NIL): 'IVALAG (CV, %)' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row16:col1'])
- dropped unlinked row (NIL): 'IVK41 (CV, %)' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row20:col1'])
- dropped unlinked row (NIL): 'MTME1 a, h' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row21:col1'])
- dropped unlinked row (NIL): 'IVMTME (CV, %)' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row23:col1'])
- dropped unlinked row (NIL): 'IVCLT,NOR (CV, %)' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row25:col1'])
- unit_dimension_mismatch: 'K56, 1/h' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'K65, 1/h' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('K65, 1/h', value '0.168') — already have one for this compound
- dropped diagnostic row 'IVK65 (CV, %)' → Q318 (shrinkage) — reported statistic, not a parameter
- routed 'ε1 (proportional) b' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ε2 (proportional) b' — extend the ontology if this is a real PK parameter (source ['Koh_2019_table_3:row30:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amitriptyline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 14 linked by role; re-tagged parent→nortriptyline ×5

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.591 (13/22 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[mtme1 a]` |  | 4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtme2]` | 2.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvclmrom,amit]` |  | 30.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcltpm,amit]` | 35.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcltrm,amit].parameter_id` | Q27 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[tvq]` |  | 109 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvvc,amit].parameter_id` | Q30 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[tvvp,amit].parameter_id` | Q63 | Q64 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Koh_2019_table_3:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Koh_2019_table_3:row24:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Koh_2019_table_3:row0:col1'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | L ([length] ** 3) | ['Koh_2019_table_3:row8:col1'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | 1/h (1 / [time]) | ['Koh_2019_table_3:row26:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['Koh_2019_table_3:row17:col1'] |
| C5_dimension_Q348 | pass | 1 / [time] |  | ['Koh_2019_table_3:row19:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Koh_2019_table_3:row18:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Koh_2019_table_3:row13:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Koh_2019_table_3:row11:col1'] |
| C5_dimension_Q81 | pass | [time] |  | ['Koh_2019_table_3:row22:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Koh_2019_table_3:row15:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35.8 L/h | ['Koh_2019_table_3:row1:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 58.2 L/h | ['Koh_2019_table_3:row24:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 92.1 L/h | ['Koh_2019_table_3:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.67e+03 L | ['Koh_2019_table_3:row11:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamitriptyline%5D%20Amitriptyline_Koh2019_reference&body=Drug%3A%20amitriptyline%0ARecord%3A%20Amitriptyline_Koh2019_reference%0APaper%3A%20Koh_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amitriptyline/Amitriptyline_Koh2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:35 UTC</sub>
