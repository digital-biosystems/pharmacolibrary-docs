<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Andersen_1986 \u00b7 o&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Andersen1986_o`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Andersen1986_o" status="needs_review" stale="false" population="goats" measured-compound="morphine" parameterization="mechanistic" topology="2C"></div>

## Citation
Andersen HB, Christensen B, Findlay JW, Jansen JA. Pharmacokinetics of intravenous, intrathecal and epidural morphine and fentanyl in the goat. Acta anaesthesiologica Scandinavica 30(5):393–399 (1986).
  ·  DOI: [10.1111/j.1399-6576.1986.tb02437.x](https://doi.org/10.1111/j.1399-6576.1986.tb02437.x)

## Population and dosing

**Population:** goats · condition healthy · age group adult · n = 10.

**Dosing:** 0.05, 0.1, 0.2, 1, 4, 8 mg, iv, intrathecal, epidural, single.

> **Species: goat.** This record comes from an animal study (goat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V₁ (l/kg) | V1 | 0.80 | l/kg |
| V₂ (l/kg) | V2 | 2.07 | l/kg |
| V₃ (l/kg) | V3 | 3.92 | l/kg |
| t₁/₂α (min) | t1/2α | 2.7 | min |
| t₁/₂β (min) | t1/2β | 32.4 | min |
| t₁/₂γ (min) | t1/2γ | 128 | min |
| Cl total (ml/min/kg) | CLnorm | 90.7 | ml/min/kg |
| clearance | CL | 14.6 | L/h/70 kg |
| θ CLD | Q | 0.88 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading morphine → morphine-3-glucuronide (metabolism); it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V₁ (l/kg) | `Q63` · V1 | 0.80 | l/kg | 0.056 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row4:col1 |
| V₂ (l/kg) | `Q64` · V2 | 2.07 | l/kg | 0.1449 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row4:col2 |
| V₃ (l/kg) | `Q77` · V3 | 3.92 | l/kg | 0.2744 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row4:col3 |
| t₁/₂α (min) | `Q59` · t1/2α | 2.7 | min | 162 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row4:col4 |
| t₁/₂β (min) | `Q60` · t1/2β | 32.4 | min | 1944 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row4:col5 |
| t₁/₂γ (min) | `Q89` · t1/2γ | 128 | min | 7680 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row4:col6 |
| Cl total (ml/min/kg) | `Q354` · CLnorm | 90.7 | ml/min/kg | 0.0001058 | m3/s | ml/(min·kg) | llm_corrected (0.6) | Andersen_1986_table_p2_1:row4:col7 |
| clearance | `Q22` · CL | 14.6 | L/h/70 kg | 4.056e-06 | m3/s | L/h | review_gapfill (0.7) | Bardol_2025:review |
| θ CLD | `Q30` · Q | 0.88 | L/h | 2.444e-07 | m3/s | L/h | review_gapfill (0.7) | Elkomy_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'o' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'o' subgroup of Andersen_1986 (paper reports 5 populations: f, j, k, n, o)
- gap-filled Q22 (CL) from Bardol_2025's review values (primary lacked it)
- gap-filled Q30 (Q) from Elkomy_2016's review values (primary lacked it)

**Extraction notes:**
- transposed table Andersen_1986_table_p2_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['morphine', 'morphine-3-glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl total].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl total].value` | 90.7 | 83.7 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2α].value` | 2.7 | 2.10 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2β].value` | 32.4 | 22.36 | mismatch |
| `gpt-oss-120b` | `parameters[v1].value` | 0.80 | 0.77 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 2.07 | 1.61 | mismatch |
| `gpt-oss-120b` | `parameters[v3].value` | 3.92 | 5.26 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bardol_2025:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Elkomy_2016:review'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Andersen_1986_table_p2_1:row4:col7'] |
| C5_dimension_Q59 | pass | [time] |  | ['Andersen_1986_table_p2_1:row4:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['Andersen_1986_table_p2_1:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Andersen_1986_table_p2_1:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Andersen_1986_table_p2_1:row4:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Andersen_1986_table_p2_1:row4:col3'] |
| C5_dimension_Q89 | pass | [time] |  | ['Andersen_1986_table_p2_1:row4:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.6 | ['Bardol_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.6 L/h | ['Bardol_2025:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 56 L | ['Andersen_1986_table_p2_1:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 145 L | ['Andersen_1986_table_p2_1:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Andersen1986_o&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Andersen1986_o%0APaper%3A%20Andersen_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Andersen1986_o%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 10:40 UTC</sub>
