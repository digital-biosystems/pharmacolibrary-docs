<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Spironolactone&quot;,&quot;href&quot;:&quot;drugs/toxin_spironolactone/&quot;},{&quot;label&quot;:&quot;Tatipalli_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spironolactone_Manson2025_reference&quot;,&quot;label&quot;:&quot;Manson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_spironolactone/Spironolactone_Manson2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Spironolactone — `Spironolactone_Tatipalli2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Spironolactone" model-id="Spironolactone_Tatipalli2021_reference" status="needs_review" stale="false" population="healthy adult male subjects of South Asian descent (Indian), extrapolated to pediatric subjects 2 to &lt;17 years" measured-compound="Spironolactone (also canrenone)" parameterization="apparent" topology="general_linear"></div>

## Citation
Tatipalli M, Siripuram VK, Long T, Shuster D, Bernstein G, Martineau P et al. Model-Informed Optimization of a Pediatric Clinical Pharmacokinetic Trial of a New Spironolactone Liquid Formulation. Pharmaceutics 13(6):849 (2021).
  ·  DOI: [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849)

## Population and dosing

**Population:** healthy adult male subjects of South Asian descent (Indian), extrapolated to pediatric subjects 2 to &lt;17 years · condition healthy · age group mixed · n = 92.

**Dosing:** 25, 100 mg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed Spironolactone, measured Spironolactone (also canrenone).

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** apparent.  
**Parameters:** 8 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| ALAG1 | tlag | 0.156 |  | 0.7 |  |
| ka(1/h) | kabs | 5.22 | 1/h | 1.1 | 0.9 (26.2% RSE) |
| CL (L/h) | CL | 629 | L/h | 3.3 | 0.166 (19.8% RSE) |
| V2 (L) | V2 | 517 | L | 2.0 | 0.118 (23.2% RSE) |
| Q (L/h) | Q | 89.9 | L/h | 2.2 | 0.08 (29.1% RSE) |
| V3 (L) | V3 | 777 | L | 1.9 |  |
| Fm | fm | 0.7 |  |  |  |
| CLM1 (L/h) | CL | 217 | L/h | 4.1 | 0.08 (25.9% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ALAG1 | `Q83` · tlag | 0.156 |  |  |  |  | 0.7 | llm_confirmed (0.6) | pharmaceutics-13-00849-t003:row2:col1 |  |
| ka(1/h) | `Q49` · kabs | 5.22 | 1/h | 0.00145 | 1/s | 1/h | 1.1 | exact (1) | pharmaceutics-13-00849-t003:row3:col1 | 0.9 (26.2% RSE) |
| CL (L/h) | `Q22` · CL | 629 | L/h | 0.0001747 | m3/s | l/h | 3.3 | exact (1) | pharmaceutics-13-00849-t003:row4:col1 | 0.166 (19.8% RSE) |
| V2 (L) | `Q64` · V2 | 517 | L | 0.517 | m3 | l | 2.0 | exact (1) | pharmaceutics-13-00849-t003:row5:col1 | 0.118 (23.2% RSE) |
| Q (L/h) | `Q30` · Q | 89.9 | L/h | 2.497e-05 | m3/s | l/h | 2.2 | exact (1) | pharmaceutics-13-00849-t003:row6:col1 | 0.08 (29.1% RSE) |
| V3 (L) | `Q77` · V3 | 777 | L | 0.777 | m3 | l | 1.9 | exact (1) | pharmaceutics-13-00849-t003:row7:col1 |  |
| Fm | `Q45` · fm | 0.7 |  | 0.7 |  |  |  | exact (1) | pharmaceutics-13-00849-t003:row8:col1 |  |
| CLM1 (L/h) | `Q22` · CL | 217 | L/h | 6.028e-05 | m3/s | l/h | 4.1 | llm_corrected (0.6) | pharmaceutics-13-00849-t003:row9:col1 | 0.08 (25.9% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- compound tags: 18 row(s) → Canrenone (m_suffix 18)
- table section iiv: 'ka (1/h)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'CL (L/h)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'V2 (L)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'CL, V2 (covariance)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'Q (L/h)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'CLM1 (L/h)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'CLM (L/h)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'V4 (L)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'Q1 (L/h)' routed out of structural estimates ('Between Subject Variability')
- table section iiv: 'V5 (L)' routed out of structural estimates ('Between Subject Variability')
- table section residual_error: 'EPS1' routed out of structural estimates ('Residual Error')
- table section residual_error: 'EPS2' routed out of structural estimates ('Residual Error')
- table representations disagree for 'ALAG1'; source reconciliation required
- table representations disagree for 'ka(1/h)'; source reconciliation required
- table representations disagree for 'CL (L/h)'; source reconciliation required
- table representations disagree for 'V2 (L)'; source reconciliation required
- table representations disagree for 'Q (L/h)'; source reconciliation required
- table representations disagree for 'V3 (L)'; source reconciliation required
- table representations disagree for 'Fm'; source reconciliation required
- table representations disagree for 'CLM1 (L/h)'; source reconciliation required
- table representations disagree for 'CLM (L/h)'; source reconciliation required
- table representations disagree for 'V4 (L)'; source reconciliation required
- table representations disagree for 'Q1 (L/h)'; source reconciliation required
- table representations disagree for 'V5 (L)'; source reconciliation required
- dropped duplicate Q351 ('CLM (L/h)', value '17') — already have one for this compound
- dropped duplicate Q64 ('V4 (L)', value '189') — already have one for this compound
- dropped duplicate Q30 ('Q1 (L/h)', value '60') — already have one for this compound
- dropped unlinked row (NIL): 'V5 (L)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00849-t003:row13:col1'])
- metabolite canrenone: Q351→Q22 — the model states fm, so its CL/V are not fm-divided
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Spironolactone (also canrenone)
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/16 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Canrenone' — its concentrations stay mass-only
- molar mass: none found for 'Spironolactone (also canrenone)' — its concentrations stay mass-only
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q83 — no SI value to build from)

**Extraction notes:**
- table pharmaceutics-13-00849-t003: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3
- toxin: the located table(s) gave no kinetic value — 14 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00849-t003:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00849-t003:row9:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00849-t003:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-13-00849-t003:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-13-00849-t003:row5:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['pharmaceutics-13-00849-t003:row7:col1'] |
| C5_unit_missing_Q83 | fail | [time] |  | ['pharmaceutics-13-00849-t003:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 629 L/h | ['pharmaceutics-13-00849-t003:row4:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 217 L/h | ['pharmaceutics-13-00849-t003:row9:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 517 L | ['pharmaceutics-13-00849-t003:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_spironolactone/Spironolactone_Tatipalli2021_reference/Spironolactone_Tatipalli2021_reference_modelica.zip" download>Spironolactone_Tatipalli2021_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Tatipalli M, Siripuram VK, Long T, Shuster D, Bernstein G, Martineau P et al. Model-Informed Optimization of a Pediatric Clinical Pharmacokinetic Trial of a New Spironolactone Liquid Formulation. Pharmaceutics 13(6):849 (2021). [doi:10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849)

**This record:** Pharmacolibrary, model `Spironolactone_Tatipalli2021_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_spironolactone/Spironolactone_Tatipalli2021_reference>

```bibtex
@misc{pharmacolibrary_SpironolactoneTatipalli2021reference,
  title  = {{Pharmacolibrary model Spironolactone_Tatipalli2021_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_spironolactone/Spironolactone_Tatipalli2021_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics13060849},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bspironolactone%5D%20Spironolactone_Tatipalli2021_reference&body=Drug%3A%20spironolactone%0ARecord%3A%20Spironolactone_Tatipalli2021_reference%0APaper%3A%20Tatipalli_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_spironolactone/Spironolactone_Tatipalli2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 19:24 UTC</sub>
