<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Papathanasiou_2025 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BelantamabMafodotin_FerronBrady2021_reference&quot;,&quot;label&quot;:&quot;Ferron-Brady_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/BelantamabMafodotin_FerronBrady2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belantamab mafodotin — `BelantamabMafodotin_Papathanasiou2025_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V2 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is belantamab mafodotin's own; they describe belantamab mafodotin ADC. Extracted — belantamab mafodotin ADC: V 4.21 L, Q 0.711 L/day, V2 30.6.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `belantamab mafodotin`, measured `belantamab mafodotin ADC`.

## Citation
Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1)

<div class="pk-model-meta" hidden drug="belantamab mafodotin" model-id="BelantamabMafodotin_Papathanasiou2025_estimate" status="needs_review" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="belantamab mafodotin ADC" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ADC Vc (L) | `Q61` · V | 4.21 | L | 0.00421 | [l] | 0.813 | llm_corrected (0.6) | Papathanasiou_2025_table_p8_1:row2:col1 | — | not captured |
| Q (L/day) | `Q30` · Q | 0.711 | L/day | 8.229166666666667e-09 | [l] / [d] | 3.64 | exact (1.0) | Papathanasiou_2025_table_p8_1:row3:col1 | — | not captured |
| On ADC Vp | `Q64` · V2 | 30.6 | not captured | not captured | not captured | 8.47 | llm_confirmed (0.6) | Papathanasiou_2025_table_p8_1:row29:col1 | — | not captured |
| theta_q1_weight | `Q900` · theta_q1_weight | 0.542 | not captured | not captured | not captured | 8.71 | not captured (not captured) | Papathanasiou_2025_table_p8_1:row10:col1 | — | not captured |
| theta_q1_race | `Q900` · theta_q1_race | 0.913 | not captured | not captured | not captured | 2.55 | not captured (not captured) | Papathanasiou_2025_table_p8_1:row18:col1 | — | not captured |
| theta_cl_race | `Q900` · theta_cl_race | 0.861 | not captured | not captured | not captured | 3.53 | not captured (not captured) | Papathanasiou_2025_table_p8_1:row19:col1 | — | not captured |
| theta_v_albumin | `Q900` · theta_v_albumin | 0.567 | not captured | not captured | not captured | 25.3 | not captured (not captured) | Papathanasiou_2025_table_p8_1:row23:col1 | — | not captured |
| CL | `Q900` · CL | 0.926 | L/day | 1.0717592592592594e-08 | not captured | 1.45 | not captured (not captured) | Papathanasiou_2025_table_p8_1:row1:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL (L/day) | Q22 | not captured | exact |
| IMAXi | Q323 | not captured | boundary |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive error variance on log scale (log(ng/mL))²' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'ADC Vp (L)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_p8_1:row4:col1'])
- dropped unlinked row (NIL): 'TI50 (days)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_p8_1:row6:col1'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Papathanasiou_2025_table_p8_1:row7:col1'])
- dropped unlinked row (NIL): 'Weight on ADC Vc and Vp (θv_WTBL)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_p8_1:row9:col1'])
- dropped unlinked row (NIL): 'sBCMA on CL (θCL_SBCMABL)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_p8_1:row13:col1'])
- unit_dimension_unknown: 'θCL_IGGBL' (CL)
- dropped duplicate Q22 ('IgG on CL (θCL_IGGBL)', value '0.170') — already have one for this compound
- dropped unlinked row (NIL): 'sBCMA on ADC Vc (θADC Vc_SBCMABL)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_p8_1:row17:col1'])
- dropped PD-category row 'Combination therapy on Imax (θIMAX_COMBO)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Papathanasiou_2025_table_p8_1:row20:col1'])
- dropped PD-category row 'IgG on Imax (θIMAX_IGGIBL)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Papathanasiou_2025_table_p8_1:row21:col1'])
- dropped PD-category row 'sBCMA on Imax (θIMAX_SBCMABL)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Papathanasiou_2025_table_p8_1:row22:col1'])
- dropped duplicate Q22 ('On CL', value '26.1') — already have one for this compound
- dropped duplicate Q61 ('On ADC Vc', value '20.0') — already have one for this compound
- dropped duplicate Q30 ('On Q', value '19.0') — already have one for this compound
- dropped PD-category row 'On Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Papathanasiou_2025_table_p8_1:row30:col1'])
- dropped unlinked row (NIL): 'On TI50' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_p8_1:row31:col1'])
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belantamab mafodotin ADC
- bound model equation to Q22 (CL): CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- model equation 'Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)' not bound — neither LHS nor base term 'θQ' linked to an ontology parameter
- bound model equation to Q323 (Imax): IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- model equation 'TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)' not bound — neither LHS nor base term 'θTI50' linked to an ontology parameter
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL (L/day)'; equation kept verbatim
- Q323 (Imax) is equation-defined: value moved to equation-variable 'IMAXi'; equation kept verbatim
- population split: 'estimate' subgroup of Papathanasiou_2025 (paper reports 2 populations: cys-mcmmaf final model, estimate)
- molar mass: no plausible PubChem entry for 'belantamab mafodotin ADC' ('belantamab mafodotin') — left in mass units
- molar mass: none found for 'belantamab_mafodotin' — its concentrations stay mass-only
- molar mass: none found for 'belantamab mafodotin ADC' — its concentrations stay mass-only

**Extraction notes:**
- table Papathanasiou_2025_table_p8_1: unbound_uncertainty
- table Papathanasiou_2025_table_p8_1: conflicting_units
- table Papathanasiou_2025_table_p8_1: unparsed_numeric_cell
- table Papathanasiou_2025_table_3: unbound_uncertainty
- table Papathanasiou_2025_table_3: unspecified_interval_bound
- table Papathanasiou_2025_table_3: units_need_context
- table Papathanasiou_2025_table_3: ragged_grid
- table Papathanasiou_2025_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (67 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3
- captured model equation CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- captured model equation Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)
- captured model equation IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- captured model equation TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Papathanasiou_2025_table_p8_1:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Papathanasiou_2025_table_p8_1:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Papathanasiou_2025_table_p8_1:row2:col1'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['Papathanasiou_2025_table_p8_1:row29:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.21 L | not captured | not captured | ['Papathanasiou_2025_table_p8_1:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belantamab_mafodotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Papathanasiou_2025` / `Papathanasiou_2025::estimate`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:13 UTC</sub>
