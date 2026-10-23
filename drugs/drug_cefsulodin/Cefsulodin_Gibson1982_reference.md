<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefsulodin&quot;,&quot;href&quot;:&quot;drugs/drug_cefsulodin/&quot;},{&quot;label&quot;:&quot;Gibson_1982 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefsulodin — `Cefsulodin_Gibson1982_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model record for cefsulodin in Gibson_1982 was rejected because the structural parameter Q has a dimension mismatch.

<div class="pk-model-meta" hidden drug="cefsulodin" model-id="Cefsulodin_Gibson1982_reference" status="rejected" stale="false" population="adults with normal renal function and renal impairment" measured-compound="cefsulodin" parameterization="mechanistic" topology="1C"></div>

## Citation
Gibson TP, Granneman GR, Kallal JE, Sennello LT. Cefsulodin kinetics in renal impairment. Clinical pharmacology and therapeutics 31(5):602–608 (1982).
  ·  DOI: [10.1038/clpt.1982.84](https://doi.org/10.1038/clpt.1982.84)

## Population and dosing

**Population:** adults with normal renal function and renal impairment · condition renal impairment · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Steady-state volume of distribution | Vss | 0.26 | l/kg |
| elimination half-life (t1/2) | t1/2z | 1.9 | hr |
| total body clearance (ClT) | CL | 2.01 | ml/kg/min |
| renal clearance (ClR) | CLR | 1.09 | ml/kg/ in |
| average plasma flow | Q | 122 | ml/min |
| plasma drug concentration | Ct | 60 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model record for cefsulodin in Gibson_1982 was rejected because the structural parameter Q has a dimension mismatch.**

The parameter Q is defined as apparent intercompartmental clearance but carries units of ml/min, which is inconsistent with its structural role. Additionally, the drug concentration parameter Ct is recorded with units of percent. The record was built from the abstract only, so summary statistics were used in place of fitted model parameters. Extracted — cefsulodin: Vss 0.26 l/kg, t1/2z 1.9 hr, CL 2.01 ml/kg/min, CLR 1.09 ml/kg/ in, Q 122 ml/min, Ct 60 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cefsulodin, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Steady-state volume of distribution | `Q65` · Vss | 0.26 | l/kg | 0.0182 | m3 | l/kg | llm_corrected (0.6) | Gibson_1982:abstract |
| elimination half-life (t1/2) | `Q57` · t1/2z | 1.9 | hr | 6840 | s | h | llm (0.6) | Gibson_1982:abstract |
| total body clearance (ClT) | `Q22` · CL | 2.01 | ml/kg/min | 2.345e-06 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Gibson_1982:abstract |
| renal clearance (ClR) | `Q26` · CLR | 1.09 | ml/kg/ in |  |  | ml/(kg·in) | exact (1) | Gibson_1982:abstract |
| average plasma flow | `Q30` · Q | 122 | ml/min | 2.033e-06 | m3/s | ml/min | llm (0.6) | Gibson_1982:abstract |
| plasma drug concentration | `Q75` · Ct | 60 | % |  |  | % | llm (0.6) | Gibson_1982:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'renal clearance (ClR)' → Q26 (unit '[length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q57 ('t1/2', value 2.9) — already have one for this compound
- dropped duplicate Q22 ('ClT', value 1.17) — already have one for this compound
- dropped duplicate Q26 ('ClR', value 0.65) — already have one for this compound
- dropped duplicate Q22 ('Clt', value 0.66) — already have one for this compound
- dropped duplicate Q22 ('dialyzer plasma clearance', value 50.9) — already have one for this compound
- unit_dimension_mismatch: 'plasma drug concentration' → Q75 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefsulodin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Gibson_1982_metadata.yaml (15 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[average plasma flow]` | 122 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[average plasma flow]` |  | 122 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 1.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` |  | 1.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma drug concentration was reduced by]` |  | 60 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma drug concentration]` | 60 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` | 1.09 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` |  | 1.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 0.26 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` |  | 0.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 2.01 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` |  | 2.01 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cefsulodin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cefsulodin | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gibson_1982:abstract'] |
| C5_dimension_Q26 | fail | [length] ** 2 | ml/kg/ in | ['Gibson_1982:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Gibson_1982:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Gibson_1982:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Gibson_1982:abstract'] |
| C5_dimension_Q75 | fail | dimensionless | % | ['Gibson_1982:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.01 | ['Gibson_1982:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.44 L/h | ['Gibson_1982:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 18.2 L | ['Gibson_1982:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefsulodin%5D%20Cefsulodin_Gibson1982_reference&body=Drug%3A%20cefsulodin%0ARecord%3A%20Cefsulodin_Gibson1982_reference%0APaper%3A%20Gibson_1982%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefsulodin/Cefsulodin_Gibson1982_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:21 UTC</sub>
