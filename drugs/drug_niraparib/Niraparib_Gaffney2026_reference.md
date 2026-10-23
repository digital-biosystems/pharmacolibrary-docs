<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;niraparib&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/&quot;},{&quot;label&quot;:&quot;Gaffney_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niraparib_Gaffney2026_reference&quot;,&quot;label&quot;:&quot;Gaffney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Gaffney2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Niraparib_Quesada2025_reference&quot;,&quot;label&quot;:&quot;Quesada_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Quesada2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# niraparib — `Niraparib_Gaffney2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="niraparib" model-id="Niraparib_Gaffney2026_reference" status="accepted_with_caveats" stale="false" population="patients with advanced solid tumors or ovarian cancer" measured-compound="niraparib" parameterization="apparent" topology="1C"></div>

## Citation
Gaffney A, Franchetti Y, Desrosiers M, Trame MN, Jewell RC. Population Pharmacokinetic Modeling of Niraparib to Assess Different Absorption Models. Journal of clinical pharmacology 66(5):e70210 (2026).
  ·  DOI: [10.1002/jcph.70210](https://doi.org/10.1002/jcph.70210)

## Population and dosing

**Population:** patients with advanced solid tumors or ovarian cancer · condition ovarian cancer · age group adult.

**Dosing:** 300 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 6 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference.svg" alt="Niraparib_Gaffney2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F, L/h | CL/F | 15.9 | L/h | 1.3 |
| Vc/F, L | V1/F | 450 | L | 2.6 |
| Q1/F, L/h | Q/F | 43.8 | L/h | 5.4 |
| MTT, h | MTT | 1.78 | h | 2.4 |
| Vp2/F, L | V3/F | 361 | L | 4.8 |
| F1 (−) | Fab | 1 |  |  |
| cl_f_crclbl_exponent | cl_f_crclbl_exponent | 0.287 |  | 8.9 |
| vc_f_albbl_exponent | vc_f_albbl_exponent | 0.363 |  | 28.6 |
| vp1_f_albbl_exponent | vp1_f_albbl_exponent | 1.02 |  | 13.7 |
| theta_cl_f_weight_power | theta_cl_f_weight_power | 0.742 |  | 11.8 |
| theta_q319_weight_power | theta_q319_weight_power | -0.074 |  | 18.4 |
| theta_v1_f_weight_power | theta_v1_f_weight_power | 0.577 |  | 11.7 |
| absorption rate constant (ka) | kabs | 0.85 | /h |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.552). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (MTT), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has niraparib, the second reading invalid key; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 15.9 | L/h | 4.417e-06 | m3/s | l/h | 1.3 | exact (1) | jcph70210-tbl-0003:row1:col1, jcph70210-tbl-0003:row1:col2 |
| Vc/F, L | `Q290` · V1/F | 450 | L | 0.45 | m3 | l | 2.6 | exact (1) | jcph70210-tbl-0003:row2:col1, jcph70210-tbl-0003:row2:col2 |
| Q1/F, L/h | `Q69` · Q/F | 43.8 | L/h | 1.217e-05 | m3/s | l/h | 5.4 | exact (1) | jcph70210-tbl-0003:row3:col1, jcph70210-tbl-0003:row3:col2 |
| MTT, h | `Q81` · MTT | 1.78 | h |  |  | h | 2.4 | exact (1) | jcph70210-tbl-0003:row5:col1, jcph70210-tbl-0003:row5:col2 |
| Vp2/F, L | `Q78` · V3/F | 361 | L | 0.361 | m3 | l | 4.8 | exact (1) | jcph70210-tbl-0003:row7:col1, jcph70210-tbl-0003:row7:col2 |
| F1 (−) | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | jcph70210-tbl-0003:row8:col1 |
| cl_f_crclbl_exponent | `Q900` · cl_f_crclbl_exponent | 0.287 |  |  |  |  | 8.9 |  | jcph70210-tbl-0003:row11:col1, jcph70210-tbl-0003:row11:col2 |
| vc_f_albbl_exponent | `Q900` · vc_f_albbl_exponent | 0.363 |  |  |  |  | 28.6 |  | jcph70210-tbl-0003:row12:col1, jcph70210-tbl-0003:row12:col2 |
| vp1_f_albbl_exponent | `Q900` · vp1_f_albbl_exponent | 1.02 |  |  |  |  | 13.7 |  | jcph70210-tbl-0003:row14:col1, jcph70210-tbl-0003:row14:col2 |
| theta_cl_f_weight_power | `Q900` · theta_cl_f_weight_power | 0.742 |  |  |  |  | 11.8 |  | jcph70210-tbl-0003:row9:col1, jcph70210-tbl-0003:row9:col2 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | -0.074 |  |  |  |  | 18.4 |  | jcph70210-tbl-0003:row10:col1, jcph70210-tbl-0003:row10:col2 |
| theta_v1_f_weight_power | `Q900` · theta_v1_f_weight_power | 0.577 |  |  |  |  | 11.7 |  | jcph70210-tbl-0003:row13:col1, jcph70210-tbl-0003:row13:col2 |
| absorption rate constant (ka) | `Q49` · kabs | 0.85 | /h | 0.0002361 | 1/s | 1/h |  | review_gapfill (0.7) | Quesada_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q290 ('Vp1/F, L', value '395') — already have one for this compound
- dropped duplicate Q69 ('Q2/F, L/h', value '2.19') — already have one for this compound
- covariate level 'CL/F ∼ CrCLBL exponent' → Q900:cl_f_crclbl_exponent = 0.287 (power on Q27)
- covariate level 'Vc/F ∼ ALBBL exponent' → Q900:vc_f_albbl_exponent = 0.363 (power on Q27)
- covariate level 'Vp1/F ∼ ALBBL exponent' → Q900:vp1_f_albbl_exponent = 1.02 (power on Q27)
- dropped unlinked row (NIL): 'F1 ∼ fed fractional change' — extend the ontology if this is a real PK parameter (source ['jcph70210-tbl-0003:row15:col1', 'jcph70210-tbl-0003:row15:col2'])
- dropped duplicate Q81 ('MTT ∼ fed fractional change', value '1.15') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=niraparib
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Quesada_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell jcph70210-tbl-0003:row1:col3 = '15.9 (15.5‐16.3)'
- unparsed cell jcph70210-tbl-0003:row2:col3 = '449 (422‐478)'
- unparsed cell jcph70210-tbl-0003:row3:col3 = '44 (37.9‐51.5)'
- unparsed cell jcph70210-tbl-0003:row4:col3 = '394 (362‐429)'
- unparsed cell jcph70210-tbl-0003:row5:col3 = '1.77 (1.66‐1.88)'
- unparsed cell jcph70210-tbl-0003:row6:col3 = '2.21 (1.79‐2.78)'
- unparsed cell jcph70210-tbl-0003:row7:col3 = '363 (327‐402)'
- unparsed cell jcph70210-tbl-0003:row9:col3 = '0.734 (0.567‐0.923)'
- unparsed cell jcph70210-tbl-0003:row10:col3 = '−0.0756 (−0.118 to −0.0383)'
- unparsed cell jcph70210-tbl-0003:row11:col3 = '0.286 (0.241‐0.337)'
- unparsed cell jcph70210-tbl-0003:row12:col3 = '0.369 (0.11‐0.609)'
- unparsed cell jcph70210-tbl-0003:row13:col3 = '0.58 (0.455‐0.697)'
- unparsed cell jcph70210-tbl-0003:row14:col3 = '1.01 (0.643‐1.37)'
- unparsed cell jcph70210-tbl-0003:row15:col3 = '0.231 (0.156‐0.333)'
- unparsed cell jcph70210-tbl-0003:row16:col3 = '1.2 (0.641‐1.82)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.552 (16/29 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.85 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['power', 'power', 'power', 'power'] | ['power', 'power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[cl_f_crclbl_exponent]` | 0.287 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1 ∼ fed fractional change]` |  | 0.236 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power].rse_percent` | 18.4 | 11.7 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power].value` | -0.074 | 0.577 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q82_weight_power]` |  | 1.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_weight_power].rse_percent` | 11.7 | 28.6 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_f_weight_power].value` | 0.577 | 0.363 | mismatch |
| `gpt-oss-120b` | `parameters[vc_f_albbl_exponent]` | 0.363 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1_f_albbl_exponent]` | 1.02 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | niraparib | invalid key | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | niraparib | invalid key | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q27 | pass | 15.9 | 15.9 | 1 | 0.05 | footnote reference category |
| C2_base_Q290 | fail | 450 | 15.9 | 0.0353 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['jcph70210-tbl-0003:row1:col1', 'jcph70210-tbl-0003:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['jcph70210-tbl-0003:row2:col1', 'jcph70210-tbl-0003:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Quesada_2025:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['jcph70210-tbl-0003:row3:col1', 'jcph70210-tbl-0003:row3:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  |  |  | ['jcph70210-tbl-0003:row7:col1', 'jcph70210-tbl-0003:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.9 L/h |  |  | ['jcph70210-tbl-0003:row1:col1', 'jcph70210-tbl-0003:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 450 L |  |  | ['jcph70210-tbl-0003:row2:col1', 'jcph70210-tbl-0003:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=niraparib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference_modelica.zip" download>Niraparib_Gaffney2026_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference_fmi.zip" download>Niraparib_Gaffney2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference_matlab.zip" download>Niraparib_Gaffney2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference_matlab_simbio.zip" download>Niraparib_Gaffney2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference_sbml.zip" download>Niraparib_Gaffney2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference_cellml.zip" download>Niraparib_Gaffney2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3204 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0003 | kg |
| input | model | `Cl` | 4.417e-06 | m3/s |
| input | model | `VdPerKg` | 0.006429 | m3/kg |
| input | model | `ka` | 0.0002361 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Gaffney A, Franchetti Y, Desrosiers M, Trame MN, Jewell RC. Population Pharmacokinetic Modeling of Niraparib to Assess Different Absorption Models. Journal of clinical pharmacology 66(5):e70210 (2026). [doi:10.1002/jcph.70210](https://doi.org/10.1002/jcph.70210)

**This record:** Pharmacolibrary v26.09, model `Niraparib_Gaffney2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_niraparib/Niraparib_Gaffney2026_reference>

```bibtex
@misc{pharmacolibrary_NiraparibGaffney2026reference,
  title  = {{Pharmacolibrary model Niraparib_Gaffney2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_niraparib/Niraparib_Gaffney2026_reference},
  note   = {Parameters from doi:10.1002/jcph.70210},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.85 /h, F 1). Dose in the paper: 300 mg.

<dbs-fmusim paramsurl="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_niraparib/Niraparib_Gaffney2026_reference/Niraparib_Gaffney2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Niraparib_Gaffney2026_reference_params.json` · controls `Niraparib_Gaffney2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bniraparib%5D%20Niraparib_Gaffney2026_reference&body=Drug%3A%20niraparib%0ARecord%3A%20Niraparib_Gaffney2026_reference%0APaper%3A%20Gaffney_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_niraparib/Niraparib_Gaffney2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:09 UTC</sub>
