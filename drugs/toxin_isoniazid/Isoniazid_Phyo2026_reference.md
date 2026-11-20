<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Isoniazid&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/&quot;},{&quot;label&quot;:&quot;Phyo_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_Courtney2026_reference&quot;,&quot;label&quot;:&quot;Courtney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Courtney2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_non_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_slow.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Amaeze2023_reference&quot;,&quot;label&quot;:&quot;Amaeze_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Amaeze2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoniazid — `Isoniazid_Phyo2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Isoniazid" model-id="Isoniazid_Phyo2026_reference" status="needs_review" stale="false" population="adults with sputum-positive pulmonary TB, either confirmed by microscopy or GeneXpert, including 24 with HIV co-infection and 37 without" measured-compound="Isoniazid" parameterization="mechanistic" topology="retention"></div>

## Citation
Phyo AP, Hoglund RM, Saito M, Thi SS, Swe LL, Chotsiri P et al. Altered Pharmacokinetics and Delayed Sputum Conversion in Tuberculosis Patients Co-Infected With HIV. Tropical medicine & international health : TM & IH 31(9):1261–1272 (2026).
  ·  DOI: [10.1111/tmi.70165](https://doi.org/10.1111/tmi.70165)

## Population and dosing

**Population:** adults with sputum-positive pulmonary TB, either confirmed by microscopy or GeneXpert, including 24 with HIV co-infection and 37 without · condition pulmonary tuberculosis · age group adult · n = 61.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| log_RIF AUC₀–₂₄ D1 | D1 | 0.35 |  |
| log_INH AUC₀–₂₄ D1 | AUC | 3.96 |  |
| MDR TB$^{a}$ | t1/2z | 1.00 |  |
| typical CL | CL | 8.82 | L/h |
| typical V | V | 56.8 | L |
| Ka reported among pediatric TB patients | kabs | 4.23 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| log_RIF AUC₀–₂₄ D1 | `Q310` · D1 | 0.35 |  |  |  |  | llm_confirmed (0.6) | Phyo_2026_table_5:row4:col1, Phyo_2026_table_5:row4:col2, Phyo_2026_table_5:row4:col3, Phyo_2026_table_5:row4:col4 |
| log_INH AUC₀–₂₄ D1 | `Q88` · AUC | 3.96 |  |  |  |  | llm_corrected (0.6) | Phyo_2026_table_5:row5:col1, Phyo_2026_table_5:row5:col2, Phyo_2026_table_5:row5:col3, Phyo_2026_table_5:row5:col4 |
| MDR TB$^{a}$ | `Q57` · t1/2z | 1.00 |  |  |  |  | toxin_unit_relink (0.85) | Phyo_2026_table_2:row10:col3 |
| typical CL | `Q22` · CL | 8.82 | L/h | 2.45e-06 | m3/s | L/h | review_gapfill (0.7) | Abdelgawad_2022:review |
| typical V | `Q61` · V | 56.8 | L | 0.0568 | m3 | L | review_gapfill (0.7) | Abdelgawad_2022:review |
| Ka reported among pediatric TB patients | `Q49` · kabs | 4.23 | h−1 | 0.001175 | 1/s | 1/h | review_gapfill (0.7) | Thomas_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'HIV-positive'; source reconciliation required
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Age (per 10 years)'; source reconciliation required
- table representations disagree for 'BMI'; source reconciliation required
- table representations disagree for 'Male'; source reconciliation required
- table representations disagree for 'log_RIF AUC₀–₂₄ D1'; source reconciliation required
- table representations disagree for 'log_INH AUC₀–₂₄ D1'; source reconciliation required
- table representations disagree for 'log_PZA AUC₀–₂₄ D1'; source reconciliation required
- table representations disagree for 'log_ETB AUC₀–₂₄ D1'; source reconciliation required
- table representations disagree for 'Smoking'; source reconciliation required
- table representations disagree for 'CRP baseline'; source reconciliation required
- table representations disagree for 'Bacillary densityᶜ'; source reconciliation required
- dropped unlinked row (NIL): 'HIV-positive' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_5:row0:col1', 'Phyo_2026_table_5:row0:col2', 'Phyo_2026_table_5:row0:col3'])
- dropped unlinked row (NIL): 'Age (per 10 years)' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_5:row1:col1', 'Phyo_2026_table_5:row1:col2', 'Phyo_2026_table_5:row1:col3', 'Phyo_2026_table_5:row1:col4'])
- dropped unlinked row (NIL): 'BMI' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_5:row2:col1', 'Phyo_2026_table_5:row2:col2', 'Phyo_2026_table_5:row2:col3', 'Phyo_2026_table_5:row2:col4'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_5:row3:col1', 'Phyo_2026_table_5:row3:col2', 'Phyo_2026_table_5:row3:col3', 'Phyo_2026_table_5:row3:col4'])
- dropped unlinked row (NIL): 'log_PZA AUC₀–₂₄ D1' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_5:row6:col1', 'Phyo_2026_table_5:row6:col2', 'Phyo_2026_table_5:row6:col3', 'Phyo_2026_table_5:row6:col4'])
- dropped duplicate Q310 ('log_ETB AUC₀–₂₄ D1', value '0.47') — already have one for this compound
- dropped unlinked row (NIL): 'Smoking' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_5:row8:col1', 'Phyo_2026_table_5:row8:col2', 'Phyo_2026_table_5:row8:col3', 'Phyo_2026_table_5:row8:col4'])
- dropped unlinked row (NIL): 'CRP baseline' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_5:row9:col1', 'Phyo_2026_table_5:row9:col2', 'Phyo_2026_table_5:row9:col3'])
- dropped unlinked row (NIL): 'Bacillary densityᶜ' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_5:row10:col1', 'Phyo_2026_table_5:row10:col3'])
- dropped unlinked row (NIL): 'Pyrazinamide' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_2:row0:col1', 'Phyo_2026_table_2:row0:col2', 'Phyo_2026_table_2:row0:col3'])
- dropped unlinked row (NIL): 'Ethambutol' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_2:row1:col1', 'Phyo_2026_table_2:row1:col2', 'Phyo_2026_table_2:row1:col3'])
- dropped unlinked row (NIL): 'Baseline bacteriological result by microscopy' — extend the ontology if this is a real PK parameter (source ['Phyo_2026_table_2:row2:col3'])
- relinked 'MDR TB$^{a}$' Q100 → Q57: a half-life by its label (the unit decides, not the label)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Isoniazid
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Abdelgawad_2022's review values (primary lacked it)
- gap-filled Q61 (V) from Abdelgawad_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Thomas_2022's review values (primary lacked it)

**Extraction notes:**
- table Phyo_2026_table_5: units_need_context
- table tmi70165-tbl-0003: representations disagree; selected evidence retained, not merged
- table Phyo_2026_table_2: units_need_context
- table Phyo_2026_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (10 record(s))
- LLM selected parameter table(s) 2
- toxin: the located table(s) gave no kinetic value — 6 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Abdelgawad_2022:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Thomas_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Abdelgawad_2022:review'] |
| C5_unit_missing_Q310 | fail | [time] |  | ['Phyo_2026_table_5:row4:col1', 'Phyo_2026_table_5:row4:col2', 'Phyo_2026_table_5:row4:col3', 'Phyo_2026_table_5:row4:col4'] |
| C5_unit_missing_Q57 | fail | [time] |  | ['Phyo_2026_table_2:row10:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['Phyo_2026_table_5:row5:col1', 'Phyo_2026_table_5:row5:col2', 'Phyo_2026_table_5:row5:col3', 'Phyo_2026_table_5:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.82 | ['Abdelgawad_2022:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.82 L/h | ['Abdelgawad_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 56.8 L | ['Abdelgawad_2022:review'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Phyo2026_reference/Isoniazid_Phyo2026_reference_matlab.zip" download>Isoniazid_Phyo2026_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Phyo2026_reference/Isoniazid_Phyo2026_reference_sbml.zip" download>Isoniazid_Phyo2026_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Phyo2026_reference/Isoniazid_Phyo2026_reference_cellml.zip" download>Isoniazid_Phyo2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Phyo AP, Hoglund RM, Saito M, Thi SS, Swe LL, Chotsiri P et al. Altered Pharmacokinetics and Delayed Sputum Conversion in Tuberculosis Patients Co-Infected With HIV. Tropical medicine & international health : TM & IH 31(9):1261–1272 (2026). [doi:10.1111/tmi.70165](https://doi.org/10.1111/tmi.70165)

**This record:** Pharmacolibrary, model `Isoniazid_Phyo2026_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_isoniazid/Isoniazid_Phyo2026_reference>

```bibtex
@misc{pharmacolibrary_IsoniazidPhyo2026reference,
  title  = {{Pharmacolibrary model Isoniazid_Phyo2026_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_isoniazid/Isoniazid_Phyo2026_reference},
  note   = {Parameters from doi:10.1111/tmi.70165},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoniazid%5D%20Isoniazid_Phyo2026_reference&body=Drug%3A%20isoniazid%0ARecord%3A%20Isoniazid_Phyo2026_reference%0APaper%3A%20Phyo_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoniazid/Isoniazid_Phyo2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:04 UTC</sub>
