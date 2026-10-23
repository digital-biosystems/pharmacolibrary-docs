<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;niflumic acid&quot;,&quot;href&quot;:&quot;drugs/drug_niflumic_acid/&quot;},{&quot;label&quot;:&quot;Jeong_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# niflumic acid — `NiflumicAcid_Jeong2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The niflumic acid metabolite is unlinked from morningumate, and the absorption rate constant has units of L/h instead of 1/h.

<div class="pk-model-meta" hidden drug="niflumic acid" model-id="NiflumicAcid_Jeong2024_reference" status="rejected" stale="false" population="healthy Korean men" measured-compound="morningumate" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Jeong SH, Jang JH, Lee YB. Modeling population pharmacokinetics of morniflumate in healthy Korean men: extending pharmacometrics analysis to niflumic acid, its major active metabolite. Naunyn-Schmiedeberg's archives of pharmacology 397(2):843–856 (2024).
  ·  DOI: [10.1007/s00210-023-02640-0](https://doi.org/10.1007/s00210-023-02640-0)

## Population and dosing

**Population:** healthy Korean men · condition healthy · age group adult · n = 36.

**Dosing:** 700 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| tvV c /F (L) | V1/F | 110.88 | L | 24.33 |
| tvCL c /F | CL/F | 10.38 | L/h | 60.37 |
| tvV p /F (L) | V2/F | 10033.78 | L | 9.06 |
| tvCL p /F | Css_ratio | 378.36 | mL/h | 10.47 |
| tvK a1 (1/h) | kabs | 9.89 | L/h | 31.10 |
| ε | equation variable | 0.30 | L/h | 0.02 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The niflumic acid metabolite is unlinked from morningumate, and the absorption rate constant has units of L/h instead of 1/h.**

The model structure lists a metabolism link from morningumate to niflumic acid, but the link parameter is marked as none, leaving the parent compound unreachable. The absorption rate constant is assigned a value of 9.89 with units of L/h, conflicting with its definition as a rate constant. Additionally, the steady-state concentration ratio parameter carries units of mL/h, which could not be converted to SI. Extracted — niflumic acid: V1/F 111 L, CL/F 10.4 L/h, V2/F 1e+04 L, Css_ratio 378 mL/h, kabs 9.89 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has morningumate, the second reading morni umate; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| tvV c /F (L) | `Q290` · V1/F | 110.88 | L | 0.1109 | m3 | l | 24.33 | llm (0.6) | tab_0:row2:col1, tab_0:row2:col2, tab_0:row2:col3 |
| tvCL c /F | `Q27` · CL/F | 10.38 | L/h | 2.883e-06 | m3/s | L/h | 60.37 | llm (0.6) | tab_0:row3:col1, tab_0:row3:col2, tab_0:row3:col3 |
| tvV p /F (L) | `Q82` · V2/F | 10033.78 | L | 10.03 | m3 | l | 9.06 | llm (0.6) | tab_0:row5:col1, tab_0:row5:col2, tab_0:row5:col3 |
| tvCL p /F | `Q35` · Css_ratio | 378.36 | mL/h |  |  | ml/h | 10.47 | llm (0.6) | tab_0:row6:col1, tab_0:row6:col2, tab_0:row6:col3 |
| tvK a1 (1/h) | `Q49` · kabs | 9.89 | L/h |  |  | l/h | 31.10 | exact (1) | tab_0:row8:col1, tab_0:row8:col2, tab_0:row8:col3 |
| ε | `Q900` · equation variable | 0.30 | L/h |  |  | l/h | 0.02 | llm (0.6) | tab_0:row14:col2, tab_0:row14:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2' routed out of structural estimates ('Interindividual')
- column 'standard' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'tvK a1 (1/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'tvK a2 (1/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('tvK a2 (1/h)', value '22.79') — already have one for this compound
- unit_dimension_mismatch: 'tvK a3 (1/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('tvK a3 (1/h)', value '23.71') — already have one for this compound
- unit_dimension_mismatch: 'tvK a4 (1/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('tvK a4 (1/h)', value '4.72') — already have one for this compound
- unit_dimension_mismatch: 'tvK a5 (1/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('tvK a5 (1/h)', value '0.68') — already have one for this compound
- unit_dimension_mismatch: 'dV p /FdBMI' → Q82 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q82 ('dV p /FdBMI', value '2.37') — already have one for this compound
- implicit units: 'tvCL c /F' → L/h (from the paper text: "The paper text states: 'whereas the large CL/F of 289.64 L/h suggested that the in vivo elimination of morni umate was q")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=morningumate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 27 linked by role
- molar mass: no plausible PubChem entry for 'morningumate' ('morningumate') — left in mass units
- molar mass: none found for 'morningumate' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'morningumate', not niflumic_acid — the review values are the parent's

**Extraction notes:**
- unparsed cell tab_0:row17:col1 = 'Ka1'
- unparsed cell tab_0:row18:col1 = 'Ka2'
- unparsed cell tab_0:row19:col1 = 'Ka3'
- unparsed cell tab_0:row20:col1 = 'Ka4'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.529 (9/17 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['morningumate', 'niflumic acid', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[dv p /fdbmi]` |  | 2.37 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl p /f]` | 378.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvk a3]` |  | 23.71 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvv c /f].parameter_id` | Q290 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[ε]` | 0.30 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | morningumate | morni umate | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | morningumate | morni umate | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_0:row2:col1', 'tab_0:row2:col2', 'tab_0:row2:col3'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['tab_0:row8:col1', 'tab_0:row8:col2', 'tab_0:row8:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.4 L/h | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 111 L | ['tab_0:row2:col1', 'tab_0:row2:col2', 'tab_0:row2:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1e+04 L | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bniflumic_acid%5D%20NiflumicAcid_Jeong2024_reference&body=Drug%3A%20niflumic_acid%0ARecord%3A%20NiflumicAcid_Jeong2024_reference%0APaper%3A%20Jeong_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_niflumic_acid/NiflumicAcid_Jeong2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 01:23 UTC</sub>
