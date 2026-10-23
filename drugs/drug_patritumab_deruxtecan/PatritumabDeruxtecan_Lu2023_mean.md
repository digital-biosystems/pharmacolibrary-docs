<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;patritumab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_patritumab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Lu_2023 \u00b7 mean&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# patritumab deruxtecan — `PatritumabDeruxtecan_Lu2023_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the unit for the metabolite formation rate constant could not be converted to standard SI units, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="patritumab deruxtecan" model-id="PatritumabDeruxtecan_Lu2023_mean" status="rejected" stale="false" population="patients with HER3-expressing solid tumors" measured-compound="patritumab_deruxtecan" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Lu Y, Shimizu S, Sawamura R, Tajima N, He L, Lee M et al. Population Pharmacokinetics of Patritumab Deruxtecan in Patients With Solid Tumors. Journal of clinical pharmacology 63(1):77–90 (2023).
  ·  DOI: [10.1002/jcph.2137](https://doi.org/10.1002/jcph.2137)

## Population and dosing

**Population:** patients with HER3-expressing solid tumors · condition solid tumors · age group adult.

**Dosing:** 112, 560 mg, iv, multiple, every 21 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLlin, L/d | CL | 0.342 | L/d |
| Vc, L | V1 | 2.943 | L |
| Vmax, μg/d | Vmax | 4352.2 | μg/d |
| Km, ng/mL | Km | 575.9 | ng/mL |
| Q, L/d | Q | 0.443 | L/d |
| Vp, L | V2 | 5.369 | L |
| Krel, 1/h | kfm | 0.030 | 1/h |
| CLDXd, L/h | CL | 5.713 | L/h |
| β, 1/h | kel | 0.180 | 1/h |
| weight_krel | weight_krel | -0.467 |  |
| theta_q25_hepatic_impairment_mild_cldxd | theta_q25_hepatic_impairment_mild_cldxd | 0.706 |  |
| theta_cl_hepatic_impairment_moderate_data_missing_cldxd | theta_cl_hepatic_impairment_moderate_data_missing_cldxd | 0.532 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.033). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the unit for the metabolite formation rate constant could not be converted to standard SI units, causing a dimension mismatch.**

The parameter governing the formation of deruxtecan from patritumab deruxtecan is reported with a unit of 1/h. This specific unit was not recognized for conversion to standard SI units, so the value could not be standardized. Consequently, the parameter lacked a valid SI value, causing a dimension mismatch on this structural parameter. Extracted — patritumab deruxtecan: CL 0.342 L/d, V1 2.94 L, Vmax 4.35e+03 μg/d, Km 576 ng/mL, Q 0.443 L/d, V2 5.37 L; deruxtecan: kfm 0.03 1/h, CL 5.71 L/h, kel 0.18 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has patritumab_deruxtecan, the second reading patritumab deruxtecan; it also differs on 28 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLlin, L/d | `Q22` · CL | 0.342 | L/d | 3.958e-09 | m3/s | l/d | llm (0.6) | jcph2137-tbl-0002:row1:col1 |
| Vc, L | `Q63` · V1 | 2.943 | L | 0.002943 | m3 | l | exact (1) | jcph2137-tbl-0002:row2:col1 |
| Vmax, μg/d | `Q66` · Vmax | 4352.2 | μg/d |  |  | µg/d | special_case (0.95) | jcph2137-tbl-0002:row3:col1 |
| Km, ng/mL | `Q1` · Km | 575.9 | ng/mL |  |  | ng/ml | exact (1) | jcph2137-tbl-0002:row4:col1 |
| Q, L/d | `Q30` · Q | 0.443 | L/d | 5.127e-09 | m3/s | l/d | exact (1) | jcph2137-tbl-0002:row5:col1 |
| Vp, L | `Q64` · V2 | 5.369 | L | 0.005369 | m3 | l | exact (1) | jcph2137-tbl-0002:row6:col1 |
| Krel, 1/h | `Q305` · kfm | 0.030 | 1/h | 8.333e-06 | 1/s | 1/h | exact (1) | Lu_2023_table_3:row0:col1 |
| CLDXd, L/h | `Q22` · CL | 5.713 | L/h | 1.587e-06 | m3/s | l/h | exact (1) | Lu_2023_table_3:row1:col1 |
| β, 1/h | `Q47` · kel | 0.180 | 1/h | 5e-05 | 1/s | 1/h | exact (1) | Lu_2023_table_3:row3:col1 |
| weight_krel | `Q900` · weight_krel | -0.467 |  |  |  |  |  | Lu_2023_table_3:row4:col1 |
| theta_q25_hepatic_impairment_mild_cldxd | `Q900` · theta_q25_hepatic_impairment_mild_cldxd | 0.706 |  |  |  |  |  | Lu_2023_table_3:row5:col1 |
| theta_cl_hepatic_impairment_moderate_data_missing_cldxd | `Q900` · theta_cl_hepatic_impairment_moderate_data_missing_cldxd | 0.532 |  |  |  |  |  | Lu_2023_table_3:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vmax, μg/d' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('Weight–CLlin', value '0.911') — already have one for this compound
- dropped duplicate Q63 ('Weight–Vc', value '0.654') — already have one for this compound
- dropped duplicate Q22 ('Albumin level–CLlin', value '-0.795') — already have one for this compound
- dropped duplicate Q22 ('Female–CLlin', value '0.865') — already have one for this compound
- dropped duplicate Q22 ('Breast cancer–CLlin', value '0.811') — already have one for this compound
- dropped unlinked row (NIL): 'θ' — extend the ontology if this is a real PK parameter (source ['Lu_2023_table_3:row2:col1'])
- covariate level 'Weight–Krel' → Q900:weight_krel = -0.467 (power on Q22)
- covariate effect for Q25 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=patritumab_deruxtecan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- population split: 'mean' subgroup of Lu_2023 (paper reports 2 populations: iiv of mean, %, mean)
- row roles: 2 per-group rows of patritumab_deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 20 linked by role; re-tagged parent→deruxtecan ×24
- molar mass: none found for 'patritumab_deruxtecan' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph2137-tbl-0002:row1:col3 = '0.301 to 0.384'
- unparsed cell jcph2137-tbl-0002:row2:col3 = '2.893 to 2.994'
- unparsed cell jcph2137-tbl-0002:row3:col3 = '3660.2 to 5044.2'
- unparsed cell jcph2137-tbl-0002:row4:col3 = '357.4 to 794.5'
- unparsed cell jcph2137-tbl-0002:row5:col3 = '0.402 to 0.484'
- unparsed cell jcph2137-tbl-0002:row6:col3 = '4.949 to 5.788'
- unparsed cell jcph2137-tbl-0002:row7:col3 = '0.663 to 1.159'
- unparsed cell jcph2137-tbl-0002:row8:col3 = '0.585 to 0.723'
- unparsed cell jcph2137-tbl-0002:row9:col3 = '−1.152 to −0.439'
- unparsed cell jcph2137-tbl-0002:row10:col3 = '0.769 to 0.961'
- unparsed cell jcph2137-tbl-0002:row11:col3 = '0.733 to 0.889'
- unparsed cell Lu_2023_table_3:row0:col3 = '0.029 to 0.031'
- unparsed cell Lu_2023_table_3:row1:col3 = '5.359 to 6.066'
- unparsed cell Lu_2023_table_3:row2:col3 = '0.628 to 0.668'
- unparsed cell Lu_2023_table_3:row3:col3 = '0.168 to 0.193'
- unparsed cell Lu_2023_table_3:row4:col3 = '−0.627 to −0.307'
- unparsed cell Lu_2023_table_3:row5:col3 = '0.609 to 0.803'
- unparsed cell Lu_2023_table_3:row6:col3 = '0.206 to 0.857'
- unparsed cell Lu_2023_table_3:row7:col3 = '0.161 to 0.226'
- unparsed cell Lu_2023_table_3:row8:col3 = '0.105 to 0.180'
- unparsed cell Lu_2023_table_3:row9:col3 = '0.287 to 0.434'
- unparsed cell Lu_2023_table_3:row10:col3 = '0.379 to 0.405'
- companion parameter table 3 transcribed (29 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.033 (1/30 fields) | 29 |

<details><summary>29 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['patritumab_deruxtecan', 'deruxtecan', 'metabolism']] | [['dxd-conjugated antibody', 'unconjugated dxd', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cldxd]` | 5.713 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cldxd]` |  | 5.713 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cllin]` | 0.342 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cllin]` |  | 0.342 | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` | 575.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` |  | 575.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[krel]` | 0.030 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[krel]` |  | 0.030 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.443 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 0.443 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_hepatic_impairment_mild_cldxd]` |  | 0.706 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_hepatic_impairment_moderate_data_missing_cldxd]` | 0.532 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_hepatic_impairment_moderate_data_missing_cldxd]` |  | 0.532 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q25_hepatic_impairment_mild_cldxd]` | 0.706 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 2.943 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 2.943 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` | 4352.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` |  | 4352.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 5.369 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 5.369 | only_one_extracted |
| `gpt-oss-120b` | `parameters[weight-cllin]` |  | 0.911 | only_one_extracted |
| `gpt-oss-120b` | `parameters[weight_krel]` | -0.467 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[weight_krel]` |  | -0.467 | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | 0.180 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` |  | 0.180 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ]` |  | 0.648 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | patritumab_deruxtecan | patritumab deruxtecan | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | patritumab_deruxtecan | DXd-conjugated antibody | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['jcph2137-tbl-0002:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph2137-tbl-0002:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lu_2023_table_3:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph2137-tbl-0002:row5:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Lu_2023_table_3:row0:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lu_2023_table_3:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jcph2137-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph2137-tbl-0002:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μg/d | ['jcph2137-tbl-0002:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.342 | ['jcph2137-tbl-0002:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0142 L/h | ['jcph2137-tbl-0002:row1:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.71 L/h | ['Lu_2023_table_3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.94 L | ['jcph2137-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.37 L | ['jcph2137-tbl-0002:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpatritumab_deruxtecan%5D%20PatritumabDeruxtecan_Lu2023_mean&body=Drug%3A%20patritumab_deruxtecan%0ARecord%3A%20PatritumabDeruxtecan_Lu2023_mean%0APaper%3A%20Lu_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_patritumab_deruxtecan/PatritumabDeruxtecan_Lu2023_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:13 UTC</sub>
