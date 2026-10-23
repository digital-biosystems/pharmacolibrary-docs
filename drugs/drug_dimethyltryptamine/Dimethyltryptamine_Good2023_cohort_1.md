<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Dimethyltryptamine&quot;,&quot;href&quot;:&quot;drugs/drug_dimethyltryptamine/&quot;},{&quot;label&quot;:&quot;Good_2023 \u00b7 cohort_1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dimethyltryptamine_Jiang2016_reference&quot;,&quot;label&quot;:&quot;Jiang_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dimethyltryptamine/Dimethyltryptamine_Jiang2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dimethyltryptamine — `Dimethyltryptamine_Good2023_cohort_1`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; cL has no unit.

<div class="pk-model-meta" hidden drug="Dimethyltryptamine" model-id="Dimethyltryptamine_Good2023_cohort_1" status="needs_review" stale="false" population="healthy adults" measured-compound="dimethyltryptamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Good M, Joel Z, Benway T, Routledge C, Timmermann C, Erritzoe D et al. Pharmacokinetics of N,N-dimethyltryptamine in Humans. European journal of drug metabolism and pharmacokinetics 48(3):311–327 (2023).
  ·  DOI: [10.1007/s13318-023-00822-y](https://doi.org/10.1007/s13318-023-00822-y)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 24.

**Dosing:** 9, 12, 21.5 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| intrinsic hepatocyte clearance of DMT [0.62 (1) µM] | CL | 19.4 | µl/min/million cells |
| estimated blood clearance rate | CLb | 18.2 | l/min |
| V(m), L | V | 9.55 | L |
| k a-M | kabs | 0.0748 | min − 1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; cL has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Eckernäs_2022, Jiang_2016) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — dimethyltryptamine: CL 19.4 µl/min/million cells, CLb 18.2 l/min, V 9.55 L, kabs 0.0748 min − 1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| intrinsic hepatocyte clearance of DMT [0.62 (1) µM] | `Q22` · CL | 19.4 | µl/min/million cells |  |  | µl/min/million cells | boundary (0.8) | Good_2023:other_prose |
| estimated blood clearance rate | `Q23` · CLb | 18.2 | l/min | 0.0003033 | m3/s | L/h | boundary (0.8) | Good_2023:discussion_prose |
| V(m), L | `Q61` · V | 9.55 | L | 0.00955 | m3 | L | review_gapfill (0.7) | Eckernäs_2022:review |
| k a-M | `Q49` · kabs | 0.0748 | min − 1 | 0.001247 | 1/s | 1/h | review_gapfill (0.7) | Jiang_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| t1/2, min | Q57 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['Good_2023_table_10:row1:col1', 'Good_2023_table_10:row7:col1', 'Good_2023_table_10:row11:col1', 'Good_2023_table_10:row15:col1', 'Good_2023_table_10:row19:col1', 'Good_2023_table_10:row23:col1', 'Good_2023_table_10:row27:col1', 'Good_2023_table_10:row31:col1'])
- dropped unlinked row (NIL): 'Range' — extend the ontology if this is a real PK parameter (source ['Good_2023_table_10:row2:col1', 'Good_2023_table_10:row8:col1', 'Good_2023_table_10:row12:col1', 'Good_2023_table_10:row16:col1', 'Good_2023_table_10:row20:col1', 'Good_2023_table_10:row24:col1', 'Good_2023_table_10:row28:col1', 'Good_2023_table_10:row32:col1'])
- dropped unlinked row (NIL): 'CV (%)' — extend the ontology if this is a real PK parameter (source ['Good_2023_table_10:row3:col1', 'Good_2023_table_10:row9:col1', 'Good_2023_table_10:row13:col1', 'Good_2023_table_10:row17:col1', 'Good_2023_table_10:row21:col1', 'Good_2023_table_10:row25:col1', 'Good_2023_table_10:row29:col1', 'Good_2023_table_10:row33:col1'])
- table mostly unlinked (3/4 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q22 ('intrinsic hepatocyte clearance of DMT [0.62 (1) µM]'=19.4) from results prose — parameter table was unreadable
- salvaged Q23 ('estimated blood clearance rate'=18.2) from results prose — parameter table was unreadable
- implicit units: 'intrinsic hepatocyte clearance of DMT [0.62 (1) µM]' — the LLM proposed 'µl/min/million cells', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dimethyltryptamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'cohort 1 (n = 5)' subgroup of Good_2023 (paper reports 6 populations: cohort 1 (n = 5), cohort 2 (n = 6), cohort 3a (n = 5), cohort 4 (n = 6), mean of individual parameters, parameters derived from mean)
- gap-filled Q61 (V) from Eckernäs_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Jiang_2016's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab3:row1:col3 = 'V1 (l)'
- companion parameter table 10 transcribed (82 record(s))
- LLM selected parameter table(s) 3, 10

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jiang_2016:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Good_2023_table_10:row14:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Eckernäs_2022:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | µl/min/million cells | ['Good_2023:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 19.4 | ['Good_2023:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 1.09e+03 L/h | ['Good_2023:discussion_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 9.55 L | ['Eckernäs_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdimethyltryptamine%5D%20Dimethyltryptamine_Good2023_cohort_1&body=Drug%3A%20dimethyltryptamine%0ARecord%3A%20Dimethyltryptamine_Good2023_cohort_1%0APaper%3A%20Good_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dimethyltryptamine/Dimethyltryptamine_Good2023_cohort_1%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-09 07:55 UTC</sub>
