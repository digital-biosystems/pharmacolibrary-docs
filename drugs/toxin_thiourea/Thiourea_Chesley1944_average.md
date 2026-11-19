<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Thiourea&quot;,&quot;href&quot;:&quot;drugs/toxin_thiourea/&quot;},{&quot;label&quot;:&quot;Chesley_1944 \u00b7 average&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Thiourea — `Thiourea_Chesley1944_average`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because thiourea's volume of distribution is listed as 2.5 µl, a physiologically implausible value likely resulting from a unit scaling error.

<div class="pk-model-meta" hidden drug="Thiourea" model-id="Thiourea_Chesley1944_average" status="rejected" stale="false" population="normal subjects and postpartum women" measured-compound="Thiourea" parameterization="mechanistic" topology="1C"></div>

## Citation
Chesley LC. OBSERVATIONS ON THE ABSORPTION, APPARENT VOLUME OF DISTRIBUTION, AND EXCRETION OF THIOUREA. The Journal of clinical investigation 23(5):856–858 (1944).
  ·  DOI: [10.1172/JCI101558](https://doi.org/10.1172/JCI101558)

## Population and dosing

**Population:** normal subjects and postpartum women · condition healthy · age group adult · n = 6.

**Dosing:** 1000 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Apparent volume of thiourea distribution, as percentage of body weight | Vnorm | 155 |  |
| Recovery of thiourea in urine, mgm. | Ae | 81.2 | mg |
| Volume | V | 2.5 | μl |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because thiourea's volume of distribution is listed as 2.5 µl, a physiologically implausible value likely resulting from a unit scaling error.**

The reported volume of 2.5 µl is orders of magnitude smaller than any physiological compartment, failing the plausibility check. The original units could not be converted to standard SI units, leaving the parameter in a non-standard form. This unconvertible unit and implausible magnitude caused the model to be refused. Extracted — thiourea: Vnorm 155, Ae 81.2 mg, V 2.5 μl.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Apparent volume of thiourea distribution, as percentage of body weight | `Q352` · Vnorm | 155 |  |  |  |  | llm_corrected (0.6) | Chesley_1944_table_p2_1:row4:col8, Chesley_1944_table_p2_1:row6:col8, Chesley_1944_table_p2_1:row10:col8 |
| Recovery of thiourea in urine, mgm. | `Q91` · Ae | 81.2 | mg |  |  | mg | llm (0.6) | Chesley_1944_table_p2_1:row11:col8, Chesley_1944_table_p2_1:row12:col8, Chesley_1944_table_p2_1:row13:col8 |
| Volume | `Q61` · V | 2.5 | μl | 2.5e-09 | m3 | L | review_gapfill (0.7) | Abás_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'Apparent volume of thiourea distribution, as percentage of body weight' — the LLM proposed '%', whose dimension does not fit Q352; left unset
- implicit units: 'Recovery of thiourea in urine, mgm.' → mg (from the paper text: "Table caption: '...and the recovery of ingested thiourea from urine'; Text: 'given 1000-mgm. of thiourea... mgm. ingeste")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Thiourea
- population split: 'average' subgroup of Chesley_1944 (paper reports 2 populations: average, average concentration of thiourea in serum water)
- gap-filled Q61 (V) from Abás_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Chesley_1944_table_p2_1: unknown_column_role
- table Chesley_1944_table_p2_1: units_need_context
- table Chesley_1944_table_p2_1: ragged_grid
- table Chesley_1944_table_p2_1: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 1 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Abás_2021:review'] |
| C5_dimension_Q91 | pass | [mass] |  | ['Chesley_1944_table_p2_1:row11:col8', 'Chesley_1944_table_p2_1:row12:col8', 'Chesley_1944_table_p2_1:row13:col8'] |
| C5_unit_missing_Q352 | fail | [length] ** 3 |  | ['Chesley_1944_table_p2_1:row4:col8', 'Chesley_1944_table_p2_1:row6:col8', 'Chesley_1944_table_p2_1:row10:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 2.5e-06 L | ['Abás_2021:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthiourea%5D%20Thiourea_Chesley1944_average&body=Drug%3A%20thiourea%0ARecord%3A%20Thiourea_Chesley1944_average%0APaper%3A%20Chesley_1944%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thiourea/Thiourea_Chesley1944_average%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 09:27 UTC</sub>
