<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;almotriptan&quot;,&quot;href&quot;:&quot;drugs/drug_almotriptan/&quot;},{&quot;label&quot;:&quot;Jansat_2002 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# almotriptan — `Almotriptan_Jansat2002_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected because it lacks distribution volume and elimination clearance, providing only summary statistics like bioavailability of 100% instead of a compartmental model.

<div class="pk-model-meta" hidden drug="almotriptan" model-id="Almotriptan_Jansat2002_reference" status="rejected" stale="false" population="healthy male volunteers" measured-compound="almotriptan" parameterization="mechanistic" topology="1C"></div>

## Citation
Jansat JM, Costa J, Salvà P, Fernandez FJ, Martinez-Tobed A. Absolute bioavailability, pharmacokinetics, and urinary excretion of the novel antimigraine agent almotriptan in healthy male volunteers. Journal of clinical pharmacology 42(12):1303–1310 (2002).
  ·  DOI: [10.1177/0091270002042012006](https://doi.org/10.1177/0091270002042012006)

## Population and dosing

**Population:** healthy male volunteers · condition healthy · age group adult · n = 18.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| bioavailability | Fab | 100 | % |
| time to maximum plasma concentration (tmax) | tmax | 5 | minutes |
| elimination half-life (t(1/2) | t1/2z | 3.4 | hours |
| renal clearance | CLR | 50 | % |
| k a | kabs | 0.648 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected because it lacks distribution volume and elimination clearance, providing only summary statistics like bioavailability of 100% instead of a compartmental model.**

The record includes bioavailability, absorption rate, and half-life but omits any distribution volume or elimination clearance parameter. A dimension mismatch was found on a structural parameter during review. Since the data came solely from the abstract, summary statistics stood in for a fitted population model. Extracted — almotriptan: Fab 100 %, tmax 5 minutes, t1/2z 3.4 hours, CLR 50 %, kabs 0.648 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has almotriptan, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| bioavailability | `Q40` · Fab | 100 | % |  |  |  | exact (1) | Jansat_2002:abstract, Jansat_2002:abstract |
| time to maximum plasma concentration (tmax) | `Q56` · tmax | 5 | minutes | 300 | s | min | llm (0.6) | Jansat_2002:abstract |
| elimination half-life (t(1/2) | `Q57` · t1/2z | 3.4 | hours | 1.224e+04 | s | h | llm (0.6) | Jansat_2002:abstract |
| renal clearance | `Q26` · CLR | 50 | % |  |  | % | exact (1) | Jansat_2002:abstract |
| k a | `Q49` · kabs | 0.648 | h -1 | 0.00018 | 1/s | 1/h | review_gapfill (0.7) | Chryssafidis_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'single intravenous (i.v.)' — extend the ontology if this is a real PK parameter (source ['Jansat_2002:abstract'])
- dropped unlinked row (NIL): 'subcutaneous (s.c.)' — extend the ontology if this is a real PK parameter (source ['Jansat_2002:abstract'])
- dropped unlinked row (NIL): 'oral' — extend the ontology if this is a real PK parameter (source ['Jansat_2002:abstract'])
- dropped duplicate Q56 ('tmax', value 1.5) — already have one for this compound
- unit_dimension_mismatch: 'renal clearance' → Q26 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'i.v.' — extend the ontology if this is a real PK parameter (source ['Jansat_2002:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=almotriptan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chryssafidis_2022's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jansat_2002_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[elimination half-life (t(1/2))]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 3.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.648 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance].value` | 50 |  | mismatch |
| `gpt-oss-120b` | `parameters[time to maximum plasma concentration]` | 5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | almotriptan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q26 | fail | dimensionless | % | ['Jansat_2002:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chryssafidis_2022:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Jansat_2002:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Jansat_2002:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balmotriptan%5D%20Almotriptan_Jansat2002_reference&body=Drug%3A%20almotriptan%0ARecord%3A%20Almotriptan_Jansat2002_reference%0APaper%3A%20Jansat_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_almotriptan/Almotriptan_Jansat2002_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:22 UTC</sub>
