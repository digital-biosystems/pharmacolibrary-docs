<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01B&quot;,&quot;href&quot;:&quot;atc/R01B.md&quot;},{&quot;label&quot;:&quot;phenylpropanolamine&quot;,&quot;href&quot;:&quot;drugs/drug_phenylpropanolamine/&quot;},{&quot;label&quot;:&quot;Shargel_1990 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# phenylpropanolamine — `Phenylpropanolamine_Shargel1990_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="phenylpropanolamine" model-id="Phenylpropanolamine_Shargel1990_reference" status="rejected" stale="false" population="healthy adults" measured-compound="phenylpropanolamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Shargel L, Silverman HI, Cohen P, Brisson J, Dennis S. Bioavailability and cardiovascular safety of Dexatrim (phenylpropanolamine hydrochloride) from a controlled-release caplet. Biopharmaceutics & drug disposition 11(7):569–583 (1990).
  ·  DOI: [10.1002/bdd.2510110703](https://doi.org/10.1002/bdd.2510110703)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 12.

**Dosed compound ≠ measured compound:** dosed phenylpropanolamine hydrochloride, measured phenylpropanolamine.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (Day 1, CR caplet) | AUC | 1651 | ng·h/mL |
| tmax (Day 1, CR caplet) | tmax | 4.5 | h |
| Cmax (Day 1, CR caplet) | Cmax | 143 | ng ml-1 |
| kA (CR caplet) | kabs | 0.488 | 1/h |
| elimination half-life (CR caplet) | t1/2z | 5.84 | h |
| lag time (CR caplet) | tlag | 0.394 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has phenylpropanolamine hydrochloride, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (Day 1, CR caplet) | `Q88` · AUC | 1651 | ng·h/mL |  |  | ng·h/mL | exact (1) | Shargel_1990:abstract |
| tmax (Day 1, CR caplet) | `Q56` · tmax | 4.5 | h | 1.62e+04 | s | h | exact (1) | Shargel_1990:abstract |
| Cmax (Day 1, CR caplet) | `Q32` · Cmax | 143 | ng ml-1 |  |  | ng/ml | exact (1) | Shargel_1990:abstract |
| kA (CR caplet) | `Q49` · kabs | 0.488 | 1/h | 0.0001356 | 1/s | 1/h | exact (1) | Shargel_1990:abstract |
| elimination half-life (CR caplet) | `Q57` · t1/2z | 5.84 | h | 2.102e+04 | s | h | llm (0.6) | Shargel_1990:abstract |
| lag time (CR caplet) | `Q83` · tlag | 0.394 | h | 1418 | s | h | exact (1) | Shargel_1990:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ng x h ml-1' (AUC)
- dropped duplicate Q88 ('AUC (Day 1, solution)', value 1716) — already have one for this compound
- dropped duplicate Q56 ('tmax (Day 1, solution)', value 1.25) — already have one for this compound
- dropped duplicate Q32 ('Cmax (Day 1, solution)', value 126) — already have one for this compound
- dropped duplicate Q88 ('AUC (Day 4, CR caplet)', value 1832) — already have one for this compound
- dropped duplicate Q56 ('tmax (Day 4, CR caplet)', value 4.17) — already have one for this compound
- dropped duplicate Q32 ('Cmax (Day 4, CR caplet)', value 151) — already have one for this compound
- dropped duplicate Q88 ('AUC (Day 4, solution)', value 2014) — already have one for this compound
- dropped duplicate Q56 ('tmax (Day 4, solution)', value 1.33) — already have one for this compound
- dropped duplicate Q32 ('Cmax (Day 4, solution)', value 143) — already have one for this compound
- unit_dimension_unknown: 'ng h ml-1' (kabs)
- unit_dimension_unknown: 'ng x h ml-1' (kabs)
- dropped duplicate Q49 ('kA (solution)', value 2.87) — already have one for this compound
- dropped duplicate Q57 ('elimination half-life (solution)', value 3.73) — already have one for this compound
- dropped duplicate Q83 ('lag time (solution)', value 0.325) — already have one for this compound
- implicit units: 'AUC (Day 1, CR caplet)' → ng·h/mL (from the popPK convention: 'No unit stated in text or table footnotes. AUC values for oral dosing are conventionally reported as ng·h/mL (or µg·h/L)')
- implicit units: 'kA (CR caplet)' → 1/h (from the popPK convention: 'No unit stated in text or footnotes. A first-order absorption rate constant is conventionally in 1/h; 0.488 1/h is a pla')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=phenylpropanolamine
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Shargel_1990_metadata.yaml (18 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc]` | 1651 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 1651 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 143 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 143 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 5.84 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` |  | 5.84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.488 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.488 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.394 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` |  | 0.394 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 4.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` |  | 4.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | phenylpropanolamine hydrochloride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | phenylpropanolamine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Shargel_1990:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Shargel_1990:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Shargel_1990:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Shargel_1990:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Shargel_1990:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Shargel_1990:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenylpropanolamine%5D%20Phenylpropanolamine_Shargel1990_reference&body=Drug%3A%20phenylpropanolamine%0ARecord%3A%20Phenylpropanolamine_Shargel1990_reference%0APaper%3A%20Shargel_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_phenylpropanolamine/Phenylpropanolamine_Shargel1990_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 13:24 UTC</sub>
