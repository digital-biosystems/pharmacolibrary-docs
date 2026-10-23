<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;tofacitinib&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/&quot;},{&quot;label&quot;:&quot;Vong_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tofacitinib_Chang2024_estimate&quot;,&quot;label&quot;:&quot;Chang_2024_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/Tofacitinib_Chang2024_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tofacitinib_Chang2024_tofacitinib_5_mg_oral_solutionp&quot;,&quot;label&quot;:&quot;Chang_2024_tofacitinib_5_mg_oral_solutionp&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/Tofacitinib_Chang2024_tofacitinib_5_mg_oral_solutionp.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tofacitinib_Chang2024_tofacitinib_5_mg_tablet&quot;,&quot;label&quot;:&quot;Chang_2024_tofacitinib_5_mg_tablet&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/Tofacitinib_Chang2024_tofacitinib_5_mg_tablet.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tofacitinib_Xie2019_reference&quot;,&quot;label&quot;:&quot;Xie_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/Tofacitinib_Xie2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tofacitinib_Mohamed2020_reference&quot;,&quot;label&quot;:&quot;Mohamed_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/Tofacitinib_Mohamed2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tofacitinib_Shin2020_reference&quot;,&quot;label&quot;:&quot;Shin_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/Tofacitinib_Shin2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tofacitinib_Tsuchiwata2026_reference&quot;,&quot;label&quot;:&quot;Tsuchiwata_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/Tofacitinib_Tsuchiwata2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tofacitinib_Vong2021_reference&quot;,&quot;label&quot;:&quot;Vong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tofacitinib — `Tofacitinib_Vong2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 3.6e-06, model 4.23e-06).

<div class="pk-model-meta" hidden drug="tofacitinib" model-id="Tofacitinib_Vong2021_reference" status="needs_review" stale="false" population="patients with moderate to severe ulcerative colitis" measured-compound="tofacitinib" parameterization="apparent" topology="1C"></div>

## Citation
Vong C, Martin SW, Deng C, Xie R, Ito K, Su C et al. Population Pharmacokinetics of Tofacitinib in Patients With Moderate to Severe Ulcerative Colitis. Clinical pharmacology in drug development 10(3):229–240 (2021).
  ·  DOI: [10.1002/cpdd.899](https://doi.org/10.1002/cpdd.899)

## Population and dosing

**Population:** patients with moderate to severe ulcerative colitis · condition ulcerative colitis · age group adult · n = &gt;=910.

**Dosing:** 0.5, 5, 10, 15 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference.svg" alt="Tofacitinib_Vong2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F, L/h | CL/F | 26.3 | L/h |
| V/F, L | V/F | 115.8 | L |
| Ka, h−1 | kabs | 191.8 | h−1 |
| Lag time, h | tlag | 0.236 | h |
| Scaling parameter c | allometric_exponent | 0.392 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 3.6e-06, model 4.23e-06).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Extracted — tofacitinib: CL/F 26.3 L/h, V/F 116 L, kabs 192 h−1, tlag 0.236 h, allometric_exponent 0.392.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tofacitinib, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 26.3 | L/h | 7.306e-06 | m3/s | l/h | exact (1) | cpdd899-tbl-0003:row3:col1, cpdd899-tbl-0003:row3:col2, cpdd899-tbl-0003:row3:col4 |
| V/F, L | `Q76` · V/F | 115.8 | L | 0.1158 | m3 | l | exact (1) | cpdd899-tbl-0003:row4:col1 |
| Ka, h−1 | `Q49` · kabs | 191.8 | h−1 | 0.05328 | 1/s | 1/h | exact (1) | cpdd899-tbl-0003:row5:col1, cpdd899-tbl-0003:row5:col3 |
| Lag time, h | `Q83` · tlag | 0.236 | h | 849.6 | s | h | exact (1) | cpdd899-tbl-0003:row8:col1 |
| Scaling parameter c | `Q319` · allometric_exponent | 0.392 |  |  |  |  | llm (0.6) | cpdd899-tbl-0003:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q27 ('CL/F', value '2.16') — already have one for this compound
- dropped duplicate Q76 ('V/F', value '5.03') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tofacitinib
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell cpdd899-tbl-0003:row3:col5 = '25.5‐27.2'
- unparsed cell cpdd899-tbl-0003:row3:col6 = '19.0‐24.5'
- unparsed cell cpdd899-tbl-0003:row4:col4 = '115.5 (NA)'
- unparsed cell cpdd899-tbl-0003:row4:col5 = '111.5‐120.6'
- unparsed cell cpdd899-tbl-0003:row5:col4 = '9.86 (191.9) b'
- unparsed cell cpdd899-tbl-0003:row5:col5 = '7.9‐10.8'
- unparsed cell cpdd899-tbl-0003:row5:col6 = '179.0‐205.0 b'
- unparsed cell cpdd899-tbl-0003:row6:col5 = '38.6‐44.4'
- unparsed cell cpdd899-tbl-0003:row6:col6 = '54.0‐62.2'
- unparsed cell cpdd899-tbl-0003:row7:col5 = '64.1‐73.5'
- unparsed cell cpdd899-tbl-0003:row7:col6 = '54.0‐62.2'
- unparsed cell cpdd899-tbl-0003:row8:col4 = '0.236 (NA)'
- unparsed cell cpdd899-tbl-0003:row8:col5 = '0.218‐0.238'
- unparsed cell cpdd899-tbl-0003:row9:col4 = '0.399 (NA)'
- unparsed cell cpdd899-tbl-0003:row9:col5 = '0.305‐0.481'
- unparsed cell cpdd899-tbl-0003:row12:col6 = '0.279‐0.426'
- unparsed cell cpdd899-tbl-0003:row13:col6 = '0.829‐0.909'
- unparsed cell cpdd899-tbl-0003:row14:col6 = '0.888‐0.972'
- unparsed cell cpdd899-tbl-0003:row15:col6 = '−0.173 to −0.065'
- unparsed cell cpdd899-tbl-0003:row16:col6 = '0.802‐0.887'
- unparsed cell cpdd899-tbl-0003:row17:col6 = '0.501‐0.674'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 26.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 26.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 191.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 9.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.236 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` |  | 0.236 | only_one_extracted |
| `gpt-oss-120b` | `parameters[scaling parameter c]` | 0.392 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[scaling parameter c]` |  | 0.392 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 115.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 115.8 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tofacitinib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tofacitinib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 3.05 | 3.052 | 1.001 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['cpdd899-tbl-0003:row3:col1', 'cpdd899-tbl-0003:row3:col2', 'cpdd899-tbl-0003:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['cpdd899-tbl-0003:row5:col1', 'cpdd899-tbl-0003:row5:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['cpdd899-tbl-0003:row4:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['cpdd899-tbl-0003:row8:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 26.3 L/h |  |  | ['cpdd899-tbl-0003:row3:col1', 'cpdd899-tbl-0003:row3:col2', 'cpdd899-tbl-0003:row3:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 116 L |  |  | ['cpdd899-tbl-0003:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=tofacitinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | pass | 3.6e-06 | 4.227e-06 | 1.174 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 6.7e-06 | 4.227e-06 | 0.631 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_beta | reference | pass | 3.05 | 3.055 | 1.002 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 3.05 | 3.055 | 1.002 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 3.05 | 3.055 | 1.002 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3 | 3.055 | 1.018 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference_modelica.zip" download>Tofacitinib_Vong2021_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference_fmi.zip" download>Tofacitinib_Vong2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference_matlab.zip" download>Tofacitinib_Vong2021_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference_matlab_simbio.zip" download>Tofacitinib_Vong2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference_sbml.zip" download>Tofacitinib_Vong2021_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference_cellml.zip" download>Tofacitinib_Vong2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3124 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 849.6 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-07 | kg |
| input | model | `Cl` | 7.306e-06 | m3/s |
| input | model | `VdPerKg` | 0.001654 | m3/kg |
| input | model | `ka` | 0.05328 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Vong C, Martin SW, Deng C, Xie R, Ito K, Su C et al. Population Pharmacokinetics of Tofacitinib in Patients With Moderate to Severe Ulcerative Colitis. Clinical pharmacology in drug development 10(3):229–240 (2021). [doi:10.1002/cpdd.899](https://doi.org/10.1002/cpdd.899)

**This record:** Pharmacolibrary v26.09, model `Tofacitinib_Vong2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference>

```bibtex
@misc{pharmacolibrary_TofacitinibVong2021reference,
  title  = {{Pharmacolibrary model Tofacitinib_Vong2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference},
  note   = {Parameters from doi:10.1002/cpdd.899},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.5 mg, single dose, first-order absorption (ka 192 /h, lag 14.2 min, F 1). Doses in the paper: 0.5, 5, 10, 15 mg.

<dbs-fmusim paramsurl="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference/Tofacitinib_Vong2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tofacitinib_Vong2021_reference_params.json` · controls `Tofacitinib_Vong2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btofacitinib%5D%20Tofacitinib_Vong2021_reference&body=Drug%3A%20tofacitinib%0ARecord%3A%20Tofacitinib_Vong2021_reference%0APaper%3A%20Vong_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tofacitinib/Tofacitinib_Vong2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:55 UTC</sub>
