<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;methylphenidate&quot;,&quot;href&quot;:&quot;drugs/drug_methylphenidate/&quot;},{&quot;label&quot;:&quot;Giorgi_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methylphenidate_Giorgi2010_reference&quot;,&quot;label&quot;:&quot;Giorgi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methylphenidate — `Methylphenidate_Giorgi2010_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> F use library defaults, not estimates from this paper; t6_deviations.

<div class="pk-model-meta" hidden drug="methylphenidate" model-id="Methylphenidate_Giorgi2010_reference" status="needs_review" stale="false" population="male beagle dogs" measured-compound="methylphenidate" parameterization="mechanistic" topology="1C"></div>

## Citation
Giorgi M, Prise U, Soldani G, Neri D, Lavy E. Pharmacokinetics of methylphenidate following two oral formulations (immediate and sustained release) in the dog. Veterinary research communications 34 Suppl 1:S73–S77 (2010).
  ·  DOI: [10.1007/s11259-010-9388-z](https://doi.org/10.1007/s11259-010-9388-z)

## Population and dosing

**Population:** male beagle dogs · condition healthy · age group adult.

**Dosing:** 20 mg, oral, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference.svg" alt="Methylphenidate_Giorgi2010_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC | AUC | 69.23 | ng·h/mL |
| Cl | CL | 0.27 | L/h/kg |
| Vd | V | 0.31 | L/kg |
| T 1/2 el | t1/2z | 0.85 | h |
| K 01 | kabs | 1.10 | 1/h |
| T 1/2 abs | t1/2ka | 0.22 | h |
| T max | tmax | 0.21 | h |
| C max | Cmax | 60.58 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**F use library defaults, not estimates from this paper; t6_deviations.**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (AUC and Cmax), so that value has no SI equivalent. Extracted — methylphenidate: AUC 69.2 ng·h/mL, CL 0.27 L/h/kg, V 0.31 L/kg, t1/2z 0.85 h, kabs 1.1 1/h, t1/2ka 0.22 h, tmax 0.21 h, Cmax 60.6 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of r 2: this record has none, the second reading 0.90. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC | `Q88` · AUC | 69.23 | ng·h/mL |  |  | ng·h/mL | exact (1) | tab_0:row1:col2, tab_0:row1:col3 |
| Cl | `Q22` · CL | 0.27 | L/h/kg | 5.25e-06 | m3/s | L/h | exact (1) | tab_0:row2:col2, tab_0:row2:col3 |
| Vd | `Q61` · V | 0.31 | L/kg | 0.0217 | m3 | L | exact (1) | tab_0:row3:col2, tab_0:row3:col3 |
| T 1/2 el | `Q57` · t1/2z | 0.85 | h | 3060 | s | h | half_life_rule (0.95) | tab_0:row4:col2, tab_0:row4:col3 |
| K 01 | `Q49` · kabs | 1.10 | 1/h | 0.0003056 | 1/s | 1/h | space_fold (0.95) | tab_0:row5:col2, tab_0:row5:col3 |
| T 1/2 abs | `Q95` · t1/2ka | 0.22 | h | 792 | s | h | half_life_rule (0.95) | tab_0:row7:col2, tab_0:row7:col3 |
| T max | `Q56` · tmax | 0.21 | h | 756 | s | h | space_fold (0.95) | tab_0:row8:col2, tab_0:row8:col3 |
| C max | `Q32` · Cmax | 60.58 | ng/mL |  |  | ng/mL | space_fold (0.95) | tab_0:row9:col2, tab_0:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'ir' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'sr' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q49 ('Ka', value '24.30') — already have one for this compound
- dropped unlinked row (NIL): 'R 2' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col2', 'tab_0:row10:col3'])
- implicit units: 'AUC' → ng·h/mL (from the popPK convention: 'The paper does not state the unit for AUC in the provided text or table footnotes. AUC for methylphenidate in plasma, pa')
- implicit units: 'Cl' → L/h/kg (from the popPK convention: "The text states 'The parameters were normalized to bodyweight.' Clearance (Cl) is a rate parameter. In population PK or ")
- implicit units: 'Vd' → L/kg (from the popPK convention: "The text states 'The parameters were normalized to bodyweight.' Volume of distribution (Vd) is a volume parameter. When ")
- implicit units: 'T 1/2 el' → h (from the popPK convention: 'Half-life (t1/2) is a time parameter. The standard unit for half-life in PK studies is hours (h). The value 0.85 is cons')
- implicit units: 'K 01' → 1/h (from the popPK convention: 'Absorption rate constant (K01/ka) is a first-order rate constant. The standard unit for rate constants is inverse time, ')
- implicit units: 'T 1/2 abs' → h (from the popPK convention: 'Absorption half-life (t1/2abs) is a time parameter. The standard unit is hours (h). The value 0.22 is consistent with th')
- implicit units: 'T max' → h (from the popPK convention: 'Time to maximum concentration (Tmax) is a time parameter. The standard unit is hours (h). The value 0.21 is consistent w')
- implicit units: 'C max' → ng/mL (from the popPK convention: 'The paper does not state the unit for Cmax in the provided text or table footnotes. Cmax is a concentration parameter. F')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl); Q61 (Vd)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methylphenidate
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_0: units_need_context
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.923 (12/13 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[r 2]` |  | 0.90 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row2:col2', 'tab_0:row2:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_0:row9:col2', 'tab_0:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_0:row5:col2', 'tab_0:row5:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['tab_0:row8:col2', 'tab_0:row8:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_0:row4:col2', 'tab_0:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_0:row3:col2', 'tab_0:row3:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_0:row1:col2', 'tab_0:row1:col3'] |
| C5_dimension_Q95 | pass | [time] |  | ['tab_0:row7:col2', 'tab_0:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.27 | ['tab_0:row2:col2', 'tab_0:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.9 L/h | ['tab_0:row2:col2', 'tab_0:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 21.7 L | ['tab_0:row3:col2', 'tab_0:row3:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=methylphenidate) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | pass |  | verdict partial; agreement 0.923 (12 of 13 compared fields agree, 1 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.923 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference_modelica.zip" download>Methylphenidate_Giorgi2010_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference_fmi.zip" download>Methylphenidate_Giorgi2010_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference_matlab.zip" download>Methylphenidate_Giorgi2010_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference_matlab_simbio.zip" download>Methylphenidate_Giorgi2010_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference_sbml.zip" download>Methylphenidate_Giorgi2010_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference_cellml.zip" download>Methylphenidate_Giorgi2010_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2333 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `Cl` | 5.25e-06 | m3/s |
| input | model | `VdPerKg` | 0.00031 | m3/kg |
| input | model | `ka` | 0.0003056 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Giorgi M, Prise U, Soldani G, Neri D, Lavy E. Pharmacokinetics of methylphenidate following two oral formulations (immediate and sustained release) in the dog. Veterinary research communications 34 Suppl 1:S73–S77 (2010). [doi:10.1007/s11259-010-9388-z](https://doi.org/10.1007/s11259-010-9388-z)

**This record:** Pharmacolibrary, model `Methylphenidate_Giorgi2010_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference>

```bibtex
@misc{pharmacolibrary_MethylphenidateGiorgi2010reference,
  title  = {{Pharmacolibrary model Methylphenidate_Giorgi2010_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference},
  note   = {Parameters from doi:10.1007/s11259-010-9388-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 1.1 /h, F 0.9). Dose in the paper: 20 mg.

<dbs-fmusim paramsurl="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference/Methylphenidate_Giorgi2010_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Methylphenidate_Giorgi2010_reference_params.json` · controls `Methylphenidate_Giorgi2010_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylphenidate%5D%20Methylphenidate_Giorgi2010_reference&body=Drug%3A%20methylphenidate%0ARecord%3A%20Methylphenidate_Giorgi2010_reference%0APaper%3A%20Giorgi_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:44 UTC</sub>
