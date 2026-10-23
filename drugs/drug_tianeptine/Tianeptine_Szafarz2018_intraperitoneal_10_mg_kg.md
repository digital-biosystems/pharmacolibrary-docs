<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tianeptine&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/&quot;},{&quot;label&quot;:&quot;Szafarz_2018 \u00b7 intraperitoneal_10_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intraperitoneal_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intravenous_1_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intravenous_1_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intravenous_1_mg_kg.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tianeptine — `Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Rejected), but the paper was screened again on 2026-10-06 23:48 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="tianeptine" model-id="Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg" status="extracted" stale="true" population="rats" measured-compound="tianeptine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Szafarz M, Wencel A, Pociecha K, Fedak FA, Wlaź P, Wyska E. Pharmacokinetic study of tianeptine and its active metabolite MC5 in rats following different routes of administration using a novel liquid chromatography tandem mass spectrometry analytical method. Naunyn-Schmiedeberg's archives of pharmacology 391(2):185–196 (2018).
  ·  DOI: [10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2)

## Population and dosing

**Population:** rats · condition healthy · age group adult · n = 3.

**Dosing:** 70, 700 mg, other, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.svg" alt="Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| t max (h) | tmax | 0.083 | h |
| λ z (h−1) | kel | 14.73 | h−1 |
| t 0.5λz (h) | t1/2z | 14.03 | h |
| V z(V z/F) (L/kg) | V | 18.15 | L/kg |
| AUC0-inf (mg∙h/L) | AUC∞ | 7.05 | mg∙h/L |
| CL/(CL/F) (L/h/kg) | CLnorm/F | 7.17 | L/h/kg |
| MRT (h) | MRT | 10.36 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tianeptine rat model does not reproduce the paper's terminal half-life (7.53 h reported vs 2.24 h simulated), uses a single-compartment structure instead of the parent–metabolite topology, and substitutes default ka and Tlag values not reported in the paper.**

Simulated as the paper dosed it, the model's terminal half-life is 2.24 h against the reported 7.53 h (ratio 0.2969), beyond tolerance, and the output is the parent compartment rather than the measured analyte. The structure is a one-compartment enteral model instead of the parent–metabolite topology the paper describes, with the metabolite link (fm) left unparameterized. Absorption parameters ka and Tlag were defaulted rather than extracted, and F=1, Fm=1 and no molar correction were assumed, making the parameterization apparent. A second reader disputes the parameterization (mechanistic vs apparent) and reports a Cmax of 1.3 that this record lacks; a reported unit also could not be converted to SI, so that parameter reached the model without an SI value. Extracted — tianeptine: tmax 0.083 h, kel 14.7 h−1, t1/2z 14 h, V 18.1 L/kg, AUC∞ 7.05 mg∙h/L, CL/F 7.17 L/h/kg, MRT 10.4 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tianeptine → mc5 (metabolism), the second reading not captured → not captured (not captured); it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t max (h) | `Q56` · tmax | 0.083 | h | 298.8 | s | h | space_fold (0.95) | Tab3:row4:col5, Tab3:row4:col6, Tab3:row4:col7, Tab3:row4:col8 |
| λ z (h−1) | `Q47` · kel | 14.73 | h−1 | 0.004092 | 1/s | 1/h | space_fold (0.95) | Tab3:row5:col6, Tab3:row5:col8 |
| t 0.5λz (h) | `Q57` · t1/2z | 14.03 | h | 5.051e+04 | s | h | llm (0.6) | Tab3:row6:col6, Tab3:row6:col8 |
| V z(V z/F) (L/kg) | `Q61` · V | 18.15 | L/kg | 1.27 | m3 | l/kg | space_fold (0.95) | Tab3:row7:col6, Tab3:row7:col8 |
| AUC0-inf (mg∙h/L) | `Q17` · AUC∞ | 7.05 | mg∙h/L |  |  | (h·mg)/l | exact (1) | Tab3:row8:col6, Tab3:row8:col8 |
| CL/(CL/F) (L/h/kg) | `Q355` · CLnorm/F | 7.17 | L/h/kg | 0.0001394 | m3/s | l/(h·kg) | llm_corrected (0.6) | Tab3:row9:col6, Tab3:row9:col8 |
| MRT (h) | `Q53` · MRT | 10.36 | h | 3.73e+04 | s | h | exact (1) | Tab3:row11:col6, Tab3:row11:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['Tab3:row0:col5', 'Tab3:row0:col6', 'Tab3:row0:col7', 'Tab3:row0:col8'])
- dropped unlinked row (NIL): 'C o/C max (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col6', 'Tab3:row3:col8'])
- dropped value-less row: 'Table 3. Serum pharmacokinetic parameters calculated from concentration vs. time data (n = 3) of tianeptine and MC5 metabolite determined by non-compartmental analysis after a single intravenous or intraperitoneal administration of tianeptine to rats at a dose of 1 or 10 mg/kg, respectively. Data are presented as geometric mean (GM), 90% confidence interval (CI), and coefficient of variation (CV)' (captured trailing unit 'CV' for child rows)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tianeptine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- population split: 'intraperitoneal 10 mg/kg' subgroup of Szafarz_2018 (paper reports 3 populations: estimate, intraperitoneal 10 mg/kg, intravenous 1 mg/kg)
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 12 linked by role; re-tagged parent→MC5 ×4
- molar mass: none of 1 PubChem candidate(s) is 'MC5' (LLM) — left in mass units
- molar mass: none found for 'MC5' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row3:col1 = '1.27(0.86–1.9)'
- unparsed cell Tab3:row3:col3 = '0.117(0.064–0.212)'
- unparsed cell Tab3:row3:col5 = '6.65(6.44–6.87)'
- unparsed cell Tab3:row3:col7 = '2.02(1.1–3.43)'
- unparsed cell Tab3:row4:col3 = '0.4(0.054–2.89)'
- unparsed cell Tab3:row5:col1 = '0.59(0.25–1.42)'
- unparsed cell Tab3:row5:col3 = '0.09(0.085–0.099)'
- unparsed cell Tab3:row5:col5 = '0.475(0.332–0.68)'
- unparsed cell Tab3:row5:col7 = '0.187(0.07–0.498)'
- unparsed cell Tab3:row6:col1 = '1.16(0.49–2.75)'
- unparsed cell Tab3:row6:col3 = '7.53(6.98–8.13)'
- unparsed cell Tab3:row6:col5 = '1.46(1.018–2.085)'
- unparsed cell Tab3:row6:col7 = '3.69(1.39–9.83)'
- unparsed cell Tab3:row7:col1 = '2.41(0.91–6.4)'
- unparsed cell Tab3:row7:col5 = '6.51(4.03–10.53)'
- unparsed cell Tab3:row8:col1 = '1954.02(1411.02–2705.94)'
- unparsed cell Tab3:row8:col3 = '2371.56(1617.78–3476.46)'
- unparsed cell Tab3:row8:col5 = '11,621.28(9737.58–13,869.36)'
- unparsed cell Tab3:row8:col7 = '14,415.96(12,323.88–16,863.24)'
- unparsed cell Tab3:row9:col1 = '1.84(1.33–2.55)'
- unparsed cell Tab3:row9:col5 = '3.1(2.59–3.69)'
- unparsed cell Tab3:row10:col1 = '2.03(0.89–4.62)'
- unparsed cell Tab3:row11:col1 = '1.25(0.66–2.36)'
- unparsed cell Tab3:row11:col3 = '8.28(6.53–10.5)'
- unparsed cell Tab3:row11:col5 = '0.66(0.51–0.87)'
- unparsed cell Tab3:row11:col7 = '4.1(1.83–9.24)'
- companion parameter table 4 transcribed (13 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tianeptine', 'mc5', 'metabolism']] | [['', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[c o/c max]` |  | 1.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/(cl/f)].parameter_id` | Q355 | Q27 | mismatch |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab3:row8:col6', 'Tab3:row8:col8'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] |  | ['Tab3:row9:col6', 'Tab3:row9:col8'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab3:row5:col6', 'Tab3:row5:col8'] |
| C5_dimension_Q53 | pass | [time] |  | ['Tab3:row11:col6', 'Tab3:row11:col8'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab3:row4:col5', 'Tab3:row4:col6', 'Tab3:row4:col7', 'Tab3:row4:col8'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab3:row6:col6', 'Tab3:row6:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab3:row7:col6', 'Tab3:row7:col8'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.27e+03 L | ['Tab3:row7:col6', 'Tab3:row7:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=tianeptine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | deviation_id: not acceptable; defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable; input_model: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 7.53 | 2.235 | 0.2969 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1.16 | 2.235 | 1.927 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_fmi.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab_simbio.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sbml.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_cellml.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.437 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-05 | kg |
| input | model | `Cl` | 0.0001394 | m3/s |
| input | model | `VdPerKg` | 0.01815 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Szafarz M, Wencel A, Pociecha K, Fedak FA, Wlaź P, Wyska E. Pharmacokinetic study of tianeptine and its active metabolite MC5 in rats following different routes of administration using a novel liquid chromatography tandem mass spectrometry analytical method. Naunyn-Schmiedeberg's archives of pharmacology 391(2):185–196 (2018). [doi:10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2)

**This record:** Pharmacolibrary v26.09, model `Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg`. <https://pharmacolibrary.github.io/#/drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg>

```bibtex
@misc{pharmacolibrary_TianeptineSzafarz2018intraperitoneal10mgkg,
  title  = {{Pharmacolibrary model Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg},
  note   = {Parameters from doi:10.1007/s00210-017-1448-2},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 70 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 70, 700 mg.

<dbs-fmusim paramsurl="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_params.json` · controls `Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btianeptine%5D%20Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg&body=Drug%3A%20tianeptine%0ARecord%3A%20Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg%0APaper%3A%20Szafarz_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:48 UTC</sub>
