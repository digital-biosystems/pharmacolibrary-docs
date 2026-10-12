<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;loperamide&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/&quot;},{&quot;label&quot;:&quot;Valenzuela_2025 \u00b7 m1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# loperamide — `Loperamide_Valenzuela2025_m1`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The loperamide parent–metabolite model was rejected because the structure was built as a one-compartment absorption model instead of the required three-compartment parent–metabolite structure, the model output was the parent's central compartment rather than the measured metabolite, V2/F (805 L) was not carried over, and the apparent-parameter assumption (F=1, Fm=1, no molar correction) was judged not acceptable.**

The record declares a parent–metabolite structure with loperamide metabolized to N-desmethyl loperamide, but the realized structure was a single-compartment model with enteral input rather than the required three-compartment parent–metabolite structure, and the model output was the parent's central compartment instead of the measured metabolite compartment. Parameter coverage failed: 5 of 6 expected parameters were emitted or defaulted, with V2/F (805 L) neither emitted nor defaulted, and the builder substituted a default for the absorption lag time (tlag, 0.162 h). The apparent-parameterization assumption (F=1, Fm=1, no molar correction) was judged not acceptable, and a second reader disagreed on the primary analyte (loperamide vs. M1) and on the metabolite name in the metabolism link. Extracted — loperamide: CL/F 52.4 L/h, V1/F 1.65e+03 L, V2/F 805 L, Q/F 96.4 L/h, Frel 1, kabs 0.258 h−1, tlag 0.162 h, D1 0.714 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has loperamide, the second reading M1; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Valenzuela B et al., Evaluation of the Effect of Loperamide…, Clinical and translational… (2025)
  ·  DOI: [10.1111/cts.70114](https://doi.org/10.1111/cts.70114)

<div class="pk-model-meta" hidden drug="loperamide" model-id="Loperamide_Valenzuela2025_m1" status="rejected" stale="false" population="healthy adults" measured-compound="loperamide" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 52.4 | L/h | 1.4555555555555556e-05 | [l] / [h] | not captured | exact (1.0) | Valenzuela_2025_table_1:row1:col5 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 1650 | L | 1.6500000000000001 | [l] | not captured | exact (1.0) | Valenzuela_2025_table_1:row2:col5 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 805 | L | 0.805 | [l] | not captured | exact (1.0) | Valenzuela_2025_table_1:row3:col5 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 96.4 | L/h | 2.6777777777777782e-05 | [l] / [h] | not captured | exact (1.0) | Valenzuela_2025_table_1:row4:col5 | — | not captured |
| F 8 mg | `Q87` · Frel | 1.00 | not captured | not captured | not captured | not captured | llm (0.6) | Valenzuela_2025_table_1:row5:col5 | — | not captured |
| k a 8 mg (h−1) | `Q49` · kabs | 0.258 | h−1 | 7.166666666666667e-05 | [1] / [h] | not captured | llm (0.6) | Valenzuela_2025_table_1:row7:col5 | — | not captured |
| Alag 8 mg (h) | `Q83` · tlag | 0.162 | h | 583.2 | [h] | not captured | llm_confirmed (0.6) | Valenzuela_2025_table_1:row9:col5 | — | not captured |
| D1 (h) | `Q310` · D1 | 0.714 | h | 2570.4 | [h] | not captured | exact (1.0) | Valenzuela_2025_table_1:row11:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row1:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row2:col5'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row11:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row7:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row4:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row3:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row9:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 52.4 L/h | not captured | not captured | ['Valenzuela_2025_table_1:row1:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.65e+03 L | not captured | not captured | ['Valenzuela_2025_table_1:row2:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 805 L | not captured | not captured | ['Valenzuela_2025_table_1:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=loperamide) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 5 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | apparent_assumption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | -0.53 | 3.613369941422713e-06 | not captured | unresolved concentration unit (exp 'msec', sim 'kg/m3') |
| T1_cmax | reference | skipped | 6.06 | 3.613369941422713e-06 | not captured | unresolved concentration unit (exp 'msec', sim 'kg/m3') |
| T1_cmax | reference | skipped | -0.76 | 3.613369941422713e-06 | not captured | unresolved concentration unit (exp 'msec', sim 'kg/m3') |
| T1_cmax | reference | skipped | 5.46 | 3.613369941422713e-06 | not captured | unresolved concentration unit (exp 'msec', sim 'kg/m3') |
| T1_tmax | reference | skipped | not captured | 9.37875751503006 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_loperamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Valenzuela_2025` / `Valenzuela_2025::m1`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_loperamide/models/modelica/Loperamide_Valenzuela2025_m1.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_loperamide/models/modelica/Loperamide_Valenzuela2025_m1.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_loperamide/models/modelica/Loperamide_Valenzuela2025_m1.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 8 mg, single dose, first-order absorption (ka 0.258 /h, F 1). Doses in the paper: 8, 48 mg.

<dbs-fmusim paramsurl="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Loperamide_Valenzuela2025_m1_params.json` · controls `Loperamide_Valenzuela2025_m1_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 19:01 UTC</sub>
