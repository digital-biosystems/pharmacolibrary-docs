<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;rituximab&quot;,&quot;href&quot;:&quot;drugs/drug_rituximab/&quot;},{&quot;label&quot;:&quot;Pasquiers_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rituximab_Bender2024_reference&quot;,&quot;label&quot;:&quot;Bender_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rituximab/Rituximab_Bender2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rituximab_Liu2022_reference&quot;,&quot;label&quot;:&quot;Liu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rituximab/Rituximab_Liu2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Li_2024_E&quot;,&quot;label&quot;:&quot;Li_2024 \u00b7 E&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_rituximab/pd_Li_2024_E.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rituximab — `Rituximab_Pasquiers2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.917). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — rituximab: CL 0.15 L/day, V1 2.54 L, V2 3.11 L, Q 1.04 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q315: this record has none, the second reading 0.17. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Pasquiers B et al., Comparison of rituximab induction and m…, EBioMedicine (2025)
  ·  DOI: [10.1016/j.ebiom.2025.105989](https://doi.org/10.1016/j.ebiom.2025.105989)

<div class="pk-model-meta" hidden drug="rituximab" model-id="Rituximab_Pasquiers2025_reference" status="rejected" stale="false" population="adults with ANCA-associated vasculitis" measured-compound="rituximab" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/day) | `Q22` · CL | 0.15 | L/day | 1.7361111111111109e-09 | [l] / [d] | not captured | exact (1.0) | tbl2:row2:col1, tbl2:row2:col2 | — | 0.38 (None% RSE) |
| effect_of_sex_on_cl | `Q900` · effect_of_sex_on_cl | -0.23 | not captured | not captured | not captured | 25.7 | not captured (not captured) | tbl2:row4:col1 | — | not captured |
| V1 (L) | `Q63` · V1 | 2.54 | L | 0.00254 | [l] | not captured | exact (1.0) | tbl2:row5:col1, tbl2:row5:col2 | — | 0.16 (None% RSE) |
| V2 (L) | `Q64` · V2 | 3.11 | L | 0.00311 | [l] | not captured | exact (1.0) | tbl2:row7:col1, tbl2:row7:col2 | — | not captured |
| Q (L/day) | `Q30` · Q | 1.04 | L/day | 1.2037037037037039e-08 | [l] / [d] | not captured | exact (1.0) | tbl2:row8:col1, tbl2:row8:col2 | — | not captured |
| theta_cl_age | `Q900` · theta_cl_age | -0.33 | not captured | not captured | not captured | 23.7 | not captured (not captured) | tbl2:row3:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Rituximab σprop' routed out of structural estimates ('Residual error model')
- table section residual_error: 'Gammaglobulins σprop' routed out of structural estimates ('Residual error model')
- table section residual_error: 'ANCA σprop' routed out of structural estimates ('Residual error model')
- column 'mean estimate (rse%) [shrinkage]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Effect of sex on CL' → Q900:effect_of_sex_on_cl = -0.23 (linear_fractional on Q22)
- dropped duplicate Q63 ('Effect of BW on V1', value '0.75') — already have one for this compound
- dropped unlinked row (NIL): 'BASEGG (g/L)' — extend the ontology if this is a real PK parameter (source ['tbl2:row9:col1', 'tbl2:row9:col2'])
- dropped PD-category row 'kout,GG (day−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row10:col1', 'tbl2:row10:col2'])
- dropped PD-category row 'IC50,GG (mg/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row11:col1', 'tbl2:row11:col2'])
- dropped unlinked row (NIL): 'BASEANCA (U/mL)' — extend the ontology if this is a real PK parameter (source ['tbl2:row12:col1', 'tbl2:row12:col2'])
- dropped unlinked row (NIL): 'Effect of CRP on BASEANCA' — extend the ontology if this is a real PK parameter (source ['tbl2:row13:col1', 'tbl2:row13:col2'])
- dropped unlinked row (NIL): 'MTTANCA (days)' — extend the ontology if this is a real PK parameter (source ['tbl2:row14:col1', 'tbl2:row14:col2'])
- dropped unlinked row (NIL): 'GammaANCA' — extend the ontology if this is a real PK parameter (source ['tbl2:row15:col1', 'tbl2:row15:col2'])
- dropped PD-category row 'IC50,ANCA (mg/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row16:col1', 'tbl2:row16:col2'])
- dropped PD-category row 'Effect of PR3-ANCA on IC50,ANCA' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row17:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rituximab
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- molar mass: none found for 'rituximab' — its concentrations stay mass-only

**Extraction notes:**
- table tbl2: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q315]` | not captured | 0.17 | only_one_extracted |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl2:row2:col1', 'tbl2:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl2:row8:col1', 'tbl2:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl2:row5:col1', 'tbl2:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl2:row7:col1', 'tbl2:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.15 | not captured | not captured | ['tbl2:row2:col1', 'tbl2:row2:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00625 L/h | not captured | not captured | ['tbl2:row2:col1', 'tbl2:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.54 L | not captured | not captured | ['tbl2:row5:col1', 'tbl2:row5:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.11 L | not captured | not captured | ['tbl2:row7:col1', 'tbl2:row7:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rituximab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pasquiers_2025` / `Pasquiers_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:07 UTC</sub>
