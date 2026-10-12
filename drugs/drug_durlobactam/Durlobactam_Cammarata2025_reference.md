<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Durlobactam&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/&quot;},{&quot;label&quot;:&quot;Cammarata_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durlobactam_Cammarata2025_reference&quot;,&quot;label&quot;:&quot;Cammarata_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/Durlobactam_Cammarata2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Durlobactam — `Durlobactam_Cammarata2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Absorption rate constants were not reported, forcing the use of library defaults for durlobactam.**

The record lists absorption parameters without extracted values, indicating they relied on generic placeholders rather than paper-specific estimates. This lack of source-backed absorption data invalidated the simulated dosing profile. Consequently, the model builder's assumption of a first-order depot input remains unsupported by the source. Extracted — durlobactam: CL 5.2 L/h, V1 5.32 L, Q 12.4 L/h, V2 6.74 L, fe 0.479, Q3 20.3 L/h, CLR 5.07 L/h, V3 65.6 L, … (+1).

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `sulbactam–durlobactam`, measured `durlobactam`.

## Citation
Cammarata AP et al., Population pharmacokinetic analyses for…, Antimicrobial agents and ch… (2025)
  ·  DOI: [10.1128/aac.00485-24](https://doi.org/10.1128/aac.00485-24)

<div class="pk-model-meta" hidden drug="Durlobactam" model-id="Durlobactam_Cammarata2025_reference" status="needs_review" stale="false" population="adults with hospital-acquired and ventilator-associated bacterial pneumonia" measured-compound="durlobactam" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 9 extracted, plus 1 covariate effect.

**Parameterization:** V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 5.2 | L/h | 1.4444444444444447e-06 | [l] / [h] | not captured | exact (1.0) | T1:row3:col1, T1:row3:col2, T1:row3:col4, T1:row3:col5, T1:row3:col6, T1:row26:col1, T1:row26:col2, T1:row26:col4, T1:row26:col5, T1:row26:col6 | — | not captured |
| Vc (L) | `Q63` · V1 | 5.32 | L | 0.00532 | [l] | not captured | exact (1.0) | T1:row5:col1, T1:row5:col2, T1:row5:col4, T1:row5:col5, T1:row5:col6, T1:row28:col1, T1:row28:col2, T1:row28:col4, T1:row28:col5, T1:row28:col6 | — | not captured |
| Q (L/h) | `Q30` · Q | 12.4 | L/h | 3.444444444444445e-06 | [l] / [h] | not captured | exact (1.0) | T1:row6:col1, T1:row6:col2, T1:row6:col4, T1:row6:col5, T1:row6:col6, T1:row29:col1, T1:row29:col2, T1:row29:col4, T1:row29:col5, T1:row29:col6 | — | not captured |
| Vp (L) | `Q64` · V2 | 6.74 | L | 0.00674 | [l] | not captured | exact (1.0) | T1:row7:col1, T1:row7:col2, T1:row7:col4, T1:row7:col5, T1:row7:col6, T1:row30:col1, T1:row30:col2, T1:row30:col4, T1:row30:col5, T1:row30:col6 | — | not captured |
| FE (%) | `Q44` · fe | 0.479 | not captured | not captured | not captured | not captured | exact (1.0) | T1:row8:col1, T1:row31:col1 | — | not captured |
| V1WTKG1 | `Q308` · Q3 | 20.3 | L/h | 5.63888888888889e-06 | L/h | not captured | llm (0.6) | T1:row14:col1, T1:row14:col2, T1:row14:col4, T1:row14:col5, T1:row14:col6 | — | not captured |
| BCLCRNLT30 | `Q26` · CLR | 5.07 | L/h | 1.4083333333333335e-06 | L/h | not captured | llm (0.6) | T1:row16:col1, T1:row16:col2, T1:row16:col4, T1:row16:col5, T1:row16:col6, T1:row44:col1, T1:row44:col2, T1:row44:col4, T1:row44:col5, T1:row44:col6 | — | not captured |
| V3INFTYPN3 (cUTI) | `Q77` · V3 | 65.6 | L | 0.06559999999999999 | L | not captured | llm (0.6) | T1:row40:col1, T1:row40:col2, T1:row40:col4, T1:row40:col5, T1:row40:col6 | — | not captured |
| V3INFTYPN4 (bacteremia) | `Q78` · V3/F | 34.4 | L | 0.0344 | L | not captured | llm (0.6) | T1:row41:col1, T1:row41:col2, T1:row41:col4, T1:row41:col5, T1:row41:col6 | — | not captured |
| theta_clr_weight_power | `Q900` · theta_clr_weight_power | 11.7 | not captured | not captured | not captured | not captured | not captured (not captured) | T1:row4:col1, T1:row4:col2, T1:row4:col4, T1:row4:col5, T1:row4:col6, T1:row27:col1, T1:row27:col2, T1:row27:col4, T1:row27:col5, T1:row27:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped unlinked row (NIL): 'CLEASIAFL1' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1', 'T1:row9:col2', 'T1:row9:col4', 'T1:row9:col5', 'T1:row9:col6'])
- dropped unlinked row (NIL): 'CLWTKG1' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1', 'T1:row10:col2', 'T1:row10:col4', 'T1:row10:col5', 'T1:row10:col6', 'T1:row37:col1', 'T1:row37:col2', 'T1:row37:col4', 'T1:row37:col5', 'T1:row37:col6'])
- dropped unlinked row (NIL): 'V1INFTYPN1&2 (HABP and VABP)' — extend the ontology if this is a real PK parameter (source ['T1:row11:col1', 'T1:row11:col2', 'T1:row11:col4', 'T1:row11:col5', 'T1:row11:col6'])
- unit_dimension_unknown: 'cUTI' (V1)
- dropped duplicate Q63 ('V1INFTYPN3 (cUTI)', value '32.4') — already have one for this compound
- dropped unlinked row (NIL): 'V1INFTYPN4 (bacteremia)' — extend the ontology if this is a real PK parameter (source ['T1:row13:col1', 'T1:row13:col2', 'T1:row13:col4', 'T1:row13:col5', 'T1:row13:col6'])
- dropped duplicate Q63 ('V1EASIAFL1', value '25.8') — already have one for this compound
- dropped unlinked row (NIL): 'CLINFTYPN1 (HABP)' — extend the ontology if this is a real PK parameter (source ['T1:row32:col1', 'T1:row32:col2', 'T1:row32:col4', 'T1:row32:col5', 'T1:row32:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN2 (VABP)' — extend the ontology if this is a real PK parameter (source ['T1:row33:col1', 'T1:row33:col2', 'T1:row33:col4', 'T1:row33:col5', 'T1:row33:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN3 (cUTI)' — extend the ontology if this is a real PK parameter (source ['T1:row34:col1', 'T1:row34:col2', 'T1:row34:col4', 'T1:row34:col5', 'T1:row34:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN4 (bacteremia)' — extend the ontology if this is a real PK parameter (source ['T1:row35:col1', 'T1:row35:col2', 'T1:row35:col4', 'T1:row35:col5', 'T1:row35:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN5 (AP)' — extend the ontology if this is a real PK parameter (source ['T1:row36:col1', 'T1:row36:col2', 'T1:row36:col4', 'T1:row36:col5', 'T1:row36:col6'])
- dropped unlinked row (NIL): 'V3INFTYPN1 (HABP)' — extend the ontology if this is a real PK parameter (source ['T1:row38:col1', 'T1:row38:col2', 'T1:row38:col4', 'T1:row38:col5', 'T1:row38:col6'])
- dropped unlinked row (NIL): 'V3INFTYPN2 (VABP)' — extend the ontology if this is a real PK parameter (source ['T1:row39:col1', 'T1:row39:col2', 'T1:row39:col4', 'T1:row39:col5', 'T1:row39:col6'])
- unit_dimension_unknown: 'cUTI' (V3)
- unit_dimension_unknown: 'bacteremia' (V3/F)
- unit_dimension_unknown: 'AP' (V3/F)
- dropped duplicate Q78 ('V3INFTYPN5 (AP)', value '11') — already have one for this compound
- dropped duplicate Q77 ('V3WTKG1', value '18.9') — already have one for this compound
- dropped unlinked row (NIL): 'Phase 2(n = 52)' — extend the ontology if this is a real PK parameter (source ['Cammarata_2025_table_2:row0:col1', 'Cammarata_2025_table_2:row0:col2', 'Cammarata_2025_table_2:row0:col3', 'Cammarata_2025_table_2:row0:col4', 'Cammarata_2025_table_2:row0:col5'])
- implicit units: 'V1WTKG1' → L/h (from the popPK convention: "Parameter is described as an 'Intercompartmental (distribution) clearance'. In population PK, intercompartmental clearan")
- implicit units: 'BCLCRNLT30' → L/h (from the popPK convention: "Parameter is described as 'Renal portion of the total clearance' (CLR). The text states 'Both renal clearance and nonren")
- implicit units: 'V3INFTYPN3 (cUTI)' → L (from the popPK convention: "Parameter is described as 'Volume of distribution of the second peripheral compartment'. Volumes are conventionally expr")
- implicit units: 'V3INFTYPN4 (bacteremia)' → L (from the popPK convention: "Parameter is described as 'Volume of distribution of second peripheral compartment... adjusted' (V3/F). Like other volum")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=durlobactam
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell T1:row3:col7 = '[9.07, 9.65]'
- unparsed cell T1:row4:col7 = '[0.766, 0.988]'
- unparsed cell T1:row5:col7 = '[12.1, 12.9]'
- unparsed cell T1:row6:col7 = '[4.17, 4.71]'
- unparsed cell T1:row7:col7 = '[5.54, 6.10]'
- unparsed cell T1:row9:col7 = '[−0.282, −0.117]'
- unparsed cell T1:row10:col7 = '[0.527, 0.783]'
- unparsed cell T1:row11:col7 = '[1.12, 2.01]'
- unparsed cell T1:row12:col7 = '[0.165, 0.532]'
- unparsed cell T1:row13:col7 = '[2.05, 4.52]'
- unparsed cell T1:row14:col7 = '[0.359, 0.704]'
- unparsed cell T1:row15:col7 = '[−0.369, −0.147]'
- unparsed cell T1:row16:col7 = '[−0.617, −0.547]'
- unparsed cell T1:row17:col1 = '0.0778 (27.9 %CV)'
- unparsed cell T1:row17:col7 = '[0.0684, 0.0882]'
- unparsed cell T1:row18:col1 = '0.0757 (27.5 %CV)'
- unparsed cell T1:row18:col7 = '[0.0626, 0.0895]'
- unparsed cell T1:row19:col1 = '0.0773 (27.8 %CV)'
- unparsed cell T1:row19:col7 = '[0.0668, 0.0909]'
- unparsed cell T1:row20:col7 = '[0.0377, 0.0608]'
- unparsed cell T1:row21:col1 = '0.019 (13.8 %CV)'
- unparsed cell T1:row21:col7 = '[0.0183, 0.0196]'
- unparsed cell T1:row22:col7 = '[0.00125, 0.00147]'
- unparsed cell T1:row23:col1 = '0.0794 (28.2 %CV)'
- unparsed cell T1:row23:col7 = '[0.0678, 0.0928]'
- unparsed cell T1:row24:col1 = '0.203 (45.0 %CV)'
- unparsed cell T1:row24:col7 = '[0.173, 0.238]'
- unparsed cell T1:row26:col7 = '[12.3, 14.6]'
- unparsed cell T1:row27:col7 = '[0.920, 1.37]'
- unparsed cell T1:row28:col7 = '[10.9, 13.0]'
- unparsed cell T1:row29:col7 = '[6.56, 9.72]'
- unparsed cell T1:row30:col7 = '[6.24, 7.80]'
- unparsed cell T1:row32:col7 = '[−0.494, −0.346]'
- unparsed cell T1:row33:col7 = '[−0.393, −0.195]'
- unparsed cell T1:row34:col7 = '[−0.274, −0.00759]'
- unparsed cell T1:row35:col7 = '[−0.537, −0.333]'
- unparsed cell T1:row36:col7 = '[−0.489, −0.253]'
- unparsed cell T1:row37:col7 = '[0.795, 1.24]'
- unparsed cell T1:row38:col7 = '[0.554, 1.15]'
- unparsed cell T1:row39:col7 = '[1.04, 1.84]'
- unparsed cell T1:row40:col7 = '[−0.00793, 0.362]'
- unparsed cell T1:row41:col7 = '[0.911, 2.96]'
- unparsed cell T1:row42:col7 = '[−0.824, −0.579]'
- unparsed cell T1:row43:col7 = '[0.573, 1.11]'
- unparsed cell T1:row44:col7 = '[−0.682, −0.578]'
- unparsed cell T1:row45:col1 = '0.221 (47.0 %CV)'
- unparsed cell T1:row45:col7 = '[0.194, 0.252]'
- unparsed cell T1:row46:col1 = '0.0967 (31.1 %CV)'
- unparsed cell T1:row46:col7 = '[0.0667, 0.131]'
- unparsed cell T1:row47:col1 = '0.196 (44.3 %CV)'
- unparsed cell T1:row47:col7 = '[0.141, 0.267]'
- unparsed cell T1:row48:col7 = '[0.0428, 0.104]'
- unparsed cell T1:row49:col1 = '0.0433 (20.8 %CV)'
- unparsed cell T1:row49:col7 = '[0.0413, 0.0451]'
- unparsed cell T1:row50:col7 = '[0.00478, 0.00596]'
- companion parameter table 2 transcribed (5 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row3:col1', 'T1:row3:col2', 'T1:row3:col4', 'T1:row3:col5', 'T1:row3:col6', 'T1:row26:col1', 'T1:row26:col2', 'T1:row26:col4', 'T1:row26:col5', 'T1:row26:col6'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row16:col1', 'T1:row16:col2', 'T1:row16:col4', 'T1:row16:col5', 'T1:row16:col6', 'T1:row44:col1', 'T1:row44:col2', 'T1:row44:col4', 'T1:row44:col5', 'T1:row44:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row6:col1', 'T1:row6:col2', 'T1:row6:col4', 'T1:row6:col5', 'T1:row6:col6', 'T1:row29:col1', 'T1:row29:col2', 'T1:row29:col4', 'T1:row29:col5', 'T1:row29:col6'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row14:col1', 'T1:row14:col2', 'T1:row14:col4', 'T1:row14:col5', 'T1:row14:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row5:col1', 'T1:row5:col2', 'T1:row5:col4', 'T1:row5:col5', 'T1:row5:col6', 'T1:row28:col1', 'T1:row28:col2', 'T1:row28:col4', 'T1:row28:col5', 'T1:row28:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row7:col1', 'T1:row7:col2', 'T1:row7:col4', 'T1:row7:col5', 'T1:row7:col6', 'T1:row30:col1', 'T1:row30:col2', 'T1:row30:col4', 'T1:row30:col5', 'T1:row30:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row40:col1', 'T1:row40:col2', 'T1:row40:col4', 'T1:row40:col5', 'T1:row40:col6'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row41:col1', 'T1:row41:col2', 'T1:row41:col4', 'T1:row41:col5', 'T1:row41:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.2 L/h | not captured | not captured | ['T1:row3:col1', 'T1:row3:col2', 'T1:row3:col4', 'T1:row3:col5', 'T1:row3:col6', 'T1:row26:col1', 'T1:row26:col2', 'T1:row26:col4', 'T1:row26:col5', 'T1:row26:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.32 L | not captured | not captured | ['T1:row5:col1', 'T1:row5:col2', 'T1:row5:col4', 'T1:row5:col5', 'T1:row5:col6', 'T1:row28:col1', 'T1:row28:col2', 'T1:row28:col4', 'T1:row28:col5', 'T1:row28:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.74 L | not captured | not captured | ['T1:row7:col1', 'T1:row7:col2', 'T1:row7:col4', 'T1:row7:col5', 'T1:row7:col6', 'T1:row30:col1', 'T1:row30:col2', 'T1:row30:col4', 'T1:row30:col5', 'T1:row30:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=durlobactam) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs_non_atc/drug_durlobactam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cammarata_2025` / `Cammarata_2025::reference`)
- model: `../../../knowledgebase/drugs_non_atc/drug_durlobactam/models/modelica/Durlobactam_Cammarata2025_reference.mo`
- deviation: `../../../knowledgebase/drugs_non_atc/drug_durlobactam/models/modelica/Durlobactam_Cammarata2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs_non_atc/drug_durlobactam/models/modelica/Durlobactam_Cammarata2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_durlobactam/Durlobactam_Cammarata2025_reference/Durlobactam_Cammarata2025_reference.svg" alt="Durlobactam_Cammarata2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1000 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 1000, 1500 mg.

<dbs-fmusim paramsurl="drugs/drug_durlobactam/Durlobactam_Cammarata2025_reference/Durlobactam_Cammarata2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_durlobactam/Durlobactam_Cammarata2025_reference/Durlobactam_Cammarata2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Durlobactam_Cammarata2025_reference_params.json` · controls `Durlobactam_Cammarata2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-09 10:30 UTC</sub>
