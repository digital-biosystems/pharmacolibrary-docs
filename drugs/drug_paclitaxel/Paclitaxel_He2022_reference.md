<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;paclitaxel&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/&quot;},{&quot;label&quot;:&quot;He_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paclitaxel_De2026_reference&quot;,&quot;label&quot;:&quot;De_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_De2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paclitaxel — `Paclitaxel_He2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:29 UTC (Needs review), but the paper was screened again on 2026-10-07 18:21 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="paclitaxel" model-id="Paclitaxel_He2022_reference" status="extracted" stale="true" population="adults with advanced/metastatic solid tumors" measured-compound="paclitaxel" parameterization="mechanistic" topology="1C"></div>

## Citation
He J, Jackson CGCA, Deva S, Hung T, Clarke K, Segelov E et al. Population pharmacokinetics for oral paclitaxel in patients with advanced/metastatic solid tumors. CPT: pharmacometrics & systems pharmacology 11(7):867–879 (2022).
  ·  DOI: [10.1002/psp4.12799](https://doi.org/10.1002/psp4.12799)

## Population and dosing

**Population:** adults with advanced/metastatic solid tumors · condition advanced/metastatic solid tumors · age group adult · n = No.

**Dosing:** 205 mg/m2, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (L/h) a | CL | 33.7 | L/h | 4.2 |
| V2 (L) | V2 | 50.7 | L | 15.9 |
| Q (L/h) | Q | 40.6 | L/h | 5.1 |
| V3 (L) | V3 | 855 | L | 4.9 |
| KA (1/h) | kabs | 0.724 | 1/h | 5.2 |
| F1 | Fab | 0.119 |  |  |
| theta_q900_formulation | theta_q900_formulation | 0.895 |  | 28.5 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL and kabs have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Frel), so that value has no SI equivalent. Extracted — paclitaxel: CL 34.4, V2 176 L, Q 48 L/h, V3 855 L, kabs 0.724, Frel 0.895 proportional.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of alag1: this record has none, the second reading 0.215; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) a | `Q22` · CL | 33.7 | L/h | 9.361e-06 | m3/s | L/h | 4.2 | llm_confirmed (0.6) | psp412799-tbl-0002:row2:col1, psp412799-tbl-0002:row2:col2 |
| V2 (L) | `Q64` · V2 | 50.7 | L | 0.0507 | m3 | l | 15.9 | exact (1) | psp412799-tbl-0002:row3:col1, psp412799-tbl-0002:row3:col2 |
| Q (L/h) | `Q30` · Q | 40.6 | L/h | 1.128e-05 | m3/s | l/h | 5.1 | exact (1) | psp412799-tbl-0002:row4:col1, psp412799-tbl-0002:row4:col2 |
| V3 (L) | `Q77` · V3 | 855 | L | 0.855 | m3 | l | 4.9 | exact (1) | psp412799-tbl-0002:row5:col1, psp412799-tbl-0002:row5:col2 |
| KA (1/h) | `Q49` · kabs | 0.724 | 1/h | 0.0002011 | 1/s | 1/h | 5.2 | exact (1) | psp412799-tbl-0002:row6:col1, psp412799-tbl-0002:row6:col2 |
| F1 | `Q40` · Fab | 0.119 |  |  |  |  |  | exact (1) | psp412799-tbl-0002:row8:col1 |
| theta_q900_formulation | `Q900` · theta_q900_formulation | 0.895 |  |  |  |  | 28.5 |  | psp412799-tbl-0002:row11:col1, psp412799-tbl-0002:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ETA CL (CV%)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ETA V2 (CV%)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ETA Q (CV%)' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Log additive' routed out of structural estimates ('Residual variability')
- table section residual_error: 'OFV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Condition number' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'ALAG1 (h)' — extend the ontology if this is a real PK parameter (source ['psp412799-tbl-0002:row7:col1'])
- dropped unlinked row (NIL): 'Race on V2 (proportional)' — extend the ontology if this is a real PK parameter (source ['psp412799-tbl-0002:row10:col1', 'psp412799-tbl-0002:row10:col2'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL (L/h) a' → L/h (from the paper text: "TABLE 2 caption states 'CL, central clearance' (implied context of clearance), and the text describes the parameter as '")
- implicit units: 'KA (1/h)' → 1/h (from the popPK convention: 'Absorption rate constants (KA) are first-order rate constants. The standard unit in population PK is 1/h (or h^-1). A va')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paclitaxel
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (15/20 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag1]` |  | 0.215 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_formulation]` |  | 0.895 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_formulation]` | 0.895 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_race]` |  | 0.696 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2].covariate_forms` | [] | ['linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412799-tbl-0002:row2:col1', 'psp412799-tbl-0002:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412799-tbl-0002:row4:col1', 'psp412799-tbl-0002:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412799-tbl-0002:row6:col1', 'psp412799-tbl-0002:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412799-tbl-0002:row3:col1', 'psp412799-tbl-0002:row3:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['psp412799-tbl-0002:row5:col1', 'psp412799-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 33.7 | ['psp412799-tbl-0002:row2:col1', 'psp412799-tbl-0002:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 33.7 L/h | ['psp412799-tbl-0002:row2:col1', 'psp412799-tbl-0002:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 50.7 L | ['psp412799-tbl-0002:row3:col1', 'psp412799-tbl-0002:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpaclitaxel%5D%20Paclitaxel_He2022_reference&body=Drug%3A%20paclitaxel%0ARecord%3A%20Paclitaxel_He2022_reference%0APaper%3A%20He_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_paclitaxel/Paclitaxel_He2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:21 UTC</sub>
