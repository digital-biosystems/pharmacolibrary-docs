<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Isoniazid&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/&quot;},{&quot;label&quot;:&quot;Kengo_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_Courtney2026_reference&quot;,&quot;label&quot;:&quot;Courtney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Courtney2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Amaeze2023_reference&quot;,&quot;label&quot;:&quot;Amaeze_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Amaeze2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_non_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoniazid — `Isoniazid_Kengo2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Linezolid and Levofloxacin absorption rate constants have invalid volume-based units, while Isoniazid dialysate flow lacks a convertible unit.

<div class="pk-model-meta" hidden drug="Isoniazid" model-id="Isoniazid_Kengo2024_reference" status="rejected" stale="false" population="Newly diagnosed adults with DR-TB" measured-compound="Isoniazid" parameterization="mechanistic" topology="2C"></div>

## Citation
Kengo A, Nabeemeeah F, Denti P, Sabet R, Okyere-Manu G, Abraham P et al. Assessing potential drug-drug interactions between clofazimine and other frequently used agents to treat drug-resistant tuberculosis. Antimicrobial agents and chemotherapy 68(5):e0158323 (2024).
  ·  DOI: [10.1128/aac.01583-23](https://doi.org/10.1128/aac.01583-23)

## Population and dosing

**Population:** Newly diagnosed adults with DR-TB · condition Chronic dietary exposure · age group adult · n = },.

**Dosing:** 100, 450, 600, 750, 1000 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 19 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Clearance (L/h)a | CL | 3.04 | L/h | 16.2 (None% RSE) |
| Clearance (L/h)a | CL | 6.81 | L/h |  |
| Intrinsic clearance (slow acetylators) (L/h)a | CL | 12.2 | L/h |  |
| Volume of distribution (central compartment) (L)a | V1 | 57.0 | L |  |
| Volume of distribution (central compartment) (L)a | V1 | 38.7 | L |  |
| Volume of distribution (central compartment) (L)a | V1 | 98.5 | L |  |
| Inter-compartmental clearance (L/h) | Q | 1.70 | L/h |  |
| Volume of distribution (peripheral compartment) (L)a | V2 | 42.4 | L |  |
| Bioavailability, F (fraction)b | Fab | 1 |  |  |
| Bioavailability, F (fraction)b | Fab | 1 |  |  |
| Absorption rate constant, ka (/L) | kabs | 1.14 | /L |  |
| Absorption rate constant, ka (/L) | kabs | 2.05 | /L |  |
| Mean absorption transit time, MTT (h) | MTT | 0.928 | h |  |
| Mean absorption transit time, MTT (h) | MTT | 1.32 | h |  |
| Transit compartments, NN (n) | n_transit | 12.6 | n |  |
| Transit compartments, NN (n) | n_transit | 15.7 | n |  |
| Hepatic blood flow rate, QH (L/h)a,f | QH | 72.4 | L/h |  |
| Unbound fraction, fu (%)f | fu | 95 |  |  |
| BVV in clearance | Qd | 18.4 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Linezolid and Levofloxacin absorption rate constants have invalid volume-based units, while Isoniazid dialysate flow lacks a convertible unit.**

The absorption rate constants for Linezolid (1.14) and Levofloxacin (2.05) are reported in per-liter units, which is dimensionally inconsistent for a first-order rate constant requiring inverse time. The record was further held back because the unit for the dialysate flow rate of Isoniazid (18.4) could not be converted to standard SI units. Extracted — Linezolid: CL 3.04 L/h, V1 38.7 L, Fab 1, kabs 1.14 /L, MTT 0.928 h, n_transit 12.6 n; Levofloxacin: CL 6.81 L/h, V1 98.5 L, Fab 1, kabs 2.05 /L, MTT 1.32 h, n_transit 15.7 n; isoniazid: CL 12.2 L/h, V1 57 L, Q 1.7 L/h, V2 42.4 L, QH 72.4 L/h, fu 95, Qd 18.4.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Clearance (L/h)a | `Q22` · CL | 3.04 | L/h | 8.444e-07 | m3/s | l/h | llm_confirmed (0.6) | T2:row2:col2 | 16.2 (None% RSE) |
| Clearance (L/h)a | `Q22` · CL | 6.81 | L/h | 1.892e-06 | m3/s | l/h | llm_confirmed (0.6) | T2:row2:col3 |  |
| Intrinsic clearance (slow acetylators) (L/h)a | `Q22` · CL | 12.2 | L/h | 3.389e-06 | m3/s | l/h | boundary_llm_dim_refused (0.8) | T2:row3:col1 |  |
| Volume of distribution (central compartment) (L)a | `Q63` · V1 | 57.0 | L | 0.057 | m3 | l | boundary_compartment (0.9) | T2:row6:col1 |  |
| Volume of distribution (central compartment) (L)a | `Q63` · V1 | 38.7 | L | 0.0387 | m3 | l | boundary_compartment (0.9) | T2:row6:col2 |  |
| Volume of distribution (central compartment) (L)a | `Q63` · V1 | 98.5 | L | 0.0985 | m3 | l | boundary_compartment (0.9) | T2:row6:col3 |  |
| Inter-compartmental clearance (L/h) | `Q30` · Q | 1.70 | L/h | 4.722e-07 | m3/s | l/h | llm_confirmed (0.6) | T2:row7:col1 |  |
| Volume of distribution (peripheral compartment) (L)a | `Q64` · V2 | 42.4 | L | 0.0424 | m3 | l | boundary_compartment (0.9) | T2:row8:col1 |  |
| Bioavailability, F (fraction)b | `Q40` · Fab | 1 |  |  |  |  | llm_confirmed (0.6) | T2:row9:col2 |  |
| Bioavailability, F (fraction)b | `Q40` · Fab | 1 |  |  |  |  | llm_confirmed (0.6) | T2:row9:col3 |  |
| Absorption rate constant, ka (/L) | `Q49` · kabs | 1.14 | /L |  |  | 1/l | llm_confirmed (0.6) | T2:row10:col2 |  |
| Absorption rate constant, ka (/L) | `Q49` · kabs | 2.05 | /L |  |  | 1/l | llm_confirmed (0.6) | T2:row10:col3 |  |
| Mean absorption transit time, MTT (h) | `Q81` · MTT | 0.928 | h | 3341 | s | h | llm_corrected (0.6) | T2:row11:col2 |  |
| Mean absorption transit time, MTT (h) | `Q81` · MTT | 1.32 | h | 4752 | s | h | llm_corrected (0.6) | T2:row11:col3 |  |
| Transit compartments, NN (n) | `Q311` · n_transit | 12.6 | n |  |  | n | llm_corrected (0.6) | T2:row12:col2 |  |
| Transit compartments, NN (n) | `Q311` · n_transit | 15.7 | n |  |  | n | llm_corrected (0.6) | T2:row12:col3 |  |
| Hepatic blood flow rate, QH (L/h)a,f | `Q369` · QH | 72.4 | L/h | 2.011e-05 | m3/s | l/h | llm_confirmed (0.6) | T2:row13:col1 |  |
| Unbound fraction, fu (%)f | `Q46` · fu | 95 |  | 0.95 |  |  | llm_confirmed (0.6) | T2:row14:col1 |  |
| BVV in clearance | `Q364` · Qd | 18.4 |  |  |  |  | llm_corrected (0.6) | T2:row22:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('Intrinsic clearance (intermediate acetylators) (L/h)a', value '24.9') — already have one for this compound
- dropped duplicate Q22 ('Intrinsic clearance (rapid acetylators) (L/h)a', value '46.7') — already have one for this compound
- unit_dimension_mismatch: 'Absorption rate constant, ka (/L)' → Q49 (unit '1 / [length] ** 3' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'n' (n_transit)
- 'Unbound fraction, fu (%)f' → Q46: printed without a unit and above 1 — read as a percentage
- dropped 'Effect of CLCR (+10 mL/min change) on CL (%)' → Q22: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a clearance — the row is a variability or a ratio, not the estimate
- dropped 'Effect of clofazimine on clearance (%)' → Q22 = -14.8: a clearance of -14.8 is not a parameter value (source ['T2:row17:col3'])
- dropped duplicate Q22 ('BVV in clearance', value '33.3') — already have one for this compound
- dropped duplicate Q22 ('BVV in clearance', value '17.0') — already have one for this compound
- implicit units: 'BVV in clearance' — the LLM proposed 'convention', whose dimension does not fit Q364; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Isoniazid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T2: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 19 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row2:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row2:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row7:col1'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] |  | ['T2:row13:col1'] |
| C5_dimension_Q49 | fail | 1 / [time] | /L (1 / [length] ** 3) | ['T2:row10:col2'] |
| C5_dimension_Q49 | fail | 1 / [time] | /L (1 / [length] ** 3) | ['T2:row10:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row6:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row8:col1'] |
| C5_dimension_Q81 | pass | [time] |  | ['T2:row11:col2'] |
| C5_dimension_Q81 | pass | [time] |  | ['T2:row11:col3'] |
| C5_unit_missing_Q364 | fail | [length] ** 3 / [time] |  | ['T2:row22:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.04 L/h | ['T2:row2:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.81 L/h | ['T2:row2:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.2 L/h | ['T2:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 57 L | ['T2:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 38.7 L | ['T2:row6:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 98.5 L | ['T2:row6:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 42.4 L | ['T2:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoniazid%5D%20Isoniazid_Kengo2024_reference&body=Drug%3A%20isoniazid%0ARecord%3A%20Isoniazid_Kengo2024_reference%0APaper%3A%20Kengo_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoniazid/Isoniazid_Kengo2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:04 UTC</sub>
