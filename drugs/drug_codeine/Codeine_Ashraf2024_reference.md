<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/&quot;},{&quot;label&quot;:&quot;Ashraf_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Guay1987_reference&quot;,&quot;label&quot;:&quot;Guay_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Guay1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Thigpen2019v2_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_KuKanich2016_reference&quot;,&quot;label&quot;:&quot;KuKanich_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_KuKanich2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# codeine — `Codeine_Ashraf2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record lacks codeine absorption and clearance values, and the model assumes unit bioavailability without molar correction.

<div class="pk-model-meta" hidden drug="codeine" model-id="Codeine_Ashraf2024_reference" status="needs_review" stale="false" population="ambulatory surgical patients" measured-compound="codeine" parameterization="apparent" topology="general_linear"></div>

## Citation
Ashraf MW, Poikola S, Neuvonen M, Kiiski JI, Kontinen VK, Olkkola KT et al. Population Pharmacokinetic Quantification of CYP2D6 Activity in Codeine Metabolism in Ambulatory Surgical Patients for Model-Informed Precision Dosing. Clinical pharmacokinetics 63(11):1547–1560 (2024).
  ·  DOI: [10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9)

## Population and dosing

**Population:** ambulatory surgical patients · condition ambulatory surgery · age group adult · n = 997.

**Dosing:** 60 mg, oral, single.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka,cod | kabs | 8.74 | h-1 |
| CLcod | CL/F | 110 | L/h |
| Vc,cod | V | 427.5 | L |
| Fcod | equation variable | 0.84 |  |
| CLmor | CL | 357.5 | L/h |
| Vc,mor | V | 22.8 | L |
| fmor | fm | 0.16 |  |
| CLC6G | CL | 7.96 | L/h |
| Vc,C6G | V | 5.36 | L |
| CLM3G | CL | 9.45 | L/h |
| Vc,M3G | V | 8.47 | L |
| εmor | equation variable | 0.149 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record lacks codeine absorption and clearance values, and the model assumes unit bioavailability without molar correction.**

The extracted codeine absorption rate constant (8.74 h-1) and oral clearance (110 L/h) were not included in the final parameter set. Consequently, a library placeholder would have been used for these missing values instead of the reported data. The model builder also assumed bioavailability and metabolic fractions to be 1, treating the parameters as apparent rather than intrinsic. Extracted — codeine: kabs 8.74 h-1, CL/F 110 L/h, V 428 L; morphine: CL 358 L/h, V 22.8 L, fm 0.16; codeine-6-glucuronide: CL 7.96 L/h, V 5.36 L; morphine-3-glucuronide: CL 9.45 L/h, V 8.47 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka,cod | `Q49` · kabs | 8.74 | h-1 | 0.002428 | 1/s | 1/h | boundary_llm_dim_refused (0.8) | Tab2:row2:col2 |
| CLcod | `Q27` · CL/F | 110 | L/h | 3.056e-05 | m3/s | l/h | llm (0.6) | Tab2:row3:col2 |
| Vc,cod | `Q61` · V | 427.5 | L | 0.4275 | m3 | l | llm_corrected (0.6) | Tab2:row4:col2 |
| Fcod | `Q900` · equation variable | 0.84 |  |  |  |  | llm (0.6) | Tab2:row5:col2 |
| CLmor | `Q22` · CL | 357.5 | L/h | 9.931e-05 | m3/s | l/h | exact (1) | Tab2:row6:col2 |
| Vc,mor | `Q61` · V | 22.8 | L | 0.0228 | m3 | l | exact (1) | Tab2:row7:col2 |
| fmor | `Q45` · fm | 0.16 |  |  |  |  | exact (1) | Tab2:row8:col2 |
| CLC6G | `Q22` · CL | 7.96 | L/h | 2.211e-06 | m3/s | l/h | exact (1) | Tab2:row10:col2 |
| Vc,C6G | `Q61` · V | 5.36 | L | 0.00536 | m3 | l | exact (1) | Tab2:row11:col2 |
| CLM3G | `Q22` · CL | 9.45 | L/h | 2.625e-06 | m3/s | l/h | exact (1) | Tab2:row12:col2 |
| Vc,M3G | `Q61` · V | 8.47 | L | 0.00847 | m3 | l | exact (1) | Tab2:row13:col2 |
| εmor | `Q900` · equation variable | 0.149 |  |  |  |  | llm (0.6) | Tab2:row20:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'GENeff' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2'])
- dropped duplicate Q49 ('ηka,cod', value '3.75') — already have one for this compound
- dropped unlinked row (NIL): 'ηVc,cod' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col2'])
- dropped unlinked row (NIL): 'ηFcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col2'])
- dropped unlinked row (NIL): 'ηCLmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col2'])
- dropped unlinked row (NIL): 'ηRmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col2'])
- dropped unlinked row (NIL): 'εcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col2'])
- dropped unlinked row (NIL): 'εC6G' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2'])
- dropped unlinked row (NIL): 'εM3G' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- metabolite volume: 'Vc,mor' Q63→Q61 for morphine — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'Vc,C6G' Q63→Q61 for codeine-6-glucuronide — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'Vc,M3G' Q63→Q61 for morphine-3-glucuronide — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=codeine
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 10 linked by role; re-tagged codeine→parent ×8, codeine→morphine ×7, codeine→codeine-6-glucuronide ×3, codeine→morphine-3-glucuronide ×3
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 2 PubChem candidate(s) is 'morphine-3-glucuronide' (LLM) — left in mass units
- molar mass: none found for 'morphine-3-glucuronide' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.7 (14/20 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[clcod].parameter_id` | Q27 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fcod].parameter_id` | Q900 | Q40 | mismatch |
| `gpt-oss-120b` | `parameters[vc,cod].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[εmor]` | 0.149 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row6:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row10:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row12:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row11:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row13:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 358 L/h | ['Tab2:row6:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.96 L/h | ['Tab2:row10:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.45 L/h | ['Tab2:row12:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 110 L/h | ['Tab2:row3:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 428 L | ['Tab2:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 22.8 L | ['Tab2:row7:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.36 L | ['Tab2:row11:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.47 L | ['Tab2:row13:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=codeine) | C_central | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 9 scholar param(s) emitted or defaulted | 7 covered | neither emitted nor in defaulted[]: ['kabs', 'CL/F'] |
| T3_shared_parameters | pass | 4 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations | fail |  | deviation_id=apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_codeine/Codeine_Ashraf2024_reference/Codeine_Ashraf2024_reference_modelica.zip" download>Codeine_Ashraf2024_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_codeine/Codeine_Ashraf2024_reference/Codeine_Ashraf2024_reference_matlab.zip" download>Codeine_Ashraf2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_codeine/Codeine_Ashraf2024_reference/Codeine_Ashraf2024_reference_matlab_simbio.zip" download>Codeine_Ashraf2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_codeine/Codeine_Ashraf2024_reference/Codeine_Ashraf2024_reference_sbml.zip" download>Codeine_Ashraf2024_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_codeine/Codeine_Ashraf2024_reference/Codeine_Ashraf2024_reference_cellml.zip" download>Codeine_Ashraf2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Ashraf MW, Poikola S, Neuvonen M, Kiiski JI, Kontinen VK, Olkkola KT et al. Population Pharmacokinetic Quantification of CYP2D6 Activity in Codeine Metabolism in Ambulatory Surgical Patients for Model-Informed Precision Dosing. Clinical pharmacokinetics 63(11):1547–1560 (2024). [doi:10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9)

**This record:** Pharmacolibrary, model `Codeine_Ashraf2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_codeine/Codeine_Ashraf2024_reference>

```bibtex
@misc{pharmacolibrary_CodeineAshraf2024reference,
  title  = {{Pharmacolibrary model Codeine_Ashraf2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_codeine/Codeine_Ashraf2024_reference},
  note   = {Parameters from doi:10.1007/s40262-024-01433-9},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcodeine%5D%20Codeine_Ashraf2024_reference&body=Drug%3A%20codeine%0ARecord%3A%20Codeine_Ashraf2024_reference%0APaper%3A%20Ashraf_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_codeine/Codeine_Ashraf2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 19:30 UTC</sub>
