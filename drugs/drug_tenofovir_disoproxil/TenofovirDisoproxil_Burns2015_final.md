<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir disoproxil&quot;,&quot;href&quot;:&quot;drugs/drug_tenofovir_disoproxil/&quot;},{&quot;label&quot;:&quot;Burns_2015 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tenofovir disoproxil — `TenofovirDisoproxil_Burns2015_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q30 unit h−1 (1 / [time]) vs [length] ** 3 / [time]; Q99 unit h−1 (1 / [time]) vs [length] ** 3 / [time]; c8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="tenofovir disoproxil" model-id="TenofovirDisoproxil_Burns2015_final" status="rejected" stale="false" population="healthy women" measured-compound="tenofovir" parameterization="apparent" topology="general_linear"></div>

## Citation
Burns RN, Hendrix CW, Chaturvedula A. Population pharmacokinetics of tenofovir and tenofovir-diphosphate in healthy women. Journal of clinical pharmacology 55(6):629–638 (2015).
  ·  DOI: [10.1002/jcph.461](https://doi.org/10.1002/jcph.461)

## Population and dosing

**Population:** healthy women · condition healthy · age group adult.

**Dosing:** 300 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed tenofovir_disoproxil_fumarate, measured tenofovir.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KA (h−1) | kabs | 9.79 | h−1 |
| Vc/F (L) | V1/F | 385.71 | L |
| K23 (h−1) | Q | 0.631 | h−1 |
| K32 (h−1) | Q2 | 0.396 | h−1 |
| K20 (h−1) | kel | 0.13 | h−1 |
| K24 (h−1) | kfm | 0.017 | h−1 |
| K40 (h−1) | kel | 0.013 | h−1 |
| Absorption lag (h) | tlag | 0.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.412). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q30 unit h−1 (1 / [time]) vs [length] ** 3 / [time]; Q99 unit h−1 (1 / [time]) vs [length] ** 3 / [time]; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (Q and Q2), so that value has no SI equivalent. Extracted — tenofovir disoproxil: kabs 9.79 h−1, V1/F 386 L, Q 0.631 h−1, Q2 0.396 h−1, kel 0.13 h−1, tlag 0.5 h; tenofovir_diphosphate: kfm 0.017 h−1, kel 0.013 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tenofovir_disoproxil_fumarate, the second reading tenofovir_disoproxil; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KA (h−1) | `Q49` · kabs | 9.79 | h−1 | 0.002719 | 1/s | 1/h | exact (1) | jcph461-tbl-0001:row5:col3, jcph461-tbl-0001:row5:col4 |
| Vc/F (L) | `Q290` · V1/F | 385.71 | L | 0.3857 | m3 | l | exact (1) | jcph461-tbl-0001:row6:col3, jcph461-tbl-0001:row6:col4 |
| K23 (h−1) | `Q30` · Q | 0.631 | h−1 |  |  | 1/h | exact (1) | jcph461-tbl-0001:row8:col3, jcph461-tbl-0001:row8:col4 |
| K32 (h−1) | `Q99` · Q2 | 0.396 | h−1 |  |  | 1/h | exact (1) | jcph461-tbl-0001:row9:col3, jcph461-tbl-0001:row9:col4 |
| K20 (h−1) | `Q47` · kel | 0.13 | h−1 | 3.611e-05 | 1/s | 1/h | exact (1) | jcph461-tbl-0001:row10:col3, jcph461-tbl-0001:row10:col4 |
| K24 (h−1) | `Q305` · kfm | 0.017 | h−1 | 4.722e-06 | 1/s | 1/h | exact (1) | jcph461-tbl-0001:row11:col3, jcph461-tbl-0001:row11:col4 |
| K40 (h−1) | `Q47` · kel | 0.013 | h−1 | 3.611e-06 | 1/s | 1/h | exact (1) | jcph461-tbl-0001:row12:col3, jcph461-tbl-0001:row12:col4 |
| Absorption lag (h) | `Q83` · tlag | 0.5 | h | 1800 | s | h | exact (1) | jcph461-tbl-0001:row13:col3, jcph461-tbl-0001:row13:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Condition #'; source reconciliation required
- table representations disagree for 'F1 *'; source reconciliation required
- table representations disagree for 'KA (h−1)'; source reconciliation required
- table representations disagree for 'Vc/F (L)'; source reconciliation required
- table representations disagree for 'cov WT (kg) on Vc'; source reconciliation required
- table representations disagree for 'K23 (h−1)'; source reconciliation required
- table representations disagree for 'K32 (h−1)'; source reconciliation required
- table representations disagree for 'K20 (h−1)'; source reconciliation required
- table representations disagree for 'K24 (h−1)'; source reconciliation required
- table representations disagree for 'K40 (h−1)'; source reconciliation required
- table representations disagree for 'Absorption lag (h)'; source reconciliation required
- table representations disagree for 'BSV KA (%CV)'; source reconciliation required
- table representations disagree for 'BSV Vc (%CV)'; source reconciliation required
- table representations disagree for 'BSV K20 (%CV)'; source reconciliation required
- table representations disagree for 'BSV K24 (%CV)'; source reconciliation required
- table representations disagree for 'Proportional, TFV (%CV)'; source reconciliation required
- table representations disagree for 'Proportional, TFV‐DP (PBMC) (%CV)'; source reconciliation required
- dropped unlinked row (NIL): 'Condition #' — extend the ontology if this is a real PK parameter (source ['jcph461-tbl-0001:row3:col3'])
- dropped unlinked row (NIL): 'F1 *' — extend the ontology if this is a real PK parameter (source ['jcph461-tbl-0001:row4:col3'])
- dropped unlinked row (NIL): 'cov WT (kg) on Vc' — extend the ontology if this is a real PK parameter (source ['jcph461-tbl-0001:row7:col3', 'jcph461-tbl-0001:row7:col4'])
- unit_dimension_mismatch: 'K23 (h−1)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'K32 (h−1)' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Proportional, TFV (%CV)' — extend the ontology if this is a real PK parameter (source ['jcph461-tbl-0001:row18:col3', 'jcph461-tbl-0001:row18:col4'])
- dropped unlinked row (NIL): 'Proportional, TFV‐DP (PBMC) (%CV)' — extend the ontology if this is a real PK parameter (source ['jcph461-tbl-0001:row19:col3', 'jcph461-tbl-0001:row19:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tenofovir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- model-stage split: 'final model' is the final model of Burns_2015 (paper reports 2 stages: base model, final model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 32 linked by role; re-tagged parent→tenofovir ×46, parent→tenofovir_diphosphate ×12

**Extraction notes:**
- table jcph461-tbl-0001: ambiguous_numeric_format
- table jcph461-tbl-0001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.412 (7/17 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tenofovir_disoproxil_fumarate', 'tenofovir', 'metabolism'], ['tenofovir', 'tenofovir_diphosphate', 'metabolism']] | [['tenofovir', 'tenofovir_diphosphate', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[absorption lag]` |  | 0.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag]` | 0.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1 *]` |  | 0.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k24]` | 0.017 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k40].parameter_id` | Q47 | Q305 | mismatch |
| `gpt-oss-120b` | `parameters[ka]` |  | 9.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 9.79 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q63_wt]` |  | -2.16 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tenofovir_disoproxil_fumarate | tenofovir_disoproxil | mismatch |

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
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['jcph461-tbl-0001:row6:col3', 'jcph461-tbl-0001:row6:col4'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | h−1 (1 / [time]) | ['jcph461-tbl-0001:row8:col3', 'jcph461-tbl-0001:row8:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['jcph461-tbl-0001:row11:col3', 'jcph461-tbl-0001:row11:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['jcph461-tbl-0001:row10:col3', 'jcph461-tbl-0001:row10:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['jcph461-tbl-0001:row12:col3', 'jcph461-tbl-0001:row12:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph461-tbl-0001:row5:col3', 'jcph461-tbl-0001:row5:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph461-tbl-0001:row13:col3', 'jcph461-tbl-0001:row13:col4'] |
| C5_dimension_Q99 | fail | [length] ** 3 / [time] | h−1 (1 / [time]) | ['jcph461-tbl-0001:row9:col3', 'jcph461-tbl-0001:row9:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 386 L | ['jcph461-tbl-0001:row6:col3', 'jcph461-tbl-0001:row6:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btenofovir_disoproxil%5D%20TenofovirDisoproxil_Burns2015_final&body=Drug%3A%20tenofovir_disoproxil%0ARecord%3A%20TenofovirDisoproxil_Burns2015_final%0APaper%3A%20Burns_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tenofovir_disoproxil/TenofovirDisoproxil_Burns2015_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:16 UTC</sub>
