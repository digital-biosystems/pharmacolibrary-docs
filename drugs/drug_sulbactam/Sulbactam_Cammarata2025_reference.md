<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;sulbactam&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/&quot;},{&quot;label&quot;:&quot;Cammarata_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulbactam_Abouelhassan2024v2_100_mg_kg&quot;,&quot;label&quot;:&quot;Abouelhassan_2024_2_100_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Abouelhassan2024v2_100_mg_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Abouelhassan2024v2_10_mg_kg&quot;,&quot;label&quot;:&quot;Abouelhassan_2024_2_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Abouelhassan2024v2_10_mg_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Abouelhassan2024v2_200_mg_kg&quot;,&quot;label&quot;:&quot;Abouelhassan_2024_2_200_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Abouelhassan2024v2_200_mg_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Onita2025_reference&quot;,&quot;label&quot;:&quot;Onita_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Onita2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Cammarata2025_reference&quot;,&quot;label&quot;:&quot;Cammarata_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Sulbactam_Jaruratanasirikul2019_reference&quot;,&quot;label&quot;:&quot;Jaruratanasirikul_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Jaruratanasirikul2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulbactam — `Sulbactam_Cammarata2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Sulbactam model held back because intercompartmental clearances k13 and k31 lacked extracted values, forcing library placeholder use instead of paper estimates.

<div class="pk-model-meta" hidden drug="sulbactam" model-id="Sulbactam_Cammarata2025_reference" status="needs_review" stale="false" population="healthy adults and patients with HABP, VABP, or cUTI/AP" measured-compound="sulbactam" parameterization="apparent" topology="3C"></div>

## Citation
Cammarata AP, Safir MC, Trang M, Larson KB, O'Donnell JP, Bhavnani SM et al. Population pharmacokinetic analyses for sulbactam-durlobactam using Phase 1, 2, and 3 data. Antimicrobial agents and chemotherapy 69(1):e0048524 (2025).
  ·  DOI: [10.1128/aac.00485-24](https://doi.org/10.1128/aac.00485-24)

## Population and dosing

**Population:** healthy adults and patients with HABP, VABP, or cUTI/AP · condition hospital-acquired and ventilator-associated bacterial pneumonia, complicated urinary tract infection, and acute pyelonephritis · age group adult · n = 384.

**Dosing:** 1000, 1500 mg, iv, multiple, every 6 h.

**Dosed compound ≠ measured compound:** dosed sulbactam–durlobactam, measured sulbactam.

## Model

**Structure:** 3-compartment, oral mammillary model — template `PK_3C_enteral`.  
**Parameterization:** V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference.svg" alt="Sulbactam_Cammarata2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 14.0 | L/h |
| Vc (L) | V1 | 8.90 | L |
| Q (L/h) | Q | 18.9 | L/h |
| Vp (L) | V2 | 9.29 | L |
| FE (%) | fe | 0.479 |  |
| CLEASIAFL1 | Qd | 31.7 | mL/min |
| V1EASIAFL1 | V | 49.2 | L |
| V3INFTYPN1 (HABP) | V3 | 25.3 | L |
| V3INFTYPN2 (VABP) | V3/F | 19.5 | L |
| theta_q26_weight_power | theta_q26_weight_power | 20.8 |  |
| K a | kabs | 8.28 | 1/h |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sulbactam model held back because intercompartmental clearances k13 and k31 lacked extracted values, forcing library placeholder use instead of paper estimates.**

The three-compartment structure required k13 and k31 values, but none were extracted, so the model relied on generic defaults rather than paper-specific estimates. Covariate effects involving weight were defined but not simulated; only the reference individual was tested. The model also assumed unit bioavailability without explicit support in the extracted parameters. Extracted — sulbactam: CL 14 L/h, V1 8.9 L, Q 18.9 L/h, V2 9.29 L, fe 0.479, Qd 31.7 mL/min, V 49.2 L, V3 25.3 L, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulbactam–durlobactam, the second reading sulbactam/durlobactam; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 14.0 | L/h | 3.889e-06 | m3/s | l/h | exact (1) | T1:row3:col1, T1:row3:col2, T1:row3:col4, T1:row3:col5, T1:row3:col6, T1:row26:col1, T1:row26:col2, T1:row26:col4, T1:row26:col5, T1:row26:col6 |
| Vc (L) | `Q63` · V1 | 8.90 | L | 0.0089 | m3 | l | exact (1) | T1:row5:col1, T1:row5:col2, T1:row5:col4, T1:row5:col5, T1:row5:col6, T1:row28:col1, T1:row28:col2, T1:row28:col4, T1:row28:col5, T1:row28:col6 |
| Q (L/h) | `Q30` · Q | 18.9 | L/h | 5.25e-06 | m3/s | l/h | exact (1) | T1:row6:col1, T1:row6:col2, T1:row6:col4, T1:row6:col5, T1:row6:col6, T1:row29:col1, T1:row29:col2, T1:row29:col4, T1:row29:col5, T1:row29:col6 |
| Vp (L) | `Q64` · V2 | 9.29 | L | 0.00929 | m3 | l | exact (1) | T1:row7:col1, T1:row7:col2, T1:row7:col4, T1:row7:col5, T1:row7:col6, T1:row30:col1, T1:row30:col2, T1:row30:col4, T1:row30:col5, T1:row30:col6 |
| FE (%) | `Q44` · fe | 0.479 |  |  |  |  | exact (1) | T1:row8:col1, T1:row31:col1 |
| CLEASIAFL1 | `Q364` · Qd | 31.7 | mL/min | 5.283e-07 | m3/s | L/h | llm (0.6) | T1:row9:col1, T1:row9:col2, T1:row9:col4, T1:row9:col5, T1:row9:col6 |
| V1EASIAFL1 | `Q61` · V | 49.2 | L | 0.0492 | m3 | L | llm (0.6) | T1:row15:col1, T1:row15:col2, T1:row15:col4, T1:row15:col5, T1:row15:col6 |
| V3INFTYPN1 (HABP) | `Q77` · V3 | 25.3 | L | 0.0253 | m3 | L | llm (0.6) | T1:row38:col1, T1:row38:col2, T1:row38:col4, T1:row38:col5, T1:row38:col6 |
| V3INFTYPN2 (VABP) | `Q78` · V3/F | 19.5 | L | 0.0195 | m3 | L | llm (0.6) | T1:row39:col1, T1:row39:col2, T1:row39:col4, T1:row39:col5, T1:row39:col6 |
| theta_q26_weight_power | `Q900` · theta_q26_weight_power | 20.8 |  |  |  |  |  | T1:row4:col1, T1:row4:col2, T1:row4:col4, T1:row4:col5, T1:row4:col6, T1:row27:col1, T1:row27:col2, T1:row27:col4, T1:row27:col5, T1:row27:col6 |
| K a | `Q49` · kabs | 8.28 | 1/h | 0.0023 | 1/s | 1/h | review_gapfill (0.7) | Abouelhassan_2024_2:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k13', 'k31']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'resample statistics' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'durlobactam' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'sulbactam' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CLWTKG1' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1', 'T1:row10:col2', 'T1:row10:col4', 'T1:row10:col5', 'T1:row10:col6', 'T1:row37:col1', 'T1:row37:col2', 'T1:row37:col4', 'T1:row37:col5', 'T1:row37:col6'])
- unit_dimension_unknown: 'HABP and VABP' (V1)
- dropped duplicate Q63 ('V1INFTYPN1&2 (HABP and VABP)', value '26.5') — already have one for this compound
- unit_dimension_unknown: 'cUTI' (V1)
- dropped duplicate Q63 ('V1INFTYPN3 (cUTI)', value '62.3') — already have one for this compound
- dropped unlinked row (NIL): 'V1INFTYPN4 (bacteremia)' — extend the ontology if this is a real PK parameter (source ['T1:row13:col1', 'T1:row13:col2', 'T1:row13:col4', 'T1:row13:col5', 'T1:row13:col6'])
- dropped unlinked row (NIL): 'V1WTKG1' — extend the ontology if this is a real PK parameter (source ['T1:row14:col1', 'T1:row14:col2', 'T1:row14:col4', 'T1:row14:col5', 'T1:row14:col6'])
- dropped unlinked row (NIL): 'BCLCRNLT30' — extend the ontology if this is a real PK parameter (source ['T1:row16:col1', 'T1:row16:col2', 'T1:row16:col4', 'T1:row16:col5', 'T1:row16:col6', 'T1:row44:col1', 'T1:row44:col2', 'T1:row44:col4', 'T1:row44:col5', 'T1:row44:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN1 (HABP)' — extend the ontology if this is a real PK parameter (source ['T1:row32:col1', 'T1:row32:col2', 'T1:row32:col4', 'T1:row32:col5', 'T1:row32:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN2 (VABP)' — extend the ontology if this is a real PK parameter (source ['T1:row33:col1', 'T1:row33:col2', 'T1:row33:col4', 'T1:row33:col5', 'T1:row33:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN3 (cUTI)' — extend the ontology if this is a real PK parameter (source ['T1:row34:col1', 'T1:row34:col2', 'T1:row34:col4', 'T1:row34:col5', 'T1:row34:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN4 (bacteremia)' — extend the ontology if this is a real PK parameter (source ['T1:row35:col1', 'T1:row35:col2', 'T1:row35:col4', 'T1:row35:col5', 'T1:row35:col6'])
- dropped unlinked row (NIL): 'CLINFTYPN5 (AP)' — extend the ontology if this is a real PK parameter (source ['T1:row36:col1', 'T1:row36:col2', 'T1:row36:col4', 'T1:row36:col5', 'T1:row36:col6'])
- unit_dimension_unknown: 'HABP' (V3)
- unit_dimension_unknown: 'VABP' (V3/F)
- unit_dimension_unknown: 'cUTI' (V3)
- dropped duplicate Q77 ('V3INFTYPN3 (cUTI)', value '89.8') — already have one for this compound
- unit_dimension_unknown: 'bacteremia' (V3)
- dropped duplicate Q77 ('V3INFTYPN4 (bacteremia)', value '44.7') — already have one for this compound
- unit_dimension_unknown: 'AP' (V3)
- dropped duplicate Q77 ('V3INFTYPN5 (AP)', value '13.2') — already have one for this compound
- dropped duplicate Q77 ('V3WTKG1', value '26.7') — already have one for this compound
- dropped unlinked row (NIL): 'Phase 2(n = 52)' — extend the ontology if this is a real PK parameter (source ['Cammarata_2025_table_2:row0:col1', 'Cammarata_2025_table_2:row0:col2', 'Cammarata_2025_table_2:row0:col3', 'Cammarata_2025_table_2:row0:col4', 'Cammarata_2025_table_2:row0:col5'])
- covariate effect for Q26 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLEASIAFL1' → mL/min (from the popPK convention: "Dialysate flow rate (Qd) is a rate of flow; the description text explicitly states 'Typical 500-800 mL/min'. While this ")
- implicit units: 'V1EASIAFL1' → L (from the popPK convention: 'V1 (or Vc) is the volume of distribution of the central compartment. In population PK studies for antibiotics like sulba')
- implicit units: 'V3INFTYPN1 (HABP)' → L (from the popPK convention: 'V3 is the volume of distribution of the second (peripheral) compartment. Standard units for peripheral volumes in popula')
- implicit units: 'V3INFTYPN2 (VABP)' → L (from the popPK convention: 'V3/F is the apparent volume of distribution of the second peripheral compartment. The unit is liters (L), consistent wit')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sulbactam
- gap-filled Q49 (kabs) from Abouelhassan_2024_2's review values (primary lacked it)

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.444 (8/18 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[bclcrnlt30]` |  | 11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cleasiafl1]` | 31.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clinftypn2]` |  | 36.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 8.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_clr_weight_power]` |  | 20.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q26_weight_power]` | 20.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1easiafl1]` | 49.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3inftypn2]` | 19.5 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulbactam–durlobactam | sulbactam/durlobactam | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T1:row3:col1', 'T1:row3:col2', 'T1:row3:col4', 'T1:row3:col5', 'T1:row3:col6', 'T1:row26:col1', 'T1:row26:col2', 'T1:row26:col4', 'T1:row26:col5', 'T1:row26:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T1:row6:col1', 'T1:row6:col2', 'T1:row6:col4', 'T1:row6:col5', 'T1:row6:col6', 'T1:row29:col1', 'T1:row29:col2', 'T1:row29:col4', 'T1:row29:col5', 'T1:row29:col6'] |
| C5_dimension_Q364 | pass | [length] ** 3 / [time] |  | ['T1:row9:col1', 'T1:row9:col2', 'T1:row9:col4', 'T1:row9:col5', 'T1:row9:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Abouelhassan_2024_2:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T1:row15:col1', 'T1:row15:col2', 'T1:row15:col4', 'T1:row15:col5', 'T1:row15:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T1:row5:col1', 'T1:row5:col2', 'T1:row5:col4', 'T1:row5:col5', 'T1:row5:col6', 'T1:row28:col1', 'T1:row28:col2', 'T1:row28:col4', 'T1:row28:col5', 'T1:row28:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T1:row7:col1', 'T1:row7:col2', 'T1:row7:col4', 'T1:row7:col5', 'T1:row7:col6', 'T1:row30:col1', 'T1:row30:col2', 'T1:row30:col4', 'T1:row30:col5', 'T1:row30:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T1:row38:col1', 'T1:row38:col2', 'T1:row38:col4', 'T1:row38:col5', 'T1:row38:col6'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['T1:row39:col1', 'T1:row39:col2', 'T1:row39:col4', 'T1:row39:col5', 'T1:row39:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14 L/h | ['T1:row3:col1', 'T1:row3:col2', 'T1:row3:col4', 'T1:row3:col5', 'T1:row3:col6', 'T1:row26:col1', 'T1:row26:col2', 'T1:row26:col4', 'T1:row26:col5', 'T1:row26:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 49.2 L | ['T1:row15:col1', 'T1:row15:col2', 'T1:row15:col4', 'T1:row15:col5', 'T1:row15:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.9 L | ['T1:row5:col1', 'T1:row5:col2', 'T1:row5:col4', 'T1:row5:col5', 'T1:row5:col6', 'T1:row28:col1', 'T1:row28:col2', 'T1:row28:col4', 'T1:row28:col5', 'T1:row28:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.29 L | ['T1:row7:col1', 'T1:row7:col2', 'T1:row7:col4', 'T1:row7:col5', 'T1:row7:col6', 'T1:row30:col1', 'T1:row30:col2', 'T1:row30:col4', 'T1:row30:col5', 'T1:row30:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=sulbactam) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 3C → PK_3C* | PK_3C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference_modelica.zip" download>Sulbactam_Cammarata2025_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference_fmi.zip" download>Sulbactam_Cammarata2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3C_enteral.fmu" download>PK_3C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference_matlab.zip" download>Sulbactam_Cammarata2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference_matlab_simbio.zip" download>Sulbactam_Cammarata2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference_sbml.zip" download>Sulbactam_Cammarata2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference_cellml.zip" download>Sulbactam_Cammarata2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2332 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001 | kg |
| input | model | `Cl` | 3.889e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001271 | m3/kg |
| input | model | `k12` | 0.0005899 | 1/s |
| input | model | `k21` | 0.0005651 | 1/s |
| input | model | `ka` | 0.0023 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Cammarata AP, Safir MC, Trang M, Larson KB, O'Donnell JP, Bhavnani SM et al. Population pharmacokinetic analyses for sulbactam-durlobactam using Phase 1, 2, and 3 data. Antimicrobial agents and chemotherapy 69(1):e0048524 (2025). [doi:10.1128/aac.00485-24](https://doi.org/10.1128/aac.00485-24)

**This record:** Pharmacolibrary v26.09, model `Sulbactam_Cammarata2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference>

```bibtex
@misc{pharmacolibrary_SulbactamCammarata2025reference,
  title  = {{Pharmacolibrary model Sulbactam_Cammarata2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference},
  note   = {Parameters from doi:10.1128/aac.00485-24},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1000 mg, single dose, first-order absorption (ka 8.28 /h, F 1). Doses in the paper: 1000, 1500 mg.

<dbs-fmusim paramsurl="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference/Sulbactam_Cammarata2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3C_enteral` · parameters `Sulbactam_Cammarata2025_reference_params.json` · controls `Sulbactam_Cammarata2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulbactam%5D%20Sulbactam_Cammarata2025_reference&body=Drug%3A%20sulbactam%0ARecord%3A%20Sulbactam_Cammarata2025_reference%0APaper%3A%20Cammarata_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:29 UTC</sub>
