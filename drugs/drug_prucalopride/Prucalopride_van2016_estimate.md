<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;prucalopride&quot;,&quot;href&quot;:&quot;drugs/drug_prucalopride/&quot;},{&quot;label&quot;:&quot;van_2016 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# prucalopride — `Prucalopride_van2016_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Rejected because the prucalopride absorption parameter t1/2ka carries a half-life meaning but the value 0.792 h−1 is a rate constant, a dimension mismatch on a structural parameter, and the record lacks a clearance value.**

The parameter labelled K a1 (h−1) with value 0.792 h−1 is described as the half-life of the absorption phase, so the reported unit and meaning conflict in dimensions, triggering the structural-parameter mismatch. The record also omits prucalopride clearance: a second reader extracted 22.9 l h−1 for it, while this record has no value. The second reader further disagrees on k a2, reading no value where this record gives 3.87 h−1, and on the precision of Q, V2 and V3, for which this record has no relative standard errors while the second reader reports 15%, 3.3% and 7.9% respectively. Extracted — prucalopride: V2 446, Q 16.9, V3 248, t1/2ka 0.792 h−1, k21 3.87 h−1, MTT 0.734 h, Fab 0.858.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of clpru‐usa‐12 (l h-1)a: this record has none, the second reading 22.9; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:30.705364+00:00) predates the upstream re-run (2026-10-04 16:44:43.154167+00:00). Current validate status: `needs_review`.

## Citation
van Schaick E et al., Development of a population pharmacokin…, Pharmacology research & per… (2016)
  ·  DOI: [10.1002/prp2.236](https://doi.org/10.1002/prp2.236)

<div class="pk-model-meta" hidden drug="prucalopride" model-id="Prucalopride_van2016_estimate" status="needs_review" stale="true" population="children with functional constipation" measured-compound="prucalopride" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V2 (l)a | `Q64` · V2 | 446 | L | 0.446 | L | not captured | llm_confirmed (0.6) | prp2236-tbl-0003:row4:col1 | — | not captured |
| Q (l h−1)a | `Q30` · Q | 16.9 | L/h | 4.694444444444444e-06 | L/h | not captured | llm (0.6) | prp2236-tbl-0003:row5:col1 | — | not captured |
| V3 (l)a | `Q77` · V3 | 248 | L | 0.248 | L | not captured | llm_confirmed (0.6) | prp2236-tbl-0003:row6:col1 | — | not captured |
| K a1 (h−1) | `Q49` · kabs | 0.792 | h−1 | 0.00022 | [1] / [h] | not captured | llm (0.6) | prp2236-tbl-0003:row7:col1 | — | not captured |
| K a2 (h−1) | `Q302` · k21 | 3.87 | h−1 | 0.001075 | [1] / [h] | not captured | llm (0.6) | prp2236-tbl-0003:row8:col1 | — | not captured |
| MTIME (h) | `Q81` · MTT | 0.734 | h | not captured | [h] | not captured | llm (0.6) | prp2236-tbl-0003:row9:col1 | — | not captured |
| F1 | `Q40` · Fab | 0.858 | not captured | not captured | not captured | not captured | exact (1.0) | prp2236-tbl-0003:row10:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CLPRU‐USA‐12 (l h−1)a' — extend the ontology if this is a real PK parameter (source ['prp2236-tbl-0003:row2:col1'])
- dropped unlinked row (NIL): 'CLSPD555‐303 (l h−1)a' — extend the ontology if this is a real PK parameter (source ['prp2236-tbl-0003:row3:col1'])
- implicit units: 'V2 (l)a' → L (from the paper text: "The table caption for Table 3 lists 'CL, clearance; CV, coefficient of variation; F1, bioavaila' but the text explicitly")
- implicit units: 'Q (l h−1)a' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for Q in the provided text or table caption. Intercompartmental clearance i')
- implicit units: 'V3 (l)a' → L (from the popPK convention: 'The paper does not explicitly state the unit for V3 in the provided text or table caption. Volume of distribution is con')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=prucalopride
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- population split: 'estimate' subgroup of van_2016 (paper reports 3 populations: estimate, pru‐usa‐12, spd555‐303)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 4 transcribed (29 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clpru‐usa‐12 (l h-1)a]` | not captured | 22.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a2]` | 3.87 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q (l h-1)a].rse_percent` | not captured | 15 | mismatch |
| `gpt-oss:120b` | `parameters[v2 (l)a].rse_percent` | not captured | 3.3 | mismatch |
| `gpt-oss:120b` | `parameters[v3 (l)a].rse_percent` | not captured | 7.9 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2236-tbl-0003:row5:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2236-tbl-0003:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2236-tbl-0003:row7:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2236-tbl-0003:row4:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2236-tbl-0003:row6:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q64 | pass | volume within physiological range | 446 L | not captured | not captured | ['prp2236-tbl-0003:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_prucalopride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2016` / `van_2016::estimate`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 16:44 UTC</sub>
