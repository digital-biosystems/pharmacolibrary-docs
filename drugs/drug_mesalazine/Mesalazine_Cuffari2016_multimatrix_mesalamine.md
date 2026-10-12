<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;mesalazine&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/&quot;},{&quot;label&quot;:&quot;Cuffari_2016 \u00b7 multimatrix_mesalamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_nonmem_estimates&quot;,&quot;label&quot;:&quot;Cuffari_2016_nonmem_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_multimatrix_mesalamine&quot;,&quot;label&quot;:&quot;Cuffari_2016_multimatrix_mesalamine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mesalazine — `Mesalazine_Cuffari2016_multimatrix_mesalamine`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375), gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The mesalazine (5-ASA) model was rejected because its structure is a one-compartment parent model instead of the paper's parent–metabolite structure, its output is the parent rather than the measured 5-ASA compartment, and its simulated tmax (0.183 h) misses the paper's values (2–9 h).**

The record claims a parent–metabolite structure with Ac-5-ASA formed from 5-ASA, but the model was built as a single one-compartment parent model, so the metabolite compartment is absent from the structure. The model's output is the parent central compartment rather than the measured 5-ASA compartment. Simulated as the paper dosed it, the model's time of the peak (tmax) is 0.183 h against paper values of 2, 6, 7.5 and 9 h (ratios 0.0306–0.0917), exceeding the tolerance. Parameter values (apparent metabolic clearance 85.6 L/h, central volume 109 L) were read by only one reader, with the second reader leaving them null. Extracted — mesalazine: CL 85.6 L/h, V1 109 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mesalazine, the second reading mesalamine; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `mesalazine`, measured `5-ASA`.

## Citation
Cuffari C et al., Randomized clinical trial: pharmacokine…, Drug design, development an… (2016)
  ·  DOI: [10.2147/DDDT.S95316](https://doi.org/10.2147/DDDT.S95316)

## Model component
<dbs-pgx drug="mesalazine" model-id="Mesalazine_Cuffari2016_multimatrix_mesalamine" status="rejected" stale="false" population="children and adolescents with ulcerative colitis" measured-compound="5-ASA" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| apparent metabolic clearance | `Q22` · CL | 85.6 | L/h | 2.3777777777777777e-05 | L/h | not captured | boundary (0.8) | Cuffari_2016:results_prose | — | not captured |
| central volume of distribution | `Q63` · V1 | 109 | L | 0.109 | L | not captured | boundary_compartment (0.9) | Cuffari_2016:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '30 mg/kg/day, n=21' — extend the ontology if this is a real PK parameter (source ['Cuffari_2016_table_2:row0:col1', 'Cuffari_2016_table_2:row0:col2'])
- dropped unlinked row (NIL): 'AUCss (µg×h/L), mean (SD)' — extend the ontology if this is a real PK parameter (source ['Cuffari_2016_table_2:row2:col1', 'Cuffari_2016_table_2:row2:col2', 'Cuffari_2016_table_2:row2:col3', 'Cuffari_2016_table_2:row9:col1', 'Cuffari_2016_table_2:row9:col2', 'Cuffari_2016_table_2:row9:col3'])
- dropped unlinked row (NIL): 'Cmax,ss (µg/L), mean (SD)' — extend the ontology if this is a real PK parameter (source ['Cuffari_2016_table_2:row3:col1', 'Cuffari_2016_table_2:row3:col2', 'Cuffari_2016_table_2:row3:col3', 'Cuffari_2016_table_2:row10:col1', 'Cuffari_2016_table_2:row10:col2', 'Cuffari_2016_table_2:row10:col3'])
- dropped unlinked row (NIL): 'Xu0–24h (mg), mean (SD)' — extend the ontology if this is a real PK parameter (source ['Cuffari_2016_table_2:row5:col1', 'Cuffari_2016_table_2:row5:col2', 'Cuffari_2016_table_2:row5:col3', 'Cuffari_2016_table_2:row12:col1', 'Cuffari_2016_table_2:row12:col2', 'Cuffari_2016_table_2:row12:col3'])
- dropped unlinked row (NIL): 'CLR (L/h), mean (SD)' — extend the ontology if this is a real PK parameter (source ['Cuffari_2016_table_2:row6:col1', 'Cuffari_2016_table_2:row6:col2', 'Cuffari_2016_table_2:row6:col3', 'Cuffari_2016_table_2:row13:col1', 'Cuffari_2016_table_2:row13:col2', 'Cuffari_2016_table_2:row13:col3'])
- dropped unlinked row (NIL): '% dose absorbed, mean (SD)' — extend the ontology if this is a real PK parameter (source ['Cuffari_2016_table_2:row7:col2', 'Cuffari_2016_table_2:row7:col3'])
- dropped unlinked row (NIL): 'MRAUCss, mean (SD)' — extend the ontology if this is a real PK parameter (source ['Cuffari_2016_table_2:row14:col1', 'Cuffari_2016_table_2:row14:col2', 'Cuffari_2016_table_2:row14:col3'])
- dropped unlinked row (NIL): 'MRCmax,ss, mean (SD)' — extend the ontology if this is a real PK parameter (source ['Cuffari_2016_table_2:row15:col1', 'Cuffari_2016_table_2:row15:col2', 'Cuffari_2016_table_2:row15:col3'])
- table mostly unlinked (8/8 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('apparent metabolic clearance'=85.6) from results prose — parameter table was unreadable
- salvaged Q63 ('central volume of distribution'=109) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-ASA
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- population split: 'multimatrix mesalamine' subgroup of Cuffari_2016 (paper reports 2 populations: multimatrix mesalamine, nonmem estimates)
- row roles: 5 per-group rows of 5-ASA summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of Ac-5-ASA summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 40/40 row label(s) assigned, 60 linked by role; re-tagged parent→5-ASA ×132, parent→Ac-5-ASA ×52
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell ts2-dddt-10-593:row20:col4 = '42.5c'
- unparsed cell ts2-dddt-10-593:row21:col4 = '33.9c'
- unparsed cell ts2-dddt-10-593:row22:col4 = '64.2c'
- unparsed cell ts2-dddt-10-593:row23:col4 = '36.5c'
- unparsed cell ts2-dddt-10-593:row24:col4 = '28.7c'
- unparsed cell ts2-dddt-10-593:row25:col4 = '15.0c'
- unparsed cell ts2-dddt-10-593:row26:col4 = '165c'
- unparsed cell ts2-dddt-10-593:row27:col4 = '137c'
- unparsed cell ts2-dddt-10-593:row28:col4 = '50.6c'
- unparsed cell ts2-dddt-10-593:row29:col4 = '15.0c'
- unparsed cell ts2-dddt-10-593:row30:col4 = '81.4c'
- unparsed cell ts2-dddt-10-593:row32:col4 = '36.9d'
- unparsed cell ts2-dddt-10-593:row33:col4 = '6.00d'
- unparsed cell ts2-dddt-10-593:row34:col4 = '28.8d'
- unparsed cell ts2-dddt-10-593:row35:col4 = '6.00d'
- unparsed cell Cuffari_2016_table_2:row7:col1 = '29.4a (14.5)'
- companion parameter table 2 transcribed (34 record(s))
- unparsed cell Cuffari_2016_table_5:row19:col4 = '42.5c'
- unparsed cell Cuffari_2016_table_5:row20:col4 = '33.9c'
- unparsed cell Cuffari_2016_table_5:row21:col4 = '64.2c'
- unparsed cell Cuffari_2016_table_5:row22:col4 = '36.5c'
- unparsed cell Cuffari_2016_table_5:row23:col4 = '28.7c'
- unparsed cell Cuffari_2016_table_5:row24:col4 = '15.0c'
- unparsed cell Cuffari_2016_table_5:row25:col4 = '165c'
- unparsed cell Cuffari_2016_table_5:row26:col4 = '137c'
- unparsed cell Cuffari_2016_table_5:row27:col4 = '50.6c'
- unparsed cell Cuffari_2016_table_5:row28:col4 = '15.0c'
- unparsed cell Cuffari_2016_table_5:row29:col4 = '81.4c'
- unparsed cell Cuffari_2016_table_5:row31:col4 = '36.9d'
- unparsed cell Cuffari_2016_table_5:row32:col4 = '6.00d'
- unparsed cell Cuffari_2016_table_5:row33:col4 = '28.8d'
- unparsed cell Cuffari_2016_table_5:row34:col4 = '6.00d'
- companion parameter table 5 transcribed (76 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (3/8 fields) | 5 |
| `gpt-oss:120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[5-asa apparent metabolic clearance]` | not captured | 85.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent metabolic clearance]` | 85.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution for 5-asa]` | not captured | 109 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` | 109 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mesalazine | mesalamine | mismatch |
| `gpt-oss:120b` | `parameters[5-asa apparent metabolic clearance]` | not captured | 85.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent metabolic clearance]` | 85.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution for 5-asa]` | not captured | 109 | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | 109 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | mesalazine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 5-ASA | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 85.6 | not captured | not captured | ['Cuffari_2016:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 85.6 L/h | not captured | not captured | ['Cuffari_2016:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 109 L | not captured | not captured | ['Cuffari_2016:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | fail | Metabolite_C (measured=5-ASA) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_tmax | reference | fail | 6.0 | 0.1833333333517233 | 0.0306 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 9.0 | 0.1833333333517233 | 0.0204 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 2.0 | 0.1833333333517233 | 0.0917 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 9.0 | 0.1833333333517233 | 0.0204 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 7.5 | 0.1833333333517233 | 0.0244 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 2.0 | 0.1833333333517233 | 0.0917 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mesalazine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cuffari_2016` / `Cuffari_2016::multimatrix_mesalamine`)
- model: `../../../knowledgebase/drugs/drug_mesalazine/models/modelica/Mesalazine_Cuffari2016_multimatrix_mesalamine.mo`
- deviation: `../../../knowledgebase/drugs/drug_mesalazine/models/modelica/Mesalazine_Cuffari2016_multimatrix_mesalamine.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_mesalazine/models/modelica/Mesalazine_Cuffari2016_multimatrix_mesalamine.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 2100 mg infusion over 10 min, single dose. Doses in the paper: 2100, 4200, 7000 mg.

<dbs-fmusim paramsurl="drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine/Mesalazine_Cuffari2016_multimatrix_mesalamine_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine/Mesalazine_Cuffari2016_multimatrix_mesalamine_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Mesalazine_Cuffari2016_multimatrix_mesalamine_params.json` · controls `Mesalazine_Cuffari2016_multimatrix_mesalamine_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 19:36 UTC</sub>
