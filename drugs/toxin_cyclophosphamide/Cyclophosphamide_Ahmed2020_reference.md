<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cyclophosphamide&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/&quot;},{&quot;label&quot;:&quot;Ahmed_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cyclophosphamide_Barnett2021_reference&quot;,&quot;label&quot;:&quot;Barnett_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Barnett2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Baudry2019_reference&quot;,&quot;label&quot;:&quot;Baudry_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Baudry2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Campagne2019_reference&quot;,&quot;label&quot;:&quot;Campagne_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Campagne2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Hong2025_reference&quot;,&quot;label&quot;:&quot;Hong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Veal2016_reference&quot;,&quot;label&quot;:&quot;Veal_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Veal2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cyclophosphamide — `Cyclophosphamide_Ahmed2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="Cyclophosphamide" model-id="Cyclophosphamide_Ahmed2020_reference" status="needs_review" stale="false" population="Ethiopian breast cancer patients" measured-compound="Cyclophosphamide" parameterization="mechanistic" topology="1C"></div>

## Citation
Ahmed JH, Makonnen E, Bisaso RK, Mukonzo JK, Fotoohi A, Aseffa A et al. Population Pharmacokinetic, Pharmacogenetic, and Pharmacodynamic Analysis of Cyclophosphamide in Ethiopian Breast Cancer Patients. Frontiers in pharmacology 11:406 (2020).
  ·  DOI: [10.3389/fphar.2020.00406](https://doi.org/10.3389/fphar.2020.00406)

## Population and dosing

**Population:** Ethiopian breast cancer patients · condition cancer chemotherapy · age group adult · n = 267.

**Dosing:** 500, 600 mg/m2, iv, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL | CL | 5.34 | L/h | 4.4 | 54.5 (8% RSE) |
| K a | kabs | 0.773 | day -1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — cyclophosphamide: CL 5.34 L/h, kabs 0.773 day -1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 5.34 | L/h | 1.483e-06 | m3/s | L/h | 4.4 | exact (1) | T3:row2:col3, T3:row4:col3 | 54.5 (8% RSE) |
| K a | `Q49` · kabs | 0.773 | day -1 | 8.947e-06 | 1/s | 1/h |  | review_gapfill (0.7) | Luo_2022:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Between subject variability (%SE)')
- table section iiv: '1.54 mg/L (24%)' routed out of structural estimates ('Between subject variability (%SE)')
- table section iiv: '0.0001 mg/mL' routed out of structural estimates ('Between subject variability (%SE)')
- table section iiv: '0.126 (0.1- 0.166)' routed out of structural estimates ('Between subject variability (%SE)')
- table section iiv: '5.48 (4.18 – 6.91)' routed out of structural estimates ('Between subject variability (%SE)')
- table section iiv: '565.7 (444.9 - 828.1)' routed out of structural estimates ('Between subject variability (%SE)')
- table representations disagree for 'CL'; source reconciliation required
- table representations disagree for '1.54 mg/L (24%)'; source reconciliation required
- table representations disagree for '0.0001 mg/mL'; source reconciliation required
- table representations disagree for '0.126 (0.1- 0.166)'; source reconciliation required
- table representations disagree for '5.48 (4.18 – 6.91)'; source reconciliation required
- table representations disagree for '565.7 (444.9 - 828.1)'; source reconciliation required
- dropped value-less row: '44.7% (21)' (captured trailing unit '21' for child rows)
- dropped value-less row: '35.9% (11)' (captured trailing unit '11' for child rows)
- dropped unlinked row (NIL): '1.54 mg/L (24%)' — extend the ontology if this is a real PK parameter (source ['T3:row7:col3'])
- dropped unlinked row (NIL): '0.0001 mg/mL' — extend the ontology if this is a real PK parameter (source ['T3:row8:col3'])
- dropped unlinked row (NIL): '0.126 (0.1- 0.166)' — extend the ontology if this is a real PK parameter (source ['T3:row10:col3'])
- dropped unlinked row (NIL): '5.48 (4.18 – 6.91)' — extend the ontology if this is a real PK parameter (source ['T3:row11:col3'])
- dropped unlinked row (NIL): '565.7 (444.9 - 828.1)' — extend the ontology if this is a real PK parameter (source ['T3:row12:col3'])
- table mostly unlinked (5/6 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- implicit units: 'CL' → L/h (from the paper text: 'population clearance and apparent volume of distribution (VD) of 5.41 L/h and 46.5 L, respectively')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cyclophosphamide
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Luo_2022's review values (primary lacked it)

**Extraction notes:**
- table T3: ragged_grid
- table T3: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | fail |  |  |  |  |  |
| C2_base_Q22 | pass | 5.34 | 5.41 | 1.013 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T3:row2:col3', 'T3:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Luo_2022:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.34 |  |  | ['T3:row2:col3', 'T3:row4:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.34 L/h |  |  | ['T3:row2:col3', 'T3:row4:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyclophosphamide%5D%20Cyclophosphamide_Ahmed2020_reference&body=Drug%3A%20cyclophosphamide%0ARecord%3A%20Cyclophosphamide_Ahmed2020_reference%0APaper%3A%20Ahmed_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cyclophosphamide/Cyclophosphamide_Ahmed2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 05:23 UTC</sub>
