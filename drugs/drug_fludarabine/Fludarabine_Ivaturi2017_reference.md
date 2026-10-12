<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fludarabine&quot;,&quot;href&quot;:&quot;drugs/drug_fludarabine/&quot;},{&quot;label&quot;:&quot;Ivaturi_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fludarabine — `Fludarabine_Ivaturi2017_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

### Reviewer guidance

**The fludarabine parent–metabolite model was rejected because the metabolite f-ara-ATP is unlinked: despite the metabolism link via kfm (0.005 1/h), the metabolite has no reachable compartment (n_cmt 0), so no path from the dose exists.**

The record describes fludarabine in pediatric hematopoietic cell transplant recipients with a metabolite f-ara-ATP formed from the parent, with a formation rate constant kfm of 0.005 1/h and an elimination rate constant kel of 0.09 1/h. However, the metabolite has no compartments (n_cmt 0), so the structure check found an unlinked metabolite with no path from the administered dose. Parent parameters (CL 3.1 L/h, V1 13.4 L/kg, V2 13.4 L) were extracted, but the metabolite side of the topology is incomplete, which is why the model was refused. Extracted — fludarabine: CL 3.1 L/h, V1 13.4 L/kg, V2 13.4 L; f-ara-ATP: kfm 0.005 1/h, kel 0.09 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fludarabine, the second reading fludarabine monophosphate; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:26:52.729527+00:00) predates the upstream re-run (2026-10-07 16:51:42.925002+00:00). Current validate status: `extracted`.

## Citation
Ivaturi V et al., Pharmacokinetics and Model-Based Dosing…, Biology of blood and marrow… (2017)
  ·  DOI: [10.1016/j.bbmt.2017.06.021](https://doi.org/10.1016/j.bbmt.2017.06.021)

## Model component
<dbs-pgx drug="fludarabine" model-id="Fludarabine_Ivaturi2017_reference" status="extracted" stale="true" population="pediatric hematopoietic cell transplant recipients" measured-compound="fludarabine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Typical value forf-ara-a CL, L/h/15 kg | `Q22` · CL | 3.1 | L/h | 8.611111111111112e-07 | L/h | not captured | exact (1.0) | T2:row2:col1, T2:row2:col2, T2:row2:col3, T2:row2:col4 | — | not captured |
| Vc, L/kg | `Q63` · V1 | 13.4 | L/kg | 0.9380000000000001 | [l] / [kg] | not captured | exact (1.0) | T2:row4:col1, T2:row4:col2, T2:row4:col3, T2:row4:col4 | — | not captured |
| Intercompartmental CL, L/h/kg | `Q30` · Q | 2.2 | L/h/kg | 4.2777777777777785e-05 | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | T2:row5:col1, T2:row5:col2, T2:row5:col3, T2:row5:col4 | — | not captured |
| Vp, L/15 | `Q64` · V2 | 13.4 | L | 0.0134 | L | not captured | exact (1.0) | T2:row6:col1, T2:row6:col2, T2:row6:col3, T2:row6:col4 | — | not captured |
| Kin† | `Q305` · kfm | 0.005 | 1/h | 1.388888888888889e-06 | 1/h | not captured | exact (1.0) | T2:row7:col1, T2:row7:col2, T2:row7:col3 | — | not captured |
| Kout‡ | `Q47` · kel | 0.09 | 1/h | 2.4999999999999998e-05 | 1/h | not captured | exact (1.0) | T2:row9:col1, T2:row9:col2, T2:row9:col3 | — | not captured |
| theta_cl_creatinine | `Q900` · theta_cl_creatinine | 0.006 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row3:col1, T2:row3:col2, T2:row3:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/15' (V2)
- dropped unlinked row (NIL): 'Time effect on kin' — extend the ontology if this is a real PK parameter (source ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col3'])
- dropped diagnostic row 'Interindividual variability on CL§ (% shrinkage)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped diagnostic row 'Interindividual variability on Vc§ (% shrinkage)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped diagnostic row 'Interindividual variability on Kin§ (% shrinkage)' → Q318 (shrinkage) — reported statistic, not a parameter
- implicit units: 'Typical value forf-ara-a CL, L/h/15 kg' → L/h (from the paper text: 'The text states: "where, 3.1L/hour is the typical value of f-ara-a CL". Although the table caption lists it as \'L/h/15 k')
- implicit units: 'Vp, L/15' → L (from the popPK convention: 'Vp (Volume of distribution of the peripheral compartment) is a volume parameter. In population PK, volumes are typically')
- implicit units: 'Kin†' → 1/h (from the popPK convention: "Kin is described in the table footnote as a 'First-order rate constant'. First-order rate constants are dimensionally in")
- implicit units: 'Kout‡' → 1/h (from the popPK convention: "Kout is described in the text as a 'first-order rate constant for elimination'. First-order rate constants are dimension")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fludarabine
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 22 linked by role; re-tagged parent→f-ara-ATP ×17
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row3:col4 = '.004-.008'
- unparsed cell T2:row7:col4 = '.004-.008'
- unparsed cell T2:row8:col4 = '−.52-−.30'
- unparsed cell T2:row9:col4 = '.08-.10'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (3/15 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['fludarabine', 'f-ara-atp', 'interconversion']] | [['fludarabine', 'f-ara-atp', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[intercompartmental cl]` | 2.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_creatinine]` | 0.006 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_creatinine]` | not captured | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value forf-ara-a cl, l/h/15 kg]` | 3.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value forf-ara-a cl, l/h/15 kg]` | not captured | 2.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 13.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | 11.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 13.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | not captured | 12.3 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fludarabine | fludarabine monophosphate | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | fludarabine | fludarabine (f-ara-a) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.1 | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.1 L/h | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 938 L | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13.4 L | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fludarabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ivaturi_2017` / `Ivaturi_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_modelica.zip" download>Fludarabine_Ivaturi2017_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_matlab.zip" download>Fludarabine_Ivaturi2017_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_matlab_simbio.zip" download>Fludarabine_Ivaturi2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_sbml.zip" download>Fludarabine_Ivaturi2017_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_cellml.zip" download>Fludarabine_Ivaturi2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:51 UTC</sub>
