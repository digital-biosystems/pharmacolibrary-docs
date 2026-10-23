<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/&quot;},{&quot;label&quot;:&quot;Dom\u00ednguez_2024 \u00b7 extract_equivalent_to_7_4_mg_kg_of_rutin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rutoside — `Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> The reviewer's verdict (Rejected, 2026-10-05 09:31 UTC) predates the latest extraction (2026-10-06 22:20 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="rutoside" model-id="Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut" status="extracted" stale="true" population="New Zealand rabbits" measured-compound="rutin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Domínguez Moré GP, Rey DP, Valderrama IH, Ospina LF, Aragón DM. Rutin and Physalis peruviana Extract: Population Pharmacokinetics in New Zealand Rabbits. Pharmaceutics 16(10) (2024).
  ·  DOI: [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241)

## Population and dosing

**Population:** New Zealand rabbits · condition healthy · age group adult · n = 5.

**Dosing:** 25.9, 7000, 35000 mg, iv and oral, single.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.svg" alt="Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| AUC0–∞ (ng ·h/mL) | AUC∞ | 8273.24 | ng ·h/mL |
| Cmax (ng/mL) | Cmax | 613.95 | ng/mL |
| λz (h−1) | kel | 0.043 | h−1 |
| MRT (h) | MRT | 22.12 | h |
| Frel | Frel | 12.0 | Equivalent to 7.4 mg/kg of Rutin |
| Vz | V | 0.084 | L/kg |
| Cl | CL | 0.079 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The rutoside (rutin) record was rejected because its structure is a one-compartment parent-only model, while the measured analyte is rutin with quercetin as a metabolite, and the model output is not the measured rutin compartment.**

The record declares a parent–metabolite structure (rutin forming quercetin in the central compartment), but the fitted topology is a single-compartment model, so the required three-compartment parent–metabolite structure was not built. The model output is the central compartment amount rather than the measured analyte compartment for rutin. Additionally, a reported unit could not be converted to SI, so that parameter reached the model builder without an SI value, and the second reader disputed several values (e.g., V 0.32 vs none, k12 4.02 vs none, MRT 22.12 vs none). Extracted — quercetin: AUC∞ 8.27e+03 ng ·h/mL, Cmax 614 ng/mL, Frel 12 Equivalent to 7.4 mg/kg of Rutin; rutoside: kel 0.043 h−1, MRT 22.1 h, V 0.084 L/kg, CL 0.079 L/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rutin, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–∞ (ng ·h/mL) | `Q17` · AUC∞ | 8273.24 | ng ·h/mL |  |  | (h·ng)/ml | exact (1) | Domínguez_2024_table_2:row0:col2 |
| Cmax (ng/mL) | `Q32` · Cmax | 613.95 | ng/mL |  |  | ng/ml | exact (1) | Domínguez_2024_table_2:row1:col2 |
| λz (h−1) | `Q47` · kel | 0.043 | h−1 | 1.194e-05 | 1/s | 1/h | exact (1) | Domínguez_2024_table_2:row5:col2 |
| MRT (h) | `Q53` · MRT | 22.12 | h | 7.963e+04 | s | h | exact (1) | Domínguez_2024_table_2:row6:col2 |
| Frel | `Q87` · Frel | 12.0 | Equivalent to 7.4 mg/kg of Rutin |  |  |  | exact (1) | Domínguez_2024_table_2:row9:col2 |
| Vz | `Q61` · V | 0.084 | L/kg | 0.00588 | m3 | L | exact (1) | Domínguez_2024:other_prose |
| Cl | `Q22` · CL | 0.079 | L/h/kg | 1.536e-06 | m3/s | L/h | exact (1) | Domínguez_2024:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'β'
- dropped value-less row: 'Ω'
- dropped value-less row: 'b'
- dropped value-less row: 'R.S.E.'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['pharmaceutics-16-01241-t003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 177 (source ['pharmaceutics-16-01241-t003:footnote']); the table cell was unparseable — needs review
- salvaged Q61 ('Vz'=0.084) from results prose — parameter table was unreadable
- salvaged Q22 ('Cl'=0.079) from results prose — parameter table was unreadable
- implicit units: 'Vz' → L/kg (from the paper text: "Text states 'a Vz of 0.084 ± 0.028' alongside Vss of 0.290 ± 0.053 L/kg and Cl of 0.079 ± 0.013 L/h/kg, indicating Vz is")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rutin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'extract(equivalent to 7.4 mg/kg of rutin)' subgroup of Domínguez_2024 (paper reports 4 populations: extract(equivalent to 7.4 mg/kg of rutin), intravenous administration (i.v.), oral administration (p.o.), pure rutin(100 mg/kg))
- row roles (LLM): model_class=noncompartmental; 47/47 row label(s) assigned, 56 linked by role; re-tagged rutin→parent ×131, rutin→quercetin ×58
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell pharmaceutics-16-01241-t003:row7:col4 = '−1.2–−0.23'
- unparsed cell Domínguez_2024_table_1:row4:col2 = '0.91 ± 0.320 *'
- unparsed cell Domínguez_2024_table_1:row5:col2 = '0.18 ± 0.055 *'
- unparsed cell Domínguez_2024_table_1:row5:col4 = '5.20 ± 1.470 *'
- unparsed cell Domínguez_2024_table_1:row6:col2 = '0.300 ± 0.060 *'
- unparsed cell Domínguez_2024_table_1:row6:col4 = '1.69 ± 0.267 *'
- unparsed cell Domínguez_2024_table_1:row7:col4 = '0.33 ± 0.047 *'
- unparsed cell Domínguez_2024_table_1:row9:col2 = '2.94 ± 0.515 *'
- unparsed cell Domínguez_2024_table_1:row9:col4 = '14.89 ± 1.690 *'
- unparsed cell Domínguez_2024_table_1:row10:col2 = '0.035 ± 0.008 *'
- unparsed cell Domínguez_2024_table_1:row10:col4 = '0.61 ± 0.102 *'
- unparsed cell Domínguez_2024_table_1:row11:col2 = '0.067 ± 0.010 *'
- unparsed cell Domínguez_2024_table_1:row11:col4 = '0.081 ± 0.026 *'
- unparsed cell Domínguez_2024_table_1:row12:col4 = '3.80 ± 0.749 *'
- companion parameter table 1 transcribed (32 record(s))
- unparsed cell Domínguez_2024_table_2:row2:col2 = '3.90 ± 0.224 **'
- unparsed cell Domínguez_2024_table_2:row3:col2 = '21.44 ± 5.282 *'
- unparsed cell Domínguez_2024_table_2:row4:col2 = '0.91 ± 0.113 *'
- unparsed cell Domínguez_2024_table_2:row7:col2 = '1.12 ± 0.144 *'
- unparsed cell Domínguez_2024_table_2:row8:col2 = '0.083 ± 0.011 *'
- companion parameter table 2 transcribed (14 record(s))
- unparsed cell Domínguez_2024_table_4:row2:col4 = '−1.81–−0.71'
- unparsed cell Domínguez_2024_table_4:row8:col4 = '−2.65–−1.72'
- companion parameter table 4 transcribed (88 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf]` | 8273.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` |  | 8273.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.079 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.079 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 613.95 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 613.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[frel]` | 12.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[frel]` |  | 12.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 22.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` |  | 22.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz]` | 0.084 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz]` |  | 0.084 | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` | 0.043 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` |  | 0.043 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rutin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rutin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Domínguez_2024_table_2:row0:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Domínguez_2024_table_2:row1:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Domínguez_2024_table_2:row5:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['Domínguez_2024_table_2:row6:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Domínguez_2024:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.079 | ['Domínguez_2024:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.53 L/h | ['Domínguez_2024:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.88 L | ['Domínguez_2024:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | fail | Metabolite_C (measured=rutin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped |  | 0.004077 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_modelica.zip" download>Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_fmi.zip" download>Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_matlab.zip" download>Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_matlab_simbio.zip" download>Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_sbml.zip" download>Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_cellml.zip" download>Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.6105 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.59e-05 | kg |
| input | model | `Cl` | 1.536e-06 | m3/s |
| input | model | `VdPerKg` | 8.4e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Domínguez Moré GP, Rey DP, Valderrama IH, Ospina LF, Aragón DM. Rutin and Physalis peruviana Extract: Population Pharmacokinetics in New Zealand Rabbits. Pharmaceutics 16(10) (2024). [doi:10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241)

**This record:** Pharmacolibrary v26.09, model `Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut`. <https://pharmacolibrary.github.io/#/drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut>

```bibtex
@misc{pharmacolibrary_RutosideDomnguez2024extractequivalentto74mgkgofrut,
  title  = {{Pharmacolibrary model Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut},
  note   = {Parameters from doi:10.3390/pharmaceutics16101241},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 25.9 mg infusion over 10 min, single dose. Doses in the paper: 25.9, 7000, 35000 mg.

<dbs-fmusim paramsurl="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_params.json` · controls `Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brutoside%5D%20Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&body=Drug%3A%20rutoside%0ARecord%3A%20Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut%0APaper%3A%20Dom%C3%ADnguez_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:20 UTC</sub>
