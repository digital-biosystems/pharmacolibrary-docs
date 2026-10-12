<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Steichert_2025_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Enalapril_Steichert2025_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Faisal2019v2_reference&quot;,&quot;label&quot;:&quot;Faisal_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Faisal2019v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enalapril — `Enalapril_Steichert2025v2_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889), gpt-oss:120b (not confirmed, agreement 0.947). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The enalaprilat two-compartment model record was held back because the peripheral volume V2/F (108.26 L) was never extracted or given a value, and the apparent-parameter assumption (F=1, Fm=1, no molar correction) was judged unacceptable.**

Of the five expected parameters, only four were covered; V2/F, the apparent peripheral volume of distribution of enalaprilat, had no value extracted, so a library placeholder would have been used instead. The model also relies on deviations: a default Tlag instead of an explicit estimate, and bioavailability assumed to be 1 (F=1, Fm=1) without molar correction, so all reported clearances and volumes (CL/F 36.39 L/h, V1/F 223.71 L, Q/F 6.38 L/h, V2/F 108.26 L) are apparent rather than absolute. The deviation check on this apparent-parameter assumption failed adjudication, leading to the needs_review verdict. Extracted — enalaprilat: ktr 5.31 1/h, MTT 1.46, kabs 1.19 1/h, CL/F 36.4 L/h, V1/F 224 L, Q/F 6.38 L/h, V2/F 108 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has enalapril, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:26:51.401463+00:00) predates the upstream re-run (2026-10-07 05:42:53.823678+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `enalapril`, measured `enalaprilat`.

## Citation
Steichert M et al., Angiotensin II/Angiotensin I Ratio as a…, Pharmaceutics (2025)
  ·  DOI: [10.3390/pharmaceutics17101345](https://doi.org/10.3390/pharmaceutics17101345)

<div class="pk-model-meta" hidden drug="enalapril" model-id="Enalapril_Steichert2025v2_reference" status="extracted" stale="true" population="healthy adults and children with heart failure" measured-compound="enalaprilat" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ktr | `Q306` · ktr | 5.31 | 1/h | 0.001475 | 1/h | 25.7 | exact (1.0) | pharmaceutics-17-01345-t002:row1:col2, pharmaceutics-17-01345-t002:row1:col3 | — | 72.89 (None% RSE) |
| Mtt | `Q81` · MTT | 1.46 | not captured | not captured | not captured | 11.7 | exact (1.0) | pharmaceutics-17-01345-t002:row2:col2, pharmaceutics-17-01345-t002:row2:col3 | — | 33.7 (None% RSE) |
| ka | `Q49` · kabs | 1.19 | 1/h | 0.00033055555555555556 | 1/h | 8.6 | exact (1.0) | pharmaceutics-17-01345-t002:row3:col2, pharmaceutics-17-01345-t002:row3:col3 | — | not captured |
| CL/F | `Q27` · CL/F | 36.39 | L/h | 1.0108333333333333e-05 | L/h | 10.2 | exact (1.0) | pharmaceutics-17-01345-t002:row4:col2, pharmaceutics-17-01345-t002:row4:col3 | — | 30.17 (None% RSE) |
| V1/F | `Q290` · V1/F | 223.71 | L | 0.22371000000000002 | L | 15.3 | exact (1.0) | pharmaceutics-17-01345-t002:row5:col2, pharmaceutics-17-01345-t002:row5:col3 | — | 46.61 (None% RSE) |
| Q/F | `Q69` · Q/F | 6.38 | L/h | 1.7722222222222224e-06 | L/h | 13.7 | exact (1.0) | pharmaceutics-17-01345-t002:row6:col2, pharmaceutics-17-01345-t002:row6:col3 | — | not captured |
| V2/F | `Q82` · V2/F | 108.26 | L | 0.10826000000000001 | L | 27.2 | exact (1.0) | pharmaceutics-17-01345-t002:row7:col2, pharmaceutics-17-01345-t002:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.889 (16/18 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.947 (18/19 fields) | 1 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | enalapril | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | enalaprilat | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl/f].parameter_id` | Q27 | Q351 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row4:col2', 'pharmaceutics-17-01345-t002:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row5:col2', 'pharmaceutics-17-01345-t002:row5:col3'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row1:col2', 'pharmaceutics-17-01345-t002:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row3:col2', 'pharmaceutics-17-01345-t002:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row6:col2', 'pharmaceutics-17-01345-t002:row6:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row7:col2', 'pharmaceutics-17-01345-t002:row7:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 36.4 L/h | not captured | not captured | ['pharmaceutics-17-01345-t002:row4:col2', 'pharmaceutics-17-01345-t002:row4:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 224 L | not captured | not captured | ['pharmaceutics-17-01345-t002:row5:col2', 'pharmaceutics-17-01345-t002:row5:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 108 L | not captured | not captured | ['pharmaceutics-17-01345-t002:row7:col2', 'pharmaceutics-17-01345-t002:row7:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=enalaprilat) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | apparent_assumption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Steichert_2025_2` / `Steichert_2025_2::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025v2_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025v2_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025v2_reference.json`


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference.svg" alt="Enalapril_Steichert2025v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 4.2 mg, single dose, first-order absorption (ka 1.19 /h, F 1). Doses in the paper: 4.2, 7.7, 18.9 mg.

<dbs-fmusim paramsurl="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Enalapril_Steichert2025v2_reference_params.json` · controls `Enalapril_Steichert2025v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:42 UTC</sub>
