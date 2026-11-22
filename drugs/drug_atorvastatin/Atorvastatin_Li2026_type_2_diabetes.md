<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;atorvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/&quot;},{&quot;label&quot;:&quot;Li_2026 \u00b7 type_2_diabetes&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atorvastatin_Karvaly2021_reference&quot;,&quot;label&quot;:&quot;Karvaly_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Karvaly2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Kong2025_reference&quot;,&quot;label&quot;:&quot;Kong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Courlet2020_reference&quot;,&quot;label&quot;:&quot;Courlet_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vargo_2014_LDL_C&quot;,&quot;label&quot;:&quot;Vargo_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/pd_Vargo_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atorvastatin — `Atorvastatin_Li2026_type_2_diabetes`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="atorvastatin" model-id="Atorvastatin_Li2026_type_2_diabetes" status="rejected" stale="false" population="healthy volunteers and type 2 diabetes patients" measured-compound="atorvastatin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Li Y, Yang J, Zhou E, Geng K, Lei Z, Yao X et al. A microdose cocktail and population pharmacokinetic study suggests potentially reduced CYP3A and P-gp activities in type 2 diabetes. Frontiers in pharmacology 17:1924307 (2026).
  ·  DOI: [10.3389/fphar.2026.1924307](https://doi.org/10.3389/fphar.2026.1924307)

## Population and dosing

**Population:** healthy volunteers and type 2 diabetes patients · condition type 2 diabetes · age group adult.

**Dosing:** 0.01, 0.05, 0.1, 0.375 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ATV (OATP, BCRP, P-gp, CYP3A) | equation variable | 22.7 | OATP, BCRP, P-gp, CYP3A |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. A reported unit could not be converted (equation variable), so that value has no SI equivalent. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| ATV (OATP, BCRP, P-gp, CYP3A) | `Q900` · equation variable | 22.7 | OATP, BCRP, P-gp, CYP3A | oatp | llm (0.6) | Li_2026_table_S3:row8:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'MDZ (CYP3A)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S3:row0:col3'])
- dropped unlinked row (NIL): 'DAB (P-gp)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S3:row2:col3'])
- dropped unlinked row (NIL): 'PTV (OATP)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S3:row4:col3'])
- dropped unlinked row (NIL): 'RSV (OATP, BCRP)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S3:row6:col3'])
- unit_dimension_unknown: 'OATP, BCRP, P-gp, CYP3A' (equation variable)
- dropped unlinked row (NIL): 'MDZ(CYP3A)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S8:row0:col3'])
- dropped unlinked row (NIL): 'DAB(P-gp)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S8:row2:col3'])
- dropped unlinked row (NIL): 'PTV(OATP)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S8:row4:col3'])
- dropped unlinked row (NIL): 'RSV(OATP, BCRP)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S8:row6:col3'])
- dropped unlinked row (NIL): 'ATV(OATP, BCRP, P-gp, CYP3A)' — extend the ontology if this is a real PK parameter (source ['Li_2026_table_S8:row8:col3'])
- table mostly unlinked (9/10 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atorvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'type 2 diabetes (n=13)' subgroup of Li_2026 (paper reports 3 populations: hv (n=10), hv (n=14), type 2 diabetes (n=13))
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 0 linked by role; re-tagged parent→midazolam ×10, parent→dabigatran ×10, parent→pitavastatin ×10, parent→rosuvastatin ×10
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table T2: ambiguous_numeric_format
- table T2: units_need_context
- table T2: representations disagree; selected evidence retained, not merged
- table Li_2026_table_S3: missing_label
- table Li_2026_table_S3: unparsed_numeric_cell
- companion parameter table S3 transcribed (20 record(s))
- table Li_2026_table_S4: unbound_uncertainty
- table Li_2026_table_S4: unknown_column_role
- table Li_2026_table_S4: missing_label
- table Li_2026_table_S4: no_point_estimates
- table Li_2026_table_S4: ragged_grid
- companion parameter table S4 transcribed (70 record(s))
- table Li_2026_table_S8: missing_label
- table Li_2026_table_S8: unparsed_numeric_cell
- companion parameter table S8 transcribed (19 record(s))
- LLM selected parameter table(s) 2, S3, S4, S8

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batorvastatin%5D%20Atorvastatin_Li2026_type_2_diabetes&body=Drug%3A%20atorvastatin%0ARecord%3A%20Atorvastatin_Li2026_type_2_diabetes%0APaper%3A%20Li_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atorvastatin/Atorvastatin_Li2026_type_2_diabetes%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 08:57 UTC</sub>
