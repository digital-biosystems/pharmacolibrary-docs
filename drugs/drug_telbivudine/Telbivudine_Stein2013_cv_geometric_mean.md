<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;telbivudine&quot;,&quot;href&quot;:&quot;drugs/drug_telbivudine/&quot;},{&quot;label&quot;:&quot;Stein_2013 \u00b7 cv_geometric_mean&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# telbivudine — `Telbivudine_Stein2013_cv_geometric_mean`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="telbivudine" model-id="Telbivudine_Stein2013_cv_geometric_mean" status="needs_review" stale="false" population="children and adolescents with chronic hepatitis B" measured-compound="telbivudine" parameterization="apparent" topology="1C"></div>

## Citation
Stein DS, Ke J, Uy G, Bosheva M, Qi Y, Praestgaard J. Phase I, open-label, single-dose study to evaluate the pharmacokinetics and safety of telbivudine in children and adolescents with chronic hepatitis B. Antimicrobial agents and chemotherapy 57(9):4128–4133 (2013).
  ·  DOI: [10.1128/AAC.00117-13](https://doi.org/10.1128/AAC.00117-13)

## Population and dosing

**Population:** children and adolescents with chronic hepatitis B · condition chronic hepatitis B · age group mixed.

**Dosing:** 1050, 1750, 42000 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/ml) | Cmax | 34.1 | ng/ml |
| AUC0–24 (ng · h/ml) | AUCt | 28.4 | ng · h/ml |
| AUC0–inf (ng · h/ml) | AUC∞ | 28.8 | ng · h/ml |
| t1/2 (h)b | t1/2z | 18.2 | h |
| CL/F (ml/h) | CL/F | 28.8 | ml/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — telbivudine: Cmax 34.1 ng/ml, AUCt 28.4 ng · h/ml, AUC∞ 28.8 ng · h/ml, t1/2z 18.2 h, CL/F 28.8 ml/h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/ml) | `Q32` · Cmax | 34.1 | ng/ml | 3.41e-05 | kg/m3 | ng/ml | exact (1) | Stein_2013_table_2:row5:col2, Stein_2013_table_2:row13:col2, Stein_2013_table_2:row21:col2, Stein_2013_table_2:row29:col2 |
| AUC0–24 (ng · h/ml) | `Q19` · AUCt | 28.4 | ng · h/ml | 0.1022 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Stein_2013_table_2:row5:col3, Stein_2013_table_2:row13:col3, Stein_2013_table_2:row21:col3, Stein_2013_table_2:row29:col3 |
| AUC0–inf (ng · h/ml) | `Q17` · AUC∞ | 28.8 | ng · h/ml | 0.1037 | kg*s/m3 | (h·ng)/ml | exact (1) | Stein_2013_table_2:row5:col4, Stein_2013_table_2:row13:col4, Stein_2013_table_2:row21:col4, Stein_2013_table_2:row29:col4 |
| t1/2 (h)b | `Q57` · t1/2z | 18.2 | h | 6.552e+04 | s | h | llm_confirmed (0.6) | Stein_2013_table_2:row5:col5, Stein_2013_table_2:row13:col5, Stein_2013_table_2:row21:col5, Stein_2013_table_2:row29:col5 |
| CL/F (ml/h) | `Q27` · CL/F | 28.8 | ml/h | 8e-09 | m3/s | ml/h | exact (1) | Stein_2013_table_2:row5:col6, Stein_2013_table_2:row13:col6, Stein_2013_table_2:row21:col6, Stein_2013_table_2:row29:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=telbivudine
- population split: 'cv (%), geometric mean' subgroup of Stein_2013 (paper reports 3 populations: 2-&gt;6 yrs, 25 mg/kg; n = 1, cv (%), geometric mean, cv (%), mean)

**Extraction notes:**
- table Stein_2013_table_2: ambiguous_numeric_format
- table Stein_2013_table_2: unparsed_numeric_cell
- transposed table Stein_2013_table_2: logical view retains original source coordinates
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Stein_2013_table_2:row5:col4', 'Stein_2013_table_2:row13:col4', 'Stein_2013_table_2:row21:col4', 'Stein_2013_table_2:row29:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Stein_2013_table_2:row5:col3', 'Stein_2013_table_2:row13:col3', 'Stein_2013_table_2:row21:col3', 'Stein_2013_table_2:row29:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Stein_2013_table_2:row5:col6', 'Stein_2013_table_2:row13:col6', 'Stein_2013_table_2:row21:col6', 'Stein_2013_table_2:row29:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Stein_2013_table_2:row5:col2', 'Stein_2013_table_2:row13:col2', 'Stein_2013_table_2:row21:col2', 'Stein_2013_table_2:row29:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Stein_2013_table_2:row5:col5', 'Stein_2013_table_2:row13:col5', 'Stein_2013_table_2:row21:col5', 'Stein_2013_table_2:row29:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0288 L/h | ['Stein_2013_table_2:row5:col6', 'Stein_2013_table_2:row13:col6', 'Stein_2013_table_2:row21:col6', 'Stein_2013_table_2:row29:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelbivudine%5D%20Telbivudine_Stein2013_cv_geometric_mean&body=Drug%3A%20telbivudine%0ARecord%3A%20Telbivudine_Stein2013_cv_geometric_mean%0APaper%3A%20Stein_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telbivudine/Telbivudine_Stein2013_cv_geometric_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:01 UTC</sub>
