<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Ihmsen_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Ihmsen2021_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Ihmsen2021_reference" status="extracted" stale="false" population="adults undergoing cardiac surgery" measured-compound="morphine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ihmsen H, Schüttler J, Jeleazcov C. Pharmacokinetics of Morphine and Morphine-6-Glucuronide During Postoperative Pain Therapy in Cardiac Surgery Patients. European journal of drug metabolism and pharmacokinetics 46(2):249–263 (2021).
  ·  DOI: [10.1007/s13318-020-00663-z](https://doi.org/10.1007/s13318-020-00663-z)

## Population and dosing

**Population:** adults undergoing cardiac surgery · condition postoperative pain after cardiac surgery · age group adult · n = 21.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/min) | CL | 1.35 | L/min | 27 (None% RSE) |
| Q₂ (L/min) | Q | 1.16 | L/min | 56 (None% RSE) |
| Q₃ (L/min) | Q3 | 1.71 | L/min | 51 (None% RSE) |
| V₁ (L) | V1 | 8.1 | L | 33 (None% RSE) |
| V₂ (L) | V2 | 18.4 | L | 0 (None% RSE) |
| V₃ (L) | V3 | 165 | L | 50 (None% RSE) |
| F_M | fm | 0.1 |  |  |
| K_M (1/min) | kfm | 0.037 | 1/min |  |
| CL_M (L/min) | CL | 0.098 | L/min |  |
| Q_2M (L/min) | Q | 0.068 | L/min |  |
| V_1M (L) | V1 | 5.5 | L |  |
| V_2M (L) | V2 | 10.3 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.474). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/min) | `Q22` · CL | 1.35 | L/min | 2.25e-05 | m3/s | l/min | exact (1) | Ihmsen_2021_table_p7_1:row0:col1 | 27 (None% RSE) |
| Q₂ (L/min) | `Q30` · Q | 1.16 | L/min | 1.933e-05 | m3/s | l/min | special_case (0.95) | Ihmsen_2021_table_p7_1:row1:col1 | 56 (None% RSE) |
| Q₃ (L/min) | `Q308` · Q3 | 1.71 | L/min | 2.85e-05 | m3/s | l/min | exact (1) | Ihmsen_2021_table_p7_1:row2:col1 | 51 (None% RSE) |
| V₁ (L) | `Q63` · V1 | 8.1 | L | 0.0081 | m3 | l | exact (1) | Ihmsen_2021_table_p7_1:row3:col1 | 33 (None% RSE) |
| V₂ (L) | `Q64` · V2 | 18.4 | L | 0.0184 | m3 | l | exact (1) | Ihmsen_2021_table_p7_1:row4:col1 | 0 (None% RSE) |
| V₃ (L) | `Q77` · V3 | 165 | L | 0.165 | m3 | l | exact (1) | Ihmsen_2021_table_p7_1:row5:col1 | 50 (None% RSE) |
| F_M | `Q45` · fm | 0.1 |  | 0.1 |  |  | exact (1) | Ihmsen_2021_table_p7_1:row6:col1 |  |
| K_M (1/min) | `Q305` · kfm | 0.037 | 1/min | 0.0006167 | 1/s | 1/min | exact (1) | Ihmsen_2021_table_p7_1:row7:col1 |  |
| CL_M (L/min) | `Q22` · CL | 0.098 | L/min | 1.633e-06 | m3/s | l/min | exact (1) | Ihmsen_2021_table_p7_1:row8:col1 |  |
| Q_2M (L/min) | `Q30` · Q | 0.068 | L/min | 1.133e-06 | m3/s | l/min | exact (1) | Ihmsen_2021_table_p7_1:row9:col1 |  |
| V_1M (L) | `Q63` · V1 | 5.5 | L | 0.0055 | m3 | l | exact (1) | Ihmsen_2021_table_p7_1:row10:col1 |  |
| V_2M (L) | `Q64` · V2 | 10.3 | L | 0.0103 | m3 | l | exact (1) | Ihmsen_2021_table_p7_1:row11:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 4 row(s) → morphine-6-glucuronide (m_suffix 4)
- table section iiv: 'CL (L/min)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'Q₂ (L/min)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'Q₃ (L/min)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'V₁ (L)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'V₂ (L)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'V₃ (L)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'K_M (1/min)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'CL_M (L/min)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'Q_2M (L/min)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'V_1M (L)' routed out of structural estimates ('Model fit BSV (%CV)')
- table section iiv: 'V_2M (L)' routed out of structural estimates ('Model fit BSV (%CV)')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [2]
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 23 linked by role; re-tagged parent→morphine-6-glucuronide ×13
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_0: no_numeric_grid
- final table tab_0: no supported point estimates; targeted recovery unresolved
- table Ihmsen_2021_table_p7_1: unbound_uncertainty
- companion parameter table p7_1 transcribed (78 record(s), model stage 'final')

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.474 (9/19 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[cl_m]` |  | 0.098 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_m]` | 0.098 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f_m]` |  | 0.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f_m]` | 0.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_m]` |  | 0.037 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_m]` | 0.037 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_2m]` | 0.068 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_1m]` | 5.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_2m]` | 10.3 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ihmsen_2021_table_p7_1:row0:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ihmsen_2021_table_p7_1:row8:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Ihmsen_2021_table_p7_1:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Ihmsen_2021_table_p7_1:row9:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Ihmsen_2021_table_p7_1:row7:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Ihmsen_2021_table_p7_1:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Ihmsen_2021_table_p7_1:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Ihmsen_2021_table_p7_1:row10:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Ihmsen_2021_table_p7_1:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Ihmsen_2021_table_p7_1:row11:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Ihmsen_2021_table_p7_1:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.35 | ['Ihmsen_2021_table_p7_1:row0:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 81 L/h | ['Ihmsen_2021_table_p7_1:row0:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.88 L/h | ['Ihmsen_2021_table_p7_1:row8:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.1 L | ['Ihmsen_2021_table_p7_1:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.5 L | ['Ihmsen_2021_table_p7_1:row10:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 18.4 L | ['Ihmsen_2021_table_p7_1:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 10.3 L | ['Ihmsen_2021_table_p7_1:row11:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Ihmsen2021_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Ihmsen2021_reference%0APaper%3A%20Ihmsen_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Ihmsen2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 10:50 UTC</sub>
