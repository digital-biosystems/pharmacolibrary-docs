<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;stavudine&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/&quot;},{&quot;label&quot;:&quot;Horton_1995 \u00b7 null_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Stavudine_Jullien2007_reference&quot;,&quot;label&quot;:&quot;Jullien_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Jullien2007_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Panhard2007_reference&quot;,&quot;label&quot;:&quot;Panhard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Panhard2007_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Sinxadi2010_reference&quot;,&quot;label&quot;:&quot;Sinxadi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Sinxadi2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# stavudine — `Stavudine_Horton1995_null_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="stavudine" model-id="Stavudine_Horton1995_null_value" status="rejected" stale="false" population="patients with AIDS or advanced AIDS-related complex" measured-compound="stavudine" parameterization="apparent" topology="1C"></div>

## Citation
Horton CM, Dudley MN, Kaul S, Mayer KH, Squires K, Dunkle L et al. Population pharmacokinetics of stavudine (d4T) in patients with AIDS or advanced AIDS-related complex. Antimicrobial agents and chemotherapy 39(10):2309–2315 (1995).
  ·  DOI: [10.1128/AAC.39.10.2309](https://doi.org/10.1128/AAC.39.10.2309)

## Population and dosing

**Population:** patients with AIDS or advanced AIDS-related complex · condition AIDS or ARC · age group mixed · n = 81.

**Dosing:** 7, 840 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| GI disease e | equation variable | 1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of gi disease e: this record has 1, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| GI disease e | `Q900` · equation variable | 1 |  | llm (0.6) | Horton_1995_table_4:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F (liters/h) | Q27 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'High dose d' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row1:col1'])
- dropped unlinked row (NIL): 'TBW' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row2:col1', 'Horton_1995_table_4:row12:col1'])
- dropped unlinked row (NIL): 'AIDS' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row3:col1'])
- dropped unlinked row (NIL): 'Prior ZDV therapy' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row4:col1'])
- dropped unlinked row (NIL): 'LBM' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row5:col1', 'Horton_1995_table_4:row13:col1'])
- dropped unlinked row (NIL): 'Smoking' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row6:col1'])
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row8:col1', 'Horton_1995_table_4:row14:col1'])
- dropped unlinked row (NIL): 'Starting CD4 cell no.' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row9:col1'])
- dropped unlinked row (NIL): 'Development of PN' — extend the ontology if this is a real PK parameter (source ['Horton_1995_table_4:row10:col1'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['tab_5:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=stavudine
- population split: 'null value' subgroup of Horton_1995 (paper reports 2 populations: null value, population estimate)
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- transposed table tab_5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_5:row0:col2 = '[18.8 (11.6, 26) ϩ'
- unparsed cell tab_5:row0:col3 = '0.13 (0.03, 0.24) ⅐'
- unparsed cell tab_5:row0:col4 = 'TBW] ⅐ [1.2 (1.0,'
- unparsed cell tab_5:row0:col5 = '1.38) Ϫ stage] ⅐'
- unparsed cell tab_5:row0:col6 = '[1.5 (1.12),'
- unparsed cell tab_5:row0:col9 = '11, 25'
- unparsed cell tab_5:row1:col2 = '8.18 (4.68, 11.7) 70 (44.9, 95.2) 13.1 (7.7, 18.5) 1.35 (1.13, 1.57) 0.17 (0.13, 0.21) 0.002 (0, 0.003)'
- unparsed cell tab_5:row2:col9 = '24, 123'
- unparsed cell tab_5:row3:col9 = '0, 46'
- unparsed cell tab_5:row4:col9 = '67, 94'
- transposed table Horton_1995_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Horton_1995_table_3:row0:col2 = '82.3, 116'
- unparsed cell Horton_1995_table_3:row0:col4 = '1, 36'
- unparsed cell Horton_1995_table_3:row1:col2 = '28.9, 40.3'
- unparsed cell Horton_1995_table_3:row1:col4 = '0, 43'
- unparsed cell Horton_1995_table_3:row2:col2 = '18.8, 29.0'
- unparsed cell Horton_1995_table_3:row3:col2 = '47.3, 64.9'
- unparsed cell Horton_1995_table_3:row4:col2 = '16.3, 24.3'
- unparsed cell Horton_1995_table_3:row4:col4 = '0, 71'
- unparsed cell Horton_1995_table_3:row5:col2 = '1.8, 3.0'
- unparsed cell Horton_1995_table_3:row5:col4 = '31, 175'
- unparsed cell Horton_1995_table_3:row6:col2 = '0.09, 0.17'
- unparsed cell Horton_1995_table_3:row7:col2 = '0, 0.006'
- companion parameter table 3 transcribed (12 record(s))
- unparsed cell Horton_1995_table_4:row1:col2 = '1.41 (1.18, 1.64)'
- unparsed cell Horton_1995_table_4:row1:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row2:col2 = '0.17 (0.04, 0.3)'
- unparsed cell Horton_1995_table_4:row2:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row3:col2 = '1.23 (1.01, 1.45)'
- unparsed cell Horton_1995_table_4:row3:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row4:col2 = '1.12 (0.9, 1.34)'
- unparsed cell Horton_1995_table_4:row4:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row5:col2 = '0.05 (Ϫ0.03, 0.13)'
- unparsed cell Horton_1995_table_4:row5:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row6:col2 = '0.93 (0.74, 1.12)'
- unparsed cell Horton_1995_table_4:row6:col4 = 'Ͼ0.05'
- unparsed cell Horton_1995_table_4:row7:col2 = '0.94 (0.54, 1.35)'
- unparsed cell Horton_1995_table_4:row7:col4 = 'Ͼ0.2'
- unparsed cell Horton_1995_table_4:row8:col2 = '0.01 (Ϫ0.22, 0.25)'
- unparsed cell Horton_1995_table_4:row8:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row9:col2 = '0.99 (0.75, 1.23)'
- unparsed cell Horton_1995_table_4:row9:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row10:col2 = '0.99 (0.76, 1.22)'
- unparsed cell Horton_1995_table_4:row10:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row12:col2 = '0.689 (0.207, 1.17)'
- unparsed cell Horton_1995_table_4:row12:col4 = 'Ͻ0.05'
- unparsed cell Horton_1995_table_4:row13:col2 = 'Ϫ0.589 (Ϫ1.399, 0.221)'
- unparsed cell Horton_1995_table_4:row13:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row14:col2 = 'Ϫ0.076 (Ϫ0.706, 0.554)'
- unparsed cell Horton_1995_table_4:row14:col4 = 'Ͼ0.3'
- companion parameter table 4 transcribed (26 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[gi disease e]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[high dose d]` |  | 1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_5:row0:col7'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bstavudine%5D%20Stavudine_Horton1995_null_value&body=Drug%3A%20stavudine%0ARecord%3A%20Stavudine_Horton1995_null_value%0APaper%3A%20Horton_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_stavudine/Stavudine_Horton1995_null_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:16 UTC</sub>
