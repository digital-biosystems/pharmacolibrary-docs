<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;moxifloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/&quot;},{&quot;label&quot;:&quot;Palmer_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxifloxacin_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxifloxacin_Nyangwa2026_reference&quot;,&quot;label&quot;:&quot;Nyangwa_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Nyangwa2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxifloxacin_Yun2022_reference&quot;,&quot;label&quot;:&quot;Yun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxifloxacin_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# moxifloxacin — `Moxifloxacin_Palmer2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The moxifloxacin model was quarantined because clearance, volume of distribution, absorption rate constant, absorption lag time and both intercompartmental rate constants had no source values and library placeholders were used instead.**

Although the paper reports apparent parameters for moxifloxacin (CL/F 6.90 L/h, V1/F 61.1 L, Q/F 0.860 L/h, V2/F 44.5 L, MAT 1.01 h), the model's clearance, volume of distribution, absorption rate constant, absorption lag time, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The builder also assumed F=1 and Fm=1 without molar correction, giving an apparent (/F) parameterization, and used first-order depot input consistent with extravascular dosing. The absorption rate constant was defaulted because it was not reported in the source, and this invented absorption was judged not acceptable; the deviations check could not compute a comparison (ratio None). Extracted — moxifloxacin: CL/F 6.9, V1/F 61.1, Q/F 0.86, V2/F 44.5, MAT 1.01 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[vc/f (l) a].parameter_id`: this record has Q76, the second reading Q290; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:39:06.024196+00:00) predates the upstream re-run (2026-10-07 12:29:35.747563+00:00). Current validate status: `rejected`.

## Citation
Palmer M et al., Population pharmacokinetics and dosing…, British journal of clinical… (2025)
  ·  DOI: [10.1111/bcp.70005](https://doi.org/10.1111/bcp.70005)

## Model component
<dbs-pgx drug="moxifloxacin" model-id="Moxifloxacin_Palmer2025_reference" status="rejected" stale="true" population="children with rifampicin-resistant tuberculosis" measured-compound="moxifloxacin" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) a | `Q27` · CL/F | 6.90 | unit | not captured | [unit] | 3.5 | llm_confirmed (0.6) | bcp70005-tbl-0002:row2:col1, bcp70005-tbl-0002:row2:col2, bcp70005-tbl-0002:row2:col3 | — | not captured |
| Vc/F (L) a | `Q76` · V/F | 61.1 | unit | not captured | [unit] | 3.7 | llm_confirmed (0.6) | bcp70005-tbl-0002:row3:col1, bcp70005-tbl-0002:row3:col2, bcp70005-tbl-0002:row3:col3 | — | not captured |
| Q/F (L/h) a | `Q69` · Q/F | 0.860 | unit | not captured | [unit] | 19 | llm_confirmed (0.6) | bcp70005-tbl-0002:row4:col1, bcp70005-tbl-0002:row4:col2, bcp70005-tbl-0002:row4:col3 | — | not captured |
| MAT (h) | `Q73` · MAT | 1.01 | h | 3636.0 | [h] | 5.5 | exact (1.0) | bcp70005-tbl-0002:row6:col1, bcp70005-tbl-0002:row6:col2, bcp70005-tbl-0002:row6:col3 | — | 42.2 (None% RSE) |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | bcp70005-tbl-0002:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CL (%CV) c' routed out of structural estimates ('IIV/IOV')
- table section iiv: 'IOV on F (%CV) c' routed out of structural estimates ('IIV/IOV')
- table section iiv: 'IOV on MAT (%CV) c' routed out of structural estimates ('IIV/IOV')
- unit_dimension_mismatch: 'CL/F (L/h) a' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Vc/F (L) a' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Q/F (L/h) a' → Q69 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Vp/F (L) a' — extend the ontology if this is a real PK parameter (source ['bcp70005-tbl-0002:row5:col1', 'bcp70005-tbl-0002:row5:col2', 'bcp70005-tbl-0002:row5:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=moxifloxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L) a' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |
| `gpt-oss:120b` | confirmed | 1.0 (14/14 fields) | none |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[vc/f (l) a].parameter_id` | Q76 | Q290 | mismatch |
| `gpt-oss-120b` | `parameters[vp/f (l) a]` | not captured | 44.5 | only_one_extracted |

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
| C2_base_Q40 | fail | 1.0 | 6.9 | 6.9 | 0.05 | footnote reference category |
| C5_dimension_Q27 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['bcp70005-tbl-0002:row2:col1', 'bcp70005-tbl-0002:row2:col2', 'bcp70005-tbl-0002:row2:col3'] |
| C5_dimension_Q69 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['bcp70005-tbl-0002:row4:col1', 'bcp70005-tbl-0002:row4:col2', 'bcp70005-tbl-0002:row4:col3'] |
| C5_dimension_Q73 | pass | [time] | not captured | not captured | not captured | ['bcp70005-tbl-0002:row6:col1', 'bcp70005-tbl-0002:row6:col2', 'bcp70005-tbl-0002:row6:col3'] |
| C5_dimension_Q76 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['bcp70005-tbl-0002:row3:col1', 'bcp70005-tbl-0002:row3:col2', 'bcp70005-tbl-0002:row3:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 103 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_moxifloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Palmer_2025` / `Palmer_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_moxifloxacin/models/modelica/_needs_review/Moxifloxacin_Palmer2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_moxifloxacin/models/modelica/_needs_review/Moxifloxacin_Palmer2025_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:29 UTC</sub>
