<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cemiplimab&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/&quot;},{&quot;label&quot;:&quot;Nguyen_2022 \u00b7 final_poppk_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cemiplimab — `Cemiplimab_Nguyen2022_final_poppk_model`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Vss has no unit.

<div class="pk-model-meta" hidden drug="cemiplimab" model-id="Cemiplimab_Nguyen2022_final_poppk_model" status="needs_review" stale="false" population="patients with solid tumors, including recurrent or metastatic cervical cancer" measured-compound="cemiplimab" parameterization="mechanistic" topology="2C"></div>

## Citation
Nguyen JH, Epling D, Dolphin N, Paccaly A, Conrado D, Davis JD et al. Population pharmacokinetics modeling and exposure-response analyses of cemiplimab in patients with recurrent or metastatic cervical cancer. CPT: pharmacometrics & systems pharmacology 11(11):1458–1471 (2022).
  ·  DOI: [10.1002/psp4.12855](https://doi.org/10.1002/psp4.12855)

## Population and dosing

**Population:** patients with solid tumors, including recurrent or metastatic cervical cancer · condition solid tumors, including recurrent or metastatic cervical cancer · age group adult · n = 1063.

**Dosing:** 350 mg, iv, multiple, every 504 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| TVCL0, L/day | CL | 0.254 | L/day |
| TVQ, L/day | Q | 0.652 | L/day |
| TVV1, L | V1 | 3.35 | L |
| TVV2, L | V2 | 2.52 | L |
| TVT50, days | equation variable | 73.7 | days |
| VssWGTBL | Vss | 0.499 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.643). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vss has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — cemiplimab: CL 0.254 L/day, Q 0.652 L/day, V1 3.35 L, V2 2.52 L, Vss 0.499.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of clbcc: this record has none, the second reading -0.211; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| TVCL0, L/day | `Q22` · CL | 0.254 | L/day | 2.94e-09 | m3/s | l/d | llm (0.6) | psp412855-tbl-0001:row3:col1, psp412855-tbl-0001:row3:col2, psp412855-tbl-0001:row3:col3 |
| TVQ, L/day | `Q30` · Q | 0.652 | L/day | 7.546e-09 | m3/s | l/d | tv_prefix (0.95) | psp412855-tbl-0001:row4:col1, psp412855-tbl-0001:row4:col2, psp412855-tbl-0001:row4:col3 |
| TVV1, L | `Q63` · V1 | 3.35 | L | 0.00335 | m3 | l | tv_prefix (0.95) | psp412855-tbl-0001:row5:col1, psp412855-tbl-0001:row5:col2, psp412855-tbl-0001:row5:col3 |
| TVV2, L | `Q64` · V2 | 2.52 | L | 0.00252 | m3 | l | tv_prefix (0.95) | psp412855-tbl-0001:row6:col1, psp412855-tbl-0001:row6:col2, psp412855-tbl-0001:row6:col3 |
| TVT50, days | `Q900` · equation variable | 73.7 | days |  |  | d | llm (0.6) | psp412855-tbl-0001:row8:col1, psp412855-tbl-0001:row8:col2, psp412855-tbl-0001:row8:col3 |
| VssWGTBL | `Q65` · Vss | 0.499 |  |  |  |  | llm (0.6) | psp412855-tbl-0001:row11:col1, psp412855-tbl-0001:row11:col2, psp412855-tbl-0001:row11:col3, psp412855-tbl-0001:footnote |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'RE' routed out of structural estimates ('Residual variability')
- table section iiv: 'ETA1 – CL_Q' routed out of structural estimates ('IIV')
- table section iiv: 'ETA2 – V1_V2' routed out of structural estimates ('IIV')
- table section iiv: 'OFV' routed out of structural estimates ('IIV')
- dropped PD-category row 'TVEmax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row7:col1', 'psp412855-tbl-0001:row7:col2', 'psp412855-tbl-0001:row7:col3'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row9:col1'])
- dropped duplicate Q22 ('CLWGTBL', value '0.539') — already have one for this compound
- dropped duplicate Q900 ('CLSEX', value '-0.137') — already have one for this compound
- dropped duplicate Q900 ('V1SEX', value '-0.0801') — already have one for this compound
- dropped duplicate Q63 ('V1ALBBL', value '-0.217') — already have one for this compound
- dropped duplicate Q22 ('CLALB', value '-1.11') — already have one for this compound
- dropped duplicate Q22 ('CLALTBL', value '-0.0729') — already have one for this compound
- dropped duplicate Q22 ('CLCSCC', value '-0.216') — already have one for this compound
- dropped duplicate Q22 ('CLBCC', value '-0.211') — already have one for this compound
- dropped PD-category row 'EmaxBCC' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row19:col1', 'psp412855-tbl-0001:row19:col2', 'psp412855-tbl-0001:row19:col3', 'psp412855-tbl-0001:footnote'])
- dropped duplicate Q900 ('T50OTHER', value '-0.491') — already have one for this compound
- implicit units: 'VssWGTBL' — the LLM proposed '1', whose dimension does not fit Q65; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cemiplimab
- population split: 'final poppk model' subgroup of Nguyen_2022 (paper reports 3 populations: final poppk model, mean (cv%), tumor type (study) a)
- molar mass: none found for 'cemiplimab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412855-tbl-0001:row3:col4 = '0.246, 0.262'
- unparsed cell psp412855-tbl-0001:row3:col7 = '0.241, 0.269'
- unparsed cell psp412855-tbl-0001:row4:col4 = '0.606, 0.699'
- unparsed cell psp412855-tbl-0001:row4:col7 = '0.581, 0.728'
- unparsed cell psp412855-tbl-0001:row5:col4 = '3.27, 3.44'
- unparsed cell psp412855-tbl-0001:row5:col7 = '3.27, 3.44'
- unparsed cell psp412855-tbl-0001:row6:col4 = '2.44, 2.60'
- unparsed cell psp412855-tbl-0001:row6:col7 = '2.29, 2.81'
- unparsed cell psp412855-tbl-0001:row7:col4 = '−0.190, −0.157'
- unparsed cell psp412855-tbl-0001:row7:col7 = '−0.232, −0.136'
- unparsed cell psp412855-tbl-0001:row8:col4 = '62.8, 84.7'
- unparsed cell psp412855-tbl-0001:row8:col7 = '46.2, 245'
- unparsed cell psp412855-tbl-0001:row10:col4 = '0.442, 0.637'
- unparsed cell psp412855-tbl-0001:row10:col7 = '0.443, 0.639'
- unparsed cell psp412855-tbl-0001:row11:col4 = '0.401, 0.597'
- unparsed cell psp412855-tbl-0001:row11:col7 = '0.412, 0.569'
- unparsed cell psp412855-tbl-0001:row12:col4 = '−0.172, −0.101'
- unparsed cell psp412855-tbl-0001:row12:col7 = '−0.167, −0.0925'
- unparsed cell psp412855-tbl-0001:row13:col4 = '−0.117, −0.0435'
- unparsed cell psp412855-tbl-0001:row13:col7 = '−0.115, −0.0471'
- unparsed cell psp412855-tbl-0001:row14:col4 = '−0.338, −0.0961'
- unparsed cell psp412855-tbl-0001:row14:col7 = '−0.361, −0.0870'
- unparsed cell psp412855-tbl-0001:row15:col4 = '−1.16, −1.06'
- unparsed cell psp412855-tbl-0001:row15:col7 = '−1.24, −0.984'
- unparsed cell psp412855-tbl-0001:row16:col4 = '−0.105, −0.0411'
- unparsed cell psp412855-tbl-0001:row16:col7 = '−0.108, −0.0370'
- unparsed cell psp412855-tbl-0001:row17:col4 = '−0.256, −0.176'
- unparsed cell psp412855-tbl-0001:row17:col7 = '−0.257, −0.181'
- unparsed cell psp412855-tbl-0001:row18:col4 = '−0.261, −0.160'
- unparsed cell psp412855-tbl-0001:row18:col7 = '−0.261, −0.158'
- unparsed cell psp412855-tbl-0001:row19:col4 = '−1.09, −0.657'
- unparsed cell psp412855-tbl-0001:row19:col7 = '−1.00, −0.517'
- unparsed cell psp412855-tbl-0001:row20:col4 = '−0.608, −0.374'
- unparsed cell psp412855-tbl-0001:row20:col7 = '−0.987, −0.169'
- unparsed cell psp412855-tbl-0001:row22:col4 = '0.240, 0.242 d'
- unparsed cell psp412855-tbl-0001:row22:col7 = '0.227, 0.258 d'
- unparsed cell psp412855-tbl-0001:row24:col4 = '0.0822, 0.0963'
- unparsed cell psp412855-tbl-0001:row24:col7 = '0.0759, 0.101'
- unparsed cell psp412855-tbl-0001:row25:col4 = '0.0681, 0.0737'
- unparsed cell psp412855-tbl-0001:row25:col7 = '0.0459, 0.105'
- companion parameter table 2 transcribed (120 record(s), model stage 'final')
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.643 (9/14 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[clbcc]` |  | -0.211 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clwgtbl]` |  | 0.539 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t50other]` |  | -0.491 | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvt50]` | 73.7 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1albbl]` |  | -0.217 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 19.7 | 17.28 | 0.8772 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['psp412855-tbl-0001:row3:col1', 'psp412855-tbl-0001:row3:col2', 'psp412855-tbl-0001:row3:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['psp412855-tbl-0001:row4:col1', 'psp412855-tbl-0001:row4:col2', 'psp412855-tbl-0001:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['psp412855-tbl-0001:row5:col1', 'psp412855-tbl-0001:row5:col2', 'psp412855-tbl-0001:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['psp412855-tbl-0001:row6:col1', 'psp412855-tbl-0001:row6:col2', 'psp412855-tbl-0001:row6:col3'] |
| C5_unit_missing_Q65 | fail | [length] ** 3 |  |  |  | ['psp412855-tbl-0001:row11:col1', 'psp412855-tbl-0001:row11:col2', 'psp412855-tbl-0001:row11:col3', 'psp412855-tbl-0001:footnote'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.254 |  |  | ['psp412855-tbl-0001:row3:col1', 'psp412855-tbl-0001:row3:col2', 'psp412855-tbl-0001:row3:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0106 L/h |  |  | ['psp412855-tbl-0001:row3:col1', 'psp412855-tbl-0001:row3:col2', 'psp412855-tbl-0001:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.35 L |  |  | ['psp412855-tbl-0001:row5:col1', 'psp412855-tbl-0001:row5:col2', 'psp412855-tbl-0001:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.52 L |  |  | ['psp412855-tbl-0001:row6:col1', 'psp412855-tbl-0001:row6:col2', 'psp412855-tbl-0001:row6:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcemiplimab%5D%20Cemiplimab_Nguyen2022_final_poppk_model&body=Drug%3A%20cemiplimab%0ARecord%3A%20Cemiplimab_Nguyen2022_final_poppk_model%0APaper%3A%20Nguyen_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_final_poppk_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:52 UTC</sub>
