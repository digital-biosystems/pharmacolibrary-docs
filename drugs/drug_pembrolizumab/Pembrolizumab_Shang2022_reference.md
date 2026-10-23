<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pembrolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_pembrolizumab/&quot;},{&quot;label&quot;:&quot;Shang_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pembrolizumab — `Pembrolizumab_Shang2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The peripheral compartment is structurally disconnected from the central compartment, rendering the model invalid.

<div class="pk-model-meta" hidden drug="pembrolizumab" model-id="Pembrolizumab_Shang2022_reference" status="rejected" stale="false" population="patients with multiple tumor types" measured-compound="pembrolizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Shang J, Huang L, Huang J, Ren X, Liu Y, Feng Y. Population pharmacokinetic models of anti-PD-1 mAbs in patients with multiple tumor types: A systematic review. Frontiers in immunology 13:871372 (2022).
  ·  DOI: [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372)

## Population and dosing

**Population:** patients with multiple tumor types · condition multiple tumor types · age group adult.

**Dosing:** 0.1, 1, 3, 10, 20, 60, 200, 240, 350, 400, 500, 1000 mg/kg, mg, iv, multiple, every 336 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Q (L/Day) | Q | 0.795 | L/Day |
| VP(L) | V2 | 4.06 | L |
| VC | VC | 3.48 | L |
| CL | CL | 0.22 | L/Day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The peripheral compartment is structurally disconnected from the central compartment, rendering the model invalid.**

The record defines a two-compartment structure with an intercompartmental clearance of 0.795 L/Day. However, the review identified the peripheral compartment as unreachable from the dose site. This structural flaw means the peripheral volume of 4.06 L is not linked to the central compartment. Extracted — pembrolizumab: Q 0.795 L/Day, V2 4.06 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pembrolizumab, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Q (L/Day) | `Q30` · Q | 0.795 | L/Day | 9.201e-09 | m3/s | l/d | exact (1) | Shang_2022_table_3:row4:col9, Shang_2022_table_3:row4:col10, Shang_2022_table_3:row4:col11 |
| VP(L) | `Q64` · V2 | 4.06 | L | 0.00406 | m3 | l | exact (1) | Shang_2022_table_3:row6:col9, Shang_2022_table_3:row6:col10, Shang_2022_table_3:row6:col11 |
| VC | `Q900` · VC | 3.48 | L | 0.00348 | m3 |  |  | Shang_2022_table_3:row5:col9, Shang_2022_table_3:row5:col10, Shang_2022_table_3:row5:col11, Shang_2022_table_3:row5:col12 |
| CL | `Q900` · CL | 0.22 | L/Day | 2.546e-09 | m3/s |  |  | Shang_2022_table_3:row3:col9, Shang_2022_table_3:row3:col10, Shang_2022_table_3:row3:col11, Shang_2022_table_3:row3:col12 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL(L/Day) | Q22 | exact |
| VC(L) | Q63 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Pharmacokinetic parameters and covariates relationships' — extend the ontology if this is a real PK parameter (source ['Shang_2022_table_3:row7:col9', 'Shang_2022_table_3:row7:col10', 'Shang_2022_table_3:row7:col11', 'Shang_2022_table_3:row7:col12', 'Shang_2022_table_3:row8:col9', 'Shang_2022_table_3:row8:col10', 'Shang_2022_table_3:row8:col11', 'Shang_2022_table_3:row8:col12'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pembrolizumab
- bound model equation to Q63 (V1): VC = 3.63 * (BBWT/80)^0.597 * (e/0.152)SEX
- bound model equation to Q22 (CL): CL = 0.22 *(BBWT/76.8)^0.578* (ALB/39.6)-0.907 * (BSLD/89.6)^00872* (eGFR/88.47)^0.135* [ (1 – 0.152) if female ]* [ (1+ 0.145) if NSCLC ]* [ (1+0.0739) if baseline ECOG numeric=1 ]* [ (1+0.140) if IPI=prior treatment ]
- Q63 (V1) is equation-defined: value moved to equation-variable 'VC(L)'; equation kept verbatim
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL(L/Day)'; equation kept verbatim
- molar mass: none found for 'pembrolizumab' — its concentrations stay mass-only

**Extraction notes:**
- transposed table Shang_2022_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Shang_2022_table_3:row2:col11 = 'Time-varying CL (4 time-varying covariates: RSLD RLC RALB RLDH)'
- unparsed cell Shang_2022_table_3:row10:col2 = 'Proportional residual error model (21.5%)'
- unparsed cell Shang_2022_table_3:row10:col3 = 'Proportional residual error model (100%)'
- unparsed cell Shang_2022_table_3:row10:col4 = 'Proportional residual error model (31.8%)'
- unparsed cell Shang_2022_table_3:row10:col5 = 'Proportional residual error model (21.9%)'
- unparsed cell Shang_2022_table_3:row10:col6 = 'Proportional residual error model (2.01%)'
- unparsed cell Shang_2022_table_3:row10:col7 = 'Proportional residual error model (22.4%)'
- unparsed cell Shang_2022_table_3:row10:col8 = 'Proportional residual error model (24.5%)'
- unparsed cell Shang_2022_table_3:row10:col9 = 'Log-transformed additive residual error model (27.2%)'
- unparsed cell Shang_2022_table_3:row10:col10 = 'Log-transformed additive residual error model (25.1%)'
- unparsed cell Shang_2022_table_3:row10:col12 = 'Proportional residual error model (17%)'
- companion parameter table 3 transcribed (85 record(s))
- LLM selected parameter table(s) 3
- captured model equation VC = 3.63 * (BBWT/80)^0.597 * (e/0.152)SEX
- captured model equation CL = 0.22 *(BBWT/76.8)^0.578* (ALB/39.6)-0.907 * (BSLD/89.6)^00872* (eGFR/88.47)^0.135* [ (1 – 0.152) if female ]* [ (1+ 0.145) if NSCLC ]* [ (1+0.0739) if baseline ECOG numeric=1 ]* [ (1+0.140) if IPI=prior treatment ]

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` |  | 0.703 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.795 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 6.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 4.06 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 2.78 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pembrolizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pembrolizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Shang_2022_table_3:row3:col9', 'Shang_2022_table_3:row3:col10', 'Shang_2022_table_3:row3:col11', 'Shang_2022_table_3:row3:col12'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Shang_2022_table_3:row4:col9', 'Shang_2022_table_3:row4:col10', 'Shang_2022_table_3:row4:col11'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Shang_2022_table_3:row5:col9', 'Shang_2022_table_3:row5:col10', 'Shang_2022_table_3:row5:col11', 'Shang_2022_table_3:row5:col12'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Shang_2022_table_3:row6:col9', 'Shang_2022_table_3:row6:col10', 'Shang_2022_table_3:row6:col11'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.06 L | ['Shang_2022_table_3:row6:col9', 'Shang_2022_table_3:row6:col10', 'Shang_2022_table_3:row6:col11'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpembrolizumab%5D%20Pembrolizumab_Shang2022_reference&body=Drug%3A%20pembrolizumab%0ARecord%3A%20Pembrolizumab_Shang2022_reference%0APaper%3A%20Shang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pembrolizumab/Pembrolizumab_Shang2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:20 UTC</sub>
