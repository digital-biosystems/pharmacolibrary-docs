<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;pregabalin&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/&quot;},{&quot;label&quot;:&quot;Hong_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pregabalin_Bae2016_reference&quot;,&quot;label&quot;:&quot;Bae_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pregabalin — `Pregabalin_Hong2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-07 07:16 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. CL, V2/F, Q/F and V3/F have no unit.

<div class="pk-model-meta" hidden drug="pregabalin" model-id="Pregabalin_Hong2016_reference" status="needs_review" stale="true" population="healthy adults" measured-compound="pregabalin" parameterization="apparent" topology="1C"></div>

## Citation
Hong T, Han S, Lee J, Jeon S, Yim DS. Comparison of oral absorption models for pregabalin: usefulness of transit compartment model. Drug design, development and therapy 10:3995–4003 (2016).
  ·  DOI: [10.2147/DDDT.S123318](https://doi.org/10.2147/DDDT.S123318)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 150 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, CLt/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| θCLCR | CL | 0.511 |  | 8.96 |  |
| V2/F | V2/F | 18.0 | L | 1.78 | 27.8 (34.1% RSE) |
| Q/F | Q/F | 26.5 | L/h | 3.63 |  |
| V3/F | V3/F | 27.0 | L | 1.93 | None (None% RSE) |
| MTTfed | MTT | 0.879 |  | 6.88 |  |
| NN | n_transit | 3.61 |  | 5.32 |  |
| CLt/F | CLt/F | 6.25 | L/h | 0.80 |  |
| u 2 Apparent volume of distribution (L) | V/F | 109.0 | L |  |  |
| Absorption rate constant (k a ) | kabs | 2.0 | h À1 |  |  |
| Lag time (hour) | tlag | 0.495 | hour |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.727). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL, V2/F, Q/F and V3/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — pregabalin: CL 0.511, V2/F 18, Q/F 26.5, V3/F 27, MTT 0.494, n_transit 3.61, V/F 109 L, kabs 2 h À1, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption rate constant: this record has 2.0, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCLCR | `Q22` · CL | 0.511 |  |  |  |  | 8.96 | llm (0.6) | t5-dddt-10-3995:row4:col2, t5-dddt-10-3995:row4:col3 |  |
| V2/F | `Q82` · V2/F | 18.0 | L | 0.018 | m3 | L | 1.78 | exact (1) | t5-dddt-10-3995:row5:col2, t5-dddt-10-3995:row5:col3 | 27.8 (34.1% RSE) |
| Q/F | `Q69` · Q/F | 26.5 | L/h | 7.361e-06 | m3/s | L/h | 3.63 | exact (1) | t5-dddt-10-3995:row6:col2, t5-dddt-10-3995:row6:col3 |  |
| V3/F | `Q78` · V3/F | 27.0 | L | 0.027 | m3 | L | 1.93 | exact (1) | t5-dddt-10-3995:row7:col2, t5-dddt-10-3995:row7:col3 | None (None% RSE) |
| MTTfed | `Q81` · MTT | 0.879 |  |  |  |  | 6.88 | llm (0.6) | t5-dddt-10-3995:row9:col2, t5-dddt-10-3995:row9:col3 |  |
| NN | `Q311` · n_transit | 3.61 |  |  |  |  | 5.32 | exact (1) | t5-dddt-10-3995:row10:col2, t5-dddt-10-3995:row10:col3 |  |
| CLt/F | `Q900` · CLt/F | 6.25 | L/h | 1.736e-06 | m3/s |  | 0.80 |  | t5-dddt-10-3995:row3:col2, t5-dddt-10-3995:row3:col3 |  |
| u 2 Apparent volume of distribution (L) | `Q76` · V/F | 109.0 | L | 0.109 | m3 | L |  | review_gapfill (0.7) | Bae_2016:review |  |
| Absorption rate constant (k a ) | `Q49` · kabs | 2.0 | h À1 | 0.0005556 | 1/s | 1/h |  | review_gapfill (0.7) | Bae_2016:review |  |
| Lag time (hour) | `Q83` · tlag | 0.495 | hour | 1782 | s | h |  | review_gapfill (0.7) | van_2018:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CLt/F | Q27 | llm |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σprop (%)' routed out of structural estimates ('Residual error')
- column 'description (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'MTTfast' — extend the ontology if this is a real PK parameter (source ['t5-dddt-10-3995:row8:col2', 't5-dddt-10-3995:row8:col3'])
- dropped unlinked row (NIL): 'Kafast' — extend the ontology if this is a real PK parameter (source ['t5-dddt-10-3995:row11:col2', 't5-dddt-10-3995:row11:col3'])
- dropped unlinked row (NIL): 'Kafed' — extend the ontology if this is a real PK parameter (source ['t5-dddt-10-3995:row12:col2', 't5-dddt-10-3995:row12:col3'])
- implicit units: 'CLt/F' → L/h (from the paper text: "The paper states: 'Estimated population CL/F in the first-order absorption model (6.43 L/h) was slightly greater than th")
- implicit units: 'V2/F' → L (from the popPK convention: 'V2/F is a volume of distribution. The standard unit for volume in population PK is liters (L). The value 18.0 is consist')
- implicit units: 'Q/F' → L/h (from the popPK convention: 'Q/F is an intercompartmental clearance. The standard unit for clearance parameters in population PK is liters per hour (')
- implicit units: 'V3/F' → L (from the popPK convention: 'V3/F is a volume of distribution. The standard unit for volume in population PK is liters (L). The value 27.0 is consist')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pregabalin
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- bound model equation to Q27 (CL/F): CL/F = CLt/F * (CLCR/120)^θCLCR
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CLt/F'; equation kept verbatim
- gap-filled Q76 (V/F) from Bae_2016's review values (primary lacked it)
- gap-filled Q49 (kabs) from Bae_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from van_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell t5-dddt-10-3995:row3:col4 = '6.25 (6.08–6.42)'
- unparsed cell t5-dddt-10-3995:row4:col4 = '0.509 (0.405–0.601)'
- unparsed cell t5-dddt-10-3995:row5:col4 = '17.7 (4.65–22.7)'
- unparsed cell t5-dddt-10-3995:row6:col4 = '26.5 (19.9–43.5)'
- unparsed cell t5-dddt-10-3995:row7:col4 = '27.2 (23.3–37.7)'
- unparsed cell t5-dddt-10-3995:row8:col4 = '0.499 (0.411–0.600)'
- unparsed cell t5-dddt-10-3995:row9:col4 = '0.884 (0.751–1.101)'
- unparsed cell t5-dddt-10-3995:row10:col4 = '3.63 (3.19–4.26)'
- unparsed cell t5-dddt-10-3995:row11:col1 = 'Absorption rate constant of fasting state (h−1)'
- unparsed cell t5-dddt-10-3995:row11:col4 = '5.73 (2.94–9.11)'
- unparsed cell t5-dddt-10-3995:row12:col1 = 'Absorption rate constant of fed state (h−1)'
- unparsed cell t5-dddt-10-3995:row12:col4 = '0.709 (0.617–0.814)'
- unparsed cell t5-dddt-10-3995:row14:col4 = '10.9 (8.6–13.3)'
- unparsed cell t5-dddt-10-3995:row15:col4 = '27.5 (13.2–60.7)'
- unparsed cell t5-dddt-10-3995:row18:col4 = '40.4 (28.5–53.3)'
- unparsed cell t5-dddt-10-3995:row19:col4 = '80.9 (70.7–88.9)'
- unparsed cell t5-dddt-10-3995:row21:col4 = '46.2 (36.2–57.1)'
- unparsed cell t5-dddt-10-3995:row24:col4 = '17.7 (15.6–19.9)'
- LLM selected parameter table(s) 5
- captured model equation CL/F = CLt/F * (CLCR/120)^θCLCR

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.727 (16/22 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 2.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kafast]` |  | 5.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.495 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mttfast]` |  | 0.494 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mttfed]` | 0.879 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[u 2 apparent volume of distribution]` | 109.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['t5-dddt-10-3995:row3:col2', 't5-dddt-10-3995:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2016:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['t5-dddt-10-3995:row6:col2', 't5-dddt-10-3995:row6:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Bae_2016:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['t5-dddt-10-3995:row7:col2', 't5-dddt-10-3995:row7:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['t5-dddt-10-3995:row5:col2', 't5-dddt-10-3995:row5:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['van_2018:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['t5-dddt-10-3995:row4:col2', 't5-dddt-10-3995:row4:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 109 L | ['Bae_2016:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 18 L | ['t5-dddt-10-3995:row5:col2', 't5-dddt-10-3995:row5:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpregabalin%5D%20Pregabalin_Hong2016_reference&body=Drug%3A%20pregabalin%0ARecord%3A%20Pregabalin_Hong2016_reference%0APaper%3A%20Hong_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pregabalin/Pregabalin_Hong2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:16 UTC</sub>
