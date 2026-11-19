<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Naphthalene&quot;,&quot;href&quot;:&quot;drugs/toxin_naphthalene/&quot;},{&quot;label&quot;:&quot;Kim_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Naphthalene_Lang2024_reference&quot;,&quot;label&quot;:&quot;Lang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_naphthalene/Naphthalene_Lang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Naphthalene_Choi2023_reference&quot;,&quot;label&quot;:&quot;Choi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_naphthalene/Naphthalene_Choi2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Naphthalene — `Naphthalene_Kim2007_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="Naphthalene" model-id="Naphthalene_Kim2007_reference" status="needs_review" stale="false" population="U.S. Air Force personnel / study volunteers" measured-compound="Naphthalene" parameterization="mechanistic" topology="1C"></div>

## Citation
Kim D, Andersen ME, Chao YC, Egeghy PP, Rappaport SM, Nylander-French LA. PBTK modeling demonstrates contribution of dermal and inhalation exposure components to end-exhaled breath concentrations of naphthalene. Environmental health perspectives 115(6):894–901 (2007).
  ·  DOI: [10.1289/ehp.9778](https://doi.org/10.1289/ehp.9778)

## Population and dosing

**Population:** U.S. Air Force personnel / study volunteers · condition occupational exposure · age group adult · n = 10.

**Dosed compound ≠ measured compound:** dosed JP-8 (Jet Propulsion Fuel 8), measured Naphthalene.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Blooda | V | 4.5 | L |
| Cardiac output | Qb | 15 | L/min |
| To other tissues | Q | 311.0 | L/hr |
| Blood flow to liver | QH | 75.3 | L/hr |
| Blood:air | blood_air_partition | 10.3 | — |
| Fat:blood | Kp | 25.6 | — |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (blood_air_partition and Kp), so that value has no SI equivalent. Extracted — naphthalene: V 4.5 L, Qb 15 L/min, Q 311 L/hr, QH 75.3 L/hr, blood_air_partition 10.3 —, Kp 25.6 —.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Blooda | `Q61` · V | 4.5 | L | 0.0045 | m3 | l | llm (0.6) | t1-ehp0115-000894:row5:col3, t1-ehp0115-000894:row5:col4 |
| Cardiac output | `Q54` · Qb | 15 | L/min | 0.00025 | m3/s | L/h | llm (0.6) | t1-ehp0115-000894:row11:col3 |
| To other tissues | `Q30` · Q | 311.0 | L/hr | 8.639e-05 | m3/s | l/h | llm (0.6) | t1-ehp0115-000894:row15:col3 |
| Blood flow to liver | `Q369` · QH | 75.3 | L/hr | 2.092e-05 | m3/s | l/h | llm_corrected (0.6) | t1-ehp0115-000894:row18:col3 |
| Blood:air | `Q411` · blood_air_partition | 10.3 | — |  |  | - | llm (0.6) | t1-ehp0115-000894:row20:col3 |
| Fat:blood | `Q410` · Kp | 25.6 | — |  |  | - | llm (0.6) | t1-ehp0115-000894:row23:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Body weight'; source reconciliation required
- table representations disagree for 'Height'; source reconciliation required
- table representations disagree for 'Body mass index'; source reconciliation required
- column 'notes and references' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Blooda'; source reconciliation required
- table representations disagree for 'Fatc'; source reconciliation required
- table representations disagree for 'Other tissue'; source reconciliation required
- table representations disagree for 'Pulmonary ventilation rate'; source reconciliation required
- table representations disagree for 'Cardiac output'; source reconciliation required
- table representations disagree for 'To fat'; source reconciliation required
- table representations disagree for 'To other tissues'; source reconciliation required
- table representations disagree for 'Ratio of Vmax:Km'; source reconciliation required
- table representations disagree for 'Blood flow to liver'; source reconciliation required
- table representations disagree for 'Blood:air'; source reconciliation required
- table representations disagree for 'Stratum corneum:viable epidermis'; source reconciliation required
- table representations disagree for 'VE:blood'; source reconciliation required
- table representations disagree for 'Fat:blood'; source reconciliation required
- table representations disagree for 'Other tissue:blood'; source reconciliation required
- table representations disagree for 'Area of exposure'; source reconciliation required
- table representations disagree for 'Thickness of the stratum corneum'; source reconciliation required
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row1:col3'])
- dropped unlinked row (NIL): 'Height' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row2:col3'])
- dropped unlinked row (NIL): 'Body mass index' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row3:col3', 't1-ehp0115-000894:row3:col4'])
- dropped unlinked row (NIL): 'Fatc' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row8:col3', 't1-ehp0115-000894:row8:col4'])
- dropped unlinked row (NIL): 'Other tissue' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row9:col3'])
- dropped unlinked row (NIL): 'Pulmonary ventilation rate' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row10:col3'])
- unit_dimension_unknown: 'L/hr/BW0.75' (Qb)
- dropped unlinked row (NIL): 'To fat' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row14:col3'])
- dropped unlinked row (NIL): 'Ratio of Vmax:Km' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row17:col3'])
- unit_dimension_unknown: '—' (blood_air_partition)
- dropped unlinked row (NIL): 'Stratum corneum:viable epidermis' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row21:col3'])
- dropped unlinked row (NIL): 'VE:blood' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row22:col3'])
- unit_dimension_unknown: '—' (Kp)
- dropped duplicate Q410 ('Other tissue:blood', value '5.2') — already have one for this compound
- dropped unlinked row (NIL): 'Area of exposure' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row26:col3'])
- dropped unlinked row (NIL): 'Thickness of the stratum corneum' — extend the ontology if this is a real PK parameter (source ['t1-ehp0115-000894:row27:col3'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['t1-ehp0115-000894:footnote']); the table cell was unparseable — needs review
- implicit units: 'Cardiac output' → L/min (from the popPK convention: 'The value 15 is consistent with human cardiac output in L/min (normal range ~4-8 L/min, potentially higher under stress ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Naphthalene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table t1-ehp0115-000894: ambiguous_numeric_format
- table t1-ehp0115-000894: unparsed_numeric_cell
- table t1-ehp0115-000894: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t1-ehp0115-000894:row15:col3'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] |  | ['t1-ehp0115-000894:row18:col3'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['t1-ehp0115-000894:row11:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['t1-ehp0115-000894:row5:col3', 't1-ehp0115-000894:row5:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.5 L | ['t1-ehp0115-000894:row5:col3', 't1-ehp0115-000894:row5:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnaphthalene%5D%20Naphthalene_Kim2007_reference&body=Drug%3A%20naphthalene%0ARecord%3A%20Naphthalene_Kim2007_reference%0APaper%3A%20Kim_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_naphthalene/Naphthalene_Kim2007_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 21:57 UTC</sub>
