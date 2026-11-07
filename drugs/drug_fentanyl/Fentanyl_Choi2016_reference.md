<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Choi_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Choi2016_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Choi2016_reference" status="not_modelled" stale="false" population="critically ill adults" measured-compound="fentanyl" parameterization="mechanistic" topology="2C"></div>

## Citation
Choi L, Ferrell BA, Vasilevskis EE, Pandharipande PP, Heltsley R, Ely EW et al. Population Pharmacokinetics of Fentanyl in the Critically Ill. Critical care medicine 44(1):64–72 (2016).
  ·  DOI: [10.1097/CCM.0000000000001347](https://doi.org/10.1097/CCM.0000000000001347)

## Population and dosing

**Population:** critically ill adults · condition critical illness · age group adult · n = &gt;=3.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL = θ_1 + θ_2Wgt_c + θ_3SLDCCHF | CL | 32 | L/hr |
| θ_1 | equation variable | 35 |  |
| V_1 | V1 | 252 | L |
| V_2 = θ_4 + θ_5Wgt_c | V2 | 474 | L |
| Q | Q | 43 | L/hr |
| clearance, volumes and absorption rate | kabs | 1.0 | h−1 |
| t1pp ranged from | tlag | 15.0 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of θ_1: this record has 35, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL = θ_1 + θ_2Wgt_c + θ_3SLDCCHF | `Q22` · CL | 32 | L/hr | 8.889e-06 | m3/s | l/h | llm_confirmed (0.6) | Choi_2016_table_p5_1:row0:col4 |
| θ_1 | `Q900` · equation variable | 35 |  |  |  |  | llm (0.6) | Choi_2016_table_p5_1:row1:col1 |
| V_1 | `Q63` · V1 | 252 | L | 0.252 | m3 | l | exact (1) | Choi_2016_table_p5_1:row4:col1, Choi_2016_table_p5_1:row4:col4 |
| V_2 = θ_4 + θ_5Wgt_c | `Q64` · V2 | 474 | L | 0.474 | m3 | l | llm_confirmed (0.6) | Choi_2016_table_p5_1:row5:col4 |
| Q | `Q30` · Q | 43 | L/hr | 1.194e-05 | m3/s | l/h | exact (1) | Choi_2016_table_p5_1:row8:col1, Choi_2016_table_p5_1:row8:col4 |
| clearance, volumes and absorption rate | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Eleveld_2026:review |
| t1pp ranged from | `Q83` · tlag | 15.0 | min | 900 | s | h | review_gapfill (0.7) | Andersen_1986:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'ω^2_CL (%CV)' — extend the ontology if this is a real PK parameter (source ['Choi_2016_table_p5_1:row2:col1'])
- dropped unlinked row (NIL): 'θ_3' — extend the ontology if this is a real PK parameter (source ['Choi_2016_table_p5_1:row3:col1'])
- dropped unlinked row (NIL): 'θ_4' — extend the ontology if this is a real PK parameter (source ['Choi_2016_table_p5_1:row6:col1'])
- dropped unlinked row (NIL): 'θ_5' — extend the ontology if this is a real PK parameter (source ['Choi_2016_table_p5_1:row7:col1'])
- dropped unlinked row (NIL): 'θ^2_CL (%CV)' — extend the ontology if this is a real PK parameter (source ['Choi_2016_table_p5_1:row9:col1', 'Choi_2016_table_p5_1:row9:col3', 'Choi_2016_table_p5_1:row9:col4'])
- dropped unlinked row (NIL): 'ω^2_V1 (%CV)' — extend the ontology if this is a real PK parameter (source ['Choi_2016_table_p5_1:row10:col1', 'Choi_2016_table_p5_1:row10:col3', 'Choi_2016_table_p5_1:row10:col4'])
- dropped unlinked row (NIL): 'ω^2_V2 (%CV)' — extend the ontology if this is a real PK parameter (source ['Choi_2016_table_p5_1:row11:col1', 'Choi_2016_table_p5_1:row11:col3', 'Choi_2016_table_p5_1:row11:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- model equation 'CLi = [θ1+θ2(Wgti−92)+θ3SLDCHFi]×exp(ηiCL) V1i=θ6×exp(ηiV1) V2i=[θ4+θ5(Wgti−92)]×exp(ηiV2) Q=θ7' not bound — neither LHS nor base term 'θ1' linked to an ontology parameter
- gap-filled Q49 (kabs) from Eleveld_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Andersen_1986's review values (primary lacked it)

**Extraction notes:**
- table Choi_2016_table_p5_1: ambiguous_uncertainty_binding
- LLM selected parameter table(s) 2
- captured model equation CLi = [θ1+θ2(Wgti−92)+θ3SLDCHFi]×exp(ηiCL) V1i=θ6×exp(ηiV1) V2i=[θ4+θ5(Wgti−92)]×exp(ηiV2) Q=θ7

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.889 (8/9 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ_1]` | 35 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Choi_2016_table_p5_1:row0:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Choi_2016_table_p5_1:row8:col1', 'Choi_2016_table_p5_1:row8:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Eleveld_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Choi_2016_table_p5_1:row4:col1', 'Choi_2016_table_p5_1:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Choi_2016_table_p5_1:row5:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Andersen_1986:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32 | ['Choi_2016_table_p5_1:row0:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 32 L/h | ['Choi_2016_table_p5_1:row0:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 252 L | ['Choi_2016_table_p5_1:row4:col1', 'Choi_2016_table_p5_1:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 474 L | ['Choi_2016_table_p5_1:row5:col4'] |

**Reviewer per-scenario checks:**

| check | status | note |
|---|---|---|
| T0_analyte_identity | pass | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped | no covariate effects in record |
| T3_param_coverage | skipped | no emitted model to inspect (engineer build absent) |
| T6_deviations | pass | no engineer deviations to adjudicate |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfentanyl%5D%20Fentanyl_Choi2016_reference&body=Drug%3A%20fentanyl%0ARecord%3A%20Fentanyl_Choi2016_reference%0APaper%3A%20Choi_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fentanyl/Fentanyl_Choi2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 18:28 UTC</sub>
