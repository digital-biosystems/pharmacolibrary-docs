<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;dapagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_dapagliflozin/&quot;},{&quot;label&quot;:&quot;Kobuchi_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dapagliflozin — `Dapagliflozin_Kobuchi2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The dapagliflozin model was held back because clearance, absorption rate constant and absorption lag time had no source values, so placeholder numbers stood in for them, including an invented ka.**

The record lists ka as 57.4 1/day, but the model builder defaulted ka because it was not reported in the source, and likewise left dapagliflozin's clearance and absorption lag time without values, substituting placeholder defaults rather than the paper's numbers. The parameterization is apparent (F=1, Fm=1, no molar correction). Covariate effects defined in the record (e.g. θBW on clearance) were not exercised in simulation — only the reference individual was simulated. A second reader also disagrees on t1/2z (16.1 vs 15.3 day) and θBW (0.41 vs 0.22). Extracted — dapagliflozin: t1/2z 16.1 day, kabs 57.4, V/F 73.9 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[t1/2hba1c].value`: this record has 16.1, the second reading 15.3; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:37:27.724775+00:00) predates the upstream re-run (2026-10-04 22:36:59.220154+00:00). Current validate status: `needs_review`.

## Citation
Kobuchi S et al., Population Pharmacokinetic-pharmacodyna…, International journal of me… (2025)
  ·  DOI: [10.7150/ijms.111519](https://doi.org/10.7150/ijms.111519)

<div class="pk-model-meta" hidden drug="dapagliflozin" model-id="Dapagliflozin_Kobuchi2025_reference" status="needs_review" stale="true" population="Japanese patients with type 2 diabetes mellitus" measured-compound="dapagliflozin" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, V/F, θCL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t1/2HbA1c (day) | `Q57` · t1/2z | 16.1 | day | 1391040.0000000002 | [d] | not captured | llm (0.6) | T3:row3:col1, T3:row3:col2, T3:row3:col4, T3:row3:col5 | — | not captured |
| ka (1/day) | `Q49` · kabs | 57.4 | not captured | not captured | not captured | not captured | exact (1.0) | Kobuchi_2025_table_2:row2:col1, Kobuchi_2025_table_2:row2:col4 | — | not captured |
| V/F (L) | `Q76` · V/F | 73.9 | L | 0.07390000000000001 | [l] | not captured | exact (1.0) | Kobuchi_2025_table_2:row6:col1, Kobuchi_2025_table_2:row6:col4 | — | not captured |
| θBW | `Q900` · θBW | 0.41 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θCL/F | `Q900` · θCL/F | 229.3 | L/day | 2.6539351851851853e-06 | not captured | not captured | not captured (not captured) | Kobuchi_2025_table_2:row4:col1, Kobuchi_2025_table_2:row4:col2, Kobuchi_2025_table_2:row4:col4, Kobuchi_2025_table_2:row4:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| θCL/F (L/day) | Q27 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameters' — extend the ontology if this is a real PK parameter (source ['T3:row0:col4', 'T3:row0:col5'])
- dropped PD-category row 'Emax (HbA1c %/day)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row4:col1', 'T3:row4:col2', 'T3:row4:col4', 'T3:row4:col5'])
- dropped PD-category row 'EC50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col4', 'T3:row5:col5'])
- dropped duplicate Q57 ('ωt1/2 HbA1c (%)', value '103.9') — already have one for this compound
- kept covariate coefficient θBW=0.41 (covariate BW) — not an ontology parameter
- dropped unlinked row (NIL): 'ωCL/F (%)' — extend the ontology if this is a real PK parameter (source ['Kobuchi_2025_table_2:row8:col1', 'Kobuchi_2025_table_2:row8:col2', 'Kobuchi_2025_table_2:row8:col4', 'Kobuchi_2025_table_2:row8:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dapagliflozin
- bound model equation to Q27 (CL/F): CL/F = θCL/F* (BW/77.0)^θBW
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'θCL/F (L/day)'; equation kept verbatim
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 2 transcribed (20 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation CL/F = θCL/F* (BW/77.0)^θBW

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.7 (7/10 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[t1/2hba1c].value` | 16.1 | 15.3 | mismatch |
| `gpt-oss:120b` | `parameters[θbw].parameter_id` | Q900 | Q319 | mismatch |
| `gpt-oss:120b` | `parameters[θbw].value` | 0.41 | 0.22 | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kobuchi_2025_table_2:row4:col1', 'Kobuchi_2025_table_2:row4:col2', 'Kobuchi_2025_table_2:row4:col4', 'Kobuchi_2025_table_2:row4:col5'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row3:col1', 'T3:row3:col2', 'T3:row3:col4', 'T3:row3:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kobuchi_2025_table_2:row6:col1', 'Kobuchi_2025_table_2:row6:col4'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['Kobuchi_2025_table_2:row2:col1', 'Kobuchi_2025_table_2:row2:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 73.9 L | not captured | not captured | ['Kobuchi_2025_table_2:row6:col1', 'Kobuchi_2025_table_2:row6:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 16.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 28.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dapagliflozin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kobuchi_2025` / `Kobuchi_2025::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dapagliflozin/models/modelica/_needs_review/Dapagliflozin_Kobuchi2025_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dapagliflozin/models/modelica/_needs_review/Dapagliflozin_Kobuchi2025_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 22:36 UTC</sub>
