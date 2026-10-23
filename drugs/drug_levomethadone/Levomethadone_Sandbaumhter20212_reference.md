<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;levomethadone&quot;,&quot;href&quot;:&quot;drugs/drug_levomethadone/&quot;},{&quot;label&quot;:&quot;Sandbaumh\u00fcter_2021_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levomethadone_Gittel2021v2_reference&quot;,&quot;label&quot;:&quot;Gittel_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levomethadone — `Levomethadone_Sandbaumhter20212_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-07 03:30 UTC); the status shown comes from the current checks. The levomethadone record was rejected because the disposition macro-rate constants λ1 (0.887) and λ2 (0.017) carry units of L/min instead of 1/min, a dimension mismatch on structural parameters, and the EDDP metabolites are unlinked.

<div class="pk-model-meta" hidden drug="levomethadone" model-id="Levomethadone_Sandbaumhter20212_reference" status="rejected" stale="true" population="anesthetized Shetland ponies" measured-compound="l-methadone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Sandbaumhüter FA, Gittel C, Larenza-Menzies MP, Theurillat R, Thormann W, Braun C. Stereoselective methadone disposition after administration of racemic methadone to anesthetized Shetland ponies assessed by capillary electrophoresis. Electrophoresis 42(17-18):1826–1831 (2021).
  ·  DOI: [10.1002/elps.202100115](https://doi.org/10.1002/elps.202100115)

## Population and dosing

**Population:** anesthetized Shetland ponies · condition healthy (anesthetized) · age group adult · n = 9.

**Dosing:** 17.5, 35 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed racemic methadone, measured l-methadone.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 13 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (ng/mL) | equation variable | 2936.1 | ng/mL |
| α (L/min) | λ1 | 0.860 | L/min |
| β (L/min) | kel | 0.014 | L/min |
| t 1/2α (min) | t1/2α | 0.973 | min |
| t 1/2β (min) | t1/2β | 53.88 | min |
| k12 (L/min) | k12 | 0.641 | L/min |
| k21 (L/min)* | k21 | 0.114 | unit |
| V2 (L/kg)* | V2 | 0.393 | unit |
| V1 (L/kg) | V1 | 0.078 | L/kg |
| Vss (L/kg)* | Vss | 0.471 | unit |
| AUC (0→∞) (min ng/L)* | AUC∞ | 33.42 | unit |
| MRT (min) | MRT | 69.43 | min |
| ClB (mL/min/kg) * | CLb | 7.44 | unit |
| C0 (ng/mL) | C0 | 3320.3 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The levomethadone record was rejected because the disposition macro-rate constants λ1 (0.887) and λ2 (0.017) carry units of L/min instead of 1/min, a dimension mismatch on structural parameters, and the EDDP metabolites are unlinked.**

λ1 and λ2 are macro-rate constants describing fast and slow disposition phases, but the paper reports them with units of L/min, which is dimensionally wrong for first-order rate constants (0.887 and 0.017). The metabolism links from l-methadadone and d-methadone to their EDDP metabolites carry no rate parameter, leaving the metabolites unreachable from the dose. Several parameters (k21 0.067, V2 0.823, Vss 0.915, AUC 13.32, CL 17.63) were reported without a unit, so no SI value could be established for them. A second reader also disagreed on the dosed compound (racemic methadone vs methadone) and the analyte, and read the first parameter as absent rather than 2746.1. Extracted — levomethadone: Ct 2.75e+03 ng/mL, λ1 0.887 L/min, λ2 0.017 L/min, t1/2α 0.939 min, t1/2β 50.7 min, kel 0.245 L/min, k12 0.591 L/min, k21 0.067, … (+7).

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (ng/mL) | `Q900` · equation variable | 2936.1 | ng/mL |  |  | ng/ml | llm (0.6) | elps7427-tbl-0001:row2:col1 |
| α (L/min) | `Q67` · λ1 | 0.860 | L/min |  |  | l/min | exact (1) | elps7427-tbl-0001:row4:col1 |
| β (L/min) | `Q47` · kel | 0.014 | L/min |  |  | l/min | exact (1) | elps7427-tbl-0001:row5:col1 |
| t 1/2α (min) | `Q59` · t1/2α | 0.973 | min | 58.38 | s | min | space_fold (0.95) | elps7427-tbl-0001:row6:col1 |
| t 1/2β (min) | `Q60` · t1/2β | 53.88 | min | 3233 | s | min | space_fold (0.95) | elps7427-tbl-0001:row7:col1 |
| k12 (L/min) | `Q301` · k12 | 0.641 | L/min |  |  | l/min | exact (1) | elps7427-tbl-0001:row9:col1 |
| k21 (L/min)* | `Q302` · k21 | 0.114 | unit |  |  | unit | llm_confirmed (0.6) | elps7427-tbl-0001:row10:col1 |
| V2 (L/kg)* | `Q64` · V2 | 0.393 | unit |  |  | unit | llm_confirmed (0.6) | elps7427-tbl-0001:row11:col1 |
| V1 (L/kg) | `Q63` · V1 | 0.078 | L/kg | 0.00546 | m3 | l/kg | exact (1) | elps7427-tbl-0001:row12:col1 |
| Vss (L/kg)* | `Q65` · Vss | 0.471 | unit |  |  | unit | llm_confirmed (0.6) | elps7427-tbl-0001:row13:col1 |
| AUC (0→∞) (min ng/L)* | `Q17` · AUC∞ | 33.42 | unit |  |  | unit | llm_corrected (0.6) | elps7427-tbl-0001:row14:col1 |
| MRT (min) | `Q53` · MRT | 69.43 | min | 4166 | s | min | exact (1) | elps7427-tbl-0001:row15:col1 |
| ClB (mL/min/kg) * | `Q23` · CLb | 7.44 | unit |  |  | unit | llm_confirmed (0.6) | elps7427-tbl-0001:row16:col1 |
| C0 (ng/mL) | `Q86` · C0 | 3320.3 | ng/mL |  |  | ng/ml | exact (1) | elps7427-tbl-0001:row17:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [luminosity] / [length] ** 2 | unit | ['elps7427-tbl-0001:row14:col1'] |
| C5_dimension_Q23 | fail | [luminosity] / [length] ** 2 | unit | ['elps7427-tbl-0001:row16:col1'] |
| C5_dimension_Q301 | fail | [length] ** 3 / [time] | L/min | ['elps7427-tbl-0001:row9:col1'] |
| C5_dimension_Q302 | fail | [luminosity] / [length] ** 2 | unit | ['elps7427-tbl-0001:row10:col1'] |
| C5_dimension_Q47 | fail | [length] ** 3 / [time] | L/min | ['elps7427-tbl-0001:row5:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['elps7427-tbl-0001:row15:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['elps7427-tbl-0001:row6:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['elps7427-tbl-0001:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['elps7427-tbl-0001:row12:col1'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | unit | ['elps7427-tbl-0001:row11:col1'] |
| C5_dimension_Q65 | fail | [luminosity] / [length] ** 2 | unit | ['elps7427-tbl-0001:row13:col1'] |
| C5_dimension_Q67 | fail | [length] ** 3 / [time] | L/min | ['elps7427-tbl-0001:row4:col1'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng/mL | ['elps7427-tbl-0001:row17:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.44 | ['elps7427-tbl-0001:row16:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.46 L | ['elps7427-tbl-0001:row12:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevomethadone%5D%20Levomethadone_Sandbaumhter20212_reference&body=Drug%3A%20levomethadone%0ARecord%3A%20Levomethadone_Sandbaumhter20212_reference%0APaper%3A%20Sandbaumh%C3%BCter_2021_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levomethadone/Levomethadone_Sandbaumhter20212_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:30 UTC</sub>
