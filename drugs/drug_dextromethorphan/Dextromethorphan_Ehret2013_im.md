<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;dextromethorphan&quot;,&quot;href&quot;:&quot;drugs/drug_dextromethorphan/&quot;},{&quot;label&quot;:&quot;Ehret_2013 \u00b7 im&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dextromethorphan — `Dextromethorphan_Ehret2013_im`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The hepatic bioavailability FH of dextromethorphan was recorded as 13.2 with unit 'n = 16' — a subject count instead of a dimensionless fraction — a dimension mismatch on a structural parameter, so the record was rejected.

<div class="pk-model-meta" hidden drug="dextromethorphan" model-id="Dextromethorphan_Ehret2013_im" status="rejected" stale="false" population="adults with acute post-operative pain (knee ligament surgery) plus healthy volunteers" measured-compound="dextromethorphan" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ehret GB, Daali Y, Chabert J, Rebsamen M, Wolff A, Forster A et al. Influence of CYP2D6 activity on pre-emptive analgesia by the N-methyl-D-aspartate antagonist dextromethorphan in a randomized controlled trial of acute pain. Pain physician 16(1):45–56 (2013).

## Population and dosing

**Population:** adults with acute post-operative pain (knee ligament surgery) plus healthy volunteers · condition acute post-operative pain · age group adult · n = 44.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLDM (l/h) | CL | 34 | l/h |
| t1/2 DM (h) | kel | 0.028 | h |
| F H | FH | 13.2 | n = 16 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The hepatic bioavailability FH of dextromethorphan was recorded as 13.2 with unit 'n = 16' — a subject count instead of a dimensionless fraction — a dimension mismatch on a structural parameter, so the record was rejected.**

The parameter FH, defined as the fraction of dextromethorphan escaping first-pass hepatic metabolism, carries the value 13.2 with unit 'n = 16', which is a sample size rather than a unit and cannot be converted to SI. The elimination rate constant kel is likewise labeled 't1/2 DM (h)' with value 0.028 h, conflating a half-life with a rate constant. The metabolism link k12 from dextromethorphan to dextrorphan and the clearance CL of 34 l/h are otherwise present, but the malformed FH unit blocked publication. Extracted — dextromethorphan: CL 34 l/h, kel 0.028 h, FH 13.2 n = 16.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[t1/2 dm].parameter_id`: this record has Q47, the second reading Q59. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLDM (l/h) | `Q22` · CL | 34 | l/h | 9.444e-06 | m3/s | l/h | llm (0.6) | Ehret_2013_table_2:row0:col8 |
| t1/2 DM (h) | `Q47` · kel | 0.028 | h |  |  | h | exact (1) | Ehret_2013_table_2:row2:col8 |
| F H | `Q42` · FH | 13.2 | n = 16 |  |  | n=16 | space_fold (0.95) | Ehret_2013_table_2:row3:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 't1/2 DM (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'n = 16' (FH)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dextromethorphan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'First-pass production of other metabolites was neglected. 4) Inhibition by quinidine was modeled so that the DM to DOR b')
- status held at route_to_review — not promoted
- population split: 'im (n = 16)' subgroup of Ehret_2013 (paper reports 6 populations: em (n = 8), im (n = 16), mean population estimate, placebo (n = 16), pm (n = 4), um (n = 1))
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 32 linked by role; re-tagged parent→dextrorphan ×12
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_1: grid unusable → re-running vision table extraction for Ehret_2013
- unparsed cell Ehret_2013_table_p7_1:row0:col5 = '2.6 (0.8 - 3.9)'
- unparsed cell Ehret_2013_table_p7_1:row1:col5 = '0.8 (0.5 - 1.2)'
- unparsed cell Ehret_2013_table_p7_1:row2:col5 = '0.041 (0.029 - 0.069)'
- unparsed cell Ehret_2013_table_p7_1:row3:col5 = '0.27 (NA)'
- unparsed cell Ehret_2013_table_p7_1:row4:col5 = '0.51 (0.21 - 1.07)'
- unparsed cell Ehret_2013_table_p7_1:row5:col5 = '961 (585 - 1292)'
- unparsed cell Ehret_2013_table_p7_1:row6:col5 = '3776 (1222 - 6441)'
- unparsed cell Ehret_2013_table_p7_1:row7:col1 = '30%'
- unparsed cell Ehret_2013_table_p7_1:row8:col1 = '24%'
- transposed table Ehret_2013_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Ehret_2013_table_2:row2:col4 = '&lt; 0.001'
- companion parameter table 2 transcribed (14 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (7/8 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t1/2 dm].parameter_id` | Q47 | Q59 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ehret_2013_table_2:row0:col8'] |
| C5_dimension_Q47 | fail | [time] | h | ['Ehret_2013_table_2:row2:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 34 | ['Ehret_2013_table_2:row0:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 34 L/h | ['Ehret_2013_table_2:row0:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdextromethorphan%5D%20Dextromethorphan_Ehret2013_im&body=Drug%3A%20dextromethorphan%0ARecord%3A%20Dextromethorphan_Ehret2013_im%0APaper%3A%20Ehret_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dextromethorphan/Dextromethorphan_Ehret2013_im%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:25 UTC</sub>
