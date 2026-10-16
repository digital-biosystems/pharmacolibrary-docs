<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ciltacabtagene autoleucel&quot;,&quot;href&quot;:&quot;drugs/drug_ciltacabtagene_autoleucel/&quot;},{&quot;label&quot;:&quot;Wu_2022 \u00b7 median&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ciltacabtagene autoleucel — `CiltacabtageneAutoleucel_Wu2022_median`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Ciltacabtagene autoleucel was refused as an exposure/outcome report without volume or clearance, and its fast-phase rate constant λ1 (160 day−1) had a structural-parameter dimension mismatch.**

No volume or clearance — not a compartmental population PK model. The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Separately, λ1 is the macro-rate constant for the fast phase of disposition, reported as 160 day−1; a structural parameter had a dimension mismatch, and a reported unit could not be converted to SI, leaving the affected parameter without an SI value. Extracted — ciltacabtagene autoleucel: tlag 4.85 days, MTT 10.1 days, λ1 160 day−1, Cmax 3.42e+04, AUCt 3.71e+05, tmax 14 days.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `ciltacabtagene autoleucel`, measured `ciltacabtagene autoleucel CAR transgene`.

## Citation
Wu LS et al., Population-based cellular kinetic chara…, Clinical and translational… (2022)
  ·  DOI: [10.1111/cts.13421](https://doi.org/10.1111/cts.13421)

<div class="pk-model-meta" hidden drug="ciltacabtagene autoleucel" model-id="CiltacabtageneAutoleucel_Wu2022_median" status="rejected" stale="false" population="adults with relapsed or refractory multiple myeloma" measured-compound="ciltacabtagene autoleucel CAR transgene" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T lag, days | `Q83` · tlag | 4.85 | days | 419039.99999999994 | [d] | not captured | space_fold (0.95) | Wu_2022_table_3:row0:col5 | — | not captured |
| MTT, days | `Q81` · MTT | 10.1 | days | not captured | [d] | not captured | exact (1.0) | Wu_2022_table_3:row1:col5 | — | not captured |
| α, day−1 | `Q67` · λ1 | 160 | day−1 | not captured | [1] / [d] | not captured | exact (1.0) | Wu_2022_table_3:row2:col5 | — | not captured |
| r a, day−1 | `Q900` · equation variable | 0.0154 | day−1 | not captured | [1] / [d] | not captured | llm (0.6) | Wu_2022_table_3:row3:col5 | — | not captured |
| C max, copies/μg genomic DNA | `Q32` · Cmax | 34200 | not captured | not captured | not captured | not captured | llm (0.6) | Wu_2022_table_3:row5:col5 | — | not captured |
| AUC0–28d, day⋅copies/μg genomic DNA | `Q19` · AUCt | 371000 | not captured | not captured | not captured | not captured | llm (0.6) | Wu_2022_table_3:row6:col5 | — | not captured |
| T max, days | `Q56` · tmax | 14 | days | 1209600.0 | [d] | not captured | space_fold (0.95) | Wu_2022_table_3:row7:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α, day−1' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'δ m, day−1' — extend the ontology if this is a real PK parameter (source ['Wu_2022_table_3:row4:col5'])
- dropped unlinked row (NIL): 'T BLOQ, days' — extend the ontology if this is a real PK parameter (source ['Wu_2022_table_3:row8:col5'])
- implicit units: 'C max, copies/μg genomic DNA' — the LLM proposed 'copies/μg genomic DNA', whose dimension does not fit Q32; left unset
- implicit units: 'AUC0–28d, day⋅copies/μg genomic DNA' — the LLM proposed 'day·copies/μg genomic DNA', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ciltacabtagene autoleucel CAR transgene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'median' subgroup of Wu_2022 (paper reports 3 populations: estimate a (%rse), mean, median)
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

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Wu_2022_table_3:row7:col5'] |
| C5_dimension_Q67 | fail | 1 / [time] | day−1 | not captured | not captured | ['Wu_2022_table_3:row2:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Wu_2022_table_3:row0:col5'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Wu_2022_table_3:row6:col5'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Wu_2022_table_3:row5:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ciltacabtagene_autoleucel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wu_2022` / `Wu_2022::median`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:26 UTC</sub>
