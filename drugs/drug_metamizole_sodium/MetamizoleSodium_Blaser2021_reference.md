<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;metamizole sodium&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/&quot;},{&quot;label&quot;:&quot;Blaser_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MetamizoleSodium_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/MetamizoleSodium_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MetamizoleSodium_Stoschus2025_reference&quot;,&quot;label&quot;:&quot;Stoschus_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/MetamizoleSodium_Stoschus2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metamizole sodium — `MetamizoleSodium_Blaser2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record for 4-methylaminoantipyrine lacks compartmental volume or clearance parameters, rendering it an exposure summary rather than a PK model.

<div class="pk-model-meta" hidden drug="metamizole sodium" model-id="MetamizoleSodium_Blaser2021_reference" status="rejected" stale="false" population="healthy salt-depleted adults" measured-compound="4-methylaminoantipyrine" parameterization="apparent" topology="general_linear"></div>

## Citation
Blaser LS, Duthaler U, Bouitbir J, Leuppi-Taegtmeyer AB, Liakoni E, Dolf R et al. Comparative Effects of Metamizole (Dipyrone) and Naproxen on Renal Function and Prostacyclin Synthesis in Salt-Depleted Healthy Subjects - A Randomized Controlled Parallel Group Study. Frontiers in pharmacology 12:620635 (2021).
  ·  DOI: [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635)

## Population and dosing

**Population:** healthy salt-depleted adults · condition healthy · age group adult · n = &gt; 15.

**Dosing:** 1000 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed metamizole_sodium, measured 4-methylaminoantipyrine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (1/h) | kabs | 0.538 | 1/h |
| V1/F (L) | V1/F | 3.27 | L |
| k12 (1/h) | Q | 0.185 | 1/h |
| k10 (1/h) | kel | 0.213 | 1/h |
| k23 (1/h) | Q | 0.009 | 1/h |
| T1/2 K01 (h) | t1/2z | 1.708 | h |
| T1/2 4-AA (h) | t1/2z | 2.14 | h |
| T1/2 4-AAA (h) | t1/2z | 1.00 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for 4-methylaminoantipyrine lacks compartmental volume or clearance parameters, rendering it an exposure summary rather than a PK model.**

The extracted parameters include only summary statistics like Cmax of 14.9 mg/L and AUC of 107 mg/L x h, with no distribution volume or clearance values. Because the metabolism links lack defined rate parameters, the metabolite compartments remain structurally unreachable from the parent drug. Extracted — 4-methylaminoantipyrine: Cmax 14.9 mg/L, tmax 1 h, AUCt 105, AUC∞ 107, t1/2z 3.7 h, Cmax_ratio 1.35, AUC ratio 1.42.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.538 | 1/h | 0.0001494 | 1/s | 1/h | exact (1) | T3:row1:col2, T3:row1:col3 |
| V1/F (L) | `Q290` · V1/F | 3.27 | L | 0.00327 | m3 | l | exact (1) | T3:row2:col3 |
| k12 (1/h) | `Q30` · Q | 0.185 | 1/h |  |  | 1/h | exact (1) | T3:row3:col2, T3:row3:col3 |
| k10 (1/h) | `Q47` · kel | 0.213 | 1/h | 5.917e-05 | 1/s | 1/h | exact (1) | T3:row5:col2, T3:row5:col3 |
| k23 (1/h) | `Q30` · Q | 0.009 | 1/h |  |  | 1/h | exact (1) | T3:row7:col2, T3:row7:col3 |
| T1/2 K01 (h) | `Q57` · t1/2z | 1.708 | h | 6149 | s | h | llm_confirmed (0.6) | T3:row15:col2, T3:row15:col3 |
| T1/2 4-AA (h) | `Q57` · t1/2z | 2.14 | h | 7704 | s | h | llm_confirmed (0.6) | T3:row17:col2, T3:row17:col3 |
| T1/2 4-AAA (h) | `Q57` · t1/2z | 1.00 | h | 3600 | s | h | llm_confirmed (0.6) | T3:row18:col2, T3:row18:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V2/F (L) | Q290 | exact |
| T1/2 4-FAA (h) | Q57 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'k12 (1/h)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k14 (1/h)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k14 (1/h)', value '1.334') — already have one for this compound
- unit_dimension_mismatch: 'k23 (1/h)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k24 (1/h)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k24 (1/h)', value '2.275') — already have one for this compound
- dropped duplicate Q57 ('T1/2 4-MAA (h)', value None) — already have one for this compound
- dropped PD-category row 'EC50 (µM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row20:col3'])
- dropped PD-category row 'E0 b' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row22:col3'])
- dropped unlinked row (NIL): 'Emax b' — extend the ontology if this is a real PK parameter (source ['T3:row23:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=4-methylaminoantipyrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'naproxen (n = 7)' subgroup of Blaser_2021 (paper reports 2 populations: metamizole (n = 8), naproxen (n = 7))
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 27 linked by role; re-tagged parent→4-methylaminoantipyrine ×46, naproxen→4-methylaminoantipyrine ×13, parent→4-aminoantipyrine ×5, naproxen→4-aminoantipyrine ×7, parent→4-acetylaminoantipyrine ×3, parent→4-formylaminoantipyrine ×3, naproxen→4-acetylaminoantipyrine ×2, naproxen→4-formylaminoantipyrine ×1
- molar mass: none of 1 PubChem candidate(s) is '4-methylaminoantipyrine' (LLM) — left in mass units
- molar mass: none found for '4-methylaminoantipyrine' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '4-methylaminoantipyrine', not metamizole_sodium — the review values are the parent's

**Extraction notes:**
- table T3: unparsed_numeric_cell
- companion parameter table 2 transcribed (38 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T3:row2:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T3:row6:col2'] |
| C5_dimension_Q30 | fail | 1 / [time] | 1/h | ['T3:row3:col2', 'T3:row3:col3'] |
| C5_dimension_Q30 | fail | 1 / [time] | 1/h | ['T3:row7:col2', 'T3:row7:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['T3:row5:col2', 'T3:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T3:row1:col2', 'T3:row1:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['T3:row15:col2', 'T3:row15:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['T3:row17:col2', 'T3:row17:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['T3:row18:col2', 'T3:row18:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['T3:row19:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none'] |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 3.27 L | ['T3:row2:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetamizole_sodium%5D%20MetamizoleSodium_Blaser2021_reference&body=Drug%3A%20metamizole_sodium%0ARecord%3A%20MetamizoleSodium_Blaser2021_reference%0APaper%3A%20Blaser_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metamizole_sodium/MetamizoleSodium_Blaser2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 11:57 UTC</sub>
