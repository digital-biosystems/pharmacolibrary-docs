<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Simvastatin&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/&quot;},{&quot;label&quot;:&quot;Ogungbenro_2019 \u00b7 structural_model_estimatea&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Simvastatin_Kumagai2020_simvastatin_tas_303_day_19&quot;,&quot;label&quot;:&quot;Kumagai_2020_simvastatin_tas_303_day_19&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/Simvastatin_Kumagai2020_simvastatin_tas_303_day_19.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Wu2016_reference&quot;,&quot;label&quot;:&quot;Wu_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/Simvastatin_Wu2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Simvastatin — `Simvastatin_Ogungbenro2019_structural_model_estimatea`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The 3,5-dihydrodiol simvastatin metabolite is modeled as an orphan compartment with no path from the dose, despite Simvastatin having a central compartment link to it.

<div class="pk-model-meta" hidden drug="Simvastatin" model-id="Simvastatin_Ogungbenro2019_structural_model_estimatea" status="rejected" stale="false" population="children and adolescents" measured-compound="Simvastatin" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Ogungbenro K, Wagner JB, Abdel-Rahman S, Leeder JS, Galetin A. A population pharmacokinetic model for simvastatin and its metabolites in children and adolescents. European journal of clinical pharmacology 75(9):1227-1235 (2019).
  ·  DOI: [10.1007/s00228-019-02697-y](https://doi.org/10.1007/s00228-019-02697-y)

## Population and dosing

**Population:** children and adolescents · condition hypercholesterolemia · age group mixed · n = 32.

**Dosing:** 10 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| DHSV | V | 4.11 | L |
| ka (h−1) | kabs | 4.226 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The 3,5-dihydrodiol simvastatin metabolite is modeled as an orphan compartment with no path from the dose, despite Simvastatin having a central compartment link to it.**

The structure defines 3,5-dihydrodiol simvastatin as a one-compartment metabolite (n_cmt: 1), while all other metabolites are zero-compartment. Although a formation link from Simvastatin to 3,5-dihydrodiol simvastatin exists, the rejection reason identifies this entity as an unreachable or orphan compartment with no valid path from the dose. Extracted — 3,5-dihydrodiol simvastatin: V 4.11 L; simvastatin: kabs 4.23 h−1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| DHSV | `Q61` · V | 4.11 | L | 0.00411 | m3 | L | llm (0.6) | Tab1:row23:col2 |
| ka (h−1) | `Q49` · kabs | 4.226 | h−1 | 0.001174 | 1/s | 1/h | review_gapfill (0.7) | Chang_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'SVA' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'HMSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'HMSVA' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'DHSV' routed out of structural estimates ('Residual Variabilityc')
- table representations disagree for 'SV'; source reconciliation required
- table representations disagree for 'SVA'; source reconciliation required
- table representations disagree for 'HMSV'; source reconciliation required
- table representations disagree for 'HMSVA'; source reconciliation required
- table representations disagree for 'DHSV'; source reconciliation required
- dropped unlinked row (NIL): 'SV' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col2'])
- dropped unlinked row (NIL): 'SVA' — extend the ontology if this is a real PK parameter (source ['Tab1:row10:col2'])
- dropped unlinked row (NIL): 'HMSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row14:col2'])
- dropped unlinked row (NIL): 'HMSVA' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col2'])
- NIL: refused to back-fill base 'Fab' from footnote/prose loose number None (source ['Tab1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab1:footnote']); the table cell was unparseable — needs review
- table mostly unlinked (4/5 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- implicit units: 'DHSV' → L (from the popPK convention: 'The paper does not specify units for volumes in the text or table footnotes. For a volume of distribution parameter in p')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Simvastatin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'structural model / estimatea' subgroup of Ogungbenro_2019 (paper reports 2 populations: between subject variability (bsvb) / estimate [shrinkage(%)], structural model / estimatea)
- row roles (LLM): model_class=compartmental; 39/39 row label(s) assigned, 9 linked by role; re-tagged parent→Simvastatin acid ×8, parent→6-hydroxymethyl simvastatin ×10, parent→6-hydroxymethyl simvastatin acid ×10, parent→3,5-dihydrodiol simvastatin ×10, Simvastatin→parent ×2
- molar mass: none of 1 PubChem candidate(s) is '6-hydroxymethyl simvastatin acid' (LLM) — left in mass units
- molar mass: none found for '6-hydroxymethyl simvastatin acid' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chang_2022's review values (primary lacked it)

**Extraction notes:**
- table Tab1: unbound_uncertainty
- table Tab1: ragged_grid
- table Tab1: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chang_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab1:row23:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLLA', 'CLLH', 'CLAH', 'CLSHVSHVA', 'CLLD'] |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.11 L | ['Tab1:row23:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsimvastatin%5D%20Simvastatin_Ogungbenro2019_structural_model_estimatea&body=Drug%3A%20simvastatin%0ARecord%3A%20Simvastatin_Ogungbenro2019_structural_model_estimatea%0APaper%3A%20Ogungbenro_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_simvastatin/Simvastatin_Ogungbenro2019_structural_model_estimatea%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 03:46 UTC</sub>
