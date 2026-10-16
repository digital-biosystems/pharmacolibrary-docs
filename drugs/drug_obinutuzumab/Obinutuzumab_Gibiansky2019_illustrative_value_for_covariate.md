<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;obinutuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_obinutuzumab/&quot;},{&quot;label&quot;:&quot;Gibiansky_2019 \u00b7 illustrative_value_for_covariate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# obinutuzumab — `Obinutuzumab_Gibiansky2019_illustrative_value_for_covariate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667), gpt-oss:120b (partly confirmed, agreement 0.462). Primary extraction retained.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — obinutuzumab: V2 1.23 L, CL 0.154 L day−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clt: this record has none, the second reading 0.154; it also differs on 3 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Gibiansky E et al., Pharmacokinetics, exposure, efficacy an…, British journal of clinical… (2019)
  ·  DOI: [10.1111/bcp.13974](https://doi.org/10.1111/bcp.13974)

<div class="pk-model-meta" hidden drug="obinutuzumab" model-id="Obinutuzumab_Gibiansky2019_illustrative_value_for_covariate" status="rejected" stale="false" population="patients with B-cell malignancies (CLL, NHL, FL, DLBCL, MCL)" measured-compound="obinutuzumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| sex | `Q900` · sex | 17.6 | not captured | not captured | not captured | not captured | not captured (not captured) | Gibiansky_2019_table_1:row4:col3, Gibiansky_2019_table_1:row19:col3 | — | not captured |
| age | `Q900` · age | 13.8 | not captured | not captured | not captured | not captured | not captured (not captured) | Gibiansky_2019_table_1:row8:col3 | — | not captured |
| theta_q42_albumin_power | `Q900` · theta_q42_albumin_power | 25.4 | not captured | not captured | not captured | not captured | not captured (not captured) | Gibiansky_2019_table_1:row2:col3 | — | not captured |
| V2 | `Q64` · V2 | 1.23 | L | 0.00123 | L | not captured | exact (1.0) | Gibiansky_2019:results_prose | — | not captured |
| CLT | `Q22` · CL | 0.154 | L day−1 | 1.7824074074074074e-09 | L/h | not captured | exact (1.0) | Gibiansky_2019:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'illustrative value for covariate *' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Sex' → Q900:sex = 17.6 (linear_fractional on the model)
- dropped unlinked row (NIL): 'Disease type' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2019_table_1:row5:col3', 'Gibiansky_2019_table_1:row13:col3', 'Gibiansky_2019_table_1:row25:col3'])
- covariate level 'Age' → Q900:age = 13.8 (power on the model)
- dropped unlinked row (NIL): 'Baseline tumour size' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2019_table_1:row10:col3', 'Gibiansky_2019_table_1:row15:col3'])
- dropped unlinked row (NIL): 'Received fludarabine + cyclophosphamide' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2019_table_1:row23:col3'])
- dropped unlinked row (NIL): 'Received bendamustine' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2019_table_1:row24:col3'])
- covariate effect for Q42 has no base parameter row (kept as unattached equation-variable)
- salvaged Q64 ('V2'=1.23) from results prose — parameter table was unreadable
- salvaged Q22 ('CLT'=0.154) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=obinutuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'illustrative value for covariate *' subgroup of Gibiansky_2019 (paper reports 2 populations: effect on parameter, % (mean, 95% cls), illustrative value for covariate *)
- molar mass: none found for 'obinutuzumab' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table bcp13974-tbl-0002: units_need_context
- table bcp13974-tbl-0002: unparsed_numeric_cell
- table bcp13974-tbl-0002: representations disagree; selected evidence retained, not merged
- table Gibiansky_2019_table_1: units_need_context
- table Gibiansky_2019_table_1: ragged_grid
- table Gibiansky_2019_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (28 record(s), model stage 'final')
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.667 (8/12 fields) | 4 |
| `gpt-oss:120b` | partly confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clt]` | not captured | 0.154 | only_one_extracted |
| `gpt-oss-120b` | `parameters[decay coefficient of time dependent clearance]` | 0.11 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` | 1.23 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | not captured | 1.23 | only_one_extracted |
| `gpt-oss:120b` | `parameters[bone marrow involvement at baseline, yes vs no]` | not captured | 0.8759 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clt]` | not captured | 0.154 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmean]` | -0.0027 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[decay coefficient of time dependent clearance]` | 0.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[low tertile of cmean]` | not captured | -0.9956 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution]` | 1.23 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | not captured | 1.23 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.154 | not captured | not captured | ['Gibiansky_2019:results_prose'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00642 L/h | not captured | not captured | ['Gibiansky_2019:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.23 L | not captured | not captured | ['Gibiansky_2019:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_obinutuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibiansky_2019` / `Gibiansky_2019::illustrative_value_for_covariate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:54 UTC</sub>
