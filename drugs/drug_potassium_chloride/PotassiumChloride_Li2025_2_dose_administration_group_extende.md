<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12B&quot;,&quot;href&quot;:&quot;atc/A12B.md&quot;},{&quot;label&quot;:&quot;potassium chloride&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_chloride/&quot;},{&quot;label&quot;:&quot;Li_2025 \u00b7 2_dose_administration_group_extended_release_tablets_1_049_g_and_granules_1_1178_g&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# potassium chloride — `PotassiumChloride_Li2025_2_dose_administration_group_extende`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:39 UTC) predates the latest extraction (2026-10-07 17:11 UTC); the status shown comes from the current checks. Rejected: the potassium chloride record reports only exposure metrics (Cmax 4.14 mmol/L, Tmax 6 h, AUC 106.89 mmol·h/L) with no distribution volume or clearance, so it is not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="potassium chloride" model-id="PotassiumChloride_Li2025_2_dose_administration_group_extende" status="rejected" stale="true" population="patients with cardiovascular emergencies" measured-compound="potassium" parameterization="mechanistic" topology="1C"></div>

## Citation
Li X, Qu M, Li H, Li T. Plasma pharmacokinetics of the combination of potassium chloride extended-release tablets and potassium citrate granules in patients with cardiovascular emergencies. Frontiers in cardiovascular medicine 12:1636090 (2025).
  ·  DOI: [10.3389/fcvm.2025.1636090](https://doi.org/10.3389/fcvm.2025.1636090)

## Population and dosing

**Population:** patients with cardiovascular emergencies · age group adult · n = &gt;=330.

**Dosing:** 500, 1000 mg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed potassium chloride, measured potassium.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C0(mmol/L) | C0 | 3.56 | mmol/L |
| Tmax(h) | tmax | 6.00 | h |
| Cmax(mmol/L) | Cmax | 4.14 | mmol/L |
| Ka(per hour) | kabs | 0.37 | per hour |
| t1/2(h) | t1/2z | 13.53 | h |
| AUClimit(mmol·h/L) | AUC∞ | 106.89 | mmol·h/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected: the potassium chloride record reports only exposure metrics (Cmax 4.14 mmol/L, Tmax 6 h, AUC 106.89 mmol·h/L) with no distribution volume or clearance, so it is not a compartmental population PK model.**

The paper (Li_2025, cardiovascular emergencies) provides no distribution volume and no clearance or elimination rate for potassium; it is an exposure/outcome study, not a compartmental population PK model. A dimension mismatch was also flagged on a structural parameter, and a reported unit could not be converted to SI, so one parameter reached model assembly without an SI value. A second reader disagreed on the dose compound, reading it as potassium chloride extended-release tablets and potassium citrate granules rather than potassium chloride, and on the identifier assigned to the AUC parameter. Extracted — potassium chloride: C0 3.56 mmol/L, tmax 6 h, Cmax 4.14 mmol/L, kabs 0.37 per hour, t1/2z 13.5 h, AUC∞ 107 mmol·h/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has potassium chloride, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C0(mmol/L) | `Q86` · C0 | 3.56 | mmol/L |  |  | mM/l | exact (1) | T2:row0:col3 |
| Tmax(h) | `Q56` · tmax | 6.00 | h | 2.16e+04 | s | h | exact (1) | T2:row1:col3 |
| Cmax(mmol/L) | `Q32` · Cmax | 4.14 | mmol/L |  |  | mM/l | exact (1) | T2:row2:col3 |
| Ka(per hour) | `Q49` · kabs | 0.37 | per hour | 0.0001028 | 1/s | 1/h | exact (1) | T2:row4:col3 |
| t1/2(h) | `Q57` · t1/2z | 13.53 | h | 4.871e+04 | s | h | exact (1) | T2:row5:col3 |
| AUClimit(mmol·h/L) | `Q17` · AUC∞ | 106.89 | mmol·h/L |  |  | (h·mM)/l | llm (0.6) | T2:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'C0(mmol/L)' → Q86 (unit '[substance] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Cmax(mmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'ΔC(mmol/L)' — extend the ontology if this is a real PK parameter (source ['T2:row3:col3'])
- unit_dimension_unknown: 'per hour' (kabs)
- unit_dimension_mismatch: 'AUClimit(mmol·h/L)' → Q17 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=potassium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: '2-dose administration group(extended-release tablets 1.049 g and granules 1.1178 g)' subgroup of Li_2025 (paper reports 5 populations: 1-dose administration group(extended-release tablets 0.5245 g and granules 0.5589 g), 2-dose administration group(extended-release tablets 1.049 g and granules 1.1178 g), 3-dose administration group(extended-release tablets 1.5735 g and granules 1.6767 g), literature 1(granules 64 meq), literature 2(granules 50 meq))
- unit re-normalised: kabs 'per hour' now converts (value unchanged)
- review gap-fill skipped: this record measures 'potassium', not potassium_chloride — the review values are the parent's

**Extraction notes:**
- transposed table T2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auclimit].parameter_id` | Q17 | Q19 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | potassium chloride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | potassium | unknown | mismatch |

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
| C5_dimension_Q17 | fail | [substance] * [time] / [length] ** 3 | mmol·h/L | ['T2:row6:col3'] |
| C5_dimension_Q32 | fail | [substance] / [length] ** 3 | mmol/L | ['T2:row2:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['T2:row1:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row5:col3'] |
| C5_dimension_Q86 | fail | [substance] / [length] ** 3 | mmol/L | ['T2:row0:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_chloride%5D%20PotassiumChloride_Li2025_2_dose_administration_group_extende&body=Drug%3A%20potassium_chloride%0ARecord%3A%20PotassiumChloride_Li2025_2_dose_administration_group_extende%0APaper%3A%20Li_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_potassium_chloride/PotassiumChloride_Li2025_2_dose_administration_group_extende%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:11 UTC</sub>
