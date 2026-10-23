<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;atezolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/&quot;},{&quot;label&quot;:&quot;Netterberg_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atezolizumab — `Atezolizumab_Netterberg2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Atezolizumab’s terminal elimination rate constant, reported as 1.56 1/h, had a dimensional mismatch, so the model was rejected.

<div class="pk-model-meta" hidden drug="atezolizumab" model-id="Atezolizumab_Netterberg2019_reference" status="rejected" stale="false" population="patients with relapsed/refractory non-small cell lung cancer" measured-compound="atezolizumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Netterberg I, Li CC, Molinero L, Budha N, Sukumaran S, Stroh M et al. A PK/PD Analysis of Circulating Biomarkers and Their Relationship to Tumor Response in Atezolizumab-Treated non-small Cell Lung Cancer Patients. Clinical pharmacology and therapeutics 105(2):486–495 (2019).
  ·  DOI: [10.1002/cpt.1198](https://doi.org/10.1002/cpt.1198)

## Population and dosing

**Population:** patients with relapsed/refractory non-small cell lung cancer · condition relapsed/refractory non-small cell lung cancer · age group adult · n = 88.

**Dosing:** 700, 1050, 1400 mg, iv, multiple, every 504 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Pool0 (pg/mL) | C0 | 271 | pg/mL | 18 |
| θ SLD0‐Mets | equation variable | 0.927 |  | 27 |
| Β | kel | 1.56 | 1/h | 8.8 |
| volume of distribution | V | 6.91 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Atezolizumab’s terminal elimination rate constant, reported as 1.56 1/h, had a dimensional mismatch, so the model was rejected.**

The record identifies 1.56 1/h as the terminal-phase elimination rate constant for atezolizumab. The reported unit could not be converted to SI, so this parameter reached the model builder without an SI value. Extracted — atezolizumab: C0 271 pg/mL, kel 1.56 1/h, V 6.91 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[pool0].parameter_id`: this record has Q86, the second reading Q900; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Pool0 (pg/mL) | `Q86` · C0 | 271 | pg/mL |  |  | pg/ml | 18 | llm (0.6) | cpt1198-tbl-0001:row4:col1, cpt1198-tbl-0001:row11:col1 |
| θ SLD0‐Mets | `Q900` · equation variable | 0.927 |  |  |  |  | 27 | llm (0.6) | cpt1198-tbl-0001:row22:col1 |
| Β | `Q47` · kel | 1.56 | 1/h | 0.0004333 | 1/s | 1/h | 8.8 | exact (1) | cpt1198-tbl-0001:row27:col1 |
| volume of distribution | `Q61` · V | 6.91 | L | 0.00691 | m3 | L |  | review_gapfill (0.7) | Chan_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'k out (day−1)' routed out of structural estimates ('IIV, CV% (RSE, %)')
- table section iiv: 'Pool0 (pg/mL)' routed out of structural estimates ('IIV, CV% (RSE, %)')
- table section iiv: 'Slope (mL/μg)' routed out of structural estimates ('IIV, CV% (RSE, %)')
- table section iiv: 'R in (pg/mL/day)' routed out of structural estimates ('IIV, CV% (RSE, %)')
- table section iiv: 'SLD0 (cm)' routed out of structural estimates ('IIV, CV% (RSE, %)')
- table section iiv: 'R Growth (cm/week)' routed out of structural estimates ('IIV, CV% (RSE, %)')
- table section iiv: 'K Shr,Drug (l/mg/day/week)' routed out of structural estimates ('IIV, CV% (RSE, %)')
- table section iiv: 'K Shr,IL‐18 (1/(% week))' routed out of structural estimates ('IIV, CV% (RSE, %)')
- dropped PD-category row 'R in (pg/mL/day)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt1198-tbl-0001:row2:col1', 'cpt1198-tbl-0001:row9:col1'])
- dropped PD-category row 'k out (day−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt1198-tbl-0001:row3:col1'])
- unit_dimension_mismatch: 'Pool0 (pg/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'Slope (mL/μg)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt1198-tbl-0001:row5:col1', 'cpt1198-tbl-0001:row12:col1'])
- dropped unlinked row (NIL): 'SLD0 (cm)' — extend the ontology if this is a real PK parameter (source ['cpt1198-tbl-0001:row16:col1'])
- dropped PD-category row 'R Growth (cm/week)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt1198-tbl-0001:row17:col1'])
- dropped PD-category row 'λDrug (week−1)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt1198-tbl-0001:row19:col1'])
- dropped PD-category row 'K Shr,IL‐18 (1/(% week))' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt1198-tbl-0001:row20:col1'])
- dropped unlinked row (NIL): 'θ Rgrowth‐LiverMets' — extend the ontology if this is a real PK parameter (source ['cpt1198-tbl-0001:row21:col1'])
- dropped duplicate Q900 ('θ KShr,Drug‐Non‐Smoking', value '0') — already have one for this compound
- dropped PD-category row 'h 0 (week−1)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt1198-tbl-0001:row26:col1'])
- dropped value-less row: 'θ Rgrowth‐LiverMets'
- dropped value-less row: 'θ SLD0‐Mets.'
- dropped value-less row: 'θ KShr,Drug‐Non‐Smoking'
- implicit units: 'Β' → 1/h (from the popPK convention: 'The parameter is described as an elimination rate constant, but the provided caption and text do not state its unit. Fir')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atezolizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'atezolizumab' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Chan_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt1198-tbl-0001:row18:col1 = '2.75·10−6 (23)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[pool0].parameter_id` | Q86 | Q900 | mismatch |
| `qwen3.8-27b` | `parameters[r growth]` |  | 0.0169 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution]` | 6.91 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ sld0‐mets]` | 0.927 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[λdrug]` |  | 0.0609 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['cpt1198-tbl-0001:row27:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Chan_2025:review'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | pg/mL | ['cpt1198-tbl-0001:row4:col1', 'cpt1198-tbl-0001:row11:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.91 L | ['Chan_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batezolizumab%5D%20Atezolizumab_Netterberg2019_reference&body=Drug%3A%20atezolizumab%0ARecord%3A%20Atezolizumab_Netterberg2019_reference%0APaper%3A%20Netterberg_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atezolizumab/Atezolizumab_Netterberg2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:22 UTC</sub>
