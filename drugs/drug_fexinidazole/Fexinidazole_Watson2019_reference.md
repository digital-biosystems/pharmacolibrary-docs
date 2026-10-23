<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;fexinidazole&quot;,&quot;href&quot;:&quot;drugs/drug_fexinidazole/&quot;},{&quot;label&quot;:&quot;Watson_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexinidazole_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fexinidazole — `Fexinidazole_Watson2019_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The fexinidazole sulfone (M2) model was held back because the absorption rate constant ka (and Tlag) was not reported in Watson_2019 and library defaults were used instead, so the absorption input is unsupported by the paper.

<div class="pk-model-meta" hidden drug="fexinidazole" model-id="Fexinidazole_Watson2019_reference" status="needs_review" stale="false" population="healthy volunteers and patients with g-HAT or chronic Chagas disease" measured-compound="fexinidazole sulfone (M2)" parameterization="apparent" topology="1C"></div>

## Citation
Watson JA, Strub-Wourgraft N, Tarral A, Ribeiro I, Tarning J, White NJ. Pharmacokinetic-Pharmacodynamic Assessment of the Hepatic and Bone Marrow Toxicities of the New Trypanoside Fexinidazole. Antimicrobial agents and chemotherapy 63(4) (2019).
  ·  DOI: [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18)

## Population and dosing

**Population:** healthy volunteers and patients with g-HAT or chronic Chagas disease · condition human African trypanosomiasis and chronic Chagas disease · age group adult · n = 462.

**Dosing:** 600, 1200, 1800, 2400 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed fexinidazole, measured fexinidazole sulfone (M2).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference/Fexinidazole_Watson2019_reference.svg" alt="Fexinidazole_Watson2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| g-HAT | equation variable | 203 |  |
| apparent volume of distribution | Vm/F | 80 | liters |
| oral clearance | CLm/F | 3 | liters/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The fexinidazole sulfone (M2) model was held back because the absorption rate constant ka (and Tlag) was not reported in Watson_2019 and library defaults were used instead, so the absorption input is unsupported by the paper.**

The record reports fexinidazole sulfone (M2) apparent parameters Vm/F = 80 liters and CLm/F = 3 liters/h, with F = 1, Fm = 1 and no molar correction assumed. The deviations check failed because ka was defaulted rather than estimated, which the adjudication ruled not acceptable, along with the invented absorption. The established finding is that the ka library defaults affect the simulated profile but are not supported by this paper and would need to be extracted or explicitly justified as conventions. Extracted — fexinidazole sulfone (M2): Vm/F 80 liters, CLm/F 3 liters/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fexinidazole, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| g-HAT | `Q900` · equation variable | 203 |  |  |  |  | llm (0.6) | T1:row5:col3, T1:row5:col4, T1:row5:col5, T1:row6:col3, T1:row6:col4, T1:row6:col5 |
| apparent volume of distribution | `Q367` · Vm/F | 80 | liters | 0.08 | m3 | L | exact (1) | Watson_2019:results_prose |
| oral clearance | `Q351` · CLm/F | 3 | liters/h | 8.333e-07 | m3/s | L/h | exact (1) | Watson_2019:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- column 'no. of subjects' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Phase 1' — extend the ontology if this is a real PK parameter (source ['T1:row2:col3', 'T1:row2:col4', 'T1:row2:col5', 'T1:row3:col3', 'T1:row3:col4', 'T1:row3:col5', 'T1:row3:col6', 'T1:row4:col3', 'T1:row4:col4', 'T1:row4:col5'])
- dropped unlinked row (NIL): 'Chagas' — extend the ontology if this is a real PK parameter (source ['T1:row7:col3', 'T1:row7:col4', 'T1:row7:col5'])
- salvaged Q76 ('apparent volume of distribution'=80) from results prose — parameter table was unreadable
- salvaged Q27 ('oral clearance'=3) from results prose — parameter table was unreadable
- metabolite fexinidazole sulfone (m2): Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite fexinidazole sulfone (m2): Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fexinidazole sulfone (M2)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles: 3 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 3/3 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'fexinidazole sulfone (M2)' ('fexinidazole sulfone metabolite (M2)') — left in mass units
- molar mass: none found for 'fexinidazole sulfone (M2)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T1:row2:col1 = 'FEX001'
- unparsed cell T1:row2:col6 = '17 (17–20)'
- unparsed cell T1:row2:col7 = '1.4 (1–813)'
- unparsed cell T1:row3:col1 = 'FEX002'
- unparsed cell T1:row3:col7 = '45 (41–61)'
- unparsed cell T1:row4:col1 = 'FEX003'
- unparsed cell T1:row4:col6 = '17 (11–17)'
- unparsed cell T1:row4:col7 = '178 (19–229)'
- unparsed cell T1:row5:col1 = 'FEX004'
- unparsed cell T1:row5:col6 = '6 (3–6)'
- unparsed cell T1:row5:col7 = '228 (195–480)'
- unparsed cell T1:row6:col1 = 'FEX006'
- unparsed cell T1:row6:col6 = '5 (4–5)'
- unparsed cell T1:row6:col7 = '336 (247–420)'
- unparsed cell T1:row7:col1 = 'CH-FEX001'
- unparsed cell T1:row7:col6 = '3 (1–6)'
- unparsed cell T1:row7:col7 = '251 (61–1400)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 80 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` |  | 80 | only_one_extracted |
| `gpt-oss-120b` | `parameters[g-hat]` | 203 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral clearance]` | 3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral clearance]` |  | 3 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fexinidazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | fexinidazole sulfone (M2) | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 2 |
| C0b_disposition_core | pass |  |
| C0c_disposition_complete | pass |  |
| C7_apparent_coherence | pass |  |
| C8_topology | pass |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=fexinidazole sulfone (M2)) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference/Fexinidazole_Watson2019_reference_modelica.zip" download>Fexinidazole_Watson2019_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference/Fexinidazole_Watson2019_reference_fmi.zip" download>Fexinidazole_Watson2019_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
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
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 8.333e-07 | m3/s |
| input | model | `VdPerKg` | 0.001143 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Watson JA, Strub-Wourgraft N, Tarral A, Ribeiro I, Tarning J, White NJ. Pharmacokinetic-Pharmacodynamic Assessment of the Hepatic and Bone Marrow Toxicities of the New Trypanoside Fexinidazole. Antimicrobial agents and chemotherapy 63(4) (2019). [doi:10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18)

**This record:** Pharmacolibrary v26.09, model `Fexinidazole_Watson2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference>

```bibtex
@misc{pharmacolibrary_FexinidazoleWatson2019reference,
  title  = {{Pharmacolibrary model Fexinidazole_Watson2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference},
  note   = {Parameters from doi:10.1128/AAC.02515-18},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 600, 1200, 1800, 2400 mg.

<dbs-fmusim paramsurl="drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference/Fexinidazole_Watson2019_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference/Fexinidazole_Watson2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fexinidazole_Watson2019_reference_params.json` · controls `Fexinidazole_Watson2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfexinidazole%5D%20Fexinidazole_Watson2019_reference&body=Drug%3A%20fexinidazole%0ARecord%3A%20Fexinidazole_Watson2019_reference%0APaper%3A%20Watson_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:43 UTC</sub>
