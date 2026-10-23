<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;pipamperone&quot;,&quot;href&quot;:&quot;drugs/drug_pipamperone/&quot;},{&quot;label&quot;:&quot;Kloosterboer_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pipamperone — `Pipamperone_Kloosterboer2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The pipamperone record was rejected because the paper reports no distribution volume and no clearance, so it is not a compartmental population PK model, and the absorption rate constant kabs is given as 2 L/h, a dimensionally wrong unit for a first-order rate constant (should be 1/h).

<div class="pk-model-meta" hidden drug="pipamperone" model-id="Pipamperone_Kloosterboer2020_reference" status="rejected" stale="false" population="children and adolescents with psychiatric disorders (autism/behavioral problems)" measured-compound="pipamperone" parameterization="apparent" topology="1C"></div>

## Citation
Kloosterboer SM, Egberts KM, de Winter BCM, van Gelder T, Gerlach M, Hillegers MHJ et al. Pipamperone Population Pharmacokinetics Related to Effectiveness and Side Effects in Children and Adolescents. Clinical pharmacokinetics 59(11):1393–1405 (2020).
  ·  DOI: [10.1007/s40262-020-00894-y](https://doi.org/10.1007/s40262-020-00894-y)

## Population and dosing

**Population:** children and adolescents with psychiatric disorders (autism/behavioral problems) · condition autism spectrum disorder / behavioral problems and other psychiatric disorders · age group child · n = 30.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Kaa (L/h) | kabs | 2 | L/h |  |
| V/Fb (L/70 kg) | Vnorm/F | 416 | L/70 kg | 32 |
| a (μg/L) | C0 | 0.33 | μg/L | 8 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The pipamperone record was rejected because the paper reports no distribution volume and no clearance, so it is not a compartmental population PK model, and the absorption rate constant kabs is given as 2 L/h, a dimensionally wrong unit for a first-order rate constant (should be 1/h).**

The record for pipamperone (Kloosterboer_2020, children and adolescents with psychiatric disorders) contains only an absorption rate constant (kabs, 2 L/h), an apparent volume of distribution normalized to 70 kg (Vnorm/F, 416 L/70 kg), and an extrapolated concentration at time zero (C0, 0.33 μg/L); no clearance or elimination parameter is present, so the model structure is incomplete as a population PK model — it is an exposure/outcome paper. The absorption rate constant's reported unit L/h does not match the dimension of a rate constant, which is a structural-parameter dimension mismatch. Additionally, the reported unit could not be converted to SI, so the parameter reached the model builder without an SI value. Extracted — pipamperone: kabs 2 L/h, Vnorm/F 416 L/70 kg, C0 0.33 μg/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pipamperone, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Kaa (L/h) | `Q49` · kabs | 2 | L/h |  |  | l/h |  | llm (0.6) | Tab2:row1:col1, Tab2:row1:col2 |
| V/Fb (L/70 kg) | `Q353` · Vnorm/F | 416 | L/70 kg | 0.416 | m3 | l/70kg | 32 | llm (0.6) | Tab2:row2:col1 |
| a (μg/L) | `Q86` · C0 | 0.33 | μg/L |  |  | µg/l | 8 | llm (0.6) | Tab2:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additional error (μg/L)' routed out of structural estimates ('Residual variability')
- table section iiv: 'bodyweight' routed out of structural estimates ('After graphical analysis, the univariate analysis resulted in three significant covariates for the IIV on clearance (bodyweight, creatinine, body mass index).')
- table section iiv: 'creatinine' routed out of structural estimates ('After graphical analysis, the univariate analysis resulted in three significant covariates for the IIV on clearance (bodyweight, creatinine, body mass index).')
- table section iiv: 'body mass index' routed out of structural estimates ('After graphical analysis, the univariate analysis resulted in three significant covariates for the IIV on clearance (bodyweight, creatinine, body mass index).')
- unit_dimension_mismatch: 'Kaa (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'a (μg/L)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'b (μg/L)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q86 ('b (μg/L)', value '3.90') — already have one for this compound
- dropped value-less row: 'a'
- dropped value-less row: 'b'
- dropped value-less row: 'c'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pipamperone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '481 (279–2251)'
- unparsed cell Tab2:row5:col2 = '0.21 (0.11–10.5)'
- unparsed cell Tab2:row9:col2 = '0.31 (0.19–0.40)'
- unparsed cell Tab2:row10:col2 = '3.87 (3.42–14.84)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` | 0.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[a]` |  | 0.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kaa]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kaa]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/fb]` | 416 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/fb]` |  | 416 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pipamperone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pipamperone | unknown | mismatch |

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
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['Tab2:row2:col1'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['Tab2:row1:col1', 'Tab2:row1:col2'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | μg/L | ['Tab2:row9:col1'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpipamperone%5D%20Pipamperone_Kloosterboer2020_reference&body=Drug%3A%20pipamperone%0ARecord%3A%20Pipamperone_Kloosterboer2020_reference%0APaper%3A%20Kloosterboer_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pipamperone/Pipamperone_Kloosterboer2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:45 UTC</sub>
