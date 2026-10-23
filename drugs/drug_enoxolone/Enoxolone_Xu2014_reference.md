<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;enoxolone&quot;,&quot;href&quot;:&quot;drugs/drug_enoxolone/&quot;},{&quot;label&quot;:&quot;Xu_2014 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enoxolone — `Enoxolone_Xu2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span>

> The record was rejected for an unreachable or orphan metabolite; 3MGA is listed with formation clearance CLfm 737 L/h, but the orphan is not identified.

<div class="pk-model-meta" hidden drug="enoxolone" model-id="Enoxolone_Xu2014_reference" status="rejected" stale="false" population="virtual elderly population" measured-compound="glycyrrhetic acid (GA; enoxolone)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Xu R, Liu X, Yang J. A semi-physiologically based pharmacokinetic pharmacodynamic model for glycyrrhizin-induced pseudoaldosteronism and prediction of the dose limit causing hypokalemia in a virtual elderly population. PloS one 9(12):e114049 (2014).
  ·  DOI: [10.1371/journal.pone.0114049](https://doi.org/10.1371/journal.pone.0114049)

## Population and dosing

**Population:** virtual elderly population · condition glycyrrhizin-induced pseudoaldosteronism · age group elderly.

**Dosing:** 101 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed glycyrrhizin (GL) and glycyrrhetic acid (GA; enoxolone), measured glycyrrhetic acid (GA; enoxolone).

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.70).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K12_r | k12 | 20 | 1/h |
| K21_r | k21 | 0.46 | 1/h |
| fu | fu | 0.006 |  |
| fut | fu_tissue | 0.012 |  |
| Vmax | Vmax | 9.0 |  |
| Km | Km | 0.0014 |  |
| CLmet | CLfm | 737 | L/h |
| Pk | Kp | 0.14 |  |
| Pg | equation variable | 0.015 |  |
| KHce | kfm | 0.29 | 1/h |
| CLup | CL | 431 | L/h |
| Kabs,si | kabs | 0.13 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected for an unreachable or orphan metabolite; 3MGA is listed with formation clearance CLfm 737 L/h, but the orphan is not identified.**

All three listed metabolites have zero compartments. The record lists glycyrrhizin hydrolysis to 3MGA and reciprocal metabolism links between glycyrrhetic acid and GAM, but the rejection finding does not specify which metabolite or compartment was unreachable or orphaned. Extracted — glycyrrhizin (GL): k12 20 1/h, k21 0.46 1/h, Vmax 9, Km 0.0014; enoxolone: fu 0.006, fu_tissue 0.012; 3MGA: CLfm 737 L/h; glycyrrhetic acid (GA; enoxolone): Kp 0.14, kfm 0.29 1/h, CL 431 L/h, kabs 0.13 1/h.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K12_r | `Q301` · k12 | 20 | 1/h | 0.005556 | 1/s | 1/h | llm (0.6) | Xu_2014_table_3:row0:col1, Xu_2014_table_4:row0:col1 |
| K21_r | `Q302` · k21 | 0.46 | 1/h | 0.0001278 | 1/s | 1/h | llm (0.6) | Xu_2014_table_3:row1:col1, Xu_2014_table_4:row1:col1 |
| fu | `Q46` · fu | 0.006 |  |  |  |  | exact (1) | Xu_2014_table_3:row2:col1, Xu_2014_table_4:row2:col1 |
| fut | `Q413` · fu_tissue | 0.012 |  |  |  |  | llm (0.6) | Xu_2014_table_3:row3:col1, Xu_2014_table_4:row3:col1 |
| Vmax | `Q66` · Vmax | 9.0 |  |  |  |  | special_case (0.95) | Xu_2014_table_3:row5:col1 |
| Km | `Q1` · Km | 0.0014 |  |  |  |  | exact (1) | Xu_2014_table_3:row6:col1 |
| CLmet | `Q370` · CLfm | 737 | L/h | 0.0002047 | m3/s | L/h | exact (1) | Xu_2014_table_3:row9:col1, Xu_2014_table_4:row7:col1 |
| Pk | `Q410` · Kp | 0.14 |  |  |  |  | llm (0.6) | Xu_2014_table_3:row11:col1, Xu_2014_table_4:row9:col1 |
| Pg | `Q900` · equation variable | 0.015 |  |  |  |  | llm (0.6) | Xu_2014_table_3:row12:col1, Xu_2014_table_4:row10:col1 |
| KHce | `Q305` · kfm | 0.29 | 1/h | 8.056e-05 | 1/s | 1/h | exact (1) | Xu_2014_table_3:row15:col1 |
| CLup | `Q22` · CL | 431 | L/h | 0.0001197 | m3/s | L/h | exact (1) | Xu_2014_table_4:row5:col1 |
| Kabs,si | `Q49` · kabs | 0.13 | 1/h | 3.611e-05 | 1/s | 1/h | exact (1) | Xu_2014_table_4:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'gl' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Hematocrit' — extend the ontology if this is a real PK parameter (source ['Xu_2014_table_3:row4:col1', 'Xu_2014_table_4:row4:col1'])
- dropped duplicate Q66 ('VmaxB', value '4.7') — already have one for this compound
- dropped duplicate Q1 ('KmB', value '0.00037') — already have one for this compound
- dropped unlinked row (NIL): 'PSeff' — extend the ontology if this is a real PK parameter (source ['Xu_2014_table_3:row10:col1', 'Xu_2014_table_4:row8:col1'])
- dropped duplicate Q305 ('KHco', value '0.11') — already have one for this compound
- dropped duplicate Q22 ('CLb', value '454.0') — already have one for this compound
- implicit units: 'K12_r' → 1/h (from the popPK convention: 'K12_r is a first-order transfer rate constant; first-order rate constants are conventionally expressed in 1/h.')
- implicit units: 'K21_r' → 1/h (from the popPK convention: 'K21_r is a first-order transfer rate constant; first-order rate constants are conventionally expressed in 1/h.')
- implicit units: 'Vmax' — the LLM proposed 'µmol/h', whose dimension does not fit Q66; left unset
- implicit units: 'Km' — the LLM proposed 'µmol/L', whose dimension does not fit Q1; left unset
- implicit units: 'CLmet' → L/h (from the popPK convention: 'CLmet is a formation clearance; clearances are conventionally expressed in L/h.')
- implicit units: 'KHce' → 1/h (from the popPK convention: 'KHce is identified as a first-order rate constant governing metabolite formation; such rate constants are conventionally')
- implicit units: 'CLup' → L/h (from the paper text: 'The paper refers to “hepatic sinusoidal uptake clearance (20000 l/h)” and states that “CLup is proportional to the Vmax ')
- implicit units: 'Kabs,si' → 1/h (from the popPK convention: 'Kabs,si is an absorption rate constant; first-order absorption rate constants are conventionally expressed in 1/h.')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLup)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glycyrrhetic acid (GA; enoxolone)
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=pbpk; 19/19 row label(s) assigned, 19 linked by role; re-tagged parent→glycyrrhizin (GL) ×16, parent→3MGA ×4, parent→glycyrrhetic acid (GA; enoxolone) ×27
- molar mass: no plausible PubChem entry for 'GAM (phase II metabolites of GA)' ('phase II metabolites of glycyrrhetic acid') — left in mass units
- molar mass: none found for 'GAM (phase II metabolites of GA)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3, 4
- unparsed cell Xu_2014_table_3:row2:col4 = '[19]; [49]'
- unparsed cell Xu_2014_table_3:row4:col4 = '[19]'
- unparsed cell Xu_2014_table_3:row6:col4 = '[22]; fitted'
- unparsed cell Xu_2014_table_3:row10:col4 = '[22]; see text'
- unparsed cell Xu_2014_table_3:row11:col4 = '[18]'
- unparsed cell Xu_2014_table_3:row12:col4 = '[18]; see text'
- unparsed cell Xu_2014_table_3:row13:col4 = '[24]; fitted'
- unparsed cell Xu_2014_table_3:row14:col4 = '[24]'
- unparsed cell Xu_2014_table_3:row15:col4 = '[23]; see text'
- unparsed cell Xu_2014_table_3:row16:col4 = '[23]; see text'
- unparsed cell Xu_2014_table_4:row2:col4 = '[19]; [49]'
- unparsed cell Xu_2014_table_4:row4:col4 = '[19]'
- unparsed cell Xu_2014_table_4:row11:col4 = '[19]; fitted'
- unparsed cell Xu_2014_table_4:row13:col4 = '[32]'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Xu_2014_table_4:row5:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Xu_2014_table_3:row0:col1', 'Xu_2014_table_4:row0:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Xu_2014_table_3:row1:col1', 'Xu_2014_table_4:row1:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Xu_2014_table_3:row15:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Xu_2014_table_3:row9:col1', 'Xu_2014_table_4:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Xu_2014_table_4:row11:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['Xu_2014_table_3:row6:col1'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 |  | ['Xu_2014_table_3:row5:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 431 | ['Xu_2014_table_4:row5:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLmet'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 431 L/h | ['Xu_2014_table_4:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benoxolone%5D%20Enoxolone_Xu2014_reference&body=Drug%3A%20enoxolone%0ARecord%3A%20Enoxolone_Xu2014_reference%0APaper%3A%20Xu_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_enoxolone/Enoxolone_Xu2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 13:37 UTC</sub>
