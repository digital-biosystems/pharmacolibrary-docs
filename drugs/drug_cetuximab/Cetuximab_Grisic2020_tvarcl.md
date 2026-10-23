<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cetuximab&quot;,&quot;href&quot;:&quot;drugs/drug_cetuximab/&quot;},{&quot;label&quot;:&quot;Grisic_2020 \u00b7 tvarcl&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cetuximab — `Cetuximab_Grisic2020_tvarcl`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="cetuximab" model-id="Cetuximab_Grisic2020_tvarcl" status="not_modelled" stale="false" population="adults with metastatic colorectal cancer" measured-compound="cetuximab" parameterization="mechanistic" topology="2C"></div>

## Citation
Grisic AM, Khandelwal A, Bertolino M, Huisinga W, Girard P, Kloft C. Semimechanistic Clearance Models of Oncology Biotherapeutics and Impact of Study Design: Cetuximab as a Case Study. CPT: pharmacometrics & systems pharmacology 9(11):628–638 (2020).
  ·  DOI: [10.1002/psp4.12558](https://doi.org/10.1002/psp4.12558)

## Population and dosing

**Population:** adults with metastatic colorectal cancer · condition metastatic colorectal cancer · age group adult · n = 226.

**Dosing:** 250, 300, 350, 400, 450, 500 mg/m2, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| LCL, L/h (RSE%) | CL | 0.0262 | L/h |
| V 1, L (RSE%) | V1 | 3.67 | L |
| Q, L/h (RSE%) | Q | 0.0282 | L/h |
| V 2, L (RSE%) | V2 | 1.65 | L |
| T 50, weeks (RSE%) | equation variable | 7.26 | RSE% |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet.**

A reported unit could not be converted (equation variable), so that value has no SI equivalent.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| LCL, L/h (RSE%) | `Q22` · CL | 0.0262 | L/h | 7.278e-09 | m3/s | L/h | llm (0.6) | psp412558-tbl-0002:row1:col2 |
| V 1, L (RSE%) | `Q63` · V1 | 3.67 | L | 0.00367 | m3 | L | space_fold (0.95) | psp412558-tbl-0002:row2:col2 |
| Q, L/h (RSE%) | `Q30` · Q | 0.0282 | L/h | 7.833e-09 | m3/s | L/h | exact (1) | psp412558-tbl-0002:row3:col2 |
| V 2, L (RSE%) | `Q64` · V2 | 1.65 | L | 0.00165 | m3 | L | space_fold (0.95) | psp412558-tbl-0002:row4:col2 |
| T 50, weeks (RSE%) | `Q900` · equation variable | 7.26 | RSE% |  |  | rse% | llm (0.6) | psp412558-tbl-0002:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'RSE%' (CL)
- unit_dimension_unknown: 'RSE%' (V1)
- unit_dimension_unknown: 'RSE%' (Q)
- unit_dimension_unknown: 'RSE%' (V2)
- dropped PD-category row 'I max, % (RSE%)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412558-tbl-0002:row7:col2'])
- unit_dimension_unknown: 'RSE%' (equation variable)
- dropped unlinked row (NIL): 'AIC (SAEM‐IMP)' — extend the ontology if this is a real PK parameter (source ['psp412558-tbl-0002:row19:col2'])
- implicit units: 'LCL, L/h (RSE%)' → L/h (from the paper text: 'The text reports “baseline linear CL (0.0647 vs. 0.0174 L/h, respectively),” explicitly giving the unit for linear clear')
- implicit units: 'V 1, L (RSE%)' → L (from the popPK convention: 'V1 is the central-compartment volume; compartment volumes in population PK are conventionally reported in L, consistent ')
- implicit units: 'Q, L/h (RSE%)' → L/h (from the popPK convention: 'Table 2 defines Q as the “intercompartmental exchange rate.” Intercompartmental clearance is conventionally reported in ')
- implicit units: 'V 2, L (RSE%)' → L (from the popPK convention: 'V2 is the peripheral-compartment volume; compartment volumes in population PK are conventionally reported in L, consiste')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cetuximab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'tvarcl' subgroup of Grisic_2020 (paper reports 5 populations: lcl, mmcl, mmcl + lcl, mmcl + tvarcl, tvarcl)
- molar mass: none found for 'cetuximab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412558-tbl-0002:row1:col6 = '0.0206 (‐)'
- unparsed cell psp412558-tbl-0002:row2:col6 = '3.82 (‐)'
- unparsed cell psp412558-tbl-0002:row3:col6 = '0.0216 (‐)'
- unparsed cell psp412558-tbl-0002:row4:col6 = '3.31 (‐)'
- unparsed cell psp412558-tbl-0002:row17:col6 = '8.65 (‐)'
- unparsed cell psp412558-tbl-0002:row18:col6 = '22.9 (‐)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412558-tbl-0002:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412558-tbl-0002:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412558-tbl-0002:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412558-tbl-0002:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0262 | ['psp412558-tbl-0002:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0262 L/h | ['psp412558-tbl-0002:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.67 L | ['psp412558-tbl-0002:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.65 L | ['psp412558-tbl-0002:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | note |
|---|---|---|---|---|
| T0_analyte_identity |  | pass |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  | no covariate effects in record |
| T3_param_coverage |  | skipped |  | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 0.00409 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.0139 | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcetuximab%5D%20Cetuximab_Grisic2020_tvarcl&body=Drug%3A%20cetuximab%0ARecord%3A%20Cetuximab_Grisic2020_tvarcl%0APaper%3A%20Grisic_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cetuximab/Cetuximab_Grisic2020_tvarcl%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:25 UTC</sub>
