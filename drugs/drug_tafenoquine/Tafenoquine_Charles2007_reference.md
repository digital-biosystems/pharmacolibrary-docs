<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;tafenoquine&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/&quot;},{&quot;label&quot;:&quot;Charles_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafenoquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tafenoquine_Watson2022_reference&quot;,&quot;label&quot;:&quot;Watson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tafenoquine — `Tafenoquine_Charles2007_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (D1, Ct and CL/F), so that value has no SI equivalent. Extracted — tafenoquine: D1 400 mg, V/F 24.4 liters/kg, t1/2z 12 days, Ct 283 ng/ml, tlag 0.147 h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Charles BG et al., Population pharmacokinetics of tafenoqu…, Antimicrobial agents and ch… (2007)
  ·  DOI: [10.1128/AAC.01183-06](https://doi.org/10.1128/AAC.01183-06)

<div class="pk-model-meta" hidden drug="tafenoquine" model-id="Tafenoquine_Charles2007_reference" status="rejected" stale="false" population="healthy Australian soldiers" measured-compound="tafenoquine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cumulative dose (mg)b | `Q310` · D1 | 400 | mg | not captured | [mg] | not captured | llm (0.6) | Charles_2007_table_3:row1:col2, Charles_2007_table_3:row3:col2, Charles_2007_table_3:row4:col2, Charles_2007_table_3:row7:col2 | — | not captured |
| V/F (liters/kg) | `Q76` · V/F | 24.4 | liters/kg | 1.708 | [l] / [kg] | not captured | exact (1.0) | Charles_2007_table_3:row1:col6, Charles_2007_table_3:row3:col6, Charles_2007_table_3:row4:col6, Charles_2007_table_3:row5:col6, Charles_2007_table_3:row6:col6, Charles_2007_table_3:row7:col6 | — | not captured |
| t1/2 (days) | `Q57` · t1/2z | 12.0 | days | 1036800.0 | [d] | not captured | exact (1.0) | Charles_2007_table_3:row1:col7, Charles_2007_table_3:row3:col7, Charles_2007_table_3:row4:col7, Charles_2007_table_3:row5:col7, Charles_2007_table_3:row6:col7, Charles_2007_table_3:row7:col7 | — | not captured |
| Clast (ng/ml)c | `Q75` · Ct | 283 | ng/ml | not captured | [ng] / [ml] | not captured | llm (0.6) | Charles_2007_table_3:row4:col4, Charles_2007_table_3:row5:col4, Charles_2007_table_3:row6:col4, Charles_2007_table_3:row7:col4 | — | not captured |
| theta_v_f_weight | `Q900` · theta_v_f_weight | 0.713 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row4:col1 | — | not captured |
| CL/F | `Q900` · CL/F | 3.02 | 1 ; liters/h | not captured | not captured | not captured | not captured (not captured) | tab_1:row2:col1 | — | not captured |
| Tlag,1 | `Q83` · tlag | 0.147 | h | 529.1999999999999 | h | not captured | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F ( 1 ; liters/h) | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'RUV (CV%)' routed out of structural estimates ('IIV K a (CV%) IOV CL/F (CV%) 76 18 75 (64-85) 18 (16-20)')
- table section iiv: 'RUV (ng/ml)' routed out of structural estimates ('IIV K a (CV%) IOV CL/F (CV%) 76 18 75 (64-85) 18 (16-20)')
- dropped unlinked row (NIL): 'Treatment duration (days)a' — extend the ontology if this is a real PK parameter (source ['Charles_2007_table_3:row1:col1', 'Charles_2007_table_3:row3:col1', 'Charles_2007_table_3:row4:col1', 'Charles_2007_table_3:row5:col1', 'Charles_2007_table_3:row6:col1', 'Charles_2007_table_3:row7:col1'])
- unit_dimension_mismatch: 'Cumulative dose (mg)b' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
- dropped duplicate Q27 ('CL/F (liters/h/kg)', value '0.059') — already have one for this compound
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number 1 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number 2 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number 3 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Linear coefficient ( 4 ) for weight centered on CL/F'
- dropped value-less row: 'Linear coefficient ( 5 ) for weight centered on V/F'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tafenoquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q27 (CL/F): CL/F = θ₁ * (WT/70)^0.75; V/F = θ₂ * (WT/70)^1.0; Ka = θ₃
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F ( 1 ; liters/h)'; equation kept verbatim
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- table tab_1: unparsed_numeric_cell
- table Charles_2007_table_3: ambiguous_numeric_format
- transposed table Charles_2007_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (34 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation CL/F = θ₁ * (WT/70)^0.75; V/F = θ₂ * (WT/70)^1.0; Ka = θ₃

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row2:col1'] |
| C5_dimension_Q310 | fail | [mass] | mg | not captured | not captured | ['Charles_2007_table_3:row1:col2', 'Charles_2007_table_3:row3:col2', 'Charles_2007_table_3:row4:col2', 'Charles_2007_table_3:row7:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Charles_2007_table_3:row1:col7', 'Charles_2007_table_3:row3:col7', 'Charles_2007_table_3:row4:col7', 'Charles_2007_table_3:row5:col7', 'Charles_2007_table_3:row6:col7', 'Charles_2007_table_3:row7:col7'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Charles_2007_table_3:row4:col4', 'Charles_2007_table_3:row5:col4', 'Charles_2007_table_3:row6:col4', 'Charles_2007_table_3:row7:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Charles_2007_table_3:row1:col6', 'Charles_2007_table_3:row3:col6', 'Charles_2007_table_3:row4:col6', 'Charles_2007_table_3:row5:col6', 'Charles_2007_table_3:row6:col6', 'Charles_2007_table_3:row7:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Cherkaoui-Rbati_2023:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.71e+03 L | not captured | not captured | ['Charles_2007_table_3:row1:col6', 'Charles_2007_table_3:row3:col6', 'Charles_2007_table_3:row4:col6', 'Charles_2007_table_3:row5:col6', 'Charles_2007_table_3:row6:col6', 'Charles_2007_table_3:row7:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tafenoquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Charles_2007` / `Charles_2007::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:42 UTC</sub>
