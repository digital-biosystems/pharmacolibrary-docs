<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tisotumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_tisotumab_vedotin/&quot;},{&quot;label&quot;:&quot;Gibiansky_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tisotumab vedotin — `TisotumabVedotin_Gibiansky2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.933). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Vmax has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Km and fm), so that value has no SI equivalent. Extracted — tisotumab vedotin: CL 1.42 L/day, Q 4.01 L/day, V1 3.1 L, V2 4.47 L, Vmax 3.35, Km 3.44 μg/ml, t1/2α 0.28 day, t1/2z 4.19 day, … (+1); monomethyl auristatin E: ktr 0.271 1/day, CL 42.8 L/day, V 2.09 L, fm 0.0205 FR1, θ15, t1/2z 0.0339 day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of mmae (t 1/2,mmae): this record has 0.0339, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Gibiansky L et al., Population pharmacokinetic analysis for…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12850](https://doi.org/10.1002/psp4.12850)

<div class="pk-model-meta" hidden drug="tisotumab vedotin" model-id="TisotumabVedotin_Gibiansky2022_reference" status="needs_review" stale="false" population="patients with locally advanced and/or metastatic solid tumors" measured-compound="tisotumab vedotin" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 14 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/day (θ1) | `Q22` · CL | 1.42 | L/day | 1.6435185185185186e-08 | L/h | 5.19 | exact (1.0) | psp412850-tbl-0002:row2:col1, psp412850-tbl-0002:row2:col2, psp412850-tbl-0002:row2:col3 | — | not captured |
| Q, L/day (θ2) | `Q30` · Q | 4.01 | L/day | 4.641203703703703e-08 | L/h | 2.93 | exact (1.0) | psp412850-tbl-0002:row3:col1, psp412850-tbl-0002:row3:col2, psp412850-tbl-0002:row3:col3 | — | not captured |
| V c, L (θ3) | `Q63` · V1 | 3.10 | L | 0.0031000000000000003 | L | 1.23 | exact (1.0) | psp412850-tbl-0002:row4:col1, psp412850-tbl-0002:row4:col2, psp412850-tbl-0002:row4:col3 | — | not captured |
| V p, L (θ4) | `Q64` · V2 | 4.47 | L | 0.00447 | L | 2.30 | exact (1.0) | psp412850-tbl-0002:row5:col1, psp412850-tbl-0002:row5:col2, psp412850-tbl-0002:row5:col3 | — | not captured |
| Maximum MM elimination (V max), μg/ml/day (θ5) | `Q66` · Vmax | 3.35 | not captured | not captured | not captured | 11.70 | llm (0.6) | psp412850-tbl-0002:row6:col1, psp412850-tbl-0002:row6:col2, psp412850-tbl-0002:row6:col3 | — | not captured |
| Michaelis constant (K M), μg/ml (θ6) | `Q1` · Km | 3.44 | μg/ml | not captured | μg/ml | 12.30 | llm (0.6) | psp412850-tbl-0002:row7:col1, psp412850-tbl-0002:row7:col2, psp412850-tbl-0002:row7:col3 | — | not captured |
| ADC distribution half‐life (t 1/2,α), day | `Q59` · t1/2α | 0.28 | day | 24192.000000000004 | [d] | not captured | llm (0.6) | psp412850-tbl-0002:row10:col1 | — | not captured |
| ADC t 1/2, day | `Q57` · t1/2z | 4.19 | day | 362016.00000000006 | [d] | not captured | llm (0.6) | psp412850-tbl-0002:row11:col1 | — | not captured |
| Rate constant of delay (k tr), 1/day (θ9) | `Q306` · ktr | 0.271 | 1/day | 3.1365740740740742e-06 | 1/h | 1.35 | llm (0.6) | psp412850-tbl-0002:row13:col1, psp412850-tbl-0002:row13:col2, psp412850-tbl-0002:row13:col3 | — | not captured |
| CLMMAE, L/day (θ10) | `Q22` · CL | 42.8 | L/day | 4.953703703703704e-07 | L/h | 7.40 | exact (1.0) | psp412850-tbl-0002:row14:col1, psp412850-tbl-0002:row14:col2, psp412850-tbl-0002:row14:col3 | — | not captured |
| V MMAE, L (θ11) | `Q61` · V | 2.09 | L | 0.00209 | L | 9.82 | exact (1.0) | psp412850-tbl-0002:row15:col1, psp412850-tbl-0002:row15:col2, psp412850-tbl-0002:row15:col3 | — | not captured |
| Rate constant of DAR decay (β), 1/day (θ12) | `Q47` · kel | 0.0189 | 1/day | 2.1875e-07 | 1/h | 26.50 | llm (0.6) | psp412850-tbl-0002:row16:col1, psp412850-tbl-0002:row16:col2, psp412850-tbl-0002:row16:col3 | — | not captured |
| Fraction of MMAE nonspecific elimination (FR1, θ15) | `Q45` · fm | 0.0205 | FR1, θ15 | not captured | [fr1] | 7.94 | exact (1.0) | psp412850-tbl-0002:row19:col1, psp412850-tbl-0002:row19:col2, psp412850-tbl-0002:row19:col3 | — | not captured |
| MMAE (t 1/2,MMAE), day | `Q57` · t1/2z | 0.0339 | day | 2928.96 | [d] | not captured | llm (0.6) | psp412850-tbl-0002:row22:col1, psp412850-tbl-0002:row22:col2, psp412850-tbl-0002:row22:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'FR1, θ15' (fm)
- unit_dimension_unknown: 'FR2, θ16' (fm)
- dropped duplicate Q45 ('Fraction of MMAE target‐mediated elimination (FR2, θ16)', value '0.0508') — already have one for this compound
- unit_dimension_mismatch: 'MMAE delay half‐life (t 1/2,ktr), day' → Q306 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q306 ('MMAE delay half‐life (t 1/2,ktr), day', value '2.56') — already have one for this compound
- implicit units: 'CL, L/day (θ1)' → L/day (from the paper text: "The text states: 'The ADC nonspecific clearance (CL) value of tisotumab vedotin was determined to be 1.42 L/day'.")
- implicit units: 'Q, L/day (θ2)' → L/day (from the paper text: "The text states: 'intercompartmental clearance value was 4.01 L/day'.")
- implicit units: 'V c, L (θ3)' → L (from the paper text: "The text states: 'central volume of distribution (V c) was 3.10 L'.")
- implicit units: 'V p, L (θ4)' → L (from the paper text: "The text states: 'peripheral volume of distribution (V p) was 4.47 L'.")
- implicit units: 'Maximum MM elimination (V max), μg/ml/day (θ5)' — the LLM proposed 'μg/ml/day', whose dimension does not fit Q66; left unset
- implicit units: 'Michaelis constant (K M), μg/ml (θ6)' → μg/ml (from the paper text: "The text states: 'The ADC V max and K M were 3.35 μg/ml/day and 3.44 μg/ml, respectively.'")
- implicit units: 'Rate constant of delay (k tr), 1/day (θ9)' → 1/day (from the paper text: "The text states: 'Terminal slope of the MMAE concentration–time curve was defined by the delay compartment rate (k tr) w")
- implicit units: 'CLMMAE, L/day (θ10)' → L/day (from the paper text: "The text states: 'Apparent clearance of MMAE (CLMMAE) was 42.8 L/day'.")
- implicit units: 'V MMAE, L (θ11)' → L (from the paper text: "The text states: 'typical value of apparent MMAE central volume of distribution (V MMAE) was 2.09 L'.")
- implicit units: 'Rate constant of DAR decay (β), 1/day (θ12)' → 1/day (from the popPK convention: 'The parameter is a first-order rate constant (decay of drug-to-antibody ratio). The text describes the decay function bu')
- metabolite volume: 'V MMAE, L (θ11)' Q63→Q61 for monomethyl auristatin E — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tisotumab vedotin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 24 linked by role; re-tagged parent→monomethyl auristatin E ×27
- molar mass: none found for 'tisotumab vedotin' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.933 (28/30 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[mmae (t 1/2,mmae)]` | 0.0339 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mmae delay half‐life (t 1/2,ktr)]` | not captured | 2.56 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q61 | pass | 2.09 | 2.09 | 1.0 | 0.05 | footnote reference category |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row7:col1', 'psp412850-tbl-0002:row7:col2', 'psp412850-tbl-0002:row7:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row2:col1', 'psp412850-tbl-0002:row2:col2', 'psp412850-tbl-0002:row2:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row14:col1', 'psp412850-tbl-0002:row14:col2', 'psp412850-tbl-0002:row14:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row3:col1', 'psp412850-tbl-0002:row3:col2', 'psp412850-tbl-0002:row3:col3'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row13:col1', 'psp412850-tbl-0002:row13:col2', 'psp412850-tbl-0002:row13:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row16:col1', 'psp412850-tbl-0002:row16:col2', 'psp412850-tbl-0002:row16:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row11:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row22:col1', 'psp412850-tbl-0002:row22:col2', 'psp412850-tbl-0002:row22:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row10:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row15:col1', 'psp412850-tbl-0002:row15:col2', 'psp412850-tbl-0002:row15:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row4:col1', 'psp412850-tbl-0002:row4:col2', 'psp412850-tbl-0002:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row5:col1', 'psp412850-tbl-0002:row5:col2', 'psp412850-tbl-0002:row5:col3'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row6:col1', 'psp412850-tbl-0002:row6:col2', 'psp412850-tbl-0002:row6:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.42 | not captured | not captured | ['psp412850-tbl-0002:row2:col1', 'psp412850-tbl-0002:row2:col2', 'psp412850-tbl-0002:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0592 L/h | not captured | not captured | ['psp412850-tbl-0002:row2:col1', 'psp412850-tbl-0002:row2:col2', 'psp412850-tbl-0002:row2:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.78 L/h | not captured | not captured | ['psp412850-tbl-0002:row14:col1', 'psp412850-tbl-0002:row14:col2', 'psp412850-tbl-0002:row14:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.09 L | not captured | not captured | ['psp412850-tbl-0002:row15:col1', 'psp412850-tbl-0002:row15:col2', 'psp412850-tbl-0002:row15:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.1 L | not captured | not captured | ['psp412850-tbl-0002:row4:col1', 'psp412850-tbl-0002:row4:col2', 'psp412850-tbl-0002:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.47 L | not captured | not captured | ['psp412850-tbl-0002:row5:col1', 'psp412850-tbl-0002:row5:col2', 'psp412850-tbl-0002:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_tisotumab_vedotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibiansky_2022` / `Gibiansky_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:16 UTC</sub>
