<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vincristine&quot;,&quot;href&quot;:&quot;drugs/drug_vincristine/&quot;},{&quot;label&quot;:&quot;van_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vincristine_Centanni2024_reference&quot;,&quot;label&quot;:&quot;Centanni_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vincristine/Vincristine_Centanni2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vincristine — `Vincristine_van2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Centanni_2024) cannot stand in for this paper's evidence. A reported unit could not be converted (AUC and Cmax), so that value has no SI equivalent. Extracted — vincristine: AUC 0.0032 ng·h/mL, Cmax 0.0029 ng/mL, CL 1.87 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of difference in cl: this record has 1.87, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022)
  ·  DOI: [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510)

<div class="pk-model-meta" hidden drug="vincristine" model-id="Vincristine_van2022_reference" status="needs_review" stale="false" population="pediatric oncology patients" measured-compound="vincristine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC | `Q88` · AUC | 0.0032 | ng·h/mL | not captured | ng·h/mL | not captured | exact (1.0) | cancers-14-03510-t002:row4:col1, cancers-14-03510-t002:row4:col5, cancers-14-03510-t002:row4:col6, cancers-14-03510-t002:row4:col7, cancers-14-03510-t002:row4:col8 | — | not captured |
| Cmax | `Q32` · Cmax | 0.0029 | ng/mL | not captured | ng/mL | not captured | exact (1.0) | cancers-14-03510-t002:row6:col1, cancers-14-03510-t002:row6:col5, cancers-14-03510-t002:row6:col6, cancers-14-03510-t002:row6:col7, cancers-14-03510-t002:row6:col8 | — | not captured |
| difference in CL | `Q22` · CL | 1.87 | L/h | 5.194444444444445e-07 | L/h | not captured | review_gapfill (0.7) | Centanni_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'outcomes per snp' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'RAB7A *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row5:col4', 'cancers-14-03510-t002:row5:col5', 'cancers-14-03510-t002:row5:col6', 'cancers-14-03510-t002:row5:col7'])
- dropped unlinked row (NIL): 'Total CTCAE' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row9:col1', 'cancers-14-03510-t002:row9:col5', 'cancers-14-03510-t002:row9:col6', 'cancers-14-03510-t002:row9:col7'])
- dropped unlinked row (NIL): 'GARS *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row10:col4', 'cancers-14-03510-t002:row10:col5', 'cancers-14-03510-t002:row10:col6', 'cancers-14-03510-t002:row10:col7'])
- dropped unlinked row (NIL): 'Total ped-mTNS' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row11:col1', 'cancers-14-03510-t002:row11:col5', 'cancers-14-03510-t002:row11:col6', 'cancers-14-03510-t002:row11:col7'])
- dropped unlinked row (NIL): 'FIG4 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row12:col4', 'cancers-14-03510-t002:row12:col5', 'cancers-14-03510-t002:row12:col6'])
- dropped unlinked row (NIL): 'FGD4 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row13:col4', 'cancers-14-03510-t002:row13:col5', 'cancers-14-03510-t002:row13:col6', 'cancers-14-03510-t002:row14:col4', 'cancers-14-03510-t002:row14:col5', 'cancers-14-03510-t002:row14:col6'])
- dropped unlinked row (NIL): 'SEPTIN9 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row15:col4', 'cancers-14-03510-t002:row15:col5', 'cancers-14-03510-t002:row15:col6'])
- dropped unlinked row (NIL): 'CEP72 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row16:col4', 'cancers-14-03510-t002:row16:col5', 'cancers-14-03510-t002:row16:col6'])
- dropped unlinked row (NIL): 'ETAA1 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row17:col4', 'cancers-14-03510-t002:row17:col5', 'cancers-14-03510-t002:row17:col6', 'cancers-14-03510-t002:row17:col7'])
- dropped unlinked row (NIL): 'VIPN (yes/no) according to CTCAE' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row20:col5', 'cancers-14-03510-t002:row20:col6', 'cancers-14-03510-t002:row20:col7', 'cancers-14-03510-t002:row20:col8'])
- routed 'ETAA1 **' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- implicit units: 'AUC' → ng·h/mL (from the paper text: 'The paper reports median AUC as “39.78 (ng·hr)/mL.”')
- implicit units: 'Cmax' → ng/mL (from the paper text: 'The paper reports median Cmax as “57.28 ng/mL.”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vincristine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q22 (CL) from Centanni_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell cancers-14-03510-t002:row4:col2 = 'rs8192552'
- unparsed cell cancers-14-03510-t002:row4:col9 = '20.42 (8.0–32.8)'
- unparsed cell cancers-14-03510-t002:row5:col1 = 'rs4548'
- unparsed cell cancers-14-03510-t002:row5:col8 = '23.54(10.9–36.2)'
- unparsed cell cancers-14-03510-t002:row6:col2 = 'rs6519270'
- unparsed cell cancers-14-03510-t002:row6:col9 = '26.72(7.4–46.0)'
- unparsed cell cancers-14-03510-t002:row6:col10 = '69.55(23.0, 116.1)'
- unparsed cell cancers-14-03510-t002:row9:col2 = 'rs2272653'
- unparsed cell cancers-14-03510-t002:row9:col8 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row9:col9 = '0.84 (0.73–0.96)'
- unparsed cell cancers-14-03510-t002:row9:col10 = '0.49 (0.40–0.60)'
- unparsed cell cancers-14-03510-t002:row10:col1 = 'rs1049402'
- unparsed cell cancers-14-03510-t002:row10:col8 = '0.71 (0.62–0.82)'
- unparsed cell cancers-14-03510-t002:row10:col9 = '0.47 (0.34–0.64)'
- unparsed cell cancers-14-03510-t002:row11:col2 = 'rs9885672'
- unparsed cell cancers-14-03510-t002:row11:col4 = 'Missense UTR variant of the 5′ UTR'
- unparsed cell cancers-14-03510-t002:row11:col8 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row11:col9 = '1.44 (1.30–1.59)'
- unparsed cell cancers-14-03510-t002:row12:col1 = 'rs10659'
- unparsed cell cancers-14-03510-t002:row12:col3 = 'UTR variant of the 3′ UTR'
- unparsed cell cancers-14-03510-t002:row12:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row12:col8 = '1.53 (1.34–1.75)'
- unparsed cell cancers-14-03510-t002:row13:col1 = 'rs12823621'
- unparsed cell cancers-14-03510-t002:row13:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row13:col8 = '1.43 (1.27–1.60)'
- unparsed cell cancers-14-03510-t002:row13:col9 = '1.88 (1.36–2.59)'
- unparsed cell cancers-14-03510-t002:row14:col1 = 'rs73083501'
- unparsed cell cancers-14-03510-t002:row14:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row14:col8 = '0.86 (0.76–0.97)'
- unparsed cell cancers-14-03510-t002:row14:col9 = '0.46 (0.32–0.68)'
- unparsed cell cancers-14-03510-t002:row15:col1 = 'rs11650934'
- unparsed cell cancers-14-03510-t002:row15:col3 = 'UTR variant of the 5′ UTR'
- unparsed cell cancers-14-03510-t002:row15:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row15:col8 = '0.62 (0.54–0.71)'
- unparsed cell cancers-14-03510-t002:row15:col9 = '0.81 (0.48–1.38)'
- unparsed cell cancers-14-03510-t002:row16:col1 = 'rs71585289'
- unparsed cell cancers-14-03510-t002:row16:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row16:col8 = '0.84 (0.75–0.93)'
- unparsed cell cancers-14-03510-t002:row16:col9 = '0.53 (0.43–0.66)'
- unparsed cell cancers-14-03510-t002:row17:col1 = 'rs35777125'
- unparsed cell cancers-14-03510-t002:row17:col8 = '0.9 1 (0.82–1.02)'
- unparsed cell cancers-14-03510-t002:row17:col9 = '0.36 (0.19–0.70)'
- unparsed cell cancers-14-03510-t002:row20:col2 = 'rs1049402'
- unparsed cell cancers-14-03510-t002:row20:col9 = '0.52 (0.28–0.99)'
- unparsed cell cancers-14-03510-t002:row20:col10 = '0.18 (0.03–0.92)'
- unparsed cell cancers-14-03510-t002:row23:col1 = 'rs35777125'
- unparsed cell cancers-14-03510-t002:row23:col8 = '0.31 (0.16–0.57)'
- unparsed cell cancers-14-03510-t002:row23:col9 = '0.31 (0.16–0.57)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.857 (6/7 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[difference in cl]` | 1.87 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Centanni_2024:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['cancers-14-03510-t002:row6:col1', 'cancers-14-03510-t002:row6:col5', 'cancers-14-03510-t002:row6:col6', 'cancers-14-03510-t002:row6:col7', 'cancers-14-03510-t002:row6:col8'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['cancers-14-03510-t002:row4:col1', 'cancers-14-03510-t002:row4:col5', 'cancers-14-03510-t002:row4:col6', 'cancers-14-03510-t002:row4:col7', 'cancers-14-03510-t002:row4:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.87 | not captured | not captured | ['Centanni_2024:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.87 L/h | not captured | not captured | ['Centanni_2024:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vincristine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2022` / `van_2022::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 14:56 UTC</sub>
