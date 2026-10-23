<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;oxcarbazepine&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/&quot;},{&quot;label&quot;:&quot;Wu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxcarbazepine — `Oxcarbazepine_Wu2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-05 09:29 UTC) predates the latest extraction (2026-10-07 07:13 UTC); the status shown comes from the current checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="oxcarbazepine" model-id="Oxcarbazepine_Wu2024_reference" status="rejected" stale="true" population="Chinese paediatric patients with epilepsy" measured-compound="MHD" parameterization="apparent" topology="1C"></div>

## Citation
Wu W, Yang WS, Xu XY, Ge XL, Lu J, Wang GF et al. Population pharmacokinetics of oxcarbazepine active metabolite in Chinese paediatric patients with epilepsy: Model-based dose optimization. Basic & clinical pharmacology & toxicology 134(5):712–726 (2024).
  ·  DOI: [10.1111/bcpt.14000](https://doi.org/10.1111/bcpt.14000)

## Population and dosing

**Population:** Chinese paediatric patients with epilepsy · condition epilepsy · age group child · n = n_subjects.

**Dosed compound ≠ measured compound:** dosed oxcarbazepine, measured MHD.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL≤2y (L/h) | CLm/F | -5.6 | L/h | 45.6 | 0.278 (None% RSE) |
| Vp (L) | V | 0.7 | L | 47.6 |  |
| Ka (h⁻¹) | kabs | 0.83 | h⁻¹ |  |  |
| k1ᵇ | kel | -4.8 | 1/h | 25 |  |
| k2ᶜ | k21 | -4.1 | 1/h | 9.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (t1/2ka ), so that value has no SI equivalent. None of the extracted parameters is oxcarbazepine's own; they describe MHD.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL≤2y (L/h) | `Q351` · CLm/F | -5.6 | L/h | -1.556e-06 | m3/s | l/h | 45.6 | exact (1) | Wu_2024_table_4:row0:col2, Wu_2024_table_4:row0:col3, Wu_2024_table_4:row0:col4, Wu_2024_table_4:row0:col5 | 0.278 (None% RSE) |
| Vp (L) | `Q61` · V | 0.7 | L | 0.0007 | m3 | l | 47.6 | exact (1) | Wu_2024_table_4:row2:col2, Wu_2024_table_4:row2:col3, Wu_2024_table_4:row2:col4, Wu_2024_table_4:row2:col5 |  |
| Ka (h⁻¹) | `Q49` · kabs | 0.83 | h⁻¹ | 0.0002306 | 1/s | 1/h |  | exact (1) | Wu_2024_table_4:row3:col1 |  |
| k1ᵇ | `Q47` · kel | -4.8 | 1/h | -0.001333 | 1/s | 1/h | 25 | exact (1) | Wu_2024_table_4:row4:col1, Wu_2024_table_4:row4:col2, Wu_2024_table_4:row4:col3, Wu_2024_table_4:row4:col4, Wu_2024_table_4:row4:col5 |  |
| k2ᶜ | `Q302` · k21 | -4.1 | 1/h | -0.001139 | 1/s | 1/h | 9.2 | llm (0.6) | Wu_2024_table_4:row5:col1, Wu_2024_table_4:row5:col2, Wu_2024_table_4:row5:col3, Wu_2024_table_4:row5:col4, Wu_2024_table_4:row5:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω [CL≤2y]' routed out of structural estimates ('Inter-individual variation')
- table section iiv: 'ω [CL&gt;2y]' routed out of structural estimates ('Inter-individual variation')
- table section iiv: 'ηCL1/F-shrinkage (%)' routed out of structural estimates ('Inter-individual variation')
- table section iiv: 'ηCL2/F-shrinkage (%)' routed out of structural estimates ('Inter-individual variation')
- dropped duplicate Q22 ('CL&gt;2y (L/h)', value '-1.5') — already have one for this compound
- dropped unlinked row (NIL): 'k3' — extend the ontology if this is a real PK parameter (source ['Wu_2024_table_4:row6:col1', 'Wu_2024_table_4:row6:col2', 'Wu_2024_table_4:row6:col3', 'Wu_2024_table_4:row6:col4', 'Wu_2024_table_4:row6:col5'])
- dropped diagnostic row 'ε-shrinkage (%)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'Model description' — extend the ontology if this is a real PK parameter (source ['Wu_2024_table_4:row18:col3'])
- implicit units: 'k1ᵇ' → 1/h (from the popPK convention: 'The parameter is a first-order elimination rate constant. In population pharmacokinetics, first-order rate constants are')
- implicit units: 'k2ᶜ' → 1/h (from the popPK convention: 'The parameter is a first-order transfer rate constant (k21). First-order rate constants are conventionally expressed as ')
- metabolite mhd: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'Vp (L)' Q63→Q61 for MHD — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=MHD
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles: 2 per-group rows of MHD clearance but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of MHD variability but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 18 linked by role
- review gap-fill skipped: this record measures 'MHD', not oxcarbazepine — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4
- unparsed cell Wu_2024_table_4:row0:col1 = '8.151ᵉ'
- unparsed cell Wu_2024_table_4:row1:col1 = '4.828ᶠ'
- unparsed cell Wu_2024_table_4:row2:col1 = '678.688ᵍ'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl≤2y]` | -5.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k1b]` | -4.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k2c]` | -4.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.83 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 0.7 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q351 | fail |  | -5.6 |  |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Wu_2024_table_4:row5:col1', 'Wu_2024_table_4:row5:col2', 'Wu_2024_table_4:row5:col3', 'Wu_2024_table_4:row5:col4', 'Wu_2024_table_4:row5:col5'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Wu_2024_table_4:row0:col2', 'Wu_2024_table_4:row0:col3', 'Wu_2024_table_4:row0:col4', 'Wu_2024_table_4:row0:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Wu_2024_table_4:row4:col1', 'Wu_2024_table_4:row4:col2', 'Wu_2024_table_4:row4:col3', 'Wu_2024_table_4:row4:col4', 'Wu_2024_table_4:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Wu_2024_table_4:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wu_2024_table_4:row2:col2', 'Wu_2024_table_4:row2:col3', 'Wu_2024_table_4:row2:col4', 'Wu_2024_table_4:row2:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.7 L | ['Wu_2024_table_4:row2:col2', 'Wu_2024_table_4:row2:col3', 'Wu_2024_table_4:row2:col4', 'Wu_2024_table_4:row2:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxcarbazepine%5D%20Oxcarbazepine_Wu2024_reference&body=Drug%3A%20oxcarbazepine%0ARecord%3A%20Oxcarbazepine_Wu2024_reference%0APaper%3A%20Wu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oxcarbazepine/Oxcarbazepine_Wu2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:13 UTC</sub>
