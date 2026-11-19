<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Morphine&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/&quot;},{&quot;label&quot;:&quot;Duflot_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Garrett1979v2_reference&quot;,&quot;label&quot;:&quot;Garrett_1979_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Garrett1979v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Glave2023_m3g&quot;,&quot;label&quot;:&quot;G\u00fclave_2023_m3g&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Glave2023_m3g.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Got1994_reference&quot;,&quot;label&quot;:&quot;Got_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Got1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_iv_morphine_2_mg_2_h&quot;,&quot;label&quot;:&quot;Morse_2022_iv_morphine_2_mg_2_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_iv_morphine_2_mg_2_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_po_morphine_10_mg_4_h&quot;,&quot;label&quot;:&quot;Morse_2022_po_morphine_10_mg_4_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Verscheijden2021_morphine&quot;,&quot;label&quot;:&quot;Verscheijden_2021_morphine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Verscheijden2021_morphine.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Yalcin2022_mulla_et_al_37_uk&quot;,&quot;label&quot;:&quot;Yalcin_2022_mulla_et_al_37_uk&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Yalcin2022_mulla_et_al_37_uk.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Morphine — `Morphine_Duflot2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Morphine" model-id="Morphine_Duflot2022_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="Morphine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Duflot T, Pereira T, Tavolacci MP, Joannidès R, Aubrun F, Lamoureux F et al. Pharmacokinetic modeling of morphine and its glucuronides: Comparison of nebulization versus intravenous route in healthy volunteers. CPT: pharmacometrics & systems pharmacology 11(1):82-93 (2022).
  ·  DOI: [10.1002/psp4.12735](https://doi.org/10.1002/psp4.12735)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 27.

**Dosing:** 3, 6.2 mg, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F | Fab | 0.035 |  |  |  |
| ka [min−1] | kabs | 0.046 | min−1 |  |  |
| ktr [min−1] | ktr | 1.23 | min−1 |  |  |
| Mean transit time (MTT) [min] | MTT | 2.35 | min | 6.83 | 0.21 (27.5% RSE) |
| Vc [L] | V1 | 1.75 | L | 10.6 | 0.49 (15.8% RSE) |
| k12 [min−1] | k12 | 0.188 | min−1 | 19.2 | 0.61 (32.9% RSE) |
| k21 [min−1] | k21 | 0.143 | min−1 |  |  |
| k13 [min−1] β_km3_Route (=NEB) | k13 | 0.564 | min−1 |  |  |
| k31 [min−1] | k31 | 0.010 | min−1 |  |  |
| MTT 1 (M3G production) | MTT | 8.16 | M3G production |  |  |
| MTT 2 (M6G production) | MTT | 57.5 | M6G production | 2.72 |  |
| kam3 [min−1] | kel | 0.172 | min−1 | 19.7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.64). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (MTT and MTT), so that value has no SI equivalent. Extracted — morphine: Fab 0.035, kabs 0.046 min−1, ktr 1.23 min−1, MTT 2.35 min, V1 1.75 L, k12 0.188 min−1, k21 0.143 min−1, k13 0.564 min−1, … (+2); Morphine-3-glucuronide (M3G): MTT 8.16 M3G production; Morphine-6-glucuronide (M6G): MTT 57.5 M6G production.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has morphine → morphine-3-glucuronide (m3g) (metabolite); morphine → morphine-6-glucuronide (m6g) (metabolite), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.035 |  |  |  |  |  | exact (1) | psp412735-tbl-0003:row1:col3 |  |
| ka [min−1] | `Q49` · kabs | 0.046 | min−1 | 0.0007667 | 1/s | 1/min |  | llm_confirmed (0.6) | psp412735-tbl-0003:row2:col3 |  |
| ktr [min−1] | `Q306` · ktr | 1.23 | min−1 | 0.0205 | 1/s | 1/min |  | llm_confirmed (0.6) | psp412735-tbl-0003:row3:col3 |  |
| Mean transit time (MTT) [min] | `Q81` · MTT | 2.35 | min | 141 | s | min | 6.83 | llm_confirmed (0.6) | psp412735-tbl-0003:row4:col1, psp412735-tbl-0003:row4:col3 | 0.21 (27.5% RSE) |
| Vc [L] | `Q63` · V1 | 1.75 | L | 0.00175 | m3 | l | 10.6 | llm_confirmed (0.6) | psp412735-tbl-0003:row5:col1, psp412735-tbl-0003:row5:col3 | 0.49 (15.8% RSE) |
| k12 [min−1] | `Q301` · k12 | 0.188 | min−1 | 0.003133 | 1/s | 1/min | 19.2 | llm_confirmed (0.6) | psp412735-tbl-0003:row6:col1, psp412735-tbl-0003:row6:col3 | 0.61 (32.9% RSE) |
| k21 [min−1] | `Q302` · k21 | 0.143 | min−1 | 0.002383 | 1/s | 1/min |  | llm_confirmed (0.6) | psp412735-tbl-0003:row7:col3 |  |
| k13 [min−1] β_km3_Route (=NEB) | `Q303` · k13 | 0.564 | min−1 | 0.0094 | 1/s | 1/min |  | llm_confirmed (0.6) | psp412735-tbl-0003:row8:col3 |  |
| k31 [min−1] | `Q304` · k31 | 0.010 | min−1 | 0.0001667 | 1/s | 1/min |  | llm_confirmed (0.6) | psp412735-tbl-0003:row9:col3 |  |
| MTT 1 (M3G production) | `Q81` · MTT | 8.16 | M3G production |  |  | g·m3·production |  | llm_confirmed (0.6) | psp412735-tbl-0003:row12:col3 |  |
| MTT 2 (M6G production) | `Q81` · MTT | 57.5 | M6G production |  |  | g·m6·production | 2.72 | llm_confirmed (0.6) | psp412735-tbl-0003:row13:col1, psp412735-tbl-0003:row13:col3 |  |
| kam3 [min−1] | `Q47` · kel | 0.172 | min−1 | 0.002867 | 1/s | 1/min | 19.7 | llm (0.6) | psp412735-tbl-0003:row14:col1, psp412735-tbl-0003:row14:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- compound tags: 2 row(s) → Morphine-3-glucuronide (M3G), 4 row(s) → Morphine-6-glucuronide (M6G) (name 6)
- table section iiv: 'Mean transit time (MTT) [min]' routed out of structural estimates ('BSV (RSE%)')
- table section iiv: 'Vc [L]' routed out of structural estimates ('BSV (RSE%)')
- table section iiv: 'k12 [min−1]' routed out of structural estimates ('BSV (RSE%)')
- table section iiv: 'ktr1 [min−1]' routed out of structural estimates ('BSV (RSE%)')
- table section iiv: 'MTT 2 (M6G production)' routed out of structural estimates ('BSV (RSE%)')
- table section iiv: 'kam3 [min−1]' routed out of structural estimates ('BSV (RSE%)')
- table section iiv: 'km3 [min−1] β_km3_Route (=NEB)' routed out of structural estimates ('BSV (RSE%)')
- dropped duplicate Q306 ('ktr1 [min−1]', value '0.642') — already have one for this compound
- dropped duplicate Q306 ('ktr2 [min−1]', value '0.040') — already have one for this compound
- unit_dimension_unknown: 'M3G production' (MTT)
- unit_dimension_unknown: 'M6G production' (MTT)
- dropped duplicate Q49 ('kam6 [min−1]', value '0.186') — already have one for this compound
- dropped duplicate Q304 ('km3 [min−1] β_km3_Route (=NEB)', value '0.0029') — already have one for this compound
- dropped duplicate Q47 ('km6 [min−1] β_km6_Sex (=Male)', value '0.0050') — already have one for this compound
- dropped 'corr_km3_k13' → Q303 = -1: a rate of -1 is not a parameter value (source ['psp412735-tbl-0003:row18:col1'])
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 228)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/21 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Morphine-3-glucuronide (M3G)' — its concentrations stay mass-only
- molar mass: none found for 'Morphine-6-glucuronide (M6G)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table psp412735-tbl-0003: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.64 (16/25 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['morphine', 'morphine-3-glucuronide (m3g)', 'metabolite'], ['morphine', 'morphine-6-glucuronide (m6g)', 'metabolite']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kam3 [min-1]]` | 0.172 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[km3 [min-1] β_km3_route]` |  | 0.0029 | only_one_extracted |
| `gpt-oss:120b` | `parameters[km6 [min-1] β_km6_sex]` |  | 0.0050 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mtt 1]` | 8.16 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mtt 2]` | 57.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc [l]].parameter_id` | Q63 | Q61 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['psp412735-tbl-0003:row6:col1', 'psp412735-tbl-0003:row6:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['psp412735-tbl-0003:row7:col3'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['psp412735-tbl-0003:row8:col3'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['psp412735-tbl-0003:row9:col3'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['psp412735-tbl-0003:row3:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['psp412735-tbl-0003:row14:col1', 'psp412735-tbl-0003:row14:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412735-tbl-0003:row2:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412735-tbl-0003:row5:col1', 'psp412735-tbl-0003:row5:col3'] |
| C5_dimension_Q81 | pass | [time] |  | ['psp412735-tbl-0003:row4:col1', 'psp412735-tbl-0003:row4:col3'] |
| C5_unit_missing_Q81 | fail | [time] | M3G production | ['psp412735-tbl-0003:row12:col3'] |
| C5_unit_missing_Q81 | fail | [time] | M6G production | ['psp412735-tbl-0003:row13:col1', 'psp412735-tbl-0003:row13:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['kam3/ktr1 transit production', 'kam6/ktr2 transit production'] |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.75 L | ['psp412735-tbl-0003:row5:col1', 'psp412735-tbl-0003:row5:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Duflot2022_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Duflot2022_reference%0APaper%3A%20Duflot_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_morphine/Morphine_Duflot2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:59 UTC</sub>
