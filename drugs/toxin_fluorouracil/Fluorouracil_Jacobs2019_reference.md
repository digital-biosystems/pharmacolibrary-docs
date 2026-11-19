<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fluorouracil&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/&quot;},{&quot;label&quot;:&quot;Jacobs_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Janssen2021_reference&quot;,&quot;label&quot;:&quot;Janssen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Janssen2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Daher2014_final_model&quot;,&quot;label&quot;:&quot;Daher_2014_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Daher2014_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Daryani2016_estimate_se&quot;,&quot;label&quot;:&quot;Daryani_2016_estimate_se&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Daryani2016_estimate_se.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Schmulenson2023_estimate&quot;,&quot;label&quot;:&quot;Schmulenson_2023_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Schmulenson2023_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fluorouracil — `Fluorouracil_Jacobs2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Fluorouracil" model-id="Fluorouracil_Jacobs2019_reference" status="rejected" stale="false" population="heterogeneous population of cancer patients" measured-compound="5-fluorouracil" parameterization="apparent" topology="general_linear"></div>

## Citation
Jacobs BAW, Deenen MJ, Joerger M, Rosing H, de Vries N, Meulendijks D et al. Pharmacokinetics of Capecitabine and Four Metabolites in a Heterogeneous Population of Cancer Patients: A Comprehensive Analysis. CPT: pharmacometrics & systems pharmacology 8(12):940-950 (2019).
  ·  DOI: [10.1002/psp4.12474](https://doi.org/10.1002/psp4.12474)

## Population and dosing

**Population:** heterogeneous population of cancer patients · condition cancer patients treated with capecitabine-based chemotherapy · age group adult · n = 237.

**Dosing:** 300, 2600 mg, oral.

**Dosed compound ≠ measured compound:** dosed Capecitabine, measured 5-fluorouracil.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 16 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| k tr (hour−1) | ktr | 5.08 | hour−1 | 8.7 |
| CLc/F CAP (L/hour) | CL/F | 337 | L/hour | 5.3 |
| Vc/F CAP (L) | V1/F | 207 | L | 11.0 |
| Qp/F CAP (L/hour) | Q/F | 15.8 | L/hour | 8.2 |
| Vp/F CAP (L) | V2/F | 31.4 | L | 8.3 |
| CLc/F dFCR (L/hour) | CL/F | 148 | L/hour | 4.3 |
| Vc/F dFCR (L) | V1/F | 20.5 | L | 3.6 |
| Qp/F dFCR (L/hour) | Q/F | 94.1 | L/hour | 6.4 |
| Vp/F dFCR (L) | V2/F | 39 | L | 3.6 |
| k dFUR&gt;5‐FU (hour‐1) | kfm | 129 | hour‐1 | 2.9 |
| k 5‐FU&gt;FBAL (hour‐1) | kmet | 777 | hour‐1 | 3.6 |
| CLc/F FBAL (L/hour) | CL/F | 36.7 | L/hour | 5.2 |
| effect_of_age | effect_of_age | -0.97 |  | 19.1 |
| effect_of_gender_female | effect_of_gender_female | 0.757 |  | 6.5 |
| Vc/F FBAL (L) | V1/F | 84.7 | L | 4.8 |
| Qp/F FBAL (L/hour) | Q/F | 11.7 | L/hour | 11.7 |
| Vp/F FBAL (L) | V2/F | 39 | L | 33.3 |
| theta_q314_dpyd | theta_q314_dpyd | 0.785 |  | 11.2 |
| 5-FU K a | kabs | 0.551 | (1/h) |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.471). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (kfm and kmet), so that value has no SI equivalent. Extracted — fluorouracil: ktr 5.08 hour−1, CL/F 337 L/hour, V1/F 207 L, Q/F 15.8 L/hour, V2/F 31.4 L, kabs 0.551 (1/h); 5'-deoxy-5-fluorocytidine (dFCR): CL/F 148 L/hour, V1/F 20.5 L, Q/F 94.1 L/hour, V2/F 39 L; 5'-deoxy-5-fluorouridine (dFUR): kfm 129 hour‐1; fluoro-beta-alanine (FBAL): kmet 777 hour‐1, CL/F 36.7 L/hour, V1/F 84.7 L, Q/F 11.7 L/hour, V2/F 39 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has 5-fluorouracil, the second reading capecitabine; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| k tr (hour−1) | `Q306` · ktr | 5.08 | hour−1 | 0.001411 | 1/s | 1/h | 8.7 | space_fold (0.95) | psp412474-tbl-0003:row1:col1 |
| CLc/F CAP (L/hour) | `Q27` · CL/F | 337 | L/hour | 9.361e-05 | m3/s | l/h | 5.3 | llm (0.6) | psp412474-tbl-0003:row4:col1 |
| Vc/F CAP (L) | `Q290` · V1/F | 207 | L | 0.207 | m3 | l | 11.0 | llm_confirmed (0.6) | psp412474-tbl-0003:row5:col1 |
| Qp/F CAP (L/hour) | `Q69` · Q/F | 15.8 | L/hour | 4.389e-06 | m3/s | l/h | 8.2 | llm (0.6) | psp412474-tbl-0003:row6:col1 |
| Vp/F CAP (L) | `Q82` · V2/F | 31.4 | L | 0.0314 | m3 | l | 8.3 | llm_confirmed (0.6) | psp412474-tbl-0003:row7:col1 |
| CLc/F dFCR (L/hour) | `Q27` · CL/F | 148 | L/hour | 4.111e-05 | m3/s | l/h | 4.3 | llm (0.6) | psp412474-tbl-0003:row8:col1 |
| Vc/F dFCR (L) | `Q290` · V1/F | 20.5 | L | 0.0205 | m3 | l | 3.6 | llm_confirmed (0.6) | psp412474-tbl-0003:row9:col1 |
| Qp/F dFCR (L/hour) | `Q69` · Q/F | 94.1 | L/hour | 2.614e-05 | m3/s | l/h | 6.4 | llm (0.6) | psp412474-tbl-0003:row10:col1 |
| Vp/F dFCR (L) | `Q82` · V2/F | 39 | L | 0.039 | m3 | l | 3.6 | llm_corrected (0.6) | psp412474-tbl-0003:row11:col1 |
| k dFUR&gt;5‐FU (hour‐1) | `Q305` · kfm | 129 | hour‐1 |  |  | h‐1 | 2.9 | llm_corrected (0.6) | psp412474-tbl-0003:row12:col1 |
| k 5‐FU&gt;FBAL (hour‐1) | `Q51` · kmet | 777 | hour‐1 |  |  | h‐1 | 3.6 | llm_corrected (0.6) | psp412474-tbl-0003:row13:col1 |
| CLc/F FBAL (L/hour) | `Q27` · CL/F | 36.7 | L/hour | 1.019e-05 | m3/s | l/h | 5.2 | llm (0.6) | psp412474-tbl-0003:row15:col1 |
| effect_of_age | `Q900` · effect_of_age | -0.97 |  |  |  |  | 19.1 |  | psp412474-tbl-0003:row16:col1 |
| effect_of_gender_female | `Q900` · effect_of_gender_female | 0.757 |  |  |  |  | 6.5 |  | psp412474-tbl-0003:row17:col1 |
| Vc/F FBAL (L) | `Q290` · V1/F | 84.7 | L | 0.0847 | m3 | l | 4.8 | llm_confirmed (0.6) | psp412474-tbl-0003:row18:col1 |
| Qp/F FBAL (L/hour) | `Q69` · Q/F | 11.7 | L/hour | 3.25e-06 | m3/s | l/h | 11.7 | llm (0.6) | psp412474-tbl-0003:row19:col1 |
| Vp/F FBAL (L) | `Q82` · V2/F | 39 | L | 0.039 | m3 | l | 33.3 | llm_confirmed (0.6) | psp412474-tbl-0003:row20:col1 |
| theta_q314_dpyd | `Q900` · theta_q314_dpyd | 0.785 |  |  |  |  | 11.2 |  | psp412474-tbl-0003:row14:col1 |
| 5-FU K a | `Q49` · kabs | 0.551 | (1/h) | 0.0001531 | 1/s | 1/h |  | review_gapfill (0.7) | Booka_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 4 row(s) → 5'-deoxy-5-fluorocytidine (dFCR), 1 row(s) → 5'-deoxy-5-fluorouridine (dFUR), 5 row(s) → fluoro-beta-alanine (FBAL) (name 10)
- dropped unlinked row (NIL): 'Effect of partial gastrectomy' — extend the ontology if this is a real PK parameter (source ['psp412474-tbl-0003:row2:col1'])
- routed 'Effect of total gastrectomy' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_unknown: 'hour‐1' (kfm)
- unit_dimension_unknown: 'hour‐1' (kmet)
- covariate level 'Effect of age' → Q900:effect_of_age = -0.97 (linear_fractional on Q27)
- covariate level 'Effect of gender female' → Q900:effect_of_gender_female = 0.757 (linear_fractional on Q27)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 326 (char 325)) — units left missing
- metabolite volume: 'Vp/F dFCR (L)' Q78→Q82 for 5'-deoxy-5-fluorocytidine (dFCR) — its only peripheral volume is its first; the 2 numbers the molecule
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 4 metabolites — the templates hold two
- pharmacogenetic covariate 'theta_q314_dpyd' (dpyd) — PGx domain
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/20 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Capecitabine' — its concentrations stay mass-only
- molar mass: none found for "5'-deoxy-5-fluorocytidine (dFCR)" — its concentrations stay mass-only
- molar mass: none found for "5'-deoxy-5-fluorouridine (dFUR)" — its concentrations stay mass-only
- molar mass: none found for '5-fluorouracil (5-FU)' — its concentrations stay mass-only
- molar mass: none found for 'fluoro-beta-alanine (FBAL)' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Booka_2016's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.471 (16/34 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['capecitabine', 'dfcr', 'metabolite'], ['dfcr', 'dfur', 'metabolite'], ['dfur', '5-fu', 'metabolite'], ['5-fu', 'fluoro-beta-alanine', 'metabolite']] | [['capecitabine', '5′-deoxy-5-fluorocytidine', 'conversion'], ['5′-deoxy-5-fluorocytidine', '5′-deoxy-5-fluorouridine', 'conversion'], ['5′-deoxy-5-fluorouridine', '5-fluorouracil', 'conversion'], ['5-fluorouracil', 'fluoro-β-alanine', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[clc/f cap].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[clc/f dfcr]` | 148 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clc/f fbal]` | 36.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_dpyd_2a_heterozygous_mutation]` |  | 0.785 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 5‐fu&gt;fbal]` |  | 777 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 5‐fu&gt;fbal]` | 777 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k dfur&gt;5‐fu]` | 129 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k dfur&gt;5‐fu]` |  | 129 | only_one_extracted |
| `gpt-oss:120b` | `parameters[qp/f dfcr]` | 94.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[qp/f fbal]` |  | 11.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[qp/f fbal]` | 11.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q314_dpyd]` | 0.785 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/f dfcr]` | 20.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/f fbal]` | 84.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/f dfcr]` | 39 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/f fbal]` | 39 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | 5-fluorouracil | capecitabine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row8:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row15:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row9:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row18:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['psp412474-tbl-0003:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Booka_2016:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row10:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row19:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row11:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row20:col1'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | hour‐1 | ['psp412474-tbl-0003:row12:col1'] |
| C5_unit_missing_Q51 | fail | 1 / [time] | hour‐1 | ['psp412474-tbl-0003:row13:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['conversion (apparent, relative to bioavailability)'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 337 L/h | ['psp412474-tbl-0003:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 148 L/h | ['psp412474-tbl-0003:row8:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 36.7 L/h | ['psp412474-tbl-0003:row15:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 207 L | ['psp412474-tbl-0003:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 20.5 L | ['psp412474-tbl-0003:row9:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 84.7 L | ['psp412474-tbl-0003:row18:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 31.4 L | ['psp412474-tbl-0003:row7:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 39 L | ['psp412474-tbl-0003:row11:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 39 L | ['psp412474-tbl-0003:row20:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Jacobs2019_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Jacobs2019_reference%0APaper%3A%20Jacobs_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fluorouracil/Fluorouracil_Jacobs2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:05 UTC</sub>
