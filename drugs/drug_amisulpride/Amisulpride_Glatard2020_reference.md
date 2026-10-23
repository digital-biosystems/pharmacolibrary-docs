<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;amisulpride&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/&quot;},{&quot;label&quot;:&quot;Glatard_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amisulpride_Liu2023_reference&quot;,&quot;label&quot;:&quot;Liu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Liu2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Yan2024_final&quot;,&quot;label&quot;:&quot;Yan_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Yan2024_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Li2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Reeves2016_combined&quot;,&quot;label&quot;:&quot;Reeves_2016_combined&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Reeves2016_combined.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Reeves2016_group_1&quot;,&quot;label&quot;:&quot;Reeves_2016_group_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amisulpride — `Amisulpride_Glatard2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record was quarantined because amisulpride's bioavailability, clearance, volume of distribution and absorption lag time had no extracted values and would have been replaced by library placeholders, while all three extracted parameters (CL 44 L/h, V 956 L, kabs 0.9 h⁻¹) describe prolactin, not amisulpride.

<div class="pk-model-meta" hidden drug="amisulpride" model-id="Amisulpride_Glatard2020_reference" status="model_quarantined" stale="false" population="adult and elderly psychiatric patients" measured-compound="amisulpride" parameterization="mechanistic" topology="1C"></div>

## Citation
Glatard A, Guidi M, Delacrétaz A, Dubath C, Grosu C, Laaboub N et al. Amisulpride: Real-World Evidence of Dose Adaptation and Effect on Prolactin Concentrations and Body Weight Gain by Pharmacokinetic/Pharmacodynamic Analyses. Clinical pharmacokinetics 59(3):371–382 (2020).
  ·  DOI: [10.1007/s40262-019-00821-w](https://doi.org/10.1007/s40262-019-00821-w)

## Population and dosing

**Population:** adult and elderly psychiatric patients · condition psychiatric disorders (antipsychotic treatment) · age group mixed · n = 242.

**Dosing:** 50, 2000 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 44 | L/h |
| V (L) | V | 956 | L |
| ka (h -1 ) | kabs | 0.9 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was quarantined because amisulpride's bioavailability, clearance, volume of distribution and absorption lag time had no extracted values and would have been replaced by library placeholders, while all three extracted parameters (CL 44 L/h, V 956 L, kabs 0.9 h⁻¹) describe prolactin, not amisulpride.**

The only parameters with values — clearance 44 L/h, volume of distribution 956 L and absorption rate constant 0.9 h⁻¹ — are attributed to prolactin, so no amisulpride pharmacokinetic parameter was actually extracted. Amisulpride's bioavailability, clearance, volume of distribution and absorption lag time had no value, so library placeholders would have stood in for them, and the model was held back rather than published with invented numbers. The deviations check failed on these defaulted parameters. Extracted — prolactin: CL 44 L/h, V 956 L, kabs 0.9 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amisulpride, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 44 | L/h | 1.222e-05 | m3/s | l/h | exact (1) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3 |
| V (L) | `Q61` · V | 956 | L | 0.956 | m3 | l | exact (1) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3 |
| ka (h -1 ) | `Q49` · kabs | 0.9 | h -1 | 0.00025 | 1/s | 1/h | exact (1) | tab_1:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bootstrap evaluation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['tab_1:row1:col2'])
- dropped duplicate Q22 ('θAGE_CL', value '-0.46') — already have one for this compound
- dropped duplicate Q22 ('θLBW_CL', value '0.54') — already have one for this compound
- dropped unlinked row (NIL): 'PRLbase (ng/mL)' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col1', 'tab_1:row13:col2', 'tab_1:row13:col3'])
- dropped PD-category row 'Emax (ng/mL)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row14:col1', 'tab_1:row14:col2', 'tab_1:row14:col3'])
- dropped PD-category row 'EC50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row15:col1', 'tab_1:row15:col2', 'tab_1:row15:col3'])
- dropped PD-category row 'θMALE_EMAX' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row16:col1', 'tab_1:row16:col2', 'tab_1:row16:col3'])
- NIL: refused to back-fill base 'Emax' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q61 (V (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amisulpride
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row4:col4 = '41 ; 48'
- unparsed cell tab_1:row5:col4 = '705 ; 1258'
- unparsed cell tab_1:row7:col4 = '-0.54 ; -0.36'
- unparsed cell tab_1:row8:col4 = '0.27 ; 0.85'
- unparsed cell tab_1:row9:col4 = '24 ; 42'
- unparsed cell tab_1:row10:col4 = '35 ; 92'
- unparsed cell tab_1:row11:col4 = '46 ; 60'
- unparsed cell tab_1:row13:col4 = '11 ; 20'
- unparsed cell tab_1:row14:col4 = '116 ; 182'
- unparsed cell tab_1:row15:col4 = '4.6 ; 110'
- unparsed cell tab_1:row16:col4 = '-0.65 ; -0.38'
- unparsed cell tab_1:row17:col4 = '36 ; 62'
- unparsed cell tab_1:row18:col4 = '10 ; 20'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 44 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[parameter]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[prlbase]` |  | 35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v].value` | 956 | 11 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | amisulpride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amisulpride | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row6:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 44 | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 44 L/h | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 956 L | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_tmax | reference | skipped | 3.6 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 3.6 |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amisulpride/Amisulpride_Glatard2020_reference/Amisulpride_Glatard2020_reference_matlab.zip" download>Amisulpride_Glatard2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amisulpride/Amisulpride_Glatard2020_reference/Amisulpride_Glatard2020_reference_matlab_simbio.zip" download>Amisulpride_Glatard2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amisulpride/Amisulpride_Glatard2020_reference/Amisulpride_Glatard2020_reference_sbml.zip" download>Amisulpride_Glatard2020_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amisulpride/Amisulpride_Glatard2020_reference/Amisulpride_Glatard2020_reference_cellml.zip" download>Amisulpride_Glatard2020_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Glatard A, Guidi M, Delacrétaz A, Dubath C, Grosu C, Laaboub N et al. Amisulpride: Real-World Evidence of Dose Adaptation and Effect on Prolactin Concentrations and Body Weight Gain by Pharmacokinetic/Pharmacodynamic Analyses. Clinical pharmacokinetics 59(3):371–382 (2020). [doi:10.1007/s40262-019-00821-w](https://doi.org/10.1007/s40262-019-00821-w)

**This record:** Pharmacolibrary v26.09, model `Amisulpride_Glatard2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amisulpride/Amisulpride_Glatard2020_reference>

```bibtex
@misc{pharmacolibrary_AmisulprideGlatard2020reference,
  title  = {{Pharmacolibrary model Amisulpride_Glatard2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amisulpride/Amisulpride_Glatard2020_reference},
  note   = {Parameters from doi:10.1007/s40262-019-00821-w},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamisulpride%5D%20Amisulpride_Glatard2020_reference&body=Drug%3A%20amisulpride%0ARecord%3A%20Amisulpride_Glatard2020_reference%0APaper%3A%20Glatard_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amisulpride/Amisulpride_Glatard2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 14:57 UTC</sub>
