<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;chloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/&quot;},{&quot;label&quot;:&quot;Karunajeewa_2010 \u00b7 cq&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloroquine_Yao2021_reference&quot;,&quot;label&quot;:&quot;Yao_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Yao2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloroquine_Karunajeewa2010_cq&quot;,&quot;label&quot;:&quot;Karunajeewa_2010_cq&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Karunajeewa2010_cq.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Chloroquine_Karunajeewa2010_decq&quot;,&quot;label&quot;:&quot;Karunajeewa_2010_decq&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Karunajeewa2010_decq.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Franco_2023_R&quot;,&quot;label&quot;:&quot;Franco_2023 \u00b7 R&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/pd_Franco_2023_R.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chloroquine — `Chloroquine_Karunajeewa2010_cq`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111), gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 290, model 195); f use library defaults, not estimates from this paper (+3 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — chloroquine: V 6.71e+03 liters, CL 23.9 liters/h, kabs 0.559 h−1, tlag 0.149 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has chloroquine, the second reading chloroquine and desethylchloroquine; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Karunajeewa HA et al., Pharmacokinetics of chloroquine and mon…, Antimicrobial agents and ch… (2010)
  ·  DOI: [10.1128/AAC.01269-09](https://doi.org/10.1128/AAC.01269-09)

<div class="pk-model-meta" hidden drug="chloroquine" model-id="Chloroquine_Karunajeewa2010_cq" status="rejected" stale="false" population="adults with malaria (pregnant and nonpregnant)" measured-compound="chloroquine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| median steady-state volume of distribution (V SS /F) in our nonpregnant group | `Q61` · V | 6707 | liters | 6.707 | L | not captured | boundary (0.8) | Karunajeewa_2010:discussion_prose | — | not captured |
| our median CL CQ /F | `Q22` · CL | 23.9 | liters/h | 6.638888888888888e-06 | L/h | not captured | boundary (0.8) | Karunajeewa_2010:discussion_prose | — | not captured |
| absorption rate ka | `Q49` · kabs | 0.559 | h−1 | 0.00015527777777777778 | 1/h | not captured | review_gapfill (0.7) | Yao_2021:review | — | not captured |
| ALAG | `Q83` · tlag | 0.149 | h | 536.4 | h | not captured | review_gapfill (0.7) | Yao_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- column 'cq' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Nonpregnant (3 ϫ 3)' — extend the ontology if this is a real PK parameter (source ['Karunajeewa_2010_table_3:row3:col1'])
- dropped unlinked row (NIL): 'Pregnant (3 ϫ 3)' — extend the ontology if this is a real PK parameter (source ['Karunajeewa_2010_table_3:row4:col1'])
- dropped unlinked row (NIL): 'Pregnant (4 ϫ 3)' — extend the ontology if this is a real PK parameter (source ['Karunajeewa_2010_table_3:row5:col1'])
- dropped unlinked row (NIL): 'Pregnant (5 ϫ 3)' — extend the ontology if this is a real PK parameter (source ['Karunajeewa_2010_table_3:row6:col1'])
- table mostly unlinked (4/4 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q61 ('median steady-state volume of distribution (V SS /F) in our nonpregnant group'=6707) from results prose — parameter table was unreadable
- salvaged Q22 ('our median CL CQ /F'=23.9) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=chloroquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- population split: 'cq' subgroup of Karunajeewa_2010 (paper reports 2 populations: cq, decq)
- row roles: 4 per-group rows of chloroquine summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 5/5 row label(s) assigned, 1 linked by role
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Yao_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Yao_2021's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- table Karunajeewa_2010_table_p3_1: ambiguous_numeric_format
- table Karunajeewa_2010_table_p3_1: unparsed_numeric_cell
- final table tab_0: no supported point estimates; targeted recovery unresolved
- table Karunajeewa_2010_table_2: unknown_column_role
- table Karunajeewa_2010_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (3 record(s))
- table Karunajeewa_2010_table_3: ambiguous_numeric_format
- table Karunajeewa_2010_table_3: unknown_column_role
- table Karunajeewa_2010_table_3: units_need_context
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (1/9 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['chloroquine', 'desethylchloroquine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl m accounts for]` | not captured | 15.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/fprq]` | 16.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[nonpregnant]` | 376 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2abs cq]` | 0.492 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c /f cq]` | 0.007 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | chloroquine | chloroquine and desethylchloroquine | mismatch |
| `gpt-oss:120b` | `parameters[cq metabolic clearance to decq (cl m ) accounts for]` | 15.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[median steady-state volume of distribution]` | 6707 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[pregnancy related to cl cq]` | not captured | 23 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Yao_2021:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Yao_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 23.9 | not captured | not captured | ['Karunajeewa_2010:discussion_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23.9 L/h | not captured | not captured | ['Karunajeewa_2010:discussion_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.71e+03 L | not captured | not captured | ['Karunajeewa_2010:discussion_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | fail | Metabolite_C (measured=chloroquine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 79 | 5.842912654380908e-05 | not captured | unresolved concentration unit (exp '% of values for nonpregnant women', sim 'kg/m3') |
| T1_cmax | reference | skipped | 75 | 5.842912654380908e-05 | not captured | unresolved concentration unit (exp '% of values for nonpregnant women', sim 'kg/m3') |
| T1_t_half_terminal | reference | fail | 290.4 | 194.50996940269394 | 0.6698 | days→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 235.20000000000002 | 194.50996940269394 | 0.827 | days→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | 9 | 194.50996940269394 | not captured | unresolved time unit '% decrease' |
| T1_tmax | reference | skipped | not captured | 10.100200400801603 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_chloroquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Karunajeewa_2010` / `Karunajeewa_2010::cq`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_chloroquine/models/modelica/Chloroquine_Karunajeewa2010_cq.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_chloroquine/models/modelica/Chloroquine_Karunajeewa2010_cq.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_chloroquine/models/modelica/Chloroquine_Karunajeewa2010_cq.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 450 mg, single dose, first-order absorption (ka 0.559 /h, lag 8.94 min, F 0.9). Dose in the paper: 450 mg.

<dbs-fmusim paramsurl="drugs/drug_chloroquine/Chloroquine_Karunajeewa2010_cq/Chloroquine_Karunajeewa2010_cq_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_chloroquine/Chloroquine_Karunajeewa2010_cq/Chloroquine_Karunajeewa2010_cq_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Chloroquine_Karunajeewa2010_cq_params.json` · controls `Chloroquine_Karunajeewa2010_cq_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:29 UTC</sub>
