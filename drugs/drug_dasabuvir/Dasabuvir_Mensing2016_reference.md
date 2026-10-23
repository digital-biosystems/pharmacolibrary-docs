<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dasabuvir&quot;,&quot;href&quot;:&quot;drugs/drug_dasabuvir/&quot;},{&quot;label&quot;:&quot;Mensing_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dasabuvir_Mensing2016_reference&quot;,&quot;label&quot;:&quot;Mensing_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dasabuvir — `Dasabuvir_Mensing2016_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-07 14:20 UTC) predates the latest extraction (2026-10-07 15:50 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="dasabuvir" model-id="Dasabuvir_Mensing2016_reference" status="extracted" stale="true" population="adults with chronic HCV genotype 1 infection" measured-compound="dasabuvir" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Mensing S, Polepally AR, König D, Khatri A, Liu W, Podsadecki TJ et al. Population Pharmacokinetics of Paritaprevir, Ombitasvir, Dasabuvir, Ritonavir, and Ribavirin in Patients with Hepatitis C Virus Genotype 1 Infection: Combined Analysis from 9 Phase 1b/2 Studies. The AAPS journal 18(1):270–280 (2016).
  ·  DOI: [10.1208/s12248-015-9846-1](https://doi.org/10.1208/s12248-015-9846-1)

## Population and dosing

**Population:** adults with chronic HCV genotype 1 infection · condition chronic hepatitis C virus genotype 1 infection · age group adult.

**Dosing:** 25, 100, 150, 400, 600 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference.svg" alt="Dasabuvir_Mensing2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| k a , day -1 | kabs | 5.97 | day -1 |
| CL/F, L/day | CL/F | 3770 | L/day |
| Vc/F, L | V1/F | 638 | L |
| Q/F, L/day | Q/F | 254 | L/day |
| Vp/F, L | V2/F | 5110 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.083). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Dasabuvir intercompartmental clearance (-224 L/day) and peripheral volume (-345 L) are physically implausible negative values.**

The record lists the apparent intercompartmental clearance between the central and peripheral compartments as -224 L/day. It also specifies the volume of distribution of the peripheral compartment as -345 L. These negative physiological parameters were deemed impossible, resulting in the model's rejection. Extracted — dasabuvir: kabs 5.97 day -1, CL/F 3.77e+03 L/day, V1/F 638 L, Q/F -224 L/day, V2/F -345 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has dasabuvir, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k a , day -1 | `Q49` · kabs | 5.97 | day -1 | 6.91e-05 | 1/s | 1/h | space_fold (0.95) | Mensing_2016:discussion_prose |
| CL/F, L/day | `Q27` · CL/F | 3770 | L/day | 4.363e-05 | m3/s | L/h | exact (1) | Mensing_2016:discussion_prose |
| Vc/F, L | `Q290` · V1/F | 638 | L | 0.638 | m3 | L | exact (1) | Mensing_2016:discussion_prose |
| Q/F, L/day | `Q69` · Q/F | 254 | L/day | 2.94e-06 | m3/s | L/h | exact (1) | Mensing_2016:discussion_prose |
| Vp/F, L | `Q82` · V2/F | 5110 | L | 5.11 | m3 | L | exact (1) | Mensing_2016:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- salvaged Q49 ('k a , day -1'=5.97) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F, L/day'=3770) from results prose — parameter table was unreadable
- salvaged Q290 ('Vc/F, L'=638) from results prose — parameter table was unreadable
- salvaged Q69 ('Q/F, L/day'=254) from results prose — parameter table was unreadable
- salvaged Q82 ('Vp/F, L'=5110) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dasabuvir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell Mensing_2016_table_p7_1:row1:col1 = '5.97 [5.47, 6.88]'
- unparsed cell Mensing_2016_table_p7_1:row1:col2 = '4.97 [4.57, 5.36]'
- unparsed cell Mensing_2016_table_p7_1:row1:col3 = '14.0 [12.7, 15.1]'
- unparsed cell Mensing_2016_table_p7_1:row1:col4 = '4.08 [3.93, 4.19]'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.083 (1/12 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['dasabuvir', 'paritaprevir', 'metabolism']] | [['dasabuvir', 'paritaprevir', 'interaction']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | 3770 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 3770 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 5.97 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` |  | 5.97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 254 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 638 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 638 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 5110 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | dasabuvir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | dasabuvir | unknown | mismatch |

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
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 157 L/h | ['Mensing_2016:discussion_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 638 L | ['Mensing_2016:discussion_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 5.11e+03 L | ['Mensing_2016:discussion_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference_modelica.zip" download>Dasabuvir_Mensing2016_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference_fmi.zip" download>Dasabuvir_Mensing2016_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference_matlab.zip" download>Dasabuvir_Mensing2016_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference_matlab_simbio.zip" download>Dasabuvir_Mensing2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference_sbml.zip" download>Dasabuvir_Mensing2016_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference_cellml.zip" download>Dasabuvir_Mensing2016_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4936 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-05 | kg |
| input | model | `Cl` | 4.363e-05 | m3/s |
| input | model | `VdPerKg` | 0.009114 | m3/kg |
| input | model | `ka` | 6.91e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Mensing S, Polepally AR, König D, Khatri A, Liu W, Podsadecki TJ et al. Population Pharmacokinetics of Paritaprevir, Ombitasvir, Dasabuvir, Ritonavir, and Ribavirin in Patients with Hepatitis C Virus Genotype 1 Infection: Combined Analysis from 9 Phase 1b/2 Studies. The AAPS journal 18(1):270–280 (2016). [doi:10.1208/s12248-015-9846-1](https://doi.org/10.1208/s12248-015-9846-1)

**This record:** Pharmacolibrary v26.09, model `Dasabuvir_Mensing2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference>

```bibtex
@misc{pharmacolibrary_DasabuvirMensing2016reference,
  title  = {{Pharmacolibrary model Dasabuvir_Mensing2016_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference},
  note   = {Parameters from doi:10.1208/s12248-015-9846-1},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 25 mg, single dose, first-order absorption (ka 0.249 /h, F 1). Doses in the paper: 25, 100, 150, 400, 600 mg.

<dbs-fmusim paramsurl="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference/Dasabuvir_Mensing2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dasabuvir_Mensing2016_reference_params.json` · controls `Dasabuvir_Mensing2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdasabuvir%5D%20Dasabuvir_Mensing2016_reference&body=Drug%3A%20dasabuvir%0ARecord%3A%20Dasabuvir_Mensing2016_reference%0APaper%3A%20Mensing_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:50 UTC</sub>
