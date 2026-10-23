<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;alirocumab&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/&quot;},{&quot;label&quot;:&quot;Nolain_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alirocumab — `Alirocumab_Nolain2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="alirocumab" model-id="Alirocumab_Nolain2022_reference" status="needs_review" stale="false" population="adults with cardiovascular risk" measured-compound="alirocumab" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Nolain P, Djebli N, Brunet A, Fabre D, Khier S. Combined Semi-mechanistic Target-Mediated Drug Disposition and Pharmacokinetic-Pharmacodynamic Models of Alirocumab, PCSK9, and Low-Density Lipoprotein Cholesterol in a Pooled Analysis of Randomized Phase I/II/III Studies. European journal of drug metabolism and pharmacokinetics 47(6):789–802 (2022).
  ·  DOI: [10.1007/s13318-022-00787-4](https://doi.org/10.1007/s13318-022-00787-4)

## Population and dosing

**Population:** adults with cardiovascular risk · condition hypercholesterolemia · age group adult · n = 527.

**Dosing:** 0.3, 12, 50, 300 mg/kg, mg, sc, iv, multiple, every 168 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θCL (L/day) | CL | 0.221 | L/day |
| θQ (L/day) | Q | 0.557 | L/day |
| θvc (L) | V1 | 3.20 | L |
| θka(per day) | kabs | 0.346 | per day |
| θkon(per nM/day) | kon | 559 | per nM/day |
| θLAG (day) | tlag | 0.0283 | day |
| θkDnM | θkDnM | 0.58 |  |
| θVPL | θVPL | 2.61 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.438). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alirocumab, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θCL (L/day) | `Q22` · CL | 0.221 | L/day | 2.558e-09 | m3/s | l/d | llm_confirmed (0.6) | Tab4:row1:col1 |
| θQ (L/day) | `Q30` · Q | 0.557 | L/day | 6.447e-09 | m3/s | l/d | llm (0.6) | Tab4:row4:col1 |
| θvc (L) | `Q63` · V1 | 3.20 | L | 0.0032 | m3 | l | llm_confirmed (0.6) | Tab4:row5:col1 |
| θka(per day) | `Q49` · kabs | 0.346 | per day | 4.005e-06 | 1/s | 1/d | llm_confirmed (0.6) | Tab4:row6:col1 |
| θkon(per nM/day) | `Q329` · kon | 559 | per nM/day |  |  | pernm/d | llm_confirmed (0.6) | Tab4:row9:col1 |
| θLAG (day) | `Q83` · tlag | 0.0283 | day | 2445 | s | d | llm (0.6) | Tab4:row11:col1 |
| θkDnM | `Q900` · θkDnM | 0.58 |  |  |  |  |  |  |
| θVPL | `Q900` · θVPL | 2.61 |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'θkclear(per day)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('θkclear(per day)', value '0.127') — already have one for this compound
- dropped PD-category row 'θkdeg(per day)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row3:col1'])
- dropped unlinked row (NIL): 'θF (%)' — extend the ontology if this is a real PK parameter (source ['Tab4:row7:col1'])
- kept covariate coefficient θkDnM=0.58 (covariate kDnM) — not an ontology parameter
- unit_dimension_unknown: 'per nM/day' (kon)
- kept covariate coefficient θVPL=2.61 (covariate VPL) — not an ontology parameter
- dropped PD-category row 'θkout(per day)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row12:col1'])
- dropped PD-category row 'θImax(%)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row13:col1'])
- dropped PD-category row 'θIC50(nM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row14:col1'])
- dropped unlinked row (NIL): 'θγ (unitless)' — extend the ontology if this is a real PK parameter (source ['Tab4:row15:col1'])
- dropped unlinked row (NIL): 'θV_STATIN (unitless)' — extend the ontology if this is a real PK parameter (source ['Tab4:row16:col1'])
- dropped PD-category row 'θImaxSTATIN(unitless)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row17:col1'])
- dropped PD-category row 'θIC50TBSPCSK(unitless)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row18:col1'])
- implicit units: 'θkon(per nM/day)' — the LLM proposed '1/nM/day', whose dimension does not fit Q329; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θCL (L/day)); Q30 (θQ (L/day)); Q63 (θvc (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alirocumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 3 compounds → general_linear
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab4:row1:col2 = '9.49%'
- unparsed cell Tab4:row1:col3 = '[0.179; 0.263]'
- unparsed cell Tab4:row2:col2 = '1.87%'
- unparsed cell Tab4:row2:col3 = '[0.122; 0.132]'
- unparsed cell Tab4:row3:col2 = '2.58%'
- unparsed cell Tab4:row3:col3 = '[1.27; 1.41]'
- unparsed cell Tab4:row4:col2 = '5.84%'
- unparsed cell Tab4:row4:col3 = '[0.492; 0.622]'
- unparsed cell Tab4:row5:col2 = '5.10%'
- unparsed cell Tab4:row5:col3 = '[2.88; 3.53]'
- unparsed cell Tab4:row6:col2 = '5.79%'
- unparsed cell Tab4:row6:col3 = '[0.306; 0.387]'
- unparsed cell Tab4:row7:col2 = '4.23%'
- unparsed cell Tab4:row7:col3 = '[62.4; 73.9]'
- unparsed cell Tab4:row11:col2 = '3.00%'
- unparsed cell Tab4:row11:col3 = '[0.0266; 0.0300]'
- unparsed cell Tab4:row12:col2 = '3.86%'
- unparsed cell Tab4:row12:col3 = '[0.240; 0.280]'
- unparsed cell Tab4:row13:col2 = '3.03%'
- unparsed cell Tab4:row13:col3 = '[69.6; 78.6]'
- unparsed cell Tab4:row14:col2 = '1.27%'
- unparsed cell Tab4:row14:col3 = '[5.88; 6.19]'
- unparsed cell Tab4:row15:col2 = '9.30%'
- unparsed cell Tab4:row15:col3 = '[9.43; 13.7]'
- unparsed cell Tab4:row16:col2 = '4.85%'
- unparsed cell Tab4:row16:col3 = '[1.58; 1.92]'
- unparsed cell Tab4:row17:col2 = '9.82%'
- unparsed cell Tab4:row17:col3 = '[0.112; 0.167]'
- unparsed cell Tab4:row18:col2 = '1.86%'
- unparsed cell Tab4:row18:col3 = '[0.895; 0.964]'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.438 (7/16 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θf]` |  | 68.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θkclear]` |  | 0.127 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θkdnm]` | 0.58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θq]` | 0.557 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θv_statin]` |  | 1.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θvpl]` |  | 2.61 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θvpl]` | 2.61 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alirocumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alirocumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab4:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab4:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab4:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab4:row5:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab4:row11:col1'] |
| C5_unit_missing_Q329 | fail | [length] ** 3 / [mass] / [time] | per nM/day | ['Tab4:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.221 | ['Tab4:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00921 L/h | ['Tab4:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.2 L | ['Tab4:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balirocumab%5D%20Alirocumab_Nolain2022_reference&body=Drug%3A%20alirocumab%0ARecord%3A%20Alirocumab_Nolain2022_reference%0APaper%3A%20Nolain_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alirocumab/Alirocumab_Nolain2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:48 UTC</sub>
