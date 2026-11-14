<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Rifabutin&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/&quot;},{&quot;label&quot;:&quot;Rawizza_2021 \u00b7 2_weeks&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifabutin_Kawuma2023_reference&quot;,&quot;label&quot;:&quot;Kawuma_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Kawuma2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Osipova2023_reference&quot;,&quot;label&quot;:&quot;Osipova_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Osipova2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Rawizza2021_2_weeks&quot;,&quot;label&quot;:&quot;Rawizza_2021_2_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Rifabutin_Rawizza2021_4_weeks&quot;,&quot;label&quot;:&quot;Rawizza_2021_4_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Rawizza2021_4_weeks.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Rawizza2021_8_weeks&quot;,&quot;label&quot;:&quot;Rawizza_2021_8_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Rawizza2021_8_weeks.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Rawizza2021_median_iqr_a&quot;,&quot;label&quot;:&quot;Rawizza_2021_median_iqr_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Rawizza2021_median_iqr_a.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Skinner1989_reference&quot;,&quot;label&quot;:&quot;Skinner_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Skinner1989_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Skinner1995_reference&quot;,&quot;label&quot;:&quot;Skinner_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Skinner1995_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Rifabutin — `Rifabutin_Rawizza2021_2_weeks`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Rifabutin" model-id="Rifabutin_Rawizza2021_2_weeks" status="extracted" stale="false" population="TB/HIV-coinfected children" measured-compound="Rifabutin" parameterization="mechanistic" topology="retention"></div>

## Citation
Rawizza HE, Oladokun R, Ejeliogu E, Oguche S, Ogunbosi BO, Agbaji O et al. Rifabutin pharmacokinetics and safety among TB/HIV-coinfected children receiving lopinavir/ritonavir-containing second-line ART. The Journal of antimicrobial chemotherapy 76(3):710–717 (2021).
  ·  DOI: [10.1093/jac/dkaa512](https://doi.org/10.1093/jac/dkaa512)

## Population and dosing

**Population:** TB/HIV-coinfected children · condition TB/HIV coinfection · age group child · n = 15.

**Dosing:** 175 mg, oral, multiple, every 24 h.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| C max (μg/mL) | Cmax | 0.38 | μg/mL |
| T max (h) | tmax | 4 | h |
| rifabutin half-life | t1/2z | 45 | h |
| clearance conversion | CL | 16.2 | L/h |
| Absorption lag time NCT01231542 studyc(h) | tlag | 0.205 | h |

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
| C max (μg/mL) | `Q32` · Cmax | 0.38 | μg/mL | 0.00038 | kg/m3 | µg/ml | space_fold (0.95) | dkaa512-T4:row4:col2, dkaa512-T4:row4:col5 |
| T max (h) | `Q56` · tmax | 4 | h | 1.44e+04 | s | h | space_fold (0.95) | dkaa512-T4:row4:col3, dkaa512-T4:row4:col6 |
| rifabutin half-life | `Q57` · t1/2z | 45 | h | 1.62e+05 | s | h | toxin_unit_relink (0.85) | Rawizza_2021:discussion_prose |
| clearance conversion | `Q22` · CL | 16.2 | L/h | 4.5e-06 | m3/s | L/h | review_gapfill (0.7) | Semere_2024:review |
| Absorption lag time NCT01231542 studyc(h) | `Q83` · tlag | 0.205 | h | 738 | s | h | review_gapfill (0.7) | Kawuma_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / rifabutin half-life (Q57)

**Interpretation flags:**
- transposed table dkaa512-T4: rows are variants (Median (IQR)a, 2 weeks, 4 weeks, 8 weeks), the parameters are the column headers (C max (μg/mL), T max (h)) — read one record per variant
- column '2 weeks' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- salvaged Q57 ('rifabutin half-life'=45) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Rifabutin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- estimate-method split: '2 weeks' is one of 4 estimates of Rawizza_2021's substance matrix (Median (IQR)a, 2 weeks, 4 weeks, 8 weeks); same population, different estimation method
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 0 linked by role; re-tagged Rifabutin→parent ×24
- molar mass: no plausible PubChem entry for '25-hydroxy-desacetyl rifabutin' ('25-hydroxy-desacetyl rifabutin') — left in mass units
- molar mass: none found for '25-hydroxy-desacetyl rifabutin' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Semere_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Kawuma_2023's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Semere_2024:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['dkaa512-T4:row4:col2', 'dkaa512-T4:row4:col5'] |
| C5_dimension_Q56 | pass | [time] |  | ['dkaa512-T4:row4:col3', 'dkaa512-T4:row4:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kawuma_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.2 | ['Semere_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.2 L/h | ['Semere_2024:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks/Rifabutin_Rawizza2021_2_weeks_modelica.zip" download>Rifabutin_Rawizza2021_2_weeks_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks/Rifabutin_Rawizza2021_2_weeks_fmi.zip" download>Rifabutin_Rawizza2021_2_weeks_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks/Rifabutin_Rawizza2021_2_weeks_matlab.zip" download>Rifabutin_Rawizza2021_2_weeks_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks/Rifabutin_Rawizza2021_2_weeks_sbml.zip" download>Rifabutin_Rawizza2021_2_weeks_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks/Rifabutin_Rawizza2021_2_weeks_cellml.zip" download>Rifabutin_Rawizza2021_2_weeks_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.847 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.000175 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1.62e+05 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Rawizza HE, Oladokun R, Ejeliogu E, Oguche S, Ogunbosi BO, Agbaji O et al. Rifabutin pharmacokinetics and safety among TB/HIV-coinfected children receiving lopinavir/ritonavir-containing second-line ART. The Journal of antimicrobial chemotherapy 76(3):710–717 (2021). [doi:10.1093/jac/dkaa512](https://doi.org/10.1093/jac/dkaa512)

**This record:** Pharmacolibrary, model `Rifabutin_Rawizza2021_2_weeks`. <https://pharmacolibrary.github.io/#/drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks>

```bibtex
@misc{pharmacolibrary_RifabutinRawizza20212weeks,
  title  = {{Pharmacolibrary model Rifabutin_Rawizza2021_2_weeks}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks},
  note   = {Parameters from doi:10.1093/jac/dkaa512},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks/Rifabutin_Rawizza2021_2_weeks_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks/Rifabutin_Rawizza2021_2_weeks_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Rifabutin_Rawizza2021_2_weeks_params.json` · controls `Rifabutin_Rawizza2021_2_weeks_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brifabutin%5D%20Rifabutin_Rawizza2021_2_weeks&body=Drug%3A%20rifabutin%0ARecord%3A%20Rifabutin_Rawizza2021_2_weeks%0APaper%3A%20Rawizza_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 08:31 UTC</sub>
