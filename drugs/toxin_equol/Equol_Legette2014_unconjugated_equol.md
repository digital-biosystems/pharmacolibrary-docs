<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Equol&quot;,&quot;href&quot;:&quot;drugs/toxin_equol/&quot;},{&quot;label&quot;:&quot;Legette_2014 \u00b7 unconjugated_equol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Equol_Setchell2009_reference&quot;,&quot;label&quot;:&quot;Setchell_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_equol/Equol_Setchell2009_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Equol_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_equol/Equol_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Equol — `Equol_Legette2014_unconjugated_equol`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The record was rejected because elimination rate constants were assigned hours units instead of reciprocal hours, creating a fundamental dimension mismatch in the model structure.

<div class="pk-model-meta" hidden drug="Equol" model-id="Equol_Legette2014_unconjugated_equol" status="rejected" stale="false" population="ovariectomized Sprague-Dawley rats" measured-compound="Equol" parameterization="apparent" topology="general_linear"></div>

## Citation
Legette LL, Prasain J, King J, Arabshahi A, Barnes S, Weaver CM. Pharmacokinetics of equol, a soy isoflavone metabolite, changes with the form of equol (dietary versus intestinal production) in ovariectomized rats. Journal of agricultural and food chemistry 62(6):1294–1300 (2014).
  ·  DOI: [10.1021/jf400097m](https://doi.org/10.1021/jf400097m)

## Population and dosing

**Population:** ovariectomized Sprague-Dawley rats · condition acute oral exposure · age group adult · n = 14.

**Dosing:** 2, 10 mg/mL, oral, single.

**Dosed compound ≠ measured compound:** dosed daidzein and racemic equol, measured Equol.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| HL (h) | kel | 9.41 | h |
| tmax (h) | kabs | 4.42 | h |
| Cmax (nmol/L) | Cmax | 9.46 | nmol/L |
| AUC0–24 (nmol/L·*h) | AUCt | 96.0 | nmol/L·*h |
| CL/F (L/h) | CL/F | 179 | L/h |
| Vd/F | V/F | 396.99 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because elimination rate constants were assigned hours units instead of reciprocal hours, creating a fundamental dimension mismatch in the model structure.**

The terminal elimination rate constant for equol glucuronides is listed as 9.41 h, but an elimination rate constant must have dimensions of inverse time (1/h). Similarly, the absorption rate constant is reported as 4.42 h, which conflicts with the required inverse time dimension. The concentration parameter Cmax, given as 9.46 nmol/L, also presents a dimension conflict as the model expects mass per volume rather than substance per volume. Additionally, the metabolites equol glucuronides and equol monosulfate are unreachable orphans with no path from the dose. Extracted — Equol glucuronides: kel 9.41 h, kabs 4.42 h, Cmax 9.46 nmol/L, AUCt 96 nmol/L·*h, CL/F 179 L/h; equol: V/F 397 L.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| HL (h) | `Q47` · kel | 9.41 | h |  |  | h | exact (1) | tbl3:row2:col1 |
| tmax (h) | `Q49` · kabs | 4.42 | h |  |  | h | exact (1) | tbl3:row2:col2, Legette_2014_table_2:row1:col1 |
| Cmax (nmol/L) | `Q32` · Cmax | 9.46 | nmol/L |  |  | nM/l | exact (1) | tbl3:row2:col3 |
| AUC0–24 (nmol/L·*h) | `Q19` · AUCt | 96.0 | nmol/L·*h |  |  | nM/(h·l) | llm (0.6) | tbl3:row2:col4 |
| CL/F (L/h) | `Q27` · CL/F | 179 | L/h | 4.972e-05 | m3/s | l/h | exact (1) | tbl3:row2:col5 |
| Vd/F | `Q76` · V/F | 396.99 | L | 0.397 | m3 | L | review_gapfill (0.7) | Kim_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'HL (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'tmax (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Cmax (nmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0–24 (nmol/L·*h)' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Cmax (nM)' → Q32 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q32 ('Cmax (nM)', value '1.21') — already have one for this compound
- unit_dimension_mismatch: 'AUC0–24 (nM·h)' → Q19 (unit '[length] * [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('AUC0–24 (nM·h)', value '9.34') — already have one for this compound
- dropped value-less row: 'a'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Equol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'unconjugated equol' subgroup of Legette_2014 (paper reports 4 populations: equol glucuronides, equol monosulfate, total equol, unconjugated equol)
- row roles (LLM): model_class=noncompartmental; 9/9 row label(s) assigned, 19 linked by role; re-tagged parent→Equol glucuronides ×17, Equol monosulfate→Equol glucuronides ×9
- molar mass: no plausible PubChem entry for 'Equol glucuronides' ('equol glucuronide') — left in mass units
- molar mass: no plausible PubChem entry for 'Equol monosulfate' ('equol monosulfate') — left in mass units
- molar mass: none found for 'Equol glucuronides' — its concentrations stay mass-only
- molar mass: none found for 'Equol monosulfate' — its concentrations stay mass-only
- gap-filled Q76 (V/F) from Kim_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tbl3: ambiguous_numeric_format
- transposed table tbl3: logical view retains original source coordinates
- transposed table Legette_2014_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (12 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | nmol/L·*h ([substance] * [time] / [length] ** 3) | ['tbl3:row2:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tbl3:row2:col5'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | nmol/L ([substance] / [length] ** 3) | ['tbl3:row2:col3'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['tbl3:row2:col1'] |
| C5_dimension_Q49 | fail | 1 / [time] | h ([time]) | ['tbl3:row2:col2', 'Legette_2014_table_2:row1:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kim_2022:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown', 'unknown'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 179 L/h | ['tbl3:row2:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 397 L | ['Kim_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bequol%5D%20Equol_Legette2014_unconjugated_equol&body=Drug%3A%20equol%0ARecord%3A%20Equol_Legette2014_unconjugated_equol%0APaper%3A%20Legette_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_equol/Equol_Legette2014_unconjugated_equol%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 05:08 UTC</sub>
