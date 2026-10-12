<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;alectinib&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/&quot;},{&quot;label&quot;:&quot;van_2025 \u00b7 3_5_5_8_years_230_mg_bid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fasted_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fasted_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fed_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fed_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alectinib — `Alectinib_van2025_3_5_5_8_years_230_mg_bid`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (AUCSS), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of clhlm: this record has none, the second reading 1710; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020)

<div class="pk-model-meta" hidden drug="alectinib" model-id="Alectinib_van2025_3_5_5_8_years_230_mg_bid" status="rejected" stale="false" population="adults with ALK-positive advanced NSCLC and virtual pediatric patients" measured-compound="alectinib" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Median AUCss | `Q18` · AUCSS | 10428 | ng·h/mL | not captured | ng·h/mL | not captured | llm_confirmed (0.6) | van_2025_table_3:row2:col4, van_2025_table_3:row2:col5, van_2025_table_3:row2:col6, van_2025_table_3:row5:col4, van_2025_table_3:row5:col5, van_2025_table_3:row5:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'P05–P95' — extend the ontology if this is a real PK parameter (source ['van_2025_table_3:row3:col4', 'van_2025_table_3:row3:col5', 'van_2025_table_3:row3:col6', 'van_2025_table_3:row6:col4', 'van_2025_table_3:row6:col5', 'van_2025_table_3:row6:col6'])
- implicit units: 'Median AUCss' → ng·h/mL (from the paper text: 'Table 3 caption states: “Median (P05‐P95) predicted AUCss (ng·h/mL)”.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alectinib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: '3.5–5.8 years—230 mg bid' subgroup of van_2025 (paper reports 4 populations: 1–3.5 years—190 mg bid, 3.5–5.8 years—230 mg bid, 5.8–7.8 years—270 mg bid, value)
- row roles (LLM): model_class=pbpk; 18/18 row label(s) assigned, 7 linked by role; re-tagged parent→M4 ×2
- molar mass: no plausible PubChem entry for 'M4' ('alectinib active metabolite') — left in mass units
- molar mass: none found for 'M4' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp470020-tbl-0001:row2:col2 = '[13]'
- unparsed cell psp470020-tbl-0001:row3:col2 = '[13]'
- unparsed cell psp470020-tbl-0001:row6:col2 = '[13, 14]'
- unparsed cell psp470020-tbl-0001:row10:col2 = '[13] and predicted by MechPeff'
- unparsed cell psp470020-tbl-0001:row16:col2 = '[14]'
- unparsed cell psp470020-tbl-0001:row18:col2 = 'Optimized parameter from [14]'
- unparsed cell psp470020-tbl-0001:row19:col2 = 'Optimized parameter from [14]'
- unparsed cell psp470020-tbl-0001:row20:col2 = 'Optimized parameter from [14]'
- unparsed cell psp470020-tbl-0001:row21:col2 = 'Optimized parameter from [14]'
- unparsed cell psp470020-tbl-0001:row22:col2 = '[14]'
- unparsed cell psp470020-tbl-0001:row23:col2 = '[14]'
- unparsed cell psp470020-tbl-0001:row24:col2 = '[14]'
- companion parameter table 3 transcribed (36 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[clhlm]` | not captured | 1710 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clintcyp3a4 m4]` | not captured | 1.71 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clintcyp3a4]` | not captured | 9.98 | only_one_extracted |
| `qwen3.8-27b` | `parameters[free fraction in plasma]` | not captured | 0.003 | only_one_extracted |
| `qwen3.8-27b` | `parameters[median aucss]` | 10428 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution at steady‐state [alectinib/m4]]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['van_2025_table_3:row2:col4', 'van_2025_table_3:row2:col5', 'van_2025_table_3:row2:col6', 'van_2025_table_3:row5:col4', 'van_2025_table_3:row5:col5', 'van_2025_table_3:row5:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_alectinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2025` / `van_2025::3_5_5_8_years_230_mg_bid`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:15 UTC</sub>
