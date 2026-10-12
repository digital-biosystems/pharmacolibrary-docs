<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;aducanumab&quot;,&quot;href&quot;:&quot;drugs/drug_aducanumab/&quot;},{&quot;label&quot;:&quot;Kandadi_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aducanumab — `Aducanumab_Kandadi2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has aducanumab, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Kandadi Muralidharan K et al., Population pharmacokinetics and standar…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12728](https://doi.org/10.1002/psp4.12728)

<div class="pk-model-meta" hidden drug="aducanumab" model-id="Aducanumab_Kandadi2022_reference" status="rejected" stale="false" population="patients with early Alzheimer&#39;s disease" measured-compound="aducanumab" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 0 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| effect_of_age | `Q900` · effect_of_age | 0.207 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412728-tbl-0001:row10:col2, psp412728-tbl-0001:row10:col4 | — | not captured |
| theta_q314_weight | `Q900` · theta_q314_weight | 0.561 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412728-tbl-0001:row7:col2, psp412728-tbl-0001:row7:col4 | — | not captured |
| theta_q314_race | `Q900` · theta_q314_race | 0.125 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412728-tbl-0001:row11:col2, psp412728-tbl-0001:row11:col4 | — | not captured |
| theta_q314_sex | `Q900` · theta_q314_sex | 0.134 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412728-tbl-0001:row14:col2, psp412728-tbl-0001:row14:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fixed effect' — extend the ontology if this is a real PK parameter (source ['psp412728-tbl-0001:row2:col2', 'psp412728-tbl-0001:row2:col3', 'psp412728-tbl-0001:row2:col4'])
- covariate level 'Effect of age' → Q900:effect_of_age = 0.207 (linear_fractional on the model)
- dropped unlinked row (NIL): 'Effect of MMSEBL' — extend the ontology if this is a real PK parameter (source ['psp412728-tbl-0001:row17:col2', 'psp412728-tbl-0001:row17:col4'])
- dropped value-less row: 'MMSEBL'
- dropped value-less row: 'WT'
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=aducanumab
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- molar mass: none found for 'aducanumab' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell psp412728-tbl-0001:row2:col5 = '0.0156, 0.0161'
- unparsed cell psp412728-tbl-0001:row7:col3 = '0.512, 0.610'
- unparsed cell psp412728-tbl-0001:row7:col5 = '0.512, 0.613'
- unparsed cell psp412728-tbl-0001:row10:col1 = 'Age on V2'
- unparsed cell psp412728-tbl-0001:row10:col3 = '0.139, 0.275'
- unparsed cell psp412728-tbl-0001:row10:col5 = '0.136, 0.276'
- unparsed cell psp412728-tbl-0001:row11:col3 = '0.0903, 0.160'
- unparsed cell psp412728-tbl-0001:row11:col5 = '0.0917, 0.161'
- unparsed cell psp412728-tbl-0001:row14:col3 = '0.112, 0.156'
- unparsed cell psp412728-tbl-0001:row14:col5 = '0.111, 0.156'
- unparsed cell psp412728-tbl-0001:row17:col1 = 'MMSEBL on V2'
- unparsed cell psp412728-tbl-0001:row17:col3 = '0.0963, 0.268'
- unparsed cell psp412728-tbl-0001:row17:col5 = '0.0929, 0.279'
- unparsed cell psp412728-tbl-0001:row18:col3 = '21.0, 22.2'
- unparsed cell psp412728-tbl-0001:row18:col5 = '20.9, 22.2'
- unparsed cell psp412728-tbl-0001:row25:col3 = '14.6, 15.0'
- unparsed cell psp412728-tbl-0001:row25:col5 = '14.5, 15.0'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['aducanumab', 'suvr (amyloid beta pet biomarker)', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[effect_of_sex_male]` | not captured | 0.135 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_sex]` | 0.134 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_weight]` | 0.561 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` | not captured | 0.561 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | aducanumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | aducanumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_aducanumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kandadi_2022` / `Kandadi_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:02 UTC</sub>
