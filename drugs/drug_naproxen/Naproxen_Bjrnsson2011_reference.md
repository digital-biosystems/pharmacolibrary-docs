<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;naproxen&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/&quot;},{&quot;label&quot;:&quot;Bj\u00f6rnsson_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Naproxen_Schlachter2026_reference&quot;,&quot;label&quot;:&quot;Schlachter_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/Naproxen_Schlachter2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Naproxen_Vlitalo2012_reference&quot;,&quot;label&quot;:&quot;V\u00e4litalo_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/Naproxen_Vlitalo2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Naproxen_Oliveira2022v2_reference&quot;,&quot;label&quot;:&quot;Oliveira_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/Naproxen_Oliveira2022v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# naproxen — `Naproxen_Bjrnsson2011_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.64), gpt-oss:120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The naproxen record was held back because the absorption rate constant ka was invented (defaulted) rather than reported in the source, alongside other unreported deviations.**

The source reports only CL/F (515 l/h) and unbound volume of distribution (4290 l) for naproxen; ka and Tlag were not reported and library defaults were substituted, and the invented ka was judged not acceptable. The model also assumes F=1 and Fm=1 with apparent parameterization and no molar correction, and uses first-order depot input. A second reader additionally disagreed on the dosing compound, reading both naproxcinod and naproxen where the record lists only naproxen. Extracted — naproxen: CL/F 515 l h -1, V 4.29e+03 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has naproxen, naproxcinod, the second reading naproxcinod, naproxen; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:39:11.248241+00:00) predates the upstream re-run (2026-10-07 08:21:11.804183+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `naproxen, naproxcinod`, measured `naproxen`.

## Citation
Björnsson MA et al., Modelling of pain intensity and informa…, British journal of clinical… (2011)
  ·  DOI: [10.1111/j.1365-2125.2011.03924.x](https://doi.org/10.1111/j.1365-2125.2011.03924.x)

<div class="pk-model-meta" hidden drug="naproxen" model-id="Naproxen_Bjrnsson2011_reference" status="rejected" stale="true" population="adults with dental pain" measured-compound="naproxen" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLu/F (l h -1 ) | `Q24` · CLu | 515 | l h -1 | 0.00014305555555555556 | [l] / [h] | 12.1 | llm (0.6) | tab_1:row1:col1 | — | not captured |
| Vu/F (l) | `Q76` · V/F | 4290 | l | 4.29 | [l] | 13.6 | llm (0.6) | tab_1:row2:col1 | — | not captured |
| MTTnaproxcinod (h) | `Q81` · MTT | 1.77 | h | not captured | [h] | 10.8 | llm (0.6) | tab_1:row3:col1 | — | not captured |
| Bmax (mmol l -1 ) | `Q332` · Bmax | 643 | mmol l -1 | not captured | [mM] / [l] | 7.1 | exact (1.0) | tab_1:row7:col1 | — | 17 (44% RSE) |
| Km (mmol l -1 ) | `Q1` · Km | 0.549 | mmol l -1 | not captured | [mM] / [l] | 10.2 | exact (1.0) | tab_1:row8:col1 | — | not captured |
| Frel (%) | `Q87` · Frel | 59.7 | not captured | not captured | not captured | 14.6 | exact (1.0) | tab_1:row9:col1 | — | not captured |
| sT,add (mmol l -1 ) | `Q900` · equation variable | 6.19 | mmol l -1 | not captured | [mM] / [l] | 22.3 | llm (0.6) | tab_1:row10:col1 | — | not captured |
| sU,prop (%) | `Q46` · fu | 18.6 | not captured | not captured | not captured | 11.0 | llm (0.6) | tab_1:row12:col1 | — | not captured |
| onset rate constant | `Q49` · kabs | 0.237 | h -1 | 6.583333333333333e-05 | 1/h | not captured | review_gapfill (0.7) | Björnsson_2011:review | — | not captured |
| T lag (h) Esomeprazole (20 mg) | `Q83` · tlag | 0.0 | h | 0.0 | h | not captured | review_gapfill (0.7) | Yoo_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLu/F (l h -1 )' routed out of structural estimates ('IIV (RSE%)')
- table section iiv: 'Vu/F (l)' routed out of structural estimates ('IIV (RSE%)')
- table section iiv: 'MTTnaproxcinod (h)' routed out of structural estimates ('IIV (RSE%)')
- table section iiv: 'NNnaproxcinod' routed out of structural estimates ('IIV (RSE%)')
- table section iiv: 'MTTnaproxen (h)' routed out of structural estimates ('IIV (RSE%)')
- table section iiv: 'NNnaproxen' routed out of structural estimates ('IIV (RSE%)')
- table section iiv: 'Bmax (mmol l -1 )' routed out of structural estimates ('IIV (RSE%)')
- dropped unlinked row (NIL): 'NNnaproxcinod' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col1'])
- dropped duplicate Q81 ('MTTnaproxen (h)', value '0.500') — already have one for this compound
- dropped unlinked row (NIL): 'NNnaproxen' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col1'])
- unit_dimension_mismatch: 'Km (mmol l -1 )' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- routed 'sT,prop (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=naproxen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Björnsson_2011's review values (primary lacked it)
- gap-filled Q83 (tlag) from Yoo_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.64 (16/25 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.833 (5/6 fields) | 1 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clu/f].parameter_id` | Q24 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[kpl]` | not captured | 0.237 | only_one_extracted |
| `gpt-oss-120b` | `parameters[l]` | not captured | 0.00999 | only_one_extracted |
| `gpt-oss-120b` | `parameters[onset rate constant]` | 0.237 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qpi]` | not captured | 0.0782 | only_one_extracted |
| `gpt-oss-120b` | `parameters[st,add]` | 6.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[su,prop]` | 18.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag (h) esomeprazole]` | 0.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | naproxen, naproxcinod | naproxcinod, naproxen | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | naproxcinod | naproxcinod, naproxen | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [substance] / [length] ** 3 | mmol l -1 | not captured | not captured | ['tab_1:row8:col1'] |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Björnsson_2011:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row2:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Yoo_2026:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q24 | pass | clearance within physiological range | 515 L/h | not captured | not captured | ['tab_1:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.29e+03 L | not captured | not captured | ['tab_1:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=naproxen) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_naproxen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Björnsson_2011` / `Björnsson_2011::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_naproxen/models/modelica/Naproxen_Bjrnsson2011_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_naproxen/models/modelica/Naproxen_Bjrnsson2011_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_naproxen/models/modelica/Naproxen_Bjrnsson2011_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:21 UTC</sub>
