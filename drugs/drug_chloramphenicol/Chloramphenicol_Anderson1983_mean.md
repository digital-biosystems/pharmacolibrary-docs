<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;chloramphenicol&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/&quot;},{&quot;label&quot;:&quot;Anderson_1983 \u00b7 mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloramphenicol_Anadn1994_reference&quot;,&quot;label&quot;:&quot;Anad\u00f3n_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloramphenicol_Kume1986_reference&quot;,&quot;label&quot;:&quot;Kume_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Kume1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloramphenicol_Perucca1982_reference&quot;,&quot;label&quot;:&quot;Perucca_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Perucca1982_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloramphenicol_Soback1986_reference&quot;,&quot;label&quot;:&quot;Soback_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Soback1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chloramphenicol — `Chloramphenicol_Anderson1983_mean`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span>

> This paper's disposition core is incomplete; the model does not reproduce the paper's terminal half-life (model/paper ratio 1.74).

<div class="pk-model-meta" hidden drug="chloramphenicol" model-id="Chloramphenicol_Anderson1983_mean" status="needs_review" stale="false" population="six non-lactating Holstein cows" measured-compound="chloramphenicol" parameterization="mechanistic" topology="1C"></div>

## Citation
Anderson KL, Neff-Davis CA, Davis LE, Koritz GD, Nelson DR. Pharmacokinetics of chloramphenicol in non-lactating cattle. Journal of veterinary pharmacology and therapeutics 6(4):305–313 (1983).
  ·  DOI: [10.1111/j.1365-2885.1983.tb00005.x](https://doi.org/10.1111/j.1365-2885.1983.tb00005.x)

## Population and dosing

**Population:** six non-lactating Holstein cows · age group adult · n = 6.

**Dosing:** 3500 mg, iv and sc, single.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUCi.v. (µg·h/ml) | AUC | 307.60 | µg·h/ml |
| F | Fab | 0.96 |  |
| CI | CL | 0.22 | ml/h/kg |
| Vdiareal | V | 2.38 | l/kg |
| a (15 mg/kg) | kabs | 1.02 | /h |
| Amikacin in: Serum t lag | tlag | 0.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; the model does not reproduce the paper's terminal half-life (model/paper ratio 1.74).**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Anadón_1994, Mayers_1991, Shen_2003) cannot stand in for this paper's evidence. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — chloramphenicol: AUC 308 µg·h/ml, Fab 0.96, CL 0.22 ml/h/kg, V 2.38 l/kg, kabs 1.02 /h, tlag 0 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has chloramphenicol, the second reading chloramphenicol base; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUCi.v. (µg·h/ml) | `Q88` · AUC | 307.60 | µg·h/ml |  |  | (h·µg)/ml | llm (0.6) | Anderson_1983_table_3:row0:col7 |
| F | `Q40` · Fab | 0.96 |  |  |  |  | exact (1) | Anderson_1983_table_3:row2:col7 |
| CI | `Q22` · CL | 0.22 | ml/h/kg | 4.278e-09 | m3/s | L/h | review_gapfill (0.7) | Anadón_1994:review |
| Vdiareal | `Q61` · V | 2.38 | l/kg | 0.1666 | m3 | L | review_gapfill (0.7) | Anadón_1994:review |
| a (15 mg/kg) | `Q49` · kabs | 1.02 | /h | 0.0002833 | 1/s | 1/h | review_gapfill (0.7) | Shen_2003:review |
| Amikacin in: Serum t lag | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Mayers_1991:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q88 ('AUCs.c. (µg·h/ml)', value '289.00') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=chloramphenicol
- population split: 'mean' subgroup of Anderson_1983 (paper reports 8 populations: cow number 1, cow number 2, cow number 3, cow number 4, cow number 5, cow number 6, from mean data, mean)
- gap-filled Q22 (CL) from Anadón_1994's review values (primary lacked it)
- gap-filled Q61 (V) from Anadón_1994's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Shen_2003's review values (primary lacked it)
- gap-filled Q83 (tlag) from Mayers_1991's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[a]` | 1.02 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[amikacin in: serum t lag]` | 0.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[auci.v.].parameter_id` | Q88 | Q17 | mismatch |
| `qwen3.8-27b` | `parameters[aucs.c.]` |  | 289.00 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ci]` | 0.22 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vdiareal]` | 2.38 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | chloramphenicol | chloramphenicol base | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |  |  |
| C0c_disposition_complete | fail |  |  |  |  |  |
| C1_half_life_beta | fail | 4.3 | 7.499 | 1.744 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Anadón_1994:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Shen_2003:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Anadón_1994:review'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Mayers_1991:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Anderson_1983_table_3:row0:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.22 |  |  | ['Anadón_1994:review'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0154 L/h |  |  | ['Anadón_1994:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 167 L |  |  | ['Anadón_1994:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloramphenicol%5D%20Chloramphenicol_Anderson1983_mean&body=Drug%3A%20chloramphenicol%0ARecord%3A%20Chloramphenicol_Anderson1983_mean%0APaper%3A%20Anderson_1983%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chloramphenicol/Chloramphenicol_Anderson1983_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:39 UTC</sub>
