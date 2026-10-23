<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;secukinumab&quot;,&quot;href&quot;:&quot;drugs/drug_secukinumab/&quot;},{&quot;label&quot;:&quot;Bruin_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Secukinumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# secukinumab — `Secukinumab_Bruin2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Secukinumab's central volume of distribution and absorption lag time lacked explicit values, causing the model to be quarantined.

<div class="pk-model-meta" hidden drug="secukinumab" model-id="Secukinumab_Bruin2017_reference" status="model_quarantined" stale="false" population="patients with moderate to severe psoriasis" measured-compound="secukinumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Bruin G, Loesche C, Nyirady J, Sander O. Population Pharmacokinetic Modeling of Secukinumab in Patients With Moderate to Severe Psoriasis. Journal of clinical pharmacology 57(7):876–885 (2017).
  ·  DOI: [10.1002/jcph.876](https://doi.org/10.1002/jcph.876)

## Population and dosing

**Population:** patients with moderate to severe psoriasis · condition psoriasis · age group adult.

**Dosing:** 150, 300 mg, subcutaneous, multiple, every 240 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL, L/day | CL | 0.19 | L/day | 1.9 | 32 (None% RSE) |
| V2, L | V2 | 3.61 | L | 2.6 | 30 (None% RSE) |
| Q, L/day | Q | 0.39 | L/day | 4.6 |  |
| V3, L | V3 | 2.87 | L | 1.9 | 18 (None% RSE) |
| ka, 1/day | kabs | 0.18 | 1/day | 3.6 | 35 (None% RSE) |
| F, % | Frel | 72.9 |  | 1.5 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Secukinumab's central volume of distribution and absorption lag time lacked explicit values, causing the model to be quarantined.**

The record lists peripheral volumes, clearance, and absorption rate, but omits the central volume of distribution and absorption lag time. Because these parameters had no extracted estimates, generic placeholder values were used instead of fitted data. This use of unverified defaults rather than explicit pharmacokinetic estimates led to the record being held back. Extracted — secukinumab: CL 0.19 L/day, V2 3.61 L, Q 0.39 L/day, V3 2.87 L, kabs 0.18 1/day, Frel 72.9.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/day | `Q22` · CL | 0.19 | L/day | 2.199e-09 | m3/s | l/d | 1.9 | exact (1) | jcph876-tbl-0002:row1:col1, jcph876-tbl-0002:row1:col2 | 32 (None% RSE) |
| V2, L | `Q64` · V2 | 3.61 | L | 0.00361 | m3 | l | 2.6 | exact (1) | jcph876-tbl-0002:row2:col1, jcph876-tbl-0002:row2:col2 | 30 (None% RSE) |
| Q, L/day | `Q30` · Q | 0.39 | L/day | 4.514e-09 | m3/s | l/d | 4.6 | exact (1) | jcph876-tbl-0002:row3:col1, jcph876-tbl-0002:row3:col2 |  |
| V3, L | `Q77` · V3 | 2.87 | L | 0.00287 | m3 | l | 1.9 | exact (1) | jcph876-tbl-0002:row4:col1, jcph876-tbl-0002:row4:col2 | 18 (None% RSE) |
| ka, 1/day | `Q49` · kabs | 0.18 | 1/day | 2.083e-06 | 1/s | 1/d | 3.6 | exact (1) | jcph876-tbl-0002:row5:col1, jcph876-tbl-0002:row5:col2 | 35 (None% RSE) |
| F, % | `Q87` · Frel | 72.9 |  |  |  |  | 1.5 | llm (0.6) | jcph876-tbl-0002:row6:col1, jcph876-tbl-0002:row6:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL, L/day' routed out of structural estimates ('Interindividual Variability, %CV')
- table section iiv: 'V2, L' routed out of structural estimates ('Interindividual Variability, %CV')
- table section iiv: 'V3, L' routed out of structural estimates ('Interindividual Variability, %CV')
- table section iiv: 'ka, 1/day' routed out of structural estimates ('Interindividual Variability, %CV')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=secukinumab
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- molar mass: none found for 'secukinumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (17/17 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph876-tbl-0002:row1:col1', 'jcph876-tbl-0002:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph876-tbl-0002:row3:col1', 'jcph876-tbl-0002:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph876-tbl-0002:row5:col1', 'jcph876-tbl-0002:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph876-tbl-0002:row2:col1', 'jcph876-tbl-0002:row2:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['jcph876-tbl-0002:row4:col1', 'jcph876-tbl-0002:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.19 | ['jcph876-tbl-0002:row1:col1', 'jcph876-tbl-0002:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00792 L/h | ['jcph876-tbl-0002:row1:col1', 'jcph876-tbl-0002:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.61 L | ['jcph876-tbl-0002:row2:col1', 'jcph876-tbl-0002:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 55.2 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 27.6 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 6 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsecukinumab%5D%20Secukinumab_Bruin2017_reference&body=Drug%3A%20secukinumab%0ARecord%3A%20Secukinumab_Bruin2017_reference%0APaper%3A%20Bruin_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_secukinumab/Secukinumab_Bruin2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:30 UTC</sub>
