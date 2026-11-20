<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Imipramine&quot;,&quot;href&quot;:&quot;drugs/toxin_imipramine/&quot;},{&quot;label&quot;:&quot;el-Yazigi_1988 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Imipramine — `Imipramine_elYazigi1988_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Imipramine" model-id="Imipramine_elYazigi1988_reference" status="rejected" stale="false" population="Saudi patients" measured-compound="Imipramine" parameterization="mechanistic" topology="retention"></div>

## Citation
el-Yazigi A, Chaleby K. Steady-state kinetics of doxepin and imipramine in Saudi patients with interethnic comparison. Psychopharmacology 95(1):63–67 (1988).
  ·  DOI: [10.1007/BF00212768](https://doi.org/10.1007/BF00212768)

## Population and dosing

**Population:** Saudi patients · condition long term treatment · age group adult · n = 30 (for Imipramine) + 21 (for Doxepin) + 3 (for Desipramine clearance).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| mean (SEM) values of the dose-normalized steady-state concentration | Cavg | 25.8 | ng.ml-1/mg.kg-1 |
| mean (SEM) values of the apparent clearance | kel | 2.529 | 1.h-1.kg-1 |
| mean dose-normalized steady-state concentration of IMI | Css | 68.3 | ng.ml-1/mg.kg-1 |
| mean apparent clearance after oral administration of IMI | kel | 1.619 | 1.h-1 |
| fraction of IMI metabolized to DES | fm | 0.489 |  |
| Vd | V | 0.13 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| mean (SEM) values of the dose-normalized steady-state concentration | `Q71` · Cavg | 25.8 | ng.ml-1/mg.kg-1 |  |  | (ng·ml)/(mg·kg) | llm_corrected (0.6) | el-Yazigi_1988:abstract |
| mean (SEM) values of the apparent clearance | `Q47` · kel | 2.529 | 1.h-1.kg-1 | 0.04917 | 1/s | 1/(h·kg) | toxin_unit_relink (0.85) | el-Yazigi_1988:abstract |
| mean dose-normalized steady-state concentration of IMI | `Q34` · Css | 68.3 | ng.ml-1/mg.kg-1 |  |  | (ng·ml)/(mg·kg) | llm_confirmed (0.6) | el-Yazigi_1988:abstract |
| mean apparent clearance after oral administration of IMI | `Q47` · kel | 1.619 | 1.h-1 | 0.0004497 | 1/s | 1/h | toxin_unit_relink (0.85) | el-Yazigi_1988:abstract |
| fraction of IMI metabolized to DES | `Q45` · fm | 0.489 |  | 0.489 |  |  | llm (0.6) | el-Yazigi_1988:abstract |
| Vd | `Q61` · V | 0.13 | L/kg | 0.0091 | m3 | L | review_gapfill (0.7) | Hattori_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'mean (SEM) values of the dose-normalized steady-state concentration' → Q71 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- relinked 'mean (SEM) values of the apparent clearance' Q27 → Q47: a rate constant in '1.h-1.kg-1' (the unit decides, not the label)
- unit_dimension_mismatch: 'mean dose-normalized steady-state concentration of IMI' → Q34 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- relinked 'mean apparent clearance after oral administration of IMI' Q27 → Q47: a rate constant in '1.h-1' (the unit decides, not the label)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Imipramine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role; re-tagged Imipramine→parent ×2, Imipramine→Desipramine ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Hattori_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in el-Yazigi_1988_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q34 | fail | [mass] / [length] ** 3 | ng.ml-1/mg.kg-1 (1 / [length] ** 3) | ['el-Yazigi_1988:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['el-Yazigi_1988:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['el-Yazigi_1988:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hattori_2020:review'] |
| C5_dimension_Q71 | fail | [mass] / [length] ** 3 | ng.ml-1/mg.kg-1 (1 / [length] ** 3) | ['el-Yazigi_1988:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 9.1 L | ['Hattori_2020:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bimipramine%5D%20Imipramine_elYazigi1988_reference&body=Drug%3A%20imipramine%0ARecord%3A%20Imipramine_elYazigi1988_reference%0APaper%3A%20el-Yazigi_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_imipramine/Imipramine_elYazigi1988_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 14:26 UTC</sub>
