<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibenclamide&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/&quot;},{&quot;label&quot;:&quot;Savic_2007 \u00b7 transit&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Rambiritch_2016_FBG_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 FBG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_FBG_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_full_glucose_profile_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 full glucose profile&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_full_glucose_profile_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_mean_glucose_concentration_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 mean glucose concentration&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_mean_glucose_concentration_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glibenclamide — `Glibenclamide_Savic2007_transit`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kel, kcomp and kabs have no unit.

<div class="pk-model-meta" hidden drug="glibenclamide" model-id="Glibenclamide_Savic2007_transit" status="needs_review" stale="false" population="healthy volunteers" measured-compound="glibenclamide, furosemide, amiloride, moxonidine" parameterization="mechanistic" topology="1C"></div>

## Citation
Savic RM, Jonker DM, Kerbusch T, Karlsson MO. Implementation of a transit compartment model for describing drug absorption in pharmacokinetic studies. Journal of pharmacokinetics and pharmacodynamics (2007).
  ·  DOI: [10.1007/s10928-007-9066-0](https://doi.org/10.1007/s10928-007-9066-0)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| k (1/h) | kel | 1.02 |  |  |
| V (l) | V | 3.39 | l |  |
| k23 | kcomp | 0.30 |  | 7 (None% RSE) |
| k a (1/h) | kabs | 0.27 |  |  |
| t lag (h) MT T (h) | MTT | -0.359 | h |  |
| n | n_transit | 22.9 |  |  |
| Bioavailbility (F) | Fab | 0.75 | F |  |
| CL(l/h) | CL | 10.2 | l/h | 17 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel, kcomp and kabs have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (MTT and Fab), so that value has no SI equivalent. Extracted — glibenclamide: kel 1.02, V 3.39 l, kcomp 0.3, kabs 0.27, MTT -0.359 h, n_transit 22.9, Fab 0.75 F, CL 10.2 l/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has glibenclamide, furosemide, amiloride, moxonidine, the second reading glibenclamide; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| k (1/h) | `Q47` · kel | 1.02 |  |  |  |  | exact (1) | tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col4 |  |
| V (l) | `Q61` · V | 3.39 | l | 0.00339 | m3 | l | exact (1) | tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col4, Savic_2007_table_3:row5:col2, Savic_2007_table_3:row5:col3, Savic_2007_table_3:row5:col4, Savic_2007_table_5:row5:col2, Savic_2007_table_5:row5:col3, Savic_2007_table_5:row5:col4 |  |
| k23 | `Q48` · kcomp | 0.30 |  |  |  |  | exact (1) | tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col4 | 7 (None% RSE) |
| k a (1/h) | `Q49` · kabs | 0.27 |  |  |  |  | space_fold (0.95) | tab_1:row14:col2, tab_1:row14:col3, tab_1:row14:col4, Savic_2007_table_3:row8:col2, Savic_2007_table_3:row8:col3, Savic_2007_table_3:row8:col4, Savic_2007_table_4:row11:col2, Savic_2007_table_4:row11:col3, Savic_2007_table_4:row11:col4, Savic_2007_table_5:row10:col2, Savic_2007_table_5:row10:col3, Savic_2007_table_5:row10:col4 |  |
| t lag (h) MT T (h) | `Q81` · MTT | -0.359 | h |  |  | h | llm (0.6) | tab_1:row15:col4, Savic_2007_table_3:row9:col4, Savic_2007_table_4:row12:col2, Savic_2007_table_4:row12:col4, Savic_2007_table_5:row11:col4 |  |
| n | `Q311` · n_transit | 22.9 |  |  |  |  | llm (0.6) | tab_1:row16:col3, tab_1:row16:col4, Savic_2007_table_3:row10:col3, Savic_2007_table_3:row10:col4, Savic_2007_table_4:row13:col3, Savic_2007_table_4:row13:col4, Savic_2007_table_5:row12:col3, Savic_2007_table_5:row12:col4 |  |
| Bioavailbility (F) | `Q40` · Fab | 0.75 | F |  |  | f | llm_confirmed (0.6) | tab_1:row17:col2, tab_1:row17:col3, tab_1:row17:col4 |  |
| CL(l/h) | `Q22` · CL | 10.2 | l/h | 2.833e-06 | m3/s | l/h | exact (1) | Savic_2007_table_3:row4:col2, Savic_2007_table_3:row4:col3, Savic_2007_table_3:row4:col4, Savic_2007_table_4:row4:col2, Savic_2007_table_4:row4:col3, Savic_2007_table_4:row4:col4, Savic_2007_table_5:row4:col2, Savic_2007_table_5:row4:col3, Savic_2007_table_5:row4:col4 | 17 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'transit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col3', 'Savic_2007_table_3:row3:col3', 'Savic_2007_table_4:row3:col3', 'Savic_2007_table_5:row3:col3'])
- dropped duplicate Q48 ('k32', value '0.53') — already have one for this compound
- unit_dimension_unknown: 'F' (Fab)
- dropped duplicate Q61 ('V (l/kg)', value '1.35') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glibenclamide, furosemide, amiloride, moxonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'transit' subgroup of Savic_2007 (paper reports 2 populations: lag, transit)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row15:col1 = '0.306 -b'
- unparsed cell tab_1:row15:col2 = '0.295-0.313 -'
- unparsed cell tab_1:row15:col3 = '-b 0.458'
- unparsed cell tab_1:row19:col1 = '0 a -b'
- unparsed cell tab_1:row19:col3 = '-b 30'
- unparsed cell Savic_2007_table_3:row9:col3 = '-b 0.37'
- unparsed cell Savic_2007_table_3:row12:col3 = '-b 120'
- companion parameter table 3 transcribed (26 record(s))
- unparsed cell Savic_2007_table_4:row12:col1 = '0.24 -b'
- unparsed cell Savic_2007_table_4:row12:col3 = '-b 0.324'
- companion parameter table 4 transcribed (48 record(s))
- unparsed cell Savic_2007_table_5:row11:col1 = '0.841 -b'
- unparsed cell Savic_2007_table_5:row11:col2 = '0.612-0.977 -'
- unparsed cell Savic_2007_table_5:row11:col3 = '-b 1.03'
- unparsed cell Savic_2007_table_5:row14:col3 = '-b 52'
- companion parameter table 5 transcribed (32 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailbility].value` | 0.75 | 0.96 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 10.2 | 0.354 | mismatch |
| `gpt-oss-120b` | `parameters[k a].value` | 0.27 | 1.77 | mismatch |
| `gpt-oss-120b` | `parameters[k23].value` | 0.30 | 0.363 | mismatch |
| `gpt-oss-120b` | `parameters[k].value` | 1.02 | 1.14 | mismatch |
| `gpt-oss-120b` | `parameters[n].value` | 22.9 | 8.15 | mismatch |
| `gpt-oss-120b` | `parameters[t lag (h) mt t].parameter_id` | Q81 | Q83 | mismatch |
| `gpt-oss-120b` | `parameters[v].value` | 3.39 | 487 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | glibenclamide, furosemide, amiloride, moxonidine | glibenclamide | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | glibenclamide, furosemide, amiloride, moxonidine | glibenclamide | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col3', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col3', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col3', 'Savic_2007_table_5:row4:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4', 'Savic_2007_table_3:row5:col2', 'Savic_2007_table_3:row5:col3', 'Savic_2007_table_3:row5:col4', 'Savic_2007_table_5:row5:col2', 'Savic_2007_table_5:row5:col3', 'Savic_2007_table_5:row5:col4'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col4'] |
| C5_unit_missing_Q48 | fail | 1 / [time] |  | ['tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['tab_1:row14:col2', 'tab_1:row14:col3', 'tab_1:row14:col4', 'Savic_2007_table_3:row8:col2', 'Savic_2007_table_3:row8:col3', 'Savic_2007_table_3:row8:col4', 'Savic_2007_table_4:row11:col2', 'Savic_2007_table_4:row11:col3', 'Savic_2007_table_4:row11:col4', 'Savic_2007_table_5:row10:col2', 'Savic_2007_table_5:row10:col3', 'Savic_2007_table_5:row10:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.2 | ['Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col3', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col3', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col3', 'Savic_2007_table_5:row4:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.2 L/h | ['Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col3', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col3', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col3', 'Savic_2007_table_5:row4:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.39 L | ['tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4', 'Savic_2007_table_3:row5:col2', 'Savic_2007_table_3:row5:col3', 'Savic_2007_table_3:row5:col4', 'Savic_2007_table_5:row5:col2', 'Savic_2007_table_5:row5:col3', 'Savic_2007_table_5:row5:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglibenclamide%5D%20Glibenclamide_Savic2007_transit&body=Drug%3A%20glibenclamide%0ARecord%3A%20Glibenclamide_Savic2007_transit%0APaper%3A%20Savic_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glibenclamide/Glibenclamide_Savic2007_transit%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-15 21:33 UTC</sub>
