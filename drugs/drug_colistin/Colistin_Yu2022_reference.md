<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;colistin&quot;,&quot;href&quot;:&quot;drugs/drug_colistin/&quot;},{&quot;label&quot;:&quot;Yu_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Colistin_Ma2026_reference&quot;,&quot;label&quot;:&quot;Ma_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_colistin/Colistin_Ma2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# colistin — `Colistin_Yu2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The colistin population model was held back because the reference check could not compute a comparison (ratio None), leaving the record's parameter values unverified, and a second reader disputed the analyte and covariate-effect entries.

<div class="pk-model-meta" hidden drug="colistin" model-id="Colistin_Yu2022_reference" status="needs_review" stale="false" population="critically ill patients with carbapenem-resistant organism infections" measured-compound="colistin sulfate" parameterization="mechanistic" topology="1C"></div>

## Citation
Yu XB, Zhang XS, Wang YX, Wang YZ, Zhou HM, Xu FM et al. Population Pharmacokinetics of Colistin Sulfate in Critically Ill Patients: Exposure and Clinical Efficacy. Frontiers in pharmacology 13:915958 (2022).
  ·  DOI: [10.3389/fphar.2022.915958](https://doi.org/10.3389/fphar.2022.915958)

## Population and dosing

**Population:** critically ill patients with carbapenem-resistant organism infections · condition carbapenem-resistant organism infection · age group adult · n = &gt;=42.

**Dosing:** 1e+06, 1.5e+06 IU, iv, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| TVV (L) | V | 20.7 | L | 10 |
| theta_cl_crcl | theta_cl_crcl | 0.525 |  | 22 |
| TVCL | TVCL | 0.994 | L/h | 16 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The colistin population model was held back because the reference check could not compute a comparison (ratio None), leaving the record's parameter values unverified, and a second reader disputed the analyte and covariate-effect entries.**

The record describes colistin (colistin sulfate) in critically ill patients with carbapenem-resistant organism infections, with a volume of distribution of 20.7 L, a typical-value clearance of 0.994 L/h, and a creatinine-clearance covariate effect of 0.525. The reference check failed with ratio None, meaning no comparison could be computed, so this is an inconclusive check rather than a demonstrated fault in the model. A second reader disagreed on the dose compound and primary analyte (colistin sulfate versus unknown) and on whether the covariate effect (0.525) and the volume (20.7 L) belong to the record, while both readers left the typical-value clearance entry empty. Extracted — colistin: V 20.7 L.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| TVV (L) | `Q61` · V | 20.7 | L | 0.0207 | m3 | l | 10 | tv_prefix (0.95) | T3:row4:col1, T3:row4:col2 |
| theta_cl_crcl | `Q900` · theta_cl_crcl | 0.525 |  |  |  |  | 22 |  | T3:row3:col1, T3:row3:col2 |
| TVCL | `Q900` · TVCL | 0.994 | L/h | 2.761e-07 | m3/s |  | 16 |  | T3:row2:col1, T3:row2:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| TVCL (L/h) | Q22 | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'BSV_CL [%CV]' routed out of structural estimates ('Between-subject variability (BSV a )')
- table section residual_error: 'Proportional error [%CV]' routed out of structural estimates ('Residual variability (RV)')
- column 'pk formula' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'pk parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Colistin sulfate' — extend the ontology if this is a real PK parameter (source ['Yu_2022_table_4:row0:col4', 'Yu_2022_table_4:row0:col5'])
- dropped unlinked row (NIL): 'Polymyxin B sulfate (Yu et al., 2021)' — extend the ontology if this is a real PK parameter (source ['Yu_2022_table_4:row1:col4', 'Yu_2022_table_4:row1:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=colistin sulfate
- bound model equation to Q22 (CL): CL = 1.59+(CrCL/80)^0.408 L/h; V = 20.5 L
- Q22 (CL) is equation-defined: value moved to equation-variable 'TVCL (L/h)'; equation kept verbatim

**Extraction notes:**
- unparsed cell T3:row6:col1 = '30.40%'
- unparsed cell T3:row8:col1 = '25.10%'
- unparsed cell Yu_2022_table_4:row0:col2 = 'Sparse data from a TDM study (112 concentrations from 42 patients)'
- unparsed cell Yu_2022_table_4:row1:col2 = 'Sparse data from a TDM study (112 concentrations from 32 patients)'
- companion parameter table 4 transcribed (4 record(s))
- LLM selected parameter table(s) 3, 4
- captured model equation CL = 1.59+(CrCL/80)^0.408 L/h; V = 20.5 L

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row2:col1', 'T3:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T3:row4:col1', 'T3:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 20.7 L | ['T3:row4:col1', 'T3:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcolistin%5D%20Colistin_Yu2022_reference&body=Drug%3A%20colistin%0ARecord%3A%20Colistin_Yu2022_reference%0APaper%3A%20Yu_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_colistin/Colistin_Yu2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 17:45 UTC</sub>
