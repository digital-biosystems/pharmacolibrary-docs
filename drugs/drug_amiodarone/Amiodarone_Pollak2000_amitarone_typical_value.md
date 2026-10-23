<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;amiodarone&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/&quot;},{&quot;label&quot;:&quot;Pollak_2000 \u00b7 amitarone_typical_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amiodarone_Lesko1989_reference&quot;,&quot;label&quot;:&quot;Lesko_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Lesko1989_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Gaete1995_reference&quot;,&quot;label&quot;:&quot;Gaete_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Gaete1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Hirai2022_reference&quot;,&quot;label&quot;:&quot;Hirai_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Hirai2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Kolowrat2025_reference&quot;,&quot;label&quot;:&quot;Kolowrat_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Kolowrat2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Morath2025_reference&quot;,&quot;label&quot;:&quot;Morath_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Morath2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_amitarone_typical_value&quot;,&quot;label&quot;:&quot;Pollak_2000_amitarone_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Pollak2000_amitarone_typical_value.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_desethylamiodarone_typical_value&quot;,&quot;label&quot;:&quot;Pollak_2000_desethylamiodarone_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Pollak2000_desethylamiodarone_typical_value.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amiodarone — `Amiodarone_Pollak2000_amitarone_typical_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the output compartment was the parent instead of the measured amiodarone, and the structure did not match the parent-metabolite topology.

<div class="pk-model-meta" hidden drug="amiodarone" model-id="Amiodarone_Pollak2000_amitarone_typical_value" status="rejected" stale="false" population="patients with cardiac arrhythmias" measured-compound="amiodarone" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Pollak PT, Bouillon T, Shafer SL. Population pharmacokinetics of long-term oral amiodarone therapy. Clinical pharmacology and therapeutics 67(6):642–652 (2000).
  ·  DOI: [10.1067/mcp.2000.107047](https://doi.org/10.1067/mcp.2000.107047)

## Population and dosing

**Population:** patients with cardiac arrhythmias · condition cardiac arrhythmias · age group adult · n = 77.

**Dosing:** 100, 600 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amiodarone/Amiodarone_Pollak2000_amitarone_typical_value/Amiodarone_Pollak2000_amitarone_typical_value.svg" alt="Amiodarone_Pollak2000_amitarone_typical_value diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| V₁/F | V1/F | 882 | L | 32.4 |
| CL₁/F | CL/F | 229 | L/d | 3.8 |
| CL₂/F | Q/F | 588 | L/d | 13.9 |
| Elimination | kel | 55 | 1/d |  |
| K a (h−1) | kabs | 0.82 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the output compartment was the parent instead of the measured amiodarone, and the structure did not match the parent-metabolite topology.**

The output variable was set to the central compartment, but the measured compound is amiodarone, which is the metabolite. The model structure was identified as a one-compartment absorption model, which does not match the parent-metabolite structure defined by the parameter set. Additionally, the model builder defaulted the absorption lag time and assumed bioavailability and metabolite formation to be 1, which were deemed unacceptable deviations. Extracted — amiodarone: V1/F 882 L, CL/F 229 L/d, Q/F 588 L/d, kel 55 1/d, kabs 0.82 h−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of cl 1 /f: this record has 229, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| V₁/F | `Q290` · V1/F | 882 | L | 0.882 | m3 | l | 32.4 | exact (1) | Pollak_2000_table_2:row1:col1 |
| CL₁/F | `Q27` · CL/F | 229 | L/d | 2.65e-06 | m3/s | l/d | 3.8 | llm_corrected (0.6) | Pollak_2000_table_2:row4:col1 |
| CL₂/F | `Q69` · Q/F | 588 | L/d | 6.806e-06 | m3/s | l/d | 13.9 | special_case (0.95) | Pollak_2000_table_2:row5:col1 |
| Elimination | `Q47` · kel | 55 | 1/d | 0.0006366 | 1/s | 1/h |  | llm_confirmed (0.6) | Pollak_2000_table_2:row8:col1 |
| K a (h−1) | `Q49` · kabs | 0.82 | h−1 | 0.0002278 | 1/s | 1/h |  | review_gapfill (0.7) | Kolowrat_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Rapid' — extend the ontology if this is a real PK parameter (source ['Pollak_2000_table_2:row7:col1'])
- implicit units: 'Elimination' → 1/d (from the paper text: 'The text states: "A practical dosing regimen... target concentration of 1.5 mg/L... terminal half-life was 55 days." Alt')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amiodarone
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- population split: 'amitarone typical value' subgroup of Pollak_2000 (paper reports 2 populations: amitarone typical value, desethylamiodarone typical value)
- row roles (LLM): model_class=compartmental; 6/6 row label(s) assigned, 9 linked by role; re-tagged amiodarone→parent ×5
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kolowrat_2025's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Pollak_2000_table_2: ambiguous_numeric_format
- table Pollak_2000_table_2: unbound_uncertainty

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.6:27b-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl 1 /f]` | 229 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl 2 /f]` | 588 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl1/f]` |  | 229 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` |  | 882 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` |  | 7830 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Pollak_2000_table_2:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Pollak_2000_table_2:row1:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Pollak_2000_table_2:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kolowrat_2025:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Pollak_2000_table_2:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.54 L/h | ['Pollak_2000_table_2:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 882 L | ['Pollak_2000_table_2:row1:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=amiodarone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | deviation_id=defaulted_parameters: not acceptable; deviation_id=apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.82 /h, F 1). Doses in the paper: 100–600 mg.

<dbs-fmusim paramsurl="drugs/drug_amiodarone/Amiodarone_Pollak2000_amitarone_typical_value/Amiodarone_Pollak2000_amitarone_typical_value_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_amiodarone/Amiodarone_Pollak2000_amitarone_typical_value/Amiodarone_Pollak2000_amitarone_typical_value_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Amiodarone_Pollak2000_amitarone_typical_value_params.json` · controls `Amiodarone_Pollak2000_amitarone_typical_value_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamiodarone%5D%20Amiodarone_Pollak2000_amitarone_typical_value&body=Drug%3A%20amiodarone%0ARecord%3A%20Amiodarone_Pollak2000_amitarone_typical_value%0APaper%3A%20Pollak_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amiodarone/Amiodarone_Pollak2000_amitarone_typical_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 10:37 UTC</sub>
