<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mirikizumab&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/&quot;},{&quot;label&quot;:&quot;Chua_2025 \u00b7 serenity&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirikizumab_Otani2025_reference&quot;,&quot;label&quot;:&quot;Otani_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/Mirikizumab_Otani2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mirikizumab — `Mirikizumab_Chua2025_serenity`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mirikizumab, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025)
  ·  DOI: [10.1111/cts.70320](https://doi.org/10.1111/cts.70320)

<div class="pk-model-meta" hidden drug="mirikizumab" model-id="Mirikizumab_Chua2025_serenity" status="rejected" stale="false" population="adults with moderately-to-severely active Crohn&#39;s disease" measured-compound="mirikizumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| theta_q49_category | `Q900` · theta_q49_category | 0.00647 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row5:col1 | — | not captured |
| theta_q22_category | `Q900` · theta_q22_category | 21.9 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row9:col1, tab_1:row9:col2 | — | not captured |
| theta_q22_albumin | `Q900` · theta_q22_albumin | -0.754 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row11:col1 | — | not captured |
| theta_q30_category | `Q900` · theta_q30_category | 0.00884 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row18:col1 | — | not captured |
| theta_q64_category | `Q900` · theta_q64_category | 17.2 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row23:col1, tab_1:row23:col2 | — | not captured |
| theta_q77_category | `Q900` · theta_q77_category | 37.3 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row25:col1, tab_1:row25:col2 | — | not captured |
| theta_q40_bmi | `Q900` · theta_q40_bmi | -0.0318 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row32:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Parameter for Ka (h -1 )'; source reconciliation required
- table representations disagree for 'Parameter for CL c (L/h)'; source reconciliation required
- table representations disagree for 'Albumin effect on CL'; source reconciliation required
- table representations disagree for 'BL SES-CD effect on CL'; source reconciliation required
- table representations disagree for 'Parameter for Q c (L/h)'; source reconciliation required
- table representations disagree for 'BL BW effect on CL and Q'; source reconciliation required
- table representations disagree for 'Parameter for V 2 , d (L)'; source reconciliation required
- table representations disagree for 'Parameter for V 3 , d (L)'; source reconciliation required
- table representations disagree for 'BL BW effect on V c and V p'; source reconciliation required
- table representations disagree for 'Parameter for F, e (%)'; source reconciliation required
- table representations disagree for 'BL BMI effect on F'; source reconciliation required
- dropped unlinked row (NIL): 'BL SES-CD effect on CL' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col1'])
- dropped unlinked row (NIL): 'BL BW effect on CL and Q' — extend the ontology if this is a real PK parameter (source ['tab_1:row20:col1'])
- dropped unlinked row (NIL): 'BL BW effect on V c and V p' — extend the ontology if this is a real PK parameter (source ['tab_1:row27:col1'])
- dropped unlinked row (NIL): 'Parameter for F, e (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row30:col1', 'tab_1:row30:col2'])
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q30 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q77 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mirikizumab
- status held at route_to_review — not promoted
- population split: 'serenity' subgroup of Chua_2025 (paper reports 2 populations: serenity, vivid-1)
- molar mass: none found for 'mirikizumab' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table tab_1: unparsed_numeric_cell
- table tab_1: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bl bw effect on v c and v p]` | not captured | 0.445 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bl crp effect on cl]` | not captured | 0.0853 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bl ses-cd effect on cl]` | 0.227 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bl_bmi_effect_on_f]` | -0.0318 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin].value` | -0.754 | -0.0200 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_category].value` | 0.0217 | 21.9 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q30_category].value` | 0.00884 | 0.00921 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q44_category]` | 33.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_category].value` | 0.00647 | 0.00693 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q64_category].value` | 3.31 | 17.2 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q77_category].value` | 1.75 | 37.3 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q87_bmi]` | not captured | -0.0354 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_category]` | not captured | 35.7 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mirikizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | mirikizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_mirikizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chua_2025` / `Chua_2025::serenity`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 04:17 UTC</sub>
