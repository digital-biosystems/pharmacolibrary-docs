<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;perindopril&quot;,&quot;href&quot;:&quot;drugs/drug_perindopril/&quot;},{&quot;label&quot;:&quot;Parker_2005 \u00b7 single_dose&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# perindopril — `Perindopril_Parker2005_single_dose`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:30 UTC (Rejected), but the paper was screened again on 2026-10-07 06:55 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The perindoprilat volume of distribution is recorded as 94 with the unit hours, a dimension mismatch for a volume parameter, so the record was rejected.

<div class="pk-model-meta" hidden drug="perindopril" model-id="Perindopril_Parker2005_single_dose" status="rejected" stale="true" population="normal volunteers and patients" measured-compound="perindoprilat" parameterization="apparent" topology="1C"></div>

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
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V 1 (L) | V | 6.4 | L |
| CL u (L h -1 ) | CLm/F | 7.0 | L h -1 |
| B max (g L -1 ) | Bmax | 2.5 | g L -1 |
| k 12 (h -1 ) | Q | 1.3 | h -1 |
| T inp (h) | kabs | 6.6 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The perindoprilat volume of distribution is recorded as 94 with the unit hours, a dimension mismatch for a volume parameter, so the record was rejected.**

The structural parameter V of perindoprilat carries the verbatim unit 'h' (label 'θ V1 (h)'), which cannot describe a volume of distribution; because this unit could not be converted to SI units, the parameter reached the record without an SI value. The other perindoprilat parameters are CL of 59 L/h (label 'θ CLu (1.5 mg)'), Bmax of 1.3 g/L and a tlag of 6.6 h. A second reader assigned the same clearance value 59 to apparent unbound clearance and a volume of 920 to apparent volume of distribution, whereas this record filed 59 under clu/f and 920 under v/f, and left the dose unextracted where the second reader read 3.1. Extracted — perindoprilat: V 94 h, CL 59 L/h, Bmax 1.3 g L -1, tlag 6.6 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has perindopril, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V 1 (L) | `Q61` · V | 6.4 | L | 0.0064 | m3 | l | exact (1) | Parker_2005_table_2:row1:col2 |
| CL u (L h -1 ) | `Q351` · CLm/F | 7.0 | L h -1 | 1.944e-06 | m3/s | l/h | exact (1) | Parker_2005_table_2:row2:col2 |
| B max (g L -1 ) | `Q332` · Bmax | 2.5 | g L -1 |  |  | g/l | space_fold (0.95) | Parker_2005_table_2:row4:col2, Parker_2005_table_3:row6:col1, Parker_2005_table_4:row4:col1 |
| k 12 (h -1 ) | `Q30` · Q | 1.3 | h -1 |  |  | 1/h | exact (1) | Parker_2005_table_2:row5:col2 |
| T inp (h) | `Q49` · kabs | 6.6 | h |  |  | h | exact (1) | Parker_2005_table_3:row7:col1, Parker_2005_table_4:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'C u50 (g L -1 )' — extend the ontology if this is a real PK parameter (source ['Parker_2005_table_2:row3:col2', 'Parker_2005_table_3:row5:col1', 'Parker_2005_table_4:row3:col1'])
- unit_dimension_mismatch: 'k 12 (h -1 )' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k 21 (h -1 )' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k 21 (h -1 )', value '1.9') — already have one for this compound
- dropped unlinked row (NIL): 'CV ε' — extend the ontology if this is a real PK parameter (source ['Parker_2005_table_2:row7:col2', 'Parker_2005_table_2:row7:col4'])
- routed 'CV η' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'θ V1 (h)' → Q63 (unit '[time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('θ V1 (h)', value '94') — already have one for this compound
- dropped duplicate Q63 ('θ V2 (1.5 mg) (L)', value '320') — already have one for this compound
- dropped duplicate Q63 ('θ V2 (3.1 mg) (L)', value '16') — already have one for this compound
- dropped duplicate Q22 ('θ CLu (1.5 mg)', value '59') — already have one for this compound
- dropped duplicate Q22 ('θ CLu (3.1 mg)', value '12') — already have one for this compound
- unit_dimension_mismatch: 'T inp (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'CV ε (%)' — extend the ontology if this is a real PK parameter (source ['Parker_2005_table_3:row8:col1', 'Parker_2005_table_4:row7:col1'])
- routed 'CV η(V/F) (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'CV η(CLu/F ) (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'CV η(C u50 ) (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q63 ('θ V2 (L)', value '74') — already have one for this compound
- dropped duplicate Q22 ('θ CLu', value '8.6') — already have one for this compound
- unit_dimension_mismatch: 'T inp (heart failure) (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('T inp (heart failure) (h)', value '6.9') — already have one for this compound
- dropped duplicate Q22 ('CV η(θCL u,1 ) (%)', value '52') — already have one for this compound
- routed 'CV η(Bmax) (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- metabolite perindoprilat: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V 1 (L)' Q63→Q61 for perindoprilat — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=perindoprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'single dose' subgroup of Parker_2005 (paper reports 4 populations: model 1, model 2, multiple dose, single dose)
- row roles: 2 per-group rows of perindoprilat central_volume but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of perindoprilat clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 23 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

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
| `gpt-oss-120b` | not confirmed | 0.2 (3/15 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b max].value` | 2.5 | 1.3 | mismatch |
| `gpt-oss-120b` | `parameters[cl u]` | 7.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cv η(clu/f )]` |  | 77 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cv η(v/f)]` |  | 70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 12]` | 1.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t inp].parameter_id` | Q49 | Q83 | mismatch |
| `gpt-oss-120b` | `parameters[v 1]` | 6.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ clu]` |  | 59 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v1]` |  | 94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v2 (1.5 mg)]` |  | 320 | only_one_extracted |
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
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | fail | 1 / [time] | h -1 | ['Parker_2005_table_2:row5:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Parker_2005_table_2:row2:col2'] |
| C5_dimension_Q49 | fail | [time] | h | ['Parker_2005_table_3:row7:col1', 'Parker_2005_table_4:row5:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperindopril%5D%20Perindopril_Parker2005_single_dose&body=Drug%3A%20perindopril%0ARecord%3A%20Perindopril_Parker2005_single_dose%0APaper%3A%20Parker_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_perindopril/Perindopril_Parker2005_single_dose%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:55 UTC</sub>
