<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;nelfinavir&quot;,&quot;href&quot;:&quot;drugs/drug_nelfinavir/&quot;},{&quot;label&quot;:&quot;Hirt_2006 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nelfinavir — `Nelfinavir_Hirt2006_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q83 unit h⁻¹ (1 / [time]) vs [time].

<div class="pk-model-meta" hidden drug="nelfinavir" model-id="Nelfinavir_Hirt2006_reference" status="rejected" stale="false" population="women with HIV infection (pregnant and nonpregnant)" measured-compound="nelfinavir" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Hirt D, Treluyer JM, Jullien V, Firtion G, Chappuy H, Rey E et al. Pregnancy-related effects on nelfinavir-M8 pharmacokinetics: a population study with 133 women. Antimicrobial agents and chemotherapy 50(6):2079–2086 (2006).
  ·  DOI: [10.1128/AAC.01596-05](https://doi.org/10.1128/AAC.01596-05)

## Population and dosing

**Population:** women with HIV infection (pregnant and nonpregnant) · condition HIV infection · age group adult.

**Dosing:** 750, 1250 mg, oral, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka (h⁻¹) | kabs | 0.83 | h⁻¹ |
| Tlag (h⁻¹) | tlag | 0.85 | h⁻¹ |
| V (liters) | V | 596 | liters |
| CL10 (liters/h) | CL | 35.5 | liters/h |
| CL1M, θPREG | CL/F | 0.25 |  |
| CL1M (liters/h) | CLfm | 0.65 | liters/h |
| kM0 (h⁻¹) | kel | 3.3 | h⁻¹ |
| kM00,0PREG | equation variable | 0.51 |  |
| kM00,0BW | Km | 1.18 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q83 unit h⁻¹ (1 / [time]) vs [time].**

A reported unit could not be converted (tlag), so that value has no SI equivalent. Extracted — nelfinavir: kabs 0.83 h⁻¹, tlag 0.85 h⁻¹, V 596 liters, CL 35.5 liters/h; M8: CL/F 0.25, CLfm 0.65 liters/h, kel 3.3 h⁻¹, Km 1.18.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka (h⁻¹) | `Q49` · kabs | 0.83 | h⁻¹ | 0.0002306 | 1/s | 1/h | exact (1) | Hirt_2006_table_3:row1:col1 |
| Tlag (h⁻¹) | `Q83` · tlag | 0.85 | h⁻¹ |  |  | 1/h | exact (1) | Hirt_2006_table_3:row2:col1 |
| V (liters) | `Q61` · V | 596 | liters | 0.596 | m3 | l | exact (1) | Hirt_2006_table_3:row3:col1 |
| CL10 (liters/h) | `Q22` · CL | 35.5 | liters/h | 9.861e-06 | m3/s | l/h | exact (1) | Hirt_2006_table_3:row4:col1 |
| CL1M, θPREG | `Q27` · CL/F | 0.25 |  |  |  |  | llm (0.6) | Hirt_2006_table_3:row5:col1 |
| CL1M (liters/h) | `Q370` · CLfm | 0.65 | liters/h | 1.806e-07 | m3/s | l/h | exact (1) | Hirt_2006_table_3:row7:col1 |
| kM0 (h⁻¹) | `Q47` · kel | 3.3 | h⁻¹ | 0.0009167 | 1/s | 1/h | exact (1) | Hirt_2006_table_3:row8:col1 |
| kM00,0PREG | `Q900` · equation variable | 0.51 |  | 0.51 |  |  | llm (0.6) | Hirt_2006_table_3:row9:col1 |
| kM00,0BW | `Q1` · Km | 1.18 |  |  |  |  | llm (0.6) | Hirt_2006_table_3:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 2 row(s) → M8 (name 2)
- column 'final model with original dataset mean (cv%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Tlag (h⁻¹)' → Q83 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'CL10 and V, θDEL' — extend the ontology if this is a real PK parameter (source ['Hirt_2006_table_3:row6:col1'])
- dropped duplicate Q1 ('kM00,0INN', value '1.03') — already have one for this compound
- implicit units: 'kM00,0BW' — the LLM proposed 'kg', whose dimension does not fit Q1; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nelfinavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 6 linked by role; re-tagged parent→M8 ×8
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl1m, θpreg].parameter_id` | Q27 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[km00,0bw]` | 1.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[km00,0inn]` |  | 1.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[km00,0preg]` | 0.51 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hirt_2006_table_3:row4:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Hirt_2006_table_3:row7:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Hirt_2006_table_3:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hirt_2006_table_3:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hirt_2006_table_3:row3:col1'] |
| C5_dimension_Q83 | fail | [time] | h⁻¹ (1 / [time]) | ['Hirt_2006_table_3:row2:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['Hirt_2006_table_3:row10:col1'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] |  | ['Hirt_2006_table_3:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35.5 L/h | ['Hirt_2006_table_3:row4:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 596 L | ['Hirt_2006_table_3:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnelfinavir%5D%20Nelfinavir_Hirt2006_reference&body=Drug%3A%20nelfinavir%0ARecord%3A%20Nelfinavir_Hirt2006_reference%0APaper%3A%20Hirt_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nelfinavir/Nelfinavir_Hirt2006_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:47 UTC</sub>
