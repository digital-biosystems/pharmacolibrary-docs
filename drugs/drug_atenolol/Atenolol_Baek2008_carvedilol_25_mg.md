<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;Baek_2008 \u00b7 carvedilol_25_mg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Baek2008_carvedilol_25_mg`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.182), gpt-oss:120b (partly confirmed, agreement 0.19). The first reading is what the record holds.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**All ten extracted parameters describe carvedilol, not atenolol, leaving atenolol's clearance, volume, and lag time at placeholder defaults.**

The record lists AUC, Cmax, and clearance values for carvedilol, yet the drug is identified as atenolol. Consequently, atenolol's clearance, volume of distribution, and absorption lag time had no source values. A second reader also disagreed on the primary analyte and reported different parameter values. Extracted — carvedilol: AUCt 283 ng*h/mL, Cmax 62.7 ng/mL, tmax 1.26 h, V/F 1.56e+03 L, CL 94.6 L/h, kel 4.45 h⁻¹, kabs 4.52 h⁻¹, k21 0.19 h⁻¹, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc&lt;0-24hr&gt;: this record has none, the second reading 3.05; it also differs on 17 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-29 04:00:14.385788+00:00) predates the upstream re-run (2026-10-06 23:08:26.720089+00:00). Current validate status: `needs_review`.

## Citation
Baek IH et al., Pharmacokinetic/pharmacodynamic modelin…, Archives of pharmacal resea… (2008)
  ·  DOI: [10.1007/s12272-001-1231-4](https://doi.org/10.1007/s12272-001-1231-4)

## Model component
<dbs-pgx drug="atenolol" model-id="Atenolol_Baek2008_carvedilol_25_mg" status="needs_review" stale="true" population="healthy adults" measured-compound="atenolol" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC&lt;0-30hr&gt; (ng h/mL) | `Q19` · AUCt | 282.55 | ng h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm_corrected (0.6) | Baek_2008_table_2:row1:col2 | — | not captured |
| C&lt;max&gt; (ng/mL) | `Q32` · Cmax | 62.74 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Baek_2008_table_2:row2:col2 | — | not captured |
| T&lt;max&gt; (h) | `Q56` · tmax | 1.26 | h | 4536.0 | [h] | not captured | llm (0.6) | Baek_2008_table_2:row3:col2 | — | not captured |
| Volume/F (L) | `Q76` · V/F | 1561.78 | L | 1.56178 | [l] | not captured | llm (0.6) | Baek_2008_table_2:row4:col2 | — | not captured |
| Clearance (L/h) | `Q22` · CL | 94.64 | L/h | 2.628888888888889e-05 | [l] / [h] | not captured | exact (1.0) | Baek_2008_table_2:row5:col2 | — | not captured |
| K&lt;el&gt; (h⁻¹) | `Q47` · kel | 4.45 | h⁻¹ | 0.0012361111111111112 | [1] / [h] | not captured | llm (0.6) | Baek_2008_table_3:row0:col2 | — | not captured |
| K&lt;pc&gt; (h⁻¹) | `Q49` · kabs | 0.19 | h⁻¹ | 5.277777777777778e-05 | [1] / [h] | not captured | llm (0.6) | Baek_2008_table_3:row3:col2 | — | not captured |
| T&lt;1/α&gt; (h) | `Q59` · t1/2α | 0.68 | h | 2448.0 | [h] | not captured | llm (0.6) | Baek_2008_table_3:row4:col2 | — | not captured |
| T&lt;1/β&gt; (h) | `Q60` · t1/2β | 15.84 | h | 57024.0 | [h] | not captured | llm (0.6) | Baek_2008_table_3:row5:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.182 (4/22 fields) | 18 |
| `gpt-oss:120b` | partly confirmed | 0.19 (4/21 fields) | 17 |

<details><summary>35 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc&lt;0-24hr&gt;]` | not captured | 3.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc&lt;0-30hr&gt;]` | 282.55 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c&lt;max&gt;]` | not captured | 396.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c&lt;max&gt;]` | 62.74 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 18.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 94.64 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;el&gt;]` | not captured | 0.58 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;el&gt;]` | 4.45 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;pc&gt;]` | not captured | 0.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k&lt;pc&gt;]` | 0.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;1/α&gt;]` | not captured | 0.88 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;1/α&gt;]` | 0.68 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;1/β&gt;]` | not captured | 4.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;1/β&gt;]` | 15.84 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;max&gt;]` | not captured | 2.87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t&lt;max&gt;]` | 1.26 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume/f]` | not captured | 157.71 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume/f]` | 1561.78 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc&lt;0-24hr&gt;]` | not captured | 3.05 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc&lt;0-30hr&gt;]` | 282.55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c&lt;max&gt;]` | not captured | 396.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[c&lt;max&gt;]` | 62.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | not captured | 18.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | 94.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k&lt;el&gt;]` | not captured | 0.58 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k&lt;el&gt;]` | 4.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k&lt;pc&gt;]` | not captured | 0.91 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k&lt;pc&gt;]` | 0.19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t&lt;1/α&gt;]` | 0.68 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t&lt;1/β&gt;]` | not captured | 4.83 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t&lt;1/β&gt;]` | 15.84 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t&lt;max&gt;]` | not captured | 2.87 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t&lt;max&gt;]` | 1.26 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume/f]` | not captured | 157.71 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume/f]` | 1561.78 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Baek_2008_table_2:row5:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Baek_2008_table_2:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Baek_2008_table_3:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Baek_2008_table_3:row3:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Baek_2008_table_2:row3:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Baek_2008_table_3:row4:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Baek_2008_table_3:row5:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Baek_2008_table_2:row4:col2'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | ng h/mL | not captured | not captured | ['Baek_2008_table_2:row1:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 94.6 L/h | not captured | not captured | ['Baek_2008_table_2:row5:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.56e+03 L | not captured | not captured | ['Baek_2008_table_2:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['k21'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 396.14 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2262.74 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 222.87 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2221.26 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atenolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Baek_2008` / `Baek_2008::carvedilol_25_mg`)
- model: `../../../knowledgebase/drugs/drug_atenolol/models/modelica/_needs_review/Atenolol_Baek2008_carvedilol_25_mg.mo`
- deviation: `../../../knowledgebase/drugs/drug_atenolol/models/modelica/_needs_review/Atenolol_Baek2008_carvedilol_25_mg.deviation.json`


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:08 UTC</sub>
