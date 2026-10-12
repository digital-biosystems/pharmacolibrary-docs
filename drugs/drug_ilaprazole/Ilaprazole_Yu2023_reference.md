<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;ilaprazole&quot;,&quot;href&quot;:&quot;drugs/drug_ilaprazole/&quot;},{&quot;label&quot;:&quot;Yu_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ilaprazole — `Ilaprazole_Yu2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The ilaprazole two-compartment model was rejected because the peripheral compartment (volume 5.544 L) has no linked intercompartmental clearance, leaving it unreachable from the dose.**

The record describes a two-compartment structure for ilaprazole with central volume 6.795 L, peripheral volume 5.544 L, and clearance 3.394 L/h, plus covariate effects of weight on peripheral volume (1.545) and sex on clearance (-0.213). However, no intercompartmental clearance (Q) parameter was extracted, so the peripheral compartment has no connection to the central compartment and no path from the administered dose. This orphan compartment made the model structurally incomplete and it was refused. Extracted — ilaprazole: V 6.79 L, V2 5.54 L, CL 3.39 L/h.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:22.544550+00:00) predates the upstream re-run (2026-10-07 19:29:51.665758+00:00). Current validate status: `rejected`.

## Citation
Yu M et al., Population pharmacokinetic modeling of…, Frontiers in pharmacology (2023)
  ·  DOI: [10.3389/fphar.2023.1306222](https://doi.org/10.3389/fphar.2023.1306222)

<div class="pk-model-meta" hidden drug="ilaprazole" model-id="Ilaprazole_Yu2023_reference" status="rejected" stale="true" population="healthy subjects and patients with duodenal ulcer" measured-compound="ilaprazole" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V (L) | `Q61` · V | 6.795 | L | 0.006795 | [l] | not captured | exact (1.0) | T3:row3:col1, T3:row3:col2, T3:row3:col3, T3:row3:col4, T3:row3:col5, T3:row3:col6 | — | not captured |
| Vp (L) | `Q64` · V2 | 5.544 | L | 0.0055439999999999994 | [l] | not captured | exact (1.0) | T3:row4:col1, T3:row4:col2, T3:row4:col3, T3:row4:col4, T3:row4:col5, T3:row4:col6 | — | 21.763 (None% RSE) |
| CL (L/h) | `Q22` · CL | 3.394 | L/h | 9.427777777777779e-07 | [l] / [h] | not captured | exact (1.0) | T3:row5:col1, T3:row5:col2, T3:row5:col3, T3:row5:col4, T3:row5:col5, T3:row5:col6 | — | 25.051 (None% RSE) |
| wt_effect_on_vp | `Q900` · wt_effect_on_vp | 1.545 | not captured | not captured | not captured | not captured | not captured (not captured) | T3:row9:col1, T3:row9:col2, T3:row9:col3, T3:row9:col4, T3:row9:col5, T3:row9:col6 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | -0.213 | not captured | not captured | not captured | not captured | not captured (not captured) | T3:row8:col1, T3:row8:col2, T3:row8:col3, T3:row8:col4, T3:row8:col5, T3:row8:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 V (shrinkage)' routed out of structural estimates ('inter-individual variability')
- table section iiv: 'ω2 Vp (shrinkage)' routed out of structural estimates ('inter-individual variability')
- table section iiv: 'ω2 CL (shrinkage)' routed out of structural estimates ('inter-individual variability')
- table section residual_error: 'σmult' routed out of structural estimates ('Residual variability')
- dropped duplicate Q22 ('CLp (L/h)', value '13.086') — already have one for this compound
- covariate level 'WT effect on Vp' → Q900:wt_effect_on_vp = 1.545 (linear_fractional on Q22)
- unit_dimension_unknown: 'Disease status = 1' (CL)
- dropped duplicate Q22 ('Disease status effect on CL (Disease status = 1)', value '0.290') — already have one for this compound
- unit_dimension_unknown: 'Disease status = 1' (V2)
- dropped duplicate Q64 ('Disease status effect on Vp (Disease status = 1)', value '0.356') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ilaprazole

**Extraction notes:**
- unparsed cell T3:row13:col1 = '0.013 (34.0%)'
- unparsed cell T3:row14:col1 = '0.032 (1.82%)'
- unparsed cell T3:row15:col1 = '0.059 (24.4%)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | pass | 3.394 | 3.394 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q61 | pass | 6.795 | 6.795 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q64 | pass | 5.544 | 5.544 | 1.0 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row5:col4', 'T3:row5:col5', 'T3:row5:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row3:col1', 'T3:row3:col2', 'T3:row3:col3', 'T3:row3:col4', 'T3:row3:col5', 'T3:row3:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row4:col1', 'T3:row4:col2', 'T3:row4:col3', 'T3:row4:col4', 'T3:row4:col5', 'T3:row4:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.394 | not captured | not captured | ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row5:col4', 'T3:row5:col5', 'T3:row5:col6'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.39 L/h | not captured | not captured | ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row5:col4', 'T3:row5:col5', 'T3:row5:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.79 L | not captured | not captured | ['T3:row3:col1', 'T3:row3:col2', 'T3:row3:col3', 'T3:row3:col4', 'T3:row3:col5', 'T3:row3:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.54 L | not captured | not captured | ['T3:row4:col1', 'T3:row4:col2', 'T3:row4:col3', 'T3:row4:col4', 'T3:row4:col5', 'T3:row4:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ilaprazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yu_2023` / `Yu_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:29 UTC</sub>
