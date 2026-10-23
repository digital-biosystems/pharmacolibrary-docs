<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;methotrexate&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/&quot;},{&quot;label&quot;:&quot;Huffman_1973 \u00b7 of_dose_excreted_total&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methotrexate_Pan2026_reference&quot;,&quot;label&quot;:&quot;Pan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pan2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Pignon1994_reference&quot;,&quot;label&quot;:&quot;Pignon_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pignon1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Tan2024_reference&quot;,&quot;label&quot;:&quot;Tan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Tan2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Wei2025_reference&quot;,&quot;label&quot;:&quot;Wei_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Wei2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_van2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methotrexate — `Methotrexate_Huffman1973_of_dose_excreted_total`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit.

<div class="pk-model-meta" hidden drug="methotrexate" model-id="Methotrexate_Huffman1973_of_dose_excreted_total" status="needs_review" stale="false" population="patients with malignancies" measured-compound="methotrexate" parameterization="apparent" topology="1C"></div>

## Citation
Pharmacokinetics of methotrexate (1973).

## Population and dosing

**Population:** patients with malignancies · condition malignancies · age group adult · n = 22.

**Dosing:** 30 mg/m2, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F. H. | FH | 100.2 |  |
| Clearance | CL | 82 | ml per minute |
| apparent volume of distribution at steady state (V dss) | V/F | 73.3 | L |
| absorption rate ka6MP | kabs | 21.07 | 1/day |
| t lag,oral | tlag | 0.36 | hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — methotrexate: FH 100, CL 82 ml per minute, V/F 73.3 L, kabs 21.1 1/day, tlag 0.36 hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has methotrexate, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F. H. | `Q42` · FH | 100.2 |  |  |  |  | llm (0.6) | Huffman_1973_table_1:row7:col3, Huffman_1973_table_1:row8:col3 |
| Clearance | `Q22` · CL | 82 | ml per minute |  |  | ml per minute | exact (1) | Huffman_1973:results_prose |
| apparent volume of distribution at steady state (V dss) | `Q76` · V/F | 73.3 | L | 0.0733 | m3 | L | boundary (0.8) | Huffman_1973:results_prose |
| absorption rate ka6MP | `Q49` · kabs | 21.07 | 1/day | 0.0002439 | 1/s | 1/h | review_gapfill (0.7) | Gebhard_2023:review |
| t lag,oral | `Q83` · tlag | 0.36 | hour | 1296 | s | h | review_gapfill (0.7) | Tan_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '*S. B.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row0:col3'])
- dropped unlinked row (NIL): '*A. W.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row1:col3'])
- dropped unlinked row (NIL): '*R. D.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row2:col3'])
- dropped unlinked row (NIL): 'J. R.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row3:col3'])
- dropped unlinked row (NIL): 'C. D.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row4:col3'])
- dropped unlinked row (NIL): 'M. H.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row5:col3'])
- dropped unlinked row (NIL): 'R. H.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row6:col3'])
- dropped unlinked row (NIL): 'M. S.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row9:col3'])
- dropped unlinked row (NIL): 'R. A.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row10:col3', 'Huffman_1973_table_1:row26:col3'])
- dropped unlinked row (NIL): '**J. H.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row11:col3'])
- dropped unlinked row (NIL): 'V. G.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row12:col3'])
- dropped unlinked row (NIL): 'H. M.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row13:col3'])
- dropped unlinked row (NIL): 'M. D.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row14:col3'])
- dropped unlinked row (NIL): '**V. M.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row15:col3'])
- dropped unlinked row (NIL): 'F. D.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row16:col3'])
- dropped unlinked row (NIL): '**J. S.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row17:col3'])
- dropped unlinked row (NIL): 'E. S.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row18:col3'])
- dropped unlinked row (NIL): 'H. C.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row19:col3', 'Huffman_1973_table_1:row27:col3'])
- dropped unlinked row (NIL): 'F. C.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row20:col3', 'Huffman_1973_table_1:row23:col3'])
- dropped unlinked row (NIL): 'D. A.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row21:col3'])
- dropped unlinked row (NIL): 'J. G.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row22:col3'])
- dropped unlinked row (NIL): 'C. M.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row24:col3'])
- dropped unlinked row (NIL): 'M. T.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row25:col3'])
- dropped unlinked row (NIL): '**C. M.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row28:col3'])
- dropped unlinked row (NIL): '**M. S.' — extend the ontology if this is a real PK parameter (source ['Huffman_1973_table_1:row29:col3'])
- table mostly unlinked (25/26 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('Clearance'=82) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution at steady state (V dss)'=73.3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=methotrexate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: '% of dose excreted total' subgroup of Huffman_1973 (paper reports 3 populations: % of dose excreted feces, % of dose excreted total, % of dose excreted urine)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gebhard_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.133 (2/15 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[**c. m.]` |  | 29.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[*s. b.]` |  | 76.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution at steady state]` | 73.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 82 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f. d.]` |  | 53.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[h. c.]` |  | 52.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.268 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[r. h.]` |  | 100.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag,oral]` | 0.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v. g.]` |  | 69.7 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | methotrexate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | methotrexate | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 0.75 | 0.62 | 0.8267 | 0.25 | reported t½β |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Gebhard_2023:review'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Tan_2024:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | ml per minute |  |  | ['Huffman_1973:results_prose'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 73.3 L |  |  | ['Huffman_1973:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethotrexate%5D%20Methotrexate_Huffman1973_of_dose_excreted_total&body=Drug%3A%20methotrexate%0ARecord%3A%20Methotrexate_Huffman1973_of_dose_excreted_total%0APaper%3A%20Huffman_1973%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methotrexate/Methotrexate_Huffman1973_of_dose_excreted_total%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-15 06:22 UTC</sub>
