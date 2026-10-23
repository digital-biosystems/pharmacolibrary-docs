<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;varenicline&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/&quot;},{&quot;label&quot;:&quot;Glatard_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Varenicline_Fediuk2021_reference&quot;,&quot;label&quot;:&quot;Fediuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Varenicline_Glatard2019_reference&quot;,&quot;label&quot;:&quot;Glatard_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Glatard2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# varenicline — `Varenicline_Glatard2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The varenicline model was rejected because its clearance entry is labelled as a covariate-specific estimate (8.5 L/h for a 70-kg individual with normal creatinine clearance in Hom-Alt/Het-Alt individuals) rather than the drug's clearance, and its terminal half-life (15.2 h) misses the paper's 19 h.

<div class="pk-model-meta" hidden drug="varenicline" model-id="Varenicline_Glatard2019_reference" status="rejected" stale="false" population="adult smokers from the general population" measured-compound="varenicline" parameterization="apparent" topology="1C"></div>

## Citation
Glatard A, Guidi M, Dobrinas M, Cornuz J, Csajka C, Eap CB. Influence of body weight and UGT2B7 polymorphism on varenicline exposure in a cohort of smokers from the general population. European journal of clinical pharmacology 75(7):939–949 (2019).
  ·  DOI: [10.1007/s00228-019-02662-9](https://doi.org/10.1007/s00228-019-02662-9)

## Population and dosing

**Population:** adult smokers from the general population · condition smoking (smoking cessation) · age group adult · n = 82.

**Dosing:** 1 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_varenicline/Varenicline_Glatard2019_reference/Varenicline_Glatard2019_reference.svg" alt="Varenicline_Glatard2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 9.6 | L/h |
| V/F | V/F | 211 | L |
| CL/F estimate for a 70-kg individual with normal creatinine clearance in Hom-Alt/Het-Alt individuals | CL | 8.5 | L/h |
| ka fixed | kabs | 0.98 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The varenicline model was rejected because its clearance entry is labelled as a covariate-specific estimate (8.5 L/h for a 70-kg individual with normal creatinine clearance in Hom-Alt/Het-Alt individuals) rather than the drug's clearance, and its terminal half-life (15.2 h) misses the paper's 19 h.**

The analyte-identity check failed because the disposition parameter's label names a creatinine-clearance/genotype-stratified CL/F estimate instead of varenicline itself; the biomarker kinetics belong in the separate PD record. The terminal half-life computed from the model is 15.2215859948631 h against an expected 24.0 h (ratio 0.6342), outside tolerance — the paper reports 19 h while the model gives 15.2 h. The builder also left the absorption lag time (Tlag) at a default instead of an explicit estimate and parameterized the model as apparent (F=1, Fm=1, no molar correction). Extracted — varenicline: CL/F 9.6 L/h, V/F 211 L, CL 8.5 L/h, kabs 0.98 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has varenicline, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 9.6 | L/h | 2.667e-06 | m3/s | L/h | exact (1) | Glatard_2019:results_prose |
| V/F | `Q76` · V/F | 211 | L | 0.211 | m3 | L | exact (1) | Glatard_2019:results_prose |
| CL/F estimate for a 70-kg individual with normal creatinine clearance in Hom-Alt/Het-Alt individuals | `Q22` · CL | 8.5 | L/h | 2.361e-06 | m3/s | L/h | boundary (0.8) | Glatard_2019:discussion_prose |
| ka fixed | `Q49` · kabs | 0.98 | h -1 | 0.0002722 | 1/s | 1/h | review_gapfill (0.7) | Glatard_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- salvaged Q27 ('CL/F'=9.6) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=211) from results prose — parameter table was unreadable
- salvaged Q22 ('CL/F estimate for a 70-kg individual with normal creatinine clearance in Hom-Alt/Het-Alt individuals'=8.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=varenicline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Glatard_2019's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- text-pointer recovery found no readable extracted parameter table

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f estimate for a 70-kg individual with normal creatinine clearance in hom-alt/het-alt individuals]` | 8.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 9.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 9.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka fixed]` | 0.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 211 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 211 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | varenicline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | varenicline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 19 | 15.23 | 0.8018 | 0.25 | reported t½β |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Glatard_2019:review'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.5 L/h |  |  | ['Glatard_2019:discussion_prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.6 L/h |  |  | ['Glatard_2019:results_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 211 L |  |  | ['Glatard_2019:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | fail | varenicline (or metabolite) | CL/F estimate for a 70-kg individual with normal creatinine clearance in Hom-Alt/Het-Alt individuals |  | disposition label(s) name a biomarker, not varenicline: 'CL/F estimate for a 70-kg individual with normal creatinine clearance in Hom-Alt/Het-Alt individuals' · the biomarker kinetics are in the PD record(s) Glatard_2019::CO |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=varenicline) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | pass | 19 | 15.22 | 0.8011 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 24 | 15.22 | 0.6342 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 15.22 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 0.98 /h, F 1). Dose in the paper: 1 mg.

<dbs-fmusim paramsurl="drugs/drug_varenicline/Varenicline_Glatard2019_reference/Varenicline_Glatard2019_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_varenicline/Varenicline_Glatard2019_reference/Varenicline_Glatard2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Varenicline_Glatard2019_reference_params.json` · controls `Varenicline_Glatard2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvarenicline%5D%20Varenicline_Glatard2019_reference&body=Drug%3A%20varenicline%0ARecord%3A%20Varenicline_Glatard2019_reference%0APaper%3A%20Glatard_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_varenicline/Varenicline_Glatard2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:49 UTC</sub>
