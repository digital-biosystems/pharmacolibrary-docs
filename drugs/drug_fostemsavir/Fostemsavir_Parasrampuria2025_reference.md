<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;fostemsavir&quot;,&quot;href&quot;:&quot;drugs/drug_fostemsavir/&quot;},{&quot;label&quot;:&quot;Parasrampuria_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fostemsavir — `Fostemsavir_Parasrampuria2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Temsavir’s absorption rate constant kabs is reported as 2.33 with unit “units,” causing a structural-parameter dimension mismatch and rejection.

<div class="pk-model-meta" hidden drug="fostemsavir" model-id="Fostemsavir_Parasrampuria2025_reference" status="rejected" stale="false" population="HIV-1-infected and healthy participants from Phase 1–3 studies" measured-compound="temsavir" parameterization="apparent" topology="1C"></div>

## Citation
Parasrampuria R, Thakkar N, Moore K, Ackerman P, Magee M. Population pharmacokinetics and exposure-response relationship for temsavir following fostemsavir administration in treatment-experienced HIV patients. Pharmacology research & perspectives 13(3):e70023 (2025).
  ·  DOI: [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023)

## Population and dosing

**Population:** HIV-1-infected and healthy participants from Phase 1–3 studies · condition HIV-1 infection and healthy · age group adult · n = 764.

**Dosing:** 400, 2400 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed fostemsavir, measured temsavir.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/h) | CLm/F | 51.0 | L/h | 2.16 |
| V2/F (L) | V1/F | 257 | L | 3.18 |
| Q/F (L/h) | Q/F | 2.58 | L/h | 7.13 |
| V3/F (L) | V2/F | 37.4 | L | 3.95 |
| Ka (1/h) | kabs | 2.33 | units | 13.3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Temsavir’s absorption rate constant kabs is reported as 2.33 with unit “units,” causing a structural-parameter dimension mismatch and rejection.**

The parameter’s meaning is an absorption rate constant, but its recorded unit is “units”; the label says 1/h. That reported unit could not be converted to SI, so the parameter reached the model without an SI value.」 Extracted — temsavir: CLm/F 51 L/h, V1/F 257 L, Q/F 2.58 L/h, V2/F 37.4 L, kabs 2.33 units.

Independently confirmed by `qwen3.8-27b`.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q351` · CLm/F | 51.0 | L/h | 1.417e-05 | m3/s | l/h | 2.16 | exact (1) | prp270023-tbl-0002:row1:col1 |
| V2/F (L) | `Q290` · V1/F | 257 | L | 0.257 | m3 | l | 3.18 | exact (1) | prp270023-tbl-0002:row2:col1 |
| Q/F (L/h) | `Q69` · Q/F | 2.58 | L/h | 7.167e-07 | m3/s | l/h | 7.13 | exact (1) | prp270023-tbl-0002:row3:col1 |
| V3/F (L) | `Q82` · V2/F | 37.4 | L | 0.0374 | m3 | l | 3.95 | exact (1) | prp270023-tbl-0002:row4:col1 |
| Ka (1/h) | `Q49` · kabs | 2.33 | units |  |  | units | 13.3 | exact (1) | prp270023-tbl-0002:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'DUR (h)' — extend the ontology if this is a real PK parameter (source ['prp270023-tbl-0002:row6:col1'])
- unit_dimension_mismatch: 'Effect of CYP3A Inducer on CL/F' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('Effect of CYP3A Inducer on CL/F', value '1.41') — already have one for this compound
- unit_dimension_mismatch: 'Effect of CYP3A Inhibitor on CL/F' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('Effect of CYP3A Inhibitor on CL/F', value '0.721') — already have one for this compound
- routed 'BSC (CL/F, V2/F)' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- metabolite temsavir: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=temsavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 5 linked by role
- review gap-fill skipped: this record measures 'temsavir', not fostemsavir — the review values are the parent's

**Extraction notes:**
- unparsed cell prp270023-tbl-0002:row1:col2 = '49.1, 52.9'
- unparsed cell prp270023-tbl-0002:row2:col2 = '233, 279'
- unparsed cell prp270023-tbl-0002:row3:col2 = '0.973, 4.40'
- unparsed cell prp270023-tbl-0002:row4:col2 = '26.5, 65.6'
- unparsed cell prp270023-tbl-0002:row5:col2 = '1.84, 2.79'
- unparsed cell prp270023-tbl-0002:row6:col2 = '3.68, 3.99'
- unparsed cell prp270023-tbl-0002:row7:col2 = '1.25, 1.58'
- unparsed cell prp270023-tbl-0002:row8:col2 = '0.687, 0.764'
- unparsed cell prp270023-tbl-0002:row14:col2 = '0.576, 0.645'
- unparsed cell prp270023-tbl-0002:row15:col2 = '0.595, 0.628'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | confirmed | 1.0 (14/14 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['prp270023-tbl-0002:row2:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['prp270023-tbl-0002:row1:col1'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | ['prp270023-tbl-0002:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['prp270023-tbl-0002:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['prp270023-tbl-0002:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 257 L | ['prp270023-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 37.4 L | ['prp270023-tbl-0002:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfostemsavir%5D%20Fostemsavir_Parasrampuria2025_reference&body=Drug%3A%20fostemsavir%0ARecord%3A%20Fostemsavir_Parasrampuria2025_reference%0APaper%3A%20Parasrampuria_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:39 UTC</sub>
