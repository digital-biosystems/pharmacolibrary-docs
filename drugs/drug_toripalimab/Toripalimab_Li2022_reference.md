<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;toripalimab&quot;,&quot;href&quot;:&quot;drugs/drug_toripalimab/&quot;},{&quot;label&quot;:&quot;Li_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# toripalimab — `Toripalimab_Li2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The peripheral compartment is structurally disconnected from the central compartment, rendering the two-compartment model invalid for toripalimab.**

The record defines a two-compartment structure with central volume V1 of 3707 mL and peripheral volume V2 of 866 mL. However, the review identified the peripheral compartment as unreachable from the dose site. This structural flaw means the peripheral volume has no kinetic path from the administered drug, invalidating the model. Extracted — toripalimab: CL 14.8 mL/h, CLR 0.229, V1 3.71e+03 mL, V2 866 mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clada: this record has 0.192, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022)
  ·  DOI: [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818)

<div class="pk-model-meta" hidden drug="toripalimab" model-id="Toripalimab_Li2022_reference" status="rejected" stale="false" population="patients with cancer" measured-compound="toripalimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLTV (mL/h) | `Q22` · CL | 14.8 | mL/h | 4.111111111111111e-09 | [ml] / [h] | 2 | llm (0.6) | T1:row4:col1, T1:row4:col2, T1:row4:col5 | — | 31 (5% RSE) |
| CLADA | `Q900` · equation variable | 0.192 | not captured | not captured | not captured | 24 | llm (0.6) | T1:row5:col1, T1:row5:col2, T1:row5:col5 | — | not captured |
| CLCRCL | `Q26` · CLR | 0.229 | not captured | not captured | not captured | 17 | llm (0.6) | T1:row10:col1, T1:row10:col2, T1:row10:col5 | — | not captured |
| V1 (mL) | `Q63` · V1 | 3707 | mL | 0.003707 | [ml] | 3 | exact (1.0) | T1:row11:col1, T1:row11:col2, T1:row11:col5 | — | 27 (15% RSE) |
| V2TV (mL) | `Q64` · V2 | 866 | mL | 0.0008659999999999999 | [ml] | 16 | llm (0.6) | T1:row16:col1, T1:row16:col2, T1:row16:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual Error')
- dropped PD-category row 'EmaxTV' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row1:col1', 'T1:row1:col2', 'T1:row1:col5'])
- dropped unlinked row (NIL): 'T50 (h)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col1', 'T1:row2:col2', 'T1:row2:col5'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row3:col1', 'T1:row3:col2', 'T1:row3:col5'])
- dropped unlinked row (NIL): 'CLLDH' — extend the ontology if this is a real PK parameter (source ['T1:row6:col1', 'T1:row6:col2', 'T1:row6:col5'])
- dropped unlinked row (NIL): 'CLFemale' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1', 'T1:row7:col2', 'T1:row7:col5'])
- dropped unlinked row (NIL): 'CLAlbumin' — extend the ontology if this is a real PK parameter (source ['T1:row8:col1', 'T1:row8:col2', 'T1:row8:col5'])
- dropped unlinked row (NIL): 'CLWeight' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1', 'T1:row9:col2', 'T1:row9:col5'])
- dropped duplicate Q63 ('V1White Race', value '-0.23') — already have one for this compound
- dropped duplicate Q900 ('V1Other Race', value '-0.33') — already have one for this compound
- dropped duplicate Q63 ('V1Weight', value '0.5') — already have one for this compound
- dropped duplicate Q22 ('QTV (mL/h)', value '30') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=toripalimab
- molar mass: none found for 'toripalimab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell T1:row1:col3 = '(−0.54, −0.35)'
- unparsed cell T1:row1:col6 = '(−0.54, −0.35)'
- unparsed cell T1:row2:col3 = '(1,051, 2,104)'
- unparsed cell T1:row2:col6 = '(1,237, 3,000)'
- unparsed cell T1:row3:col3 = '(0.97, 1.68)'
- unparsed cell T1:row3:col6 = '(0.98, 1.72)'
- unparsed cell T1:row4:col3 = '(14.2, 15.6)'
- unparsed cell T1:row4:col6 = '(14, 15.6)'
- unparsed cell T1:row5:col3 = '(0.102, 0.280)'
- unparsed cell T1:row5:col6 = '(0.109, 0.29)'
- unparsed cell T1:row6:col3 = '(0.12, 0.20)'
- unparsed cell T1:row6:col6 = '(0.12, 0.20)'
- unparsed cell T1:row7:col3 = '(−0.23, −0.15)'
- unparsed cell T1:row7:col6 = '(−0.2, −0.15)'
- unparsed cell T1:row8:col3 = '(−0.87, −0.49)'
- unparsed cell T1:row8:col6 = '(−0.89, −0.50)'
- unparsed cell T1:row9:col3 = '(−.026, −0.22)'
- unparsed cell T1:row9:col6 = '(−0.27, 0.23)'
- unparsed cell T1:row10:col3 = '(0.15, 0.30)'
- unparsed cell T1:row10:col6 = '(0.14,0.30)'
- unparsed cell T1:row11:col3 = '(3,511, 3,899)'
- unparsed cell T1:row11:col6 = '(3541,3868)'
- unparsed cell T1:row12:col3 = '(−0.29, −0.17)'
- unparsed cell T1:row12:col6 = '(−0.29, −0.17)'
- unparsed cell T1:row13:col3 = '(−0.39, −0.26)'
- unparsed cell T1:row13:col6 = '(−0.38, −0.25)'
- unparsed cell T1:row14:col3 = '(0.31, 0.66)'
- unparsed cell T1:row14:col6 = '(−0.32, −0.66)'
- unparsed cell T1:row15:col3 = '(−16.05, 89.01)'
- unparsed cell T1:row15:col6 = '(11.2, 85.4)'
- unparsed cell T1:row16:col3 = '(549, 1,042)'
- unparsed cell T1:row16:col6 = '(586, 1,158)'
- unparsed cell T1:row18:col3 = '(0.080, 0.22)'
- unparsed cell T1:row18:col5 = '15.50%'
- unparsed cell T1:row18:col6 = '(0.10, 0.28)'
- unparsed cell T1:row19:col3 = '(0.075, 0.111)'
- unparsed cell T1:row19:col5 = '9.50%'
- unparsed cell T1:row19:col6 = '(0.79, 0.115)'
- unparsed cell T1:row20:col3 = '(0.031, 0.118)'
- unparsed cell T1:row20:col5 = '6.70%'
- unparsed cell T1:row20:col6 = '(0.44, 0.116)'
- unparsed cell T1:row21:col3 = '(0.018, 0.047)'
- unparsed cell T1:row21:col5 = '3.20%'
- unparsed cell T1:row21:col6 = '(0.20, 0.047)'
- unparsed cell T1:row23:col3 = '(0.0308, 0.0423)'
- unparsed cell T1:row23:col6 = '(-0.54, -0.35)'
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clada]` | 0.192 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clcrcl]` | 0.229 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qtv]` | not captured | 30 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row4:col1', 'T1:row4:col2', 'T1:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row11:col1', 'T1:row11:col2', 'T1:row11:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row16:col1', 'T1:row16:col2', 'T1:row16:col5'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row10:col1', 'T1:row10:col2', 'T1:row10:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.8 | not captured | not captured | ['T1:row4:col1', 'T1:row4:col2', 'T1:row4:col5'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0148 L/h | not captured | not captured | ['T1:row4:col1', 'T1:row4:col2', 'T1:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.71 L | not captured | not captured | ['T1:row11:col1', 'T1:row11:col2', 'T1:row11:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.866 L | not captured | not captured | ['T1:row16:col1', 'T1:row16:col2', 'T1:row16:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_toripalimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2022` / `Li_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:18 UTC</sub>
