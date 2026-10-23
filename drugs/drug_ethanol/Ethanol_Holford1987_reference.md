<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;ethanol&quot;,&quot;href&quot;:&quot;drugs/drug_ethanol/&quot;},{&quot;label&quot;:&quot;Holford_1987 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ethanol — `Ethanol_Holford1987_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The ethanol record was rejected because breath clearance was 0.16 L/h while volume of distribution was 37 L, a dimensionally inconsistent parameter pairing.

<div class="pk-model-meta" hidden drug="ethanol" model-id="Ethanol_Holford1987_reference" status="rejected" stale="false" population="adults" measured-compound="ethanol" parameterization="mechanistic" topology="1C"></div>

## Citation
Holford NH. Clinical pharmacokinetics of ethanol. Clinical pharmacokinetics 13(5):273–292 (1987).
  ·  DOI: [10.2165/00003088-198713050-00001](https://doi.org/10.2165/00003088-198713050-00001)

## Population and dosing

**Population:** adults · condition healthy · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volume of distribution estimated from blood concentrations | V | 37 | L/70 kg |
| amounts excreted in urine | Ae | 0.3 | % |
| amounts excreted in sweat | fe | 0.1 | % |
| typical extraction ratio | E | 0.2 |  |
| breath clearance at rest | CL | 0.16 | L/h |
| renal clearance of ethanol | CLR | 0.06 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ethanol record was rejected because breath clearance was 0.16 L/h while volume of distribution was 37 L, a dimensionally inconsistent parameter pairing.**

The source text was abstract-only, so summary statistics stood in for a fitted model. The recorded breath clearance value was 0.16 L/h. The recorded volume of distribution value was 37 L. A second reader disagreed that these values could be identified from the abstract. Extracted — ethanol: V 37 L/70 kg, Ae 0.3 %, fe 0.1 %, E 0.2, CL 0.16 L/h, CLR 0.06 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ethanol, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of distribution estimated from blood concentrations | `Q61` · V | 37 | L/70 kg | 0.037 | m3 | l/70kg | llm_confirmed (0.6) | Holford_1987:abstract |
| amounts excreted in urine | `Q91` · Ae | 0.3 | % |  |  | % | llm (0.6) | Holford_1987:abstract |
| amounts excreted in sweat | `Q44` · fe | 0.1 | % |  |  | % | llm (0.6) | Holford_1987:abstract |
| typical extraction ratio | `Q38` · E | 0.2 |  |  |  |  | llm_confirmed (0.6) | Holford_1987:abstract |
| breath clearance at rest | `Q22` · CL | 0.16 | L/h | 4.444e-08 | m3/s | l/h | llm_confirmed (0.6) | Holford_1987:abstract |
| renal clearance of ethanol | `Q26` · CLR | 0.06 | L/h | 1.667e-08 | m3/s | l/h | llm_confirmed (0.6) | Holford_1987:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'amounts excreted in the breath' — extend the ontology if this is a real PK parameter (source ['Holford_1987:abstract'])
- unit_dimension_mismatch: 'amounts excreted in urine' → Q91 (unit 'dimensionless' vs ontology '[mass]') — route to review
- dropped value-less row: 'blood:expired air ratio'
- dropped unlinked row (NIL): 'sweat clearance' — extend the ontology if this is a real PK parameter (source ['Holford_1987:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ethanol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Holford_1987_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[amounts excreted in sweat]` | 0.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[amounts excreted in urine]` | 0.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[blood:expired air ratio]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[breath clearance at rest]` | 0.16 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[breath clearance]` |  | 0.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[breath excretion]` |  | 0.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[extraction ratio]` |  | 0.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance of ethanol]` | 0.06 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` |  | 0.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical extraction ratio]` | 0.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution estimated from blood concentrations]` | 37 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 37 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ethanol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ethanol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Holford_1987:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Holford_1987:abstract'] |
| C5_dimension_Q44 | pass | dimensionless |  | ['Holford_1987:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Holford_1987:abstract'] |
| C5_dimension_Q91 | fail | dimensionless | % | ['Holford_1987:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.16 | ['Holford_1987:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.16 L/h | ['Holford_1987:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 37 L | ['Holford_1987:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethanol%5D%20Ethanol_Holford1987_reference&body=Drug%3A%20ethanol%0ARecord%3A%20Ethanol_Holford1987_reference%0APaper%3A%20Holford_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ethanol/Ethanol_Holford1987_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:45 UTC</sub>
