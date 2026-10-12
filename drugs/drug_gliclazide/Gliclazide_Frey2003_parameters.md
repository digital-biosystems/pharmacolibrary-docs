<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;gliclazide&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/&quot;},{&quot;label&quot;:&quot;Frey_2003 \u00b7 parameters&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gliclazide_Mim2023_reference&quot;,&quot;label&quot;:&quot;Mim_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/Gliclazide_Mim2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gliclazide_Rojanasthien2012_reference&quot;,&quot;label&quot;:&quot;Rojanasthien_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/Gliclazide_Rojanasthien2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gliclazide — `Gliclazide_Frey2003_parameters`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The gliclazide record was held back because the absorption rate constant ka was not reported in the source and a default was invented, alongside defaulted Tlag and apparent F=1 assumptions.**

The reported parameters (AUCt 20 mg.h ml-1, t1/2z 21 day, CL/F 15 ml min-1, V/F 19 l) were extracted, but ka and Tlag had no source values and library placeholders were substituted, which the adjudication judged not acceptable for the invented absorption. The model also assumes F=1 and Fm=1 with no molar correction, giving an apparent (/F) parameterization with first-order depot input for extravascular dosing. Additionally, the AUCt unit mg.h ml-1 could not be converted to SI units, so that parameter was carried without an SI value. Extracted — gliclazide: AUCt 20 mg.h ml -1, t1/2z 21 day, CL/F 15 ml min -1, V/F 19 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption rate constant: this record has 1.4, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:38:08.234101+00:00) predates the upstream re-run (2026-10-07 21:15:14.823183+00:00). Current validate status: `rejected`.

## Citation
Frey N et al., Population PKPD modelling of the long-t…, British journal of clinical… (2003)
  ·  DOI: [10.1046/j.1365-2125.2003.01751.x](https://doi.org/10.1046/j.1365-2125.2003.01751.x)

<div class="pk-model-meta" hidden drug="gliclazide" model-id="Gliclazide_Frey2003_parameters" status="rejected" stale="true" population="Type 2 diabetic patients" measured-compound="gliclazide" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Gliclazide AUC 50 (mg.h ml -1 ) | `Q19` · AUCt | 20 | mg.h ml -1 | not captured | [[h] · [mg]] / [ml] | not captured | llm_corrected (0.6) | tab_1:row9:col1, tab_1:row9:col2 | — | not captured |
| Equilibration half-life (day) | `Q57` · t1/2z | 21 | day | 1814400.0 | [d] | not captured | llm (0.6) | tab_1:row11:col1 | — | not captured |
| apparent clearance | `Q27` · CL/F | 15 | ml min -1 | 2.5e-07 | L/h | not captured | exact (1.0) | Frey_2003:results_prose | — | not captured |
| apparent volume of distribution | `Q76` · V/F | 19 | l | 0.019 | L | not captured | exact (1.0) | Frey_2003:results_prose | — | not captured |
| Absorption rate constant (/h) | `Q49` · kabs | 1.4 | /h | 0.00038888888888888887 | 1/h | not captured | review_gapfill (0.7) | Mim_2023:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Diet alone' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row15:col1', 'tab_1:row15:col2'])
- dropped unlinked row (NIL): '1 OHA class' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row16:col1', 'tab_1:row16:col2'])
- dropped unlinked row (NIL): '2 OHA classes' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row17:col1', 'tab_1:row17:col2'])
- dropped PD-category row 'E max (% of baseline FPG)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row8:col1', 'tab_1:row8:col2'])
- dropped PD-category row 'Rate constant of equilibration k eq (day -1 )' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row10:col1', 'tab_1:row10:col2'])
- dropped PD-category row 'Constant rate of disease progression in' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row12:col1', 'tab_1:row12:col2'])
- dropped unlinked row (NIL): 'Responders' — extend the ontology if this is a real PK parameter (source ['tab_1:row19:col5', 'tab_1:row19:col6'])
- dropped unlinked row (NIL): 'Nonresponders' — extend the ontology if this is a real PK parameter (source ['tab_1:row20:col5', 'tab_1:row20:col6'])
- salvaged Q27 ('apparent clearance'=15) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution'=19) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=gliclazide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'parameters' subgroup of Frey_2003 (paper reports 3 populations: intersubject variability, parameters, residual variability)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Mim_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row4:col3 = '1 7'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 1.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[equilibration half-life].parameter_id` | Q57 | Q59 | mismatch |
| `gpt-oss-120b` | `parameters[gliclazide auc 50].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-oss-120b` | `parameters[gliclazide auc 50].value` | 20 | 60 | mismatch |
| `gpt-oss-120b` | `parameters[rate constant of equilibration k eq]` | not captured | 84 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row9:col1', 'tab_1:row9:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Mim_2023:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_1:row11:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.9 L/h | not captured | not captured | ['Frey_2003:results_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 19 L | not captured | not captured | ['Frey_2003:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=gliclazide) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | pass | 16.0 | 14.550080714691953 | 0.9094 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_gliclazide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Frey_2003` / `Frey_2003::parameters`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_parameters.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_parameters.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_parameters.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:15 UTC</sub>
