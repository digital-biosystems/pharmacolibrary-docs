<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;clofarabine&quot;,&quot;href&quot;:&quot;drugs/drug_clofarabine/&quot;},{&quot;label&quot;:&quot;Nijstad_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clofarabine_Bonate2011_reference&quot;,&quot;label&quot;:&quot;Bonate_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clofarabine — `Clofarabine_Nijstad2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:37 UTC (Needs review), but the paper was screened again on 2026-10-07 16:39 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No value for clofarabine's clearance and volume of distribution.

<div class="pk-model-meta" hidden drug="clofarabine" model-id="Clofarabine_Nijstad2021_reference" status="rejected" stale="true" population="paediatric patients and one adult undergoing allogeneic HCT" measured-compound="clofarabine" parameterization="mechanistic" topology="1C"></div>

## Citation
Nijstad AL, Nierkens S, Lindemans CA, Boelens JJ, Bierings M, Versluys AB et al. Population pharmacokinetics of clofarabine for allogeneic hematopoietic cell transplantation in paediatric patients. British journal of clinical pharmacology 87(8):3218–3226 (2021).
  ·  DOI: [10.1111/bcp.14738](https://doi.org/10.1111/bcp.14738)

## Population and dosing

**Population:** paediatric patients and one adult undergoing allogeneic HCT · age group mixed · n = condition.

**Dosing:** 120 mg/m2, iv, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLnon − renal,70kg (L/h) | CLNR | 24.0 | L/h |
| CLrenal,70kg (L/h) | CLR | 29.8 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for clofarabine's clearance and volume of distribution.**

The model was built, but clofarabine's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — clofarabine: CLNR 24 L/h, CLR 29.8 L/h, V 186 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clofarabine, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLnon − renal,70kg (L/h) | `Q79` · CLNR | 24.0 | L/h | 6.667e-06 | m3/s | l/h | llm (0.6) | bcp14738-tbl-0002:row3:col1, bcp14738-tbl-0002:row3:col2 |
| CLrenal,70kg (L/h) | `Q26` · CLR | 29.8 | L/h | 8.278e-06 | m3/s | l/h | llm (0.6) | bcp14738-tbl-0002:row4:col1, bcp14738-tbl-0002:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL=CLnon−renal+CLrenal×RF×BW700.75 | Q22 | llm_confirmed |
| V1=V170kg×BW701 | Q63 | llm_confirmed |
| V2=V270kg×BW701 | Q64 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Unexplained interindividual variability in exposure clearance' routed out of structural estimates ('Unexplained interindividual variability in exposure clearance was observed (17.8%, 95% CI 14.6–22.4).')
- dropped unlinked row (NIL): 'RF=eGFRL/h×70BWeGFRSTD' — extend the ontology if this is a real PK parameter (source ['bcp14738-tbl-0002:row2:col1', 'bcp14738-tbl-0002:row2:col2'])
- dropped duplicate Q63 ('V170kg (L)', value '268') — already have one for this compound
- dropped unlinked row (NIL): 'V270kg (L)' — extend the ontology if this is a real PK parameter (source ['bcp14738-tbl-0002:row8:col1', 'bcp14738-tbl-0002:row8:col2'])
- dropped unlinked row (NIL): 'Q=Q70kg×BW700.75' — extend the ontology if this is a real PK parameter (source ['bcp14738-tbl-0002:row9:col1', 'bcp14738-tbl-0002:row9:col2'])
- dropped unlinked row (NIL): 'Q70kg (L/h)' — extend the ontology if this is a real PK parameter (source ['bcp14738-tbl-0002:row10:col1', 'bcp14738-tbl-0002:row10:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clofarabine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl=clnon-renal+clrenal×rf×bw700.75]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl=clnon-renal+clrenal×rf×bw700.75]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clnon - renal,70kg]` | 24.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clnon - renal,70kg]` |  | 24.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrenal,70kg]` | 29.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrenal,70kg]` |  | 29.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q=q70kg×bw700.75]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v170kg]` |  | 268 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1=v170kg×bw701]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1=v170kg×bw701]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2=v270kg×bw701]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2=v270kg×bw701]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | clofarabine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clofarabine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['bcp14738-tbl-0002:row4:col1', 'bcp14738-tbl-0002:row4:col2'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['bcp14738-tbl-0002:row3:col1', 'bcp14738-tbl-0002:row3:col2'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclofarabine%5D%20Clofarabine_Nijstad2021_reference&body=Drug%3A%20clofarabine%0ARecord%3A%20Clofarabine_Nijstad2021_reference%0APaper%3A%20Nijstad_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clofarabine/Clofarabine_Nijstad2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:39 UTC</sub>
