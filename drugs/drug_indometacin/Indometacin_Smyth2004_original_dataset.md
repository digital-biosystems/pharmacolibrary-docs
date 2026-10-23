<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;indometacin&quot;,&quot;href&quot;:&quot;drugs/drug_indometacin/&quot;},{&quot;label&quot;:&quot;Smyth_2004 \u00b7 original_dataset&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# indometacin — `Indometacin_Smyth2004_original_dataset`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="indometacin" model-id="Indometacin_Smyth2004_original_dataset" status="needs_review" stale="false" population="preterm infants with symptomatic patent ductus arteriosus" measured-compound="indometacin" parameterization="mechanistic" topology="1C"></div>

## Citation
Smyth JM, Collier PS, Darwish M, Millership JS, Halliday HL, Petersen S et al. Intravenous indometacin in preterm infants with symptomatic patent ductus arteriosus. A population pharmacokinetic study. British journal of clinical pharmacology (2004).
  ·  DOI: [10.1111/j.1365-2125.2004.02139.x](https://doi.org/10.1111/j.1365-2125.2004.02139.x)

## Population and dosing

**Population:** preterm infants with symptomatic patent ductus arteriosus · age group neonate · n = &gt;=35.

**Dosing:** 7, 14 mg, iv, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| q 1 | Q | 0.00711 | L/h |
| q 3 | Q3 | 0.0338 | L/h |
| q 4 | equation variable | 0.0147 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — indometacin: Q 0.00711 L/h, Q3 0.0338 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of q 4: this record has 0.0147, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| q 1 | `Q30` · Q | 0.00711 | L/h | 1.975e-09 | m3/s | L/h | space_fold (0.95) | tab_3:row2:col1, tab_3:row2:col2, tab_3:row2:col4, tab_3:row2:col5 |
| q 3 | `Q308` · Q3 | 0.0338 | L/h | 9.389e-09 | m3/s | L/h | space_fold (0.95) | tab_3:row4:col1, tab_3:row4:col2, tab_3:row4:col4, tab_3:row4:col5 |
| q 4 | `Q900` · equation variable | 0.0147 |  |  |  |  | llm (0.6) | tab_3:row5:col1, tab_3:row5:col2, tab_3:row5:col4, tab_3:row5:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| TVCL | Q22 | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('q 2', value '0.266') — already have one for this compound
- dropped duplicate Q900 ('q 5', value '0.699') — already have one for this compound
- dropped unlinked row (NIL): 'w CL (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_3:row7:col1', 'tab_3:row7:col2', 'tab_3:row7:col4', 'tab_3:row7:col5'])
- dropped unlinked row (NIL): 'w V (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_3:row8:col1', 'tab_3:row8:col2', 'tab_3:row8:col4', 'tab_3:row8:col5'])
- dropped unlinked row (NIL): 'p CL (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_3:row9:col1', 'tab_3:row9:col2', 'tab_3:row9:col4', 'tab_3:row9:col5'])
- dropped PD-category row 's (mg l -1 )' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_3:row10:col1', 'tab_3:row10:col2', 'tab_3:row10:col4', 'tab_3:row10:col5'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['tab_3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V' from footnote/prose loose number None (source ['tab_3:footnote']); the table cell was unparseable — needs review
- implicit units: 'q 1' → L/h (from the popPK convention: 'The parameter is identified as an intercompartmental clearance. In population pharmacokinetics, clearances (including in')
- implicit units: 'q 3' → L/h (from the popPK convention: 'The parameter is identified as an intercompartmental (distribution) clearance. In population pharmacokinetics, clearance')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indometacin
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- bound model equation to Q22 (CL): TVCL = q1 * (WT/1.17)^0.75 * e^(q3 * PNA)
- Q22 (CL) is equation-defined: value moved to equation-variable 'TVCL'; equation kept verbatim
- population split: 'original dataset' subgroup of Smyth_2004 (paper reports 2 populations: 1000 bootstrap samples, original dataset)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 4
- captured model equation TVCL = q1 * (WT/1.17)^0.75 * e^(q3 * PNA)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.875 (7/8 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[q 4]` | 0.0147 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_3:row2:col1', 'tab_3:row2:col2', 'tab_3:row2:col4', 'tab_3:row2:col5'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab_3:row4:col1', 'tab_3:row4:col2', 'tab_3:row4:col4', 'tab_3:row4:col5'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bindometacin%5D%20Indometacin_Smyth2004_original_dataset&body=Drug%3A%20indometacin%0ARecord%3A%20Indometacin_Smyth2004_original_dataset%0APaper%3A%20Smyth_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_indometacin/Indometacin_Smyth2004_original_dataset%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-30 04:29 UTC</sub>
