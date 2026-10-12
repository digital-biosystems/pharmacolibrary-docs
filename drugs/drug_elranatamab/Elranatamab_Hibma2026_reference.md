<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;elranatamab&quot;,&quot;href&quot;:&quot;drugs/drug_elranatamab/&quot;},{&quot;label&quot;:&quot;Hibma_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# elranatamab — `Elranatamab_Hibma2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.704). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because elranatamab’s target-binding dissociation constant, KD, was reported as 3.138 nM, leaving a dimensional mismatch.**

The record reports KD as 3.138 nM and defines it as the equilibrium dissociation constant for drug-target binding. The nM unit could not be converted to SI, so KD had no SI value when its dimension was assessed. Extracted — sBCMA: CL 0.324 L/day, V1 4.78 L, V2 2.83 L, Q 0.225 L/day, Fab 0.562, kabs 0.287 day–1, KD 3.14 nM.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has elranatamab, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Hibma JE et al., Elranatamab Population Pharmacokinetics…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-026-01663-z](https://doi.org/10.1007/s40262-026-01663-z)

## Model component
<dbs-pgx drug="elranatamab" model-id="Elranatamab_Hibma2026_reference" status="rejected" stale="false" population="patients with relapsed or refractory multiple myeloma" measured-compound="elranatamab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLelranatamab (L/day) | `Q22` · CL | 0.324 | L/day | 3.7500000000000005e-09 | [l] / [d] | 9.114 | llm (0.6) | Tab2:row1:col1, Tab2:row1:col2 | — | not captured |
| Vc,elranatamab (L) | `Q63` · V1 | 4.777 | L | 0.004777 | [l] | 5.745 | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2 | — | not captured |
| Vp,elranatamab (L) | `Q64` · V2 | 2.83 | L | 0.00283 | [l] | 1.766 | llm_confirmed (0.6) | Tab2:row8:col1, Tab2:row8:col2 | — | not captured |
| Q (L/day) | `Q30` · Q | 0.225 | L/day | 2.604166666666667e-09 | [l] / [d] | 1.933 | exact (1.0) | Tab2:row9:col1, Tab2:row9:col2 | — | not captured |
| F | `Q40` · Fab | 0.562 | not captured | not captured | not captured | 0.564 | exact (1.0) | Tab2:row10:col1, Tab2:row10:col2 | — | not captured |
| ka (day–1) | `Q49` · kabs | 0.287 | day–1 | 3.321759259259259e-06 | [1] / [d] | 4.432 | exact (1.0) | Tab2:row11:col1, Tab2:row11:col2 | — | not captured |
| Kd (nM) | `Q331` · KD | 3.138 | nM | not captured | [nM] | 3.312 | exact (1.0) | Tab2:row12:col1, Tab2:row12:col2 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | -0.492 | not captured | not captured | not captured | 12.533 | not captured (not captured) | Tab2:row17:col1, Tab2:row17:col2 | — | not captured |
| theta_kabs_age | `Q900` · theta_kabs_age | -1.459 | not captured | not captured | not captured | 20.025 | not captured (not captured) | Tab2:row19:col1, Tab2:row19:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CLelranatamab (%)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on Vc,elranatamab (%)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on Vc,sBCMA (%)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on CLsBCMA (%)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on CLcomplex (%)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on Vc,complex (%)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on θ BLsBCMA (%)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on ka (%)' routed out of structural estimates ('IIV on F (%)')
- table section iiv: 'Condition number' routed out of structural estimates ('IIV on Kd (%)')
- dropped duplicate Q63 ('Vc,sBCMA (L)', value '15.418') — already have one for this compound
- dropped duplicate Q22 ('CLsBCMA (L/day)', value '0.273') — already have one for this compound
- dropped duplicate Q22 ('CLcomplex (L/day)', value '0.164') — already have one for this compound
- dropped duplicate Q63 ('Vc,complex (L)', value '3.802') — already have one for this compound
- dropped unlinked row (NIL): 'BLsBCMA (nM)' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1', 'Tab2:row7:col2'])
- unit_dimension_mismatch: 'Kd (nM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q63 ('BWT on Vc,elranatamab', value '1.017') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=elranatamab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'elranatamab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col4 = '(0.266; 0.382)'
- unparsed cell Tab2:row2:col4 = '(4.239; 5.315)'
- unparsed cell Tab2:row3:col4 = '(12.123; 18.713)'
- unparsed cell Tab2:row4:col4 = '(0.161; 0.386)'
- unparsed cell Tab2:row5:col4 = '(0.134; 0.193)'
- unparsed cell Tab2:row6:col4 = '(3.441; 4.164)'
- unparsed cell Tab2:row7:col4 = '(5.858; 7.970)'
- unparsed cell Tab2:row8:col4 = '(2.732; 2.928)'
- unparsed cell Tab2:row9:col4 = '(0.217; 0.234)'
- unparsed cell Tab2:row10:col4 = '(0.556; 0.568)'
- unparsed cell Tab2:row11:col4 = '(0.262; 0.311)'
- unparsed cell Tab2:row12:col4 = '(2.934; 3.342)'
- unparsed cell Tab2:row13:col4 = '(0.397; 0.447)'
- unparsed cell Tab2:row14:col4 = '(0.320; 0.375)'
- unparsed cell Tab2:row15:col4 = '(0.330; 0.365)'
- unparsed cell Tab2:row16:col4 = '(0.482; 0.553)'
- unparsed cell Tab2:row17:col4 = '(−0.613; −0.371)'
- unparsed cell Tab2:row18:col4 = '(0.571; 1.462)'
- unparsed cell Tab2:row19:col4 = '(2.031; −0.886)'
- unparsed cell Tab2:row21:col4 = '(24.08; 143.6)'
- unparsed cell Tab2:row22:col4 = '(58.91; 77.01)'
- unparsed cell Tab2:row23:col4 = '(83.25; 173.38)'
- unparsed cell Tab2:row24:col4 = '(372.8; 512.41)'
- unparsed cell Tab2:row25:col4 = '(62.45; 93.01)'
- unparsed cell Tab2:row26:col4 = '(57.01; 81.06)'
- unparsed cell Tab2:row27:col4 = '(116.1; 150.9)'
- unparsed cell Tab2:row31:col4 = '(57.88; 77.59)'
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
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 22.0 | 20.685 | 0.9402 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row9:col1', 'Tab2:row9:col2'] |
| C5_dimension_Q331 | fail | [length] | nM | not captured | not captured | ['Tab2:row12:col1', 'Tab2:row12:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.324 | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0135 L/h | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.78 L | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.83 L | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_elranatamab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hibma_2026` / `Hibma_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:33 UTC</sub>
