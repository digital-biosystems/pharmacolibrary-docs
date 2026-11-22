<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/&quot;},{&quot;label&quot;:&quot;Carlsson_2018 \u00b7 full&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Semaglutide_Carlsson2018_base&quot;,&quot;label&quot;:&quot;Carlsson_2018_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Carlsson2018_base.md&quot;,&quot;status&quot;:&quot;Curated (human-checked)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Jensen2017_reference&quot;,&quot;label&quot;:&quot;Jensen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Jensen2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Overgaard2021_healthy_subjects&quot;,&quot;label&quot;:&quot;Overgaard_2021_healthy_subjects&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Overgaard2021_healthy_subjects.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Overgaard2021_subjects_with_t2d&quot;,&quot;label&quot;:&quot;Overgaard_2021_subjects_with_t2d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Overgaard2021_subjects_with_t2d.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Guo2023_reference&quot;,&quot;label&quot;:&quot;Guo_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Guo2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# semaglutide — `Semaglutide_Carlsson2018_full`

> ## <span class="pk-badge pk-badge--green">Curated (human-checked)</span>

<div class="pk-model-meta" hidden drug="semaglutide" model-id="Semaglutide_Carlsson2018_full" status="curated" stale="false" population="adults with type 2 diabetes mellitus" measured-compound="semaglutide" parameterization="apparent" topology="1C"></div>

## Citation
Carlsson Petri KC, Ingwersen SH, Flint A, Zacho J, Overgaard RV. Semaglutide s.c. Once-Weekly in Type 2 Diabetes: A Population Pharmacokinetic Analysis. Diabetes therapy : research, treatment and education of diabetes and related disorders 9(4):1533–1547 (2018).
  ·  DOI: [10.1007/s13300-018-0458-5](https://doi.org/10.1007/s13300-018-0458-5)

## Population and dosing

**Population:** adults with type 2 diabetes mellitus · condition type 2 diabetes mellitus · age group adult.

**Dosing:** 0.25, 0.5, 1 mg, sc, multiple, every 168 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 13 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Renal function b | CLR | 997 |  |  |  |
| ka (h-1) | kabs | 0.0286 | h-1 |  |  |
| CL/F (L/h) | CL/F | 0.0478 | L/h | 1.06 | 12.9 (None% RSE) |
| V/F (L) | V/F | 12.2 | L | 0.487 | 37.3 (None% RSE) |
| body_weight | body_weight | 0.774 |  | 3.27 |  |
| sex_male | sex_male | 1.04 |  | 0.963 |  |
| age_65_74_years | age_65_74_years | 0.988 |  | 1.11 |  |
| age_gt_74_years | age_gt_74_years | 0.961 |  | 2.41 |  |
| maintenance_dose_0.5_mg | maintenance_dose_0.5_mg | 1.00 |  | 0.855 |  |
| race_black | race_black | 0.974 |  | 3.28 |  |
| race_asian | race_asian | 0.989 |  | 1.25 |  |
| ethnicity_hispanic_or_latino | ethnicity_hispanic_or_latino | 1.06 |  | 1.62 |  |
| injection_site_thigh | injection_site_thigh | 1.04 |  | 2.1 |  |
| injection_site_upper_arm | injection_site_upper_arm | 1.08 |  | 2.13 |  |
| renal_mild_impairment | renal_mild_impairment | 0.948 |  | 0.963 |  |
| renal_moderate_impairment | renal_moderate_impairment | 0.955 |  | 2.95 |  |
| renal_severe_impairment | renal_severe_impairment | 0.920 |  | 4.15 |  |

## Curated through the ground truth

A person extracted this paper's parameters by hand for the benchmark ground truth, and this record's values agree with it (16 of 16 parameters within 0.25), so it is shown as Curated (human-checked). The automatic reviewer's verdict was Needs review (needs_review).

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Curated (human-checked)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769), gpt-5.6-luna (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLR has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — semaglutide: CLR 997, kabs 0.0286 h-1, CL/F 0.0478 L/h, V/F 12.2 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of maintenance dose: this record has none, the second reading 634; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Renal function b | `Q26` · CLR | 997 |  |  |  |  |  | llm (0.6) | Carlsson_2018_table_2:row13:col2, Carlsson_2018_table_2:row14:col2, Carlsson_2018_table_2:row15:col2, Carlsson_2018_table_2:row16:col2 |  |
| ka (h-1) | `Q49` · kabs | 0.0286 | h-1 | 7.944e-06 | 1/s | 1/h |  | exact (1) | Carlsson_2018_table_S3:row0:col1 |  |
| CL/F (L/h) | `Q27` · CL/F | 0.0478 | L/h | 1.328e-08 | m3/s | l/h | 1.06 | exact (1) | Carlsson_2018_table_S3:row1:col1 | 12.9 (None% RSE) |
| V/F (L) | `Q76` · V/F | 12.2 | L | 0.0122 | m3 | l | 0.487 | exact (1) | Carlsson_2018_table_S3:row2:col1 | 37.3 (None% RSE) |
| body_weight | `Q900` · body_weight | 0.774 |  |  |  |  | 3.27 |  | Carlsson_2018_table_S3:row3:col1 |  |
| sex_male | `Q900` · sex_male | 1.04 |  |  |  |  | 0.963 |  | Carlsson_2018_table_S3:row4:col1 |  |
| age_65_74_years | `Q900` · age_65_74_years | 0.988 |  |  |  |  | 1.11 |  | Carlsson_2018_table_S3:row5:col1 |  |
| age_gt_74_years | `Q900` · age_gt_74_years | 0.961 |  |  |  |  | 2.41 |  | Carlsson_2018_table_S3:row6:col1 |  |
| maintenance_dose_0.5_mg | `Q900` · maintenance_dose_0.5_mg | 1.00 |  |  |  |  | 0.855 |  | Carlsson_2018_table_S3:row7:col1 |  |
| race_black | `Q900` · race_black | 0.974 |  |  |  |  | 3.28 |  | Carlsson_2018_table_S3:row8:col1 |  |
| race_asian | `Q900` · race_asian | 0.989 |  |  |  |  | 1.25 |  | Carlsson_2018_table_S3:row9:col1 |  |
| ethnicity_hispanic_or_latino | `Q900` · ethnicity_hispanic_or_latino | 1.06 |  |  |  |  | 1.62 |  | Carlsson_2018_table_S3:row10:col1 |  |
| injection_site_thigh | `Q900` · injection_site_thigh | 1.04 |  |  |  |  | 2.1 |  | Carlsson_2018_table_S3:row11:col1 |  |
| injection_site_upper_arm | `Q900` · injection_site_upper_arm | 1.08 |  |  |  |  | 2.13 |  | Carlsson_2018_table_S3:row12:col1 |  |
| renal_mild_impairment | `Q900` · renal_mild_impairment | 0.948 |  |  |  |  | 0.963 |  | Carlsson_2018_table_S3:row13:col1 |  |
| renal_moderate_impairment | `Q900` · renal_moderate_impairment | 0.955 |  |  |  |  | 2.95 |  | Carlsson_2018_table_S3:row14:col1 |  |
| renal_severe_impairment | `Q900` · renal_severe_impairment | 0.920 |  |  |  |  | 4.15 |  | Carlsson_2018_table_S3:row15:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V/F (L)' routed out of structural estimates ('IIV (%CV)')
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'All'; source reconciliation required
- table representations disagree for 'Sex'; source reconciliation required
- table representations disagree for 'Age group'; source reconciliation required
- table representations disagree for 'Race'; source reconciliation required
- table representations disagree for 'Ethnicity'; source reconciliation required
- table representations disagree for 'Renal function b'; source reconciliation required
- table representations disagree for 'Maintenance dose'; source reconciliation required
- table representations disagree for 'Body weight, kg'; source reconciliation required
- table representations disagree for 'BMI, kg/m²'; source reconciliation required
- table representations disagree for 'Duration of diabetes, years'; source reconciliation required
- table representations disagree for 'HbA1c, %'; source reconciliation required
- dropped unlinked row (NIL): 'All' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row0:col2'])
- dropped unlinked row (NIL): 'Sex' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row1:col2', 'Carlsson_2018_table_2:row2:col2'])
- dropped unlinked row (NIL): 'Age group' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row3:col2', 'Carlsson_2018_table_2:row4:col2', 'Carlsson_2018_table_2:row5:col2'])
- dropped unlinked row (NIL): 'Race' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row6:col2', 'Carlsson_2018_table_2:row7:col2', 'Carlsson_2018_table_2:row8:col2', 'Carlsson_2018_table_2:row9:col2', 'Carlsson_2018_table_2:row10:col2'])
- dropped unlinked row (NIL): 'Ethnicity' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row11:col2', 'Carlsson_2018_table_2:row12:col2'])
- dropped unlinked row (NIL): 'Maintenance dose' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row17:col2', 'Carlsson_2018_table_2:row18:col2'])
- dropped unlinked row (NIL): 'Body weight, kg' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row19:col2'])
- dropped unlinked row (NIL): 'BMI, kg/m²' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row21:col2'])
- dropped unlinked row (NIL): 'Duration of diabetes, years' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row23:col2'])
- dropped unlinked row (NIL): 'HbA1c, %' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row25:col2'])
- covariate level 'Body weight' → Q900:body_weight = 0.774 (power on Q26)
- covariate level 'Sex - male' → Q900:sex_male = 1.04 (linear_fractional on Q26)
- covariate level 'Age 65–74 years' → Q900:age_65_74_years = 0.988 (linear_fractional on Q26)
- covariate level 'Age &gt;74 years' → Q900:age_gt_74_years = 0.961 (linear_fractional on Q26)
- covariate level 'Maintenance dose 0.5 mg' → Q900:maintenance_dose_0.5_mg = 1.00 (linear_fractional on Q26)
- covariate level 'Race - black' → Q900:race_black = 0.974 (linear_fractional on Q26)
- covariate level 'Race - Asian' → Q900:race_asian = 0.989 (linear_fractional on Q26)
- covariate level 'Ethnicity – Hispanic or Latino' → Q900:ethnicity_hispanic_or_latino = 1.06 (linear_fractional on Q26)
- covariate level 'Injection site - thigh' → Q900:injection_site_thigh = 1.04 (linear_fractional on Q26)
- covariate level 'Injection site - upper arm' → Q900:injection_site_upper_arm = 1.08 (linear_fractional on Q26)
- covariate level 'Renal - Mild impairment' → Q900:renal_mild_impairment = 0.948 (linear_fractional on Q26)
- covariate level 'Renal - Moderate impairment' → Q900:renal_moderate_impairment = 0.955 (linear_fractional on Q26)
- covariate level 'Renal - Severe impairment' → Q900:renal_severe_impairment = 0.920 (linear_fractional on Q26)
- dropped value-less row: 'American Indian or Alaska Native'
- dropped value-less row: 'unknown'
- dropped value-less row: 'white'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 20 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 13 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 2 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'normal function'
- dropped value-less row: 'mild impairment'
- dropped value-less row: 'moderate impairment'
- dropped value-less row: 'severe'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=semaglutide
- status held at "Needs review" — not promoted
- model-stage split: 'full' is the full model of Carlsson_2018 (paper reports 2 stages: base, full); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Carlsson_2018_table_2: unbound_uncertainty
- table Carlsson_2018_table_2: unparsed_numeric_cell
- table Tab2: representations disagree; selected evidence retained, not merged
- table Carlsson_2018_table_S2: unbound_uncertainty
- companion parameter table S2 transcribed (15 record(s), model stage 'base')
- table Carlsson_2018_table_S3: unbound_uncertainty
- companion parameter table S3 transcribed (67 record(s), model stage 'full')
- LLM selected parameter table(s) S2, S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (30/39 fields) | 9 |
| `gpt-5.6-luna` | confirmed | 1.0 (36/36 fields) | none |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[maintenance dose]` |  | 634 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal function b].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'power'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[renal function b].parameter_id` | Q26 | Q23 | mismatch |
| `gpt-oss-120b` | `parameters[renal_mild_impairment]` | 0.948 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal_moderate_impairment]` | 0.955 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal_severe_impairment]` | 0.920 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_renal_mild_impairment]` |  | 0.948 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_renal_severe_impairment]` |  | 0.920 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q79_renal_moderate_impairment]` |  | 0.955 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Ground-truth comparison:** <span class="pk-badge pk-badge--green">confirmed</span>  (16/16 matched, agreement 1.0, tol 0.25)

| o_id | agreement | extracted | truth | fold |
|---|---|---|---|---|
| `Q27` · CL/F | match | 0.0478 L/h | 0.0478 L/h | 1.0 |
| `Q49` · kabs | match | 0.0286 h-1 | 0.0286 h-1 | 1.0 |
| `Q76` · V/F | match | 12.2 L | 12.2 L | 1.0 |
| `Q900:age_65_74_years` | match | 0.988 | 0.988 | 1.0 |
| `Q900:age_gt_74_years` | match | 0.961 | 0.961 | 1.0 |
| `Q900:body_weight` | match | 0.774 | 0.774 | 1.0 |
| `Q900:ethnicity_hispanic_or_latino` | match | 1.06 | 1.06 | 1.0 |
| `Q900:injection_site_thigh` | match | 1.04 | 1.04 | 1.0 |
| `Q900:injection_site_upper_arm` | match | 1.08 | 1.08 | 1.0 |
| `Q900:maintenance_dose_0.5_mg` | match | 1.00 | 1.00 | 1.0 |
| `Q900:race_asian` | match | 0.989 | 0.989 | 1.0 |
| `Q900:race_black` | match | 0.974 | 0.974 | 1.0 |
| `Q900:renal_mild_impairment` | match | 0.948 | 0.948 | 1.0 |
| `Q900:renal_moderate_impairment` | match | 0.955 | 0.955 | 1.0 |
| `Q900:renal_severe_impairment` | match | 0.920 | 0.920 | 1.0 |
| `Q900:sex_male` | match | 1.04 | 1.04 | 1.0 |

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Carlsson_2018_table_S3:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Carlsson_2018_table_S3:row0:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Carlsson_2018_table_S3:row2:col1'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] |  | ['Carlsson_2018_table_2:row13:col2', 'Carlsson_2018_table_2:row14:col2', 'Carlsson_2018_table_2:row15:col2', 'Carlsson_2018_table_2:row16:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0478 L/h | ['Carlsson_2018_table_S3:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 12.2 L | ['Carlsson_2018_table_S3:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_modelica.zip" download>Semaglutide_Carlsson2018_full_modelica.zip</a> <span class="pk-size">(5.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_fmi.zip" download>Semaglutide_Carlsson2018_full_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_matlab.zip" download>Semaglutide_Carlsson2018_full_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_matlab_simbio.zip" download>Semaglutide_Carlsson2018_full_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_sbml.zip" download>Semaglutide_Carlsson2018_full_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_cellml.zip" download>Semaglutide_Carlsson2018_full_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Carlsson Petri KC, Ingwersen SH, Flint A, Zacho J, Overgaard RV. Semaglutide s.c. Once-Weekly in Type 2 Diabetes: A Population Pharmacokinetic Analysis. Diabetes therapy : research, treatment and education of diabetes and related disorders 9(4):1533–1547 (2018). [doi:10.1007/s13300-018-0458-5](https://doi.org/10.1007/s13300-018-0458-5)

**This record:** Pharmacolibrary, model `Semaglutide_Carlsson2018_full`. <https://pharmacolibrary.github.io/#/drugs/drug_semaglutide/Semaglutide_Carlsson2018_full>

```bibtex
@misc{pharmacolibrary_SemaglutideCarlsson2018full,
  title  = {{Pharmacolibrary model Semaglutide_Carlsson2018_full}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_semaglutide/Semaglutide_Carlsson2018_full},
  note   = {Parameters from doi:10.1007/s13300-018-0458-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsemaglutide%5D%20Semaglutide_Carlsson2018_full&body=Drug%3A%20semaglutide%0ARecord%3A%20Semaglutide_Carlsson2018_full%0APaper%3A%20Carlsson_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_semaglutide/Semaglutide_Carlsson2018_full%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 10:19 UTC</sub>
