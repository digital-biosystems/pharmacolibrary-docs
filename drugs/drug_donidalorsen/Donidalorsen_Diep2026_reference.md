<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;donidalorsen&quot;,&quot;href&quot;:&quot;drugs/drug_donidalorsen/&quot;},{&quot;label&quot;:&quot;Diep_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donidalorsen — `Donidalorsen_Diep2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:37 UTC) predates the latest extraction (2026-10-06 01:43 UTC); the status shown comes from the current checks. The donidalorsen record was quarantined because clearance, volume of distribution, absorption rate constant, absorption lag time and both intercompartmental rate constants had no source values and were left at library defaults.

<div class="pk-model-meta" hidden drug="donidalorsen" model-id="Donidalorsen_Diep2026_reference" status="needs_review" stale="true" population="healthy volunteers and patients with hereditary angioedema" measured-compound="donidalorsen" parameterization="apparent" topology="2C"></div>

## Citation
Diep JK, Liu M, Singh P, Dorow S, Cohn DM, Bordone L et al. Population Pharmacokinetic/Pharmacodynamic Modeling of Donidalorsen, an Antisense Oligonucleotide in Development for Prophylaxis of Hereditary Angioedema. CPT: pharmacometrics & systems pharmacology 15(2):e70206 (2026).
  ·  DOI: [10.1002/psp4.70206](https://doi.org/10.1002/psp4.70206)

## Population and dosing

**Population:** healthy volunteers and patients with hereditary angioedema · condition hereditary angioedema · age group mixed · n = 177.

**Dosing:** 20, 40, 60, 80 mg, subcutaneous, multiple, every 28 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) a | CL/F | 12.8 |  | 2.83 | 19.6 (13.9% RSE) |
| covariate_of_weight_on_cl_f | covariate_of_weight_on_cl_f | 1.52 |  | 8.37 |  |
| V c/F (L) b | V1/F | 69.8 |  | 6.28 |  |
| Q/F (L/h) c | Q/F | 2.58 |  | 5.25 | 10.2 (15.7% RSE) |
| covariate_of_weight_on_q_f | covariate_of_weight_on_q_f | 1.79 |  | 12.7 |  |
| V p /F (L) d | V/F | 1840 |  | 6.29 |  |
| k a (1/h) e | kabs | 0.952 |  | 8.26 |  |
| theta_q314_weight | theta_q314_weight | 2.34 |  | 7.86 |  |
| theta_q319_weight | theta_q319_weight | 1.60 |  | 17.6 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The donidalorsen record was quarantined because clearance, volume of distribution, absorption rate constant, absorption lag time and both intercompartmental rate constants had no source values and were left at library defaults.**

Although the paper reports apparent parameters for donidalorsen (CL/F 12.8 L/h, V1/F 69.8 L, Q/F 2.58 L/h, peripheral V/F 1840 L, ka 0.952 1/h), the model builder substituted library placeholder defaults for clearance, volume of distribution, absorption rate constant, absorption lag time, and the central-to-peripheral and peripheral-to-central rate constants, so the model was held back rather than published with invented numbers. The builder also assumed F=1 and Fm=1 without molar correction, and the ka default was flagged as an invented absorption deviation. In addition, the covariate effects defined in the record (weight effects of 1.52 on CL/F and 1.79 on Q/F, plus further weight terms of 2.34 and 1.60) were not exercised: only the reference individual was simulated. Extracted — donidalorsen: CL/F 12.8, V1/F 69.8, Q/F 2.58, V/F 1.84e+03, kabs 0.952.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|
| CL/F (L/h) a | `Q27` · CL/F | 12.8 |  | 2.83 | llm_confirmed (0.6) | psp470206-tbl-0001:row1:col1, psp470206-tbl-0001:row1:col2 | 19.6 (13.9% RSE) |
| covariate_of_weight_on_cl_f | `Q900` · covariate_of_weight_on_cl_f | 1.52 |  | 8.37 |  | psp470206-tbl-0001:row2:col1, psp470206-tbl-0001:row2:col2 |  |
| V c/F (L) b | `Q290` · V1/F | 69.8 |  | 6.28 | llm (0.6) | psp470206-tbl-0001:row3:col1, psp470206-tbl-0001:row3:col2 |  |
| Q/F (L/h) c | `Q69` · Q/F | 2.58 |  | 5.25 | llm_confirmed (0.6) | psp470206-tbl-0001:row6:col1, psp470206-tbl-0001:row6:col2 | 10.2 (15.7% RSE) |
| covariate_of_weight_on_q_f | `Q900` · covariate_of_weight_on_q_f | 1.79 |  | 12.7 |  | psp470206-tbl-0001:row7:col1, psp470206-tbl-0001:row7:col2 |  |
| V p /F (L) d | `Q76` · V/F | 1840 |  | 6.29 | llm (0.6) | psp470206-tbl-0001:row9:col1, psp470206-tbl-0001:row9:col2 |  |
| k a (1/h) e | `Q49` · kabs | 0.952 |  | 8.26 | llm (0.6) | psp470206-tbl-0001:row11:col1, psp470206-tbl-0001:row11:col2 |  |
| theta_q314_weight | `Q900` · theta_q314_weight | 2.34 |  | 7.86 |  | psp470206-tbl-0001:row4:col1, psp470206-tbl-0001:row4:col2 |  |
| theta_q319_weight | `Q900` · theta_q319_weight | 1.60 |  | 17.6 |  | psp470206-tbl-0001:row10:col1, psp470206-tbl-0001:row10:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] |  | ['psp470206-tbl-0001:row1:col1', 'psp470206-tbl-0001:row1:col2'] |
| C5_unit_missing_Q290 | fail | [length] ** 3 |  | ['psp470206-tbl-0001:row3:col1', 'psp470206-tbl-0001:row3:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['psp470206-tbl-0001:row11:col1', 'psp470206-tbl-0001:row11:col2'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] |  | ['psp470206-tbl-0001:row6:col1', 'psp470206-tbl-0001:row6:col2'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 |  | ['psp470206-tbl-0001:row9:col1', 'psp470206-tbl-0001:row9:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 277 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 868 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.573 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 1.18 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonidalorsen%5D%20Donidalorsen_Diep2026_reference&body=Drug%3A%20donidalorsen%0ARecord%3A%20Donidalorsen_Diep2026_reference%0APaper%3A%20Diep_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_donidalorsen/Donidalorsen_Diep2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 01:43 UTC</sub>
