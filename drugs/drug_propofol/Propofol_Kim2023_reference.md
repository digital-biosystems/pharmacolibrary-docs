<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;propofol&quot;,&quot;href&quot;:&quot;drugs/drug_propofol/&quot;},{&quot;label&quot;:&quot;Kim_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propofol_Eleveld2018_reference&quot;,&quot;label&quot;:&quot;Eleveld_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propofol/Propofol_Eleveld2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propofol_Jones1990_reference&quot;,&quot;label&quot;:&quot;Jones_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propofol/Propofol_Jones1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propofol_de2025_reference&quot;,&quot;label&quot;:&quot;de_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propofol/Propofol_de2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propofol — `Propofol_Kim2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The two-compartment model structure conflicts with the extracted three-compartment volume and terminal half-life parameters.

<div class="pk-model-meta" hidden drug="propofol" model-id="Propofol_Kim2023_reference" status="rejected" stale="false" population="Korean elderly subjects" measured-compound="propofol" parameterization="mechanistic" topology="2C"></div>

## Citation
Kim KM, Choi BM, Noh GJ. Population pharmacokinetic and pharmacodynamic model of propofol externally validated in Korean elderly subjects. Journal of pharmacokinetics and pharmacodynamics 50(2):97–109 (2023).
  ·  DOI: [10.1007/s10928-022-09836-6](https://doi.org/10.1007/s10928-022-09836-6)

## Population and dosing

**Population:** Korean elderly subjects · condition healthy · age group elderly · n = 31.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V1 | V1 | 8.36 | L |
| V2 | V2 | 58.0 | L |
| V3 | V3 | 650 | L |
| Cl | CL | 1.26 | L/min |
| Q1 | Q | 0.917 | L/min |
| γ | t1/2γ | 2.89 | /min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The two-compartment model structure conflicts with the extracted three-compartment volume and terminal half-life parameters.**

The record lists a second peripheral volume (V3) of 650 L and a terminal half-life (t1/2γ) of 2.89 min, which define a three-compartment system. However, the model structure is explicitly recorded as two compartments, creating a dimensional mismatch between the parameters and the topology. This inconsistency is compounded by the fact that the record relies on abstract-only summary statistics rather than a fully fitted model. Extracted — propofol: V1 8.36 L, V2 58 L, V3 650 L, CL 1.26 L/min, Q 0.917 L/min, t1/2γ 2.89 /min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has propofol, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | 8.36 | L | 0.00836 | m3 | l | exact (1) | Kim_2023:abstract |
| V2 | `Q64` · V2 | 58.0 | L | 0.058 | m3 | l | exact (1) | Kim_2023:abstract |
| V3 | `Q77` · V3 | 650 | L | 0.65 | m3 | l | exact (1) | Kim_2023:abstract |
| Cl | `Q22` · CL | 1.26 | L/min | 2.1e-05 | m3/s | l/min | exact (1) | Kim_2023:abstract |
| Q1 | `Q30` · Q | 0.917 | L/min | 1.528e-05 | m3/s | l/min | exact (1) | Kim_2023:abstract |
| γ | `Q89` · t1/2γ | 2.89 | /min |  |  | 1/min | llm (0.6) | Kim_2023:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('Q2', value 0.669) — already have one for this compound
- dropped PD-category row 'E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Kim_2023:abstract'])
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Kim_2023:abstract'])
- dropped PD-category row 'Ce50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Kim_2023:abstract'])
- unit_dimension_mismatch: 'γ' → Q89 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped PD-category row 'ke0' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Kim_2023:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propofol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kim_2023_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.133 (2/15 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 1.26 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 1.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1]` | 0.917 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1]` |  | 0.917 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 8.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 8.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 58.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 58.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 650 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 650 | only_one_extracted |
| `gpt-oss-120b` | `parameters[γ]` | 2.89 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | propofol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | propofol | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kim_2023:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Kim_2023:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Kim_2023:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Kim_2023:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Kim_2023:abstract'] |
| C5_dimension_Q89 | fail | 1 / [time] | /min | ['Kim_2023:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.26 | ['Kim_2023:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 75.6 L/h | ['Kim_2023:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.36 L | ['Kim_2023:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 58 L | ['Kim_2023:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropofol%5D%20Propofol_Kim2023_reference&body=Drug%3A%20propofol%0ARecord%3A%20Propofol_Kim2023_reference%0APaper%3A%20Kim_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propofol/Propofol_Kim2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:27 UTC</sub>
