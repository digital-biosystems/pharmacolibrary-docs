<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;quinidine&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/&quot;},{&quot;label&quot;:&quot;Kuroda_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinidine_Kuroda2024_reference&quot;,&quot;label&quot;:&quot;Kuroda_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Kuroda2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinidine — `Quinidine_Kuroda2024_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**V1, V2, V3, CL, Q, kabs, t1/2α, t1/2β, t1/2γ, t1/2ka , Vss and MRT have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Vss and MRT), so that value has no SI equivalent. Extracted — quinidine: V1 0.63, V2 0.59, V3 3.68, CL 0.49, Q 2.87, kabs 1, Fab 36.4, t1/2α 0.06, … (+5).

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:31:07.503281+00:00) predates the upstream re-run (2026-10-06 04:23:24.109307+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `quinidine sulfate dihydrate`, measured `quinidine`.

## Citation
Kuroda T et al., Rational quinidine dosage regimen for a…, Frontiers in veterinary sci… (2024)
  ·  DOI: [10.3389/fvets.2024.1454342](https://doi.org/10.3389/fvets.2024.1454342)

<div class="pk-model-meta" hidden drug="quinidine" model-id="Quinidine_Kuroda2024_reference" status="extracted" stale="true" population="Thoroughbred racehorses" measured-compound="quinidine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 13 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | 0.63 | L | 0.00063 | L | 12.4 | exact (1.0) | tab1:row1:col2, tab1:row1:col3, tab1:row1:col4, tab1:row1:col5 | — | 40.5 (None% RSE) |
| V2 | `Q64` · V2 | 0.59 | L | 0.00059 | L | 12.1 | exact (1.0) | tab1:row2:col2, tab1:row2:col3, tab1:row2:col4, tab1:row2:col5 | — | 37.8 (None% RSE) |
| V3 | `Q77` · V3 | 3.68 | L | 0.00368 | L | 7.0 | exact (1.0) | tab1:row3:col2, tab1:row3:col3, tab1:row3:col4, tab1:row3:col5 | — | 28.5 (None% RSE) |
| CL | `Q22` · CL | 0.49 | L/h | 1.361111111111111e-07 | L/h | 6.4 | exact (1.0) | tab1:row4:col2, tab1:row4:col3, tab1:row4:col4, tab1:row4:col5 | — | 25.6 (None% RSE) |
| CL2 | `Q30` · Q | 2.87 | L/h | 7.972222222222223e-07 | L/h | 15.2 | special_case (0.95) | tab1:row5:col2, tab1:row5:col3, tab1:row5:col4, tab1:row5:col5 | — | 74.9 (None% RSE) |
| Kabs | `Q49` · kabs | 1.00 | 1/h | 0.0002777777777777778 | 1/h | 24.5 | exact (1.0) | tab1:row7:col1, tab1:row7:col2, tab1:row7:col3, tab1:row7:col4, tab1:row7:col5 | — | 94.3 (None% RSE) |
| F | `Q40` · Fab | 36.4 | not captured | not captured | not captured | 2.9 | exact (1.0) | tab1:row8:col2, tab1:row8:col3, tab1:row8:col4, tab1:row8:col5 | — | 33.1 (None% RSE) |
| Half_life_alpha | `Q59` · t1/2α | 0.06 | h | 216.0 | h | 10.2 | llm (0.6) | tab1:row14:col2, tab1:row14:col3, tab1:row14:col4, tab1:row14:col5 | — | not captured |
| Half_life_Beta | `Q60` · t1/2β | 0.31 | h | 1116.0 | h | 11.9 | llm (0.6) | tab1:row15:col2, tab1:row15:col3, tab1:row15:col4, tab1:row15:col5 | — | not captured |
| Half_life_Gamma | `Q89` · t1/2γ | 7.76 | h | 27936.0 | h | 8.8 | llm (0.6) | tab1:row16:col2, tab1:row16:col3, tab1:row16:col4, tab1:row16:col5 | — | not captured |
| Absorption_Half_life | `Q95` · t1/2ka | 0.69 | h | 2484.0 | h | 23.1 | llm (0.6) | tab1:row17:col2, tab1:row17:col3, tab1:row17:col4, tab1:row17:col5 | — | not captured |
| Vss (steady-state volume of distribution) | `Q65` · Vss | 4.90 | L | 0.004900000000000001 | L | 5.1 | exact (1.0) | tab1:row18:col2, tab1:row18:col3, tab1:row18:col4, tab1:row18:col5 | — | not captured |
| MRT (Mean residence time) | `Q53` · MRT | 10.12 | h | 36432.0 | h | 9.3 | exact (1.0) | tab1:row19:col2, tab1:row19:col3, tab1:row19:col4, tab1:row19:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- table section iiv: 'V1' routed out of structural estimates ('BSV%')
- table section iiv: 'V2' routed out of structural estimates ('BSV%')
- table section iiv: 'V3' routed out of structural estimates ('BSV%')
- table section iiv: 'CL' routed out of structural estimates ('BSV%')
- table section iiv: 'CL2' routed out of structural estimates ('BSV%')
- table section iiv: 'CL3' routed out of structural estimates ('BSV%')
- table section iiv: 'Kabs' routed out of structural estimates ('BSV%')
- table section iiv: 'F' routed out of structural estimates ('BSV%')
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CL3' — extend the ontology if this is a real PK parameter (source ['tab1:row6:col2', 'tab1:row6:col3', 'tab1:row6:col4', 'tab1:row6:col5'])
- unit_dimension_unknown: 'steady-state volume of distribution' (Vss)
- unit_dimension_unknown: 'Mean residence time' (MRT)
- implicit units: 'V1' → L (from the popPK convention: 'V1 is a volume of distribution. In population PK, volumes are typically reported in liters (L). The value 0.63 is consis')
- implicit units: 'V2' → L (from the popPK convention: 'V2 is a volume of distribution. Standard unit for volume parameters in PK is liters (L).')
- implicit units: 'V3' → L (from the popPK convention: 'V3 is a volume of distribution. Standard unit for volume parameters in PK is liters (L).')
- implicit units: 'CL' → L/h (from the popPK convention: 'CL is plasma clearance. Standard unit for clearance in population PK is liters per hour (L/h). The value 0.49 is consist')
- implicit units: 'CL2' → L/h (from the popPK convention: 'CL2 is an intercompartmental clearance. Standard unit for clearance parameters is liters per hour (L/h).')
- implicit units: 'Kabs' → 1/h (from the popPK convention: 'Kabs is an absorption rate constant. Standard unit for first-order rate constants is inverse hours (1/h).')
- implicit units: 'Half_life_alpha' → h (from the popPK convention: 'Half_life_alpha is a half-life. Standard unit for time parameters like half-life is hours (h).')
- implicit units: 'Half_life_Beta' → h (from the popPK convention: 'Half_life_Beta is a half-life. Standard unit for time parameters like half-life is hours (h).')
- implicit units: 'Half_life_Gamma' → h (from the popPK convention: 'Half_life_Gamma is a half-life. Standard unit for time parameters like half-life is hours (h).')
- implicit units: 'Absorption_Half_life' → h (from the popPK convention: 'Absorption_Half_life is a half-life. Standard unit for time parameters like half-life is hours (h).')
- implicit units: 'Vss (steady-state volume of distribution)' → L (from the popPK convention: 'Vss is a volume of distribution. Standard unit for volume parameters in PK is liters (L).')
- implicit units: 'MRT (Mean residence time)' → h (from the popPK convention: 'MRT is a time parameter (Mean Residence Time). Standard unit is hours (h).')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quinidine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (31/31 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab1:row4:col2', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab1:row5:col2', 'tab1:row5:col3', 'tab1:row5:col4', 'tab1:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab1:row7:col1', 'tab1:row7:col2', 'tab1:row7:col3', 'tab1:row7:col4', 'tab1:row7:col5'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tab1:row19:col2', 'tab1:row19:col3', 'tab1:row19:col4', 'tab1:row19:col5'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['tab1:row14:col2', 'tab1:row14:col3', 'tab1:row14:col4', 'tab1:row14:col5'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab1:row15:col2', 'tab1:row15:col3', 'tab1:row15:col4', 'tab1:row15:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row1:col2', 'tab1:row1:col3', 'tab1:row1:col4', 'tab1:row1:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row2:col2', 'tab1:row2:col3', 'tab1:row2:col4', 'tab1:row2:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row18:col2', 'tab1:row18:col3', 'tab1:row18:col4', 'tab1:row18:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row3:col2', 'tab1:row3:col3', 'tab1:row3:col4', 'tab1:row3:col5'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['tab1:row16:col2', 'tab1:row16:col3', 'tab1:row16:col4', 'tab1:row16:col5'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['tab1:row17:col2', 'tab1:row17:col3', 'tab1:row17:col4', 'tab1:row17:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.49 | not captured | not captured | ['tab1:row4:col2', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.49 L/h | not captured | not captured | ['tab1:row4:col2', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.63 L | not captured | not captured | ['tab1:row1:col2', 'tab1:row1:col3', 'tab1:row1:col4', 'tab1:row1:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.59 L | not captured | not captured | ['tab1:row2:col2', 'tab1:row2:col3', 'tab1:row2:col4', 'tab1:row2:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 4.9 L | not captured | not captured | ['tab1:row18:col2', 'tab1:row18:col3', 'tab1:row18:col4', 'tab1:row18:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_quinidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kuroda_2024` / `Kuroda_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_modelica.zip" download>Quinidine_Kuroda2024_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_fmi.zip" download>Quinidine_Kuroda2024_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_matlab.zip" download>Quinidine_Kuroda2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_matlab_simbio.zip" download>Quinidine_Kuroda2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_sbml.zip" download>Quinidine_Kuroda2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_cellml.zip" download>Quinidine_Kuroda2024_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference.svg" alt="Quinidine_Kuroda2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 350 mg, single dose, first-order absorption (ka 1 /h, F 36.4). Doses in the paper: 350, 1400 mg.

<dbs-fmusim paramsurl="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Quinidine_Kuroda2024_reference_params.json` · controls `Quinidine_Kuroda2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 04:23 UTC</sub>
