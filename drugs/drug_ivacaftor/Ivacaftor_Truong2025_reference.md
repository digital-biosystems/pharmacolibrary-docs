<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;ivacaftor&quot;,&quot;href&quot;:&quot;drugs/drug_ivacaftor/&quot;},{&quot;label&quot;:&quot;Truong_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivacaftor_Truong2025_reference&quot;,&quot;label&quot;:&quot;Truong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ivacaftor — `Ivacaftor_Truong2025_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-07 18:00 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="ivacaftor" model-id="Ivacaftor_Truong2025_reference" status="extracted" stale="true" population="children with cystic fibrosis" measured-compound="ivacaftor" parameterization="apparent" topology="1C"></div>

## Citation
Truong NH, Benaboud S, Bouazza N, Barboura M, Bardin E, Miralles M et al. Elexacaftor/Tezacaftor/Ivacaftor Population Pharmacokinetics in Pediatric Patients With Cystic Fibrosis. Clinical and translational science 18(5):e70245 (2025).
  ·  DOI: [10.1111/cts.70245](https://doi.org/10.1111/cts.70245)

## Population and dosing

**Population:** children with cystic fibrosis · condition cystic fibrosis · age group child · n = 96.

**Dosing:** 80, 100, 200 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed elexacaftor/tezacaftor/ivacaftor, measured ivacaftor.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference.svg" alt="Ivacaftor_Truong2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| T lag (h) | tlag | 0.70 | h |  |
| K a (h−1) | kabs | 0.42 | h−1 |  |
| CL/F (L/h/70 kg) | CL/F | 13.4 | L/h/70 kg | 3.9 |
| V/F (L/70 kg) | V/F | 183 | L/70 kg | 9.9 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ivacaftor model was quarantined because clearance, absorption rate constant and absorption lag time had no source values, so library placeholder values stood in for them, and the invented absorption rate constant was judged unacceptable.**

The record reports ivacaftor CL/F of 13.4 and V/F of 183 L/70 kg, but clearance, absorption rate constant (ka) and absorption lag time (Tlag) had no values in the source, so placeholder values were substituted and the model was held back rather than published with invented numbers. The builder also assumed F=1 and Fm=1 with no molar correction, giving an apparent (/F) parameterization with first-order depot input, and the defaulted ka was judged an invented absorption term, not acceptable. A second reader further disagreed on the primary analyte (recorded as the combination elexacaftor/tezacaftor/ivacaftor versus unknown) and on the additive error parameter identification, and read no value for the proportional error where 0.278 was recorded. Extracted — ivacaftor: CL/F 13.4, V/F 183 L/70 kg, CL 0.37, add_error 0.131, prop_error 0.278.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| T lag (h) | `Q83` · tlag | 0.70 | h | 2520 | s | h |  | space_fold (0.95) | cts70245-tbl-0002:row3:col1, cts70245-tbl-0002:row3:col3 |
| K a (h−1) | `Q49` · kabs | 0.42 | h−1 | 0.0001167 | 1/s | 1/h |  | space_fold (0.95) | cts70245-tbl-0002:row4:col1, cts70245-tbl-0002:row4:col2, cts70245-tbl-0002:row4:col3 |
| CL/F (L/h/70 kg) | `Q27` · CL/F | 13.4 | L/h/70 kg | 3.722e-06 | m3/s | l/(h·70kg) | 3.9 | exact (1) | cts70245-tbl-0002:row5:col1, cts70245-tbl-0002:row5:col2, cts70245-tbl-0002:row5:col3 |
| V/F (L/70 kg) | `Q76` · V/F | 183 | L/70 kg | 0.183 | m3 | l/70kg | 9.9 | exact (1) | cts70245-tbl-0002:row6:col1, cts70245-tbl-0002:row6:col2, cts70245-tbl-0002:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'σ additive (mg/L)' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ proportional' routed out of structural estimates ('Residual error')
- dropped value-less row: 'ELX C max (mg/L)' (captured trailing unit 'mg/L' for child rows)
- dropped value-less row: 'ELX C trough (mg/L)' (captured trailing unit 'mg/L' for child rows)
- dropped value-less row: 'ELX AUC0–24 (mg*h/L)' (captured trailing unit 'mg*h/L' for child rows)
- dropped value-less row: 'TEZ C max (mg/L)' (captured trailing unit 'mg/L' for child rows)
- dropped value-less row: 'TEZ C trough (mg/L)' (captured trailing unit 'mg/L' for child rows)
- dropped value-less row: 'TEZ AUC0–24 (mg*h/L)' (captured trailing unit 'mg*h/L' for child rows)
- dropped value-less row: 'IVA C max (mg/L)' (captured trailing unit 'mg/L' for child rows)
- dropped value-less row: 'IVA C trough (mg/L)' (captured trailing unit 'mg/L' for child rows)
- dropped value-less row: 'IVA AUC0–12 (mg*h/L)' (captured trailing unit 'mg*h/L' for child rows)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ivacaftor
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Truong_2025_table_3:row0:col1 = '9.29 [7.95–11.1]'
- unparsed cell Truong_2025_table_3:row1:col1 = '5.05 [3.96–6.61]'
- unparsed cell Truong_2025_table_3:row2:col1 = '172.9 [142.5–208.2]'
- unparsed cell Truong_2025_table_3:row3:col1 = '6.83 [5.89–8.03]'
- unparsed cell Truong_2025_table_3:row4:col1 = '2.00 [1.55–2.71]'
- unparsed cell Truong_2025_table_3:row5:col1 = '100.8 [87.0–119.8]'
- unparsed cell Truong_2025_table_3:row6:col1 = '1.48 [1.30–1.82]'
- unparsed cell Truong_2025_table_3:row7:col1 = '0.84 [0.68–1.14]'
- unparsed cell Truong_2025_table_3:row8:col1 = '14.1 [12.2–18.0]'
- companion parameter table 3 transcribed (9 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts70245-tbl-0002:row5:col1', 'cts70245-tbl-0002:row5:col2', 'cts70245-tbl-0002:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts70245-tbl-0002:row4:col1', 'cts70245-tbl-0002:row4:col2', 'cts70245-tbl-0002:row4:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['cts70245-tbl-0002:row6:col1', 'cts70245-tbl-0002:row6:col2', 'cts70245-tbl-0002:row6:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts70245-tbl-0002:row3:col1', 'cts70245-tbl-0002:row3:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 13.4 L/h | ['cts70245-tbl-0002:row5:col1', 'cts70245-tbl-0002:row5:col2', 'cts70245-tbl-0002:row5:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 183 L | ['cts70245-tbl-0002:row6:col1', 'cts70245-tbl-0002:row6:col2', 'cts70245-tbl-0002:row6:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 9.29 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 8.77 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 6.83 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 6.69 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.48 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.27 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 5.05 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 5.49 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 2 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 2.05 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.84 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.75 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference_modelica.zip" download>Ivacaftor_Truong2025_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference_fmi.zip" download>Ivacaftor_Truong2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference_matlab.zip" download>Ivacaftor_Truong2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference_matlab_simbio.zip" download>Ivacaftor_Truong2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference_sbml.zip" download>Ivacaftor_Truong2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference_cellml.zip" download>Ivacaftor_Truong2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3925 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 8e-05 | kg |
| input | model | `Cl` | 3.722e-06 | m3/s |
| input | model | `VdPerKg` | 0.002614 | m3/kg |
| input | model | `ka` | 0.0001167 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Truong NH, Benaboud S, Bouazza N, Barboura M, Bardin E, Miralles M et al. Elexacaftor/Tezacaftor/Ivacaftor Population Pharmacokinetics in Pediatric Patients With Cystic Fibrosis. Clinical and translational science 18(5):e70245 (2025). [doi:10.1111/cts.70245](https://doi.org/10.1111/cts.70245)

**This record:** Pharmacolibrary v26.09, model `Ivacaftor_Truong2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference>

```bibtex
@misc{pharmacolibrary_IvacaftorTruong2025reference,
  title  = {{Pharmacolibrary model Ivacaftor_Truong2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference},
  note   = {Parameters from doi:10.1111/cts.70245},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.42 /h, F 1). Doses in the paper: 80, 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference/Ivacaftor_Truong2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ivacaftor_Truong2025_reference_params.json` · controls `Ivacaftor_Truong2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bivacaftor%5D%20Ivacaftor_Truong2025_reference&body=Drug%3A%20ivacaftor%0ARecord%3A%20Ivacaftor_Truong2025_reference%0APaper%3A%20Truong_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:00 UTC</sub>
