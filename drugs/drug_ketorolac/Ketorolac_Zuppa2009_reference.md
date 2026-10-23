<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;ketorolac&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/&quot;},{&quot;label&quot;:&quot;Zuppa_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ketorolac_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/Ketorolac_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketorolac_Cohen2011_reference&quot;,&quot;label&quot;:&quot;Cohen_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/Ketorolac_Cohen2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketorolac_Drover2012_reference&quot;,&quot;label&quot;:&quot;Drover_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/Ketorolac_Drover2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketorolac_Villa2015_reference&quot;,&quot;label&quot;:&quot;Villa_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketorolac/Ketorolac_Villa2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ketorolac — `Ketorolac_Zuppa2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Ketorolac clearance (2.8 L/h) was flagged as physiologically implausible for neonates in this abstract-only record.

<div class="pk-model-meta" hidden drug="ketorolac" model-id="Ketorolac_Zuppa2009_reference" status="rejected" stale="false" population="neonates and young infants" measured-compound="ketorolac" parameterization="mechanistic" topology="2C"></div>

## Citation
Zuppa AF, Mondick JT, Davis L, Cohen D. Population pharmacokinetics of ketorolac in neonates and young infants. American journal of therapeutics 16(2):143–146 (2009).
  ·  DOI: [10.1097/MJT.0b013e31818071df](https://doi.org/10.1097/MJT.0b013e31818071df)

## Population and dosing

**Population:** neonates and young infants · condition healthy · age group mixed · n = 12.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance | CL | 2.8 | L/h |
| intercompartmental clearance | Q | 11.5 | mL/min |
| volume of distribution of the central compartment | V1 | 535 | mL |
| volume of distribution of the peripheral compartment | V2 | 322 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ketorolac clearance (2.8 L/h) was flagged as physiologically implausible for neonates in this abstract-only record.**

The extracted clearance value of 2.8 L/h falls outside the expected physiological range for the population. Because the record relies solely on summary statistics from the abstract, these values stand in for a fitted model. This limitation likely contributed to the failure to align the parameter magnitudes with the clinical context. Extracted — ketorolac: CL 2.8 L/h, Q 11.5 mL/min, V1 535 mL, V2 322 mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ketorolac, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | 2.8 | L/h | 7.778e-07 | m3/s | L/h | exact (1) | Zuppa_2009:abstract |
| intercompartmental clearance | `Q30` · Q | 11.5 | mL/min | 1.917e-07 | m3/s | ml/min | exact (1) | Zuppa_2009:abstract |
| volume of distribution of the central compartment | `Q63` · V1 | 535 | mL | 0.000535 | m3 | ml | boundary_compartment (0.9) | Zuppa_2009:abstract |
| volume of distribution of the peripheral compartment | `Q64` · V2 | 322 | mL | 0.000322 | m3 | ml | boundary_compartment (0.9) | Zuppa_2009:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mL x min(-1) x (kg(0.75))(-1)' (CL)
- implicit units: 'clearance' → L/h (from the popPK convention: 'The value 2.8 is consistent with the typical magnitude for total clearance in L/h for many drugs in population PK studie')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ketorolac
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Zuppa_2009_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` | 2.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 2.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` | 11.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` |  | 11.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution of the central compartment]` | 535 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution of the central compartment]` |  | 535 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution of the peripheral compartment]` | 322 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution of the peripheral compartment]` |  | 322 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ketorolac | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ketorolac | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zuppa_2009:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Zuppa_2009:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Zuppa_2009:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Zuppa_2009:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.8 | ['Zuppa_2009:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.8 L/h | ['Zuppa_2009:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.535 L | ['Zuppa_2009:abstract'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.322 L | ['Zuppa_2009:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bketorolac%5D%20Ketorolac_Zuppa2009_reference&body=Drug%3A%20ketorolac%0ARecord%3A%20Ketorolac_Zuppa2009_reference%0APaper%3A%20Zuppa_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ketorolac/Ketorolac_Zuppa2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 01:47 UTC</sub>
