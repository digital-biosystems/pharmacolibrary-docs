<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;vortioxetine&quot;,&quot;href&quot;:&quot;drugs/drug_vortioxetine/&quot;},{&quot;label&quot;:&quot;Frederiksen_2021_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vortioxetine — `Vortioxetine_Frederiksen2021v2_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.789), gpt-oss:120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The vortioxetine parent–metabolite model was quarantined because vortioxetine's bioavailability (F), clearance (CL) and absorption lag time (Tlag) had no extracted values and library placeholder values were substituted instead.**

The record lists kabs 0.160 1/h, V1 1510 L, Q 21.1 L/h and V2 571 L for vortioxetine, and kabs 0.281 1/h, fm 0.190, V1 155 L, CL 22.5 L/h, Q 7.69 L/h and V2 211 L for Lu AA34443, but F, CL and Tlag for the parent had no value, so placeholders stood in and the model was held back rather than published with invented numbers. The model structure also did not match the paper: a parent–metabolite hepatic structure with three compartments was expected, but a one-compartment enteral structure was obtained. The covariate effects defined in the record (e.g. theta_q370_cyp2d6 13.1 and theta_q22_cyp2c19 12.5) were not exercised in simulation, which simulated only the reference individual. A second reader additionally reported covariate parameters absent from this record, such as theta_cl_age 0.157 and theta_v3_height 1.48. Extracted — vortioxetine: kabs 0.16 1/h, V1 1.51e+03 L, Q 21.1 L/h, V2 571 L, tlag 0.966 h; Lu AA34443: kabs 0.281 1/h, fm 0.19, Q 7.69 L/h, V1 155 L, CL 22.5 L/h, V2 211 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of lbm on clother: this record has none, the second reading 1.36; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-10-05 09:32:54.604512+00:00) predates the upstream re-run (2026-10-07 19:05:08.036904+00:00). Current validate status: `extracted`.

## Citation
Frederiksen T et al., Quantification of In Vivo Metabolic Act…, Clinical pharmacology and t… (2021)
  ·  DOI: [10.1002/cpt.1972](https://doi.org/10.1002/cpt.1972)

<div class="pk-model-meta" hidden drug="vortioxetine" model-id="Vortioxetine_Frederiksen2021v2_reference" status="extracted" stale="true" population="adults" measured-compound="vortioxetine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 11 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, ka | `Q49` · kabs | 0.160 | 1/h | 4.4444444444444447e-05 | 1/h | 1.6 | llm_confirmed (0.6) | cpt1972-tbl-0002:row2:col1, cpt1972-tbl-0002:row2:col3 | — | 50.8 (6.1% RSE) |
| Absorption rate constant, metabolite, ka,met | `Q49` · kabs | 0.281 | 1/h | 7.805555555555556e-05 | 1/h | 2.8 | exact (1.0) | cpt1972-tbl-0002:row3:col1, cpt1972-tbl-0002:row3:col3 | — | not captured |
| Presystemic metabolite formation, Fmet | `Q45` · fm | 0.190 | not captured | not captured | not captured | 1.9 | exact (1.0) | cpt1972-tbl-0002:row4:col1, cpt1972-tbl-0002:row4:col3 | — | not captured |
| Volume of distribution, vortioxetine central compartment, V3 | `Q63` · V1 | 1510 | L | 1.51 | L | 2.4 | exact (1.0) | cpt1972-tbl-0002:row5:col1, cpt1972-tbl-0002:row5:col3 | — | 30.1 (6.9% RSE) |
| Inter‐compartmental clearance, vortioxetine, Q | `Q30` · Q | 21.1 | L/h | 5.861111111111111e-06 | L/h | 2.9 | llm_corrected (0.6) | cpt1972-tbl-0002:row7:col1, cpt1972-tbl-0002:row7:col3 | — | 14.3 (85% RSE) |
| Volume of distribution, vortioxetine peripheral compartment, V4 | `Q64` · V2 | 571 | L | 0.5710000000000001 | L | 5.8 | exact (1.0) | cpt1972-tbl-0002:row8:col1, cpt1972-tbl-0002:row8:col3 | — | 60.7 (8.7% RSE) |
| Intercompartmental clearance, vortioxetine, Qmet | `Q30` · Q | 7.69 | L/h | 2.136111111111111e-06 | L/h | 2.8 | exact (1.0) | cpt1972-tbl-0002:row9:col1, cpt1972-tbl-0002:row9:col3 | — | not captured |
| Volume of distribution, Lu AA34443 central compartment, V5 | `Q63` · V1 | 155 | L | 0.155 | L | 3.4 | exact (1.0) | cpt1972-tbl-0002:row10:col1, cpt1972-tbl-0002:row10:col3 | — | not captured |
| Lu AA34443 clearance, CLmet | `Q22` · CL | 22.5 | L/h | 6.2499999999999995e-06 | L/h | 1.8 | exact (1.0) | cpt1972-tbl-0002:row11:col1, cpt1972-tbl-0002:row11:col3 | — | 43.2 (6.0% RSE) |
| Volume of distribution, Lu AA34443 peripheral compartment, V6 | `Q64` · V2 | 211 | L | 0.211 | L | 0.8 | exact (1.0) | cpt1972-tbl-0002:row12:col1, cpt1972-tbl-0002:row12:col3 | — | not captured |
| Lag‐time (ALAG) | `Q83` · tlag | 0.966 | h | 3477.6 | h | 66.8 | llm (0.6) | cpt1972-tbl-0002:row13:col1, cpt1972-tbl-0002:row13:col3 | — | not captured |
| theta_q370_cyp2d6 | `Q900` · theta_q370_cyp2d6 | 13.1 | not captured | not captured | not captured | 0.8 | not captured (not captured) | cpt1972-tbl-0002:row6:col1, cpt1972-tbl-0002:row6:col3 | — | not captured |
| theta_q22_cyp2c19 | `Q900` · theta_q22_cyp2c19 | 12.5 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt1972-tbl-0002:row17:col1, cpt1972-tbl-0002:row17:col3 | — | not captured |
| theta_q77_height | `Q900` · theta_q77_height | 1.48 | not captured | not captured | not captured | 11.1 | not captured (not captured) | cpt1972-tbl-0002:row21:col1, cpt1972-tbl-0002:row21:col3 | — | not captured |
| theta_q900_weight | `Q900` · theta_q900_weight | 0.918 | not captured | not captured | not captured | 21.0 | not captured (not captured) | cpt1972-tbl-0002:row22:col1, cpt1972-tbl-0002:row22:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.789 (30/38 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.769 (20/26 fields) | 6 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[lbm on clother]` | not captured | 1.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lu aa34443 clearance, clmet].covariate_forms` | [] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_age]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_creatinine]` | not captured | 0.0668 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_cyp2c19]` | not captured | 12.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_cyp2c19]` | 12.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_weight]` | not captured | 0.455 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_weight]` | 0.918 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[lu aa34443 clearance, clmet].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[theta_cl_age]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v3_height]` | not captured | 1.48 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution, lu aa34443 central compartment, v5]` | 155 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution, vortioxetine central compartment, v3].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[volume of distribution, vortioxetine peripheral compartment, v4].parameter_id` | Q64 | Q61 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row11:col1', 'cpt1972-tbl-0002:row11:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row7:col1', 'cpt1972-tbl-0002:row7:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row9:col1', 'cpt1972-tbl-0002:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row2:col1', 'cpt1972-tbl-0002:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row3:col1', 'cpt1972-tbl-0002:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1972-tbl-0002:row5:col1', 'cpt1972-tbl-0002:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1972-tbl-0002:row10:col1', 'cpt1972-tbl-0002:row10:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1972-tbl-0002:row8:col1', 'cpt1972-tbl-0002:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1972-tbl-0002:row12:col1', 'cpt1972-tbl-0002:row12:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row13:col1', 'cpt1972-tbl-0002:row13:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22.5 L/h | not captured | not captured | ['cpt1972-tbl-0002:row11:col1', 'cpt1972-tbl-0002:row11:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.51e+03 L | not captured | not captured | ['cpt1972-tbl-0002:row5:col1', 'cpt1972-tbl-0002:row5:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 155 L | not captured | not captured | ['cpt1972-tbl-0002:row10:col1', 'cpt1972-tbl-0002:row10:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 571 L | not captured | not captured | ['cpt1972-tbl-0002:row8:col1', 'cpt1972-tbl-0002:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 211 L | not captured | not captured | ['cpt1972-tbl-0002:row12:col1', 'cpt1972-tbl-0002:row12:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 10 scholar param(s) emitted or defaulted | 10 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite_hepatic → PK_3M_3C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 66 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vortioxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Frederiksen_2021_2` / `Frederiksen_2021_2::reference`)
- model: `../../../knowledgebase/drugs/drug_vortioxetine/models/modelica/_needs_review/Vortioxetine_Frederiksen2021v2_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_vortioxetine/models/modelica/_needs_review/Vortioxetine_Frederiksen2021v2_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_matlab.zip" download>Vortioxetine_Frederiksen2021v2_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_matlab_simbio.zip" download>Vortioxetine_Frederiksen2021v2_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_sbml.zip" download>Vortioxetine_Frederiksen2021v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_cellml.zip" download>Vortioxetine_Frederiksen2021v2_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:05 UTC</sub>
