<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cemiplimab&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/&quot;},{&quot;label&quot;:&quot;Nguyen_2022 \u00b7 final_poppk_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cemiplimab_Nguyen2022_tumor_type_study_a&quot;,&quot;label&quot;:&quot;Nguyen_2022_tumor_type_study_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cemiplimab — `Cemiplimab_Nguyen2022_final_poppk_model`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.643). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — cemiplimab: Q 0.652 L/day, V1 3.35 L, V2 2.52 L, CL -0.137, CL_ratio -1.11.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of clbcc: this record has none, the second reading -0.211; it also differs on 4 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Nguyen JH et al., Population pharmacokinetics modeling an…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12855](https://doi.org/10.1002/psp4.12855)

<div class="pk-model-meta" hidden drug="cemiplimab" model-id="Cemiplimab_Nguyen2022_final_poppk_model" status="rejected" stale="false" population="adults with solid tumors (CSCC, BCC, NSCLC, R/M CC)" measured-compound="cemiplimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL0, L/day | `Q900` · equation variable | 0.254 | L/day | not captured | [l] / [d] | not captured | llm (0.6) | psp412855-tbl-0001:row3:col1, psp412855-tbl-0001:row3:col2, psp412855-tbl-0001:row3:col3 | — | not captured |
| TVQ, L/day | `Q30` · Q | 0.652 | L/day | 7.546296296296296e-09 | [l] / [d] | not captured | tv_prefix (0.95) | psp412855-tbl-0001:row4:col1, psp412855-tbl-0001:row4:col2, psp412855-tbl-0001:row4:col3 | — | not captured |
| TVV1, L | `Q63` · V1 | 3.35 | L | 0.00335 | [l] | not captured | tv_prefix (0.95) | psp412855-tbl-0001:row5:col1, psp412855-tbl-0001:row5:col2, psp412855-tbl-0001:row5:col3 | — | not captured |
| TVV2, L | `Q64` · V2 | 2.52 | L | 0.00252 | [l] | not captured | tv_prefix (0.95) | psp412855-tbl-0001:row6:col1, psp412855-tbl-0001:row6:col2, psp412855-tbl-0001:row6:col3 | — | not captured |
| CLSEX | `Q22` · CL | -0.137 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp412855-tbl-0001:row12:col1, psp412855-tbl-0001:row12:col2, psp412855-tbl-0001:row12:col3 | — | not captured |
| CLALB | `Q31` · CL_ratio | -1.11 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | psp412855-tbl-0001:row15:col1, psp412855-tbl-0001:row15:col2, psp412855-tbl-0001:row15:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'RE' routed out of structural estimates ('Residual variability')
- table section iiv: 'ETA1 – CL_Q' routed out of structural estimates ('IIV')
- table section iiv: 'ETA2 – V1_V2' routed out of structural estimates ('IIV')
- table representations disagree for 'TVCL0, L/day'; source reconciliation required
- table representations disagree for 'TVQ, L/day'; source reconciliation required
- table representations disagree for 'TVV1, L'; source reconciliation required
- table representations disagree for 'TVV2, L'; source reconciliation required
- table representations disagree for 'TVEmax'; source reconciliation required
- table representations disagree for 'TVT50, days'; source reconciliation required
- table representations disagree for 'HILL'; source reconciliation required
- table representations disagree for 'CLWGTBL'; source reconciliation required
- table representations disagree for 'VssWGTBL'; source reconciliation required
- table representations disagree for 'CLSEX'; source reconciliation required
- table representations disagree for 'V1SEX'; source reconciliation required
- table representations disagree for 'V1ALBBL'; source reconciliation required
- table representations disagree for 'CLALB'; source reconciliation required
- table representations disagree for 'CLALTBL'; source reconciliation required
- table representations disagree for 'CLCSCC'; source reconciliation required
- table representations disagree for 'CLBCC'; source reconciliation required
- table representations disagree for 'EmaxBCC'; source reconciliation required
- table representations disagree for 'T50OTHER'; source reconciliation required
- dropped PD-category row 'TVEmax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row7:col1', 'psp412855-tbl-0001:row7:col2', 'psp412855-tbl-0001:row7:col3'])
- dropped PD-category row 'TVT50, days' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row8:col1', 'psp412855-tbl-0001:row8:col2', 'psp412855-tbl-0001:row8:col3'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row9:col1'])
- dropped unlinked row (NIL): 'CLWGTBL' — extend the ontology if this is a real PK parameter (source ['psp412855-tbl-0001:row10:col1', 'psp412855-tbl-0001:row10:col2', 'psp412855-tbl-0001:row10:col3'])
- dropped duplicate Q900 ('VssWGTBL', value '0.499') — already have one for this compound
- dropped unlinked row (NIL): 'V1SEX' — extend the ontology if this is a real PK parameter (source ['psp412855-tbl-0001:row13:col1', 'psp412855-tbl-0001:row13:col2', 'psp412855-tbl-0001:row13:col3'])
- dropped unlinked row (NIL): 'V1ALBBL' — extend the ontology if this is a real PK parameter (source ['psp412855-tbl-0001:row14:col1', 'psp412855-tbl-0001:row14:col2', 'psp412855-tbl-0001:row14:col3'])
- dropped unlinked row (NIL): 'CLALTBL' — extend the ontology if this is a real PK parameter (source ['psp412855-tbl-0001:row16:col1', 'psp412855-tbl-0001:row16:col2', 'psp412855-tbl-0001:row16:col3'])
- dropped duplicate Q22 ('CLCSCC', value '-0.216') — already have one for this compound
- dropped duplicate Q22 ('CLBCC', value '-0.211') — already have one for this compound
- dropped unlinked row (NIL): 'EmaxBCC' — extend the ontology if this is a real PK parameter (source ['psp412855-tbl-0001:row19:col1', 'psp412855-tbl-0001:row19:col2', 'psp412855-tbl-0001:row19:col3'])
- dropped PD-category row 'T50OTHER' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row20:col1', 'psp412855-tbl-0001:row20:col2', 'psp412855-tbl-0001:row20:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cemiplimab
- status held at route_to_review — not promoted
- population split: 'final poppk model' subgroup of Nguyen_2022 (paper reports 2 populations: final poppk model, tumor type (study) a)
- molar mass: none found for 'cemiplimab' — its concentrations stay mass-only

**Extraction notes:**
- table psp412855-tbl-0001: ragged_grid
- table psp412855-tbl-0001: unparsed_numeric_cell
- table psp412855-tbl-0001: representations disagree; selected evidence retained, not merged
- table Nguyen_2022_table_2: ragged_grid
- companion parameter table 2 transcribed (120 record(s), model stage 'final')
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.643 (9/14 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[clbcc]` | not captured | -0.211 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clwgtbl]` | not captured | 0.539 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t50other]` | not captured | -0.491 | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvt50]` | 73.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1albbl]` | not captured | -0.217 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q22 | fail | not captured | -0.137 | not captured | not captured | not captured |
| C2_base_sign_Q31 | fail | not captured | -1.11 | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412855-tbl-0001:row4:col1', 'psp412855-tbl-0001:row4:col2', 'psp412855-tbl-0001:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412855-tbl-0001:row5:col1', 'psp412855-tbl-0001:row5:col2', 'psp412855-tbl-0001:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412855-tbl-0001:row6:col1', 'psp412855-tbl-0001:row6:col2', 'psp412855-tbl-0001:row6:col3'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412855-tbl-0001:row12:col1', 'psp412855-tbl-0001:row12:col2', 'psp412855-tbl-0001:row12:col3'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412855-tbl-0001:row15:col1', 'psp412855-tbl-0001:row15:col2', 'psp412855-tbl-0001:row15:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | -0.137 | not captured | not captured | ['psp412855-tbl-0001:row12:col1', 'psp412855-tbl-0001:row12:col2', 'psp412855-tbl-0001:row12:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.35 L | not captured | not captured | ['psp412855-tbl-0001:row5:col1', 'psp412855-tbl-0001:row5:col2', 'psp412855-tbl-0001:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.52 L | not captured | not captured | ['psp412855-tbl-0001:row6:col1', 'psp412855-tbl-0001:row6:col2', 'psp412855-tbl-0001:row6:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cemiplimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nguyen_2022` / `Nguyen_2022::final_poppk_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:35 UTC</sub>
