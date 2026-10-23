<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sapropterin&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/&quot;},{&quot;label&quot;:&quot;Qi_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sapropterin_Feillet2008_reference&quot;,&quot;label&quot;:&quot;Feillet_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/Sapropterin_Feillet2008_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sapropterin — `Sapropterin_Qi2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:40 UTC (Rejected), but the paper was screened again on 2026-10-05 11:23 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The sapropterin (BH4) model was rejected because the absorption rate constant kabs (0.235) was reported without a usable unit (given only as 'units'), so it could not be expressed in reciprocal hours and failed the dimensional check on a structural parameter.

<div class="pk-model-meta" hidden drug="sapropterin" model-id="Sapropterin_Qi2015_reference" status="rejected" stale="true" population="pediatric and adult patients with phenylketonuria" measured-compound="sapropterin" parameterization="apparent" topology="1C"></div>

## Citation
Qi Y, Mould DR, Zhou H, Merilainen M, Musson DG. A prospective population pharmacokinetic analysis of sapropterin dihydrochloride in infants and young children with phenylketonuria. Clinical pharmacokinetics 54(2):195–207 (2015).
  ·  DOI: [10.1007/s40262-014-0196-4](https://doi.org/10.1007/s40262-014-0196-4)

## Population and dosing

**Population:** pediatric and adult patients with phenylketonuria · condition phenylketonuria · age group mixed.

**Dosing:** 350, 1400 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 2710 | L/h | 9.8 |
| Vc/F (L) | V/F | 3010 | L | 43.9 |
| k a h-1 | t1/2ka | 0.235 | units | 23.8 |
| t lag (h) | tlag | 0.321 | h | 11.2 |
| C0 (μg/L) | C0 | 16.6 | μg/L | 4.1 |
| theta_cl_f_weight | theta_cl_f_weight | 0.864 |  | 7.3 |
| theta_v1_f_weight | theta_v1_f_weight | 0.644 |  | 18.9 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The sapropterin (BH4) model was rejected because the absorption rate constant kabs (0.235) was reported without a usable unit (given only as 'units'), so it could not be expressed in reciprocal hours and failed the dimensional check on a structural parameter.**

The record for sapropterin in infants, young children and adults with phenylketonuria lists kabs, the absorption rate constant, with value 0.235 and unit 'units' rather than a reciprocal-time unit such as 1/h. Without a proper unit the value could not be converted to a consistent time base, so the dimensional consistency check on this structural parameter failed. The other parameters carry coherent units (CL/F 2710 L/h, V/F 3010 L, tlag 0.321 h, C0 16.6 μg/L), so the failure is confined to kabs. Extracted — sapropterin (BH4): CL/F 2.71e+03 L/h, V/F 3.01e+03 L, kabs 0.235 units, tlag 0.321 h, C0 16.6 μg/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sapropterin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 2710 | L/h | 0.0007528 | m3/s | l/h | 9.8 | exact (1) | Tab3:row1:col2 |
| Vc/F (L) | `Q76` · V/F | 3010 | L | 3.01 | m3 | l | 43.9 | exact (1) | Tab3:row3:col2 |
| k a h-1 | `Q95` · t1/2ka | 0.235 | units |  |  | units | 23.8 | llm (0.6) | Tab3:row5:col2 |
| t lag (h) | `Q83` · tlag | 0.321 | h | 1156 | s | h | 11.2 | space_fold (0.95) | Tab3:row6:col2 |
| C0 (μg/L) | `Q86` · C0 | 16.6 | μg/L |  |  | µg/l | 4.1 | exact (1) | Tab3:row7:col2 |
| theta_cl_f_weight | `Q900` · theta_cl_f_weight | 0.864 |  |  |  |  | 7.3 |  | Tab3:row2:col2 |
| theta_v1_f_weight | `Q900` · theta_v1_f_weight | 0.644 |  |  |  |  | 18.9 |  | Tab3:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'k a h-1' → Q95 (unit '[luminosity] / [length] ** 2' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'C0 (μg/L)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sapropterin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- status held at "Needs review" — not promoted

**Extraction notes:**
- unparsed cell Tab3:row1:col1 = 'θ1'
- unparsed cell Tab3:row1:col3 = '2,708 (2,308–3,162)'
- unparsed cell Tab3:row2:col1 = 'θ6'
- unparsed cell Tab3:row2:col3 = '0.861 (0.751–0.980)'
- unparsed cell Tab3:row3:col1 = 'θ2'
- unparsed cell Tab3:row3:col3 = '3,967 (1,509–8,596)'
- unparsed cell Tab3:row4:col1 = 'θ7'
- unparsed cell Tab3:row4:col3 = '0.658 (0.399–0.827)'
- unparsed cell Tab3:row5:col1 = 'θ3'
- unparsed cell Tab3:row5:col3 = '0.284 (0.158–0.524)'
- unparsed cell Tab3:row6:col1 = 'θ4'
- unparsed cell Tab3:row6:col3 = '0.313 (0.246–0.400)'
- unparsed cell Tab3:row7:col1 = 'θ5'
- unparsed cell Tab3:row7:col3 = '16.39 (15.5–18.22)'
- unparsed cell Tab3:row8:col1 = 'θ8'
- unparsed cell Tab3:row8:col3 = '20.47 (17.95–26.0)'
- unparsed cell Tab3:row9:col1 = 'θ9'
- unparsed cell Tab3:row9:col3 = '30.312 (23.5–37.86)'
- unparsed cell Tab3:row10:col1 = 'η1'
- unparsed cell Tab3:row10:col3 = '45.85 (35.05–56.07)'
- unparsed cell Tab3:row11:col1 = 'η2'
- unparsed cell Tab3:row11:col3 = '54.67 (32.14–78.56)'
- unparsed cell Tab3:row12:col1 = 'η3'
- unparsed cell Tab3:row12:col3 = '36.16 (26.54–48.17)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.857 (18/21 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k a h-1].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | sapropterin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sapropterin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row1:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab3:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab3:row6:col2'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | μg/L | ['Tab3:row7:col2'] |
| C5_dimension_Q95 | fail | [luminosity] / [length] ** 2 | units | ['Tab3:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.71e+03 L/h | ['Tab3:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3.01e+03 L | ['Tab3:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsapropterin%5D%20Sapropterin_Qi2015_reference&body=Drug%3A%20sapropterin%0ARecord%3A%20Sapropterin_Qi2015_reference%0APaper%3A%20Qi_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sapropterin/Sapropterin_Qi2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 11:23 UTC</sub>
