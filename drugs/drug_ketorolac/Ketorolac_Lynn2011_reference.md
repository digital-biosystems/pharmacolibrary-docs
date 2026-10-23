<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;ketorolac&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/&quot;},{&quot;label&quot;:&quot;Lynn_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ketorolac_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/Ketorolac_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketorolac_Cohen2011_reference&quot;,&quot;label&quot;:&quot;Cohen_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/Ketorolac_Cohen2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketorolac_Drover2012_reference&quot;,&quot;label&quot;:&quot;Drover_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/Ketorolac_Drover2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketorolac_Villa2015_reference&quot;,&quot;label&quot;:&quot;Villa_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/Ketorolac_Villa2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ketorolac — `Ketorolac_Lynn2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected due to an unreachable peripheral compartment, with volume of 626 ml and clearance of 7.4 ml/min.

<div class="pk-model-meta" hidden drug="ketorolac" model-id="Ketorolac_Lynn2011_reference" status="rejected" stale="false" population="postoperative infants aged 2-18 months" measured-compound="ketorolac (R and S isomers)" parameterization="mechanistic" topology="2C"></div>

## Citation
Lynn AM, Bradford H, Kantor ED, Andrew M, Vicini P, Anderson GD. Ketorolac tromethamine: stereo-specific pharmacokinetics and single-dose use in postoperative infants aged 2-6 months. Paediatric anaesthesia 21(3):325–334 (2011).
  ·  DOI: [10.1111/j.1460-9592.2010.03484.x](https://doi.org/10.1111/j.1460-9592.2010.03484.x)

## Population and dosing

**Population:** postoperative infants aged 2-18 months · condition postoperative pain · age group mixed · n = : 39.

**Dosed compound ≠ measured compound:** dosed ketorolac, measured ketorolac (R and S isomers).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| central volume of distribution | V1 | 1130 | ml |
| peripheral volume of distribution | V2 | 626 | ml |
| clearance from the central compartment | CL | 7.4 | ml·min(-1) |
| elimination half-lives | t1/2β | 191 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected due to an unreachable peripheral compartment, with volume of 626 ml and clearance of 7.4 ml/min.**

The record defines a two-compartment structure where the peripheral volume (626 ml) is structurally unreachable from the dose. Because the data were abstract-only, summary statistics like the 191 min half-life stand in for a fitted model. This structural flaw renders the peripheral parameterization invalid regardless of the central volume (1130 ml) value. Extracted — ketorolac (R and S isomers): V1 1.13e+03 ml, V2 626 ml, CL 7.4 ml·min(-1), t1/2β 191 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ketorolac, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| central volume of distribution | `Q63` · V1 | 1130 | ml | 0.00113 | m3 | ml | boundary_compartment (0.9) | Lynn_2011:abstract |
| peripheral volume of distribution | `Q64` · V2 | 626 | ml | 0.000626 | m3 | ml | boundary_compartment (0.9) | Lynn_2011:abstract |
| clearance from the central compartment | `Q22` · CL | 7.4 | ml·min(-1) | 1.233e-07 | m3/s | ml/min | llm_confirmed (0.6) | Lynn_2011:abstract |
| elimination half-lives | `Q60` · t1/2β | 191 | min | 1.146e+04 | s | min | llm (0.6) | Lynn_2011:abstract, Lynn_2011:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ketorolac (R and S isomers)
- molar mass: none found for 'ketorolac (R and S isomers)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lynn_2011_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume of distribution]` | 1130 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` |  | 1130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance from the central compartment]` | 7.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance from the central compartment]` |  | 7.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-lives]` | 191 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` | 626 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` |  | 626 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical elimination half-life]` |  | 191 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ketorolac | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ketorolac (R and S isomers) | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lynn_2011:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Lynn_2011:abstract', 'Lynn_2011:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Lynn_2011:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Lynn_2011:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.4 | ['Lynn_2011:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.444 L/h | ['Lynn_2011:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.13 L | ['Lynn_2011:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.626 L | ['Lynn_2011:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bketorolac%5D%20Ketorolac_Lynn2011_reference&body=Drug%3A%20ketorolac%0ARecord%3A%20Ketorolac_Lynn2011_reference%0APaper%3A%20Lynn_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ketorolac/Ketorolac_Lynn2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:47 UTC</sub>
