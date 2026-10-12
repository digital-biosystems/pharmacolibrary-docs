<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;fosphenytoin&quot;,&quot;href&quot;:&quot;drugs/drug_fosphenytoin/&quot;},{&quot;label&quot;:&quot;Tanaka_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fosphenytoin — `Fosphenytoin_Tanaka2013_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.938), gpt-oss:120b (not confirmed, agreement 0.882). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V3 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V3), so that value has no SI equivalent. None of the extracted parameters is fosphenytoin's own; they describe phenytoin. Extracted — phenytoin: CL 1.61 L/h, V1 20.3 L, Q 53.4 L/h, V2 26.5 L, V3 0.591 V3, kfm 4.96 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fosphenytoin, the second reading fosphenytoin sodium. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:26:54.232824+00:00) predates the upstream re-run (2026-10-07 06:53:59.940964+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `fosphenytoin`, measured `phenytoin`.

## Citation
Tanaka J et al., Population pharmacokinetics of phenytoi…, European journal of clinica… (2013)
  ·  DOI: [10.1007/s00228-012-1373-8](https://doi.org/10.1007/s00228-012-1373-8)

## Model component
<dbs-pgx drug="fosphenytoin" model-id="Fosphenytoin_Tanaka2013_reference" status="needs_review" stale="true" population="pediatric patients, adult patients, and healthy volunteers" measured-compound="phenytoin" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h)a | `Q351` · CLm/F | 1.61 | L/h | 4.4722222222222223e-07 | L/h | 0.0878 | exact (1.0) | Tab3:row2:col2, Tab3:row2:col3, Tab3:row2:col4, Tab3:row2:col5, Tab3:row2:col6, Tab3:row2:col7 | — | 0.190 (0.0348% RSE) |
| V2 (L)a | `Q63` · V1 | 20.3 | L | 0.020300000000000002 | L | 2.68 | exact (1.0) | Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4, Tab3:row4:col5, Tab3:row4:col6, Tab3:row4:col7 | — | not captured |
| Q (L/h) | `Q30` · Q | 53.4 | L/h | 1.4833333333333334e-05 | [l] / [h] | 5.87 | exact (1.0) | Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4, Tab3:row5:col5, Tab3:row5:col6, Tab3:row5:col7 | — | not captured |
| V3 (L)a | `Q64` · V2 | 26.5 | L | 0.0265 | L | 2.43 | exact (1.0) | Tab3:row6:col2, Tab3:row6:col3, Tab3:row6:col4, Tab3:row6:col5, Tab3:row6:col6, Tab3:row6:col7 | — | 0.133 (0.0684% RSE) |
| ΘWT (V3) | `Q77` · V3 | 0.591 | V3 | not captured | [v3] | 0.0520 | llm (0.6) | Tab3:row7:col2, Tab3:row7:col3, Tab3:row7:col4, Tab3:row7:col5, Tab3:row7:col6, Tab3:row7:col7 | — | 0.0470 (0.0214% RSE) |
| K12 (1/h) | `Q305` · kfm | 4.96 | 1/h | 0.0013777777777777777 | 1/h | 0.518 | exact (1.0) | Tab3:row8:col2, Tab3:row8:col3, Tab3:row8:col4, Tab3:row8:col5, Tab3:row8:col6, Tab3:row8:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'ΘWT (CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('ΘWT (CL)', value '0.575') — already have one for this compound
- unit_dimension_unknown: 'V3' (V3)
- implicit units: 'CL (L/h)a' → L/h (from the paper text: 'The paper text states: "The basic pharmacokinetic parameters were total clearance (CL, L/h)" and Table 3 lists "Populati')
- implicit units: 'V2 (L)a' → L (from the paper text: 'The paper text states: "central volume of distribution (V2, L)" and Table 3 lists "V2 (L)".')
- implicit units: 'V3 (L)a' → L (from the paper text: 'The paper text states: "peripheral volume of distribution (V3, L)" and Table 3 lists "V3 (L)".')
- implicit units: 'K12 (1/h)' → 1/h (from the paper text: 'The paper text states: "metabolism rate constant (K12, h−1)".')
- metabolite phenytoin: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=phenytoin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 30 linked by role
- review gap-fill skipped: this record measures 'phenytoin', not fosphenytoin — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab3:row2:col1 = 'θ1'
- unparsed cell Tab3:row3:col1 = 'θ2'
- unparsed cell Tab3:row4:col1 = 'θ3'
- unparsed cell Tab3:row5:col1 = 'θ4'
- unparsed cell Tab3:row6:col1 = 'θ5'
- unparsed cell Tab3:row7:col1 = 'θ6'
- unparsed cell Tab3:row8:col1 = 'θ7'
- unparsed cell Tab3:row10:col1 = 'ω1,1'
- unparsed cell Tab3:row11:col1 = 'ω2,2'
- unparsed cell Tab3:row12:col1 = 'ω3,3'
- unparsed cell Tab3:row13:col1 = 'ω4,4'
- unparsed cell Tab3:row14:col1 = 'ω5,5'
- unparsed cell Tab3:row16:col1 = 'σ1,1'
- unparsed cell Tab3:row17:col1 = 'σ2,2'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.938 (15/16 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.882 (15/17 fields) | 2 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | fosphenytoin | fosphenytoin sodium | mismatch |
| `gpt-oss:120b` | `model.links` | [['fosphenytoin sodium', 'phenytoin', 'metabolism']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[θ wt]` | not captured | 0.495 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4', 'Tab3:row5:col5', 'Tab3:row5:col6', 'Tab3:row5:col7'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row8:col2', 'Tab3:row8:col3', 'Tab3:row8:col4', 'Tab3:row8:col5', 'Tab3:row8:col6', 'Tab3:row8:col7'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:row2:col4', 'Tab3:row2:col5', 'Tab3:row2:col6', 'Tab3:row2:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4', 'Tab3:row4:col5', 'Tab3:row4:col6', 'Tab3:row4:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Tab3:row6:col5', 'Tab3:row6:col6', 'Tab3:row6:col7'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 | V3 | not captured | not captured | ['Tab3:row7:col2', 'Tab3:row7:col3', 'Tab3:row7:col4', 'Tab3:row7:col5', 'Tab3:row7:col6', 'Tab3:row7:col7'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 20.3 L | not captured | not captured | ['Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4', 'Tab3:row4:col5', 'Tab3:row4:col6', 'Tab3:row4:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 26.5 L | not captured | not captured | ['Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Tab3:row6:col5', 'Tab3:row6:col6', 'Tab3:row6:col7'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fosphenytoin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tanaka_2013` / `Tanaka_2013::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:53 UTC</sub>
