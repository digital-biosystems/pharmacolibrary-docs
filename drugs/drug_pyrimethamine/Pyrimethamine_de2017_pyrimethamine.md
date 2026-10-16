<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/drug_pyrimethamine/&quot;},{&quot;label&quot;:&quot;de_2017 \u00b7 pyrimethamine&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrimethamine — `Pyrimethamine_de2017_pyrimethamine`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. A reported unit could not be converted (equation variable), so that value has no SI equivalent. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulfadoxine/pyrimethamine, the second reading pyrimethamine and sulfadoxine; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181)

<div class="pk-model-meta" hidden drug="pyrimethamine" model-id="Pyrimethamine_de2017_pyrimethamine" status="rejected" stale="false" population="women during pregnancy and after delivery" measured-compound="sulfadoxine and pyrimethamine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 186 (167, 211) | `Q900` · equation variable | 149 | 167, 211 | not captured | [167] | not captured | llm (0.6) | de_2017_table_3:row10:col2, de_2017_table_3:row10:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '361 (337, 399)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row2:col2', 'de_2017_table_3:row2:col3'])
- dropped unlinked row (NIL): '3.30 (3.22, 3.34)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row3:col2', 'de_2017_table_3:row3:col3'])
- dropped unlinked row (NIL): '41.2 (37.0, 45.9)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row4:col2', 'de_2017_table_3:row4:col3'])
- dropped unlinked row (NIL): '81.9 (74.8, 99.5)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row5:col2', 'de_2017_table_3:row5:col3'])
- dropped unlinked row (NIL): '589 (556, 646)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row7:col2', 'de_2017_table_3:row7:col3'])
- dropped unlinked row (NIL): '3.37 (3.35, 3.42)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row8:col2', 'de_2017_table_3:row8:col3'])
- dropped unlinked row (NIL): '83.2 (74.2, 94.7)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row9:col2', 'de_2017_table_3:row9:col3'])
- dropped unlinked row (NIL): '443 (426, 509)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row12:col2', 'de_2017_table_3:row12:col3'])
- dropped unlinked row (NIL): '3.32 (3.28, 3.38)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row13:col2', 'de_2017_table_3:row13:col3'])
- dropped unlinked row (NIL): '54.6 (50.9, 65.3)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row14:col2', 'de_2017_table_3:row14:col3'])
- dropped unlinked row (NIL): '124 (98.7, 143)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row15:col2', 'de_2017_table_3:row15:col3'])
- dropped unlinked row (NIL): '236 (216, 246)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row17:col2', 'de_2017_table_3:row17:col3'])
- dropped unlinked row (NIL): '3.26 (3.25, 3.35)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row18:col2', 'de_2017_table_3:row18:col3'])
- dropped unlinked row (NIL): '28.5 (23.3, 35.1)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row19:col2', 'de_2017_table_3:row19:col3'])
- dropped unlinked row (NIL): '58.4 (45.2, 65.3)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row20:col2', 'de_2017_table_3:row20:col3'])
- dropped duplicate Q900 ('426 (304, 565)', value '378') — already have one for this compound
- dropped unlinked row (NIL): '3.33 (3.25, 3.38)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row23:col2', 'de_2017_table_3:row23:col3'])
- dropped unlinked row (NIL): '50.8 (34.3, 76.9)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row24:col2', 'de_2017_table_3:row24:col3'])
- dropped unlinked row (NIL): '107 (72.4, 162)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row25:col2', 'de_2017_table_3:row25:col3'])
- table mostly unlinked (18/20 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfadoxine and pyrimethamine
- status held at route_to_review — not promoted
- population split: 'pyrimethamine' subgroup of de_2017 (paper reports 4 populations: country, pyrimethamine, pyrimethamine estimate, sulfadoxine estimate)
- molar mass: none found for 'sulfadoxine and pyrimethamine' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table de_2017_table_p5_1: unparsed_numeric_cell
- table de_2017_table_3: ragged_grid
- companion parameter table 3 transcribed (85 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.526 (10/19 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[change in cl when non‐pregnant [%]].parameter_id` | Q31 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[difference in clearance in mozambique [%]]` | -20.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp1/f [l/h]b].parameter_id` | Q80 | Q69 | mismatch |
| `gpt-oss-120b` | `parameters[qp2/f [l/h]b]` | not captured | 0.122 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 3.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total]` | not captured | 97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θrbc/pl [fraction of one]]` | 0.324 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulfadoxine/pyrimethamine | pyrimethamine and sulfadoxine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pyrimethamine | pyrimethamine and sulfadoxine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_pyrimethamine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `de_2017` / `de_2017::pyrimethamine`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:16 UTC</sub>
