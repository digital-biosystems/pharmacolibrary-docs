<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoquatrane&quot;,&quot;href&quot;:&quot;drugs/drug_gadoquatrane/&quot;},{&quot;label&quot;:&quot;Guenther_2025 \u00b7 tb_dota&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadoquatrane — `Gadoquatrane_Guenther2025_tb_dota`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

> AUC has no unit; c2_base_Q22 failed (ratio 0.8696).

<div class="pk-model-meta" hidden drug="gadoquatrane" model-id="Gadoquatrane_Guenther2025_tb_dota" status="needs_review" stale="false" population="female cynomolgus monkeys" measured-compound="gadoquatrane" parameterization="mechanistic" topology="1C"></div>

## Citation
Guenther C, Frenzel T, Rottmann A, Lohrke J, Janssen W. Pharmacokinetics, Excretion, and Organ Distribution of the Novel Gadolinium-Based MRI Contrast Agent Gadoquatrane in Female Cynomolgus Monkeys. Investigative radiology 60(12):831–839 (2025).
  ·  DOI: [10.1097/RLI.0000000000001211](https://doi.org/10.1097/RLI.0000000000001211)

## Population and dosing

**Population:** female cynomolgus monkeys · condition healthy · age group adult · n = 6.

**Dosing:** 0.1 mmol/kg, iv, single.

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC | AUC | 866 |  |
| CL | CL | 0.115 | L/h/kg |
| Vss | Vss | 0.186 | L/kg |
| α-t1/2 | t1/2α | 2.83 | min |
| β-t1/2 | t1/2β | 61.8 | min |
| γ-t1/2 † | t1/2γ | 25.6 | min |
| t1/2 effective | t1/2z | 1.11 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.222). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUC has no unit; c2_base_Q22 failed (ratio 0.8696).**

Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is gadoquatrane's own; they describe Tb-DOTA. Extracted — Tb-DOTA: AUC 866, CL 0.115 L/h/kg, Vss 0.186 L/kg, t1/2α 2.83 min, t1/2β 61.8 min, t1/2γ 25.6 min, t1/2z 1.11 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc: this record has 866, the second reading none; it also differs on 13 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC | `Q88` · AUC | 866 |  |  |  |  | exact (1) | T2:row2:col6, T2:row2:col7 |
| CL | `Q22` · CL | 0.115 | L/h/kg | 2.236e-06 | m3/s | L/h | exact (1) | T2:row4:col6, T2:row4:col7 |
| Vss | `Q65` · Vss | 0.186 | L/kg | 0.01302 | m3 | L | exact (1) | T2:row5:col6, T2:row5:col7 |
| α-t1/2 | `Q59` · t1/2α | 2.83 | min | 169.8 | s | h | half_life_rule (0.95) | T2:row6:col6, T2:row6:col7 |
| β-t1/2 | `Q60` · t1/2β | 61.8 | min | 3708 | s | h | half_life_rule (0.95) | T2:row7:col6, T2:row7:col7 |
| γ-t1/2 † | `Q89` · t1/2γ | 25.6 | min | 1536 | s | h | half_life_rule (0.95) | T2:row8:col6, T2:row8:col7 |
| t1/2 effective | `Q57` · t1/2z | 1.11 | h | 3996 | s | h | llm_confirmed (0.6) | T2:row9:col6, T2:row9:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'AUC'; source reconciliation required
- table representations disagree for 'γ-AUC'; source reconciliation required
- table representations disagree for 'CL'; source reconciliation required
- table representations disagree for 'Vss'; source reconciliation required
- table representations disagree for 'α-t1/2'; source reconciliation required
- table representations disagree for 'β-t1/2'; source reconciliation required
- table representations disagree for 'γ-t1/2 †'; source reconciliation required
- table representations disagree for 't1/2 effective'; source reconciliation required
- dropped duplicate Q88 ('γ-AUC', value '0.619') — already have one for this compound
- implicit units: 'AUC' — the LLM proposed 'µmol·h/L', whose dimension does not fit Q88; left unset
- implicit units: 'CL' → L/h/kg (from the paper text: "The text explicitly states: 'The total plasma clearance of gadoquatrane was about 0.11 L/h/kg' and 'The mean total plasm")
- implicit units: 'Vss' → L/kg (from the paper text: "The text explicitly states: 'The mean volume of distribution (0.17 L/kg) was in the range of the extracellular water fra")
- implicit units: 'α-t1/2' → min (from the popPK convention: "Half-lives are time units. The text states the effective half-life is 1 hour. The alpha phase is the 'fast distribution ")
- implicit units: 'β-t1/2' → min (from the popPK convention: 'As established in parameter 4, the values must be in minutes to be consistent with the statement that &gt;99% of the dose i')
- implicit units: 'γ-t1/2 †' → min (from the popPK convention: 'Consistent with parameters 4 and 5. The value 25.6 must be in minutes to fit the overall pharmacokinetic profile of rapi')
- implicit units: 't1/2 effective' → h (from the paper text: "The text explicitly states: 'The effective half-life... was estimated to be 1 hour' and later 'The estimated effective h")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadoquatrane
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'tb-dota' subgroup of Guenther_2025 (paper reports 3 populations: dy-butrol, gadoquatrane, tb-dota)

**Extraction notes:**
- table T2: units_need_context
- table T2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.222 (4/18 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc]` | 866 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 874 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.115 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.114 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 effective]` | 1.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 effective]` |  | 1.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss]` | 0.186 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss]` |  | 0.169 | only_one_extracted |
| `gpt-oss-120b` | `parameters[α-t1/2]` | 2.83 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[α-t1/2]` |  | 3.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[β-t1/2]` | 61.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β-t1/2]` |  | 61.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[γ-t1/2]` | 25.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[γ-t1/2]` |  | 25.3 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q22 | fail | 0.115 | 0.1 | 0.8696 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row4:col6', 'T2:row4:col7'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['T2:row9:col6', 'T2:row9:col7'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['T2:row6:col6', 'T2:row6:col7'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['T2:row7:col6', 'T2:row7:col7'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  |  |  | ['T2:row5:col6', 'T2:row5:col7'] |
| C5_dimension_Q89 | pass | [time] |  |  |  | ['T2:row8:col6', 'T2:row8:col7'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  |  |  | ['T2:row2:col6', 'T2:row2:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.115 |  |  | ['T2:row4:col6', 'T2:row4:col7'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.05 L/h |  |  | ['T2:row4:col6', 'T2:row4:col7'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 13 L |  |  | ['T2:row5:col6', 'T2:row5:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadoquatrane%5D%20Gadoquatrane_Guenther2025_tb_dota&body=Drug%3A%20gadoquatrane%0ARecord%3A%20Gadoquatrane_Guenther2025_tb_dota%0APaper%3A%20Guenther_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadoquatrane/Gadoquatrane_Guenther2025_tb_dota%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:32 UTC</sub>
