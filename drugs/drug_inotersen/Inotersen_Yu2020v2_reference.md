<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;inotersen&quot;,&quot;href&quot;:&quot;drugs/drug_inotersen/&quot;},{&quot;label&quot;:&quot;Yu_2020_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# inotersen — `Inotersen_Yu2020v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 24).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — inotersen: CL 3.4 L/h, V1 20.7 L, kabs 0.261 1/h, V2 230 L, Q 0.266 L/h.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Yu RZ et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020)
  ·  DOI: [10.1089/nat.2019.0822](https://doi.org/10.1089/nat.2019.0822)

<div class="pk-model-meta" hidden drug="inotersen" model-id="Inotersen_Yu2020v2_reference" status="needs_review" stale="false" population="healthy volunteers and patients with hATTR-PN" measured-compound="inotersen" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance, CL (L/h) | `Q22` · CL | 3.4 | L/h | 9.444444444444444e-07 | [l] / [h] | 5.23 | exact (1.0) | tb2:row1:col2, tb2:row1:col3, tb2:row1:col4 | — | 0.071 (21.3% RSE) |
| Central volume, Vc (L) | `Q63` · V1 | 20.7 | L | 0.0207 | [l] | 7.87 | llm_confirmed (0.6) | tb2:row2:col2, tb2:row2:col3, tb2:row2:col4 | — | not captured |
| Absorption rate constant, Ka (1/h) | `Q49` · kabs | 0.261 | 1/h | 7.25e-05 | 1/h | 7.73 | llm_confirmed (0.6) | tb2:row3:col2, tb2:row3:col3, tb2:row3:col4 | — | not captured |
| Peripheral volume, Vp (L) | `Q64` · V2 | 230 | L | 0.23 | [l] | 13.8 | llm_confirmed (0.6) | tb2:row4:col2, tb2:row4:col3, tb2:row4:col4 | — | not captured |
| Intercompartmental clearance, Q (L/h) | `Q30` · Q | 0.266 | L/h | 7.388888888888889e-08 | [l] / [h] | 9.61 | llm_confirmed (0.6) | tb2:row5:col2, tb2:row5:col3, tb2:row5:col4 | — | not captured |
| Lean body mass ∼ CL/Q | `Q900` · equation variable | 1 | not captured | not captured | not captured | not captured | llm (0.6) | tb2:row7:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('Dose effect ∼ CL', value '3.97') — already have one for this compound
- dropped duplicate Q900 ('Lean body mass ∼ Vc/Vp', value '1') — already have one for this compound
- dropped duplicate Q22 ('Disease ∼ CL', value '0.111') — already have one for this compound
- dropped duplicate Q63 ('Disease ∼ Vc', value '-0.284') — already have one for this compound
- dropped unlinked row (NIL): 'Day/type' — extend the ontology if this is a real PK parameter (source ['Yu_2020_2_table_3:row0:col1', 'Yu_2020_2_table_3:row0:col2', 'Yu_2020_2_table_3:row0:col3', 'Yu_2020_2_table_3:row0:col4', 'Yu_2020_2_table_3:row0:col5', 'Yu_2020_2_table_3:row0:col6', 'Yu_2020_2_table_3:row0:col7', 'Yu_2020_2_table_3:row0:col8'])
- implicit units: 'Absorption rate constant, Ka (1/h)' → 1/h (from the popPK convention: 'The paper does not state a unit for Ka. As a first-order absorption rate constant in population PK, the conventional uni')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance, CL (L/h)); Q63 (Central volume, Vc (L)); Q64 (Peripheral volume, Vp (L)); Q30 (Intercompartmental clearance, Q (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=inotersen
- molar mass: none found for 'inotersen' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tb2:row10:col4 = '−0.459 to −0.109'
- unparsed cell tb2:row12:col4 = '−0.222 to −0.068'
- transposed table Yu_2020_2_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_alpha | pass | 3.91 | 3.912 | 1.0005 | 0.25 | reported t½α |
| C1_half_life_beta | fail | 26.9 | 646.535 | 24.0348 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tb2:row1:col2', 'tb2:row1:col3', 'tb2:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tb2:row5:col2', 'tb2:row5:col3', 'tb2:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tb2:row3:col2', 'tb2:row3:col3', 'tb2:row3:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tb2:row2:col2', 'tb2:row2:col3', 'tb2:row2:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tb2:row4:col2', 'tb2:row4:col3', 'tb2:row4:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.4 | not captured | not captured | ['tb2:row1:col2', 'tb2:row1:col3', 'tb2:row1:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.4 L/h | not captured | not captured | ['tb2:row1:col2', 'tb2:row1:col3', 'tb2:row1:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 20.7 L | not captured | not captured | ['tb2:row2:col2', 'tb2:row2:col3', 'tb2:row2:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 230 L | not captured | not captured | ['tb2:row4:col2', 'tb2:row4:col3', 'tb2:row4:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_inotersen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yu_2020_2` / `Yu_2020_2::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:04 UTC</sub>
