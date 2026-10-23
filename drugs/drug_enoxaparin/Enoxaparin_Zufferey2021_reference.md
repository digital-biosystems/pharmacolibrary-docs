<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;enoxaparin&quot;,&quot;href&quot;:&quot;drugs/drug_enoxaparin/&quot;},{&quot;label&quot;:&quot;Zufferey_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enoxaparin_Oualha2018_reference&quot;,&quot;label&quot;:&quot;Oualha_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enoxaparin/Enoxaparin_Oualha2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enoxaparin — `Enoxaparin_Zufferey2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="enoxaparin" model-id="Enoxaparin_Zufferey2021_reference" status="needs_review" stale="false" population="critically ill patients with COVID-19" measured-compound="enoxaparin" parameterization="mechanistic" topology="1C"></div>

## Citation
Zufferey PJ, Dupont A, Lanoiselée J, Bauters A, Poissy J, Goutay J et al. Pharmacokinetics of enoxaparin in COVID-19 critically ill patients. Thrombosis research 205:120–127 (2021).
  ·  DOI: [10.1016/j.thromres.2021.07.010](https://doi.org/10.1016/j.thromres.2021.07.010)

## Population and dosing

**Population:** critically ill patients with COVID-19 · condition COVID-19 · age group adult · n = &gt;=95.

**Dosing:** 0.5, 1, 30, 40, 60 mg, sc, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (h-1) | kabs | 0.48 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — enoxaparin: kabs 0.48 h-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has enoxaparin, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (h-1) | `Q49` · kabs | 0.48 | h-1 | 0.0001333 | 1/s | 1/h | exact (1) | t0010:row1:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Cl | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Cl (L.h-1) = θ1 × (eGFR/87)θ2' routed out of structural estimates ('IIV (r.s.e)')
- table section iiv: 'V (L) = θ3 × (Wt/85)' routed out of structural estimates ('IIV (r.s.e)')
- dropped unlinked row (NIL): 'θ1' — extend the ontology if this is a real PK parameter (source ['t0010:row3:col1'])
- dropped unlinked row (NIL): 'θ2' — extend the ontology if this is a real PK parameter (source ['t0010:row4:col1'])
- dropped unlinked row (NIL): 'θ3' — extend the ontology if this is a real PK parameter (source ['t0010:row6:col1'])
- dropped unlinked row (NIL): 'Enoxaparin 40 mg qd' — extend the ontology if this is a real PK parameter (source ['Zufferey_2021_table_3:row1:col4', 'Zufferey_2021_table_3:row1:col5', 'Zufferey_2021_table_3:row9:col4', 'Zufferey_2021_table_3:row9:col5'])
- dropped unlinked row (NIL): 'Enoxaparin 30 mg bid' — extend the ontology if this is a real PK parameter (source ['Zufferey_2021_table_3:row2:col4', 'Zufferey_2021_table_3:row2:col5'])
- dropped unlinked row (NIL): 'Enoxaparin 60 mg qd' — extend the ontology if this is a real PK parameter (source ['Zufferey_2021_table_3:row3:col4', 'Zufferey_2021_table_3:row3:col5'])
- dropped unlinked row (NIL): 'Enoxaparin 40 mg bid' — extend the ontology if this is a real PK parameter (source ['Zufferey_2021_table_3:row4:col4', 'Zufferey_2021_table_3:row4:col5'])
- dropped unlinked row (NIL): 'Enoxaparin 0.5 mg.kg-1 bid' — extend the ontology if this is a real PK parameter (source ['Zufferey_2021_table_3:row5:col4', 'Zufferey_2021_table_3:row5:col5'])
- dropped unlinked row (NIL): 'Enoxaparin 1 mg.kg-1 bid' — extend the ontology if this is a real PK parameter (source ['Zufferey_2021_table_3:row6:col4'])
- table mostly unlinked (9/10 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=enoxaparin
- bound model equation to Q22 (CL): Cl = θ1 * (eGFR/87)^θ2
- Q22 (CL) is equation-defined: value moved to equation-variable 'Cl'; equation kept verbatim
- status held at route_to_review — not promoted
- molar mass: none found for 'enoxaparin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Zufferey_2021_table_3:row1:col1 = '3.35 [1.76–6.16]'
- unparsed cell Zufferey_2021_table_3:row1:col2 = '0.22 [0.13–0.37]'
- unparsed cell Zufferey_2021_table_3:row1:col3 = '0.06 [&lt;0.05–0.17]'
- unparsed cell Zufferey_2021_table_3:row2:col1 = '4.93 [2.62–8.59]'
- unparsed cell Zufferey_2021_table_3:row2:col2 = '0.25 [0.14–0.42]'
- unparsed cell Zufferey_2021_table_3:row2:col3 = '0.15 [0.05–0.31]'
- unparsed cell Zufferey_2021_table_3:row3:col1 = '4.99 [2.69–9.16]'
- unparsed cell Zufferey_2021_table_3:row3:col2 = '0.33 [0.19–0.56]'
- unparsed cell Zufferey_2021_table_3:row3:col3 = '0.09 [&lt;0.05–0.26]'
- unparsed cell Zufferey_2021_table_3:row4:col1 = '6.54 [3.59–11.90]'
- unparsed cell Zufferey_2021_table_3:row4:col2 = '0.33 [0.19–0.57]'
- unparsed cell Zufferey_2021_table_3:row4:col3 = '0.21 [0.07–0.31]'
- unparsed cell Zufferey_2021_table_3:row5:col1 = '7.17 [3.54–13.18]'
- unparsed cell Zufferey_2021_table_3:row5:col2 = '0.36 [0.20–0.63]'
- unparsed cell Zufferey_2021_table_3:row5:col3 = '0.22 [0.06–0.49]'
- unparsed cell Zufferey_2021_table_3:row6:col1 = '14.60 [7.41–26.76]'
- unparsed cell Zufferey_2021_table_3:row6:col2 = '0.72 [0.41–1.27]'
- unparsed cell Zufferey_2021_table_3:row6:col3 = '0.44 [0.13–0.95]'
- unparsed cell Zufferey_2021_table_3:row9:col1 = '5.15 [3.29–8.54]'
- unparsed cell Zufferey_2021_table_3:row9:col2 = '0.45 [0.31–0.68]'
- unparsed cell Zufferey_2021_table_3:row9:col3 = '0.07 [&lt;0.05–0.17]'
- companion parameter table 3 transcribed (13 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation Cl = θ1 * (eGFR/87)^θ2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.429 (3/7 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | enoxaparin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | enoxaparin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['t0010:row1:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benoxaparin%5D%20Enoxaparin_Zufferey2021_reference&body=Drug%3A%20enoxaparin%0ARecord%3A%20Enoxaparin_Zufferey2021_reference%0APaper%3A%20Zufferey_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_enoxaparin/Enoxaparin_Zufferey2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 15:09 UTC</sub>
