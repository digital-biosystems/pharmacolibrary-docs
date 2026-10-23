<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;De_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_De2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-06 05:14 UTC (Rejected), but the paper was screened again on 2026-10-08 19:14 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Lidocaine record lacks volume and clearance, and AUC0-3 is reported in percent instead of concentration-time units.

<div class="pk-model-meta" hidden drug="lidocaine" model-id="Lidocaine_De2021_reference" status="rejected" stale="true" population="adults undergoing lumbar spine surgery" measured-compound="lidocaine" parameterization="mechanistic" topology="1C"></div>

## Citation
De Cassai A, Bonanno C, Padrini R, Geraldini F, Boscolo A, Navalesi P et al. Pharmacokinetics of lidocaine after bilateral ESP block. Regional anesthesia and pain medicine 46(1):86–89 (2021).
  ·  DOI: [10.1136/rapm-2020-101718](https://doi.org/10.1136/rapm-2020-101718)

## Population and dosing

**Population:** adults undergoing lumbar spine surgery · condition lumbar spine surgery · age group adult · n = &gt;=18.

**Dosing:** 245 mg, other, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Min | Cmin | 1.83 |  |
| Max | Cmax | 5.61 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Lidocaine record lacks volume and clearance, and AUC0-3 is reported in percent instead of concentration-time units.**

The record contains no distribution volume or clearance parameters, confirming it is not a compartmental population PK model. The AUC0-3 value of 76 is assigned the unit percent, which is dimensionally inconsistent with an area under the concentration-time curve. Additionally, the Cmax parameter has no extracted value, though a second reader identified 2.59 mg/L in the source. Extracted — lidocaine: tmax 5 min, AUCt 76 %.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 1: this record has none, the second reading 5.61; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Min | `Q36` · Cmin | 1.83 |  | llm (0.6) | tab_0:row15:col1, tab_0:row15:col3, tab_0:row15:col4, tab_0:row15:col5, tab_0:row15:col6, tab_0:row15:col7 |
| Max | `Q32` · Cmax | 5.61 |  | llm (0.6) | tab_0:row16:col1, tab_0:row16:col3, tab_0:row16:col4, tab_0:row16:col5, tab_0:row16:col6, tab_0:row16:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4', 'tab_0:row3:col5', 'tab_0:row3:col6', 'tab_0:row3:col7'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5', 'tab_0:row4:col6', 'tab_0:row4:col7'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col4', 'tab_0:row5:col6', 'tab_0:row5:col7'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col4', 'tab_0:row6:col5', 'tab_0:row6:col6', 'tab_0:row6:col7'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5', 'tab_0:row7:col6', 'tab_0:row7:col7'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['tab_0:row8:col1', 'tab_0:row8:col2', 'tab_0:row8:col3', 'tab_0:row8:col4', 'tab_0:row8:col5', 'tab_0:row8:col6', 'tab_0:row8:col7'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1', 'tab_0:row9:col2', 'tab_0:row9:col3', 'tab_0:row9:col4', 'tab_0:row9:col5', 'tab_0:row9:col6', 'tab_0:row9:col7'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col1', 'tab_0:row10:col2', 'tab_0:row10:col3', 'tab_0:row10:col4', 'tab_0:row10:col5', 'tab_0:row10:col6', 'tab_0:row10:col7'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['tab_0:row11:col1', 'tab_0:row11:col2', 'tab_0:row11:col3', 'tab_0:row11:col5', 'tab_0:row11:col6', 'tab_0:row11:col7'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col1', 'tab_0:row12:col2', 'tab_0:row12:col3', 'tab_0:row12:col4', 'tab_0:row12:col5', 'tab_0:row12:col6', 'tab_0:row12:col7'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col1', 'tab_0:row13:col2', 'tab_0:row13:col3', 'tab_0:row13:col4', 'tab_0:row13:col5', 'tab_0:row13:col6', 'tab_0:row13:col7'])
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col1', 'tab_0:row14:col3', 'tab_0:row14:col4', 'tab_0:row14:col5', 'tab_0:row14:col6', 'tab_0:row14:col7'])
- implicit units: LLM call failed (JSONDecodeError) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lidocaine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[1]` |  | 5.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[2]` |  | 3.76 | only_one_extracted |
| `gpt-oss:120b` | `parameters[4]` |  | 1.83 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['tab_0:row16:col1', 'tab_0:row16:col3', 'tab_0:row16:col4', 'tab_0:row16:col5', 'tab_0:row16:col6', 'tab_0:row16:col7'] |
| C5_unit_missing_Q36 | fail | [mass] / [length] ** 3 |  | ['tab_0:row15:col1', 'tab_0:row15:col3', 'tab_0:row15:col4', 'tab_0:row15:col5', 'tab_0:row15:col6', 'tab_0:row15:col7'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blidocaine%5D%20Lidocaine_De2021_reference&body=Drug%3A%20lidocaine%0ARecord%3A%20Lidocaine_De2021_reference%0APaper%3A%20De_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lidocaine/Lidocaine_De2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-08 19:14 UTC</sub>
