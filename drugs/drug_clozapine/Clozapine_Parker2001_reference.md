<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Parker_2001 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clozapine_Parker2001_reference&quot;,&quot;label&quot;:&quot;Parker_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Parker2001_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Shang_2014_PANSS&quot;,&quot;label&quot;:&quot;Shang_2014 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/pd_Shang_2014_PANSS.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Parker2001_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> T3_output_variable; t3_topology_template (+1 more).

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Parker2001_reference" status="rejected" stale="false" population="rats" measured-compound="clozapine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Parker TJ, Della Pasqua OE, Loizillon E, Chezaubernard C, Jochemsen R, Danhof M. Pharmacokinetic-pharmacodynamic modelling in the early development phase of anti-psychotics: a comparison of the effects of clozapine, S 16924 and S 18327 in the EEG model in rats. British journal of pharmacology 132(1):151–158 (2001).
  ·  DOI: [10.1038/sj.bjp.0703791](https://doi.org/10.1038/sj.bjp.0703791)

## Population and dosing

**Population:** rats · condition healthy · n = 24.

**Dosing:** 280, 437.5, 1225 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed clozapine, S 16924, S 18327, measured clozapine.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_clozapine/Clozapine_Parker2001_reference/Clozapine_Parker2001_reference.svg" alt="Clozapine_Parker2001_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K | kel | 2.7 | h⁻¹ |
| E | E | 77 | µV s⁻¹ |
| CL | CL | 8.9 | L/h |
| V1 | V1 | 12 | L |
| Q | Q | 23 | L/h |
| V2 | V2 | 42 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T3_output_variable; t3_topology_template (+1 more).**

A reported unit could not be converted (E), so that value has no SI equivalent. Extracted — clozapine: kel 2.7 h⁻¹, E 77 µV s⁻¹, CL 8.9 L/h, V1 12 L, Q 23 L/h, V2 42 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clozapine, S 16924, S 18327, the second reading clozapine; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K | `Q47` · kel | 2.7 | h⁻¹ | 0.00075 | 1/s | 1/h | exact (1) | Parker_2001_table_5:row0:col2, Parker_2001_table_5:row12:col2 |
| E | `Q38` · E | 77 | µV s⁻¹ |  |  | uv/s | exact (1) | Parker_2001_table_5:row1:col2, Parker_2001_table_5:row13:col2 |
| CL | `Q22` · CL | 8.9 | L/h | 2.472e-06 | m3/s | L/h | exact (1) | Parker_2001_table_2:row1:col4, Parker_2001_table_2:row7:col4, Parker_2001_table_2:row15:col4 |
| V1 | `Q63` · V1 | 12 | L | 0.012 | m3 | L | exact (1) | Parker_2001_table_2:row2:col4, Parker_2001_table_2:row8:col4, Parker_2001_table_2:row16:col4 |
| Q | `Q30` · Q | 23 | L/h | 6.389e-06 | m3/s | L/h | exact (1) | Parker_2001_table_2:row3:col4, Parker_2001_table_2:row9:col4, Parker_2001_table_2:row17:col4 |
| V2 | `Q64` · V2 | 42 | L | 0.042 | m3 | L | exact (1) | Parker_2001_table_2:row4:col4, Parker_2001_table_2:row10:col4, Parker_2001_table_2:row18:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- conflicting source units for 'Emax (2)': [{'unit': 'µV s⁻¹', 'source': 'Parker_2001_table_5:row5:col1', 'scope': 'unit_column'}, {'unit': '2', 'source': 'Parker_2001_table_5:row5:col0', 'scope': 'label'}]
- conflicting source units for 'EC50 (2)': [{'unit': 'ng ml⁻¹', 'source': 'Parker_2001_table_5:row6:col1', 'scope': 'unit_column'}, {'unit': '2', 'source': 'Parker_2001_table_5:row6:col0', 'scope': 'label'}]
- unit_dimension_unknown: 'µV s⁻¹' (E)
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row2:col2', 'Parker_2001_table_5:row14:col2'])
- dropped PD-category row 'EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row3:col2', 'Parker_2001_table_5:row15:col2'])
- dropped PD-category row 'Emax (2)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row5:col2'])
- dropped PD-category row 'EC50 (2)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row6:col2'])
- implicit units: 'CL' → L/h (from the paper text: "Text states: 'Population CL and V1 were estimated as 0.76 l h 71...'")
- implicit units: 'V1' → L (from the paper text: "Text states: '...and 1.0 l (clozapine)...'")
- implicit units: 'Q' → L/h (from the popPK convention: 'Clearance and intercompartmental clearances are typically expressed in L/h in population PK, consistent with the magnitu')
- implicit units: 'V2' → L (from the popPK convention: 'Volumes of distribution are typically expressed in L, consistent with the magnitude of 42 and the units used for V1 in t')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clozapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- table Parker_2001_table_5: conflicting_units
- table Parker_2001_table_5: missing_unit_binding
- table Parker_2001_table_2: unknown_column_role
- table Parker_2001_table_2: ragged_grid
- table Parker_2001_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (96 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['clozapine', 'desmethylclozapine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | clozapine, S 16924, S 18327 | clozapine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row15:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Parker_2001_table_2:row3:col4', 'Parker_2001_table_2:row9:col4', 'Parker_2001_table_2:row17:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Parker_2001_table_5:row0:col2', 'Parker_2001_table_5:row12:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Parker_2001_table_2:row2:col4', 'Parker_2001_table_2:row8:col4', 'Parker_2001_table_2:row16:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Parker_2001_table_2:row4:col4', 'Parker_2001_table_2:row10:col4', 'Parker_2001_table_2:row18:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.9 | ['Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row15:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.9 L/h | ['Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row15:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 12 L | ['Parker_2001_table_2:row2:col4', 'Parker_2001_table_2:row8:col4', 'Parker_2001_table_2:row16:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 42 L | ['Parker_2001_table_2:row4:col4', 'Parker_2001_table_2:row10:col4', 'Parker_2001_table_2:row18:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=clozapine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.8 (8 of 10 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.8 | cross-check contradicted by a second reader: verdict disputed; agreement 0.8 (8 of 10 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 280 mg infusion over 10 min, single dose. Doses in the paper: 280, 437.5, 1225 mg.

<dbs-fmusim paramsurl="drugs/drug_clozapine/Clozapine_Parker2001_reference/Clozapine_Parker2001_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_clozapine/Clozapine_Parker2001_reference/Clozapine_Parker2001_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Clozapine_Parker2001_reference_params.json` · controls `Clozapine_Parker2001_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclozapine%5D%20Clozapine_Parker2001_reference&body=Drug%3A%20clozapine%0ARecord%3A%20Clozapine_Parker2001_reference%0APaper%3A%20Parker_2001%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clozapine/Clozapine_Parker2001_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:17 UTC</sub>
