<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;canrenone&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/&quot;},{&quot;label&quot;:&quot;Lass_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canrenone_Suyagh2012_final_pharmacokinetic_model&quot;,&quot;label&quot;:&quot;Suyagh_2012_final_pharmacokinetic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canrenone_Suyagh2012_median&quot;,&quot;label&quot;:&quot;Suyagh_2012_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2012_median.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canrenone_Suyagh2013_reference&quot;,&quot;label&quot;:&quot;Suyagh_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canrenone — `Canrenone_Lass2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Canrenone's elimination clearance had no extracted value, so a placeholder was used and the model was quarantined.

<div class="pk-model-meta" hidden drug="canrenone" model-id="Canrenone_Lass2024_reference" status="model_quarantined" stale="false" population="infants with chronic heart failure, ascites and/or oedema" measured-compound="spironolactone" parameterization="apparent" topology="general_linear"></div>

## Citation
Lass J, Leroux S, Kõrgvee LT, Varendi H, Kipper K, Takkis K et al. Pharmacokinetics of oral spironolactone in infants up to 2 years of age. European journal of clinical pharmacology 80(2):239–248 (2024).
  ·  DOI: [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w)

## Population and dosing

**Population:** infants with chronic heart failure, ascites and/or oedema · condition chronic heart failure, ascites and/or oedema · age group infant · n = &gt;=23.

**Dosing:** 70 mg, oral, single.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, CLSP/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka | kabs | 17.5 | 1/h |  |
| VSP/F | V/F | 172.9 | L | 26.1 |
| fmet | fm | 0.14 |  | 8.6 |
| fmetCAN | fm | 13.4 |  | 20.8 |
| CLTMS = Θ5 x (CW/4300) 0.75 | CL | 0.98 | L/h | 24 |
| VTMS=VCAN | equation variable | 115 |  |  |
| CLSP/F | CLSP/F | 51.1 | L/h | 22.6 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Canrenone's elimination clearance had no extracted value, so a placeholder was used and the model was quarantined.**

The record lists a clearance parameter for 7 alpha-thiomethylspironolactone but provides no elimination clearance value for canrenone. Consequently, a library placeholder was used for canrenone's elimination clearance, causing the model to be held back. The second reader also disagreed on the presence of specific parameter values for the metabolite compartments. Extracted — canrenone: kabs 17.5 1/h, V/F 173 L, fm 0.14, fm 13.4; 7 alpha-thiomethylspironolactone: CL 0.98 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has spironolactone, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 17.5 | 1/h | 0.004861 | 1/s | 1/h |  | exact (1) | Lass_2024_table_2:row1:col1, Lass_2024_table_2:row1:col2 |
| VSP/F | `Q76` · V/F | 172.9 | L | 0.1729 | m3 | L | 26.1 | llm (0.6) | Lass_2024_table_2:row2:col1 |
| fmet | `Q45` · fm | 0.14 |  |  |  |  | 8.6 | llm (0.6) | Lass_2024_table_2:row9:col1, Lass_2024_table_2:row9:col2 |
| fmetCAN | `Q45` · fm | 13.4 |  |  |  |  | 20.8 | exact (1) | Lass_2024_table_2:row10:col1 |
| CLTMS = Θ5 x (CW/4300) 0.75 | `Q22` · CL | 0.98 | L/h | 2.722e-07 | m3/s | L/h | 24 | exact (1) | Lass_2024_table_2:row15:col1, Lass_2024_table_2:row15:col2 |
| VTMS=VCAN | `Q900` · equation variable | 115 |  |  |  |  |  | llm (0.6) | Lass_2024_table_3:row0:col1, Lass_2024_table_3:row0:col2 |
| CLSP/F | `Q900` · CLSP/F | 51.1 | L/h | 1.419e-05 | m3/s |  | 22.6 |  | Lass_2024_table_2:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CLSP/F | Q27 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'VSP/F' routed out of structural estimates ('Inter-individual variability (%)')
- table section iiv: 'CLSP/F' routed out of structural estimates ('Inter-individual variability (%)')
- table section iiv: 'FmetCAN' routed out of structural estimates ('Inter-individual variability (%)')
- table section residual_error: 'Proportional error for spironolactone' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Additive error for spironolactone' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Proportional error for TMS' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Additive error for TMS' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Proportional error for CAN' routed out of structural estimates ('Residual variability (%)')
- dropped unlinked row (NIL): 'Θ1' — extend the ontology if this is a real PK parameter (source ['Lass_2024_table_2:row4:col2'])
- dropped unlinked row (NIL): 'Θ2' — extend the ontology if this is a real PK parameter (source ['Lass_2024_table_2:row7:col2'])
- dropped unlinked row (NIL): 'Θ3' — extend the ontology if this is a real PK parameter (source ['Lass_2024_table_2:row8:col1', 'Lass_2024_table_2:row8:col2'])
- dropped unlinked row (NIL): 'Θ4' — extend the ontology if this is a real PK parameter (source ['Lass_2024_table_2:row13:col1', 'Lass_2024_table_2:row13:col2'])
- dropped duplicate Q22 ('Θ5', value '0.95') — already have one for this compound
- dropped duplicate Q22 ('CLTMS', value '99') — already have one for this compound
- implicit units: 'Ka' → 1/h (from the paper text: "Table 1 footnote states: 'Ka, first order absorption rate constant (h-1)'")
- implicit units: 'VSP/F' → L (from the paper text: "Table 1 footnote states: 'VSP/F, apparent volume of distribution for spironolactone (L)'")
- implicit units: 'CLSP/F' → L/h (from the paper text: "Table 1 footnote states: 'CLSP/F, apparent total clearance for spironolactone (L/h)'")
- implicit units: 'CLTMS = Θ5 x (CW/4300) 0.75' → L/h (from the paper text: "Table 1 footnote states: 'CLTMS, Clearance for TMS (L/h)'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=spironolactone
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- bound model equation to Q27 (CL/F): CLSP/F = Θ2 x (CW/4300)^0.75 x (PNA/60) Θ3
- model equation 'CLTMS = Θ5 x (CW/4300)^0.75' not bound — neither LHS nor base term 'x' linked to an ontology parameter
- model equation 'CLCAN = Θ6 x (CW/4300)^0.75' not bound — neither LHS nor base term 'x' linked to an ontology parameter
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CLSP/F'; equation kept verbatim
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 18 linked by role; re-tagged parent→canrenone ×5, parent→7 alpha-thiomethylspironolactone ×11
- review gap-fill skipped: this record measures 'spironolactone', not canrenone — the review values are the parent's

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Lass_2024
- final table tab_0: no readable grid (GROBID mangled)
- companion parameter table 2 transcribed (22 record(s))
- companion parameter table 3 transcribed (14 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation CLSP/F = Θ2 x (CW/4300)^0.75 x (PNA/60) Θ3
- captured model equation CLTMS = Θ5 x (CW/4300)^0.75
- captured model equation CLCAN = Θ6 x (CW/4300)^0.75

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (4/20 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['spironolactone', '7 alpha-thiomethylspironolactone', 'metabolism'], ['spironolactone', 'canrenone', 'metabolism']] | [['spironolactone', '7-alpha-thiomethylspironolactone', 'metabolism'], ['spironolactone', 'canrenone', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[clsp/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clsp/f].parameter_id` | Q900 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[clsp/f].value` | 51.1 |  | mismatch |
| `gpt-oss-120b` | `parameters[cltms = θ5 x (cw/4300) 0.75]` | 0.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cltms = θ5 x (cw/4300) 0.75]` |  | 0.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fmet]` | 0.14 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fmet]` |  | 0.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 17.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 17.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vsp/f]` | 172.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vsp/f]` |  | 172.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vtms=vcan]` | 115 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vtms=vcan]` |  | 115 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | spironolactone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | spironolactone | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lass_2024_table_2:row15:col1', 'Lass_2024_table_2:row15:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Lass_2024_table_2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lass_2024_table_2:row1:col1', 'Lass_2024_table_2:row1:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Lass_2024_table_2:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.98 L/h | ['Lass_2024_table_2:row15:col1', 'Lass_2024_table_2:row15:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 173 L | ['Lass_2024_table_2:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 3 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['kabs'] |
| T3_shared_parameters |  | pass | 1 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 1.4 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.4 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 2.1 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.1 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcanrenone%5D%20Canrenone_Lass2024_reference&body=Drug%3A%20canrenone%0ARecord%3A%20Canrenone_Lass2024_reference%0APaper%3A%20Lass_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_canrenone/Canrenone_Lass2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 17:47 UTC</sub>
