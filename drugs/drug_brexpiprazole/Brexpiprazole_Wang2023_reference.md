<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;brexpiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/&quot;},{&quot;label&quot;:&quot;Wang_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brexpiprazole_Higashi2025_1_mg_day&quot;,&quot;label&quot;:&quot;Higashi_2025_1_mg_day&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_1_mg_day.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Higashi2025_2_mg_day&quot;,&quot;label&quot;:&quot;Higashi_2025_2_mg_day&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Wong2021_reference&quot;,&quot;label&quot;:&quot;Wong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Wong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wang_2024_PANSS&quot;,&quot;label&quot;:&quot;Wang_2024 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/pd_Wang_2024_PANSS.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brexpiprazole — `Brexpiprazole_Wang2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Km has no unit.

<div class="pk-model-meta" hidden drug="brexpiprazole" model-id="Brexpiprazole_Wang2023_reference" status="needs_review" stale="false" population="adults, adolescents, and children with central nervous system (CNS) disorders" measured-compound="brexpiprazole" parameterization="mechanistic" topology="2C"></div>

## Citation
Wang Y, Wang X, Larsen F, Cahill D, Zoubroulis A, Ward C et al. Population Pharmacokinetic Analysis of Brexpiprazole to Support its Indication and Dose Selection in Adolescents With Schizophrenia. Journal of clinical pharmacology 63(11):1290–1299 (2023).
  ·  DOI: [10.1002/jcph.2307](https://doi.org/10.1002/jcph.2307)

## Population and dosing

**Population:** adults, adolescents, and children with central nervous system (CNS) disorders · condition central nervous system (CNS) disorders (including, but not limited to, schizophrenia) · age group mixed.

**Dosing:** 1, 2, 3, 4 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| D₁ (hour) | D1 | 0.931 | hour | 5 |
| kₐ (1/h) | kabs | 1.49 | 1/h | 7 |
| CL (L/h) | CL | 1.34 | L/h | 5 |
| Vc (L) | V1 | 78.0 | L | 3 |
| Q (L/h) | Q | 0.844 | L/h | 18 |
| Vp (L) | V2 | 27.5 | L | 11 |
| V_weight | Km | 1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Km has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — brexpiprazole: D1 0.931 hour, kabs 1.49 1/h, CL 1.34 L/h, V1 78 L, Q 0.844 L/h, V2 27.5 L, Km 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has brexpiprazole, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| D₁ (hour) | `Q310` · D1 | 0.931 | hour | 3352 | s | h | 5 | exact (1) | Wang_2023_table_3:row1:col2 |
| kₐ (1/h) | `Q49` · kabs | 1.49 | 1/h | 0.0004139 | 1/s | 1/h | 7 | exact (1) | Wang_2023_table_3:row2:col2 |
| CL (L/h) | `Q22` · CL | 1.34 | L/h | 3.722e-07 | m3/s | l/h | 5 | exact (1) | Wang_2023_table_3:row3:col2 |
| Vc (L) | `Q63` · V1 | 78.0 | L | 0.078 | m3 | l | 3 | exact (1) | Wang_2023_table_3:row4:col2 |
| Q (L/h) | `Q30` · Q | 0.844 | L/h | 2.344e-07 | m3/s | l/h | 18 | exact (1) | Wang_2023_table_3:row5:col2 |
| Vp (L) | `Q64` · V2 | 27.5 | L | 0.0275 | m3 | l | 11 | exact (1) | Wang_2023_table_3:row6:col2 |
| V_weight | `Q1` · Km | 1 |  |  |  |  |  | llm (0.6) | Wang_2023_table_3:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV_D₁ (%)' routed out of structural estimates ('Random effects: interindividual variability (CV)')
- table section iiv: 'IIV_kₐ (%)' routed out of structural estimates ('Random effects: interindividual variability (CV)')
- table section iiv: 'IIV_CL (%)' routed out of structural estimates ('Random effects: interindividual variability (CV)')
- table section iiv: 'IIV_Vc (%)' routed out of structural estimates ('Random effects: interindividual variability (CV)')
- table section iiv: 'IIV_Vp (%)' routed out of structural estimates ('Random effects: interindividual variability (CV)')
- table section residual_error: 'Error 1' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Error 2' routed out of structural estimates ('Residual variability')
- dropped duplicate Q22 ('CL_weight', value '0.75') — already have one for this compound
- implicit units: 'V_weight' — the LLM proposed 'L', whose dimension does not fit Q1; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L)); Q30 (Q (L/h)); Q64 (Vp (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=brexpiprazole
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (14/18 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl_weight]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_weight]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | brexpiprazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | brexpiprazole | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wang_2023_table_3:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Wang_2023_table_3:row5:col2'] |
| C5_dimension_Q310 | pass | [time] |  | ['Wang_2023_table_3:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Wang_2023_table_3:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wang_2023_table_3:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Wang_2023_table_3:row6:col2'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['Wang_2023_table_3:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.34 | ['Wang_2023_table_3:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.34 L/h | ['Wang_2023_table_3:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 78 L | ['Wang_2023_table_3:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 27.5 L | ['Wang_2023_table_3:row6:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference/Brexpiprazole_Wang2023_reference_modelica.zip" download>Brexpiprazole_Wang2023_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference/Brexpiprazole_Wang2023_reference_fmi.zip" download>Brexpiprazole_Wang2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference/Brexpiprazole_Wang2023_reference_matlab.zip" download>Brexpiprazole_Wang2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference/Brexpiprazole_Wang2023_reference_matlab_simbio.zip" download>Brexpiprazole_Wang2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference/Brexpiprazole_Wang2023_reference_sbml.zip" download>Brexpiprazole_Wang2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference/Brexpiprazole_Wang2023_reference_cellml.zip" download>Brexpiprazole_Wang2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Wang Y, Wang X, Larsen F, Cahill D, Zoubroulis A, Ward C et al. Population Pharmacokinetic Analysis of Brexpiprazole to Support its Indication and Dose Selection in Adolescents With Schizophrenia. Journal of clinical pharmacology 63(11):1290–1299 (2023). [doi:10.1002/jcph.2307](https://doi.org/10.1002/jcph.2307)

**This record:** Pharmacolibrary v26.09, model `Brexpiprazole_Wang2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference>

```bibtex
@misc{pharmacolibrary_BrexpiprazoleWang2023reference,
  title  = {{Pharmacolibrary model Brexpiprazole_Wang2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference},
  note   = {Parameters from doi:10.1002/jcph.2307},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrexpiprazole%5D%20Brexpiprazole_Wang2023_reference&body=Drug%3A%20brexpiprazole%0ARecord%3A%20Brexpiprazole_Wang2023_reference%0APaper%3A%20Wang_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 14:03 UTC</sub>
