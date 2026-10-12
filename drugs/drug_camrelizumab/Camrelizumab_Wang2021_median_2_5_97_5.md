<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;camrelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_camrelizumab/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 median_2_5_97_5&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# camrelizumab — `Camrelizumab_Wang2021_median_2_5_97_5`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax, Cmin and Cavg), so that value has no SI equivalent.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Wang CY et al., Population pharmacokinetics of the anti…, Acta pharmacologica Sinica (2021)
  ·  DOI: [10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y)

<div class="pk-model-meta" hidden drug="camrelizumab" model-id="Camrelizumab_Wang2021_median_2_5_97_5" status="rejected" stale="false" population="patients with melanoma, advanced solid tumors, or relapsed/refractory classical Hodgkin lymphoma" measured-compound="camrelizumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max,ss (mg/L) | `Q32` · Cmax | 89.55 | mg/L | not captured | [mg] / [l] | not captured | llm (0.6) | Wang_2021_table_4:row0:col1, Wang_2021_table_4:row0:col3 | — | not captured |
| C min,ss (mg/L) | `Q36` · Cmin | 23.11 | mg/L | not captured | [mg] / [l] | not captured | llm (0.6) | Wang_2021_table_4:row1:col1, Wang_2021_table_4:row1:col2, Wang_2021_table_4:row1:col3, Wang_2021_table_4:row1:col4 | — | not captured |
| C average,ss (mg/L) a 41.27 | `Q71` · Cavg | 15.28 | mg/L | not captured | mg/L | not captured | llm (0.6) | Wang_2021_table_4:row2:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL linear (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'V m (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'V 1 (%)' routed out of structural estimates ('Between-subject variability')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (mg/L)' routed out of structural estimates ('Residual variability')
- implicit units: 'C average,ss (mg/L) a 41.27' → mg/L (from the paper text: 'The parameter is labeled “C average,ss (mg/L)”.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=camrelizumab
- population split: 'median 2.5%-97.5%' subgroup of Wang_2021 (paper reports 3 populations: base model, final model, median 2.5%-97.5%)
- molar mass: none found for 'camrelizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell tab_2:row3:col5 = '0.23 (0.20-0.26)'
- unparsed cell tab_2:row4:col5 = '-1.93 (-2.94 to -0.89)'
- unparsed cell tab_2:row5:col5 = '3.00 (2.26-3.71)'
- unparsed cell tab_2:row6:col5 = '1.40 (0.91-2.76)'
- unparsed cell tab_2:row7:col5 = '3.08 (2.77-3.33)'
- unparsed cell tab_2:row8:col5 = '0.41 (0.34-0.51)'
- unparsed cell tab_2:row9:col5 = '1.18 (0.31-2.28)'
- unparsed cell tab_2:row10:col5 = '2.91 (2.35-3.35)'
- unparsed cell tab_2:row12:col5 = '50.2 (32.7-68.9)'
- unparsed cell tab_2:row13:col5 = '47.8 (29.4-70.9)'
- unparsed cell tab_2:row14:col5 = '39.0 (17.0-70.68)'
- unparsed cell tab_2:row16:col5 = '28.9 (23.8-33.9)'
- unparsed cell tab_2:row17:col5 = '0.0823 (0.0293-0.112)'
- unparsed cell Wang_2021_table_4:row0:col2 = '39.27-195.41 96.40'
- unparsed cell Wang_2021_table_4:row2:col1 = '12.81-113.87 45.48'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Wang_2021_table_4:row0:col1', 'Wang_2021_table_4:row0:col3'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Wang_2021_table_4:row1:col1', 'Wang_2021_table_4:row1:col2', 'Wang_2021_table_4:row1:col3', 'Wang_2021_table_4:row1:col4'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Wang_2021_table_4:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_camrelizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2021` / `Wang_2021::median_2_5_97_5`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:48 UTC</sub>
