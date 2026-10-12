<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ciltacabtagene autoleucel&quot;,&quot;href&quot;:&quot;drugs/drug_ciltacabtagene_autoleucel/&quot;},{&quot;label&quot;:&quot;Wu_2022 \u00b7 estimate_a_rse&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ciltacabtagene autoleucel — `CiltacabtageneAutoleucel_Wu2022_estimate_a_rse`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Ciltacabtagene autoleucel was refused because its reported δ m equation variable (−3.85 day−1) had a structural dimension mismatch, and the paper lacked volume and clearance.**

No volume or clearance — not a compartmental population PK model. The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. The reported equation variable δ m, valued at −3.85 day−1, had a dimension mismatch as a structural parameter. A reported unit could not be converted to SI, leaving the affected parameter without an SI value. Extracted — ciltacabtagene autoleucel: tlag 1.56 days, MTT 2.36 days, λ1 5.2 day−1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has ciltacabtagene autoleucel, the second reading ciltacabtagene_autoleucel; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `ciltacabtagene autoleucel`, measured `ciltacabtagene autoleucel CAR transgene`.

## Citation
Wu LS et al., Population-based cellular kinetic chara…, Clinical and translational… (2022)
  ·  DOI: [10.1111/cts.13421](https://doi.org/10.1111/cts.13421)

<div class="pk-model-meta" hidden drug="ciltacabtagene autoleucel" model-id="CiltacabtageneAutoleucel_Wu2022_estimate_a_rse" status="rejected" stale="false" population="adults with relapsed or refractory multiple myeloma" measured-compound="ciltacabtagene autoleucel CAR transgene" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T lag, days | `Q83` · tlag | 1.56 | days | 134784.0 | [d] | 1.82 | space_fold (0.95) | cts13421-tbl-0002:row1:col2 | — | not captured |
| MTT, days | `Q81` · MTT | 2.36 | days | not captured | [d] | 1.65 | exact (1.0) | cts13421-tbl-0002:row2:col2 | — | not captured |
| α, day−1 | `Q67` · λ1 | 5.20 | day−1 | not captured | [1] / [d] | 1.94 | exact (1.0) | cts13421-tbl-0002:row3:col2 | — | not captured |
| δ m, day−1 | `Q900` · equation variable | -3.85 | day−1 | not captured | [1] / [d] | 4.57 | llm (0.6) | cts13421-tbl-0002:row5:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α, day−1' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped PD-category row 'r a, day−1' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts13421-tbl-0002:row4:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ciltacabtagene autoleucel CAR transgene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'estimate a (%rse)' subgroup of Wu_2022 (paper reports 3 populations: estimate a (%rse), mean, median)
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[δ m]` | -3.85 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | ciltacabtagene autoleucel | ciltacabtagene_autoleucel | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | ciltacabtagene autoleucel CAR transgene | CAR transgene | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q67 | fail | 1 / [time] | day−1 | not captured | not captured | ['cts13421-tbl-0002:row3:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cts13421-tbl-0002:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ciltacabtagene_autoleucel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wu_2022` / `Wu_2022::estimate_a_rse`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:26 UTC</sub>
