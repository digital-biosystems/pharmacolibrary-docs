<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;lutetium (177Lu) oxodotreotide&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_oxodotreotide/&quot;},{&quot;label&quot;:&quot;Barakat_2023 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lutetium177luOxodotreotide_Barakat2023_base&quot;,&quot;label&quot;:&quot;Barakat_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Lutetium177luOxodotreotide_Barakat2023_base_structural_model&quot;,&quot;label&quot;:&quot;Barakat_2023_base_structural_model_estimate_value_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base_structural_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lutetium177luOxodotreotide_Barakat2023_final&quot;,&quot;label&quot;:&quot;Barakat_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_final.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lutetium177luOxodotreotide_Sood2026_netter_1_estimate&quot;,&quot;label&quot;:&quot;Sood_2026_netter_1_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Sood2026_netter_1_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lutetium177luOxodotreotide_Sood2026_netter_p_estimate&quot;,&quot;label&quot;:&quot;Sood_2026_netter_p_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Sood2026_netter_p_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lutetium (177Lu) oxodotreotide — `Lutetium177luOxodotreotide_Barakat2023_base`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Reproduces paper), but the paper was screened again on 2026-10-07 17:09 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="lutetium (177Lu) oxodotreotide" model-id="Lutetium177luOxodotreotide_Barakat2023_base" status="extracted" stale="true" population="patients with gastroenteropancreatic neuroendocrine tumors" measured-compound="lutetium_177lu_oxodotreotide" parameterization="mechanistic" topology="2C"></div>

## Citation
Barakat A, Santoro L, Vivien M, Kotzki PO, Deshayes E, Khier S. Clinical Pharmacokinetics of Radiopharmaceuticals from SPECT/CT Image Acquisition by Contouring in Patients with Gastroenteropancreatic Neuroendocrine Tumors: Lu-177 DOTATATE (Lutathera. European journal of drug metabolism and pharmacokinetics 48(4):329–339 (2023).
  ·  DOI: [10.1007/s13318-023-00829-5](https://doi.org/10.1007/s13318-023-00829-5)

## Population and dosing

**Population:** patients with gastroenteropancreatic neuroendocrine tumors · condition gastroenteropancreatic neuroendocrine tumors · age group adult · n = &gt;=28.

**Dosing:** 7.4 GBq, iv, multiple, every 560 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base.svg" alt="Lutetium177luOxodotreotide_Barakat2023_base diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 4.99 | L/h |  |
| V1 (L) | V1 | 8.18 | L | 28.9 (None% RSE) |
| Q (L/h) | Q | 9.84 | L/h |  |
| V2 (L) | V2 | 7.80 | L | 30.1 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 4.99 | L/h | 1.386e-06 | m3/s | l/h | exact (1) | Barakat_2023_table_p7_2:row0:col2 |  |
| V1 (L) | `Q63` · V1 | 8.18 | L | 0.00818 | m3 | l | exact (1) | Barakat_2023_table_p7_2:row1:col2 | 28.9 (None% RSE) |
| Q (L/h) | `Q30` · Q | 9.84 | L/h | 2.733e-06 | m3/s | l/h | exact (1) | Barakat_2023_table_p7_2:row2:col2 |  |
| V2 (L) | `Q64` · V2 | 7.80 | L | 0.0078 | m3 | l | exact (1) | Barakat_2023_table_p7_2:row3:col2 | 30.1 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lutetium_177lu_oxodotreotide
- model-stage split: 'structural model % rse' is the base model of Barakat_2023 (paper reports 3 stages: final model estimate value (cv, %), structural model % rse, structural model estimate value (cv, %)); same population, different model-building step
- molar mass: none found for 'lutetium_177lu_oxodotreotide' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Barakat_2023_table_p7_2:row0:col5 = '2.61 [2.28–2.96]'
- unparsed cell Barakat_2023_table_p7_2:row1:col5 = '75.2 [60.4–91.4]'
- unparsed cell Barakat_2023_table_p7_2:row2:col5 = '6.80 [4.96–9.11]'
- unparsed cell Barakat_2023_table_p7_2:row3:col5 = '189 [157–226]'
- unparsed cell Barakat_2023_table_p7_2:row4:col5 = '0.017 [0.006–0.02]'
- unparsed cell Barakat_2023_table_p7_2:row5:col1 = '0.116 (35%)'
- unparsed cell Barakat_2023_table_p7_2:row5:col3 = '0.109 (34%)'
- unparsed cell Barakat_2023_table_p7_2:row5:col5 = '0.101 [0.0462–0.178]'
- unparsed cell Barakat_2023_table_p7_2:row6:col1 = '0.231 (51%)'
- unparsed cell Barakat_2023_table_p7_2:row6:col3 = '0.103 (33%)'
- unparsed cell Barakat_2023_table_p7_2:row6:col5 = '0.130 [1.032 × 10⁻⁵–0.331]'
- unparsed cell Barakat_2023_table_p7_2:row7:col1 = '0.167 (43%)'
- unparsed cell Barakat_2023_table_p7_2:row7:col3 = '0.122 (36%)'
- unparsed cell Barakat_2023_table_p7_2:row7:col5 = '0.0657 [1.22 × 10⁻⁵–0.231]'
- unparsed cell Barakat_2023_table_p7_2:row8:col1 = '0.249 (53%)'
- unparsed cell Barakat_2023_table_p7_2:row8:col3 = '0.198 (47%)'
- unparsed cell Barakat_2023_table_p7_2:row8:col5 = '0.146 [0.0488–0.293]'
- unparsed cell Barakat_2023_table_p7_2:row9:col1 = '0.028 (17%)'
- unparsed cell Barakat_2023_table_p7_2:row9:col3 = '0.039 (20%)'
- unparsed cell Barakat_2023_table_p7_2:row9:col5 = '0.06 [0.045–0.072]'
- transposed table Barakat_2023_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (18 record(s))
- unparsed cell Barakat_2023_table_p7_1:row0:col3 = '1.68 [0.411–3.02]'
- unparsed cell Barakat_2023_table_p7_1:row0:col4 = '4.50 (31%)'
- unparsed cell Barakat_2023_table_p7_1:row0:col5 = '&lt; 2.20.10⁻¹⁶'
- unparsed cell Barakat_2023_table_p7_1:row1:col3 = '233 [53.0–395]'
- unparsed cell Barakat_2023_table_p7_1:row1:col4 = '460 (54%)'
- unparsed cell Barakat_2023_table_p7_1:row1:col5 = '7.09.10⁻¹⁵'
- unparsed cell Barakat_2023_table_p7_1:row2:col3 = '98.8 [68.1–155]'
- unparsed cell Barakat_2023_table_p7_1:row2:col4 = '71.0 (40%)'
- unparsed cell Barakat_2023_table_p7_1:row2:col5 = '3.96.10⁻⁹'
- unparsed cell Barakat_2023_table_p7_1:row3:col3 = '2.65 [1.09–5.86]'
- unparsed cell Barakat_2023_table_p7_1:row3:col4 = '4.50 (31%)'
- unparsed cell Barakat_2023_table_p7_1:row3:col5 = '1.24.10⁻¹⁰'
- unparsed cell Barakat_2023_table_p7_1:row4:col3 = '309 [118–576]'
- unparsed cell Barakat_2023_table_p7_1:row4:col4 = '460 (54%)'
- unparsed cell Barakat_2023_table_p7_1:row4:col5 = '6.34.10⁻⁸'
- unparsed cell Barakat_2023_table_p7_1:row5:col3 = '86.3 [41.2–220]'
- unparsed cell Barakat_2023_table_p7_1:row5:col4 = '71.0 (40%)'
- companion parameter table p7_1 transcribed (9 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Barakat_2023_table_p7_2:row0:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Barakat_2023_table_p7_2:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Barakat_2023_table_p7_2:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Barakat_2023_table_p7_2:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.99 | ['Barakat_2023_table_p7_2:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.99 L/h | ['Barakat_2023_table_p7_2:row0:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.18 L | ['Barakat_2023_table_p7_2:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.8 L | ['Barakat_2023_table_p7_2:row3:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=lutetium_177lu_oxodotreotide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base_modelica.zip" download>Lutetium177luOxodotreotide_Barakat2023_base_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base_fmi.zip" download>Lutetium177luOxodotreotide_Barakat2023_base_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base_matlab.zip" download>Lutetium177luOxodotreotide_Barakat2023_base_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base_matlab_simbio.zip" download>Lutetium177luOxodotreotide_Barakat2023_base_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base_sbml.zip" download>Lutetium177luOxodotreotide_Barakat2023_base_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base_cellml.zip" download>Lutetium177luOxodotreotide_Barakat2023_base_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.386e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001169 | m3/kg |
| input | model | `k12` | 0.0003341 | 1/s |
| input | model | `k21` | 0.0003504 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Barakat A, Santoro L, Vivien M, Kotzki PO, Deshayes E, Khier S. Clinical Pharmacokinetics of Radiopharmaceuticals from SPECT/CT Image Acquisition by Contouring in Patients with Gastroenteropancreatic Neuroendocrine Tumors: Lu-177 DOTATATE (Lutathera. European journal of drug metabolism and pharmacokinetics 48(4):329–339 (2023). [doi:10.1007/s13318-023-00829-5](https://doi.org/10.1007/s13318-023-00829-5)

**This record:** Pharmacolibrary v26.09, model `Lutetium177luOxodotreotide_Barakat2023_base`. <https://pharmacolibrary.github.io/#/drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base>

```bibtex
@misc{pharmacolibrary_Lutetium177luOxodotreotideBarakat2023base,
  title  = {{Pharmacolibrary model Lutetium177luOxodotreotide_Barakat2023_base}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base},
  note   = {Parameters from doi:10.1007/s13318-023-00829-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base/Lutetium177luOxodotreotide_Barakat2023_base_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Lutetium177luOxodotreotide_Barakat2023_base_params.json` · controls `Lutetium177luOxodotreotide_Barakat2023_base_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blutetium_177lu_oxodotreotide%5D%20Lutetium177luOxodotreotide_Barakat2023_base&body=Drug%3A%20lutetium_177lu_oxodotreotide%0ARecord%3A%20Lutetium177luOxodotreotide_Barakat2023_base%0APaper%3A%20Barakat_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lutetium_177lu_oxodotreotide/Lutetium177luOxodotreotide_Barakat2023_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:09 UTC</sub>
