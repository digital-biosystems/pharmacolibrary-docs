<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;valbenazine&quot;,&quot;href&quot;:&quot;drugs/drug_valbenazine/&quot;},{&quot;label&quot;:&quot;Nguyen_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Valbenazine_Nguyen2025_reference&quot;,&quot;label&quot;:&quot;Nguyen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# valbenazine — `Valbenazine_Nguyen2025_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> The valbenazine parent–metabolite record for [+]-α-HTBZ was rejected because the model was built as a one-compartment enteral model instead of the three-compartment parent–metabolite structure, the output was taken from the parent rather than the measured metabolite, and the peripheral volumes V2/F (198 L) and V2 (97.8 L) were never set.

<div class="pk-model-meta" hidden drug="valbenazine" model-id="Valbenazine_Nguyen2025_reference" status="rejected" stale="false" population="healthy subjects and patients with tardive dyskinesia and Huntington&#39;s disease chorea" measured-compound="[+]-α-HTBZ" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Nguyen HQ, Crass RL, Chapel S, Kuan HS, Loewen G, Brar S. Population Pharmacokinetic and Exposure-Efficacy Analyses of Valbenazine in Patients with Huntington's Disease: Supporting Dose Selection for Chorea Management. Journal of clinical pharmacology 65(12):1777–1788 (2025).
  ·  DOI: [10.1002/jcph.70092](https://doi.org/10.1002/jcph.70092)

## Population and dosing

**Population:** healthy subjects and patients with tardive dyskinesia and Huntington's disease chorea · condition Huntington's disease chorea and tardive dyskinesia · age group adult · n = 425.

**Dosing:** 20, 40, 60, 80 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed valbenazine, measured [+]-α-HTBZ.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference.svg" alt="Valbenazine_Nguyen2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| 1 CLP/F (L/h) | CL/F | 23.2 | L/h | 3.95 |
| 2 VC/F (L) | V1/F | 226 | L | 4.49 |
| 3 KA (per hour) | kabs | 8.43 | per hour | 3.84 |
| 4 QP/F (L/h) | Q/F | 22.0 | L/h | 4.35 |
| 5 VPP/F (L) | V2/F | 198 | L | 3.44 |
| 6 Fmax (relative to 1 mg) | Frel | 1.36 | relative to 1 mg | 10.9 |
| 13 CLM (L/h) | CL | 31.0 | L/h | 4.99 |
| 14 FM | fm | 0.207 | Units | 1.91 |
| 15 QM (L/h) | Q | 1.27 | L/h | 7.60 |
| 16 VPM (L) | V2 | 97.8 | L | 7.12 |
| theta_cl_poor_metabolizer | theta_cl_poor_metabolizer | -0.516 |  | 12.3 |
| theta_q314_intermediate_metabolizer | theta_q314_intermediate_metabolizer | -0.281 |  | 15.3 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.657). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The valbenazine parent–metabolite record for [+]-α-HTBZ was rejected because the model was built as a one-compartment enteral model instead of the three-compartment parent–metabolite structure, the output was taken from the parent rather than the measured metabolite, and the peripheral volumes V2/F (198 L) and V2 (97.8 L) were never set.**

The structure check expected a three-compartment parent–metabolite model but obtained a one-compartment enteral model, and the simulated output was the parent's central compartment rather than the measured metabolite [+]-α-HTBZ. Parameter coverage reached only 6 of 8 expected parameters, with the peripheral volumes V2/F (198 L) and V2 (97.8 L) neither estimated nor defaulted. The model builder left the absorption lag time (Tlag) at a default instead of an explicit estimate, assumed F=1 and Fm=1 without molar correction, and one parameter's reported unit could not be converted to SI so it lacked an SI value. The covariate effects on metabolite clearance (poor metabolizer −0.516, intermediate metabolizer −0.281) were defined but not simulated; only the reference individual was run. Extracted — valbenazine: CL/F 23.2 L/h, V1/F 226 L, kabs 8.43 per hour, Q/F 22 L/h, V2/F 198 L, Frel 1.36 relative to 1 mg, fm 0.207 Units; [+]-α-HTBZ: CL 31 L/h, Q 1.27 L/h, V2 97.8 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has [+]-α-HTBZ, the second reading valbenazine; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| 1 CLP/F (L/h) | `Q27` · CL/F | 23.2 | L/h | 6.444e-06 | m3/s | l/h | 3.95 | exact (1) | jcph70092-tbl-0001:row1:col1, jcph70092-tbl-0001:row1:col2 |
| 2 VC/F (L) | `Q290` · V1/F | 226 | L | 0.226 | m3 | l | 4.49 | exact (1) | jcph70092-tbl-0001:row2:col1, jcph70092-tbl-0001:row2:col2 |
| 3 KA (per hour) | `Q49` · kabs | 8.43 | per hour | 0.002342 | 1/s | 1/h | 3.84 | exact (1) | jcph70092-tbl-0001:row3:col1, jcph70092-tbl-0001:row3:col2 |
| 4 QP/F (L/h) | `Q69` · Q/F | 22.0 | L/h | 6.111e-06 | m3/s | l/h | 4.35 | exact (1) | jcph70092-tbl-0001:row4:col1, jcph70092-tbl-0001:row4:col2 |
| 5 VPP/F (L) | `Q82` · V2/F | 198 | L | 0.198 | m3 | l | 3.44 | exact (1) | jcph70092-tbl-0001:row5:col1, jcph70092-tbl-0001:row5:col2 |
| 6 Fmax (relative to 1 mg) | `Q87` · Frel | 1.36 | relative to 1 mg |  |  | mg·relativeto1 | 10.9 | llm (0.6) | jcph70092-tbl-0001:row6:col1, jcph70092-tbl-0001:row6:col2 |
| 13 CLM (L/h) | `Q22` · CL | 31.0 | L/h | 8.611e-06 | m3/s | l/h | 4.99 | exact (1) | jcph70092-tbl-0001:row11:col1, jcph70092-tbl-0001:row11:col2 |
| 14 FM | `Q45` · fm | 0.207 | Units |  |  | units | 1.91 | llm_confirmed (0.6) | jcph70092-tbl-0001:row12:col1, jcph70092-tbl-0001:row12:col2 |
| 15 QM (L/h) | `Q30` · Q | 1.27 | L/h | 3.528e-07 | m3/s | l/h | 7.60 | exact (1) | jcph70092-tbl-0001:row13:col1, jcph70092-tbl-0001:row13:col2 |
| 16 VPM (L) | `Q64` · V2 | 97.8 | L | 0.0978 | m3 | l | 7.12 | exact (1) | jcph70092-tbl-0001:row14:col1, jcph70092-tbl-0001:row14:col2 |
| theta_cl_poor_metabolizer | `Q900` · theta_cl_poor_metabolizer | -0.516 |  |  |  |  | 12.3 |  | jcph70092-tbl-0001:row15:col1, jcph70092-tbl-0001:row15:col2 |
| theta_q314_intermediate_metabolizer | `Q900` · theta_q314_intermediate_metabolizer | -0.281 |  |  |  |  | 15.3 |  | jcph70092-tbl-0001:row16:col1, jcph70092-tbl-0001:row16:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: '11 Log additive (parent, rich)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '12 Log additive (parent, sparse)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '19 Log additive (metabolite, rich)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '20 Log additive (metabolite, sparse)' routed out of structural estimates ('Residual variability (%)')
- unit_dimension_unknown: 'relative to 1 mg' (Frel)
- dropped PD-category row '7 ED50 (mg)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph70092-tbl-0001:row7:col1', 'jcph70092-tbl-0001:row7:col2'])
- routed '8 Solution on KA' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): '9 Fed status on KA' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row9:col1', 'jcph70092-tbl-0001:row9:col2'])
- dropped unlinked row (NIL): '10 Fed status on F1' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row10:col1', 'jcph70092-tbl-0001:row10:col2'])
- dropped unlinked row (NIL): '21 WT on CLP' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row17:col1', 'jcph70092-tbl-0001:row17:col2'])
- dropped unlinked row (NIL): '22 WT on VCP' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row18:col1', 'jcph70092-tbl-0001:row18:col2'])
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=[+]-α-HTBZ
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- row roles: 2 per-group rows of [+]-α-HTBZ covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of valbenazine residual_error but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of [+]-α-HTBZ residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 16 linked by role; re-tagged parent→[+]-α-HTBZ ×14
- molar mass: no plausible PubChem entry for '[+]-α-dihydrotetrabenazine ([+]-α-HTBZ)' ('[+]-α-HTBZ') — left in mass units
- molar mass: no plausible PubChem entry for '[+]-α-HTBZ' ('[+]-α-HTBZ') — left in mass units
- molar mass: none found for '[+]-α-dihydrotetrabenazine ([+]-α-HTBZ)' — its concentrations stay mass-only
- molar mass: none found for '[+]-α-HTBZ' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '[+]-α-HTBZ', not valbenazine — the review values are the parent's
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- unparsed cell jcph70092-tbl-0001:row1:col3 = '(21.4, 25.0)'
- unparsed cell jcph70092-tbl-0001:row2:col3 = '(206, 246)'
- unparsed cell jcph70092-tbl-0001:row3:col3 = '(7.79, 9.06)'
- unparsed cell jcph70092-tbl-0001:row4:col3 = '(20.1, 23.9)'
- unparsed cell jcph70092-tbl-0001:row5:col3 = '(185, 211)'
- unparsed cell jcph70092-tbl-0001:row6:col3 = '(1.07, 1.65)'
- unparsed cell jcph70092-tbl-0001:row7:col3 = '(49.6, 131)'
- unparsed cell jcph70092-tbl-0001:row8:col3 = '(1.35, 1.68)'
- unparsed cell jcph70092-tbl-0001:row9:col3 = '(−0.696, −0.674)'
- unparsed cell jcph70092-tbl-0001:row10:col3 = '(−0.0901, −0.0391)'
- unparsed cell jcph70092-tbl-0001:row11:col3 = '(28.0, 34.1)'
- unparsed cell jcph70092-tbl-0001:row12:col3 = '(0.199, 0.214)'
- unparsed cell jcph70092-tbl-0001:row13:col3 = '(1.08, 1.45)'
- unparsed cell jcph70092-tbl-0001:row14:col3 = '(84.2, 111)'
- unparsed cell jcph70092-tbl-0001:row15:col3 = '(−0.641, −0.391)'
- unparsed cell jcph70092-tbl-0001:row16:col3 = '(−0.366, −0.197)'
- unparsed cell jcph70092-tbl-0001:row17:col3 = '(0.352, 0.852)'
- unparsed cell jcph70092-tbl-0001:row18:col3 = '(0.695, 1.39)'
- unparsed cell jcph70092-tbl-0001:row20:col3 = '(0.395, 0.410)'
- unparsed cell jcph70092-tbl-0001:row20:col4 = '40.2% (39.5%, 41.0%)'
- unparsed cell jcph70092-tbl-0001:row21:col3 = '(0.649, 0.708)'
- unparsed cell jcph70092-tbl-0001:row21:col4 = '67.8% (64.9%, 70.8%)'
- unparsed cell jcph70092-tbl-0001:row22:col3 = '(0.259, 0.270)'
- unparsed cell jcph70092-tbl-0001:row22:col4 = '26.4% (25.9%, 27.0%)'
- unparsed cell jcph70092-tbl-0001:row23:col3 = '(0.688, 0.752)'
- unparsed cell jcph70092-tbl-0001:row23:col4 = '72.0% (68.8%, 75.2%)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.657 (23/35 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[13 clm].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[14 fm]` | 0.207 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[14 fm]` |  | 0.207 | only_one_extracted |
| `gpt-oss-120b` | `parameters[3 ka].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[6 fmax].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_intermediate_metabolizer]` |  | -0.281 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_fed]` |  | -0.0646 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_fed]` |  | -0.685 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_wt]` |  | 0.602 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_intermediate_metabolizer]` | -0.281 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q63_wt]` |  | 1.04 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | [+]-α-HTBZ | valbenazine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph70092-tbl-0001:row11:col1', 'jcph70092-tbl-0001:row11:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph70092-tbl-0001:row1:col1', 'jcph70092-tbl-0001:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['jcph70092-tbl-0001:row2:col1', 'jcph70092-tbl-0001:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph70092-tbl-0001:row13:col1', 'jcph70092-tbl-0001:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph70092-tbl-0001:row3:col1', 'jcph70092-tbl-0001:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph70092-tbl-0001:row14:col1', 'jcph70092-tbl-0001:row14:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['jcph70092-tbl-0001:row4:col1', 'jcph70092-tbl-0001:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['jcph70092-tbl-0001:row5:col1', 'jcph70092-tbl-0001:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 31 L/h | ['jcph70092-tbl-0001:row11:col1', 'jcph70092-tbl-0001:row11:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.2 L/h | ['jcph70092-tbl-0001:row1:col1', 'jcph70092-tbl-0001:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 226 L | ['jcph70092-tbl-0001:row2:col1', 'jcph70092-tbl-0001:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 97.8 L | ['jcph70092-tbl-0001:row14:col1', 'jcph70092-tbl-0001:row14:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 198 L | ['jcph70092-tbl-0001:row5:col1', 'jcph70092-tbl-0001:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=[+]-α-HTBZ) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 8 scholar param(s) emitted or defaulted | 6 covered | neither emitted nor in defaulted[]: ['V2/F', 'V2'] |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.83 | 8.256e-05 | unresolved concentration unit (exp '', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 8.43 /h, F 1). Doses in the paper: 20, 40, 60, 80 mg.

<dbs-fmusim paramsurl="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Valbenazine_Nguyen2025_reference_params.json` · controls `Valbenazine_Nguyen2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalbenazine%5D%20Valbenazine_Nguyen2025_reference&body=Drug%3A%20valbenazine%0ARecord%3A%20Valbenazine_Nguyen2025_reference%0APaper%3A%20Nguyen_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:03 UTC</sub>
