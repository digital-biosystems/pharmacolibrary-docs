<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artesunate&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/&quot;},{&quot;label&quot;:&quot;Lohy_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artesunate_Ayyoub2015_reference&quot;,&quot;label&quot;:&quot;Ayyoub_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Ayyoub2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Pfaffendorf2026_reference&quot;,&quot;label&quot;:&quot;Pfaffendorf_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Pfaffendorf2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Lohy2017_reference&quot;,&quot;label&quot;:&quot;Lohy_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Lohy2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artesunate — `Artesunate_Lohy2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.316). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The artesunate parent–metabolite model was rejected because the absorption rate ka was never reported and left at library defaults, and the simulated dihydroartemisinin terminal half-life (4.661667497314338 h) does not match the paper's 9.66 h.**

The record invents absorption settings: ka and Tlag were defaulted rather than extracted, and the apparent parameterization assumes F=1 and Fm=1 with no molar correction, so the metabolite parameters CLm/F (1890 L/h) and Vm/F (778 L) for artesunate's metabolite dihydroartemisinin, and its clearance 116 L/h and volume 124 L, rest on unsupported assumptions. The model structure also does not match the paper's parent–metabolite topology, and the simulated output is not the measured analyte compartment. Simulated as the paper dosed it, the terminal half-life is 4.661667497314338 h against the reported 9.66 h (ratio 0.4826), outside tolerance. One reported unit could not be converted to SI, so that parameter reached the model build without an SI value; the deviations check could not adjudicate and returned 'not acceptable' for defaulted parameters and invented absorption. Extracted — artesunate: MTT 0.869 h, CLm/F 1.89e+03 L/h, Vm/F 778 L; dihydroartemisinin: CLm/F 116 L/h, V1/F 124 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artesunate, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `artesunate`, measured `dihydroartemisinin`.

## Citation
Lohy Das J et al., Population Pharmacokinetic and Pharmaco…, The AAPS journal (2017)
  ·  DOI: [10.1208/s12248-017-0141-1](https://doi.org/10.1208/s12248-017-0141-1)

<div class="pk-model-meta" hidden drug="artesunate" model-id="Artesunate_Lohy2017_reference" status="rejected" stale="false" population="adults with uncomplicated P. falciparum malaria (Cambodia and Thailand)" measured-compound="dihydroartemisinin" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CLm/F, V1/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MTT (h) | `Q81` · MTT | 0.869 | h | not captured | [h] | 7.94 | exact (1.0) | Lohy_2017_table_3:row3:col1, Lohy_2017_table_3:row3:col2, Lohy_2017_table_3:row3:col4 | — | 35.1 (35.4% RSE) |
| CLARS/F (L/h) | `Q351` · CLm/F | 1890 | L/h | 0.0005250000000000001 | [l] / [h] | 6.73 | llm (0.6) | Lohy_2017_table_3:row5:col1, Lohy_2017_table_3:row5:col2 | — | not captured |
| VARS/F (L) | `Q367` · Vm/F | 778 | L | 0.778 | [l] | 9.45 | llm (0.6) | Lohy_2017_table_3:row6:col1, Lohy_2017_table_3:row6:col2, Lohy_2017_table_3:row6:col4 | — | not captured |
| CLDHA/F (L/h) | `Q351` · CLm/F | 116 | L/h | 3.222222222222222e-05 | [l] / [h] | 6.15 | exact (1.0) | Lohy_2017_table_3:row9:col1, Lohy_2017_table_3:row9:col2 | — | not captured |
| VDHA/F (L) | `Q290` · V1/F | 124 | L | 0.124 | [l] | 6.72 | exact (1.0) | Lohy_2017_table_3:row10:col1, Lohy_2017_table_3:row10:col2, Lohy_2017_table_3:row10:col4 | — | not captured |

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
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'F' routed out of structural estimates ('CV% for BSV/BOVa (% RSE)')
- table section iiv: 'MTT (h)' routed out of structural estimates ('CV% for BSV/BOVa (% RSE)')
- table section iiv: 'VARS/F (L)' routed out of structural estimates ('CV% for BSV/BOVa (% RSE)')
- table section iiv: 'VDHA/F (L)' routed out of structural estimates ('CV% for BSV/BOVa (% RSE)')
- dropped duplicate Q81 ('PARAMTT', value '0.115') — already have one for this compound
- dropped unlinked row (NIL): 'PARAMaxF' — extend the ontology if this is a real PK parameter (source ['Lohy_2017_table_3:row15:col1', 'Lohy_2017_table_3:row15:col2'])
- dropped unlinked row (NIL): 'PARA50F' — extend the ontology if this is a real PK parameter (source ['Lohy_2017_table_3:row16:col1', 'Lohy_2017_table_3:row16:col2'])
- metabolite dihydroartemisinin: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite dihydroartemisinin: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dihydroartemisinin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 12 linked by role; re-tagged parent→dihydroartemisinin ×8
- review gap-fill skipped: this record measures 'dihydroartemisinin', not artesunate — the review values are the parent's
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.316 (6/19 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clars/f]` | 1890 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clars/f]` | not captured | 1890 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cldha/f].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 0.869 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | not captured | 0.869 | only_one_extracted |
| `gpt-oss-120b` | `parameters[paramaxf]` | not captured | 1.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[paramtt]` | not captured | 0.115 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vars/f]` | 778 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vars/f]` | not captured | 778 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | artesunate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | dihydroartemisinin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lohy_2017_table_3:row10:col1', 'Lohy_2017_table_3:row10:col2', 'Lohy_2017_table_3:row10:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lohy_2017_table_3:row5:col1', 'Lohy_2017_table_3:row5:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lohy_2017_table_3:row9:col1', 'Lohy_2017_table_3:row9:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lohy_2017_table_3:row6:col1', 'Lohy_2017_table_3:row6:col2', 'Lohy_2017_table_3:row6:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 124 L | not captured | not captured | ['Lohy_2017_table_3:row10:col1', 'Lohy_2017_table_3:row10:col2', 'Lohy_2017_table_3:row10:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=dihydroartemisinin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 9.66 | 4.661667497314338 | 0.4826 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_artesunate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lohy_2017` / `Lohy_2017::reference`)
- model: `../../../knowledgebase/drugs/drug_artesunate/models/modelica/Artesunate_Lohy2017_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_artesunate/models/modelica/Artesunate_Lohy2017_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_artesunate/models/modelica/Artesunate_Lohy2017_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 140 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 140, 280 mg.

<dbs-fmusim paramsurl="drugs/drug_artesunate/Artesunate_Lohy2017_reference/Artesunate_Lohy2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_artesunate/Artesunate_Lohy2017_reference/Artesunate_Lohy2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Artesunate_Lohy2017_reference_params.json` · controls `Artesunate_Lohy2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:46 UTC</sub>
