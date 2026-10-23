<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;iloperidone&quot;,&quot;href&quot;:&quot;drugs/drug_iloperidone/&quot;},{&quot;label&quot;:&quot;Pei_2016 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iloperidone — `Iloperidone_Pei2016_estimate`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The iloperidone parent–metabolite model was held back because the parent's elimination clearance had no extracted value and a library placeholder was used instead, so the record was not published with an invented number.

<div class="pk-model-meta" hidden drug="iloperidone" model-id="Iloperidone_Pei2016_estimate" status="model_quarantined" stale="false" population="Chinese schizophrenia patients" measured-compound="iloperidone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Pei Q, Huang L, Huang J, Gu JK, Kuang Y, Zuo XC et al. Influences of CYP2D6. Acta pharmacologica Sinica 37(11):1499–1508 (2016).
  ·  DOI: [10.1038/aps.2016.96](https://doi.org/10.1038/aps.2016.96)

## Population and dosing

**Population:** Chinese schizophrenia patients · condition schizophrenia · age group adult · n = 70.

**Dosing:** 12, 16, 20, 24 mg/d, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 3 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K a (h -1 ) | kabs | 2.26 | h -1 |
| K 20 (h -1 ) | kel | 0.067 | h -1 |
| K 30 (h -1 ) | kel | 0.160 | h -1 |
| K 40 (h -1 ) | kel | 0.106 | h -1 |
| V 2 (L) | V1 | 679 | L |
| V 3 (L) | V | 10 | L |
| V 4 (L) | V | 10 | L |
| K 23 (h -1 ) | kfm | 0.00451 | h -1 |
| K 24 (h -1 ) | kfm | 0.00649 | h -1 |
| cyp2d6_10_c_t_on_k_24 | cyp2d6_10_c_t_on_k_24 | 0.693 |  |
| cyp2d6_10_t_t_on_k_24 | cyp2d6_10_t_t_on_k_24 | 0.492 |  |
| cyp2d6_10_t_t_on_k_23 | cyp2d6_10_t_t_on_k_23 | 1.34 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The iloperidone parent–metabolite model was held back because the parent's elimination clearance had no extracted value and a library placeholder was used instead, so the record was not published with an invented number.**

The record does give an elimination rate constant for iloperidone (K20 = 0.067 h⁻¹), but the elimination clearance itself was left with no value, so a placeholder stood in. Parameter coverage reached 6 of 7 expected parameters, with kabs (2.26 h⁻¹) neither emitted nor defaulted. The model structure also mismatched the required parent–metabolite central structure, and although covariate effects on the metabolite formation constants K23 and K24 (e.g., 1.34 and 0.693) were defined, only the reference individual was simulated, so the covariate scenarios were not exercised. Extracted — iloperidone: kabs 2.26 h -1, kel 0.067 h -1, V1 679 L; M1 (P-88): kel 0.16 h -1, V 10 L, kfm 0.00451 h -1; M2 (P-95): kel 0.106 h -1, V 10 L, kfm 0.00649 h -1.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K a (h -1 ) | `Q49` · kabs | 2.26 | h -1 | 0.0006278 | 1/s | 1/h | exact (1) | tab_2:row1:col1 |
| K 20 (h -1 ) | `Q47` · kel | 0.067 | h -1 | 1.861e-05 | 1/s | 1/h | exact (1) | tab_2:row2:col1 |
| K 30 (h -1 ) | `Q47` · kel | 0.160 | h -1 | 4.444e-05 | 1/s | 1/h | exact (1) | tab_2:row3:col1 |
| K 40 (h -1 ) | `Q47` · kel | 0.106 | h -1 | 2.944e-05 | 1/s | 1/h | exact (1) | tab_2:row4:col1 |
| V 2 (L) | `Q63` · V1 | 679 | L | 0.679 | m3 | l | exact (1) | tab_2:row5:col1 |
| V 3 (L) | `Q61` · V | 10 | L | 0.01 | m3 | l | exact (1) | tab_2:row6:col1 |
| V 4 (L) | `Q61` · V | 10 | L | 0.01 | m3 | l | exact (1) | tab_2:row7:col1 |
| K 23 (h -1 ) | `Q305` · kfm | 0.00451 | h -1 | 1.253e-06 | 1/s | 1/h | exact (1) | tab_2:row8:col1 |
| K 24 (h -1 ) | `Q305` · kfm | 0.00649 | h -1 | 1.803e-06 | 1/s | 1/h | exact (1) | tab_2:row9:col1 |
| cyp2d6_10_c_t_on_k_24 | `Q900` · cyp2d6_10_c_t_on_k_24 | 0.693 |  |  |  |  |  | tab_2:row10:col1 |
| cyp2d6_10_t_t_on_k_24 | `Q900` · cyp2d6_10_t_t_on_k_24 | 0.492 |  |  |  |  |  | tab_2:row11:col1 |
| cyp2d6_10_t_t_on_k_23 | `Q900` · cyp2d6_10_t_t_on_k_23 | 1.34 |  |  |  |  |  | tab_2:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'K 20 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'V 2 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'K 23 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'K 24 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iov: 'K 20' routed out of structural estimates ('Inter-occasion variability')
- table section residual_error: 'CV 1 (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'CV 2 (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'CV 3 (%)' routed out of structural estimates ('Residual variability')
- covariate level 'CYP2D6*10 C/T on K 24' → Q900:cyp2d6_10_c_t_on_k_24 = 0.693 (linear_fractional on the model)
- covariate level 'CYP2D6*10 T/T on K 24' → Q900:cyp2d6_10_t_t_on_k_24 = 0.492 (linear_fractional on the model)
- covariate level 'CYP2D6*10 T/T on K 23' → Q900:cyp2d6_10_t_t_on_k_23 = 1.34 (linear_fractional on the model)
- metabolite volume: 'V 3 (L)' Q63→Q61 for M1 (P-88) — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'V 4 (L)' Q63→Q61 for M2 (P-95) — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V 2 (L)); Q61 (V 3 (L)); Q61 (V 4 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iloperidone
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1, 1]
- population split: 'estimate' subgroup of Pei_2016 (paper reports 2 populations: estimate, median)
- row roles: 2 per-group rows of M2 (P-95) covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 27 linked by role; re-tagged parent→M1 (P-88) ×21, parent→M2 (P-95) ×25
- molar mass: no plausible PubChem entry for 'M2 (P-95)' ('P-95') — left in mass units
- molar mass: none found for 'M2 (P-95)' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (16/16 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['tab_2:row8:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['tab_2:row9:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_2:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_2:row3:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_2:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_2:row6:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_2:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_2:row5:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 10 L | ['tab_2:row6:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 10 L | ['tab_2:row7:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 679 L | ['tab_2:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | fail | 7 scholar param(s) emitted or defaulted | 6 covered | neither emitted nor in defaulted[]: ['kabs'] |
| T3_rate_constant_conversion |  | pass | K23 (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template |  | fail | parent_metabolite_central → PK_3M_9C* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biloperidone%5D%20Iloperidone_Pei2016_estimate&body=Drug%3A%20iloperidone%0ARecord%3A%20Iloperidone_Pei2016_estimate%0APaper%3A%20Pei_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iloperidone/Iloperidone_Pei2016_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:48 UTC</sub>
