<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;alirocumab&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/&quot;},{&quot;label&quot;:&quot;Djebli_2017 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alirocumab_Lunven2014_reference&quot;,&quot;label&quot;:&quot;Lunven_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/Alirocumab_Lunven2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Nolain_2022_LDL_C&quot;,&quot;label&quot;:&quot;Nolain_2022 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/pd_Nolain_2022_LDL_C.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alirocumab — `Alirocumab_Djebli2017_final`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**No value for alirocumab's elimination clearance — all 7 extracted parameters describe PCSK9, not alirocumab; t3_param_coverage (+1 more).**

The model was built, but alirocumab's elimination clearance had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — PCSK9: CL 0.176 L/day, kint 559 day-1, kabs 0.307 day-1, Q 0.343 L/day, V1 4.67 L, V 2.61 L, tlag 0.0535 days.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Djebli N et al., Target-Mediated Drug Disposition Popula…, Clinical pharmacokinetics (2017)
  ·  DOI: [10.1007/s40262-016-0505-1](https://doi.org/10.1007/s40262-016-0505-1)

<div class="pk-model-meta" hidden drug="alirocumab" model-id="Alirocumab_Djebli2017_final" status="model_quarantined" stale="false" population="healthy volunteers and patients" measured-compound="alirocumab" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Typical value of CLL (L/day) | `Q22` · CL | 0.176 | L/day | 2.037037037037037e-09 | [l] / [d] | 6.75 | llm (0.6) | Djebli_2017_table_4:row0:col7 | — | not captured |
| Typical value of Kint (nM-1·day-1) | `Q334` · kint | 559 | day-1 | 0.006469907407407407 | 1/h | not captured | llm_confirmed (0.6) | Djebli_2017_table_4:row1:col7 | — | not captured |
| Typical value of Ka (day-1) | `Q49` · kabs | 0.307 | day-1 | 3.5532407407407406e-06 | [1] / [d] | 3.47 | llm_confirmed (0.6) | Djebli_2017_table_4:row2:col7, Djebli_2017_table_4:row9:col7 | — | not captured |
| Typical value of Q (L/day) | `Q30` · Q | 0.343 | L/day | 3.969907407407408e-09 | [l] / [d] | 3.26 | llm (0.6) | Djebli_2017_table_4:row4:col7 | — | not captured |
| Typical value of Vc (L) | `Q63` · V1 | 4.67 | L | 0.00467 | [l] | 2.9 | llm_confirmed (0.6) | Djebli_2017_table_4:row5:col7 | — | not captured |
| Typical value of Vp (L) b | `Q61` · V | 2.61 | L | 0.00261 | [l] | not captured | llm_corrected (0.6) | Djebli_2017_table_4:row8:col7 | — | not captured |
| Typical value of LAG (days) | `Q83` · tlag | 0.0535 | days | 4622.4 | [d] | 0.194 | llm (0.6) | Djebli_2017_table_4:row11:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'nM-1·day-1' (kint)
- dropped unlinked row (NIL): 'Typical value of Kdeg (day-1)' — extend the ontology if this is a real PK parameter (source ['Djebli_2017_table_4:row3:col7'])
- dropped unlinked row (NIL): 'COV1, STATIN effect on CLL c' — extend the ontology if this is a real PK parameter (source ['Djebli_2017_table_4:row7:col7'])
- dropped unlinked row (NIL): 'Typical value of F1' — extend the ontology if this is a real PK parameter (source ['Djebli_2017_table_4:row10:col7'])
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- implicit units: 'Typical value of Kint (nM-1·day-1)' → day-1 (from the paper text: "The paper text explicitly states: 'the PCSK9 degradation rate constant (K deg, day−1), and the complex internalization r")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Typical value of CLL (L/day)); Q30 (Typical value of Q (L/day)); Q63 (Typical value of Vc (L)); Q61 (Typical value of Vp (L) b)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alirocumab
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- model-stage split: 'final model of expanded data set (n = 2870) estimate' is the final model of Djebli_2017 (paper reports 5 stages: estimate (cv%), final model of expanded data set (n = 2870) estimate, final model with covariates (n = 527) estimate, inter-individual variability estimate (cv%), pharmacostatistical model (n = 527) estimate); same population, different model-building step
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table Djebli_2017_table_4: ambiguous_uncertainty_binding
- table Djebli_2017_table_4: unparsed_numeric_cell
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | fail | 0.176 | 0.167 | 0.9489 | 0.05 | footnote reference category |
| C2_base_Q30 | fail | 0.343 | 0.459 | 1.3382 | 0.05 | footnote reference category |
| C2_base_Q334 | fail | 559.0 | 0.127 | 0.0002 | 0.05 | footnote reference category |
| C2_base_Q49 | fail | 0.307 | 0.697 | 2.2704 | 0.05 | footnote reference category |
| C2_base_Q61 | pass | 2.61 | 2.61 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q63 | fail | 4.67 | 3.99 | 0.8544 | 0.05 | footnote reference category |
| C2_base_Q83 | fail | 0.0535 | 0.0298 | 0.557 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Djebli_2017_table_4:row0:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Djebli_2017_table_4:row4:col7'] |
| C5_dimension_Q334 | pass | 1 / [time] | not captured | not captured | not captured | ['Djebli_2017_table_4:row1:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Djebli_2017_table_4:row2:col7', 'Djebli_2017_table_4:row9:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Djebli_2017_table_4:row8:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Djebli_2017_table_4:row5:col7'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Djebli_2017_table_4:row11:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.176 | not captured | not captured | ['Djebli_2017_table_4:row0:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00733 L/h | not captured | not captured | ['Djebli_2017_table_4:row0:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.61 L | not captured | not captured | ['Djebli_2017_table_4:row8:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.67 L | not captured | not captured | ['Djebli_2017_table_4:row5:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['kabs', 'tlag'] |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_alirocumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Djebli_2017` / `Djebli_2017::final`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_alirocumab/models/modelica/_needs_review/Alirocumab_Djebli2017_final.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_alirocumab/models/modelica/_needs_review/Alirocumab_Djebli2017_final.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_alirocumab/Alirocumab_Djebli2017_final/Alirocumab_Djebli2017_final_matlab.zip" download>Alirocumab_Djebli2017_final_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_alirocumab/Alirocumab_Djebli2017_final/Alirocumab_Djebli2017_final_matlab_simbio.zip" download>Alirocumab_Djebli2017_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_alirocumab/Alirocumab_Djebli2017_final/Alirocumab_Djebli2017_final_sbml.zip" download>Alirocumab_Djebli2017_final_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_alirocumab/Alirocumab_Djebli2017_final/Alirocumab_Djebli2017_final_cellml.zip" download>Alirocumab_Djebli2017_final_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:47 UTC</sub>
