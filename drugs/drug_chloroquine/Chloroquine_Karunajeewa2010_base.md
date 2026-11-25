<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;chloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/&quot;},{&quot;label&quot;:&quot;Karunajeewa_2010 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroquine_AbdRahman2020_reference&quot;,&quot;label&quot;:&quot;Abd-Rahman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloroquine_Yao2021_reference&quot;,&quot;label&quot;:&quot;Yao_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Yao2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloroquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chloroquine — `Chloroquine_Karunajeewa2010_base`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for chloroquine's clearance, volume of distribution and absorption lag time; t3_param_coverage (+3 more).

<div class="pk-model-meta" hidden drug="chloroquine" model-id="Chloroquine_Karunajeewa2010_base" status="model_quarantined" stale="false" population="pregnant and nonpregnant women" measured-compound="chloroquine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Karunajeewa HA, Salman S, Mueller I, Baiwog F, Gomorrai S, Law I et al. Pharmacokinetics of chloroquine and monodesethylchloroquine in pregnancy. Antimicrobial agents and chemotherapy 54(3):1186–1192 (2010).
  ·  DOI: [10.1128/AAC.01269-09](https://doi.org/10.1128/AAC.01269-09)

## Population and dosing

**Population:** pregnant and nonpregnant women · condition pregnancy · age group adult · n = 60.

**Dosing:** 450 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka (h–1) | kabs | 1.4 | h–1 |
| CLCQ/F (liters/h) | Q/F | 34.1 | liters/h |
| CLDECQ/F (liters/h) | CL/F | 9.2 | liters/h |
| VC DECQ/F (liters) | V1/F | 39.9 | liters |
| QDECQ/F (liters/h) | Q/F | 3.6 | liters/h |
| VP DECQ/F (liters) | V2/F | 812 | liters |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for chloroquine's clearance, volume of distribution and absorption lag time; t3_param_coverage (+3 more).**

The model was built, but chloroquine's clearance, volume of distribution and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — chloroquine: kabs 1.4 h–1, Q/F 34.1 liters/h; desethylchloroquine: CL/F 9.2 liters/h, V1/F 39.9 liters, Q/F 3.6 liters/h, V2/F 812 liters.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[clcq/f].parameter_id`: this record has Q69, the second reading Q27; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka (h–1) | `Q49` · kabs | 1.4 | h–1 | 0.0003889 | 1/s | 1/h | exact (1) | Karunajeewa_2010_table_p3_1:row2:col1 |
| CLCQ/F (liters/h) | `Q69` · Q/F | 34.1 | liters/h | 9.472e-06 | m3/s | l/h | llm (0.6) | Karunajeewa_2010_table_p3_1:row3:col1 |
| CLDECQ/F (liters/h) | `Q27` · CL/F | 9.2 | liters/h | 2.556e-06 | m3/s | l/h | exact (1) | Karunajeewa_2010_table_p3_1:row9:col1 |
| VC DECQ/F (liters) | `Q290` · V1/F | 39.9 | liters | 0.0399 | m3 | l | exact (1) | Karunajeewa_2010_table_p3_1:row11:col1 |
| QDECQ/F (liters/h) | `Q69` · Q/F | 3.6 | liters/h | 1e-06 | m3/s | l/h | exact (1) | Karunajeewa_2010_table_p3_1:row12:col1 |
| VP DECQ/F (liters) | `Q82` · V2/F | 812 | liters | 0.812 | m3 | l | exact (1) | Karunajeewa_2010_table_p3_1:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'BSV CLCQ' routed out of structural estimates ('Random parameters (BSV and BOV)c')
- table section iiv: 'BSV VC CQ' routed out of structural estimates ('Random parameters (BSV and BOV)c')
- table section iiv: 'BSV CL DECQ' routed out of structural estimates ('Random parameters (BSV and BOV)c')
- table section iiv: 'BSV VC DECQ' routed out of structural estimates ('Random parameters (BSV and BOV)c')
- table section iiv: 'BOV FCQ' routed out of structural estimates ('Random parameters (BSV and BOV)c')
- table section iiv: 'R (CLC CQ, VC CQ)' routed out of structural estimates ('Correlations between BSV pairs')
- table section iiv: 'R (CLC CQ, CLC DECQ)' routed out of structural estimates ('Correlations between BSV pairs')
- table section iiv: 'R (CLC DECQ, VC CQ)' routed out of structural estimates ('Correlations between BSV pairs')
- dropped duplicate Q69 ('QCQ/F (liters/h)', value '20') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=chloroquine
- template fit: none — only the metabolite is modelled — no parent compartment
- model-stage split: 'value from: base model' is the base model of Karunajeewa_2010 (paper reports 2 stages: value from: base model, value from: final covariate model); same population, different model-building step
- row roles: 2 per-group rows of chloroquine covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 14 linked by role; re-tagged parent→desethylchloroquine ×15
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 3 PubChem candidate(s) is 'desethylchloroquine' (LLM) — left in mass units
- molar mass: none found for 'desethylchloroquine' — its concentrations stay mass-only

**Extraction notes:**
- table Karunajeewa_2010_table_p3_1: ambiguous_numeric_format
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clcq/f].parameter_id` | Q69 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[qcq/f]` |  | 20 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Karunajeewa_2010_table_p3_1:row9:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Karunajeewa_2010_table_p3_1:row11:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Karunajeewa_2010_table_p3_1:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Karunajeewa_2010_table_p3_1:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Karunajeewa_2010_table_p3_1:row12:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Karunajeewa_2010_table_p3_1:row13:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.2 L/h | ['Karunajeewa_2010_table_p3_1:row9:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 39.9 L | ['Karunajeewa_2010_table_p3_1:row11:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 812 L | ['Karunajeewa_2010_table_p3_1:row13:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 5 covered |  | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_shared_parameters |  | pass | 4 shared param(s) bound once | bound once |  | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.833 (10 of 12 compared fields agree, 1 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.833 | cross-check contradicted by a second reader: verdict disputed; agreement 0.833 (10 of 12 compared fields agree, 1 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_t_half_terminal | reference | skipped | 12.1 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 9.8 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 9 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 15 |  |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloroquine%5D%20Chloroquine_Karunajeewa2010_base&body=Drug%3A%20chloroquine%0ARecord%3A%20Chloroquine_Karunajeewa2010_base%0APaper%3A%20Karunajeewa_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chloroquine/Chloroquine_Karunajeewa2010_base%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:01 UTC</sub>
