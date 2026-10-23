<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;eculizumab&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/&quot;},{&quot;label&quot;:&quot;Gatault_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eculizumab_Cosson2025_reference&quot;,&quot;label&quot;:&quot;Cosson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Cosson2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Badri2021_reference&quot;,&quot;label&quot;:&quot;Badri_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Badri2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Gatault2015_reference&quot;,&quot;label&quot;:&quot;Gatault_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Gatault2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Eculizumab_Monteleone2021_mean&quot;,&quot;label&quot;:&quot;Monteleone_2021_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Monteleone2021_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Monteleone2021_median&quot;,&quot;label&quot;:&quot;Monteleone_2021_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Monteleone2021_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Singh2021_mean&quot;,&quot;label&quot;:&quot;Singh_2021_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Singh2021_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Singh2021_median&quot;,&quot;label&quot;:&quot;Singh_2021_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Singh2021_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eculizumab — `Eculizumab_Gatault2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 298, model 296).

<div class="pk-model-meta" hidden drug="eculizumab" model-id="Eculizumab_Gatault2015_reference" status="needs_review" stale="false" population="adults with aHUS or PNH" measured-compound="eculizumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Gatault P, Brachet G, Ternant D, Degenne D, Récipon G, Barbet C et al. Therapeutic drug monitoring of eculizumab: Rationale for an individualized dosing schedule. mAbs 7(6):1205–1211 (2015).
  ·  DOI: [10.1080/19420862.2015.1086049](https://doi.org/10.1080/19420862.2015.1086049)

## Population and dosing

**Population:** adults with aHUS or PNH · condition aHUS or PNH · age group adult · n = &lt;integer&gt;.

**Dosing:** 600, 900, 1200 mg, iv, multiple, every 168 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference.svg" alt="Eculizumab_Gatault2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volume of distribution | V | 3.2 | L |
| clearance | CL | 0.18 | L/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 298, model 296).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — eculizumab: V 3.2 L, CL 0.18 L/day.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of distribution | `Q61` · V | 3.2 | L | 0.0032 | m3 | L | exact (1) | Gatault_2015:other_prose |
| clearance | `Q22` · CL | 0.18 | L/day | 2.083e-09 | m3/s | L/h | exact (1) | Gatault_2015:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '9' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'id' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'Baseline' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row2:col3', 't0001:row2:col4', 't0001:row2:col5', 't0001:row2:col6', 't0001:row2:col7', 't0001:row2:col8', 't0001:row2:col9', 't0001:row2:col10', 't0001:row2:col11'])
- dropped unlinked row (NIL): 'At the time of first measurement of eculizumab concentration' — extend the ontology if this is a real PK parameter (source ['t0001:row4:col3', 't0001:row4:col4', 't0001:row4:col5', 't0001:row4:col6', 't0001:row4:col7', 't0001:row4:col8', 't0001:row4:col9', 't0001:row4:col10', 't0001:row4:col11', 't0001:row6:col3', 't0001:row6:col4', 't0001:row6:col5', 't0001:row6:col7', 't0001:row6:col8', 't0001:row6:col9', 't0001:row6:col10', 't0001:row6:col11', 't0001:row7:col3', 't0001:row7:col4', 't0001:row7:col5', 't0001:row7:col7', 't0001:row7:col8', 't0001:row7:col9', 't0001:row7:col10', 't0001:row7:col11', 't0001:row8:col3', 't0001:row8:col4', 't0001:row8:col5', 't0001:row8:col6', 't0001:row8:col7', 't0001:row8:col8', 't0001:row8:col9', 't0001:row8:col10', 't0001:row8:col11', 't0001:row9:col3', 't0001:row9:col4', 't0001:row9:col5', 't0001:row9:col6', 't0001:row9:col7', 't0001:row9:col8', 't0001:row9:col9', 't0001:row9:col10', 't0001:row9:col11', 't0001:row10:col2', 't0001:row10:col3', 't0001:row10:col4', 't0001:row10:col5', 't0001:row10:col6', 't0001:row10:col7', 't0001:row10:col8', 't0001:row10:col9', 't0001:row10:col10', 't0001:row10:col11', 't0001:row11:col4', 't0001:row11:col5', 't0001:row11:col6', 't0001:row11:col7', 't0001:row11:col8', 't0001:row11:col9'])
- dropped unlinked row (NIL): 'At the last follow-up' — extend the ontology if this is a real PK parameter (source ['t0001:row13:col3', 't0001:row13:col4', 't0001:row13:col5', 't0001:row13:col6', 't0001:row13:col7', 't0001:row13:col8', 't0001:row13:col9', 't0001:row13:col10', 't0001:row14:col3', 't0001:row14:col4', 't0001:row14:col5', 't0001:row14:col6', 't0001:row14:col7', 't0001:row14:col8', 't0001:row14:col9', 't0001:row14:col10', 't0001:row15:col3', 't0001:row15:col4', 't0001:row15:col5', 't0001:row15:col6', 't0001:row15:col7', 't0001:row15:col8', 't0001:row15:col9', 't0001:row15:col10', 't0001:row16:col3', 't0001:row16:col4', 't0001:row16:col5', 't0001:row16:col6', 't0001:row16:col7', 't0001:row16:col8', 't0001:row16:col9', 't0001:row16:col10', 't0001:row16:col11', 't0001:row17:col2', 't0001:row17:col3', 't0001:row17:col4', 't0001:row17:col5', 't0001:row17:col6', 't0001:row17:col7', 't0001:row17:col8', 't0001:row17:col9', 't0001:row17:col10', 't0001:row17:col11', 't0001:row18:col3', 't0001:row18:col4', 't0001:row18:col5', 't0001:row18:col6', 't0001:row18:col7', 't0001:row18:col8', 't0001:row18:col9'])
- salvaged Q61 ('volume of distribution'=3.2) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance'=0.18) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eculizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'eculizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table t0001: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell t0001:row11:col3 = '&lt;0.3'
- unparsed cell t0001:row11:col10 = '&lt;0.3'
- unparsed cell t0001:row18:col10 = '&lt;0.3'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (6/6 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 12.4 | 12.32 | 0.9938 | 0.25 | reported t½β |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.18 |  |  | ['Gatault_2015:other_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0075 L/h |  |  | ['Gatault_2015:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.2 L |  |  | ['Gatault_2015:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=eculizumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | pass | 297.6 | 295.7 | 0.9937 | days→SI vs simulated h |
| T1_t_half_beta | reference | fail | 468 | 295.7 | 0.6319 | d→SI vs simulated h |
| T1_t_half_beta | reference | fail | 187.2 | 295.7 | 1.58 | d→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference_modelica.zip" download>Eculizumab_Gatault2015_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference_fmi.zip" download>Eculizumab_Gatault2015_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference_matlab.zip" download>Eculizumab_Gatault2015_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference_matlab_simbio.zip" download>Eculizumab_Gatault2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference_sbml.zip" download>Eculizumab_Gatault2015_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference_cellml.zip" download>Eculizumab_Gatault2015_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 2.083e-09 | m3/s |
| input | model | `VdPerKg` | 4.571e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Gatault P, Brachet G, Ternant D, Degenne D, Récipon G, Barbet C et al. Therapeutic drug monitoring of eculizumab: Rationale for an individualized dosing schedule. mAbs 7(6):1205–1211 (2015). [doi:10.1080/19420862.2015.1086049](https://doi.org/10.1080/19420862.2015.1086049)

**This record:** Pharmacolibrary v26.09, model `Eculizumab_Gatault2015_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_eculizumab/Eculizumab_Gatault2015_reference>

```bibtex
@misc{pharmacolibrary_EculizumabGatault2015reference,
  title  = {{Pharmacolibrary model Eculizumab_Gatault2015_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_eculizumab/Eculizumab_Gatault2015_reference},
  note   = {Parameters from doi:10.1080/19420862.2015.1086049},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 600 mg infusion over 10 min, single dose. Doses in the paper: 600, 900, 1200 mg.

<dbs-fmusim paramsurl="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_eculizumab/Eculizumab_Gatault2015_reference/Eculizumab_Gatault2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Eculizumab_Gatault2015_reference_params.json` · controls `Eculizumab_Gatault2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beculizumab%5D%20Eculizumab_Gatault2015_reference&body=Drug%3A%20eculizumab%0ARecord%3A%20Eculizumab_Gatault2015_reference%0APaper%3A%20Gatault_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eculizumab/Eculizumab_Gatault2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:51 UTC</sub>
