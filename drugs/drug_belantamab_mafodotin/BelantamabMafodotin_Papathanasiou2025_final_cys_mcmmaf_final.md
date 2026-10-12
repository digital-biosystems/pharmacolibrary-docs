<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Papathanasiou_2025 \u00b7 final_cys_mcmmaf_final_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belantamab mafodotin — `BelantamabMafodotin_Papathanasiou2025_final_cys_mcmmaf_final`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.455). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. No model template covers this structure. None of the extracted parameters is belantamab mafodotin's own; they describe cys-mcMMAF.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which molecule was measured: this record has belantamab_mafodotin ADC and cys-mcMMAF, the second reading belantamab_mafodotin; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `belantamab_mafodotin`, measured `belantamab_mafodotin ADC and cys-mcMMAF`.

## Citation
Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1)

<div class="pk-model-meta" hidden drug="belantamab mafodotin" model-id="BelantamabMafodotin_Papathanasiou2025_final_cys_mcmmaf_final" status="not_modelled" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="belantamab_mafodotin ADC and cys-mcMMAF" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 3 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| cys-mcMMAF Vc (L) | `Q61` · V | 12.3 | L | 0.0123 | [l] | not captured | exact (1.0) | Papathanasiou_2025_table_3:row3:col1, Papathanasiou_2025_table_3:row3:col2 | — | not captured |
| K34 (1/day) | `Q305` · kfm | 186 | 1/day | 0.0021527777777777778 | 1/h | not captured | exact (1.0) | Papathanasiou_2025_table_3:row4:col1, Papathanasiou_2025_table_3:row4:col2 | — | not captured |
| K43 (1/day) | `Q47` · kel | 5.97 | 1/day | 6.909722222222221e-05 | 1/h | not captured | exact (1.0) | Papathanasiou_2025_table_3:row5:col1, Papathanasiou_2025_table_3:row5:col2 | — | not captured |
| sBCMABL on CLMMAF (θCL_SBCMABL) | `Q900` · equation variable | 33.9 | θCL_SBCMABL | not captured | [s] · [bcmabl] · [θcl_] | not captured | llm (0.6) | Papathanasiou_2025_table_3:row8:col2 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.701 | not captured | not captured | not captured | not captured | not captured (not captured) | Papathanasiou_2025_table_3:row9:col1, Papathanasiou_2025_table_3:row9:col2 | — | not captured |
| theta_v1_albumin | `Q900` · theta_v1_albumin | 28.8 | not captured | not captured | not captured | not captured | not captured (not captured) | Papathanasiou_2025_table_3:row10:col2 | — | not captured |
| theta_v1_weight | `Q900` · theta_v1_weight | 1.24 | not captured | not captured | not captured | not captured | not captured (not captured) | Papathanasiou_2025_table_3:row13:col1, Papathanasiou_2025_table_3:row13:col2 | — | not captured |
| theta_v1_race | `Q900` · theta_v1_race | 0.816 | not captured | not captured | not captured | not captured | not captured (not captured) | Papathanasiou_2025_table_3:row14:col1, Papathanasiou_2025_table_3:row14:col2 | — | not captured |
| theta_v1_race | `Q900` · theta_v1_race | 0.746 | not captured | not captured | not captured | not captured | not captured (not captured) | Papathanasiou_2025_table_3:row15:col1, Papathanasiou_2025_table_3:row15:col2 | — | not captured |
| theta_v1_bmi | `Q900` · theta_v1_bmi | 23.8 | not captured | not captured | not captured | not captured | not captured (not captured) | Papathanasiou_2025_table_3:row16:col2 | — | not captured |
| CLMMAF | `Q900` · CLMMAF | 642 | L/day | 7.430555555555556e-06 | not captured | not captured | not captured (not captured) | Papathanasiou_2025_table_3:row2:col1, Papathanasiou_2025_table_3:row2:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CLMMAF (L/day) | Q22 | not captured | exact |
| IMAXi | Q323 | not captured | boundary |

## Departures & gaps

**Interpretation flags:**
- table section iov: 'On CLMMAF' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'CLMMAF-cys-mcMMAF Vc covariancea' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'On cys-mcMMAF Vc' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'cys-mcMMAF Vc-K43 covarianceb' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'On K43' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'On IOV CLMMAF' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section iov: 'On IOV cys-mcMMAF Vc' routed out of structural estimates ('Inter-patient and inter-occasion variability CV%')
- table section residual_error: 'Proportional error CV%' routed out of structural estimates ('Residual error')
- table section residual_error: 'Y = IPRED + IPRED · ε1 + ε2' routed out of structural estimates ('Residual error')
- dropped duplicate Q305 ('RATE-DAR (1/day)', value '0.0381') — already have one for this compound
- unit_dimension_unknown: 'θCL_SBCMABL' (equation variable)
- unit_dimension_unknown: 'θcys-mcMMAF Vc_IGGBL' (V1)
- dropped duplicate Q63 ('IgG on cys-mcMMAF Vc (θcys-mcMMAF Vc_IGGBL)', value '0.184') — already have one for this compound
- unit_dimension_unknown: 'θcys-mcMMAF Vc_SBCMABL' (V1)
- dropped duplicate Q63 ('sBCMABL on cys-mcMMAF Vc (θcys-mcMMAF Vc_SBCMABL)', value '0.107') — already have one for this compound
- unit_dimension_unknown: 'ηCLMMAF+ κCLMMAF, j' (CL)
- dropped duplicate Q22 ('CLi = θCLMMAF · (SBCMABL/50)θCL_SBCMABL· (WTBL/75)θCL_WTBL · exp(ηCLMMAF+ κCLMMAF, j)', value None) — already have one for this compound
- unit_dimension_unknown: 'ηcys-mcMMAF Vc + κcys-mcMMAF Vc, j' (V1)
- dropped duplicate Q63 ('cys-mcMMAF Vci = θcys-mcMMAF Vc · (SBCMABL/50)θcys-mcMMAF Vc_SBCMABL · (IGGBL/15)θcys-mcMMAF Vc_IGGBL · (ALBBL/40)θcys-mcMMAF Vc_ALBBL · (WTBL/75)θcys-mcMMAF Vc_WTBL · (IBMIBL/27)θcys-mcMMAF Vc_IBMIBL · (θCLMMAF_RACEA) [if Asian] · (θCLMMAF_RACEB) [if AA] · exp(ηcys-mcMMAF Vc + κcys-mcMMAF Vc, j)', value None) — already have one for this compound
- unit_dimension_unknown: 'ηK43' (kel)
- dropped duplicate Q47 ('K43 = θK43·exp(ηK43)', value None) — already have one for this compound
- routed 'Log-normal distribution CV% = SQRT(exp(Ω) − 1) · 100' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'K34 (1/day)' → 1/day (from the paper text: 'The parameter is identified as “K34 (1/day)” in the supplied parameter information.')
- implicit units: 'K43 (1/day)' → 1/day (from the paper text: 'The parameter is identified as “K43 (1/day)” in the supplied parameter information.')
- metabolite volume: 'cys-mcMMAF Vc (L)' Q63→Q61 for cys-mcMMAF — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belantamab_mafodotin ADC and cys-mcMMAF
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- bound model equation to Q22 (CL): CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- model equation 'Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)' not bound — neither LHS nor base term 'θQ' linked to an ontology parameter
- bound model equation to Q323 (Imax): IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- model equation 'TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)' not bound — neither LHS nor base term 'θTI50' linked to an ontology parameter
- Q22 (CL) is equation-defined: value moved to equation-variable 'CLMMAF (L/day)'; equation kept verbatim
- Q323 (Imax) is equation-defined: value moved to equation-variable 'IMAXi'; equation kept verbatim
- status held at route_to_review — not promoted
- model-stage split: 'cys-mcmmaf final model' is the final model of Papathanasiou_2025 (paper reports 5 stages: adc final model, adc, % changeb, covariate valuesa, cys-mcmmaf final model, cys-mcmmaf, % changeb); same population, different model-building step
- row roles (LLM): model_class=compartmental; 75/75 row label(s) assigned, 54 linked by role; re-tagged belantamab_mafodotin ADC→cys-mcMMAF ×63
- molar mass: no plausible PubChem entry for 'belantamab_mafodotin ADC' ('belantamab mafodotin antibody-drug conjugate') — left in mass units
- molar mass: no plausible PubChem entry for 'belantamab_mafodotin ADC and cys-mcMMAF' ('belantamab mafodotin antibody-drug conjugate and cysteine maleimidocaproyl monomethyl auristatin F') — left in mass units
- molar mass: none found for 'belantamab_mafodotin ADC' — its concentrations stay mass-only
- molar mass: none found for 'belantamab_mafodotin ADC and cys-mcMMAF' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row3:col3 = '0.899 to 0.952'
- unparsed cell Tab2:row4:col3 = '4.15 to 4.28'
- unparsed cell Tab2:row5:col3 = '0.660 to 0.761'
- unparsed cell Tab2:row6:col3 = '6.29 to 6.96'
- unparsed cell Tab2:row7:col1 = '− 0.403'
- unparsed cell Tab2:row7:col3 = '− 0.458 to − 0.347'
- unparsed cell Tab2:row8:col3 = '63.5 to 69.2'
- unparsed cell Tab2:row9:col3 = '2.47 to 3.27'
- unparsed cell Tab2:row11:col3 = '0.845 to 1.01'
- unparsed cell Tab2:row12:col3 = '0.449 to 0.635'
- unparsed cell Tab2:row13:col1 = '− 0.698'
- unparsed cell Tab2:row13:col3 = '− 0.839 to − 0.557'
- unparsed cell Tab2:row14:col1 = '− 0.302'
- unparsed cell Tab2:row14:col3 = '− 0.407 to − 0.19'
- unparsed cell Tab2:row15:col3 = '0.0988 to 0.127'
- unparsed cell Tab2:row16:col3 = '0.153 to 0.187'
- unparsed cell Tab2:row17:col1 = '− 0.459'
- unparsed cell Tab2:row17:col3 = '− 0.571 to − 0.348'
- unparsed cell Tab2:row19:col3 = '0.0289 to 0.0513'
- unparsed cell Tab2:row20:col3 = '0.867 to 0.958'
- unparsed cell Tab2:row21:col3 = '0.801 to 0.921'
- unparsed cell Tab2:row22:col3 = '1.23 to 1.66'
- unparsed cell Tab2:row23:col3 = '0.117 to 0.266'
- unparsed cell Tab2:row24:col3 = '0.0920 to 0.227'
- unparsed cell Tab2:row25:col3 = '0.285 to 0.849'
- unparsed cell Tab2:row27:col3 = '24.0 to 28.0'
- unparsed cell Tab2:row27:col4 = '14.9%'
- unparsed cell Tab2:row28:col3 = '0.0272 to 0.0383'
- unparsed cell Tab2:row29:col3 = '18.5 to 21.3'
- unparsed cell Tab2:row29:col4 = '15.7%'
- unparsed cell Tab2:row30:col3 = 'NA to 31.0'
- unparsed cell Tab2:row30:col4 = '69.1%'
- unparsed cell Tab2:row31:col3 = '25.1 to 35.4'
- unparsed cell Tab2:row31:col4 = '50.1%'
- unparsed cell Tab2:row32:col3 = '22.5 to 34.5'
- unparsed cell Tab2:row32:col4 = '40.6%'
- unparsed cell Tab2:row33:col3 = '58.4 to 79.6'
- unparsed cell Tab2:row33:col4 = '53.7%'
- unparsed cell Tab2:row35:col3 = '0.0553 to 0.0714'
- unparsed cell Tab2:row35:col4 = '12.6%'
- unparsed cell Papathanasiou_2025_table_3:row2:col3 = '607 to 677'
- unparsed cell Papathanasiou_2025_table_3:row3:col3 = '6.91 to 17.7'
- unparsed cell Papathanasiou_2025_table_3:row4:col3 = '98.9 to 273'
- unparsed cell Papathanasiou_2025_table_3:row5:col3 = '5.34 to 6.6'
- unparsed cell Papathanasiou_2025_table_3:row6:col3 = '0.0351 to 0.0411'
- unparsed cell Papathanasiou_2025_table_3:row8:col1 = '− 0.0448'
- unparsed cell Papathanasiou_2025_table_3:row8:col3 = '− 0.0746 to − 0.0151'
- unparsed cell Papathanasiou_2025_table_3:row9:col3 = '0.528 to 0.875'
- unparsed cell Papathanasiou_2025_table_3:row10:col1 = '− 0.533'
- unparsed cell Papathanasiou_2025_table_3:row10:col3 = '− 0.835 to − 0.232'
- unparsed cell Papathanasiou_2025_table_3:row11:col3 = '0.148 to 0.22'
- unparsed cell Papathanasiou_2025_table_3:row12:col3 = '0.0732 to 0.14'
- unparsed cell Papathanasiou_2025_table_3:row13:col3 = '0.912 to 1.57'
- unparsed cell Papathanasiou_2025_table_3:row14:col3 = '0.724 to 0.908'
- unparsed cell Papathanasiou_2025_table_3:row15:col3 = '0.606 to 0.886'
- unparsed cell Papathanasiou_2025_table_3:row16:col1 = '− 0.853'
- unparsed cell Papathanasiou_2025_table_3:row16:col3 = '− 1.25 to − 0.455'
- unparsed cell Papathanasiou_2025_table_3:row18:col3 = '22.4 to 35.5'
- unparsed cell Papathanasiou_2025_table_3:row19:col3 = '0.0597 to 0.103'
- unparsed cell Papathanasiou_2025_table_3:row20:col3 = '59.5 to 70.7'
- unparsed cell Papathanasiou_2025_table_3:row21:col3 = '0.288 to 0.456'
- unparsed cell Papathanasiou_2025_table_3:row22:col3 = '119 to 155'
- unparsed cell Papathanasiou_2025_table_3:row23:col3 = '53.0 to 60.3'
- unparsed cell Papathanasiou_2025_table_3:row24:col3 = '42.7 to 47.3'
- unparsed cell Papathanasiou_2025_table_3:row26:col3 = '25.6 to 26.7'
- companion parameter table 3 transcribed (67 record(s), model stage 'final')
- unparsed cell Papathanasiou_2025_table_4:row1:col6 = '− 13.1'
- unparsed cell Papathanasiou_2025_table_4:row1:col7 = '− 14.6'
- unparsed cell Papathanasiou_2025_table_4:row2:col1 = '− 8.99'
- unparsed cell Papathanasiou_2025_table_4:row2:col2 = '− 18.7'
- unparsed cell Papathanasiou_2025_table_4:row2:col3 = '− 34.0'
- unparsed cell Papathanasiou_2025_table_4:row3:col1 = 'ADC ADC VpADC ImaxADC TI50cys-mcMMAF cys-mcMMAF Vc'
- unparsed cell Papathanasiou_2025_table_4:row3:col6 = '− 21.5'
- unparsed cell Papathanasiou_2025_table_4:row3:col7 = '− 15.6'
- unparsed cell Papathanasiou_2025_table_4:row4:col1 = '− 0.117'
- unparsed cell Papathanasiou_2025_table_4:row4:col2 = '− 16.0'
- unparsed cell Papathanasiou_2025_table_4:row4:col3 = '− 31.9'
- unparsed cell Papathanasiou_2025_table_4:row5:col3 = '− 10.2'
- unparsed cell Papathanasiou_2025_table_4:row5:col4 = '− 15.6'
- unparsed cell Papathanasiou_2025_table_4:row5:col5 = '− 32.9'
- unparsed cell Papathanasiou_2025_table_4:row6:col4 = '− 3.56'
- unparsed cell Papathanasiou_2025_table_4:row6:col5 = '− 4.75'
- unparsed cell Papathanasiou_2025_table_4:row7:col2 = '51.2 kg'
- unparsed cell Papathanasiou_2025_table_4:row7:col3 = '− 2.84'
- unparsed cell Papathanasiou_2025_table_4:row7:col4 = '− 12.9'
- unparsed cell Papathanasiou_2025_table_4:row7:col5 = '− 18.6'
- unparsed cell Papathanasiou_2025_table_4:row7:col7 = '− 6.53'
- unparsed cell Papathanasiou_2025_table_4:row8:col4 = '− 6.12'
- unparsed cell Papathanasiou_2025_table_4:row9:col6 = '− 2.45'
- unparsed cell Papathanasiou_2025_table_4:row9:col7 = '− 3.52'
- unparsed cell Papathanasiou_2025_table_4:row10:col4 = '− 5.33'
- unparsed cell Papathanasiou_2025_table_4:row10:col5 = '− 5.78'
- companion parameter table 4 transcribed (29 record(s))
- LLM selected parameter table(s) 2, 3, 4
- captured model equation CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- captured model equation Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)
- captured model equation IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- captured model equation TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.455 (10/22 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['belantamab_mafodotin adc', 'cys-mcmmaf', 'metabolism']] | [['belantamab_mafodotin', 'cys-mcmmaf', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[imaxi]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[imaxi]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[k34].parameter_id` | Q305 | Q47 | mismatch |
| `qwen3.8-27b` | `parameters[k43].parameter_id` | Q47 | Q371 | mismatch |
| `qwen3.8-27b` | `parameters[rate-dar]` | not captured | 0.0381 | only_one_extracted |
| `qwen3.8-27b` | `parameters[sbcmabl on clmmaf].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[sbcmabl on clmmaf].parameter_id` | Q900 | Q319 | mismatch |
| `qwen3.8-27b` | `parameters[theta_allometric_exponent_weight]` | not captured | 0.701 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.701 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_albumin]` | 28.8 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | belantamab_mafodotin ADC and cys-mcMMAF | belantamab_mafodotin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Papathanasiou_2025_table_3:row2:col1', 'Papathanasiou_2025_table_3:row2:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Papathanasiou_2025_table_3:row4:col1', 'Papathanasiou_2025_table_3:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Papathanasiou_2025_table_3:row5:col1', 'Papathanasiou_2025_table_3:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Papathanasiou_2025_table_3:row3:col1', 'Papathanasiou_2025_table_3:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.3 L | not captured | not captured | ['Papathanasiou_2025_table_3:row3:col1', 'Papathanasiou_2025_table_3:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T3_rate_constant_conversion | not captured | pass | none (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 43.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.498 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.976 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 22.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 13.0 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 16.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 19.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 13.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 17.0 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_belantamab_mafodotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Papathanasiou_2025` / `Papathanasiou_2025::final_cys_mcmmaf_final_model`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:53 UTC</sub>
