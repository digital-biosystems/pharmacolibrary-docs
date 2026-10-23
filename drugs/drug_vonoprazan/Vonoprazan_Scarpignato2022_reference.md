<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;vonoprazan&quot;,&quot;href&quot;:&quot;drugs/drug_vonoprazan/&quot;},{&quot;label&quot;:&quot;Scarpignato_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vonoprazan — `Vonoprazan_Scarpignato2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="vonoprazan" model-id="Vonoprazan_Scarpignato2022_reference" status="needs_review" stale="false" population="healthy volunteers and patients with gastroesophageal reflux disease" measured-compound="vonoprazan" parameterization="mechanistic" topology="1C"></div>

## Citation
Scarpignato C, Leifke E, Smith N, Mulford DJ, Lahu G, Facius A et al. A Population Pharmacokinetic Model of Vonoprazan: Evaluating the Effects of Race, Disease Status, and Other Covariates on Exposure. Journal of clinical pharmacology 62(6):801–811 (2022).
  ·  DOI: [10.1002/jcph.2019](https://doi.org/10.1002/jcph.2019)

## Population and dosing

**Population:** healthy volunteers and patients with gastroesophageal reflux disease · condition gastroesophageal reflux disease · age group adult · n = 1156.

**Dosing:** 20 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Frel | Frel | 0.389 |  | 4.1 |  |
| tlag | tlag | 0.225 | h | 1.4 |  |
| Ka | kabs | 2.51 | 1/h | 12.3 |  |
| Patient effect, % | E | 15.6 |  |  |  |
| CL | CL | 119 | L/h | 19.9 | 1.5 (None% RSE) |
| creatinine_effect_exp | creatinine_effect_exp | 27.6 |  |  |  |
| V2 | V2 | 1037 | L | 14.8 |  |
| age_effect_exp | age_effect_exp | 7.4 |  |  |  |
| Q | Q | 50.4 | L/h | 7.2 |  |
| V3 | V3 | 324 | L | 4.7 |  |
| theta_q44_food | theta_q44_food | 10.3 |  |  |  |
| theta_q319_weight | theta_q319_weight | 19.9 |  |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — vonoprazan: Frel 0.389, tlag 0.225 h, kabs 2.51 1/h, E 15.6, CL 119 L/h, V2 1.04e+03 L, Q 50.4 L/h, V3 324 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has vonoprazan, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Frel | `Q87` · Frel | 0.389 |  |  |  |  | 4.1 | exact (1) | jcph2019-tbl-0003:row1:col2, jcph2019-tbl-0003:row1:col3 |  |
| tlag | `Q83` · tlag | 0.225 | h | 810 | s | h | 1.4 | exact (1) | jcph2019-tbl-0003:row2:col2, jcph2019-tbl-0003:row2:col3 |  |
| Ka | `Q49` · kabs | 2.51 | 1/h | 0.0006972 | 1/s | 1/h | 12.3 | exact (1) | jcph2019-tbl-0003:row4:col2, jcph2019-tbl-0003:row4:col3 |  |
| Patient effect, % | `Q38` · E | 15.6 |  |  |  |  |  | llm (0.6) | jcph2019-tbl-0003:row8:col1, jcph2019-tbl-0003:row8:col2, jcph2019-tbl-0003:row13:col1, jcph2019-tbl-0003:row13:col2 |  |
| CL | `Q22` · CL | 119 | L/h | 3.306e-05 | m3/s | L/h | 19.9 | exact (1) | jcph2019-tbl-0003:row10:col2, jcph2019-tbl-0003:row10:col3 | 1.5 (None% RSE) |
| creatinine_effect_exp | `Q900` · creatinine_effect_exp | 27.6 |  |  |  |  |  |  | jcph2019-tbl-0003:row12:col1, jcph2019-tbl-0003:row12:col2, jcph2019-tbl-0003:row17:col1, jcph2019-tbl-0003:row17:col2 |  |
| V2 | `Q64` · V2 | 1037 | L | 1.037 | m3 | L | 14.8 | exact (1) | jcph2019-tbl-0003:row16:col2, jcph2019-tbl-0003:row16:col3 |  |
| age_effect_exp | `Q900` · age_effect_exp | 7.4 |  |  |  |  |  |  | jcph2019-tbl-0003:row18:col1, jcph2019-tbl-0003:row18:col2 |  |
| Q | `Q30` · Q | 50.4 | L/h | 1.4e-05 | m3/s | L/h | 7.2 | exact (1) | jcph2019-tbl-0003:row21:col2, jcph2019-tbl-0003:row21:col3 |  |
| V3 | `Q77` · V3 | 324 | L | 0.324 | m3 | L | 4.7 | exact (1) | jcph2019-tbl-0003:row22:col2, jcph2019-tbl-0003:row22:col3 |  |
| theta_q44_food | `Q900` · theta_q44_food | 10.3 |  |  |  |  |  |  | jcph2019-tbl-0003:row5:col1, jcph2019-tbl-0003:row5:col2 |  |
| theta_q319_weight | `Q900` · theta_q319_weight | 19.9 |  |  |  |  |  |  | jcph2019-tbl-0003:row11:col1, jcph2019-tbl-0003:row11:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'role' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Delay, %' — extend the ontology if this is a real PK parameter (source ['jcph2019-tbl-0003:row3:col1', 'jcph2019-tbl-0003:row3:col2'])
- dropped unlinked row (NIL): 'Non‐Asian effect, %' — extend the ontology if this is a real PK parameter (source ['jcph2019-tbl-0003:row6:col1', 'jcph2019-tbl-0003:row6:col2', 'jcph2019-tbl-0003:row23:col1', 'jcph2019-tbl-0003:row23:col2'])
- dropped unlinked row (NIL): 'Female effect, %' — extend the ontology if this is a real PK parameter (source ['jcph2019-tbl-0003:row7:col1', 'jcph2019-tbl-0003:row7:col2'])
- covariate level 'Creatinine effect, exp' → Q900:creatinine_effect_exp = 27.6 (linear_fractional on Q22)
- covariate level 'Age effect, exp' → Q900:age_effect_exp = 7.4 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Patient effect (%)' — extend the ontology if this is a real PK parameter (source ['jcph2019-tbl-0003:row19:col1', 'jcph2019-tbl-0003:row19:col2'])
- routed 'add.err., b ng/mL' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q44 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'tlag' → h (from the popPK convention: 'Lag time (tlag) is a time constant representing a delay in absorption; standard convention is hours (h), and a value of ')
- implicit units: 'Ka' → 1/h (from the popPK convention: 'Absorption rate constant (Ka) is a first-order rate constant; standard convention is inverse hours (1/h).')
- implicit units: 'CL' → L/h (from the popPK convention: 'Total clearance (CL) is a flow rate parameter; standard convention is Liters per hour (L/h).')
- implicit units: 'V2' → L (from the popPK convention: 'Volume of distribution (V2) is a volume parameter; standard convention is Liters (L).')
- implicit units: 'Q' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is a flow rate parameter connecting compartments; standard convention is Liters per hou')
- implicit units: 'V3' → L (from the popPK convention: 'Volume of distribution (V3) is a volume parameter; standard convention is Liters (L).')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vonoprazan
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell jcph2019-tbl-0003:row1:col4 = '0.358, 0.420'
- unparsed cell jcph2019-tbl-0003:row2:col4 = '0.218, 0.231'
- unparsed cell jcph2019-tbl-0003:row3:col3 = '101, 113'
- unparsed cell jcph2019-tbl-0003:row4:col4 = '1.91, 3.11'
- unparsed cell jcph2019-tbl-0003:row5:col3 = '–70.7, –46.9'
- unparsed cell jcph2019-tbl-0003:row6:col3 = '–39.8, –0.6'
- unparsed cell jcph2019-tbl-0003:row7:col3 = '–36.6, 2.3'
- unparsed cell jcph2019-tbl-0003:row8:col3 = '–78.8, –44.3'
- unparsed cell jcph2019-tbl-0003:row9:col3 = '0.8, 1.0'
- unparsed cell jcph2019-tbl-0003:row10:col4 = '72, 165'
- unparsed cell jcph2019-tbl-0003:row11:col3 = '0.249, 0.568'
- unparsed cell jcph2019-tbl-0003:row12:col3 = '–0.54, –0.18'
- unparsed cell jcph2019-tbl-0003:row13:col3 = '–44.1, –23.4'
- unparsed cell jcph2019-tbl-0003:row14:col3 = '0.888, 0.942'
- unparsed cell jcph2019-tbl-0003:row15:col3 = '0.38, 0.44'
- unparsed cell jcph2019-tbl-0003:row16:col4 = '736, 1338'
- unparsed cell jcph2019-tbl-0003:row17:col3 = '–0.454, –0.135'
- unparsed cell jcph2019-tbl-0003:row18:col3 = '0.398, 0.534'
- unparsed cell jcph2019-tbl-0003:row19:col3 = '–47.1, –18.8'
- unparsed cell jcph2019-tbl-0003:row20:col3 = '0.3, 0.4'
- unparsed cell jcph2019-tbl-0003:row21:col4 = '43.3, 57.5'
- unparsed cell jcph2019-tbl-0003:row22:col4 = '294, 354'
- unparsed cell jcph2019-tbl-0003:row23:col3 = '–17.7, –5.78'
- unparsed cell jcph2019-tbl-0003:row24:col3 = '0.1, 0.3'
- unparsed cell jcph2019-tbl-0003:row25:col4 = '27.8, 29.6'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.714 (20/28 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[creatinine_effect_exp]` | 27.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[frel].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[patient effect, %]` | 15.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_creatinine]` |  | 27.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_food]` |  | 10.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q44_food]` | 10.3 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | vonoprazan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | vonoprazan | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph2019-tbl-0003:row10:col2', 'jcph2019-tbl-0003:row10:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph2019-tbl-0003:row21:col2', 'jcph2019-tbl-0003:row21:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph2019-tbl-0003:row4:col2', 'jcph2019-tbl-0003:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph2019-tbl-0003:row16:col2', 'jcph2019-tbl-0003:row16:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['jcph2019-tbl-0003:row22:col2', 'jcph2019-tbl-0003:row22:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph2019-tbl-0003:row2:col2', 'jcph2019-tbl-0003:row2:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 119 | ['jcph2019-tbl-0003:row10:col2', 'jcph2019-tbl-0003:row10:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 119 L/h | ['jcph2019-tbl-0003:row10:col2', 'jcph2019-tbl-0003:row10:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.04e+03 L | ['jcph2019-tbl-0003:row16:col2', 'jcph2019-tbl-0003:row16:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvonoprazan%5D%20Vonoprazan_Scarpignato2022_reference&body=Drug%3A%20vonoprazan%0ARecord%3A%20Vonoprazan_Scarpignato2022_reference%0APaper%3A%20Scarpignato_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vonoprazan/Vonoprazan_Scarpignato2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:30 UTC</sub>
