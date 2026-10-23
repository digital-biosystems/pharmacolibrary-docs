<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;elinzanetant&quot;,&quot;href&quot;:&quot;drugs/drug_elinzanetant/&quot;},{&quot;label&quot;:&quot;Willmann_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# elinzanetant — `Elinzanetant_Willmann2024_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="elinzanetant" model-id="Elinzanetant_Willmann2024_reference" status="not_simulated" stale="false" population="healthy adults and women with vasomotor symptoms" measured-compound="elinzanetant" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Willmann S, Lloyd A, Austin R, Joseph S, Solms A, Zhang Y et al. Population pharmacokinetic-pharmacodynamic model of elinzanetant based on integrated clinical phase I and II data. CPT: pharmacometrics & systems pharmacology 13(12):2137–2149 (2024).
  ·  DOI: [10.1002/psp4.13226](https://doi.org/10.1002/psp4.13226)

## Population and dosing

**Population:** healthy adults and women with vasomotor symptoms · condition vasomotor symptoms associated with menopause · age group adult · n = 366.

**Dosing:** 40, 160 mg, oral, multiple, every 24 h.

## Model

**Structure:** 4-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 20 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLpop | CL | 7.26 | L/h | 4.94 |
| Vcpop | V | 23.7 | L | 4.64 |
| Vp | V2 | 168 | L | 2.00 |
| Q | Q | 6.57 | L/h | 2.56 |
| KaREF d | kabs | 2.37 | 1/h | 7.22 |
| ALAGREF d | tlag | 0.292 | h | 0.163 |
| FREF e | fe | 0.367 | THETA | 1.78 |
| ALFED2 | equation variable | 0.545 | THETA | 2.91 |
| CL3034pop | CL | 4.14 | L/h | 5.44 |
| Vc3034 | V1 | 3.58 | L | 7.76 |
| Vp3034 | V2 | 15.6 | L | 4.56 |
| Q3034 | Q | 3.65 | L/h | 9.05 |
| Vmax3034 | equation variable | 24.1 | THETA | 10.8 |
| CL27pop | CL | 4.11 | L/h | 5.85 |
| Vc27 | V1 | 1.85 | L | 7.84 |
| Vp27 | V2 | 40.4 | L | 5.83 |
| Q27 | Q | 4.45 | L/h | 5.77 |
| Vmax27 | equation variable | 42.6 | THETA | 12.6 |
| Km27 | Km | 17.7 | ng/mL | 11.0 |
| CL1821pop | CL | 9.10 | L/h | 6.14 |
| Vc1821 | V | 0.636 | L | 9.86 |
| Km18/21 | Km | 45.8 | ng/mL | 13.0 |
| λ | kel | 2.07 | 1/h | 9.51 |
| θSHIFT | θSHIFT | 8.05 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simulation failed because eight parameters, including M27 and M30/34 volumes and rate constants, lacked valid SI units.**

The record specifies 17 parameters, but only 9 were processed with valid SI values. Specific parameters for metabolites M27 and M30/34, such as their peripheral volumes and absorption rate constants, were missing from the simulation due to unconvertible units. Additionally, while the base model was simulated, the defined covariate scenarios were not exercised. Extracted — elinzanetant: CL 7.26 L/h, V 23.7 L, V2 168 L, Q 6.57 L/h, kabs 2.37 1/h, tlag 0.292 h, fe 0.367 THETA, kel 2.07 1/h; M30/34: CL 4.14 L/h, V1 3.58 L, V2 15.6 L, Q 3.65 L/h; M27: CL 4.11 L/h, V1 1.85 L, V2 40.4 L, Q 4.45 L/h, Km 17.7 ng/mL; M18/21: CL 9.1 L/h, V 0.636 L, Km 45.8 ng/mL.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLpop | `Q22` · CL | 7.26 | L/h | 2.017e-06 | m3/s | L/h | 4.94 | llm (0.6) | psp413226-tbl-0002:row2:col2, psp413226-tbl-0002:row2:col3, psp413226-tbl-0002:row2:col4, psp413226-tbl-0002:row2:col5 |
| Vcpop | `Q61` · V | 23.7 | L | 0.0237 | m3 | L | 4.64 | llm (0.6) | psp413226-tbl-0002:row3:col2, psp413226-tbl-0002:row3:col3, psp413226-tbl-0002:row3:col4, psp413226-tbl-0002:row3:col5 |
| Vp | `Q64` · V2 | 168 | L | 0.168 | m3 | L | 2.00 | exact (1) | psp413226-tbl-0002:row4:col2, psp413226-tbl-0002:row4:col3, psp413226-tbl-0002:row4:col4, psp413226-tbl-0002:row4:col5 |
| Q | `Q30` · Q | 6.57 | L/h | 1.825e-06 | m3/s | L/h | 2.56 | exact (1) | psp413226-tbl-0002:row5:col2, psp413226-tbl-0002:row5:col3, psp413226-tbl-0002:row5:col4, psp413226-tbl-0002:row5:col5 |
| KaREF d | `Q49` · kabs | 2.37 | 1/h | 0.0006583 | 1/s | 1/h | 7.22 | llm (0.6) | psp413226-tbl-0002:row6:col2, psp413226-tbl-0002:row6:col3, psp413226-tbl-0002:row6:col4, psp413226-tbl-0002:row6:col5 |
| ALAGREF d | `Q83` · tlag | 0.292 | h | 1051 | s | h | 0.163 | exact (1) | psp413226-tbl-0002:row7:col2, psp413226-tbl-0002:row7:col3, psp413226-tbl-0002:row7:col4, psp413226-tbl-0002:row7:col5 |
| FREF e | `Q44` · fe | 0.367 | THETA |  |  | theta | 1.78 | llm (0.6) | psp413226-tbl-0002:row8:col2, psp413226-tbl-0002:row8:col3, psp413226-tbl-0002:row8:col4, psp413226-tbl-0002:row8:col5 |
| ALFED2 | `Q900` · equation variable | 0.545 | THETA |  |  | theta | 2.91 | llm (0.6) | psp413226-tbl-0002:row11:col2, psp413226-tbl-0002:row11:col3, psp413226-tbl-0002:row11:col4, psp413226-tbl-0002:row11:col5, psp413226-tbl-0002:row11:col6 |
| CL3034pop | `Q22` · CL | 4.14 | L/h | 1.15e-06 | m3/s | L/h | 5.44 | exact (1) | psp413226-tbl-0002:row14:col2, psp413226-tbl-0002:row14:col3, psp413226-tbl-0002:row14:col4, psp413226-tbl-0002:row14:col5, psp413226-tbl-0002:row14:col6 |
| Vc3034 | `Q63` · V1 | 3.58 | L | 0.00358 | m3 | L | 7.76 | exact (1) | psp413226-tbl-0002:row15:col2, psp413226-tbl-0002:row15:col3, psp413226-tbl-0002:row15:col4, psp413226-tbl-0002:row15:col5, psp413226-tbl-0002:row15:col6 |
| Vp3034 | `Q64` · V2 | 15.6 | L | 0.0156 | m3 | L | 4.56 | exact (1) | psp413226-tbl-0002:row16:col2, psp413226-tbl-0002:row16:col3, psp413226-tbl-0002:row16:col4, psp413226-tbl-0002:row16:col5, psp413226-tbl-0002:row16:col6 |
| Q3034 | `Q30` · Q | 3.65 | L/h | 1.014e-06 | m3/s | L/h | 9.05 | exact (1) | psp413226-tbl-0002:row17:col2, psp413226-tbl-0002:row17:col3, psp413226-tbl-0002:row17:col4, psp413226-tbl-0002:row17:col5, psp413226-tbl-0002:row17:col6 |
| Vmax3034 | `Q900` · equation variable | 24.1 | THETA |  |  | theta | 10.8 | llm (0.6) | psp413226-tbl-0002:row18:col2, psp413226-tbl-0002:row18:col3, psp413226-tbl-0002:row18:col4, psp413226-tbl-0002:row18:col5, psp413226-tbl-0002:row18:col6 |
| CL27pop | `Q22` · CL | 4.11 | L/h | 1.142e-06 | m3/s | L/h | 5.85 | exact (1) | psp413226-tbl-0002:row20:col2, psp413226-tbl-0002:row20:col3, psp413226-tbl-0002:row20:col4, psp413226-tbl-0002:row20:col5 |
| Vc27 | `Q63` · V1 | 1.85 | L | 0.00185 | m3 | L | 7.84 | exact (1) | psp413226-tbl-0002:row21:col2, psp413226-tbl-0002:row21:col3, psp413226-tbl-0002:row21:col4, psp413226-tbl-0002:row21:col5 |
| Vp27 | `Q64` · V2 | 40.4 | L | 0.0404 | m3 | L | 5.83 | exact (1) | psp413226-tbl-0002:row22:col2, psp413226-tbl-0002:row22:col3, psp413226-tbl-0002:row22:col4, psp413226-tbl-0002:row22:col5 |
| Q27 | `Q30` · Q | 4.45 | L/h | 1.236e-06 | m3/s | L/h | 5.77 | exact (1) | psp413226-tbl-0002:row23:col2, psp413226-tbl-0002:row23:col3, psp413226-tbl-0002:row23:col4, psp413226-tbl-0002:row23:col5 |
| Vmax27 | `Q900` · equation variable | 42.6 | THETA |  |  | theta | 12.6 | llm (0.6) | psp413226-tbl-0002:row24:col2, psp413226-tbl-0002:row24:col3, psp413226-tbl-0002:row24:col4, psp413226-tbl-0002:row24:col5 |
| Km27 | `Q1` · Km | 17.7 | ng/mL |  |  | ng/mL | 11.0 | llm (0.6) | psp413226-tbl-0002:row25:col2, psp413226-tbl-0002:row25:col3, psp413226-tbl-0002:row25:col4, psp413226-tbl-0002:row25:col5 |
| CL1821pop | `Q22` · CL | 9.10 | L/h | 2.528e-06 | m3/s | L/h | 6.14 | exact (1) | psp413226-tbl-0002:row26:col2, psp413226-tbl-0002:row26:col3, psp413226-tbl-0002:row26:col4, psp413226-tbl-0002:row26:col5, psp413226-tbl-0002:row26:col6 |
| Vc1821 | `Q61` · V | 0.636 | L | 0.000636 | m3 | L | 9.86 | exact (1) | psp413226-tbl-0002:row27:col2, psp413226-tbl-0002:row27:col3, psp413226-tbl-0002:row27:col4, psp413226-tbl-0002:row27:col5, psp413226-tbl-0002:row27:col6 |
| Km18/21 | `Q1` · Km | 45.8 | ng/mL |  |  | ng/mL | 13.0 | llm (0.6) | psp413226-tbl-0002:row29:col2, psp413226-tbl-0002:row29:col3, psp413226-tbl-0002:row29:col4, psp413226-tbl-0002:row29:col5, psp413226-tbl-0002:row29:col6 |
| λ | `Q47` · kel | 2.07 | 1/h | 0.000575 | 1/s | 1/h | 9.51 | exact (1) | psp413226-tbl-0002:row33:col2, psp413226-tbl-0002:row33:col3, psp413226-tbl-0002:row33:col4, psp413226-tbl-0002:row33:col5 |
| θSHIFT | `Q900` · θSHIFT | 8.05 |  |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'EPS(1,1) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'CV i' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'EPS(2,2) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'EPS(3,3) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'EPS(4,4) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'EPS(5,5) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'THETA' (CL)
- unit_dimension_unknown: 'THETA' (V)
- unit_dimension_unknown: 'THETA' (kabs)
- linked 'ALAGREF d' as 'Tlag' → Q83 (tlag) for  — compound marker removed
- unit_dimension_unknown: 'THETA' (tlag)
- unit_dimension_unknown: 'THETA' (fe)
- routed 'KaFED2' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'KaFORM3' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_unknown: 'THETA' (equation variable)
- dropped duplicate Q900 ('ALFORM3', value '0.548') — already have one for this compound
- dropped unlinked row (NIL): 'FFED2' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row13:col2', 'psp413226-tbl-0002:row13:col3', 'psp413226-tbl-0002:row13:col4', 'psp413226-tbl-0002:row13:col5', 'psp413226-tbl-0002:row13:col6'])
- unit_dimension_unknown: 'THETA' (V1)
- unit_dimension_unknown: 'THETA' (V2)
- unit_dimension_unknown: 'THETA' (Q)
- dropped duplicate Q900 ('Km3034', value '7.87') — already have one for this compound
- dropped unlinked row (NIL): 'Vmax18/21' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row28:col2', 'psp413226-tbl-0002:row28:col3', 'psp413226-tbl-0002:row28:col4', 'psp413226-tbl-0002:row28:col5', 'psp413226-tbl-0002:row28:col6'])
- unit_dimension_unknown: 'THETA' (Km)
- dropped unlinked row (NIL): 'AMP' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row30:col2', 'psp413226-tbl-0002:row30:col3', 'psp413226-tbl-0002:row30:col4', 'psp413226-tbl-0002:row30:col5'])
- dropped unlinked row (NIL): 'AMPMET' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row31:col2', 'psp413226-tbl-0002:row31:col3', 'psp413226-tbl-0002:row31:col4', 'psp413226-tbl-0002:row31:col5'])
- kept covariate coefficient θSHIFT=8.05 (covariate SHIFT) — not an ontology parameter
- unit_dimension_unknown: 'THETA' (kel)
- dropped unlinked row (NIL): 'CV g' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row36:col2', 'psp413226-tbl-0002:row36:col4', 'psp413226-tbl-0002:row36:col5', 'psp413226-tbl-0002:row39:col2', 'psp413226-tbl-0002:row39:col4', 'psp413226-tbl-0002:row39:col5', 'psp413226-tbl-0002:row42:col2', 'psp413226-tbl-0002:row42:col4', 'psp413226-tbl-0002:row42:col5', 'psp413226-tbl-0002:row45:col2', 'psp413226-tbl-0002:row45:col4', 'psp413226-tbl-0002:row45:col5', 'psp413226-tbl-0002:row48:col2', 'psp413226-tbl-0002:row48:col4', 'psp413226-tbl-0002:row48:col5'])
- dropped diagnostic row 'Shrinkage' → Q318 (shrinkage) — reported statistic, not a parameter
- routed 'ETA(2,1) ω' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- routed 'ETA(3,1) ω' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ETA(3,2) ω' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit inherited for V2 (Q64): 'THETA' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for Q (Q30): 'THETA' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for V1 (Q63): 'THETA' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for Km (Q1): 'THETA' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'CLpop' → L/h (from the paper text: "The text states: 'The clearance of elinzanetant was estimated to be 7.26 L/h' and 'The average clearance of elinzanetant")
- implicit units: 'Vcpop' → L (from the paper text: "The text states: 'The clearance of elinzanetant was estimated to be 7.26 L/h and the central and peripheral distribution")
- implicit units: 'Vp' → L (from the paper text: "The text states: 'The clearance of elinzanetant was estimated to be 7.26 L/h and the central and peripheral distribution")
- implicit units: 'Q' → L/h (from the popPK convention: 'Q (intercompartmental clearance) is dimensionally analogous to clearance; the paper does not specify the unit, but L/h i')
- implicit units: 'KaREF d' → 1/h (from the popPK convention: 'Ka (absorption rate constant) is a first-order rate constant; the paper does not specify the unit, but 1/h is the standa')
- implicit units: 'ALAGREF d' → h (from the popPK convention: 'ALAG (absorption lag time) is a time parameter; the paper does not specify the unit for this specific parameter, but h i')
- implicit units: 'CL3034pop' → L/h (from the popPK convention: 'CL (total clearance) is a clearance parameter; the paper does not specify the unit for this metabolite, but L/h is the s')
- implicit units: 'Vc3034' → L (from the popPK convention: 'Vc (central volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, but ')
- implicit units: 'Vp3034' → L (from the popPK convention: 'Vp (peripheral volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, b')
- implicit units: 'Q3034' → L/h (from the popPK convention: 'Q (intercompartmental clearance) is dimensionally analogous to clearance; the paper does not specify the unit, but L/h i')
- implicit units: 'CL27pop' → L/h (from the popPK convention: 'CL (total clearance) is a clearance parameter; the paper does not specify the unit for this metabolite, but L/h is the s')
- implicit units: 'Vc27' → L (from the popPK convention: 'Vc (central volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, but ')
- implicit units: 'Vp27' → L (from the popPK convention: 'Vp (peripheral volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, b')
- implicit units: 'Q27' → L/h (from the popPK convention: 'Q (intercompartmental clearance) is dimensionally analogous to clearance; the paper does not specify the unit, but L/h i')
- implicit units: 'Km27' → ng/mL (from the popPK convention: 'Km is the Michaelis constant representing substrate concentration; the paper does not specify the unit, but ng/mL is a c')
- implicit units: 'CL1821pop' → L/h (from the popPK convention: 'CL (total clearance) is a clearance parameter; the paper does not specify the unit for this metabolite, but L/h is the s')
- implicit units: 'Vc1821' → L (from the popPK convention: 'Vc (central volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, but ')
- implicit units: 'Km18/21' → ng/mL (from the popPK convention: 'Km is the Michaelis constant representing substrate concentration; the paper does not specify the unit, but ng/mL is a c')
- implicit units: 'λ' → 1/h (from the popPK convention: 'λ (elimination rate constant) is a first-order rate constant; the paper does not specify the unit, but 1/h is the standa')
- metabolite volume: 'Vc1821' Q63→Q61 for M18/21 — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLpop); Q61 (Vcpop); Q64 (Vp); Q30 (Q); Q22 (CL3034pop); Q63 (Vc3034); Q64 (Vp3034); Q30 (Q3034)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=elinzanetant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- row roles: 5 per-group rows of elinzanetant covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 48/48 row label(s) assigned, 70 linked by role; re-tagged parent→M30/34 ×30, parent→M27 ×24, parent→M18/21 ×20
- molar mass: no plausible PubChem entry for 'M30/34' ('Elinzanetant M30/34 metabolite') — left in mass units
- molar mass: no plausible PubChem entry for 'M18/21' ('Elinzanetant M18/21 metabolite') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'M27' (LLM) — left in mass units
- molar mass: none found for 'M27' — its concentrations stay mass-only
- molar mass: none found for 'M30/34' — its concentrations stay mass-only
- molar mass: none found for 'M18/21' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp413226-tbl-0002:row6:col1 = 'h−1'
- unparsed cell psp413226-tbl-0002:row20:col6 = 'M27 clearance in typical subject at mid‐point of circadian variation'
- unparsed cell psp413226-tbl-0002:row21:col6 = 'M27 volume of central compartment'
- unparsed cell psp413226-tbl-0002:row22:col6 = 'M27 volume of peripheral compartment'
- unparsed cell psp413226-tbl-0002:row23:col6 = 'M27 inter‐compartmental clearance'
- unparsed cell psp413226-tbl-0002:row24:col6 = 'M27 Vmax at mid‐point of circadian variation'
- unparsed cell psp413226-tbl-0002:row25:col6 = 'M27 Km'
- unparsed cell psp413226-tbl-0002:row38:col6 = 'Variance of exponential IIV on metabolite clearances (CL27, CL3034, and CL1821)'
- unparsed cell psp413226-tbl-0002:row56:col6 = 'Variance of additive residual error for log‐transformed [13C5]‐elinzanetant observations'
- unparsed cell psp413226-tbl-0002:row60:col6 = 'Variance of additive residual error for log‐transformed M27 observations'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 20 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['psp413226-tbl-0002:row25:col2', 'psp413226-tbl-0002:row25:col3', 'psp413226-tbl-0002:row25:col4', 'psp413226-tbl-0002:row25:col5'] |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['psp413226-tbl-0002:row29:col2', 'psp413226-tbl-0002:row29:col3', 'psp413226-tbl-0002:row29:col4', 'psp413226-tbl-0002:row29:col5', 'psp413226-tbl-0002:row29:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413226-tbl-0002:row2:col2', 'psp413226-tbl-0002:row2:col3', 'psp413226-tbl-0002:row2:col4', 'psp413226-tbl-0002:row2:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413226-tbl-0002:row14:col2', 'psp413226-tbl-0002:row14:col3', 'psp413226-tbl-0002:row14:col4', 'psp413226-tbl-0002:row14:col5', 'psp413226-tbl-0002:row14:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413226-tbl-0002:row20:col2', 'psp413226-tbl-0002:row20:col3', 'psp413226-tbl-0002:row20:col4', 'psp413226-tbl-0002:row20:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413226-tbl-0002:row26:col2', 'psp413226-tbl-0002:row26:col3', 'psp413226-tbl-0002:row26:col4', 'psp413226-tbl-0002:row26:col5', 'psp413226-tbl-0002:row26:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413226-tbl-0002:row5:col2', 'psp413226-tbl-0002:row5:col3', 'psp413226-tbl-0002:row5:col4', 'psp413226-tbl-0002:row5:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413226-tbl-0002:row17:col2', 'psp413226-tbl-0002:row17:col3', 'psp413226-tbl-0002:row17:col4', 'psp413226-tbl-0002:row17:col5', 'psp413226-tbl-0002:row17:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413226-tbl-0002:row23:col2', 'psp413226-tbl-0002:row23:col3', 'psp413226-tbl-0002:row23:col4', 'psp413226-tbl-0002:row23:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['psp413226-tbl-0002:row33:col2', 'psp413226-tbl-0002:row33:col3', 'psp413226-tbl-0002:row33:col4', 'psp413226-tbl-0002:row33:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413226-tbl-0002:row6:col2', 'psp413226-tbl-0002:row6:col3', 'psp413226-tbl-0002:row6:col4', 'psp413226-tbl-0002:row6:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp413226-tbl-0002:row3:col2', 'psp413226-tbl-0002:row3:col3', 'psp413226-tbl-0002:row3:col4', 'psp413226-tbl-0002:row3:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp413226-tbl-0002:row27:col2', 'psp413226-tbl-0002:row27:col3', 'psp413226-tbl-0002:row27:col4', 'psp413226-tbl-0002:row27:col5', 'psp413226-tbl-0002:row27:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp413226-tbl-0002:row15:col2', 'psp413226-tbl-0002:row15:col3', 'psp413226-tbl-0002:row15:col4', 'psp413226-tbl-0002:row15:col5', 'psp413226-tbl-0002:row15:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp413226-tbl-0002:row21:col2', 'psp413226-tbl-0002:row21:col3', 'psp413226-tbl-0002:row21:col4', 'psp413226-tbl-0002:row21:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp413226-tbl-0002:row4:col2', 'psp413226-tbl-0002:row4:col3', 'psp413226-tbl-0002:row4:col4', 'psp413226-tbl-0002:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp413226-tbl-0002:row16:col2', 'psp413226-tbl-0002:row16:col3', 'psp413226-tbl-0002:row16:col4', 'psp413226-tbl-0002:row16:col5', 'psp413226-tbl-0002:row16:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp413226-tbl-0002:row22:col2', 'psp413226-tbl-0002:row22:col3', 'psp413226-tbl-0002:row22:col4', 'psp413226-tbl-0002:row22:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp413226-tbl-0002:row7:col2', 'psp413226-tbl-0002:row7:col3', 'psp413226-tbl-0002:row7:col4', 'psp413226-tbl-0002:row7:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.26 | ['psp413226-tbl-0002:row2:col2', 'psp413226-tbl-0002:row2:col3', 'psp413226-tbl-0002:row2:col4', 'psp413226-tbl-0002:row2:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.26 L/h | ['psp413226-tbl-0002:row2:col2', 'psp413226-tbl-0002:row2:col3', 'psp413226-tbl-0002:row2:col4', 'psp413226-tbl-0002:row2:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.14 L/h | ['psp413226-tbl-0002:row14:col2', 'psp413226-tbl-0002:row14:col3', 'psp413226-tbl-0002:row14:col4', 'psp413226-tbl-0002:row14:col5', 'psp413226-tbl-0002:row14:col6'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.11 L/h | ['psp413226-tbl-0002:row20:col2', 'psp413226-tbl-0002:row20:col3', 'psp413226-tbl-0002:row20:col4', 'psp413226-tbl-0002:row20:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.1 L/h | ['psp413226-tbl-0002:row26:col2', 'psp413226-tbl-0002:row26:col3', 'psp413226-tbl-0002:row26:col4', 'psp413226-tbl-0002:row26:col5', 'psp413226-tbl-0002:row26:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 23.7 L | ['psp413226-tbl-0002:row3:col2', 'psp413226-tbl-0002:row3:col3', 'psp413226-tbl-0002:row3:col4', 'psp413226-tbl-0002:row3:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.636 L | ['psp413226-tbl-0002:row27:col2', 'psp413226-tbl-0002:row27:col3', 'psp413226-tbl-0002:row27:col4', 'psp413226-tbl-0002:row27:col5', 'psp413226-tbl-0002:row27:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.58 L | ['psp413226-tbl-0002:row15:col2', 'psp413226-tbl-0002:row15:col3', 'psp413226-tbl-0002:row15:col4', 'psp413226-tbl-0002:row15:col5', 'psp413226-tbl-0002:row15:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.85 L | ['psp413226-tbl-0002:row21:col2', 'psp413226-tbl-0002:row21:col3', 'psp413226-tbl-0002:row21:col4', 'psp413226-tbl-0002:row21:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 168 L | ['psp413226-tbl-0002:row4:col2', 'psp413226-tbl-0002:row4:col3', 'psp413226-tbl-0002:row4:col4', 'psp413226-tbl-0002:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 15.6 L | ['psp413226-tbl-0002:row16:col2', 'psp413226-tbl-0002:row16:col3', 'psp413226-tbl-0002:row16:col4', 'psp413226-tbl-0002:row16:col5', 'psp413226-tbl-0002:row16:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 40.4 L | ['psp413226-tbl-0002:row22:col2', 'psp413226-tbl-0002:row22:col3', 'psp413226-tbl-0002:row22:col4', 'psp413226-tbl-0002:row22:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | fail | 17 scholar param(s) emitted or defaulted | 9 covered | neither emitted nor in defaulted[]: ['V2', 'kabs', 'tlag', 'V1', 'V2', 'V1', 'V2', 'kel'] |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 9 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_modelica.zip" download>Elinzanetant_Willmann2024_reference_modelica.zip</a> <span class="pk-size">(5.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_matlab.zip" download>Elinzanetant_Willmann2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_matlab_simbio.zip" download>Elinzanetant_Willmann2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_sbml.zip" download>Elinzanetant_Willmann2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_cellml.zip" download>Elinzanetant_Willmann2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Willmann S, Lloyd A, Austin R, Joseph S, Solms A, Zhang Y et al. Population pharmacokinetic-pharmacodynamic model of elinzanetant based on integrated clinical phase I and II data. CPT: pharmacometrics & systems pharmacology 13(12):2137–2149 (2024). [doi:10.1002/psp4.13226](https://doi.org/10.1002/psp4.13226)

**This record:** Pharmacolibrary v26.09, model `Elinzanetant_Willmann2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference>

```bibtex
@misc{pharmacolibrary_ElinzanetantWillmann2024reference,
  title  = {{Pharmacolibrary model Elinzanetant_Willmann2024_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference},
  note   = {Parameters from doi:10.1002/psp4.13226},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Belinzanetant%5D%20Elinzanetant_Willmann2024_reference&body=Drug%3A%20elinzanetant%0ARecord%3A%20Elinzanetant_Willmann2024_reference%0APaper%3A%20Willmann_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:15 UTC</sub>
