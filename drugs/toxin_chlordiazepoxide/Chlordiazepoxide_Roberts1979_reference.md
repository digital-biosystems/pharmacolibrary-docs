<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Chlordiazepoxide&quot;,&quot;href&quot;:&quot;drugs/toxin_chlordiazepoxide/&quot;},{&quot;label&quot;:&quot;Roberts_1979 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chlordiazepoxide_Greenblatt1978v2_reference&quot;,&quot;label&quot;:&quot;Greenblatt_1978_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Greenblatt1978v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chlordiazepoxide_Roberts1979_reference&quot;,&quot;label&quot;:&quot;Roberts_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Chlordiazepoxide_Sellers1979_reference&quot;,&quot;label&quot;:&quot;Sellers_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Sellers1979_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Chlordiazepoxide — `Chlordiazepoxide_Roberts1979_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Chlordiazepoxide" model-id="Chlordiazepoxide_Roberts1979_reference" status="extracted" stale="false" population="healthy young men and women, and women on oral contraceptive steroids" measured-compound="Chlordiazepoxide" parameterization="mechanistic" topology="1C"></div>

## Citation
Roberts RK, Desmond PV, Wilkinson GR, Schenker S. Disposition of chlordiazepoxide: sex differences and effects of oral contraceptives. Clinical pharmacology and therapeutics 25(6):826–831 (1979).
  ·  DOI: [10.1002/cpt1979256826](https://doi.org/10.1002/cpt1979256826)

## Population and dosing

**Population:** healthy young men and women, and women on oral contraceptive steroids · condition healthy · age group adult · n = 29.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference.svg" alt="Chlordiazepoxide_Roberts1979_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| elimination half-life (t1/2(beta)) in men | t1/2β | 8.9 | hr |
| protein binding in men | fu | 97.0 |  |
| clearance of unbound drug in men | CLu | 15.6 | ml/min/kg |
| volume of distribution women on OC steroids | V | 0.62 | l/kg |
| elimination t1/2 women on OC steroids | t1/2z | 24.3 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.286). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of clearance of unbound drug: this record has none, the second reading 8.7; it also differs on 9 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| elimination half-life (t1/2(beta)) in men | `Q60` · t1/2β | 8.9 | hr | 3.204e+04 | s | h | half_life_rule (0.95) | Roberts_1979:abstract |
| protein binding in men | `Q46` · fu | 97.0 |  | 0.97 |  |  | llm_confirmed (0.6) | Roberts_1979:abstract |
| clearance of unbound drug in men | `Q24` · CLu | 15.6 | ml/min/kg | 1.82e-05 | m3/s | ml/(min·kg) | llm_corrected (0.6) | Roberts_1979:abstract |
| volume of distribution women on OC steroids | `Q61` · V | 0.62 | l/kg | 0.0434 | m3 | l/kg | llm_confirmed (0.6) | Roberts_1979:abstract |
| elimination t1/2 women on OC steroids | `Q57` · t1/2z | 24.3 | hr | 8.748e+04 | s | h | llm_confirmed (0.6) | Roberts_1979:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q60 ('elimination half-life (t1/2(beta)) in women', value 14.8) — already have one for this compound
- 'protein binding in men' → Q46: printed without a unit and above 1 — read as a percentage
- 'protein binding in women' → Q46: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q46 ('protein binding in women', value 95.5) — already have one for this compound
- dropped duplicate Q24 ('clearance of unbound drug in women', value 8.7) — already have one for this compound
- 'plasma binding women on OC steroids' → Q46: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q46 ('plasma binding women on OC steroids', value 93.6) — already have one for this compound
- 'plasma binding women not on OC steroids' → Q46: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q46 ('plasma binding women not on OC steroids', value 95.5) — already have one for this compound
- dropped duplicate Q61 ('volume of distribution women not on OC steroids', value 0.4) — already have one for this compound
- dropped duplicate Q57 ('elimination t1/2 women not on OC steroids', value 14.8) — already have one for this compound
- dropped duplicate Q24 ('clearance of unbound drug women on OC steroids', value 5.7) — already have one for this compound
- dropped duplicate Q24 ('clearance of unbound drug women not on OC steroids', value 8.7) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Chlordiazepoxide
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- derived CL=1.23797 L/h from ln2/t½z × V = CL (Q57 × Q61); not separately reported

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Roberts_1979_metadata.yaml (14 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clearance of unbound drug in men]` | 15.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance of unbound drug]` |  | 8.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life (t1/2(beta)) in men]` | 8.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life (t1/2(beta))]` |  | 14.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination t1/2 women on oc steroids]` | 24.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination t1/2]` |  | 24.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[protein binding in men]` | 97.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[protein binding]` |  | 95.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution women on oc steroids]` | 0.62 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` |  | 0.62 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] |  | ['Roberts_1979:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Roberts_1979:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Roberts_1979:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Roberts_1979:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 15.6 | ['Roberts_1979:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q24 | pass | clearance within physiological range | 65.5 L/h | ['Roberts_1979:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 43.4 L | ['Roberts_1979:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference_modelica.zip" download>Chlordiazepoxide_Roberts1979_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference_fmi.zip" download>Chlordiazepoxide_Roberts1979_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference_matlab.zip" download>Chlordiazepoxide_Roberts1979_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference_matlab_simbio.zip" download>Chlordiazepoxide_Roberts1979_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference_sbml.zip" download>Chlordiazepoxide_Roberts1979_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference_cellml.zip" download>Chlordiazepoxide_Roberts1979_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2998 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 3.439e-07 | m3/s |
| input | model | `VdPerKg` | 0.00062 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Roberts RK, Desmond PV, Wilkinson GR, Schenker S. Disposition of chlordiazepoxide: sex differences and effects of oral contraceptives. Clinical pharmacology and therapeutics 25(6):826–831 (1979). [doi:10.1002/cpt1979256826](https://doi.org/10.1002/cpt1979256826)

**This record:** Pharmacolibrary, model `Chlordiazepoxide_Roberts1979_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference>

```bibtex
@misc{pharmacolibrary_ChlordiazepoxideRoberts1979reference,
  title  = {{Pharmacolibrary model Chlordiazepoxide_Roberts1979_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference},
  note   = {Parameters from doi:10.1002/cpt1979256826},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 50 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 50 mg parenteral (N05BA02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference/Chlordiazepoxide_Roberts1979_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Chlordiazepoxide_Roberts1979_reference_params.json` · controls `Chlordiazepoxide_Roberts1979_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlordiazepoxide%5D%20Chlordiazepoxide_Roberts1979_reference&body=Drug%3A%20chlordiazepoxide%0ARecord%3A%20Chlordiazepoxide_Roberts1979_reference%0APaper%3A%20Roberts_1979%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_chlordiazepoxide/Chlordiazepoxide_Roberts1979_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 04:28 UTC</sub>
