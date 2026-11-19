<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Citalopram&quot;,&quot;href&quot;:&quot;drugs/toxin_citalopram/&quot;},{&quot;label&quot;:&quot;Weisskopf_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Masullo2006_reference&quot;,&quot;label&quot;:&quot;Masullo_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_citalopram/Citalopram_Masullo2006_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_KraghSrensen1981_reference&quot;,&quot;label&quot;:&quot;Kragh-S\u00f8rensen_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_citalopram/Citalopram_KraghSrensen1981_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Citalopram — `Citalopram_Weisskopf2020_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="Citalopram" model-id="Citalopram_Weisskopf2020_reference" status="not_simulated" stale="false" population="pregnant and breastfeeding women treated with escitalopram or citalopram" measured-compound="Escitalopram (S-citalopram)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Weisskopf E, Guidi M, Fischer CJ, Bickle Graz M, Beaufils E, Nguyen KA et al. A population pharmacokinetic model for escitalopram and its major metabolite in depressive patients during the perinatal period: Prediction of infant drug exposure through breast milk. British journal of clinical pharmacology 86(8):1642-1653 (2020).
  ·  DOI: [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278)

## Population and dosing

**Population:** pregnant and breastfeeding women treated with escitalopram or citalopram · condition depressive patients during the perinatal period · age group adult · n = 33.

**Dosing:** 10 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Citalopram, measured Escitalopram (S-citalopram).

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL SCIT (L/h) | CL | 32.3 | L/h | 8 | 31.2 (12% RSE) |
| cyp2c19 | cyp2c19 | -0.51 |  | 17 |  |
| V SCIT (L) | V | 1590 | L | 14 |  |
| k a / k 12 (h -1 ) | kabs | 0.87 | h -1 | 36 |  |
| k 30 (h -1 ) | kel | 0.67 | h -1 | 53 |  |
| vmr_for_cyp2c19_im_em | vmr_for_cyp2c19_im_em | 2.4 |  | 7 |  |
| cyp2d6 | cyp2d6 | 1.04 |  | 11 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption rate constant (0.87 h⁻¹) for Escitalopram was not assigned a value, and covariate effects for CYP2C19, CYP2D6, and metabolic ratios were not simulated.**

The record specifies an absorption rate constant of 0.87 h⁻¹ for Escitalopram, but parameter coverage checks indicate this value was neither emitted nor defaulted, leaving it unassigned. Although the base structural model was simulated, the defined covariate effects—including the CYP2C19 effect on Escitalopram (-0.51) and CYP2D6 effect on Desmethylcitalopram (1.04)—were not exercised because only the reference individual was simulated. Consequently, the model remains unverified for its full covariate parameterization. Extracted — Escitalopram (S-citalopram): CL 32.3 L/h, V 1.59e+03 L, kabs 0.87 h -1; Desmethylcitalopram (SDCIT): kel 0.67 h -1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL SCIT (L/h) | `Q22` · CL | 32.3 | L/h | 8.972e-06 | m3/s | l/h | 8 | llm_confirmed (0.6) | tab_2:row2:col1 | 31.2 (12% RSE) |
| cyp2c19 | `Q900` · cyp2c19 | -0.51 |  |  |  |  | 17 |  | tab_2:row3:col1 |  |
| V SCIT (L) | `Q61` · V | 1590 | L | 1.59 | m3 | l | 14 | llm (0.6) | tab_2:row5:col1 |  |
| k a / k 12 (h -1 ) | `Q49` · kabs | 0.87 | h -1 | 0.0002417 | 1/s | 1/h | 36 | exact (1) | tab_2:row6:col1 |  |
| k 30 (h -1 ) | `Q47` · kel | 0.67 | h -1 | 0.0001861 | 1/s | 1/h | 53 | exact (1) | tab_2:row7:col1 |  |
| vmr_for_cyp2c19_im_em | `Q900` · vmr_for_cyp2c19_im_em | 2.4 |  |  |  |  | 7 |  | tab_2:row9:col1 |  |
| cyp2d6 | `Q900` · cyp2d6 | 1.04 |  |  |  |  | 11 |  | tab_2:row11:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| RSE, relative standard error defined as SE/estimate; 90% PI, percentile interval between 5 and 95%; CLSCIT, | Q22 | llm |

## Departures & gaps

**Interpretation flags:**
- compound tags: 6 row(s) → Desmethylcitalopram (SDCIT) (name 6)
- covariate level 'CYP2C19' → Q900:cyp2c19 = -0.51 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'MOM' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col1', 'tab_2:row13:col1'])
- covariate level 'VMR for CYP2C19 IM/EM' → Q900:vmr_for_cyp2c19_im_em = 2.4 (additive_shift on Q22)
- covariate level 'CYP2D6' → Q900:cyp2d6 = 1.04 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'MPRD' — extend the ontology if this is a real PK parameter (source ['tab_2:row12:col1'])
- dropped unlinked row (NIL): 'FAT' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col1', 'tab_2:row16:col1'])
- dropped unlinked row (NIL): 'MPRM' — extend the ontology if this is a real PK parameter (source ['tab_2:row15:col1'])
- unit inherited for CL (Q22): 'L/h' from a same-Q-code sibling (this row's label had no unit)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL SCIT (L/h)); Q61 (V SCIT (L)); Q22 (RSE, relative standard error defined as SE/estimate; 90% PI, percentile interval between 5 and 95%; CLSCIT,)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Escitalopram (S-citalopram)
- topology: 2 first-order transfer(s) across 4 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- pharmacogenetic covariate 'cyp2c19' (cyp2c19) — PGx domain
- pharmacogenetic covariate 'vmr_for_cyp2c19_im_em' (cyp2c19) — PGx domain
- pharmacogenetic covariate 'cyp2d6' (cyp2d6) — PGx domain
- row roles: 2 per-group rows of Escitalopram (S-citalopram) covariate_effect but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: VMR for CYP2C19 IM/EM
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 4 linked by role; re-tagged parent→Escitalopram (S-citalopram) ×10, parent→Desmethylcitalopram (SDCIT) ×7
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_2: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_2:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row6:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_2:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.3 | ['tab_2:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 32.3 L/h | ['tab_2:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.59e+03 L | ['tab_2:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 3 covered | neither emitted nor in defaulted[]: ['kabs'] |
| T3_rate_constant_conversion |  | pass | k23 (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_shared_parameters |  | pass | 7 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_citalopram/Citalopram_Weisskopf2020_reference/Citalopram_Weisskopf2020_reference_modelica.zip" download>Citalopram_Weisskopf2020_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_citalopram/Citalopram_Weisskopf2020_reference/Citalopram_Weisskopf2020_reference_matlab.zip" download>Citalopram_Weisskopf2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_citalopram/Citalopram_Weisskopf2020_reference/Citalopram_Weisskopf2020_reference_matlab_simbio.zip" download>Citalopram_Weisskopf2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_citalopram/Citalopram_Weisskopf2020_reference/Citalopram_Weisskopf2020_reference_sbml.zip" download>Citalopram_Weisskopf2020_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_citalopram/Citalopram_Weisskopf2020_reference/Citalopram_Weisskopf2020_reference_cellml.zip" download>Citalopram_Weisskopf2020_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Weisskopf E, Guidi M, Fischer CJ, Bickle Graz M, Beaufils E, Nguyen KA et al. A population pharmacokinetic model for escitalopram and its major metabolite in depressive patients during the perinatal period: Prediction of infant drug exposure through breast milk. British journal of clinical pharmacology 86(8):1642-1653 (2020). [doi:10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278)

**This record:** Pharmacolibrary, model `Citalopram_Weisskopf2020_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_citalopram/Citalopram_Weisskopf2020_reference>

```bibtex
@misc{pharmacolibrary_CitalopramWeisskopf2020reference,
  title  = {{Pharmacolibrary model Citalopram_Weisskopf2020_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_citalopram/Citalopram_Weisskopf2020_reference},
  note   = {Parameters from doi:10.1111/bcp.14278},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitalopram%5D%20Citalopram_Weisskopf2020_reference&body=Drug%3A%20citalopram%0ARecord%3A%20Citalopram_Weisskopf2020_reference%0APaper%3A%20Weisskopf_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_citalopram/Citalopram_Weisskopf2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 14:48 UTC</sub>
