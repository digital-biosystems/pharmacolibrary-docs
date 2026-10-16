<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;vedolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_vedolizumab/&quot;},{&quot;label&quot;:&quot;Okamoto_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vedolizumab — `Vedolizumab_Okamoto2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Vmax and Km), so that value has no SI equivalent. Extracted — vedolizumab: CL 0.165 L/day, V1 3.16 L, V2 1.84 L, Vmax 0.238 mg/day, Q 0.161 L/day, Km 0.851 µg/mL, V 0.371.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[ava- cll].covariate_forms`: this record has ['power', 'power', 'power', 'power'], the second reading ['power', 'power', 'power']; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Okamoto H et al., Population pharmacokinetics of vedolizu…, Intestinal research (2021)
  ·  DOI: [10.5217/ir.2019.09167](https://doi.org/10.5217/ir.2019.09167)

<div class="pk-model-meta" hidden drug="vedolizumab" model-id="Vedolizumab_Okamoto2021_reference" status="rejected" stale="false" population="Asian and non-Asian patients with ulcerative colitis and Crohn’s disease" measured-compound="vedolizumab" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AVA− CLL (L/day) | `Q22` · CL | 0.165 | L/day | 1.9097222222222222e-09 | [l] / [d] | not captured | llm (0.6) | t2-ir-2019-09167:row1:col1 | — | not captured |
| Vc (L) | `Q63` · V1 | 3.16 | L | 0.00316 | [l] | not captured | exact (1.0) | t2-ir-2019-09167:row3:col1 | — | not captured |
| Vp (L) | `Q64` · V2 | 1.84 | L | 0.00184 | [l] | not captured | exact (1.0) | t2-ir-2019-09167:row4:col1 | — | not captured |
| Vmax (mg/day) | `Q66` · Vmax | 0.238 | mg/day | not captured | [mg] / [d] | not captured | special_case (0.95) | t2-ir-2019-09167:row5:col1 | — | not captured |
| Q (L/day) | `Q30` · Q | 0.161 | L/day | 1.863425925925926e-09 | [l] / [d] | not captured | exact (1.0) | t2-ir-2019-09167:row6:col1 | — | not captured |
| Km (µg/mL) | `Q1` · Km | 0.851 | µg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | t2-ir-2019-09167:row7:col1 | — | not captured |
| cll_wt | `Q900` · cll_wt | 0.472 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row8:col1 | — | not captured |
| cll_albumin | `Q900` · cll_albumin | -1.19 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row9:col1 | — | not captured |
| cll_race_asian | `Q900` · cll_race_asian | 1.10 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row11:col1 | — | not captured |
| vc_wt | `Q900` · vc_wt | 0.466 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row12:col1 | — | not captured |
| CORR Vc−Vp | `Q61` · V | 0.371 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | t2-ir-2019-09167:row21:col1 | — | not captured |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 1.00 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row14:col1 | — | not captured |
| theta_vmax_wt_power | `Q900` · theta_vmax_wt_power | 0.750 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row15:col1 | — | not captured |
| theta_q301_wt_power | `Q900` · theta_q301_wt_power | 0.750 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row16:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Resprop (σ2prop)' routed out of structural estimates ('IIV Km (ω2Km) 0.00 %CV fixed')
- dropped duplicate Q22 ('AVA+ CLL (L/day)', value '0.246') — already have one for this compound
- unit_dimension_mismatch: 'Vmax (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate level 'CLL~ WT' → Q900:cll_wt = 0.472 (power on Q22)
- covariate level 'CLL~ albumin' → Q900:cll_albumin = -1.19 (power on Q22)
- dropped unlinked row (NIL): 'CLL~ AVA+' — extend the ontology if this is a real PK parameter (source ['t2-ir-2019-09167:row10:col1'])
- covariate level 'CLL~race: Asian' → Q900:cll_race_asian = 1.10 (power on Q22)
- covariate level 'Vc~ WT' → Q900:vc_wt = 0.466 (power on Q22)
- dropped unlinked row (NIL): 'CLL~ diagnosis: CD' — extend the ontology if this is a real PK parameter (source ['t2-ir-2019-09167:row13:col1'])
- dropped unlinked row (NIL): 'CORR CLL–Vc' — extend the ontology if this is a real PK parameter (source ['t2-ir-2019-09167:row18:col1'])
- dropped duplicate Q30 ('CORR CLL−Vp', value '0.0188') — already have one for this compound
- covariate effect for Q301 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vedolizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'vedolizumab' — its concentrations stay mass-only

**Extraction notes:**
- table t2-ir-2019-09167: unbound_uncertainty
- table t2-ir-2019-09167: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.615 (16/26 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ava- cll].covariate_forms` | ['power', 'power', 'power', 'power'] | ['power', 'power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[cll_albumin]` | -1.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cll_race_asian]` | 1.10 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cll_wt]` | 0.472 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[q_wt]` | 0.750 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin_power]` | not captured | -1.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_race_power]` | not captured | 1.10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_wt_power]` | not captured | 0.472 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_wt_power]` | not captured | 0.750 | only_one_extracted |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['t2-ir-2019-09167:row7:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t2-ir-2019-09167:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t2-ir-2019-09167:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['t2-ir-2019-09167:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['t2-ir-2019-09167:row4:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | not captured | not captured | ['t2-ir-2019-09167:row5:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['t2-ir-2019-09167:row21:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.165 | not captured | not captured | ['t2-ir-2019-09167:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00688 L/h | not captured | not captured | ['t2-ir-2019-09167:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.16 L | not captured | not captured | ['t2-ir-2019-09167:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.84 L | not captured | not captured | ['t2-ir-2019-09167:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_vedolizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Okamoto_2021` / `Okamoto_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:33 UTC</sub>
