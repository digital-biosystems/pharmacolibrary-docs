<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;gliclazide&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/&quot;},{&quot;label&quot;:&quot;Frey_2003 \u00b7 intersubject_variability&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gliclazide_Mim2023_reference&quot;,&quot;label&quot;:&quot;Mim_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/Gliclazide_Mim2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gliclazide_Rojanasthien2012_reference&quot;,&quot;label&quot;:&quot;Rojanasthien_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/Gliclazide_Rojanasthien2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gliclazide — `Gliclazide_Frey2003_intersubject_variability`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The gliclazide record was held back because the absorption rate constant ka was not reported in the source and a default value was invented, alongside defaulted lag time and an assumed F=1 apparent parameterization.**

The source reports AUCt 60 mg.h ml-1, CL/F 15 ml min-1 and V/F 19 l for gliclazide in Type 2 diabetic patients, but no ka or lag time, so the model builder substituted library defaults for both. The failed check flagged this invented absorption as not acceptable. Additionally, the unit mg.h ml-1 for AUCt could not be converted to SI, and bioavailability was assumed to be 1 with no molar correction, making the clearance and volume apparent (/F) values with first-order depot input for extravascular dosing. Extracted — gliclazide: AUCt 60 mg.h ml -1, CL/F 15 ml min -1, V/F 19 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has gliclazide, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:38:08.225697+00:00) predates the upstream re-run (2026-10-07 21:15:14.823183+00:00). Current validate status: `rejected`.

## Citation
Frey N et al., Population PKPD modelling of the long-t…, British journal of clinical… (2003)
  ·  DOI: [10.1046/j.1365-2125.2003.01751.x](https://doi.org/10.1046/j.1365-2125.2003.01751.x)

## Model component
<dbs-pgx drug="gliclazide" model-id="Gliclazide_Frey2003_intersubject_variability" status="rejected" stale="true" population="Type 2 diabetic patients" measured-compound="gliclazide" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Gliclazide AUC 50 (mg.h ml -1 ) | `Q19` · AUCt | 60 | mg.h ml -1 | not captured | [[h] · [mg]] / [ml] | not captured | llm_corrected (0.6) | tab_1:row9:col2, tab_1:row9:col3 | — | not captured |
| apparent clearance | `Q27` · CL/F | 15 | ml min -1 | 2.5e-07 | L/h | not captured | exact (1.0) | Frey_2003:results_prose | — | not captured |
| apparent volume of distribution | `Q76` · V/F | 19 | l | 0.019 | L | not captured | exact (1.0) | Frey_2003:results_prose | — | not captured |
| Absorption rate constant (/h) | `Q49` · kabs | 1.4 | /h | 0.00038888888888888887 | 1/h | not captured | review_gapfill (0.7) | Mim_2023:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Diet alone' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col2', 'tab_1:row15:col2'])
- dropped unlinked row (NIL): '1 OHA class' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col2', 'tab_1:row16:col2'])
- dropped unlinked row (NIL): '2 OHA classes' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col2', 'tab_1:row17:col2'])
- dropped PD-category row 'E max (% of baseline FPG)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row8:col2', 'tab_1:row8:col3'])
- dropped PD-category row 'Rate constant of equilibration k eq (day -1 )' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row10:col2', 'tab_1:row10:col3'])
- dropped PD-category row 'Constant rate of disease progression in' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row12:col2', 'tab_1:row12:col3'])
- dropped unlinked row (NIL): 'Responders' — extend the ontology if this is a real PK parameter (source ['tab_1:row19:col5', 'tab_1:row19:col6'])
- dropped unlinked row (NIL): 'Nonresponders' — extend the ontology if this is a real PK parameter (source ['tab_1:row20:col5', 'tab_1:row20:col6'])
- salvaged Q27 ('apparent clearance'=15) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution'=19) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=gliclazide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'intersubject variability' subgroup of Frey_2003 (paper reports 3 populations: intersubject variability, parameters, residual variability)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Mim_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row4:col3 = '1 7'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 1.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` | 15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` | not captured | 15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | not captured | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[equilibration half-life]` | not captured | 21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[gliclazide auc 50].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | gliclazide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | gliclazide | unknown | mismatch |

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
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row9:col2', 'tab_1:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Mim_2023:review'] |
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
| T1_t_half_beta | reference | pass | 16.0 | 14.631315851983707 | 0.9145 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gliclazide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Frey_2003` / `Frey_2003::intersubject_variability`)
- model: `../../../knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_intersubject_variability.mo`
- deviation: `../../../knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_intersubject_variability.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_intersubject_variability.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:15 UTC</sub>
