<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;vernakalant&quot;,&quot;href&quot;:&quot;drugs/drug_vernakalant/&quot;},{&quot;label&quot;:&quot;Mao_2012 \u00b7 parameter_estimate_se&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vernakalant_Mao2012_estimate&quot;,&quot;label&quot;:&quot;Mao_2012_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vernakalant — `Vernakalant_Mao2012_parameter_estimate_se`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Vernakalant clearance and volume parameters are negative, and steady-state volume and systemic clearance values are missing from the record.

<div class="pk-model-meta" hidden drug="vernakalant" model-id="Vernakalant_Mao2012_parameter_estimate_se" status="rejected" stale="false" population="patients with atrial fibrillation or atrial flutter and healthy volunteers" measured-compound="vernakalant" parameterization="mechanistic" topology="1C"></div>

## Citation
Mao ZL, Townsend RW, Gao Y, Wheeler JJ, Kastrissios H, Keirns J. Population pharmacokinetics of vernakalant hydrochloride injection (RSD1235) in patients with atrial fibrillation or atrial flutter. Journal of clinical pharmacology 52(7):1042–1053 (2012).
  ·  DOI: [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425)

## Population and dosing

**Population:** patients with atrial fibrillation or atrial flutter and healthy volunteers · condition atrial fibrillation or atrial flutter · age group adult · n = 605.

**Dosing:** 140, 210 mg, iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| θ¹ (CL intercept) | equation variable | -1.050 | CL intercept |  |
| θ² (Vc) | V | -0.670 | L | 0.184 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vernakalant clearance and volume parameters are negative, and steady-state volume and systemic clearance values are missing from the record.**

The record lists a clearance intercept of -1.050 and a central volume of -0.670 L, which are physically implausible. A second reader identified steady-state volume of distribution as 1.55 and systemic clearance as 0.35, but these values are null in the current record. The clearance parameter also lacks a valid SI unit, preventing proper conversion. Extracted — vernakalant: V -0.67 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of steady‐state volume of distribution: this record has none, the second reading 1.55; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| θ¹ (CL intercept) | `Q900` · equation variable | -1.050 | CL intercept |  |  | clintercept | llm (0.6) | Mao_2012_table_2:row0:col1 |  |
| θ² (Vc) | `Q61` · V | -0.670 | L | -0.00067 | m3 | L | llm (0.6) | Mao_2012_table_2:row1:col1 | 0.184 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'CL intercept' (equation variable)
- unit_dimension_unknown: 'Vc' (V1)
- unit_dimension_unknown: 'Vp' (V1)
- dropped duplicate Q63 ('θ³ (Vp)', value '0.038') — already have one for this compound
- dropped unlinked row (NIL): 'θ⁴ (Q intercept)' — extend the ontology if this is a real PK parameter (source ['Mao_2012_table_2:row3:col1'])
- dropped unlinked row (NIL): 'θ⁵ (Volunteer and EM on CL)' — extend the ontology if this is a real PK parameter (source ['Mao_2012_table_2:row4:col1'])
- dropped unlinked row (NIL): 'θ⁶ (Patient and EM on CL)' — extend the ontology if this is a real PK parameter (source ['Mao_2012_table_2:row5:col1'])
- dropped unlinked row (NIL): 'θ⁷ (PM on CL)' — extend the ontology if this is a real PK parameter (source ['Mao_2012_table_2:row6:col1'])
- dropped unlinked row (NIL): 'θ⁸ (Age on CL)' — extend the ontology if this is a real PK parameter (source ['Mao_2012_table_2:row7:col1'])
- dropped unlinked row (NIL): 'θ⁹ (Serum creatinine on CL)' — extend the ontology if this is a real PK parameter (source ['Mao_2012_table_2:row8:col1'])
- dropped unlinked row (NIL): 'θ¹⁰ (Volunteer on Q)' — extend the ontology if this is a real PK parameter (source ['Mao_2012_table_2:row9:col1'])
- implicit units: 'θ² (Vc)' → L (from the popPK convention: 'The parameter is identified as Vc (Volume of distribution of the central compartment). While the text provides units for')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vernakalant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'θ² (Vc)' is the general volume)
- status held at route_to_review — not promoted
- population split: 'parameter estimate ± se' subgroup of Mao_2012 (paper reports 2 populations: estimate, parameter estimate ± se)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3, 4
- unparsed cell Mao_2012_table_2:row0:col2 = '−1.120 to −0.980'
- unparsed cell Mao_2012_table_2:row1:col2 = '−0.757 to −0.583'
- unparsed cell Mao_2012_table_2:row2:col2 = '−0.015 to 0.091'
- unparsed cell Mao_2012_table_2:row3:col2 = '0.099 to 0.483'
- unparsed cell Mao_2012_table_2:row4:col2 = '0.270 to 0.674'
- unparsed cell Mao_2012_table_2:row5:col2 = '0.082 to 0.230'
- unparsed cell Mao_2012_table_2:row6:col2 = '−0.654 to −0.416'
- unparsed cell Mao_2012_table_2:row7:col2 = '−0.440 to −0.128'
- unparsed cell Mao_2012_table_2:row8:col2 = '−0.508 to −0.182'
- unparsed cell Mao_2012_table_2:row9:col2 = '0.313 to 1.039'
- unparsed cell Mao_2012_table_2:row10:col2 = '0.120 to 0.198'
- unparsed cell Mao_2012_table_2:row11:col2 = '0.101 to 0.267'
- unparsed cell Mao_2012_table_2:row12:col2 = '0.000 to 0.085'
- unparsed cell Mao_2012_table_2:row13:col2 = '−0.069 to 0.165'
- unparsed cell Mao_2012_table_2:row14:col2 = '0.310 to 0.582'
- unparsed cell Mao_2012_table_2:row15:col2 = '−0.052 to 0.084'
- unparsed cell Mao_2012_table_2:row16:col2 = '−0.103 to 0.339'
- unparsed cell Mao_2012_table_2:row17:col2 = '0.077 to 0.165'
- unparsed cell Mao_2012_table_2:row18:col2 = '0.129 to 0.277'
- unparsed cell Mao_2012_table_2:row19:col2 = '0.286 to 0.674'
- unparsed cell Mao_2012_table_2:row20:col2 = '0.037 to 0.074'
- unparsed cell Mao_2012_table_2:row21:col2 = '0.061 to 0.097'
- unparsed cell Mao_2012_table_4:row8:col4 = '1290-11 529'
- unparsed cell Mao_2012_table_4:row12:col4 = '1649-11 546'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[steady‐state volume of distribution]` |  | 1.55 | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic clearance]` |  | 0.35 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ]` | -1.050 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_base_sign_Q61 | fail |  | -0.67 |  |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Mao_2012_table_2:row1:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvernakalant%5D%20Vernakalant_Mao2012_parameter_estimate_se&body=Drug%3A%20vernakalant%0ARecord%3A%20Vernakalant_Mao2012_parameter_estimate_se%0APaper%3A%20Mao_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vernakalant/Vernakalant_Mao2012_parameter_estimate_se%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-09 00:20 UTC</sub>
