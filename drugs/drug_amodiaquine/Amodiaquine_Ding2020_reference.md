<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/&quot;},{&quot;label&quot;:&quot;Ding_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amodiaquine — `Amodiaquine_Ding2020_reference`

> ## <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.483). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model available in **Models**; browser simulation unavailable.

### Reviewer guidance

**The amodiaquine parent–metabolite model was not published because two desethylamodiaquine peripheral volumes (V2/F, 1820 L and 363 L) were not captured, and the structure was reduced to a one-compartment enteral model instead of the three-compartment parent–metabolite topology.**

The parameter coverage check expected 7 parameters but covered only 5; the desethylamodiaquine V2/F values (1820 L for the parent's peripheral volume and 363 L for the metabolite's peripheral volume) were neither emitted nor defaulted, so the metabolite's peripheral compartment would have had no volume. The topology check expected a three-compartment parent–metabolite structure with a central metabolite but obtained a one-compartment enteral structure. The model builder also left the lag time (Tlag) at a default and assumed F=1, Fm=1 with no molar correction, so all clearances and volumes are apparent (F-adjusted) values. The model was built but has not been simulated yet. Extracted — amodiaquine: Frel 100, kabs 2.85 1/h, CLm/F 101 L/hour, Vm/F 314 L, Q/F 119 L/hour, V2/F 1.82e+03 L; desethylamodiaquine: CLm/F 2.33 L/hour, V1/F 49.1 L, Q/F 2.31 L/hour, V2/F 363 L, Q2/F 4.34 L/hour, V3/F 98.1 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amodiaquine, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `amodiaquine`, measured `desethylamodiaquine`.

## Citation
Ding J et al., Adherence and Population Pharmacokineti…, Clinical pharmacology and t… (2020)
  ·  DOI: [10.1002/cpt.1707](https://doi.org/10.1002/cpt.1707)

<div class="pk-model-meta" hidden drug="amodiaquine" model-id="Amodiaquine_Ding2020_reference" status="not_simulated" stale="false" population="African children under 5 years receiving seasonal malaria chemoprevention" measured-compound="desethylamodiaquine" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 12 extracted.

**Parameterization:** CLm/F, Q/F, Q2/F, V1/F, V2/F, V3/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F AQ (%) | `Q87` · Frel | 100 | not captured | not captured | not captured | not captured | llm (0.6) | cpt1707-tbl-0001:row2:col1 | — | not captured |
| k a (1/hour) | `Q49` · kabs | 2.85 | 1/h | 0.0007916666666666666 | 1/h | 42.8 | exact (1.0) | cpt1707-tbl-0001:row3:col1 | — | 173 (26.0% RSE) |
| CL/F AQ (L/hour) | `Q351` · CLm/F | 101 | L/hour | 2.8055555555555557e-05 | [l] / [h] | 12.3 | llm_confirmed (0.6) | cpt1707-tbl-0001:row4:col1 | — | 22.2 (35.2% RSE) |
| V C/F AQ (L) | `Q367` · Vm/F | 314 | L | 0.314 | [l] | 22.1 | llm (0.6) | cpt1707-tbl-0001:row5:col1 | — | not captured |
| Q/F AQ (L/hour) | `Q69` · Q/F | 119 | L/hour | 3.305555555555556e-05 | [l] / [h] | 27.3 | llm_confirmed (0.6) | cpt1707-tbl-0001:row6:col1 | — | not captured |
| V P/F AQ (L) | `Q82` · V2/F | 1820 | L | 1.82 | [l] | 15.8 | llm (0.6) | cpt1707-tbl-0001:row7:col1 | — | not captured |
| CL/F DEAQ (L/hour) | `Q351` · CLm/F | 2.33 | L/hour | 6.472222222222222e-07 | [l] / [h] | 7.8 | exact (1.0) | cpt1707-tbl-0001:row10:col1 | — | not captured |
| V C/F DEAQ (L) | `Q290` · V1/F | 49.1 | L | 0.049100000000000005 | [l] | 17.6 | exact (1.0) | cpt1707-tbl-0001:row11:col1 | — | not captured |
| Q 1/F DEAQ (L/hour) | `Q69` · Q/F | 2.31 | L/hour | 6.416666666666666e-07 | [l] / [h] | 29.9 | exact (1.0) | cpt1707-tbl-0001:row12:col1 | — | not captured |
| V P1/F DEAQ (L) | `Q82` · V2/F | 363 | L | 0.363 | [l] | 16.9 | exact (1.0) | cpt1707-tbl-0001:row13:col1 | — | not captured |
| Q 2/F DEAQ (L/hour) | `Q80` · Q2/F | 4.34 | L/hour | 1.2055555555555555e-06 | [l] / [h] | 47.2 | special_case (0.95) | cpt1707-tbl-0001:row14:col1 | — | not captured |
| V P2/F DEAQ (L) | `Q78` · V3/F | 98.1 | L | 0.09809999999999999 | [l] | 42.9 | exact (1.0) | cpt1707-tbl-0001:row15:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'F AQ (%)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'k a (1/hour)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'CL/F AQ (L/hour)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'V C/F AQ (L)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'CL/F DEAQ (L/hour)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'V P1/F DEAQ (L)' routed out of structural estimates ('CV for IIV (%RSE)')
- unit_dimension_mismatch: 'Age50 on CL/F AQ (months)' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('Age50 on CL/F AQ (months)', value '4.66') — already have one for this compound
- dropped unlinked row (NIL): 'Age50 on CL/F DEAQ (months)' — extend the ontology if this is a real PK parameter (source ['cpt1707-tbl-0001:row19:col1'])
- implicit units: 'k a (1/hour)' → 1/h (from the paper text: 'Table 1 lists the parameter as "k a (1/hour) = 2.85", explicitly stating the unit.')
- metabolite desethylamodiaquine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite desethylamodiaquine: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desethylamodiaquine
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [3]
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 21 linked by role; re-tagged parent→desethylamodiaquine ×12
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt1707-tbl-0001:row2:col4 = '37.2 (32.1–42.5)'
- unparsed cell cpt1707-tbl-0001:row3:col2 = '3.09 (1.71–5.70)'
- unparsed cell cpt1707-tbl-0001:row3:col4 = '179 (131–237)'
- unparsed cell cpt1707-tbl-0001:row4:col2 = '100 (85–120)'
- unparsed cell cpt1707-tbl-0001:row4:col4 = '23.1 (7.61–33.0)'
- unparsed cell cpt1707-tbl-0001:row5:col2 = '309 (214–445)'
- unparsed cell cpt1707-tbl-0001:row5:col4 = '80.5 (56.0–104)'
- unparsed cell cpt1707-tbl-0001:row6:col2 = '115 (84.7–161)'
- unparsed cell cpt1707-tbl-0001:row7:col2 = '1,772 (1,460–2,220)'
- unparsed cell cpt1707-tbl-0001:row8:col2 = '0.831 (0.742–0.920)'
- unparsed cell cpt1707-tbl-0001:row10:col2 = '2.32 (2.08–2.57)'
- unparsed cell cpt1707-tbl-0001:row10:col4 = '16.1 (4.05–26.9)'
- unparsed cell cpt1707-tbl-0001:row11:col2 = '49.3 (39.2–61.5)'
- unparsed cell cpt1707-tbl-0001:row12:col2 = '2.23 (1.54–3.42)'
- unparsed cell cpt1707-tbl-0001:row13:col2 = '355 (293–462)'
- unparsed cell cpt1707-tbl-0001:row13:col4 = '69.1 (55.0–84.7)'
- unparsed cell cpt1707-tbl-0001:row14:col2 = '4.45 (2.51–6.86)'
- unparsed cell cpt1707-tbl-0001:row15:col2 = '100 (46.1–153)'
- unparsed cell cpt1707-tbl-0001:row16:col2 = '0.201 (0.181–0.233)'
- unparsed cell cpt1707-tbl-0001:row18:col2 = '4.60 (1.92–8.08)'
- unparsed cell cpt1707-tbl-0001:row19:col2 = '2.45 (0.838–4.47)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.483 (14/29 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f aq]` | 101 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f aq]` | not captured | 101 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f deaq].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[f aq]` | 100 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f aq]` | not captured | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 2.85 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | not captured | 2.85 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f aq]` | 119 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f aq]` | not captured | 119 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/f aq]` | 314 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/f aq]` | not captured | 314 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p/f aq]` | 1820 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amodiaquine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | desethylamodiaquine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row11:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row4:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row10:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row12:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row15:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row13:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 49.1 L | not captured | not captured | ['cpt1707-tbl-0001:row11:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.82e+03 L | not captured | not captured | ['cpt1707-tbl-0001:row7:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 363 L | not captured | not captured | ['cpt1707-tbl-0001:row13:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 7 scholar param(s) emitted or defaulted | 5 covered | not captured | neither emitted nor in defaulted[]: ['V2/F', 'V2/F'] |
| T3_shared_parameters | not captured | pass | 7 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_amodiaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_2020` / `Ding_2020::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_amodiaquine/models/modelica/Amodiaquine_Ding2020_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_amodiaquine/models/modelica/Amodiaquine_Ding2020_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference/Amodiaquine_Ding2020_reference_modelica.zip" download>Amodiaquine_Ding2020_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:41 UTC</sub>
