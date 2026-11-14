<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Rifabutin&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/&quot;},{&quot;label&quot;:&quot;Semere_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifabutin_Kawuma2023_reference&quot;,&quot;label&quot;:&quot;Kawuma_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Kawuma2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Osipova2023_reference&quot;,&quot;label&quot;:&quot;Osipova_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Osipova2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Rawizza2021_2_weeks&quot;,&quot;label&quot;:&quot;Rawizza_2021_2_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Rawizza2021_2_weeks.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Rawizza2021_4_weeks&quot;,&quot;label&quot;:&quot;Rawizza_2021_4_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Rawizza2021_4_weeks.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Rawizza2021_8_weeks&quot;,&quot;label&quot;:&quot;Rawizza_2021_8_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Rawizza2021_8_weeks.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Rawizza2021_median_iqr_a&quot;,&quot;label&quot;:&quot;Rawizza_2021_median_iqr_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Rawizza2021_median_iqr_a.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Skinner1989_reference&quot;,&quot;label&quot;:&quot;Skinner_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Skinner1989_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Skinner1995_reference&quot;,&quot;label&quot;:&quot;Skinner_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rifabutin/Rifabutin_Skinner1995_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Rifabutin — `Rifabutin_Semere2024_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Rifabutin" model-id="Rifabutin_Semere2024_reference" status="extracted" stale="false" population="HIV/TB co-infected children" measured-compound="Rifabutin" parameterization="apparent" topology="general_linear"></div>

## Citation
Semere Gebreyesus M, Wasmann RE, McIlleron H, Oladokun R, Okonkwo P, Wiesner L et al. Population pharmacokinetics of rifabutin among HIV/TB co-infected children on lopinavir/ritonavir-based antiretroviral therapy. Antimicrobial agents and chemotherapy 68(8):e0035424 (2024).
  ·  DOI: [10.1128/aac.00354-24](https://doi.org/10.1128/aac.00354-24)

## Population and dosing

**Population:** HIV/TB co-infected children · condition HIV/TB co-infection on antiretroviral therapy · age group child · n = 28.

**Dosing:** 2.5, 5, 15, 20 mg/kg/day, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 3 covariate effects.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Clearance conversion (AADAC pathway) (L/h)c | CLfm | 16.2 | L/h |
| Central volume of distribution, VC,P (L)c | V1 | 185 | L |
| Peripheral volume of distribution, VP,P (L)c | V2 | 232 | L |
| Intercompartmental clearance, QP (L/h)c | Q | 25.1 | L/h |
| Bioavailability, F | Fab | 1 | F |
| Absorption rate constant, Ka (1/h) | kabs | 1.27 | 1/h |
| Absorption lag time, Lag (h) | tlag | 0.544 | h |
| Clearance metabolite (L/h)c | CLm/F | 106 | L/h |
| LPV/r effect on des-rifabutin clearance (%) | CL_ratio | -76.6 | % |
| theta_q22_cyp3a4 | theta_q22_cyp3a4 | 13.6 |  |
| theta_q22_cyp3a4 | theta_q22_cyp3a4 | -100 |  |
| theta_kabs_age | theta_kabs_age | -72.3 |  |
| CL/F (L/h)b | CL/F | 1.03 | L/h |

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
| Clearance conversion (AADAC pathway) (L/h)c | `Q370` · CLfm | 16.2 | L/h | 4.5e-06 | m3/s | l/h | exact (1) | T2:row3:col1, T2:row3:col2 |
| Central volume of distribution, VC,P (L)c | `Q63` · V1 | 185 | L | 0.185 | m3 | l | boundary_compartment (0.9) | T2:row4:col1, T2:row4:col2 |
| Peripheral volume of distribution, VP,P (L)c | `Q64` · V2 | 232 | L | 0.232 | m3 | l | boundary_compartment (0.9) | T2:row5:col1, T2:row5:col2 |
| Intercompartmental clearance, QP (L/h)c | `Q30` · Q | 25.1 | L/h | 6.972e-06 | m3/s | l/h | llm_confirmed (0.6) | T2:row6:col1, T2:row6:col2 |
| Bioavailability, F | `Q40` · Fab | 1 | F |  |  |  | llm_confirmed (0.6) | T2:row7:col1, T2:row7:col4 |
| Absorption rate constant, Ka (1/h) | `Q49` · kabs | 1.27 | 1/h | 0.0003528 | 1/s | 1/h | exact (1) | T2:row8:col1, T2:row8:col2, T2:row8:col4 |
| Absorption lag time, Lag (h) | `Q83` · tlag | 0.544 | h | 1958 | s | h | llm_confirmed (0.6) | T2:row9:col1, T2:row9:col2, T2:row9:col4 |
| Clearance metabolite (L/h)c | `Q351` · CLm/F | 106 | L/h | 2.944e-05 | m3/s | l/h | llm_corrected (0.6) | T2:row11:col1, T2:row11:col2, T2:row11:col4 |
| LPV/r effect on des-rifabutin clearance (%) | `Q31` · CL_ratio | -76.6 | % | -0.766 |  | % | llm_corrected (0.6) | T2:row18:col1, T2:row18:col2 |
| theta_q22_cyp3a4 | `Q900` · theta_q22_cyp3a4 | 13.6 |  |  |  |  |  | T2:row2:col1, T2:row2:col2, T2:row2:col4 |
| theta_q22_cyp3a4 | `Q900` · theta_q22_cyp3a4 | -100 |  |  |  |  |  | T2:row17:col1 |
| theta_kabs_age | `Q900` · theta_kabs_age | -72.3 |  |  |  |  |  | T2:row20:col1, T2:row20:col2 |
| CL/F (L/h)b | `Q27` · CL/F | 1.03 | L/h | 2.861e-07 | m3/s | L/h | review_gapfill (0.7) | Kawuma_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'typical value(95% ci)a' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- dropped duplicate Q63 ('Central volume of distribution, VC,M (L)c', value '43.0') — already have one for this compound
- dropped duplicate Q64 ('Peripheral volume of distribution, VP,M (L)c', value '241') — already have one for this compound
- dropped duplicate Q30 ('Intercompartmental clearance, QM (L/h)c', value '44.4') — already have one for this compound
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Rifabutin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- pharmacogenetic covariate 'theta_q22_cyp3a4' (cyp3a4) — PGx domain
- status held at "Needs review" — not promoted
- row roles: 10 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 26 linked by role; re-tagged parent→25-O-desacetyl rifabutin (des-rifabutin) ×8
- gap-filled Q27 (CL/F) from Kawuma_2023's review values (primary lacked it)

**Extraction notes:**
- table T2: ragged_grid
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Kawuma_2023:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row6:col1', 'T2:row6:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['T2:row11:col1', 'T2:row11:col2', 'T2:row11:col4'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['T2:row3:col1', 'T2:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row4:col1', 'T2:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row5:col1', 'T2:row5:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.03 L/h | ['Kawuma_2023:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 185 L | ['T2:row4:col1', 'T2:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 232 L | ['T2:row5:col1', 'T2:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Semere2024_reference/Rifabutin_Semere2024_reference_modelica.zip" download>Rifabutin_Semere2024_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Semere2024_reference/Rifabutin_Semere2024_reference_matlab.zip" download>Rifabutin_Semere2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Semere2024_reference/Rifabutin_Semere2024_reference_matlab_simbio.zip" download>Rifabutin_Semere2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Semere2024_reference/Rifabutin_Semere2024_reference_sbml.zip" download>Rifabutin_Semere2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_rifabutin/Rifabutin_Semere2024_reference/Rifabutin_Semere2024_reference_cellml.zip" download>Rifabutin_Semere2024_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Semere Gebreyesus M, Wasmann RE, McIlleron H, Oladokun R, Okonkwo P, Wiesner L et al. Population pharmacokinetics of rifabutin among HIV/TB co-infected children on lopinavir/ritonavir-based antiretroviral therapy. Antimicrobial agents and chemotherapy 68(8):e0035424 (2024). [doi:10.1128/aac.00354-24](https://doi.org/10.1128/aac.00354-24)

**This record:** Pharmacolibrary, model `Rifabutin_Semere2024_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_rifabutin/Rifabutin_Semere2024_reference>

```bibtex
@misc{pharmacolibrary_RifabutinSemere2024reference,
  title  = {{Pharmacolibrary model Rifabutin_Semere2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_rifabutin/Rifabutin_Semere2024_reference},
  note   = {Parameters from doi:10.1128/aac.00354-24},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brifabutin%5D%20Rifabutin_Semere2024_reference&body=Drug%3A%20rifabutin%0ARecord%3A%20Rifabutin_Semere2024_reference%0APaper%3A%20Semere_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_rifabutin/Rifabutin_Semere2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 08:31 UTC</sub>
