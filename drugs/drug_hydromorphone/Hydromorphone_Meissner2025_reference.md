<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;hydromorphone&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/&quot;},{&quot;label&quot;:&quot;Meissner_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydromorphone_Balyan2020_reference&quot;,&quot;label&quot;:&quot;Balyan_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Balyan2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Guedes2008_reference&quot;,&quot;label&quot;:&quot;Guedes_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Guedes2008_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Wimbish2024_reference&quot;,&quot;label&quot;:&quot;Wimbish_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Wimbish2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Meissner2025_reference&quot;,&quot;label&quot;:&quot;Meissner_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hydromorphone — `Hydromorphone_Meissner2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Hydromorphone's terminal half-life (0.0839) deviates from reported values (2.37, 2.93), and the topology lacks the required parent compartment for morphine.

<div class="pk-model-meta" hidden drug="hydromorphone" model-id="Hydromorphone_Meissner2025_reference" status="rejected" stale="false" population="healthy adults" measured-compound="hydromorphone" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Meissner K, Olofsen E, Dahan A, Kharasch ED. Morphine and hydromorphone pharmacokinetics in human volunteers: population-based modelling of interindividual and opioid-related variability. British journal of anaesthesia 134(2):358–367 (2025).
  ·  DOI: [10.1016/j.bja.2024.08.042](https://doi.org/10.1016/j.bja.2024.08.042)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = $"51".

**Dosing:** 3.5, 7, 14 mg, iv, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference.svg" alt="Hydromorphone_Meissner2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MTT | MTT | 0.315 |  |
| s R | equation variable | 0.286 | h À1 |
| V 1 (L) | V1 | 13.6 | L |
| CL 1 (L h À1 )* | CL | 83.8 | L h À1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Hydromorphone's terminal half-life (0.0839) deviates from reported values (2.37, 2.93), and the topology lacks the required parent compartment for morphine.**

The simulated terminal half-life of 0.0839 does not match the expected values of 2.37 or 2.93, with ratios of 0.0354 and 0.0286. The model structure is a single compartment for hydromorphone, but the topology requires a parent-metabolite structure that includes morphine. The output variable was assigned to the central compartment instead of the measured analyte, hydromorphone. Extracted — morphine-glucuronides: MTT 0.315; hydromorphone: V1 13.6 L, CL 83.8 L h À1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has hydromorphone, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MTT | `Q81` · MTT | 0.315 |  |  |  |  | exact (1) | tab_0:row4:col2, tab_0:row4:col3 |
| s R | `Q900` · equation variable | 0.286 | h À1 |  |  | 1/h | llm (0.6) | tab_0:row5:col2, tab_0:row5:col3, tab_0:row9:col2, tab_0:row9:col3 |
| V 1 (L) | `Q63` · V1 | 13.6 | L | 0.0136 | m3 | L | space_fold (0.95) | Meissner_2025:other_prose |
| CL 1 (L h À1 )* | `Q22` · CL | 83.8 | L h À1 | 2.328e-05 | m3/s | L/h | boundary (0.8) | Meissner_2025:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 's A' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row10:col2', 'tab_0:row10:col3'])
- dropped value-less row: 's R,MOR'
- dropped value-less row: 's A,MOR'
- dropped value-less row: 's R,HMO'
- dropped value-less row: 's A,HMO'
- salvaged Q63 ('V 1 (L)'=13.6) from results prose — parameter table was unreadable
- salvaged Q22 ('CL 1 (L h À1 )*'=83.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=hydromorphone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 0 linked by role; re-tagged morphine-glucuronides→morphine ×4, morphine-glucuronides→parent ×4
- molar mass: no plausible PubChem entry for 'morphine-glucuronides' ('no full name in the paper') — left in mass units
- molar mass: none found for 'morphine-glucuronides' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- unparsed cell tab_0:row4:col1 = '0.614 (0.089) 14'
- unparsed cell tab_0:row5:col1 = '0.057 (0.005) 9'
- unparsed cell tab_0:row6:col1 = '0.510 (0.066)13'
- unparsed cell tab_0:row9:col1 = '0.037 (0.004) 11'
- unparsed cell tab_0:row10:col1 = '2.400 (0.364) 15'
- unparsed cell Meissner_2025_table_2:row10:col1 = '0.070 (0.005) 7'
- unparsed cell Meissner_2025_table_2:row11:col1 = '0.092 (0.004) 4'
- unparsed cell Meissner_2025_table_2:row12:col1 = '0.09 (0.02) 18'
- unparsed cell Meissner_2025_table_2:row13:col1 = '0.044 (0.007) 16'
- companion parameter table 2 transcribed (8 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.091 (1/11 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['morphine', 'morphine-glucuronides', 'metabolism']] | [['morphine', 'morphine glucuronides', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl 1 (l h à1 )*]` | 83.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` |  | 0.315 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 0.315 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[s a]` |  | 0.201 | only_one_extracted |
| `gpt-oss-120b` | `parameters[s r]` |  | 0.286 | only_one_extracted |
| `gpt-oss-120b` | `parameters[s r]` | 0.286 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1]` | 13.6 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | hydromorphone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | hydromorphone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 83.8 | ['Meissner_2025:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 83.8 L/h | ['Meissner_2025:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.6 L | ['Meissner_2025:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | fail | Metabolite_C (measured=hydromorphone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion |  | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_shared_parameters |  | pass | 2 shared param(s) bound once | bound once |  | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 2.37 | 0.08394 | 0.0354 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.93 | 0.08394 | 0.0286 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 3.5 mg infusion over 10 min, single dose. Doses in the paper: 3.5, 7, 14 mg.

<dbs-fmusim paramsurl="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Hydromorphone_Meissner2025_reference_params.json` · controls `Hydromorphone_Meissner2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydromorphone%5D%20Hydromorphone_Meissner2025_reference&body=Drug%3A%20hydromorphone%0ARecord%3A%20Hydromorphone_Meissner2025_reference%0APaper%3A%20Meissner_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 05:08 UTC</sub>
