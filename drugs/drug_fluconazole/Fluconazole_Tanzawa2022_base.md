<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;fluconazole&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/&quot;},{&quot;label&quot;:&quot;Tanzawa_2022 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluconazole_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/Fluconazole_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluconazole_Matsuno2024_reference&quot;,&quot;label&quot;:&quot;Matsuno_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/Fluconazole_Matsuno2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluconazole — `Fluconazole_Tanzawa2022_base`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Fluconazole clearance, volume of distribution, and absorption lag time lacked extracted values, so the model was quarantined.

<div class="pk-model-meta" hidden drug="fluconazole" model-id="Fluconazole_Tanzawa2022_base" status="model_quarantined" stale="false" population="extremely low-birth-weight infants" measured-compound="fluconazole" parameterization="apparent" topology="1C"></div>

## Citation
Tanzawa A, Saito J, Shoji K, Kojo Y, Funaki T, Maruyama H et al. Fluconazole Population Pharmacokinetics after Fosfluconazole Administration and Dosing Optimization in Extremely Low-Birth-Weight Infants. Microbiology spectrum 10(2):e0195221 (2022).
  ·  DOI: [10.1128/spectrum.01952-21](https://doi.org/10.1128/spectrum.01952-21)

## Population and dosing

**Population:** extremely low-birth-weight infants · condition healthy · age group neonate · n = &gt;=18.

**Dosing:** 210 mg, iv, multiple, every 72 h.

**Dosed compound ≠ measured compound:** dosed fosfluconazole, measured fluconazole.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θkc | kfm | 0.43 | 1/h |
| θCL | θCL | 0.011 |  |
| θV | θV | 0.93 | L/kg |
| CL/F | CL/F | 24.1 | L/h |
| ka | kabs | 3.86 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Fluconazole clearance, volume of distribution, and absorption lag time lacked extracted values, so the model was quarantined.**

The record lists typical values for apparent clearance and volume, but the specific parameters for clearance, volume of distribution, and absorption lag time had no extracted values. Consequently, library placeholders were used instead of explicit estimates, leading to the model being held back. A second reader also disagreed on the dose compound and parameterization type, though the primary refusal reason remains the missing parameter values. Extracted — fluconazole: kfm 0.43 1/h, CL/F 24.1 L/h, kabs 3.86 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl/f: this record has 24.1, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θkc | `Q305` · kfm | 0.43 | 1/h | 0.0001194 | 1/s | 1/h | exact (1) | tab3:row10:col1 |
| θCL | `Q900` · θCL | 0.011 |  |  |  |  |  | tab3:row3:col1 |
| θV | `Q900` · θV | 0.93 | L/kg | 0.0651 | m3 |  |  | tab3:row8:col1 |
| CL/F | `Q27` · CL/F | 24.1 | L/h | 6.694e-06 | m3/s | L/h | review_gapfill (0.7) | Comisar_2025:review |
| ka | `Q49` · kabs | 3.86 | h−1 | 0.001072 | 1/s | 1/h | review_gapfill (0.7) | Comisar_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| θCL | Q351 | exact |
| θV | Q61 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variance (CV%)d')
- table section iiv: 'V' routed out of structural estimates ('Interindividual variance (CV%)d')
- dropped unlinked row (NIL): 'Proportional (CV%)' — extend the ontology if this is a real PK parameter (source ['tab3:row17:col1'])
- dropped unlinked row (NIL): 'Additive (μg/mL)' — extend the ontology if this is a real PK parameter (source ['tab3:row18:col1'])
- implicit units: 'θCL' — the LLM proposed 'L/h/kg0.75', whose dimension does not fit Q22; left unset
- implicit units: 'θV' → L/kg (from the paper text: "The paper states in the Abstract: 'The mean population CL and the volume of distribution were 0.011 L/h/kg0.75 and 0.95 ")
- implicit units: 'θkc' → 1/h (from the popPK convention: 'The parameter is identified as a first-order rate constant (kc/kfm). In population pharmacokinetics, first-order rate co')
- metabolite fluconazole: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'θV' Q63→Q61 for fluconazole — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fluconazole
- template fit: none — only the metabolite is modelled — no parent compartment
- bound model equation to Q351 (CLm/F): CL = θCL * (SCr/0.64)^θCL-SCr * (WT)^0.75
- bound model equation to Q61 (V): V = θV * (SCr/0.64)^θV-SCr * (WT)^1.0
- bound model equation to Q351 (CLm/F): aCL = θCL * (PMA/29)^θPMA * (SCr/0.64)^θSCr * (ALP/958)^θALP.bV (L/kg) = θV.ckc (per h) = θkc.dCV, coefficient of variation.eRSE, residual standard error.fCI, confidence interval
- Q351 (CLm/F) is equation-defined: value moved to equation-variable 'θCL'; equation kept verbatim
- Q61 (V) is equation-defined: value moved to equation-variable 'θV'; equation kept verbatim
- model-stage split: 'base model' is the base model of Tanzawa_2022 (paper reports 2 stages: base model, final model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 15 linked by role
- gap-filled Q27 (CL/F) from Comisar_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Comisar_2025's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab3:row3:col2 = '(10.59)'
- unparsed cell tab3:row3:col4 = '(10.59)'
- unparsed cell tab3:row3:col6 = '0.0091 to 0.015'
- unparsed cell tab3:row4:col6 = '1.28 to 3.31'
- unparsed cell tab3:row5:col6 = '−0.31 to −0.08'
- unparsed cell tab3:row6:col6 = '0.018 to 0.24'
- unparsed cell tab3:row8:col2 = '(5.40)'
- unparsed cell tab3:row8:col4 = '(5.40)'
- unparsed cell tab3:row8:col6 = '0.86 to 1.04'
- unparsed cell tab3:row10:col4 = '(5.40)'
- unparsed cell tab3:row10:col6 = '0.43 to 0.43'
- unparsed cell tab3:row13:col2 = '(34.8)'
- unparsed cell tab3:row13:col4 = '(34.8)'
- unparsed cell tab3:row13:col6 = '13.4 to 35.2'
- unparsed cell tab3:row14:col2 = '(49.2)'
- unparsed cell tab3:row14:col4 = '(49.2)'
- unparsed cell tab3:row14:col6 = '2.8 to 21.1'
- unparsed cell tab3:row17:col2 = '(12.8)'
- unparsed cell tab3:row17:col4 = '(12.8)'
- unparsed cell tab3:row17:col6 = '10.5 to 17.5'
- unparsed cell tab3:row18:col2 = '(70.7)'
- unparsed cell tab3:row18:col4 = '(70.7)'
- unparsed cell tab3:row18:col6 = '0.0011 to 0.16'
- LLM selected parameter table(s) 3
- captured model equation CL = θCL * (SCr/0.64)^θCL-SCr * (WT)^0.75
- captured model equation V = θV * (SCr/0.64)^θV-SCr * (WT)^1.0
- captured model equation aCL = θCL * (PMA/29)^θPMA * (SCr/0.64)^θSCr * (ALP/958)^θALP.bV (L/kg) = θV.ckc (per h) = θkc.dCV, coefficient of variation.eRSE, residual standard error.fCI, confidence interval

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 24.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 3.86 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Comisar_2025:review'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['tab3:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Comisar_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab3:row8:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.1 L/h | ['Comisar_2025:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluconazole%5D%20Fluconazole_Tanzawa2022_base&body=Drug%3A%20fluconazole%0ARecord%3A%20Fluconazole_Tanzawa2022_base%0APaper%3A%20Tanzawa_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluconazole/Fluconazole_Tanzawa2022_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:53 UTC</sub>
