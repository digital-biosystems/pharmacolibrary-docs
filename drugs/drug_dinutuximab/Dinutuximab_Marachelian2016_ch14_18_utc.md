<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dinutuximab&quot;,&quot;href&quot;:&quot;drugs/drug_dinutuximab/&quot;},{&quot;label&quot;:&quot;Marachelian_2016 \u00b7 ch14_18_utc&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dinutuximab — `Dinutuximab_Marachelian2016_ch14_18_utc`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Dinutuximab's clearance, volume, and central-to-peripheral transfer rate lacked extracted values, so library placeholders replaced the fitted parameters.

<div class="pk-model-meta" hidden drug="dinutuximab" model-id="Dinutuximab_Marachelian2016_ch14_18_utc" status="model_quarantined" stale="false" population="pediatric patients with high-risk neuroblastoma" measured-compound="ch14.18" parameterization="mechanistic" topology="2C"></div>

## Citation
Marachelian A, Desai A, Balis F, Katzenstein H, Qayed M, Armstrong M et al. Comparative pharmacokinetics, safety, and tolerability of two sources of ch14.18 in pediatric patients with high-risk neuroblastoma following myeloablative therapy. Cancer chemotherapy and pharmacology 77(2):405–412 (2016).
  ·  DOI: [10.1007/s00280-015-2955-9](https://doi.org/10.1007/s00280-015-2955-9)

## Population and dosing

**Population:** pediatric patients with high-risk neuroblastoma · condition neuroblastoma · age group child · n = 28.

**Dosing:** 17.5, 25 mg/m2, iv, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed ch14.18-UTC / ch14.18-NCI, measured ch14.18.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/d) | CL | 0.683 | L/d |
| Q (L/d) | Q | 0.767 | L/d |
| V1 (L) | V1 | 1.43 | L |
| V2 (L) | V2 | 3.94 | L |
| V ss (L) | Vss | 5.38 | L |
| Kel (1/d) | kel | 0.489 | 1/d |
| Kcp (1/d) | k12 | 0.552 | 1/d |
| Kpc (1/d) | k21 | 0.199 | 1/d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Dinutuximab's clearance, volume, and central-to-peripheral transfer rate lacked extracted values, so library placeholders replaced the fitted parameters.**

The record lists parameters for the ch14.18-UTC and ch14.18-NCI metabolites, not for the parent dinutuximab molecule. Because no explicit estimates were provided for dinutuximab's clearance, volume of distribution, or transfer rate constant, default values were used. A second reader also flagged the dose compound and primary analyte as unknown. Extracted — ch14.18-UTC / ch14.18-NCI (dinutuximab): CL 0.683 L/d, Q 0.767 L/d, V1 1.43 L, V2 3.94 L, Vss 5.38 L, kel 0.489 1/d, k12 0.552 1/d, k21 0.199 1/d.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ch14.18-UTC / ch14.18-NCI, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/d) | `Q22` · CL | 0.683 | L/d | 7.905e-09 | m3/s | l/d | exact (1) | Tab4:row1:col1 |
| Q (L/d) | `Q30` · Q | 0.767 | L/d | 8.877e-09 | m3/s | l/d | exact (1) | Tab4:row3:col1 |
| V1 (L) | `Q63` · V1 | 1.43 | L | 0.00143 | m3 | l | exact (1) | Tab4:row5:col1 |
| V2 (L) | `Q64` · V2 | 3.94 | L | 0.00394 | m3 | l | exact (1) | Tab4:row7:col1 |
| V ss (L) | `Q65` · Vss | 5.38 | L | 0.00538 | m3 | l | space_fold (0.95) | Tab4:row9:col1 |
| Kel (1/d) | `Q47` · kel | 0.489 | 1/d | 5.66e-06 | 1/s | 1/h | exact (1) | Tab4:row11:col1 |
| Kcp (1/d) | `Q301` · k12 | 0.552 | 1/d | 6.389e-06 | 1/s | 1/h | exact (1) | Tab4:row12:col1 |
| Kpc (1/d) | `Q302` · k21 | 0.199 | 1/d | 2.303e-06 | 1/s | 1/h | exact (1) | Tab4:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter, mean (SD)' — extend the ontology if this is a real PK parameter (source ['Tab4:row0:col1'])
- unit_dimension_unknown: 'L/d/m2' (CL)
- dropped duplicate Q22 ('CL (L/d/m2)', value '1.09') — already have one for this compound
- unit_dimension_unknown: 'L/d/m2' (Q)
- dropped duplicate Q30 ('Q (L/d/m2)', value '1.20') — already have one for this compound
- unit_dimension_unknown: 'L/m2' (V1)
- dropped duplicate Q63 ('V1 (L/m2)', value '2.23') — already have one for this compound
- unit_dimension_unknown: 'L/m2' (V2)
- dropped duplicate Q64 ('V2 (L/m2)', value '6.10') — already have one for this compound
- unit_dimension_unknown: 'L/m2' (Vss)
- dropped duplicate Q65 ('V ss (L/m2)', value '8.32') — already have one for this compound
- unit_dimension_unknown: 'n = 26' (kel)
- unit_dimension_unknown: 'n = 26' (k12)
- unit_dimension_unknown: 'n = 26' (k21)
- implicit units: 'Kel (1/d)' → 1/d (from the paper text: "The paper text explicitly lists the estimated parameters including 'first-order elimination rate constant (Kel)' and the")
- implicit units: 'Kcp (1/d)' → 1/d (from the popPK convention: 'The table (Table 4) reports clearance (CL) and distributional clearance (Q) in units of L/d. Since rate constants (Kcp) ')
- implicit units: 'Kpc (1/d)' → 1/d (from the popPK convention: 'The table (Table 4) reports clearance (CL) and distributional clearance (Q) in units of L/d. Since rate constants (Kpc) ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ch14.18
- population split: 'ch14.18-utc(n = 26)' subgroup of Marachelian_2016 (paper reports 3 populations: ch14.18-nci(n = 25), ch14.18-utc and ch14.18-nci combined(n = 27), ch14.18-utc(n = 26))
- molar mass: no plausible PubChem entry for 'ch14.18' ('dinutuximab (Unituxin™; ch14.18), a monoclonal antibody against disialoganglioside') — left in mass units
- molar mass: none found for 'dinutuximab' — its concentrations stay mass-only
- molar mass: none found for 'ch14.18' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'ch14.18', not dinutuximab — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | ch14.18-UTC / ch14.18-NCI | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ch14.18 | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab4:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab4:row3:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Tab4:row12:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Tab4:row13:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab4:row11:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab4:row5:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab4:row7:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Tab4:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.683 | ['Tab4:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0285 L/h | ['Tab4:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.43 L | ['Tab4:row5:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.94 L | ['Tab4:row7:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 5.38 L | ['Tab4:row9:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 7 scholar param(s) emitted or defaulted | 7 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 6.57 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 6.88 |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc/Dinutuximab_Marachelian2016_ch14_18_utc_matlab.zip" download>Dinutuximab_Marachelian2016_ch14_18_utc_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc/Dinutuximab_Marachelian2016_ch14_18_utc_matlab_simbio.zip" download>Dinutuximab_Marachelian2016_ch14_18_utc_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc/Dinutuximab_Marachelian2016_ch14_18_utc_sbml.zip" download>Dinutuximab_Marachelian2016_ch14_18_utc_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc/Dinutuximab_Marachelian2016_ch14_18_utc_cellml.zip" download>Dinutuximab_Marachelian2016_ch14_18_utc_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Marachelian A, Desai A, Balis F, Katzenstein H, Qayed M, Armstrong M et al. Comparative pharmacokinetics, safety, and tolerability of two sources of ch14.18 in pediatric patients with high-risk neuroblastoma following myeloablative therapy. Cancer chemotherapy and pharmacology 77(2):405–412 (2016). [doi:10.1007/s00280-015-2955-9](https://doi.org/10.1007/s00280-015-2955-9)

**This record:** Pharmacolibrary, model `Dinutuximab_Marachelian2016_ch14_18_utc`. <https://pharmacolibrary.github.io/#/drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc>

```bibtex
@misc{pharmacolibrary_DinutuximabMarachelian2016ch1418utc,
  title  = {{Pharmacolibrary model Dinutuximab_Marachelian2016_ch14_18_utc}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc},
  note   = {Parameters from doi:10.1007/s00280-015-2955-9},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdinutuximab%5D%20Dinutuximab_Marachelian2016_ch14_18_utc&body=Drug%3A%20dinutuximab%0ARecord%3A%20Dinutuximab_Marachelian2016_ch14_18_utc%0APaper%3A%20Marachelian_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 13:31 UTC</sub>
