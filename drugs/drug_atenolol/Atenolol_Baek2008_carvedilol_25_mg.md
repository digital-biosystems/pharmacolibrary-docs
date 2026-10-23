<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;Baek_2008 \u00b7 carvedilol_25_mg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Baek2008_carvedilol_25_mg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-29 04:00 UTC (Needs review), but the paper was screened again on 2026-10-06 23:08 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. All ten extracted parameters describe carvedilol, not atenolol, leaving atenolol's clearance, volume, and lag time at placeholder defaults.

<div class="pk-model-meta" hidden drug="atenolol" model-id="Atenolol_Baek2008_carvedilol_25_mg" status="needs_review" stale="true" population="healthy adults" measured-compound="atenolol" parameterization="apparent" topology="1C"></div>

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
| AUC&lt;0-30hr&gt; (ng h/mL) | AUCt | 282.55 | ng h/mL |
| C&lt;max&gt; (ng/mL) | Cmax | 62.74 | ng/mL |
| T&lt;max&gt; (h) | tmax | 1.26 | h |
| Volume/F (L) | V/F | 1561.78 | L |
| Clearance (L/h) | CL | 94.64 | L/h |
| K&lt;el&gt; (h⁻¹) | kel | 4.45 | h⁻¹ |
| K&lt;pc&gt; (h⁻¹) | kabs | 0.19 | h⁻¹ |
| T&lt;1/α&gt; (h) | t1/2α | 0.68 | h |
| T&lt;1/β&gt; (h) | t1/2β | 15.84 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.182). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**All ten extracted parameters describe carvedilol, not atenolol, leaving atenolol's clearance, volume, and lag time at placeholder defaults.**

The record lists AUC, Cmax, and clearance values for carvedilol, yet the drug is identified as atenolol. Consequently, atenolol's clearance, volume of distribution, and absorption lag time had no source values. A second reader also disagreed on the primary analyte and reported different parameter values. Extracted — carvedilol: AUCt 283 ng*h/mL, Cmax 62.7 ng/mL, tmax 1.26 h, V/F 1.56e+03 L, CL 94.6 L/h, kel 4.45 h⁻¹, kabs 4.52 h⁻¹, k21 0.19 h⁻¹, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc&lt;0-24hr&gt;: this record has none, the second reading 3.05; it also differs on 17 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC&lt;0-30hr&gt; (ng h/mL) | `Q19` · AUCt | 282.55 | ng h/mL |  |  | (h·ng)/ml | llm_corrected (0.6) | Baek_2008_table_2:row1:col2 |
| C&lt;max&gt; (ng/mL) | `Q32` · Cmax | 62.74 | ng/mL |  |  | ng/ml | llm (0.6) | Baek_2008_table_2:row2:col2 |
| T&lt;max&gt; (h) | `Q56` · tmax | 1.26 | h | 4536 | s | h | llm (0.6) | Baek_2008_table_2:row3:col2 |
| Volume/F (L) | `Q76` · V/F | 1561.78 | L | 1.562 | m3 | l | llm (0.6) | Baek_2008_table_2:row4:col2 |
| Clearance (L/h) | `Q22` · CL | 94.64 | L/h | 2.629e-05 | m3/s | l/h | exact (1) | Baek_2008_table_2:row5:col2 |
| K&lt;el&gt; (h⁻¹) | `Q47` · kel | 4.45 | h⁻¹ | 0.001236 | 1/s | 1/h | llm (0.6) | Baek_2008_table_3:row0:col2 |
| K&lt;pc&gt; (h⁻¹) | `Q49` · kabs | 0.19 | h⁻¹ | 5.278e-05 | 1/s | 1/h | llm (0.6) | Baek_2008_table_3:row3:col2 |
| T&lt;1/α&gt; (h) | `Q59` · t1/2α | 0.68 | h | 2448 | s | h | llm (0.6) | Baek_2008_table_3:row4:col2 |
| T&lt;1/β&gt; (h) | `Q60` · t1/2β | 15.84 | h | 5.702e+04 | s | h | llm (0.6) | Baek_2008_table_3:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ng h/mL' (AUCt)
- dropped duplicate Q47 ('K&lt;e&gt; (h⁻¹)', value '0.60') — already have one for this compound
- dropped duplicate Q47 ('K&lt;sp&gt; (h⁻¹)', value '4.52') — already have one for this compound
- implicit units: 'AUC&lt;0-30hr&gt; (ng h/mL)' — the LLM proposed 'ng h/mL', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'carvedilol (25 mg)' subgroup of Baek_2008 (paper reports 2 populations: atenolol (50 mg), carvedilol (25 mg))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.182 (4/22 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc&lt;0-24hr&gt;]` |  | 3.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc&lt;0-30hr&gt;]` | 282.55 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c&lt;max&gt;]` |  | 396.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c&lt;max&gt;]` | 62.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 18.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 94.64 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;el&gt;]` |  | 0.58 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;el&gt;]` | 4.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;pc&gt;]` |  | 0.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;pc&gt;]` | 0.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;1/α&gt;]` |  | 0.88 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;1/α&gt;]` | 0.68 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;1/β&gt;]` |  | 4.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;1/β&gt;]` | 15.84 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;max&gt;]` |  | 2.87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;max&gt;]` | 1.26 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume/f]` |  | 157.71 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume/f]` | 1561.78 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Baek_2008_table_2:row5:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Baek_2008_table_2:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Baek_2008_table_3:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Baek_2008_table_3:row3:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Baek_2008_table_2:row3:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['Baek_2008_table_3:row4:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['Baek_2008_table_3:row5:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Baek_2008_table_2:row4:col2'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | ng h/mL | ['Baek_2008_table_2:row1:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 94.6 L/h | ['Baek_2008_table_2:row5:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.56e+03 L | ['Baek_2008_table_2:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['k21'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 396.1 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2263 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2.9 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.3 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 222.9 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2221 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Baek2008_carvedilol_25_mg&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Baek2008_carvedilol_25_mg%0APaper%3A%20Baek_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atenolol/Atenolol_Baek2008_carvedilol_25_mg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:08 UTC</sub>
