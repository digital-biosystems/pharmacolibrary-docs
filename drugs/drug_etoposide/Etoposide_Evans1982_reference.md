<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;etoposide&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/&quot;},{&quot;label&quot;:&quot;Evans_1982 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etoposide_Toffoli2001_mean&quot;,&quot;label&quot;:&quot;Toffoli_2001_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/Etoposide_Toffoli2001_mean.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Etoposide_Toffoli2001_mean_with_covariables&quot;,&quot;label&quot;:&quot;Toffoli_2001_mean_with_covariables&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/Etoposide_Toffoli2001_mean_with_covariables.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# etoposide — `Etoposide_Evans1982_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Etoposide's clearance of 5.2 L/h was extracted from an abstract, while all metabolite elimination rate parameters were missing.

<div class="pk-model-meta" hidden drug="etoposide" model-id="Etoposide_Evans1982_reference" status="rejected" stale="false" population="children with acute leukemia" measured-compound="etoposide" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Evans WE, Sinkule JA, Crom WR, Dow L, Look AT, Rivera G. Pharmacokinetics of Teniposide (VM26) and etoposide (VP16-213) in children with cancer. Cancer chemotherapy and pharmacology 7(2-3):147–150 (1982).
  ·  DOI: [10.1007/BF00254537](https://doi.org/10.1007/BF00254537)

## Population and dosing

**Population:** children with acute leukemia · condition acute leukemia · age group child · n = &gt;=.

**Dosed compound ≠ measured compound:** dosed teniposide and etoposide, measured etoposide.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Systemic clearances determined by model-independent methods | CL | 5.2 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Etoposide's clearance of 5.2 L/h was extracted from an abstract, while all metabolite elimination rate parameters were missing.**

The model was built from the abstract only, so the reported clearance value stands in for a fitted model. All four metabolic pathways from etoposide and teniposide to their hydroxy acids and picro-lactone isomers have no assigned elimination rate parameter. Consequently, the metabolite compartments are orphaned with no defined elimination route from the dose. Extracted — etoposide: CL 5.2 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has teniposide and etoposide, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Systemic clearances determined by model-independent methods | `Q22` · CL | 5.2 | L/h | 1.444e-06 | m3/s | L/h | llm (0.6) | Evans_1982:abstract, Evans_1982:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ml/min/m2' (CL)
- implicit units: 'Systemic clearances determined by model-independent methods' → L/h (from the popPK convention: "The parameter is described as 'Total clearance'. The value is 5.2. In population pharmacokinetics, total systemic cleara")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=etoposide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Evans_1982_metadata.yaml (2 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (1/6 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['teniposide', 'teniposide hydroxy acids', 'metabolism'], ['teniposide', 'picro-lactone isomers', 'metabolism'], ['etoposide', 'etoposide hydroxy acids', 'metabolism'], ['etoposide', 'picro-lactone isomers', 'metabolism']] | [['teniposide (vm26)', 'hydroxy acids', 'metabolism'], ['etoposide (vp16-213)', 'hydroxy acids', 'metabolism'], ['teniposide (vm26)', 'picro-lactone isomers', 'metabolism'], ['etoposide (vp16-213)', 'picro-lactone isomers', 'metabolism'], ['teniposide (vm26)', 'aglycones', 'metabolism'], ['etoposide (vp16-213)', 'aglycones', 'metabolism'], ['teniposide (vm26)', 'hydroxy acids', 'hydrolysis'], ['etoposide (vp16-213)', 'hydroxy acids', 'hydrolysis'], ['teniposide (vm26)', 'picro-lactone isomers', 'hydrolysis'], ['etoposide (vp16-213)', 'picro-lactone isomers', 'hydrolysis'], ['teniposide (vm26)', 'aglycones', 'hydrolysis'], ['etoposide (vp16-213)', 'aglycones', 'hydrolysis'], ['teniposide (vm26)', 'hydroxy acids', 'interconversion'], ['etoposide (vp16-213)', 'hydroxy acids', 'interconversion'], ['teniposide (vm26)', 'picro-lactone isomers', 'interconversion'], ['etoposide (vp16-213)', 'picro-lactone isomers', 'interconversion'], ['teniposide (vm26)', 'aglycones', 'interconversion'], ['etoposide (vp16-213)', 'aglycones', 'interconversion'], ['teniposide (vm26)', 'hydroxy acids', 'formation'], ['etoposide (vp16-213)', 'hydroxy acids', 'formation'], ['teniposide (vm26)', 'picro-lactone isomers', 'formation'], ['etoposide (vp16-213)', 'picro-lactone isomers', 'formation'], ['teniposide (vm26)', 'aglycones', 'formation'], ['etoposide (vp16-213)', 'aglycones', 'formation'], ['teniposide (vm26)', 'hydroxy acids', 'clearance'], ['etoposide (vp16-213)', 'hydroxy acids', 'clearance'], ['teniposide (vm26)', 'picro-lactone isomers', 'clearance'], ['etoposide (vp16-213)', 'picro-lactone isomers', 'clearance'], ['teniposide (vm26)', 'aglycones', 'clearance'], ['etoposide (vp16-213)', 'aglycones', 'clearance'], ['teniposide (vm26)', 'hydroxy acids', 'excretion'], ['etoposide (vp16-213)', 'hydroxy acids', 'excretion'], ['teniposide (vm26)', 'picro-lactone isomers', 'excretion'], ['etoposide (vp16-213)', 'picro-lactone isomers', 'excretion'], ['teniposide (vm26)', 'aglycones', 'excretion'], ['etoposide (vp16-213)', 'aglycones', 'excretion'], ['teniposide (vm26)', 'hydroxy acids', 'transport'], ['etoposide (vp16-213)', 'hydroxy acids', 'transport'], ['teniposide (vm26)', 'picro-lactone isomers', 'transport'], ['etoposide (vp16-213)', 'picro-lactone isomers', 'transport'], ['teniposide (vm26)', 'aglycones', 'transport'], ['etoposide (vp16-213)', 'aglycones', 'transport'], ['teniposide (vm26)', 'hydroxy acids', 'binding'], ['etoposide (vp16-213)', 'hydroxy acids', 'binding'], ['teniposide (vm26)', 'picro-lactone isomers', 'binding'], ['etoposide (vp16-213)', 'picro-lactone isomers', 'binding'], ['teniposide (vm26)', 'aglycones', 'binding'], ['etoposide (vp16-213)', 'aglycones', 'binding']] | mismatch |
| `gpt-oss-120b` | `parameters[systemic clearances determined by model-independent methods]` | 5.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearances]` |  | 5.2 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | teniposide and etoposide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | etoposide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Evans_1982:abstract', 'Evans_1982:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.2 | ['Evans_1982:abstract', 'Evans_1982:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.2 L/h | ['Evans_1982:abstract', 'Evans_1982:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Betoposide%5D%20Etoposide_Evans1982_reference&body=Drug%3A%20etoposide%0ARecord%3A%20Etoposide_Evans1982_reference%0APaper%3A%20Evans_1982%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_etoposide/Etoposide_Evans1982_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:12 UTC</sub>
