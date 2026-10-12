<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;mibefradil&quot;,&quot;href&quot;:&quot;drugs/drug_mibefradil/&quot;},{&quot;label&quot;:&quot;Welker_1998 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mibefradil — `Mibefradil_Welker1998_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (Cmax), so that value has no SI equivalent. Extracted — mibefradil: Cmax 220 µg/L, tmax 0.94 h, CL/F 26.7 L/h, t1/2β 11.1 h.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-29 18:27:10.427961+00:00) predates the upstream re-run (2026-10-07 03:41:05.547544+00:00). Current validate status: `needs_review`.

## Citation
Welker HA et al., Mibefradil pharmacokinetic and pharmaco…, International journal of cl… (1998)

## Model component
<dbs-pgx drug="mibefradil" model-id="Mibefradil_Welker1998_reference" status="needs_review" stale="true" population="patients with hypertension and chronic stable angina pectoris" measured-compound="mibefradil" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (µg/L) | `Q32` · Cmax | 220 | µg/L | not captured | [µg] / [l] | not captured | exact (1.0) | Welker_1998_table_4:row3:col1, Welker_1998_table_4:row3:col2, Welker_1998_table_4:row3:col3, Welker_1998_table_4:row3:col4, Welker_1998_table_4:row3:col5, Welker_1998_table_4:row3:col6, Welker_1998_table_4:row3:col7, Welker_1998_table_4:row3:col8 | — | not captured |
| tmax (h) | `Q56` · tmax | 0.94 | h | 3384.0 | [h] | not captured | exact (1.0) | Welker_1998_table_4:row4:col1, Welker_1998_table_4:row4:col2, Welker_1998_table_4:row4:col3, Welker_1998_table_4:row4:col4, Welker_1998_table_4:row4:col5, Welker_1998_table_4:row4:col6, Welker_1998_table_4:row4:col7, Welker_1998_table_4:row4:col8 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 26.7 | L/h | 7.416666666666667e-06 | [l] / [h] | not captured | exact (1.0) | Welker_1998_table_4:row5:col1, Welker_1998_table_4:row5:col2, Welker_1998_table_4:row5:col3, Welker_1998_table_4:row5:col4, Welker_1998_table_4:row5:col5, Welker_1998_table_4:row5:col6, Welker_1998_table_4:row5:col7, Welker_1998_table_4:row5:col8 | — | not captured |
| t1/2β (h) | `Q60` · t1/2β | 11.1 | h | 39960.0 | [h] | not captured | exact (1.0) | Welker_1998_table_4:row6:col1, Welker_1998_table_4:row6:col2, Welker_1998_table_4:row6:col3, Welker_1998_table_4:row6:col4, Welker_1998_table_4:row6:col5, Welker_1998_table_4:row6:col6, Welker_1998_table_4:row6:col7, Welker_1998_table_4:row6:col8 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'intravenous dose (mg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Welker_1998_table_3:row0:col1', 'Welker_1998_table_3:row0:col3', 'Welker_1998_table_3:row0:col4', 'Welker_1998_table_3:row0:col5'])
- dropped unlinked row (NIL): '20' — extend the ontology if this is a real PK parameter (source ['Welker_1998_table_3:row1:col1', 'Welker_1998_table_3:row1:col3', 'Welker_1998_table_3:row1:col4', 'Welker_1998_table_3:row1:col5'])
- dropped unlinked row (NIL): '40' — extend the ontology if this is a real PK parameter (source ['Welker_1998_table_3:row2:col1', 'Welker_1998_table_3:row2:col3', 'Welker_1998_table_3:row2:col4', 'Welker_1998_table_3:row2:col5'])
- dropped unlinked row (NIL): '80' — extend the ontology if this is a real PK parameter (source ['Welker_1998_table_3:row3:col1', 'Welker_1998_table_3:row3:col3', 'Welker_1998_table_3:row3:col4', 'Welker_1998_table_3:row3:col5'])
- dropped unlinked row (NIL): '160' — extend the ontology if this is a real PK parameter (source ['Welker_1998_table_3:row4:col1', 'Welker_1998_table_3:row4:col3', 'Welker_1998_table_3:row4:col4', 'Welker_1998_table_3:row4:col5'])
- dropped unlinked row (NIL): '320' — extend the ontology if this is a real PK parameter (source ['Welker_1998_table_3:row5:col1', 'Welker_1998_table_3:row5:col3', 'Welker_1998_table_3:row5:col4', 'Welker_1998_table_3:row5:col5'])
- dropped unlinked row (NIL): 'Day' — extend the ontology if this is a real PK parameter (source ['Welker_1998_table_4:row0:col1', 'Welker_1998_table_4:row0:col2', 'Welker_1998_table_4:row0:col3', 'Welker_1998_table_4:row0:col4', 'Welker_1998_table_4:row0:col5', 'Welker_1998_table_4:row0:col6', 'Welker_1998_table_4:row0:col7', 'Welker_1998_table_4:row0:col8'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mibefradil
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2, 3, 4
- transposed table Welker_1998_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Welker_1998_table_4:row5:col1', 'Welker_1998_table_4:row5:col2', 'Welker_1998_table_4:row5:col3', 'Welker_1998_table_4:row5:col4', 'Welker_1998_table_4:row5:col5', 'Welker_1998_table_4:row5:col6', 'Welker_1998_table_4:row5:col7', 'Welker_1998_table_4:row5:col8'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Welker_1998_table_4:row3:col1', 'Welker_1998_table_4:row3:col2', 'Welker_1998_table_4:row3:col3', 'Welker_1998_table_4:row3:col4', 'Welker_1998_table_4:row3:col5', 'Welker_1998_table_4:row3:col6', 'Welker_1998_table_4:row3:col7', 'Welker_1998_table_4:row3:col8'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Welker_1998_table_4:row4:col1', 'Welker_1998_table_4:row4:col2', 'Welker_1998_table_4:row4:col3', 'Welker_1998_table_4:row4:col4', 'Welker_1998_table_4:row4:col5', 'Welker_1998_table_4:row4:col6', 'Welker_1998_table_4:row4:col7', 'Welker_1998_table_4:row4:col8'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Welker_1998_table_4:row6:col1', 'Welker_1998_table_4:row6:col2', 'Welker_1998_table_4:row6:col3', 'Welker_1998_table_4:row6:col4', 'Welker_1998_table_4:row6:col5', 'Welker_1998_table_4:row6:col6', 'Welker_1998_table_4:row6:col7', 'Welker_1998_table_4:row6:col8'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 26.7 L/h | not captured | not captured | ['Welker_1998_table_4:row5:col1', 'Welker_1998_table_4:row5:col2', 'Welker_1998_table_4:row5:col3', 'Welker_1998_table_4:row5:col4', 'Welker_1998_table_4:row5:col5', 'Welker_1998_table_4:row5:col6', 'Welker_1998_table_4:row5:col7', 'Welker_1998_table_4:row5:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mibefradil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Welker_1998` / `Welker_1998::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:41 UTC</sub>
