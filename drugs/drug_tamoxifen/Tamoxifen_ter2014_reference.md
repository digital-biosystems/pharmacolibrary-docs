<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;tamoxifen&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/&quot;},{&quot;label&quot;:&quot;ter_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tamoxifen_Xu2026_reference&quot;,&quot;label&quot;:&quot;Xu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_Xu2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tamoxifen — `Tamoxifen_ter2014_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.579), gpt-oss:120b (not confirmed, agreement 0.647). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. None of the extracted parameters is tamoxifen's own; they describe dextromethorphan, dextrorphan, 3-hydroxymorphinan and 3-methoxymorphinan. Extracted — dextromethorphan: V1 188 l, V2 1.66e+03 l, kabs 0.213 h -1, tlag 0.369 h, Q 415 l h -1; dextrorphan: CLfm 1.56e+03 l h -1, kel 1.11 h -1; 3-hydroxymorphinan: CLfm 362 l h -1, CL 5.73e+03 l h -1; 3-methoxymorphinan: CLfm 44.7 l h -1, kel 13.4 h -1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has tamoxifen, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
ter Heine R et al., Population pharmacokinetic modelling to…, British journal of clinical… (2014)
  ·  DOI: [10.1111/bcp.12388](https://doi.org/10.1111/bcp.12388)

<div class="pk-model-meta" hidden drug="tamoxifen" model-id="Tamoxifen_ter2014_reference" status="needs_review" stale="false" population="breast cancer patients" measured-compound="tamoxifen" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Central Vd dextromethorphan (l) | `Q63` · V1 | 188 | l | 0.188 | [l] | not captured | llm_confirmed (0.6) | ter_2014_table_1:row0:col1 | — | not captured |
| Peripheral Vd dextromethorphan (l) | `Q64` · V2 | 1660 | l | 1.6600000000000001 | [l] | not captured | llm_confirmed (0.6) | ter_2014_table_1:row1:col1 | — | not captured |
| k12 (h -1 ) | `Q49` · kabs | 0.213 | h -1 | 5.9166666666666664e-05 | [1] / [h] | not captured | exact (1.0) | ter_2014_table_1:row2:col1 | — | not captured |
| tlag (h) | `Q83` · tlag | 0.369 | h | 1328.4 | [h] | not captured | exact (1.0) | ter_2014_table_1:row3:col1 | — | not captured |
| CL2D6,1 (l h -1 ) | `Q370` · CLfm | 1560 | l h -1 | 0.00043333333333333337 | [l] / [h] | not captured | exact (1.0) | ter_2014_table_1:row4:col1 | — | not captured |
| CL2D6,2 (l h -1 ) | `Q370` · CLfm | 362 | l h -1 | 0.00010055555555555555 | [l] / [h] | not captured | exact (1.0) | ter_2014_table_1:row5:col1 | — | not captured |
| CL3A4,1 (l h -1 ) | `Q370` · CLfm | 44.7 | l h -1 | 1.2416666666666667e-05 | [l] / [h] | not captured | exact (1.0) | ter_2014_table_1:row6:col1 | — | not captured |
| CLHM (l h -1 ) | `Q22` · CL | 5730 | l h -1 | 0.0015916666666666668 | [l] / [h] | not captured | exact (1.0) | ter_2014_table_1:row8:col1 | — | not captured |
| Q1 (l h -1 ) | `Q30` · Q | 415 | l h -1 | 0.00011527777777777778 | [l] / [h] | not captured | exact (1.0) | ter_2014_table_1:row9:col1 | — | not captured |
| k57 (h -1 ) | `Q47` · kel | 1.11 | h -1 | 0.00030833333333333337 | [1] / [h] | not captured | exact (1.0) | ter_2014_table_1:row11:col1 | — | not captured |
| k68 (h -1 ) | `Q47` · kel | 13.4 | h -1 | 0.0037222222222222223 | [1] / [h] | not captured | exact (1.0) | ter_2014_table_1:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q370 ('CL3A4,2 (l h -1 )', value '1840') — already have one for this compound
- dropped duplicate Q30 ('Q2 (l h -1 )', value '200') — already have one for this compound
- dropped duplicate Q47 ('k75 (h -1 )', value '0.0815') — already have one for this compound
- dropped duplicate Q47 ('k86 (h -1 )', value '0.0637') — already have one for this compound
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['ter_2014_table_1:row24:col1'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Central Vd dextromethorphan (l)); Q64 (Peripheral Vd dextromethorphan (l)); Q22 (CLHM (l h -1 )); Q30 (Q1 (l h -1 ))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tamoxifen
- topology: 5 first-order transfer(s) across 6 compounds → general_linear
- template fit: none — 4 metabolites — the templates hold two (site hepatic: 'The drug concentration in the hypothetical liver compartment is denoted by CL and is described with the following equati')
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 15 linked by role; re-tagged parent→dextromethorphan ×6, parent→dextrorphan ×3, parent→3-hydroxymorphinan ×3, parent→3-methoxymorphinan ×3

**Extraction notes:**
- final table tab_1: grid unusable → re-running vision table extraction for ter_2014
- final table tab_1: no readable grid (GROBID mangled)
- unparsed cell ter_2014_table_1:row0:col2 = '32.4%'
- unparsed cell ter_2014_table_1:row1:col2 = '16.8%'
- unparsed cell ter_2014_table_1:row2:col2 = '7.6%'
- unparsed cell ter_2014_table_1:row3:col2 = '3.7%'
- unparsed cell ter_2014_table_1:row4:col2 = '27.8%'
- unparsed cell ter_2014_table_1:row5:col2 = '46.1%'
- unparsed cell ter_2014_table_1:row6:col2 = '26%'
- unparsed cell ter_2014_table_1:row7:col2 = '9.1%'
- unparsed cell ter_2014_table_1:row8:col2 = '11.4%'
- unparsed cell ter_2014_table_1:row9:col2 = '22.1%'
- unparsed cell ter_2014_table_1:row10:col2 = '37.3%'
- unparsed cell ter_2014_table_1:row11:col2 = '19.5%'
- unparsed cell ter_2014_table_1:row12:col2 = '28.7%'
- unparsed cell ter_2014_table_1:row13:col2 = '12.4%'
- unparsed cell ter_2014_table_1:row14:col2 = '18.5%'
- companion parameter table 1 transcribed (16 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.579 (11/19 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.647 (11/17 fields) | 6 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl2d6,2]` | 362 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2d6,2]` | not captured | 362 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl3a4,1]` | 44.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl3a4,2]` | not captured | 1840 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k57]` | not captured | 1.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k57]` | 1.11 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k68]` | not captured | 13.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k68]` | 13.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k57]` | not captured | 1.11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k57]` | 1.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k68]` | not captured | 13.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k68]` | 13.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | tamoxifen | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tamoxifen | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ter_2014_table_1:row8:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ter_2014_table_1:row9:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ter_2014_table_1:row4:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ter_2014_table_1:row5:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ter_2014_table_1:row6:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['ter_2014_table_1:row11:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['ter_2014_table_1:row13:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['ter_2014_table_1:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['ter_2014_table_1:row0:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['ter_2014_table_1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['ter_2014_table_1:row3:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 5730.0 | not captured | not captured | ['ter_2014_table_1:row8:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.73e+03 L/h | not captured | not captured | ['ter_2014_table_1:row8:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 188 L | not captured | not captured | ['ter_2014_table_1:row0:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.66e+03 L | not captured | not captured | ['ter_2014_table_1:row1:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tamoxifen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `ter_2014` / `ter_2014::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-27 12:20 UTC</sub>
