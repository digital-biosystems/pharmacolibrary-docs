<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pexidartinib&quot;,&quot;href&quot;:&quot;drugs/drug_pexidartinib/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pexidartinib — `Pexidartinib_Yin2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="pexidartinib" model-id="Pexidartinib_Yin2021_reference" status="rejected" stale="false" population="healthy subjects and patients with TGCT or other solid tumors" measured-compound="pexidartinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Yin O, Wagner AJ, Kang J, Knebel W, Zahir H, van de Sande M et al. Population Pharmacokinetic Analysis of Pexidartinib in Healthy Subjects and Patients With Tenosynovial Giant Cell Tumor or Other Solid Tumors. Journal of clinical pharmacology 61(4):480–492 (2021).
  ·  DOI: [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753)

## Population and dosing

**Population:** healthy subjects and patients with TGCT or other solid tumors · condition healthy or tenosynovial giant cell tumor · age group adult.

**Dosing:** 200, 2400 mg, oral, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q3/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| (TBIL&gt;20.5/20.5)θ 12 | equation variable | 0.244 |  |
| ALAG1(exp(θ6)) | tlag | 0.387 | h |
| D1(exp(θ7)) | D1 | 1.22 | h |
| F1Phase1(exp(θ8)) | kfm | 0.855 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has pexidartinib → zaad (metabolism), the second reading none; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| (TBIL&gt;20.5/20.5)θ 12 | `Q900` · equation variable | 0.244 |  | 0.244 |  |  | llm (0.6) | jcph1753-tbl-0003:row6:col1 |
| ALAG1(exp(θ6)) | `Q83` · tlag | 0.387 | h | 1393 | s | h | exact (1) | jcph1753-tbl-0003:row16:col1 |
| D1(exp(θ7)) | `Q310` · D1 | 1.22 | h | 4392 | s | h | llm_confirmed (0.6) | jcph1753-tbl-0003:row17:col1 |
| F1Phase1(exp(θ8)) | `Q305` · kfm | 0.855 |  |  |  |  | exact (1) | jcph1753-tbl-0003:row18:col1 |

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
| Ω4.4 Q/F | Q309 | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '(CRCL&lt;90/90)θ8' — extend the ontology if this is a real PK parameter (source ['jcph1753-tbl-0003:row3:col1'])
- dropped unlinked row (NIL): '(Asian)•exp(θ10)' — extend the ontology if this is a real PK parameter (source ['jcph1753-tbl-0003:row4:col1'])
- dropped unlinked row (NIL): '(AST&gt;80/80)θ 11' — extend the ontology if this is a real PK parameter (source ['jcph1753-tbl-0003:row5:col1'])
- dropped duplicate Q900 ('(StHT)•exp(θ13)', value '1.26') — already have one for this compound
- routed '(Female)•exp(θ14)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q27 ('Ω1.1 CL/F', value None) — already have one for this compound
- routed 'Ω3.1 COVVp/F−CL/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Ω3.2 COVVp/F−Vc/F' — extend the ontology if this is a real PK parameter (source ['jcph1753-tbl-0003:row23:col1'])
- dropped unlinked row (NIL): 'Ω5.5 KA' — extend the ontology if this is a real PK parameter (source ['jcph1753-tbl-0003:row26:col1'])
- dropped unlinked row (NIL): 'Ω6.6Ph1Form' — extend the ontology if this is a real PK parameter (source ['jcph1753-tbl-0003:row27:col1'])
- implicit units: 'ALAG1(exp(θ6))' → h (from the popPK convention: "The parameter is defined as 'Drug absorption lag time' (ALAG). In population PK, lag time is a duration and is conventio")
- implicit units: 'D1(exp(θ7))' → h (from the popPK convention: "The parameter is defined as 'Duration of a zero-order input' (D1). Duration is a time variable and is conventionally exp")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pexidartinib
- edge pexidartinib → ZAAD: 'Fm' (Q45) relinked to Q305, the formation parameter the metabolite carries
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles: 6 per-group rows of pexidartinib covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of pexidartinib residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 24/24 row label(s) assigned, 4 linked by role; re-tagged pexidartinib→parent ×18, pexidartinib→ZAAD ×2
- molar mass: no plausible PubChem entry for 'ZAAD' ('pexidartinib glucuronide') — left in mass units
- molar mass: none found for 'ZAAD' — its concentrations stay mass-only

**Extraction notes:**
- table jcph1753-tbl-0003: unbound_uncertainty
- table jcph1753-tbl-0003: units_need_context
- table jcph1753-tbl-0003: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['pexidartinib', 'zaad', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[(female)•exp]` |  | 0.869 | only_one_extracted |
| `gpt-oss-120b` | `parameters[(tbil&gt;20.5/20.5)θ 12]` | 0.244 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag1(exp(θ6))]` | 0.387 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag1(exp(θ6))]` |  | 0.387 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (exp(θ1))]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (exp(θ1))]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1(exp(θ7))]` | 1.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1(exp(θ7))]` |  | 1.22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1phase1(exp(θ8))]` | 0.855 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1phase1(exp(θ8))]` |  | 0.855 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f(exp(θ4))]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f(exp(θ4))]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω3.3 vp/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω3.3 vp/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω4.4 q/f]` |  |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph1753-tbl-0003:row1:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['jcph1753-tbl-0003:row17:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph1753-tbl-0003:row16:col1'] |
| C5_unit_missing_Q305 | fail | 1 / [time] |  | ['jcph1753-tbl-0003:row18:col1'] |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpexidartinib%5D%20Pexidartinib_Yin2021_reference&body=Drug%3A%20pexidartinib%0ARecord%3A%20Pexidartinib_Yin2021_reference%0APaper%3A%20Yin_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pexidartinib/Pexidartinib_Yin2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:20 UTC</sub>
