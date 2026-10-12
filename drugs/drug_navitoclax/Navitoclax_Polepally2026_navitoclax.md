<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;navitoclax&quot;,&quot;href&quot;:&quot;drugs/drug_navitoclax/&quot;},{&quot;label&quot;:&quot;Polepally_2026 \u00b7 navitoclax&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# navitoclax — `Navitoclax_Polepally2026_navitoclax`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Kabs and CL_ratio have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — navitoclax: CL/F 137 L/day, V1/F 38.3 L, kabs 4.7, Q/F 77.4 L/day, V2/F 78.3 L, tlag 0.0479 day, CL_ratio 0.828.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260)

<div class="pk-model-meta" hidden drug="navitoclax" model-id="Navitoclax_Polepally2026_navitoclax" status="needs_review" stale="false" population="patients with myelofibrosis" measured-compound="navitoclax" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/day) | `Q27` · CL/F | 137 | L/day | 1.5856481481481483e-06 | [l] / [d] | not captured | exact (1.0) | Polepally_2026_table_4:row1:col1, Polepally_2026_table_4:row1:col2 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 38.3 | L | 0.0383 | [l] | not captured | exact (1.0) | Polepally_2026_table_4:row2:col1, Polepally_2026_table_4:row2:col2 | — | not captured |
| ka (1/day) | `Q49` · kabs | 4.70 | not captured | not captured | not captured | not captured | exact (1.0) | Polepally_2026_table_4:row3:col1, Polepally_2026_table_4:row3:col2 | — | not captured |
| Q/F (L/day) | `Q69` · Q/F | 77.4 | L/day | 8.958333333333335e-07 | [l] / [d] | not captured | exact (1.0) | Polepally_2026_table_4:row4:col1, Polepally_2026_table_4:row4:col2 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 78.3 | L | 0.0783 | [l] | not captured | exact (1.0) | Polepally_2026_table_4:row5:col1, Polepally_2026_table_4:row5:col2 | — | not captured |
| t lag (day) | `Q83` · tlag | 0.0479 | day | 4138.5599999999995 | [d] | not captured | space_fold (0.95) | Polepally_2026_table_4:row6:col1, Polepally_2026_table_4:row6:col2 | — | not captured |
| CL/F ratio of female compared to male | `Q31` · CL_ratio | 0.828 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Polepally_2026_table_4:row7:col1, Polepally_2026_table_4:row7:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'navitoclax' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=navitoclax
- population split: 'navitoclax' subgroup of Polepally_2026 (paper reports 2 populations: navitoclax, population estimate)

**Extraction notes:**
- unparsed cell psp470260-tbl-0003:row1:col3 = '(0.772, 0.856)'
- unparsed cell psp470260-tbl-0003:row2:col3 = '(0.422, 0.572)'
- unparsed cell psp470260-tbl-0003:row3:col3 = '(5.92, 6.04)'
- unparsed cell psp470260-tbl-0003:row4:col3 = '(0.128, 0.128)'
- unparsed cell psp470260-tbl-0003:row5:col3 = '(0.0369, 0.126)'
- unparsed cell psp470260-tbl-0003:row7:col3 = '(0.000245, 0.000272)'
- unparsed cell psp470260-tbl-0003:row8:col3 = '(0.685, 4.76)'
- unparsed cell psp470260-tbl-0003:row9:col3 = '(0.0853, 0.0901)'
- unparsed cell psp470260-tbl-0003:row10:col3 = '(−10.7, 22.8)'
- unparsed cell Polepally_2026_table_4:row1:col3 = '(126, 147)'
- unparsed cell Polepally_2026_table_4:row2:col3 = '(6.10, 70.5)'
- unparsed cell Polepally_2026_table_4:row3:col3 = '(0.600, 8.80)'
- unparsed cell Polepally_2026_table_4:row4:col3 = '(30.0, 125)'
- unparsed cell Polepally_2026_table_4:row5:col3 = '(46.7, 110)'
- unparsed cell Polepally_2026_table_4:row6:col3 = '(0.0452, 0.0506)'
- unparsed cell Polepally_2026_table_4:row7:col3 = '(−0.259, −0.0842)'
- unparsed cell Polepally_2026_table_4:row8:col3 = '(0.112, 0.144)'
- unparsed cell Polepally_2026_table_4:row9:col3 = '(0.00000293, 0.0000108)'
- companion parameter table 4 transcribed (18 record(s))
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.214 (3/14 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl/f ratio of female compared to male]` | 0.828 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 137 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 4.70 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[population naive effect on e prog]` | not captured | -1.88 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 77.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` | 0.0479 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q321_sex]` | not captured | 1.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q324_category]` | not captured | 0.813 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 38.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 78.3 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Polepally_2026_table_4:row1:col1', 'Polepally_2026_table_4:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Polepally_2026_table_4:row2:col1', 'Polepally_2026_table_4:row2:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Polepally_2026_table_4:row4:col1', 'Polepally_2026_table_4:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Polepally_2026_table_4:row5:col1', 'Polepally_2026_table_4:row5:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Polepally_2026_table_4:row6:col1', 'Polepally_2026_table_4:row6:col2'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Polepally_2026_table_4:row7:col1', 'Polepally_2026_table_4:row7:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['Polepally_2026_table_4:row3:col1', 'Polepally_2026_table_4:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.71 L/h | not captured | not captured | ['Polepally_2026_table_4:row1:col1', 'Polepally_2026_table_4:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 38.3 L | not captured | not captured | ['Polepally_2026_table_4:row2:col1', 'Polepally_2026_table_4:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 78.3 L | not captured | not captured | ['Polepally_2026_table_4:row5:col1', 'Polepally_2026_table_4:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_navitoclax/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Polepally_2026` / `Polepally_2026::navitoclax`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:07 UTC</sub>
