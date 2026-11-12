<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;fosfomycin&quot;,&quot;href&quot;:&quot;drugs/drug_fosfomycin/&quot;},{&quot;label&quot;:&quot;Isla_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fosfomycin — `Fosfomycin_Isla2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> T1/2ka  has no unit.

<div class="pk-model-meta" hidden drug="fosfomycin" model-id="Fosfomycin_Isla2024_reference" status="needs_review" stale="false" population="healthy women" measured-compound="fosfomycin" parameterization="apparent" topology="1C"></div>

## Citation
Isla A, Alarcia-Lacalle A, Solinís MÁ, Del Pozo-Rodríguez A, Abajo Z, Cabero M et al. Population pharmacokinetics of oral fosfomycin calcium in healthy women. The Journal of antimicrobial chemotherapy 79(11):2837–2845 (2024).
  ·  DOI: [10.1093/jac/dkae295](https://doi.org/10.1093/jac/dkae295)

## Population and dosing

**Population:** healthy women · age group adult · n = condition.

**Dosing:** 500, 1000 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed fosfomycin calcium, measured fosfomycin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) = θCL*e(θCLCR*(CLCR-108)) | CL/F | 23.7 | L/h | 5 | 15.7 (27% RSE) |
| V1/F (L) = θV1*(BW/64) | V/F | 24.4 | L | 14 | 29.4 (47% RSE) |
| Q/F (L/h) = θQ | Q/F | 4.04 | L/h | 24 |  |
| Vss/F =(V1*(1 + θV2)) | Vss | 4.94 | L | 38 |  |
| KA (capsules) = θKA1 | kabs | 0.15 | 1/h | 10 | 32.7 (18% RSE) |
| KA (suspension) = θKA1x θKA2 | t1/2ka | 1.17 |  | 9 |  |
| TLAG (capsules) = θTLAG1 | tlag | 0.84 | h | 2 | 4.8 (34% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T1/2ka  has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — fosfomycin: CL/F 23.7 L/h, V/F 24.4 L, Q/F 4.04 L/h, Vss 4.94 L, kabs 0.15 1/h, t1/2ka 1.17, tlag 0.84 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) = θCL*e(θCLCR*(CLCR-108)) | `Q27` · CL/F | 23.7 | L/h | 6.583e-06 | m3/s | L/h | 5 | llm_confirmed (0.6) | dkae295-T2:row1:col2, dkae295-T2:row1:col3 | 15.7 (27% RSE) |
| V1/F (L) = θV1*(BW/64) | `Q76` · V/F | 24.4 | L | 0.0244 | m3 | L | 14 | llm_confirmed (0.6) | dkae295-T2:row3:col2, dkae295-T2:row3:col3 | 29.4 (47% RSE) |
| Q/F (L/h) = θQ | `Q69` · Q/F | 4.04 | L/h | 1.122e-06 | m3/s | L/h | 24 | llm_confirmed (0.6) | dkae295-T2:row4:col2, dkae295-T2:row4:col3 |  |
| Vss/F =(V1*(1 + θV2)) | `Q65` · Vss | 4.94 | L | 0.00494 | m3 | L | 38 | llm_corrected (0.6) | dkae295-T2:row5:col2, dkae295-T2:row5:col3 |  |
| KA (capsules) = θKA1 | `Q49` · kabs | 0.15 | 1/h | 4.167e-05 | 1/s | 1/h | 10 | llm_confirmed (0.6) | dkae295-T2:row6:col2, dkae295-T2:row6:col3 | 32.7 (18% RSE) |
| KA (suspension) = θKA1x θKA2 | `Q95` · t1/2ka | 1.17 |  |  |  |  | 9 | llm_corrected (0.6) | dkae295-T2:row7:col2, dkae295-T2:row7:col3 |  |
| TLAG (capsules) = θTLAG1 | `Q83` · tlag | 0.84 | h | 3024 | s | h | 2 | llm_confirmed (0.6) | dkae295-T2:row9:col2, dkae295-T2:row9:col3 | 4.8 (34% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'BW/64' (V1/F)
- dropped duplicate Q83 ('TLAG (suspension) = θTLAG1xθTLAG2', value '0.84') — already have one for this compound
- dropped unlinked row (NIL): 'RE additive (mg/L)' — extend the ontology if this is a real PK parameter (source ['dkae295-T2:row19:col2', 'dkae295-T2:row19:col3'])
- routed 'RE proportional (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['Isla_2024_table_3:row0:col1', 'Isla_2024_table_3:row0:col2', 'Isla_2024_table_3:row0:col3'])
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['Isla_2024_table_3:row1:col1', 'Isla_2024_table_3:row1:col2', 'Isla_2024_table_3:row1:col3'])
- implicit units: 'CL/F (L/h) = θCL*e(θCLCR*(CLCR-108))' → L/h (from the paper text: 'According to the model, the typical value for V1/F, inter-compartmental clearance (Q/F) and steady-state volume of distr')
- implicit units: 'V1/F (L) = θV1*(BW/64)' → L (from the paper text: 'According to the model, the typical value for V1/F, inter-compartmental clearance (Q/F) and steady-state volume of distr')
- implicit units: 'Q/F (L/h) = θQ' → L/h (from the paper text: 'According to the model, the typical value for V1/F, inter-compartmental clearance (Q/F) and steady-state volume of distr')
- implicit units: 'Vss/F =(V1*(1 + θV2))' → L (from the paper text: 'According to the model, the typical value for V1/F, inter-compartmental clearance (Q/F) and steady-state volume of distr')
- implicit units: 'KA (capsules) = θKA1' → 1/h (from the popPK convention: 'KA is defined as the absorption rate constant. In population PK modeling, first-order rate constants are conventionally ')
- implicit units: 'KA (suspension) = θKA1x θKA2' — the LLM proposed '1/h', whose dimension does not fit Q95; left unset
- implicit units: 'TLAG (capsules) = θTLAG1' → h (from the popPK convention: 'TLAG is defined as the lag time. Lag times are time intervals and are conventionally expressed in hours (h), consistent ')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fosfomycin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V1/F (L) = θV1*(BW/64)' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell dkae295-T2:row1:col5 = '23.1 (20.5–25.6)'
- unparsed cell dkae295-T2:row3:col1 = 'θV1'
- unparsed cell dkae295-T2:row3:col5 = '24.9 (18.9–32.5)'
- unparsed cell dkae295-T2:row4:col5 = '4.40 (2.56–6.53)'
- unparsed cell dkae295-T2:row5:col1 = 'θV2'
- unparsed cell dkae295-T2:row5:col5 = '5.13 (3.14–16.21)'
- unparsed cell dkae295-T2:row6:col1 = 'θKA1'
- unparsed cell dkae295-T2:row6:col5 = '0.15 (0.12–0.19)'
- unparsed cell dkae295-T2:row7:col1 = 'θKA2'
- unparsed cell dkae295-T2:row7:col5 = '1.15 (0.98–1.42)'
- unparsed cell dkae295-T2:row9:col1 = 'θTLAG1'
- unparsed cell dkae295-T2:row9:col5 = '0.84 (0.81–0.86)'
- unparsed cell dkae295-T2:row10:col1 = 'θTLAG2'
- unparsed cell dkae295-T2:row10:col5 = '0.83 (0.73–0.91)'
- unparsed cell dkae295-T2:row13:col5 = '15.7 (6.3–22.6)'
- unparsed cell dkae295-T2:row14:col5 = '30.8 (10.5–51.6)'
- unparsed cell dkae295-T2:row15:col5 = '32.8 (21.0–44.2)'
- unparsed cell dkae295-T2:row16:col5 = '5.1 (2.1–7.5)'
- unparsed cell dkae295-T2:row17:col5 = '33.8 (27.8–39.4)'
- unparsed cell dkae295-T2:row18:col5 = '63.9 (43.2–83.3)'
- unparsed cell dkae295-T2:row19:col5 = '0.201 (0.128–0.309)'
- unparsed cell dkae295-T2:row20:col4 = '0.198 (0.159–0.229)'
- companion parameter table 3 transcribed (6 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['dkae295-T2:row1:col2', 'dkae295-T2:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['dkae295-T2:row6:col2', 'dkae295-T2:row6:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['dkae295-T2:row5:col2', 'dkae295-T2:row5:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['dkae295-T2:row4:col2', 'dkae295-T2:row4:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['dkae295-T2:row3:col2', 'dkae295-T2:row3:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['dkae295-T2:row9:col2', 'dkae295-T2:row9:col3'] |
| C5_unit_missing_Q95 | fail | [time] |  | ['dkae295-T2:row7:col2', 'dkae295-T2:row7:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.7 L/h | ['dkae295-T2:row1:col2', 'dkae295-T2:row1:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 4.94 L | ['dkae295-T2:row5:col2', 'dkae295-T2:row5:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 24.4 L | ['dkae295-T2:row3:col2', 'dkae295-T2:row3:col3'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfosfomycin%5D%20Fosfomycin_Isla2024_reference&body=Drug%3A%20fosfomycin%0ARecord%3A%20Fosfomycin_Isla2024_reference%0APaper%3A%20Isla_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fosfomycin/Fosfomycin_Isla2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 11:16 UTC</sub>
