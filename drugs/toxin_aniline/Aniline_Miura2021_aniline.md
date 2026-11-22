<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Aniline&quot;,&quot;href&quot;:&quot;drugs/toxin_aniline/&quot;},{&quot;label&quot;:&quot;Miura_2021 \u00b7 aniline&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Aniline — `Aniline_Miura2021_aniline`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The record is rejected as an exposure-only study lacking kinetic parameters, with a unit that cannot be converted to SI units.

<div class="pk-model-meta" hidden drug="Aniline" model-id="Aniline_Miura2021_aniline" status="rejected" stale="false" population="rats" measured-compound="Aniline" parameterization="mechanistic" topology="1C"></div>

## Citation
Miura T, Kamiya Y, Murayama N, Shimizu M, Yamazaki H. Differences in Pharmacokinetics and Haematotoxicities of Aniline and Its Dimethyl Derivatives Orally Administered in Rats. Biological & pharmaceutical bulletin 44(11):1775–1780 (2021).
  ·  DOI: [10.1248/bpb.b21-00589](https://doi.org/10.1248/bpb.b21-00589)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 1750 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Fraction absorbed × intestinal avail- | Fab | 0.824 |  |
| Volume of systemic circulation V Hepatic clearance CL h (L/h) | CLH | 0.584 | L/h |
| Renal clearance | CLR | 0.063 | L/h |
| C max in plasma | Cmax | 2580 | ng/mL |
| AUC 0-4 in plasma | AUCt | 1960 | ng*h/mL |
| Molecular weight | MW | 93 | g/mol |
| Plasma unbound frac- | fu | 0.539 |  |
| Blood-plasma concen- | Kp | 0.906 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected as an exposure-only study lacking kinetic parameters, with a unit that cannot be converted to SI units.**

The record reports only exposure metrics like Cmax and AUC, missing essential kinetic parameters such as volume of distribution or elimination rate constants. Although clearance values are provided, the absence of distribution parameters prevents full kinetic characterization. Additionally, a reported unit for one parameter could not be converted to standard SI units, blocking model simulation. Extracted — aniline: Fab 0.824, CLH 0.584 L/h, CLR 0.063 L/h, Cmax 2.58e+03 ng/mL, AUCt 1.96e+03 ng*h/mL, MW 93 g/mol, fu 0.539, Kp 0.906.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Fraction absorbed × intestinal avail- | `Q40` · Fab | 0.824 |  | 0.824 |  |  | llm_confirmed (0.6) | tab_1:row3:col2 |
| Volume of systemic circulation V Hepatic clearance CL h (L/h) | `Q25` · CLH | 0.584 | L/h | 1.622e-07 | m3/s | l/h | boundary_llm_dim_refused (0.8) | tab_1:row7:col2 |
| Renal clearance | `Q26` · CLR | 0.063 | L/h | 1.75e-08 | m3/s | L/h | exact (1) | tab_1:row8:col2 |
| C max in plasma | `Q32` · Cmax | 2580 | ng/mL |  |  | ng/mL | llm (0.6) | tab_1:row13:col2 |
| AUC 0-4 in plasma | `Q19` · AUCt | 1960 | ng*h/mL |  |  | ng*h/mL | llm_corrected (0.6) | tab_1:row14:col2 |
| Molecular weight | `Q374` · MW | 93 | g/mol |  |  | g/mol | exact (1) | Miura_2021_table_1:row0:col2, Miura_2021_table_p3_1:row0:col2 |
| Plasma unbound frac- | `Q46` · fu | 0.539 |  | 0.539 |  |  | llm_confirmed (0.6) | Miura_2021_table_1:row5:col2 |
| Blood-plasma concen- | `Q410` · Kp | 0.906 |  |  |  |  | llm (0.6) | Miura_2021_table_1:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Apparent permeability'; source reconciliation required
- table representations disagree for 'Fraction absorbed × intestinal avail-'; source reconciliation required
- table representations disagree for 'Volume of systemic circulation V Hepatic clearance CL h (L/h)'; source reconciliation required
- table representations disagree for 'Renal clearance'; source reconciliation required
- table representations disagree for 'C max in plasma'; source reconciliation required
- table representations disagree for 'AUC 0-4 in plasma'; source reconciliation required
- dropped unlinked row (NIL): 'Apparent permeability' — extend the ontology if this is a real PK parameter (source ['tab_1:row1:col2'])
- dropped unlinked row (NIL): 'Octanol-water partition' — extend the ontology if this is a real PK parameter (source ['Miura_2021_table_1:row1:col2'])
- dropped unlinked row (NIL): 'Acid dissociation con-' — extend the ontology if this is a real PK parameter (source ['Miura_2021_table_1:row3:col2'])
- dropped duplicate Q410 ('Liver-plasma concentra-', value '0.709') — already have one for this compound
- dropped duplicate Q410 ('Octanol–water partition coefficient', value '0.915') — already have one for this compound
- dropped unlinked row (NIL): 'Acid dissociation constant (base)' — extend the ontology if this is a real PK parameter (source ['Miura_2021_table_p3_1:row2:col2'])
- dropped duplicate Q46 ('Plasma unbound fraction', value '0.539') — already have one for this compound
- dropped duplicate Q410 ('Blood–plasma concentration ratio', value '0.906') — already have one for this compound
- dropped duplicate Q410 ('Liver–plasma concentration ratio', value '0.709') — already have one for this compound
- dropped value-less row: 'AUC 0-4'
- dropped value-less row: 'Hepatic intrinsic clearance CL h,int'
- implicit units: 'Renal clearance' → L/h (from the popPK convention: 'The paper provides Hepatic intrinsic clearance CL_h,int in L/h (e.g., 3.43 L/h) and hepatic blood flow Q_h in L/h (0.853')
- implicit units: 'C max in plasma' → ng/mL (from the popPK convention: 'The dose is 25 mg/kg in rats. Typical plasma concentrations (Cmax) for such compounds are in the range of ng/mL or µg/mL')
- implicit units: 'AUC 0-4 in plasma' → ng*h/mL (from the popPK convention: 'AUC0-4 is the area under the concentration-time curve. If Cmax is in ng/mL and time is in h (as indicated by the 0-4 h l')
- implicit units: 'Molecular weight' → g/mol (from the popPK convention: 'Molecular weight is universally expressed in g/mol (or Da, which is numerically equivalent). Aniline (C6H7N) has a molec')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Aniline
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'aniline' subgroup of Miura_2021 (paper reports 7 populations: 2,3-dimethyl-aniline, 2,4-dimethyl-aniline, 2,5-dimethyl-aniline, 2,6-dimethyl-aniline, 3,5-dimethyl-aniline, aniline, n,2-dimethyl-aniline)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table tab_1: unparsed_numeric_cell
- table tab_1: representations disagree; selected evidence retained, not merged
- table Miura_2021_table_1: units_need_context
- companion parameter table 1 transcribed (42 record(s))
- table Miura_2021_table_p3_1: units_need_context
- companion parameter table p3_1 transcribed (42 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_1:row14:col2'] |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['tab_1:row7:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['tab_1:row8:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_1:row13:col2'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Miura_2021_table_1:row0:col2', 'Miura_2021_table_p3_1:row0:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baniline%5D%20Aniline_Miura2021_aniline&body=Drug%3A%20aniline%0ARecord%3A%20Aniline_Miura2021_aniline%0APaper%3A%20Miura_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aniline/Aniline_Miura2021_aniline%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 19:29 UTC</sub>
