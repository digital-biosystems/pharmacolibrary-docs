<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Styrene&quot;,&quot;href&quot;:&quot;drugs/toxin_styrene/&quot;},{&quot;label&quot;:&quot;Filser_2016 \u00b7 present_work_fig_8&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Styrene — `Styrene_Filser2016_present_work_fig_8`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span>

> The record was rejected for lacking kinetic parameters, listing only a Styrene-7,8-oxide AUC of 4.11 mg*h/ml, a unit that could not be converted to SI.

<div class="pk-model-meta" hidden drug="Styrene" model-id="Styrene_Filser2016_present_work_fig_8" status="rejected" stale="false" population="Rats (F344, male and female) and Humans (workers)" measured-compound="Styrene-7,8-oxide" parameterization="mechanistic" topology="1C"></div>

## Citation
Filser JG, Gelbke HP. An evaluation of concentrations of styrene-7,8-oxide in rats and humans resulting from exposure to styrene or styrene-7,8-oxide and potential genotoxicity. Toxicology letters 247:11–28 (2016).
  ·  DOI: [10.1016/j.toxlet.2016.02.001](https://doi.org/10.1016/j.toxlet.2016.02.001)

## Population and dosing

**Population:** Rats (F344, male and female) and Humans (workers) · condition Inhalation and oral exposure · age group adult.

**Dosing:** 280, 2800, 7000, 14000, 28000 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Styrene, measured Styrene-7,8-oxide.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.90).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC SO per day of exposure [mg Â h/ml] | AUC | 4.11 | mg*h/ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected for lacking kinetic parameters, listing only a Styrene-7,8-oxide AUC of 4.11 mg*h/ml, a unit that could not be converted to SI.**

The extracted data contains no rate constants, volumes, or clearances, identifying the source as an exposure-outcome study rather than a mechanistic pharmacokinetic model. The sole quantitative value is a Styrene-7,8-oxide AUC of 4.11 mg*h/ml. This specific unit could not be transformed into standard SI units, preventing the calculation of consistent mass and volume terms for modeling. Extracted — Styrene-7,8-oxide: AUC 4.11 mg*h/ml.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| AUC SO per day of exposure [mg Â h/ml] | `Q88` · AUC | 4.11 | mg*h/ml | mg*h/ml | llm_confirmed (0.6) | tab_2:row18:col5, tab_2:row20:col5, tab_2:row21:col5, tab_2:row24:col5, tab_2:row25:col5, tab_2:row30:col5, tab_2:row31:col5, tab_2:row32:col5, tab_2:row35:col5, tab_2:row36:col5, tab_2:row37:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Exposure | Q88 | exact |

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Exposure'; source reconciliation required
- table representations disagree for 'Daily dose of ST c [mg/kg BW] C maxSO [mg/'; source reconciliation required
- table representations disagree for 'AUC SO per day of exposure [mg Â h/ml]'; source reconciliation required
- dropped unlinked row (NIL): 'Daily dose of ST c [mg/kg BW] C maxSO [mg/' — extend the ontology if this is a real PK parameter (source ['tab_2:row18:col3', 'tab_2:row18:col4', 'tab_2:row20:col3', 'tab_2:row20:col4', 'tab_2:row21:col3', 'tab_2:row21:col4', 'tab_2:row24:col4', 'tab_2:row25:col4', 'tab_2:row30:col3', 'tab_2:row30:col4', 'tab_2:row31:col3', 'tab_2:row31:col4', 'tab_2:row32:col3', 'tab_2:row32:col4', 'tab_2:row35:col4', 'tab_2:row36:col4', 'tab_2:row37:col4'])
- dropped value-less row: 'a'
- dropped value-less row: 'b'
- dropped value-less row: 'c'
- implicit units: 'AUC SO per day of exposure [mg Â h/ml]' → mg*h/ml (from the paper text: "The parameter name in the input explicitly states the unit '[mg Â h/ml]', where 'Â' is a common PDF encoding artifact fo")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Styrene-7,8-oxide
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'The liver compartment contains a sub-compartment for SO, the endoplasmic reticulum.')
- status held at "Needs review" — not promoted
- population split: 'present work (fig. 8)' subgroup of Filser_2016 (paper reports 10 populations: gaté et al. (2012) (fig. 5), gaté et al. (2012) (fig. 6), gaté et al. (2012) (fig. 7), kligerman et al. (1993) (fig. 4) rat, present work (fig. 10), present work (fig. 11), present work (fig. 8), present work (fig. 9), present work (no figure), sinha et al. (1983) (no figure) rat)
- row roles (LLM): model_class=pbpk; 6/6 row label(s) assigned, 0 linked by role; re-tagged parent→Styrene-7,8-oxide ×21
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table tab_2: unparsed_numeric_cell
- transposed table tab_2: logical view retains original source coordinates
- table tab_2: representations disagree; selected evidence retained, not merged

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_2:row18:col5', 'tab_2:row20:col5', 'tab_2:row21:col5', 'tab_2:row24:col5', 'tab_2:row25:col5', 'tab_2:row30:col5', 'tab_2:row31:col5', 'tab_2:row32:col5', 'tab_2:row35:col5', 'tab_2:row36:col5', 'tab_2:row37:col5'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bstyrene%5D%20Styrene_Filser2016_present_work_fig_8&body=Drug%3A%20styrene%0ARecord%3A%20Styrene_Filser2016_present_work_fig_8%0APaper%3A%20Filser_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_styrene/Styrene_Filser2016_present_work_fig_8%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 02:42 UTC</sub>
