<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;carbamazepine&quot;,&quot;href&quot;:&quot;drugs/drug_carbamazepine/&quot;},{&quot;label&quot;:&quot;Djordjevic_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carbamazepine_Banach2015_reference&quot;,&quot;label&quot;:&quot;Banach_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbamazepine/Carbamazepine_Banach2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carbamazepine_Li2021_reference&quot;,&quot;label&quot;:&quot;Li_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbamazepine/Carbamazepine_Li2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carbamazepine_TeixeiradaSilva2022_reference&quot;,&quot;label&quot;:&quot;Teixeira-da-Silva_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbamazepine/Carbamazepine_TeixeiradaSilva2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carbamazepine_Naik2021_reference&quot;,&quot;label&quot;:&quot;Naik_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbamazepine/Carbamazepine_Naik2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carbamazepine_Punyawudho2012_reference&quot;,&quot;label&quot;:&quot;Punyawudho_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbamazepine/Carbamazepine_Punyawudho2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carbamazepine_Roberti2021_reference&quot;,&quot;label&quot;:&quot;Roberti_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbamazepine/Carbamazepine_Roberti2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carbamazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbamazepine/Carbamazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carbamazepine — `Carbamazepine_Djordjevic2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="carbamazepine" model-id="Carbamazepine_Djordjevic2025_reference" status="needs_review" stale="false" population="pediatric epileptic patients" measured-compound="carbamazepine" parameterization="apparent" topology="1C"></div>

## Citation
Djordjevic N, Cukic J, Dragas Milovanovic D, Radovanovic M, Radosavljevic I, Vuckovic Filipovic J et al. ABCB1 Polymorphism Is Associated with Higher Carbamazepine Clearance in Children. Pediatric reports 17(1) (2025).
  ·  DOI: [10.3390/pediatric17010010](https://doi.org/10.3390/pediatric17010010)

## Population and dosing

**Population:** pediatric epileptic patients · condition epilepsy · age group child · n = 47.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 0.175 | L/h |
| cyp1a2 | cyp1a2 | 0.0176 |  |
| abcb1 | abcb1 | 0.0332 |  |
| V z /F | V/F | 52.58 | L/kg |
| ka | kabs | 0.873 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Chan_2023, Kudo_1999) cannot stand in for this paper's evidence. Extracted — carbamazepine: CL/F 0.175 L/h, V/F 52.6 L/kg, kabs 0.873 /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.873, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 0.175 | L/h | 4.861e-08 | m3/s | l/h | exact (1) | pediatrrep-17-00010-t003:row2:col1, pediatrrep-17-00010-t003:row2:col2, pediatrrep-17-00010-t003:row2:col3, pediatrrep-17-00010-t003:row2:col4 |
| cyp1a2 | `Q900` · cyp1a2 | 0.0176 |  |  |  |  |  | pediatrrep-17-00010-t003:row5:col1, pediatrrep-17-00010-t003:row5:col2, pediatrrep-17-00010-t003:row5:col3, pediatrrep-17-00010-t003:row5:col4 |
| abcb1 | `Q900` · abcb1 | 0.0332 |  |  |  |  |  | pediatrrep-17-00010-t003:row6:col1, pediatrrep-17-00010-t003:row6:col2, pediatrrep-17-00010-t003:row6:col3, pediatrrep-17-00010-t003:row6:col4 |
| V z /F | `Q76` · V/F | 52.58 | L/kg | 3.681 | m3 | L | review_gapfill (0.7) | Kudo_1999:review |
| ka | `Q49` · kabs | 0.873 | /h | 0.0002425 | 1/s | 1/h | review_gapfill (0.7) | Chan_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['pediatrrep-17-00010-t003:row1:col2'])
- dropped unlinked row (NIL): 'SEX' — extend the ontology if this is a real PK parameter (source ['pediatrrep-17-00010-t003:row3:col1', 'pediatrrep-17-00010-t003:row3:col2', 'pediatrrep-17-00010-t003:row3:col3', 'pediatrrep-17-00010-t003:row3:col4'])
- dropped unlinked row (NIL): 'DD (mg/L)' — extend the ontology if this is a real PK parameter (source ['pediatrrep-17-00010-t003:row4:col1', 'pediatrrep-17-00010-t003:row4:col2', 'pediatrrep-17-00010-t003:row4:col3', 'pediatrrep-17-00010-t003:row4:col4'])
- covariate level 'CYP1A2' → Q900:cyp1a2 = 0.0176 (linear_fractional on Q27)
- covariate level 'ABCB1' → Q900:abcb1 = 0.0332 (linear_fractional on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=carbamazepine
- gap-filled Q76 (V/F) from Kudo_1999's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chan_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pediatrrep-17-00010-t003:row1:col4 = '95% CI ‡'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.873 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the apparent volumes of distribution]` | 1260.0 |  | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pediatrrep-17-00010-t003:row2:col1', 'pediatrrep-17-00010-t003:row2:col2', 'pediatrrep-17-00010-t003:row2:col3', 'pediatrrep-17-00010-t003:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chan_2023:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kudo_1999:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.175 L/h | ['pediatrrep-17-00010-t003:row2:col1', 'pediatrrep-17-00010-t003:row2:col2', 'pediatrrep-17-00010-t003:row2:col3', 'pediatrrep-17-00010-t003:row2:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3.68e+03 L | ['Kudo_1999:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference/Carbamazepine_Djordjevic2025_reference_modelica.zip" download>Carbamazepine_Djordjevic2025_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference/Carbamazepine_Djordjevic2025_reference_fmi.zip" download>Carbamazepine_Djordjevic2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference/Carbamazepine_Djordjevic2025_reference_matlab.zip" download>Carbamazepine_Djordjevic2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference/Carbamazepine_Djordjevic2025_reference_matlab_simbio.zip" download>Carbamazepine_Djordjevic2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference/Carbamazepine_Djordjevic2025_reference_sbml.zip" download>Carbamazepine_Djordjevic2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference/Carbamazepine_Djordjevic2025_reference_cellml.zip" download>Carbamazepine_Djordjevic2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Djordjevic N, Cukic J, Dragas Milovanovic D, Radovanovic M, Radosavljevic I, Vuckovic Filipovic J et al. ABCB1 Polymorphism Is Associated with Higher Carbamazepine Clearance in Children. Pediatric reports 17(1) (2025). [doi:10.3390/pediatric17010010](https://doi.org/10.3390/pediatric17010010)

**This record:** Pharmacolibrary v26.09, model `Carbamazepine_Djordjevic2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference>

```bibtex
@misc{pharmacolibrary_CarbamazepineDjordjevic2025reference,
  title  = {{Pharmacolibrary model Carbamazepine_Djordjevic2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference},
  note   = {Parameters from doi:10.3390/pediatric17010010},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcarbamazepine%5D%20Carbamazepine_Djordjevic2025_reference&body=Drug%3A%20carbamazepine%0ARecord%3A%20Carbamazepine_Djordjevic2025_reference%0APaper%3A%20Djordjevic_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_carbamazepine/Carbamazepine_Djordjevic2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-09 23:45 UTC</sub>
