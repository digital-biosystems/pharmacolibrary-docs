<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;nadroparin&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/&quot;},{&quot;label&quot;:&quot;Mast_2023 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nadroparin_Piwowarczyk2023_reference&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nadroparin — `Nadroparin_Mast2023_final`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Nadroparin clearance, volume of distribution, and absorption lag time were missing, so library placeholders were used instead of extracted values.

<div class="pk-model-meta" hidden drug="nadroparin" model-id="Nadroparin_Mast2023_final" status="model_quarantined" stale="false" population="patients with renal impairment, obese patients, and controls" measured-compound="anti-Xa activity" parameterization="apparent" topology="1C"></div>

## Citation
Mast L, Peeters MYM, Söhne M, Hackeng CM, Knibbe CAJ, van den Broek MPH. The effect of renal impairment and obesity on anti-Xa peak and trough levels in patients receiving therapeutic doses of nadroparin: a comparison with control patients. European journal of clinical pharmacology 79(11):1537–1547 (2023).
  ·  DOI: [10.1007/s00228-023-03558-5](https://doi.org/10.1007/s00228-023-03558-5)

## Population and dosing

**Population:** patients with renal impairment, obese patients, and controls · condition renal impairment, obesity · age group adult · n = ... [The previous thought process contained a formatting error where the JSON was not closed. I will generate the complete, corrected response now.].

**Dosing:** 3800, 5700, 7800, 9500 IU, sc, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed nadroparin, measured anti-Xa activity.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F = CL/Fpop \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\times \left(\frac{\mathrm{TBW}}{70}\right)\times \left(\frac{\mathrm{CKD}-\mathrm{EPI}}{90}\right)$$\end{document}×TBW70×CKD-EPI90 p | CL/F | 21.0 | L/h | 4.3 |
| V1/F = V1/Fpop \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\times \left(\frac{\mathrm{LBW}}{60}\right)$$\end{document}×LBW60 (mL) | V/F | 8240 | mL | 8.1 |
| Q/F (mL/min) | Q/F | 157 | mL/min | 7.8 |
| Ka = Ktr (min−1) | ktr | 0.0157 | min−1 | 6.3 |
| theta_q319_weight_power | theta_q319_weight_power | 0.46 |  | 1.8 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Nadroparin clearance, volume of distribution, and absorption lag time were missing, so library placeholders were used instead of extracted values.**

The record defined no values for the drug's clearance, volume of distribution, or absorption lag time, resulting in a model held back rather than published with invented numbers. Additionally, the covariate scenarios defined in the record were not simulated, meaning only the base model structure was evaluated. Extracted — nadroparin: CL/F 21 L/h, V/F 8.24e+03 mL, Q/F 157 mL/min, ktr 0.0157 min−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nadroparin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F = CL/Fpop \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\times \left(\frac{\mathrm{TBW}}{70}\right)\times \left(\frac{\mathrm{CKD}-\mathrm{EPI}}{90}\right)$$\end{document}×TBW70×CKD-EPI90 p | `Q27` · CL/F | 21.0 | L/h | 5.833e-06 | m3/s | L/h | 4.3 | llm_confirmed (0.6) | Tab2:row2:col2 |
| V1/F = V1/Fpop \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\times \left(\frac{\mathrm{LBW}}{60}\right)$$\end{document}×LBW60 (mL) | `Q76` · V/F | 8240 | mL | 0.00824 | m3 | ml | 8.1 | llm_confirmed (0.6) | Tab2:row5:col2 |
| Q/F (mL/min) | `Q69` · Q/F | 157 | mL/min | 2.617e-06 | m3/s | ml/min | 7.8 | exact (1) | Tab2:row7:col2 |
| Ka = Ktr (min−1) | `Q306` · ktr | 0.0157 | min−1 | 0.0002617 | 1/s | 1/min | 6.3 | llm_confirmed (0.6) | Tab2:row8:col2 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.46 |  |  |  |  | 1.8 |  | Tab2:row3:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive error in individuals of Diepstraten et al. [19]' routed out of structural estimates ('Residual variability (σ2)')
- table section residual_error: 'Additive error in individuals of current study' routed out of structural estimates ('Residual variability (σ2)')
- column 'final model (rse%) [shrinkage %]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'BSL anti-Xa (IU/mL) in individuals of Diepstraten et al. [19]' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2'])
- dropped unlinked row (NIL): 'BSL (aXa IU/mL) in individuals of current study' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col2'])
- dropped unlinked row (NIL): 'OFV (− 2LL)' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F = CL/Fpop \\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\times \\left(\\frac{\\mathrm{TBW}}{70}\\right)\\times \\left(\\frac{\\mathrm{CKD}-\\mathrm{EPI}}{90}\\right)$$\\end{document}×TBW70×CKD-EPI90 p' → L/h (from the popPK convention: 'The paper states that lean body weight is in kg (Eq. 1 and 2) and eGFR is in mL/min, but does not explicitly state the u')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=anti-Xa activity
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V1/F = V1/Fpop \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\times \left(\frac{\mathrm{LBW}}{60}\right)$$\end{document}×LBW60 (mL)' is the general volume)
- model-stage split: 'final model (rse%) [shrinkage %]' is the final model of Mast_2023 (paper reports 2 stages: base model (rse%) [shrinkage %], final model (rse%) [shrinkage %]); same population, different model-building step
- molar mass: no plausible PubChem entry for 'anti-Xa activity' ('no full name in the paper') — left in mass units
- molar mass: none found for 'nadroparin' — its concentrations stay mass-only
- molar mass: none found for 'anti-Xa activity' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'anti-Xa activity', not nadroparin — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '21.0 (19.0, 23.2)'
- unparsed cell Tab2:row3:col3 = '0.45 (0.25, 0.64)'
- unparsed cell Tab2:row5:col3 = '8289 (7482, 9195)'
- unparsed cell Tab2:row7:col3 = '155 (124, 204)'
- unparsed cell Tab2:row8:col3 = '0.0156 (0.0139, 0.0176)'
- unparsed cell Tab2:row9:col3 = '0.0227 (0.0161, 0.0299)'
- unparsed cell Tab2:row11:col3 = '-2095.450 (-2179.234, -2020.371)'
- unparsed cell Tab2:row16:col1 = '0.9 (42) [41]'
- unparsed cell Tab2:row16:col2 = '0.763 (42) [39]'
- unparsed cell Tab2:row18:col3 = '0.00044 (0.00035, 0.00056)'
- unparsed cell Tab2:row19:col3 = '0.0229 (0.0141, 0.0370)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (12/15 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bsl anti-xa (iu/ml) in individuals of diepstraten et al. [19]]` |  | 0.0226 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nadroparin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | anti-Xa activity | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['Tab2:row8:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row7:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab2:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 21 L/h | ['Tab2:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 8.24 L | ['Tab2:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nadroparin/Nadroparin_Mast2023_final/Nadroparin_Mast2023_final_matlab.zip" download>Nadroparin_Mast2023_final_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nadroparin/Nadroparin_Mast2023_final/Nadroparin_Mast2023_final_matlab_simbio.zip" download>Nadroparin_Mast2023_final_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nadroparin/Nadroparin_Mast2023_final/Nadroparin_Mast2023_final_sbml.zip" download>Nadroparin_Mast2023_final_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nadroparin/Nadroparin_Mast2023_final/Nadroparin_Mast2023_final_cellml.zip" download>Nadroparin_Mast2023_final_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Mast L, Peeters MYM, Söhne M, Hackeng CM, Knibbe CAJ, van den Broek MPH. The effect of renal impairment and obesity on anti-Xa peak and trough levels in patients receiving therapeutic doses of nadroparin: a comparison with control patients. European journal of clinical pharmacology 79(11):1537–1547 (2023). [doi:10.1007/s00228-023-03558-5](https://doi.org/10.1007/s00228-023-03558-5)

**This record:** Pharmacolibrary v26.09, model `Nadroparin_Mast2023_final`. <https://pharmacolibrary.github.io/#/drugs/drug_nadroparin/Nadroparin_Mast2023_final>

```bibtex
@misc{pharmacolibrary_NadroparinMast2023final,
  title  = {{Pharmacolibrary model Nadroparin_Mast2023_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_nadroparin/Nadroparin_Mast2023_final},
  note   = {Parameters from doi:10.1007/s00228-023-03558-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnadroparin%5D%20Nadroparin_Mast2023_final&body=Drug%3A%20nadroparin%0ARecord%3A%20Nadroparin_Mast2023_final%0APaper%3A%20Mast_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nadroparin/Nadroparin_Mast2023_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:12 UTC</sub>
