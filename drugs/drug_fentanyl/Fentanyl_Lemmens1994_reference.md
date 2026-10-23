<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Lemmens_1994 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Lemmens1994_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Fentanyl record rejected because the volume of distribution parameter's unit, liters, could not be converted to SI.

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Lemmens1994_reference" status="rejected" stale="false" population="unknown" measured-compound="fentanyl" parameterization="mechanistic" topology="1C"></div>

## Citation
Lemmens HJ, Dyck JB, Shafer SL, Stanski DR. Pharmacokinetic-pharmacodynamic modeling in drug development: application to the investigational opioid trefentanil. Clinical pharmacology and therapeutics 56(3):261–271 (1994).
  ·  DOI: [10.1038/clpt.1994.136](https://doi.org/10.1038/clpt.1994.136)

## Population and dosing

**Population:** healthy male volunteers · condition healthy · age group adult · n = 14.

**Dosed compound ≠ measured compound:** dosed unknown, measured fentanyl.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α (min-1) | λ1 | 0.628 | min-1 |
| B | equation variable | 0.168 |  |
| β (min-1) | kel | 0.053 | min-1 |
| t½γ (min) | t1/2γ | 128 | min |
| VC (L) | V | 4.5 | L |
| Vss (L) | Vss | 39.3 | L |
| CLC (L/min) | CL | 0.483 | L/min |
| t1pp ranged from | tlag | 15.0 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.769). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Fentanyl record rejected because the volume of distribution parameter's unit, liters, could not be converted to SI.**

The volume of distribution parameter was assigned a value of 4.5 liters, but this unit could not be converted to standard SI units. Consequently, the parameter lacked a valid numerical value for model integration. The second reader also disputed the extraction of the intercept coefficient and the dose parameters. Extracted — fentanyl: λ1 0.628 min-1, kel 0.053 min-1, t1/2γ 128 min, V 4.5 L, Vss 39.3 L, CL 0.483 L/min, tlag 15 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of b: this record has 0.168, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α (min-1) | `Q67` · λ1 | 0.628 | min-1 |  |  | 1/min | exact (1) | Lemmens_1994_table_p7_2:row2:col1, Lemmens_1994_table_p7_2:row2:col2 |
| B | `Q900` · equation variable | 0.168 |  |  |  |  | llm (0.6) | Lemmens_1994_table_p7_2:row3:col1, Lemmens_1994_table_p7_2:row3:col2 |
| β (min-1) | `Q47` · kel | 0.053 | min-1 | 0.0008833 | 1/s | 1/min | exact (1) | Lemmens_1994_table_p7_2:row4:col1, Lemmens_1994_table_p7_2:row4:col2 |
| t½γ (min) | `Q89` · t1/2γ | 128 | min | 7680 | s | min | llm (0.6) | Lemmens_1994_table_p7_2:row7:col1, Lemmens_1994_table_p7_2:row7:col2 |
| VC (L) | `Q61` · V | 4.5 | L | 0.0045 | m3 | l | exact (1) | Lemmens_1994_table_p7_2:row8:col1, Lemmens_1994_table_p7_2:row8:col2 |
| Vss (L) | `Q65` · Vss | 39.3 | L | 0.0393 | m3 | l | exact (1) | Lemmens_1994_table_p7_2:row9:col1, Lemmens_1994_table_p7_2:row9:col2 |
| CLC (L/min) | `Q22` · CL | 0.483 | L/min | 8.05e-06 | m3/s | l/min | central_subscript (0.9) | Lemmens_1994_table_p7_2:row10:col1, Lemmens_1994_table_p7_2:row10:col2 |
| t1pp ranged from | `Q83` · tlag | 15.0 | min | 900 | s | h | review_gapfill (0.7) | Andersen_1986:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose (mg)' — extend the ontology if this is a real PK parameter (source ['Lemmens_1994_table_p7_2:row0:col1', 'Lemmens_1994_table_p7_2:row0:col2'])
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['Lemmens_1994_table_p7_2:row1:col1', 'Lemmens_1994_table_p7_2:row1:col2'])
- unit_dimension_mismatch: 'α (min-1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'C' — extend the ontology if this is a real PK parameter (source ['Lemmens_1994_table_p7_2:row5:col1', 'Lemmens_1994_table_p7_2:row5:col2'])
- dropped duplicate Q22 ('CLdis (L/min)', value '1.27') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'VC (L)' is the general volume)
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q83 (tlag) from Andersen_1986's review values (primary lacked it)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b]` | 0.168 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose]` |  | 16.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1pp ranged from]` | 15.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lemmens_1994_table_p7_2:row10:col1', 'Lemmens_1994_table_p7_2:row10:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lemmens_1994_table_p7_2:row4:col1', 'Lemmens_1994_table_p7_2:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Lemmens_1994_table_p7_2:row8:col1', 'Lemmens_1994_table_p7_2:row8:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Lemmens_1994_table_p7_2:row9:col1', 'Lemmens_1994_table_p7_2:row9:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | min-1 | ['Lemmens_1994_table_p7_2:row2:col1', 'Lemmens_1994_table_p7_2:row2:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Andersen_1986:review'] |
| C5_dimension_Q89 | pass | [time] |  | ['Lemmens_1994_table_p7_2:row7:col1', 'Lemmens_1994_table_p7_2:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.483 | ['Lemmens_1994_table_p7_2:row10:col1', 'Lemmens_1994_table_p7_2:row10:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 29 L/h | ['Lemmens_1994_table_p7_2:row10:col1', 'Lemmens_1994_table_p7_2:row10:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.5 L | ['Lemmens_1994_table_p7_2:row8:col1', 'Lemmens_1994_table_p7_2:row8:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 39.3 L | ['Lemmens_1994_table_p7_2:row9:col1', 'Lemmens_1994_table_p7_2:row9:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfentanyl%5D%20Fentanyl_Lemmens1994_reference&body=Drug%3A%20fentanyl%0ARecord%3A%20Fentanyl_Lemmens1994_reference%0APaper%3A%20Lemmens_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fentanyl/Fentanyl_Lemmens1994_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 13:12 UTC</sub>
