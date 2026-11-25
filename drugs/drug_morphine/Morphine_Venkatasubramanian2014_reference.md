<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Venkatasubramanian_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_reference&quot;,&quot;label&quot;:&quot;Andersen_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Romberg2004_reference&quot;,&quot;label&quot;:&quot;Romberg_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Romberg2004_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Venkatasubramanian2014_reference&quot;,&quot;label&quot;:&quot;Venkatasubramanian_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Venkatasubramanian2014_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> cross_check_disputed; x1_cross_check.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Venkatasubramanian2014_reference" status="needs_review" stale="false" population="children undergoing outpatient adenotonsillectomy" measured-compound="morphine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Venkatasubramanian R, Fukuda T, Niu J, Mizuno T, Chidambaran V, Vinks AA et al. ABCC3 and OCT1 genotypes influence pharmacokinetics of morphine in children. Pharmacogenomics 15(10):1297–1309 (2014).
  ·  DOI: [10.2217/pgs.14.99](https://doi.org/10.2217/pgs.14.99)

## Population and dosing

**Population:** children undergoing outpatient adenotonsillectomy · condition healthy (adenotonsillectomy) · age group child · n = 220.

## Model

**Structure:** parent–metabolite model: parent with 2 compartment(s); metabolite morphine-6-glucuronide: 1 compartment(s); metabolite morphine-3-glucuronide: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference/Morphine_Venkatasubramanian2014_reference.svg" alt="Morphine_Venkatasubramanian2014_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 1.3 | L/h |
| V1 | V1 | 6.28 | L |
| Q | Q | 2.1 | L/h |
| V2 | V2 | 29.31 | L |
| FCLM3G | CLfm | 0.34 | L/h |
| VM3G § | V | 23 | L |
| CLM3G § | CL | 0.29 | L/h |
| FCLM6G | CLfm | 0.045 | L/h |
| VM6G § | V | 30 | L |
| CLM6G § | CL | 0.097 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.867). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**cross_check_disputed; x1_cross_check.**

Extracted — morphine: CL 1.3 L/h, V1 6.28 L, Q 2.1 L/h, V2 29.3 L; morphine-3-glucuronide: CLfm 0.34 L/h, V 23 L, CL 0.29 L/h; morphine-6-glucuronide: CLfm 0.045 L/h, V 30 L, CL 0.097 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has morphine → morphine-6-glucuronide (metabolism); morphine → morphine-3-glucuronide (metabolism), the second reading morphine → morphine-3-glucuronide (metabolism); morphine → morphine-6-glucuronide (metabolism); it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 1.3 | L/h | 3.611e-07 | m3/s | L/h | exact (1) | T4:row3:col1 |
| V1 | `Q63` · V1 | 6.28 | L | 0.00628 | m3 | L | exact (1) | T4:row4:col1 |
| Q | `Q30` · Q | 2.1 | L/h | 5.833e-07 | m3/s | L/h | exact (1) | T4:row5:col1 |
| V2 | `Q64` · V2 | 29.31 | L | 0.02931 | m3 | L | exact (1) | T4:row6:col1 |
| FCLM3G | `Q370` · CLfm | 0.34 | L/h | 9.444e-08 | m3/s | L/h | exact (1) | T4:row7:col1 |
| VM3G § | `Q61` · V | 23 | L | 0.023 | m3 | L | exact (1) | T4:row8:col1 |
| CLM3G § | `Q22` · CL | 0.29 | L/h | 8.056e-08 | m3/s | L/h | exact (1) | T4:row9:col1 |
| FCLM6G | `Q370` · CLfm | 0.045 | L/h | 1.25e-08 | m3/s | L/h | exact (1) | T4:row10:col1 |
| VM6G § | `Q61` · V | 30 | L | 0.03 | m3 | L | exact (1) | T4:row11:col1 |
| CLM6G § | `Q22` · CL | 0.097 | L/h | 2.694e-08 | m3/s | L/h | exact (1) | T4:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 CL, M' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω 2 FCL, M3G' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω FCL, M6G' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'ε M' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε M3G' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε M6G' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'Kdelay' — extend the ontology if this is a real PK parameter (source ['T4:row13:col1'])
- implicit units: 'CL' → L/h (from the popPK convention: 'CL (clearance) in pediatric population PK studies is conventionally expressed in L/h. The value (1.3) is consistent with')
- implicit units: 'V1' → L (from the popPK convention: 'V1 (central volume of distribution) in population PK is conventionally expressed in L. The value (6.28) is consistent wi')
- implicit units: 'Q' → L/h (from the popPK convention: 'Q (intercompartmental clearance) in population PK is conventionally expressed in L/h. The value (2.1) is consistent with')
- implicit units: 'V2' → L (from the popPK convention: 'V2 (peripheral volume of distribution) in population PK is conventionally expressed in L. The value (29.31) is consisten')
- implicit units: 'FCLM3G' → L/h (from the popPK convention: 'FCLM3G (formation clearance) is a clearance parameter. In population PK, clearances are conventionally expressed in L/h.')
- implicit units: 'VM3G §' → L (from the popPK convention: 'VM3G (volume of distribution for metabolite M3G) is a volume parameter. In population PK, volumes are conventionally exp')
- implicit units: 'CLM3G §' → L/h (from the popPK convention: 'CLM3G (clearance of metabolite M3G) is a clearance parameter. In population PK, clearances are conventionally expressed ')
- implicit units: 'FCLM6G' → L/h (from the popPK convention: 'FCLM6G (formation clearance) is a clearance parameter. In population PK, clearances are conventionally expressed in L/h.')
- implicit units: 'VM6G §' → L (from the popPK convention: 'VM6G (volume of distribution for metabolite M6G) is a volume parameter. In population PK, volumes are conventionally exp')
- implicit units: 'CLM6G §' → L/h (from the popPK convention: 'CLM6G (clearance of metabolite M6G) is a clearance parameter. In population PK, clearances are conventionally expressed ')
- metabolite volume: 'VM6G §' Q63→Q61 for morphine-6-glucuronide — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'VM3G §' Q63→Q61 for morphine-3-glucuronide — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1, 1]
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 10 linked by role; re-tagged morphine→parent ×6, morphine→morphine-3-glucuronide ×5, morphine→morphine-6-glucuronide ×5

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['morphine', 'morphine-6-glucuronide', 'metabolism'], ['morphine', 'morphine-3-glucuronide', 'metabolism']] | [['morphine', 'morphine-3-glucuronide', 'metabolism'], ['morphine', 'morphine-6-glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[kdelay]` |  | 0.069 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row3:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row9:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row12:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T4:row5:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['T4:row7:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['T4:row10:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T4:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T4:row11:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T4:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T4:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.3 | ['T4:row3:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.3 L/h | ['T4:row3:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.29 L/h | ['T4:row9:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.097 L/h | ['T4:row12:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 23 L | ['T4:row8:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 30 L | ['T4:row11:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.28 L | ['T4:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 29.3 L | ['T4:row6:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_metabolite_built[morphine-3-glucuronide] | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.023, 'CL': 8.055555555555555e-08, 'formation': 9.444444444444445e-08} |  | morphine-3-glucuronide = compartment M2 with its own numbers |
| T3_metabolite_built[morphine-6-glucuronide] | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.03, 'CL': 2.6944444444444443e-08, 'formation': 1.25e-08} |  | morphine-6-glucuronide = compartment M1 with its own numbers |
| T3_metabolite_output[morphine-3-glucuronide] | pass |  | 0.0002786 |  | C_M2 (morphine-3-glucuronide) must rise above 0 when the parent is dosed |
| T3_metabolite_output[morphine-6-glucuronide] | pass |  | 3.329e-05 |  | C_M1 (morphine-6-glucuronide) must rise above 0 when the parent is dosed |
| T3_molar_mass[morphine-3-glucuronide] | pass |  | {'MW': 0.28533769999999997, 'MW_m2': 0.4615} |  | formation is molecule-for-molecule |
| T3_molar_mass[morphine-6-glucuronide] | pass |  | {'MW': 0.28533769999999997, 'MW_m1': 0.4615} |  | formation is molecule-for-molecule |
| T3_output_variable | pass | C_central (measured=morphine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 8 scholar param(s) emitted or defaulted | 8 covered |  | all structural parameters accounted for |
| T3_shared_parameters | skipped |  |  |  | parent–metabolite template: every compound has its own slot |
| T3_topology_template | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.867 (13 of 15 compared fields agree, 1 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.867 | cross-check contradicted by a second reader: verdict disputed; agreement 0.867 (13 of 15 compared fields agree, 1 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 30 mg infusion over 10 min into the parent central compartment, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 30 mg parenteral (N02AA01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference/Morphine_Venkatasubramanian2014_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference/Morphine_Venkatasubramanian2014_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Morphine_Venkatasubramanian2014_reference_params.json` · controls `Morphine_Venkatasubramanian2014_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Venkatasubramanian2014_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Venkatasubramanian2014_reference%0APaper%3A%20Venkatasubramanian_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 07:21 UTC</sub>
