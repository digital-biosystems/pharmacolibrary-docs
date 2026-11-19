<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Haloperidol&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/&quot;},{&quot;label&quot;:&quot;Burkat_2025 \u00b7 optimized&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Haloperidol_Franken2017_reference&quot;,&quot;label&quot;:&quot;Franken_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Franken2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Johnson2016_reference&quot;,&quot;label&quot;:&quot;Johnson_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Johnson2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Holley1983_reference&quot;,&quot;label&quot;:&quot;Holley_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Holley1983_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_base&quot;,&quot;label&quot;:&quot;Li_2022_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_final&quot;,&quot;label&quot;:&quot;Li_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Haloperidol — `Haloperidol_Burkat2025_optimized`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q66 unit pmol min−1 mg−1 ([substance] / [time] / [mass]) vs [mass] / [time]; Q1 unit µM ([length]) vs [mass] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Haloperidol" model-id="Haloperidol_Burkat2025_optimized" status="rejected" stale="false" population="White American male virtual individual (30 years, 80.35 kg) and 100-individual population (25–55 years)" measured-compound="Haloperidol" parameterization="mechanistic" topology="1C"></div>

## Citation
Burkat PM. Haloperidol dopamine receptor occupancy and antagonism correspond to delirium agitation scores and EPS risk: A PBPK-PD modeling analysis. Journal of psychopharmacology (Oxford, England) 39(3):244–253 (2025).
  ·  DOI: [10.1177/02698811241309620](https://doi.org/10.1177/02698811241309620)

## Population and dosing

**Population:** White American male virtual individual (30 years, 80.35 kg) and 100-individual population (25–55 years) · condition hyperactive delirium (delivered as critical illness treatment); kinetic source data from healthy volunteers · age group adult · n = 100 (simulated).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| fu | fu | 8 |  |
| Vmax oxidative N-dealkylation | Vmax | 289 | pmol min−1 mg−1 |
| Km back-oxidation of reduced haloperidol | Km | 55 | µM |
| Brain interstitial:plasma | Kp | 430 |  |
| theta_vmax_ugt1a4 | theta_vmax_ugt1a4 | 0.054 |  |
| theta_km_ugt1a4 | theta_km_ugt1a4 | 53 |  |
| theta_vmax_ugt1a9 | theta_vmax_ugt1a9 | 0.08 |  |
| theta_km_ugt1a9 | theta_km_ugt1a9 | 62 |  |
| theta_vmax_ugt2b7 | theta_vmax_ugt2b7 | 0.07 |  |
| theta_km_ugt2b7 | theta_km_ugt2b7 | 21 |  |
| CL (L/h) | CL | 29.31 | L/h |
| Vd (L) | V | 1260.0 | L |
| Ka (h -1 ) | kabs | 1.37 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q66 unit pmol min−1 mg−1 ([substance] / [time] / [mass]) vs [mass] / [time]; Q1 unit µM ([length]) vs [mass] / [length] ** 3.**

A reported unit could not be converted (Vmax and Km), so that value has no SI equivalent. Extracted — haloperidol: fu 8, Vmax 289 pmol min−1 mg−1, Km 55 µM, Kp 430, CL 29.3 L/h, V 1.26e+03 L, kabs 1.37 h -1.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| fu | `Q46` · fu | 8 |  | 0.08 |  |  | exact (1) | table1-02698811241309620:row7:col2 |
| Vmax oxidative N-dealkylation | `Q66` · Vmax | 289 | pmol min−1 mg−1 |  |  | pM/(min·mg) | llm_confirmed (0.6) | table1-02698811241309620:row8:col2 |
| Km back-oxidation of reduced haloperidol | `Q1` · Km | 55 | µM |  |  | µM | llm_confirmed (0.6) | table1-02698811241309620:row15:col2 |
| Brain interstitial:plasma | `Q410` · Kp | 430 |  |  |  |  | llm (0.6) | table1-02698811241309620:row22:col2 |
| theta_vmax_ugt1a4 | `Q900` · theta_vmax_ugt1a4 | 0.054 |  |  |  |  |  | table1-02698811241309620:row16:col2 |
| theta_km_ugt1a4 | `Q900` · theta_km_ugt1a4 | 53 |  |  |  |  |  | table1-02698811241309620:row17:col2 |
| theta_vmax_ugt1a9 | `Q900` · theta_vmax_ugt1a9 | 0.08 |  |  |  |  |  | table1-02698811241309620:row18:col2 |
| theta_km_ugt1a9 | `Q900` · theta_km_ugt1a9 | 62 |  |  |  |  |  | table1-02698811241309620:row19:col2 |
| theta_vmax_ugt2b7 | `Q900` · theta_vmax_ugt2b7 | 0.07 |  |  |  |  |  | table1-02698811241309620:row20:col2 |
| theta_km_ugt2b7 | `Q900` · theta_km_ugt2b7 | 21 |  |  |  |  |  | table1-02698811241309620:row21:col2 |
| CL (L/h) | `Q22` · CL | 29.31 | L/h | 8.142e-06 | m3/s | L/h | review_gapfill (0.7) | Franken_2017:review |
| Vd (L) | `Q61` · V | 1260.0 | L | 1.26 | m3 | L | review_gapfill (0.7) | Franken_2017:review |
| Ka (h -1 ) | `Q49` · kabs | 1.37 | h -1 | 0.0003806 | 1/s | 1/h | review_gapfill (0.7) | Johnson_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Log P' — extend the ontology if this is a real PK parameter (source ['table1-02698811241309620:row5:col2'])
- 'fu' → Q46: printed without a unit and above 1 — read as a percentage
- unit_dimension_mismatch: 'Vmax oxidative N-dealkylation' → Q66 (unit '[substance] / [time] / [mass]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Vmax carbonyl reduction' → Q66 (unit '[substance] / [time] / [mass]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q66 ('Vmax carbonyl reduction', value '1.1') — already have one for this compound
- unit_dimension_mismatch: 'Vmax back-oxidation of reduced haloperidol' → Q66 (unit '[substance] / [time] / [mass]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q66 ('Vmax back-oxidation of reduced haloperidol', value '269') — already have one for this compound
- unit_dimension_mismatch: 'Km back-oxidation of reduced haloperidol' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Haloperidol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- pharmacogenetic covariate 'theta_vmax_ugt1a4' (ugt1a4) — PGx domain
- pharmacogenetic covariate 'theta_km_ugt1a4' (ugt1a4) — PGx domain
- pharmacogenetic covariate 'theta_vmax_ugt1a9' (ugt1a9) — PGx domain
- pharmacogenetic covariate 'theta_km_ugt1a9' (ugt1a9) — PGx domain
- pharmacogenetic covariate 'theta_vmax_ugt2b7' (ugt2b7) — PGx domain
- pharmacogenetic covariate 'theta_km_ugt2b7' (ugt2b7) — PGx domain
- status held at "Needs review" — not promoted
- population split: 'optimized' subgroup of Burkat_2025 (paper reports 2 populations: optimized, value)
- gap-filled Q22 (CL) from Franken_2017's review values (primary lacked it)
- gap-filled Q61 (V) from Franken_2017's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Johnson_2016's review values (primary lacked it)

**Extraction notes:**
- table table1-02698811241309620: missing_unit_binding
- table table1-02698811241309620: unbound_uncertainty
- table table1-02698811241309620: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | µM ([length]) | ['table1-02698811241309620:row15:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Franken_2017:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Johnson_2016:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Franken_2017:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | pmol min−1 mg−1 ([substance] / [time] / [mass]) | ['table1-02698811241309620:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 29.31 | ['Franken_2017:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 29.3 L/h | ['Franken_2017:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.26e+03 L | ['Franken_2017:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhaloperidol%5D%20Haloperidol_Burkat2025_optimized&body=Drug%3A%20haloperidol%0ARecord%3A%20Haloperidol_Burkat2025_optimized%0APaper%3A%20Burkat_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_haloperidol/Haloperidol_Burkat2025_optimized%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 18:44 UTC</sub>
