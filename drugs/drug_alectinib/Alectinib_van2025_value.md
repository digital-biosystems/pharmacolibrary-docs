<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;alectinib&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/&quot;},{&quot;label&quot;:&quot;van_2025 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fasted_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fasted_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fed_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fed_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alectinib — `Alectinib_van2025_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Alectinib’s tissue-to-plasma partition coefficient Kp, reported as 3.25 in logKm:w, had a structural-dimension mismatch and the record was rejected.

<div class="pk-model-meta" hidden drug="alectinib" model-id="Alectinib_van2025_value" status="rejected" stale="false" population="adults with ALK-positive advanced NSCLC and virtual pediatric patients" measured-compound="alectinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
van Donge T, Guerini E, O'Jeanson A, Parrott N, Devlin C, Stillhart C et al. Middle-Out Physiologically Based Pharmacokinetic Modeling to Support Pediatric Dosing Recommendation for Alectinib. CPT: pharmacometrics & systems pharmacology 14(6):1077–1086 (2025).
  ·  DOI: [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020)

## Population and dosing

**Population:** adults with ALK-positive advanced NSCLC and virtual pediatric patients · condition ALK-positive advanced NSCLC; healthy volunteers in the bioequivalence study · age group mixed.

**Dosing:** 100, 190, 600 mg, oral, multiple, every 12 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Free fraction in plasma | fu | 0.003 |  |
| Solubility ratio | Kp | 3.25 | logKm:w |
| CLintCYP3A4 (μL/min/pmol) | CL | 9.98 | μL/min/pmol |
| CLHLM (μL/min/mg) | CLint | 1710 | μL/min/mg |
| CLintCYP3A4 M4 (μL/min/pmol) | CL | 1.71 | μL/min/pmol |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Alectinib’s tissue-to-plasma partition coefficient Kp, reported as 3.25 in logKm:w, had a structural-dimension mismatch and the record was rejected.**

Kp is a tissue-to-plasma partition coefficient, but its reported unit, logKm:w, could not be converted to SI. The structural-dimension check failed for this parameter, which was the stated reason for rejection. Extracted — alectinib: fu 0.003, Kp 3.25 logKm:w, CL 9.98 μL/min/pmol, CLint 1.71e+03 μL/min/mg; M4: CL 1.71 μL/min/pmol.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of solubility ratio: this record has 3.25, the second reading none. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Free fraction in plasma | `Q46` · fu | 0.003 |  |  | llm_confirmed (0.6) | psp470020-tbl-0001:row6:col1 |
| Solubility ratio | `Q410` · Kp | 3.25 | logKm:w | l·ogkm | llm (0.6) | psp470020-tbl-0001:row12:col1 |
| CLintCYP3A4 (μL/min/pmol) | `Q22` · CL | 9.98 | μL/min/pmol | µl/(min·pM) | exact (1) | psp470020-tbl-0001:row18:col1 |
| CLHLM (μL/min/mg) | `Q3` · CLint | 1710 | μL/min/mg | µl/(min·mg) | llm (0.6) | psp470020-tbl-0001:row22:col1 |
| CLintCYP3A4 M4 (μL/min/pmol) | `Q22` · CL | 1.71 | μL/min/pmol | µl/(min·pM) | exact (1) | psp470020-tbl-0001:row23:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Volume of distribution at steady‐state [alectinib/M4] | Q65 | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'LogP' — extend the ontology if this is a real PK parameter (source ['psp470020-tbl-0001:row2:col1'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['psp470020-tbl-0001:row3:col1'])
- dropped unlinked row (NIL): 'Solubility in presence of 50% SLS (mg/mL)' — extend the ontology if this is a real PK parameter (source ['psp470020-tbl-0001:row9:col1'])
- dropped unlinked row (NIL): 'Effective permeability (10−4 cm/s)' — extend the ontology if this is a real PK parameter (source ['psp470020-tbl-0001:row10:col1'])
- unit_dimension_unknown: 'logKm:w' (Kp)
- dropped unlinked row (NIL): 'Critical supersaturation ratio' — extend the ontology if this is a real PK parameter (source ['psp470020-tbl-0001:row13:col1'])
- dropped duplicate Q410 ('Precipitation rate constant', value '0.05') — already have one for this compound
- unit_dimension_mismatch: 'CLintCYP3A4 (μL/min/pmol)' → Q22 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLintCYP3A5 (μL/min/pmol)' → Q22 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CLintCYP3A5 (μL/min/pmol)', value '2.55') — already have one for this compound
- unit_dimension_mismatch: 'CLintCYP2C8 (μL/min/pmol)' → Q22 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CLintCYP2C8 (μL/min/pmol)', value '8.28') — already have one for this compound
- unit_dimension_mismatch: 'CLintCYP4A11 (μL/min/pmol)' → Q22 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CLintCYP4A11 (μL/min/pmol)', value '112.02') — already have one for this compound
- unit_dimension_mismatch: 'CLintCYP3A4 M4 (μL/min/pmol)' → Q22 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLHLM M4 (μL/min/mg)' → Q22 (unit '[length] ** 3 / [time] / [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CLHLM M4 (μL/min/mg)', value '1330') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alectinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'value' subgroup of van_2025 (paper reports 4 populations: 1–3.5 years—190 mg bid, 3.5–5.8 years—230 mg bid, 5.8–7.8 years—270 mg bid, value)
- row roles (LLM): model_class=pbpk; 18/18 row label(s) assigned, 7 linked by role; re-tagged parent→M4 ×2
- molar mass: no plausible PubChem entry for 'M4' ('alectinib active metabolite') — left in mass units
- molar mass: none found for 'M4' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp470020-tbl-0001:row2:col2 = '[13]'
- unparsed cell psp470020-tbl-0001:row3:col2 = '[13]'
- unparsed cell psp470020-tbl-0001:row6:col2 = '[13, 14]'
- unparsed cell psp470020-tbl-0001:row10:col2 = '[13] and predicted by MechPeff'
- unparsed cell psp470020-tbl-0001:row16:col2 = '[14]'
- unparsed cell psp470020-tbl-0001:row18:col2 = 'Optimized parameter from [14]'
- unparsed cell psp470020-tbl-0001:row19:col2 = 'Optimized parameter from [14]'
- unparsed cell psp470020-tbl-0001:row20:col2 = 'Optimized parameter from [14]'
- unparsed cell psp470020-tbl-0001:row21:col2 = 'Optimized parameter from [14]'
- unparsed cell psp470020-tbl-0001:row22:col2 = '[14]'
- unparsed cell psp470020-tbl-0001:row23:col2 = '[14]'
- unparsed cell psp470020-tbl-0001:row24:col2 = '[14]'
- companion parameter table 3 transcribed (36 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[solubility ratio]` | 3.25 |  | only_one_extracted |

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
| C5_dimension_Q22 | fail | [length] ** 3 / [time] / [substance] | μL/min/pmol | ['psp470020-tbl-0001:row18:col1'] |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] / [substance] | μL/min/pmol | ['psp470020-tbl-0001:row23:col1'] |
| C5_dimension_Q3 | pass | [length] ** 3 / [time] / [mass] |  | ['psp470020-tbl-0001:row22:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.98 | ['psp470020-tbl-0001:row18:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balectinib%5D%20Alectinib_van2025_value&body=Drug%3A%20alectinib%0ARecord%3A%20Alectinib_van2025_value%0APaper%3A%20van_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alectinib/Alectinib_van2025_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:15 UTC</sub>
