<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;miltefosine&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/&quot;},{&quot;label&quot;:&quot;Dorlo_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Miltefosine_Dorlo2017_reference&quot;,&quot;label&quot;:&quot;Dorlo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Miltefosine_Pali2020_reference&quot;,&quot;label&quot;:&quot;Pali\u0107_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Pali2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# miltefosine — `Miltefosine_Dorlo2017_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="miltefosine" model-id="Miltefosine_Dorlo2017_reference" status="accepted_with_caveats" stale="false" population="Eastern African patients with visceral leishmaniasis" measured-compound="miltefosine" parameterization="apparent" topology="2C"></div>

## Citation
Dorlo TPC, Kip AE, Younis BM, Ellis SJ, Alves F, Beijnen JH et al. Visceral leishmaniasis relapse hazard is linked to reduced miltefosine exposure in patients from Eastern Africa: a population pharmacokinetic/pharmacodynamic study. The Journal of antimicrobial chemotherapy 72(11):3131–3140 (2017).
  ·  DOI: [10.1093/jac/dkx283](https://doi.org/10.1093/jac/dkx283)

## Population and dosing

**Population:** Eastern African patients with visceral leishmaniasis · condition visceral leishmaniasis · age group mixed · n = 95.

**Dosing:** 2.5 mg/kg/day, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference.svg" alt="Miltefosine_Dorlo2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Absorption rate, ka (/day) | kabs | 1.49 | /day | 17.7 | 68.0 (24.5% RSE) |
| Clearance, CL/F (L/day)b | CL/F | 4.29 | L/day | 3.22 |  |
| Central volume of distribution, Vc/F (L)b | V1 | 51.7 | L | 4.33 |  |
| Intercompartmental clearance, Q/F (L/day) | Q/F | 0.0266 | L/day | 40.7 |  |
| Peripheral volume of distribution, Vp/F (L) | V2 | 2.25 | L | 14.1 |  |
| F (%, at end of treatment) | Fab | 100 | %, at end of treatment |  |  |
| Reduction in F at baselined (% change from end of treatment) | Frel | -74.3 | % change from end of treatment | 4.68 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (Fab and Frel), so that value has no SI equivalent.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate, ka (/day) | `Q49` · kabs | 1.49 | /day | 1.725e-05 | 1/s | 1/d | 17.7 | llm_confirmed (0.6) | dkx283-T2:row2:col1 | 68.0 (24.5% RSE) |
| Clearance, CL/F (L/day)b | `Q27` · CL/F | 4.29 | L/day | 4.965e-08 | m3/s | L/h | 3.22 | llm_corrected (0.6) | dkx283-T2:row3:col1 |  |
| Central volume of distribution, Vc/F (L)b | `Q63` · V1 | 51.7 | L | 0.0517 | m3 | L | 4.33 | boundary_compartment (0.9) | dkx283-T2:row4:col1 |  |
| Intercompartmental clearance, Q/F (L/day) | `Q69` · Q/F | 0.0266 | L/day | 3.079e-10 | m3/s | l/d | 40.7 | llm_corrected (0.6) | dkx283-T2:row5:col1 |  |
| Peripheral volume of distribution, Vp/F (L) | `Q64` · V2 | 2.25 | L | 0.00225 | m3 | l | 14.1 | boundary_compartment (0.9) | dkx283-T2:row6:col1 |  |
| F (%, at end of treatment) | `Q40` · Fab | 100 | %, at end of treatment |  |  |  |  | exact (1) | dkx283-T2:row7:col1 |  |
| Reduction in F at baselined (% change from end of treatment) | `Q87` · Frel | -74.3 | % change from end of treatment |  |  | %·changefromendoftreatment | 4.68 | llm (0.6) | dkx283-T2:row10:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Absorption rate, ka (/day)' routed out of structural estimates ('Between-subject variability (% RSEc)')
- table section iiv: 'Clearance, CL/F (L/day)b' routed out of structural estimates ('Between-subject variability (% RSEc)')
- table section iov: 'F (%, at end of treatment)' routed out of structural estimates ('Between-occasion variability (% RSEc)')
- table section iiv: 'Reduction in F at baselined (% change from end of treatment)' routed out of structural estimates ('Between-subject variability (% RSEc)')
- unit_dimension_unknown: '% RSEc' (CL/F)
- unit_dimension_unknown: '% RSEc' (V1)
- unit_dimension_unknown: '% change from end of treatment' (Frel)
- dropped PD-category row 'Baseline hazard of relapse (infections/year)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkx283-T2:row12:col1'])
- dropped unlinked row (NIL): 'I50 miltefosine Time &gt; EC90 for monotherapy arm (day)' — extend the ontology if this is a real PK parameter (source ['dkx283-T2:row13:col1'])
- dropped unlinked row (NIL): 'I50 miltefosine Time &gt; EC90 for combination therapy arm (day)' — extend the ontology if this is a real PK parameter (source ['dkx283-T2:row14:col1'])
- dropped PD-category row 'Hazard reduction by liposomal amphotericin B (%)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkx283-T2:row15:col1'])
- dropped value-less row: 'Monotherapy (28 days miltefosine)' (captured trailing unit '28 days miltefosine' for child rows)
- dropped value-less row: 'Initial half-life (days)' (captured trailing unit 'days' for child rows)
- dropped value-less row: 'Terminal half-life (days)' (captured trailing unit 'days' for child rows)
- dropped value-less row: 'AUC0–∞ (μg·day/mL)' (captured trailing unit 'μg·day/mL' for child rows)
- dropped value-less row: 'AUC0–28d (μg·day/mL)' (captured trailing unit 'μg·day/mL' for child rows)
- dropped value-less row: 'Time &gt; EC50 (days)' (captured trailing unit 'days' for child rows)
- dropped value-less row: 'Time &gt; EC90 (days)' (captured trailing unit 'days' for child rows)
- dropped value-less row: 'Combination therapy (10 days miltefosine)' (captured trailing unit '10 days miltefosine' for child rows)
- dropped value-less row: 'AUC0–10 (μg·day/mL)' (captured trailing unit 'μg·day/mL' for child rows)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 53 (source ['dkx283-T2:footnote']); the table cell was unparseable — needs review
- covariate weight for allometric_exponent from footnote/prose kept as documentation only (['dkx283-T2:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1000 (source ['dkx283-T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['dkx283-T2:footnote']); the table cell was unparseable — needs review
- implicit units: 'Clearance, CL/F (L/day)b' → L/day (from the paper text: "Table 2 caption/parameter list states 'Clearance, CL/F (L/day)'.")
- implicit units: 'Central volume of distribution, Vc/F (L)b' → L (from the paper text: "Table 2 caption/parameter list states 'Central volume of distribution, Vc/F (L)'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=miltefosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Dorlo_2017_table_3:row1:col1 = '7.05 (4.02–10.9)'
- unparsed cell Dorlo_2017_table_3:row1:col2 = '7.02 (4.02–8.45)'
- unparsed cell Dorlo_2017_table_3:row1:col3 = '7.18 (5.35–10.9)'
- unparsed cell Dorlo_2017_table_3:row2:col1 = '79.4 (49.9–103)'
- unparsed cell Dorlo_2017_table_3:row2:col2 = '77.8 (54.9–95.6)'
- unparsed cell Dorlo_2017_table_3:row2:col3 = '81.3 (49.9–103)'
- unparsed cell Dorlo_2017_table_3:row3:col1 = '713 (237–1482)'
- unparsed cell Dorlo_2017_table_3:row3:col2 = '545 (314–1080)'
- unparsed cell Dorlo_2017_table_3:row3:col3 = '812 (237–1482)'
- unparsed cell Dorlo_2017_table_3:row3:col5 = '0.006d'
- unparsed cell Dorlo_2017_table_3:row4:col1 = '423 (191–767)'
- unparsed cell Dorlo_2017_table_3:row4:col2 = '352 (232–593)'
- unparsed cell Dorlo_2017_table_3:row4:col3 = '497 (191–767)'
- unparsed cell Dorlo_2017_table_3:row4:col5 = '0.002d'
- unparsed cell Dorlo_2017_table_3:row5:col1 = '51.4 (30.5–77.1)'
- unparsed cell Dorlo_2017_table_3:row5:col2 = '48.3 (36.3–62.4)'
- unparsed cell Dorlo_2017_table_3:row5:col3 = '52.9 (30.5–77.1)'
- unparsed cell Dorlo_2017_table_3:row5:col5 = '0.024e'
- unparsed cell Dorlo_2017_table_3:row6:col1 = '27.0 (4.29–43.8)'
- unparsed cell Dorlo_2017_table_3:row6:col2 = '22.1 (11.0–34.2)'
- unparsed cell Dorlo_2017_table_3:row6:col3 = '27.8 (4.29–43.8)'
- unparsed cell Dorlo_2017_table_3:row6:col5 = '0.005d'
- unparsed cell Dorlo_2017_table_3:row10:col1 = '7.39 (5.41–10.3)'
- unparsed cell Dorlo_2017_table_3:row10:col2 = '6.76 (5.58–9.00)'
- unparsed cell Dorlo_2017_table_3:row10:col3 = '7.52 (5.41–10.3)'
- unparsed cell Dorlo_2017_table_3:row10:col5 = '0.031e'
- unparsed cell Dorlo_2017_table_3:row11:col1 = '78.5 (62.4–98.6)'
- unparsed cell Dorlo_2017_table_3:row11:col2 = '76.7 (66.0–98.6)'
- unparsed cell Dorlo_2017_table_3:row11:col3 = '79.7 (62.4–93.7)'
- unparsed cell Dorlo_2017_table_3:row12:col1 = '290 (70.1–496)'
- unparsed cell Dorlo_2017_table_3:row12:col2 = '197 (136–496)'
- unparsed cell Dorlo_2017_table_3:row12:col3 = '313 (70.1–483)'
- unparsed cell Dorlo_2017_table_3:row12:col5 = '0.004d'
- unparsed cell Dorlo_2017_table_3:row13:col1 = '87.9 (31.1–136)'
- unparsed cell Dorlo_2017_table_3:row13:col2 = '69.5 (31.1–129)'
- unparsed cell Dorlo_2017_table_3:row13:col3 = '95.9 (32.3–136)'
- unparsed cell Dorlo_2017_table_3:row13:col5 = '0.004d'
- unparsed cell Dorlo_2017_table_3:row14:col1 = '31.2 (14.2–46.9)'
- unparsed cell Dorlo_2017_table_3:row14:col2 = '28.5 (23.1–43.0)'
- unparsed cell Dorlo_2017_table_3:row14:col3 = '34.1 (14.2–46.9)'
- unparsed cell Dorlo_2017_table_3:row14:col5 = '0.013e'
- unparsed cell Dorlo_2017_table_3:row15:col1 = '8.98 (0–16.8)'
- unparsed cell Dorlo_2017_table_3:row15:col2 = '3.17 (0–16.8)'
- unparsed cell Dorlo_2017_table_3:row15:col3 = '9.93 (0–16.2)'
- unparsed cell Dorlo_2017_table_3:row15:col5 = '0.002d'
- companion parameter table 3 transcribed (21 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (18/18 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['dkx283-T2:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['dkx283-T2:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['dkx283-T2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['dkx283-T2:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['dkx283-T2:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.179 L/h | ['dkx283-T2:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 51.7 L | ['dkx283-T2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.25 L | ['dkx283-T2:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=miltefosine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_modelica.zip" download>Miltefosine_Dorlo2017_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_fmi.zip" download>Miltefosine_Dorlo2017_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_matlab.zip" download>Miltefosine_Dorlo2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_matlab_simbio.zip" download>Miltefosine_Dorlo2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_sbml.zip" download>Miltefosine_Dorlo2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_cellml.zip" download>Miltefosine_Dorlo2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4076 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00015 | kg |
| input | model | `Cl` | 4.965e-08 | m3/s |
| input | model | `VdPerKg` | 0.0007386 | m3/kg |
| input | model | `k12` | 5.955e-09 | 1/s |
| input | model | `k21` | 1.368e-07 | 1/s |
| input | model | `ka` | 1.725e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Dorlo TPC, Kip AE, Younis BM, Ellis SJ, Alves F, Beijnen JH et al. Visceral leishmaniasis relapse hazard is linked to reduced miltefosine exposure in patients from Eastern Africa: a population pharmacokinetic/pharmacodynamic study. The Journal of antimicrobial chemotherapy 72(11):3131–3140 (2017). [doi:10.1093/jac/dkx283](https://doi.org/10.1093/jac/dkx283)

**This record:** Pharmacolibrary v26.09, model `Miltefosine_Dorlo2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference>

```bibtex
@misc{pharmacolibrary_MiltefosineDorlo2017reference,
  title  = {{Pharmacolibrary model Miltefosine_Dorlo2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference},
  note   = {Parameters from doi:10.1093/jac/dkx283},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.0621 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 150 mg oral (P01CX04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Miltefosine_Dorlo2017_reference_params.json` · controls `Miltefosine_Dorlo2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmiltefosine%5D%20Miltefosine_Dorlo2017_reference&body=Drug%3A%20miltefosine%0ARecord%3A%20Miltefosine_Dorlo2017_reference%0APaper%3A%20Dorlo_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:51 UTC</sub>
