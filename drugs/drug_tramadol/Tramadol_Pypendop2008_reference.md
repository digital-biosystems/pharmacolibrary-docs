<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Pypendop_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Pypendop2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span>

> The record was rejected because abstract-only statistics were used for an intravenous model with an incorrect one-compartment structure and missing bioavailability.

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_Pypendop2008_reference" status="rejected" stale="false" population="cats" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Pypendop BH, Ilkiw JE. Pharmacokinetics of tramadol, and its metabolite O-desmethyl-tramadol, in cats. Journal of veterinary pharmacology and therapeutics 31(1):52–59 (2008).
  ·  DOI: [10.1111/j.1365-2885.2007.00921.x](https://doi.org/10.1111/j.1365-2885.2007.00921.x)

## Population and dosing

**Population:** cats · condition healthy · age group adult · n = &gt;=6.

> **Species: cat.** This record comes from an animal study (cat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tramadol/Tramadol_Pypendop2008_reference/Tramadol_Pypendop2008_reference.svg" alt="Tramadol_Pypendop2008_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| the apparent volume of distribution of the central compartment | V1/F | 1553 | mL/kg |
| the apparent volume of distribution at steady-state | Vss | 3103 | mL/kg |
| the clearance | CL | 20.8 | mL/min/kg |
| the terminal half-life | t1/2z | 134 | min |
| Systemic availability | Fab | 93 | % |
| terminal half-lives of O-desmethyl-tramadol after i.v. | t1/2z | 261 | min |
| The rate of formation of O-desmethyl-tramadol estimated from a model including both tramadol and O-desmethyl-tramadol after i.v. | kfm | 0.014 | /min |
| kₐ | kabs | 0.65 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because abstract-only statistics were used for an intravenous model with an incorrect one-compartment structure and missing bioavailability.**

Although the paper described a parent-metabolite study, the model was built as a one-compartment oral absorption structure. The metabolic formation rate constant was assigned to O-desmethyl-tramadol, yet no values were extracted for the absorption lag time. Additionally, the record contains contradictory parameter values where some appear as null while others hold numeric entries. Extracted — tramadol: V1/F 1.55e+03 mL/kg, Vss 3.1e+03 mL/kg, CL 20.8 mL/min/kg, t1/2z 134 min, Fab 93 %, kabs 0.65 1/h; O-desmethyl-tramadol: t1/2z 261 min, kfm 0.014 /min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of apparent volume of distribution at steady-state: this record has none, the second reading 3103; it also differs on 11 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| the apparent volume of distribution of the central compartment | `Q290` · V1/F | 1553 | mL/kg | 0.1087 | m3 | ml/kg | boundary_compartment (0.9) | Pypendop_2008:abstract |
| the apparent volume of distribution at steady-state | `Q65` · Vss | 3103 | mL/kg | 0.2172 | m3 | ml/kg | llm_corrected (0.6) | Pypendop_2008:abstract |
| the clearance | `Q22` · CL | 20.8 | mL/min/kg | 2.427e-05 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Pypendop_2008:abstract |
| the terminal half-life | `Q57` · t1/2z | 134 | min | 8040 | s | min | llm (0.6) | Pypendop_2008:abstract |
| Systemic availability | `Q40` · Fab | 93 | % |  |  |  | exact (1) | Pypendop_2008:abstract |
| terminal half-lives of O-desmethyl-tramadol after i.v. | `Q57` · t1/2z | 261 | min | 1.566e+04 | s | min | llm (0.6) | Pypendop_2008:abstract, Pypendop_2008:abstract |
| The rate of formation of O-desmethyl-tramadol estimated from a model including both tramadol and O-desmethyl-tramadol after i.v. | `Q305` · kfm | 0.014 | /min | 0.0002333 | 1/s | 1/min | exact (1) | Pypendop_2008:abstract, Pypendop_2008:abstract |
| kₐ | `Q49` · kabs | 0.65 | 1/h | 0.0001806 | 1/s | 1/h | review_gapfill (0.7) | Ekstrand_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q57 ('terminal half-life after oral administration', value 204) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 4 linked by role; re-tagged tramadol→parent ×6, tramadol→O-desmethyl-tramadol ×4
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ekstrand_2026's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Pypendop_2008_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.333 (6/18 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent volume of distribution at steady-state]` |  | 3103 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution of the central compartment]` |  | 1553 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 20.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate of formation of o-desmethyl-tramadol]` |  | 0.014 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` |  | 134 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-lives of o-desmethyl-tramadol after i.v.]` | 261 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the apparent volume of distribution at steady-state]` | 3103 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the apparent volume of distribution of the central compartment]` | 1553 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the clearance]` | 20.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the rate of formation of o-desmethyl-tramadol estimated from a model including both tramadol and o-desmethyl-tramadol after i.v.]` | 0.014 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the terminal half-life]` | 134 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Pypendop_2008:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Pypendop_2008:abstract'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Pypendop_2008:abstract', 'Pypendop_2008:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ekstrand_2026:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Pypendop_2008:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Pypendop_2008:abstract', 'Pypendop_2008:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Pypendop_2008:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 87.4 L/h | ['Pypendop_2008:abstract'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 109 L | ['Pypendop_2008:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 217 L | ['Pypendop_2008:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=tramadol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_shared_parameters | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.65 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 300 mg oral (N02AX02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_tramadol/Tramadol_Pypendop2008_reference/Tramadol_Pypendop2008_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tramadol/Tramadol_Pypendop2008_reference/Tramadol_Pypendop2008_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tramadol_Pypendop2008_reference_params.json` · controls `Tramadol_Pypendop2008_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Pypendop2008_reference&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Pypendop2008_reference%0APaper%3A%20Pypendop_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tramadol/Tramadol_Pypendop2008_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:13 UTC</sub>
