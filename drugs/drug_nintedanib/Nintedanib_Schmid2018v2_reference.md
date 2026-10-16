<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;nintedanib&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/&quot;},{&quot;label&quot;:&quot;Schmid_2018_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nintedanib_Schmid2018_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nintedanib_Schmid2018v2_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nintedanib — `Nintedanib_Schmid2018v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.824). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Nintedanib’s reported CL/F is 897 L/h, but the record was rejected because its parent–metabolite structure was represented as a one-compartment enteral model.**

The measured analyte was nintedanib, but the model output was assigned to the central compartment rather than the analyte compartment; the recorded parent–metabolite structure also did not match the one-compartment enteral model. The absorption lag time was defaulted rather than explicitly estimated. The apparent parameterization assumed F=1 and Fm=1, with no molar correction. Extracted — nintedanib: CL/F 897 L/h, V1/F 465 L, kabs 0.0376 1/h, tlag 0.417 h, allometric_exponent 0.619.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of percentage change in aucτ,ss: this record has none, the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Schmid U et al., Population pharmacokinetics of nintedan…, Cancer chemotherapy and pha… (2018)
  ·  DOI: [10.1007/s00280-017-3452-0](https://doi.org/10.1007/s00280-017-3452-0)

<div class="pk-model-meta" hidden drug="nintedanib" model-id="Nintedanib_Schmid2018v2_reference" status="rejected" stale="false" population="patients with NSCLC or IPF" measured-compound="nintedanib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F [L/h] (θ CL) | `Q27` · CL/F | 897 | L/h | 0.0002491666666666667 | L/h | 2.42 | llm_confirmed (0.6) | Tab3:row2:col1, Tab3:row2:col2 | — | not captured |
| V2/F [L] (θ V2) | `Q290` · V1/F | 465 | L | 0.465 | L | 10.7 | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| k a [h−1] (θ ka) | `Q49` · kabs | 0.0376 | 1/h | 1.0444444444444445e-05 | 1/h | 7.77 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| ALAG [h] | `Q83` · tlag | 0.417 | h | 1501.2 | [h] | 5.59 | llm_confirmed (0.6) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| θ Age | `Q900` · equation variable | 0.00959 | not captured | not captured | not captured | 16.0 | llm (0.6) | Tab3:row15:col1, Tab3:row15:col2, Tab3:footnote | — | not captured |
| θ WT | `Q319` · allometric_exponent | 0.619 | not captured | not captured | not captured | 16.5 | llm (0.6) | Tab3:row20:col1, Tab3:row20:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Percentage change in AUCτ,ss | Q18 | not captured | llm_corrected |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'IIV in F1 [CV%]' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV in k a for Phase II studies [CV%]' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV in V2/F [CV%]' routed out of structural estimates ('IIV in k a for Phase III studies [CV%]')
- column 'lactate dehydrogenase' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ethnic origin' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ecog performance status' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'θ CL' (CL/F)
- unit_dimension_unknown: 'θ V2' (V1/F)
- unit_dimension_unknown: 'θ ka' (kabs)
- dropped unlinked row (NIL): 'Indian/Chinese/Taiwanese origin' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1', 'Tab3:row10:col2'])
- dropped unlinked row (NIL): 'Korean origin' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Tab3:row11:col2'])
- dropped unlinked row (NIL): 'Current smoker' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1', 'Tab3:row14:col2'])
- dropped unlinked row (NIL): 'NSCLC Phase II [23] and LUME-Lung 2 [6]' — extend the ontology if this is a real PK parameter (source ['Tab3:row18:col1', 'Tab3:row18:col2'])
- dropped unlinked row (NIL): 'NSCLC Phase II [23] and IPF Phase II [11]' — extend the ontology if this is a real PK parameter (source ['Tab3:row24:col1', 'Tab3:row24:col2'])
- dropped value-less row: 'Additive (SD) [nM; log scale]' (captured trailing unit 'nM; log scale' for child rows)
- dropped unlinked row (NIL): 'Reference patient' — extend the ontology if this is a real PK parameter (source ['Schmid_2018_2_table_4:row0:col7'])
- unit 'nM; log scale' inherited from a section-header row for AUCSS (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: 'nM; log scale' (AUCSS)
- dropped value-less row: 'θ Ethnicity'
- dropped value-less row: 'θ Smok'
- dropped value-less row: 'θ Trial'
- dropped value-less row: 'θWT'
- implicit units: 'CL/F [L/h] (θ CL)' → L/h (from the paper text: 'The paper states, “the typical CL/F was 897 L/h.”')
- implicit units: 'V2/F [L] (θ V2)' → L (from the paper text: 'The paper states, “the V2/F in the central compartment at steady state was 465 L.”')
- implicit units: 'k a [h−1] (θ ka)' → 1/h (from the paper text: 'The paper states that “ka was 0.0827 h−1,” giving the unit for the absorption-rate constant.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nintedanib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [0] (site presystemic: 'The total fraction of nintedanib and its metabolites absorbed is estimated to be much higher than the absolute bioavaila')
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 8 linked by role; re-tagged nintedanib→parent ×6
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell Tab3:row26:col1 = '49.1 (6.64c)'
- unparsed cell Tab3:row27:col1 = '32.4 (19.2c)'
- unparsed cell Tab3:row29:col1 = '119 (15.7c)'
- unparsed cell Tab3:row31:col1 = '0.526 (4.58c)'
- transposed table Schmid_2018_2_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Schmid_2018_2_table_4:row0:col1 = 'BIBF 1202'
- unparsed cell Schmid_2018_2_table_4:row0:col2 = '62 yearsa'
- unparsed cell Schmid_2018_2_table_4:row0:col4 = '71.5 kga'
- unparsed cell Schmid_2018_2_table_4:row0:col6 = 'ECOG ≥ 1'
- unparsed cell Schmid_2018_2_table_4:row1:col2 = '45 yearsb: ↓16%76 yearsc: ↑13%'
- unparsed cell Schmid_2018_2_table_4:row1:col3 = 'Current smoker: ↓21%'
- unparsed cell Schmid_2018_2_table_4:row1:col4 = '50 kgb: ↑25%100 kgc: ↓19%'
- unparsed cell Schmid_2018_2_table_4:row2:col2 = '45 yearsb: ↓16%76 yearsc: ↑13%'
- unparsed cell Schmid_2018_2_table_4:row2:col3 = 'Current smoker: ↓21%'
- unparsed cell Schmid_2018_2_table_4:row2:col4 = '50 kgb: ↑32%100 kgc: ↓22%'
- companion parameter table 4 transcribed (5 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.824 (14/17 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[percentage change in aucτ,ss]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ age]` | 0.00959 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ wt].parameter_id` | Q319 | Q900 | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 897 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 465 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=nintedanib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nintedanib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schmid_2018_2` / `Schmid_2018_2::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nintedanib/models/modelica/Nintedanib_Schmid2018v2_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nintedanib/models/modelica/Nintedanib_Schmid2018v2_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nintedanib/models/modelica/Nintedanib_Schmid2018v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.0376 /h, F 1). Doses in the paper: 150, 200, 250 mg.

<dbs-fmusim paramsurl="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Nintedanib_Schmid2018v2_reference_params.json` · controls `Nintedanib_Schmid2018v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:19 UTC</sub>
