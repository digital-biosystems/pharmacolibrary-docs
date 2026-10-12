<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;levomethadone&quot;,&quot;href&quot;:&quot;drugs/drug_levomethadone/&quot;},{&quot;label&quot;:&quot;Sandbaumh\u00fcter_2021_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levomethadone_Gittel2021v2_reference&quot;,&quot;label&quot;:&quot;Gittel_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levomethadone — `Levomethadone_Sandbaumhter20212_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The levomethadone record was rejected because the disposition macro-rate constants λ1 (0.887) and λ2 (0.017) carry units of L/min instead of 1/min, a dimension mismatch on structural parameters, and the EDDP metabolites are unlinked.**

λ1 and λ2 are macro-rate constants describing fast and slow disposition phases, but the paper reports them with units of L/min, which is dimensionally wrong for first-order rate constants (0.887 and 0.017). The metabolism links from l-methadadone and d-methadone to their EDDP metabolites carry no rate parameter, leaving the metabolites unreachable from the dose. Several parameters (k21 0.067, V2 0.823, Vss 0.915, AUC 13.32, CL 17.63) were reported without a unit, so no SI value could be established for them. A second reader also disagreed on the dosed compound (racemic methadone vs methadone) and the analyte, and read the first parameter as absent rather than 2746.1. Extracted — levomethadone: Ct 2.75e+03 ng/mL, λ1 0.887 L/min, λ2 0.017 L/min, t1/2α 0.939 min, t1/2β 50.7 min, kel 0.245 L/min, k12 0.591 L/min, k21 0.067, … (+7).

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:27.748082+00:00) predates the upstream re-run (2026-10-07 03:30:26.163176+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `racemic methadone`, measured `l-methadone`.

## Citation
Sandbaumhüter FA et al., Stereoselective methadone disposition a…, Electrophoresis (2021)
  ·  DOI: [10.1002/elps.202100115](https://doi.org/10.1002/elps.202100115)

## Model component
<dbs-pgx drug="levomethadone" model-id="Levomethadone_Sandbaumhter20212_reference" status="rejected" stale="true" population="anesthetized Shetland ponies" measured-compound="l-methadone" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A (ng/mL) | `Q900` · equation variable | 2936.1 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | elps7427-tbl-0001:row2:col1 | — | not captured |
| α (L/min) | `Q67` · λ1 | 0.860 | L/min | not captured | [l] / [min] | not captured | exact (1.0) | elps7427-tbl-0001:row4:col1 | — | not captured |
| β (L/min) | `Q47` · kel | 0.014 | L/min | not captured | [l] / [min] | not captured | exact (1.0) | elps7427-tbl-0001:row5:col1 | — | not captured |
| t 1/2α (min) | `Q59` · t1/2α | 0.973 | min | 58.379999999999995 | [min] | not captured | space_fold (0.95) | elps7427-tbl-0001:row6:col1 | — | not captured |
| t 1/2β (min) | `Q60` · t1/2β | 53.88 | min | 3232.8 | [min] | not captured | space_fold (0.95) | elps7427-tbl-0001:row7:col1 | — | not captured |
| k12 (L/min) | `Q301` · k12 | 0.641 | L/min | not captured | [l] / [min] | not captured | exact (1.0) | elps7427-tbl-0001:row9:col1 | — | not captured |
| k21 (L/min)* | `Q302` · k21 | 0.114 | unit | not captured | [unit] | not captured | llm_confirmed (0.6) | elps7427-tbl-0001:row10:col1 | — | not captured |
| V2 (L/kg)* | `Q64` · V2 | 0.393 | unit | not captured | [unit] | not captured | llm_confirmed (0.6) | elps7427-tbl-0001:row11:col1 | — | not captured |
| V1 (L/kg) | `Q63` · V1 | 0.078 | L/kg | 0.00546 | [l] / [kg] | not captured | exact (1.0) | elps7427-tbl-0001:row12:col1 | — | not captured |
| Vss (L/kg)* | `Q65` · Vss | 0.471 | unit | not captured | [unit] | not captured | llm_confirmed (0.6) | elps7427-tbl-0001:row13:col1 | — | not captured |
| AUC (0→∞) (min ng/L)* | `Q17` · AUC∞ | 33.42 | unit | not captured | [unit] | not captured | llm_corrected (0.6) | elps7427-tbl-0001:row14:col1 | — | not captured |
| MRT (min) | `Q53` · MRT | 69.43 | min | 4165.8 | [min] | not captured | exact (1.0) | elps7427-tbl-0001:row15:col1 | — | not captured |
| ClB (mL/min/kg) * | `Q23` · CLb | 7.44 | unit | not captured | [unit] | not captured | llm_confirmed (0.6) | elps7427-tbl-0001:row16:col1 | — | not captured |
| C0 (ng/mL) | `Q86` · C0 | 3320.3 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | elps7427-tbl-0001:row17:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('B (ng/mL)*', value '384.2') — already have one for this compound
- unit_dimension_mismatch: 'α (L/min)' → Q67 (unit '[length] ** 3 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'β (L/min)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k10 (L/min)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('k10 (L/min)', value '0.119') — already have one for this compound
- unit_dimension_mismatch: 'k12 (L/min)' → Q301 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k21 (L/min)*' → Q302 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'V2 (L/kg)*' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Vss (L/kg)*' → Q65 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC (0→∞) (min ng/L)*' → Q17 (unit '[luminosity] / [length] ** 2' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'ClB (mL/min/kg) *' → Q23 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'C0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped value-less row: '* = p &lt; 0.05 between methadone enantiomers assessed with the Mann–Whitney Rank Sum test'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=l-methadone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell elps7427-tbl-0001:row2:col2 = '2455.5 (1450.5–5263.8)'
- unparsed cell elps7427-tbl-0001:row2:col4 = '2403.5 (1275.5–4683.2)'
- unparsed cell elps7427-tbl-0001:row3:col2 = '379.7 (265.8–490.9)'
- unparsed cell elps7427-tbl-0001:row3:col4 = '162.9 (70.74–204.1)'
- unparsed cell elps7427-tbl-0001:row4:col2 = '0.873 (0.365–1.516)'
- unparsed cell elps7427-tbl-0001:row4:col4 = '0.921 (0.368–1.475)'
- unparsed cell elps7427-tbl-0001:row5:col2 = '0.014 (0.008–0.021)'
- unparsed cell elps7427-tbl-0001:row5:col4 = '0.016 (0.007–0.033)'
- unparsed cell elps7427-tbl-0001:row6:col2 = '0.794 (0.457–1.901)'
- unparsed cell elps7427-tbl-0001:row6:col4 = '0.753 (0.470–1.885)'
- unparsed cell elps7427-tbl-0001:row7:col2 = '51.41 (33.71–85.27)'
- unparsed cell elps7427-tbl-0001:row7:col4 = '43.53 (20.72–104.12)'
- unparsed cell elps7427-tbl-0001:row8:col2 = '0.080 (0.048–0.306)'
- unparsed cell elps7427-tbl-0001:row8:col4 = '0.186 (0.096–0.587)'
- unparsed cell elps7427-tbl-0001:row9:col2 = '0.660 (0.241–1.128)'
- unparsed cell elps7427-tbl-0001:row9:col4 = '0.627 (0.253–0.837)'
- unparsed cell elps7427-tbl-0001:row10:col2 = '0.102 (0.067–0.162)'
- unparsed cell elps7427-tbl-0001:row10:col4 = '0.071 (0.026–0.094)'
- unparsed cell elps7427-tbl-0001:row11:col2 = '0.407 (0.317–0.467)'
- unparsed cell elps7427-tbl-0001:row11:col4 = '0.676 (0.460–1.644)'
- unparsed cell elps7427-tbl-0001:row12:col2 = '0.076 (0.040–0.131)'
- unparsed cell elps7427-tbl-0001:row12:col4 = '0.086 (0.046–0.166)'
- unparsed cell elps7427-tbl-0001:row13:col2 = '0.467 (0.390–0.598)'
- unparsed cell elps7427-tbl-0001:row13:col4 = '0.751 (0.506–1.180)'
- unparsed cell elps7427-tbl-0001:row14:col2 = '34.94 (18.21–50.48)'
- unparsed cell elps7427-tbl-0001:row14:col4 = '13.87 (8.27–15.80)'
- unparsed cell elps7427-tbl-0001:row15:col2 = '65.96 (39.49–114.88)'
- unparsed cell elps7427-tbl-0001:row15:col4 = '48.35 (18.68–113.92)'
- unparsed cell elps7427-tbl-0001:row16:col2 = '6.42 (4.44–12.30)'
- unparsed cell elps7427-tbl-0001:row16:col4 = '16.15 (14.18–27.08)'
- unparsed cell elps7427-tbl-0001:row17:col2 = '2944.1 (1716.2–5566.8)'
- unparsed cell elps7427-tbl-0001:row17:col4 = '2605.8 (1346.2–4853.7)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['elps7427-tbl-0001:row14:col1'] |
| C5_dimension_Q23 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['elps7427-tbl-0001:row16:col1'] |
| C5_dimension_Q301 | fail | [length] ** 3 / [time] | L/min | not captured | not captured | ['elps7427-tbl-0001:row9:col1'] |
| C5_dimension_Q302 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['elps7427-tbl-0001:row10:col1'] |
| C5_dimension_Q47 | fail | [length] ** 3 / [time] | L/min | not captured | not captured | ['elps7427-tbl-0001:row5:col1'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['elps7427-tbl-0001:row15:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['elps7427-tbl-0001:row6:col1'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['elps7427-tbl-0001:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['elps7427-tbl-0001:row12:col1'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['elps7427-tbl-0001:row11:col1'] |
| C5_dimension_Q65 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['elps7427-tbl-0001:row13:col1'] |
| C5_dimension_Q67 | fail | [length] ** 3 / [time] | L/min | not captured | not captured | ['elps7427-tbl-0001:row4:col1'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng/mL | not captured | not captured | ['elps7427-tbl-0001:row17:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.44 | not captured | not captured | ['elps7427-tbl-0001:row16:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.46 L | not captured | not captured | ['elps7427-tbl-0001:row12:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_levomethadone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sandbaumhüter_2021_2` / `Sandbaumhüter_2021_2::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:30 UTC</sub>
