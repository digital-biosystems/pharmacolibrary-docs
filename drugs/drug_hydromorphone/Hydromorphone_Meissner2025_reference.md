<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;hydromorphone&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/&quot;},{&quot;label&quot;:&quot;Meissner_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydromorphone_Balyan2020_reference&quot;,&quot;label&quot;:&quot;Balyan_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Balyan2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Guedes2008_reference&quot;,&quot;label&quot;:&quot;Guedes_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Guedes2008_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Meissner2025_reference&quot;,&quot;label&quot;:&quot;Meissner_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Hydromorphone_Wimbish2024_reference&quot;,&quot;label&quot;:&quot;Wimbish_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Wimbish2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hydromorphone — `Hydromorphone_Meissner2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091), gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The hydromorphone record was rejected because its metabolism link has no parameter (formation clearance is 'none'), leaving hydromorphone unlinked, and the central volume of distribution was reported as 7% — a unit that could not be converted to SI, so no SI value exists.**

The record lists a hydromorphone link with relation 'none' and link parameter 'none', so the metabolite has no path from the dose (unlinked metabolite). The central volume of distribution for morphine and hydromorphone carries the verbatim unit '%', which is not a valid unit for a volume of distribution and could not be converted to SI, so the parameter had no usable numeric value. A second reader also disagreed on the primary analyte (morphine; hydromorphone versus morphine and hydromorphone) and on whether the morphine-to-glucuronide metabolism link exists, and read the clearance 83.8 L/h and volume 7 under different parameter labels; these disagreements are unresolved. Extracted — morphine and hydromorphone: CL 83.8 L h À1, V 7 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has hydromorphone, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:13.441799+00:00) predates the upstream re-run (2026-10-07 05:08:29.452608+00:00). Current validate status: `extracted`.

## Citation
Meissner K et al., Morphine and hydromorphone pharmacokine…, British journal of anaesthe… (2025)
  ·  DOI: [10.1016/j.bja.2024.08.042](https://doi.org/10.1016/j.bja.2024.08.042)

## Model component
<dbs-pgx drug="hydromorphone" model-id="Hydromorphone_Meissner2025_reference" status="extracted" stale="true" population="healthy adults" measured-compound="hydromorphone" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MTT | `Q81` · MTT | 0.315 | not captured | not captured | not captured | not captured | exact (1.0) | tab_0:row4:col2, tab_0:row4:col3 | — | not captured |
| s R | `Q900` · equation variable | 0.286 | h À1 | not captured | [1] / [h] | not captured | llm (0.6) | tab_0:row5:col2, tab_0:row5:col3, tab_0:row9:col2, tab_0:row9:col3 | — | not captured |
| V 1 (L) | `Q63` · V1 | 13.6 | L | 0.0136 | L | not captured | space_fold (0.95) | Meissner_2025:other_prose | — | not captured |
| CL 1 (L h À1 )* | `Q22` · CL | 83.8 | L h À1 | 2.3277777777777778e-05 | L/h | not captured | boundary (0.8) | Meissner_2025:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.091 (1/11 fields) | 10 |
| `gpt-oss:120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['morphine', 'morphine-glucuronides', 'metabolism']] | [['morphine', 'morphine glucuronides', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl 1 (l h à1 )*]` | 83.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | not captured | 0.315 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 0.315 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[s a]` | not captured | 0.201 | only_one_extracted |
| `gpt-oss-120b` | `parameters[s r]` | not captured | 0.286 | only_one_extracted |
| `gpt-oss-120b` | `parameters[s r]` | 0.286 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1]` | 13.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | hydromorphone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | hydromorphone | unknown | mismatch |
| `gpt-oss:120b` | `model.links` | [['morphine', 'morphine glucuronides', 'metabolism'], ['hydromorphone', 'none', 'none']] | [['morphine', 'morphine glucuronide', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | not captured | 7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl 1 (l h à1 )*]` | 83.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl 1*]` | not captured | 83.8 | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | morphine and hydromorphone | morphine; hydromorphone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 83.8 | not captured | not captured | ['Meissner_2025:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 83.8 L/h | not captured | not captured | ['Meissner_2025:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.6 L | not captured | not captured | ['Meissner_2025:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_hydromorphone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Meissner_2025` / `Meissner_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_modelica.zip" download>Hydromorphone_Meissner2025_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_fmi.zip" download>Hydromorphone_Meissner2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_matlab.zip" download>Hydromorphone_Meissner2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_matlab_simbio.zip" download>Hydromorphone_Meissner2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_sbml.zip" download>Hydromorphone_Meissner2025_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_cellml.zip" download>Hydromorphone_Meissner2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference.svg" alt="Hydromorphone_Meissner2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 3.5 mg infusion over 10 min, single dose. Doses in the paper: 3.5, 7, 14 mg.

<dbs-fmusim paramsurl="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference/Hydromorphone_Meissner2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Hydromorphone_Meissner2025_reference_params.json` · controls `Hydromorphone_Meissner2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:08 UTC</sub>
