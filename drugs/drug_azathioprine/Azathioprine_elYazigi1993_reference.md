<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;azathioprine&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/&quot;},{&quot;label&quot;:&quot;el-Yazigi_1993 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azathioprine_Lin2021_reference&quot;,&quot;label&quot;:&quot;Lin_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Lin2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azathioprine — `Azathioprine_elYazigi1993_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="azathioprine" model-id="Azathioprine_elYazigi1993_reference" status="needs_review" stale="false" population="renal transplant patients and rabbits" measured-compound="azathioprine" parameterization="mechanistic" topology="1C"></div>

## Citation
el-Yazigi A, Wahab FA. Pharmacokinetics of azathioprine after repeated oral and single intravenous administration. Journal of clinical pharmacology 33(6):522–526 (1993).
  ·  DOI: [10.1002/j.1552-4604.1993.tb04698.x](https://doi.org/10.1002/j.1552-4604.1993.tb04698.x)

## Population and dosing

**Population:** renal transplant patients · condition renal transplantation · age group adult · n = 28.

**Dosing:** 25, 150 mg, oral, multiple, every 24 h.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1 | V | 0.833 | L/kg |
| CL | CL | 0.27 | L/d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Colman_2024) cannot stand in for this paper's evidence. Extracted — azathioprine: V 0.833 L/kg, CL 0.27 L/d.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has azathioprine, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 1 | `Q61` · V | 0.833 | L/kg | 0.05831 | m3 | l/kg | llm (0.5) | el-Yazigi_1993_table_2:row0:col1, el-Yazigi_1993_table_2:row0:col2, el-Yazigi_1993_table_2:row0:col3, el-Yazigi_1993_table_2:row0:col4, el-Yazigi_1993_table_2:row0:col5, el-Yazigi_1993_table_2:row0:col6, el-Yazigi_1993_table_2:row0:col7, el-Yazigi_1993_table_2:row0:col8, el-Yazigi_1993_table_2:row0:col9, el-Yazigi_1993_table_2:row0:col10 |
| CL | `Q22` · CL | 0.27 | L/d | 3.125e-09 | m3/s | L/h | review_gapfill (0.7) | Colman_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('2', value '2.11') — already have one for this compound
- dropped duplicate Q61 ('3', value '1.02') — already have one for this compound
- dropped duplicate Q61 ('4', value '0.329') — already have one for this compound
- dropped duplicate Q61 ('5', value '0.291') — already have one for this compound
- dropped duplicate Q61 ('6', value '1.75') — already have one for this compound
- dropped duplicate Q61 ('Mean', value '1.05') — already have one for this compound
- dropped duplicate Q61 ('SEM', value '0.3') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azathioprine
- gap-filled Q22 (CL) from Colman_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM region el-Yazigi_1993:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (1/9 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[1]` | 0.833 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine clearance]` | 30.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral clearance]` |  | 4.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` |  | 8.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  | 1.05 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | azathioprine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | azathioprine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Colman_2024:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['el-Yazigi_1993_table_2:row0:col1', 'el-Yazigi_1993_table_2:row0:col2', 'el-Yazigi_1993_table_2:row0:col3', 'el-Yazigi_1993_table_2:row0:col4', 'el-Yazigi_1993_table_2:row0:col5', 'el-Yazigi_1993_table_2:row0:col6', 'el-Yazigi_1993_table_2:row0:col7', 'el-Yazigi_1993_table_2:row0:col8', 'el-Yazigi_1993_table_2:row0:col9', 'el-Yazigi_1993_table_2:row0:col10'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.27 | ['Colman_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0112 L/h | ['Colman_2024:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 58.3 L | ['el-Yazigi_1993_table_2:row0:col1', 'el-Yazigi_1993_table_2:row0:col2', 'el-Yazigi_1993_table_2:row0:col3', 'el-Yazigi_1993_table_2:row0:col4', 'el-Yazigi_1993_table_2:row0:col5', 'el-Yazigi_1993_table_2:row0:col6', 'el-Yazigi_1993_table_2:row0:col7', 'el-Yazigi_1993_table_2:row0:col8', 'el-Yazigi_1993_table_2:row0:col9', 'el-Yazigi_1993_table_2:row0:col10'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_modelica.zip" download>Azathioprine_elYazigi1993_reference_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_fmi.zip" download>Azathioprine_elYazigi1993_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_matlab.zip" download>Azathioprine_elYazigi1993_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_matlab_simbio.zip" download>Azathioprine_elYazigi1993_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_sbml.zip" download>Azathioprine_elYazigi1993_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_cellml.zip" download>Azathioprine_elYazigi1993_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): el-Yazigi A, Wahab FA. Pharmacokinetics of azathioprine after repeated oral and single intravenous administration. Journal of clinical pharmacology 33(6):522–526 (1993). [doi:10.1002/j.1552-4604.1993.tb04698.x](https://doi.org/10.1002/j.1552-4604.1993.tb04698.x)

**This record:** Pharmacolibrary v26.09, model `Azathioprine_elYazigi1993_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference>

```bibtex
@misc{pharmacolibrary_AzathioprineelYazigi1993reference,
  title  = {{Pharmacolibrary model Azathioprine_elYazigi1993_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference},
  note   = {Parameters from doi:10.1002/j.1552-4604.1993.tb04698.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazathioprine%5D%20Azathioprine_elYazigi1993_reference&body=Drug%3A%20azathioprine%0ARecord%3A%20Azathioprine_elYazigi1993_reference%0APaper%3A%20el-Yazigi_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:40 UTC</sub>
