<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;Apadamtase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/&quot;},{&quot;label&quot;:&quot;Patel_2025 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Apadamtase alfa — `ApadamtaseAlfa_Patel2025_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.455). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The apadamtase alfa record was rejected because its two-compartment structure leaves a compartment unreachable from the dose, and the unbound fraction parameter is inconsistent: the label states 0.204 while the extracted value is 14.7.**

The model for ADAMTS13 (apadamtase alfa) in patients with congenital thrombotic thrombocytopenic purpura is a two-compartment structure with clearance 0.0398 L/h, central volume 2.69 L and peripheral volume 3.71 L, but one compartment has no path from the dose, so the structure fails the connectivity check. The unbound fraction parameter carries the label 'Proportional (Fraction): 0.204' yet the recorded value is 14.7, a mismatch between the reported fraction and the extracted number. No other parameter discrepancies are reported. Extracted — apadamtase alfa: CL 0.0398, V1 2.69, V2 3.71, fu 14.7.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has ADAMTS13, the second reading ADAMTS13 activity; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:36:09.477481+00:00) predates the upstream re-run (2026-10-05 13:41:34.583886+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `rADAMTS13`, measured `ADAMTS13`.

## Citation
Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025)
  ·  DOI: [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720)

<div class="pk-model-meta" hidden drug="Apadamtase alfa" model-id="ApadamtaseAlfa_Patel2025_estimate" status="rejected" stale="true" population="patients with congenital thrombotic thrombocytopenic purpura (cTTP)" measured-compound="ADAMTS13" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance, L/h | `Q22` · CL | 0.0398 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cpt3720-tbl-0001:row1:col1 | — | not captured |
| Central volume of distribution, L | `Q63` · V1 | 2.69 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | cpt3720-tbl-0001:row3:col1 | — | not captured |
| Peripheral volume of distribution, L | `Q64` · V2 | 3.71 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | cpt3720-tbl-0001:row7:col1 | — | not captured |
| Proportional (Fraction): 0.204 | `Q46` · fu | 14.7 | not captured | not captured | not captured | not captured | llm (0.6) | cpt3720-tbl-0001:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('Peripheral clearance, L/h', value '0.0456') — already have one for this compound
- dropped unlinked row (NIL): '× (1–0.390) if PBT' — extend the ontology if this is a real PK parameter (source ['cpt3720-tbl-0001:row10:col1'])
- dropped unlinked row (NIL): '× (1–0.933) if FVIII:VWF concentrates' — extend the ontology if this is a real PK parameter (source ['cpt3720-tbl-0001:row11:col1'])
- routed 'Error model' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ADAMTS13
- population split: 'estimate' subgroup of Patel_2025 (paper reports 2 populations: estimate, shrinkage, %)

**Extraction notes:**
- unparsed cell cpt3720-tbl-0001:row10:col5 = '−0.427 to −0.270'
- unparsed cell cpt3720-tbl-0001:row11:col5 = '−0.986 to −0.828'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.455 (5/11 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['radamts13', 'adamts13 activity', 'interconversion'], ['pbt', 'adamts13 activity', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[cave]` | not captured | 0.203 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 1.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[proportional (fraction): 0.204]` | 14.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[× (1-0.390) if pbt]` | not captured | 6.14 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | ADAMTS13 | ADAMTS13 activity | mismatch |

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
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3720-tbl-0001:row1:col1'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['cpt3720-tbl-0001:row3:col1'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['cpt3720-tbl-0001:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0398 | not captured | not captured | ['cpt3720-tbl-0001:row1:col1'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_apadamtase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Patel_2025` / `Patel_2025::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 13:41 UTC</sub>
