<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;medroxyprogesterone&quot;,&quot;href&quot;:&quot;drugs/drug_medroxyprogesterone/&quot;},{&quot;label&quot;:&quot;Francis_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Medroxyprogesterone_Francis2021_reference&quot;,&quot;label&quot;:&quot;Francis_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# medroxyprogesterone — `Medroxyprogesterone_Francis2021_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.471). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Medroxyprogesterone acetate bioavailability and lag time were left at library defaults, and defined covariate effects were not exercised in the simulation.**

The bioavailability fraction (F) and lag time (Tlag) are not explicitly estimated in the paper, forcing the model to use unsupported placeholder values that affect the predicted concentration profile. Additionally, the model structure includes covariate effects, but the simulation only tested the reference individual, so the impact of these covariates remains unverified. Consequently, the record fails because it relies on unreported parameter values and lacks verification of its covariate relationships. Extracted — medroxyprogesterone: CL 47.2 L/h, V 8.91e+03 L, fu 76, kabs 0.578 1/day, kel 0.0193 1/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has depot medroxyprogesterone, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `depot medroxyprogesterone`, measured `medroxyprogesterone acetate`.

## Citation
Francis J et al., A Semimechanistic Pharmacokinetic Model…, Clinical pharmacology and t… (2021)
  ·  DOI: [10.1002/cpt.2324](https://doi.org/10.1002/cpt.2324)

<div class="pk-model-meta" hidden drug="medroxyprogesterone" model-id="Medroxyprogesterone_Francis2021_reference" status="needs_review" stale="false" population="women with HIV and/or tuberculosis" measured-compound="medroxyprogesterone acetate" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL) (L/hour) a | `Q22` · CL | 47.2 | L/h | 1.3111111111111113e-05 | L/h | not captured | llm_confirmed (0.6) | cpt2324-tbl-0002:row1:col1 | — | not captured |
| Volume of distribution (L) a | `Q61` · V | 8910 | L | 8.91 | L | not captured | llm_confirmed (0.6) | cpt2324-tbl-0002:row2:col1 | — | not captured |
| fraction_of_medroxyprogesterone_acetate_available_for_immediate_absorption_ffast | `Q900` · fraction_of_medroxyprogesterone_acetate_available_for_immediate_absorption_ffast | 24 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2324-tbl-0002:row3:col1 | — | not captured |
| Fraction of medroxyprogesterone acetate in delayed‐release crystals (Fslow) (%) (1‐Ffast) | `Q46` · fu | 76 | not captured | not captured | not captured | not captured | llm (0.6) | cpt2324-tbl-0002:row4:col1 | — | not captured |
| First‐order absorption rate constant (Ka) (1/day) | `Q49` · kabs | 0.578 | 1/day | 6.689814814814814e-06 | 1/h | not captured | llm_confirmed (0.6) | cpt2324-tbl-0002:row5:col1 | — | not captured |
| Final release rate constant ‐ Krelease (1/day) | `Q47` · kel | 0.0193 | 1/day | 2.2337962962962964e-07 | 1/h | not captured | llm (0.6) | cpt2324-tbl-0002:row9:col1 | — | not captured |
| theta_q81_category | `Q900` · theta_q81_category | 11.6 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2324-tbl-0002:row7:col1 | — | not captured |
| theta_q311_category | `Q900` · theta_q311_category | 0.954 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2324-tbl-0002:row8:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'typical value' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Fraction of medroxyprogesterone acetate available for immediate absorption (Ffast) (%)' → Q900:fraction_of_medroxyprogesterone_acetate_available_for_immediate_absorption_ffast = 24 (additive_shift on Q22)
- dropped duplicate Q22 ('Nelfinavir on CL (%)', value '-15.8') — already have one for this compound
- dropped unlinked row (NIL): 'Efavirenz on CL (%)' — extend the ontology if this is a real PK parameter (source ['cpt2324-tbl-0002:row12:col1'])
- dropped duplicate Q22 ('Lopinavir/r on CL (%)', value '-28.7') — already have one for this compound
- dropped duplicate Q22 ('Anti‐TB treatment + Efavirenz on CL (%)', value '+52.4') — already have one for this compound
- routed 'Lopinavir/r on Krelease (%)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q81 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q311 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Clearance (CL) (L/hour) a' → L/h (from the paper text: "Text states: 'mean value of apparent clearance was 47.2 L/h'")
- implicit units: 'Volume of distribution (L) a' → L (from the popPK convention: 'Volume of distribution is conventionally expressed in liters; value 8910 is consistent with a large volume of distributi')
- implicit units: 'First‐order absorption rate constant (Ka) (1/day)' → 1/day (from the popPK convention: 'Absorption rate constant for a depot injection is conventionally expressed in 1/day given the slow release over weeks; v')
- implicit units: 'Final release rate constant ‐ Krelease (1/day)' → 1/day (from the popPK convention: 'Release rate constant for a depot formulation is conventionally expressed in 1/day; value 0.0193 1/day corresponds to a ')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance (CL) (L/hour) a); Q61 (Volume of distribution (L) a)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=medroxyprogesterone acetate
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt2324-tbl-0002:row1:col2 = '43.1; 51.5'
- unparsed cell cpt2324-tbl-0002:row1:col3 = '24.2%+'
- unparsed cell cpt2324-tbl-0002:row1:col4 = '21.5; 27.7'
- unparsed cell cpt2324-tbl-0002:row2:col2 = '7240; 10500'
- unparsed cell cpt2324-tbl-0002:row3:col2 = '20.5; 26.9'
- unparsed cell cpt2324-tbl-0002:row3:col3 = '0.203 b ++'
- unparsed cell cpt2324-tbl-0002:row3:col4 = '0.11; 0.321'
- unparsed cell cpt2324-tbl-0002:row5:col2 = '0.358; 0.871'
- unparsed cell cpt2324-tbl-0002:row7:col2 = '10.3; 13.1'
- unparsed cell cpt2324-tbl-0002:row7:col3 = '45.5%++'
- unparsed cell cpt2324-tbl-0002:row7:col4 = '35.1; 58.6'
- unparsed cell cpt2324-tbl-0002:row8:col2 = '0.503; 1.45'
- unparsed cell cpt2324-tbl-0002:row9:col2 = '0.0168; 0.0223'
- unparsed cell cpt2324-tbl-0002:row9:col3 = '76.9%++'
- unparsed cell cpt2324-tbl-0002:row9:col4 = '69.3; 86.6'
- unparsed cell cpt2324-tbl-0002:row11:col2 = '−5.16; −24.9'
- unparsed cell cpt2324-tbl-0002:row12:col2 = '9.78; 43.2'
- unparsed cell cpt2324-tbl-0002:row13:col2 = '−36.8; −69.5'
- unparsed cell cpt2324-tbl-0002:row14:col2 = '−19.9; −36.3'
- unparsed cell cpt2324-tbl-0002:row15:col2 = '54.5; 184.2'
- unparsed cell cpt2324-tbl-0002:row16:col2 = '0.00409; 0.0284'
- unparsed cell cpt2324-tbl-0002:row17:col2 = '16.5; 18.9'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.471 (8/17 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[anti‐tb treatment + efavirenz on cl]` | not captured | +52.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (cl) (l/hour) a].covariate_forms` | ['additive_shift'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[final release rate constant ‐ krelease]` | 0.0193 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction of medroxyprogesterone acetate in delayed‐release crystals (fslow) (%)].parameter_id` | Q46 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[fraction_of_medroxyprogesterone_acetate_available_for_immediate_absorption_ffast]` | 24 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lopinavir/r on krelease]` | not captured | +107 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q40_category]` | not captured | 24 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | depot medroxyprogesterone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | medroxyprogesterone acetate | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt2324-tbl-0002:row1:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt2324-tbl-0002:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt2324-tbl-0002:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt2324-tbl-0002:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 47.2 | not captured | not captured | ['cpt2324-tbl-0002:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 47.2 L/h | not captured | not captured | ['cpt2324-tbl-0002:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.91e+03 L | not captured | not captured | ['cpt2324-tbl-0002:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=medroxyprogesterone acetate) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_medroxyprogesterone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Francis_2021` / `Francis_2021::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_medroxyprogesterone/models/modelica/Medroxyprogesterone_Francis2021_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_medroxyprogesterone/models/modelica/Medroxyprogesterone_Francis2021_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_medroxyprogesterone/models/modelica/Medroxyprogesterone_Francis2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_modelica.zip" download>Medroxyprogesterone_Francis2021_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_fmi.zip" download>Medroxyprogesterone_Francis2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_matlab.zip" download>Medroxyprogesterone_Francis2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_matlab_simbio.zip" download>Medroxyprogesterone_Francis2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_sbml.zip" download>Medroxyprogesterone_Francis2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_cellml.zip" download>Medroxyprogesterone_Francis2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference.svg" alt="Medroxyprogesterone_Francis2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.0241 /h, F 0.9). Dose in the paper: 150 mg.

<dbs-fmusim paramsurl="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Medroxyprogesterone_Francis2021_reference_params.json` · controls `Medroxyprogesterone_Francis2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:47 UTC</sub>
