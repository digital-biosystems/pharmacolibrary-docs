<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Steichert_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Enalapril_Faisal2019v2_reference&quot;,&quot;label&quot;:&quot;Faisal_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Faisal2019v2_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enalapril — `Enalapril_Steichert2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 40, model 0.000184); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="enalapril" model-id="Enalapril_Steichert2025_reference" status="needs_review" stale="false" population="children with heart failure" measured-compound="enalapril" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Steichert M, Cawello W, Laeer S. Population Pharmacokinetic Analysis of Enalapril and Enalaprilat in Newly Treated Children with Heart Failure: Implications for Safe Dosing of Enalapril (LENA Studies). Clinical pharmacokinetics 64(7):1103–1118 (2025).
  ·  DOI: [10.1007/s40262-025-01520-5](https://doi.org/10.1007/s40262-025-01520-5)

## Population and dosing

**Population:** children with heart failure · condition heart failure · age group child · n = &gt;=34.

**Dosing:** 2.1, 5.6 mg, oral, multiple, every 12 h.

## Model

**Structure:** parent–metabolite model: parent with 1 compartment(s); metabolite enalaprilat: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference.svg" alt="Enalapril_Steichert2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka | kabs | 0.6 | 1/h |
| CL_ENA/F | CL/F | 3.43 | L/h |
| CL_ENAAT/F | CL/F | 1.36 | L/h |
| Vd_ENA/F | V/F | 2.83 | L |
| Vd_ENAAT/F | V1/F | 24.45 | L |
| tlag | tlag | 0.195 | h |
| age_on_cl_enaat_f | age_on_cl_enaat_f | 0.092 |  |
| serum_creatinine_on_cl_enaat_f | serum_creatinine_on_cl_enaat_f | 33.3 |  |
| theta_q319_weight | theta_q319_weight | 1 |  |
| theta_q319_weight | theta_q319_weight | 1 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 40, model 0.000184); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — enalapril: kabs 0.6 1/h, CL/F 3.43 L/h, V/F 2.83 L, tlag 0.195 h; enalaprilat: CL/F 1.36 L/h, V1/F 24.4 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has enalapril → enalaprilat (metabolism), the second reading none; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.6 | 1/h | 0.0001667 | 1/s | 1/h | exact (1) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col5 |
| CL_ENA/F | `Q27` · CL/F | 3.43 | L/h | 9.528e-07 | m3/s | L/h | llm (0.6) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col5, Tab2:row3:col6 |
| CL_ENAAT/F | `Q27` · CL/F | 1.36 | L/h | 3.778e-07 | m3/s | L/h | exact (1) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col5, Tab2:row4:col6 |
| Vd_ENA/F | `Q76` · V/F | 2.83 | L | 0.00283 | m3 | L | llm (0.6) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col5, Tab2:row5:col6 |
| Vd_ENAAT/F | `Q290` · V1/F | 24.45 | L | 0.02445 | m3 | L | exact (1) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col5, Tab2:row6:col6 |
| tlag | `Q83` · tlag | 0.195 | h | 702 | s | h | exact (1) | Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col5, Tab2:row7:col6 |
| age_on_cl_enaat_f | `Q900` · age_on_cl_enaat_f | 0.092 |  |  |  |  |  | Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col5, Tab2:row12:col6 |
| serum_creatinine_on_cl_enaat_f | `Q900` · serum_creatinine_on_cl_enaat_f | 33.3 |  |  |  |  |  | Tab2:row13:col3 |
| theta_q319_weight | `Q900` · theta_q319_weight | 1 |  |  |  |  |  | Tab2:row10:col2, Tab2:row10:col5 |
| theta_q319_weight | `Q900` · theta_q319_weight | 1 |  |  |  |  |  | Tab2:row11:col2, Tab2:row11:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'IIV CL_ENA/F' routed out of structural estimates ('Interindividual variabilitya')
- table section iiv: 'IIV CL_ENAAT/F' routed out of structural estimates ('Interindividual variabilitya')
- table section iiv: 'IIV Vd_ENA/F' routed out of structural estimates ('Interindividual variabilitya')
- table section iiv: 'IIV Vd_ENAAT/F' routed out of structural estimates ('Interindividual variabilitya')
- table section residual_error: 'Proportional errorb' routed out of structural estimates ('Residual variability enalapril')
- table section residual_error: 'Additive errorc' routed out of structural estimates ('Residual variability enalapril')
- table section residual_error: 'Proportional errorb' routed out of structural estimates ('Residual variability enalaprilat')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Weight on CL_ENA/F (referenced to 5 kg)' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col2', 'Tab2:row8:col5'])
- dropped unlinked row (NIL): 'Weight on CL_ENAAT/F (referenced to 5 kg)' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2', 'Tab2:row9:col5'])
- covariate level 'Age on CL_ENAAT/F' → Q900:age_on_cl_enaat_f = 0.092 (linear_fractional on Q27)
- covariate level 'Serum creatinine on CL_ENAAT/F' → Q900:serum_creatinine_on_cl_enaat_f = 33.3 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Ross score on Vd_ENAAT/F' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col3'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka' → 1/h (from the paper text: "The text states: 'the absorption rate constant (ka) was fixed to the estimated value of the aforementioned final model (")
- implicit units: 'CL_ENA/F' → L/h (from the paper text: "The text states: 'By extrapolation of the estimated apparent clearances of the children with heart failure to an adult w")
- implicit units: 'CL_ENAAT/F' → L/h (from the paper text: "The text states: '...and the apparent clearance of enalaprilat 21.7 L/h.'")
- implicit units: 'Vd_ENA/F' → L (from the popPK convention: 'The paper does not explicitly state the unit for Vd_ENA/F, but the standard unit for apparent volume of distribution in ')
- implicit units: 'Vd_ENAAT/F' → L (from the popPK convention: 'The paper does not explicitly state the unit for Vd_ENAAT/F, but the standard unit for apparent volume of distribution i')
- implicit units: 'tlag' → h (from the popPK convention: 'The paper does not explicitly state the unit for tlag, but the standard unit for lag time in population PK is hours (h),')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enalapril
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 23 linked by role; re-tagged parent→enalaprilat ×28
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row13:col2 = '− 0.0141'
- unparsed cell Tab2:row13:col5 = '− 0.0141'
- unparsed cell Tab2:row13:col6 = '− 0.0288 to − 0.004'
- unparsed cell Tab2:row14:col2 = '− 0.15'
- unparsed cell Tab2:row14:col5 = '− 0.149'
- unparsed cell Tab2:row14:col6 = '− 0.248 to − 0.004'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (4/26 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['enalapril', 'enalaprilat', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[age_on_cl_enaat_f]` |  | 29.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[age_on_cl_enaat_f]` | 0.092 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_ena/f].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl_ena/f].rse_percent` |  | 3.43 | mismatch |
| `gpt-oss-120b` | `parameters[cl_ena/f].value` | 3.43 | 12.6 | mismatch |
| `gpt-oss-120b` | `parameters[cl_enaat/f]` | 1.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].rse_percent` |  | 0.6 | mismatch |
| `gpt-oss-120b` | `parameters[ross score on vd_enaat/f]` |  | 26.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[serum_creatinine_on_cl_enaat_f]` |  | 33.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[serum_creatinine_on_cl_enaat_f]` | 33.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight].rse_percent` |  | 0.75 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_weight].value` | 1 | 0.75 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v_f_weight]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag].rse_percent` |  | 0.195 | mismatch |
| `gpt-oss-120b` | `parameters[tlag].value` | 0.195 | 2.8 | mismatch |
| `gpt-oss-120b` | `parameters[vd_ena/f].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[vd_ena/f].rse_percent` |  | 2.83 | mismatch |
| `gpt-oss-120b` | `parameters[vd_ena/f].value` | 2.83 | 18.1 | mismatch |
| `gpt-oss-120b` | `parameters[vd_enaat/f]` | 24.45 |  | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col5', 'Tab2:row3:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col5', 'Tab2:row6:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col5', 'Tab2:row5:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col5', 'Tab2:row7:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.43 L/h | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col5', 'Tab2:row3:col6'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.36 L/h | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 24.4 L | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col5', 'Tab2:row6:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.83 L | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col5', 'Tab2:row5:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_metabolite_built[enalaprilat] |  | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.02445, 'CL': 3.777777777777778e-07, 'formation': 9.527777777777779e-07} |  | enalaprilat = compartment M1 with its own numbers |
| T3_metabolite_output[enalaprilat] |  | pass |  | 6.133e-05 |  | C_M1 (enalaprilat) must rise above 0 when the parent is dosed |
| T3_molar_mass[enalaprilat] |  | pass |  | {'MW': 0.3764467, 'MW_m1': 0.348399} |  | formation is molecule-for-molecule |
| T3_output_variable |  | pass | C_central (measured=enalapril) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_shared_parameters |  | skipped |  |  |  | parent–metabolite template: every compound has its own slot |
| T3_topology_template |  | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 40 | 0.0001842 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 60 | 0.0001842 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | fail | 1.85e-06 | 0.0001842 | 99.58 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 6.79e-06 | 0.0001842 | 27.13 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 14.6 | 0.0001842 |  | unresolved concentration unit (exp 'µg/L/mg·kg', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_modelica.zip" download>Enalapril_Steichert2025_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_fmi.zip" download>Enalapril_Steichert2025_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_matlab.zip" download>Enalapril_Steichert2025_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_sbml.zip" download>Enalapril_Steichert2025_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_cellml.zip" download>Enalapril_Steichert2025_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 702 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.1e-06 | kg |
| input | model | `CL1` | 0 | m3/s |
| input | model | `CLm1` | 3.778e-07 | m3/s |
| input | model | `MW` | 0.3764 |  |
| input | model | `MW_m1` | 0.3484 |  |
| input | model | `Vd1` | 0.00283 |  |
| input | model | `Vd1m1` | 0.02445 | m3 |
| input | model | `ka` | 0.0001667 | 1/s |
| input | model | `q1_m11` | 9.528e-07 | m3/s |
| output | concentration | `central.C` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Steichert M, Cawello W, Laeer S. Population Pharmacokinetic Analysis of Enalapril and Enalaprilat in Newly Treated Children with Heart Failure: Implications for Safe Dosing of Enalapril (LENA Studies). Clinical pharmacokinetics 64(7):1103–1118 (2025). [doi:10.1007/s40262-025-01520-5](https://doi.org/10.1007/s40262-025-01520-5)

**This record:** Pharmacolibrary v26.09, model `Enalapril_Steichert2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_enalapril/Enalapril_Steichert2025_reference>

```bibtex
@misc{pharmacolibrary_EnalaprilSteichert2025reference,
  title  = {{Pharmacolibrary model Enalapril_Steichert2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_enalapril/Enalapril_Steichert2025_reference},
  note   = {Parameters from doi:10.1007/s40262-025-01520-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.1 mg, single dose, first-order absorption (ka 0.6 /h, lag 11.7 min, F 1). Doses in the paper: 2.1–5.6 mg.

<dbs-fmusim paramsurl="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Enalapril_Steichert2025_reference_params.json` · controls `Enalapril_Steichert2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benalapril%5D%20Enalapril_Steichert2025_reference&body=Drug%3A%20enalapril%0ARecord%3A%20Enalapril_Steichert2025_reference%0APaper%3A%20Steichert_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_enalapril/Enalapril_Steichert2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:42 UTC</sub>
