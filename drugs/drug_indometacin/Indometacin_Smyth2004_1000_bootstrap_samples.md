<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;indometacin&quot;,&quot;href&quot;:&quot;drugs/drug_indometacin/&quot;},{&quot;label&quot;:&quot;Smyth_2004 \u00b7 1000_bootstrap_samples&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# indometacin — `Indometacin_Smyth2004_1000_bootstrap_samples`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625), gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — indometacin: Q 19 L/h, Q3 23.8 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[q 1].value`: this record has 19.0, the second reading 0.00711; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Smyth JM; Collier PS; Darwish M; Millership JS; Halliday HL; Petersen S; et al. et al. (2004). British journal of clinical pharmacology 58
  ·  DOI: [10.1111/j.1365-2125.2004.02139.x](https://doi.org/10.1111/j.1365-2125.2004.02139.x)

## Model component
<dbs-pgx drug="indometacin" model-id="Indometacin_Smyth2004_1000_bootstrap_samples" status="needs_review" stale="false" population="preterm infants with symptomatic patent ductus arteriosus" measured-compound="indometacin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| q 1 | `Q30` · Q | 19.0 | L/h | 5.277777777777778e-06 | L/h | not captured | space_fold (0.95) | tab_3:row2:col2, tab_3:row2:col3, tab_3:row2:col4, tab_3:row2:col5 | — | not captured |
| q 3 | `Q308` · Q3 | 23.8 | L/h | 6.6111111111111115e-06 | L/h | not captured | space_fold (0.95) | tab_3:row4:col2, tab_3:row4:col3, tab_3:row4:col4, tab_3:row4:col5 | — | not captured |
| q 4 | `Q900` · equation variable | 27.5 | not captured | not captured | not captured | not captured | llm (0.6) | tab_3:row5:col2, tab_3:row5:col3, tab_3:row5:col4, tab_3:row5:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| TVCL | Q22 | not captured | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- column '1000 bootstrap samples' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q30 ('q 2', value '8.2') — already have one for this compound
- dropped duplicate Q900 ('q 5', value '8.4') — already have one for this compound
- dropped unlinked row (NIL): 'w CL (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_3:row7:col2', 'tab_3:row7:col3', 'tab_3:row7:col4', 'tab_3:row7:col5'])
- dropped unlinked row (NIL): 'w V (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_3:row8:col2', 'tab_3:row8:col3', 'tab_3:row8:col4', 'tab_3:row8:col5'])
- dropped unlinked row (NIL): 'p CL (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_3:row9:col2', 'tab_3:row9:col3', 'tab_3:row9:col4', 'tab_3:row9:col5'])
- dropped PD-category row 's (mg l -1 )' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_3:row10:col2', 'tab_3:row10:col3', 'tab_3:row10:col4', 'tab_3:row10:col5'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['tab_3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V' from footnote/prose loose number None (source ['tab_3:footnote']); the table cell was unparseable — needs review
- implicit units: 'q 1' → L/h (from the popPK convention: 'The parameter q1 is described as an intercompartmental clearance. In population pharmacokinetics, clearances (including ')
- implicit units: 'q 3' → L/h (from the popPK convention: 'The parameter q3 is described as an intercompartmental (distribution) clearance. In population pharmacokinetics, clearan')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indometacin
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- bound model equation to Q22 (CL): TVCL = q1 * (WT/1.17)^0.75 * e^(q3 * PNA)
- Q22 (CL) is equation-defined: value moved to equation-variable 'TVCL'; equation kept verbatim
- population split: '1000 bootstrap samples' subgroup of Smyth_2004 (paper reports 2 populations: 1000 bootstrap samples, original dataset)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 4
- captured model equation TVCL = q1 * (WT/1.17)^0.75 * e^(q3 * PNA)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.625 (5/8 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[q 1].value` | 19.0 | 0.00711 | mismatch |
| `gpt-oss-120b` | `parameters[q 3].value` | 23.8 | 0.0338 | mismatch |
| `gpt-oss-120b` | `parameters[q 4]` | 27.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q 1].value` | 19.0 | 0.00711 | mismatch |
| `gpt-oss:120b` | `parameters[q 3].value` | 23.8 | 0.0338 | mismatch |
| `gpt-oss:120b` | `parameters[q 4]` | 27.5 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row2:col2', 'tab_3:row2:col3', 'tab_3:row2:col4', 'tab_3:row2:col5'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row4:col2', 'tab_3:row4:col3', 'tab_3:row4:col4', 'tab_3:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_indometacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Smyth_2004` / `Smyth_2004::1000_bootstrap_samples`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 04:29 UTC</sub>
