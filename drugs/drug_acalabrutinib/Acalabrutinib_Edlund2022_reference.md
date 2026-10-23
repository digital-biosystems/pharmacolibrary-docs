<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;acalabrutinib&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/&quot;},{&quot;label&quot;:&quot;Edlund_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Acalabrutinib_Edlund2022_reference&quot;,&quot;label&quot;:&quot;Edlund_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Acalabrutinib_Hefnawy2022_reference&quot;,&quot;label&quot;:&quot;Hefnawy_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Hefnawy2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Acalabrutinib_Kemal2026_reference&quot;,&quot;label&quot;:&quot;Kemal_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Kemal2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# acalabrutinib — `Acalabrutinib_Edlund2022_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="acalabrutinib" model-id="Acalabrutinib_Edlund2022_reference" status="curated_candidate" stale="false" population="adults with B-cell malignancies and healthy subjects" measured-compound="acalabrutinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Edlund H, Bellanti F, Liu H, Vishwanathan K, Tomkinson H, Ware J et al. Improved characterization of the pharmacokinetics of acalabrutinib and its pharmacologically active metabolite, ACP-5862, in patients with B-cell malignancies and in healthy subjects using a population pharmacokinetic approach. British journal of clinical pharmacology 88(2):846–852 (2022).
  ·  DOI: [10.1111/bcp.14988](https://doi.org/10.1111/bcp.14988)

## Population and dosing

**Population:** adults with B-cell malignancies and healthy subjects · condition healthy and B-cell malignancies · age group adult · n = 713.

**Dosing:** 100 mg, oral, multiple, every 12 h.

## Model

**Structure:** parent–metabolite model: parent with 2 compartment(s); metabolite ACP-5862: 2 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference.svg" alt="Acalabrutinib_Edlund2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 134 | L/h |
| Vc/F (L) | V1/F | 31.0 | L |
| Q/F (L/h) | Q/F | 20.9 | L/h |
| Vp/F (L) | V2/F | 110 | L |
| Ka (h−1) | kabs | 1.48 | h−1 |
| MTT (h) | MTT | 0.459 | h |
| CLM/F (L/h) | CL/F | 21.8 | L/h |
| VcM/F (L) | V1/F | 22.7 | L |
| QM/F (L/h) | Q/F | 26.7 | L/h |
| VpM/F (L) | V2/F | 89.2 | L |
| PPI—F1 | Frel | -0.358 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (MTT), so that value has no SI equivalent.

Independently confirmed by `qwen3.8-27b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 134 | L/h | 3.722e-05 | m3/s | l/h | exact (1) | bcp14988-tbl-0001:row3:col1 |
| Vc/F (L) | `Q290` · V1/F | 31.0 | L | 0.031 | m3 | l | exact (1) | bcp14988-tbl-0001:row4:col1 |
| Q/F (L/h) | `Q69` · Q/F | 20.9 | L/h | 5.806e-06 | m3/s | l/h | exact (1) | bcp14988-tbl-0001:row5:col1 |
| Vp/F (L) | `Q82` · V2/F | 110 | L | 0.11 | m3 | l | exact (1) | bcp14988-tbl-0001:row6:col1 |
| Ka (h−1) | `Q49` · kabs | 1.48 | h−1 | 0.0004111 | 1/s | 1/h | exact (1) | bcp14988-tbl-0001:row7:col1 |
| MTT (h) | `Q81` · MTT | 0.459 | h |  |  | h | exact (1) | bcp14988-tbl-0001:row8:col1 |
| CLM/F (L/h) | `Q27` · CL/F | 21.8 | L/h | 6.056e-06 | m3/s | l/h | exact (1) | bcp14988-tbl-0001:row9:col1 |
| VcM/F (L) | `Q290` · V1/F | 22.7 | L | 0.0227 | m3 | l | exact (1) | bcp14988-tbl-0001:row10:col1 |
| QM/F (L/h) | `Q69` · Q/F | 26.7 | L/h | 7.417e-06 | m3/s | l/h | exact (1) | bcp14988-tbl-0001:row11:col1 |
| VpM/F (L) | `Q82` · V2/F | 89.2 | L | 0.0892 | m3 | l | exact (1) | bcp14988-tbl-0001:row12:col1 |
| PPI—F1 | `Q87` · Frel | -0.358 |  |  |  |  | llm_corrected (0.6) | bcp14988-tbl-0001:row17:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q27 ('Healthy subject—CL/F', value '0.467') — already have one for this compound
- dropped duplicate Q82 ('Healthy subject—Vp/F', value '-0.556') — already have one for this compound
- dropped duplicate Q27 ('ECOG 2—CL/F', value '-0.171') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=acalabrutinib
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 9 linked by role; re-tagged parent→ACP-5862 ×16
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell bcp14988-tbl-0001:row3:col2 = '132 [126, 139]'
- unparsed cell bcp14988-tbl-0001:row4:col2 = '30.3 [25.3, 35.7]'
- unparsed cell bcp14988-tbl-0001:row5:col2 = '20.8 [18.6, 23.0]'
- unparsed cell bcp14988-tbl-0001:row6:col2 = '108 [97.6, 120]'
- unparsed cell bcp14988-tbl-0001:row7:col2 = '1.48 [1.41, 1.55]'
- unparsed cell bcp14988-tbl-0001:row8:col2 = '0.460 [0.426, 0.492]'
- unparsed cell bcp14988-tbl-0001:row9:col2 = '21.6 [20.2, 22.6]'
- unparsed cell bcp14988-tbl-0001:row10:col2 = '22.7 [19.5, 25.8]'
- unparsed cell bcp14988-tbl-0001:row11:col2 = '26.4 [22.9, 29.9]'
- unparsed cell bcp14988-tbl-0001:row12:col2 = '88.1 [77.6, 97]'
- unparsed cell bcp14988-tbl-0001:row14:col2 = '0.467 [0.367, 0.569]'
- unparsed cell bcp14988-tbl-0001:row15:col2 = '−0.554 [−0.6, −0.496]'
- unparsed cell bcp14988-tbl-0001:row16:col2 = '−0.158 [−0.274, −0.032]'
- unparsed cell bcp14988-tbl-0001:row17:col2 = '−0.368 [−0.49, −0.228]'
- unparsed cell bcp14988-tbl-0001:row19:col2 = '24.1 [20.4, 28]'
- unparsed cell bcp14988-tbl-0001:row20:col2 = '284 [225, 367]'
- unparsed cell bcp14988-tbl-0001:row21:col2 = '33.9 [25, 42.4]'
- unparsed cell bcp14988-tbl-0001:row22:col2 = '13.1 [9.22, 20.2]'
- unparsed cell bcp14988-tbl-0001:row23:col2 = '53.3 [36.9, 71.1]'
- unparsed cell bcp14988-tbl-0001:row24:col2 = '40 [23.8, 59.2]'
- unparsed cell bcp14988-tbl-0001:row25:col2 = '21.2 [15.3, 41.2]'
- unparsed cell bcp14988-tbl-0001:row26:col2 = '119 [104, 137]'
- unparsed cell bcp14988-tbl-0001:row27:col2 = '55.3 [50.4, 61.1]'
- unparsed cell bcp14988-tbl-0001:row28:col2 = '0.583 [0.555, 0.612]'
- unparsed cell bcp14988-tbl-0001:row29:col2 = '0.843 [0.762, 0.917]'
- unparsed cell bcp14988-tbl-0001:row30:col2 = '0.332 [0.304, 0.357]'
- unparsed cell bcp14988-tbl-0001:row31:col2 = '0.225 [0, 0.325]'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | confirmed | 1.0 (15/15 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['bcp14988-tbl-0001:row3:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['bcp14988-tbl-0001:row9:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['bcp14988-tbl-0001:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['bcp14988-tbl-0001:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bcp14988-tbl-0001:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['bcp14988-tbl-0001:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['bcp14988-tbl-0001:row11:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['bcp14988-tbl-0001:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['bcp14988-tbl-0001:row12:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 134 L/h | ['bcp14988-tbl-0001:row3:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 21.8 L/h | ['bcp14988-tbl-0001:row9:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 31 L | ['bcp14988-tbl-0001:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 22.7 L | ['bcp14988-tbl-0001:row10:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 110 L | ['bcp14988-tbl-0001:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 89.2 L | ['bcp14988-tbl-0001:row12:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_metabolite_built[ACP-5862] |  | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.0227, 'CL': 6.055555555555555e-06, 'formation': 3.722222222222222e-05} |  | ACP-5862 = compartment M1 with its own numbers |
| T3_metabolite_output[ACP-5862] |  | pass |  | 0.001151 |  | C_M1 (ACP-5862) must rise above 0 when the parent is dosed |
| T3_molar_mass[ACP-5862] |  | pass |  | {'MW': 0.465517, 'MW_m1': 0.481516} |  | formation is molecule-for-molecule |
| T3_output_variable |  | pass | C_central (measured=acalabrutinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 9 scholar param(s) emitted or defaulted | 9 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | pass | 0.000461 | 0.0005695 | 1.235 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | pass | 0.0004613 | 0.0005695 | 1.234 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 24 | 0.0005695 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 14 | 0.0005695 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_modelica.zip" download>Acalabrutinib_Edlund2022_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_fmi.zip" download>Acalabrutinib_Edlund2022_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_matlab.zip" download>Acalabrutinib_Edlund2022_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_sbml.zip" download>Acalabrutinib_Edlund2022_reference_sbml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_cellml.zip" download>Acalabrutinib_Edlund2022_reference_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `CL1` | 0 | m3/s |
| input | model | `CLm1` | 6.056e-06 | m3/s |
| input | model | `MW` | 0.4655 |  |
| input | model | `MW_m1` | 0.4815 |  |
| input | model | `Vd1` | 0.031 |  |
| input | model | `Vd1m1` | 0.0227 | m3 |
| input | model | `Vd2` | 0.11 |  |
| input | model | `Vd2m1` | 0.0892 |  |
| input | model | `ka` | 0.0004111 | 1/s |
| input | model | `q12` | 5.806e-06 |  |
| input | model | `q1_m11` | 3.722e-05 | m3/s |
| input | model | `q21` | 5.806e-06 |  |
| input | model | `qm11_m12` | 7.417e-06 |  |
| input | model | `qm12_m11` | 7.417e-06 |  |
| output | concentration | `central.C` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Edlund H, Bellanti F, Liu H, Vishwanathan K, Tomkinson H, Ware J et al. Improved characterization of the pharmacokinetics of acalabrutinib and its pharmacologically active metabolite, ACP-5862, in patients with B-cell malignancies and in healthy subjects using a population pharmacokinetic approach. British journal of clinical pharmacology 88(2):846–852 (2022). [doi:10.1111/bcp.14988](https://doi.org/10.1111/bcp.14988)

**This record:** Pharmacolibrary v26.09, model `Acalabrutinib_Edlund2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference>

```bibtex
@misc{pharmacolibrary_AcalabrutinibEdlund2022reference,
  title  = {{Pharmacolibrary model Acalabrutinib_Edlund2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference},
  note   = {Parameters from doi:10.1111/bcp.14988},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1.48 /h, F 1). Dose in the paper: 100 mg.

<dbs-fmusim paramsurl="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Acalabrutinib_Edlund2022_reference_params.json` · controls `Acalabrutinib_Edlund2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacalabrutinib%5D%20Acalabrutinib_Edlund2022_reference&body=Drug%3A%20acalabrutinib%0ARecord%3A%20Acalabrutinib_Edlund2022_reference%0APaper%3A%20Edlund_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 20:38 UTC</sub>
