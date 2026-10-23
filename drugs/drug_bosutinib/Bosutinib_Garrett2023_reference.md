<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;bosutinib&quot;,&quot;href&quot;:&quot;drugs/drug_bosutinib/&quot;},{&quot;label&quot;:&quot;Garrett_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bosutinib_Garrett2023_reference&quot;,&quot;label&quot;:&quot;Garrett_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bosutinib/Bosutinib_Garrett2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bosutinib — `Bosutinib_Garrett2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Bosutinib bioavailability (F) has no reported value and was left at a library default, so the record was held back.

<div class="pk-model-meta" hidden drug="bosutinib" model-id="Bosutinib_Garrett2023_reference" status="needs_review" stale="false" population="adults with newly diagnosed chronic phase chronic myeloid leukemia" measured-compound="bosutinib" parameterization="mechanistic" topology="1C"></div>

## Citation
Garrett M, Knight B, Cortes JE, Deininger MW. Population modeling of bosutinib exposure-response in patients with newly diagnosed chronic phase chronic myeloid leukemia. Cancer medicine 12(17):17981–17992 (2023).
  ·  DOI: [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439)

## Population and dosing

**Population:** adults with newly diagnosed chronic phase chronic myeloid leukemia · condition chronic phase chronic myeloid leukemia · age group adult · n = 574.

**Dosing:** 400, 500 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference.svg" alt="Bosutinib_Garrett2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Bosutinib systemic clearance (CL) | CL | 56.3 | L/h |
| Central volume of distribution (V2) | V | 1325.7 | L |
| First‐order absorption rate constant (ka) | kabs | 0.358 | per hour |
| lag time from dose administration to the beginning of the first‐order absorption | tlag | 0.442 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.818). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bosutinib bioavailability (F) has no reported value and was left at a library default, so the record was held back.**

F uses library defaults, not estimates from this paper. These values affect the simulated profile but are not supported by this paper. Extracted — bosutinib: CL 56.3 L/h, V 1.33e+03 L, kabs 0.358 per hour, tlag 0.442 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of first‐order absorption rate constant: this record has 0.358, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Bosutinib systemic clearance (CL) | `Q22` · CL | 56.3 | L/h | 1.564e-05 | m3/s | L/h | boundary (0.8) | Garrett_2023:other_prose |
| Central volume of distribution (V2) | `Q61` · V | 1325.7 | L | 1.326 | m3 | L | boundary_compartment (0.9) | Garrett_2023:other_prose |
| First‐order absorption rate constant (ka) | `Q49` · kabs | 0.358 | per hour | 9.944e-05 | 1/s | 1/h | review_gapfill (0.7) | Garrett_2023:review |
| lag time from dose administration to the beginning of the first‐order absorption | `Q83` · tlag | 0.442 | h | 1591 | s | h | review_gapfill (0.7) | Garrett_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| cAUC28, μg h/mL | Q19 | llm |
| C avg28, ng/mL | Q71 | llm |
| C trough28, ng/mL | Q37 | llm |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Endpoint: MMR a' — extend the ontology if this is a real PK parameter (source ['cam46439-tbl-0002:row1:col1', 'cam46439-tbl-0002:row1:col2'])
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['cam46439-tbl-0002:row4:col1', 'cam46439-tbl-0002:row4:col2', 'cam46439-tbl-0002:row7:col1', 'cam46439-tbl-0002:row7:col2', 'cam46439-tbl-0002:row10:col1', 'cam46439-tbl-0002:row10:col2', 'cam46439-tbl-0002:row13:col1', 'cam46439-tbl-0002:row13:col2', 'cam46439-tbl-0002:row16:col1', 'cam46439-tbl-0002:row16:col2', 'cam46439-tbl-0002:row19:col1', 'cam46439-tbl-0002:row19:col2', 'cam46439-tbl-0002:row23:col1', 'cam46439-tbl-0002:row23:col2', 'cam46439-tbl-0002:row26:col1', 'cam46439-tbl-0002:row26:col2', 'cam46439-tbl-0002:row29:col1', 'cam46439-tbl-0002:row29:col2', 'cam46439-tbl-0002:row32:col1', 'cam46439-tbl-0002:row32:col2', 'cam46439-tbl-0002:row35:col1', 'cam46439-tbl-0002:row35:col2', 'cam46439-tbl-0002:row38:col1', 'cam46439-tbl-0002:row38:col2'])
- dropped unlinked row (NIL): 'Endpoint: CCyR (Ph + patients only) b' — extend the ontology if this is a real PK parameter (source ['cam46439-tbl-0002:row20:col1', 'cam46439-tbl-0002:row20:col2'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 573 (source ['cam46439-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 554 (source ['cam46439-tbl-0002:footnote']); the table cell was unparseable — needs review
- salvaged Q22 ('Bosutinib systemic clearance (CL)'=56.3) from results prose — parameter table was unreadable
- salvaged Q63 ('Central volume of distribution (V2)'=1325.7) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bosutinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Central volume of distribution (V2)' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Garrett_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Garrett_2023's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[first‐order absorption rate constant]` | 0.358 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[lag time from dose administration to the beginning of the first‐order absorption]` | 0.442 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['cam46439-tbl-0002:row17:col1', 'cam46439-tbl-0002:row17:col2', 'cam46439-tbl-0002:row36:col1', 'cam46439-tbl-0002:row36:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Garrett_2023:review'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['cam46439-tbl-0002:row14:col1', 'cam46439-tbl-0002:row14:col2', 'cam46439-tbl-0002:row33:col1', 'cam46439-tbl-0002:row33:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Garrett_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 56.3 | ['Garrett_2023:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 56.3 L/h | ['Garrett_2023:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.33e+03 L | ['Garrett_2023:other_prose'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=bosutinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference_modelica.zip" download>Bosutinib_Garrett2023_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference_fmi.zip" download>Bosutinib_Garrett2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference_matlab.zip" download>Bosutinib_Garrett2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference_matlab_simbio.zip" download>Bosutinib_Garrett2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference_sbml.zip" download>Bosutinib_Garrett2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference_cellml.zip" download>Bosutinib_Garrett2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5304 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 1591 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0004 | kg |
| input | model | `Cl` | 1.564e-05 | m3/s |
| input | model | `VdPerKg` | 0.01894 | m3/kg |
| input | model | `ka` | 9.944e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Garrett M, Knight B, Cortes JE, Deininger MW. Population modeling of bosutinib exposure-response in patients with newly diagnosed chronic phase chronic myeloid leukemia. Cancer medicine 12(17):17981–17992 (2023). [doi:10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439)

**This record:** Pharmacolibrary v26.09, model `Bosutinib_Garrett2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_bosutinib/Bosutinib_Garrett2023_reference>

```bibtex
@misc{pharmacolibrary_BosutinibGarrett2023reference,
  title  = {{Pharmacolibrary model Bosutinib_Garrett2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_bosutinib/Bosutinib_Garrett2023_reference},
  note   = {Parameters from doi:10.1002/cam4.6439},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 400 mg, single dose, first-order absorption (ka 0.358 /h, lag 26.5 min, F 0.9). Doses in the paper: 400, 500 mg.

<dbs-fmusim paramsurl="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_bosutinib/Bosutinib_Garrett2023_reference/Bosutinib_Garrett2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Bosutinib_Garrett2023_reference_params.json` · controls `Bosutinib_Garrett2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbosutinib%5D%20Bosutinib_Garrett2023_reference&body=Drug%3A%20bosutinib%0ARecord%3A%20Bosutinib_Garrett2023_reference%0APaper%3A%20Garrett_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bosutinib/Bosutinib_Garrett2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:44 UTC</sub>
