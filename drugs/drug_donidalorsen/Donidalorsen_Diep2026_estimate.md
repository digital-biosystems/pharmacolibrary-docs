<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;donidalorsen&quot;,&quot;href&quot;:&quot;drugs/drug_donidalorsen/&quot;},{&quot;label&quot;:&quot;Diep_2026 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donidalorsen — `Donidalorsen_Diep2026_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**T1/2ka  has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — donidalorsen: CL/F 12.8 L/h, V2 69.8 L, Q/F 2.58 L/h, kabs 0.952 1/h, t1/2ka 0.262, V/F 69.8 L.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Diep JK et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70206](https://doi.org/10.1002/psp4.70206)

<div class="pk-model-meta" hidden drug="donidalorsen" model-id="Donidalorsen_Diep2026_estimate" status="needs_review" stale="false" population="healthy adults and adolescents with HAE" measured-compound="donidalorsen" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) a | `Q27` · CL/F | 12.8 | L/h | 3.555555555555556e-06 | [l] / [h] | 2.83 | llm_confirmed (0.6) | psp470206-tbl-0001:row1:col1 | — | 19.6 (7.90% RSE) |
| covariate_of_weight_on_cl_f | `Q900` · covariate_of_weight_on_cl_f | 1.52 | not captured | not captured | not captured | 8.37 | not captured (not captured) | psp470206-tbl-0001:row2:col1 | — | not captured |
| V c/F (L) b | `Q64` · V2 | 69.8 | L | 0.0698 | [l] | 6.28 | llm (0.6) | psp470206-tbl-0001:row3:col1 | — | not captured |
| Q/F (L/h) c | `Q69` · Q/F | 2.58 | L/h | 7.166666666666668e-07 | [l] / [h] | 5.25 | llm_confirmed (0.6) | psp470206-tbl-0001:row6:col1 | — | 10.2 (14.8% RSE) |
| covariate_of_weight_on_q_f | `Q900` · covariate_of_weight_on_q_f | 1.79 | not captured | not captured | not captured | 12.7 | not captured (not captured) | psp470206-tbl-0001:row7:col1 | — | not captured |
| k a (1/h) e | `Q49` · kabs | 0.952 | 1/h | 0.00026444444444444443 | [1] / [h] | 8.26 | llm (0.6) | psp470206-tbl-0001:row11:col1 | — | not captured |
| Covariate of drug presentation of k a | `Q95` · t1/2ka | 0.262 | not captured | not captured | not captured | 36.1 | llm (0.6) | psp470206-tbl-0001:row13:col1 | — | not captured |
| theta_q353_weight | `Q900` · theta_q353_weight | 2.34 | not captured | not captured | not captured | 7.86 | not captured (not captured) | psp470206-tbl-0001:row4:col1 | — | not captured |
| theta_q352_weight | `Q900` · theta_q352_weight | 1.60 | not captured | not captured | not captured | 17.6 | not captured (not captured) | psp470206-tbl-0001:row10:col1 | — | not captured |
| V c/F (L) b | `Q76` · V/F | 69.8 | L | 0.0698 | L | not captured | review_gapfill (0.7) | Diep_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Covariate of weight on CL/F' → Q900:covariate_of_weight_on_cl_f = 1.52 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Covariate of disease status (patient with HAE) on V c/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row5:col1'])
- covariate level 'Covariate of weight on Q/F' → Q900:covariate_of_weight_on_q_f = 1.79 (linear_fractional on Q27)
- dropped duplicate Q69 ('Covariate of disease status (patient with HAE) on Q/F', value '-0.261') — already have one for this compound
- dropped duplicate Q64 ('V p /F (L) d', value '1840') — already have one for this compound
- dropped unlinked row (NIL): 'Covariate of site of administration of k a' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row12:col1'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q353 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q352 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=donidalorsen
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'estimate' subgroup of Diep_2026 (paper reports 29 populations: abdomen, arm, asian, autoinjector, black/african american, estimate, europe, female, hae, hae-c1inh-type 1, hae-c1inh-type 2, hae-nc1inh, healthy volunteer, hispanic/latino, male, middle east, mild, multiple, normal, north america, not hispanic/latino, thigh, vial, white, ≥37 to &lt;68.5, ≥65, ≥68.5 to &lt;78.0, ≥78.0 to &lt;89.1, ≥89.1 to ≤151.9)
- molar mass: none found for 'donidalorsen' — its concentrations stay mass-only
- gap-filled Q76 (V/F) from Diep_2026's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Diep_2026_table_S3: ragged_grid
- table Diep_2026_table_S3: unparsed_numeric_cell
- transposed table Diep_2026_table_S3: logical view retains original source coordinates
- companion parameter table S3 transcribed (208 record(s))
- table Diep_2026_table_S4: ragged_grid
- table Diep_2026_table_S4: unparsed_numeric_cell
- transposed table Diep_2026_table_S4: logical view retains original source coordinates
- companion parameter table S4 transcribed (172 record(s))
- LLM selected parameter table(s) 1, S3, S4
- phenotype-stratified table(s) S3, S4 read with them

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470206-tbl-0001:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470206-tbl-0001:row11:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470206-tbl-0001:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470206-tbl-0001:row6:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Diep_2026:review'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['psp470206-tbl-0001:row13:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.8 L/h | not captured | not captured | ['psp470206-tbl-0001:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 69.8 L | not captured | not captured | ['psp470206-tbl-0001:row3:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 69.8 L | not captured | not captured | ['Diep_2026:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_donidalorsen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diep_2026` / `Diep_2026::estimate`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:48 UTC</sub>
