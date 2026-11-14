<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Triazolam&quot;,&quot;href&quot;:&quot;drugs/toxin_triazolam/&quot;},{&quot;label&quot;:&quot;Ji_2019 \u00b7 oral_triazolam_0_25_mg_0_24_h&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Triazolam — `Triazolam_Ji2019_oral_triazolam_0_25_mg_0_24_h`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Triazolam" model-id="Triazolam_Ji2019_oral_triazolam_0_25_mg_0_24_h" status="rejected" stale="false" population="virtual healthy volunteers" measured-compound="Triazolam" parameterization="mechanistic" topology="1C"></div>

## Citation
Ji B, Liu S, Xue Y, He X, Man VH, Xie XQ et al. Prediction of Drug-Drug Interactions Between Opioids and Overdosed Benzodiazepines Using Physiologically Based Pharmacokinetic (PBPK) Modeling and Simulation. Drugs in R&D 19(3):297–305 (2019).
  ·  DOI: [10.1007/s40268-019-00282-3](https://doi.org/10.1007/s40268-019-00282-3)

## Population and dosing

**Population:** virtual healthy volunteers · condition healthy · age group adult · n = 100.

**Dosing:** 0.1, 4, 10, 30, 500 mg / mg/kg, other, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-24h ± SD (ng·h/mL) | AUCt | 7.01 | ng·h/mL |
| Cmax ± SD (ng/mL) | Cmax | 2.02 | ng/mL |
| tmax ± SD (h) | tmax | 0.96 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-24h ± SD (ng·h/mL) | `Q19` · AUCt | 7.01 | ng·h/mL | 0.02524 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Ji_2019_table_1:row13:col2, Ji_2019_table_1:row16:col2 |
| Cmax ± SD (ng/mL) | `Q32` · Cmax | 2.02 | ng/mL | 2.02e-06 | kg/m3 | ng/ml | llm_confirmed (0.6) | Ji_2019_table_1:row13:col3, Ji_2019_table_1:row14:col3, Ji_2019_table_1:row15:col3, Ji_2019_table_1:row16:col3 |
| tmax ± SD (h) | `Q56` · tmax | 0.96 | h | 3456 | s | h | llm_confirmed (0.6) | Ji_2019_table_1:row13:col4, Ji_2019_table_1:row14:col4, Ji_2019_table_1:row15:col4, Ji_2019_table_1:row16:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'AUC0-24h ± SD (ng·h/mL)'; source reconciliation required
- table representations disagree for 'Cmax ± SD (ng/mL)'; source reconciliation required
- table representations disagree for 'tmax ± SD (h)'; source reconciliation required
- dropped value-less row: 'AUC'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'tmax'
- dropped value-less row: 'N/A'
- dropped value-less row: 'PK'
- dropped value-less row: 'SD'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Triazolam
- status held at "Needs review" — not promoted
- population split: 'oral triazolam 0.25 mg (0–24 h)' subgroup of Ji_2019 (paper reports 2 populations: oral triazolam 0.25 mg (0–24 h), triazolam po (i))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table Ji_2019_table_1: logical view retains original source coordinates
- table Tab1: representations disagree; selected evidence retained, not merged
- table Ji_2019_table_S1: unparsed_numeric_cell
- companion parameter table S1 transcribed (65 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Ji_2019_table_1:row13:col2', 'Ji_2019_table_1:row16:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Ji_2019_table_1:row13:col3', 'Ji_2019_table_1:row14:col3', 'Ji_2019_table_1:row15:col3', 'Ji_2019_table_1:row16:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Ji_2019_table_1:row13:col4', 'Ji_2019_table_1:row14:col4', 'Ji_2019_table_1:row15:col4', 'Ji_2019_table_1:row16:col4'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriazolam%5D%20Triazolam_Ji2019_oral_triazolam_0_25_mg_0_24_h&body=Drug%3A%20triazolam%0ARecord%3A%20Triazolam_Ji2019_oral_triazolam_0_25_mg_0_24_h%0APaper%3A%20Ji_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_triazolam/Triazolam_Ji2019_oral_triazolam_0_25_mg_0_24_h%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:02 UTC</sub>
