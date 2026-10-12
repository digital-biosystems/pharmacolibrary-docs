<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;dalbavancin&quot;,&quot;href&quot;:&quot;drugs/drug_dalbavancin/&quot;},{&quot;label&quot;:&quot;Carrothers_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dalbavancin_Baiardi2025_reference&quot;,&quot;label&quot;:&quot;Baiardi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dalbavancin/Dalbavancin_Baiardi2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dalbavancin_Cojutti2023_reference&quot;,&quot;label&quot;:&quot;Cojutti_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dalbavancin/Dalbavancin_Cojutti2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dalbavancin — `Dalbavancin_Carrothers2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clearance: this record has none, the second reading 43; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Carrothers TJ et al., Dalbavancin Population Pharmacokinetic…, Clinical pharmacology in dr… (2020)
  ·  DOI: [10.1002/cpdd.695](https://doi.org/10.1002/cpdd.695)

<div class="pk-model-meta" hidden drug="dalbavancin" model-id="Dalbavancin_Carrothers2020_reference" status="rejected" stale="false" population="adults with acute bacterial skin and skin structure infections" measured-compound="dalbavancin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 | `Q900` · equation variable | 0.0531 | not captured | not captured | not captured | 1.1 | llm (0.6) | cpdd695-tbl-0003:row1:col2, cpdd695-tbl-0003:row1:col3 | — | not captured |
| θ12 | `Q301` · k12 | 0.486 | 1/h | 0.000135 | 1/h | 12.1 | llm (0.6) | cpdd695-tbl-0003:row12:col2, cpdd695-tbl-0003:row12:col3 | — | not captured |
| θ14 | `Q347` · k14 | 0.365 | 1/h | 0.00010138888888888889 | 1/h | 29.6 | llm (0.6) | cpdd695-tbl-0003:row14:col2, cpdd695-tbl-0003:row14:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'name' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'θ2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q900 ('θ3', value '8.78') — already have one for this compound
- dropped unlinked row (NIL): 'θ4' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row4:col2', 'cpdd695-tbl-0003:row4:col3'])
- routed 'θ5' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q900 ('θ6', value '2.11') — already have one for this compound
- dropped unlinked row (NIL): 'θ7' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row7:col2', 'cpdd695-tbl-0003:row7:col3'])
- dropped duplicate Q900 ('θ8', value '0.273') — already have one for this compound
- routed 'θ9' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'θ10' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row10:col2', 'cpdd695-tbl-0003:row10:col3'])
- dropped unlinked row (NIL): 'θ11' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row11:col2', 'cpdd695-tbl-0003:row11:col3'])
- dropped duplicate Q900 ('θ13', value '-0.413') — already have one for this compound
- dropped unlinked row (NIL): 'θ16' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row15:col2', 'cpdd695-tbl-0003:row15:col3'])
- dropped unlinked row (NIL): 'θ17' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row16:col2', 'cpdd695-tbl-0003:row16:col3'])
- dropped unlinked row (NIL): 'Name' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row17:col1'])
- dropped unlinked row (NIL): 'Estimate' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row17:col2'])
- dropped unlinked row (NIL): 'RSE, %' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row17:col3'])
- dropped duplicate Q900 ('ω1.1', value '0.0489') — already have one for this compound
- dropped duplicate Q900 ('ω3.3', value '0.0566') — already have one for this compound
- dropped unlinked row (NIL): 'ω4.3' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row22:col2', 'cpdd695-tbl-0003:row22:col3'])
- routed 'ω4.4' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'θ12' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for k12. However, k12 is defined as a first-order transfer rate constant, w')
- implicit units: 'θ14' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for k14. However, k14 is defined as a first-order transfer rate constant, w')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dalbavancin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpdd695-tbl-0003:row1:col4 = '0.0519, 0.0543'
- unparsed cell cpdd695-tbl-0003:row2:col1 = 'V1 (L)'
- unparsed cell cpdd695-tbl-0003:row2:col4 = '2.8, 3.28'
- unparsed cell cpdd695-tbl-0003:row3:col1 = 'V2 (L)'
- unparsed cell cpdd695-tbl-0003:row3:col4 = '8.11, 9.44'
- unparsed cell cpdd695-tbl-0003:row4:col1 = 'V3 (L)'
- unparsed cell cpdd695-tbl-0003:row4:col4 = '2.67, 3.9'
- unparsed cell cpdd695-tbl-0003:row5:col4 = '0.213, 0.362'
- unparsed cell cpdd695-tbl-0003:row6:col4 = '1.66, 2.55'
- unparsed cell cpdd695-tbl-0003:row7:col4 = '−0.587, −0.367'
- unparsed cell cpdd695-tbl-0003:row8:col4 = '0.208, 0.338'
- unparsed cell cpdd695-tbl-0003:row9:col4 = '0.291, 0.491'
- unparsed cell cpdd695-tbl-0003:row10:col1 = 'V1·ALB'
- unparsed cell cpdd695-tbl-0003:row10:col4 = '−0.53, −0.149'
- unparsed cell cpdd695-tbl-0003:row11:col1 = 'V1·WT'
- unparsed cell cpdd695-tbl-0003:row11:col4 = '0.537, 0.83'
- unparsed cell cpdd695-tbl-0003:row12:col1 = 'V2·AGE'
- unparsed cell cpdd695-tbl-0003:row12:col4 = '0.371, 0.601'
- unparsed cell cpdd695-tbl-0003:row13:col1 = 'V2·ALB'
- unparsed cell cpdd695-tbl-0003:row13:col4 = '−0.633, −0.193'
- unparsed cell cpdd695-tbl-0003:row14:col1 = 'V2·WT'
- unparsed cell cpdd695-tbl-0003:row14:col4 = '0.153, 0.577'
- unparsed cell cpdd695-tbl-0003:row15:col1 = 'V3·ALB'
- unparsed cell cpdd695-tbl-0003:row15:col4 = '−1.03, −0.0714'
- unparsed cell cpdd695-tbl-0003:row16:col1 = 'V3·WT'
- unparsed cell cpdd695-tbl-0003:row16:col4 = '0.0644, 0.972'
- unparsed cell cpdd695-tbl-0003:row17:col4 = '8.51, 9.02'
- unparsed cell cpdd695-tbl-0003:row18:col1 = 'ω2CL'
- unparsed cell cpdd695-tbl-0003:row18:col4 = '0.034, 0.0638'
- unparsed cell cpdd695-tbl-0003:row19:col1 = 'ωCL,V2'
- unparsed cell cpdd695-tbl-0003:row19:col4 = '0.0462, 0.118'
- unparsed cell cpdd695-tbl-0003:row20:col1 = 'ω2V2'
- unparsed cell cpdd695-tbl-0003:row20:col4 = '0.064, 0.242'
- unparsed cell cpdd695-tbl-0003:row21:col1 = 'ω2V1'
- unparsed cell cpdd695-tbl-0003:row21:col4 = '0.0271, 0.0862'
- unparsed cell cpdd695-tbl-0003:row22:col1 = 'ω2V1,V3'
- unparsed cell cpdd695-tbl-0003:row22:col4 = '0.0293, 0.192'
- unparsed cell cpdd695-tbl-0003:row23:col1 = 'ω2v3'
- unparsed cell cpdd695-tbl-0003:row23:col4 = '0.271, 0.602'
- unparsed cell cpdd695-tbl-0003:row24:col1 = 'σ2proportional'
- unparsed cell cpdd695-tbl-0003:row24:col4 = '0.0292, 0.0432'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | not captured | 63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | not captured | 24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ12]` | 0.486 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ14]` | 0.365 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ1]` | 0.0531 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ6]` | not captured | 2.11 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['cpdd695-tbl-0003:row12:col2', 'cpdd695-tbl-0003:row12:col3'] |
| C5_dimension_Q347 | pass | 1 / [time] | not captured | not captured | not captured | ['cpdd695-tbl-0003:row14:col2', 'cpdd695-tbl-0003:row14:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dalbavancin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carrothers_2020` / `Carrothers_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:56 UTC</sub>
