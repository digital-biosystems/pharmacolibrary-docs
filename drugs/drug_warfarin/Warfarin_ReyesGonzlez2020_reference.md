<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Reyes-Gonz\u00e1lez_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Gomeni2026_reference&quot;,&quot;label&quot;:&quot;Gomeni_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Gomeni2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Ooi2017_reference&quot;,&quot;label&quot;:&quot;Ooi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Ooi2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sasaki_2009_INR&quot;,&quot;label&quot;:&quot;Sasaki_2009 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Sasaki_2009_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_ReyesGonzlez2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; cmax and AUC have no unit.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_ReyesGonzlez2020_reference" status="needs_review" stale="false" population="Puerto Ricans" measured-compound="warfarin" parameterization="mechanistic" topology="1C"></div>

## Citation
Reyes-González S, de Las Barreras C, Reynaldo G, Rodríguez-Vera L, Vlaar C, Mejias VL et al. Genotype-driven pharmacokinetic simulations of warfarin levels in Puerto Ricans. Drug metabolism and personalized therapy 35(4) (2020).
  ·  DOI: [10.1515/dmpt-2020-0135](https://doi.org/10.1515/dmpt-2020-0135)

## Population and dosing

**Population:** Puerto Ricans · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The mean peak concentration (Cmax) ... wild-type | Cmax | 0.36 | vs. |
| the average clearance (CL) parameter ... non-carriers | CL | 0.22 | L/h |
| area under the curve (AUC) | AUC | 20.43 | vs. |
| Vd | V | 14.3 | L |
| ka (1/h) | kabs | 0.214 | 1/h |
| Lag (h) | tlag | 1.29 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; cmax and AUC have no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Aoyama_2022, Gomeni_2026) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — warfarin: Cmax 0.36 vs., CL 0.22 L/h, AUC 20.4 vs., V 14.3 L, kabs 0.214 1/h, tlag 1.29 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of area under the curve: this record has 20.43, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The mean peak concentration (Cmax) ... wild-type | `Q32` · Cmax | 0.36 | vs. |  |  | vs | llm_confirmed (0.6) | Reyes-González_2020:abstract |
| the average clearance (CL) parameter ... non-carriers | `Q22` · CL | 0.22 | L/h | 6.111e-08 | m3/s | L/h | llm_confirmed (0.6) | Reyes-González_2020:abstract |
| area under the curve (AUC) | `Q88` · AUC | 20.43 | vs. |  |  | vs | exact (1) | Reyes-González_2020:abstract |
| Vd | `Q61` · V | 14.3 | L | 0.0143 | m3 | L | review_gapfill (0.7) | Aoyama_2022:review |
| ka (1/h) | `Q49` · kabs | 0.214 | 1/h | 5.944e-05 | 1/s | 1/h | review_gapfill (0.7) | Gomeni_2026:review |
| Lag (h) | `Q83` · tlag | 1.29 | h | 4644 | s | h | review_gapfill (0.7) | Gomeni_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate cyp2c9 for kel from footnote/prose kept as documentation only (['Reyes-González_2020:abstract'])
- unit_dimension_unknown: 'vs.' (Cmax)
- unit_dimension_unknown: 'vs.' (CL)
- dropped duplicate Q22 ('the average clearance (CL) parameter', value '0.17') — already have one for this compound
- unit_dimension_unknown: 'vs.' (AUC)
- dropped duplicate Q88 ('AUC', value '24.78') — already have one for this compound
- implicit units: 'the average clearance (CL) parameter ... non-carriers' → L/h (from the popPK convention: 'No unit is stated in the text. In population PK, total clearance (CL) is conventionally reported in L/h. The value 0.22 ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=warfarin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Aoyama_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gomeni_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Gomeni_2026's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Reyes-González_2020_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[area under the curve]` | 20.43 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 20.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 0.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the average clearance (cl) parameter ... non-carriers]` | 0.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the mean peak concentration (cmax) ... wild-type]` | 0.36 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Reyes-González_2020:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gomeni_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Aoyama_2022:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Gomeni_2026:review'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | vs. | ['Reyes-González_2020:abstract'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | vs. | ['Reyes-González_2020:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.22 | ['Reyes-González_2020:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.22 L/h | ['Reyes-González_2020:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.3 L | ['Aoyama_2022:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_ReyesGonzlez2020_reference&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_ReyesGonzlez2020_reference%0APaper%3A%20Reyes-Gonz%C3%A1lez_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_ReyesGonzlez2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 23:30 UTC</sub>
