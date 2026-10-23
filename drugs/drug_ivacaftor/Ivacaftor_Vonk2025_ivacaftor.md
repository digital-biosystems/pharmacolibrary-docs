<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;ivacaftor&quot;,&quot;href&quot;:&quot;drugs/drug_ivacaftor/&quot;},{&quot;label&quot;:&quot;Vonk_2025 \u00b7 ivacaftor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivacaftor_Truong2025_reference&quot;,&quot;label&quot;:&quot;Truong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ivacaftor — `Ivacaftor_Vonk2025_ivacaftor`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Ivacaftor clearance 1.76 L/h/70 kg was assigned to volume, causing physiological rejection.

<div class="pk-model-meta" hidden drug="ivacaftor" model-id="Ivacaftor_Vonk2025_ivacaftor" status="rejected" stale="false" population="children with cystic fibrosis" measured-compound="ivacaftor" parameterization="apparent" topology="2C"></div>

## Citation
Vonk SEM, Terheggen-Lagro SWJ, Haarman EG, Hashimoto S, Maitland-van der Zee AH, Mathôt RAA et al. Real-world pharmacokinetics of elexacaftor-tezacaftor-ivacaftor in children with cystic fibrosis: a prospective observational study. Journal of cystic fibrosis : official journal of the European Cystic Fibrosis Society 24(3):526–533 (2025).
  ·  DOI: [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008)

## Population and dosing

**Population:** children with cystic fibrosis · condition cystic fibrosis · age group child · n = 29.

**Dosing:** 50, 100, 150, 200, 300 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed elexacaftor-tezacaftor-ivacaftor, measured ivacaftor.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC # (mg*h/L) | AUC | 208 | mg*h/L |
| AUC # (mg*h/L) | AUC | 11.6 | mg*h/L |
| apparent clearance (CL elx /F) and volume of distribution (V elx /F) normalized for a body weight of 70 kg | V | 1.76 | L/h |
| typical values of CL/F ... for ETI | CL/F | 1.76 | L/h/70 kg |
| corresponding V/F values ... for ETI | V/F | 59.0 | L/ 70 kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ivacaftor clearance 1.76 L/h/70 kg was assigned to volume, causing physiological rejection.**

The value 1.76 is labeled as apparent clearance but was recorded as volume of distribution, creating a magnitude error. Additionally, the unit L/h/70 kg could not be converted to standard units, leaving the parameter without a valid SI value for evaluation. Extracted — ivacaftor: AUC 208 mg*h/L, AUC 11.6 mg*h/L, V 1.76 L/h, CL/F 1.76 L/h/70 kg, V/F 59 L/ 70 kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has elexacaftor-tezacaftor-ivacaftor, the second reading elexacaftor‑tezacaftor‑ivacaftor; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC # (mg*h/L) | `Q88` · AUC | 208 | mg*h/L |  |  | (h·mg)/l | llm_confirmed (0.6) | tab_1:row3:col4, tab_1:row3:col5, tab_1:row3:col8, tab_1:row3:col9, tab_1:row3:col12, tab_1:row3:col13, tab_1:row3:col16, tab_1:row3:col17, tab_1:row3:col20, tab_1:row3:col21, tab_1:row3:col24, tab_1:row3:col25, tab_1:row3:col28, tab_1:row3:col29 |
| AUC # (mg*h/L) | `Q88` · AUC | 11.6 | mg*h/L |  |  | (h·mg)/l | llm_confirmed (0.6) | tab_1:row3:col19 |
| apparent clearance (CL elx /F) and volume of distribution (V elx /F) normalized for a body weight of 70 kg | `Q61` · V | 1.76 | L/h | 4.889e-07 | m3 | L | boundary (0.8) | Vonk_2025:other_prose |
| typical values of CL/F ... for ETI | `Q27` · CL/F | 1.76 | L/h/70 kg | 4.889e-07 | m3/s | L/h | boundary (0.8) | Vonk_2025:discussion_prose |
| corresponding V/F values ... for ETI | `Q76` · V/F | 59.0 | L/ 70 kg | 0.059 | m3 | L | boundary (0.8) | Vonk_2025:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'ivacaftor' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'Dose* (mg/day)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row1:col4', 'tab_1:row1:col5', 'tab_1:row1:col6', 'tab_1:row1:col12', 'tab_1:row1:col13', 'tab_1:row1:col14', 'tab_1:row1:col20', 'tab_1:row1:col21', 'tab_1:row1:col22', 'tab_1:row1:col24', 'tab_1:row1:col25', 'tab_1:row1:col26', 'tab_1:row1:col28', 'tab_1:row1:col29', 'tab_1:row1:col30'])
- dropped PD-category row 'Dose* (mg/day)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row1:col19'])
- dropped unlinked row (NIL): 'Dose per mean weight (mg/kg/day)' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col4', 'tab_1:row2:col5', 'tab_1:row2:col12', 'tab_1:row2:col13', 'tab_1:row2:col20', 'tab_1:row2:col21', 'tab_1:row2:col24', 'tab_1:row2:col25', 'tab_1:row2:col28', 'tab_1:row2:col29'])
- dropped unlinked row (NIL): 'Dose per mean weight (mg/kg/day)' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col19'])
- dropped duplicate Q88 ('Reference AUC $ [3,11] (mg*h/L)', value '195') — already have one for this compound
- dropped duplicate Q88 ('Reference AUC $ [3,11] (mg*h/L)', value '9.78') — already have one for this compound
- dropped unlinked row (NIL): 'P-value d' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col4', 'tab_1:row5:col5', 'tab_1:row5:col8', 'tab_1:row5:col9', 'tab_1:row5:col12', 'tab_1:row5:col13', 'tab_1:row5:col16', 'tab_1:row5:col17'])
- dropped unlinked row (NIL): 'P-value d' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col19'])
- salvaged Q61 ('apparent clearance (CL elx /F) and volume of distribution (V elx /F) normalized for a body weight of 70 kg'=1.76) from results prose — parameter table was unreadable
- salvaged Q27 ('typical values of CL/F ... for ETI'=1.76) from results prose — parameter table was unreadable
- salvaged Q76 ('corresponding V/F values ... for ETI'=59.0) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ivacaftor
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'ivacaftor' subgroup of Vonk_2025 (paper reports 5 populations: elexacaftor-m23, ivacaftor, ivacaftor-m1, ivacaftor-m6, tezacaftor-m1)

**Extraction notes:**
- transposed table tab_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_1:row1:col7 = '(100)'
- unparsed cell tab_1:row1:col8 = '(200)'
- unparsed cell tab_1:row1:col9 = '(200)'
- unparsed cell tab_1:row1:col10 = '(200)'
- unparsed cell tab_1:row1:col15 = '(50)'
- unparsed cell tab_1:row1:col16 = '(100)'
- unparsed cell tab_1:row1:col17 = '(100)'
- unparsed cell tab_1:row1:col18 = '(100)'
- unparsed cell tab_1:row2:col7 = '(4.05)'
- unparsed cell tab_1:row2:col8 = '(5.18)'
- unparsed cell tab_1:row2:col9 = '(3.59)'
- unparsed cell tab_1:row2:col15 = '(2.03)'
- unparsed cell tab_1:row2:col16 = '(2.59)'
- unparsed cell tab_1:row2:col17 = '(1.79)'
- unparsed cell tab_1:row5:col20 = '&lt;0.001*'
- unparsed cell tab_1:row5:col21 = '&lt;0.001*'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.273 (3/11 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['ivacaftor', 'ivacaftor metabolite', 'metabolism'], ['elexacaftor', 'elexacaftor metabolite', 'metabolism'], ['tezacaftor', 'tezacaftor metabolite', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[apparent clearance (cl elx /f) and volume of distribution (v elx /f) normalized for a body weight of 70 kg]` | 1.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[corresponding v/f values ... for eti]` | 59.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose per mean weight]` |  | 5.18 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose per mean weight]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical values of cl/f ... for eti]` | 1.76 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | elexacaftor-tezacaftor-ivacaftor | elexacaftor‑tezacaftor‑ivacaftor | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q27 | pass | 1.76 | 1.76 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col8', 'tab_1:row3:col9', 'tab_1:row3:col12', 'tab_1:row3:col13', 'tab_1:row3:col16', 'tab_1:row3:col17', 'tab_1:row3:col20', 'tab_1:row3:col21', 'tab_1:row3:col24', 'tab_1:row3:col25', 'tab_1:row3:col28', 'tab_1:row3:col29'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['tab_1:row3:col19'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.76 L/h |  |  | ['Vonk_2025:discussion_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.000489 L |  |  | ['Vonk_2025:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 59 L |  |  | ['Vonk_2025:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bivacaftor%5D%20Ivacaftor_Vonk2025_ivacaftor&body=Drug%3A%20ivacaftor%0ARecord%3A%20Ivacaftor_Vonk2025_ivacaftor%0APaper%3A%20Vonk_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ivacaftor/Ivacaftor_Vonk2025_ivacaftor%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:00 UTC</sub>
