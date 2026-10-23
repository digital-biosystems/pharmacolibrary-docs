<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Steichert_2025_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Enalapril_Steichert2025_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Faisal2019v2_reference&quot;,&quot;label&quot;:&quot;Faisal_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Faisal2019v2_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enalapril — `Enalapril_Steichert2025v2_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:26 UTC (Needs review), but the paper was screened again on 2026-10-07 05:42 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="enalapril" model-id="Enalapril_Steichert2025v2_reference" status="extracted" stale="true" population="healthy adults and children with heart failure" measured-compound="enalaprilat" parameterization="apparent" topology="2C"></div>

## Citation
Steichert M, Cawello W, Burckhardt BB, Suessenbach FK, Laeer S. Angiotensin II/Angiotensin I Ratio as a New Pharmacodynamic Parameter for Population Modelling in Healthy Adults and Children with Heart Failure Treated with Enalapril. Pharmaceutics 17(10) (2025).
  ·  DOI: [10.3390/pharmaceutics17101345](https://doi.org/10.3390/pharmaceutics17101345)

## Population and dosing

**Population:** healthy adults and children with heart failure · age group mixed.

**Dosing:** 4.2, 7.7, 18.9 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed enalapril, measured enalaprilat.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference.svg" alt="Enalapril_Steichert2025v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| ktr | ktr | 5.31 | 1/h | 25.7 | 72.89 (None% RSE) |
| Mtt | MTT | 1.46 |  | 11.7 | 33.7 (None% RSE) |
| ka | kabs | 1.19 | 1/h | 8.6 |  |
| CL/F | CL/F | 36.39 | L/h | 10.2 | 30.17 (None% RSE) |
| V1/F | V1/F | 223.71 | L | 15.3 | 46.61 (None% RSE) |
| Q/F | Q/F | 6.38 | L/h | 13.7 |  |
| V2/F | V2/F | 108.26 | L | 27.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The enalaprilat two-compartment model record was held back because the peripheral volume V2/F (108.26 L) was never extracted or given a value, and the apparent-parameter assumption (F=1, Fm=1, no molar correction) was judged unacceptable.**

Of the five expected parameters, only four were covered; V2/F, the apparent peripheral volume of distribution of enalaprilat, had no value extracted, so a library placeholder would have been used instead. The model also relies on deviations: a default Tlag instead of an explicit estimate, and bioavailability assumed to be 1 (F=1, Fm=1) without molar correction, so all reported clearances and volumes (CL/F 36.39 L/h, V1/F 223.71 L, Q/F 6.38 L/h, V2/F 108.26 L) are apparent rather than absolute. The deviation check on this apparent-parameter assumption failed adjudication, leading to the needs_review verdict. Extracted — enalaprilat: ktr 5.31 1/h, MTT 1.46, kabs 1.19 1/h, CL/F 36.4 L/h, V1/F 224 L, Q/F 6.38 L/h, V2/F 108 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has enalapril, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ktr | `Q306` · ktr | 5.31 | 1/h | 0.001475 | 1/s | 1/h | 25.7 | exact (1) | pharmaceutics-17-01345-t002:row1:col2, pharmaceutics-17-01345-t002:row1:col3 | 72.89 (None% RSE) |
| Mtt | `Q81` · MTT | 1.46 |  |  |  |  | 11.7 | exact (1) | pharmaceutics-17-01345-t002:row2:col2, pharmaceutics-17-01345-t002:row2:col3 | 33.7 (None% RSE) |
| ka | `Q49` · kabs | 1.19 | 1/h | 0.0003306 | 1/s | 1/h | 8.6 | exact (1) | pharmaceutics-17-01345-t002:row3:col2, pharmaceutics-17-01345-t002:row3:col3 |  |
| CL/F | `Q27` · CL/F | 36.39 | L/h | 1.011e-05 | m3/s | L/h | 10.2 | exact (1) | pharmaceutics-17-01345-t002:row4:col2, pharmaceutics-17-01345-t002:row4:col3 | 30.17 (None% RSE) |
| V1/F | `Q290` · V1/F | 223.71 | L | 0.2237 | m3 | L | 15.3 | exact (1) | pharmaceutics-17-01345-t002:row5:col2, pharmaceutics-17-01345-t002:row5:col3 | 46.61 (None% RSE) |
| Q/F | `Q69` · Q/F | 6.38 | L/h | 1.772e-06 | m3/s | L/h | 13.7 | exact (1) | pharmaceutics-17-01345-t002:row6:col2, pharmaceutics-17-01345-t002:row6:col3 |  |
| V2/F | `Q82` · V2/F | 108.26 | L | 0.1083 | m3 | L | 27.2 | exact (1) | pharmaceutics-17-01345-t002:row7:col2, pharmaceutics-17-01345-t002:row7:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'IIV ktr' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV Mtt' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV V1/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV E0' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV IC50' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability pharmacokinetic model')
- table section residual_error: 'Additive error' routed out of structural estimates ('Residual variability pharmacokinetic model')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability pharmacodynamic model')
- dropped PD-category row 'ke0' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-17-01345-t002:row8:col2', 'pharmaceutics-17-01345-t002:row8:col3'])
- dropped PD-category row 'γ' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-17-01345-t002:row9:col2', 'pharmaceutics-17-01345-t002:row9:col3'])
- dropped PD-category row 'E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-17-01345-t002:row10:col2', 'pharmaceutics-17-01345-t002:row10:col3'])
- dropped PD-category row 'IC50' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-17-01345-t002:row11:col2', 'pharmaceutics-17-01345-t002:row11:col3'])
- implicit units: 'ktr' → 1/h (from the popPK convention: 'ktr is a first-order rate constant (transit rate constant). In population PK modeling, first-order rate constants are co')
- implicit units: 'ka' → 1/h (from the popPK convention: 'ka is an absorption rate constant, which is a first-order rate constant. The standard unit for such parameters in popula')
- implicit units: 'CL/F' → L/h (from the popPK convention: 'CL/F is an apparent clearance. The standard unit for clearance in population PK is L/h. The value 36.39 is consistent wi')
- implicit units: 'V1/F' → L (from the popPK convention: 'V1/F is an apparent volume of distribution. The standard unit for volume in population PK is L. The value 223.71 is cons')
- implicit units: 'Q/F' → L/h (from the popPK convention: 'Q/F is an apparent intercompartmental clearance. The standard unit for intercompartmental clearance in population PK is ')
- implicit units: 'V2/F' → L (from the popPK convention: 'V2/F is an apparent volume of distribution. The standard unit for volume in population PK is L. The value 108.26 is cons')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enalaprilat
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-17-01345-t002:row1:col1 = 'h−1'
- unparsed cell pharmaceutics-17-01345-t002:row3:col1 = 'h−1'
- unparsed cell pharmaceutics-17-01345-t002:row8:col1 = 'h−1'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.889 (16/18 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | enalapril | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | enalaprilat | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-17-01345-t002:row4:col2', 'pharmaceutics-17-01345-t002:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['pharmaceutics-17-01345-t002:row5:col2', 'pharmaceutics-17-01345-t002:row5:col3'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['pharmaceutics-17-01345-t002:row1:col2', 'pharmaceutics-17-01345-t002:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-17-01345-t002:row3:col2', 'pharmaceutics-17-01345-t002:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-17-01345-t002:row6:col2', 'pharmaceutics-17-01345-t002:row6:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['pharmaceutics-17-01345-t002:row7:col2', 'pharmaceutics-17-01345-t002:row7:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 36.4 L/h | ['pharmaceutics-17-01345-t002:row4:col2', 'pharmaceutics-17-01345-t002:row4:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 224 L | ['pharmaceutics-17-01345-t002:row5:col2', 'pharmaceutics-17-01345-t002:row5:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 108 L | ['pharmaceutics-17-01345-t002:row7:col2', 'pharmaceutics-17-01345-t002:row7:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=enalaprilat) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_modelica.zip" download>Enalapril_Steichert2025v2_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_fmi.zip" download>Enalapril_Steichert2025v2_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_matlab.zip" download>Enalapril_Steichert2025v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_matlab_simbio.zip" download>Enalapril_Steichert2025v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_sbml.zip" download>Enalapril_Steichert2025v2_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_cellml.zip" download>Enalapril_Steichert2025v2_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3484 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4.2e-06 | kg |
| input | model | `Cl` | 1.011e-05 | m3/s |
| input | model | `VdPerKg` | 0.003196 | m3/kg |
| input | model | `k12` | 7.922e-06 | 1/s |
| input | model | `k21` | 1.637e-05 | 1/s |
| input | model | `ka` | 0.0003306 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Steichert M, Cawello W, Burckhardt BB, Suessenbach FK, Laeer S. Angiotensin II/Angiotensin I Ratio as a New Pharmacodynamic Parameter for Population Modelling in Healthy Adults and Children with Heart Failure Treated with Enalapril. Pharmaceutics 17(10) (2025). [doi:10.3390/pharmaceutics17101345](https://doi.org/10.3390/pharmaceutics17101345)

**This record:** Pharmacolibrary v26.09, model `Enalapril_Steichert2025v2_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_enalapril/Enalapril_Steichert2025v2_reference>

```bibtex
@misc{pharmacolibrary_EnalaprilSteichert2025v2reference,
  title  = {{Pharmacolibrary model Enalapril_Steichert2025v2_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_enalapril/Enalapril_Steichert2025v2_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics17101345},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 4.2 mg, single dose, first-order absorption (ka 1.19 /h, F 1). Doses in the paper: 4.2, 7.7, 18.9 mg.

<dbs-fmusim paramsurl="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Enalapril_Steichert2025v2_reference_params.json` · controls `Enalapril_Steichert2025v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benalapril%5D%20Enalapril_Steichert2025v2_reference&body=Drug%3A%20enalapril%0ARecord%3A%20Enalapril_Steichert2025v2_reference%0APaper%3A%20Steichert_2025_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_enalapril/Enalapril_Steichert2025v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:42 UTC</sub>
