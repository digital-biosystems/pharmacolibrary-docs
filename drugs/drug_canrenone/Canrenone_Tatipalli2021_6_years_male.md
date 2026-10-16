<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;canrenone&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/&quot;},{&quot;label&quot;:&quot;Tatipalli_2021 \u00b7 6_years_male&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canrenone_Suyagh2012_final_pharmacokinetic_model&quot;,&quot;label&quot;:&quot;Suyagh_2012_final_pharmacokinetic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canrenone_Suyagh2012_median&quot;,&quot;label&quot;:&quot;Suyagh_2012_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2012_median.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canrenone_Suyagh2013_reference&quot;,&quot;label&quot;:&quot;Suyagh_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canrenone — `Canrenone_Tatipalli2021_6_years_male`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.938). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — canrenone: CL 259 L/h, V1 159 L, Q 37.1 L/h, V2 238 L, kabs 5.22 1/h, V1 58 L, CL 7.01 L/h, Q 24.7 L/h, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has spironolactone, the second reading canrenone; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849)

<div class="pk-model-meta" hidden drug="canrenone" model-id="Canrenone_Tatipalli2021_6_years_male" status="needs_review" stale="false" population="healthy adults" measured-compound="spironolactone" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 259.33 | L/h | 7.203611111111112e-05 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row0:col6 | — | not captured |
| V2 | `Q63` · V1 | 158.65 | L | 0.15865 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row1:col6 | — | not captured |
| Q | `Q30` · Q | 37.06 | L/h | 1.0294444444444445e-05 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row2:col6 | — | not captured |
| V3 | `Q64` · V2 | 238.43 | L | 0.23843 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row3:col6 | — | not captured |
| ka | `Q49` · kabs | 5.22 | 1/h | 0.00145 | 1/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row4:col6 | — | not captured |
| V4 | `Q63` · V1 | 58.00 | L | 0.058 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row5:col6 | — | not captured |
| CLM | `Q22` · CL | 7.01 | L/h | 1.947222222222222e-06 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row6:col6 | — | not captured |
| Q1 | `Q30` · Q | 24.74 | L/h | 6.872222222222222e-06 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row7:col6 | — | not captured |
| V5 | `Q64` · V2 | 137.47 | L | 0.13747 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row8:col6 | — | not captured |
| ALAG1 | `Q83` · tlag | 0.160 | h | 576.0 | h | not captured | exact (1.0) | Tatipalli_2021_table_4:row9:col6 | — | not captured |
| Fm | `Q45` · fm | 0.70 | not captured | not captured | not captured | not captured | exact (1.0) | Tatipalli_2021_table_4:row10:col6 | — | not captured |
| CLM1 | `Q370` · CLfm | 89.47 | L/h | 2.4852777777777776e-05 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row11:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'CL' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour' but does not explicitly state the unit for CL. However, CL is a clear")
- implicit units: 'V2' → L (from the popPK convention: "The table caption defines 'L, liter'. V2 is a volume of distribution parameter, and the value 158.65 is consistent with ")
- implicit units: 'Q' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. Q is an intercompartmental clearance parameter, and the value 37.06 ")
- implicit units: 'V3' → L (from the popPK convention: "The table caption defines 'L, liter'. V3 is a volume of distribution parameter, and the value 238.43 is consistent with ")
- implicit units: 'ka' → 1/h (from the popPK convention: "The table caption defines 'h, hour'. ka is a first-order absorption rate constant, and the value 5.22 is consistent with")
- implicit units: 'V4' → L (from the popPK convention: "The table caption defines 'L, liter'. V4 is a volume of distribution parameter, and the value 58.00 is consistent with L")
- implicit units: 'CLM' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. CLM is a clearance parameter, and the value 7.01 is consistent with ")
- implicit units: 'Q1' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. Q1 is an intercompartmental clearance parameter, and the value 24.74")
- implicit units: 'V5' → L (from the popPK convention: "The table caption defines 'L, liter'. V5 is a volume of distribution parameter, and the value 137.47 is consistent with ")
- implicit units: 'ALAG1' → h (from the popPK convention: "The table caption defines 'h, hour'. ALAG1 is a lag time parameter, and the value 0.160 is consistent with h.")
- implicit units: 'CLM1' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. CLM1 is a metabolic clearance parameter, and the value 89.47 is cons")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (V2); Q30 (Q); Q64 (V3); Q63 (V4); Q22 (CLM); Q30 (Q1); Q64 (V5)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=spironolactone
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- population split: '6 years—male' subgroup of Tatipalli_2021 (paper reports 9 populations: 12 years—female, 12 years—male, 17 years—female, 17 years—male, 2 years—female, 2 years—male, 6 years—female, 6 years—male, adults)
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 199 linked by role; re-tagged parent→canrenone ×106
- review gap-fill skipped: this record measures 'spironolactone', not canrenone — the review values are the parent's

**Extraction notes:**
- transposed table Tatipalli_2021_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tatipalli_2021_table_4:row3:col1 = '(h−1)'
- companion parameter table 4 transcribed (108 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (7/21 fields) | 14 |
| `gpt-oss:120b` | not confirmed | 0.938 (15/16 fields) | 1 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['spironolactone', 'canrenone', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[clm1]` | 89.47 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm]` | not captured | 7.01 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm]` | 7.01 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` | not captured | 0.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` | 0.70 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1]` | 24.74 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2].parameter_id` | Q63 | Q64 | mismatch |
| `gpt-oss-120b` | `parameters[v3].parameter_id` | Q64 | Q77 | mismatch |
| `gpt-oss-120b` | `parameters[v4]` | 58.00 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v5]` | not captured | 137.47 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v5]` | 137.47 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | spironolactone | canrenone | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | spironolactone | canrenone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row0:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row6:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row2:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row7:col6'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row11:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row4:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row1:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row5:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row3:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row8:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row9:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 259.33 | not captured | not captured | ['Tatipalli_2021_table_4:row0:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 259 L/h | not captured | not captured | ['Tatipalli_2021_table_4:row0:col6'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.01 L/h | not captured | not captured | ['Tatipalli_2021_table_4:row6:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 159 L | not captured | not captured | ['Tatipalli_2021_table_4:row1:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 58 L | not captured | not captured | ['Tatipalli_2021_table_4:row5:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 238 L | not captured | not captured | ['Tatipalli_2021_table_4:row3:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 137 L | not captured | not captured | ['Tatipalli_2021_table_4:row8:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_canrenone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tatipalli_2021` / `Tatipalli_2021::6_years_male`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:47 UTC</sub>
