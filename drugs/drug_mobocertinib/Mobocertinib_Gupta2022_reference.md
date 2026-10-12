<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;mobocertinib&quot;,&quot;href&quot;:&quot;drugs/drug_mobocertinib/&quot;},{&quot;label&quot;:&quot;Gupta_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mobocertinib — `Mobocertinib_Gupta2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.846). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V1/F and CL/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — mobocertinib: V2/F 7.01 L, V1/F 0.787, CL/F 0.9; AP32960: V2/F 6.99 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl_mobo/f].parameter_id`: this record has Q351, the second reading Q27; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Gupta N et al., Population pharmacokinetics of mobocert…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12785](https://doi.org/10.1002/psp4.12785)

## Model component
<dbs-pgx drug="mobocertinib" model-id="Mobocertinib_Gupta2022_reference" status="needs_review" stale="false" population="healthy volunteers and patients with mNSCLC" measured-compound="mobocertinib" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vp_mobo/F | `Q82` · V2/F | 7.01 | L | 0.00701 | L | 1.68 | llm (0.6) | Gupta_2022_table_p8_1:row5:col1, Gupta_2022_table_p8_1:row5:col2, Gupta_2022_table_p8_1:row5:col5 | — | not captured |
| Vp_AP32960/F | `Q82` · V2/F | 6.99 | L | 0.0069900000000000006 | L | 1.12 | exact (1.0) | Gupta_2022_table_p8_1:row9:col1, Gupta_2022_table_p8_1:row9:col2, Gupta_2022_table_p8_1:row9:col5 | — | not captured |
| HV on Vc_mobo/F | `Q290` · V1/F | 0.787 | not captured | not captured | not captured | 12.7 | llm (0.6) | Gupta_2022_table_p8_1:row12:col1, Gupta_2022_table_p8_1:row12:col2, Gupta_2022_table_p8_1:row12:col4, Gupta_2022_table_p8_1:row12:col5 | — | not captured |
| HV on CL_mobo/F | `Q27` · CL/F | 0.900 | not captured | not captured | not captured | 15.0 | llm (0.6) | Gupta_2022_table_p8_1:row13:col1, Gupta_2022_table_p8_1:row13:col2, Gupta_2022_table_p8_1:row13:col4, Gupta_2022_table_p8_1:row13:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL_mobo/F | Q351 | not captured | llm |
| Q_mobo/F | Q69 | not captured | llm |
| CL_AP32960/F | Q27 | not captured | exact |
| Q_AP32960/F | Q69 | not captured | exact |
| CL_AP32914/F | Q27 | not captured | exact |
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV Kₐ' routed out of structural estimates ('IIV')
- table section iiv: 'IIV Vc_mobo/F' routed out of structural estimates ('IIV')
- table section iiv: 'IIV CL_mobo/F' routed out of structural estimates ('IIV')
- table section iiv: 'Cov: CL_mobo/F and Vc_mobo/F' routed out of structural estimates ('IIV')
- table section iiv: 'IIV CL_AP32960/F' routed out of structural estimates ('IIV')
- table section iiv: 'Cov: CL_AP32960/F and Vc_mobo/F' routed out of structural estimates ('IIV')
- table section iiv: 'Cov: CL_AP32960/F and CL_mobo/F' routed out of structural estimates ('IIV')
- table section iiv: 'IIV CL_AP32914/F' routed out of structural estimates ('IIV')
- table section iiv: 'Cov: CL_AP32914/F and Vc_mobo/F' routed out of structural estimates ('IIV')
- table section iiv: 'Cov: CL_AP32914/F and CL_mobo/F' routed out of structural estimates ('IIV')
- table section iiv: 'Cov: CL_AP32914/F and CL_AP32960/F' routed out of structural estimates ('IIV')
- table section residual_error: 'Mobocertinib' routed out of structural estimates ('Residual variability, additive error on log scale')
- table section residual_error: 'AP32960' routed out of structural estimates ('Residual variability, additive error on log scale')
- table section residual_error: 'AP32914' routed out of structural estimates ('Residual variability, additive error on log scale')
- column 'untransformed parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'Kₐ'
- dropped value-less row: 'Vc_mobo/F'
- dropped value-less row: 'Vc_AP32960/F'
- dropped value-less row: 'Vc_AP32914/F'
- dropped duplicate Q27 ('HV on CL_AP32960/F', value '0.738') — already have one for this compound
- dropped duplicate Q27 ('HV on CL_AP32914/F', value '0.909') — already have one for this compound
- dropped value-less row: 'Kₑₙ𝑧'
- dropped value-less row: 'EC₅₀'
- dropped PD-category row 'Eₘₐₓ' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Gupta_2022_table_p8_1:row18:col1', 'Gupta_2022_table_p8_1:row18:col2', 'Gupta_2022_table_p8_1:row18:col4', 'Gupta_2022_table_p8_1:row18:col5'])
- implicit units: 'Vp_mobo/F' → L (from the paper text: 'Table 3 lists Vp mobo/F with the untransformed parameter unit “L.”')
- implicit units: 'Vp_AP32960/F' → L (from the paper text: 'Table 3 lists Vp AP32960/F with the untransformed parameter unit “L.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mobocertinib
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1, 0]
- row roles (LLM): model_class=compartmental; 33/33 row label(s) assigned, 29 linked by role; re-tagged parent→AP32960 ×23, parent→AP32914 ×17
- molar mass: no plausible PubChem entry for 'AP32960' ('mobocertinib active metabolite AP32960') — left in mass units
- molar mass: no plausible PubChem entry for 'AP32914' ('mobocertinib active metabolite AP32914') — left in mass units
- molar mass: none found for 'AP32960' — its concentrations stay mass-only
- molar mass: none found for 'AP32914' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Gupta_2022_table_p8_1:row1:col1 = '0.752ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row1:col4 = '2.12 h⁻¹'
- unparsed cell Gupta_2022_table_p8_1:row2:col1 = '7.76ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row2:col4 = '2340 L'
- unparsed cell Gupta_2022_table_p8_1:row3:col1 = '4.68ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row4:col1 = '2.46ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row5:col4 = '1110 L'
- unparsed cell Gupta_2022_table_p8_1:row6:col1 = '4.76ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row7:col1 = '2.55ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row7:col4 = '12.8 L'
- unparsed cell Gupta_2022_table_p8_1:row8:col1 = '3.28ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row9:col4 = '1090 L'
- unparsed cell Gupta_2022_table_p8_1:row10:col1 = '4.82ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row11:col1 = '3.42ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row11:col4 = '30.6 L'
- unparsed cell Gupta_2022_table_p8_1:row16:col1 = '−5.54ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row16:col4 = '0.00392 h⁻¹'
- unparsed cell Gupta_2022_table_p8_1:row17:col1 = '−1.55ᵃ'
- unparsed cell Gupta_2022_table_p8_1:row17:col4 = '213 nM'
- unparsed cell Gupta_2022_table_p8_1:row20:col4 = '45.7%'
- unparsed cell Gupta_2022_table_p8_1:row21:col4 = '48.7%'
- unparsed cell Gupta_2022_table_p8_1:row22:col4 = '49.6%'
- unparsed cell Gupta_2022_table_p8_1:row24:col4 = '39.6%'
- unparsed cell Gupta_2022_table_p8_1:row27:col4 = '54.3%'
- unparsed cell Gupta_2022_table_p8_1:row32:col4 = '41.4%'
- unparsed cell Gupta_2022_table_p8_1:row33:col4 = '37.3%'
- unparsed cell Gupta_2022_table_p8_1:row34:col4 = '40.5%'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.846 (22/26 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl_mobo/f].parameter_id` | Q351 | Q27 | mismatch |
| `qwen3.8-27b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[hv on cl_mobo/f].parameter_id` | Q27 | Q351 | mismatch |
| `qwen3.8-27b` | `parameters[hv on vc_mobo/f].parameter_id` | Q290 | Q354 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gupta_2022_table_p8_1:row5:col1', 'Gupta_2022_table_p8_1:row5:col2', 'Gupta_2022_table_p8_1:row5:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gupta_2022_table_p8_1:row9:col1', 'Gupta_2022_table_p8_1:row9:col2', 'Gupta_2022_table_p8_1:row9:col5'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Gupta_2022_table_p8_1:row13:col1', 'Gupta_2022_table_p8_1:row13:col2', 'Gupta_2022_table_p8_1:row13:col4', 'Gupta_2022_table_p8_1:row13:col5'] |
| C5_unit_missing_Q290 | fail | [length] ** 3 | not captured | not captured | not captured | ['Gupta_2022_table_p8_1:row12:col1', 'Gupta_2022_table_p8_1:row12:col2', 'Gupta_2022_table_p8_1:row12:col4', 'Gupta_2022_table_p8_1:row12:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q82 | pass | volume within physiological range | 7.01 L | not captured | not captured | ['Gupta_2022_table_p8_1:row5:col1', 'Gupta_2022_table_p8_1:row5:col2', 'Gupta_2022_table_p8_1:row5:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 6.99 L | not captured | not captured | ['Gupta_2022_table_p8_1:row9:col1', 'Gupta_2022_table_p8_1:row9:col2', 'Gupta_2022_table_p8_1:row9:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mobocertinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gupta_2022` / `Gupta_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:58 UTC</sub>
