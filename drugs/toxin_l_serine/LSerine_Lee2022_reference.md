<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Serine&quot;,&quot;href&quot;:&quot;drugs/toxin_l_serine/&quot;},{&quot;label&quot;:&quot;Lee_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;LSerine_Han2025_reference&quot;,&quot;label&quot;:&quot;Han_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_l_serine/LSerine_Han2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LSerine_Schouten2021_reference&quot;,&quot;label&quot;:&quot;Schouten_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_l_serine/LSerine_Schouten2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# L-Serine — `LSerine_Lee2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> L-serine's clearance, volume of distribution, lag time, and transfer rate were left as library placeholders, preventing publication.

<div class="pk-model-meta" hidden drug="L-Serine" model-id="LSerine_Lee2022_reference" status="model_quarantined" stale="false" population="healthy Korean subjects" measured-compound="L-Serine (AST-001)" parameterization="apparent" topology="2C"></div>

## Citation
Lee S, Hwang SK, Nam HS, Cho JS, Chung JY. Population Pharmacokinetic Model of AST-001, L-Isomer of Serine, Combining Endogenous Production and Exogenous Administration in Healthy Subjects. Frontiers in pharmacology 13:891227 (2022).
  ·  DOI: [10.3389/fphar.2022.891227](https://doi.org/10.3389/fphar.2022.891227)

## Population and dosing

**Population:** healthy Korean subjects · condition healthy · age group mixed · n = 24.

**Dosing:** 10000, 15000, 20000, 30000 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| V1/F (L) | V1/F | 68.4 | L | 6.7 | 29.0 (13.1% RSE) |
| CL/F (L/h) | CL/F | 22.9 | L/h | 5.8 | 22.2 (23.9% RSE) |
| V2/F (L) | V2/F | 196 | L | 11.6 |  |
| Q/F (L/h) | Q/F | 16.4 | L/h | 7.3 |  |
| D1 (h) | D1 | 1.26 | h | 7.6 | 38.0 (13.6% RSE) |
| R1 (g/h) | R1 | 0.287 | g/h | 6.2 | 18.0 (23.6% RSE) |
| ka, 1/h | kabs | 0.67 | 1/h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**L-serine's clearance, volume of distribution, lag time, and transfer rate were left as library placeholders, preventing publication.**

The record lists only apparent parameters like CL/F, omitting the true clearance, volume of distribution, and absorption lag time. Consequently, these core pharmacokinetic variables had no extracted values, so the model builder relied on generic defaults rather than explicit estimates. This absence of specific estimates for L-serine triggered the quarantine. Extracted — l serine: V1/F 68.4 L, CL/F 22.9 L/h, V2/F 196 L, Q/F 16.4 L/h, D1 1.26 h, R1 0.287 g/h; L-Serine (AST-001): kabs 0.67 1/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1/F (L) | `Q290` · V1/F | 68.4 | L | 0.0684 | m3 | l | 6.7 | exact (1) | T1:row2:col1 | 29.0 (13.1% RSE) |
| CL/F (L/h) | `Q27` · CL/F | 22.9 | L/h | 6.361e-06 | m3/s | l/h | 5.8 | exact (1) | T1:row3:col1 | 22.2 (23.9% RSE) |
| V2/F (L) | `Q82` · V2/F | 196 | L | 0.196 | m3 | l | 11.6 | exact (1) | T1:row4:col1 |  |
| Q/F (L/h) | `Q69` · Q/F | 16.4 | L/h | 4.556e-06 | m3/s | l/h | 7.3 | exact (1) | T1:row5:col1 |  |
| D1 (h) | `Q310` · D1 | 1.26 | h | 4536 | s | h | 7.6 | exact (1) | T1:row6:col1 | 38.0 (13.6% RSE) |
| R1 (g/h) | `Q307` · R1 | 0.287 | g/h | 7.972e-08 | kg/s | g/h | 6.2 | exact (1) | T1:row7:col1 | 18.0 (23.6% RSE) |
| ka, 1/h | `Q49` · kabs | 0.67 | 1/h | 0.0001861 | 1/s | 1/h |  | review_gapfill (0.7) | Kosinsky_2022:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'V1/F' routed out of structural estimates ('Inter-individual variability b')
- table section iiv: 'CL/F' routed out of structural estimates ('Inter-individual variability b')
- table section iiv: 'D1' routed out of structural estimates ('Inter-individual variability b')
- table section iiv: 'R1' routed out of structural estimates ('Inter-individual variability b')
- table section iiv: 'Covariance between V1/F and CL/F c' routed out of structural estimates ('Inter-individual variability b')
- table section residual_error: 'Proportional residual error d' routed out of structural estimates ('Residual Error')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=L-Serine (AST-001)
- gap-filled Q49 (kabs) from Kosinsky_2022's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T1:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T1:row2:col1'] |
| C5_dimension_Q307 | pass | [mass] / [time] |  | ['T1:row7:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['T1:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kosinsky_2022:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T1:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T1:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.9 L/h | ['T1:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 68.4 L | ['T1:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 196 L | ['T1:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 225.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 179.2 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 20 |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_l_serine/LSerine_Lee2022_reference/LSerine_Lee2022_reference_matlab.zip" download>LSerine_Lee2022_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_l_serine/LSerine_Lee2022_reference/LSerine_Lee2022_reference_matlab_simbio.zip" download>LSerine_Lee2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_l_serine/LSerine_Lee2022_reference/LSerine_Lee2022_reference_sbml.zip" download>LSerine_Lee2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_l_serine/LSerine_Lee2022_reference/LSerine_Lee2022_reference_cellml.zip" download>LSerine_Lee2022_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Lee S, Hwang SK, Nam HS, Cho JS, Chung JY. Population Pharmacokinetic Model of AST-001, L-Isomer of Serine, Combining Endogenous Production and Exogenous Administration in Healthy Subjects. Frontiers in pharmacology 13:891227 (2022). [doi:10.3389/fphar.2022.891227](https://doi.org/10.3389/fphar.2022.891227)

**This record:** Pharmacolibrary, model `LSerine_Lee2022_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_l_serine/LSerine_Lee2022_reference>

```bibtex
@misc{pharmacolibrary_LSerineLee2022reference,
  title  = {{Pharmacolibrary model LSerine_Lee2022_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_l_serine/LSerine_Lee2022_reference},
  note   = {Parameters from doi:10.3389/fphar.2022.891227},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_serine%5D%20LSerine_Lee2022_reference&body=Drug%3A%20l_serine%0ARecord%3A%20LSerine_Lee2022_reference%0APaper%3A%20Lee_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_serine/LSerine_Lee2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 12:48 UTC</sub>
