<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;risperidone&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/&quot;},{&quot;label&quot;:&quot;Wang_2024 \u00b7 consta&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risperidone — `Risperidone_Wang2024_consta`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the parameter Q2, the intercompartmental clearance between the central and second peripheral compartment of the risperidone active moiety, is reported as 0.0467 with unit days, a dimension mismatch for a clearance parameter.

<div class="pk-model-meta" hidden drug="risperidone" model-id="Risperidone_Wang2024_consta" status="rejected" stale="false" population="adults with schizophrenia or schizoaffective disorder" measured-compound="active moiety (risperidone + 9-OH-risperidone)" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Wang W, Wang X, Dong Y, Walling DP, Liu P, Liu W et al. Population Pharmacokinetic Analysis to Support and Facilitate Switching from Risperidone Formulations to Rykindo in Patients with Schizophrenia. Neurology and therapy 13(2):355–372 (2024).
  ·  DOI: [10.1007/s40120-024-00578-w](https://doi.org/10.1007/s40120-024-00578-w)

## Population and dosing

**Population:** adults with schizophrenia or schizoaffective disorder · condition schizophrenia · age group adult · n = 171.

**Dosing:** 12.5, 25, 37.5, 50 mg, im, single.

**Dosed compound ≠ measured compound:** dosed risperidone (Rykindo/Consta LAI), measured active moiety (risperidone + 9-OH-risperidone).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KA①_CT-1S01 and CT-USA-104 (1/d) | kabs | 0.179 | 1/d |
| CL②_male_CT-1S01 (l/d) | CL | 108.0 | l/d |
| D2 (d) | Q2 | 0.0467 | d |
| F2 | equation variable | 0.119 |  |
| ALAG3 (d) | tlag | 0.0417 | d |
| D3 (d) | D1 | 23.9 | d |
| F1 | Fab | 0.755 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the parameter Q2, the intercompartmental clearance between the central and second peripheral compartment of the risperidone active moiety, is reported as 0.0467 with unit days, a dimension mismatch for a clearance parameter.**

In the Wang_2024 model of risperidone and its metabolite 9-OH-risperidone in adults with schizophrenia, the parameter labelled D2 carries the meaning of an intercompartmental clearance (Q2) but is given in days rather than a flow unit such as l/d, unlike CL which is correctly 108.0 l/d. The reported unit could not be converted to SI, so the parameter reached the model without an SI value, and the dimension check on this structural parameter failed. Extracted — active moiety (risperidone + 9-OH-risperidone): kabs 0.179 1/d, CL 108 l/d, Q2 0.0467 d, tlag 0.0417 d, D1 23.9 d, Fab 0.755.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has risperidone (Rykindo/Consta LAI), the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KA①_CT-1S01 and CT-USA-104 (1/d) | `Q49` · kabs | 0.179 | 1/d | 2.072e-06 | 1/s | 1/h | exact (1) | Tab2:row2:col5, Tab2:row2:col8 |
| CL②_male_CT-1S01 (l/d) | `Q22` · CL | 108.0 | l/d | 1.25e-06 | m3/s | l/d | exact (1) | Tab2:row4:col5, Tab2:row4:col8 |
| D2 (d) | `Q99` · Q2 | 0.0467 | d |  |  | d | llm (0.6) | Tab2:row8:col5, Tab2:row8:col8 |
| F2 | `Q900` · equation variable | 0.119 |  |  |  |  | llm (0.6) | Tab2:row9:col5, Tab2:row9:col6, Tab2:row9:col8 |
| ALAG3 (d) | `Q83` · tlag | 0.0417 | d | 3603 | s | d | exact (1) | Tab2:row11:col5, Tab2:row11:col8 |
| D3 (d) | `Q310` · D1 | 23.9 | d | 2.065e+06 | s | d | llm (0.6) | Tab2:row13:col5, Tab2:row13:col8 |
| F1 | `Q40` · Fab | 0.755 |  |  |  |  | exact (1) | Tab2:row17:col5, Tab2:row17:col6, Tab2:row17:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'consta' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'D2 (d)' → Q99 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q49 ('K32 (1/d)', value '0.0830') — already have one for this compound
- dropped duplicate Q900 ('Middle release fraction, F3', value '0.126') — already have one for this compound
- dropped duplicate Q83 ('ALAG1 (d)', value '27.0') — already have one for this compound
- routed 'add' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'prop' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped value-less row: '①KA_CT-USA-104 for Consta'
- dropped value-less row: '②CL for male and female in Consta in CT-USA-104'
- implicit units: 'KA①_CT-1S01 and CT-USA-104 (1/d)' → 1/d (from the paper text: "Table 2 lists the parameter as 'KA①_CT-1S01 and CT-USA-104 (1/d) = 0.179', explicitly giving the unit 1/d in the paramet")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=active moiety (risperidone + 9-OH-risperidone)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'consta' subgroup of Wang_2024 (paper reports 2 populations: consta, rykindo)
- row roles: per-genotype parameters — typical value from the reference group: KA①_CT-1S01 and CT-USA-104 (1/d), CL②_male_CT-1S01 (l/d)
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 21 linked by role; re-tagged parent→active moiety (risperidone + 9-OH-risperidone) ×43
- molar mass: no plausible PubChem entry for 'active moiety (risperidone + 9-OH-risperidone)' ('active moiety (risperidone + 9-OH-risperidone)') — left in mass units
- molar mass: none found for 'active moiety (risperidone + 9-OH-risperidone)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '27%'
- unparsed cell Tab2:row2:col3 = '7.84%'
- unparsed cell Tab2:row3:col4 = '26%'
- unparsed cell Tab2:row3:col5 = '14.4%'
- unparsed cell Tab2:row4:col2 = '35%'
- unparsed cell Tab2:row4:col3 = '5.38%'
- unparsed cell Tab2:row4:col6 = '34%'
- unparsed cell Tab2:row4:col7 = '0.82%'
- unparsed cell Tab2:row8:col2 = '52%'
- unparsed cell Tab2:row8:col3 = '19.8%'
- unparsed cell Tab2:row8:col6 = 'Fix to 0'
- unparsed cell Tab2:row9:col2 = '57%'
- unparsed cell Tab2:row9:col3 = '14.7%'
- unparsed cell Tab2:row9:col7 = '11.2%'
- unparsed cell Tab2:row11:col2 = 'Fix to 0'
- unparsed cell Tab2:row11:col6 = 'Fix to 0'
- unparsed cell Tab2:row12:col2 = 'Fix to 0'
- unparsed cell Tab2:row12:col6 = 'Fix to 0'
- unparsed cell Tab2:row13:col2 = 'Fix to 0'
- unparsed cell Tab2:row13:col6 = 'Fix to 0'
- unparsed cell Tab2:row16:col2 = 'Fix to 0'
- unparsed cell Tab2:row16:col7 = '21.6%'
- unparsed cell Tab2:row17:col2 = '52%'
- unparsed cell Tab2:row17:col3 = '12.0%'
- unparsed cell Tab2:row17:col7 = '11.4%'
- unparsed cell Tab2:row19:col3 = '8.15%'
- unparsed cell Tab2:row20:col1 = '26%'
- unparsed cell Tab2:row20:col4 = '32%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag3]` | 0.0417 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2_male_ct-1s01]` | 108.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2_male_ct-1s01]` |  | 186.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d2]` | 0.0467 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d2]` |  | 0.764 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d3]` | 23.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | 0.755 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` |  | 0.430 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f2]` | 0.119 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f2]` |  | 0.148 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1_ct-1s01 and ct-usa-104]` | 0.179 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1_ct-1s01 and ct-usa-104]` |  | 0.288 | only_one_extracted |
| `gpt-oss-120b` | `parameters[middle release fraction, f3]` |  | 0.421 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_category]` |  | 0.675 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | risperidone (Rykindo/Consta LAI) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | active moiety (risperidone + 9-OH-risperidone) | unknown | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col5', 'Tab2:row4:col8'] |
| C5_dimension_Q310 | pass | [time] |  | ['Tab2:row13:col5', 'Tab2:row13:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col5', 'Tab2:row2:col8'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row11:col5', 'Tab2:row11:col8'] |
| C5_dimension_Q99 | fail | [time] | d | ['Tab2:row8:col5', 'Tab2:row8:col8'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 108 | ['Tab2:row4:col5', 'Tab2:row4:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.5 L/h | ['Tab2:row4:col5', 'Tab2:row4:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Wang2024_consta&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Wang2024_consta%0APaper%3A%20Wang_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_risperidone/Risperidone_Wang2024_consta%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 17:10 UTC</sub>
