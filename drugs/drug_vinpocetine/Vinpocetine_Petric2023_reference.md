<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;vinpocetine&quot;,&quot;href&quot;:&quot;drugs/drug_vinpocetine/&quot;},{&quot;label&quot;:&quot;Petric_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinpocetine — `Vinpocetine_Petric2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V1/F and Q/F have no unit.

<div class="pk-model-meta" hidden drug="vinpocetine" model-id="Vinpocetine_Petric2023_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="apovincaminic acid (AVA)" parameterization="apparent" topology="1C"></div>

## Citation
Petric Z, Paixão P, Filipe A, Guimarães Morais J. Clinical Pharmacology of Vinpocetine: Properties Revisited and Introduction of a Population Pharmacokinetic Model for Its Metabolite, Apovincaminic Acid (AVA). Pharmaceutics 15(10) (2023).
  ·  DOI: [10.3390/pharmaceutics15102502](https://doi.org/10.3390/pharmaceutics15102502)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 20 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed vinpocetine, measured apovincaminic acid (AVA).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tlag_pop h | tlag | 0.17 | h |
| Tk0_pop h | D1 | 1.35 | h |
| Cl/F_pop L/h | CLm/F | 56.15 | L/h |
| V1/F_pop L | V1 | 208.34 | L |
| Q/F_pop L | Q | 14.63 | L/h |
| V2/F_pop L | V2 | 76.15 | L |
| ω_V1/F | V1/F | 0.15 | omega |
| ω_Q/F | Q/F | 0.47 | omega |
| corr_V1/F_Cl/F | equation variable | 0.72 |  |
| b | allometric_exponent | 0.14 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.136). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V1/F and Q/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V1/F and Q/F), so that value has no SI equivalent. None of the extracted parameters is vinpocetine's own; they describe apovincaminic acid (AVA). Extracted — apovincaminic acid (AVA): tlag 0.17 h, D1 1.35 h, CLm/F 56.1 L/h, V1 208 L, Q 14.6 L/h, V2 76.2 L, V1/F 0.15 omega, Q/F 0.47 omega, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has apovincaminic acid (AVA), the second reading apovincaminic acid; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tlag_pop h | `Q83` · tlag | 0.17 | h | 612 | s | h | exact (1) | pharmaceutics-15-02502-t001:row3:col1, pharmaceutics-15-02502-t001:row3:col2, pharmaceutics-15-02502-t001:row3:col3 |
| Tk0_pop h | `Q310` · D1 | 1.35 | h | 4860 | s | h | llm (0.6) | pharmaceutics-15-02502-t001:row4:col1, pharmaceutics-15-02502-t001:row4:col2, pharmaceutics-15-02502-t001:row4:col3 |
| Cl/F_pop L/h | `Q351` · CLm/F | 56.15 | L/h | 1.56e-05 | m3/s | L/h | exact (1) | pharmaceutics-15-02502-t001:row7:col1, pharmaceutics-15-02502-t001:row7:col2, pharmaceutics-15-02502-t001:row7:col3 |
| V1/F_pop L | `Q63` · V1 | 208.34 | L | 0.2083 | m3 | L | exact (1) | pharmaceutics-15-02502-t001:row8:col1, pharmaceutics-15-02502-t001:row8:col2, pharmaceutics-15-02502-t001:row8:col3 |
| Q/F_pop L | `Q30` · Q | 14.63 | L/h | 4.064e-06 | m3/s | L/h | exact (1) | pharmaceutics-15-02502-t001:row11:col1, pharmaceutics-15-02502-t001:row11:col2, pharmaceutics-15-02502-t001:row11:col3 |
| V2/F_pop L | `Q64` · V2 | 76.15 | L | 0.07615 | m3 | L | exact (1) | pharmaceutics-15-02502-t001:row12:col1, pharmaceutics-15-02502-t001:row12:col2, pharmaceutics-15-02502-t001:row12:col3 |
| ω_V1/F | `Q290` · V1/F | 0.15 | omega |  |  | omega | llm (0.6) | pharmaceutics-15-02502-t001:row17:col1, pharmaceutics-15-02502-t001:row17:col2, pharmaceutics-15-02502-t001:row17:col3 |
| ω_Q/F | `Q69` · Q/F | 0.47 | omega |  |  | omega | llm (0.6) | pharmaceutics-15-02502-t001:row18:col1, pharmaceutics-15-02502-t001:row18:col2, pharmaceutics-15-02502-t001:row18:col3 |
| corr_V1/F_Cl/F | `Q900` · equation variable | 0.72 |  |  |  |  | llm (0.6) | pharmaceutics-15-02502-t001:row21:col1, pharmaceutics-15-02502-t001:row21:col2, pharmaceutics-15-02502-t001:row21:col3 |
| b | `Q319` · allometric_exponent | 0.14 |  |  |  |  | llm (0.6) | pharmaceutics-15-02502-t001:row23:col1, pharmaceutics-15-02502-t001:row23:col2, pharmaceutics-15-02502-t001:row23:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'stochastic approximation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'β_Tk0_Formulation#2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'β_Tk0_Formulation#3' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'β_V1/F_Formulation#2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'β_V1/F_Formulation#3' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_Tlag' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ω_Tk0' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ω_Cl/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: 'omega' (V1/F)
- unit_dimension_unknown: 'omega' (Q/F)
- routed 'ω_V2/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'Tlag_pop h' → h (from the paper text: "Table 1 caption: 'Tlag_pop—estimated lag time before absorption'; lag times are in hours, and the paper discusses half-l")
- implicit units: 'Tk0_pop h' → h (from the paper text: "Table 1 caption: 'Tk0_pop—estimated zero-order input'; a zero-order input duration is expressed in hours.")
- implicit units: 'Cl/F_pop L/h' → L/h (from the paper text: "Text: 'The average CL/F, with a value of 56.15 L/h'.")
- implicit units: 'V1/F_pop L' → L (from the paper text: "Text: 'The volume of distribution at steady state (V1/F + V2/F) ... around 135 L' consistent with volumes in L.")
- implicit units: 'Q/F_pop L' → L/h (from the popPK convention: 'Table caption defines Q/F as intercompartmental clearance; clearances are conventionally in L/h, consistent with CL/F = ')
- implicit units: 'V2/F_pop L' → L (from the paper text: "Text: 'volume of distribution at steady state (V1/F + V2/F) ... around 135 L' (208.34 + 76.15 ≈ 284 L for formulation #1")
- metabolite apovincaminic acid (ava): Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=apovincaminic acid (AVA)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 15 linked by role
- review gap-fill skipped: this record measures 'apovincaminic acid (AVA)', not vinpocetine — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.136 (3/22 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b]` | 0.14 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f_pop l/h]` |  | 56.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f_pop l/h]` | 56.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[corr_v1/f_cl/f]` | 0.72 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f_pop l]` |  | 14.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f_pop l]` | 14.63 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk0_pop h]` |  | 1.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk0_pop h]` | 1.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag_pop h]` |  | 0.17 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag_pop h]` | 0.17 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f_pop l]` |  | 208.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f_pop l]` | 208.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f_pop l]` |  | 76.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f_pop l]` | 76.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β_v1/f_formulation#2]` |  | -1.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω_cl/f]` |  | 0.21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω_q/f]` | 0.47 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω_v1/f]` | 0.15 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | apovincaminic acid (AVA) | apovincaminic acid | mismatch |

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-15-02502-t001:row11:col1', 'pharmaceutics-15-02502-t001:row11:col2', 'pharmaceutics-15-02502-t001:row11:col3'] |
| C5_dimension_Q310 | pass | [time] |  | ['pharmaceutics-15-02502-t001:row4:col1', 'pharmaceutics-15-02502-t001:row4:col2', 'pharmaceutics-15-02502-t001:row4:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-15-02502-t001:row7:col1', 'pharmaceutics-15-02502-t001:row7:col2', 'pharmaceutics-15-02502-t001:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-15-02502-t001:row8:col1', 'pharmaceutics-15-02502-t001:row8:col2', 'pharmaceutics-15-02502-t001:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-15-02502-t001:row12:col1', 'pharmaceutics-15-02502-t001:row12:col2', 'pharmaceutics-15-02502-t001:row12:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceutics-15-02502-t001:row3:col1', 'pharmaceutics-15-02502-t001:row3:col2', 'pharmaceutics-15-02502-t001:row3:col3'] |
| C5_unit_missing_Q290 | fail | [length] ** 3 | omega | ['pharmaceutics-15-02502-t001:row17:col1', 'pharmaceutics-15-02502-t001:row17:col2', 'pharmaceutics-15-02502-t001:row17:col3'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] | omega | ['pharmaceutics-15-02502-t001:row18:col1', 'pharmaceutics-15-02502-t001:row18:col2', 'pharmaceutics-15-02502-t001:row18:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 208 L | ['pharmaceutics-15-02502-t001:row8:col1', 'pharmaceutics-15-02502-t001:row8:col2', 'pharmaceutics-15-02502-t001:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 76.2 L | ['pharmaceutics-15-02502-t001:row12:col1', 'pharmaceutics-15-02502-t001:row12:col2', 'pharmaceutics-15-02502-t001:row12:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinpocetine%5D%20Vinpocetine_Petric2023_reference&body=Drug%3A%20vinpocetine%0ARecord%3A%20Vinpocetine_Petric2023_reference%0APaper%3A%20Petric_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinpocetine/Vinpocetine_Petric2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:43 UTC</sub>
