<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;glutamine&quot;,&quot;href&quot;:&quot;drugs/drug_glutamine/&quot;},{&quot;label&quot;:&quot;Sadaf_2024_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glutamine — `Glutamine_Sadaf2024v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-07 17:39 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The model does not reproduce the paper's time of the peak (tmax) (paper 1.2, model 0.297); the model does not reproduce the paper's terminal half-life (paper 1, model 0.495).

<div class="pk-model-meta" hidden drug="glutamine" model-id="Glutamine_Sadaf2024v2_reference" status="needs_review" stale="true" population="patients with sickle cell disease and healthy volunteers" measured-compound="glutamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Sadaf A, Dong M, Pfeiffer A, Latham T, Kalfa T, Vinks AA et al. A Population Pharmacokinetic Analysis of L-Glutamine Exposure in Patients with Sickle Cell Disease: Evaluation of Dose and Food Effects. Clinical pharmacokinetics 63(3):357-365 (2024).
  ·  DOI: [10.1007/s40262-024-01349-4](https://doi.org/10.1007/s40262-024-01349-4)

## Population and dosing

**Population:** patients with sickle cell disease and healthy volunteers · condition sickle cell disease · age group mixed · n = &gt;= 20.

**Dosing:** 7000, 21000, 42000 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ɵ2 | Q2 | -0.96 | L/h | 19.8 |
| ϴ3 | equation variable | 52.3 |  | 19.5 |
| KA | kabs | 0.91 | 1/h | 6.4 |
| V | V | 0.0636 | L/kg |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 1.2, model 0.297); the model does not reproduce the paper's terminal half-life (paper 1, model 0.495).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — glutamine: kabs 0.91 1/h, CL 78.5 L/h/70 kg, V 0.0636 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has glutamine, the second reading l-glutamine; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ɵ2 | `Q99` · Q2 | -0.96 | L/h | -2.667e-07 | m3/s | L/h | 19.8 | llm (0.6) | Tab2:row5:col2, Tab2:row5:col3 |
| ϴ3 | `Q900` · equation variable | 52.3 |  |  |  |  | 19.5 | llm (0.6) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5 |
| KA | `Q49` · kabs | 0.91 | 1/h | 0.0002528 | 1/s | 1/h | 6.4 | exact (1) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col5 |
| V | `Q61` · V | 0.0636 | L/kg | 0.004452 | m3 | L |  | review_gapfill (0.7) | Hoeben_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iov: 'IOVCL' routed out of structural estimates ('Inter-occasion variability (variance)')
- table section residual_error: 'Prop.Err.' routed out of structural estimates ('Residual variability (variance)')
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Ɵ1' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'])
- dropped duplicate Q900 ('ϴ4', value '0.27') — already have one for this compound
- implicit units: 'Ɵ2' → L/h (from the popPK convention: "The text describes the model as 'a one-compartment model with first-order input and disposition'. In a standard one-comp")
- implicit units: 'KA' → 1/h (from the popPK convention: 'KA is defined as the absorption rate constant. First-order rate constants, including absorption rate constants (kabs), a')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q99 (Ɵ2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glutamine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- model equation 'CLi = Ɵ1 * (WT/70)^0.75 *(Glu_BSL/Glu_BSLstardard)ϴ2' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- gap-filled Q61 (V) from Hoeben_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row5:col4 = '− 0.96 (0)'
- unparsed cell Tab2:row5:col5 = '− 1.3 to − 0.4'
- LLM selected parameter table(s) 2
- captured model equation CLi = Ɵ1 * (WT/70)^0.75 *(Glu_BSL/Glu_BSLstardard)ϴ2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.91 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 0.0636 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ɵ1]` |  | 67.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ɵ2]` | -0.96 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ3]` | 52.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ4]` |  | 0.09 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | glutamine | l-glutamine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | glutamine | l-glutamine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hoeben_2026:review'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col2', 'Tab2:row5:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.45 L | ['Hoeben_2026:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=l-glutamine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 1 | 0.4951 | 0.4951 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.2 | 0.4951 | 2.475 | min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.117 | 0.4951 | 0.4434 | min→SI vs simulated h |
| T1_tmax | reference | fail | 1.2 | 0.2973 | 0.2478 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.2 | 0.2973 | 0.2478 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference/Glutamine_Sadaf2024v2_reference_modelica.zip" download>Glutamine_Sadaf2024v2_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference/Glutamine_Sadaf2024v2_reference_matlab.zip" download>Glutamine_Sadaf2024v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference/Glutamine_Sadaf2024v2_reference_matlab_simbio.zip" download>Glutamine_Sadaf2024v2_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference/Glutamine_Sadaf2024v2_reference_sbml.zip" download>Glutamine_Sadaf2024v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference/Glutamine_Sadaf2024v2_reference_cellml.zip" download>Glutamine_Sadaf2024v2_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Sadaf A, Dong M, Pfeiffer A, Latham T, Kalfa T, Vinks AA et al. A Population Pharmacokinetic Analysis of L-Glutamine Exposure in Patients with Sickle Cell Disease: Evaluation of Dose and Food Effects. Clinical pharmacokinetics 63(3):357-365 (2024). [doi:10.1007/s40262-024-01349-4](https://doi.org/10.1007/s40262-024-01349-4)

**This record:** Pharmacolibrary v26.09, model `Glutamine_Sadaf2024v2_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference>

```bibtex
@misc{pharmacolibrary_GlutamineSadaf2024v2reference,
  title  = {{Pharmacolibrary model Glutamine_Sadaf2024v2_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference},
  note   = {Parameters from doi:10.1007/s40262-024-01349-4},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglutamine%5D%20Glutamine_Sadaf2024v2_reference&body=Drug%3A%20glutamine%0ARecord%3A%20Glutamine_Sadaf2024v2_reference%0APaper%3A%20Sadaf_2024_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:39 UTC</sub>
