<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;nemonoxacin&quot;,&quot;href&quot;:&quot;drugs/drug_nemonoxacin/&quot;},{&quot;label&quot;:&quot;Chen_2023 \u00b7 bias&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nemonoxacin — `Nemonoxacin_Chen2023_bias`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.235). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

**Nemonoxacin's bioavailability and volume of distribution lacked values, so placeholders were used and the model was quarantined.**

The record indicates that nemonoxacin's bioavailability and total volume of distribution were not estimated or provided in the source. Consequently, standard placeholder values were applied to these parameters rather than using specific estimates. This resulted in the model being held back to avoid publication with undefined physiological values. Extracted — nemonoxacin: CL 0 L/h, V2 0 L, Q 1 L/h, V3 0 L, kabs 6 1/h, tlag -2 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 0, the second reading 1; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Chen Y et al., Integrative population pharmacokinetic/…, Frontiers in pharmacology (2023)
  ·  DOI: [10.3389/fphar.2023.912962](https://doi.org/10.3389/fphar.2023.912962)

<div class="pk-model-meta" hidden drug="nemonoxacin" model-id="Nemonoxacin_Chen2023_bias" status="model_quarantined" stale="false" population="Chinese patients with community-acquired pneumonia and healthy subjects" measured-compound="nemonoxacin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0 | L/h | 0.0 | L/h | not captured | exact (1.0) | T2:row2:col6 | — | not captured |
| V2 | `Q64` · V2 | 0 | L | 0.0 | L | not captured | exact (1.0) | T2:row3:col6 | — | not captured |
| Q | `Q30` · Q | 1 | L/h | 2.7777777777777776e-07 | L/h | not captured | exact (1.0) | T2:row4:col6 | — | 11 (None% RSE) |
| V3 | `Q77` · V3 | 0 | L | 0.0 | L | not captured | exact (1.0) | T2:row5:col6 | — | not captured |
| KA | `Q49` · kabs | 6 | 1/h | 0.0016666666666666666 | 1/h | not captured | exact (1.0) | T2:row6:col6 | — | not captured |
| TLAG | `Q83` · tlag | -2 | h | -7200.0 | h | not captured | exact (1.0) | T2:row7:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bias (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'shrinkage%' (tlag)
- unit_dimension_mismatch: 'CLcr (CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CLcr (CL)', value '1') — already have one for this compound
- unit_dimension_unknown: 'TLAG' (tlag)
- dropped duplicate Q83 ('Food (TLAG)', value '2') — already have one for this compound
- unit_dimension_unknown: 'V2' (V2)
- dropped duplicate Q64 ('SEX (V2)', value '0') — already have one for this compound
- dropped unlinked row (NIL): 'Food (Ka)' — extend the ontology if this is a real PK parameter (source ['T2:row11:col6'])
- unit_dimension_unknown: 'V3' (V3)
- dropped duplicate Q77 ('DisStat (V3)', value '2') — already have one for this compound
- dropped unlinked row (NIL): 'Food(F)' — extend the ontology if this is a real PK parameter (source ['T2:row13:col6'])
- dropped unlinked row (NIL): 'πCL2' — extend the ontology if this is a real PK parameter (source ['T2:row18:col6'])
- implicit units: 'CL' → L/h (from the popPK convention: 'The paper states CL is related to CLcr (mL/min) and body weight (kg) with a power of 0.75. No explicit unit is provided ')
- implicit units: 'V2' → L (from the popPK convention: 'V2 is a volume of distribution parameter. The paper notes it is scaled by body weight (kg) with a power of 1. No explici')
- implicit units: 'Q' → L/h (from the popPK convention: 'Q is an intercompartmental clearance. The paper notes it is scaled by body weight (kg) with a power of 0.75. No explicit')
- implicit units: 'V3' → L (from the popPK convention: 'V3 is a volume of distribution parameter. The paper notes it is scaled by body weight (kg) with a power of 1. No explici')
- implicit units: 'KA' → 1/h (from the popPK convention: "KA is an absorption rate constant. The paper mentions 'first-order process' and 'absorption rate'. No explicit unit is p")
- implicit units: 'TLAG' → h (from the popPK convention: "TLAG is an absorption lag time. The text discusses 'lag in absorption time' increasing by 60%. No explicit unit is provi")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q64 (V2); Q30 (Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nemonoxacin
- population split: 'bias (%)' subgroup of Chen_2023 (paper reports 2 populations: bias (%), estimate based on original dataset)

**Extraction notes:**
- unparsed cell T2:row8:col1 = '1000/60'
- unparsed cell T2:row10:col2 = 'Power exponent of sex on V2'
- unparsed cell T2:row12:col2 = 'Power exponent of disease status on V3'
- unparsed cell T2:row15:col2 = 'Inter-individual variability of V2'
- unparsed cell T2:row16:col2 = 'Inter-individual variability of V3'
- unparsed cell T2:row18:col3 = '0.017 (45 or 20) b'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.235 (4/17 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].rse_percent` | not captured | 0 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 0 | 1 | mismatch |
| `gpt-oss-120b` | `parameters[clcr]` | not captured | 3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | not captured | 6 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 6 | 11 | mismatch |
| `gpt-oss-120b` | `parameters[q].rse_percent` | not captured | 1 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 1 | 2 | mismatch |
| `gpt-oss-120b` | `parameters[tlag].rse_percent` | not captured | -2 | mismatch |
| `gpt-oss-120b` | `parameters[tlag].value` | -2 | 8 | mismatch |
| `gpt-oss-120b` | `parameters[v2].rse_percent` | not captured | 0 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 0 | 1 | mismatch |
| `gpt-oss-120b` | `parameters[v3].rse_percent` | not captured | 0 | mismatch |
| `gpt-oss-120b` | `parameters[v3].value` | 0 | 1 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row4:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row6:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row5:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T2:row7:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0 | not captured | not captured | ['T2:row2:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 0.151 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 7.32 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 4.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 16.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 90 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.125 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.25 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 74 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 83 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 56.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 22.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 73 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 25 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 32 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nemonoxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2023` / `Chen_2023::bias`)
- model: `../../../knowledgebase/drugs/drug_nemonoxacin/models/modelica/_needs_review/Nemonoxacin_Chen2023_bias.mo`
- deviation: `../../../knowledgebase/drugs/drug_nemonoxacin/models/modelica/_needs_review/Nemonoxacin_Chen2023_bias.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:37 UTC</sub>
