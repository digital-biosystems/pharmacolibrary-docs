<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;valganciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_valganciclovir/&quot;},{&quot;label&quot;:&quot;Dvo\u0159\u00e1\u010dkov\u00e1_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# valganciclovir — `Valganciclovir_Dvokov2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.905). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record for valganciclovir (ganciclovir measured) was rejected because the absorption rate constant kabs is reported with unit L/h instead of 1/h, a dimension mismatch on a structural parameter.**

The absorption rate constant kabs, valued 0.334, is labelled 'kA, L/h' in the paper; a first-order rate constant must have dimension 1/h, so the reported unit is dimensionally wrong. The unit could not be converted to SI, so the parameter reached the model without an SI value and the dimension check failed. All other parameters (V1 43.1 L, V2 140 L, CLm/F 2.05 L/h, Q 2.1 L/h, tlag 0.563 h, Fab 0.304) carry consistent units. Extracted — ganciclovir: V1 43.1 L, CLm/F 2.05 L/h, V2 140 L, Q 2.1 L/h; valganciclovir: kabs 0.334 L/h, tlag 0.563 h, Fab 0.304.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has valganciclovir → ganciclovir (hydrolysis), the second reading valganciclovir → ganciclovir (metabolism); it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `valganciclovir`, measured `ganciclovir`.

## Citation
Dvořáčková E et al., Population Pharmacokinetics and Dose Op…, Medical principles and prac… (2026)
  ·  DOI: [10.1159/000548942](https://doi.org/10.1159/000548942)

<div class="pk-model-meta" hidden drug="valganciclovir" model-id="Valganciclovir_Dvokov2026_reference" status="rejected" stale="false" population="lung transplant recipients" measured-compound="ganciclovir" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1, L | `Q63` · V1 | 43.1 | L | 0.0431 | [l] | 19 | exact (1.0) | T3:row2:col1 | — | 0.431 (48% RSE) |
| CLp | `Q351` · CLm/F | 2.05 | L/h | 5.694444444444444e-07 | L/h | 31 | exact (1.0) | T3:row4:col1, T3:footnote | — | 0.165 (23% RSE) |
| V2, L | `Q64` · V2 | 140 | L | 0.14 | [l] | 37 | exact (1.0) | T3:row6:col1 | — | not captured |
| kA, L/h | `Q49` · kabs | 0.334 | L/h | not captured | [l] / [h] | 27 | exact (1.0) | T3:row7:col1 | — | not captured |
| Q, L/h | `Q30` · Q | 2.1 | L/h | 5.833333333333334e-07 | [l] / [h] | 20 | exact (1.0) | T3:row8:col1 | — | not captured |
| Tlag, h | `Q83` · tlag | 0.563 | h | 2026.7999999999997 | [h] | 34 | exact (1.0) | T3:row9:col1 | — | not captured |
| θF | `Q40` · Fab | 0.304 | not captured | not captured | not captured | 48 | llm (0.6) | T3:row10:col1 | — | 2.63 (39% RSE) |
| θeGFR | `Q900` · θeGFR | 4.96 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| theta_cl_egfr_power | Q900 | not captured | not captured |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variability (variance)')
- table section iiv: 'V1' routed out of structural estimates ('Interindividual variability (variance)')
- table section iiv: 'F' routed out of structural estimates ('Interindividual variability (variance)')
- column 'final model (rse %)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- kept covariate coefficient θeGFR=4.96 (covariate eGFR) — not an ontology parameter
- unit_dimension_mismatch: 'kA, L/h' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped value-less row: 'RSE'
- dropped value-less row: 'CI'
- dropped value-less row: 'V1'
- dropped value-less row: 'CL'
- dropped value-less row: 'eGFR'
- dropped value-less row: 'V2'
- dropped value-less row: 'kA'
- dropped value-less row: 'Q'
- dropped value-less row: 'Tlag'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['T3:footnote']); the table cell was unparseable — needs review
- implicit units: 'CLp' → L/h (from the paper text: "The paper states for clearance: 'For every 1 mL/min/1.73 m2 decrease in eGFR, there was a 0.06 L/h decrease in GCV/VGCV ")
- metabolite ganciclovir: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ganciclovir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 7 linked by role; re-tagged parent→ganciclovir ×9, ganciclovir→parent ×3
- review gap-fill skipped: this record measures 'ganciclovir', not valganciclovir — the review values are the parent's

**Extraction notes:**
- unparsed cell T3:row2:col2 = '42.5 (10.9 to 57.8)'
- unparsed cell T3:row4:col2 = '2.017 (0.760 to 3.882)'
- unparsed cell T3:row5:col2 = '4.93 (2.70 to 6.78)'
- unparsed cell T3:row6:col2 = '118 (12 to 960)'
- unparsed cell T3:row7:col2 = '0.337 (0.202 to 0.502)'
- unparsed cell T3:row8:col2 = '2.11 (0.77 to 4.17)'
- unparsed cell T3:row9:col2 = '0.615 (0.105 to 0.881)'
- unparsed cell T3:row10:col2 = '0.334 (−0.438 to 1.111)'
- unparsed cell T3:row13:col2 = '0.152 (0.076 to 0.233)'
- unparsed cell T3:row14:col2 = '0.391 (0.103 to 2.301)'
- unparsed cell T3:row15:col2 = '2.53 (0.70 to 4.85)'
- unparsed cell T3:row17:col2 = '0.229 (0.172 to 0.297)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.905 (19/21 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['valganciclovir', 'ganciclovir', 'hydrolysis']] | [['valganciclovir', 'ganciclovir', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[θf].parameter_id` | Q40 | Q87 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row8:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row4:col1', 'T3:footnote'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['T3:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row6:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T3:row9:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 43.1 L | not captured | not captured | ['T3:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 140 L | not captured | not captured | ['T3:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_valganciclovir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dvořáčková_2026` / `Dvořáčková_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:39 UTC</sub>
