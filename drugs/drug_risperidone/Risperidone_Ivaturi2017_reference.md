<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;risperidone&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/&quot;},{&quot;label&quot;:&quot;Ivaturi_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Ivaturi2017_phase_3_estimate&quot;,&quot;label&quot;:&quot;Ivaturi_2017_phase_3_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Ivaturi2017_phase_3_estimate.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Ivaturi2017_pooled_sad_mad_estimate&quot;,&quot;label&quot;:&quot;Ivaturi_2017_pooled_sad_mad_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Ivaturi2017_pooled_sad_mad_estimate.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Ivaturi2017_reference&quot;,&quot;label&quot;:&quot;Ivaturi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Ivaturi2017_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Ivaturi_2017_PANSS&quot;,&quot;label&quot;:&quot;Ivaturi_2017 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/pd_Ivaturi_2017_PANSS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risperidone — `Risperidone_Ivaturi2017_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> F use library defaults, not estimates from this paper; the covariate scenarios were not simulated (+4 more).

<div class="pk-model-meta" hidden drug="risperidone" model-id="Risperidone_Ivaturi2017_reference" status="rejected" stale="false" population="subjects with acute schizophrenia" measured-compound="risperidone" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ivaturi V, Gopalakrishnan M, Gobburu JVS, Zhang W, Liu Y, Heidbreder C et al. Exposure-response analysis after subcutaneous administration of RBP-7000, a once-a-month long-acting Atrigel formulation of risperidone. British journal of clinical pharmacology 83(7):1476–1498 (2017).
  ·  DOI: [10.1111/bcp.13246](https://doi.org/10.1111/bcp.13246)

## Population and dosing

**Population:** subjects with acute schizophrenia · condition schizophrenia · age group adult.

**Dosing:** 90, 120 mg, sc, multiple, every 720 h.

**Dosed compound ≠ measured compound:** dosed RBP-7000, measured risperidone.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_risperidone/Risperidone_Ivaturi2017_reference/Risperidone_Ivaturi2017_reference.svg" alt="Risperidone_Ivaturi2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka 1 | kabs | 0.005 | h -1 |
| k rel | kel | 0.04 | h -1 |
| V | V | 129.0 | l |
| k tr | ktr | 0.023 | h -1 |
| k RRP | kel | 0.84 | h -1 |
| k RPR | kfm | 0.006 | h -1 |
| cyp2d6_intermediate | cyp2d6_intermediate | -0.76 |  |
| cyp2d6_poor | cyp2d6_poor | -0.94 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.353). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**F use library defaults, not estimates from this paper; the covariate scenarios were not simulated (+4 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. The base model was simulated, not the covariate effects the record defines. Extracted — risperidone: kabs 0.005 h -1, kel 0.04 h -1, V 129 l, ktr 0.023 h -1; 9-OH risperidone: kel 0.84 h -1, kfm 0.006 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has RBP-7000, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka 1 | `Q49` · kabs | 0.005 | h -1 | 1.389e-06 | 1/s | 1/h | exact (1) | Ivaturi_2017_table_2:row0:col2 |
| k rel | `Q47` · kel | 0.04 | h -1 | 1.111e-05 | 1/s | 1/h | llm (0.6) | Ivaturi_2017_table_2:row2:col2 |
| V | `Q61` · V | 129.0 | l | 0.129 | m3 | l | exact (1) | Ivaturi_2017_table_2:row3:col2 |
| k tr | `Q306` · ktr | 0.023 | h -1 | 6.389e-06 | 1/s | 1/h | space_fold (0.95) | Ivaturi_2017_table_2:row4:col2 |
| k RRP | `Q47` · kel | 0.84 | h -1 | 0.0002333 | 1/s | 1/h | exact (1) | Ivaturi_2017_table_2:row5:col2 |
| k RPR | `Q305` · kfm | 0.006 | h -1 | 1.667e-06 | 1/s | 1/h | exact (1) | Ivaturi_2017_table_2:row6:col2 |
| cyp2d6_intermediate | `Q900` · cyp2d6_intermediate | -0.76 |  |  |  |  |  | Ivaturi_2017_table_2:row11:col2 |
| cyp2d6_poor | `Q900` · cyp2d6_poor | -0.94 |  |  |  |  |  | Ivaturi_2017_table_2:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q49 ('ka 2', value '0.016') — already have one for this compound
- dropped duplicate Q47 ('kr 9', value '0.22') — already have one for this compound
- dropped duplicate Q47 ('k 9el', value '0.07') — already have one for this compound
- covariate level 'CYP2D6 Intermediate' → Q900:cyp2d6_intermediate = -0.76 (linear_fractional on the model)
- covariate level 'CYP2D6 Poor' → Q900:cyp2d6_poor = -0.94 (linear_fractional on the model)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=risperidone
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- pharmacogenetic covariate 'cyp2d6_intermediate' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'cyp2d6_poor' (cyp2d6) — PGx domain
- base model from table(s) without population columns (Ivaturi_2017_table_2); populations phase-3 estimate, pooled sad & mad estimate kept as separate records
- row roles: 2 per-group rows of 9-OH risperidone covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 23/23 row label(s) assigned, 44 linked by role; re-tagged parent→risperidone ×29, parent→9-OH risperidone ×17
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model
- derived CL=5.16 L/h from Ke × V = CL (Q47 × Q61); not separately reported

**Extraction notes:**
- table Ivaturi_2017_table_2: unparsed_numeric_cell
- table Ivaturi_2017_table_6: missing_label
- companion parameter table 6 transcribed (39 record(s))
- LLM selected parameter table(s) 2, 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.353 (6/17 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['risperidone', '9-oh risperidone', 'metabolism']] | [['risperidone', '9-oh-risperidone', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cyp2d6_intermediate]` |  | -0.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_intermediate]` | -0.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_poor]` |  | -0.94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_poor]` | -0.94 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 9el]` |  | 0.07 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k rpr]` | 0.006 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k rpr]` |  | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k rrp]` | 0.84 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k rrp]` |  | 0.84 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | RBP-7000 | unknown | mismatch |

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
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Ivaturi_2017_table_2:row6:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['Ivaturi_2017_table_2:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Ivaturi_2017_table_2:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Ivaturi_2017_table_2:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ivaturi_2017_table_2:row0:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ivaturi_2017_table_2:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 129 L | ['Ivaturi_2017_table_2:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | fail | Metabolite_C (measured=risperidone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion |  | pass | kr 9 (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_shared_parameters |  | pass | 4 shared param(s) bound once | bound once |  | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.353 (6 of 17 compared fields agree, 9 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.353 | cross-check contradicted by a second reader: verdict disputed; agreement 0.353 (6 of 17 compared fields agree, 9 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 90 mg, single dose, first-order absorption (ka 0.005 /h, F 0.9). Doses in the paper: 90, 120 mg.

<dbs-fmusim paramsurl="drugs/drug_risperidone/Risperidone_Ivaturi2017_reference/Risperidone_Ivaturi2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_risperidone/Risperidone_Ivaturi2017_reference/Risperidone_Ivaturi2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Risperidone_Ivaturi2017_reference_params.json` · controls `Risperidone_Ivaturi2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Ivaturi2017_reference&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Ivaturi2017_reference%0APaper%3A%20Ivaturi_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_risperidone/Risperidone_Ivaturi2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:40 UTC</sub>
