<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Quinone&quot;,&quot;href&quot;:&quot;drugs/toxin_quinone/&quot;},{&quot;label&quot;:&quot;Fasinu_2022 \u00b7 rpq&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinone_Silva2024_reference&quot;,&quot;label&quot;:&quot;Silva_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quinone/Quinone_Silva2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinone_Fasinu2022_spq&quot;,&quot;label&quot;:&quot;Fasinu_2022_spq&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quinone/Quinone_Fasinu2022_spq.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Quinone — `Quinone_Fasinu2022_rpq`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> Primaquine lag time's hour unit caused a dimension mismatch with mass/volume, and the unit's conversion failure prevented SI assignment, leading to rejection.

<div class="pk-model-meta" hidden drug="Quinone" model-id="Quinone_Fasinu2022_rpq" status="rejected" stale="false" population="male Albino ND4 Swiss mice" measured-compound="Primaquine" parameterization="mechanistic" topology="retention"></div>

## Citation
Fasinu PS, Chaurasiya ND, Dhammika Nanayakkara NP, Wang YH, Bandara Herath HMT, Avula B et al. Comparative pharmacokinetics and tissue distribution of primaquine enantiomers in mice. Malaria journal 21(1):33 (2022).
  ·  DOI: [10.1186/s12936-022-04054-4](https://doi.org/10.1186/s12936-022-04054-4)

## Population and dosing

**Population:** male Albino ND4 Swiss mice · condition healthy · age group adult.

**Dosing:** 3150 mg, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Lag time (h) | tlag | 0 | h |
| Cmax (µg/mL) | Cmax | 0.72 | µg/mL |
| Tmax (h) | tmax | 0.5 | h |
| Tlast (h) | Ct | 2 | h |
| AUC0-last (µg h/mL) | AUClast | 0.64 | µg h/mL |
| T1/2 (h) | t1/2z | 0.45 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Primaquine lag time's hour unit caused a dimension mismatch with mass/volume, and the unit's conversion failure prevented SI assignment, leading to rejection.**

The Primaquine absorption lag time is recorded in hours, which conflicts with the mass per volume dimension required for that structural parameter. The reported unit for this parameter was not present in the standard conversion set, preventing the assignment of an SI value. Consequently, the model could not be built due to these dimensional inconsistencies and missing conversion data. Extracted — quinone: tlag 0 h, Cmax 0.72 µg/mL, tmax 0.5 h, Ct 2 h, AUClast 0.64 µg h/mL, t1/2z 0.45 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Lag time (h) | `Q83` · tlag | 0 | h | 0 | s | h | exact (1) | Tab1:row1:col2 |
| Cmax (µg/mL) | `Q32` · Cmax | 0.72 | µg/mL | 0.00072 | kg/m3 | µg/ml | exact (1) | Tab1:row2:col2 |
| Tmax (h) | `Q56` · tmax | 0.5 | h | 1800 | s | h | exact (1) | Tab1:row3:col2 |
| Tlast (h) | `Q75` · Ct | 2 | h |  |  | h | llm (0.6) | Tab1:row4:col2 |
| AUC0-last (µg h/mL) | `Q74` · AUClast | 0.64 | µg h/mL | 2.304 | kg*s/m3 | (h·µg)/ml | exact (1) | Tab1:row5:col2 |
| T1/2 (h) | `Q57` · t1/2z | 0.45 | h | 1620 | s | h | half_life_rule (0.95) | Tab1:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Tlast (h)' → Q75 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Primaquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'rpq' subgroup of Fasinu_2022 (paper reports 2 populations: rpq, spq)
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record measures 'Primaquine', not quinone — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab1:row2:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab1:row3:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab1:row6:col2'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab1:row5:col2'] |
| C5_dimension_Q75 | fail | [mass] / [length] ** 3 | h ([time]) | ['Tab1:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab1:row1:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinone%5D%20Quinone_Fasinu2022_rpq&body=Drug%3A%20quinone%0ARecord%3A%20Quinone_Fasinu2022_rpq%0APaper%3A%20Fasinu_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_quinone/Quinone_Fasinu2022_rpq%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 00:37 UTC</sub>
