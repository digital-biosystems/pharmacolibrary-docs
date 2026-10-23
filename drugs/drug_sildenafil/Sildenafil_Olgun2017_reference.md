<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;sildenafil&quot;,&quot;href&quot;:&quot;drugs/drug_sildenafil/&quot;},{&quot;label&quot;:&quot;Olgu\u00edn_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sildenafil_Cochiusden2020_reference&quot;,&quot;label&quot;:&quot;Cochius-den_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sildenafil/Sildenafil_Cochiusden2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sildenafil — `Sildenafil_Olgun2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The sildenafil record was rejected because it is an exposure/outcome paper lacking compartmental PK parameters like volume or clearance.

<div class="pk-model-meta" hidden drug="sildenafil" model-id="Sildenafil_Olgun2017_reference" status="rejected" stale="false" population="children with pulmonary arterial hypertension" measured-compound="sildenafil" parameterization="mechanistic" topology="1C"></div>

## Citation
Olguín HJ, Martínez HO, Pérez CF, Mendiola BR, Espinosa LR, Pacheco JLC et al. Pharmacokinetics of sildenafil in children with pulmonary arterial hypertension. World journal of pediatrics : WJP 13(6):588–592 (2017).
  ·  DOI: [10.1007/s12519-017-0043-4](https://doi.org/10.1007/s12519-017-0043-4)

## Population and dosing

**Population:** children with pulmonary arterial hypertension · condition pulmonary arterial hypertension · age group child · n = 12.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absorption rate constants (Ka) | kabs | 0.343 | hour-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The sildenafil record was rejected because it is an exposure/outcome paper lacking compartmental PK parameters like volume or clearance.**

The paper reports summary statistics such as Cmax, tmax, and AUC∞, but does not provide a fitted compartmental model structure. Consequently, key structural parameters like volume of distribution and clearance are absent from the analysis. The record relies on abstract-only data, meaning no actual population PK model was built or validated. Extracted — sildenafil: kabs 0.343 hour-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sildenafil, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| absorption rate constants (Ka) | `Q49` · kabs | 0.343 | hour-1 | 9.528e-05 | 1/s | 1/h | llm_confirmed (0.6) | Olguín_2017:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| maximal concentration (Cmax) | Q32 | llm_confirmed |
| time to maximal concentration | Q56 | llm_confirmed |
| elimination half-life (t1/2) | Q57 | llm |
| total clearance (CLtot/F) | Q22 | exact |
| volume of distribution (Vd/F) | Q61 | exact |
| area under curve from zero to infinity | Q17 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'elimination rate (Ke)' (captured trailing unit 'Ke' for child rows)
- unit_dimension_mismatch: 'area under curve from zero to infinity' → Q17 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (total clearance (CLtot/F)); Q61 (volume of distribution (Vd/F))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sildenafil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Olguín_2017_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constants]` | 0.343 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constants]` |  | 0.343 | only_one_extracted |
| `gpt-oss-120b` | `parameters[area under curve from zero to infinity]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[area under curve from zero to infinity]` |  | 2061 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` |  | 2.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination rate]` |  | 0.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal concentration]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal concentration]` |  | 366 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to maximal concentration]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to maximal concentration]` |  | 0.92 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` |  | 5.85 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 20.13 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sildenafil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sildenafil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q17 | fail | [mass] / [length] ** 3 / [time] | ng/mL/hour | ['Olguín_2017:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Olguín_2017:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Olguín_2017:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Olguín_2017:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Olguín_2017:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Olguín_2017:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Olguín_2017:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsildenafil%5D%20Sildenafil_Olgun2017_reference&body=Drug%3A%20sildenafil%0ARecord%3A%20Sildenafil_Olgun2017_reference%0APaper%3A%20Olgu%C3%ADn_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sildenafil/Sildenafil_Olgun2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:06 UTC</sub>
