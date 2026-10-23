<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;Metamizole&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/&quot;},{&quot;label&quot;:&quot;Blaser_2021 \u00b7 metamizole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Metamizole_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Fux2022_reference&quot;,&quot;label&quot;:&quot;Fux_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Fux2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Metamizole — `Metamizole_Blaser2021_metamizole`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Q has no unit.

<div class="pk-model-meta" hidden drug="Metamizole" model-id="Metamizole_Blaser2021_metamizole" status="needs_review" stale="false" population="salt-depleted healthy male volunteers" measured-compound="4-methylaminoantipyrine" parameterization="apparent" topology="general_linear"></div>

## Citation
Blaser LS, Duthaler U, Bouitbir J, Leuppi-Taegtmeyer AB, Liakoni E, Dolf R et al. Comparative Effects of Metamizole (Dipyrone) and Naproxen on Renal Function and Prostacyclin Synthesis in Salt-Depleted Healthy Subjects - A Randomized Controlled Parallel Group Study. Frontiers in pharmacology 12:620635 (2021).
  ·  DOI: [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635)

## Population and dosing

**Population:** salt-depleted healthy male volunteers · condition healthy · age group adult.

**Dosing:** 1000 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed metamizole, measured 4-methylaminoantipyrine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (1/h) | kabs | 2.528 | 1/h |
| V1/F (L) | V1/F | 71.2 | L |
| k12 (1/h) | Q | 0.030 | n = 8 |
| k10 (1/h) | kel | 0.178 | 1/h |
| V2/F (L) | V2/F | 35.6 | L |
| V3/F (L) | V3/F | 55.1 | L |
| V4/F (L) | V1/F | 11.5 | L |
| k40 (1/h) | kel | 0.567 | 1/h |
| T1/2 K01 (h) | t1/2z | 0.36 | h |
| T1/2 4-AA (h) | t1/2z | 2.39 | h |
| T1/2 4-AAA (h) | t1/2z | 10.33 | h |
| T1/2 4-FAA (h) | t1/2z | 6.95 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.074). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Q has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Q), so that value has no SI equivalent. None of the extracted parameters is metamizole's own; they describe 4-methylaminoantipyrine, 4-aminoantipyrine, 4-acetylaminoantipyrine and 4-formylaminoantipyrine. Extracted — 4-methylaminoantipyrine: kabs 2.53 1/h, V1/F 71.2 L, Q 0.03 n = 8, kel 0.178 1/h, V2/F 35.6 L, V3/F 55.1 L, t1/2z 0.36 h; 4-aminoantipyrine: V1/F 11.5 L, kel 0.567 1/h, t1/2z 2.39 h; 4-acetylaminoantipyrine: t1/2z 10.3 h; 4-formylaminoantipyrine: t1/2z 6.95 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 4-methylaminoantipyrine, the second reading 4-MAA; it also differs on 24 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 2.528 | 1/h | 0.0007022 | 1/s | 1/h | exact (1) | T3:row1:col1 |
| V1/F (L) | `Q290` · V1/F | 71.2 | L | 0.0712 | m3 | l | exact (1) | T3:row2:col1 |
| k12 (1/h) | `Q30` · Q | 0.030 | n = 8 |  |  | n=8 | exact (1) | T3:row3:col1 |
| k10 (1/h) | `Q47` · kel | 0.178 | 1/h | 4.944e-05 | 1/s | 1/h | exact (1) | T3:row5:col1 |
| V2/F (L) | `Q82` · V2/F | 35.6 | L | 0.0356 | m3 | l | exact (1) | T3:row6:col1 |
| V3/F (L) | `Q78` · V3/F | 55.1 | L | 0.0551 | m3 | l | exact (1) | T3:row10:col1 |
| V4/F (L) | `Q290` · V1/F | 11.5 | L | 0.0115 | m3 | l | exact (1) | T3:row12:col1 |
| k40 (1/h) | `Q47` · kel | 0.567 | 1/h | 0.0001575 | 1/s | 1/h | exact (1) | T3:row13:col1 |
| T1/2 K01 (h) | `Q57` · t1/2z | 0.36 | h | 1296 | s | h | llm_confirmed (0.6) | T3:row15:col1 |
| T1/2 4-AA (h) | `Q57` · t1/2z | 2.39 | h | 8604 | s | h | llm_confirmed (0.6) | T3:row17:col1 |
| T1/2 4-AAA (h) | `Q57` · t1/2z | 10.33 | h | 3.719e+04 | s | h | llm_confirmed (0.6) | T3:row18:col1 |
| T1/2 4-FAA (h) | `Q57` · t1/2z | 6.95 | h | 2.502e+04 | s | h | llm_confirmed (0.6) | T3:row19:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'metamizole (n = 8)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Metamizole (n = 8)' — extend the ontology if this is a real PK parameter (source ['T3:row0:col1'])
- unit_dimension_unknown: 'n = 8' (kabs)
- unit_dimension_unknown: 'n = 8' (Q)
- dropped duplicate Q30 ('k14 (1/h)', value '0.006') — already have one for this compound
- unit_dimension_unknown: 'n = 8' (kel)
- dropped duplicate Q30 ('k23 (1/h)', value '0.552') — already have one for this compound
- dropped duplicate Q30 ('k24 (1/h)', value '0.033') — already have one for this compound
- dropped duplicate Q47 ('k20 (1/h)', value '0.008') — already have one for this compound
- dropped duplicate Q47 ('k30 (1/h)', value '0.074') — already have one for this compound
- dropped duplicate Q47 ('ke0 (1/h)', value '0.012') — already have one for this compound
- dropped duplicate Q57 ('T1/2 4-MAA (h)', value '3.43') — already have one for this compound
- dropped PD-category row 'EC50 (µM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row20:col1'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['T3:row21:col1'])
- dropped PD-category row 'E0 b' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row22:col1'])
- dropped PD-category row 'Emax b' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row23:col1'])
- implicit units: 'Ka (1/h)' → 1/h (from the paper text: "The parameter description explicitly states: 'Absorption rate constant.' which is conventionally a first-order rate cons")
- implicit units: 'k12 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q30; left unset
- implicit units: 'k10 (1/h)' → 1/h (from the popPK convention: "The parameter is described as 'Elimination rate constant (terminal/beta phase)'. First-order elimination rate constants ")
- implicit units: 'k40 (1/h)' → 1/h (from the popPK convention: "The parameter is described as 'Elimination rate constant (terminal/beta phase)'. First-order elimination rate constants ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=4-methylaminoantipyrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'metamizole (n = 8)' subgroup of Blaser_2021 (paper reports 6 populations: 4-aa, 4-aaa, 4-faa, 4-maa, metamizole (n = 8), naproxen (n = 7))
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 28 linked by role; re-tagged naproxen→parent ×2, parent→4-methylaminoantipyrine ×24, naproxen→4-methylaminoantipyrine ×19, parent→4-aminoantipyrine ×3, naproxen→4-aminoantipyrine ×2, parent→4-acetylaminoantipyrine ×1, naproxen→4-acetylaminoantipyrine ×2, parent→4-formylaminoantipyrine ×1, naproxen→4-formylaminoantipyrine ×1, parent→6-keto-prostaglandin F1alpha ×2, naproxen→6-keto-prostaglandin F1alpha ×2
- molar mass: none of 1 PubChem candidate(s) is '4-methylaminoantipyrine' (LLM) — left in mass units
- molar mass: none found for '4-methylaminoantipyrine' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '4-methylaminoantipyrine', not metamizole — the review values are the parent's

**Extraction notes:**
- unparsed cell T3:row6:col3 = '16.8 ± 5.58a'
- unparsed cell T3:row16:col3 = '0.028 ± 0.004a'
- unparsed cell T3:row19:col3 = '22.10 ± 1.32a'
- unparsed cell T3:row20:col2 = 'EC50 (µM)'
- unparsed cell T3:row22:col2 = 'E0'
- companion parameter table 2 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.074 (2/27 fields) | 25 |

<details><summary>25 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['metamizole', '4-methylaminoantipyrine', 'metabolism'], ['4-methylaminoantipyrine', '4-aminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-formylaminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-acetylaminoantipyrine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[k10]` |  | 0.178 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k10]` | 0.178 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` |  | 0.030 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 0.030 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k14]` |  | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k20]` |  | 0.008 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k23]` |  | 0.552 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k40]` | 0.567 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 2.528 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 2.528 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aa]` | 2.39 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aaa]` | 10.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-faa]` | 6.95 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 k01]` |  | 0.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 k01]` | 0.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f]` |  | 71.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f]` | 71.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  | 35.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 35.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 55.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 55.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` |  | 11.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` | 11.5 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 4-methylaminoantipyrine | 4-MAA | mismatch |

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
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T3:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T3:row12:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['T3:row5:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['T3:row13:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T3:row1:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['T3:row15:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['T3:row17:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['T3:row18:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['T3:row19:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['T3:row10:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T3:row6:col1'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | n = 8 | ['T3:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 71.2 L | ['T3:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 11.5 L | ['T3:row12:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 35.6 L | ['T3:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetamizole%5D%20Metamizole_Blaser2021_metamizole&body=Drug%3A%20metamizole%0ARecord%3A%20Metamizole_Blaser2021_metamizole%0APaper%3A%20Blaser_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metamizole/Metamizole_Blaser2021_metamizole%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:17 UTC</sub>
