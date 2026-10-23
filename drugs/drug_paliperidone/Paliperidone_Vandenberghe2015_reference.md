<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;paliperidone&quot;,&quot;href&quot;:&quot;drugs/drug_paliperidone/&quot;},{&quot;label&quot;:&quot;Vandenberghe_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paliperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paliperidone — `Paliperidone_Vandenberghe2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record for the paliperidone (9-hydroxyrisperidone) metabolite model was rejected because the CYP2D6 poor-metaboliser covariate effect on metabolite clearance takes the implausible value -6.3, giving a negative clearance in that scenario.

<div class="pk-model-meta" hidden drug="paliperidone" model-id="Paliperidone_Vandenberghe2015_reference" status="rejected" stale="false" population="psychiatric patients treated with risperidone" measured-compound="9-hydroxyrisperidone (paliperidone)" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Vandenberghe F, Guidi M, Choong E, von Gunten A, Conus P, Csajka C et al. Genetics-Based Population Pharmacokinetics and Pharmacodynamics of Risperidone in a Psychiatric Cohort. Clinical pharmacokinetics 54(12):1259–1272 (2015).
  ·  DOI: [10.1007/s40262-015-0289-8](https://doi.org/10.1007/s40262-015-0289-8)

## Population and dosing

**Population:** psychiatric patients treated with risperidone · condition psychiatric disorders · age group adult · n = 150.

**Dosing:** 0.5, 8 mg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed risperidone, measured 9-hydroxyrisperidone (paliperidone).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| cyp2d6_pm | cyp2d6_pm | -6.3 |  |
| θ INHCYP2D6 M | CLm/F | -0.54 | l/h |
| CL RISP (l/h) | CLm/F | 4.8 | l/h |
| V (l) | Vm/F | 270 | l |
| k a (h -1 ) | kabs | 3.11 | h -1 |
| k 23 (h -1 ) | kfm | 64 | h -1 |
| theta_q45_em | theta_q45_em | 2.6 |  |
| theta_q314_cyp2d6 | theta_q314_cyp2d6 | -0.87 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for the paliperidone (9-hydroxyrisperidone) metabolite model was rejected because the CYP2D6 poor-metaboliser covariate effect on metabolite clearance takes the implausible value -6.3, giving a negative clearance in that scenario.**

The metabolite 9-hydroxyrisperidone is formed presystemically from risperidone, with apparent metabolite clearance CLm/F of -0.54 l/h reported for the CYP2D6 poor-metaboliser covariate (label θ INHCYP2D6 M), alongside the base CLm/F of 4.8 l/h and Vm/F of 270 l. The covariate effect cyp2d6_pm of -6.3 applied to the base clearance yields a negative apparent metabolite clearance, which is pharmacokinetically implausible and was the cause of rejection. Other parameters (kabs 3.11 h⁻¹, formation rate kfm 64 h⁻¹, covariate effects 2.6 and -0.87) show no such implausibility in the record. Extracted — 9-hydroxyrisperidone (paliperidone): CLm/F -0.54 l/h, kfm 64 h -1; paliperidone: CLm/F 4.8 l/h, Vm/F 270 l, kabs 3.11 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 9-hydroxyrisperidone (paliperidone), the second reading risperidone; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| cyp2d6_pm | `Q900` · cyp2d6_pm | -6.3 |  |  |  |  |  | tab_2:row4:col1, tab_2:row4:col2, tab_2:row4:col3 |
| θ INHCYP2D6 M | `Q351` · CLm/F | -0.54 | l/h | -1.5e-07 | m3/s | l/h | llm (0.6) | tab_2:row6:col1, tab_2:row6:col2, tab_2:row6:col3 |
| CL RISP (l/h) | `Q351` · CLm/F | 4.8 | l/h | 1.333e-06 | m3/s | l/h | llm_confirmed (0.6) | tab_2:row8:col1, tab_2:row8:col2, tab_2:row8:col3 |
| V (l) | `Q367` · Vm/F | 270 | l | 0.27 | m3 | l | exact (1) | tab_2:row9:col1, tab_2:row9:col2, tab_2:row9:col3 |
| k a (h -1 ) | `Q49` · kabs | 3.11 | h -1 | 0.0008639 | 1/s | 1/h | exact (1) | tab_2:row10:col1, tab_2:row10:col3 |
| k 23 (h -1 ) | `Q305` · kfm | 64 | h -1 | 0.01778 | 1/s | 1/h | exact (1) | tab_2:row13:col2 |
| theta_q45_em | `Q900` · theta_q45_em | 2.6 |  |  |  |  |  | tab_2:row3:col1, tab_2:row3:col2, tab_2:row3:col3 |
| theta_q314_cyp2d6 | `Q900` · theta_q314_cyp2d6 | -0.87 |  |  |  |  |  | tab_2:row5:col1, tab_2:row5:col2, tab_2:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bootstrap evaluation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'θ CYP2D6 PM' → Q900:cyp2d6_pm = -6.3 (linear_fractional on the model)
- dropped unlinked row (NIL): 'θ INHCYP2D6 S' — extend the ontology if this is a real PK parameter (source ['tab_2:row7:col1', 'tab_2:row7:col2', 'tab_2:row7:col3'])
- dropped duplicate Q22 ('CL9OHR (l/h)', value '6.2') — already have one for this compound
- dropped unlinked row (NIL): 'θ AGE (%)' — extend the ontology if this is a real PK parameter (source ['tab_2:row12:col1', 'tab_2:row12:col2', 'tab_2:row12:col3'])
- unit inherited for CL (Q22): 'l/h' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q45 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- metabolite 9-hydroxyrisperidone (paliperidone): Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite 9-hydroxyrisperidone (paliperidone): Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=9-hydroxyrisperidone (paliperidone)
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [0] (site presystemic: 'Model-based pharmacokinetic analysis Structural and error model: Since metabolite formation occurs rapidly via first pas')
- row roles: 4 per-group rows of 9-hydroxyrisperidone (paliperidone) covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 15 linked by role; re-tagged parent→9-hydroxyrisperidone (paliperidone) ×28
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row3:col4 = '(2.1;3.2)'
- unparsed cell tab_2:row4:col4 = '(-21.1;-3.9)'
- unparsed cell tab_2:row5:col4 = '(-1.21;-0.51)'
- unparsed cell tab_2:row6:col4 = '(-1.02;-0.15)'
- unparsed cell tab_2:row7:col4 = '(-2.99;0.10)'
- unparsed cell tab_2:row8:col4 = '(3.4;6.2)'
- unparsed cell tab_2:row9:col4 = '(178;414)'
- unparsed cell tab_2:row11:col4 = '(5.4;7.1)'
- unparsed cell tab_2:row12:col4 = '(-34;-16)'
- unparsed cell tab_2:row13:col1 = '4.9•10 -3'
- unparsed cell tab_2:row13:col3 = '5.0•10 -3'
- unparsed cell tab_2:row13:col4 = '(1.8;8.1)•10 -3'
- unparsed cell tab_2:row14:col4 = '(99;157)'
- unparsed cell tab_2:row15:col5 = '(13;55)'
- unparsed cell tab_2:row16:col1 = 'CL9OHR (CV%)'
- unparsed cell tab_2:row16:col5 = '(19;46)'
- unparsed cell tab_2:row17:col5 = '(-281;11)'
- unparsed cell tab_2:row18:col1 = 'logitFR, CL9OHR (CV%)'
- unparsed cell tab_2:row18:col5 = '(77;88)'
- unparsed cell tab_2:row19:col4 = '(32;52)'
- unparsed cell tab_2:row20:col4 = '(31;44)'
- unparsed cell tab_2:row21:col4 = '(-14;44)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (4/20 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['risperidone', '9-hydroxyrisperidone (paliperidone)', 'metabolism']] | [['risperidone', '9-hydroxyrisperidone', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl risp].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl risp].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl9ohr]` |  | 6.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_pm]` |  | -6.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_pm]` | -6.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23]` |  | 64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23]` | 64 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_cyp2d6]` |  | -0.87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_cyp2d6]` | -0.87 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q45_em]` |  | 2.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q45_em]` | 2.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v].parameter_id` | Q367 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[θ inhcyp2d6 m]` | -0.54 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 9-hydroxyrisperidone (paliperidone) | risperidone | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q351 | fail |  | -0.54 |  |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['tab_2:row13:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['tab_2:row8:col1', 'tab_2:row8:col2', 'tab_2:row8:col3'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['tab_2:row9:col1', 'tab_2:row9:col2', 'tab_2:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row10:col1', 'tab_2:row10:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpaliperidone%5D%20Paliperidone_Vandenberghe2015_reference&body=Drug%3A%20paliperidone%0ARecord%3A%20Paliperidone_Vandenberghe2015_reference%0APaper%3A%20Vandenberghe_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_paliperidone/Paliperidone_Vandenberghe2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:17 UTC</sub>
