<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;fedratinib&quot;,&quot;href&quot;:&quot;drugs/drug_fedratinib/&quot;},{&quot;label&quot;:&quot;Ogasawara_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fedratinib — `Fedratinib_Ogasawara2019_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.647). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Fedratinib’s volume of distribution (Vd) has no reported value; a library placeholder was used, so the model was held back.**

No value for fedratinib's volume of distribution. The model was built, but fedratinib's volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The covariate scenarios were not simulated: the base model was simulated, not the covariate effects the record defines. The model builder also assumed absolute bioavailability F=1 and metabolite bioavailability Fm=1, with no molar correction, under apparent parameterization. Extracted — fedratinib: CL/F 13 L/h, V2/F 311 L, Q/F 45.2 L/h, V3/F 1.46e+03 L, kabs 1.57 h−1, tlag 0.265 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of pv on cl/fb: this record has none, the second reading 1.54; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Ogasawara K et al., Population pharmacokinetics of fedratin…, Cancer chemotherapy and pha… (2019)
  ·  DOI: [10.1007/s00280-019-03929-9](https://doi.org/10.1007/s00280-019-03929-9)

<div class="pk-model-meta" hidden drug="fedratinib" model-id="Fedratinib_Ogasawara2019_reference" status="model_quarantined" stale="false" population="adults with myelofibrosis, polycythemia vera, or essential thrombocythemia" measured-compound="fedratinib" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL/F (L/h) | `Q27` · CL/F | 13.0 | L/h | 3.6111111111111115e-06 | [l] / [h] | not captured | tv_prefix (0.95) | Tab2:row2:col1 | — | 0.255 (None% RSE) |
| TVV2/F (L) | `Q82` · V2/F | 311 | L | 0.311 | [l] | not captured | tv_prefix (0.95) | Tab2:row3:col1 | — | 0.383 (None% RSE) |
| TVQ/F (L/h) | `Q69` · Q/F | 45.2 | L/h | 1.2555555555555557e-05 | [l] / [h] | not captured | tv_prefix (0.95) | Tab2:row4:col1 | — | not captured |
| TVV3/F (L) | `Q78` · V3/F | 1460 | L | 1.46 | [l] | not captured | tv_prefix (0.95) | Tab2:row5:col1 | — | not captured |
| TVKa (h−1) | `Q49` · kabs | 1.57 | h−1 | 0.00043611111111111113 | [1] / [h] | not captured | tv_prefix (0.95) | Tab2:row6:col1 | — | 1.07 (None% RSE) |
| TVALAG1 (h) | `Q83` · tlag | 0.265 | h | 954.0 | [h] | not captured | llm (0.6) | Tab2:row7:col1 | — | not captured |
| PV on V2/Fc | `Q900` · equation variable | 1.87 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row10:col1 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.727 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row11:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2, CL/F' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2, V2/F' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'COVCL/F-V2/F' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2, Ka' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'σ2 (Log additive)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q27 ('PV on CL/Fb', value '1.54') — already have one for this compound
- dropped duplicate Q27 ('CLcr on CL/Fb', value '0.294') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '1.54' (source ['Tab2:footnote', 'Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.294' (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.727' (source ['Tab2:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Dose'
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fedratinib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = 311 * 1.87(if PV) * (Weight/70.1)^0.727 * (Dose/400)^-0.279
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '13.1 (12.4 to 13.9)'
- unparsed cell Tab2:row3:col2 = '313 (282 to 343)'
- unparsed cell Tab2:row4:col2 = '45.2 (38.5 to 52.9)'
- unparsed cell Tab2:row5:col2 = '1470 (1190 to 1790)'
- unparsed cell Tab2:row6:col2 = '1.64 (1.34 to 2.05)'
- unparsed cell Tab2:row7:col2 = '0.265 (0.264 to 0.321)'
- unparsed cell Tab2:row8:col2 = '1.51 (1.23 to 1.96)'
- unparsed cell Tab2:row9:col2 = '0.297 (0.157 to 0.441)'
- unparsed cell Tab2:row10:col2 = '1.85 (1.40 to 2.42)'
- unparsed cell Tab2:row11:col2 = '0.733 (0.383 to 1.10)'
- unparsed cell Tab2:row15:col2 = '0.250 (0.176 to 0.352)'
- unparsed cell Tab2:row16:col2 = '0.371 (0.247 to 0.510)'
- unparsed cell Tab2:row17:col2 = '0.193 (0.145 to 0.249)'
- unparsed cell Tab2:row18:col2 = '1.09 (0.728 to 1.54)'
- unparsed cell Tab2:row20:col2 = '0.194 (0.159 to 0.264)'
- LLM selected parameter table(s) 2
- captured model equation F = 311 * 1.87(if PV) * (Weight/70.1)^0.727 * (Dose/400)^-0.279

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.647 (11/17 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[pv on cl/fb]` | not captured | 1.54 | only_one_extracted |
| `qwen3.8-27b` | `parameters[pv on v2/fc]` | 1.87 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.727 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_f_weight]` | not captured | 0.727 | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvalag1].parameter_id` | Q83 | Q17 | mismatch |
| `qwen3.8-27b` | `parameters[tvv2/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 13 L/h | not captured | not captured | ['Tab2:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 311 L | not captured | not captured | ['Tab2:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_fedratinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ogasawara_2019` / `Ogasawara_2019::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_fedratinib/models/modelica/_needs_review/Fedratinib_Ogasawara2019_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_fedratinib/models/modelica/_needs_review/Fedratinib_Ogasawara2019_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:40 UTC</sub>
