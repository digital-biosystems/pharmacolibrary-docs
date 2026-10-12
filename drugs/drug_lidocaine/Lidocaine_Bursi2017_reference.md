<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;Bursi_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_Bursi2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.346). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance; v1 has no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V1, theta_k31_category and theta_v1_category), so that value has no SI equivalent. Extracted — lidocaine: kcomp 1.93 h−1, k31 -0.526 h−1, V1 0.312 IIV.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has lidocaine → 2,6-xylidine (metabolism); lidocaine → glycinexylidide (metabolism); glycinexylidide → monoethylglycinexylidide (metabolism), the second reading lidocaine → 2,6-xylidine (metabolism); lidocaine → glycinexylidide (metabolism); lidocaine → monoethylglycinexylidide (metabolism); it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:27:22.034936+00:00) predates the upstream re-run (2026-10-06 03:22:38.208614+00:00). Current validate status: `rejected`.

## Citation
Bursi R et al., Evaluation of the Population Pharmacoki…, European journal of drug me… (2017)
  ·  DOI: [10.1007/s13318-017-0400-7](https://doi.org/10.1007/s13318-017-0400-7)

<div class="pk-model-meta" hidden drug="lidocaine" model-id="Lidocaine_Bursi2017_reference" status="rejected" stale="true" population="post-herpetic neuralgia patients" measured-compound="lidocaine" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k 23 (h−1) | `Q305` · kfm | 1.93 | h−1 | 0.0005361111111111111 | [1] / [h] | 0.175 | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Effect of BIL &gt;0.53 on k 30 (h−1) | `Q304` · k31 | -0.526 | h−1 | -0.00014611111111111113 | [1] / [h] | 0.148 | llm (0.6) | Tab3:row7:col1, Tab3:row7:col2 | — | not captured |
| k 30 | `Q373` · ki0 | 0.39 | 1/h | 0.00010833333333333334 | 1/h | 0.127 | space_fold (0.95) | Tab3:row20:col1, Tab3:row20:col2, Tab3:row20:col4 | — | not captured |
| k 40 | `Q373` · ki0 | 0.2 | 1/h | 5.555555555555556e-05 | 1/h | 0.0424 | space_fold (0.95) | Tab3:row21:col1, Tab3:row21:col2, Tab3:row21:col4 | — | not captured |
| V 1 | `Q63` · V1 | 0.312 | L | 0.000312 | L | 0.0757 | space_fold (0.95) | Tab3:row22:col1, Tab3:row22:col2, Tab3:row22:col4 | — | not captured |
| theta_q47_category | `Q900` · theta_q47_category | 1.44 | not captured | not captured | not captured | 0.169 | not captured (not captured) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| theta_k31_bmi | `Q900` · theta_k31_bmi | 0.938 | not captured | not captured | not captured | 0.309 | not captured (not captured) | Tab3:row10:col1, Tab3:row10:col2 | — | not captured |
| theta_q47_category | `Q900` · theta_q47_category | 0.667 | not captured | not captured | not captured | 0.0383 | not captured (not captured) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |
| theta_v1_category | `Q900` · theta_v1_category | 1320 | not captured | not captured | not captured | 99.5 | not captured (not captured) | Tab3:row15:col1, Tab3:row15:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q304 ('Effect of CLCR ≤52.7 on k 30 (h−1)', value '-0.32') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of CYP1A2 substrate on k 30 (h−1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2'])
- dropped duplicate Q304 ('Effect of ALT &gt;11 on k 30 (h−1)', value '-0.492') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of ALT &gt;11 on k 40 (h−1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1', 'Tab3:row14:col2'])
- dropped unlinked row (NIL): 'Lidocaine' — extend the ontology if this is a real PK parameter (source ['Tab3:row25:col1', 'Tab3:row25:col2', 'Tab3:row25:col4'])
- dropped unlinked row (NIL): 'MEGX' — extend the ontology if this is a real PK parameter (source ['Tab3:row26:col1', 'Tab3:row26:col2', 'Tab3:row26:col4'])
- dropped unlinked row (NIL): 'GX' — extend the ontology if this is a real PK parameter (source ['Tab3:row27:col1', 'Tab3:row27:col2', 'Tab3:row27:col4'])
- dropped unlinked row (NIL): '2,6-xylidine' — extend the ontology if this is a real PK parameter (source ['Tab3:row28:col1', 'Tab3:row28:col2', 'Tab3:row28:col4'])
- covariate effect for Q47 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q47 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'category'/'' on Q63 — ambiguous identity (two shifts cannot share one category)
- implicit units: 'k 30' → 1/h (from the popPK convention: "The parameter is a first-order elimination rate constant (k30). The paper text explicitly states 'lidocaine K el was est")
- implicit units: 'k 40' → 1/h (from the popPK convention: "The parameter is a first-order elimination rate constant (k40). The paper text explicitly states 'lidocaine K el was est")
- implicit units: 'V 1' → L (from the popPK convention: "The parameter is the volume of distribution of the central compartment (V1). The paper text states 'apparent volume of d")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lidocaine
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- row roles: 2 per-group rows of glycinexylidide elimination_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of 2,6-xylidine elimination_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of lidocaine central_volume but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 14 linked by role; re-tagged parent→glycinexylidide ×22, parent→2,6-xylidine ×12, parent→monoethylglycinexylidide ×3
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row3:col3 = '(1.59; 2.27)'
- unparsed cell Tab3:row5:col3 = '(1.11; 1.77)'
- unparsed cell Tab3:row6:col3 = '(1.53; 2.61)'
- unparsed cell Tab3:row7:col3 = '(−0.816; −0.236)'
- unparsed cell Tab3:row8:col3 = '(−0.645; 0.005)'
- unparsed cell Tab3:row9:col3 = '(0.323; 1.381)'
- unparsed cell Tab3:row10:col3 = '(0.332; 1.544)'
- unparsed cell Tab3:row11:col3 = '(−0.87; −0.114)'
- unparsed cell Tab3:row12:col3 = '(0.592; 0.742)'
- unparsed cell Tab3:row13:col3 = '(0.29; 0.53)'
- unparsed cell Tab3:row14:col3 = '(0.038; 0.420)'
- unparsed cell Tab3:row15:col3 = '(1124; 1515)'
- unparsed cell Tab3:row16:col3 = '(1449; 2170)'
- unparsed cell Tab3:row20:col3 = '(0.141; 0.639)'
- unparsed cell Tab3:row21:col3 = '(0.117; 0.283)'
- unparsed cell Tab3:row22:col3 = '(0.164; 0.46)'
- unparsed cell Tab3:row25:col3 = '(204; 523)'
- unparsed cell Tab3:row26:col3 = '(28.8; 77.8)'
- unparsed cell Tab3:row27:col3 = '(1.2; 94.5)'
- unparsed cell Tab3:row28:col3 = '(3.63; 9.15)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.346 (9/26 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['lidocaine', '2,6-xylidine', 'metabolism'], ['lidocaine', 'glycinexylidide', 'metabolism'], ['glycinexylidide', 'monoethylglycinexylidide', 'metabolism']] | [['lidocaine', '2,6-xylidine', 'metabolism'], ['lidocaine', 'glycinexylidide', 'metabolism'], ['lidocaine', 'monoethylglycinexylidide', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[effect of alt &gt;11 on k 40]` | not captured | 0.229 | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect of bil &gt;0.53 on k 30].parameter_id` | Q304 | Q48 | mismatch |
| `gpt-oss:120b` | `parameters[effect of bil &gt;0.53 on k 30].rse_percent` | 0.148 | not captured | mismatch |
| `gpt-oss:120b` | `parameters[effect of clcr ≤52.7 on k 30]` | not captured | -0.32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 23].rse_percent` | 0.175 | not captured | mismatch |
| `gpt-oss:120b` | `parameters[k 30]` | 0.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 40]` | 0.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_k31_bmi]` | 0.938 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_kcomp_bmi]` | not captured | 0.938 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_kel_category]` | not captured | 0.667 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_kel_category]` | not captured | 1.44 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_kel_cyp1a2]` | not captured | 0.852 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q47_category]` | 0.667 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q47_category]` | 1.44 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v1_category].rse_percent` | 99.5 | not captured | mismatch |
| `gpt-oss:120b` | `parameters[v 1].rse_percent` | 0.0757 | not captured | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q373 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row20:col1', 'Tab3:row20:col2', 'Tab3:row20:col4'] |
| C5_dimension_Q373 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row21:col1', 'Tab3:row21:col2', 'Tab3:row21:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row22:col1', 'Tab3:row22:col2', 'Tab3:row22:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.312 L | not captured | not captured | ['Tab3:row22:col1', 'Tab3:row22:col2', 'Tab3:row22:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bursi_2017` / `Bursi_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 03:22 UTC</sub>
