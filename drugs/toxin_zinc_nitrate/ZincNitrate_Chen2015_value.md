<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Zinc nitrate&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_nitrate/&quot;},{&quot;label&quot;:&quot;Chen_2015 \u00b7 value&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Zinc nitrate — `ZincNitrate_Chen2015_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The tissue partition coefficient Kp for zinc nitrate has the erroneous unit L·h−1 instead of being dimensionless, and the record lacks essential kinetic parameters.

<div class="pk-model-meta" hidden drug="Zinc nitrate" model-id="ZincNitrate_Chen2015_value" status="rejected" stale="false" population="mice" measured-compound="Zinc-65" parameterization="mechanistic" topology="1C"></div>

## Citation
Chen WY, Cheng YH, Hsieh NH, Wu BC, Chou WC, Ho CC et al. Physiologically based pharmacokinetic modeling of zinc oxide nanoparticles and zinc nitrate in mice. International journal of nanomedicine 10:6277–6292 (2015).
  ·  DOI: [10.2147/IJN.S86785](https://doi.org/10.2147/IJN.S86785)

## Population and dosing

**Population:** mice.

**Dosing:** 0.12 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed Zinc nitrate (65Zn(NO3)2), measured Zinc-65.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| BW | allometric_exponent | 0.032 | kg |
| QC | Kp | 9.025 | L·h−1 |
| VSp | Vnorm | 0.004 | L/kg |
| VHe | VH | 0.007 | L/kg |
| VBr | FG | 0.014 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tissue partition coefficient Kp for zinc nitrate has the erroneous unit L·h−1 instead of being dimensionless, and the record lacks essential kinetic parameters.**

The parameter Kp, representing the tissue-to-plasma partition coefficient, was extracted with the unit L·h−1, which conflicts with its definition as a dimensionless ratio. Additionally, the record is missing critical kinetic quantities such as half-life, clearance, or rate constants, indicating it describes exposure outcomes rather than a fitted pharmacokinetic model. Extracted — zinc nitrate: allometric_exponent 0.032 kg, Kp 9.03 L·h−1, Vnorm 0.004 L/kg, VH 0.007 L/kg, FG 0.014.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| BW | `Q319` · allometric_exponent | 0.032 | kg |  |  | kg | llm (0.6) | Chen_2015_table_6:row0:col1 |
| QC | `Q410` · Kp | 9.025 | L·h−1 |  |  | l/h | llm (0.6) | Chen_2015_table_6:row1:col1 |
| VSp | `Q352` · Vnorm | 0.004 | L/kg | 0.00028 | m3 | L | llm (0.6) | Chen_2015_table_6:row6:col1 |
| VHe | `Q368` · VH | 0.007 | L/kg | 0.00049 | m3 | L | llm (0.6) | Chen_2015_table_6:row8:col1 |
| VBr | `Q41` · FG | 0.014 |  | 0.014 |  |  | llm (0.6) | Chen_2015_table_6:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'QC' → Q410 (unit '[length] ** 3 / [time]' vs ontology 'dimensionless') — route to review
- dropped unlinked row (NIL): 'VBl' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_6:row3:col1'])
- dropped duplicate Q410 ('VLu', value '0.007') — already have one for this compound
- dropped unlinked row (NIL): 'VGI' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_6:row5:col1'])
- dropped unlinked row (NIL): 'VLi' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_6:row7:col1'])
- dropped duplicate Q410 ('VKi', value '0.016') — already have one for this compound
- dropped duplicate Q410 ('VCa', value '0.706') — already have one for this compound
- dropped unlinked row (NIL): 'QLu' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_6:row13:col1'])
- dropped unlinked row (NIL): 'QGI' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_6:row14:col1'])
- dropped duplicate Q410 ('QSp', value '0.011') — already have one for this compound
- dropped duplicate Q410 ('QLi', value '0.161') — already have one for this compound
- dropped unlinked row (NIL): 'QHe' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_6:row17:col1'])
- dropped unlinked row (NIL): 'QBr' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_6:row18:col1'])
- dropped duplicate Q410 ('QKi', value '0.091') — already have one for this compound
- dropped unlinked row (NIL): 'QCa' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_6:row20:col1'])
- implicit units: 'VSp' → L/kg (from the popPK convention: "The parameter name 'VSp' with the description 'Volume of distribution NORMALIZED to a standard body size' implies allome")
- implicit units: 'VHe' → L/kg (from the popPK convention: "The parameter 'VHe' is described as a 'Volume of a HEPATIC (liver) compartment'. Like VSp, in PBPK or population PK mode")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Zinc-65
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'value' subgroup of Chen_2015 (paper reports 3 populations: 10 nm 65zno nps, 71 nm 65zno nps, value)
- molar mass: none of 1 PubChem candidate(s) is 'Zinc-65' (LLM) — left in mass units
- molar mass: none found for 'Zinc-65' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Zinc-65', not zinc_nitrate — the review values are the parent's

**Extraction notes:**
- transposed table ts4-ijn-10-6277: logical view retains original source coordinates
- transposed table Chen_2015_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (58 record(s))
- companion parameter table 6 transcribed (19 record(s))
- table Chen_2015_table_7: units_need_context
- table Chen_2015_table_7: unparsed_numeric_cell
- companion parameter table 7 transcribed (89 record(s))
- table Chen_2015_table_8: units_need_context
- companion parameter table 8 transcribed (24 record(s))
- no LLM table selection; kept 4 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['Chen_2015_table_6:row6:col1'] |
| C5_dimension_Q368 | pass | [length] ** 3 |  | ['Chen_2015_table_6:row8:col1'] |
| C5_dimension_Q410 | fail | dimensionless | L·h−1 ([length] ** 3 / [time]) | ['Chen_2015_table_6:row1:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzinc_nitrate%5D%20ZincNitrate_Chen2015_value&body=Drug%3A%20zinc_nitrate%0ARecord%3A%20ZincNitrate_Chen2015_value%0APaper%3A%20Chen_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zinc_nitrate/ZincNitrate_Chen2015_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 16:54 UTC</sub>
