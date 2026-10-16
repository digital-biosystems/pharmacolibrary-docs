<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/&quot;},{&quot;label&quot;:&quot;Schlachter_2026 \u00b7 phase_2_modela_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atogepant — `Atogepant_Schlachter2026_phase_2_modela_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**T1/2ka  has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (t1/2ka  and Frel), so that value has no SI equivalent. Extracted — atogepant: t1/2ka 1.31 12pt, CL/F 18.2 L/h, V1/F 72.9 L, Q/F 0.771 L/h, V2 91.7 L, Q2/F 1.99 L/h, V3/F 22.3 L, tlag 0.298 h, … (+1).

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Schlachter L et al., Population Pharmacokinetics of Atogepan…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5)

<div class="pk-model-meta" hidden drug="atogepant" model-id="Atogepant_Schlachter2026_phase_2_modela_estimate" status="needs_review" stale="false" population="healthy participants and patients with episodic or chronic migraine" measured-compound="atogepant" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant [ka (/h)] | `Q95` · t1/2ka | 1.31 | 12pt | not captured | [12pt] | not captured | llm_corrected (0.6) | Tab2:row2:col2 | — | not captured |
| Apparent clearance patients [CL/F (L/h)] | `Q27` · CL/F | 18.2 | L/h | 5.0555555555555555e-06 | L/h | 17.4 | llm_confirmed (0.6) | Tab2:row3:col2 | — | not captured |
| Apparent central volume of distribution [V1/F (L)] | `Q290` · V1/F | 72.9 | L | 0.0729 | L | 86.1 | llm_confirmed (0.6) | Tab2:row6:col2 | — | not captured |
| Apparent first intercompartmental clearance [Q/F (L/h)] | `Q69` · Q/F | 0.771 | L/h | 2.1416666666666667e-07 | L/h | 1.43 | llm_corrected (0.6) | Tab2:row7:col2 | — | not captured |
| Apparent first peripheral volume of distribution [V2/F (L)] | `Q64` · V2 | 91.7 | L | 0.0917 | L | 40.5 | boundary_compartment (0.9) | Tab2:row8:col2 | — | not captured |
| Apparent second intercompartmental clearance [Q2/F (L/h)] | `Q80` · Q2/F | 1.99 | L/h | 5.527777777777778e-07 | L/h | 1.68 | llm_corrected (0.6) | Tab2:row9:col2 | — | not captured |
| Apparent second peripheral volume of distribution [V3/F (L)] | `Q78` · V3/F | 22.3 | L | 0.0223 | L | 13.0 | llm_confirmed (0.6) | Tab2:row10:col2 | — | not captured |
| Lag time [ALAG (h)] | `Q83` · tlag | 0.298 | h | 1072.8 | h | 0.276 | llm_confirmed (0.6) | Tab2:row11:col2 | — | not captured |
| Effect of solution on Frel | `Q87` · Frel | -0.547 | 12pt | not captured | [12pt] | not captured | llm_confirmed (0.6) | Tab2:row23:col2 | — | not captured |
| theta_q49_weight_power | `Q900` · theta_q49_weight_power | -0.252 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row24:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '12pt' (t1/2ka )
- unit_dimension_unknown: '12pt' (CL/F)
- dropped duplicate Q27 ('Apparent clearance healthy participants [CL/F (L/h)]', value '18.2') — already have one for this compound
- unit_dimension_unknown: '12pt' (V1/F)
- unit_dimension_unknown: '12pt' (Q/F)
- unit_dimension_unknown: '12pt' (V2)
- unit_dimension_unknown: '12pt' (Q2/F)
- unit_dimension_unknown: '12pt' (V3/F)
- unit_dimension_unknown: '12pt' (tlag)
- dropped unlinked row (NIL): 'Blood-plasma ratio' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col2'])
- dropped duplicate Q27 ('Itraconazole effect on CL/F', value '-0.691') — already have one for this compound
- dropped duplicate Q27 ('Rifampin effect on CL/F following multiple doses', value '1.10') — already have one for this compound
- dropped duplicate Q83 ('Effect of solution on ALAG', value '-0.191') — already have one for this compound
- dropped unlinked row (NIL): 'Exponential effect of dose on Frel' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- unit_dimension_unknown: '12pt' (Frel)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant [ka (/h)]' — the LLM proposed '1/h', whose dimension does not fit Q95; left unset
- implicit units: 'Apparent clearance patients [CL/F (L/h)]' → L/h (from the paper text: 'The text explicitly defines the unit in the model equation: "CL/F = ... 22.9 L/h..." and later states "CL/F = 17.4 L/h".')
- implicit units: 'Apparent central volume of distribution [V1/F (L)]' → L (from the paper text: 'The text states: "The apparent central volume of distribution (V1/F) was 86.1 L".')
- implicit units: 'Apparent first intercompartmental clearance [Q/F (L/h)]' → L/h (from the popPK convention: 'The text mentions Q/F has IIV but does not explicitly state the unit for this specific parameter in the provided excerpt')
- implicit units: 'Apparent first peripheral volume of distribution [V2/F (L)]' → L (from the popPK convention: 'The text mentions V2/F has IIV but does not explicitly state the unit. In population PK, volumes of distribution are con')
- implicit units: 'Apparent second intercompartmental clearance [Q2/F (L/h)]' → L/h (from the popPK convention: 'The text does not explicitly state the unit for Q2/F. In population PK, intercompartmental clearances are conventionally')
- implicit units: 'Apparent second peripheral volume of distribution [V3/F (L)]' → L (from the popPK convention: 'The text does not explicitly state the unit for V3/F. In population PK, volumes of distribution are conventionally expre')
- implicit units: 'Lag time [ALAG (h)]' → h (from the popPK convention: 'The text mentions "lag time absorption model" and gives a value for Tk0 (duration of zero-order absorption) as 0.908 hou')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atogepant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- bound model equation to Q40 (Fab): F = 86.1 * (BW/76.8)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'phase 2 modela / estimate' subgroup of Schlachter_2026 (paper reports 2 populations: phase 1 model / estimate, phase 2 modela / estimate)

**Extraction notes:**
- table Tab2: unspecified_interval_bound
- table Tab2: unbound_uncertainty
- table Tab2: ragged_grid
- table Tab2: unparsed_numeric_cell
- LLM selected parameter table(s) 2
- captured model equation F = 86.1 * (BW/76.8)^

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row8:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row7:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row10:col2'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row9:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row11:col2'] |
| C5_unit_missing_Q95 | fail | [time] | 12pt | not captured | not captured | ['Tab2:row2:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 18.2 L/h | not captured | not captured | ['Tab2:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 72.9 L | not captured | not captured | ['Tab2:row6:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 91.7 L | not captured | not captured | ['Tab2:row8:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_atogepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schlachter_2026` / `Schlachter_2026::phase_2_modela_estimate`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:56 UTC</sub>
