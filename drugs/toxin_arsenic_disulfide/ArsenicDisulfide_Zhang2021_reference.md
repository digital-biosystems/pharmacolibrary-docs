<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Arsenic disulfide&quot;,&quot;href&quot;:&quot;drugs/toxin_arsenic_disulfide/&quot;},{&quot;label&quot;:&quot;Zhang_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Arsenic disulfide — `ArsenicDisulfide_Zhang2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Arsenic disulfide lacked clearance, volume of distribution, and lag time values, forcing placeholder defaults that quarantined the model.

<div class="pk-model-meta" hidden drug="Arsenic disulfide" model-id="ArsenicDisulfide_Zhang2021_reference" status="model_quarantined" stale="false" population="pediatric patients with acute promyelocytic leukemia (APL)" measured-compound="Arsenic" parameterization="apparent" topology="1C"></div>

## Citation
Zhang L, Yang XM, Chen J, Hu L, Yang F, Zhou Y et al. Population Pharmacokinetics and Safety of Oral Tetra-Arsenic Tetra-Sulfide Formula in Pediatric Acute Promyelocytic Leukemia. Drug design, development and therapy 15:1633-1640 (2021).
  ·  DOI: [10.2147/dddt.s305244](https://doi.org/10.2147/dddt.s305244)

## Population and dosing

**Population:** pediatric patients with acute promyelocytic leukemia (APL) · condition acute promyelocytic leukemia (APL) · age group child · n = 12.

**Dosing:** 4200 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed Tetra-arsenic tetra-sulfide (AS4S4) formula, measured Arsenic.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| θ1 | kabs | 0.013 | 1/h | 17.3 | 0.353 (48.2% RSE) |
| θ2 | CL/F | 1380 | L/h | 7.0 |  |
| V/F =θ3×EXP(η3) | V/F | 7080 | L | 44.6 |  |
| θ4 | allometric_exponent | 0.629 |  | 23.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Arsenic disulfide lacked clearance, volume of distribution, and lag time values, forcing placeholder defaults that quarantined the model.**

All extracted parameters applied to Tetra-arsenic tetra-sulfide (AS4S4), not arsenic disulfide. Because no explicit values existed for arsenic disulfide's clearance, volume, or lag time, the model relied on library placeholders rather than fitted estimates. The model builder also assumed full bioavailability. Extracted — Tetra-arsenic tetra-sulfide (AS4S4): kabs 0.013 1/h, CL/F 1.38e+03 L/h, V/F 7.08e+03 L, allometric_exponent 0.629.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 | `Q49` · kabs | 0.013 | 1/h | 3.611e-06 | 1/s | 1/h | 17.3 | llm_confirmed (0.6) | t0002:row4:col1 | 0.353 (48.2% RSE) |
| θ2 | `Q27` · CL/F | 1380 | L/h | 0.0003833 | m3/s | L/h | 7.0 | llm_confirmed (0.6) | t0002:row7:col1 |  |
| V/F =θ3×EXP(η3) | `Q76` · V/F | 7080 | L | 7.08 | m3 | l | 44.6 | llm_confirmed (0.6) | t0002:row9:col1 |  |
| θ4 | `Q319` · allometric_exponent | 0.629 |  | 0.629 |  |  | 23.2 | llm_corrected (0.6) | t0002:row12:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Ka' routed out of structural estimates ('Inter-individual variability (%)')
- table section iiv: 'CL' routed out of structural estimates ('Inter-individual variability (%)')
- table section iiv: 'V' routed out of structural estimates ('Inter-individual variability (%)')
- table section iiv: 'Residual variability (%)' routed out of structural estimates ('Inter-individual variability (%)')
- implicit units: 'θ1' → 1/h (from the popPK convention: "The paper defines θ1 as 'Absorption rate constant' (Ka) in Table 2 notes but does not specify the time unit. In populati")
- implicit units: 'θ2' → L/h (from the popPK convention: "The paper defines θ2 as 'oral clearance' (CL/F) in Table 2 notes but does not specify the volume/time unit. In populatio")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Arsenic
- bound model equation to Q22 (CL): CL = (CW/27)^θ
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- molar mass: none of 1 PubChem candidate(s) is 'Arsenic' (LLM) — left in mass units
- molar mass: none found for 'Arsenic' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Arsenic', not arsenic_disulfide — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2
- captured model equation CL = (CW/27)^θ

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['t0002:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['t0002:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['t0002:row9:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.38e+03 L/h | ['t0002:row7:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.08e+03 L | ['t0002:row9:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barsenic_disulfide%5D%20ArsenicDisulfide_Zhang2021_reference&body=Drug%3A%20arsenic_disulfide%0ARecord%3A%20ArsenicDisulfide_Zhang2021_reference%0APaper%3A%20Zhang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_arsenic_disulfide/ArsenicDisulfide_Zhang2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 05:37 UTC</sub>
