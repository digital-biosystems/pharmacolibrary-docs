<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;fluconazole&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/&quot;},{&quot;label&quot;:&quot;Vuong_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluconazole_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/Fluconazole_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluconazole_Matsuno2024_reference&quot;,&quot;label&quot;:&quot;Matsuno_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/Fluconazole_Matsuno2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluconazole — `Fluconazole_Vuong2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="fluconazole" model-id="Fluconazole_Vuong2026_reference" status="needs_review" stale="false" population="critically ill patients" measured-compound="fluconazole" parameterization="mechanistic" topology="2C"></div>

## Citation
Vuong ML, Elkayal O, Van Daele R, Alffenaar JC, Stocker SL, Roberts JA et al. A fluconazole population pharmacokinetics study to improve target attainment in critically ill patients. Infection 54(1):299–313 (2026).
  ·  DOI: [10.1007/s15010-025-02663-0](https://doi.org/10.1007/s15010-025-02663-0)

## Population and dosing

**Population:** critically ill patients · condition invasive candidiasis · age group adult.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLon-CRRT (L/h) | CL_CRRT | 1.56 | L/h | 10.2 |
| Vc (L) | V1 | 38.7 | L | 8.1 |
| Q (L/h) | Q | 13.5 | L/h | 32.8 |
| Vp (L) | V2 | 8.66 | L | 32.9 |
| total body Clearance (CLT) | CL | 1.18 | L/h |  |
| ka | kabs | 3.86 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Comisar_2025, Matsuno_2024) cannot stand in for this paper's evidence. Extracted — fluconazole: CL_CRRT 1.56 L/h, V1 38.7 L, Q 13.5 L/h, V2 8.66 L, CL 1.18 L/h, kabs 3.86 h−1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLon-CRRT (L/h) | `Q357` · CL_CRRT | 1.56 | L/h | 4.333e-07 | m3/s | l/h | 10.2 | llm (0.6) | tab_0:row2:col1 |
| Vc (L) | `Q63` · V1 | 38.7 | L | 0.0387 | m3 | l | 8.1 | exact (1) | tab_0:row5:col1 |
| Q (L/h) | `Q30` · Q | 13.5 | L/h | 3.75e-06 | m3/s | l/h | 32.8 | exact (1) | tab_0:row7:col1 |
| Vp (L) | `Q64` · V2 | 8.66 | L | 0.00866 | m3 | l | 32.9 | exact (1) | tab_0:row8:col1 |
| total body Clearance (CLT) | `Q22` · CL | 1.18 | L/h | 3.278e-07 | m3/s | L/h |  | review_gapfill (0.7) | Matsuno_2024:review |
| ka | `Q49` · kabs | 3.86 | h−1 | 0.001072 | 1/s | 1/h |  | review_gapfill (0.7) | Comisar_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Cov(IIV on CLoff-CRRT-Vc) (%CV)' routed out of structural estimates ('IIV on Vc (%CV)')
- dropped duplicate Q357 ('CLoff-CRRT (L/h)', value '0.633') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fluconazole
- gap-filled Q22 (CL) from Matsuno_2024's review values (primary lacked it)
- gap-filled Q49 (kabs) from Comisar_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_0:row2:col2 = '1.56 (1.25-1.87)'
- unparsed cell tab_0:row2:col3 = '1.58 (1.24-1.88)'
- unparsed cell tab_0:row3:col2 = '0.614 (0.548-0.679)'
- unparsed cell tab_0:row3:col3 = '0.614 (0.550-0.676)'
- unparsed cell tab_0:row5:col2 = '39.4 (33.1-45.7)'
- unparsed cell tab_0:row5:col3 = '39.0 (32.0-45.7)'
- unparsed cell tab_0:row7:col2 = '12.1 (3.7-20.5)'
- unparsed cell tab_0:row7:col3 = '12.0 (3.8-28.2)'
- unparsed cell tab_0:row8:col2 = '8.47 (2.73-14.20)'
- unparsed cell tab_0:row8:col3 = '8.71 (2.64-15.82)'
- unparsed cell tab_0:row13:col2 = '26.4 (9.4-39.3)'
- unparsed cell tab_0:row13:col3 = '27.3 (7.7-41.7)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Matsuno_2024:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_0:row7:col1'] |
| C5_dimension_Q357 | pass | [length] ** 3 / [time] |  | ['tab_0:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Comisar_2025:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_0:row5:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_0:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.18 | ['Matsuno_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.18 L/h | ['Matsuno_2024:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 38.7 L | ['tab_0:row5:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 8.66 L | ['tab_0:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluconazole%5D%20Fluconazole_Vuong2026_reference&body=Drug%3A%20fluconazole%0ARecord%3A%20Fluconazole_Vuong2026_reference%0APaper%3A%20Vuong_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluconazole/Fluconazole_Vuong2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:53 UTC</sub>
