<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;palbociclib&quot;,&quot;href&quot;:&quot;drugs/drug_palbociclib/&quot;},{&quot;label&quot;:&quot;Marouille_2021 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# palbociclib — `Palbociclib_Marouille2021_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="palbociclib" model-id="Palbociclib_Marouille2021_final" status="rejected" stale="false" population="women with HR+/HER2− advanced or metastatic breast cancer" measured-compound="palbociclib" parameterization="mechanistic" topology="1C"></div>

## Citation
Marouille AL, Petit E, Kaderbhaï C, Desmoulins I, Hennequin A, Mayeur D et al. Pharmacokinetic/Pharmacodynamic Model of Neutropenia in Real-Life Palbociclib-Treated Patients. Pharmaceutics 13(10) (2021).
  ·  DOI: [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708)

## Population and dosing

**Population:** women with HR+/HER2− advanced or metastatic breast cancer · condition advanced or metastatic breast cancer · age group adult · n = 143.

**Dosing:** 75, 100, 125 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MTT (days) | MTT | 5.29 | days |
| theta_q316_weight_power | theta_q316_weight_power | 0.34 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (MTT), so that value has no SI equivalent. None of the extracted parameters is palbociclib's own; they describe neutrophils (ANC).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of exponential_error: this record has none, the second reading 0.34; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| MTT (days) | `Q81` · MTT | 5.29 | days | d | exact (1) | pharmaceutics-13-01708-t004:row5:col3, pharmaceutics-13-01708-t004:row5:col4 |
| theta_q316_weight_power | `Q900` · theta_q316_weight_power | 0.34 |  |  |  | pharmaceutics-13-01708-t004:row11:col3, pharmaceutics-13-01708-t004:row11:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Clcr' routed out of structural estimates ('Interindividual variability in Cl/F was partially explained by Clcr and ALP concentration.')
- table section iiv: 'ALP concentration' routed out of structural estimates ('Interindividual variability in Cl/F was partially explained by Clcr and ALP concentration.')
- dropped unlinked row (NIL): 'Objective Function Value' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01708-t004:row1:col3', 'pharmaceutics-13-01708-t004:row1:col4'])
- dropped unlinked row (NIL): 'Base (G/L)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01708-t004:row3:col3', 'pharmaceutics-13-01708-t004:row3:col4'])
- dropped PD-category row 'Slope (L/µg)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-13-01708-t004:row4:col3', 'pharmaceutics-13-01708-t004:row4:col4'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-13-01708-t004:row6:col3', 'pharmaceutics-13-01708-t004:row6:col4'])
- dropped unlinked row (NIL): 'Age on Base (med = 63.7 years)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01708-t004:row8:col3', 'pharmaceutics-13-01708-t004:row8:col4'])
- covariate effect for Q316 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=palbociclib
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- model-stage split: 'final pk/pd model with covariates' is the final model of Marouille_2021 (paper reports 2 stages: final pk/pd model with covariates, final population pk model with covariates); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pharmaceutics-13-01708-t004:row3:col7 = '[2.75–3.16]'
- unparsed cell pharmaceutics-13-01708-t004:row4:col7 = '[0.0009–0.0014]'
- unparsed cell pharmaceutics-13-01708-t004:row5:col7 = '[4.61–6.30]'
- unparsed cell pharmaceutics-13-01708-t004:row6:col7 = '[0.085–0.137]'
- unparsed cell pharmaceutics-13-01708-t004:row7:col7 = '[24.6–33.1]'
- unparsed cell pharmaceutics-13-01708-t004:row8:col7 = '[0.23–0.78]'
- unparsed cell pharmaceutics-13-01708-t004:row9:col7 = '[21.2–34.1]'
- unparsed cell pharmaceutics-13-01708-t004:row10:col7 = '[10.0–33.0]'
- unparsed cell pharmaceutics-13-01708-t004:row11:col7 = '[0.31–0.36]'
- unparsed cell Marouille_2021_table_3:row2:col6 = '[54.19–60.42]'
- unparsed cell Marouille_2021_table_3:row3:col6 = '[0.35–0.57]'
- unparsed cell Marouille_2021_table_3:row4:col6 = '[−0.24–−0.05]'
- unparsed cell Marouille_2021_table_3:row6:col6 = '[0.17–0.19]'
- unparsed cell Marouille_2021_table_3:row8:col6 = '[21.8–37.1]'
- unparsed cell Marouille_2021_table_3:row9:col6 = '[6.46–22.48]'
- companion parameter table 3 transcribed (34 record(s), model stage 'final')
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[exponential_error]` |  | 0.34 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q316_weight_power]` | 0.34 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 1 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpalbociclib%5D%20Palbociclib_Marouille2021_final&body=Drug%3A%20palbociclib%0ARecord%3A%20Palbociclib_Marouille2021_final%0APaper%3A%20Marouille_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_palbociclib/Palbociclib_Marouille2021_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 04:09 UTC</sub>
