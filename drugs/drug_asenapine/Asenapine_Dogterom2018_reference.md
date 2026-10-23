<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;asenapine&quot;,&quot;href&quot;:&quot;drugs/drug_asenapine/&quot;},{&quot;label&quot;:&quot;Dogterom_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# asenapine — `Asenapine_Dogterom2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The asenapine pediatric three-compartment model was quarantined because its volume of distribution (Vd) and absorption lag time (Tlag) had no extracted values and were left at library placeholder defaults.

<div class="pk-model-meta" hidden drug="asenapine" model-id="Asenapine_Dogterom2018_reference" status="model_quarantined" stale="false" population="pediatric patients with schizophrenia or bipolar I disorder" measured-compound="asenapine" parameterization="apparent" topology="1C"></div>

## Citation
Dogterom P, Riesenberg R, de Greef R, Dennie J, Johnson M, Pilla Reddy V et al. Asenapine pharmacokinetics and tolerability in a pediatric population. Drug design, development and therapy 12:2677–2693 (2018).
  ·  DOI: [10.2147/DDDT.S171475](https://doi.org/10.2147/DDDT.S171475)

## Population and dosing

**Population:** pediatric patients with schizophrenia or bipolar I disorder · condition schizophrenia or bipolar I disorder · age group adolescent · n = 561.

**Dosing:** 1, 2.5, 5, 10 mg, sublingual, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cl/F (L/h) | CL/F | 296 | L/h |
| V2/F (L)b | V2/F | 2740 | L |
| Q/F (L/h) | Q/F | 120 | L/h |
| V3/F (L)b | V3/F | 2490 | L |
| KA (hours)b | kabs | 2.98 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The asenapine pediatric three-compartment model was quarantined because its volume of distribution (Vd) and absorption lag time (Tlag) had no extracted values and were left at library placeholder defaults.**

Although the record reports fitted apparent parameters for asenapine (CL/F 296 L/h, Q/F 120 L/h, kabs 2.98 1/h, and volumes of 2740 L and 2490 L), the volume of distribution and absorption lag time were never given values, so library placeholders would have stood in for them. The model builder also assumed apparent parameterization with F=1, Fm=1 and no molar correction. The deviations check failed on these defaulted parameters, and the model was held back rather than published with invented numbers. Extracted — asenapine: CL/F 296 L/h, V2/F 2.74e+03 L, Q/F 120 L/h, V3/F 2.49e+03 L, kabs 2.98 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].value`: this record has 296, the second reading 3.09; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl/F (L/h) | `Q27` · CL/F | 296 | L/h | 8.222e-05 | m3/s | l/h | exact (1) | t3-dddt-12-2677:row2:col1, t3-dddt-12-2677:row2:col2 |
| V2/F (L)b | `Q82` · V2/F | 2740 | L | 2.74 | m3 | L | llm_confirmed (0.6) | t3-dddt-12-2677:row3:col1 |
| Q/F (L/h) | `Q69` · Q/F | 120 | L/h | 3.333e-05 | m3/s | l/h | exact (1) | t3-dddt-12-2677:row4:col1, t3-dddt-12-2677:row4:col2 |
| V3/F (L)b | `Q78` · V3/F | 2490 | L | 2.49 | m3 | L | llm_confirmed (0.6) | t3-dddt-12-2677:row5:col1 |
| KA (hours)b | `Q49` · kabs | 2.98 | 1/h | 0.0008278 | 1/s | 1/h | space_fold (0.95) | t3-dddt-12-2677:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV (Cl/F)' routed out of structural estimates ('Interindividual variability, %CV')
- table section iiv: 'Correlation (Cl/F–V2/F)' routed out of structural estimates ('Interindividual variability, %CV')
- table section iiv: 'IIV (V2/F)' routed out of structural estimates ('Interindividual variability, %CV')
- table section iiv: 'IIV (KA)' routed out of structural estimates ('Interindividual variability, %CV')
- table section iiv: 'IIV (F)' routed out of structural estimates ('Interindividual variability, %CV')
- table section iiv: 'IIV (RV)' routed out of structural estimates ('Interindividual variability, %CV')
- table section residual_error: 'PK studies' routed out of structural estimates ('Residual variability, %')
- table section residual_error: 'Efficacy studies' routed out of structural estimates ('Residual variability, %')
- implicit units: 'V2/F (L)b' → L (from the paper text: "Table already shows 'V2/F (L)' in the parameter label; volume of distribution in L.")
- implicit units: 'V3/F (L)b' → L (from the paper text: "Table already shows 'V3/F (L)' in the parameter label; volume of distribution in L.")
- implicit units: 'KA (hours)b' → 1/h (from the popPK convention: "KA is a first-order absorption rate constant; table label says 'hours' but rate constants are conventionally in 1/h, con")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=asenapine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count

**Extraction notes:**
- unparsed cell t3-dddt-12-2677:row2:col4 = '296 (283–312)'
- unparsed cell t3-dddt-12-2677:row4:col4 = '120 (91.8–173)'
- unparsed cell t3-dddt-12-2677:row8:col4 = '66.4 (50.2–78.1)'
- unparsed cell t3-dddt-12-2677:row9:col4 = '0.918 (0.881–0.931)'
- unparsed cell t3-dddt-12-2677:row10:col4 = '113 (87.8–137)'
- unparsed cell t3-dddt-12-2677:row12:col4 = '53.1 (42.0–66.8)'
- unparsed cell t3-dddt-12-2677:row13:col4 = '18.5 (13.4–23.4)'
- unparsed cell t3-dddt-12-2677:row15:col4 = '27.9 (25.6–30.3)'
- unparsed cell t3-dddt-12-2677:row16:col4 = '56.0 (51.5–60.9)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].value` | 296 | 3.09 | mismatch |
| `gpt-oss-120b` | `parameters[q/f].value` | 120 | 14.3 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['t3-dddt-12-2677:row2:col1', 't3-dddt-12-2677:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['t3-dddt-12-2677:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['t3-dddt-12-2677:row4:col1', 't3-dddt-12-2677:row4:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['t3-dddt-12-2677:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['t3-dddt-12-2677:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 296 L/h | ['t3-dddt-12-2677:row2:col1', 't3-dddt-12-2677:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.74e+03 L | ['t3-dddt-12-2677:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 45 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 18 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 11 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 16 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 32 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Basenapine%5D%20Asenapine_Dogterom2018_reference&body=Drug%3A%20asenapine%0ARecord%3A%20Asenapine_Dogterom2018_reference%0APaper%3A%20Dogterom_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_asenapine/Asenapine_Dogterom2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:11 UTC</sub>
