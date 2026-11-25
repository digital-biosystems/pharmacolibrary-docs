<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;idarubicin&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/&quot;},{&quot;label&quot;:&quot;Gillies_1987 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Idarubicin_Tamura1996_reference&quot;,&quot;label&quot;:&quot;Tamura_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/Idarubicin_Tamura1996_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Idarubicin_Kuhlmann2001_reference&quot;,&quot;label&quot;:&quot;Kuhlmann_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/Idarubicin_Kuhlmann2001_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Meg_as_Vericat_2019_LPC&quot;,&quot;label&quot;:&quot;Meg\u00edas-Vericat_2019 \u00b7 LPC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/pd_Meg_as_Vericat_2019_LPC.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# idarubicin — `Idarubicin_Gillies1987_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit nmol l⁻¹ h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="idarubicin" model-id="Idarubicin_Gillies1987_reference" status="rejected" stale="false" population="adults with advanced malignant disease" measured-compound="idarubicin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Gillies HC, Herriott D, Liang R, Ohashi K, Rogers HJ, Harper PG. Pharmacokinetics of idarubicin (4-demethoxydaunorubicin; IMI-30; NSC 256439) following intravenous and oral administration in patients with advanced cancer. British journal of clinical pharmacology 23(3):303–310 (1987).
  ·  DOI: [10.1111/j.1365-2125.1987.tb03049.x](https://doi.org/10.1111/j.1365-2125.1987.tb03049.x)

## Population and dosing

**Population:** adults with advanced malignant disease · condition advanced malignant disease · age group adult · n = 20.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C₁ (nmol l⁻¹) | equation variable | 88.1 | nmol l⁻¹ |
| λ₁ (h⁻¹) | λ1 | 1.83 | h⁻¹ |
| λ₂ (h⁻¹) | λ2 | 0.082 | h⁻¹ |
| t½z₁ (h) | t1/2z | 0.49 | h |
| AUC (nmol l⁻¹ h) | AUC | 366.0 | nmol l⁻¹ h |
| CL (l h⁻¹ m⁻²) | CL | 98.7 | L/h/m^2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.188), qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit nmol l⁻¹ h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (equation variable, AUC and CL), so that value has no SI equivalent. Extracted — idarubicin: λ1 1.83 h⁻¹, λ2 0.082 h⁻¹, t1/2z 0.49 h, AUC 366 nmol l⁻¹ h, CL 98.7 L/h/m^2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has idarubicin → idarubicinol (metabolism), the second reading none; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C₁ (nmol l⁻¹) | `Q900` · equation variable | 88.1 | nmol l⁻¹ |  |  | nM/l | llm (0.6) | Gillies_1987_table_p5_1:row0:col1 |
| λ₁ (h⁻¹) | `Q67` · λ1 | 1.83 | h⁻¹ | 0.0005083 | 1/s | 1/h | exact (1) | Gillies_1987_table_p5_1:row2:col1 |
| λ₂ (h⁻¹) | `Q68` · λ2 | 0.082 | h⁻¹ | 2.278e-05 | 1/s | 1/h | exact (1) | Gillies_1987_table_p5_1:row3:col1 |
| t½z₁ (h) | `Q57` · t1/2z | 0.49 | h | 1764 | s | h | llm (0.6) | Gillies_1987_table_p5_1:row4:col1 |
| AUC (nmol l⁻¹ h) | `Q88` · AUC | 366.0 | nmol l⁻¹ h |  |  | nM/(h·l) | exact (1) | Gillies_1987_table_p5_1:row6:col1 |
| CL (l h⁻¹ m⁻²) | `Q22` · CL | 98.7 | L/h/m^2 |  |  | L/h/m^2 | exact (1) | Gillies_1987_table_p5_1:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('C₂ (nmol l⁻¹)', value '18.0') — already have one for this compound
- dropped duplicate Q57 ('t½z₂ (h)', value '12.7') — already have one for this compound
- unit_dimension_mismatch: 'AUC (nmol l⁻¹ h)' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'l h⁻¹ m⁻²' (CL)
- dropped unlinked row (NIL): 'Varea (l m⁻²)' — extend the ontology if this is a real PK parameter (source ['Gillies_1987_table_p5_1:row8:col1'])
- implicit units: 'CL (l h⁻¹ m⁻²)' → L/h/m^2 (from the paper text: "Abstract: 'clearance 98.7 ± 47.3 1 h-1 m-2'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=idarubicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 9/9 row label(s) assigned, 0 linked by role; re-tagged idarubicin→parent ×9

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.188 (3/16 fields) | 13 |
| `qwen3.8-27b` | confirmed | 1.0 (7/7 fields) | none |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['idarubicin', 'idarubicinol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc]` | 366.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 366.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c1]` | 88.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 98.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 98.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1⁄2z1]` | 0.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1⁄2z1]` |  | 0.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[varea]` |  | 1533.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[λ1]` | 1.83 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[λ1]` |  | 1.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[λ2]` | 0.082 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[λ2]` |  | 0.082 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gillies_1987_table_p5_1:row7:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Gillies_1987_table_p5_1:row4:col1'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Gillies_1987_table_p5_1:row2:col1'] |
| C5_dimension_Q68 | pass | 1 / [time] |  | ['Gillies_1987_table_p5_1:row3:col1'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | nmol l⁻¹ h ([substance] * [time] / [length] ** 3) | ['Gillies_1987_table_p5_1:row6:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 98.7 | ['Gillies_1987_table_p5_1:row7:col1'] |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bidarubicin%5D%20Idarubicin_Gillies1987_reference&body=Drug%3A%20idarubicin%0ARecord%3A%20Idarubicin_Gillies1987_reference%0APaper%3A%20Gillies_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_idarubicin/Idarubicin_Gillies1987_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:44 UTC</sub>
