<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;triheptanoin&quot;,&quot;href&quot;:&quot;drugs/drug_triheptanoin/&quot;},{&quot;label&quot;:&quot;Lee_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triheptanoin_Lee2022_reference&quot;,&quot;label&quot;:&quot;Lee_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# triheptanoin — `Triheptanoin_Lee2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-05 12:20 UTC) predates the latest extraction (2026-10-07 17:56 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="triheptanoin" model-id="Triheptanoin_Lee2022_reference" status="extracted" stale="true" population="healthy adults and patients with long-chain fatty acid oxidation disorders" measured-compound="heptanoate" parameterization="apparent" topology="1C"></div>

## Citation
Lee SK, Gosselin NH, Jomphe C, McKeever K, Putnam W. Population Pharmacokinetics of Heptanoate in Healthy Subjects and Patients With Long-Chain Fatty Acid Oxidation Disorders Treated With Triheptanoin. Clinical pharmacology in drug development 11(11):1264–1272 (2022).
  ·  DOI: [10.1002/cpdd.1145](https://doi.org/10.1002/cpdd.1145)

## Population and dosing

**Population:** healthy adults and patients with long-chain fatty acid oxidation disorders · condition long-chain fatty acid oxidation disorders · age group mixed.

**Dosing:** 87500 mg, oral, multiple, every 6 h.

**Dosed compound ≠ measured compound:** dosed trihexanoin, measured heptanoate.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference/Triheptanoin_Lee2022_reference.svg" alt="Triheptanoin_Lee2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| F1 | Fab | 0.562 |  |
| Ka1 (h−1) | kabs | 0.425 | h−1 |
| Lag2 (h) | tlag | 3.74 | h |
| Expo_CL | CLm/F | 1.07 | L/h |
| V/F0 | V | 5.56 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The apparent clearance of heptanoate is reported as 19%, a dimensionless value incompatible with the required volume-per-time units.**

The record lists the apparent clearance of the metabolite heptanoate as 19 with a unit of percent. This dimensionless value creates a dimensional mismatch for a structural parameter that requires volume per time. The record was built from the abstract alone, so these summary statistics stand in for a fitted model. Extracted — heptanoate: CLm/F 19 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trihexanoin, the second reading triheptanoin; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F1 | `Q40` · Fab | 0.562 |  |  |  |  | exact (1) | cpdd1145-tbl-0003:row1:col1 |
| Ka1 (h−1) | `Q49` · kabs | 0.425 | h−1 | 0.0001181 | 1/s | 1/h | exact (1) | cpdd1145-tbl-0003:row2:col1 |
| Lag2 (h) | `Q83` · tlag | 3.74 | h | 1.346e+04 | s | h | exact (1) | cpdd1145-tbl-0003:row4:col1 |
| Expo_CL | `Q351` · CLm/F | 1.07 | L/h | 2.972e-07 | m3/s | L/h | llm (0.6) | cpdd1145-tbl-0003:row7:col1 |
| V/F0 | `Q61` · V | 5.56 | L | 0.00556 | m3 | L | exact (1) | cpdd1145-tbl-0003:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q49 ('Ka2 (h−1)', value '0.507') — already have one for this compound
- dropped unlinked row (NIL): 'MAX' — extend the ontology if this is a real PK parameter (source ['cpdd1145-tbl-0003:row8:col1'])
- dropped unlinked row (NIL): 'T50' — extend the ontology if this is a real PK parameter (source ['cpdd1145-tbl-0003:row9:col1'])
- dropped unlinked row (NIL): 'Expo_V' — extend the ontology if this is a real PK parameter (source ['cpdd1145-tbl-0003:row12:col1'])
- routed 'Log‐additive error' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'Expo_CL' → L/h (from the popPK convention: 'The paper text states the typical CL/F of heptanoate is 544 L/h, establishing the unit for total clearance. The value 1.')
- implicit units: 'V/F0' → L (from the popPK convention: 'The parameter is V1, the volume of distribution of the central compartment. In population pharmacokinetics, volumes of d')
- metabolite heptanoate: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V/F0' Q63→Q61 for heptanoate — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=heptanoate
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 4 linked by role
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'heptanoate' (LLM) — left in mass units
- molar mass: none found for 'heptanoate' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'heptanoate', not triheptanoin — the review values are the parent's

**Extraction notes:**
- unparsed cell cpdd1145-tbl-0003:row1:col2 = '1.09 (46.7%)'
- unparsed cell cpdd1145-tbl-0003:row2:col2 = '134% (45.0%)'
- companion parameter table S4 transcribed (0 record(s))
- LLM selected parameter table(s) 3, S4
- dropped sensitivity-analysis table(s) S3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[expo_v]` |  | 1.13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[max]` |  | 0.450 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trihexanoin | triheptanoin | mismatch |

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['cpdd1145-tbl-0003:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpdd1145-tbl-0003:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cpdd1145-tbl-0003:row11:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['cpdd1145-tbl-0003:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.56 L | ['cpdd1145-tbl-0003:row11:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference/Triheptanoin_Lee2022_reference_modelica.zip" download>Triheptanoin_Lee2022_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference/Triheptanoin_Lee2022_reference_fmi.zip" download>Triheptanoin_Lee2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
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
| input | dosing | `Tlag` | 1.346e+04 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0875 | kg |
| input | model | `Cl` | 2.972e-07 | m3/s |
| input | model | `VdPerKg` | 7.943e-05 | m3/kg |
| input | model | `ka` | 0.0001181 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Lee SK, Gosselin NH, Jomphe C, McKeever K, Putnam W. Population Pharmacokinetics of Heptanoate in Healthy Subjects and Patients With Long-Chain Fatty Acid Oxidation Disorders Treated With Triheptanoin. Clinical pharmacology in drug development 11(11):1264–1272 (2022). [doi:10.1002/cpdd.1145](https://doi.org/10.1002/cpdd.1145)

**This record:** Pharmacolibrary v26.09, model `Triheptanoin_Lee2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference>

```bibtex
@misc{pharmacolibrary_TriheptanoinLee2022reference,
  title  = {{Pharmacolibrary model Triheptanoin_Lee2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference},
  note   = {Parameters from doi:10.1002/cpdd.1145},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 87500 mg, single dose, first-order absorption (ka 0.425 /h, lag 224 min, F 1). Dose in the paper: 87500 mg.

<dbs-fmusim paramsurl="drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference/Triheptanoin_Lee2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference/Triheptanoin_Lee2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Triheptanoin_Lee2022_reference_params.json` · controls `Triheptanoin_Lee2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriheptanoin%5D%20Triheptanoin_Lee2022_reference&body=Drug%3A%20triheptanoin%0ARecord%3A%20Triheptanoin_Lee2022_reference%0APaper%3A%20Lee_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:56 UTC</sub>
