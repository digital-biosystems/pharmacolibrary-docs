<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/drug_pyrimethamine/&quot;},{&quot;label&quot;:&quot;Odongo_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrimethamine — `Pyrimethamine_Odongo2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.824). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (kabs and AUC∞), so that value has no SI equivalent. Extracted — pyrimethamine: kabs 1.39 h, CL/F 0.94 L/h, V2/F 172 L, Q 0.03 L/h, t1/2α 57.7 h, t1/2β 254 h, V3/F 60.2 L, AUC∞ 87.4 ng·h/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulphadoxine-pyrimethamine, the second reading pyrimethamine; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `sulphadoxine–pyrimethamine`, measured `pyrimethamine`.

## Citation
Odongo CO et al., Trimester-Specific Population Pharmacok…, Drugs in R&D (2015)
  ·  DOI: [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z)

<div class="pk-model-meta" hidden drug="pyrimethamine" model-id="Pyrimethamine_Odongo2015_reference" status="rejected" stale="false" population="Ugandan pregnant women" measured-compound="pyrimethamine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA [h] | `Q49` · kabs | 1.39 | h | not captured | [h] | not captured | llm_confirmed (0.6) | Odongo_2015_table_3:row1:col1, Odongo_2015_table_3:row1:col2, Odongo_2015_table_3:row1:col3, Odongo_2015_table_3:row9:col1, Odongo_2015_table_3:row9:col2, Odongo_2015_table_3:row9:col3 | — | not captured |
| CL/F [L/h] | `Q27` · CL/F | 0.94 | L/h | 2.6111111111111113e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Odongo_2015_table_3:row2:col1, Odongo_2015_table_3:row2:col2, Odongo_2015_table_3:row2:col3, Odongo_2015_table_3:row10:col1, Odongo_2015_table_3:row10:col2, Odongo_2015_table_3:row10:col3 | — | not captured |
| V2/F [L] | `Q82` · V2/F | 171.6 | L | 0.1716 | [l] | not captured | llm_confirmed (0.6) | Odongo_2015_table_3:row3:col1, Odongo_2015_table_3:row3:col2, Odongo_2015_table_3:row3:col3, Odongo_2015_table_3:row11:col1, Odongo_2015_table_3:row11:col2, Odongo_2015_table_3:row11:col3 | — | not captured |
| Q [L/h] | `Q30` · Q | 0.03 | L/h | 8.333333333333334e-09 | [l] / [h] | not captured | llm (0.6) | Odongo_2015_table_3:row4:col1, Odongo_2015_table_3:row4:col2, Odongo_2015_table_3:row4:col3 | — | not captured |
| t1/2α [h] | `Q59` · t1/2α | 57.7 | h | 207720.0 | [h] | not captured | llm_confirmed (0.6) | Odongo_2015_table_3:row5:col1, Odongo_2015_table_3:row5:col2, Odongo_2015_table_3:row5:col3, Odongo_2015_table_3:row13:col1, Odongo_2015_table_3:row13:col2, Odongo_2015_table_3:row13:col3 | — | not captured |
| t1/2β [h] | `Q60` · t1/2β | 253.8 | h | 913680.0 | [h] | not captured | llm_confirmed (0.6) | Odongo_2015_table_3:row6:col1, Odongo_2015_table_3:row6:col2, Odongo_2015_table_3:row6:col3, Odongo_2015_table_3:row14:col1, Odongo_2015_table_3:row14:col2, Odongo_2015_table_3:row14:col3 | — | not captured |
| V3/F [L] | `Q78` · V3/F | 60.2 | L | 0.060200000000000004 | [l] | not captured | llm_confirmed (0.6) | Odongo_2015_table_3:row12:col1, Odongo_2015_table_3:row12:col2, Odongo_2015_table_3:row12:col3 | — | not captured |
| AUCinf [ng-h/L] | `Q17` · AUC∞ | 87.4 | ng·h/L | not captured | ng·h/L | not captured | llm_confirmed (0.6) | Odongo_2015_table_3:row15:col1, Odongo_2015_table_3:row15:col2, Odongo_2015_table_3:row15:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'KA [h]' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- implicit units: 'AUCinf [ng-h/L]' → ng·h/L (from the paper text: "The parameter line in the input 'AUCinf [ng-h/L] = 87.4' explicitly provides the unit in square brackets.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pyrimethamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Odongo_2015_table_2: unbound_uncertainty
- final table Tab2: no supported point estimates; targeted recovery unresolved
- table Odongo_2015_table_3: ambiguous_numeric_format
- table Odongo_2015_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (55 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.824 (14/17 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q22_age_power]` | not captured | 0.016 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_age_power]` | 0.016 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulphadoxine-pyrimethamine | pyrimethamine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Odongo_2015_table_3:row15:col1', 'Odongo_2015_table_3:row15:col2', 'Odongo_2015_table_3:row15:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Odongo_2015_table_3:row2:col1', 'Odongo_2015_table_3:row2:col2', 'Odongo_2015_table_3:row2:col3', 'Odongo_2015_table_3:row10:col1', 'Odongo_2015_table_3:row10:col2', 'Odongo_2015_table_3:row10:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Odongo_2015_table_3:row4:col1', 'Odongo_2015_table_3:row4:col2', 'Odongo_2015_table_3:row4:col3'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['Odongo_2015_table_3:row1:col1', 'Odongo_2015_table_3:row1:col2', 'Odongo_2015_table_3:row1:col3', 'Odongo_2015_table_3:row9:col1', 'Odongo_2015_table_3:row9:col2', 'Odongo_2015_table_3:row9:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Odongo_2015_table_3:row5:col1', 'Odongo_2015_table_3:row5:col2', 'Odongo_2015_table_3:row5:col3', 'Odongo_2015_table_3:row13:col1', 'Odongo_2015_table_3:row13:col2', 'Odongo_2015_table_3:row13:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Odongo_2015_table_3:row6:col1', 'Odongo_2015_table_3:row6:col2', 'Odongo_2015_table_3:row6:col3', 'Odongo_2015_table_3:row14:col1', 'Odongo_2015_table_3:row14:col2', 'Odongo_2015_table_3:row14:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Odongo_2015_table_3:row12:col1', 'Odongo_2015_table_3:row12:col2', 'Odongo_2015_table_3:row12:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Odongo_2015_table_3:row3:col1', 'Odongo_2015_table_3:row3:col2', 'Odongo_2015_table_3:row3:col3', 'Odongo_2015_table_3:row11:col1', 'Odongo_2015_table_3:row11:col2', 'Odongo_2015_table_3:row11:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.94 L/h | not captured | not captured | ['Odongo_2015_table_3:row2:col1', 'Odongo_2015_table_3:row2:col2', 'Odongo_2015_table_3:row2:col3', 'Odongo_2015_table_3:row10:col1', 'Odongo_2015_table_3:row10:col2', 'Odongo_2015_table_3:row10:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 172 L | not captured | not captured | ['Odongo_2015_table_3:row3:col1', 'Odongo_2015_table_3:row3:col2', 'Odongo_2015_table_3:row3:col3', 'Odongo_2015_table_3:row11:col1', 'Odongo_2015_table_3:row11:col2', 'Odongo_2015_table_3:row11:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_pyrimethamine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Odongo_2015` / `Odongo_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:16 UTC</sub>
