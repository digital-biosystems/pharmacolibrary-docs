<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;Bretylium&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/&quot;},{&quot;label&quot;:&quot;Garrett_1982 \u00b7 overall_average_s_e_m&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bretylium_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bretylium_Kamath1981_reference&quot;,&quot;label&quot;:&quot;Kamath_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Kamath1981_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Bretylium — `Bretylium_Garrett1982_overall_average_s_e_m`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**This paper's disposition core is incomplete; the clearance plausibility check could not be computed.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Greenberg_2022) cannot stand in for this paper's evidence. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — bretylium: Fab 109 ng ml-1, CLR 119 ml min-1, CLu 679 ml min-1, t1/2ka 572 min, tlag 13 min, AUC ratio 21.6, V 167 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has bretylium, the second reading bretylium tosylate; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Garrett ER et al., Bretylium pharmacokinetics and bioavail…, Biopharmaceutics & drug dis… (1982)
  ·  DOI: [10.1002/bdd.2510030206](https://doi.org/10.1002/bdd.2510030206)

<div class="pk-model-meta" hidden drug="Bretylium" model-id="Bretylium_Garrett1982_overall_average_s_e_m" status="needs_review" stale="false" population="healthy male volunteers" measured-compound="bretylium" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| From % bioavailability AUCi.m. (low dose i.v.) / AUCi.v. (high dose i.v.) | `Q40` · Fab | 109 | ng ml-1 | not captured | not captured | not captured | llm_confirmed (0.6) | Garrett_1982_table_4:row8:col11 | — | not captured |
| Clras (ml min-1) | `Q26` · CLR | 119 | ml min-1 | 1.983333333333333e-06 | [ml] / [min] | not captured | llm (0.6) | Garrett_1982_table_4:row8:col12 | — | not captured |
| Creatinine clearance (ml min-1) | `Q24` · CLu | 679 | ml min-1 | 1.1316666666666664e-05 | [ml] / [min] | not captured | llm_corrected (0.6) | Garrett_1982_table_4:row8:col14, Garrett_1982_table_5:row1:col5, Garrett_1982_table_5:row3:col5, Garrett_1982_table_5:row5:col5, Garrett_1982_table_5:row7:col5, Garrett_1982_table_5:row9:col5 | — | not captured |
| t ½abs (min)* | `Q95` · t1/2ka | 572 | min | 34320.0 | [min] | not captured | llm (0.6) | Garrett_1982_table_5:row1:col4, Garrett_1982_table_5:row3:col4, Garrett_1982_table_5:row5:col4, Garrett_1982_table_5:row7:col4, Garrett_1982_table_5:row9:col4 | — | not captured |
| t lag (min) | `Q83` · tlag | 13 | min | 780.0 | [min] | not captured | space_fold (0.95) | Garrett_1982_table_5:row1:col6, Garrett_1982_table_5:row3:col6, Garrett_1982_table_5:row5:col6, Garrett_1982_table_5:row7:col6, Garrett_1982_table_5:row9:col6 | — | not captured |
| AUC p.o. / AUC i.v. | `Q21` · AUC ratio | 21.6 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Garrett_1982_table_5:row3:col3, Garrett_1982_table_5:row5:col3, Garrett_1982_table_5:row7:col3, Garrett_1982_table_5:row9:col3 | — | not captured |
| V | `Q61` · V | 167.0 | L | 0.167 | L | not captured | review_gapfill (0.7) | Greenberg_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q26 ('Clrct (ml min-1)', value '686') — already have one for this compound
- dropped unlinked row (NIL): 'Dose, mg (as cation)' — extend the ontology if this is a real PK parameter (source ['Garrett_1982_table_5:row1:col1', 'Garrett_1982_table_5:row3:col1', 'Garrett_1982_table_5:row5:col1', 'Garrett_1982_table_5:row7:col1', 'Garrett_1982_table_5:row9:col1'])
- dropped duplicate Q95 ('t ½abs (min) †', value '17.1') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bretylium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'overall average ± s.e.m.' subgroup of Garrett_1982 (paper reports 2 populations: average ± s.e.m., overall average ± s.e.m.)
- gap-filled Q61 (V) from Greenberg_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Garrett_1982_table_7: unknown_column_role
- table Garrett_1982_table_7: ambiguous_numeric_format
- final table tab_3: no supported point estimates; targeted recovery unresolved
- table Garrett_1982_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (68 record(s))
- transposed table Garrett_1982_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (98 record(s), model stage 'base')
- table Garrett_1982_table_4: missing_label
- table Garrett_1982_table_4: ragged_grid
- table Garrett_1982_table_4: unparsed_numeric_cell
- transposed table Garrett_1982_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (41 record(s), model stage 'base')
- table Garrett_1982_table_5: ragged_grid
- table Garrett_1982_table_5: unparsed_numeric_cell
- transposed table Garrett_1982_table_5: logical view retains original source coordinates
- companion parameter table 5 transcribed (79 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[% bioavailability urine recovery]` | not captured | 18.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[creatinine clearance].parameter_id` | Q24 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[dose]` | not captured | 234.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[from % bioavailability auci.m. (low dose i.v.) / auci.v.].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | bretylium | bretylium tosylate | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | bretylium | bretylium tosylate | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Garrett_1982_table_4:row8:col14', 'Garrett_1982_table_5:row1:col5', 'Garrett_1982_table_5:row3:col5', 'Garrett_1982_table_5:row5:col5', 'Garrett_1982_table_5:row7:col5', 'Garrett_1982_table_5:row9:col5'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Garrett_1982_table_4:row8:col12'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Greenberg_2022:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Garrett_1982_table_5:row1:col6', 'Garrett_1982_table_5:row3:col6', 'Garrett_1982_table_5:row5:col6', 'Garrett_1982_table_5:row7:col6', 'Garrett_1982_table_5:row9:col6'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Garrett_1982_table_5:row1:col4', 'Garrett_1982_table_5:row3:col4', 'Garrett_1982_table_5:row5:col4', 'Garrett_1982_table_5:row7:col4', 'Garrett_1982_table_5:row9:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 679.0 | not captured | not captured | ['Garrett_1982_table_4:row8:col14', 'Garrett_1982_table_5:row1:col5', 'Garrett_1982_table_5:row3:col5', 'Garrett_1982_table_5:row5:col5', 'Garrett_1982_table_5:row7:col5', 'Garrett_1982_table_5:row9:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q24 | pass | clearance within physiological range | 40.7 L/h | not captured | not captured | ['Garrett_1982_table_4:row8:col14', 'Garrett_1982_table_5:row1:col5', 'Garrett_1982_table_5:row3:col5', 'Garrett_1982_table_5:row5:col5', 'Garrett_1982_table_5:row7:col5', 'Garrett_1982_table_5:row9:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 167 L | not captured | not captured | ['Greenberg_2022:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_bretylium/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Garrett_1982` / `Garrett_1982::overall_average_s_e_m`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 19:09 UTC</sub>
