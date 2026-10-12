<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;levodopa&quot;,&quot;href&quot;:&quot;drugs/drug_levodopa/&quot;},{&quot;label&quot;:&quot;Senek_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levodopa_Senek2018_reference&quot;,&quot;label&quot;:&quot;Senek_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levodopa/Levodopa_Senek2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levodopa — `Levodopa_Senek2018_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273), gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The levodopa model was rejected because its structure is a one-compartment enteral model instead of the parent–metabolite structure the paper describes, its output is the levodopa central compartment rather than the measured analyte compartment, and its terminal half-life (2.40 h) exceeds the reported 1.85 h beyond tolerance.**

The record declares levodopa metabolized to dopamine, but the model structure is a single enteral compartment rather than a parent–metabolite structure with a metabolite compartment, and the simulated output is the levodopa central compartment instead of the measured analyte compartment. Simulated as dosed, the terminal half-life is 2.399695109519957 h versus the paper's 1.85 h (ratio 1.2971), outside tolerance. The builder additionally defaulted Tlag and assumed F=1, Fm=1 with no molar correction, and a second reader disputed the dosed compound (levodopa alone versus levodopa/carbidopa) and the presence of the levodopa–dopamine metabolism link. Extracted — levodopa: CL/F 48.5 L/h, V1/F 168 L, kabs 1.2 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has levodopa/carbidopa, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `levodopa/carbidopa`, measured `levodopa`.

## Citation
Senek M et al., Population pharmacokinetics of levodopa…, European journal of clinica… (2018)
  ·  DOI: [10.1007/s00228-018-2497-2](https://doi.org/10.1007/s00228-018-2497-2)

<div class="pk-model-meta" hidden drug="levodopa" model-id="Levodopa_Senek2018_reference" status="rejected" stale="false" population="healthy subjects and Parkinson&#39;s disease patients" measured-compound="levodopa" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| LD CL/F (50 mg CD, 70-kg subject) | `Q27` · CL/F | 48.5 | L/h | 1.3472222222222222e-05 | L/h | not captured | boundary (0.8) | Senek_2018:other_prose | — | not captured |
| VC/F | `Q290` · V1/F | 168 | L | 0.168 | L | not captured | exact (1.0) | Senek_2018:discussion_prose | — | not captured |
| ka | `Q49` · kabs | 1.2 | h−1 | 0.0003333333333333333 | 1/h | not captured | review_gapfill (0.7) | Suksai_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| FREL | Q87 | not captured | exact |
| FREL | Q87 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'CL/F (L/min)*(WT/70)0.75'
- dropped value-less row: 'VC/F (L)*(WT/70)' (captured trailing unit 'WT/70' for child rows)
- dropped value-less row: 'Q/F (L/min)*(WT/70)0.75'
- dropped value-less row: 'VP/F (L)*(WT/70)' (captured trailing unit 'WT/70' for child rows)
- dropped value-less row: 'MTT1 (min)' (captured trailing unit 'min' for child rows)
- dropped value-less row: 'MTT2 (min)' (captured trailing unit 'min' for child rows)
- dropped value-less row: 'fa1‡'
- dropped value-less row: 'Pre-dose concentration (μg/mL)' (captured trailing unit 'μg/mL' for child rows)
- dropped value-less row: 'INTERCL/F-CDAMT (mg)' (captured trailing unit 'mg' for child rows)
- dropped value-less row: 'CL/F-HY'
- dropped value-less row: 'FREL-AGE'
- dropped value-less row: 'MTT2-SEX'
- dropped value-less row: 'Healthy subjects'
- dropped value-less row: 'Patients'
- salvaged Q27 ('LD CL/F (50 mg CD, 70-kg subject)'=48.5) from results prose — parameter table was unreadable
- salvaged Q290 ('VC/F'=168) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=levodopa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Suksai_2026's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell Tab2:row1:col3 = '1.31† (10.6) [1.08–1.63]'
- unparsed cell Tab2:row1:col4 = '1.05 (8.57) [0.881–1.23]'
- unparsed cell Tab2:row2:col3 = '46.0 (9.17) [38.6–55.2]'
- unparsed cell Tab2:row2:col4 = '167 (8.13) [142–195]'
- unparsed cell Tab2:row3:col3 = '0.667 (11.2) [0.548–0.837]'
- unparsed cell Tab2:row4:col3 = '44.8 (6.01) [40.0–50.3]'
- unparsed cell Tab2:row5:col3 = '16.1 (6.05) [14.3–18.2]'
- unparsed cell Tab2:row5:col4 = '34.7 (5.73) [30.9–38.7]'
- unparsed cell Tab2:row6:col3 = '85.9 (4.69) [78.1–94.4]'
- unparsed cell Tab2:row6:col4 = '121 (5.27) [109–134]'
- unparsed cell Tab2:row8:col3 = '0.749 (4.67) [0.678–0.816]'
- unparsed cell Tab2:row8:col4 = '0.570 (6.61) [0.50–0.65]'
- unparsed cell Tab2:row9:col3 = '0.129 (45.9) [0.0542–0.268]'
- unparsed cell Tab2:row9:col4 = '0.0256 (32.5) [0.01–0.04]'
- unparsed cell Tab2:row10:col3 = '94.6 (32.8) [52.0–161.5]'
- unparsed cell Tab2:row12:col1 = '− 0.0616 FIX'
- unparsed cell Tab2:row12:col3 = '− 0.0616 FIX'
- unparsed cell Tab2:row12:col5 = '− 0.0967 (27.0)'
- unparsed cell Tab2:row23:col3 = '15.0 (6.14) [13.5–17.1]'
- unparsed cell Tab2:row23:col4 = '7.70 (11.4) [6.08–9.49]'
- unparsed cell Tab2:row24:col3 = '7.07 (6.51) [6.22–8.04]'
- unparsed cell Tab2:row24:col4 = '3.86 (20.2) [2.21–5.27]'
- unparsed cell Tab2:row26:col3 = '0.00406 (9.15) [0.00343–0.00491]'
- unparsed cell Tab2:row26:col4 = '0.00418 (5.85) [0.00372–0.00468]'
- unparsed cell Tab2:row27:col4 = '0.00693 (13.5) [0.00526–0.00880]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.273 (3/11 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['levodopa', 'dopamine', 'metabolism']] | [['levodopa', '3-o-methyldopa', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ld cl/f]` | 48.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 168 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | 168 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | levodopa/carbidopa | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | levodopa | unknown | mismatch |
| `gpt-oss:120b` | `model.links` | [['levodopa', 'dopamine', 'metabolism']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[vc/f].parameter_id` | Q290 | Q76 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | levodopa/carbidopa | levodopa | mismatch |

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
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Suksai_2026:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 48.5 L/h | not captured | not captured | ['Senek_2018:other_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 168 L | not captured | not captured | ['Senek_2018:discussion_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=levodopa) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 1.8499999999999999 | 2.399695109519957 | 1.2971 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_levodopa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Senek_2018` / `Senek_2018::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_levodopa/models/modelica/Levodopa_Senek2018_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_levodopa/models/modelica/Levodopa_Senek2018_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_levodopa/models/modelica/Levodopa_Senek2018_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 45 mg, single dose, first-order absorption (ka 1.2 /h, F 1). Doses in the paper: 45, 75, 110, 410 mg.

<dbs-fmusim paramsurl="drugs/drug_levodopa/Levodopa_Senek2018_reference/Levodopa_Senek2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_levodopa/Levodopa_Senek2018_reference/Levodopa_Senek2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Levodopa_Senek2018_reference_params.json` · controls `Levodopa_Senek2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 13:32 UTC</sub>
