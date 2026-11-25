<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;isatuximab&quot;,&quot;href&quot;:&quot;drugs/drug_isatuximab/&quot;},{&quot;label&quot;:&quot;Brillac_2025 \u00b7 model_1&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# isatuximab — `Isatuximab_Brillac2025_model_1`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="isatuximab" model-id="Isatuximab_Brillac2025_model_1" status="rejected" stale="false" population="pediatric and adult patients with acute lymphoblastic leukemia and acute myeloid leukemia" measured-compound="isatuximab" parameterization="mechanistic" topology="2C"></div>

## Citation
Brillac C, Sémiond D, Oprea C, Baruchel A, Zwaan CM, Nguyen L. Selection of isatuximab dosing regimen in pediatric patients with leukemia using population pharmacokinetics. Cancer chemotherapy and pharmacology 95(1):116 (2025).
  ·  DOI: [10.1007/s00280-025-04832-2](https://doi.org/10.1007/s00280-025-04832-2)

## Population and dosing

**Population:** pediatric and adult patients with acute lymphoblastic leukemia and acute myeloid leukemia · condition acute lymphoblastic leukemia and acute myeloid leukemia · age group mixed.

**Dosing:** 1400 mg, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V1 (L) | V1 | 2.92 | L |
| V2 (L) | V2 | 2.80 | L |
| CL | CL | 0.00775 | L/h |
| Q | Q | 0.0386 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), qwen3.8-27b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — isatuximab: V1 2.92 L, V2 2.8 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[β_cl_log].parameter_id`: this record has Q319, the second reading Q31; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1 (L) | `Q63` · V1 | 2.92 | L | 0.00292 | m3 | l | exact (1) | Tab1:row6:col1, Tab1:row6:col2 |
| V2 (L) | `Q64` · V2 | 2.80 | L | 0.0028 | m3 | l | exact (1) | Tab1:row10:col1, Tab1:row10:col2 |
| CL | `Q900` · CL | 0.00775 | L/h | 2.153e-09 | m3/s |  |  | Tab1:row4:col1, Tab1:row4:col2 |
| Q | `Q900` · Q | 0.0386 | L/h | 1.072e-08 | m3/s |  |  | Tab1:row8:col1, Tab1:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL (L/h) | Q22 | exact |
| Q (L/h) | Q30 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω(CL)' routed out of structural estimates ('Interindividual variability (%) Estimate RSE (%)')
- table section iiv: 'ω(V1)' routed out of structural estimates ('Interindividual variability (%) Estimate RSE (%)')
- table section iiv: 'ω(Q)' routed out of structural estimates ('Interindividual variability (%) Estimate RSE (%)')
- table section iiv: 'ω(V2)' routed out of structural estimates ('Interindividual variability (%) Estimate RSE (%)')
- table section iiv: 'Residual error proportional (%)' routed out of structural estimates ('Interindividual variability (%) Estimate RSE (%)')
- table representations disagree for '−2LL'; source reconciliation required
- table representations disagree for 'CL (L/h)'; source reconciliation required
- table representations disagree for 'β_CL_log(WT/MedWT)'; source reconciliation required
- table representations disagree for 'V1 (L)'; source reconciliation required
- table representations disagree for 'β_V1_log(WT/MedWT)'; source reconciliation required
- table representations disagree for 'Q (L/h)'; source reconciliation required
- table representations disagree for 'β_Q_log(WT/MedWT)'; source reconciliation required
- table representations disagree for 'V2 (L)'; source reconciliation required
- table representations disagree for 'Β_V2_log(WT/MedWT)'; source reconciliation required
- dropped unlinked row (NIL): '−2LL' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col1', 'Tab1:row1:col2'])
- 'β_CL_log(WT/MedWT)' is a β covariate effect on _CL_, not Q22 (llm link set aside)
- dropped unlinked row (NIL): 'β_CL_log(WT/MedWT)' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col1'])
- 'β_V1_log(WT/MedWT)' is a β covariate effect on _V1_, not Q1 (llm link set aside)
- dropped unlinked row (NIL): 'β_V1_log(WT/MedWT)' — extend the ontology if this is a real PK parameter (source ['Tab1:row7:col1'])
- 'β_Q_log(WT/MedWT)' is a β covariate effect on _Q_, not Q30 (llm link set aside)
- dropped unlinked row (NIL): 'β_Q_log(WT/MedWT)' — extend the ontology if this is a real PK parameter (source ['Tab1:row9:col1'])
- unit_dimension_unknown: 'WT/MedWT' (V2)
- dropped duplicate Q64 ('Β_V2_log(WT/MedWT)', value '1') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=isatuximab
- bound model equation to Q22 (CL): CL = 0.00775 * (WT/54)^0.85(fixed)
- bound model equation to Q30 (Q): Q = 0.0386 * (WT/54)^0.85(fixed)
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL (L/h)'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q (L/h)'; equation kept verbatim
- status held at "Needs review" — not promoted
- population split: 'model 1 (n = 32)' subgroup of Brillac_2025 (paper reports 2 populations: final model with β coefficient on q fixed (n = 79), model 1 (n = 32))
- molar mass: none found for 'isatuximab' — its concentrations stay mass-only

**Extraction notes:**
- table Tab1: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1
- captured model equation CL = 0.00775 * (WT/54)^0.85(fixed)
- captured model equation Q = 0.0386 * (WT/54)^0.85(fixed)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |
| `qwen3.8-27b` | not confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[β_cl_log].parameter_id` | Q319 | Q31 | mismatch |
| `qwen3.8-27b` | `parameters[β_v2_log].parameter_id` | Q900 | Q319 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab1:row4:col1', 'Tab1:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab1:row8:col1', 'Tab1:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab1:row6:col1', 'Tab1:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab1:row10:col1', 'Tab1:row10:col2'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.92 L | ['Tab1:row6:col1', 'Tab1:row6:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.8 L | ['Tab1:row10:col1', 'Tab1:row10:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisatuximab%5D%20Isatuximab_Brillac2025_model_1&body=Drug%3A%20isatuximab%0ARecord%3A%20Isatuximab_Brillac2025_model_1%0APaper%3A%20Brillac_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_isatuximab/Isatuximab_Brillac2025_model_1%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:21 UTC</sub>
