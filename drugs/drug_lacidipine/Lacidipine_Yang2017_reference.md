<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;lacidipine&quot;,&quot;href&quot;:&quot;drugs/drug_lacidipine/&quot;},{&quot;label&quot;:&quot;Yang_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lacidipine — `Lacidipine_Yang2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="lacidipine" model-id="Lacidipine_Yang2017_reference" status="rejected" stale="false" population="healthy beagle dogs" measured-compound="lacidipine" parameterization="mechanistic" topology="1C"></div>

## Citation
Yang B, Wu C, Ji B, Wu M, He Z, Shang L et al. Virtual population pharmacokinetic using physiologically based pharmacokinetic model for evaluating bioequivalence of oral lacidipine formulations in dogs. Asian journal of pharmaceutical sciences 12(1):98–104 (2017).
  ·  DOI: [10.1016/j.ajps.2016.03.003](https://doi.org/10.1016/j.ajps.2016.03.003)

## Population and dosing

**Population:** healthy beagle dogs · condition healthy · age group adult · n = 6.

**Dosing:** 4 mg, oral, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax | Cmax | 1.10 |  |
| AUC0–24 | AUCt | 0.94 |  |
| AUC0–∞ | AUC∞ | 0.95 |  |
| Tmax (h) | tmax | 1.79 | h |
| t1/2 (h) | t1/2z | 5.20 | h |
| F (%) | Fab | 110.6 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.727). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auc0-24].value`: this record has 0.94, the second reading 0.826; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax | `Q32` · Cmax | 1.10 |  |  |  |  | exact (1) | t0040:row2:col1, t0040:row2:col3 |
| AUC0–24 | `Q19` · AUCt | 0.94 |  |  |  |  | llm (0.6) | t0040:row3:col1, t0040:row3:col3 |
| AUC0–∞ | `Q17` · AUC∞ | 0.95 |  |  |  |  | exact (1) | t0040:row4:col1, t0040:row4:col3 |
| Tmax (h) | `Q56` · tmax | 1.79 | h | 6444 | s | h | exact (1) | Yang_2017_table_3:row1:col1, Yang_2017_table_3:row1:col2, Yang_2017_table_3:row1:col3 |
| t1/2 (h) | `Q57` · t1/2z | 5.20 | h | 1.872e+04 | s | h | exact (1) | Yang_2017_table_3:row2:col1, Yang_2017_table_3:row2:col2, Yang_2017_table_3:row2:col3 |
| F (%) | `Q40` · Fab | 110.6 |  |  |  |  | exact (1) | Yang_2017_table_3:row5:col1, Yang_2017_table_3:row5:col2, Yang_2017_table_3:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax (ng/ml)', value '26.647') — already have one for this compound
- dropped duplicate Q19 ('AUC0-24 (ng⋅h/ml)', value '89.29') — already have one for this compound
- dropped duplicate Q17 ('AUC0-∞ (ng⋅h/ml)', value '96.97') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lacidipine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell t0040:row2:col2 = '81.6% ~ 124%'
- unparsed cell t0040:row2:col4 = '98.4% ~ 123.2%'
- unparsed cell t0040:row3:col2 = '85.8% ~ 115.7%'
- unparsed cell t0040:row3:col4 = '87.5% ~ 102.0%'
- unparsed cell t0040:row4:col2 = '85.4% ~ 116.2%'
- unparsed cell t0040:row4:col4 = '87.8% ~ 101.7%'
- companion parameter table 3 transcribed (18 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-24].value` | 0.94 | 0.826 | mismatch |
| `gpt-oss-120b` | `parameters[auc0-inf].value` | 0.95 | 0.993 | mismatch |
| `gpt-oss-120b` | `parameters[cmax].value` | 1.10 | 1.165 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q56 | pass | [time] |  | ['Yang_2017_table_3:row1:col1', 'Yang_2017_table_3:row1:col2', 'Yang_2017_table_3:row1:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Yang_2017_table_3:row2:col1', 'Yang_2017_table_3:row2:col2', 'Yang_2017_table_3:row2:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 |  | ['t0040:row4:col1', 't0040:row4:col3'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  | ['t0040:row3:col1', 't0040:row3:col3'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['t0040:row2:col1', 't0040:row2:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blacidipine%5D%20Lacidipine_Yang2017_reference&body=Drug%3A%20lacidipine%0ARecord%3A%20Lacidipine_Yang2017_reference%0APaper%3A%20Yang_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lacidipine/Lacidipine_Yang2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 03:08 UTC</sub>
