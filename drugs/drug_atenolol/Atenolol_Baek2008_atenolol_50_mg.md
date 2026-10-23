<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;Baek_2008 \u00b7 atenolol_50_mg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Baek2008_atenolol_50_mg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-29 03:59 UTC (Needs review), but the paper was screened again on 2026-10-06 23:08 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. AUCt has no unit.

<div class="pk-model-meta" hidden drug="atenolol" model-id="Atenolol_Baek2008_atenolol_50_mg" status="needs_review" stale="true" population="healthy adults" measured-compound="atenolol" parameterization="apparent" topology="1C"></div>

## Citation
Baek IH, Yun MH, Yun HY, Kwon KI. Pharmacokinetic/pharmacodynamic modeling of the cardiovascular effects of beta blockers in humans. Archives of pharmacal research 31(6):814–821 (2008).
  ·  DOI: [10.1007/s12272-001-1231-4](https://doi.org/10.1007/s12272-001-1231-4)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = , 19.

**Dosing:** 25, 50 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC&lt;0-24hr&gt; (μg h/mL) | AUCt | 3.05 | μg h/mL |
| C&lt;max&gt; (ng/mL) | Cmax | 396.14 | ng/mL |
| T&lt;max&gt; (h) | tmax | 2.87 | h |
| Volume/F (L) | V/F | 157.71 | L |
| Clearance (L/h) | CL | 18.15 | L/h |
| K&lt;el&gt; (h⁻¹) | kel | 0.58 | h⁻¹ |
| K&lt;pc&gt; (h⁻¹) | kabs | 0.91 | h⁻¹ |
| T&lt;1/α&gt; (h) | t1/2α | 0.88 | h |
| T&lt;1/β&gt; (h) | t1/2β | 4.83 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.867). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUCt has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUCt and Cmax), so that value has no SI equivalent. Extracted — atenolol: AUCt 3.05 μg h/mL, Cmax 396 ng/mL, tmax 2.87 h, V/F 158 L, CL 18.1 L/h, kel 0.58 h⁻¹, kabs 1.84 h⁻¹, k21 0.91 h⁻¹, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[k&lt;pc&gt;].parameter_id`: this record has Q49, the second reading Q48; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC&lt;0-24hr&gt; (μg h/mL) | `Q19` · AUCt | 3.05 | μg h/mL |  |  | (h·µg)/ml | llm_corrected (0.6) | Baek_2008_table_2:row0:col1 |
| C&lt;max&gt; (ng/mL) | `Q32` · Cmax | 396.14 | ng/mL |  |  | ng/ml | llm (0.6) | Baek_2008_table_2:row2:col1 |
| T&lt;max&gt; (h) | `Q56` · tmax | 2.87 | h | 1.033e+04 | s | h | llm (0.6) | Baek_2008_table_2:row3:col1 |
| Volume/F (L) | `Q76` · V/F | 157.71 | L | 0.1577 | m3 | l | llm (0.6) | Baek_2008_table_2:row4:col1 |
| Clearance (L/h) | `Q22` · CL | 18.15 | L/h | 5.042e-06 | m3/s | l/h | exact (1) | Baek_2008_table_2:row5:col1 |
| K&lt;el&gt; (h⁻¹) | `Q47` · kel | 0.58 | h⁻¹ | 0.0001611 | 1/s | 1/h | llm (0.6) | Baek_2008_table_3:row0:col1 |
| K&lt;pc&gt; (h⁻¹) | `Q49` · kabs | 0.91 | h⁻¹ | 0.0002528 | 1/s | 1/h | llm (0.6) | Baek_2008_table_3:row3:col1 |
| T&lt;1/α&gt; (h) | `Q59` · t1/2α | 0.88 | h | 3168 | s | h | llm (0.6) | Baek_2008_table_3:row4:col1 |
| T&lt;1/β&gt; (h) | `Q60` · t1/2β | 4.83 | h | 1.739e+04 | s | h | llm (0.6) | Baek_2008_table_3:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'μg h/mL' (AUCt)
- dropped duplicate Q47 ('K&lt;e&gt; (h⁻¹)', value '0.53') — already have one for this compound
- dropped duplicate Q47 ('K&lt;sp&gt; (h⁻¹)', value '1.84') — already have one for this compound
- implicit units: 'AUC&lt;0-24hr&gt; (μg h/mL)' — the LLM proposed 'μg h/mL', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'atenolol (50 mg)' subgroup of Baek_2008 (paper reports 2 populations: atenolol (50 mg), carvedilol (25 mg))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k&lt;pc&gt;].parameter_id` | Q49 | Q48 | mismatch |
| `gpt-oss-120b` | `parameters[t&lt;1/β&gt;].parameter_id` | Q60 | Q53 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Baek_2008_table_2:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Baek_2008_table_2:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Baek_2008_table_3:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Baek_2008_table_3:row3:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Baek_2008_table_2:row3:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['Baek_2008_table_3:row4:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['Baek_2008_table_3:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Baek_2008_table_2:row4:col1'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | μg h/mL | ['Baek_2008_table_2:row0:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.1 L/h | ['Baek_2008_table_2:row5:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 158 L | ['Baek_2008_table_2:row4:col1'] |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Baek2008_atenolol_50_mg&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Baek2008_atenolol_50_mg%0APaper%3A%20Baek_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atenolol/Atenolol_Baek2008_atenolol_50_mg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:08 UTC</sub>
