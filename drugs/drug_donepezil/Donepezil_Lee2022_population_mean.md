<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Lee_2022 \u00b7 population_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Lee2022_population_mean`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Km has no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — donepezil: V1 1.12e+03 L, V2 1.85e+03 L, CL 388 L/h, Q 551 L/h, kabs 2.21 1/h, tmax 1.87 h, Km 0.9.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has donepezil, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Lee DY et al., Establishment of Level a In Vitro-In Vi…, Pharmaceutics (2022)
  ·  DOI: [10.3390/pharmaceutics14061226](https://doi.org/10.3390/pharmaceutics14061226)

## Model component
<dbs-pgx drug="donepezil" model-id="Donepezil_Lee2022_population_mean" status="needs_review" stale="false" population="Beagle dogs" measured-compound="donepezil" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vd of the central compartment | `Q63` · V1 | 1124.69 | L | 1.12469 | L | not captured | boundary_compartment (0.9) | pharmaceutics-14-01226-t004:row1:col3 | — | not captured |
| Vd of the peripheral compartment | `Q64` · V2 | 1850.80 | L | 1.8508 | L | not captured | boundary_compartment (0.9) | pharmaceutics-14-01226-t004:row2:col3 | — | not captured |
| Systemic clearance | `Q22` · CL | 388.07 | L/h | 0.00010779722222222223 | L/h | not captured | llm_confirmed (0.6) | pharmaceutics-14-01226-t004:row3:col3 | — | not captured |
| Distribution clearance | `Q30` · Q | 550.90 | L/h | 0.00015302777777777775 | L/h | not captured | exact (1.0) | pharmaceutics-14-01226-t004:row4:col3 | — | not captured |
| 1st order rate constant of drug absorption | `Q49` · kabs | 2.21 | 1/h | 0.0006138888888888889 | 1/h | not captured | llm_corrected (0.6) | pharmaceutics-14-01226-t004:row5:col3 | — | not captured |
| Time associated with the maximal changes in Fabs | `Q56` · tmax | 1.87 | h | 6732.0 | h | not captured | llm (0.6) | pharmaceutics-14-01226-t004:row6:col3 | — | not captured |
| Drug amount at which the dissolution rate is half of Vmax | `Q1` · Km | 0.90 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | pharmaceutics-14-01226-t004:row7:col3 | — | not captured |
| theta_q66_category | `Q900` · theta_q66_category | 3.658 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-14-01226-t004:row9:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Hill coefficient' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-01226-t004:row8:col3'])
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q66 — ambiguous identity (two shifts cannot share one category)
- implicit units: 'Vd of the central compartment' → L (from the popPK convention: 'No unit stated in text, caption, or footnotes for Table 4; volumes of distribution in population PK are conventionally r')
- implicit units: 'Vd of the peripheral compartment' → L (from the popPK convention: 'No unit stated for Table 4 parameters; peripheral volumes of distribution are conventionally in L, consistent with 1850.')
- implicit units: 'Systemic clearance' → L/h (from the popPK convention: 'No unit stated for Table 4 parameters; systemic clearance is conventionally in L/h, consistent with 388.07.')
- implicit units: 'Distribution clearance' → L/h (from the popPK convention: 'No unit stated for Table 4 parameters; intercompartmental distribution clearance is conventionally in L/h, consistent wi')
- implicit units: '1st order rate constant of drug absorption' → 1/h (from the popPK convention: 'No unit stated for Table 4 parameters; first-order absorption rate constants are conventionally in 1/h, consistent with ')
- implicit units: 'Time associated with the maximal changes in Fabs' → h (from the popPK convention: 'No unit stated for Table 4 parameters; times such as Tabs (time associated with maximal changes in Fabs) are conventiona')
- implicit units: 'Drug amount at which the dissolution rate is half of Vmax' — the LLM proposed 'mg', whose dimension does not fit Q1; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vd of the central compartment); Q64 (Vd of the peripheral compartment); Q22 (Systemic clearance); Q30 (Distribution clearance)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=donepezil
- population split: 'population mean' subgroup of Lee_2022 (paper reports 5 populations: ir (n = 3), population mean, sr-1 (n = 3), sr-2 (n = 3), sr-3 (n = 3))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-14-01226-t004:row1:col1 = 'V1'
- unparsed cell pharmaceutics-14-01226-t004:row2:col1 = 'V2'
- unparsed cell pharmaceutics-14-01226-t004:row7:col1 = 'AM50·in vivo'
- unparsed cell pharmaceutics-14-01226-t004:row9:col1 = 'Vmax·in vivo·SR-1'
- unparsed cell pharmaceutics-14-01226-t004:row10:col1 = 'Vmax·in vivo·SR-2'
- unparsed cell pharmaceutics-14-01226-t004:row11:col1 = 'Vmax·in vivo·SR-3'
- companion parameter table 3 transcribed (32 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1st order rate constant of drug absorption]` | 2.21 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[1st order rate constant of drug absorption]` | not captured | 2.21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution clearance]` | 550.90 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution clearance]` | not captured | 550.90 | only_one_extracted |
| `gpt-oss-120b` | `parameters[drug amount at which the dissolution rate is half of vmax]` | 0.90 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[drug amount at which the dissolution rate is half of vmax]` | not captured | 0.90 | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` | 388.07 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` | not captured | 388.07 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q66_category]` | 3.658 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q66_category]` | not captured | 3.658 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time associated with the maximal changes in fabs]` | 1.87 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[time associated with the maximal changes in fabs]` | not captured | 1.87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd of the central compartment]` | 1124.69 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd of the central compartment]` | not captured | 1124.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd of the peripheral compartment]` | 1850.80 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd of the peripheral compartment]` | not captured | 1850.80 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | donepezil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | donepezil | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01226-t004:row3:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01226-t004:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01226-t004:row5:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-14-01226-t004:row6:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-14-01226-t004:row1:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-14-01226-t004:row2:col3'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-14-01226-t004:row7:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 388.07 | not captured | not captured | ['pharmaceutics-14-01226-t004:row3:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 388 L/h | not captured | not captured | ['pharmaceutics-14-01226-t004:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.12e+03 L | not captured | not captured | ['pharmaceutics-14-01226-t004:row1:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.85e+03 L | not captured | not captured | ['pharmaceutics-14-01226-t004:row2:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_donepezil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lee_2022` / `Lee_2022::population_mean`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:30 UTC</sub>
