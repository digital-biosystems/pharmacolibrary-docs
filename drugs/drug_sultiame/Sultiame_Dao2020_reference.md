<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;sultiame&quot;,&quot;href&quot;:&quot;drugs/drug_sultiame/&quot;},{&quot;label&quot;:&quot;Dao_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sultiame — `Sultiame_Dao2020_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Kon has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kon and Bmax), so that value has no SI equivalent. Extracted — sultiame: CL 9.95 L/h, V1 64.8 L, V 3.27 L, kabs 1.88 h−1, kon 2.02e+03 h−1·µM−1, koff 8.08e+03 h−1, Bmax 111 mg.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Dao K et al., Sultiame pharmacokinetic profile in pla…, Pharmacology research & per… (2020)
  ·  DOI: [10.1002/prp2.558](https://doi.org/10.1002/prp2.558)

<div class="pk-model-meta" hidden drug="sultiame" model-id="Sultiame_Dao2020_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="sultiame" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLplasma (L/h) | `Q22` · CL | 9.95 | L/h | 2.7638888888888885e-06 | [l] / [h] | not captured | llm (0.6) | prp2558-tbl-0002:row2:col1, prp2558-tbl-0002:row2:col2, prp2558-tbl-0002:row2:col3, prp2558-tbl-0002:row2:col4, prp2558-tbl-0002:row2:col5, prp2558-tbl-0002:row2:col7 | — | not captured |
| Vc (L) | `Q63` · V1 | 64.8 | L | 0.0648 | [l] | not captured | exact (1.0) | prp2558-tbl-0002:row3:col1, prp2558-tbl-0002:row3:col2, prp2558-tbl-0002:row3:col5 | — | not captured |
| Very (L) | `Q61` · V | 3.27 | L | 0.00327 | [l] | not captured | llm (0.6) | prp2558-tbl-0002:row4:col1, prp2558-tbl-0002:row4:col2, prp2558-tbl-0002:row4:col5 | — | not captured |
| ka (h−1) | `Q49` · kabs | 1.88 | h−1 | 0.0005222222222222222 | [1] / [h] | not captured | exact (1.0) | prp2558-tbl-0002:row5:col1, prp2558-tbl-0002:row5:col2, prp2558-tbl-0002:row5:col5 | — | not captured |
| kon (h−1·µM−1) | `Q329` · kon | 2018 | h−1·µM−1 | not captured | [1] / [[h] · [µM]] | not captured | exact (1.0) | prp2558-tbl-0002:row6:col1, prp2558-tbl-0002:row6:col5 | — | not captured |
| koff (h−1) | `Q330` · koff | 8080 | h−1 | 2.2444444444444445 | [1] / [h] | not captured | exact (1.0) | prp2558-tbl-0002:row7:col1, prp2558-tbl-0002:row7:col2, prp2558-tbl-0002:row7:col5 | — | not captured |
| Btot (mg) | `Q332` · Bmax | 111 | mg | not captured | [mg] | not captured | llm (0.6) | prp2558-tbl-0002:row8:col1, prp2558-tbl-0002:row8:col2, prp2558-tbl-0002:row8:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h−1·µM−1' (kon)
- dropped unlinked row (NIL): 'QRen (%)' — extend the ontology if this is a real PK parameter (source ['prp2558-tbl-0002:row9:col1', 'prp2558-tbl-0002:row9:col2', 'prp2558-tbl-0002:row9:col3', 'prp2558-tbl-0002:row9:col4', 'prp2558-tbl-0002:row9:col5', 'prp2558-tbl-0002:row9:col7'])
- dropped value-less row: 'Aa'
- dropped value-less row: 'Ap'
- dropped value-less row: 'Vc'
- dropped value-less row: 'Aery'
- dropped value-less row: 'Very'
- dropped value-less row: 'ka'
- dropped value-less row: 'ke'
- dropped value-less row: 'kon'
- dropped value-less row: 'koff'
- dropped value-less row: 'Bbound'
- dropped value-less row: 'Bfree'
- dropped value-less row: 'Btot'
- dropped value-less row: 'Qren'
- documentation only: 'Foral' → Q41 (FG) comes from ['prp2558-fig-0001:caption'], not from a located parameter table — not emitted as a model parameter
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLplasma (L/h)); Q63 (Vc (L)); Q61 (Very (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sultiame
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp2558-tbl-0002:row2:col6 = '(8.4;11.8)'
- unparsed cell prp2558-tbl-0002:row2:col8 = '(0.5;42)'
- unparsed cell prp2558-tbl-0002:row3:col6 = '(52.1;80.6)'
- unparsed cell prp2558-tbl-0002:row4:col6 = '(2.8;3.6)'
- unparsed cell prp2558-tbl-0002:row5:col6 = '(1.3;2.1)'
- unparsed cell prp2558-tbl-0002:row7:col6 = '(6626;11209)'
- unparsed cell prp2558-tbl-0002:row8:col6 = '(105;117)'
- unparsed cell prp2558-tbl-0002:row9:col6 = '(22.9;37.4)'
- unparsed cell prp2558-tbl-0002:row9:col8 = '(0.8;33)'
- unparsed cell prp2558-tbl-0002:row10:col6 = '(0.38;0.45)'
- unparsed cell prp2558-tbl-0002:row11:col6 = '(0.21;0.32)'
- unparsed cell prp2558-tbl-0002:row12:col6 = '(0.24;0.49)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2558-tbl-0002:row2:col1', 'prp2558-tbl-0002:row2:col2', 'prp2558-tbl-0002:row2:col3', 'prp2558-tbl-0002:row2:col4', 'prp2558-tbl-0002:row2:col5', 'prp2558-tbl-0002:row2:col7'] |
| C5_dimension_Q330 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2558-tbl-0002:row7:col1', 'prp2558-tbl-0002:row7:col2', 'prp2558-tbl-0002:row7:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2558-tbl-0002:row5:col1', 'prp2558-tbl-0002:row5:col2', 'prp2558-tbl-0002:row5:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2558-tbl-0002:row4:col1', 'prp2558-tbl-0002:row4:col2', 'prp2558-tbl-0002:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2558-tbl-0002:row3:col1', 'prp2558-tbl-0002:row3:col2', 'prp2558-tbl-0002:row3:col5'] |
| C5_unit_missing_Q329 | fail | [length] ** 3 / [mass] / [time] | h−1·µM−1 | not captured | not captured | ['prp2558-tbl-0002:row6:col1', 'prp2558-tbl-0002:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.95 | not captured | not captured | ['prp2558-tbl-0002:row2:col1', 'prp2558-tbl-0002:row2:col2', 'prp2558-tbl-0002:row2:col3', 'prp2558-tbl-0002:row2:col4', 'prp2558-tbl-0002:row2:col5', 'prp2558-tbl-0002:row2:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.95 L/h | not captured | not captured | ['prp2558-tbl-0002:row2:col1', 'prp2558-tbl-0002:row2:col2', 'prp2558-tbl-0002:row2:col3', 'prp2558-tbl-0002:row2:col4', 'prp2558-tbl-0002:row2:col5', 'prp2558-tbl-0002:row2:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.27 L | not captured | not captured | ['prp2558-tbl-0002:row4:col1', 'prp2558-tbl-0002:row4:col2', 'prp2558-tbl-0002:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 64.8 L | not captured | not captured | ['prp2558-tbl-0002:row3:col1', 'prp2558-tbl-0002:row3:col2', 'prp2558-tbl-0002:row3:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sultiame/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dao_2020` / `Dao_2020::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:50 UTC</sub>
