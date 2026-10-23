<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;escitalopram&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/&quot;},{&quot;label&quot;:&quot;Liu_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Escitalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Escitalopram_Poweleit2023_reference&quot;,&quot;label&quot;:&quot;Poweleit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Poweleit2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# escitalopram — `Escitalopram_Liu2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:37 UTC (Needs review), but the paper was screened again on 2026-10-06 22:57 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The escitalopram record was held back because the absorption rate constant ka was not reported in the source and a placeholder value was substituted, alongside defaulted Tlag and an assumed F=1 apparent parameterization.

<div class="pk-model-meta" hidden drug="escitalopram" model-id="Escitalopram_Liu2022_reference" status="needs_review" stale="true" population="Chinese psychiatric patients" measured-compound="escitalopram" parameterization="apparent" topology="1C"></div>

## Citation
Liu S, Xiao T, Huang S, Li X, Kong W, Yang Y et al. Population pharmacokinetics model for escitalopram in Chinese psychiatric patients: effect of CYP2C19 and age. Frontiers in pharmacology 13:964758 (2022).
  ·  DOI: [10.3389/fphar.2022.964758](https://doi.org/10.3389/fphar.2022.964758)

## Population and dosing

**Population:** Chinese psychiatric patients · condition psychiatric disorders · age group mixed · n = 106.

**Dosing:** 5, 10, 15, 20 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 16.3 | L/h |
| V/F (L) | V/F | 815 | L |
| theta_q49_im | theta_q49_im | 0.847 |  |
| theta_q47_pm | theta_q47_pm | 0.479 |  |
| θ Age | θ Age | 0.0077 |  |
| absorption rate constant | kabs | 1.48 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The escitalopram record was held back because the absorption rate constant ka was not reported in the source and a placeholder value was substituted, alongside defaulted Tlag and an assumed F=1 apparent parameterization.**

The model for escitalopram in Chinese psychiatric patients (one-compartment, extravascular dosing with apparent CL/F 14.7 L/h and V/F 581.9 L) relies on a first-order depot input whose ka was invented rather than taken from the paper, and Tlag was likewise left at a placeholder. Bioavailability was assumed to be 1 (F=1, Fm=1) with no molar correction, so all parameters are apparent. A second reader also disagrees on the central estimates, reading CL/F as 16.3 L/h and V/F as 815 L versus 14.7 L/h and 581.9 L, and reports covariate effects (age 0.0077, and effects of 0.847 and 0.479) that this record lacks entirely. Extracted — escitalopram: CL/F 14.7 L/h, V/F 582 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has escitalopram, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 16.3 | L/h | 4.528e-06 | m3/s | l/h | exact (1) | T4:row3:col1, T4:row3:col3, T4:row3:col4 |
| V/F (L) | `Q76` · V/F | 815 | L | 0.815 | m3 | l | exact (1) | T4:row4:col1, T4:row4:col3, T4:row4:col4 |
| theta_q49_im | `Q900` · theta_q49_im | 0.847 |  |  |  |  |  | T4:row7:col1, T4:row7:col3, T4:row7:col4 |
| theta_q47_pm | `Q900` · theta_q47_pm | 0.479 |  |  |  |  |  | T4:row8:col1, T4:row8:col3, T4:row8:col4 |
| θ Age | `Q900` · θ Age | 0.0077 |  |  |  |  |  |  |
| absorption rate constant | `Q49` · kabs | 1.48 | h -1 | 0.0004111 | 1/s | 1/h | review_gapfill (0.7) | Friberg_2006:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- kept covariate coefficient θ Age=0.0077 (covariate Age) — not an ontology parameter
- dropped duplicate Q27 ('CL/F', value '0.0877') — already have one for this compound
- dropped duplicate Q76 ('V/F', value '0.235') — already have one for this compound
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q47 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=escitalopram
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Friberg_2006's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T4:row3:col2 = '6%'
- unparsed cell T4:row4:col2 = '14%'
- unparsed cell T4:row6:col2 = '20%'
- unparsed cell T4:row7:col2 = '7%'
- unparsed cell T4:row8:col2 = '11%'
- unparsed cell T4:row10:col2 = '21%'
- unparsed cell T4:row11:col2 = '29%'
- unparsed cell T4:row14:col2 = '12%'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 1.48 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ age]` | 0.0077 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ age]` |  | 0.0077 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | escitalopram | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | escitalopram | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 50 | 34.66 | 0.6931 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Friberg_2006:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['T4:row4:col1', 'T4:row4:col3', 'T4:row4:col4'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.3 L/h |  |  | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 815 L |  |  | ['T4:row4:col1', 'T4:row4:col3', 'T4:row4:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=escitalopram) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmin_ss | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  | 27.43 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_escitalopram/Escitalopram_Liu2022_reference/Escitalopram_Liu2022_reference_modelica.zip" download>Escitalopram_Liu2022_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_escitalopram/Escitalopram_Liu2022_reference/Escitalopram_Liu2022_reference_fmi.zip" download>Escitalopram_Liu2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_escitalopram/Escitalopram_Liu2022_reference/Escitalopram_Liu2022_reference_matlab.zip" download>Escitalopram_Liu2022_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_escitalopram/Escitalopram_Liu2022_reference/Escitalopram_Liu2022_reference_matlab_simbio.zip" download>Escitalopram_Liu2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_escitalopram/Escitalopram_Liu2022_reference/Escitalopram_Liu2022_reference_sbml.zip" download>Escitalopram_Liu2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_escitalopram/Escitalopram_Liu2022_reference/Escitalopram_Liu2022_reference_cellml.zip" download>Escitalopram_Liu2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Liu S, Xiao T, Huang S, Li X, Kong W, Yang Y et al. Population pharmacokinetics model for escitalopram in Chinese psychiatric patients: effect of CYP2C19 and age. Frontiers in pharmacology 13:964758 (2022). [doi:10.3389/fphar.2022.964758](https://doi.org/10.3389/fphar.2022.964758)

**This record:** Pharmacolibrary v26.09, model `Escitalopram_Liu2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_escitalopram/Escitalopram_Liu2022_reference>

```bibtex
@misc{pharmacolibrary_EscitalopramLiu2022reference,
  title  = {{Pharmacolibrary model Escitalopram_Liu2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_escitalopram/Escitalopram_Liu2022_reference},
  note   = {Parameters from doi:10.3389/fphar.2022.964758},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bescitalopram%5D%20Escitalopram_Liu2022_reference&body=Drug%3A%20escitalopram%0ARecord%3A%20Escitalopram_Liu2022_reference%0APaper%3A%20Liu_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_escitalopram/Escitalopram_Liu2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:57 UTC</sub>
