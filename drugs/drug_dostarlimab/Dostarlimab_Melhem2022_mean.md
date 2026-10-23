<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dostarlimab&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/&quot;},{&quot;label&quot;:&quot;Melhem_2022 \u00b7 mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dostarlimab_Melhem2022_mean&quot;,&quot;label&quot;:&quot;Melhem_2022_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Dostarlimab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Kuchimanchi2025_reference&quot;,&quot;label&quot;:&quot;Kuchimanchi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dostarlimab — `Dostarlimab_Melhem2022_mean`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="dostarlimab" model-id="Dostarlimab_Melhem2022_mean" status="curated_candidate" stale="false" population="patients with advanced solid tumours" measured-compound="dostarlimab" parameterization="mechanistic" topology="1C"></div>

## Citation
Melhem M, Hanze E, Lu S, Alskär O, Visser S, Gandhi Y. Population pharmacokinetics and exposure-response of anti-programmed cell death protein-1 monoclonal antibody dostarlimab in advanced solid tumours. British journal of clinical pharmacology 88(9):4142–4154 (2022).
  ·  DOI: [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339)

## Population and dosing

**Population:** patients with advanced solid tumours · condition advanced solid tumours · age group adult · n = 546.

**Dosing:** 1, 3, 10, 500, 1000 mg kg−1; mg, iv, multiple.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean.svg" alt="Dostarlimab_Melhem2022_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| C min (mg L −1 ) | Cmin | 61.6 | mg L −1 |
| C max (mg L −1 ) | Cmax | 216.0 | mg L −1 |
| AUC (mg*h L −1 ) | AUC | 83800.0 | mg*h L −1 |
| CL | CL | 0.179 | L day−1 |
| volume of distribution (Vss) | V | 5.3 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.211). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Cmin, Cmax and AUC), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of auc: this record has 83800.0, the second reading none; it also differs on 14 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C min (mg L −1 ) | `Q36` · Cmin | 61.6 | mg L −1 |  |  | mg/l | space_fold (0.95) | Melhem_2022_table_4:row1:col3, Melhem_2022_table_4:row5:col3 |
| C max (mg L −1 ) | `Q32` · Cmax | 216.0 | mg L −1 |  |  | mg/l | space_fold (0.95) | Melhem_2022_table_4:row2:col3, Melhem_2022_table_4:row6:col3 |
| AUC (mg*h L −1 ) | `Q88` · AUC | 83800.0 | mg*h L −1 |  |  | (h·mg)/l | exact (1) | Melhem_2022_table_4:row3:col3, Melhem_2022_table_4:row7:col3 |
| CL | `Q22` · CL | 0.179 | L day−1 | 2.072e-09 | m3/s | L/h | exact (1) | Melhem_2022:other_prose |
| volume of distribution (Vss) | `Q61` · V | 5.3 | L | 0.0053 | m3 | L | exact (1) | Melhem_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('CL'=0.179) from results prose — parameter table was unreadable
- salvaged Q61 ('volume of distribution (Vss)'=5.3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dostarlimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'mean' subgroup of Melhem_2022 (paper reports 2 populations: estimate b, mean)
- molar mass: none found for 'dostarlimab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell bcp15339-tbl-0003:row1:col3 = '0.173, 0.184'
- unparsed cell bcp15339-tbl-0003:row2:col3 = '2.93, 3.03'
- unparsed cell bcp15339-tbl-0003:row4:col3 = '2.02, 2.18'
- unparsed cell bcp15339-tbl-0003:row5:col3 = '−0.187, −0.134'
- unparsed cell bcp15339-tbl-0003:row6:col3 = '92.6, 124.0'
- unparsed cell bcp15339-tbl-0003:row7:col3 = '4.34, 6.23'
- unparsed cell bcp15339-tbl-0003:row8:col3 = '0.414, 0.527'
- unparsed cell bcp15339-tbl-0003:row9:col3 = '0.376, 0.463'
- unparsed cell bcp15339-tbl-0003:row10:col3 = '−0.360, −0.0951'
- unparsed cell bcp15339-tbl-0003:row11:col3 = '−1.18, −0.835'
- unparsed cell bcp15339-tbl-0003:row12:col3 = '−0.0956, −0.0213'
- unparsed cell bcp15339-tbl-0003:row13:col3 = '0.106, 0.225'
- unparsed cell bcp15339-tbl-0003:row14:col3 = '−0.261, −0.0461'
- unparsed cell bcp15339-tbl-0003:row15:col3 = '0.122, 0.202'
- unparsed cell bcp15339-tbl-0003:row16:col3 = '0.0470, 0.0632'
- unparsed cell bcp15339-tbl-0003:row17:col3 = '0.0164, 0.0255'
- unparsed cell bcp15339-tbl-0003:row18:col3 = '0.0220, 0.0296'
- unparsed cell bcp15339-tbl-0003:row19:col3 = '0.365, 0.710'
- unparsed cell bcp15339-tbl-0003:row20:col3 = '0.126, 0.139'
- unparsed cell bcp15339-tbl-0003:row21:col3 = '1.98, 3.59'
- companion parameter table 4 transcribed (24 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.211 (4/19 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[auc]` | 83800.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[c max]` | 216.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[c min]` | 61.6 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl (l d -1 ) a]` |  | 0.179 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 0.179 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of alb on v c]` |  | -0.153 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of male on v c]` |  | 0.162 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` |  | 0.547 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t50]` |  | 108 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_age]` |  | -0.227 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_wt]` |  | 0.419 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q31_wt]` |  | 0.470 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v c (l) a]` |  | 2.98 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v p]` |  | 2.10 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution]` | 5.3 |  | only_one_extracted |

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
| C1_half_life_beta | pass | 23.5 | 20.52 | 0.8733 | 0.25 | reported t½β |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Melhem_2022_table_4:row2:col3', 'Melhem_2022_table_4:row6:col3'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  |  |  | ['Melhem_2022_table_4:row1:col3', 'Melhem_2022_table_4:row5:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Melhem_2022_table_4:row3:col3', 'Melhem_2022_table_4:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.179 |  |  | ['Melhem_2022:other_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00746 L/h |  |  | ['Melhem_2022:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.3 L |  |  | ['Melhem_2022:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=dostarlimab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 10 | 0.001887 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 434 | 0.001887 |  | unresolved concentration unit (exp 'mg L−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.319 | 0.001887 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.001887 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.001887 |  | non-numeric value |
| T1_cmax | reference | skipped | 0.717 | 0.001887 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.001887 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.001887 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.001887 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.001887 |  | non-numeric value |
| T1_cmax | reference | skipped | 350 | 0.001887 |  | unresolved concentration unit (exp 'mg L−1', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | 0.187 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.449 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.0451 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 1.51 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | pass | 564 | 492.6 | 0.8733 | days→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 564 | 492.6 | 0.8733 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean_modelica.zip" download>Dostarlimab_Melhem2022_mean_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean_fmi.zip" download>Dostarlimab_Melhem2022_mean_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean_matlab.zip" download>Dostarlimab_Melhem2022_mean_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean_matlab_simbio.zip" download>Dostarlimab_Melhem2022_mean_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean_sbml.zip" download>Dostarlimab_Melhem2022_mean_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean_cellml.zip" download>Dostarlimab_Melhem2022_mean_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 2.072e-09 | m3/s |
| input | model | `VdPerKg` | 7.571e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Melhem M, Hanze E, Lu S, Alskär O, Visser S, Gandhi Y. Population pharmacokinetics and exposure-response of anti-programmed cell death protein-1 monoclonal antibody dostarlimab in advanced solid tumours. British journal of clinical pharmacology 88(9):4142–4154 (2022). [doi:10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339)

**This record:** Pharmacolibrary v26.09, model `Dostarlimab_Melhem2022_mean`. <https://pharmacolibrary.github.io/#/drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean>

```bibtex
@misc{pharmacolibrary_DostarlimabMelhem2022mean,
  title  = {{Pharmacolibrary model Dostarlimab_Melhem2022_mean}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean},
  note   = {Parameters from doi:10.1111/bcp.15339},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean/Dostarlimab_Melhem2022_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Dostarlimab_Melhem2022_mean_params.json` · controls `Dostarlimab_Melhem2022_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdostarlimab%5D%20Dostarlimab_Melhem2022_mean&body=Drug%3A%20dostarlimab%0ARecord%3A%20Dostarlimab_Melhem2022_mean%0APaper%3A%20Melhem_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:09 UTC</sub>
