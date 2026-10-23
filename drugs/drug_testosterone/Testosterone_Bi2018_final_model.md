<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03B&quot;,&quot;href&quot;:&quot;atc/G03B.md&quot;},{&quot;label&quot;:&quot;testosterone&quot;,&quot;href&quot;:&quot;drugs/drug_testosterone/&quot;},{&quot;label&quot;:&quot;Bi_2018 \u00b7 final_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# testosterone — `Testosterone_Bi2018_final_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Testosterone albumin covariate parameter was -0.27 with units that could not be converted to SI.

<div class="pk-model-meta" hidden drug="testosterone" model-id="Testosterone_Bi2018_final_model" status="rejected" stale="false" population="healthy male subjects" measured-compound="testosterone" parameterization="apparent" topology="2C"></div>

## Citation
Bi Y, Perry PJ, Ellerby M, Murry DJ. Population Pharmacokinetic/Pharmacodynamic Modeling of Depot Testosterone Cypionate in Healthy Male Subjects. CPT: pharmacometrics & systems pharmacology 7(4):259–268 (2018).
  ·  DOI: [10.1002/psp4.12287](https://doi.org/10.1002/psp4.12287)

## Population and dosing

**Population:** healthy male subjects · age group adult · n = n_subjects.

**Dosing:** 100, 250, 500 mg, sc, multiple, every 168 h.

**Dosed compound ≠ measured compound:** dosed testosterone cypionate, measured testosterone.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F, kL/day | CL/F | 2.6 | kL/day |
| V/F, kL | V/F | 14.4 | kL |
| Ka, day−1 | kabs | 1.22 | day−1 |
| A_0, TC | equation variable | 6.24 |  |
| θCalbumin−V | V | -0.27 |  |
| θBWT−CL | CL | 0.785 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Testosterone albumin covariate parameter was -0.27 with units that could not be converted to SI.**

The record lists a parameter labeled as an albumin covariate with a value of -0.27. The unit day−1 associated with this parameter could not be converted to SI units. This combination of a negative value and an unconvertible unit triggered the rejection for implausible clearance. Extracted — testosterone: CL/F 2.6 kL/day, V/F 14.4 kL, kabs 1.22 day−1, V -0.27, CL 0.785.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has testosterone, the second reading total testosterone; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F, kL/day | `Q27` · CL/F | 2.6 | kL/day |  |  | kL/day | llm_confirmed (0.6) | psp412287-tbl-0002:row2:col1 |
| V/F, kL | `Q76` · V/F | 14.4 | kL |  |  | kL | llm_confirmed (0.6) | psp412287-tbl-0002:row3:col1 |
| Ka, day−1 | `Q49` · kabs | 1.22 | day−1 | 1.412e-05 | 1/s | 1/d | exact (1) | psp412287-tbl-0002:row4:col1 |
| A_0, TC | `Q900` · equation variable | 6.24 |  |  |  |  | llm (0.6) | psp412287-tbl-0002:row9:col1 |
| θCalbumin−V | `Q61` · V | -0.27 |  |  |  |  | llm (0.6) | psp412287-tbl-0002:row11:col1 |
| θBWT−CL | `Q22` · CL | 0.785 |  |  |  |  | llm_confirmed (0.6) | psp412287-tbl-0002:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'βbase, mg/day' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row5:col1'])
- dropped PD-category row 'Lambda(λ)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412287-tbl-0002:row6:col1'])
- dropped PD-category row 'Emax, mg/day' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412287-tbl-0002:row7:col1'])
- dropped unlinked row (NIL): 'LH50, IU/L' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'θBalbumin−V' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row10:col1'])
- dropped unlinked row (NIL): 'θBWT−V' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row12:col1'])
- dropped unlinked row (NIL): 'θCWT−CL' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row14:col1'])
- implicit units: 'CL/F, kL/day' → kL/day (from the paper text: "The paper states in the Results section: 'The CL/F and V/F for tT were estimated to be 2.6 (kL/day) and 14.4 kL in healt")
- implicit units: 'V/F, kL' → kL (from the paper text: "The paper states in the Results section: 'The CL/F and V/F for tT were estimated to be 2.6 (kL/day) and 14.4 kL in healt")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=testosterone
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- population split: 'final model' subgroup of Bi_2018 (paper reports 2 populations: bootstrapa, final model)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412287-tbl-0002:row10:col4 = '(−3.56 to −0.842)'
- unparsed cell psp412287-tbl-0002:row11:col4 = '(−0.369 to −0.108)'
- unparsed cell psp412287-tbl-0002:row17:col1 = '9.66% (25.2)'
- unparsed cell psp412287-tbl-0002:row17:col2 = '8.60%'
- unparsed cell psp412287-tbl-0002:row17:col4 = '(2.98%–12.29%)'
- unparsed cell psp412287-tbl-0002:row18:col1 = '37% (14.6)'
- unparsed cell psp412287-tbl-0002:row18:col2 = '35.9%'
- unparsed cell psp412287-tbl-0002:row18:col4 = '(18.3%–51.7%)'
- unparsed cell psp412287-tbl-0002:row19:col1 = '53.9% (42.5)'
- unparsed cell psp412287-tbl-0002:row19:col2 = '52.4%'
- unparsed cell psp412287-tbl-0002:row19:col4 = '(0.54%–87.5%)'
- unparsed cell psp412287-tbl-0002:row20:col1 = '45.3% (16.3)'
- unparsed cell psp412287-tbl-0002:row20:col2 = '43.1%'
- unparsed cell psp412287-tbl-0002:row20:col4 = '(14.5%–66.3%)'
- unparsed cell psp412287-tbl-0002:row21:col1 = '75.9% (25.3)'
- unparsed cell psp412287-tbl-0002:row21:col2 = '72.9%'
- unparsed cell psp412287-tbl-0002:row21:col4 = '(40.0%–99.6%)'
- unparsed cell psp412287-tbl-0002:row22:col1 = '13.6% (49.6)'
- unparsed cell psp412287-tbl-0002:row22:col2 = '13.3%'
- unparsed cell psp412287-tbl-0002:row22:col4 = '(0.14%–21.3%)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (3/15 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a_0, tc]` | 6.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[a_0, tc]` |  | 6.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f, kl/day]` | 2.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f, kl/day]` |  | 2.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 1.22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f, kl]` | 14.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f, kl]` |  | 14.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θbalbumin-v]` |  | -1.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θbwt-cl]` | 0.785 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcalbumin-v]` | -0.27 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | testosterone | total testosterone | mismatch |

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
| C2_base_sign_Q61 | fail |  | -0.27 |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412287-tbl-0002:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412287-tbl-0002:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['psp412287-tbl-0002:row3:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['psp412287-tbl-0002:row13:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['psp412287-tbl-0002:row11:col1'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btestosterone%5D%20Testosterone_Bi2018_final_model&body=Drug%3A%20testosterone%0ARecord%3A%20Testosterone_Bi2018_final_model%0APaper%3A%20Bi_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_testosterone/Testosterone_Bi2018_final_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:29 UTC</sub>
