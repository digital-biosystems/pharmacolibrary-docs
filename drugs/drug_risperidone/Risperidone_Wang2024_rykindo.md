<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;risperidone&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/&quot;},{&quot;label&quot;:&quot;Wang_2024 \u00b7 rykindo&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risperidone — `Risperidone_Wang2024_rykindo`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the parameter Q2, meant to be the intercompartmental clearance between the central and second peripheral compartment of the risperidone active moiety, carries a value of 0.764 with unit days — a duration, not a clearance, so its dimension does not match its meaning.**

In the Wang_2024 model of risperidone and its metabolite 9-OH-risperidone in adults with schizophrenia, the parameter labelled 'D2 (d)' is recorded as the apparent intercompartmental clearance Q2, but its value 0.764 is given in days, which is dimensionally incompatible with a clearance. The reported unit 'd' could not be converted to SI, so the parameter reached the model without an SI value and the dimension check failed. Other parameters, such as CL at 186.7 l/d and kabs at 0.288 1/d, carry units consistent with their meanings. Extracted — active moiety (risperidone + 9-OH-risperidone): kabs 0.288 1/d, CL 187 l/d, Q2 0.764 d, Frel 0.148, tlag 3.47 d, D1 2.18 d, Fab 0.43.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has risperidone (Rykindo/Consta LAI), the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `risperidone (Rykindo/Consta LAI)`, measured `active moiety (risperidone + 9-OH-risperidone)`.

## Citation
Wang W et al., Population Pharmacokinetic Analysis to…, Neurology and therapy (2024)
  ·  DOI: [10.1007/s40120-024-00578-w](https://doi.org/10.1007/s40120-024-00578-w)

<div class="pk-model-meta" hidden drug="risperidone" model-id="Risperidone_Wang2024_rykindo" status="rejected" stale="false" population="adults with schizophrenia or schizoaffective disorder" measured-compound="active moiety (risperidone + 9-OH-risperidone)" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA①_CT-1S01 and CT-USA-104 (1/d) | `Q49` · kabs | 0.288 | 1/d | 3.333333333333333e-06 | 1/h | not captured | exact (1.0) | Tab2:row2:col1, Tab2:row2:col4 | — | not captured |
| CL②_male_CT-1S01 (l/d) | `Q22` · CL | 186.7 | l/d | 2.1608796296296297e-06 | [l] / [d] | not captured | exact (1.0) | Tab2:row4:col1, Tab2:row4:col4 | — | not captured |
| D2 (d) | `Q99` · Q2 | 0.764 | d | not captured | [d] | not captured | llm (0.6) | Tab2:row8:col1, Tab2:row8:col4 | — | not captured |
| F2 | `Q87` · Frel | 0.148 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row9:col1, Tab2:row9:col4 | — | not captured |
| ALAG3 (d) | `Q83` · tlag | 3.47 | d | 299808.0 | [d] | not captured | exact (1.0) | Tab2:row11:col1, Tab2:row11:col4 | — | not captured |
| D3 (d) | `Q310` · D1 | 2.18 | d | 188352.0 | [d] | not captured | llm (0.6) | Tab2:row13:col1, Tab2:row13:col4 | — | not captured |
| F1 | `Q40` · Fab | 0.430 | not captured | not captured | not captured | not captured | exact (1.0) | Tab2:row17:col1, Tab2:row17:col4 | — | not captured |
| theta_q31_category | `Q900` · theta_q31_category | 0.675 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row6:col1, Tab2:row6:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'D2 (d)' → Q99 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q49 ('K32 (1/d)', value '0.118') — already have one for this compound
- dropped unlinked row (NIL): 'Middle release fraction, F3' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1'])
- dropped duplicate Q83 ('ALAG1 (d)', value '13.3') — already have one for this compound
- routed 'add' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'prop' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped value-less row: '①KA_CT-USA-104 for Consta'
- dropped value-less row: '②CL for male and female in Consta in CT-USA-104'
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'KA①_CT-1S01 and CT-USA-104 (1/d)' → 1/d (from the paper text: "Table 2 lists the parameter as 'KA①_CT-1S01 and CT-USA-104 (1/d) = 0.288', explicitly stating the unit 1/d for the absor")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=active moiety (risperidone + 9-OH-risperidone)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'rykindo' subgroup of Wang_2024 (paper reports 2 populations: consta, rykindo)
- row roles: per-genotype parameters — typical value from the reference group: KA①_CT-1S01 and CT-USA-104 (1/d), CL②_male_CT-1S01 (l/d)
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 21 linked by role; re-tagged parent→active moiety (risperidone + 9-OH-risperidone) ×43
- molar mass: no plausible PubChem entry for 'active moiety (risperidone + 9-OH-risperidone)' ('no full name in the paper') — left in mass units
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
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag3]` | 3.47 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2_male_ct-1s01]` | 186.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2_male_ct-1s01]` | not captured | 186.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d2]` | 0.764 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[d2]` | not captured | 0.764 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d3]` | 2.18 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | 0.430 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | not captured | 0.430 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f2]` | 0.148 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f2]` | not captured | 0.148 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1_ct-1s01 and ct-usa-104]` | 0.288 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1_ct-1s01 and ct-usa-104]` | not captured | 0.288 | only_one_extracted |
| `gpt-oss-120b` | `parameters[middle release fraction, f3]` | not captured | 0.421 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_category]` | not captured | 0.675 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_category]` | 0.675 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | risperidone (Rykindo/Consta LAI) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | active moiety (risperidone + 9-OH-risperidone) | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col4'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab2:row13:col1', 'Tab2:row13:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col4'] |
| C5_dimension_Q99 | fail | [time] | d | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 186.7 | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.78 L/h | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_risperidone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2024` / `Wang_2024::rykindo`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:10 UTC</sub>
