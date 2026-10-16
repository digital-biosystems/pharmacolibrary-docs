<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;tocilizumab&quot;,&quot;href&quot;:&quot;drugs/drug_tocilizumab/&quot;},{&quot;label&quot;:&quot;Arriv\u00e9_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tocilizumab — `Tocilizumab_Arriv2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Vmax and Km), so that value has no SI equivalent. Extracted — tocilizumab: kabs 0.23 day⁻¹, CL 0.2 L.day⁻¹, V 4.91 L, Q 0.2 L.day⁻¹, V2 2.9 L, Vmax 5.5 mg.L⁻¹.day⁻¹, Km 0.015 mg.L⁻¹.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Arrivé C et al., A Population Pharmacokinetic Model of T…, BioDrugs : clinical immunot… (2024)
  ·  DOI: [10.1007/s40259-024-00676-z](https://doi.org/10.1007/s40259-024-00676-z)

<div class="pk-model-meta" hidden drug="tocilizumab" model-id="Tocilizumab_Arriv2024_reference" status="rejected" stale="false" population="kidney-transplant patients treated for chronic active antibody-mediated rejection" measured-compound="tocilizumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka_pop (day⁻¹) | `Q49` · kabs | 0.23 | day⁻¹ | 2.662037037037037e-06 | [1] / [d] | not captured | llm (0.6) | Arrivé_2024_table_p26_1:row2:col1 | — | not captured |
| Cl_pop (L.day⁻¹) | `Q22` · CL | 0.20 | L.day⁻¹ | 2.3148148148148148e-09 | [l] / [d] | 5.77 | llm (0.6) | Arrivé_2024_table_p26_1:row3:col1 | — | not captured |
| V_pop (L) | `Q61` · V | 4.91 | L | 0.00491 | [l] | 8.73 | llm (0.6) | Arrivé_2024_table_p26_1:row4:col1 | — | not captured |
| Q_pop (L.day⁻¹) | `Q30` · Q | 0.2 | L.day⁻¹ | 2.3148148148148148e-09 | [l] / [d] | not captured | llm (0.6) | Arrivé_2024_table_p26_1:row5:col1 | — | not captured |
| V2_pop (L) | `Q64` · V2 | 2.9 | L | 0.0029 | [l] | not captured | llm (0.6) | Arrivé_2024_table_p26_1:row6:col1 | — | not captured |
| Vm_pop (mg.L⁻¹.day⁻¹) | `Q66` · Vmax | 5.50 | mg.L⁻¹.day⁻¹ | not captured | [mg] / [[d] · [l]] | 0.0055 | llm (0.6) | Arrivé_2024_table_p26_1:row7:col1 | — | not captured |
| Km_pop (mg.L⁻¹) | `Q1` · Km | 0.015 | mg.L⁻¹ | not captured | [mg] / [l] | 0.151 | llm (0.6) | Arrivé_2024_table_p26_1:row8:col1 | — | not captured |
| theta_cl_infla | `Q900` · theta_cl_infla | 0.78 | not captured | not captured | not captured | 22.5 | not captured (not captured) | Arrivé_2024_table_p26_1:row14:col1 | — | not captured |
| theta_cl_acr | `Q900` · theta_cl_acr | 0.00085 | not captured | not captured | not captured | 34.6 | not captured (not captured) | Arrivé_2024_table_p26_1:row15:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'omega_ka (%)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'omega_Cl (%)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'omega_V (%)' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'a (mg.L⁻¹)' routed out of structural estimates ('Residual error')
- table section residual_error: 'b (%)' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'F_pop' — extend the ontology if this is a real PK parameter (source ['Arrivé_2024_table_p26_1:row1:col1'])
- unit_dimension_mismatch: 'Vm_pop (mg.L⁻¹.day⁻¹)' → Q66 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- 'beta_Cl_INFLA' is a β covariate effect on _Cl_, not Q22 (llm link set aside)
- covariate level 'beta_Cl_INFLA' → Q900:theta_cl_infla = 0.78 (linear_fractional on Q22)
- covariate level 'beta_Cl_ACR' → Q900:theta_cl_acr = 0.00085 (linear_fractional on Q22)
- dropped duplicate Q22 ('Beta_Cl_logWEIGHT', value '0.81') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl_pop (L.day⁻¹)); Q61 (V_pop (L)); Q30 (Q_pop (L.day⁻¹)); Q64 (V2_pop (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tocilizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'tocilizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Arrivé_2024_table_p26_1:row8:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Arrivé_2024_table_p26_1:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Arrivé_2024_table_p26_1:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Arrivé_2024_table_p26_1:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Arrivé_2024_table_p26_1:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Arrivé_2024_table_p26_1:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 / [time] | mg.L⁻¹.day⁻¹ | not captured | not captured | ['Arrivé_2024_table_p26_1:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2 | not captured | not captured | ['Arrivé_2024_table_p26_1:row3:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00833 L/h | not captured | not captured | ['Arrivé_2024_table_p26_1:row3:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.91 L | not captured | not captured | ['Arrivé_2024_table_p26_1:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.9 L | not captured | not captured | ['Arrivé_2024_table_p26_1:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tocilizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Arrivé_2024` / `Arrivé_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:11 UTC</sub>
