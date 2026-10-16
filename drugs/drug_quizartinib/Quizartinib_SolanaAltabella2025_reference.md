<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Solana-Altabella_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final&quot;,&quot;label&quot;:&quot;Vaddady_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final_final_quizartinib_model&quot;,&quot;label&quot;:&quot;Vaddady_2024_final_final_quizartinib_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kang_2021_QTcF&quot;,&quot;label&quot;:&quot;Kang_2021 \u00b7 QTcF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/pd_Kang_2021_QTcF.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_SolanaAltabella2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Q has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — quizartinib: CL 1.76 L/h, kel 0.01 1/h, kabs 1.68 1/h, Fab 0.75, t1/2z 82.5 h, V2 227 L, V3 176 L, Q3 26.6 L/h, … (+2).

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Solana-Altabella A et al., Validation of pharmacokinetic model for…, European journal of clinica… (2025)
  ·  DOI: [10.1007/s00228-025-03909-4](https://doi.org/10.1007/s00228-025-03909-4)

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_SolanaAltabella2025_reference" status="needs_review" stale="false" population="FLT3-ITD negative newly diagnosed acute myeloid leukemia patients" measured-compound="quizartinib" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 1.76 | L/h | 4.888888888888889e-07 | L/h | not captured | exact (1.0) | Tab2:row1:col1, Tab2:row1:col3 | — | not captured |
| KE | `Q47` · kel | 0.01 | 1/h | 2.777777777777778e-06 | 1/h | not captured | exact (1.0) | Tab2:row2:col1, Tab2:row2:col3 | — | not captured |
| KA | `Q49` · kabs | 1.68 | 1/h | 0.00046666666666666666 | 1/h | not captured | exact (1.0) | Tab2:row3:col1, Tab2:row3:col3, Tab2:row10:col1, Tab2:row10:col3 | — | not captured |
| F1 | `Q40` · Fab | 0.75 | not captured | not captured | not captured | not captured | exact (1.0) | Tab2:row4:col1, Tab2:row4:col3 | — | not captured |
| t1/2 | `Q57` · t1/2z | 82.50 | h | 297000.0 | h | not captured | exact (1.0) | Tab2:row5:col1, Tab2:row5:col3 | — | not captured |
| V2 | `Q64` · V2 | 227.32 | L | 0.22732 | L | not captured | exact (1.0) | Tab2:row6:col1, Tab2:row6:col3 | — | not captured |
| V3 | `Q77` · V3 | 176.03 | L | 0.17603 | L | not captured | exact (1.0) | Tab2:row7:col1, Tab2:row7:col3 | — | not captured |
| Q3 | `Q308` · Q3 | 26.56 | L/h | 7.377777777777778e-06 | L/h | not captured | exact (1.0) | Tab2:row8:col1, Tab2:row8:col3 | — | not captured |
| Q4 | `Q99` · Q2 | 0.56 | L/h | 1.5555555555555556e-07 | L/h | not captured | llm (0.6) | Tab2:row9:col1, Tab2:row9:col3 | — | not captured |
| DV | `Q30` · Q | 135.00 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row12:col1, Tab2:row12:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- competing summary columns for 'CL'; not population strata
- competing summary columns for 'KE'; not population strata
- competing summary columns for 'KA'; not population strata
- competing summary columns for 'F1'; not population strata
- competing summary columns for 't1/2'; not population strata
- competing summary columns for 'V2'; not population strata
- competing summary columns for 'V3'; not population strata
- competing summary columns for 'Q3'; not population strata
- competing summary columns for 'Q4'; not population strata
- competing summary columns for 'V4'; not population strata
- competing summary columns for 'DV'; not population strata
- competing summary columns for 'IPRED'; not population strata
- competing summary columns for 'PRED'; not population strata
- competing summary columns for 'NPDE'; not population strata
- dropped unlinked row (NIL): 'V4' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col1', 'Tab2:row11:col3'])
- dropped unlinked row (NIL): 'IPRED' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1', 'Tab2:row13:col3'])
- dropped unlinked row (NIL): 'PRED' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1', 'Tab2:row14:col3'])
- dropped unlinked row (NIL): 'NPDE' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col1', 'Tab2:row15:col3'])
- implicit units: 'CL' → L/h (from the paper text: "The text states: 'The median clearance (CL) was 1.76 L/h'")
- implicit units: 'KE' → 1/h (from the popPK convention: 'KE is an elimination rate constant. First-order rate constants in population PK are conventionally expressed in 1/h.')
- implicit units: 'KA' → 1/h (from the paper text: "The text states: 'the absorption rate constant (KA) had a median value of 1.67 h − 1'")
- implicit units: 't1/2' → h (from the popPK convention: 't1/2 is a half-life. Time parameters in population PK are conventionally expressed in hours (h).')
- implicit units: 'V2' → L (from the paper text: "The text states: 'V2 (central compartment) at 212.9 L'. Note: The text identifies V2 as central and V3 as peripheral, wh")
- implicit units: 'V3' → L (from the paper text: "The text states: 'V3 (peripheral compartment) at 176.03 L'")
- implicit units: 'Q3' → L/h (from the paper text: "The text states: 'Intercompartmental clearances were represented by Q3 at 26.36 L/h'")
- implicit units: 'Q4' → L/h (from the paper text: "The text states: 'Intercompartmental clearances were represented by ... Q4 at 0.56 L/h'")
- implicit units: 'DV' — the LLM proposed 'ng/mL', whose dimension does not fit Q30; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab2: competing_summary_estimates
- table Tab2: ambiguous_uncertainty_binding
- table Tab2: units_need_context
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col3'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col3', 'Tab2:row10:col1', 'Tab2:row10:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col3'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row9:col1', 'Tab2:row9:col3'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row12:col1', 'Tab2:row12:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.76 | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.76 L/h | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 227 L | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_quizartinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Solana-Altabella_2025` / `Solana-Altabella_2025::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:46 UTC</sub>
