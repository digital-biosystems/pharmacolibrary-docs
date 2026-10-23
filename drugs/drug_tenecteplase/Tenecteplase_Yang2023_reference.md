<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tenecteplase&quot;,&quot;href&quot;:&quot;drugs/drug_tenecteplase/&quot;},{&quot;label&quot;:&quot;Yang_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tenecteplase — `Tenecteplase_Yang2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="tenecteplase" model-id="Tenecteplase_Yang2023_reference" status="rejected" stale="false" population="adults with acute ischemic stroke" measured-compound="alteplase, urokinase, tenecteplase, reteplase" parameterization="mechanistic" topology="1C"></div>

## Citation
Yang Y, Gu B, Xu XY. In Silico Study of Different Thrombolytic Agents for Fibrinolysis in Acute Ischemic Stroke. Pharmaceutics 15(3) (2023).
  ·  DOI: [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797)

## Population and dosing

**Population:** adults with acute ischemic stroke · condition acute ischemic stroke · age group adult.

**Dosing:** 0.25, 0.9, 10, 1.5e+06 mixed, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka | kabs | 0 |  |
| Dissociation constant kd | KD | 0 |  |
| KM | Km | 0.16 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. None of the extracted parameters is tenecteplase's own; they describe urokinase and alteplase.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alteplase, urokinase, tenecteplase, reteplase, the second reading tenecteplase; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0 |  | exact (1) | pharmaceutics-15-00797-t002:row1:col4 |
| Dissociation constant kd | `Q331` · KD | 0 |  | llm_confirmed (0.6) | pharmaceutics-15-00797-t002:row2:col4 |
| KM | `Q1` · Km | 0.16 |  | exact (1) | pharmaceutics-15-00797-t002:row4:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q331 ('kd,tPA', value '0') — already have one for this compound
- dropped duplicate Q1 ('kM,cat', value '0.3') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alteplase, urokinase, tenecteplase, reteplase
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-15-00797-t002:row1:col1 = '0.01 μM−1s−1 [18]'
- unparsed cell pharmaceutics-15-00797-t002:row1:col2 = '0.01 μM−1s−1'
- unparsed cell pharmaceutics-15-00797-t002:row1:col3 = '0.01 μM−1s−1'
- unparsed cell pharmaceutics-15-00797-t002:row2:col1 = '0.58 μM'
- unparsed cell pharmaceutics-15-00797-t002:row2:col2 = '0.15 μM [34]'
- unparsed cell pharmaceutics-15-00797-t002:row2:col3 = '1.1 μM [35]'
- unparsed cell pharmaceutics-15-00797-t002:row3:col1 = '0.0058 s−1'
- unparsed cell pharmaceutics-15-00797-t002:row3:col2 = '0.0015 s−1 [34]'
- unparsed cell pharmaceutics-15-00797-t002:row3:col3 = '0.011 s−1 [35]'
- unparsed cell pharmaceutics-15-00797-t002:row4:col2 = '2.8 [27]'
- unparsed cell pharmaceutics-15-00797-t002:row4:col3 = '4.6 [28]'
- unparsed cell pharmaceutics-15-00797-t002:row4:col4 = '0.81 μM [36]'
- unparsed cell pharmaceutics-15-00797-t002:row5:col2 = '0.54 [27]'
- unparsed cell pharmaceutics-15-00797-t002:row5:col3 = '0.32 [28]'
- unparsed cell pharmaceutics-15-00797-t002:row5:col4 = '2.6 s−1 [36]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[vc per body weight]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc per body weight]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc per body weight]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc per body weight]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alteplase, urokinase, tenecteplase, reteplase | tenecteplase | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alteplase, urokinase, tenecteplase, reteplase | tenecteplase | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['pharmaceutics-15-00797-t002:row4:col1'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 |  | ['pharmaceutics-15-00797-t002:row2:col4'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['pharmaceutics-15-00797-t002:row1:col4'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btenecteplase%5D%20Tenecteplase_Yang2023_reference&body=Drug%3A%20tenecteplase%0ARecord%3A%20Tenecteplase_Yang2023_reference%0APaper%3A%20Yang_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tenecteplase/Tenecteplase_Yang2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-05 23:36 UTC</sub>
