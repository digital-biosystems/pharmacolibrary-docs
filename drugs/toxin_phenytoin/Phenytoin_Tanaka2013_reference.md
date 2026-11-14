<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenytoin&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/&quot;},{&quot;label&quot;:&quot;Tanaka_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenytoin_Dickinson1989_reference&quot;,&quot;label&quot;:&quot;Dickinson_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Dickinson1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Guk2019_reference&quot;,&quot;label&quot;:&quot;Guk_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Guk2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Ku2016_reference&quot;,&quot;label&quot;:&quot;Ku_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Ku2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Li2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Tanaka2013_reference&quot;,&quot;label&quot;:&quot;Tanaka_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Phenytoin — `Phenytoin_Tanaka2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V3 has no unit.

<div class="pk-model-meta" hidden drug="Phenytoin" model-id="Phenytoin_Tanaka2013_reference" status="needs_review" stale="false" population="pediatric patients, adult patients, and healthy volunteers" measured-compound="phenytoin" parameterization="apparent" topology="1C"></div>

## Citation
Tanaka J, Kasai H, Shimizu K, Shimasaki S, Kumagai Y. Population pharmacokinetics of phenytoin after intravenous administration of fosphenytoin sodium in pediatric patients, adult patients, and healthy volunteers. European journal of clinical pharmacology 69(3):489-497 (2013).
  ·  DOI: [10.1007/s00228-012-1373-8](https://doi.org/10.1007/s00228-012-1373-8)

## Population and dosing

**Population:** pediatric patients, adult patients, and healthy volunteers · condition neurosurgical and epileptic subjects; healthy volunteers · age group mixed.

**Dosing:** 1050, 1260, 1575, 26250, 39410, 52500 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed fosphenytoin sodium, measured phenytoin.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference/Phenytoin_Tanaka2013_reference.svg" alt="Phenytoin_Tanaka2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h)a | CLm/F | 1.61 | L/h | 0.194 (None% RSE) |
| V2 (L)a | V1 | 20.8 | L |  |
| Q (L/h) | Q | 53.0 | L/h |  |
| V3 (L)a | V2 | 26.0 | L | 0.161 (None% RSE) |
| ΘWT (V3) | V3 | 0.584 |  | 0.0430 (None% RSE) |
| K12 (1/h) | kfm | 5.02 | 1/h |  |
| Ka1 (1/h), fosphenytoin | kabs | 1.99 | (1/h) |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V3 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — phenytoin: CLm/F 1.61 L/h, V1 20.8 L, Q 53 L/h, V2 26 L, V3 0.584, kfm 5.02 1/h, kabs 1.99 (1/h).

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h)a | `Q351` · CLm/F | 1.61 | L/h | 4.472e-07 | m3/s | l/h | exact (1) | Tab3:row2:col2 | 0.194 (None% RSE) |
| V2 (L)a | `Q63` · V1 | 20.8 | L | 0.0208 | m3 | l | exact (1) | Tab3:row4:col2 |  |
| Q (L/h) | `Q30` · Q | 53.0 | L/h | 1.472e-05 | m3/s | l/h | exact (1) | Tab3:row5:col2 |  |
| V3 (L)a | `Q64` · V2 | 26.0 | L | 0.026 | m3 | l | exact (1) | Tab3:row6:col2 | 0.161 (None% RSE) |
| ΘWT (V3) | `Q77` · V3 | 0.584 |  |  |  |  | llm (0.6) | Tab3:row7:col2 | 0.0430 (None% RSE) |
| K12 (1/h) | `Q305` · kfm | 5.02 | 1/h | 0.001394 | 1/s | 1/h | exact (1) | Tab3:row8:col2 |  |
| Ka1 (1/h), fosphenytoin | `Q49` · kabs | 1.99 | (1/h) | 0.0005528 | 1/s | 1/h | review_gapfill (0.7) | Ku_2016:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- unit_dimension_mismatch: 'ΘWT (CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('ΘWT (CL)', value '0.569') — already have one for this compound
- dropped value-less row: 'aCL, V2, and V3'
- metabolite phenytoin: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=phenytoin
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 5 linked by role; re-tagged parent→phenytoin ×12
- gap-filled Q49 (kabs) from Ku_2016's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q77 — no SI value to build from)

**Extraction notes:**
- LLM selected parameter table(s) 3
- toxin: the located table(s) gave no kinetic value — 56 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row5:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Tab3:row8:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ku_2016:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab3:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row6:col2'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 |  | ['Tab3:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 20.8 L | ['Tab3:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 26 L | ['Tab3:row6:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference/Phenytoin_Tanaka2013_reference_modelica.zip" download>Phenytoin_Tanaka2013_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference/Phenytoin_Tanaka2013_reference_fmi.zip" download>Phenytoin_Tanaka2013_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2523 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00105 | kg |
| input | model | `Cl` | 4.472e-07 | m3/s |
| input | model | `VdPerKg` | 0.0002971 | m3/kg |
| input | model | `ka` | 0.001394 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Tanaka J, Kasai H, Shimizu K, Shimasaki S, Kumagai Y. Population pharmacokinetics of phenytoin after intravenous administration of fosphenytoin sodium in pediatric patients, adult patients, and healthy volunteers. European journal of clinical pharmacology 69(3):489-497 (2013). [doi:10.1007/s00228-012-1373-8](https://doi.org/10.1007/s00228-012-1373-8)

**This record:** Pharmacolibrary, model `Phenytoin_Tanaka2013_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference>

```bibtex
@misc{pharmacolibrary_PhenytoinTanaka2013reference,
  title  = {{Pharmacolibrary model Phenytoin_Tanaka2013_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference},
  note   = {Parameters from doi:10.1007/s00228-012-1373-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 1050 mg, single dose, first-order absorption (ka 5.02 /h, F 1). Doses in the paper: 1050, 1260, 1575, 26250, 39410, 52500 mg.

<dbs-fmusim paramsurl="drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference/Phenytoin_Tanaka2013_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference/Phenytoin_Tanaka2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Phenytoin_Tanaka2013_reference_params.json` · controls `Phenytoin_Tanaka2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenytoin%5D%20Phenytoin_Tanaka2013_reference&body=Drug%3A%20phenytoin%0ARecord%3A%20Phenytoin_Tanaka2013_reference%0APaper%3A%20Tanaka_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:28 UTC</sub>
