<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;medroxyprogesterone&quot;,&quot;href&quot;:&quot;drugs/drug_medroxyprogesterone/&quot;},{&quot;label&quot;:&quot;Engel_2026 \u00b7 cab_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Medroxyprogesterone_Francis2021_reference&quot;,&quot;label&quot;:&quot;Francis_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# medroxyprogesterone — `Medroxyprogesterone_Engel2026_cab_estimates`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> Medroxyprogesterone acetate's elimination rate constant of 11 h−1 was rejected because its unit could not be converted to standard SI units.

<div class="pk-model-meta" hidden drug="medroxyprogesterone" model-id="Medroxyprogesterone_Engel2026_cab_estimates" status="rejected" stale="false" population="female BALB/c mice" measured-compound="medroxyprogesterone acetate, cabotegravir" parameterization="mechanistic" topology="1C"></div>

## Citation
Engel N, Oliveira D, Sykes C, Schauer AP, King JL, Le T et al. Intravenous and Subcutaneous Pharmacokinetic Modeling to Support the Development of Long-Acting Multipurpose Prevention Technology for HIV and Pregnancy. Biomedicines 14(4) (2026).
  ·  DOI: [10.3390/biomedicines14040873](https://doi.org/10.3390/biomedicines14040873)

## Population and dosing

**Population:** female BALB/c mice · condition healthy.

**Dosing:** 0.06, 0.065, 0.066 mg, mixed, single.

**Dosed compound ≠ measured compound:** dosed cabotegravir, medroxyprogesterone acetate, measured medroxyprogesterone acetate, cabotegravir.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (ng/mL) | equation variable | 29 | ng/mL |
| α (h−1) | λ1 | 5.4 | h−1 |
| β (h−1) | kel | 11 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Medroxyprogesterone acetate's elimination rate constant of 11 h−1 was rejected because its unit could not be converted to standard SI units.**

The record defines the elimination rate constant for the terminal phase as 11 h−1. This unit was unrecognized by the standardization process, preventing the parameter from being expressed in compatible SI units. Consequently, the model failed a dimensional consistency check due to this unconverted value. Extracted — medroxyprogesterone: λ1 5.4 h−1, kel 11 h−1.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (ng/mL) | `Q900` · equation variable | 29 | ng/mL |  |  | ng/ml | llm (0.6) | biomedicines-14-00873-t002:row2:col5, biomedicines-14-00873-t002:row2:col6 |
| α (h−1) | `Q67` · λ1 | 5.4 | h−1 |  |  | 1/h | exact (1) | biomedicines-14-00873-t002:row4:col5, biomedicines-14-00873-t002:row4:col6 |
| β (h−1) | `Q47` · kel | 11 | h−1 | 0.003056 | 1/s | 1/h | exact (1) | biomedicines-14-00873-t002:row5:col5, biomedicines-14-00873-t002:row5:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('B (ng/mL)', value '4.8') — already have one for this compound
- unit_dimension_mismatch: 'α (h−1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=medroxyprogesterone acetate, cabotegravir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'cab estimates' subgroup of Engel_2026 (paper reports 2 populations: cab estimates, mpa estimates)
- molar mass: no plausible PubChem entry for 'medroxyprogesterone acetate, cabotegravir' ('medroxyprogesterone acetate, cabotegravir') — left in mass units
- molar mass: none found for 'medroxyprogesterone acetate, cabotegravir' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell biomedicines-14-00873-t002:row2:col4 = '(1519, 3303)'
- unparsed cell biomedicines-14-00873-t002:row2:col8 = '(6256, 26,985)'
- unparsed cell biomedicines-14-00873-t002:row3:col4 = '(335, 602)'
- unparsed cell biomedicines-14-00873-t002:row3:col8 = '(27,083, 33,328)'
- unparsed cell biomedicines-14-00873-t002:row4:col4 = '(3.85, 13.6)'
- unparsed cell biomedicines-14-00873-t002:row4:col8 = '(4.0, 5.0)'
- unparsed cell biomedicines-14-00873-t002:row5:col4 = '(0.58, 0.75)'
- unparsed cell biomedicines-14-00873-t002:row5:col8 = '(0.040, 0.066)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['biomedicines-14-00873-t002:row5:col5', 'biomedicines-14-00873-t002:row5:col6'] |
| C5_dimension_Q67 | fail | 1 / [time] | h−1 | ['biomedicines-14-00873-t002:row4:col5', 'biomedicines-14-00873-t002:row4:col6'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmedroxyprogesterone%5D%20Medroxyprogesterone_Engel2026_cab_estimates&body=Drug%3A%20medroxyprogesterone%0ARecord%3A%20Medroxyprogesterone_Engel2026_cab_estimates%0APaper%3A%20Engel_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_medroxyprogesterone/Medroxyprogesterone_Engel2026_cab_estimates%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:46 UTC</sub>
