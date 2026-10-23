<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;ketamine&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/&quot;},{&quot;label&quot;:&quot;Herd_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ketamine_Boulanger2025_reference&quot;,&quot;label&quot;:&quot;Boulanger_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Boulanger2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketamine_Eaton2026_reference&quot;,&quot;label&quot;:&quot;Eaton_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Eaton2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketamine_Rantanen2026_reference&quot;,&quot;label&quot;:&quot;Rantanen_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Rantanen2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketamine_Sukhram2026_reference&quot;,&quot;label&quot;:&quot;Sukhram_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Sukhram2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketamine_Herd2007_reference&quot;,&quot;label&quot;:&quot;Herd_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Herd2007_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ketamine — `Ketamine_Herd2007_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> Ketamine's central volume of 22 l/70 kg was used to calculate a missing parameter, while bioavailability remained unestimated.

<div class="pk-model-meta" hidden drug="ketamine" model-id="Ketamine_Herd2007_reference" status="rejected" stale="false" population="children and adults" measured-compound="norketamine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Herd DW, Anderson BJ, Holford NH. Modeling the norketamine metabolite in children and the implications for analgesia. Paediatric anaesthesia 17(9):831–840 (2007).
  ·  DOI: [10.1111/j.1460-9592.2007.02257.x](https://doi.org/10.1111/j.1460-9592.2007.02257.x)

## Population and dosing

**Population:** children and adults · condition healthy · age group mixed · n = $schema.

**Dosed compound ≠ measured compound:** dosed ketamine, measured norketamine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ketamine/Ketamine_Herd2007_reference/Ketamine_Herd2007_reference.svg" alt="Ketamine_Herd2007_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| central volume (V1) | V1 | 22 | l.70 kg(-1) |
| peripheral volume of distribution (V2) | V2 | 129 | l.70 kg(-1) |
| clearance other than that metabolized to norketamine (CLother) | CL | 47.8 | l.h(-1).70 kg(-1) |
| intercompartment clearance (Q) | Q | 216 | l.h(-1).70 kg(-1) |
| norketamine formation clearance (CL2M) | CLfm | 12.4 | l.h(-1).70 kg(-1) |
| elimination clearance (CLM) | CL | 13.5 | l.h(-1).70 kg(-1) |
| elimination half-life | t1/2z | 2.1 | h |
| MET absorption rate in rats (ka) | kabs | 0.66 | h−1 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.6). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ketamine's central volume of 22 l/70 kg was used to calculate a missing parameter, while bioavailability remained unestimated.**

The model was built solely from the abstract, using summary statistics instead of fitted values. Bioavailability and lag time were left at library placeholders because they were not extracted. The simulation covered only the base case and did not test the defined covariate effects. Extracted — ketamine: V1 22 l.70 kg(-1), V2 129 l.70 kg(-1), CL 47.8 l.h(-1).70 kg(-1), Q 216 l.h(-1).70 kg(-1); norketamine: CLfm 12.4 l.h(-1).70 kg(-1), CL 13.5 l.h(-1).70 kg(-1), t1/2z 2.1 h, kabs 0.66 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of elimination half-life: this record has none, the second reading 2.1; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| central volume (V1) | `Q63` · V1 | 22 | l.70 kg(-1) | 1.54 | m3 | l/kg | exact (1) | Herd_2007:abstract |
| peripheral volume of distribution (V2) | `Q64` · V2 | 129 | l.70 kg(-1) | 9.03 | m3 | l/kg | exact (1) | Herd_2007:abstract |
| clearance other than that metabolized to norketamine (CLother) | `Q22` · CL | 47.8 | l.h(-1).70 kg(-1) | 0.0009294 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Herd_2007:abstract |
| intercompartment clearance (Q) | `Q30` · Q | 216 | l.h(-1).70 kg(-1) | 0.0042 | m3/s | l/(h·kg) | llm_corrected (0.6) | Herd_2007:abstract |
| norketamine formation clearance (CL2M) | `Q370` · CLfm | 12.4 | l.h(-1).70 kg(-1) | 0.0002411 | m3/s | l/(h·kg) | exact (1) | Herd_2007:abstract |
| elimination clearance (CLM) | `Q22` · CL | 13.5 | l.h(-1).70 kg(-1) | 0.0002625 | m3/s | l/(h·kg) | exact (1) | Herd_2007:abstract |
| elimination half-life | `Q57` · t1/2z | 2.1 | h | 7560 | s | h | llm (0.6) | Herd_2007:abstract, Herd_2007:abstract |
| MET absorption rate in rats (ka) | `Q49` · kabs | 0.66 | h−1 | 0.0001833 | 1/s | 1/h | review_gapfill (0.7) | Kir_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- covariate category for equation variable from footnote/prose kept as documentation only (['Herd_2007:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=norketamine
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 8/8 row label(s) assigned, 6 linked by role; re-tagged norketamine→parent ×4
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q49 (kabs) from Kir_2025's review values (primary lacked it)
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Herd_2007_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[elimination half-life]` |  | 2.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 2.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[i.v. bolus]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartment clearance]` | 216 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[met absorption rate in rats]` | 0.66 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[norketamine half-life]` |  | 1.13 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Herd_2007:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Herd_2007:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Herd_2007:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Herd_2007:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kir_2025:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Herd_2007:abstract', 'Herd_2007:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Herd_2007:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Herd_2007:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 47.8 | ['Herd_2007:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.35e+03 L/h | ['Herd_2007:abstract'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 945 L/h | ['Herd_2007:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.54e+03 L | ['Herd_2007:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.03e+03 L | ['Herd_2007:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | fail | Metabolite_C (measured=norketamine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['V2'] |
| T3_shared_parameters |  | pass | 3 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.66 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_ketamine/Ketamine_Herd2007_reference/Ketamine_Herd2007_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ketamine/Ketamine_Herd2007_reference/Ketamine_Herd2007_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ketamine_Herd2007_reference_params.json` · controls `Ketamine_Herd2007_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bketamine%5D%20Ketamine_Herd2007_reference&body=Drug%3A%20ketamine%0ARecord%3A%20Ketamine_Herd2007_reference%0APaper%3A%20Herd_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ketamine/Ketamine_Herd2007_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:51 UTC</sub>
