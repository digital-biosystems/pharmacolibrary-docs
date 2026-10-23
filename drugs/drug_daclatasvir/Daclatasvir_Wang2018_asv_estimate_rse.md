<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;daclatasvir&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/&quot;},{&quot;label&quot;:&quot;Wang_2018 \u00b7 asv_estimate_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daclatasvir_Osawa2018_reference&quot;,&quot;label&quot;:&quot;Osawa_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daclatasvir_Wang2018_dcv_estimate_rse&quot;,&quot;label&quot;:&quot;Wang_2018_dcv_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daclatasvir — `Daclatasvir_Wang2018_asv_estimate_rse`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="daclatasvir" model-id="Daclatasvir_Wang2018_asv_estimate_rse" status="needs_review" stale="false" population="healthy subjects and adults with genotype 1 chronic hepatitis C" measured-compound="daclatasvir" parameterization="mechanistic" topology="2C"></div>

## Citation
Wang HC, Ren YP, Qiu Y, Zheng J, Li GL, Hu CP et al. Integrated pharmacokinetic/viral dynamic model for daclatasvir/asunaprevir in treatment of patients with genotype 1 chronic hepatitis C. Acta pharmacologica Sinica 39(1):140–153 (2018).
  ·  DOI: [10.1038/aps.2017.84](https://doi.org/10.1038/aps.2017.84)

## Population and dosing

**Population:** healthy subjects and adults with genotype 1 chronic hepatitis C · condition chronic hepatitis C genotype 1 · age group adult.

**Dosing:** 60 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (L/h) | CL | 432 | L/h | 43.8 |
| Vc (L) | V1 | 1720 | L | 64.3 |
| Q (L/h) | Q | 237 | L/h | 20.2 |
| Vp (L) | V2 | 20.5 | L | 22.6 |
| Ka (h⁻¹) | kabs | 0.0352 | h⁻¹ | 8.53 |
| D (h) | D1 | 2.58 | h | 39.2 |
| FKSus/Sol | Frel | 0.334 |  | 65.0 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.188). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — daclatasvir: CL 432 L/h, V1 1.72e+03 L, Q 237 L/h, V2 20.5 L, kabs 0.0352 h⁻¹, D1 2.58 h, Frel 0.334.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has daclatasvir, the second reading daclatasvir, asunaprevir; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 432 | L/h | 0.00012 | m3/s | l/h | 43.8 | exact (1) | Wang_2018_table_p6_2:row0:col4, Wang_2018_table_p6_2:row0:col5 |
| Vc (L) | `Q63` · V1 | 1720 | L | 1.72 | m3 | l | 64.3 | exact (1) | Wang_2018_table_p6_2:row1:col4, Wang_2018_table_p6_2:row1:col5 |
| Q (L/h) | `Q30` · Q | 237 | L/h | 6.583e-05 | m3/s | l/h | 20.2 | exact (1) | Wang_2018_table_p6_2:row2:col4 |
| Vp (L) | `Q64` · V2 | 20.5 | L | 0.0205 | m3 | l | 22.6 | exact (1) | Wang_2018_table_p6_2:row3:col4, Wang_2018_table_p6_2:row3:col5 |
| Ka (h⁻¹) | `Q49` · kabs | 0.0352 | h⁻¹ | 9.778e-06 | 1/s | 1/h | 8.53 | exact (1) | Wang_2018_table_p6_2:row4:col4 |
| D (h) | `Q310` · D1 | 2.58 | h | 9288 | s | h | 39.2 | exact (1) | Wang_2018_table_p6_2:row5:col4, Wang_2018_table_p6_2:row5:col5 |
| FKSus/Sol | `Q87` · Frel | 0.334 |  |  |  |  | 65.0 | llm (0.6) | Wang_2018_table_p6_2:row7:col4, Wang_2018_table_p6_2:row7:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'FKCap/Tab' — extend the ontology if this is a real PK parameter (source ['Wang_2018_table_p6_2:row6:col4', 'Wang_2018_table_p6_2:row6:col5'])
- dropped duplicate Q30 ('c', value '22.1') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L)); Q30 (Q (L/h)); Q64 (Vp (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daclatasvir
- population split: 'asv estimate (%rse)' subgroup of Wang_2018 (paper reports 3 populations: asv estimate (%rse), dcv estimate (%rse), estimate (%rse))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_2: grid unusable → re-running vision table extraction for Wang_2018
- unparsed cell Wang_2018_table_3:row8:col1 = 'IC 50 of DCV blocking production of GT1A virions'
- unparsed cell Wang_2018_table_3:row9:col1 = 'Scaling factor for IC 50 of DCV between GT1B and GT1A virions'
- unparsed cell Wang_2018_table_3:row11:col1 = 'Coefficient of exponential function describing IC 50,DCV,GT1A changing over time'
- unparsed cell Wang_2018_table_3:row12:col1 = 'Coefficient of exponential function describing IC 50,DCV,GT1B changing over time'
- unparsed cell Wang_2018_table_3:row13:col1 = 'IC 50 of ASV blocking production of GT1A virions'
- unparsed cell Wang_2018_table_3:row14:col1 = 'Scaling factor for IC 50 of ASV between GT1A and GT1B virions'
- unparsed cell Wang_2018_table_3:row16:col1 = 'Coefficient of exponential function describing IC 50,ASV changing over time'
- companion parameter table 3 transcribed (26 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.188 (3/16 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].rse_percent` | 43.8 | 23.2 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 432 | 5.24 | mismatch |
| `gpt-oss-120b` | `parameters[d]` | 2.58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fksus/sol]` | 0.334 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | 8.53 | 28.3 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 0.0352 | 1.17 | mismatch |
| `gpt-oss-120b` | `parameters[q].rse_percent` | 20.2 | 17.7 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 237 | 2.62 | mismatch |
| `gpt-oss-120b` | `parameters[vc].rse_percent` | 64.3 | 22.6 | mismatch |
| `gpt-oss-120b` | `parameters[vc].value` | 1720 | 42.9 | mismatch |
| `gpt-oss-120b` | `parameters[vp].rse_percent` | 22.6 | 32.4 | mismatch |
| `gpt-oss-120b` | `parameters[vp].value` | 20.5 | 25.0 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | daclatasvir | daclatasvir, asunaprevir | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wang_2018_table_p6_2:row0:col4', 'Wang_2018_table_p6_2:row0:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Wang_2018_table_p6_2:row2:col4'] |
| C5_dimension_Q310 | pass | [time] |  | ['Wang_2018_table_p6_2:row5:col4', 'Wang_2018_table_p6_2:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Wang_2018_table_p6_2:row4:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wang_2018_table_p6_2:row1:col4', 'Wang_2018_table_p6_2:row1:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Wang_2018_table_p6_2:row3:col4', 'Wang_2018_table_p6_2:row3:col5'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 432 | ['Wang_2018_table_p6_2:row0:col4', 'Wang_2018_table_p6_2:row0:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 432 L/h | ['Wang_2018_table_p6_2:row0:col4', 'Wang_2018_table_p6_2:row0:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.72e+03 L | ['Wang_2018_table_p6_2:row1:col4', 'Wang_2018_table_p6_2:row1:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 20.5 L | ['Wang_2018_table_p6_2:row3:col4', 'Wang_2018_table_p6_2:row3:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaclatasvir%5D%20Daclatasvir_Wang2018_asv_estimate_rse&body=Drug%3A%20daclatasvir%0ARecord%3A%20Daclatasvir_Wang2018_asv_estimate_rse%0APaper%3A%20Wang_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daclatasvir/Daclatasvir_Wang2018_asv_estimate_rse%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:33 UTC</sub>
