<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;aripiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/&quot;},{&quot;label&quot;:&quot;Hermans_2023 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aripiprazole_Kim2008_final&quot;,&quot;label&quot;:&quot;Kim_2008_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Kim2008_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Simon2015_reference&quot;,&quot;label&quot;:&quot;Simon_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_base&quot;,&quot;label&quot;:&quot;Hermans_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_final&quot;,&quot;label&quot;:&quot;Hermans_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aripiprazole — `Aripiprazole_Hermans2023_base`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> T3_output_variable; t3_topology_template (+1 more).

<div class="pk-model-meta" hidden drug="aripiprazole" model-id="Aripiprazole_Hermans2023_base" status="rejected" stale="false" population="children and adolescents with autism spectrum disorder" measured-compound="aripiprazole" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Hermans RA, Sassen SDT, Kloosterboer SM, Reichart CG, Kouijzer MEJ, de Kroon MMJ et al. Towards precision dosing of aripiprazole in children and adolescents with autism spectrum disorder: Linking blood levels to weight gain and effectiveness. British journal of clinical pharmacology 89(10):3026–3036 (2023).
  ·  DOI: [10.1111/bcp.15800](https://doi.org/10.1111/bcp.15800)

## Population and dosing

**Population:** children and adolescents with autism spectrum disorder · age group mixed.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base/Aripiprazole_Hermans2023_base.svg" alt="Aripiprazole_Hermans2023_base diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka a h-1 | kabs | 2.28 | 1/h |
| V/F b L/70 kg | V1/F | 23.4 | L |
| CL/F b L/h/70 kg | CL/F | 12.1 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T3_output_variable; t3_topology_template (+1 more).**

Extracted — aripiprazole: kabs 2.28 1/h, V1/F 23.4 L, CL/F 12.1 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has aripiprazole → dehydro-aripiprazole (metabolism), the second reading none; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka a h-1 | `Q49` · kabs | 2.28 | 1/h | 0.0006333 | 1/s | 1/h | exact (1) | Hermans_2023_table_2:row1:col1 |
| V/F b L/70 kg | `Q290` · V1/F | 23.4 | L | 0.0234 | m3 | L | exact (1) | Hermans_2023_table_2:row2:col1, Hermans_2023_table_2:row9:col1 |
| CL/F b L/h/70 kg | `Q27` · CL/F | 12.1 | L/h | 3.361e-06 | m3/s | L/h | exact (1) | Hermans_2023_table_2:row4:col1, Hermans_2023_table_2:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['Hermans_2023_table_2:row13:col1'])
- dropped unlinked row (NIL): 'DBS' — extend the ontology if this is a real PK parameter (source ['Hermans_2023_table_2:row14:col1'])
- implicit units: 'Ka a h-1' → 1/h (from the paper text: "Table 2 lists the unit for parameter 'Ka' as 'h À1' (representing h^-1), and the text mentions 'first-order absorption r")
- implicit units: 'V/F b L/70 kg' → L (from the paper text: "Table 2 lists the unit for 'V/F' as 'L/70 kg' and the text states 'allometric scaling to a bodyweight of 70 kg was imple")
- implicit units: 'CL/F b L/h/70 kg' → L/h (from the paper text: "Table 2 lists the unit for 'CL/F' as 'L/h/70 kg' and the text states 'allometric scaling to a bodyweight of 70 kg was im")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=aripiprazole
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- model-stage split: 'base model estimate (se)' is the base model of Hermans_2023 (paper reports 2 stages: base model estimate (se), final estimate (se)); same population, different model-building step
- row roles (LLM): model_class=compartmental; 8/8 row label(s) assigned, 10 linked by role
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['aripiprazole', 'dehydro-aripiprazole', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[v/f b l/70 kg].parameter_id` | Q290 | Q76 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Hermans_2023_table_2:row4:col1', 'Hermans_2023_table_2:row10:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Hermans_2023_table_2:row2:col1', 'Hermans_2023_table_2:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hermans_2023_table_2:row1:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.1 L/h | ['Hermans_2023_table_2:row4:col1', 'Hermans_2023_table_2:row10:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 23.4 L | ['Hermans_2023_table_2:row2:col1', 'Hermans_2023_table_2:row9:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=aripiprazole) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.75 (6 of 8 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.75 | cross-check contradicted by a second reader: verdict disputed; agreement 0.75 (6 of 8 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 15 mg, single dose, first-order absorption (ka 2.28 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 15 mg oral (N05AX12) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base/Aripiprazole_Hermans2023_base_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base/Aripiprazole_Hermans2023_base_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Aripiprazole_Hermans2023_base_params.json` · controls `Aripiprazole_Hermans2023_base_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baripiprazole%5D%20Aripiprazole_Hermans2023_base&body=Drug%3A%20aripiprazole%0ARecord%3A%20Aripiprazole_Hermans2023_base%0APaper%3A%20Hermans_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:17 UTC</sub>
