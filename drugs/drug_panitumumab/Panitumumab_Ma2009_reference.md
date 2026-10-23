<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;panitumumab&quot;,&quot;href&quot;:&quot;drugs/drug_panitumumab/&quot;},{&quot;label&quot;:&quot;Ma_2009 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# panitumumab — `Panitumumab_Ma2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The peripheral compartment is unreachable from the dose, and the record relies on abstract-only summary statistics rather than a fitted model.

<div class="pk-model-meta" hidden drug="panitumumab" model-id="Panitumumab_Ma2009_reference" status="rejected" stale="false" population="patients with advanced solid tumors" measured-compound="panitumumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Ma P, Yang BB, Wang YM, Peterson M, Narayanan A, Sutjandra L et al. Population pharmacokinetic analysis of panitumumab in patients with advanced solid tumors. Journal of clinical pharmacology 49(10):1142–1156 (2009).
  ·  DOI: [10.1177/0091270009344989](https://doi.org/10.1177/0091270009344989)

## Population and dosing

**Population:** patients with advanced solid tumors · condition advanced solid tumors · age group adult.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| linear clearance (CL) | CL | 0.273 | L/d |
| central volume of distribution (V(1)) | V1 | 3.95 | L |
| peripheral volume of distribution (V(2)) | V2 | 2.59 | L |
| Michaelis-Menten constant (K(m)) | Km | 0.426 | mcg/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.308). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The peripheral compartment is unreachable from the dose, and the record relies on abstract-only summary statistics rather than a fitted model.**

The two-compartment structure includes a peripheral volume of 2.59 L, but the record flags this compartment as unreachable from the dose. Additionally, the model was built from the abstract alone, so the reported clearance of 0.273 L/d and other parameters are summary statistics standing in for a fitted model. Extracted — panitumumab: CL 0.273 L/d, V1 3.95 L, V2 2.59 L, Km 0.426 mcg/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc difference: this record has none, the second reading 8; it also differs on 8 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| linear clearance (CL) | `Q22` · CL | 0.273 | L/d | 3.16e-09 | m3/s | l/d | llm_confirmed (0.6) | Ma_2009:abstract |
| central volume of distribution (V(1)) | `Q63` · V1 | 3.95 | L | 0.00395 | m3 | l | boundary_compartment (0.9) | Ma_2009:abstract |
| peripheral volume of distribution (V(2)) | `Q64` · V2 | 2.59 | L | 0.00259 | m3 | l | boundary_compartment (0.9) | Ma_2009:abstract |
| Michaelis-Menten constant (K(m)) | `Q1` · Km | 0.426 | mcg/mL |  |  | µg/ml | llm (0.6) | Ma_2009:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('maximum nonlinear clearance (V(max)/K(m))', value 28.4) — already have one for this compound
- dropped unlinked row (NIL): 'immunogenicity rate' — extend the ontology if this is a real PK parameter (source ['Ma_2009:abstract'])
- dropped unlinked row (NIL): 'AUC difference' — extend the ontology if this is a real PK parameter (source ['Ma_2009:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=panitumumab
- molar mass: none found for 'panitumumab' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ma_2009_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc difference]` |  | 8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution (v(1))]` | 3.95 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.273 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` |  | 0.426 | only_one_extracted |
| `gpt-oss-120b` | `parameters[linear clearance]` | 0.273 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[michaelis-menten constant (k(m))]` | 0.426 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution (v(2))]` | 2.59 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v(max)/k]` |  | 28.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  | 3.95 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Ma_2009:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ma_2009:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Ma_2009:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Ma_2009:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.273 | ['Ma_2009:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0114 L/h | ['Ma_2009:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.95 L | ['Ma_2009:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.59 L | ['Ma_2009:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpanitumumab%5D%20Panitumumab_Ma2009_reference&body=Drug%3A%20panitumumab%0ARecord%3A%20Panitumumab_Ma2009_reference%0APaper%3A%20Ma_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_panitumumab/Panitumumab_Ma2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:04 UTC</sub>
