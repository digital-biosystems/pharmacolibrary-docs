<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/&quot;},{&quot;label&quot;:&quot;Jones_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Jones_2023_pEGFR&quot;,&quot;label&quot;:&quot;Jones_2023 \u00b7 pEGFR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/pd_Jones_2023_pEGFR.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# osimertinib — `Osimertinib_Jones2023_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 2.5, model 3.22); f use library defaults, not estimates from this paper (+4 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is osimertinib's own; they describe osimertinib and savolitinib. Extracted — osimertinib and savolitinib: CL 0.43 L/h/kg, V 1.44 L/kg, kabs 0.24 h−1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has savolitinib and osimertinib (with 1-aminobenzotriazole), the second reading osimertinib; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `savolitinib and osimertinib (with 1-aminobenzotriazole)`, measured `osimertinib and savolitinib`.

## Citation
Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023)
  ·  DOI: [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193)

<div class="pk-model-meta" hidden drug="osimertinib" model-id="Osimertinib_Jones2023_reference" status="rejected" stale="false" population="EGFR mutation-positive, MET-amplified NSCLC patient-derived xenograft tumor-bearing mice" measured-compound="osimertinib and savolitinib" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| theta_q340_weight_power | `Q900` · theta_q340_weight_power | 0.0254 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl1:row12:col2, tbl1:row12:col3 | — | not captured |
| theta_q312_weight_power | `Q900` · theta_q312_weight_power | 0.201 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl1:row17:col2, tbl1:row17:col3 | — | not captured |
| clearance | `Q22` · CL | 0.43 | L/h/kg | 8.361111111111111e-06 | L/h | not captured | exact (1.0) | Jones_2023:other_prose | — | not captured |
| distribution volume | `Q61` · V | 1.44 | L/kg | 0.10079999999999999 | L | not captured | exact (1.0) | Jones_2023:other_prose | — | not captured |
| first-order absorption rate constant (ka) | `Q49` · kabs | 0.24 | h−1 | 6.666666666666667e-05 | 1/h | not captured | review_gapfill (0.7) | Rodier_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'pEGFR baseline' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row2:col2', 'tbl1:row2:col3'])
- dropped PD-category row 'pEGFR EC50base' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row3:col2', 'tbl1:row3:col3'])
- dropped PD-category row 'pEGFR turnover rate constant (Kout)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row4:col2', 'tbl1:row4:col3'])
- dropped PD-category row 'pEGFR Emax (proportional increase Kout)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row5:col2', 'tbl1:row5:col3'])
- dropped PD-category row 'pEGFR combination pMET effect slope on EC50' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row6:col2'])
- dropped PD-category row 'pMET baseline' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row7:col2', 'tbl1:row7:col3'])
- dropped PD-category row 'pMET EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row8:col2', 'tbl1:row8:col3'])
- dropped PD-category row 'pMET Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row9:col2'])
- dropped unlinked row (NIL): 'Baseline tumor size' — extend the ontology if this is a real PK parameter (source ['tbl1:row11:col2', 'tbl1:row11:col3'])
- dropped PD-category row 'Linear tumor growth rate' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row13:col1', 'tbl1:row13:col2', 'tbl1:row13:col3'])
- dropped PD-category row 'pEGFR effect on tumor growth (slope)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row14:col2', 'tbl1:row14:col3'])
- dropped PD-category row 'pMET effect on tumor growth (slope)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row15:col2', 'tbl1:row15:col3'])
- routed 'Variability baseline (log-normal)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q340 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q312 has no base parameter row (kept as unattached equation-variable)
- salvaged Q22 ('clearance'=0.43) from results prose — parameter table was unreadable
- salvaged Q61 ('distribution volume'=1.44) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=osimertinib and savolitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — turnover model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=turnover; 15/15 row label(s) assigned, 2 linked by role; re-tagged parent→osimertinib ×8, parent→osimertinib and savolitinib ×1, parent→savolitinib ×5
- molar mass: no plausible PubChem entry for 'osimertinib and savolitinib' ('osimertinib and savolitinib') — left in mass units
- molar mass: none found for 'osimertinib and savolitinib' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Rodier_2022's review values (primary lacked it)
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- unparsed cell tbl1:row6:col3 = '−0.0391 to −0.0243'
- unparsed cell tbl1:row9:col3 = '−0.984 to −0.983'
- unparsed cell tbl1:row11:col1 = 'mm3'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[clearance]` | not captured | 0.43 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clearance]` | 0.43 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[distribution volume]` | not captured | 1.44 | only_one_extracted |
| `qwen3.8-27b` | `parameters[distribution volume]` | 1.44 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[first-order absorption rate constant]` | 0.24 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q335_weight_power]` | not captured | 0.0254 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q340_weight_power]` | 0.0254 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | savolitinib and osimertinib (with 1-aminobenzotriazole) | osimertinib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | osimertinib and savolitinib | osimertinib | mismatch |

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
| C1_half_life_beta | pass | 2.5 | 2.321 | 0.9284 | 0.25 | reported t½β |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Rodier_2022:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.43 | not captured | not captured | ['Jones_2023:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 30.1 L/h | not captured | not captured | ['Jones_2023:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 101 L | not captured | not captured | ['Jones_2023:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | fail | Metabolite_C (measured=osimertinib and savolitinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_shared_parameters | not captured | pass | 2 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 2.5 | 3.22402636667105 | 1.2896 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.5 | 3.22402636667105 | 0.9212 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_osimertinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jones_2023` / `Jones_2023::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_osimertinib/models/modelica/Osimertinib_Jones2023_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_osimertinib/models/modelica/Osimertinib_Jones2023_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_osimertinib/models/modelica/Osimertinib_Jones2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1.4 mg, single dose, first-order absorption (ka 0.24 /h, F 0.9). Doses in the paper: 1.4, 21, 70, 175, 700, 1050 mg.

<dbs-fmusim paramsurl="drugs/drug_osimertinib/Osimertinib_Jones2023_reference/Osimertinib_Jones2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_osimertinib/Osimertinib_Jones2023_reference/Osimertinib_Jones2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Osimertinib_Jones2023_reference_params.json` · controls `Osimertinib_Jones2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:07 UTC</sub>
