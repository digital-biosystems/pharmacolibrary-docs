<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;modafinil&quot;,&quot;href&quot;:&quot;drugs/drug_modafinil/&quot;},{&quot;label&quot;:&quot;Wu_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Modafinil_Tao2010_reference&quot;,&quot;label&quot;:&quot;Tao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_modafinil/Modafinil_Tao2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# modafinil — `Modafinil_Wu2012_reference`

> ## <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model available in **Models**; browser simulation unavailable.

### Reviewer guidance

**The modafinil parent–metabolite model was not simulated because the metabolite's peripheral volume V2/F (34.0 L) was never extracted, and the model structure (a two-compartment disposition with a metabolite compartment) did not match the built one-compartment enteral structure.**

The parameter coverage check found 4 of 5 expected parameters covered; V2/F, the peripheral volume of distribution adjusted for bioavailability, was neither emitted nor defaulted, so a placeholder would have been used. The topology check expected a parent–metabolite structure with a central parent compartment feeding a three-compartment disposition, but the built model was a one-compartment enteral structure. The builder also left the absorption lag time (Tlag) at a default instead of an explicit estimate, and assumed F=1 and Fm=1 without molar correction, making all clearances and volumes apparent. The model was built but has not been simulated yet. Extracted — modafinil: CLm/F 3.51 L/h, V1 7.74 l, Q/F 7.02 L/h, V2/F 34 l, kabs 0.697 1/h; modafinil acid: V 5.14 l, CLm/F 1.25 l/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl2/f 1 (l/h) male: this record has 7.02, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `modafinil`, measured `modafinil acid`.

## Citation
Wu KH et al., Population pharmacokinetics of modafini…, Acta pharmacologica Sinica (2012)
  ·  DOI: [10.1038/aps.2012.124](https://doi.org/10.1038/aps.2012.124)

<div class="pk-model-meta" hidden drug="modafinil" model-id="Modafinil_Wu2012_reference" status="not_simulated" stale="false" population="healthy volunteers from 5 ethnic groups of China" measured-compound="modafinil acid" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CLm/F, Q/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL1/F 1 (l/h) Male | `Q351` · CLm/F | 3.51 | L/h | 9.75e-07 | L/h | 7.18 | exact (1.0) | tab_1:row1:col2, tab_1:row1:col3, tab_1:row1:col4 | — | not captured |
| θ 2 | `Q63` · V1 | 7.74 | l | 0.00774 | [l] | not captured | exact (1.0) | tab_1:row4:col4, tab_1:row4:col5 | — | not captured |
| CL2/F 1 (l/h) Male | `Q69` · Q/F | 7.02 | L/h | 1.95e-06 | L/h | 9.82 | exact (1.0) | tab_1:row8:col2, tab_1:row8:col3, tab_1:row8:col4 | — | not captured |
| V2/F 1 (l) | `Q82` · V2/F | 34.0 | l | 0.034 | [l] | not captured | exact (1.0) | tab_1:row10:col3, tab_1:row10:col4, tab_1:row10:col5 | — | not captured |
| θ 5 | `Q61` · V | 5.14 | l | 0.00514 | [l] | not captured | exact (1.0) | tab_1:row13:col3, tab_1:row13:col4, tab_1:row13:col5 | — | not captured |
| θ COV-CL3 | `Q351` · CLm/F | 1.25 | l/h | 3.4722222222222224e-07 | [l] / [h] | not captured | llm (0.6) | tab_1:row14:col4, tab_1:row14:col5 | — | not captured |
| ka (1/h) | `Q49` · kabs | 0.697 | 1/h | 0.0001936111111111111 | 1/h | not captured | exact (1.0) | tab_1:row17:col3, tab_1:row17:col4, tab_1:row17:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F 1 is the bioavailability of modafinil. | Q40 | not captured | llm_confirmed |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q63 ('θ COV-V1', value '7.60') — already have one for this compound
- unit_dimension_mismatch: '(l)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('(l)', value '2.63') — already have one for this compound
- dropped duplicate Q27 ('CL2/F 1', value None) — already have one for this compound
- dropped value-less row: 'F 2 is the absolute metabolic transformation fraction from modafinil to modafinil acid.'
- dropped value-less row: 'θ COV-V1 is 1 for Han group'
- dropped value-less row: 'θ COV-CL3 is 1 for Han and Mongolian groups.'
- dropped value-less row: 'F 1'
- dropped value-less row: 'F 2'
- unit inherited for V1 (Q63): 'l' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'CL1/F 1 (l/h) Male' → L/h (from the paper text: "Table 2 lists 'CL1/F1 (l/h)'; abstract states typical clearance in (l/h).")
- implicit units: 'CL2/F 1 (l/h) Male' → L/h (from the paper text: "Table 2 lists 'CL2/F1 (l/h)' for the intercompartmental clearance.")
- implicit units: 'ka (1/h)' → 1/h (from the paper text: "Table 2 lists 'ka (1/h)' for the absorption rate constant.")
- metabolite modafinil acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite modafinil acid: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'θ 5' Q63→Q61 for modafinil acid — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=modafinil acid
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- row roles: 2 per-group rows of modafinil covariate_effect but 2 reference group(s) — kept as printed
- row roles: 2 per-group rows of modafinil acid covariate_effect but 2 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 22 linked by role; re-tagged parent→modafinil acid ×8, modafinil acid→parent ×3
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row21:col1 = '22.1% [8.35]'
- unparsed cell tab_1:row21:col3 = '0.001 [9.14]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.714 (10/14 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl2/f 1 (l/h) male]` | 7.02 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f 1 is the bioavailability of modafinil.]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cov-cl3]` | not captured | 1.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cov-cl3]` | 1.25 | not captured | only_one_extracted |

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row1:col2', 'tab_1:row1:col3', 'tab_1:row1:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row14:col4', 'tab_1:row14:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row17:col3', 'tab_1:row17:col4', 'tab_1:row17:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col4', 'tab_1:row4:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row10:col3', 'tab_1:row10:col4', 'tab_1:row10:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.14 L | not captured | not captured | ['tab_1:row13:col3', 'tab_1:row13:col4', 'tab_1:row13:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.74 L | not captured | not captured | ['tab_1:row4:col4', 'tab_1:row4:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 34 L | not captured | not captured | ['tab_1:row10:col3', 'tab_1:row10:col4', 'tab_1:row10:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_shared_parameters | not captured | pass | 2 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_modafinil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wu_2012` / `Wu_2012::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_modafinil/models/modelica/Modafinil_Wu2012_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_modafinil/models/modelica/Modafinil_Wu2012_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_modafinil/Modafinil_Wu2012_reference/Modafinil_Wu2012_reference_modelica.zip" download>Modafinil_Wu2012_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:55 UTC</sub>
