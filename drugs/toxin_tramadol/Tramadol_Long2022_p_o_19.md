<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tramadol&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/&quot;},{&quot;label&quot;:&quot;Long_2022 \u00b7 p_o_19&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bressolle2009_reference&quot;,&quot;label&quot;:&quot;Bressolle_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Bressolle2009_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Nordmeier2021_tramadol_estimate&quot;,&quot;label&quot;:&quot;Nordmeier_2021_tramadol_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tramadol — `Tramadol_Long2022_p_o_19`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Tramadol" model-id="Tramadol_Long2022_p_o_19" status="extracted" stale="false" population="healthy adults" measured-compound="Tramadol" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Long T, Cristofoletti R, Cicali B, Michaud V, Dow P, Turgeon J et al. Physiologically Based Pharmacokinetic Modeling to Assess the Impact of CYP2D6-Mediated Drug-Drug Interactions on Tramadol and O-Desmethyltramadol Exposures via Allosteric and Competitive Inhibition. Journal of clinical pharmacology 62(1):76–86 (2022).
  ·  DOI: [10.1002/jcph.1951](https://doi.org/10.1002/jcph.1951)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 100 mg, oral, multiple, every 6 h.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Total CL (ml/min/kg) | CL | 11.4 | ml/min/kg |
| Vd (l/kg) | V | 10.0 | l/kg |
| T1/2 (h) | t1/2z | 4.0 | h |
| AUC (mg/L*h) | AUC | 3.35 | mg/L*h |
| Cmax (μg/mL) | Cmax | 3.5 | μg/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Total CL (ml/min/kg) | `Q22` · CL | 11.4 | ml/min/kg | 1.33e-05 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Long_2022_table_S5:row2:col1 |
| Vd (l/kg) | `Q61` · V | 10.0 | l/kg | 0.7 | m3 | l/kg | exact (1) | Long_2022_table_S5:row2:col2 |
| T1/2 (h) | `Q57` · t1/2z | 4.0 | h | 1.44e+04 | s | h | toxin_unit_relink (0.85) | Long_2022_table_S5:row2:col3 |
| AUC (mg/L*h) | `Q88` · AUC | 3.35 | mg/L*h | 12.06 | kg*s/m3 | mg/(h·l) | exact (1) | Long_2022_table_S5:row2:col4 |
| Cmax (μg/mL) | `Q32` · Cmax | 3.5 | μg/mL | 0.0035 | kg/m3 | µg/ml | exact (1) | Long_2022_table_S5:row2:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'p.o.[19]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- relinked 'T1/2 (h)' Q47 → Q57: a half-life by its label (the unit decides, not the label)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Tramadol
- topology: 2 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- population split: 'p.o.[19]' subgroup of Long_2022 (paper reports 6 populations: i.v. [18], i.v.[19], p.o. [7], p.o.[19], specific intestinal permeability, value)
- row roles: 3 per-group rows of Tramadol formation_clearance but 0 reference group(s) — kept as printed
- row roles: 5 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=pbpk; 26/26 row label(s) assigned, 22 linked by role; re-tagged parent→O-desmethyltramadol ×14, parent→Quinidine ×1, parent→Metoprolol ×20
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table jcph1951-tbl-0001: unparsed_numeric_cell
- table jcph1951-tbl-0001: representations disagree; selected evidence retained, not merged
- companion parameter table S1 transcribed (3 record(s))
- table Long_2022_table_S4: missing_label
- table Long_2022_table_S4: ragged_grid
- transposed table Long_2022_table_S4: logical view retains original source coordinates
- companion parameter table S4 transcribed (10 record(s))
- table Long_2022_table_S5: missing_label
- table Long_2022_table_S5: ragged_grid
- transposed table Long_2022_table_S5: logical view retains original source coordinates
- companion parameter table S5 transcribed (10 record(s))
- LLM selected parameter table(s) 1, S1, S4, S5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Long_2022_table_S5:row2:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Long_2022_table_S5:row2:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['Long_2022_table_S5:row2:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Long_2022_table_S5:row2:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Long_2022_table_S5:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.4 | ['Long_2022_table_S5:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 47.9 L/h | ['Long_2022_table_S5:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 700 L | ['Long_2022_table_S5:row2:col2'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_tramadol/Tramadol_Long2022_p_o_19/Tramadol_Long2022_p_o_19_matlab.zip" download>Tramadol_Long2022_p_o_19_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_tramadol/Tramadol_Long2022_p_o_19/Tramadol_Long2022_p_o_19_matlab_simbio.zip" download>Tramadol_Long2022_p_o_19_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_tramadol/Tramadol_Long2022_p_o_19/Tramadol_Long2022_p_o_19_sbml.zip" download>Tramadol_Long2022_p_o_19_sbml.zip</a> <span class="pk-size">(2.3 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_tramadol/Tramadol_Long2022_p_o_19/Tramadol_Long2022_p_o_19_cellml.zip" download>Tramadol_Long2022_p_o_19_cellml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Long T, Cristofoletti R, Cicali B, Michaud V, Dow P, Turgeon J et al. Physiologically Based Pharmacokinetic Modeling to Assess the Impact of CYP2D6-Mediated Drug-Drug Interactions on Tramadol and O-Desmethyltramadol Exposures via Allosteric and Competitive Inhibition. Journal of clinical pharmacology 62(1):76–86 (2022). [doi:10.1002/jcph.1951](https://doi.org/10.1002/jcph.1951)

**This record:** Pharmacolibrary, model `Tramadol_Long2022_p_o_19`. <https://pharmacolibrary.github.io/#/drugs/toxin_tramadol/Tramadol_Long2022_p_o_19>

```bibtex
@misc{pharmacolibrary_TramadolLong2022po19,
  title  = {{Pharmacolibrary model Tramadol_Long2022_p_o_19}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_tramadol/Tramadol_Long2022_p_o_19},
  note   = {Parameters from doi:10.1002/jcph.1951},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Long2022_p_o_19&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Long2022_p_o_19%0APaper%3A%20Long_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tramadol/Tramadol_Long2022_p_o_19%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 04:52 UTC</sub>
