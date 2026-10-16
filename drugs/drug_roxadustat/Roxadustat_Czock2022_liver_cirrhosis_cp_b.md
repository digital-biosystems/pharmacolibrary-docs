<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;roxadustat&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/&quot;},{&quot;label&quot;:&quot;Czock_2022 \u00b7 liver_cirrhosis_cp_b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Roxadustat_Takada2022v2_reference&quot;,&quot;label&quot;:&quot;Takada_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Takada2022v2_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Roxadustat_Czock2022_healthy_sca&quot;,&quot;label&quot;:&quot;Czock_2022_healthy_sca&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Roxadustat_Czock2022_kidney_function_normal&quot;,&quot;label&quot;:&quot;Czock_2022_kidney_function_normal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Czock2022_kidney_function_normal.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# roxadustat — `Roxadustat_Czock2022_liver_cirrhosis_cp_b`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.818), gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**AUC and Cmax have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUC, Cmax and fu), so that value has no SI equivalent. Extracted — roxadustat: AUC 637 h·ng/mL per mg, Cmax 70 ng/mL per mg, tmax 2 h, t1/2z 14.7 h, fu 1.1 %, CL/F 2.29 L/h, V/F 39 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dose: this record has none, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x)

<div class="pk-model-meta" hidden drug="roxadustat" model-id="Roxadustat_Czock2022_liver_cirrhosis_cp_b" status="needs_review" stale="false" population="healthy volunteers and chronic kidney disease patients" measured-compound="roxadustat" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC (h·ng/mL per mg) | `Q88` · AUC | 637 | h·ng/mL per mg | not captured | [[h] · [ng]] / [[ml] · [permg]] | not captured | exact (1.0) | Czock_2022_table_1:row1:col3, Czock_2022_table_1:row14:col3, Czock_2022_table_1:row15:col3 | — | not captured |
| Cmax (ng/mL per mg) | `Q32` · Cmax | 70 | ng/mL per mg | not captured | [ng] / [[ml] · [permg]] | not captured | exact (1.0) | Czock_2022_table_1:row1:col4, Czock_2022_table_1:row14:col4, Czock_2022_table_1:row15:col4 | — | not captured |
| tmax (h) | `Q56` · tmax | 2 | h | 7200.0 | [h] | not captured | exact (1.0) | Czock_2022_table_1:row1:col6, Czock_2022_table_1:row6:col6, Czock_2022_table_1:row14:col6, Czock_2022_table_1:row15:col6 | — | not captured |
| t½ or t½α and t½ß (h) | `Q57` · t1/2z | 14.7 | h | 52920.0 | [h] | not captured | llm (0.6) | Czock_2022_table_1:row1:col9, Czock_2022_table_1:row6:col9, Czock_2022_table_1:row14:col9, Czock_2022_table_1:row15:col9 | — | not captured |
| fu (%) | `Q46` · fu | 1.10 | % | not captured | [%] | not captured | exact (1.0) | Czock_2022_table_1:row1:col11, Czock_2022_table_1:row6:col11 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 2.29 | L/h | 6.361111111111111e-07 | [l] / [h] | not captured | exact (1.0) | Czock_2022_table_1:row14:col7, Czock_2022_table_1:row15:col7 | — | not captured |
| Vd/F | `Q76` · V/F | 39.0 | L | 0.039 | L | not captured | review_gapfill (0.7) | Czock_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h·ng/mL per mg' (AUC)
- unit_dimension_unknown: 'ng/mL per mg' (Cmax)
- dropped unlinked row (NIL): 'UR (%)' — extend the ontology if this is a real PK parameter (source ['Czock_2022_table_1:row1:col10'])
- implicit units: 'AUC (h·ng/mL per mg)' — the LLM proposed 'h·ng/mL per mg', whose dimension does not fit Q88; left unset
- implicit units: 'Cmax (ng/mL per mg)' — the LLM proposed 'ng/mL per mg', whose dimension does not fit Q32; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=roxadustat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'liver cirrhosis cp b' subgroup of Czock_2022 (paper reports 9 populations: eskd, healthy, healthy, fasting, healthy, fed, healthy, sca, kidney function - failure, kidney function - normal, liver cirrhosis cp b, severe renal impairment)
- gap-filled Q76 (V/F) from Czock_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Czock_2022_table_p4_1: unbound_uncertainty
- table Czock_2022_table_1: unparsed_numeric_cell
- transposed table Czock_2022_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (114 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.818 (9/11 fields) | 2 |
| `gpt-oss:120b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` | 39.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ur]` | not captured | 2.4 | only_one_extracted |

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
| C1_half_life_beta | pass | 11.8 | 11.805 | 1.0004 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Czock_2022_table_1:row14:col7', 'Czock_2022_table_1:row15:col7'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Czock_2022_table_1:row1:col6', 'Czock_2022_table_1:row6:col6', 'Czock_2022_table_1:row14:col6', 'Czock_2022_table_1:row15:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Czock_2022_table_1:row1:col9', 'Czock_2022_table_1:row6:col9', 'Czock_2022_table_1:row14:col9', 'Czock_2022_table_1:row15:col9'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Czock_2022:review'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | ng/mL per mg | not captured | not captured | ['Czock_2022_table_1:row1:col4', 'Czock_2022_table_1:row14:col4', 'Czock_2022_table_1:row15:col4'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | h·ng/mL per mg | not captured | not captured | ['Czock_2022_table_1:row1:col3', 'Czock_2022_table_1:row14:col3', 'Czock_2022_table_1:row15:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.29 L/h | not captured | not captured | ['Czock_2022_table_1:row14:col7', 'Czock_2022_table_1:row15:col7'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 39 L | not captured | not captured | ['Czock_2022:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_roxadustat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Czock_2022` / `Czock_2022::liver_cirrhosis_cp_b`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_liver_cirrhosis_cp_b/Roxadustat_Czock2022_liver_cirrhosis_cp_b_modelica.zip" download>Roxadustat_Czock2022_liver_cirrhosis_cp_b_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_liver_cirrhosis_cp_b/Roxadustat_Czock2022_liver_cirrhosis_cp_b_fmi.zip" download>Roxadustat_Czock2022_liver_cirrhosis_cp_b_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_liver_cirrhosis_cp_b/Roxadustat_Czock2022_liver_cirrhosis_cp_b_matlab.zip" download>Roxadustat_Czock2022_liver_cirrhosis_cp_b_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_liver_cirrhosis_cp_b/Roxadustat_Czock2022_liver_cirrhosis_cp_b_matlab_simbio.zip" download>Roxadustat_Czock2022_liver_cirrhosis_cp_b_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_liver_cirrhosis_cp_b/Roxadustat_Czock2022_liver_cirrhosis_cp_b_sbml.zip" download>Roxadustat_Czock2022_liver_cirrhosis_cp_b_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_liver_cirrhosis_cp_b/Roxadustat_Czock2022_liver_cirrhosis_cp_b_cellml.zip" download>Roxadustat_Czock2022_liver_cirrhosis_cp_b_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:39 UTC</sub>
