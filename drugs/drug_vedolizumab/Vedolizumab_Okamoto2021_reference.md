<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;vedolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_vedolizumab/&quot;},{&quot;label&quot;:&quot;Okamoto_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vedolizumab — `Vedolizumab_Okamoto2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The Km value of 0.851 µg/mL for vedolizumab could not be converted to standard units, causing a dimensional mismatch.

<div class="pk-model-meta" hidden drug="vedolizumab" model-id="Vedolizumab_Okamoto2021_reference" status="rejected" stale="false" population="Asian and non-Asian patients with ulcerative colitis and Crohn’s disease" measured-compound="vedolizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Okamoto H, Dirks NL, Rosario M, Hori T, Hibi T. Population pharmacokinetics of vedolizumab in Asian and non-Asian patients with ulcerative colitis and Crohn's disease. Intestinal research 19(1):95–105 (2021).
  ·  DOI: [10.5217/ir.2019.09167](https://doi.org/10.5217/ir.2019.09167)

## Population and dosing

**Population:** Asian and non-Asian patients with ulcerative colitis and Crohn’s disease · condition ulcerative colitis and Crohn’s disease · age group mixed · n = $n$1933.

**Dosing:** 300 mg, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 7 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| AVA− CLL (L/day) | CL | 0.165 | L/day |  |
| Vc (L) | V1 | 3.16 | L | None (None% RSE) |
| Vp (L) | V2 | 1.84 | L | None (None% RSE) |
| Vmax (mg/day) | Vmax | 0.238 | mg/day |  |
| Q (L/day) | Q | 0.161 | L/day |  |
| Km (µg/mL) | Km | 0.851 | µg/mL |  |
| cll_wt | cll_wt | 0.472 |  |  |
| cll_albumin | cll_albumin | -1.19 |  |  |
| cll_race_asian | cll_race_asian | 1.10 |  |  |
| q_wt | q_wt | 0.750 |  |  |
| theta_v1_wt_power | theta_v1_wt_power | 0.466 |  |  |
| theta_v2_wt_power | theta_v2_wt_power | 1.00 |  |  |
| theta_vmax_wt_power | theta_vmax_wt_power | 0.750 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The Km value of 0.851 µg/mL for vedolizumab could not be converted to standard units, causing a dimensional mismatch.**

The record specifies the Michaelis constant (Km) for vedolizumab as 0.851 µg/mL. This unit could not be converted to standard international units, leaving the parameter without a valid physical value. Consequently, the model structure failed a consistency check due to this dimensional incompatibility. Extracted — vedolizumab: CL 0.165 L/day, V1 3.16 L, V2 1.84 L, Vmax 0.238 mg/day, Q 0.161 L/day, Km 0.851 µg/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[ava- cll].covariate_forms`: this record has ['power', 'power', 'power', 'power'], the second reading ['power', 'power', 'power']; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| AVA− CLL (L/day) | `Q22` · CL | 0.165 | L/day | 1.91e-09 | m3/s | l/d | llm (0.6) | t2-ir-2019-09167:row1:col1 |  |
| Vc (L) | `Q63` · V1 | 3.16 | L | 0.00316 | m3 | l | exact (1) | t2-ir-2019-09167:row3:col1 | None (None% RSE) |
| Vp (L) | `Q64` · V2 | 1.84 | L | 0.00184 | m3 | l | exact (1) | t2-ir-2019-09167:row4:col1 | None (None% RSE) |
| Vmax (mg/day) | `Q66` · Vmax | 0.238 | mg/day |  |  | mg/d | special_case (0.95) | t2-ir-2019-09167:row5:col1 |  |
| Q (L/day) | `Q30` · Q | 0.161 | L/day | 1.863e-09 | m3/s | l/d | exact (1) | t2-ir-2019-09167:row6:col1 |  |
| Km (µg/mL) | `Q1` · Km | 0.851 | µg/mL |  |  | µg/ml | exact (1) | t2-ir-2019-09167:row7:col1 |  |
| cll_wt | `Q900` · cll_wt | 0.472 |  |  |  |  |  | t2-ir-2019-09167:row8:col1 |  |
| cll_albumin | `Q900` · cll_albumin | -1.19 |  |  |  |  |  | t2-ir-2019-09167:row9:col1 |  |
| cll_race_asian | `Q900` · cll_race_asian | 1.10 |  |  |  |  |  | t2-ir-2019-09167:row11:col1 |  |
| q_wt | `Q900` · q_wt | 0.750 |  |  |  |  |  | t2-ir-2019-09167:row16:col1 |  |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 0.466 |  |  |  |  |  | t2-ir-2019-09167:row12:col1 |  |
| theta_v2_wt_power | `Q900` · theta_v2_wt_power | 1.00 |  |  |  |  |  | t2-ir-2019-09167:row14:col1 |  |
| theta_vmax_wt_power | `Q900` · theta_vmax_wt_power | 0.750 |  |  |  |  |  | t2-ir-2019-09167:row15:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CORR CLL–Vc' routed out of structural estimates ('IIV CLL (ω2CLL)')
- table section iiv: 'CORR CLL−Vp' routed out of structural estimates ('IIV Vc (ω2Vc)')
- table section iiv: 'CORR Vc−Vp' routed out of structural estimates ('IIV Vc (ω2Vc)')
- table section iov: 'Resprop (σ2prop)' routed out of structural estimates ('IOV CLL (ω2IOV CLL)')
- dropped duplicate Q22 ('AVA+ CLL (L/day)', value '0.246') — already have one for this compound
- unit_dimension_mismatch: 'Vmax (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate level 'CLL~ WT' → Q900:cll_wt = 0.472 (power on Q22)
- covariate level 'CLL~ albumin' → Q900:cll_albumin = -1.19 (power on Q22)
- dropped unlinked row (NIL): 'CLL~ AVA+' — extend the ontology if this is a real PK parameter (source ['t2-ir-2019-09167:row10:col1'])
- covariate level 'CLL~race: Asian' → Q900:cll_race_asian = 1.10 (power on Q22)
- dropped unlinked row (NIL): 'CLL~ diagnosis: CD' — extend the ontology if this is a real PK parameter (source ['t2-ir-2019-09167:row13:col1'])
- covariate level 'Q~WT' → Q900:q_wt = 0.750 (power on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vedolizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'vedolizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell t2-ir-2019-09167:row1:col2 = '(0.160, 0.170)'
- unparsed cell t2-ir-2019-09167:row2:col2 = '(0.222, 0.273)'
- unparsed cell t2-ir-2019-09167:row3:col2 = '(3.11, 3.22)'
- unparsed cell t2-ir-2019-09167:row4:col2 = '(1.71, 1.99)'
- unparsed cell t2-ir-2019-09167:row5:col2 = '(0.191, 0.296)'
- unparsed cell t2-ir-2019-09167:row6:col2 = '(0.150, 0.173)'
- unparsed cell t2-ir-2019-09167:row7:col2 = '(0.641, 1.150)'
- unparsed cell t2-ir-2019-09167:row8:col2 = '(0.400, 0.533)'
- unparsed cell t2-ir-2019-09167:row9:col2 = '(–1.27, –1.11)'
- unparsed cell t2-ir-2019-09167:row10:col2 = '(0.0404, 0.1020)'
- unparsed cell t2-ir-2019-09167:row11:col2 = '(1.06, 1.14)'
- unparsed cell t2-ir-2019-09167:row12:col2 = '(0.424, 0.509)'
- unparsed cell t2-ir-2019-09167:row13:col2 = '(0.960, 1.020)'
- unparsed cell t2-ir-2019-09167:row18:col2 = '(0.532, 0.627)'
- unparsed cell t2-ir-2019-09167:row20:col2 = '(–0.0565, 0.0951)'
- unparsed cell t2-ir-2019-09167:row21:col2 = '(0.284, 0.455)'
- unparsed cell t2-ir-2019-09167:row27:col2 = '(0.0303, 0.0333)'
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
| `gpt-oss-120b` | `parameters[cll_albumin]` | -1.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cll_race_asian]` | 1.10 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cll_wt]` | 0.472 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[q_wt]` | 0.750 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin_power]` |  | -1.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_race_power]` |  | 1.10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_wt_power]` |  | 0.472 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_wt_power]` |  | 0.750 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 24.7 | 24.66 | 0.9985 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  |  |  | ['t2-ir-2019-09167:row7:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['t2-ir-2019-09167:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['t2-ir-2019-09167:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['t2-ir-2019-09167:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['t2-ir-2019-09167:row4:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day |  |  | ['t2-ir-2019-09167:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.165 |  |  | ['t2-ir-2019-09167:row1:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00688 L/h |  |  | ['t2-ir-2019-09167:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.16 L |  |  | ['t2-ir-2019-09167:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.84 L |  |  | ['t2-ir-2019-09167:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvedolizumab%5D%20Vedolizumab_Okamoto2021_reference&body=Drug%3A%20vedolizumab%0ARecord%3A%20Vedolizumab_Okamoto2021_reference%0APaper%3A%20Okamoto_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vedolizumab/Vedolizumab_Okamoto2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:05 UTC</sub>
