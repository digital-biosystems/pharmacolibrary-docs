<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;valganciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_valganciclovir/&quot;},{&quot;label&quot;:&quot;Itohara_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# valganciclovir — `Valganciclovir_Itohara2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-10-07 14:43 UTC) predates the latest extraction (2026-10-07 16:39 UTC); the status shown comes from the current checks. The review refused the model because the reverse intercompartmental clearance (k21) was not reported, requiring the use of a library default.

<div class="pk-model-meta" hidden drug="valganciclovir" model-id="Valganciclovir_Itohara2025_reference" status="rejected" stale="true" population="Japanese infants with symptomatic congenital cytomegalovirus infection" measured-compound="ganciclovir" parameterization="apparent" topology="1C"></div>

## Citation
Itohara K, Yamamoto K, Fujinaka S, Hashimoto M, Tamura N, Kitahiro Y et al. Pharmacokinetic and Pharmacodynamic Assessment of Valganciclovir in Infants With Congenital Cytomegalovirus Infection. Therapeutic drug monitoring 47(3):393–399 (2025).
  ·  DOI: [10.1097/FTD.0000000000001257](https://doi.org/10.1097/FTD.0000000000001257)

## Population and dosing

**Population:** Japanese infants with symptomatic congenital cytomegalovirus infection · condition congenital cytomegalovirus infection · age group infant · n = 8.

**Dosing:** 1120 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed valganciclovir, measured ganciclovir.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| θ1 (L/h) | CLm/F | 13.9 | L/h | 28.1 (None% RSE) |
| θ2 (weeks) | tlag | 38.7 | weeks |  |
| θ4 (L/kg) | V | 1.15 | L/kg |  |
| Ka (/h) | kabs | 0.591 | /h |  |
| F | Fab | 0.536 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The review refused the model because the reverse intercompartmental clearance (k21) was not reported, requiring the use of a library default.**

The record lists a forward intercompartmental clearance (Q) of 13.9 L/h but omits the reverse intercompartmental clearance (k21). Consequently, the model builder substituted a library default value for this missing parameter. This deviation was flagged as unacceptable because the default is not supported by the paper's data. Extracted — valganciclovir: CL/F 0.96 L/h, V 1.15 (L/kg), Q 13.9 L/h, kabs 0.591 /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of θ2: this record has 38.7, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| θ1 (L/h) | `Q351` · CLm/F | 13.9 | L/h | 3.861e-06 | m3/s | l/h | exact (1) | tab_1:row4:col2, tab_1:row4:col4, tab_1:row4:col5, tab_1:row4:col6 | 28.1 (None% RSE) |
| θ2 (weeks) | `Q83` · tlag | 38.7 | weeks |  |  | weeks | llm (0.6) | tab_1:row5:col2, tab_1:row5:col4, tab_1:row5:col5, tab_1:row5:col6 |  |
| θ4 (L/kg) | `Q61` · V | 1.15 | L/kg | 0.0805 | m3 | l/kg | exact (1) | tab_1:row8:col2, tab_1:row8:col5 |  |
| Ka (/h) | `Q49` · kabs | 0.591 | /h | 0.0001642 | 1/s | 1/h | exact (1) | tab_1:row9:col2, tab_1:row9:col5 |  |
| F | `Q40` · Fab | 0.536 |  |  |  |  | exact (1) | tab_1:row10:col2, tab_1:row10:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error,' routed out of structural estimates ('Residual variability')
- routed 'θ3' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- metabolite ganciclovir: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'θ4 (L/kg)' Q63→Q61 for ganciclovir — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ganciclovir
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles (LLM): model_class=compartmental; 8/8 row label(s) assigned, 8 linked by role
- review gap-fill skipped: this record measures 'ganciclovir', not valganciclovir — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ2]` | 38.7 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q40 | fail | 0.536 | 0.96 | 1.791 | 0.05 | footnote reference category |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  |  |  | ['tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['tab_1:row9:col2', 'tab_1:row9:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['tab_1:row8:col2', 'tab_1:row8:col5'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['tab_1:row5:col2', 'tab_1:row5:col4', 'tab_1:row5:col5', 'tab_1:row5:col6'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.536 with apparent parameterization |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 80.5 L |  |  | ['tab_1:row8:col2', 'tab_1:row8:col5'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=valganciclovir) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalganciclovir%5D%20Valganciclovir_Itohara2025_reference&body=Drug%3A%20valganciclovir%0ARecord%3A%20Valganciclovir_Itohara2025_reference%0APaper%3A%20Itohara_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valganciclovir/Valganciclovir_Itohara2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:39 UTC</sub>
