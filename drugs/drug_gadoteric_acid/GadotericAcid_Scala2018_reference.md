<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoteric acid&quot;,&quot;href&quot;:&quot;drugs/drug_gadoteric_acid/&quot;},{&quot;label&quot;:&quot;Scala_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadoteric acid — `GadotericAcid_Scala2018_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.312). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The gadoteric acid record was rejected because reported clearance (2.51 L/h) and volume (0.161 L) were flagged as physiologically implausible, consistent with unit/scale extraction error.**

The record reports total clearance of 2.51 L/h and volume of distribution of 0.161 L for gadoteric acid. The finding attributes the clearance/volume failure to an implausible magnitude from a unit/scale extraction error but does not identify which value triggered it. Extracted — gadoteric acid: AUC 1.59e+03, CLnorm 0.0602 L/h/kg, Vss 0.0473 L/kg, t1/2β 1.35 h, CL 2.51 L/h, V 0.161 L, Q 0.335 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has none, the second reading gadoterate meglumine → gadoteric acid (hydrolysis); it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `gadoterate meglumine`, measured `gadoteric acid`.

## Citation
Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018)
  ·  DOI: [10.1097/RLI.0000000000000412](https://doi.org/10.1097/RLI.0000000000000412)

<div class="pk-model-meta" hidden drug="gadoteric acid" model-id="GadotericAcid_Scala2018_reference" status="rejected" stale="false" population="pediatric subjects younger than 2 years with normal estimated glomerular filtration rate" measured-compound="gadoteric acid" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC, h µmol/L | `Q88` · AUC | 1591.1 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Scala_2018_table_p4_3:row0:col1, Scala_2018_table_p4_3:row0:col2, Scala_2018_table_p4_3:row0:col3 | — | not captured |
| CL/kg, L/h per kg* | `Q354` · CLnorm | 0.0602 | L/h/kg | 1.1705555555555555e-06 | L/h | not captured | llm (0.6) | Scala_2018_table_p4_3:row1:col1, Scala_2018_table_p4_3:row1:col2, Scala_2018_table_p4_3:row1:col3 | — | not captured |
| Vss/kg, L/kg* | `Q65` · Vss | 0.0473 | L/kg | 0.003311 | L | not captured | llm (0.6) | Scala_2018_table_p4_3:row2:col1, Scala_2018_table_p4_3:row2:col2, Scala_2018_table_p4_3:row2:col3 | — | not captured |
| t1/2β, h | `Q60` · t1/2β | 1.3545 | h | 4876.2 | [h] | not captured | exact (1.0) | Scala_2018_table_p4_3:row3:col1, Scala_2018_table_p4_3:row3:col2, Scala_2018_table_p4_3:row3:col3 | — | not captured |
| CL | `Q22` · CL | 2.51 | L/h | 6.972222222222222e-07 | L/h | not captured | exact (1.0) | Scala_2018:results_prose | — | not captured |
| V1 | `Q61` · V | 0.161 | L | 0.000161 | L | not captured | exact (1.0) | Scala_2018:results_prose | — | not captured |
| Q | `Q30` · Q | 0.335 | L/h | 9.305555555555555e-08 | L/h | not captured | exact (1.0) | Scala_2018:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/kg*' (Vss)
- salvaged Q22 ('CL'=2.51) from results prose — parameter table was unreadable
- salvaged Q63 ('V1'=0.161) from results prose — parameter table was unreadable
- salvaged Q30 ('Q'=0.335) from results prose — parameter table was unreadable
- implicit units: 'AUC, h µmol/L' — the LLM proposed 'μmol·h/L', whose dimension does not fit Q88; left unset
- implicit units: 'CL/kg, L/h per kg*' → L/h/kg (from the paper text: 'The paper states “The median CL adjusted to BW was estimated at 0.06 L/h per kg.”')
- implicit units: 'Vss/kg, L/kg*' → L/kg (from the paper text: 'The paper states “The median Vss adjusted to BW was estimated at 0.047 L/kg.”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadoteric acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- final table T3: grid unusable → re-running vision table extraction for Scala_2018
- LLM region Scala_2018:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [] | [['gadoterate meglumine', 'gadoteric acid', 'hydrolysis']] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[auc, h umol/l]` | not captured | 1591.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[auc, h umol/l]` | 1591.1 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/kg, l/h per kg*]` | not captured | 0.0602 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/kg, l/h per kg*]` | 0.0602 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].parameter_id` | Q22 | Q351 | mismatch |
| `qwen3.8-27b` | `parameters[t1/2β]` | not captured | 1.3545 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2β]` | 1.3545 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vss/kg]` | not captured | 0.0473 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vss/kg]` | 0.0473 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 1.35 | 0.044 | 0.0326 | 0.25 | reported t½β |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Scala_2018_table_p4_3:row1:col1', 'Scala_2018_table_p4_3:row1:col2', 'Scala_2018_table_p4_3:row1:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Scala_2018_table_p4_3:row3:col1', 'Scala_2018_table_p4_3:row3:col2', 'Scala_2018_table_p4_3:row3:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Scala_2018_table_p4_3:row2:col1', 'Scala_2018_table_p4_3:row2:col2', 'Scala_2018_table_p4_3:row2:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Scala_2018_table_p4_3:row0:col1', 'Scala_2018_table_p4_3:row0:col2', 'Scala_2018_table_p4_3:row0:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.51 | not captured | not captured | ['Scala_2018:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.51 L/h | not captured | not captured | ['Scala_2018:results_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.161 L | not captured | not captured | ['Scala_2018:results_prose'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 3.31 L | not captured | not captured | ['Scala_2018_table_p4_3:row2:col1', 'Scala_2018_table_p4_3:row2:col2', 'Scala_2018_table_p4_3:row2:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gadoteric_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Scala_2018` / `Scala_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:32 UTC</sub>
