<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;defibrotide&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/&quot;},{&quot;label&quot;:&quot;Noseda_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Defibrotide_Noseda1986_reference&quot;,&quot;label&quot;:&quot;Noseda_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/Defibrotide_Noseda1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Defibrotide_Tocchetti2016_reference&quot;,&quot;label&quot;:&quot;Tocchetti_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/Defibrotide_Tocchetti2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# defibrotide — `Defibrotide_Noseda1986_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="defibrotide" model-id="Defibrotide_Noseda1986_reference" status="curated_candidate" stale="false" population="healthy volunteers" measured-compound="defibrotide" parameterization="mechanistic" topology="1C"></div>

## Citation
Noseda G, Fragiacomo C, Ferrari D. Pharmacokinetics of defibrotide in healthy volunteers. Haemostasis 16 Suppl 1:26–30 (1986).
  ·  DOI: [10.1159/000215336](https://doi.org/10.1159/000215336)

## Population and dosing

**Population:** healthy volunteers · age group adult · n = ,
  "condition": "healthy",
  "species": "human",
  "compounds": [
    {"name": "defibrotide", "role": "parent", "dosed": "yes", "measured": "yes", "has_parameters": "yes"}
  ],
  "links": []}  # Note: JSON cannot contain lists of strings separated by pipes as per YAML schema, converting to array of objects or strings as appropriate for JSON schema. The prompt asks for JSON object matching supplied schema. I will format the compounds as a list of strings or objects based on standard JSON interpretation of the requested format. Given the strict instruction "Put each value in its OWN named field", I will use a list of objects for compounds to be safe, or a list of strings if the schema implies simple values. The prompt example shows a YAML list. I will convert to a JSON array of strings to match the 'flat' nature or objects. Let's use objects for clarity or strings if that's how 'flat' is interpreted in JSON. Usually 'flat' JSON means no deep nesting. I will use an array of objects for compounds. Wait, the prompt says "Output ONLY a JSON object matching the supplied schema." It doesn't give the schema, but implies a key-value structure. I will map the keys directly. For compounds and links, I will use arrays..

**Dosing:** 0.5, 4, 16, 200, 600 mg/kg, mg, iv, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_defibrotide/Defibrotide_Noseda1986_reference/Defibrotide_Noseda1986_reference.svg" alt="Defibrotide_Noseda1986_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| β, min-1 | kel | 8.22 | min-1 |
| AUC, mg/l·min | AUC | 173 | mg/l·min |
| V1, ml/kg | V | 38.1 | ml/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (AUC), so that value has no SI equivalent.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| β, min-1 | `Q47` · kel | 8.22 | min-1 | 0.137 | 1/s | 1/min | exact (1) | Noseda_1986_table_4:row1:col1, Noseda_1986_table_4:row1:col2, Noseda_1986_table_4:row1:col3, Noseda_1986_table_4:row1:col4 |
| AUC, mg/l·min | `Q88` · AUC | 173 | mg/l·min |  |  | mg/(min·l) | exact (1) | Noseda_1986_table_4:row2:col1, Noseda_1986_table_4:row2:col2, Noseda_1986_table_4:row2:col3, Noseda_1986_table_4:row2:col4 |
| V1, ml/kg | `Q61` · V | 38.1 | ml/kg | 0.002667 | m3 | ml/kg | exact (1) | Noseda_1986_table_4:row3:col1, Noseda_1986_table_4:row3:col2, Noseda_1986_table_4:row3:col3, Noseda_1986_table_4:row3:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=defibrotide
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1, ml/kg' is the general volume)
- molar mass: none found for 'defibrotide' — its concentrations stay mass-only
- derived CL=1315.36 L/h from Ke × V = CL (Q47 × Q61); not separately reported

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (7/7 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Noseda_1986_table_4:row1:col1', 'Noseda_1986_table_4:row1:col2', 'Noseda_1986_table_4:row1:col3', 'Noseda_1986_table_4:row1:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Noseda_1986_table_4:row3:col1', 'Noseda_1986_table_4:row3:col2', 'Noseda_1986_table_4:row3:col3', 'Noseda_1986_table_4:row3:col4'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Noseda_1986_table_4:row2:col1', 'Noseda_1986_table_4:row2:col2', 'Noseda_1986_table_4:row2:col3', 'Noseda_1986_table_4:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.67 L | ['Noseda_1986_table_4:row3:col1', 'Noseda_1986_table_4:row3:col2', 'Noseda_1986_table_4:row3:col3', 'Noseda_1986_table_4:row3:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_derived_parameters | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable | pass | C_central (measured=defibrotide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1750 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 1750 mg parenteral (B01AX01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_defibrotide/Defibrotide_Noseda1986_reference/Defibrotide_Noseda1986_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_defibrotide/Defibrotide_Noseda1986_reference/Defibrotide_Noseda1986_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Defibrotide_Noseda1986_reference_params.json` · controls `Defibrotide_Noseda1986_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdefibrotide%5D%20Defibrotide_Noseda1986_reference&body=Drug%3A%20defibrotide%0ARecord%3A%20Defibrotide_Noseda1986_reference%0APaper%3A%20Noseda_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_defibrotide/Defibrotide_Noseda1986_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 12:42 UTC</sub>
