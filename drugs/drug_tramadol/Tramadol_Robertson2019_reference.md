<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Robertson_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Robertson2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the metabolite's volume of distribution was assigned a percentage unit, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_Robertson2019_reference" status="rejected" stale="false" population="young and elderly healthy volunteers" measured-compound="O-desmethyltramadol" parameterization="apparent" topology="1C"></div>

## Citation
Robertson SS, Mouksassi MS, Varin F. Population Pharmacokinetic/Pharmacodynamic Modeling of O-Desmethyltramadol in Young and Elderly Healthy Volunteers. Drugs & aging 36(8):747–758 (2019).
  ·  DOI: [10.1007/s40266-019-00681-w](https://doi.org/10.1007/s40266-019-00681-w)

## Population and dosing

**Population:** young and elderly healthy volunteers · condition healthy · age group mixed · n = # 29.

**Dosed compound ≠ measured compound:** dosed tramadol, measured O-desmethyltramadol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, CLm/F, V/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V/fm | Vm/F | 76 | % |
| CL/fm | CLm/F | 16 | % |
| distribution outside the central compartment | AUC%ext | 76 | % |
| CLz/F (L/h/kg) | CL/F | 28.327 | L/h/kg |
| Vz/F (L/kg) | V/F | 9.824 | L/kg |
| kₐ | kabs | 0.65 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the metabolite's volume of distribution was assigned a percentage unit, causing a dimension mismatch.**

The abstract-only record lists the apparent volume of distribution for O-desmethyltramadol as 76 percent. This percentage unit is incompatible with the volume quantity, creating a dimensional inconsistency in the structural parameters. Consequently, the summary statistics could not be reconciled into a valid pharmacokinetic model structure. Extracted — tramadol: Vm/F 76 %, CLm/F 16 %; O-desmethyltramadol: AUC%ext 76 %, CL/F 28.3 L/h/kg, V/F 9.82 L/kg, kabs 0.65 1/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V/fm | `Q367` · Vm/F | 76 | % |  |  | % | exact (1) | Robertson_2019:abstract |
| CL/fm | `Q351` · CLm/F | 16 | % |  |  | % | exact (1) | Robertson_2019:abstract |
| distribution outside the central compartment | `Q84` · AUC%ext | 76 | % |  |  | % | llm (0.6) | Robertson_2019:abstract |
| CLz/F (L/h/kg) | `Q27` · CL/F | 28.327 | L/h/kg | 0.0005508 | m3/s | L/h | review_gapfill (0.7) | Bao_2023:review |
| Vz/F (L/kg) | `Q76` · V/F | 9.824 | L/kg | 0.6877 | m3 | L | review_gapfill (0.7) | Bao_2023:review |
| kₐ | `Q49` · kabs | 0.65 | 1/h | 0.0001806 | 1/s | 1/h | review_gapfill (0.7) | Ekstrand_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V/fm' → Q367 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'CL/fm' → Q351 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Robertson_2019:abstract'])
- dropped PD-category row 'maximum possible treatment-related effect' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Robertson_2019:abstract', 'Robertson_2019:abstract', 'Robertson_2019:abstract'])
- dropped unlinked row (NIL): 'clearance of (+)-ODM' — extend the ontology if this is a real PK parameter (source ['Robertson_2019:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=O-desmethyltramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=other; 6/6 row label(s) assigned, 0 linked by role; re-tagged O-desmethyltramadol→parent ×2
- molar mass: none of 2 PubChem candidate(s) is 'O-desmethyltramadol' (LLM) — left in mass units
- molar mass: none found for 'O-desmethyltramadol' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q27 (CL/F) from Bao_2023's review values (primary lacked it)
- gap-filled Q76 (V/F) from Bao_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ekstrand_2026's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Robertson_2019_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Bao_2023:review'] |
| C5_dimension_Q351 | fail | dimensionless | % | ['Robertson_2019:abstract'] |
| C5_dimension_Q367 | fail | dimensionless | % | ['Robertson_2019:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ekstrand_2026:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Bao_2023:review'] |
| C5_dimension_Q84 | pass | dimensionless |  | ['Robertson_2019:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.98e+03 L/h | ['Bao_2023:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 688 L | ['Bao_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Robertson2019_reference&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Robertson2019_reference%0APaper%3A%20Robertson_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tramadol/Tramadol_Robertson2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 11:14 UTC</sub>
