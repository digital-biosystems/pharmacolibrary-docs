<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11G&quot;,&quot;href&quot;:&quot;atc/A11G.md&quot;},{&quot;label&quot;:&quot;ascorbic acid&quot;,&quot;href&quot;:&quot;drugs/drug_ascorbic_acid/&quot;},{&quot;label&quot;:&quot;Bluck_1996 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ascorbic acid — `AscorbicAcid_Bluck1996_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model; c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q84 unit e ([current] * [time]) vs dimensionless.

<div class="pk-model-meta" hidden drug="ascorbic acid" model-id="AscorbicAcid_Bluck1996_reference" status="rejected" stale="false" population="healthy adults" measured-compound="ascorbic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Bluck LJ, Izzard AP, Bates CJ. Measurement of ascorbic acid kinetics in man using stable isotopes and gas chromatography/mass spectrometry. Journal of mass spectrometry : JMS 31(7):741–748 (1996).
  ·  DOI: [10.1002/(SICI)1096-9888(199607)31:7<741::AID-JMS352>3.0.CO;2-H](https://doi.org/10.1002/(SICI)1096-9888(199607)31:7<741::AID-JMS352>3.0.CO;2-H)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 5% (f) + 95% (e) | AUC%ext | 150.4 | e |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model; c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q84 unit e ([current] * [time]) vs dimensionless.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (AUC%ext), so that value has no SI equivalent. Extracted — ascorbic acid: AUC%ext 150 e.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 5% (b) + 95%: this record has none, the second reading 100.000; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| 5% (f) + 95% (e) | `Q84` · AUC%ext | 150.4 | e | e | llm (0.5) | Bluck_1996_table_1:row8:col1, Bluck_1996_table_1:row8:col2, Bluck_1996_table_1:row8:col3, Bluck_1996_table_1:row8:col4, Bluck_1996_table_1:row8:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '(a) Ascorbic Acid' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row0:col1', 'Bluck_1996_table_1:row0:col2', 'Bluck_1996_table_1:row0:col3', 'Bluck_1996_table_1:row0:col4', 'Bluck_1996_table_1:row0:col5'])
- dropped unlinked row (NIL): '(b) [1 - ¹³C]ascorbic acid' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row1:col2', 'Bluck_1996_table_1:row1:col3', 'Bluck_1996_table_1:row1:col4', 'Bluck_1996_table_1:row1:col5'])
- dropped unlinked row (NIL): '5% (b) + 95% (a)' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row2:col1', 'Bluck_1996_table_1:row2:col2', 'Bluck_1996_table_1:row2:col3', 'Bluck_1996_table_1:row2:col4', 'Bluck_1996_table_1:row2:col5'])
- dropped unlinked row (NIL): '(c) Tetra-TMS-ascorbate' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row3:col1', 'Bluck_1996_table_1:row3:col2', 'Bluck_1996_table_1:row3:col3', 'Bluck_1996_table_1:row3:col4', 'Bluck_1996_table_1:row3:col5'])
- dropped unlinked row (NIL): '(d) Tetra-TMS-[1 - ¹³C]ascorbate' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row4:col2', 'Bluck_1996_table_1:row4:col3', 'Bluck_1996_table_1:row4:col4', 'Bluck_1996_table_1:row4:col5'])
- dropped unlinked row (NIL): '5% (d) + 95% (c)' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row5:col1', 'Bluck_1996_table_1:row5:col2', 'Bluck_1996_table_1:row5:col3', 'Bluck_1996_table_1:row5:col4', 'Bluck_1996_table_1:row5:col5'])
- dropped unlinked row (NIL): '(e) Tetra-TBDMS-ascorbate' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row6:col1', 'Bluck_1996_table_1:row6:col2', 'Bluck_1996_table_1:row6:col3', 'Bluck_1996_table_1:row6:col4', 'Bluck_1996_table_1:row6:col5'])
- dropped unlinked row (NIL): '(f) Tetra-TBDMS-[1 - ¹³C]ascorbate' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row7:col2', 'Bluck_1996_table_1:row7:col3', 'Bluck_1996_table_1:row7:col4', 'Bluck_1996_table_1:row7:col5'])
- unit_dimension_mismatch: '5% (f) + 95% (e)' → Q84 (unit '[current] * [time]' vs ontology 'dimensionless') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ascorbic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[5% (b) + 95%]` |  | 100.000 | only_one_extracted |
| `gpt-oss-120b` | `parameters[5% (f) + 95%].parameter_id` | Q84 | Q44 | mismatch |
| `gpt-oss-120b` | `parameters[5% (f) + 95%].value` | 150.4 | 100.000 | mismatch |
| `gpt-oss-120b` | `parameters[body pool per unit body mass]` |  | 29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d]` |  | 39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` |  | 0.00161 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` |  | 0.01505 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` |  | 0.00423 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean plasma concentration]` |  | 60.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1]` |  | 0.00321 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2]` |  | 0.0084 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 53 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q84 | fail | dimensionless | e ([current] * [time]) | ['Bluck_1996_table_1:row8:col1', 'Bluck_1996_table_1:row8:col2', 'Bluck_1996_table_1:row8:col3', 'Bluck_1996_table_1:row8:col4', 'Bluck_1996_table_1:row8:col5'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bascorbic_acid%5D%20AscorbicAcid_Bluck1996_reference&body=Drug%3A%20ascorbic_acid%0ARecord%3A%20AscorbicAcid_Bluck1996_reference%0APaper%3A%20Bluck_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ascorbic_acid/AscorbicAcid_Bluck1996_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-05 07:24 UTC</sub>
