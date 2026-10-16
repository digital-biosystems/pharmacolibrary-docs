<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nebivolol&quot;,&quot;href&quot;:&quot;drugs/drug_nebivolol/&quot;},{&quot;label&quot;:&quot;Marques_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nebivolol — `Nebivolol_Marques2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875), gpt-oss:120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Cmax, AUC and kel), so that value has no SI equivalent. Extracted — nebivolol: tlag 0.3 h, kabs 2.06 1/h, CL 0.22 L/h, V1 4.21 L, Q 0.59 L/h, V2 7.12 L, Cmax 8.02 ng·mL−1, AUC 41.5 ng·h·mL−1, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nebivolol, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Marques L et al., New Data for Nebivolol after In Silico…, Pharmaceutics (2022)
  ·  DOI: [10.3390/pharmaceutics14091911](https://doi.org/10.3390/pharmaceutics14091911)

<div class="pk-model-meta" hidden drug="nebivolol" model-id="Nebivolol_Marques2022_reference" status="rejected" stale="false" population="young and healthy individuals" measured-compound="nebivolol" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag pop | `Q83` · tlag | 0.30 | h | 1080.0 | h | 10.8 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row1:col1 | — | not captured |
| Ka pop | `Q49` · kabs | 2.06 | 1/h | 0.0005722222222222222 | 1/h | 10.4 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row2:col1 | — | not captured |
| Cl pop | `Q22` · CL | 0.22 | L/h | 6.111111111111111e-08 | L/h | 36.7 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row3:col1 | — | not captured |
| V1 pop | `Q63` · V1 | 4.21 | L | 0.00421 | L | 4.96 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row4:col1 | — | not captured |
| Q pop | `Q30` · Q | 0.59 | L/h | 1.638888888888889e-07 | L/h | 5.73 | llm (0.6) | pharmaceutics-14-01911-t005:row5:col1 | — | not captured |
| V2 pop | `Q64` · V2 | 7.12 | L | 0.0071200000000000005 | L | 11.2 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row6:col1 | — | not captured |
| Cmax (ng·mL−1) | `Q32` · Cmax | 8.02 | ng·mL−1 | not captured | [ng] / [ml] | 3.47 | exact (1.0) | Marques_2022_table_4:row1:col1, Marques_2022_table_4:row7:col1, Marques_2022_table_4:row13:col1 | — | not captured |
| AUC (ng·h·mL−1) | `Q88` · AUC | 41.50 | ng·h·mL−1 | not captured | [[h] · [ng]] / [ml] | 0.67 | exact (1.0) | Marques_2022_table_4:row2:col1, Marques_2022_table_4:row8:col1, Marques_2022_table_4:row14:col1 | — | not captured |
| Tmax (h) | `Q56` · tmax | 1.32 | h | 4752.0 | [h] | 29.76 | exact (1.0) | Marques_2022_table_4:row3:col1, Marques_2022_table_4:row9:col1, Marques_2022_table_4:row15:col1 | — | not captured |
| Kel (L/h) | `Q47` · kel | 2.72 | L/h | not captured | [l] / [h] | not captured | exact (1.0) | Marques_2022_table_4:row4:col1, Marques_2022_table_4:row10:col1 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 11.03 | h | 39708.0 | [h] | 2.12 | exact (1.0) | Marques_2022_table_4:row5:col1, Marques_2022_table_4:row11:col1, Marques_2022_table_4:row17:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01911-t005:row8:col1'])
- unit_dimension_mismatch: 'Kel (L/h)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- implicit units: 'Tlag pop' → h (from the popPK convention: 'No unit explicitly stated in the provided text or table caption for Tlag. By convention, lag time (Tlag) in population P')
- implicit units: 'Ka pop' → 1/h (from the popPK convention: 'No unit explicitly stated in the provided text or table caption for Ka. By convention, first-order absorption rate const')
- implicit units: 'Cl pop' → L/h (from the popPK convention: 'No unit explicitly stated in the provided text or table caption for Cl. By convention, total clearance (CL) in populatio')
- implicit units: 'V1 pop' → L (from the popPK convention: 'No unit explicitly stated in the provided text or table caption for V1. By convention, volume of distribution (Vd) param')
- implicit units: 'Q pop' → L/h (from the popPK convention: 'No unit explicitly stated in the provided text or table caption for Q. By convention, intercompartmental clearance (Q) i')
- implicit units: 'V2 pop' → L (from the popPK convention: 'No unit explicitly stated in the provided text or table caption for V2. By convention, volume of distribution (Vd) param')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl pop); Q63 (V1 pop); Q30 (Q pop); Q64 (V2 pop)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nebivolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- table pharmaceutics-14-01911-t005: units_need_context
- table Marques_2022_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (23 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |
| `gpt-oss:120b` | partly confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | nebivolol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nebivolol | unknown | mismatch |
| `gpt-oss:120b` | `parameters[b]` | not captured | 0.13 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Marques_2022_table_4:row1:col1', 'Marques_2022_table_4:row7:col1', 'Marques_2022_table_4:row13:col1'] |
| C5_dimension_Q47 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['Marques_2022_table_4:row4:col1', 'Marques_2022_table_4:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row2:col1'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Marques_2022_table_4:row3:col1', 'Marques_2022_table_4:row9:col1', 'Marques_2022_table_4:row15:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Marques_2022_table_4:row5:col1', 'Marques_2022_table_4:row11:col1', 'Marques_2022_table_4:row17:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row6:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row1:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Marques_2022_table_4:row2:col1', 'Marques_2022_table_4:row8:col1', 'Marques_2022_table_4:row14:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.22 | not captured | not captured | ['pharmaceutics-14-01911-t005:row3:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.22 L/h | not captured | not captured | ['pharmaceutics-14-01911-t005:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.21 L | not captured | not captured | ['pharmaceutics-14-01911-t005:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.12 L | not captured | not captured | ['pharmaceutics-14-01911-t005:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nebivolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Marques_2022` / `Marques_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:32 UTC</sub>
