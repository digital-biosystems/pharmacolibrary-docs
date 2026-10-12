<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tianeptine&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/&quot;},{&quot;label&quot;:&quot;Szafarz_2018 \u00b7 intraperitoneal_10_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intraperitoneal_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intravenous_1_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intravenous_1_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intravenous_1_mg_kg.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tianeptine — `Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769), gpt-oss:120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The tianeptine rat model does not reproduce the paper's terminal half-life (7.53 h reported vs 2.24 h simulated), uses a single-compartment structure instead of the parent–metabolite topology, and substitutes default ka and Tlag values not reported in the paper.**

Simulated as the paper dosed it, the model's terminal half-life is 2.24 h against the reported 7.53 h (ratio 0.2969), beyond tolerance, and the output is the parent compartment rather than the measured analyte. The structure is a one-compartment enteral model instead of the parent–metabolite topology the paper describes, with the metabolite link (fm) left unparameterized. Absorption parameters ka and Tlag were defaulted rather than extracted, and F=1, Fm=1 and no molar correction were assumed, making the parameterization apparent. A second reader disputes the parameterization (mechanistic vs apparent) and reports a Cmax of 1.3 that this record lacks; a reported unit also could not be converted to SI, so that parameter reached the model without an SI value. Extracted — tianeptine: tmax 0.083 h, kel 14.7 h−1, t1/2z 14 h, V 18.1 L/kg, AUC∞ 7.05 mg∙h/L, CL/F 7.17 L/h/kg, MRT 10.4 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tianeptine → mc5 (metabolism), the second reading not captured → not captured (not captured); it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:32:30.485445+00:00) predates the upstream re-run (2026-10-06 23:48:00.841088+00:00). Current validate status: `extracted`.

## Citation
Szafarz M et al., Pharmacokinetic study of tianeptine and…, Naunyn-Schmiedeberg's archi… (2018)
  ·  DOI: [10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2)

<div class="pk-model-meta" hidden drug="tianeptine" model-id="Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg" status="extracted" stale="true" population="rats" measured-compound="tianeptine" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CLnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t max (h) | `Q56` · tmax | 0.083 | h | 298.8 | [h] | not captured | space_fold (0.95) | Tab3:row4:col5, Tab3:row4:col6, Tab3:row4:col7, Tab3:row4:col8 | — | not captured |
| λ z (h−1) | `Q47` · kel | 14.73 | h−1 | 0.004091666666666667 | [1] / [h] | not captured | space_fold (0.95) | Tab3:row5:col6, Tab3:row5:col8 | — | not captured |
| t 0.5λz (h) | `Q57` · t1/2z | 14.03 | h | 50508.0 | [h] | not captured | llm (0.6) | Tab3:row6:col6, Tab3:row6:col8 | — | not captured |
| V z(V z/F) (L/kg) | `Q61` · V | 18.15 | L/kg | 1.2705 | [l] / [kg] | not captured | space_fold (0.95) | Tab3:row7:col6, Tab3:row7:col8 | — | not captured |
| AUC0-inf (mg∙h/L) | `Q17` · AUC∞ | 7.05 | mg∙h/L | not captured | [[h] · [mg]] / [l] | not captured | exact (1.0) | Tab3:row8:col6, Tab3:row8:col8 | — | not captured |
| CL/(CL/F) (L/h/kg) | `Q355` · CLnorm/F | 7.17 | L/h/kg | 0.00013941666666666665 | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | Tab3:row9:col6, Tab3:row9:col8 | — | not captured |
| MRT (h) | `Q53` · MRT | 10.36 | h | 37296.0 | [h] | not captured | exact (1.0) | Tab3:row11:col6, Tab3:row11:col8 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tianeptine', 'mc5', 'metabolism']] | [['', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[c o/c max]` | not captured | 1.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/(cl/f)].parameter_id` | Q355 | Q27 | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[c o/c max]` | not captured | 1.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/(cl/f)].parameter_id` | Q27 | Q40 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col6', 'Tab3:row8:col8'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row9:col6', 'Tab3:row9:col8'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row5:col6', 'Tab3:row5:col8'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Tab3:row11:col6', 'Tab3:row11:col8'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab3:row4:col5', 'Tab3:row4:col6', 'Tab3:row4:col7', 'Tab3:row4:col8'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab3:row6:col6', 'Tab3:row6:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row7:col6', 'Tab3:row7:col8'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.27e+03 L | not captured | not captured | ['Tab3:row7:col6', 'Tab3:row7:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=tianeptine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | deviation_id: not acceptable; defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable; input_model: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 7.53 | 2.2353985912809984 | 0.2969 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1.16 | 2.2353985912809984 | 1.9271 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tianeptine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Szafarz_2018` / `Szafarz_2018::intraperitoneal_10_mg_kg`)
- model: `../../../knowledgebase/drugs/drug_tianeptine/models/modelica/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.mo`
- deviation: `../../../knowledgebase/drugs/drug_tianeptine/models/modelica/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_tianeptine/models/modelica/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_fmi.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab_simbio.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sbml.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_cellml.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.svg" alt="Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 70 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 70, 700 mg.

<dbs-fmusim paramsurl="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_params.json` · controls `Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:48 UTC</sub>
