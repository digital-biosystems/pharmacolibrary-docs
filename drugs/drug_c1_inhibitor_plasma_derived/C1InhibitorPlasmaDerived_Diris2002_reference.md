<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;c1-inhibitor, plasma derived&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/&quot;},{&quot;label&quot;:&quot;Diris_2002 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;C1InhibitorPlasmaDerived_Pawaskar2018_reference&quot;,&quot;label&quot;:&quot;Pawaskar_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# c1-inhibitor, plasma derived — `C1InhibitorPlasmaDerived_Diris2002_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — c1 inhibitor plasma derived: V1 5.14e+03 mL, V 2.5e+03 mL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has C1-inhibitor, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:36:22.916199+00:00) predates the upstream re-run (2026-10-06 00:58:28.167821+00:00). Current validate status: `needs_review`.

## Citation
Diris JH et al., Pharmacokinetics of C1-inhibitor protei…, Clinical pharmacology and t… (2002)
  ·  DOI: [10.1067/mcp.2002.129320](https://doi.org/10.1067/mcp.2002.129320)

## Model component
<dbs-pgx drug="c1-inhibitor, plasma derived" model-id="C1InhibitorPlasmaDerived_Diris2002_reference" status="needs_review" stale="true" population="patients with acute myocardial infarction" measured-compound="C1-inhibitor" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 2953 | mL | not captured | [ml] | not captured | llm (0.6) | Diris_2002_table_1:row0:col2, Diris_2002_table_1:row0:col3, Diris_2002_table_1:row0:col4 | — | not captured |
| 5‡ | `Q61` · V | 2500 | mL | 0.0025 | [ml] | not captured | llm (0.6) | Diris_2002_table_1:row4:col2, Diris_2002_table_1:row4:col3, Diris_2002_table_1:row4:col4 | — | not captured |
| 17† | `Q63` · V1 | 2929 | mL | 0.0029289999999999997 | [ml] | not captured | llm (0.6) | Diris_2002_table_1:row16:col2, Diris_2002_table_1:row16:col3, Diris_2002_table_1:row16:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'age (y)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'body weight (kg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q900 ('2', value '5144') — already have one for this compound
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row2:col2', 'Diris_2002_table_1:row2:col3', 'Diris_2002_table_1:row2:col4'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row3:col2', 'Diris_2002_table_1:row3:col3', 'Diris_2002_table_1:row3:col4'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row5:col2', 'Diris_2002_table_1:row5:col3', 'Diris_2002_table_1:row5:col4'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row6:col2', 'Diris_2002_table_1:row6:col3', 'Diris_2002_table_1:row6:col4'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row7:col2', 'Diris_2002_table_1:row7:col3', 'Diris_2002_table_1:row7:col4'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row8:col2', 'Diris_2002_table_1:row8:col3', 'Diris_2002_table_1:row8:col4'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row9:col2', 'Diris_2002_table_1:row9:col3', 'Diris_2002_table_1:row9:col4'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row10:col2', 'Diris_2002_table_1:row10:col3', 'Diris_2002_table_1:row10:col4'])
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row11:col2', 'Diris_2002_table_1:row11:col3', 'Diris_2002_table_1:row11:col4'])
- dropped duplicate Q61 ('13', value '3784') — already have one for this compound
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row13:col2', 'Diris_2002_table_1:row13:col3', 'Diris_2002_table_1:row13:col4'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row14:col2', 'Diris_2002_table_1:row14:col3', 'Diris_2002_table_1:row14:col4'])
- dropped unlinked row (NIL): '16' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row15:col2', 'Diris_2002_table_1:row15:col3', 'Diris_2002_table_1:row15:col4'])
- dropped duplicate Q61 ('18', value '6329') — already have one for this compound
- dropped duplicate Q61 ('19', value '4059') — already have one for this compound
- dropped unlinked row (NIL): '20' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row19:col2', 'Diris_2002_table_1:row19:col3', 'Diris_2002_table_1:row19:col4'])
- dropped unlinked row (NIL): '21' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row20:col2', 'Diris_2002_table_1:row20:col3', 'Diris_2002_table_1:row20:col4'])
- dropped duplicate Q61 ('22', value '3750') — already have one for this compound
- dropped unlinked row (NIL): 'Median (n = 20)' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row22:col2', 'Diris_2002_table_1:row22:col3', 'Diris_2002_table_1:row22:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=C1-inhibitor
- molar mass: no plausible PubChem entry for 'C1-inhibitor' ('C1-inhibitor') — left in mass units
- molar mass: none found for 'c1_inhibitor_plasma_derived' — its concentrations stay mass-only
- molar mass: none found for 'C1-inhibitor' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- unparsed cell Diris_2002_table_1:row0:col5 = '0.009 (0.005 to 0.013)'
- unparsed cell Diris_2002_table_1:row1:col5 = '0.009 (0.008 to 0.010)'
- unparsed cell Diris_2002_table_1:row2:col5 = '0.007 (0.005 to 0.009)'
- unparsed cell Diris_2002_table_1:row3:col5 = '0.005 (0.003 to 0.007)'
- unparsed cell Diris_2002_table_1:row4:col5 = '0.900 (-0.470 to 2.270)'
- unparsed cell Diris_2002_table_1:row5:col5 = '0.011 (0.010 to 0.012)'
- unparsed cell Diris_2002_table_1:row6:col5 = '0.012 (0.009 to 0.015)'
- unparsed cell Diris_2002_table_1:row7:col5 = '0.003 (0.002 to 0.004)'
- unparsed cell Diris_2002_table_1:row8:col5 = '0.011 (0.008 to 0.014)'
- unparsed cell Diris_2002_table_1:row9:col5 = '0.010 (0.005 to 0.015)'
- unparsed cell Diris_2002_table_1:row10:col5 = '0.021 (0.017 to 0.025)'
- unparsed cell Diris_2002_table_1:row11:col5 = '0.010 (0.006 to 0.014)'
- unparsed cell Diris_2002_table_1:row12:col5 = '0.017 (0.012 to 0.022)'
- unparsed cell Diris_2002_table_1:row13:col5 = '0.016 (0.014 to 0.018)'
- unparsed cell Diris_2002_table_1:row14:col5 = '0.016 (0.011 to 0.021)'
- unparsed cell Diris_2002_table_1:row15:col5 = '0.025 (0.021 to 0.029)'
- unparsed cell Diris_2002_table_1:row16:col5 = '0.002 (-0.004 to 0.008)'
- unparsed cell Diris_2002_table_1:row17:col5 = '0.017 (0.010 to 0.024)'
- unparsed cell Diris_2002_table_1:row18:col5 = '0.007 (0.004 to 0.010)'
- unparsed cell Diris_2002_table_1:row19:col5 = '0.009 (0.007 to 0.011)'
- unparsed cell Diris_2002_table_1:row20:col5 = '0.012 (0.005 to 0.019)'
- unparsed cell Diris_2002_table_1:row21:col5 = '0.011 (0.009 to 0.013)'
- unparsed cell Diris_2002_table_1:row22:col5 = '0.011 (0.008 to 0.014)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[17]` | 2929 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[1].parameter_id` | Q900 | Q63 | mismatch |
| `gpt-oss:120b` | `parameters[2]` | not captured | 5144 | only_one_extracted |
| `gpt-oss:120b` | `parameters[5]` | 2500 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[6]` | not captured | 3170 | only_one_extracted |
| `gpt-oss:120b` | `parameters[brackertz et al16]` | not captured | 0.011 | only_one_extracted |
| `gpt-oss:120b` | `parameters[waytes et al17]` | not captured | 0.015 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | C1-inhibitor | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | C1-inhibitor | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Diris_2002_table_1:row4:col2', 'Diris_2002_table_1:row4:col3', 'Diris_2002_table_1:row4:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Diris_2002_table_1:row16:col2', 'Diris_2002_table_1:row16:col3', 'Diris_2002_table_1:row16:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.5 L | not captured | not captured | ['Diris_2002_table_1:row4:col2', 'Diris_2002_table_1:row4:col3', 'Diris_2002_table_1:row4:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.93 L | not captured | not captured | ['Diris_2002_table_1:row16:col2', 'Diris_2002_table_1:row16:col3', 'Diris_2002_table_1:row16:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_c1_inhibitor_plasma_derived/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diris_2002` / `Diris_2002::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 00:58 UTC</sub>
