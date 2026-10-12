<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zidovudine&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/&quot;},{&quot;label&quot;:&quot;Tang_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zidovudine_Fauchet2013_reference&quot;,&quot;label&quot;:&quot;Fauchet_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# zidovudine — `Zidovudine_Tang2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected with zidovudine monophosphate back-conversion clearance CLmp reported as 76 h−1, a rate unit inconsistent with clearance.**

The parameter is defined as back-conversion clearance, but the record reports it in h−1; it also reports a value of 88 h−1 for zidovudine diphosphate back-conversion clearance. The reported unit could not be converted to SI. Although the refusal cites an unreachable metabolite, the record lists sequential metabolism links from zidovudine through monophosphate and diphosphate to triphosphate, so orphan status is not established by the displayed record. Extracted — zidovudine: kel 72 h− 1, kmp 62 h− 1; zidovudine monophosphate (AZT-MP): kfm 45 h− 1, CLmp 76 h− 1; zidovudine diphosphate (AZT-DP): kfm 81 h− 1, CLmp 88 h− 1; zidovudine triphosphate (AZT-TP): kfm 79 h− 1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has zidovudine (AZT), the second reading zidovudine; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Tang F et al., The study on the transport and phosphor…, Scientific reports (2026)
  ·  DOI: [10.1038/s41598-026-49905-1](https://doi.org/10.1038/s41598-026-49905-1)

<div class="pk-model-meta" hidden drug="zidovudine" model-id="Zidovudine_Tang2026_reference" status="rejected" stale="false" population="healthy Chinese volunteers" measured-compound="zidovudine (AZT)" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| kout (h− 1) | `Q47` · kel | 72 | h− 1 | 0.02 | [1] / [h] | not captured | exact (1.0) | Tab2:row3:col1, Tab2:row3:col2 | — | not captured |
| kO−MP (h− 1) | `Q305` · kfm | 45 | h− 1 | 0.0125 | [1] / [h] | not captured | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2 | — | not captured |
| kMP−O (h− 1) | `Q372` · kmp | 62 | h− 1 | 0.017222222222222222 | [1] / [h] | not captured | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row5:col2 | — | not captured |
| kMP−DP (h− 1) | `Q305` · kfm | 81 | h− 1 | 0.0225 | [1] / [h] | not captured | exact (1.0) | Tab2:row6:col1, Tab2:row6:col2 | — | not captured |
| kDP−MP (h− 1) | `Q371` · CLmp | 76 | h− 1 | not captured | [1] / [h] | not captured | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2 | — | not captured |
| kDP−TP (h− 1) | `Q305` · kfm | 79 | h− 1 | 0.021944444444444444 | [1] / [h] | not captured | exact (1.0) | Tab2:row8:col1, Tab2:row8:col2 | — | not captured |
| kTP−DP (h− 1) | `Q371` · CLmp | 88 | h− 1 | not captured | [1] / [h] | not captured | exact (1.0) | Tab2:row9:col1, Tab2:row9:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'kin (ng/106 cells/µM/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row2:col1', 'Tab2:row2:col2'])
- unit_dimension_mismatch: 'kDP−MP (h− 1)' → Q371 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'kTP−DP (h− 1)' → Q371 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=zidovudine (AZT)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — turnover model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=turnover; 8/8 row label(s) assigned, 12 linked by role; re-tagged parent→zidovudine monophosphate (AZT-MP) ×4, parent→zidovudine diphosphate (AZT-DP) ×4, parent→zidovudine triphosphate (AZT-TP) ×2
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['zidovudine (azt)', 'zidovudine monophosphate (azt-mp)', 'metabolism'], ['zidovudine monophosphate (azt-mp)', 'zidovudine diphosphate (azt-dp)', 'metabolism'], ['zidovudine diphosphate (azt-dp)', 'zidovudine triphosphate (azt-tp)', 'metabolism']] | [['zidovudine', 'zidovudine monophosphate', 'metabolism'], ['zidovudine monophosphate', 'zidovudine diphosphate', 'metabolism'], ['zidovudine diphosphate', 'zidovudine triphosphate', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[kdp-mp]` | 76 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[kdp-tp]` | not captured | 79 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kdp-tp]` | 79 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[kmp-dp]` | 81 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[kmp-dp]` | not captured | 81 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ko-mp]` | 45 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[kout]` | 72 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ktp-dp]` | 88 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | zidovudine (AZT) | zidovudine | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | zidovudine (AZT) | zidovudine | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col2'] |
| C5_dimension_Q371 | fail | 1 / [time] | h− 1 | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2'] |
| C5_dimension_Q371 | fail | 1 / [time] | h− 1 | not captured | not captured | ['Tab2:row9:col1', 'Tab2:row9:col2'] |
| C5_dimension_Q372 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_zidovudine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tang_2026` / `Tang_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:28 UTC</sub>
