<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Lidocaine&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/&quot;},{&quot;label&quot;:&quot;He_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lidocaine_Riff2018_reference&quot;,&quot;label&quot;:&quot;Riff_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Riff2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Tognolini2025_reference&quot;,&quot;label&quot;:&quot;Tognolini_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Tognolini2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Foong2025_reference&quot;,&quot;label&quot;:&quot;Foong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Foong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Greuber2021_lidocaine_1_8_3_ts&quot;,&quot;label&quot;:&quot;Greuber_2021_lidocaine_1_8_3_ts&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_1_8_3_ts.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Greuber2021_lidocaine_5_4_1_ts&quot;,&quot;label&quot;:&quot;Greuber_2021_lidocaine_5_4_1_ts&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_1_ts.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Greuber2021_lidocaine_5_4_2_ts&quot;,&quot;label&quot;:&quot;Greuber_2021_lidocaine_5_4_2_ts&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_2_ts.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Greuber2021_lidocaine_5_4_3_ts&quot;,&quot;label&quot;:&quot;Greuber_2021_lidocaine_5_4_3_ts&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lidocaine — `Lidocaine_He2025_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="Lidocaine" model-id="Lidocaine_He2025_reference" status="not_simulated" stale="false" population="Chinese hepatectomy patients" measured-compound="Lidocaine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
He C, Qi X, Liu Y, Jin Y, Zhang M, Zhang Y et al. Optimizing Lidocaine Dosing in Hepatectomy Patients: A Population Pharmacokinetic Study of Active Metabolites. Drug design, development and therapy 19:6255-6268 (2025).
  ·  DOI: [10.2147/dddt.s485389](https://doi.org/10.2147/dddt.s485389)

## Population and dosing

**Population:** Chinese hepatectomy patients · condition postoperative hepatectomy · age group adult · n = 35.

**Dosing:** 57.97, 86.07 mg, iv, multiple, every 1 h.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h) | CL | 26.1 | L/h | 16.6 | 9.16 (57.4% RSE) |
| V1 (L) | V1 | 8.73 | L | 19.8 | 4.1 (44.6% RSE) |
| CLFM | fm | 0.0182 |  | 39.6 |  |
| V2 (L) | V2 | 63.6 | L | 16.4 | 19.4 (49.8% RSE) |
| CLD (L/h) | Q | 41.0 | L/h | 28.8 | 52.3 (47.4% RSE) |
| CLEFM | fm | 0.897 |  | 5.9 |  |
| CLE (L/h) | CL | 1.41 | L/h | 22.3 |  |
| CLG (L/h) | CL | 4.77 | L/h | 34.6 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet.**

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 26.1 | L/h | 7.25e-06 | m3/s | l/h | 16.6 | exact (1) | t0002:row1:col1 | 9.16 (57.4% RSE) |
| V1 (L) | `Q63` · V1 | 8.73 | L | 0.00873 | m3 | l | 19.8 | exact (1) | t0002:row2:col1 | 4.1 (44.6% RSE) |
| CLFM | `Q45` · fm | 0.0182 |  | 0.0182 |  |  | 39.6 | exact (1) | t0002:row3:col1 |  |
| V2 (L) | `Q64` · V2 | 63.6 | L | 0.0636 | m3 | l | 16.4 | exact (1) | t0002:row4:col1 | 19.4 (49.8% RSE) |
| CLD (L/h) | `Q30` · Q | 41.0 | L/h | 1.139e-05 | m3/s | l/h | 28.8 | exact (1) | t0002:row5:col1 | 52.3 (47.4% RSE) |
| CLEFM | `Q45` · fm | 0.897 |  | 0.897 |  |  | 5.9 | exact (1) | t0002:row6:col1 |  |
| CLE (L/h) | `Q22` · CL | 1.41 | L/h | 3.917e-07 | m3/s | l/h | 22.3 | exact (1) | t0002:row7:col1 |  |
| CLG (L/h) | `Q22` · CL | 4.77 | L/h | 1.325e-06 | m3/s | l/h | 34.6 | exact (1) | t0002:row8:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'V1' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'CLFM' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'V2' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'CLD' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'CLEFM' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'CLE' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'CLG' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section residual_error: 'σ2Lidocaine' routed out of structural estimates ('Residual errors (%CV)')
- table section residual_error: 'σ2MEGX' routed out of structural estimates ('Residual errors (%CV)')
- table section residual_error: 'σ2GX' routed out of structural estimates ('Residual errors (%CV)')
- column 'estimate (95% ci)' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- table representations disagree for 'CL (L/h)'; source reconciliation required
- table representations disagree for 'V1 (L)'; source reconciliation required
- table representations disagree for 'CLFM'; source reconciliation required
- table representations disagree for 'V2 (L)'; source reconciliation required
- table representations disagree for 'CLD (L/h)'; source reconciliation required
- table representations disagree for 'CLEFM'; source reconciliation required
- table representations disagree for 'CLE (L/h)'; source reconciliation required
- table representations disagree for 'CLG (L/h)'; source reconciliation required
- table representations disagree for 'The effect of SIZE on CL'; source reconciliation required
- table representations disagree for 'The effect of DOSE on CLFM'; source reconciliation required
- table representations disagree for 'The effect of TBW on CLFM'; source reconciliation required
- table representations disagree for 'The effect of DOSE on V2'; source reconciliation required
- table representations disagree for 'The effect of DOSE on CLG'; source reconciliation required
- dropped 'The effect of SIZE on CL' → Q22 = -0.382: a clearance of -0.382 is not a parameter value (source ['t0002:row9:col1'])
- relinked 'The effect of DOSE on CLFM' Q370 → Q22 for MEGX (Monoethylglycinexylide): a metabolite's own clearance is its elimination, not its formation
- unit_dimension_unknown: '5–95%' (CL)
- dropped duplicate Q22 ('The effect of DOSE on CLFM', value '0.669') — already have one for this compound
- relinked 'The effect of TBW on CLFM' Q370 → Q22 for MEGX (Monoethylglycinexylide): a metabolite's own clearance is its elimination, not its formation
- dropped 'The effect of TBW on CLFM' → Q22 = -1.09: a clearance of -1.09 is not a parameter value (source ['t0002:row11:col1'])
- dropped unlinked row (NIL): 'The effect of DOSE on V2' — extend the ontology if this is a real PK parameter (source ['t0002:row12:col1'])
- dropped duplicate Q22 ('The effect of DOSE on CLG', value '1') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Lidocaine
- edge Lidocaine → MEGX (Monoethylglycinexylide): 'CLFM' (Q370) relinked to Q45, the formation parameter the metabolite carries
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 16 linked by role; re-tagged parent→MEGX (Monoethylglycinexylide) ×7, parent→GX (Glycinexylide) ×6
- molar mass: no plausible PubChem entry for 'GX (Glycinexylide)' ('Glycinexylidide (GX)') — left in mass units
- molar mass: none found for 'GX (Glycinexylide)' — its concentrations stay mass-only

**Extraction notes:**
- table t0002: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0002:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0002:row7:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0002:row8:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t0002:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['t0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['t0002:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 26.1 | ['t0002:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 26.1 L/h | ['t0002:row1:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.41 L/h | ['t0002:row7:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.77 L/h | ['t0002:row8:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.73 L | ['t0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 63.6 L | ['t0002:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.6 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.9 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 10 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_lidocaine/Lidocaine_He2025_reference/Lidocaine_He2025_reference_modelica.zip" download>Lidocaine_He2025_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_lidocaine/Lidocaine_He2025_reference/Lidocaine_He2025_reference_matlab.zip" download>Lidocaine_He2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_lidocaine/Lidocaine_He2025_reference/Lidocaine_He2025_reference_matlab_simbio.zip" download>Lidocaine_He2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_lidocaine/Lidocaine_He2025_reference/Lidocaine_He2025_reference_sbml.zip" download>Lidocaine_He2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_lidocaine/Lidocaine_He2025_reference/Lidocaine_He2025_reference_cellml.zip" download>Lidocaine_He2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): He C, Qi X, Liu Y, Jin Y, Zhang M, Zhang Y et al. Optimizing Lidocaine Dosing in Hepatectomy Patients: A Population Pharmacokinetic Study of Active Metabolites. Drug design, development and therapy 19:6255-6268 (2025). [doi:10.2147/dddt.s485389](https://doi.org/10.2147/dddt.s485389)

**This record:** Pharmacolibrary, model `Lidocaine_He2025_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_lidocaine/Lidocaine_He2025_reference>

```bibtex
@misc{pharmacolibrary_LidocaineHe2025reference,
  title  = {{Pharmacolibrary model Lidocaine_He2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_lidocaine/Lidocaine_He2025_reference},
  note   = {Parameters from doi:10.2147/dddt.s485389},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blidocaine%5D%20Lidocaine_He2025_reference&body=Drug%3A%20lidocaine%0ARecord%3A%20Lidocaine_He2025_reference%0APaper%3A%20He_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lidocaine/Lidocaine_He2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 09:01 UTC</sub>
