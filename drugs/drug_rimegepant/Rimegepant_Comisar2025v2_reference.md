<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;rimegepant&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/&quot;},{&quot;label&quot;:&quot;Comisar_2025_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rimegepant_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/Rimegepant_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rimegepant — `Rimegepant_Comisar2025v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.789), gpt-oss:120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dose effect on f1: this record has none, the second reading 0.191; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:39:32.269512+00:00) predates the upstream re-run (2026-10-07 15:39:20.245837+00:00). Current validate status: `rejected`.

## Citation
Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051)

<div class="pk-model-meta" hidden drug="rimegepant" model-id="Rimegepant_Comisar2025v2_reference" status="rejected" stale="true" population="healthy adults, elderly, adults with renal or hepatic dysfunction, Japanese and Chinese adults" measured-compound="rimegepant" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance, CL/F (L/h) | `Q27` · CL/F | 24.1 | L/h | 6.6944444444444455e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row2:col1 | — | not captured |
| Apparent central volume of distribution, Vc/F (L) | `Q290` · V1/F | 114 | L | 0.114 | [l] | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row3:col1 | — | not captured |
| Apparent peripheral volume of distribution, Vp/F (L) | `Q82` · V2/F | 46.0 | L | 0.046 | [l] | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row4:col1 | — | not captured |
| Apparent inter‐compartmental clearance, Q/F (L/h) | `Q69` · Q/F | 3.94 | L/h | 1.0944444444444445e-06 | [l] / [h] | not captured | llm_corrected (0.6) | psp470051-tbl-0003:row5:col1 | — | not captured |
| Transit absorption rate constant, ktr (h−1) | `Q306` · ktr | 8.23 | h−1 | 0.002286111111111111 | [1] / [h] | not captured | llm_corrected (0.6) | psp470051-tbl-0003:row6:col1 | — | not captured |
| First‐order absorption rate constant, ka (h−1) | `Q49` · kabs | 3.86 | h−1 | 0.0010722222222222222 | [1] / [h] | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row7:col1 | — | not captured |
| Fed‐status on relative bioavailability (F1) | `Q87` · Frel | -0.315 | F1 | not captured | not captured | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row14:col1 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.229 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470051-tbl-0003:row9:col1 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.423 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470051-tbl-0003:row10:col1 | — | not captured |
| theta_q338_fed | `Q900` · theta_q338_fed | -0.706 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470051-tbl-0003:row15:col1 | — | not captured |
| theta_ktr_formulation | `Q900` · theta_ktr_formulation | 2.03 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470051-tbl-0003:row17:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive error (ng/L)' routed out of structural estimates ('Residual errors')
- dropped duplicate Q27 ('Fluconazole use on CL/F', value '-0.427') — already have one for this compound
- dropped unlinked row (NIL): 'Itraconazole use on CL/F' — extend the ontology if this is a real PK parameter (source ['psp470051-tbl-0003:row12:col1'])
- relinked 'Itraconazole use on ktr' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- dropped duplicate Q306 ('Itraconazole use on ktr', value '-0.351') — already have one for this compound
- dropped duplicate Q306 ('Oral disintegrating tablet on ktr', value '0.355') — already have one for this compound
- dropped unlinked row (NIL): 'Dose effect on F1' — extend the ontology if this is a real PK parameter (source ['psp470051-tbl-0003:row18:col1'])
- dropped duplicate Q306 ('10/25 mg dose effect on ktr', value '0.536') — already have one for this compound
- covariate effect for Q338 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rimegepant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp470051-tbl-0003:row2:col2 = '4.86%'
- unparsed cell psp470051-tbl-0003:row2:col3 = '31.2% (5.1%)'
- unparsed cell psp470051-tbl-0003:row3:col2 = '5.36%'
- unparsed cell psp470051-tbl-0003:row3:col3 = '40.6% (6.1%)'
- unparsed cell psp470051-tbl-0003:row4:col2 = '5.3%'
- unparsed cell psp470051-tbl-0003:row4:col3 = '28.2% (8.2%)'
- unparsed cell psp470051-tbl-0003:row5:col2 = '6.37%'
- unparsed cell psp470051-tbl-0003:row6:col2 = '8.24%'
- unparsed cell psp470051-tbl-0003:row6:col3 = '53.1% (6.9%)'
- unparsed cell psp470051-tbl-0003:row7:col2 = '28.4%'
- unparsed cell psp470051-tbl-0003:row9:col2 = '27.8%'
- unparsed cell psp470051-tbl-0003:row10:col2 = '24.9%'
- unparsed cell psp470051-tbl-0003:row11:col2 = '2.88%'
- unparsed cell psp470051-tbl-0003:row12:col2 = '1.25%'
- unparsed cell psp470051-tbl-0003:row13:col2 = '28.9%'
- unparsed cell psp470051-tbl-0003:row14:col2 = '9.74%'
- unparsed cell psp470051-tbl-0003:row15:col2 = '3.34%'
- unparsed cell psp470051-tbl-0003:row16:col2 = '29.6%'
- unparsed cell psp470051-tbl-0003:row17:col2 = '24.1%'
- unparsed cell psp470051-tbl-0003:row18:col2 = '12.6%'
- unparsed cell psp470051-tbl-0003:row19:col2 = '48.7%'
- unparsed cell psp470051-tbl-0003:row25:col2 = '12.0%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.789 (15/19 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose effect on f1]` | not captured | 0.191 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_ktr_fed]` | not captured | -0.706 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q338_fed]` | -0.706 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[transit absorption rate constant, ktr].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[absorption rate constant]` | 3.86 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent central volume of distribution]` | 114.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent clearance]` | 24.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent inter-compartmental clearance]` | 3.94 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent peripheral volume of distribution]` | 46.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[transit absorption rate constant]` | 8.23 | not captured | only_one_extracted |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470051-tbl-0003:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470051-tbl-0003:row3:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470051-tbl-0003:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470051-tbl-0003:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470051-tbl-0003:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470051-tbl-0003:row4:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=-0.315 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.1 L/h | not captured | not captured | ['psp470051-tbl-0003:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 114 L | not captured | not captured | ['psp470051-tbl-0003:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 46 L | not captured | not captured | ['psp470051-tbl-0003:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=rimegepant) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rimegepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Comisar_2025_2` / `Comisar_2025_2::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025v2_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025v2_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:39 UTC</sub>
