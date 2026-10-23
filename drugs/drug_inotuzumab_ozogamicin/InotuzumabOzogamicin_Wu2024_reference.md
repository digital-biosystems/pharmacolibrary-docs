<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;inotuzumab ozogamicin&quot;,&quot;href&quot;:&quot;drugs/drug_inotuzumab_ozogamicin/&quot;},{&quot;label&quot;:&quot;Wu_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# inotuzumab ozogamicin — `InotuzumabOzogamicin_Wu2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="inotuzumab ozogamicin" model-id="InotuzumabOzogamicin_Wu2024_reference" status="needs_review" stale="false" population="adult B-cell NHL and BCP-ALL patients and pediatric BCP-ALL patients" measured-compound="inotuzumab ozogamicin" parameterization="mechanistic" topology="2C"></div>

## Citation
Wu JH, Pennesi E, Bautista F, Garrett M, Fukuhara K, Brivio E et al. Population Pharmacokinetics of Inotuzumab Ozogamicin in Pediatric Relapsed/Refractory B-Cell Precursor Acute Lymphoblastic Leukemia: Results of Study ITCC-059. Clinical pharmacokinetics 63(7):981–997 (2024).
  ·  DOI: [10.1007/s40262-024-01386-z](https://doi.org/10.1007/s40262-024-01386-z)

## Population and dosing

**Population:** adult B-cell NHL and BCP-ALL patients and pediatric BCP-ALL patients · condition B-cell non-Hodgkin lymphoma or relapsed/refractory B-cell precursor acute lymphoblastic leukemia · age group mixed · n = 818.

**Dosing:** 0.4, 0.5, 0.6, 0.8 mg/m2, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cumulative AUC simulation (median [IQR], *103 ng*h/mL) | AUC | +32.2 | ng*h/mL |
| V1 | V1 | 6.49 | L |
| CL2 | Q | 0.569 | L/h |
| V2 | V2 | 4.74 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — inotuzumab ozogamicin: AUC 32.2 ng*h/mL, V1 6.49 L, Q 0.569 L/h, V2 4.74 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cumulative auc estimation: this record has none, the second reading 0.235; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cumulative AUC simulation (median [IQR], *103 ng*h/mL) | `Q88` · AUC | +32.2 | ng*h/mL |  |  | ng*h/mL | llm_confirmed (0.6) | Wu_2024_table_4:row0:col4, Wu_2024_table_4:row1:col4, Wu_2024_table_4:row2:col4 |
| V1 | `Q63` · V1 | 6.49 | L | 0.00649 | m3 | L | exact (1) | Wu_2024:other_prose |
| CL2 | `Q30` · Q | 0.569 | L/h | 1.581e-07 | m3/s | L/h | special_case (0.95) | Wu_2024:other_prose |
| V2 | `Q64` · V2 | 4.74 | L | 0.00474 | m3 | L | exact (1) | Wu_2024:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'median [IQR], *103 ng*h/mL' (AUC)
- salvaged Q63 ('V1'=6.49) from results prose — parameter table was unreadable
- salvaged Q30 ('CL2'=0.569) from results prose — parameter table was unreadable
- salvaged Q64 ('V2'=4.74) from results prose — parameter table was unreadable
- implicit units: 'Cumulative AUC simulation (median [IQR], *103 ng*h/mL)' → ng*h/mL (from the paper text: 'The paper reports cumulative AUC as “26.1 vs 10.1 ng*h/mL”; the parameter is also labeled “(*103 ng*h/mL),” indicating a')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=inotuzumab ozogamicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'inotuzumab_ozogamicin' — its concentrations stay mass-only
- molar mass: none found for 'inotuzumab ozogamicin' — its concentrations stay mass-only

**Extraction notes:**
- transposed table Wu_2024_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Wu_2024_table_4:row0:col1 = 'End of cycle 1'
- unparsed cell Wu_2024_table_4:row0:col2 = '19.7 [12.1–30.3]'
- unparsed cell Wu_2024_table_4:row0:col3 = '26.6 [17.9–37.0]'
- unparsed cell Wu_2024_table_4:row1:col1 = 'End of cycle 2'
- unparsed cell Wu_2024_table_4:row1:col2 = '79.0 [50.3–114]'
- unparsed cell Wu_2024_table_4:row1:col3 = '107 [78.8–139]'
- unparsed cell Wu_2024_table_4:row2:col1 = 'End of cycle 3'
- unparsed cell Wu_2024_table_4:row2:col2 = '155 [108–216]'
- unparsed cell Wu_2024_table_4:row2:col3 = '205 [154–262]'
- companion parameter table 4 transcribed (3 record(s), model stage 'final')
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cumulative auc estimation]` |  | 0.235 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cumulative auc simulation]` | +32.2 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Wu_2024_table_4:row0:col4', 'Wu_2024_table_4:row1:col4', 'Wu_2024_table_4:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.49 L | ['Wu_2024:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.74 L | ['Wu_2024:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binotuzumab_ozogamicin%5D%20InotuzumabOzogamicin_Wu2024_reference&body=Drug%3A%20inotuzumab_ozogamicin%0ARecord%3A%20InotuzumabOzogamicin_Wu2024_reference%0APaper%3A%20Wu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Wu2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:44 UTC</sub>
