<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;micafungin&quot;,&quot;href&quot;:&quot;drugs/drug_micafungin/&quot;},{&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025 \u00b7 martial_2016_39&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# micafungin — `Micafungin_AlbanellFernndez2025_martial_2016_39`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**Micafungin's clearance and volume of distribution lacked numerical values, forcing the use of library placeholders instead of specific estimates.**

The record defines clearance and volume of distribution as the proportionality factor for elimination and the drug's distribution space, but provides no specific numerical estimates. Consequently, the model relied on generic default values rather than patient-specific data for this mixed population. This omission required the model to be held back to prevent publication with unverified parameters. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has micafungin, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Albanell-Fernández M, Echinocandins Pharmacokinetics: A Compr…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-024-01461-5](https://doi.org/10.1007/s40262-024-01461-5)

<div class="pk-model-meta" hidden drug="micafungin" model-id="Micafungin_AlbanellFernndez2025_martial_2016_39" status="model_quarantined" stale="false" population="mixed (special populations including pediatric, critical care, obese)" measured-compound="micafungin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL and Q equations (L/h) | Q900 | not captured | llm_corrected |
| Mean CL (L/h) | Q22 | not captured | llm_confirmed |
| Vc | Q61 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'martial 2016 [39]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q900 ('Vd equation (L)', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=micafungin
- bound model equation to Q22 (CL): CL = 0.90 * (WT/70)^0.75Q = 5.03
- bound model equation to Q63 (V1): Vc = 11.8 * (WT/84)^0.61 *1.14 (if Alb ≤ 25 g/L)Vp = 7.68 * (WT/84)^0.67 *1.14 (if Alb ≤ 25 g/L)
- model equation 'CL3 = 0.852 * (WT/70)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- Q22 (CL) is equation-defined: value moved to equation-variable 'Mean CL (L/h)'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'Vc'; equation kept verbatim
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc' is the general volume)
- population split: 'martial 2016 [39]' subgroup of Albanell-Fernández_2025 (paper reports 37 populations: dowell 2004 [46], dupont 2017 [45], garbez 2021 [16], garbez 2021 [31], garbez 2022 [40], garcía-de-lorenzo 2016 [52], grau 2015 [17], hall 2023 [48], hope 2015 [24], ikawa 2009 [50], jullien 2017 [34], kapralos 2020 [23], kapralos 2021 [22], lakota 2018 [61], liu 2013 [47], luque 2019 [18], martial 2016 [39], martial 2017 [53], maseda 2014 [51], maseda 2018 [19], märtson 2020 [38], niu 2020 [32], pressiat 2022 [28], pérez-pitarch 2018 [15], roepcke 2023 [33], roger 2017 [14], rubino 2021 [62], tabata 2006 [58], tenorio-cañamás 2019 [54], wang 2020 [42], wasmann 2018 [21], wasmann 2019 [20], wu 2022 [36], würthwein 2012 [41], würthwein 2013 [43], yang 2019 [37], zhong 2021 [35])
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- transposed table Tab2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab2:row1:col7 = 'WT, Alb (break point: 25), SOFA (break point: 10)'
- unparsed cell Tab2:row1:col17 = 'WT (break point: 66.3 kg)'
- unparsed cell Tab2:row1:col23 = 'WT (in children &lt;16 years), PLT'
- unparsed cell Tab2:row3:col4 = 'CL: 0.90Q: 5.03'
- unparsed cell Tab2:row3:col5 = 'CL: 1.27'
- unparsed cell Tab2:row3:col6 = 'All patients: CL: 1.38Burnt: CL: 1.61IAI: CL: 1.09'
- unparsed cell Tab2:row3:col7 = 'CL: 1.34Q: 4.67'
- unparsed cell Tab2:row3:col8 = 'CL: 1.10Q: 0.363'
- unparsed cell Tab2:row3:col9 = 'CL: 0.80'
- unparsed cell Tab2:row3:col10 = 'CL: 1.56Q: 14.4'
- unparsed cell Tab2:row3:col11 = 'CL: 0.86'
- unparsed cell Tab2:row3:col12 = 'CL: 1.31Q: 2.89'
- unparsed cell Tab2:row3:col13 = 'CL: 1.18Q: 5.89Qpe: 0.04'
- unparsed cell Tab2:row3:col14 = 'CL: 0.96'
- unparsed cell Tab2:row3:col15 = 'CL: 0.761Q: 4.72'
- unparsed cell Tab2:row3:col17 = 'CL: 1.165'
- unparsed cell Tab2:row3:col18 = 'CL: 0.762Q: 7.02'
- unparsed cell Tab2:row3:col19 = 'CL: 0.69Q: 7.15'
- unparsed cell Tab2:row3:col22 = 'CL: standard model: 0.635Linear model: 0.480 Allometric model: 1.0823'
- unparsed cell Tab2:row3:col24 = 'CL: 1.0803'
- unparsed cell Tab2:row3:col30 = 'CL: 0.64'
- unparsed cell Tab2:row3:col32 = 'CL: 0.7'
- unparsed cell Tab2:row3:col40 = 'CL: 0.165Q: 0.351'
- unparsed cell Tab2:row3:col41 = 'CL: 0.14'
- unparsed cell Tab2:row3:col42 = 'CL: 0.793Q: 1.203'
- unparsed cell Tab2:row3:col45 = 'CL: 1.3'
- unparsed cell Tab2:row3:col46 = 'CL: 1.397Q: 7.947'
- unparsed cell Tab2:row3:col47 = 'CL: 0.87'
- unparsed cell Tab2:row3:col48 = 'CL: 0.8523'
- unparsed cell Tab2:row3:col49 = 'CL: 0.778Q: 4.4'
- unparsed cell Tab2:row3:col50 = 'CL: 1.05Q: 2.81'
- unparsed cell Tab2:row3:col51 = 'CL: 0.996Q2: 0.153Q3: 14.1'
- unparsed cell Tab2:row3:col52 = 'CL: 0.946Q: 20.3'
- unparsed cell Tab2:row3:col53 = 'CL: 0.777Q: 21.6'
- unparsed cell Tab2:row3:col56 = 'CL: 0.328Q2: 0.236Q3: 12.4'
- unparsed cell Tab2:row3:col57 = 'CL: 0.188Q2: 24.3Q3: 0.908Q4: 0.0736'
- unparsed cell Tab2:row3:col58 = 'CL: 0.254Q2: 18.2Q3: 0.541Q4: 0.0743'
- unparsed cell Tab2:row6:col4 = 'Vc: 12.5Vp : 10.0'
- unparsed cell Tab2:row6:col5 = 'Vc: 9.26'
- unparsed cell Tab2:row6:col6 = 'All patients:Vc: 5.87Burnt: Vc: 6.07IAI: Vc: 5.85'
- unparsed cell Tab2:row6:col7 = 'Vc: 11.80 Vp: 7.68'
- unparsed cell Tab2:row6:col8 = 'Vc: 17.6Vp: 3.64'
- unparsed cell Tab2:row6:col9 = 'Vc: 16.34'
- unparsed cell Tab2:row6:col10 = 'Vc: 16.2Vp: 13.8'
- unparsed cell Tab2:row6:col11 = 'Vc: 6.06'
- unparsed cell Tab2:row6:col12 = 'Vc: 14.2Vp: 12.6'
- unparsed cell Tab2:row6:col13 = 'Vc: 12.85Vp: 3.86Vpe: 4.82'
- unparsed cell Tab2:row6:col14 = 'Vc: 14.8'
- unparsed cell Tab2:row6:col15 = 'Vc: 6.7Vp: 10.2'
- unparsed cell Tab2:row6:col17 = 'Vc: 10.43'
- unparsed cell Tab2:row6:col18 = 'Vc: 9.25Vp: 8.86'
- unparsed cell Tab2:row6:col19 = 'Vc: 5.84Vp: 6.96'
- unparsed cell Tab2:row6:col20 = 'Patients with cancer: Vc: 10.7; Vp: 3.5 Patients without cancer: Vc: 12; Vp: 2.77'
- unparsed cell Tab2:row6:col22 = 'Vc: standard model: 5.848 Linear model: 5.181 Allometric model: 13.6164'
- unparsed cell Tab2:row6:col23 = 'Vc: 11.2Vss: 20.6'
- unparsed cell Tab2:row6:col24 = 'Vc: 10.34'
- unparsed cell Tab2:row6:col25 = 'Vc: 1.21Vp: 4.62'
- unparsed cell Tab2:row6:col26 = 'Vd: 0,.64'
- unparsed cell Tab2:row6:col29 = 'Vc : 8.9Vp: 5.0'
- unparsed cell Tab2:row6:col30 = 'Vc : 9.35'
- unparsed cell Tab2:row6:col31 = 'Vc : 6.46'
- unparsed cell Tab2:row6:col32 = 'Vc : 7.71'
- unparsed cell Tab2:row6:col33 = 'Vc : 9.36Vp: 4.87Vpe: 4.69'
- unparsed cell Tab2:row6:col34 = 'Only CAS:Vc: 8.33 Vp: 3.59 LAMB and CAS:Vc: 18.6Vp: 49.2'
- unparsed cell Tab2:row6:col35 = 'Vc: 2.21Vp: 2.87ECMO: Vc: 3.22; Vp: 2.97; Non-ECMO: Vc: 3.0; Vp: 2.57'
- unparsed cell Tab2:row6:col36 = 'Vc: 6.24Vp: 6.44'
- unparsed cell Tab2:row6:col37 = 'Vc: 4.27Vp: 6.01Heart transplants:Vc: 3.14Vp: 4.98; Control:Vc: 5.27Vp: 6.31'
- unparsed cell Tab2:row6:col38 = 'Vc: 5.85Vp: 6.53'
- unparsed cell Tab2:row6:col40 = 'Vc: 1.730Vp: 0.943'
- unparsed cell Tab2:row6:col41 = 'Vc: 1.36'
- unparsed cell Tab2:row6:col42 = 'Vc: 9.36Vp: 4.87'
- unparsed cell Tab2:row6:col45 = 'Vss: 38.8'
- unparsed cell Tab2:row6:col47 = 'Vc: 22.3Vp: 48.7Vss: 72.8'
- unparsed cell Tab2:row6:col48 = 'Vc: 18.41'
- unparsed cell Tab2:row6:col49 = 'Vc: 10.2Vp: 21.1'
- unparsed cell Tab2:row6:col50 = 'Vc: 29.48Vp: 14.42'
- unparsed cell Tab2:row6:col52 = 'Vc: 9.97Vp: 20.3Vss: 33.4'
- unparsed cell Tab2:row6:col53 = 'Vc: 0.170Vp: 23.5Vss: 34.6'
- unparsed cell Tab2:row6:col56 = 'Vc: 17.7Vp23: 19.1'
- unparsed cell Tab2:row6:col57 = 'Vc: 8.94Vp2: 8.88 Vp3:12.5Vp4: 27.7'
- unparsed cell Tab2:row6:col58 = 'Vc: 11.1Vp2: 14.6Vp3: 6.69Vp4: 13.6'
- LLM selected parameter table(s) 2
- captured model equation CL = 0.90 * (WT/70)^0.75Q = 5.03
- captured model equation Vc = 11.8 * (WT/84)^0.61 *1.14 (if Alb ≤ 25 g/L)Vp = 7.68 * (WT/84)^0.67 *1.14 (if Alb ≤ 25 g/L)
- captured model equation CL3 = 0.852 * (WT/70)^0.75

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl and q equations].parameter_id` | Q900 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[mean cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd equation]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | micafungin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | micafungin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col29'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no structural disposition parameters in record |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_micafungin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Albanell-Fernández_2025` / `Albanell-Fernández_2025::martial_2016_39`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_micafungin/models/modelica/_needs_review/Micafungin_AlbanellFernndez2025_martial_2016_39.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_micafungin/models/modelica/_needs_review/Micafungin_AlbanellFernndez2025_martial_2016_39.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:37 UTC</sub>
