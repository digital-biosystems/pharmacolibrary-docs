<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoquatrane&quot;,&quot;href&quot;:&quot;drugs/drug_gadoquatrane/&quot;},{&quot;label&quot;:&quot;Guenther_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadoquatrane — `Gadoquatrane_Guenther2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

> Gadoquatrane AUC is 874 without a unit, preventing conversion; a second comparison also failed with a ratio of 0.8772.

<div class="pk-model-meta" hidden drug="gadoquatrane" model-id="Gadoquatrane_Guenther2025_reference" status="needs_review" stale="false" population="female cynomolgus monkeys" measured-compound="gadoquatrane" parameterization="mechanistic" topology="1C"></div>

## Citation
Guenther C, Frenzel T, Rottmann A, Lohrke J, Janssen W. Pharmacokinetics, Excretion, and Organ Distribution of the Novel Gadolinium-Based MRI Contrast Agent Gadoquatrane in Female Cynomolgus Monkeys. Investigative radiology 60(12):831–839 (2025).
  ·  DOI: [10.1097/RLI.0000000000001211](https://doi.org/10.1097/RLI.0000000000001211)

## Population and dosing

**Population:** female cynomolgus monkeys · n = 3.

**Dosing:** 0.1 mmol Gd/kg bw, iv, single.

**Dosed compound ≠ measured compound:** dosed gadoquatrane, Dy-butrol, Tb-DOTA, measured gadoquatrane.

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
| AUC | AUC | 874 |  |
| CL | CL | 0.114 | L/h/kg |
| Vss | Vss | 0.169 | L/kg |
| α-t1/2 | t1/2α | 3.39 | h |
| β-t1/2 | t1/2β | 61.6 | h |
| γ-t1/2 † | t1/2γ | 25.3 | h |
| t1/2 effective | t1/2z | 1.02 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Gadoquatrane AUC is 874 without a unit, preventing conversion; a second comparison also failed with a ratio of 0.8772.**

AUC has no unit. Without a unit the value cannot be converted, so the model cannot use it. A second numerical comparison failed, with a ratio of 0.8772. Extracted — gadoquatrane: AUC 874, CL 0.114 L/h/kg, Vss 0.169 L/kg, t1/2α 3.39 h, t1/2β 61.6 h, t1/2γ 25.3 h, t1/2z 1.02 h.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC | `Q88` · AUC | 874 |  |  |  |  | exact (1) | T2:row2:col2, T2:row2:col3 |
| CL | `Q22` · CL | 0.114 | L/h/kg | 2.217e-06 | m3/s | L/h | exact (1) | T2:row4:col2, T2:row4:col3 |
| Vss | `Q65` · Vss | 0.169 | L/kg | 0.01183 | m3 | L | exact (1) | T2:row5:col2, T2:row5:col3 |
| α-t1/2 | `Q59` · t1/2α | 3.39 | h | 1.22e+04 | s | h | llm_corrected (0.6) | T2:row6:col2, T2:row6:col3 |
| β-t1/2 | `Q60` · t1/2β | 61.6 | h | 2.218e+05 | s | h | llm_corrected (0.6) | T2:row7:col2, T2:row7:col3 |
| γ-t1/2 † | `Q89` · t1/2γ | 25.3 | h | 9.108e+04 | s | h | llm_corrected (0.6) | T2:row8:col2, T2:row8:col3 |
| t1/2 effective | `Q57` · t1/2z | 1.02 | h | 3672 | s | h | llm_confirmed (0.6) | T2:row9:col2, T2:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q88 ('γ-AUC', value '0.459') — already have one for this compound
- implicit units: 'AUC' — the LLM proposed 'µmol·h/L', whose dimension does not fit Q88; left unset
- implicit units: 'CL' → L/h/kg (from the paper text: 'The text states: “The total plasma clearance of gadoquatrane was about 0.11 L/h/kg.”')
- implicit units: 'Vss' → L/kg (from the paper text: 'The text states: “The mean volume of distribution at steady state was 0.17 L/kg.”')
- implicit units: 'α-t1/2' → h (from the popPK convention: 'No unit is stated for this individual half-life; half-lives are conventionally reported in hours, consistent with the va')
- implicit units: 'β-t1/2' → h (from the popPK convention: 'No unit is stated for this individual half-life; half-lives are conventionally reported in hours, consistent with the va')
- implicit units: 'γ-t1/2 †' → h (from the popPK convention: 'No unit is stated for this individual half-life; half-lives are conventionally reported in hours, consistent with the va')
- implicit units: 't1/2 effective' → h (from the paper text: 'The text states the effective half-life “was estimated to be 1 hour.”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadoquatrane
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1 | 1.028 | 1.028 | 0.25 | reported t½β |
| C2_base_Q22 | fail | 0.114 | 0.1 | 0.8772 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row4:col2', 'T2:row4:col3'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['T2:row9:col2', 'T2:row9:col3'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['T2:row6:col2', 'T2:row6:col3'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['T2:row7:col2', 'T2:row7:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  |  |  | ['T2:row5:col2', 'T2:row5:col3'] |
| C5_dimension_Q89 | pass | [time] |  |  |  | ['T2:row8:col2', 'T2:row8:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  |  |  | ['T2:row2:col2', 'T2:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.114 |  |  | ['T2:row4:col2', 'T2:row4:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.98 L/h |  |  | ['T2:row4:col2', 'T2:row4:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 11.8 L |  |  | ['T2:row5:col2', 'T2:row5:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadoquatrane%5D%20Gadoquatrane_Guenther2025_reference&body=Drug%3A%20gadoquatrane%0ARecord%3A%20Gadoquatrane_Guenther2025_reference%0APaper%3A%20Guenther_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadoquatrane/Gadoquatrane_Guenther2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:25 UTC</sub>
