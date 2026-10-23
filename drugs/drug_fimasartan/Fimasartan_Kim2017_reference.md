<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/&quot;},{&quot;label&quot;:&quot;Kim_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fimasartan_Kim2014v2_estimate&quot;,&quot;label&quot;:&quot;Kim_2014_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fimasartan — `Fimasartan_Kim2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Λ1 has no unit.

<div class="pk-model-meta" hidden drug="fimasartan" model-id="Fimasartan_Kim2017_reference" status="needs_review" stale="false" population="healthy adults and adults with hepatic impairment" measured-compound="fimasartan" parameterization="mechanistic" topology="1C"></div>

## Citation
Kim CO, Jeon S, Han S, Hong T, Park MS, Yoon YR et al. Decreased potency of fimasartan in liver cirrhosis was quantified using mixed-effects analysis. Translational and clinical pharmacology 25(1):43–51 (2017).
  ·  DOI: [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43)

## Population and dosing

**Population:** healthy adults and adults with hepatic impairment · condition hepatic impairment · age group adult · n = 18.

**Dosing:** 120 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL | CL | 27.0 | L/h | 13.3 |  |
| V2 | V2 | 48.7 | L | 20.4 |  |
| V3 | V3 | 46.5 | L | 11.1 |  |
| Ka | kabs | 0.319 | 1/h | 16.3 | 63.5 (None% RSE) |
| Q | Q | 3.40 | L/h | 12.4 |  |
| D2 | D1 | 0.583 | h | 9.8 |  |
| LAG | tlag | 2.0 | h | 0.1 |  |
| α | λ1 | 0.642 |  | 7.4 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.842). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Λ1 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — fimasartan: CL 27 L/h, V2 48.7 L, V3 46.5 L, kabs 0.319 1/h, Q 3.4 L/h, D1 0.583 h, tlag 2 h, λ1 0.642.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fimasartan, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 27.0 | L/h | 7.5e-06 | m3/s | L/h | 13.3 | exact (1) | T2:row2:col2, T2:row2:col3 |  |
| V2 | `Q64` · V2 | 48.7 | L | 0.0487 | m3 | L | 20.4 | exact (1) | T2:row3:col2, T2:row3:col3 |  |
| V3 | `Q77` · V3 | 46.5 | L | 0.0465 | m3 | L | 11.1 | exact (1) | T2:row4:col2, T2:row4:col3 |  |
| Ka | `Q49` · kabs | 0.319 | 1/h | 8.861e-05 | 1/s | 1/h | 16.3 | exact (1) | T2:row5:col2, T2:row5:col3 | 63.5 (None% RSE) |
| Q | `Q30` · Q | 3.40 | L/h | 9.444e-07 | m3/s | L/h | 12.4 | exact (1) | T2:row6:col2, T2:row6:col3 |  |
| D2 | `Q310` · D1 | 0.583 | h | 2099 | s | h | 9.8 | llm (0.6) | T2:row7:col2, T2:row7:col3 |  |
| LAG | `Q83` · tlag | 2.0 | h | 7200 | s | h | 0.1 | llm (0.6) | T2:row8:col2, T2:row8:col3 |  |
| α | `Q67` · λ1 | 0.642 |  |  |  |  | 7.4 | exact (1) | T2:row13:col2, T2:row13:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωCL/F' routed out of structural estimates ('Interindividual variability (ω, CV%)')
- table section iiv: 'ωV2/F' routed out of structural estimates ('Interindividual variability (ω, CV%)')
- table section iiv: 'ωKa' routed out of structural estimates ('Interindividual variability (ω, CV%)')
- table section iiv: 'ωa' routed out of structural estimates ('Interindividual variability (ω, CV%)')
- table section residual_error: 'σadd' routed out of structural estimates ('Residual error')
- table section residual_error: 'σprop' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'IL1' — extend the ontology if this is a real PK parameter (source ['T2:row10:col2', 'T2:row10:col3'])
- dropped unlinked row (NIL): 'IL2' — extend the ontology if this is a real PK parameter (source ['T2:row11:col2', 'T2:row11:col3'])
- implicit units: 'CL' → L/h (from the popPK convention: 'No unit provided in text or table caption. CL (Total clearance) is conventionally expressed in L/h. The value 27.0 is co')
- implicit units: 'V2' → L (from the popPK convention: 'No unit provided in text or table caption. V2 (Volume of distribution of the peripheral compartment) is conventionally e')
- implicit units: 'V3' → L (from the popPK convention: 'No unit provided in text or table caption. V3 (Volume of distribution of the second peripheral compartment) is conventio')
- implicit units: 'Ka' → 1/h (from the popPK convention: 'No unit provided in text or table caption. Ka (Absorption rate constant) is a first-order rate constant, conventionally ')
- implicit units: 'Q' → L/h (from the popPK convention: 'No unit provided in text or table caption. Q (Intercompartmental clearance) is conventionally expressed in L/h. The valu')
- implicit units: 'D2' → h (from the popPK convention: 'No unit provided in text or table caption. D2 (Duration of zero-order absorption) is a time parameter, conventionally ex')
- implicit units: 'LAG' → h (from the popPK convention: 'No unit provided in text or table caption. LAG (Absorption lag time) is a time parameter, conventionally expressed in h.')
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q64 (V2); Q30 (Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fimasartan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count

**Extraction notes:**
- unparsed cell T2:row2:col4 = '27.1 (21.8–38.7)'
- unparsed cell T2:row3:col4 = '46.8 (28.2–96.0)'
- unparsed cell T2:row4:col4 = '47.4 (30.5–68.7)'
- unparsed cell T2:row5:col1 = 'Absorption rate constant (h–1)'
- unparsed cell T2:row5:col4 = '0.320 (0.220–0.518)'
- unparsed cell T2:row6:col4 = '3.62 (2.28–6.33)'
- unparsed cell T2:row7:col4 = '0.598 (0.500–0.742)'
- unparsed cell T2:row8:col4 = '2.0 (1.4–2.5)'
- unparsed cell T2:row10:col4 = '0.084 (0.001–0.668)'
- unparsed cell T2:row11:col4 = '0.895 (0.607–1.481)'
- unparsed cell T2:row13:col1 = 'Proportionality constant for fraction of zero-order absorption process (F2)'
- unparsed cell T2:row13:col4 = '0.633 (0.455–0.799)'
- unparsed cell T2:row15:col4 = '35.8 (12.2–67.2)'
- unparsed cell T2:row16:col4 = '89.9 (16.1–166.8)'
- unparsed cell T2:row17:col4 = '49.3 (5.0–74.6)'
- unparsed cell T2:row18:col4 = '61.5 (6.0–152.0)'
- unparsed cell T2:row21:col4 = '0.350 (0.122–0.672)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.842 (16/19 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[d2]` | 0.583 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fimasartan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | fimasartan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row2:col2', 'T2:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row6:col2', 'T2:row6:col3'] |
| C5_dimension_Q310 | pass | [time] |  | ['T2:row7:col2', 'T2:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row5:col2', 'T2:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row3:col2', 'T2:row3:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T2:row4:col2', 'T2:row4:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['T2:row8:col2', 'T2:row8:col3'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['T2:row13:col2', 'T2:row13:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 27 | ['T2:row2:col2', 'T2:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 27 L/h | ['T2:row2:col2', 'T2:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 48.7 L | ['T2:row3:col2', 'T2:row3:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfimasartan%5D%20Fimasartan_Kim2017_reference&body=Drug%3A%20fimasartan%0ARecord%3A%20Fimasartan_Kim2017_reference%0APaper%3A%20Kim_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fimasartan/Fimasartan_Kim2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:28 UTC</sub>
