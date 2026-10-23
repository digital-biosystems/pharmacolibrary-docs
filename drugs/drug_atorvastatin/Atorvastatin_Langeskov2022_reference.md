<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;atorvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/&quot;},{&quot;label&quot;:&quot;Langeskov_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atorvastatin_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Kong2025_reference&quot;,&quot;label&quot;:&quot;Kong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Atorvastatin_Malekinejad2014_reference&quot;,&quot;label&quot;:&quot;Malekinejad_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Malekinejad2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Courlet2020_reference&quot;,&quot;label&quot;:&quot;Courlet_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vargo_2014_LDL_C&quot;,&quot;label&quot;:&quot;Vargo_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/pd_Vargo_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atorvastatin — `Atorvastatin_Langeskov2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The absorption rate constant (9.4 h−1) conflicts with the transit model's transit rate (7.28 h−1) and zero lag (0.16 h).

<div class="pk-model-meta" hidden drug="atorvastatin" model-id="Atorvastatin_Langeskov2022_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="atorvastatin" parameterization="apparent" topology="2C"></div>

## Citation
Langeskov EK, Kristensen K. Population pharmacokinetic of paracetamol and atorvastatin with co-administration of semaglutide. Pharmacology research & perspectives 10(4):e00962 (2022).
  ·  DOI: [10.1002/prp2.962](https://doi.org/10.1002/prp2.962)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = &gt;.

**Dosing:** 0.25, 0.5, 1, 1500 mg, oral, sc, multiple, every 168 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference.svg" alt="Atorvastatin_Langeskov2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| ka (h−1) (Placebo) | kabs | 9.4 | h−1 | 12.1 | 2.03 (None% RSE) |
| ktr (h−1) (Placebo) | ktr | 7.28 | h−1 | 22.2 | 1.82 (None% RSE) |
| V1/F (L) a | V1/F | 1843 | L | 13.3 | 0.625 (None% RSE) |
| Cl/F (L/h) a | CL/F | 620 | L/h | 5.86 | 0.151 (None% RSE) |
| V2/F(L) a | V2/F | 4184 | L | 8.67 | 0.111 (None% RSE) |
| Cl2/F (L/h) a | Q2/F | 873 | L/h | 15.4 |  |
| Cl2/F (L/h) | Q/F | 199 | L/h | 9.43 |  |
| Tlag (h) | tlag | 0.16 | h | 7.40 | 0.0586 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption rate constant (9.4 h−1) conflicts with the transit model's transit rate (7.28 h−1) and zero lag (0.16 h).**

The record specifies a transit compartment absorption model with a transit rate constant of 7.28 h−1 and a lag time of 0.16 h. However, it also assigns an absorption rate constant of 9.4 h−1 to the same compound. These parameters describe incompatible absorption mechanisms for the same molecule, resulting in a structural deviation that required review. Extracted — atorvastatin: kabs 9.4 h−1, ktr 7.28 h−1, V1/F 1.84e+03 L, CL/F 620 L/h, V2/F 4.18e+03 L, Q2/F 873 L/h, Q/F 199 L/h, tlag 0.16 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atorvastatin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) (Placebo) | `Q49` · kabs | 9.4 | h−1 | 0.002611 | 1/s | 1/h | 12.1 | space_fold (0.95) | prp2962-tbl-0003:row1:col1, Langeskov_2022_table_2:row0:col1 | 2.03 (None% RSE) |
| ktr (h−1) (Placebo) | `Q306` · ktr | 7.28 | h−1 | 0.002022 | 1/s | 1/h | 22.2 | space_fold (0.95) | prp2962-tbl-0003:row3:col1 | 1.82 (None% RSE) |
| V1/F (L) a | `Q290` · V1/F | 1843 | L | 1.843 | m3 | l | 13.3 | llm_confirmed (0.6) | prp2962-tbl-0003:row5:col1 | 0.625 (None% RSE) |
| Cl/F (L/h) a | `Q27` · CL/F | 620 | L/h | 0.0001722 | m3/s | l/h | 5.86 | llm_confirmed (0.6) | prp2962-tbl-0003:row6:col1 | 0.151 (None% RSE) |
| V2/F(L) a | `Q82` · V2/F | 4184 | L | 4.184 | m3 | l | 8.67 | llm_confirmed (0.6) | prp2962-tbl-0003:row7:col1 | 0.111 (None% RSE) |
| Cl2/F (L/h) a | `Q80` · Q2/F | 873 | L/h | 0.0002425 | m3/s | l/h | 15.4 | llm (0.6) | prp2962-tbl-0003:row8:col1 |  |
| Cl2/F (L/h) | `Q69` · Q/F | 199 | L/h | 5.528e-05 | m3/s | l/h | 9.43 | special_case (0.95) | Langeskov_2022_table_2:row6:col1 |  |
| Tlag (h) | `Q83` · tlag | 0.16 | h | 576 | s | h | 7.40 | exact (1) | Langeskov_2022_table_2:row7:col1 | 0.0586 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2 Ka' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 Ktr' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 V1/F' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 Cl/f' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 V2/F' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'Residual unexplained variability (Ceps)' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 Ka' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 V1/F' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 Cl/f' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 V2/F' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 Tlag' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'Residual unexplained variability (Ceps)' routed out of structural estimates ('Between subject variablity (ω2)')
- routed 'Θkacovariate' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Θktrcovariate' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q290 ('V1/F (L)', value '48.5') — already have one for this compound
- dropped duplicate Q290 ('ΘV1/Fcovariate', value '0.0312') — already have one for this compound
- dropped duplicate Q27 ('Cl/F (L/h)', value '25.9') — already have one for this compound
- dropped duplicate Q82 ('V2/F (L)', value '55.4') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atorvastatin

**Extraction notes:**
- table prp2962-tbl-0003: unparsed_numeric_cell
- table Langeskov_2022_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (36 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θktrcovariate]` | 0.791 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | atorvastatin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atorvastatin | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['prp2962-tbl-0003:row6:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['prp2962-tbl-0003:row5:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['prp2962-tbl-0003:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['prp2962-tbl-0003:row1:col1', 'Langeskov_2022_table_2:row0:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Langeskov_2022_table_2:row6:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['prp2962-tbl-0003:row8:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['prp2962-tbl-0003:row7:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Langeskov_2022_table_2:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 620 L/h | ['prp2962-tbl-0003:row6:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.84e+03 L | ['prp2962-tbl-0003:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.18e+03 L | ['prp2962-tbl-0003:row7:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=atorvastatin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 7 scholar param(s) emitted or defaulted | 7 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | D1: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference_modelica.zip" download>Atorvastatin_Langeskov2022_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference_fmi.zip" download>Atorvastatin_Langeskov2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference_matlab.zip" download>Atorvastatin_Langeskov2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference_matlab_simbio.zip" download>Atorvastatin_Langeskov2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference_sbml.zip" download>Atorvastatin_Langeskov2022_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference_cellml.zip" download>Atorvastatin_Langeskov2022_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5586 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 576 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-07 | kg |
| input | model | `Cl` | 0.0001722 | m3/s |
| input | model | `VdPerKg` | 0.02633 | m3/kg |
| input | model | `k12` | 0.0001316 | 1/s |
| input | model | `k21` | 5.796e-05 | 1/s |
| input | model | `ka` | 0.002611 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Langeskov EK, Kristensen K. Population pharmacokinetic of paracetamol and atorvastatin with co-administration of semaglutide. Pharmacology research & perspectives 10(4):e00962 (2022). [doi:10.1002/prp2.962](https://doi.org/10.1002/prp2.962)

**This record:** Pharmacolibrary v26.09, model `Atorvastatin_Langeskov2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference>

```bibtex
@misc{pharmacolibrary_AtorvastatinLangeskov2022reference,
  title  = {{Pharmacolibrary model Atorvastatin_Langeskov2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference},
  note   = {Parameters from doi:10.1002/prp2.962},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.25 mg, single dose, first-order absorption (ka 9.4 /h, lag 9.6 min, F 1). Doses in the paper: 0.25, 0.5, 1, 1500 mg.

<dbs-fmusim paramsurl="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference/Atorvastatin_Langeskov2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Atorvastatin_Langeskov2022_reference_params.json` · controls `Atorvastatin_Langeskov2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batorvastatin%5D%20Atorvastatin_Langeskov2022_reference&body=Drug%3A%20atorvastatin%0ARecord%3A%20Atorvastatin_Langeskov2022_reference%0APaper%3A%20Langeskov_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:40 UTC</sub>
