<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pexidartinib&quot;,&quot;href&quot;:&quot;drugs/drug_pexidartinib/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 estimate_a&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pexidartinib — `Pexidartinib_Yin2021_estimate_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="pexidartinib" model-id="Pexidartinib_Yin2021_estimate_a" status="rejected" stale="false" population="healthy subjects and patients with TGCT or other solid tumors" measured-compound="pexidartinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Yin O, Wagner AJ, Kang J, Knebel W, Zahir H, van de Sande M et al. Population Pharmacokinetic Analysis of Pexidartinib in Healthy Subjects and Patients With Tenosynovial Giant Cell Tumor or Other Solid Tumors. Journal of clinical pharmacology 61(4):480–492 (2021).
  ·  DOI: [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753)

## Population and dosing

**Population:** healthy subjects and patients with TGCT or other solid tumors · condition healthy or TGCT/other solid tumors · age group adult · n = 375.

**Dosing:** 200, 2400 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| (CRCL&lt;90/90)θ8 | equation variable | -0.0941 |  |
| ALAG1(exp(θ6)) | tlag | 0.387 | h |
| D1(exp(θ7)) | D1 | 1.22 | h |
| F1Phase1(exp(θ8)) | Frel | 0.855 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of (asian)•exp: this record has none, the second reading 1.27; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| (CRCL&lt;90/90)θ8 | `Q900` · equation variable | -0.0941 |  |  |  |  | llm (0.6) | jcph1753-tbl-0003:row3:col1 |
| ALAG1(exp(θ6)) | `Q83` · tlag | 0.387 | h | 1393 | s | h | exact (1) | jcph1753-tbl-0003:row16:col1 |
| D1(exp(θ7)) | `Q310` · D1 | 1.22 | h | 4392 | s | h | llm_confirmed (0.6) | jcph1753-tbl-0003:row17:col1 |
| F1Phase1(exp(θ8)) | `Q87` · Frel | 0.855 |  |  |  |  | llm (0.6) | jcph1753-tbl-0003:row18:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F (exp(θ1)) | Q27 | exact |
| Q/F(exp(θ4)) | Q69 | exact |
| Ω3.3 Vp/F | Q82 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('(Asian)•exp(θ10)', value '1.27') — already have one for this compound
- dropped duplicate Q900 ('(AST&gt;80/80)θ 11', value '0.0709') — already have one for this compound
- dropped duplicate Q900 ('(TBIL&gt;20.5/20.5)θ 12', value '0.244') — already have one for this compound
- dropped duplicate Q900 ('(StHT)•exp(θ13)', value '1.26') — already have one for this compound
- dropped duplicate Q900 ('(Female)•exp(θ14)', value '0.869') — already have one for this compound
- unit_dimension_unknown: 'WT/80' (Q/F)
- dropped duplicate Q27 ('Ω1.1 CL/F', value None) — already have one for this compound
- routed 'Ω3.1 COVVp/F−CL/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Ω3.2 COVVp/F−Vc/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q69 ('Ω4.4 Q/F', value None) — already have one for this compound
- routed 'Ω5.5 KA' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Ω6.6Ph1Form' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'ALAG1(exp(θ6))' → h (from the popPK convention: 'The paper describes ALAG1 as the drug absorption lag time but does not state its unit. Lag times are conventionally repo')
- implicit units: 'D1(exp(θ7))' → h (from the popPK convention: 'The paper describes D1 as the duration of zero-order absorption but does not state its unit. Absorption durations are co')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pexidartinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'estimate a' subgroup of Yin_2021 (paper reports 3 populations: estimate a, pexidartinib, zaad)
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 3 linked by role; re-tagged pexidartinib→parent ×28
- molar mass: no plausible PubChem entry for 'ZAAD' ('pexidartinib glucuronide') — left in mass units
- molar mass: none found for 'ZAAD' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell jcph1753-tbl-0003:row1:col2 = '5.43 to 6.27'
- unparsed cell jcph1753-tbl-0003:row3:col2 = '−0.402 to 0.214'
- unparsed cell jcph1753-tbl-0003:row4:col2 = '1.05 to 1.54'
- unparsed cell jcph1753-tbl-0003:row5:col2 = '−0.180 to 0.322'
- unparsed cell jcph1753-tbl-0003:row6:col2 = '0.183 to 0.306'
- unparsed cell jcph1753-tbl-0003:row7:col2 = '1.16 to 1.36'
- unparsed cell jcph1753-tbl-0003:row8:col2 = '0.808 to 0.934'
- unparsed cell jcph1753-tbl-0003:row13:col2 = '17.9 to 23.8'
- unparsed cell jcph1753-tbl-0003:row16:col2 = '0.385 to 0.390'
- unparsed cell jcph1753-tbl-0003:row17:col2 = '1.20 to 1.25'
- unparsed cell jcph1753-tbl-0003:row19:col2 = '0.0633 to 0.109'
- unparsed cell jcph1753-tbl-0003:row20:col2 = '0.0425 to 0.112'
- unparsed cell jcph1753-tbl-0003:row21:col2 = '0.207 to 0.341'
- unparsed cell jcph1753-tbl-0003:row22:col2 = '−0.0178 to 0.0476'
- unparsed cell jcph1753-tbl-0003:row23:col2 = '−0.105 to 0.0111'
- unparsed cell jcph1753-tbl-0003:row24:col2 = '0.152 to 0.275'
- unparsed cell jcph1753-tbl-0003:row25:col2 = '0.271 to 0.541'
- unparsed cell jcph1753-tbl-0003:row26:col2 = '0.648 to 1.98'
- unparsed cell jcph1753-tbl-0003:row27:col2 = '0.0592 to 0.143'
- unparsed cell jcph1753-tbl-0003:row28:col2 = '1.26 to 2.40'
- unparsed cell jcph1753-tbl-0003:row29:col2 = '0.0560 to 0.0743'
- unparsed cell jcph1753-tbl-0003:row30:col2 = '0.0839 to 0.0927'
- unparsed cell jcph1753-tbl-0003:row31:col2 = '0.0377 to 0.0391'
- unparsed cell Yin_2021_table_4:row3:col2 = '13 564 (6095)'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[(asian)•exp]` |  | 1.27 | only_one_extracted |
| `qwen3.8-27b` | `parameters[(crcl&lt;90/90)θ8]` | -0.0941 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f1phase1(exp(θ8))]` | 0.855 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ω3.2 covvp/f-vc/f]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ω3.3 vp/f].parameter_id` | Q82 | Q309 | mismatch |
| `qwen3.8-27b` | `parameters[ω5.5 ka]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q310 | pass | [time] |  | ['jcph1753-tbl-0003:row17:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph1753-tbl-0003:row16:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpexidartinib%5D%20Pexidartinib_Yin2021_estimate_a&body=Drug%3A%20pexidartinib%0ARecord%3A%20Pexidartinib_Yin2021_estimate_a%0APaper%3A%20Yin_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pexidartinib/Pexidartinib_Yin2021_estimate_a%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:19 UTC</sub>
