<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Buprenorphine&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/&quot;},{&quot;label&quot;:&quot;Jones_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Bjrnsson2023_reference&quot;,&quot;label&quot;:&quot;Bj\u00f6rnsson_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jensen2007v2_reference&quot;,&quot;label&quot;:&quot;Jensen_2007_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jensen2007v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jones2021_reference&quot;,&quot;label&quot;:&quot;Jones_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Buprenorphine_Olofsen2022_reference&quot;,&quot;label&quot;:&quot;Olofsen_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Olofsen2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Buprenorphine — `Buprenorphine_Jones2021_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Buprenorphine" model-id="Buprenorphine_Jones2021_reference" status="extracted" stale="false" population="subjects with opioid use disorder" measured-compound="Buprenorphine" parameterization="apparent" topology="1C"></div>

## Citation
Jones AK, Ngaimisi E, Gopalakrishnan M, Young MA, Laffont CM. Population Pharmacokinetics of a Monthly Buprenorphine Depot Injection for the Treatment of Opioid Use Disorder: A Combined Analysis of Phase II and Phase III Trials. Clinical pharmacokinetics 60(4):527-540 (2021).
  ·  DOI: [10.1007/s40262-020-00957-0](https://doi.org/10.1007/s40262-020-00957-0)

## Population and dosing

**Population:** subjects with opioid use disorder · condition opioid use disorder · age group adult · n = 570.

**Dosing:** 100, 300 mg, sc, multiple, every 720 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference.svg" alt="Buprenorphine_Jones2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F | CL/F | 52.2 | L/h | 1.5 | 30.9 (None% RSE) |
| V4/F | Vm/F | 432 | L | 6.1 |  |
| Q/F | Q/F | 79.5 | L/h |  | 62.9 (None% RSE) |
| V5/F | V | 1110 | L |  |  |
| k14 | k14 | 1.17 | 1/h |  | 45.7 (None% RSE) |
| k24 | kcomp | 0.0277 | 1/h | 5.0 | 95.0 (None% RSE) |
| F1 | Fab | 0.185 |  |  | 46.4 (None% RSE) |
| F2 | equation variable | 0.0680 |  | 2.1 |  |
| FRF1 | FR | 1.47 |  | 3.5 |  |
| F1DOSE | Frel | 0.765 |  |  |  |
| ka = | kabs | 2.54 | h−1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 52.2 | L/h | 1.45e-05 | m3/s | l/h | 1.5 | exact (1) | Tab3:row1:col2 | 30.9 (None% RSE) |
| V4/F | `Q367` · Vm/F | 432 | L | 0.432 | m3 | l | 6.1 | llm (0.6) | Tab3:row2:col2 |  |
| Q/F | `Q69` · Q/F | 79.5 | L/h | 2.208e-05 | m3/s | l/h |  | exact (1) | Tab3:row3:col2 | 62.9 (None% RSE) |
| V5/F | `Q61` · V | 1110 | L | 1.11 | m3 | l |  | llm (0.6) | Tab3:row4:col2 |  |
| k14 | `Q347` · k14 | 1.17 | 1/h | 0.000325 | 1/s | 1/h |  | exact (1) | Tab3:row5:col2 | 45.7 (None% RSE) |
| k24 | `Q48` · kcomp | 0.0277 | 1/h | 7.694e-06 | 1/s | 1/h | 5.0 | exact (1) | Tab3:row6:col2 | 95.0 (None% RSE) |
| F1 | `Q40` · Fab | 0.185 |  | 0.185 |  |  |  | exact (1) | Tab3:row9:col2, Fig2:caption | 46.4 (None% RSE) |
| F2 | `Q900` · equation variable | 0.0680 |  | 0.068 |  |  | 2.1 | llm (0.6) | Tab3:row10:col2 |  |
| FRF1 | `Q43` · FR | 1.47 |  | 0.0147 |  |  | 3.5 | llm (0.6) | Tab3:row12:col2, Fig2:caption |  |
| F1DOSE | `Q87` · Frel | 0.765 |  | 0.765 |  |  |  | llm (0.6) | Tab3:row13:col2, Fig2:caption |  |
| ka = | `Q49` · kabs | 2.54 | h−1 | 0.0007056 | 1/s | 1/h |  | review_gapfill (0.7) | Santiago_2020:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'V4/F' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'Q/F' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'V5/F' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'k14' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'k24' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'k36' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'k64' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'F1' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'PROP' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'ADD' routed out of structural estimates ('Inter-individual variability (%CV)')
- dropped duplicate Q347 ('k36', value '0.00392') — already have one for this compound
- dropped duplicate Q347 ('k64', value '0.000507') — already have one for this compound
- dropped duplicate Q347 ('FRK14', value '0.636') — already have one for this compound
- 'FRF1' → Q43: printed without a unit and above 1 — read as a percentage
- routed 'PROP' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'ADD' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- NIL: refused to back-fill base 'kcomp' from footnote/prose loose number None (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['Tab3:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Buprenorphine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Santiago_2020's review values (primary lacked it)

**Extraction notes:**
- table Tab3: unbound_uncertainty
- LLM selected parameter table(s) 3
- toxin: the located table(s) gave no kinetic value — 9 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row1:col2'] |
| C5_dimension_Q347 | pass | 1 / [time] |  | ['Tab3:row5:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Tab3:row2:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Tab3:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Santiago_2020:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab3:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 52.2 L/h | ['Tab3:row1:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.11e+03 L | ['Tab3:row4:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference_modelica.zip" download>Buprenorphine_Jones2021_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference_fmi.zip" download>Buprenorphine_Jones2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference_matlab.zip" download>Buprenorphine_Jones2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference_matlab_simbio.zip" download>Buprenorphine_Jones2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference_sbml.zip" download>Buprenorphine_Jones2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference_cellml.zip" download>Buprenorphine_Jones2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4676 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.45e-05 | m3/s |
| input | model | `VdPerKg` | 0.006171 | m3/kg |
| input | model | `ka` | 0.0007056 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jones AK, Ngaimisi E, Gopalakrishnan M, Young MA, Laffont CM. Population Pharmacokinetics of a Monthly Buprenorphine Depot Injection for the Treatment of Opioid Use Disorder: A Combined Analysis of Phase II and Phase III Trials. Clinical pharmacokinetics 60(4):527-540 (2021). [doi:10.1007/s40262-020-00957-0](https://doi.org/10.1007/s40262-020-00957-0)

**This record:** Pharmacolibrary, model `Buprenorphine_Jones2021_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference>

```bibtex
@misc{pharmacolibrary_BuprenorphineJones2021reference,
  title  = {{Pharmacolibrary model Buprenorphine_Jones2021_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference},
  note   = {Parameters from doi:10.1007/s40262-020-00957-0},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 2.54 /h, F 1). Doses in the paper: 100, 300 mg.

<dbs-fmusim paramsurl="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference/Buprenorphine_Jones2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Buprenorphine_Jones2021_reference_params.json` · controls `Buprenorphine_Jones2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbuprenorphine%5D%20Buprenorphine_Jones2021_reference&body=Drug%3A%20buprenorphine%0ARecord%3A%20Buprenorphine_Jones2021_reference%0APaper%3A%20Jones_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 13:29 UTC</sub>
