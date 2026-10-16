<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin glargine&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_glargine/&quot;},{&quot;label&quot;:&quot;Tham_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# insulin glargine — `InsulinGlargine_Tham2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.438). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The insulin glargine record was rejected because the parameter labelled CL carries a negative value (-0.282) that is implausible as a clearance, and a structural parameter failed a dimension check.**

The covariate effect of dose on clearance was extracted as -0.282, which fails the plausibility check for negative clearance values, and a dimension mismatch was flagged on a structural parameter. Several parameter values (absorption lag 0.265 h, absorption rate constant 0.0365 1/h, apparent clearance 30.5 L/h, apparent volume 43.0 L) are disputed by a second reader, who read 0.378 h, 0.0830 1/h, 74.5 L/h and 768 L respectively, so the extracted numbers are uncertain. One parameter was reported in a unit that could not be converted to SI, so it was recorded without a usable magnitude. Extracted — insulin glargine: Fab 1 Unit, kabs 0.0365 Unit, tlag 0.265 h, V/F 43 L, CL/F 30.5 L/h, CL -0.282 Unit.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[absorption lag, alag].value`: this record has 0.265, the second reading 0.378; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:22.778695+00:00) predates the upstream re-run (2026-10-04 22:02:22.188151+00:00). Current validate status: `rejected`.

## Citation
Tham LS et al., Modeling Pharmacokinetic Profiles of In…, Journal of clinical pharmac… (2017)
  ·  DOI: [10.1002/jcph.899](https://doi.org/10.1002/jcph.899)

<div class="pk-model-meta" hidden drug="insulin glargine" model-id="InsulinGlargine_Tham2017_reference" status="rejected" stale="true" population="healthy adults" measured-compound="insulin glargine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Bioavailability, FGlar | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row3:col1 | — | not captured |
| Absorption rate constant, Ka (1/h) | `Q49` · kabs | 0.0365 | 1/h | 1.0138888888888888e-05 | 1/h | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row6:col1, jcph899-tbl-0002:row6:col2, jcph899-tbl-0002:row6:col3, jcph899-tbl-0002:row6:col4, jcph899-tbl-0002:row6:col5, jcph899-tbl-0002:row6:col6 | — | not captured |
| Absorption lag, ALag (h) | `Q83` · tlag | 0.265 | h | 954.0 | [h] | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row7:col4, jcph899-tbl-0002:row7:col5 | — | not captured |
| Apparent volume of distribution (L) | `Q76` · V/F | 43.0 | L | 0.043000000000000003 | [l] | not captured | exact (1.0) | jcph899-tbl-0002:row12:col1, jcph899-tbl-0002:row12:col2, jcph899-tbl-0002:row12:col3, jcph899-tbl-0002:row12:col4, jcph899-tbl-0002:row12:col5, jcph899-tbl-0002:row12:col6 | — | not captured |
| Apparent clearance (L/h) | `Q27` · CL/F | 30.5 | L/h | 8.472222222222223e-06 | [l] / [h] | not captured | exact (1.0) | jcph899-tbl-0002:row15:col1, jcph899-tbl-0002:row15:col2, jcph899-tbl-0002:row15:col3, jcph899-tbl-0002:row15:col4, jcph899-tbl-0002:row15:col5, jcph899-tbl-0002:row15:col6 | — | not captured |
| Covariate effect of dose on clearance | `Q22` · CL | -0.282 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row16:col2, jcph899-tbl-0002:row16:col3, jcph899-tbl-0002:row16:col4 | — | not captured |
| covariate_of_body_weight_on_baseline_endogenous_insulin | `Q900` · covariate_of_body_weight_on_baseline_endogenous_insulin | 0.739 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph899-tbl-0002:row22:col1, jcph899-tbl-0002:row22:col2, jcph899-tbl-0002:row22:col3, jcph899-tbl-0002:row22:col4, jcph899-tbl-0002:row22:col5, jcph899-tbl-0002:row22:col6 | — | not captured |
| theta_q61_body_weight | `Q900` · theta_q61_body_weight | 2.48 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph899-tbl-0002:row13:col1, jcph899-tbl-0002:row13:col2, jcph899-tbl-0002:row13:col5, jcph899-tbl-0002:row13:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section covariance: 'Clearance and volume of distribution' routed out of structural estimates ('Covariances')
- table section covariance: 'Clearance and absorption rate constant' routed out of structural estimates ('Covariances')
- table section residual_error: 'Proportional (%)' routed out of structural estimates ('Residual error')
- dropped duplicate Q40 ('Fraction of dose undergoing first‐order absorption', value '0.729') — already have one for this compound
- dropped unlinked row (NIL): 'Duration of 0‐order absorption (h)' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row9:col1', 'jcph899-tbl-0002:row9:col5'])
- dropped duplicate Q49 ('Covariate effect of dose on absorption rate constant', value '-0.275') — already have one for this compound
- dropped PD-category row 'Baseline endogenous insulin concentration (pmol/L)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph899-tbl-0002:row21:col1'])
- covariate level 'Covariate of body weight on baseline endogenous insulin' → Q900:covariate_of_body_weight_on_baseline_endogenous_insulin = 0.739 (linear_fractional on Q27)
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant, Ka (1/h)' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for Ka in the provided text or table captions. However, Ka is a first-order')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=insulin glargine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.438 (7/16 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[absorption lag, alag].value` | 0.265 | 0.378 | mismatch |
| `gpt-oss:120b` | `parameters[absorption rate constant, ka].value` | 0.0365 | 0.0830 | mismatch |
| `gpt-oss:120b` | `parameters[apparent clearance].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[apparent clearance].value` | 30.5 | 74.5 | mismatch |
| `gpt-oss:120b` | `parameters[apparent volume of distribution].value` | 43.0 | 768 | mismatch |
| `gpt-oss:120b` | `parameters[covariate_of_body_weight_on_baseline_endogenous_insulin]` | 0.739 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[duration of 0‐order absorption]` | not captured | 0.612 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q324_body_weight]` | not captured | 0.739 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_body_weight].value` | 2.48 | 0.00728 | mismatch |

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
| C2_base_sign_Q22 | fail | not captured | -0.282 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph899-tbl-0002:row15:col1', 'jcph899-tbl-0002:row15:col2', 'jcph899-tbl-0002:row15:col3', 'jcph899-tbl-0002:row15:col4', 'jcph899-tbl-0002:row15:col5', 'jcph899-tbl-0002:row15:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph899-tbl-0002:row6:col1', 'jcph899-tbl-0002:row6:col2', 'jcph899-tbl-0002:row6:col3', 'jcph899-tbl-0002:row6:col4', 'jcph899-tbl-0002:row6:col5', 'jcph899-tbl-0002:row6:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph899-tbl-0002:row12:col1', 'jcph899-tbl-0002:row12:col2', 'jcph899-tbl-0002:row12:col3', 'jcph899-tbl-0002:row12:col4', 'jcph899-tbl-0002:row12:col5', 'jcph899-tbl-0002:row12:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph899-tbl-0002:row7:col4', 'jcph899-tbl-0002:row7:col5'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph899-tbl-0002:row16:col2', 'jcph899-tbl-0002:row16:col3', 'jcph899-tbl-0002:row16:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 30.5 L/h | not captured | not captured | ['jcph899-tbl-0002:row15:col1', 'jcph899-tbl-0002:row15:col2', 'jcph899-tbl-0002:row15:col3', 'jcph899-tbl-0002:row15:col4', 'jcph899-tbl-0002:row15:col5', 'jcph899-tbl-0002:row15:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 43 L | not captured | not captured | ['jcph899-tbl-0002:row12:col1', 'jcph899-tbl-0002:row12:col2', 'jcph899-tbl-0002:row12:col3', 'jcph899-tbl-0002:row12:col4', 'jcph899-tbl-0002:row12:col5', 'jcph899-tbl-0002:row12:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_insulin_glargine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tham_2017` / `Tham_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 22:02 UTC</sub>
