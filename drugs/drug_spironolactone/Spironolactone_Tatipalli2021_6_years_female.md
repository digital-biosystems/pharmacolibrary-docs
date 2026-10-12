<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;spironolactone&quot;,&quot;href&quot;:&quot;drugs/drug_spironolactone/&quot;},{&quot;label&quot;:&quot;Tatipalli_2021 \u00b7 6_years_female&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spironolactone_Zhou2010_reference&quot;,&quot;label&quot;:&quot;Zhou_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_spironolactone/Spironolactone_Zhou2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# spironolactone — `Spironolactone_Tatipalli2021_6_years_female`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.941), gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — spironolactone: CL 260 L/h, V1 159 L, Q 37.2 L/h, V2 240 L, kabs 5.22 1/h, tlag 0.16 h; canrenone: V1 58.3 L, CL 7.04 L/h, Q 24.8 L/h, V2 138 L, fm 0.7, CLfm 89.8 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[q1].parameter_id`: this record has Q30, the second reading Q99. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849)

<div class="pk-model-meta" hidden drug="spironolactone" model-id="Spironolactone_Tatipalli2021_6_years_female" status="needs_review" stale="false" population="healthy adults" measured-compound="spironolactone" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 260.33 | L/h | 7.23138888888889e-05 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row0:col5 | — | not captured |
| V2 | `Q63` · V1 | 159.46 | L | 0.15946000000000002 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row1:col5 | — | not captured |
| Q | `Q30` · Q | 37.21 | L/h | 1.0336111111111111e-05 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row2:col5 | — | not captured |
| V3 | `Q64` · V2 | 239.65 | L | 0.23965 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row3:col5 | — | not captured |
| ka | `Q49` · kabs | 5.22 | 1/h | 0.00145 | 1/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row4:col5 | — | not captured |
| V4 | `Q63` · V1 | 58.29 | L | 0.05829 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row5:col5 | — | not captured |
| CLM | `Q22` · CL | 7.04 | L/h | 1.9555555555555556e-06 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row6:col5 | — | not captured |
| Q1 | `Q30` · Q | 24.83 | L/h | 6.897222222222222e-06 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row7:col5 | — | not captured |
| V5 | `Q64` · V2 | 138.18 | L | 0.13818 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row8:col5 | — | not captured |
| ALAG1 | `Q83` · tlag | 0.160 | h | 576.0 | h | not captured | exact (1.0) | Tatipalli_2021_table_4:row9:col5 | — | not captured |
| Fm | `Q45` · fm | 0.70 | not captured | not captured | not captured | not captured | exact (1.0) | Tatipalli_2021_table_4:row10:col5 | — | not captured |
| CLM1 | `Q370` · CLfm | 89.81 | L/h | 2.4947222222222222e-05 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row11:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'CL' → L/h (from the popPK convention: "The table caption defines 'CL' as 'apparent clearance' and lists 'L, liter' and 'h, hour' as units used in the table. Cl")
- implicit units: 'V2' → L (from the popPK convention: "The table caption lists 'L, liter' as a unit. Volume of distribution parameters are conventionally expressed in L, consi")
- implicit units: 'Q' → L/h (from the popPK convention: "The table caption defines 'Q' as 'apparent intercompartmental clearance' and lists 'L, liter' and 'h, hour'. Intercompar")
- implicit units: 'V3' → L (from the popPK convention: "The table caption lists 'L, liter' as a unit. Volume of distribution parameters are conventionally expressed in L, consi")
- implicit units: 'ka' → 1/h (from the popPK convention: "The table caption lists 'h, hour' as a unit. First-order rate constants like absorption rate constants (ka) are conventi")
- implicit units: 'V4' → L (from the popPK convention: "The table caption lists 'L, liter' as a unit. Volume of distribution parameters are conventionally expressed in L, consi")
- implicit units: 'CLM' → L/h (from the popPK convention: "The table caption lists 'L, liter' and 'h, hour'. Clearance parameters are conventionally expressed in L/h, consistent w")
- implicit units: 'Q1' → L/h (from the popPK convention: "The table caption lists 'L, liter' and 'h, hour'. Intercompartmental clearances are conventionally expressed in L/h, con")
- implicit units: 'V5' → L (from the popPK convention: "The table caption lists 'L, liter' as a unit. Volume of distribution parameters are conventionally expressed in L, consi")
- implicit units: 'ALAG1' → h (from the popPK convention: "The table caption defines 'ALAG1' as 'lag time' and lists 'h, hour' as a unit. Lag times are conventionally expressed in")
- implicit units: 'CLM1' → L/h (from the popPK convention: "The table caption defines 'CLM1' as 'apparent metabolic clearance' and lists 'L, liter' and 'h, hour'. Clearances are co")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (V2); Q30 (Q); Q64 (V3); Q63 (V4); Q22 (CLM); Q30 (Q1); Q64 (V5)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=spironolactone
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- population split: '6 years—female' subgroup of Tatipalli_2021 (paper reports 9 populations: 12 years—female, 12 years—male, 17 years—female, 17 years—male, 2 years—female, 2 years—male, 6 years—female, 6 years—male, adults)
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 199 linked by role; re-tagged parent→canrenone ×106

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
| `gpt-oss-120b` | not confirmed | 0.941 (16/17 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.364 (8/22 fields) | 14 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[q1].parameter_id` | Q30 | Q99 | mismatch |
| `gpt-oss:120b` | `parameters[alag1]` | 0.160 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[alag1]` | not captured | 0.160 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 260.33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 260.33 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 5.22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 5.22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 37.21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 37.21 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | 159.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | not captured | 159.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3]` | 239.65 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3]` | not captured | 239.65 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | spironolactone | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | spironolactone | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row0:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row6:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row7:col5'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row11:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row1:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row5:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row8:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row9:col5'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 260.33 | not captured | not captured | ['Tatipalli_2021_table_4:row0:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 260 L/h | not captured | not captured | ['Tatipalli_2021_table_4:row0:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.04 L/h | not captured | not captured | ['Tatipalli_2021_table_4:row6:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 159 L | not captured | not captured | ['Tatipalli_2021_table_4:row1:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 58.3 L | not captured | not captured | ['Tatipalli_2021_table_4:row5:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 240 L | not captured | not captured | ['Tatipalli_2021_table_4:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 138 L | not captured | not captured | ['Tatipalli_2021_table_4:row8:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_spironolactone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tatipalli_2021` / `Tatipalli_2021::6_years_female`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 18:46 UTC</sub>
