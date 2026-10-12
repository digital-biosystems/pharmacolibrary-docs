<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;sildenafil&quot;,&quot;href&quot;:&quot;drugs/drug_sildenafil/&quot;},{&quot;label&quot;:&quot;Rhee_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sildenafil_Cochiusden2020_reference&quot;,&quot;label&quot;:&quot;Cochius-den_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sildenafil/Sildenafil_Cochiusden2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sildenafil — `Sildenafil_Rhee2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Sildenafil elimination clearance was missing from the record, so the model was held back due to incomplete disposition parameters.**

Only the absorption rate constant (0.258 h⁻¹) and volume of distribution (11.4 L) for sildenafil were extracted, while its clearance value was absent. A second reader noted the reference check failed without computing a comparison, rendering the specific check inconclusive. Consequently, the incomplete parameter set prevented valid model construction. Extracted — sildenafil: kabs 0.258 h−1, V/F 11.4 L; N-desmethyl sildenafil: V1/F 2.51 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has sildenafil → n-desmethyl sildenafil (metabolism), the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Rhee SJ et al., Population pharmacokinetic analysis of…, Scientific reports (2022)
  ·  DOI: [10.1038/s41598-022-11038-6](https://doi.org/10.1038/s41598-022-11038-6)

<div class="pk-model-meta" hidden drug="sildenafil" model-id="Sildenafil_Rhee2022_reference" status="needs_review" stale="false" population="term and preterm neonates with pulmonary arterial hypertension" measured-compound="sildenafil" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 3 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA (h−1) | `Q49` · kabs | 0.258 | h−1 | 7.166666666666667e-05 | [1] / [h] | 20.1 | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3 | — | not captured |
| VSil/F (L) | `Q76` · V/F | 11.4 | L | 0.0114 | [l] | 38.6 | llm (0.6) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3 | — | not captured |
| female_sex_effect | `Q900` · female_sex_effect | 1.78 | not captured | not captured | not captured | 16.1 | not captured (not captured) | Tab2:row9:col2 | — | not captured |
| maturation_postnatal_age_effect | `Q900` · maturation_postnatal_age_effect | 4.28 | not captured | not captured | not captured | 38.6 | not captured (not captured) | Tab2:row10:col2 | — | not captured |
| VDMS /F’ (L) | `Q290` · V1/F | 2.51 | L | 0.0025099999999999996 | [l] | 26.4 | exact (1.0) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 1.06 | not captured | not captured | not captured | 19.8 | not captured (not captured) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row14:col2, Tab2:row14:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CLSil/F (L/h) = θCL(Sil) × (body weight/3.14)θweight × θfemale × (1−e−θmaturation × postnatal age) | Q27 | not captured | exact |
| CLDMS/F’ (L/h) = θCL(DMS) × (body weight/3.14)θweight | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'VSil/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'CLSil/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'CLDMS/F’' routed out of structural estimates ('Interindividual variability (%CV)')
- table section covariance: 'VSil/F and CLSil/F' routed out of structural estimates ('Correlation between etas')
- table section covariance: 'CLSil/F and CLDMS/F’' routed out of structural estimates ('Correlation between etas')
- table section covariance: 'VSil/F and CLDMS/F’' routed out of structural estimates ('Correlation between etas')
- table section residual_error: 'Sildenafil' routed out of structural estimates ('Residual variability (SD)')
- table section residual_error: 'N-desmethyl sildenafil' routed out of structural estimates ('Residual variability (SD)')
- column 'estimates (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'Objective function value' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3'])
- dropped duplicate Q27 ('θCL(Sil); typical value of CLSil/F', value '9.27') — already have one for this compound
- covariate level 'θfemale; sex effect' → Q900:female_sex_effect = 1.78 (linear_fractional on Q27)
- covariate level 'θmaturation; postnatal age effect' → Q900:maturation_postnatal_age_effect = 4.28 (linear_fractional on Q27)
- dropped duplicate Q27 ('θCL(DMS); typical value of CLDMS/F’', value '12.4') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sildenafil
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 23 linked by role; re-tagged parent→N-desmethyl sildenafil ×16
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row4:col4 = '0.394 (0.216–0.810)'
- unparsed cell Tab2:row5:col4 = '17.2 (7.57–41.2)'
- unparsed cell Tab2:row7:col4 = '10.1 (7.61–13.7)'
- unparsed cell Tab2:row8:col4 = '0.848 (0.219–2.23)'
- unparsed cell Tab2:row11:col4 = '2.11 (1.43–7.81)'
- unparsed cell Tab2:row13:col4 = '14.2 (10.9–17.3)'
- unparsed cell Tab2:row14:col4 = '1.32 (0.833–2.50)'
- unparsed cell Tab2:row16:col4 = '150.0 (61.6–315.2)'
- unparsed cell Tab2:row17:col4 = '58.6 (29.4–86.3)'
- unparsed cell Tab2:row18:col4 = '47.6 (29.5–64.5)'
- unparsed cell Tab2:row20:col4 = '0.245 (−0.068–0.629)'
- unparsed cell Tab2:row21:col4 = '0.166 (0.015–0.300)'
- unparsed cell Tab2:row22:col4 = '0.061 (−0.274–0.341)'
- unparsed cell Tab2:row24:col4 = '0.543 (0.443–0.626)'
- unparsed cell Tab2:row25:col4 = '0.451 (0.303–0.576)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (12/18 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['sildenafil', 'n-desmethyl sildenafil', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cldms/f’ (l/h) = θcl(dms) × (body weight/3.14)θweight]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 0.258 | 0.414 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight_power].value` | 1.06 | 1.34 | mismatch |
| `gpt-oss-120b` | `parameters[vdms /f’]` | 2.51 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vsil/f].value` | 11.4 | 19.8 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.51 L | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 11.4 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sildenafil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rhee_2022` / `Rhee_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:04 UTC</sub>
