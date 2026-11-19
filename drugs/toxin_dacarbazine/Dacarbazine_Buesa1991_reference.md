<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Dacarbazine&quot;,&quot;href&quot;:&quot;drugs/toxin_dacarbazine/&quot;},{&quot;label&quot;:&quot;Buesa_1991 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dacarbazine — `Dacarbazine_Buesa1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Volume parameters V1 and VH use reciprocal mass units, dimensionally conflicting with volume, while the model is abstract-only.

<div class="pk-model-meta" hidden drug="Dacarbazine" model-id="Dacarbazine_Buesa1991_reference" status="rejected" stale="false" population="cancer patients" measured-compound="Dacarbazine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Buesa JM, Urréchaga E. Clinical pharmacokinetics of high-dose DTIC. Cancer chemotherapy and pharmacology 28(6):475–479 (1991).
  ·  DOI: [10.1007/BF00685826](https://doi.org/10.1007/BF00685826)

## Population and dosing

**Population:** cancer patients · condition cancer · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 alpha | t1/2α | 0.17 | h |
| t1/2 beta | t1/2β | 2 | h |
| Vc | V1 | 0.42 | 1 kg-1 |
| VB | VH | 1.49 | 1 kg-1 |
| total body clearance of DTIC | kel | 0.58 | 1 kg-1 h-1 |
| t1/2 | t1/2z | 3.25 | h |
| AICA renal clearance | kel | 0.15 | 1 kg-1 h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Volume parameters V1 and VH use reciprocal mass units, dimensionally conflicting with volume, while the model is abstract-only.**

V1 and VH are recorded as 0.42 and 1.49 kg⁻¹, failing dimensional checks against expected volume units. The metabolite AICA has zero assigned compartments despite being formed, creating an unreachable compartment. Furthermore, the model relies solely on abstract summary statistics rather than a fitted structural model. Extracted — dacarbazine: t1/2α 0.17 h, t1/2β 2 h, V1 0.42 1 kg-1, VH 1.49 1 kg-1, kel 0.58 1 kg-1 h-1; Aminoimidazole carboxamide (AICA): t1/2z 3.25 h, kel 0.15 1 kg-1 h-1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 alpha | `Q59` · t1/2α | 0.17 | h | 612 | s | h | half_life_rule (0.95) | Buesa_1991:abstract |
| t1/2 beta | `Q60` · t1/2β | 2 | h | 7200 | s | h | half_life_rule (0.95) | Buesa_1991:abstract |
| Vc | `Q63` · V1 | 0.42 | 1 kg-1 |  |  | 1/kg | exact (1) | Buesa_1991:abstract |
| VB | `Q368` · VH | 1.49 | 1 kg-1 |  |  | 1/kg | llm (0.6) | Buesa_1991:abstract |
| total body clearance of DTIC | `Q47` · kel | 0.58 | 1 kg-1 h-1 | 0.01128 | 1/s | 1/(h·kg) | toxin_unit_relink (0.85) | Buesa_1991:abstract |
| t1/2 | `Q57` · t1/2z | 3.25 | h | 1.17e+04 | s | h | half_life_rule (0.95) | Buesa_1991:abstract |
| AICA renal clearance | `Q47` · kel | 0.15 | 1 kg-1 h-1 | 0.002917 | 1/s | 1/(h·kg) | toxin_unit_relink (0.85) | Buesa_1991:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vc' → Q63 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'VB' → Q368 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- relinked 'total body clearance of DTIC' Q22 → Q47: a rate constant in '1 kg-1 h-1' (the unit decides, not the label)
- relinked 'renal clearance' Q26 → Q47: a rate constant in '1 kg-1 h-1' (the unit decides, not the label)
- dropped duplicate Q47 ('renal clearance', value 0.28) — already have one for this compound
- relinked 'AICA renal clearance' Q22 → Q47: a rate constant in '1 kg-1 h-1' (the unit decides, not the label)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Dacarbazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model (site hepatic: 'the record carries a hepatic compartment parameter (Q368)')
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 5 linked by role; re-tagged Dacarbazine→parent ×6, Dacarbazine→Aminoimidazole carboxamide (AICA) ×2
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Buesa_1991_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q368 | fail | [length] ** 3 | 1 kg-1 (dimensionless) | ['Buesa_1991:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Buesa_1991:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Buesa_1991:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Buesa_1991:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Buesa_1991:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Buesa_1991:abstract'] |
| C5_dimension_Q63 | fail | [length] ** 3 | 1 kg-1 (dimensionless) | ['Buesa_1991:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdacarbazine%5D%20Dacarbazine_Buesa1991_reference&body=Drug%3A%20dacarbazine%0ARecord%3A%20Dacarbazine_Buesa1991_reference%0APaper%3A%20Buesa_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dacarbazine/Dacarbazine_Buesa1991_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 07:29 UTC</sub>
