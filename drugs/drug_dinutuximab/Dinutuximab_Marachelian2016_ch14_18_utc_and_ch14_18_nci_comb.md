<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dinutuximab&quot;,&quot;href&quot;:&quot;drugs/drug_dinutuximab/&quot;},{&quot;label&quot;:&quot;Marachelian_2016 \u00b7 ch14_18_utc_and_ch14_18_nci_combined&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dinutuximab — `Dinutuximab_Marachelian2016_ch14_18_utc_and_ch14_18_nci_comb`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kel, k12 and k21 have no unit.

<div class="pk-model-meta" hidden drug="dinutuximab" model-id="Dinutuximab_Marachelian2016_ch14_18_utc_and_ch14_18_nci_comb" status="needs_review" stale="false" population="pediatric patients with high-risk neuroblastoma" measured-compound="ch14.18" parameterization="mechanistic" topology="2C"></div>

## Citation
Marachelian A, Desai A, Balis F, Katzenstein H, Qayed M, Armstrong M et al. Comparative pharmacokinetics, safety, and tolerability of two sources of ch14.18 in pediatric patients with high-risk neuroblastoma following myeloablative therapy. Cancer chemotherapy and pharmacology 77(2):405–412 (2016).
  ·  DOI: [10.1007/s00280-015-2955-9](https://doi.org/10.1007/s00280-015-2955-9)

## Population and dosing

**Population:** pediatric patients with high-risk neuroblastoma · condition neuroblastoma · age group child · n = 28.

**Dosing:** 17.5, 25 mg/m2, iv, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed ch14.18-UTC / ch14.18-NCI, measured ch14.18.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/d) | CL | 0.709 | L/d |
| Q (L/d) | Q | 0.857 | L/d |
| V1 (L) | V1 | 1.40 | L |
| V2 (L) | V2 | 3.85 | L |
| V ss (L) | Vss | 5.25 | L |
| Kel (1/d) | kel | 0.520 | n = 27 |
| Kcp (1/d) | k12 | 0.630 | n = 27 |
| Kpc (1/d) | k21 | 0.228 | n = 27 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel, k12 and k21 have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kel, k12 and k21), so that value has no SI equivalent. None of the extracted parameters is dinutuximab's own; they describe ch14.18-UTC / ch14.18-NCI (dinutuximab). Extracted — ch14.18-UTC / ch14.18-NCI (dinutuximab): CL 0.709 L/d, Q 0.857 L/d, V1 1.4 L, V2 3.85 L, Vss 5.25 L, kel 0.52 n = 27, k12 0.63 n = 27, k21 0.228 n = 27.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ch14.18-UTC / ch14.18-NCI, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/d) | `Q22` · CL | 0.709 | L/d | 8.206e-09 | m3/s | l/d | exact (1) | Tab4:row1:col3 |
| Q (L/d) | `Q30` · Q | 0.857 | L/d | 9.919e-09 | m3/s | l/d | exact (1) | Tab4:row3:col3 |
| V1 (L) | `Q63` · V1 | 1.40 | L | 0.0014 | m3 | l | exact (1) | Tab4:row5:col3 |
| V2 (L) | `Q64` · V2 | 3.85 | L | 0.00385 | m3 | l | exact (1) | Tab4:row7:col3 |
| V ss (L) | `Q65` · Vss | 5.25 | L | 0.00525 | m3 | l | space_fold (0.95) | Tab4:row9:col3 |
| Kel (1/d) | `Q47` · kel | 0.520 | n = 27 |  |  | n=27 | exact (1) | Tab4:row11:col3 |
| Kcp (1/d) | `Q301` · k12 | 0.630 | n = 27 |  |  | n=27 | exact (1) | Tab4:row12:col3 |
| Kpc (1/d) | `Q302` · k21 | 0.228 | n = 27 |  |  | n=27 | exact (1) | Tab4:row13:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter, mean (SD)' — extend the ontology if this is a real PK parameter (source ['Tab4:row0:col3'])
- unit_dimension_unknown: 'L/d/m2' (CL)
- dropped duplicate Q22 ('CL (L/d/m2)', value '1.12') — already have one for this compound
- unit_dimension_unknown: 'L/d/m2' (Q)
- dropped duplicate Q30 ('Q (L/d/m2)', value '1.32') — already have one for this compound
- unit_dimension_unknown: 'L/m2' (V1)
- dropped duplicate Q63 ('V1 (L/m2)', value '2.15') — already have one for this compound
- unit_dimension_unknown: 'L/m2' (V2)
- dropped duplicate Q64 ('V2 (L/m2)', value '5.87') — already have one for this compound
- unit_dimension_unknown: 'L/m2' (Vss)
- dropped duplicate Q65 ('V ss (L/m2)', value '8.03') — already have one for this compound
- unit_dimension_unknown: 'n = 27' (kel)
- unit_dimension_unknown: 'n = 27' (k12)
- unit_dimension_unknown: 'n = 27' (k21)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ch14.18
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'ch14.18-utc and ch14.18-nci combined(n = 27)' subgroup of Marachelian_2016 (paper reports 3 populations: ch14.18-nci(n = 25), ch14.18-utc and ch14.18-nci combined(n = 27), ch14.18-utc(n = 26))
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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab4:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab4:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab4:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab4:row7:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Tab4:row9:col3'] |
| C5_unit_missing_Q301 | fail | 1 / [time] | n = 27 | ['Tab4:row12:col3'] |
| C5_unit_missing_Q302 | fail | 1 / [time] | n = 27 | ['Tab4:row13:col3'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | n = 27 | ['Tab4:row11:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.709 | ['Tab4:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0295 L/h | ['Tab4:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.4 L | ['Tab4:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.85 L | ['Tab4:row7:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 5.25 L | ['Tab4:row9:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdinutuximab%5D%20Dinutuximab_Marachelian2016_ch14_18_utc_and_ch14_18_nci_comb&body=Drug%3A%20dinutuximab%0ARecord%3A%20Dinutuximab_Marachelian2016_ch14_18_utc_and_ch14_18_nci_comb%0APaper%3A%20Marachelian_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dinutuximab/Dinutuximab_Marachelian2016_ch14_18_utc_and_ch14_18_nci_comb%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 13:31 UTC</sub>
