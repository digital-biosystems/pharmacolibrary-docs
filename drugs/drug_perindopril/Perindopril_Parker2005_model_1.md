<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;perindopril&quot;,&quot;href&quot;:&quot;drugs/drug_perindopril/&quot;},{&quot;label&quot;:&quot;Parker_2005 \u00b7 model_1&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# perindopril — `Perindopril_Parker2005_model_1`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-05 09:30 UTC) predates the latest extraction (2026-10-07 06:55 UTC); the status shown comes from the current checks. The perindoprilat record was rejected because the metabolite perindoprilat is unlinked from the perindopril dose, and its parameters carry wrong units (V1 in hours, CLu in years).

<div class="pk-model-meta" hidden drug="perindopril" model-id="Perindopril_Parker2005_model_1" status="rejected" stale="true" population="normal volunteers and patients" measured-compound="perindoprilat" parameterization="apparent" topology="1C"></div>

## Citation
Parker E, Aarons L, Rowland M, Resplandy G. The pharmacokinetics of perindoprilat in normal volunteers and patients: influence of age and disease state. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 26(1):104–113 (2005).
  ·  DOI: [10.1016/j.ejps.2005.05.006](https://doi.org/10.1016/j.ejps.2005.05.006)

## Population and dosing

**Population:** normal volunteers and patients · condition healthy, hypertension, renal failure, heart failure · age group mixed.

**Dosing:** 4, 8, 16 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed perindopril, measured perindoprilat.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| B max (g L -1 ) | Bmax | 1.5 | g L -1 |
| V 1 (L) | V | 6.4 | L |
| CL u (L h -1 ) | CLm/F | 7.0 | L h -1 |
| k 12 (h -1 ) | Q | 1.3 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The perindoprilat record was rejected because the metabolite perindoprilat is unlinked from the perindopril dose, and its parameters carry wrong units (V1 in hours, CLu in years).**

The model lists perindoprilat as a metabolite formed from perindopril at the central compartment with 2 compartments, but the check found no path from the dose, so the metabolite is unlinked. The central volume V1 is reported as 45 h and the unbound clearance CLu as 380 years, units incompatible with a volume and a clearance; a reported unit also could not be converted to SI. The two readers disagreed on the apparent unbound clearance (59 versus none) and apparent volume of distribution (920 versus none), and the second reader additionally read a dose of 3.1 where this record has none. Extracted — perindoprilat: Bmax 1.5 g L -1, V 26 L, V1 45 h, V2 22 L, CLu 380 years.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has perindopril, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| B max (g L -1 ) | `Q332` · Bmax | 1.5 | g L -1 |  |  | g/l | space_fold (0.95) | tab_0:row0:col2, Parker_2005_table_2:row4:col2 |
| V 1 (L) | `Q61` · V | 6.4 | L | 0.0064 | m3 | l | exact (1) | Parker_2005_table_2:row1:col2 |
| CL u (L h -1 ) | `Q351` · CLm/F | 7.0 | L h -1 | 1.944e-06 | m3/s | l/h | exact (1) | Parker_2005_table_2:row2:col2 |
| k 12 (h -1 ) | `Q30` · Q | 1.3 | h -1 |  |  | 1/h | exact (1) | Parker_2005_table_2:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'C u50 (g L -1 )' — extend the ontology if this is a real PK parameter (source ['tab_0:row1:col2', 'Parker_2005_table_2:row3:col2'])
- dropped unlinked row (NIL): 'SS' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col2'])
- dropped unlinked row (NIL): 'd.f.' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col2'])
- unit_dimension_mismatch: 'k 12 (h -1 )' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k 21 (h -1 )' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k 21 (h -1 )', value '1.9') — already have one for this compound
- dropped unlinked row (NIL): 'CV ε' — extend the ontology if this is a real PK parameter (source ['Parker_2005_table_2:row7:col2', 'Parker_2005_table_2:row7:col4'])
- routed 'CV η' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- metabolite perindoprilat: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V 1 (L)' Q63→Q61 for perindoprilat — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=perindoprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'model 1' subgroup of Parker_2005 (paper reports 4 populations: model 1, model 2, multiple dose, single dose)
- row roles: 2 per-group rows of perindoprilat central_volume but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of perindoprilat clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 23 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table tab_0: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_0:row0:col1 = 'B max (g L -1 )'
- unparsed cell tab_0:row1:col1 = 'C u50 (g L -1 )'
- unparsed cell Parker_2005_table_2:row2:col1 = '5 .9 (0.46)'
- unparsed cell Parker_2005_table_2:row5:col1 = '1 .3 (0.24)'
- unparsed cell Parker_2005_table_2:row6:col1 = '1 .6 (0.24)'
- companion parameter table 2 transcribed (21 record(s))
- companion parameter table 3 transcribed (24 record(s))
- companion parameter table 4 transcribed (12 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.214 (3/14 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl u /f (3.1 mg) (l h -1 ) single dose]` |  | 80 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl u]` | 7.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 12]` | 1.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1]` | 6.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f (3.1 mg) (l) single dose]` |  | 920 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ clu b]` |  | 10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v1 a]` |  | 54 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v2]` |  | 87 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | perindopril | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | perindoprilat | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | fail | 1 / [time] | h -1 | ['Parker_2005_table_2:row5:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Parker_2005_table_2:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Parker_2005_table_2:row1:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.4 L | ['Parker_2005_table_2:row1:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperindopril%5D%20Perindopril_Parker2005_model_1&body=Drug%3A%20perindopril%0ARecord%3A%20Perindopril_Parker2005_model_1%0APaper%3A%20Parker_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_perindopril/Perindopril_Parker2005_model_1%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:55 UTC</sub>
