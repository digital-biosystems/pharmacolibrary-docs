<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;fosfomycin&quot;,&quot;href&quot;:&quot;drugs/drug_fosfomycin/&quot;},{&quot;label&quot;:&quot;Kane_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fosfomycin — `Fosfomycin_Kane2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kuptake has no unit.

<div class="pk-model-meta" hidden drug="fosfomycin" model-id="Fosfomycin_Kane2021_reference" status="needs_review" stale="false" population="neonates with suspected clinical sepsis" measured-compound="fosfomycin" parameterization="mechanistic" topology="1C"></div>

## Citation
Kane Z, Gastine S, Obiero C, Williams P, Murunga S, Thitiri J et al. IV and oral fosfomycin pharmacokinetics in neonates with suspected clinical sepsis. The Journal of antimicrobial chemotherapy 76(7):1855–1864 (2021).
  ·  DOI: [10.1093/jac/dkab083](https://doi.org/10.1093/jac/dkab083)

## Population and dosing

**Population:** neonates with suspected clinical sepsis · condition neonatal sepsis · age group neonate.

**Dosing:** 7000 mg, iv, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h/70 kg) | CL | 8.94 | L/h/70 kg | 14.5 | 24.5 (30.5% RSE) |
| V2 (L/70 kg) | V2 | 19.1 | L/70 kg | 8.77 | 14.2 (41.8% RSE) |
| Q1 (L/h/70 kg) | Q | 8.01 | L/h/70 kg | 49.6 | None (None% RSE) |
| V3 (L/70 kg) | V3 | 7.53 | L/70 kg | 14.0 |  |
| θUPTK | kuptake | 0.321 |  | 12.0 |  |
| Ka (/h) | kabs | 0.0987 | /h | 21.7 |  |
| F | Fab | 0.478 |  | 15.0 | 0.269 (60.2% RSE) |
| θM | θM | 0.449 |  |  |  |
| θPR | θPR | -0.952 |  |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kuptake has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — fosfomycin: CL 8.94 L/h/70 kg, V2 19.1 L/70 kg, Q 8.01 L/h/70 kg, V3 7.53 L/70 kg, kuptake 0.321, kabs 0.0987 /h, Fab 0.478.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fosfomycin, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/70 kg) | `Q22` · CL | 8.94 | L/h/70 kg | 2.483e-06 | m3/s | l/(h·70kg) | 14.5 | exact (1) | dkab083-T2:row1:col1, dkab083-T2:row1:col4 | 24.5 (30.5% RSE) |
| V2 (L/70 kg) | `Q64` · V2 | 19.1 | L/70 kg | 0.0191 | m3 | l/70kg | 8.77 | exact (1) | dkab083-T2:row2:col1, dkab083-T2:row2:col4 | 14.2 (41.8% RSE) |
| Q1 (L/h/70 kg) | `Q30` · Q | 8.01 | L/h/70 kg | 2.225e-06 | m3/s | l/(h·70kg) | 49.6 | exact (1) | dkab083-T2:row3:col1, dkab083-T2:row3:col4 | None (None% RSE) |
| V3 (L/70 kg) | `Q77` · V3 | 7.53 | L/70 kg | 0.00753 | m3 | l/70kg | 14.0 | exact (1) | dkab083-T2:row4:col1, dkab083-T2:row4:col4 |  |
| θUPTK | `Q349` · kuptake | 0.321 |  |  |  |  | 12.0 | llm_confirmed (0.6) | dkab083-T2:row7:col1, dkab083-T2:row7:col4 |  |
| Ka (/h) | `Q49` · kabs | 0.0987 | /h | 2.742e-05 | 1/s | 1/h | 21.7 | exact (1) | dkab083-T2:row8:col1, dkab083-T2:row8:col4 |  |
| F | `Q40` · Fab | 0.478 |  |  |  |  | 15.0 | exact (1) | dkab083-T2:row9:col1, dkab083-T2:row9:col4 | 0.269 (60.2% RSE) |
| θM | `Q900` · θM | 0.449 |  |  |  |  |  |  |  |  |
| θPR | `Q900` · θPR | -0.952 |  |  |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (L/h/70 kg)' routed out of structural estimates ('IIV %CV (%RSE)')
- table section iiv: 'V2 (L/70 kg)' routed out of structural estimates ('IIV %CV (%RSE)')
- table section iiv: 'F' routed out of structural estimates ('IIV %CV (%RSE)')
- dropped duplicate Q30 ('Q2 (L/h/70 kg)', value '0.017') — already have one for this compound
- dropped unlinked row (NIL): 'V4 (L/70 kg)' — extend the ontology if this is a real PK parameter (source ['dkab083-T2:row6:col1'])
- kept covariate coefficient θM=0.449 (covariate M) — not an ontology parameter
- unit_dimension_mismatch: 'θN (/day)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('θN (/day)', value '0.117') — already have one for this compound
- kept covariate coefficient θPR=-0.952 (covariate PR) — not an ontology parameter
- routed 'IV plasma proportional error (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Oral plasma proportional error (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'CSF additive error (mg/L)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fosfomycin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell dkab083-T2:row1:col3 = '7.10 to 13.2'
- unparsed cell dkab083-T2:row2:col3 = '11.2 to 21.3'
- unparsed cell dkab083-T2:row3:col3 = '4.54 to 39.3'
- unparsed cell dkab083-T2:row4:col3 = '5.69 to 14.3'
- unparsed cell dkab083-T2:row7:col3 = '0.272 to 0.409'
- unparsed cell dkab083-T2:row8:col3 = '0.0570 to 0.148'
- unparsed cell dkab083-T2:row9:col3 = '0.347 to 0.775'
- unparsed cell dkab083-T2:row10:col3 = '0.277 to 0.567'
- unparsed cell dkab083-T2:row11:col3 = '0.0531 to 0.259'
- unparsed cell dkab083-T2:row12:col3 = '−2.88 to −0.615'
- unparsed cell dkab083-T2:row13:col3 = '3.78 to 12.1'
- unparsed cell dkab083-T2:row14:col3 = '7.36 to 24.3'
- unparsed cell dkab083-T2:row15:col3 = '5.47 to 14.6'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (12/24 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 0.478 | 0.483 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 8.94 | 9.13 | mismatch |
| `gpt-oss-120b` | `parameters[f].value` | 0.478 | 0.483 | mismatch |
| `gpt-oss-120b` | `parameters[q1].value` | 8.01 | 8.24 | mismatch |
| `gpt-oss-120b` | `parameters[v3].value` | 7.53 | 7.61 | mismatch |
| `gpt-oss-120b` | `parameters[v4]` |  | 0.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θm]` | 0.449 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θn]` |  | 0.121 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θpr]` | -0.952 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θpr]` |  | -1.081 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fosfomycin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | fosfomycin | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['dkab083-T2:row1:col1', 'dkab083-T2:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['dkab083-T2:row3:col1', 'dkab083-T2:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['dkab083-T2:row8:col1', 'dkab083-T2:row8:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['dkab083-T2:row2:col1', 'dkab083-T2:row2:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['dkab083-T2:row4:col1', 'dkab083-T2:row4:col4'] |
| C5_unit_missing_Q349 | fail | 1 / [time] |  | ['dkab083-T2:row7:col1', 'dkab083-T2:row7:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.94 | ['dkab083-T2:row1:col1', 'dkab083-T2:row1:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.94 L/h | ['dkab083-T2:row1:col1', 'dkab083-T2:row1:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 19.1 L | ['dkab083-T2:row2:col1', 'dkab083-T2:row2:col4'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfosfomycin%5D%20Fosfomycin_Kane2021_reference&body=Drug%3A%20fosfomycin%0ARecord%3A%20Fosfomycin_Kane2021_reference%0APaper%3A%20Kane_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fosfomycin/Fosfomycin_Kane2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 11:16 UTC</sub>
