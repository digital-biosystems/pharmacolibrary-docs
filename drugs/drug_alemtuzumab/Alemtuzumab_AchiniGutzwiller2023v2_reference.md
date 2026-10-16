<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;alemtuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/&quot;},{&quot;label&quot;:&quot;Achini-Gutzwiller_2023_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alemtuzumab_Dong2022_reference&quot;,&quot;label&quot;:&quot;Dong_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Dong_2022_ALC&quot;,&quot;label&quot;:&quot;Dong_2022 \u00b7 ALC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/pd_Dong_2022_ALC.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Mould_2007_WBC&quot;,&quot;label&quot;:&quot;Mould_2007 \u00b7 WBC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/pd_Mould_2007_WBC.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_van_2025_Tcells&quot;,&quot;label&quot;:&quot;van_2025 \u00b7 Tcells&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/pd_van_2025_Tcells.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alemtuzumab — `Alemtuzumab_AchiniGutzwiller2023v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance; tmax and Vmax have no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (tmax, Vmax and Km), so that value has no SI equivalent. Extracted — alemtuzumab: V 0.985 L, k21 2.63 1/day, tmax 22.3 mg per day, Vmax 0.0438 mg per day, Km 0.633 μg/mL.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Achini-Gutzwiller FR et al., Exposure-response analysis of alemtuzum…, Blood advances (2023)
  ·  DOI: [10.1182/bloodadvances.2022009051](https://doi.org/10.1182/bloodadvances.2022009051)

<div class="pk-model-meta" hidden drug="alemtuzumab" model-id="Alemtuzumab_AchiniGutzwiller2023v2_reference" status="needs_review" stale="false" population="pediatric patients with nonmalignant diseases undergoing allogeneic HSCT" measured-compound="alemtuzumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vdpop (L) | `Q61` · V | 0.985 | L | 0.000985 | [l] | 14 | llm (0.6) | tbl2:row7:col1 | — | not captured |
| K21/d | `Q302` · k21 | 2.63 | 1/day | 3.0439814814814814e-05 | 1/h | 16 | llm (0.6) | tbl2:row9:col1 | — | not captured |
| Tmax (mg per day) | `Q56` · tmax | 22.3 | mg per day | not captured | [mg] · [perday] | 29 | exact (1.0) | tbl2:row10:col1 | — | not captured |
| Vmax (mg per day) | `Q66` · Vmax | 0.0438 | mg per day | not captured | [mg] · [perday] | 23 | special_case (0.95) | tbl2:row12:col1 | — | not captured |
| Km (μg/mL) | `Q1` · Km | 0.633 | μg/mL | not captured | [µg] / [ml] | 19 | exact (1.0) | tbl2:row13:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl2:row8:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CLi=CLpop×(WTWTmed)(WT)0.75× (1 + (LY/LYmed × 0.8) WTmed = 18 kg, LYmed = 2.2410 ×109/L | Q22 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (CV%)' routed out of structural estimates ('IIV')
- table section iiv: 'Vd (CV%)' routed out of structural estimates ('IIV')
- table section iiv: 'Tm (CV%)' routed out of structural estimates ('IIV')
- table section iiv: 'Km (CV%)' routed out of structural estimates ('IIV')
- table section residual_error: 'Proportional (CV%)' routed out of structural estimates ('Random residual variability')
- table section residual_error: 'Additive (μg/mL)' routed out of structural estimates ('Random residual variability')
- unit_dimension_unknown: 'L per day' (CL)
- dropped duplicate Q22 ('CLpop (L per day)', value '0.214') — already have one for this compound
- dropped unlinked row (NIL): 'Exponent WTmed on CLpop (fixed)' — extend the ontology if this is a real PK parameter (source ['tbl2:row4:col1'])
- dropped duplicate Q22 ('Linear function LYmed on CLpop', value '0.8') — already have one for this compound
- dropped unlinked row (NIL): 'Vdi=Vdpop×(WTWTmed)(WT)1WTmed = 18 kg' — extend the ontology if this is a real PK parameter (source ['tbl2:row6:col1'])
- unit_dimension_unknown: 'mg per day' (tmax)
- dropped unlinked row (NIL): 'Tm (μg/mL)' — extend the ontology if this is a real PK parameter (source ['tbl2:row11:col1'])
- unit_dimension_unknown: 'mg per day' (Vmax)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'K21/d' → 1/day (from the popPK convention: "K21 is a first-order rate constant. The paper reports clearance in 'L per day' and half-lives in 'days', indicating the ")
- implicit units: 'Vmax (mg per day)' — the LLM proposed 'mg/day', whose dimension does not fit Q66; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alemtuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'alemtuzumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tbl2: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tbl2:row13:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl2:row9:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl2:row7:col1'] |
| C5_unit_missing_Q56 | fail | [time] | mg per day | not captured | not captured | ['tbl2:row10:col1'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | mg per day | not captured | not captured | ['tbl2:row12:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.985 L | not captured | not captured | ['tbl2:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_alemtuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Achini-Gutzwiller_2023_2` / `Achini-Gutzwiller_2023_2::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 04:01 UTC</sub>
