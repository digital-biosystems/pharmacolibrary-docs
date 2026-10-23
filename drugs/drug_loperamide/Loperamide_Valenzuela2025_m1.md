<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;loperamide&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/&quot;},{&quot;label&quot;:&quot;Valenzuela_2025 \u00b7 m1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# loperamide — `Loperamide_Valenzuela2025_m1`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The loperamide parent–metabolite model was rejected because the structure was built as a one-compartment absorption model instead of the required three-compartment parent–metabolite structure, the model output was the parent's central compartment rather than the measured metabolite, V2/F (805 L) was not carried over, and the apparent-parameter assumption (F=1, Fm=1, no molar correction) was judged not acceptable.

<div class="pk-model-meta" hidden drug="loperamide" model-id="Loperamide_Valenzuela2025_m1" status="rejected" stale="false" population="healthy adults" measured-compound="loperamide" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Valenzuela B, Gisleskog PO, Cirillo I, Coenen E, Ariyawansa J, Ali SR et al. Evaluation of the Effect of Loperamide on the Cardiac Repolarization Interval Using Exposure-Response Analysis. Clinical and translational science 18(2):e70114 (2025).
  ·  DOI: [10.1111/cts.70114](https://doi.org/10.1111/cts.70114)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 53.

**Dosing:** 8, 48 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1.svg" alt="Loperamide_Valenzuela2025_m1 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 52.4 | L/h |
| Vc/F (L) | V1/F | 1650 | L |
| Vp/F (L) | V2/F | 805 | L |
| Q/F (L/h) | Q/F | 96.4 | L/h |
| F 8 mg | Frel | 1.00 |  |
| k a 8 mg (h−1) | kabs | 0.258 | h−1 |
| Alag 8 mg (h) | tlag | 0.162 | h |
| D1 (h) | D1 | 0.714 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The loperamide parent–metabolite model was rejected because the structure was built as a one-compartment absorption model instead of the required three-compartment parent–metabolite structure, the model output was the parent's central compartment rather than the measured metabolite, V2/F (805 L) was not carried over, and the apparent-parameter assumption (F=1, Fm=1, no molar correction) was judged not acceptable.**

The record declares a parent–metabolite structure with loperamide metabolized to N-desmethyl loperamide, but the realized structure was a single-compartment model with enteral input rather than the required three-compartment parent–metabolite structure, and the model output was the parent's central compartment instead of the measured metabolite compartment. Parameter coverage failed: 5 of 6 expected parameters were emitted or defaulted, with V2/F (805 L) neither emitted nor defaulted, and the builder substituted a default for the absorption lag time (tlag, 0.162 h). The apparent-parameterization assumption (F=1, Fm=1, no molar correction) was judged not acceptable, and a second reader disagreed on the primary analyte (loperamide vs. M1) and on the metabolite name in the metabolism link. Extracted — loperamide: CL/F 52.4 L/h, V1/F 1.65e+03 L, V2/F 805 L, Q/F 96.4 L/h, Frel 1, kabs 0.258 h−1, tlag 0.162 h, D1 0.714 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has loperamide, the second reading M1; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 52.4 | L/h | 1.456e-05 | m3/s | l/h | exact (1) | Valenzuela_2025_table_1:row1:col5 |
| Vc/F (L) | `Q290` · V1/F | 1650 | L | 1.65 | m3 | l | exact (1) | Valenzuela_2025_table_1:row2:col5 |
| Vp/F (L) | `Q82` · V2/F | 805 | L | 0.805 | m3 | l | exact (1) | Valenzuela_2025_table_1:row3:col5 |
| Q/F (L/h) | `Q69` · Q/F | 96.4 | L/h | 2.678e-05 | m3/s | l/h | exact (1) | Valenzuela_2025_table_1:row4:col5 |
| F 8 mg | `Q87` · Frel | 1.00 |  |  |  |  | llm (0.6) | Valenzuela_2025_table_1:row5:col5 |
| k a 8 mg (h−1) | `Q49` · kabs | 0.258 | h−1 | 7.167e-05 | 1/s | 1/h | llm (0.6) | Valenzuela_2025_table_1:row7:col5 |
| Alag 8 mg (h) | `Q83` · tlag | 0.162 | h | 583.2 | s | h | llm_confirmed (0.6) | Valenzuela_2025_table_1:row9:col5 |
| D1 (h) | `Q310` · D1 | 0.714 | h | 2570 | s | h | exact (1) | Valenzuela_2025_table_1:row11:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q87 ('F 48 mg', value '1.10') — already have one for this compound
- dropped duplicate Q49 ('k a 48 mg (h−1)', value '0.991') — already have one for this compound
- dropped duplicate Q83 ('Alag 48 mg (h)', value '0.376') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=loperamide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'm1' subgroup of Valenzuela_2025 (paper reports 2 populations: loperamide, m1)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell cts70114-tbl-0002:row9:col2 = '0.00001 (−)'
- unparsed cell Valenzuela_2025_table_1:row1:col2 = '(5.3)'
- unparsed cell Valenzuela_2025_table_1:row1:col6 = '(5.12)'
- unparsed cell Valenzuela_2025_table_1:row2:col2 = '(6.8)'
- unparsed cell Valenzuela_2025_table_1:row2:col3 = '19.6%'
- unparsed cell Valenzuela_2025_table_1:row2:col4 = '(16.2)'
- unparsed cell Valenzuela_2025_table_1:row2:col6 = '(5.98)'
- unparsed cell Valenzuela_2025_table_1:row2:col7 = '32.3%'
- unparsed cell Valenzuela_2025_table_1:row2:col8 = '(13.3)'
- unparsed cell Valenzuela_2025_table_1:row3:col2 = '(6.2)'
- unparsed cell Valenzuela_2025_table_1:row3:col6 = '(11.2)'
- unparsed cell Valenzuela_2025_table_1:row4:col2 = '(10.9)'
- unparsed cell Valenzuela_2025_table_1:row4:col6 = '(14.7)'
- unparsed cell Valenzuela_2025_table_1:row5:col3 = '43.5%'
- unparsed cell Valenzuela_2025_table_1:row5:col4 = '(7.51)'
- unparsed cell Valenzuela_2025_table_1:row5:col7 = '20.8%'
- unparsed cell Valenzuela_2025_table_1:row5:col8 = '(11.8)'
- unparsed cell Valenzuela_2025_table_1:row6:col2 = '(3.26)'
- unparsed cell Valenzuela_2025_table_1:row6:col6 = '(3.13)'
- unparsed cell Valenzuela_2025_table_1:row7:col2 = '(10.2)'
- unparsed cell Valenzuela_2025_table_1:row7:col3 = '98.6%'
- unparsed cell Valenzuela_2025_table_1:row7:col4 = '(10.9)'
- unparsed cell Valenzuela_2025_table_1:row7:col6 = '(7.98)'
- unparsed cell Valenzuela_2025_table_1:row7:col7 = '40.6%'
- unparsed cell Valenzuela_2025_table_1:row7:col8 = '(11.7)'
- unparsed cell Valenzuela_2025_table_1:row8:col2 = '(12.1)'
- unparsed cell Valenzuela_2025_table_1:row8:col6 = '(12.9)'
- unparsed cell Valenzuela_2025_table_1:row9:col2 = '(14.7)'
- unparsed cell Valenzuela_2025_table_1:row9:col3 = '76.2% a'
- unparsed cell Valenzuela_2025_table_1:row9:col4 = '(9.91)'
- unparsed cell Valenzuela_2025_table_1:row9:col6 = '(12.0)'
- unparsed cell Valenzuela_2025_table_1:row9:col7 = '59.3% a'
- unparsed cell Valenzuela_2025_table_1:row9:col8 = '(9.10)'
- unparsed cell Valenzuela_2025_table_1:row10:col2 = '(10.2)'
- unparsed cell Valenzuela_2025_table_1:row10:col6 = '(6.86)'
- unparsed cell Valenzuela_2025_table_1:row11:col2 = '(4.34)'
- unparsed cell Valenzuela_2025_table_1:row11:col3 = '72.9% a'
- unparsed cell Valenzuela_2025_table_1:row11:col4 = '(9.51)'
- unparsed cell Valenzuela_2025_table_1:row11:col6 = '(10.7)'
- unparsed cell Valenzuela_2025_table_1:row11:col7 = '97.1% a'
- unparsed cell Valenzuela_2025_table_1:row11:col8 = '(9.33)'
- unparsed cell Valenzuela_2025_table_1:row12:col2 = '(5.8)'
- unparsed cell Valenzuela_2025_table_1:row12:col6 = '(4.29)'
- companion parameter table 1 transcribed (24 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['loperamide', 'n-desmethyl loperamide', 'metabolism']] | [['loperamide', 'm1', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | loperamide | M1 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Valenzuela_2025_table_1:row1:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Valenzuela_2025_table_1:row2:col5'] |
| C5_dimension_Q310 | pass | [time] |  | ['Valenzuela_2025_table_1:row11:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Valenzuela_2025_table_1:row7:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Valenzuela_2025_table_1:row4:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Valenzuela_2025_table_1:row3:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['Valenzuela_2025_table_1:row9:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 52.4 L/h | ['Valenzuela_2025_table_1:row1:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.65e+03 L | ['Valenzuela_2025_table_1:row2:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 805 L | ['Valenzuela_2025_table_1:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=loperamide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | -0.53 | 3.613e-06 | unresolved concentration unit (exp 'msec', sim 'kg/m3') |
| T1_cmax | reference | skipped | 6.06 | 3.613e-06 | unresolved concentration unit (exp 'msec', sim 'kg/m3') |
| T1_cmax | reference | skipped | -0.76 | 3.613e-06 | unresolved concentration unit (exp 'msec', sim 'kg/m3') |
| T1_cmax | reference | skipped | 5.46 | 3.613e-06 | unresolved concentration unit (exp 'msec', sim 'kg/m3') |
| T1_tmax | reference | skipped |  | 9.379 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 8 mg, single dose, first-order absorption (ka 0.258 /h, F 1). Doses in the paper: 8, 48 mg.

<dbs-fmusim paramsurl="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Loperamide_Valenzuela2025_m1_params.json` · controls `Loperamide_Valenzuela2025_m1_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bloperamide%5D%20Loperamide_Valenzuela2025_m1&body=Drug%3A%20loperamide%0ARecord%3A%20Loperamide_Valenzuela2025_m1%0APaper%3A%20Valenzuela_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_loperamide/Loperamide_Valenzuela2025_m1%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 19:01 UTC</sub>
