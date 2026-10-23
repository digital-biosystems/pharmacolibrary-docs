<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ciltacabtagene autoleucel&quot;,&quot;href&quot;:&quot;drugs/drug_ciltacabtagene_autoleucel/&quot;},{&quot;label&quot;:&quot;Wu_2022 \u00b7 mean&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ciltacabtagene autoleucel — `CiltacabtageneAutoleucel_Wu2022_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The ciltacabtagene autoleucel record reports λ1 = 209 day−1, yet provides no distribution volume or clearance and has a structural-parameter dimension mismatch.

<div class="pk-model-meta" hidden drug="ciltacabtagene autoleucel" model-id="CiltacabtageneAutoleucel_Wu2022_mean" status="rejected" stale="false" population="adults with relapsed or refractory multiple myeloma" measured-compound="ciltacabtagene autoleucel CAR transgene" parameterization="mechanistic" topology="1C"></div>

## Citation
Wu LS, Su Y, Li C, Zhou W, Jackson CC, Sun YN et al. Population-based cellular kinetic characterization of ciltacabtagene autoleucel in subjects with relapsed or refractory multiple myeloma. Clinical and translational science 15(12):3000–3011 (2022).
  ·  DOI: [10.1111/cts.13421](https://doi.org/10.1111/cts.13421)

## Population and dosing

**Population:** adults with relapsed or refractory multiple myeloma · condition relapsed or refractory multiple myeloma · age group adult · n = 97.

**Dosing:** 0.5, 1 × 10^6 CAR-positive viable T-cells/kg body weight, iv, single.

**Dosed compound ≠ measured compound:** dosed ciltacabtagene autoleucel, measured ciltacabtagene autoleucel CAR transgene.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T lag, days | tlag | 4.99 | days |
| MTT, days | MTT | 10.4 | days |
| α, day−1 | λ1 | 209 | day−1 |
| C max, copies/μg genomic DNA | Cmax | 39520 |  |
| AUC0–28d, day⋅copies/μg genomic DNA | AUCt | 472000 |  |
| T max, days | tmax | 14.1 | days |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ciltacabtagene autoleucel record reports λ1 = 209 day−1, yet provides no distribution volume or clearance and has a structural-parameter dimension mismatch.**

No volume or clearance — not a compartmental population PK model. The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. The listed λ1 is a fast-phase disposition rate constant, reported as 209 day−1; the findings identify a structural-parameter dimension mismatch but do not say which parameter has it. A reported unit could not be converted to SI, leaving that parameter without an SI value. Extracted — ciltacabtagene autoleucel: tlag 4.99 days, MTT 10.4 days, λ1 209 day−1, Cmax 3.95e+04, AUCt 4.72e+05, tmax 14.1 days.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T lag, days | `Q83` · tlag | 4.99 | days | 4.311e+05 | s | d | space_fold (0.95) | Wu_2022_table_3:row0:col1 |
| MTT, days | `Q81` · MTT | 10.4 | days |  |  | d | exact (1) | Wu_2022_table_3:row1:col1 |
| α, day−1 | `Q67` · λ1 | 209 | day−1 |  |  | 1/d | exact (1) | Wu_2022_table_3:row2:col1 |
| C max, copies/μg genomic DNA | `Q32` · Cmax | 39520 |  |  |  |  | llm (0.6) | Wu_2022_table_3:row5:col1 |
| AUC0–28d, day⋅copies/μg genomic DNA | `Q19` · AUCt | 472000 |  |  |  |  | llm (0.6) | Wu_2022_table_3:row6:col1 |
| T max, days | `Q56` · tmax | 14.1 | days | 1.218e+06 | s | d | space_fold (0.95) | Wu_2022_table_3:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α, day−1' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped PD-category row 'r a, day−1' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Wu_2022_table_3:row3:col1'])
- dropped unlinked row (NIL): 'δ m, day−1' — extend the ontology if this is a real PK parameter (source ['Wu_2022_table_3:row4:col1'])
- dropped unlinked row (NIL): 'T BLOQ, days' — extend the ontology if this is a real PK parameter (source ['Wu_2022_table_3:row8:col1'])
- implicit units: 'C max, copies/μg genomic DNA' — the LLM proposed 'copies/μg genomic DNA', whose dimension does not fit Q32; left unset
- implicit units: 'AUC0–28d, day⋅copies/μg genomic DNA' — the LLM proposed 'day⋅copies/μg genomic DNA', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ciltacabtagene autoleucel CAR transgene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'mean' subgroup of Wu_2022 (paper reports 3 populations: estimate a (%rse), mean, median)
- molar mass: no plausible PubChem entry for 'ciltacabtagene autoleucel CAR transgene' ('ciltacabtagene autoleucel CAR transgene') — left in mass units
- molar mass: none found for 'ciltacabtagene_autoleucel' — its concentrations stay mass-only
- molar mass: none found for 'ciltacabtagene autoleucel CAR transgene' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Wu_2022_table_3:row6:col6 = '1,150,000'
- unparsed cell Wu_2022_table_3:row6:col7 = '1,550,000'
- companion parameter table 3 transcribed (61 record(s))
- LLM selected parameter table(s) 2, 3
- LLM region Wu_2022:results_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q56 | pass | [time] |  | ['Wu_2022_table_3:row7:col1'] |
| C5_dimension_Q67 | fail | 1 / [time] | day−1 | ['Wu_2022_table_3:row2:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Wu_2022_table_3:row0:col1'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  | ['Wu_2022_table_3:row6:col1'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['Wu_2022_table_3:row5:col1'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bciltacabtagene_autoleucel%5D%20CiltacabtageneAutoleucel_Wu2022_mean&body=Drug%3A%20ciltacabtagene_autoleucel%0ARecord%3A%20CiltacabtageneAutoleucel_Wu2022_mean%0APaper%3A%20Wu_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ciltacabtagene_autoleucel/CiltacabtageneAutoleucel_Wu2022_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:26 UTC</sub>
