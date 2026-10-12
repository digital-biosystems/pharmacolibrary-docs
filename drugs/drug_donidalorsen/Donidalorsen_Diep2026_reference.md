<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;donidalorsen&quot;,&quot;href&quot;:&quot;drugs/drug_donidalorsen/&quot;},{&quot;label&quot;:&quot;Diep_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donidalorsen — `Donidalorsen_Diep2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The donidalorsen record was quarantined because clearance, volume of distribution, absorption rate constant, absorption lag time and both intercompartmental rate constants had no source values and were left at library defaults.**

Although the paper reports apparent parameters for donidalorsen (CL/F 12.8 L/h, V1/F 69.8 L, Q/F 2.58 L/h, peripheral V/F 1840 L, ka 0.952 1/h), the model builder substituted library placeholder defaults for clearance, volume of distribution, absorption rate constant, absorption lag time, and the central-to-peripheral and peripheral-to-central rate constants, so the model was held back rather than published with invented numbers. The builder also assumed F=1 and Fm=1 without molar correction, and the ka default was flagged as an invented absorption deviation. In addition, the covariate effects defined in the record (weight effects of 1.52 on CL/F and 1.79 on Q/F, plus further weight terms of 2.34 and 1.60) were not exercised: only the reference individual was simulated. Extracted — donidalorsen: CL/F 12.8, V1/F 69.8, Q/F 2.58, V/F 1.84e+03, kabs 0.952.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:37:49.963912+00:00) predates the upstream re-run (2026-10-06 01:43:51.742763+00:00). Current validate status: `needs_review`.

## Citation
Diep JK et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70206](https://doi.org/10.1002/psp4.70206)

## Model component
<dbs-pgx drug="donidalorsen" model-id="Donidalorsen_Diep2026_reference" status="needs_review" stale="true" population="healthy volunteers and patients with hereditary angioedema" measured-compound="donidalorsen" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) a | `Q27` · CL/F | 12.8 | not captured | not captured | not captured | 2.83 | llm_confirmed (0.6) | psp470206-tbl-0001:row1:col1, psp470206-tbl-0001:row1:col2 | — | 19.6 (13.9% RSE) |
| covariate_of_weight_on_cl_f | `Q900` · covariate_of_weight_on_cl_f | 1.52 | not captured | not captured | not captured | 8.37 | not captured (not captured) | psp470206-tbl-0001:row2:col1, psp470206-tbl-0001:row2:col2 | — | not captured |
| V c/F (L) b | `Q290` · V1/F | 69.8 | not captured | not captured | not captured | 6.28 | llm (0.6) | psp470206-tbl-0001:row3:col1, psp470206-tbl-0001:row3:col2 | — | not captured |
| Q/F (L/h) c | `Q69` · Q/F | 2.58 | not captured | not captured | not captured | 5.25 | llm_confirmed (0.6) | psp470206-tbl-0001:row6:col1, psp470206-tbl-0001:row6:col2 | — | 10.2 (15.7% RSE) |
| covariate_of_weight_on_q_f | `Q900` · covariate_of_weight_on_q_f | 1.79 | not captured | not captured | not captured | 12.7 | not captured (not captured) | psp470206-tbl-0001:row7:col1, psp470206-tbl-0001:row7:col2 | — | not captured |
| V p /F (L) d | `Q76` · V/F | 1840 | not captured | not captured | not captured | 6.29 | llm (0.6) | psp470206-tbl-0001:row9:col1, psp470206-tbl-0001:row9:col2 | — | not captured |
| k a (1/h) e | `Q49` · kabs | 0.952 | not captured | not captured | not captured | 8.26 | llm (0.6) | psp470206-tbl-0001:row11:col1, psp470206-tbl-0001:row11:col2 | — | not captured |
| theta_q314_weight | `Q900` · theta_q314_weight | 2.34 | not captured | not captured | not captured | 7.86 | not captured (not captured) | psp470206-tbl-0001:row4:col1, psp470206-tbl-0001:row4:col2 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 1.60 | not captured | not captured | not captured | 17.6 | not captured (not captured) | psp470206-tbl-0001:row10:col1, psp470206-tbl-0001:row10:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Covariate of weight on CL/F' → Q900:covariate_of_weight_on_cl_f = 1.52 (linear_fractional on Q27)
- routed 'Covariate of disease status (patient with HAE) on V c/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate level 'Covariate of weight on Q/F' → Q900:covariate_of_weight_on_q_f = 1.79 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Covariate of disease status (patient with HAE) on Q/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row8:col1', 'psp470206-tbl-0001:row8:col2'])
- routed 'Covariate of site of administration of k a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Covariate of drug presentation of k a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Correlation between CL/F and V c/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row15:col1', 'psp470206-tbl-0001:row15:col2'])
- dropped unlinked row (NIL): 'Correlation between CL/F and Q/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row16:col1', 'psp470206-tbl-0001:row16:col2'])
- dropped unlinked row (NIL): 'Correlation between CL/F and V p /F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row17:col1', 'psp470206-tbl-0001:row17:col2'])
- dropped unlinked row (NIL): 'Correlation between CL/F and k a' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row18:col1', 'psp470206-tbl-0001:row18:col2'])
- dropped unlinked row (NIL): 'Correlation between V c/F and Q/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row20:col1', 'psp470206-tbl-0001:row20:col2'])
- dropped unlinked row (NIL): 'Correlation between V c/F and V p /F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row21:col1', 'psp470206-tbl-0001:row21:col2'])
- routed 'Correlation between V c/F and k a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Correlation between Q/F and V p /F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row24:col1', 'psp470206-tbl-0001:row24:col2'])
- dropped unlinked row (NIL): 'Correlation between Q/F and k a' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row25:col1', 'psp470206-tbl-0001:row25:col2'])
- routed 'Correlation between V p /F and k a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=donidalorsen
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470206-tbl-0001:row1:col1', 'psp470206-tbl-0001:row1:col2'] |
| C5_unit_missing_Q290 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp470206-tbl-0001:row3:col1', 'psp470206-tbl-0001:row3:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['psp470206-tbl-0001:row11:col1', 'psp470206-tbl-0001:row11:col2'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470206-tbl-0001:row6:col1', 'psp470206-tbl-0001:row6:col2'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp470206-tbl-0001:row9:col1', 'psp470206-tbl-0001:row9:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 277 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 868 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.573 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 1.18 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_donidalorsen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diep_2026` / `Diep_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_donidalorsen/models/modelica/_needs_review/Donidalorsen_Diep2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_donidalorsen/models/modelica/_needs_review/Donidalorsen_Diep2026_reference.deviation.json`


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 01:43 UTC</sub>
