<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;dupilumab&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/&quot;},{&quot;label&quot;:&quot;Zhang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dupilumab_Takechi2025_reference&quot;,&quot;label&quot;:&quot;Takechi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Takechi2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dupilumab_Kovalenko2020_population_estimates&quot;,&quot;label&quot;:&quot;Kovalenko_2020_population_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dupilumab — `Dupilumab_Zhang2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (Km), so that value has no SI equivalent. Extracted — dupilumab: kel 0.0418 1/day, V2 2.76 L, k31 0.0952 1/day, Vmax 1.39, Km 2.08 mg/L, t1/2ka 0.263, kabs 0.609.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Zhang L et al., Population pharmacokinetic analysis of…, CPT: pharmacometrics & syst… (2021)
  ·  DOI: [10.1002/psp4.12667](https://doi.org/10.1002/psp4.12667)

## Model component
<dbs-pgx drug="dupilumab" model-id="Dupilumab_Zhang2021_reference" status="rejected" stale="false" population="adults and adolescents with asthma" measured-compound="dupilumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Typical value of K e (θ1, 1/day) | `Q47` · kel | 0.0418 | 1/day | 4.837962962962962e-07 | 1/h | 0.0419 | llm (0.6) | psp412667-tbl-0003:row1:col1, psp412667-tbl-0003:row1:col4 | — | not captured |
| Typical value of V 2 (θ2, L) | `Q64` · V2 | 2.76 | L | 0.00276 | L | 2.76 | llm (0.6) | psp412667-tbl-0003:row2:col1, psp412667-tbl-0003:row2:col4 | — | not captured |
| Typical value of K 23 (θ3, 1/day) | `Q304` · k31 | 0.0952 | 1/day | 1.1018518518518519e-06 | 1/h | 0.0955 | llm (0.6) | psp412667-tbl-0003:row3:col1, psp412667-tbl-0003:row3:col4 | — | not captured |
| Typical value of Vmax (θ5, mg/L/day) | `Q66` · Vmax | 1.39 | not captured | not captured | not captured | 1.39 | llm_confirmed (0.6) | psp412667-tbl-0003:row5:col1, psp412667-tbl-0003:row5:col4 | — | not captured |
| Typical value of K m (θ6, mg/L) | `Q1` · Km | 2.08 | mg/L | not captured | mg/L | 2.07 | llm (0.6) | psp412667-tbl-0003:row6:col1, psp412667-tbl-0003:row6:col4 | — | not captured |
| Typical value of K a (θ7, 1/day) | `Q95` · t1/2ka | 0.263 | not captured | not captured | not captured | 0.263 | llm (0.6) | psp412667-tbl-0003:row7:col1, psp412667-tbl-0003:row7:col4 | — | not captured |
| Typical value of F sc (θ8, 1/day) | `Q49` · kabs | 0.609 | not captured | not captured | not captured | 0.609 | llm (0.6) | psp412667-tbl-0003:row8:col1, psp412667-tbl-0003:row8:col4 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.222 | not captured | not captured | not captured | 0.214 | not captured (not captured) | psp412667-tbl-0003:row9:col1, psp412667-tbl-0003:row9:col4 | — | not captured |
| theta_kel_ada | `Q900` · theta_kel_ada | 0.191 | not captured | not captured | not captured | 0.194 | not captured (not captured) | psp412667-tbl-0003:row10:col1, psp412667-tbl-0003:row10:col4 | — | not captured |
| theta_q335_weight_power | `Q900` · theta_q335_weight_power | 0.217 | not captured | not captured | not captured | 0.222 | not captured (not captured) | psp412667-tbl-0003:row11:col1, psp412667-tbl-0003:row11:col4 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.667 | not captured | not captured | not captured | 0.665 | not captured (not captured) | psp412667-tbl-0003:row12:col1, psp412667-tbl-0003:row12:col4 | — | not captured |
| theta_v2_albumin_power | `Q900` · theta_v2_albumin_power | -0.484 | not captured | not captured | not captured | -0.482 | not captured (not captured) | psp412667-tbl-0003:row13:col1, psp412667-tbl-0003:row13:col4 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.224 | not captured | not captured | not captured | 0.222 | not captured (not captured) | psp412667-tbl-0003:row14:col1, psp412667-tbl-0003:row14:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q304 ('Typical value of K 32 (θ4, 1/day)', value '0.163') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Typical value of K e (θ1, 1/day)' → 1/day (from the paper text: "The parameter list in the input explicitly includes the unit in the description: 'Typical value of K e (θ1, 1/day) = 0.0")
- implicit units: 'Typical value of V 2 (θ2, L)' → L (from the paper text: "The parameter list in the input explicitly includes the unit in the description: 'Typical value of V 2 (θ2, L) = 2.76'. ")
- implicit units: 'Typical value of K 23 (θ3, 1/day)' → 1/day (from the paper text: "The parameter list in the input explicitly includes the unit in the description: 'Typical value of K 23 (θ3, 1/day) = 0.")
- implicit units: 'Typical value of Vmax (θ5, mg/L/day)' — the LLM proposed 'mg/L/day', whose dimension does not fit Q66; left unset
- implicit units: 'Typical value of K m (θ6, mg/L)' → mg/L (from the paper text: "The parameter list in the input explicitly includes the unit in the description: 'Typical value of K m (θ6, mg/L) = 2.08")
- implicit units: 'Typical value of K a (θ7, 1/day)' — the LLM proposed '1/day', whose dimension does not fit Q95; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (Typical value of V 2 (θ2, L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dupilumab
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- molar mass: none found for 'dupilumab' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412667-tbl-0003:row1:col2 = '2.77%'
- unparsed cell psp412667-tbl-0003:row1:col3 = '[0.0395; 0.0442]'
- unparsed cell psp412667-tbl-0003:row1:col5 = '[0.0389; 0.0448]'
- unparsed cell psp412667-tbl-0003:row2:col2 = '2.43%'
- unparsed cell psp412667-tbl-0003:row2:col3 = '[2.63; 2.90]'
- unparsed cell psp412667-tbl-0003:row2:col5 = '[2.63; 2.91]'
- unparsed cell psp412667-tbl-0003:row3:col2 = '6.97%'
- unparsed cell psp412667-tbl-0003:row3:col3 = '[0.0819; 0.108]'
- unparsed cell psp412667-tbl-0003:row3:col5 = '[0.074; 0.119]'
- unparsed cell psp412667-tbl-0003:row4:col2 = '4.36%'
- unparsed cell psp412667-tbl-0003:row4:col3 = '[0.148; 0.177]'
- unparsed cell psp412667-tbl-0003:row4:col5 = '[0.142; 0.189]'
- unparsed cell psp412667-tbl-0003:row5:col2 = '3.80%'
- unparsed cell psp412667-tbl-0003:row5:col3 = '[1.28; 1.49]'
- unparsed cell psp412667-tbl-0003:row5:col5 = '[1.23; 1.56]'
- unparsed cell psp412667-tbl-0003:row6:col2 = '13.6%'
- unparsed cell psp412667-tbl-0003:row6:col3 = '[1.52; 2.65]'
- unparsed cell psp412667-tbl-0003:row6:col5 = '[1.49; 2.93]'
- unparsed cell psp412667-tbl-0003:row7:col2 = '3.80%'
- unparsed cell psp412667-tbl-0003:row7:col3 = '[0.243; 0.283]'
- unparsed cell psp412667-tbl-0003:row7:col5 = '[0.230; 0.287]'
- unparsed cell psp412667-tbl-0003:row8:col2 = '3.27%'
- unparsed cell psp412667-tbl-0003:row8:col3 = '[0.569; 0.649]'
- unparsed cell psp412667-tbl-0003:row8:col5 = '[0.567; 0.650]'
- unparsed cell psp412667-tbl-0003:row9:col2 = '22.5%'
- unparsed cell psp412667-tbl-0003:row9:col3 = '[0.122; 0.321]'
- unparsed cell psp412667-tbl-0003:row9:col5 = '[0.149; 0.273]'
- unparsed cell psp412667-tbl-0003:row10:col2 = '13.6%'
- unparsed cell psp412667-tbl-0003:row10:col3 = '[0.139; 0.243]'
- unparsed cell psp412667-tbl-0003:row10:col5 = '[0.112; 0.276]'
- unparsed cell psp412667-tbl-0003:row11:col2 = '12.1%'
- unparsed cell psp412667-tbl-0003:row11:col3 = '[0.164; 0.269]'
- unparsed cell psp412667-tbl-0003:row11:col5 = '[0.118; 0.354]'
- unparsed cell psp412667-tbl-0003:row12:col2 = '3.89%'
- unparsed cell psp412667-tbl-0003:row12:col3 = '[0.615; 0.719]'
- unparsed cell psp412667-tbl-0003:row12:col5 = '[0.606; 0.725]'
- unparsed cell psp412667-tbl-0003:row13:col2 = '12.3%'
- unparsed cell psp412667-tbl-0003:row13:col3 = '[−0.604; −0.365]'
- unparsed cell psp412667-tbl-0003:row13:col5 = '[−0.605; −0.352]'
- unparsed cell psp412667-tbl-0003:row14:col2 = '24.0%'
- unparsed cell psp412667-tbl-0003:row14:col3 = '[0.117; 0.332]'
- unparsed cell psp412667-tbl-0003:row14:col5 = '[0.075; 0.364]'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412667-tbl-0003:row6:col1', 'psp412667-tbl-0003:row6:col4'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412667-tbl-0003:row3:col1', 'psp412667-tbl-0003:row3:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412667-tbl-0003:row1:col1', 'psp412667-tbl-0003:row1:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412667-tbl-0003:row2:col1', 'psp412667-tbl-0003:row2:col4'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['psp412667-tbl-0003:row8:col1', 'psp412667-tbl-0003:row8:col4'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412667-tbl-0003:row5:col1', 'psp412667-tbl-0003:row5:col4'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['psp412667-tbl-0003:row7:col1', 'psp412667-tbl-0003:row7:col4'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.76 L | not captured | not captured | ['psp412667-tbl-0003:row2:col1', 'psp412667-tbl-0003:row2:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dupilumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2021` / `Zhang_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:14 UTC</sub>
