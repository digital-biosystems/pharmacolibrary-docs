<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;vortioxetine&quot;,&quot;href&quot;:&quot;drugs/drug_vortioxetine/&quot;},{&quot;label&quot;:&quot;Frederiksen_2021_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vortioxetine — `Vortioxetine_Frederiksen2021v2_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Needs review), but the paper was screened again on 2026-10-07 19:05 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="vortioxetine" model-id="Vortioxetine_Frederiksen2021v2_reference" status="extracted" stale="true" population="adults" measured-compound="vortioxetine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Frederiksen T, Areberg J, Schmidt E, Bjerregaard Stage T, Brøsen K. Quantification of In Vivo Metabolic Activity of CYP2D6 Genotypes and Alleles Through Population Pharmacokinetic Analysis of Vortioxetine. Clinical pharmacology and therapeutics 109(1):150–159 (2021).
  ·  DOI: [10.1002/cpt.1972](https://doi.org/10.1002/cpt.1972)

## Population and dosing

**Population:** adults · condition healthy · age group adult · n = 1140.

**Dosing:** 2.5, 60, 75 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted, plus 4 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Absorption rate constant, ka | kabs | 0.160 | 1/h | 1.6 | 50.8 (6.1% RSE) |
| Absorption rate constant, metabolite, ka,met | kabs | 0.281 | 1/h | 2.8 |  |
| Presystemic metabolite formation, Fmet | fm | 0.190 |  | 1.9 |  |
| Volume of distribution, vortioxetine central compartment, V3 | V1 | 1510 | L | 2.4 | 30.1 (6.9% RSE) |
| Inter‐compartmental clearance, vortioxetine, Q | Q | 21.1 | L/h | 2.9 | 14.3 (85% RSE) |
| Volume of distribution, vortioxetine peripheral compartment, V4 | V2 | 571 | L | 5.8 | 60.7 (8.7% RSE) |
| Intercompartmental clearance, vortioxetine, Qmet | Q | 7.69 | L/h | 2.8 |  |
| Volume of distribution, Lu AA34443 central compartment, V5 | V1 | 155 | L | 3.4 |  |
| Lu AA34443 clearance, CLmet | CL | 22.5 | L/h | 1.8 | 43.2 (6.0% RSE) |
| Volume of distribution, Lu AA34443 peripheral compartment, V6 | V2 | 211 | L | 0.8 |  |
| Lag‐time (ALAG) | tlag | 0.966 | h | 66.8 |  |
| theta_q370_cyp2d6 | theta_q370_cyp2d6 | 13.1 |  | 0.8 |  |
| theta_q22_cyp2c19 | theta_q22_cyp2c19 | 12.5 |  |  |  |
| theta_q77_height | theta_q77_height | 1.48 |  | 11.1 |  |
| theta_q900_weight | theta_q900_weight | 0.918 |  | 21.0 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.789). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The vortioxetine parent–metabolite model was quarantined because vortioxetine's bioavailability (F), clearance (CL) and absorption lag time (Tlag) had no extracted values and library placeholder values were substituted instead.**

The record lists kabs 0.160 1/h, V1 1510 L, Q 21.1 L/h and V2 571 L for vortioxetine, and kabs 0.281 1/h, fm 0.190, V1 155 L, CL 22.5 L/h, Q 7.69 L/h and V2 211 L for Lu AA34443, but F, CL and Tlag for the parent had no value, so placeholders stood in and the model was held back rather than published with invented numbers. The model structure also did not match the paper: a parent–metabolite hepatic structure with three compartments was expected, but a one-compartment enteral structure was obtained. The covariate effects defined in the record (e.g. theta_q370_cyp2d6 13.1 and theta_q22_cyp2c19 12.5) were not exercised in simulation, which simulated only the reference individual. A second reader additionally reported covariate parameters absent from this record, such as theta_cl_age 0.157 and theta_v3_height 1.48. Extracted — vortioxetine: kabs 0.16 1/h, V1 1.51e+03 L, Q 21.1 L/h, V2 571 L, tlag 0.966 h; Lu AA34443: kabs 0.281 1/h, fm 0.19, Q 7.69 L/h, V1 155 L, CL 22.5 L/h, V2 211 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of lbm on clother: this record has none, the second reading 1.36; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, ka | `Q49` · kabs | 0.160 | 1/h | 4.444e-05 | 1/s | 1/h | 1.6 | llm_confirmed (0.6) | cpt1972-tbl-0002:row2:col1, cpt1972-tbl-0002:row2:col3 | 50.8 (6.1% RSE) |
| Absorption rate constant, metabolite, ka,met | `Q49` · kabs | 0.281 | 1/h | 7.806e-05 | 1/s | 1/h | 2.8 | exact (1) | cpt1972-tbl-0002:row3:col1, cpt1972-tbl-0002:row3:col3 |  |
| Presystemic metabolite formation, Fmet | `Q45` · fm | 0.190 |  |  |  |  | 1.9 | exact (1) | cpt1972-tbl-0002:row4:col1, cpt1972-tbl-0002:row4:col3 |  |
| Volume of distribution, vortioxetine central compartment, V3 | `Q63` · V1 | 1510 | L | 1.51 | m3 | L | 2.4 | exact (1) | cpt1972-tbl-0002:row5:col1, cpt1972-tbl-0002:row5:col3 | 30.1 (6.9% RSE) |
| Inter‐compartmental clearance, vortioxetine, Q | `Q30` · Q | 21.1 | L/h | 5.861e-06 | m3/s | L/h | 2.9 | llm_corrected (0.6) | cpt1972-tbl-0002:row7:col1, cpt1972-tbl-0002:row7:col3 | 14.3 (85% RSE) |
| Volume of distribution, vortioxetine peripheral compartment, V4 | `Q64` · V2 | 571 | L | 0.571 | m3 | L | 5.8 | exact (1) | cpt1972-tbl-0002:row8:col1, cpt1972-tbl-0002:row8:col3 | 60.7 (8.7% RSE) |
| Intercompartmental clearance, vortioxetine, Qmet | `Q30` · Q | 7.69 | L/h | 2.136e-06 | m3/s | L/h | 2.8 | exact (1) | cpt1972-tbl-0002:row9:col1, cpt1972-tbl-0002:row9:col3 |  |
| Volume of distribution, Lu AA34443 central compartment, V5 | `Q63` · V1 | 155 | L | 0.155 | m3 | L | 3.4 | exact (1) | cpt1972-tbl-0002:row10:col1, cpt1972-tbl-0002:row10:col3 |  |
| Lu AA34443 clearance, CLmet | `Q22` · CL | 22.5 | L/h | 6.25e-06 | m3/s | L/h | 1.8 | exact (1) | cpt1972-tbl-0002:row11:col1, cpt1972-tbl-0002:row11:col3 | 43.2 (6.0% RSE) |
| Volume of distribution, Lu AA34443 peripheral compartment, V6 | `Q64` · V2 | 211 | L | 0.211 | m3 | L | 0.8 | exact (1) | cpt1972-tbl-0002:row12:col1, cpt1972-tbl-0002:row12:col3 |  |
| Lag‐time (ALAG) | `Q83` · tlag | 0.966 | h | 3478 | s | h | 66.8 | llm (0.6) | cpt1972-tbl-0002:row13:col1, cpt1972-tbl-0002:row13:col3 |  |
| theta_q370_cyp2d6 | `Q900` · theta_q370_cyp2d6 | 13.1 |  |  |  |  | 0.8 |  | cpt1972-tbl-0002:row6:col1, cpt1972-tbl-0002:row6:col3 |  |
| theta_q22_cyp2c19 | `Q900` · theta_q22_cyp2c19 | 12.5 |  |  |  |  |  |  | cpt1972-tbl-0002:row17:col1, cpt1972-tbl-0002:row17:col3 |  |
| theta_q77_height | `Q900` · theta_q77_height | 1.48 |  |  |  |  | 11.1 |  | cpt1972-tbl-0002:row21:col1, cpt1972-tbl-0002:row21:col3 |  |
| theta_q900_weight | `Q900` · theta_q900_weight | 0.918 |  |  |  |  | 21.0 |  | cpt1972-tbl-0002:row22:col1, cpt1972-tbl-0002:row22:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Absorption rate constant, ka' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Absorption rate constant, metabolite, ka,met' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Presystemic metabolite formation, Fmet' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, vortioxetine central compartment, V3' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'CYP2D6 mediated clearance (CLCYP2D6)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Inter‐compartmental clearance, vortioxetine, Q' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, vortioxetine peripheral compartment, V4' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Intercompartmental clearance, vortioxetine, Qmet' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, Lu AA34443 central compartment, V5' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Lu AA34443 clearance, CLmet' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, Lu AA34443 peripheral compartment, V6' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Lag‐time (ALAG)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'CYP2C19 poor metabolizers' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'CYP2C19 intermediate metabolizers' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'CYP2C19 normal metabolizers' routed out of structural estimates ('IIV (%RSE)')
- table section covariance: 'ρ (Fmet,V3)' routed out of structural estimates ('Correlation coefficients (ρ) a')
- table section covariance: 'ρ (Fmet,CLCYP2D6)' routed out of structural estimates ('Correlation coefficients (ρ) a')
- table section covariance: 'ρ (CLCYP2D6,V3)' routed out of structural estimates ('Correlation coefficients (ρ) a')
- table section covariance: 'ρ (CLmet,V5)' routed out of structural estimates ('Correlation coefficients (ρ) a')
- table section covariance: 'Residual error (proportional) b' routed out of structural estimates ('Correlation coefficients (ρ) a')
- unit_dimension_unknown: 'ALAG' (tlag)
- dropped unlinked row (NIL): 'Age on CLother' — extend the ontology if this is a real PK parameter (source ['cpt1972-tbl-0002:row18:col1', 'cpt1972-tbl-0002:row18:col3'])
- dropped unlinked row (NIL): 'Creatinine clearance on CLother' — extend the ontology if this is a real PK parameter (source ['cpt1972-tbl-0002:row19:col1', 'cpt1972-tbl-0002:row19:col3'])
- dropped unlinked row (NIL): 'LBM on CLother' — extend the ontology if this is a real PK parameter (source ['cpt1972-tbl-0002:row20:col1', 'cpt1972-tbl-0002:row20:col3'])
- dropped unlinked row (NIL): 'Weight on V5' — extend the ontology if this is a real PK parameter (source ['cpt1972-tbl-0002:row23:col1', 'cpt1972-tbl-0002:row23:col3'])
- dropped value-less row: '95% CI'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['cpt1972-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['cpt1972-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q370 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q77 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant, ka' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (first-order rate constant), which is conventionally expressed in 1/h in po')
- implicit units: 'Absorption rate constant, metabolite, ka,met' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant for the metabolite (first-order rate constant), which is conventionally exp')
- implicit units: 'Volume of distribution, vortioxetine central compartment, V3' → L (from the paper text: "The text states that vortioxetine has a 'steady‐state volume of distribution of ~ 2,600 L', establishing the unit for vo")
- implicit units: 'Inter‐compartmental clearance, vortioxetine, Q' → L/h (from the popPK convention: 'The parameter is an intercompartmental clearance. In population PK, clearances are conventionally expressed in L/h, and ')
- implicit units: 'Volume of distribution, vortioxetine peripheral compartment, V4' → L (from the paper text: "The text states that vortioxetine has a 'steady‐state volume of distribution of ~ 2,600 L', establishing the unit for vo")
- implicit units: 'Intercompartmental clearance, vortioxetine, Qmet' → L/h (from the popPK convention: 'The parameter is an intercompartmental clearance. In population PK, clearances are conventionally expressed in L/h, and ')
- implicit units: 'Volume of distribution, Lu AA34443 central compartment, V5' → L (from the popPK convention: 'The parameter is a volume of distribution. In population PK, volumes are conventionally expressed in Liters (L), and the')
- implicit units: 'Lu AA34443 clearance, CLmet' → L/h (from the popPK convention: 'The parameter is a clearance. In population PK, clearances are conventionally expressed in L/h, and the magnitude (22.5)')
- implicit units: 'Volume of distribution, Lu AA34443 peripheral compartment, V6' → L (from the popPK convention: 'The parameter is a volume of distribution. In population PK, volumes are conventionally expressed in Liters (L), and the')
- implicit units: 'Lag‐time (ALAG)' → h (from the popPK convention: 'The parameter is an absorption lag time. In population PK, time parameters are conventionally expressed in hours (h), an')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Volume of distribution, vortioxetine central compartment, V3); Q30 (Inter‐compartmental clearance, vortioxetine, Q); Q64 (Volume of distribution, vortioxetine peripheral compartment, V4); Q30 (Intercompartmental clearance, vortioxetine, Qmet); Q63 (Volume of distribution, Lu AA34443 central compartment, V5); Q22 (Lu AA34443 clearance, CLmet); Q64 (Volume of distribution, Lu AA34443 peripheral compartment, V6)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vortioxetine
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [2] (site presystemic: 'An early appearance of Lu AA34443 in plasma indicated presence of presystemic formation of the metabolite, which was ass')
- row roles: per-genotype parameters — typical value from the reference group: CYP2C19 normal metabolizers
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 39 linked by role; re-tagged parent→Lu AA34443 ×25

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.789 (30/38 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[lbm on clother]` |  | 1.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lu aa34443 clearance, clmet].covariate_forms` | [] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_age]` |  | 0.157 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_creatinine]` |  | 0.0668 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_cyp2c19]` |  | 12.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_cyp2c19]` | 12.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_weight]` |  | 0.455 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_weight]` | 0.918 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cpt1972-tbl-0002:row11:col1', 'cpt1972-tbl-0002:row11:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cpt1972-tbl-0002:row7:col1', 'cpt1972-tbl-0002:row7:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cpt1972-tbl-0002:row9:col1', 'cpt1972-tbl-0002:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt1972-tbl-0002:row2:col1', 'cpt1972-tbl-0002:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt1972-tbl-0002:row3:col1', 'cpt1972-tbl-0002:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cpt1972-tbl-0002:row5:col1', 'cpt1972-tbl-0002:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cpt1972-tbl-0002:row10:col1', 'cpt1972-tbl-0002:row10:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cpt1972-tbl-0002:row8:col1', 'cpt1972-tbl-0002:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cpt1972-tbl-0002:row12:col1', 'cpt1972-tbl-0002:row12:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['cpt1972-tbl-0002:row13:col1', 'cpt1972-tbl-0002:row13:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22.5 L/h | ['cpt1972-tbl-0002:row11:col1', 'cpt1972-tbl-0002:row11:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.51e+03 L | ['cpt1972-tbl-0002:row5:col1', 'cpt1972-tbl-0002:row5:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 155 L | ['cpt1972-tbl-0002:row10:col1', 'cpt1972-tbl-0002:row10:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 571 L | ['cpt1972-tbl-0002:row8:col1', 'cpt1972-tbl-0002:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 211 L | ['cpt1972-tbl-0002:row12:col1', 'cpt1972-tbl-0002:row12:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | pass | 10 scholar param(s) emitted or defaulted | 10 covered | all structural parameters accounted for |
| T3_topology_template |  | fail | parent_metabolite_hepatic → PK_3M_3C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 66 |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_matlab.zip" download>Vortioxetine_Frederiksen2021v2_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_matlab_simbio.zip" download>Vortioxetine_Frederiksen2021v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_sbml.zip" download>Vortioxetine_Frederiksen2021v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_cellml.zip" download>Vortioxetine_Frederiksen2021v2_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Frederiksen T, Areberg J, Schmidt E, Bjerregaard Stage T, Brøsen K. Quantification of In Vivo Metabolic Activity of CYP2D6 Genotypes and Alleles Through Population Pharmacokinetic Analysis of Vortioxetine. Clinical pharmacology and therapeutics 109(1):150–159 (2021). [doi:10.1002/cpt.1972](https://doi.org/10.1002/cpt.1972)

**This record:** Pharmacolibrary v26.09, model `Vortioxetine_Frederiksen2021v2_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference>

```bibtex
@misc{pharmacolibrary_VortioxetineFrederiksen2021v2reference,
  title  = {{Pharmacolibrary model Vortioxetine_Frederiksen2021v2_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference},
  note   = {Parameters from doi:10.1002/cpt.1972},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvortioxetine%5D%20Vortioxetine_Frederiksen2021v2_reference&body=Drug%3A%20vortioxetine%0ARecord%3A%20Vortioxetine_Frederiksen2021v2_reference%0APaper%3A%20Frederiksen_2021_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:05 UTC</sub>
