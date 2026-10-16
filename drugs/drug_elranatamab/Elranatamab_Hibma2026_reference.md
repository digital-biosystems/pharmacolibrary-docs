<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;elranatamab&quot;,&quot;href&quot;:&quot;drugs/drug_elranatamab/&quot;},{&quot;label&quot;:&quot;Hibma_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# elranatamab — `Elranatamab_Hibma2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.704). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (KD), so that value has no SI equivalent. None of the extracted parameters is elranatamab's own; they describe sBCMA. Extracted — sBCMA: CL 0.324 L/day, V 4.78 L, Q 0.225 L/day, Fab 0.562, kabs 0.287 day–1, KD 3.14 nM.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has elranatamab, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Hibma JE et al., Elranatamab Population Pharmacokinetics…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-026-01663-z](https://doi.org/10.1007/s40262-026-01663-z)

<div class="pk-model-meta" hidden drug="elranatamab" model-id="Elranatamab_Hibma2026_reference" status="rejected" stale="false" population="adults with relapsed or refractory multiple myeloma" measured-compound="elranatamab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLelranatamab (L/day) | `Q22` · CL | 0.324 | L/day | 3.7500000000000005e-09 | [l] / [d] | 9.114 | llm (0.6) | Tab2:row1:col1 | — | not captured |
| Vc,elranatamab (L) | `Q61` · V | 4.777 | L | 0.004777 | [l] | 5.745 | llm_confirmed (0.6) | Tab2:row2:col1 | — | not captured |
| Q (L/day) | `Q30` · Q | 0.225 | L/day | 2.604166666666667e-09 | [l] / [d] | 1.933 | exact (1.0) | Tab2:row9:col1 | — | not captured |
| F | `Q40` · Fab | 0.562 | not captured | not captured | not captured | 0.564 | exact (1.0) | Tab2:row10:col1 | — | not captured |
| ka (day–1) | `Q49` · kabs | 0.287 | day–1 | 3.321759259259259e-06 | [1] / [d] | 4.432 | exact (1.0) | Tab2:row11:col1 | — | not captured |
| Kd (nM) | `Q331` · KD | 3.138 | nM | not captured | [nM] | 3.312 | exact (1.0) | Tab2:row12:col1 | — | not captured |
| sex_on_clelranatamab | `Q900` · sex_on_clelranatamab | -0.492 | not captured | not captured | not captured | 12.533 | not captured (not captured) | Tab2:row17:col1 | — | not captured |
| age_on_ka | `Q900` · age_on_ka | -1.459 | not captured | not captured | not captured | 20.025 | not captured (not captured) | Tab2:row19:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CLelranatamab (%)' routed out of structural estimates ('IIV CV (%) RSE (%) Shrinkage 95% CI')
- table section iiv: 'IIV on Vc,elranatamab (%)' routed out of structural estimates ('IIV CV (%) RSE (%) Shrinkage 95% CI')
- table section iiv: 'IIV on Vc,sBCMA (%)' routed out of structural estimates ('IIV CV (%) RSE (%) Shrinkage 95% CI')
- table section iiv: 'IIV on CLsBCMA (%)' routed out of structural estimates ('IIV CV (%) RSE (%) Shrinkage 95% CI')
- table section iiv: 'IIV on CLcomplex (%)' routed out of structural estimates ('IIV CV (%) RSE (%) Shrinkage 95% CI')
- table section iiv: 'IIV on Vc,complex (%)' routed out of structural estimates ('IIV CV (%) RSE (%) Shrinkage 95% CI')
- table section iiv: 'IIV on θ BLsBCMA (%)' routed out of structural estimates ('IIV CV (%) RSE (%) Shrinkage 95% CI')
- table section iiv: 'IIV on ka (%)' routed out of structural estimates ('IIV on F (%) 14.83# –')
- table section iiv: 'Condition number' routed out of structural estimates ('IIV on Kd (%) 14.83# –')
- dropped duplicate Q63 ('Vc,sBCMA (L)', value '15.418') — already have one for this compound
- dropped duplicate Q22 ('CLsBCMA (L/day)', value '0.273') — already have one for this compound
- dropped duplicate Q22 ('CLcomplex (L/day)', value '0.164') — already have one for this compound
- dropped duplicate Q63 ('Vc,complex (L)', value '3.802') — already have one for this compound
- dropped unlinked row (NIL): 'BLsBCMA (nM)' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1'])
- dropped unlinked row (NIL): 'Vp,elranatamab (L)' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1'])
- unit_dimension_mismatch: 'Kd (nM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- covariate level 'Sex on CLelranatamab' → Q900:sex_on_clelranatamab = -0.492 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'BWT on Vc,elranatamab' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col1'])
- covariate level 'Age on ka' → Q900:age_on_ka = -1.459 (linear_fractional on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=elranatamab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc,elranatamab (L)' is the general volume)
- status held at route_to_review — not promoted
- molar mass: none found for 'elranatamab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab2: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.704 (19/27 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[blsbcma]` | not captured | 6.914 | only_one_extracted |
| `qwen3.8-27b` | `parameters[sex_on_clelranatamab]` | not captured | -0.492 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_sex]` | -0.492 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc,elranatamab].parameter_id` | Q63 | Q61 | mismatch |
| `qwen3.8-27b` | `parameters[vc,sbcma]` | not captured | 15.418 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vp,elranatamab]` | 2.83 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | elranatamab | unknown | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | elranatamab | unknown | mismatch |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 22.0 | 10.22 | 0.4645 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row9:col1'] |
| C5_dimension_Q331 | fail | [length] | nM | not captured | not captured | ['Tab2:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row11:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.324 | not captured | not captured | ['Tab2:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0135 L/h | not captured | not captured | ['Tab2:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.78 L | not captured | not captured | ['Tab2:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_elranatamab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hibma_2026` / `Hibma_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 19:26 UTC</sub>
