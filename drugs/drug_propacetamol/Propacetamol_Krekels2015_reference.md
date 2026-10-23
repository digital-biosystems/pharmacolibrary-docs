<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;propacetamol&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/&quot;},{&quot;label&quot;:&quot;Krekels_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propacetamol_Prins2008_reference&quot;,&quot;label&quot;:&quot;Prins_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Prins2008_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propacetamol — `Propacetamol_Krekels2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Rejected), but the paper was screened again on 2026-10-07 07:20 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Rejected because the propacetamol-to-paracetamol hydrolysis step leaves paracetamol unlinked to the dose, and the intercompartmental clearance Q (1.46 mL/min/kgn) is reported in a unit that could not be converted to SI.

<div class="pk-model-meta" hidden drug="propacetamol" model-id="Propacetamol_Krekels2015_reference" status="rejected" stale="true" population="preterm and term neonates and infants" measured-compound="paracetamol" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Krekels EH, van Ham S, Allegaert K, de Hoon J, Tibboel D, Danhof M et al. Developmental changes rather than repeated administration drive paracetamol glucuronidation in neonates and infants. European journal of clinical pharmacology 71(9):1075–1082 (2015).
  ·  DOI: [10.1007/s00228-015-1887-y](https://doi.org/10.1007/s00228-015-1887-y)

## Population and dosing

**Population:** preterm and term neonates and infants · age group neonate · n = 54.

**Dosing:** 700, 1400, 2100 mg, iv, multiple.

**Dosed compound ≠ measured compound:** dosed propacetamol, measured paracetamol.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| V1 (L/kg) | V | 1.06 | L/kg | 1.05 | 0.0925 (29.5% RSE) |
| CL1 (mL/min/kg) | CLfm | 0.266 | mL/min/kg | 0.273 |  |
| CL2 (mL/min/kgn) | CLfm | 1.46 | mL/min/kg | 1.45 |  |
| CL4 (mL/min/kg) | CL | 0.285 | mL/min/kg | 0.282 |  |
| n | equation variable | 1.40 |  | 1.41 |  |
| mf | fm | 11.3 |  | 11.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the propacetamol-to-paracetamol hydrolysis step leaves paracetamol unlinked to the dose, and the intercompartmental clearance Q (1.46 mL/min/kgn) is reported in a unit that could not be converted to SI.**

The record links propacetamol to paracetamol by hydrolysis with no link parameter, so paracetamol has no quantified clearance path from the propacetamol dose (unlinked metabolite). The intercompartmental clearance Q is reported as 1.46 mL/min/kgn, a unit that could not be converted to SI, so the parameter had no usable numeric value. A second reader also disputes the structure, keeping only the paracetamol-to-glucuronide and paracetamol-to-sulphate metabolism links, and reads different additive error parameters (plasma 0.354 mg/L absent, urine 0.223 present, bioavailability factor 11.3 present). Extracted — propacetamol: V1 1.06 L/kg, CL 0.266 mL/min/kg, Q 1.46 mL/min/kgn, n_transit 1.4.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has propacetamol, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 (L/kg) | `Q61` · V | 1.06 | L/kg | 0.0742 | m3 | l/kg | 1.05 | exact (1) | Tab1:row2:col1, Tab1:row2:col2 | 0.0925 (29.5% RSE) |
| CL1 (mL/min/kg) | `Q370` · CLfm | 0.266 | mL/min/kg | 3.103e-07 | m3/s | ml/(min·kg) | 0.273 | exact (1) | Tab1:row4:col1, Tab1:row4:col2 |  |
| CL2 (mL/min/kgn) | `Q370` · CLfm | 1.46 | mL/min/kg | 1.703e-06 | m3/s | L/h | 1.45 | exact (1) | Tab1:row5:col1, Tab1:row5:col2 |  |
| CL4 (mL/min/kg) | `Q22` · CL | 0.285 | mL/min/kg | 3.325e-07 | m3/s | ml/(min·kg) | 0.282 | exact (1) | Tab1:row6:col1, Tab1:row6:col2 |  |
| n | `Q900` · equation variable | 1.40 |  |  |  |  | 1.41 | llm (0.6) | Tab1:row7:col1, Tab1:row7:col2 |  |
| mf | `Q45` · fm | 11.3 |  |  |  |  | 11.3 | llm (0.6) | Tab1:row8:col1, Tab1:row8:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'V1' routed out of structural estimates ('Inter-individual variability (variance)')
- table section iiv: 'CL1' routed out of structural estimates ('Inter-individual variability (variance)')
- table section iiv: 'CL2' routed out of structural estimates ('Inter-individual variability (variance)')
- table section iiv: 'CL4' routed out of structural estimates ('Inter-individual variability (variance)')
- table section residual_error: 'P plasma, additive (mg/L)' routed out of structural estimates ('Residual variability (variance)')
- table section residual_error: 'P plasma, proportional' routed out of structural estimates ('Residual variability (variance)')
- table section residual_error: 'PG urine, additive (mg)' routed out of structural estimates ('Residual variability (variance)')
- table section residual_error: 'P urine , additive (mg)' routed out of structural estimates ('Residual variability (variance)')
- table section residual_error: 'PS urine, additive (mg)' routed out of structural estimates ('Residual variability (variance)')
- column 'model fit (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_unknown: 'mL/min/kgn' (CLfm)
- implicit units: 'CL2 (mL/min/kgn)' → mL/min/kg (from the paper text: "The parameter description in the table row is 'CL2 (mL/min/kgn)'. The parameter 'n' is listed separately in the table wi")
- metabolite volume: 'V1 (L/kg)' Q63→Q61 for paracetamol — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paracetamol
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 8 linked by role; re-tagged parent→paracetamol ×14, parent→paracetamol-glucuronide ×6, parent→paracetamol-sulphate ×8
- molar mass: none of 1 PubChem candidate(s) is 'paracetamol-glucuronide' (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'paracetamol-sulphate' (LLM) — left in mass units
- molar mass: none found for 'paracetamol-glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'paracetamol-sulphate' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'paracetamol', not propacetamol — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (3/15 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['propacetamol', 'paracetamol', 'hydrolysis'], ['paracetamol', 'paracetamol-glucuronide', 'metabolism'], ['paracetamol', 'paracetamol-sulphate', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl1]` |  | 0.266 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl1]` | 0.266 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` |  | 1.46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | 1.46 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl4]` | 0.285 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[n]` |  | 1.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[n]` | 1.40 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 1.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 1.06 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | propacetamol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | paracetamol | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab1:row6:col1', 'Tab1:row6:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Tab1:row4:col1', 'Tab1:row4:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Tab1:row5:col1', 'Tab1:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab1:row2:col1', 'Tab1:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.285 | ['Tab1:row6:col1', 'Tab1:row6:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.2 L/h | ['Tab1:row6:col1', 'Tab1:row6:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 74.2 L | ['Tab1:row2:col1', 'Tab1:row2:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropacetamol%5D%20Propacetamol_Krekels2015_reference&body=Drug%3A%20propacetamol%0ARecord%3A%20Propacetamol_Krekels2015_reference%0APaper%3A%20Krekels_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propacetamol/Propacetamol_Krekels2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:20 UTC</sub>
